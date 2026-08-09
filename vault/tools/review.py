"""Reference implementation of the machine review of a Grounded Vault.

Implements the machine-review contract of knowledge/operations.md § Check. The
work splits into three parts that are kept apart on purpose.

1. Pair cutting, deterministic. Every distillate statement is cut against its
   source location (document: the block with its heading path; publication: the
   verbatim quotation; data: the computation and its result), and every
   grounding anchor of an assertion is cut against the distillate statement it
   names. Anti-anchoring is structural here: a pair holds the location, the
   claim and nothing else, so the producing agent's reasoning, its Support
   prose and even the anchors themselves stay out of the prompt.
2. Prompt construction from the skeletons in operations.md, one prompt per pair.
3. Judging, pluggable. The default mode writes the prompts as a JSONL batch and
   reads verdicts back as JSONL, so any reviewer (another model family is
   recommended) can sit in between. `run` calls `claude -p` per pair instead.
   The verdict vocabulary is strict; anything else is a parse error.

Booking is conservative: checked.machine-review is set on a document only when
every one of its pairs came back *fully supports*. Deviating verdicts are
reported and nothing is reformulated automatically.

Usage:
    python tools/review.py stats <vault-root>
    python tools/review.py emit  <vault-root> --out prompts.jsonl
    python tools/review.py judge <vault-root> --verdicts verdicts.jsonl [--apply]
    python tools/review.py run   <vault-root> --model <model> [--apply]

Parsing conventions are imported from tools/validate.py rather than restated;
validation gates review, so a vault that reaches this script already conforms.
"""

from __future__ import annotations

import argparse
import datetime
import json
import re
import shutil
import subprocess
import sys
from dataclasses import dataclass, field
from pathlib import Path

from validate import (
    BLOCK_ID,
    COMPUTATION,
    WIKILINK,
    Doc,
    Report,
    _link_targets,
    _parse_doc,
    _statement_lines,
)

VERDICTS = (
    "fully supports",
    "partially supports",
    "overreaches",
    "contradicts",
    "not in the text",
)
PASSING_VERDICT = "fully supports"

SOURCE_PROMPT = """You are an adversarial reviewer. Below are a source passage and a statement
that claims to be supported by it. Your task is to refute the statement.
Judge only whether this passage supports this statement. Answer with exactly
one verdict: {vocabulary}. Then give one sentence of justification.

PASSAGE: {location}
STATEMENT: {claim}"""

ASSERTION_PROMPT = """You are an adversarial reviewer. Below are a distillate statement and an
assertion that claims to be supported by it. Your task is to refute the
assertion. Judge only whether this statement supports this assertion; whether
the assertion is true is out of scope. Answer with exactly one verdict:
{vocabulary}. Then give one sentence of justification, and where the verdict is
not *fully supports*, name the part of the assertion that the statement does not
carry.

STATEMENT: {location}
ASSERTION: {claim}"""

VERDICT_PREFIX = re.compile(r"^[^a-z]*(?:verdict\s*[:\-]\s*)?")
CHECKED_EMPTY = re.compile(r"^checked:[ \t]*\{\s*\}[ \t]*$", re.MULTILINE)
CHECKED_BLOCK = re.compile(r"^checked:[ \t]*$", re.MULTILINE)


@dataclass(frozen=True)
class Pair:
    """One reviewable pair: a location, the claim built on it, nothing else."""

    id: str
    kind: str  # source | assertion
    document: str  # the document under review, root-relative without extension
    anchor: str  # the anchor that ties claim to location, for the report only
    location: str
    claim: str

    @property
    def prompt(self) -> str:
        return build_prompt(self)

    def to_dict(self) -> dict[str, str]:
        return {
            "id": self.id,
            "kind": self.kind,
            "document": self.document,
            "anchor": self.anchor,
            "location": self.location,
            "claim": self.claim,
            "prompt": self.prompt,
        }


@dataclass(frozen=True)
class Deviation:
    pair_id: str
    document: str
    verdict: str


@dataclass(frozen=True)
class DocumentResult:
    document: str
    pairs: int
    booked: bool
    reason: str


@dataclass
class Outcome:
    documents: list[DocumentResult] = field(default_factory=list)
    deviations: list[Deviation] = field(default_factory=list)
    unjudged: list[str] = field(default_factory=list)
    problems: list[str] = field(default_factory=list)


def build_prompt(pair: Pair) -> str:
    template = SOURCE_PROMPT if pair.kind == "source" else ASSERTION_PROMPT
    return template.format(
        vocabulary=" | ".join(VERDICTS), location=pair.location, claim=pair.claim
    )


def parse_verdict(response: str) -> str:
    """The verdict vocabulary is closed; anything outside it is a parse error."""
    head = " ".join(response.lower().splitlines()[:1]).strip()
    head = VERDICT_PREFIX.sub("", " ".join(head.split()))
    for verdict in VERDICTS:
        if head.startswith(verdict):
            return verdict
    whole = " ".join(response.lower().split())
    found = [v for v in VERDICTS if v in whole]
    if len(found) == 1:
        return found[0]
    raise ValueError(f"no single verdict in response: {response.strip()[:80]!r}")


def _statement_text(line: str) -> str:
    """The bare claim of a statement bullet, stripped of its anchor and its own ID."""
    text = line.strip()
    text = text[2:] if text.startswith("- ") else text
    text = BLOCK_ID.sub("", WIKILINK.sub("", text).strip())
    return " ".join(text.split())


def _block_locations(doc: Doc) -> dict[str, str]:
    """Per block ID the passage text with the heading path it sits under."""
    stack: list[tuple[int, str]] = []
    paragraph: list[str] = []
    locations: dict[str, str] = {}
    for raw in doc.body.splitlines():
        line = raw.strip()
        if line.startswith("#"):
            level = len(line) - len(line.lstrip("#"))
            while stack and stack[-1][0] >= level:
                stack.pop()
            stack.append((level, line[level:].strip()))
            paragraph = []
            continue
        if not line:
            paragraph = []
            continue
        paragraph.append(line)
        if m := BLOCK_ID.search(line):
            text = BLOCK_ID.sub("", " ".join(paragraph).strip()).strip()
            path = " > ".join(title for _, title in stack)
            locations[m.group(1)] = f"{path}\n{text}" if path else text
            paragraph = []
    return locations


def _load_docs(root: Path) -> dict[str, Doc]:
    report = Report()
    docs: dict[str, Doc] = {}
    for folder in ("10_markdown", "20_distillates", "30_assertions"):
        for path in sorted((root / folder).rglob("*.md")):
            if doc := _parse_doc(path, root, report):
                docs[doc.rel] = doc
    return docs


def _source_pairs(
    doc: Doc,
    docs: dict[str, Doc],
    blocks: dict[str, dict[str, str]],
    problems: list[str],
) -> list[Pair]:
    source_type = doc.fm.get("source-type")
    pairs: list[Pair] = []
    for line, follow in _statement_lines(doc.body):
        m = BLOCK_ID.search(line)
        if not m:
            problems.append(f"{doc.rel}: statement without ID, skipped")
            continue
        sid = m.group(1)
        claim = _statement_text(line)
        anchor, location = "", ""
        if source_type == "document":
            anchored = [(t, b) for t, b in _link_targets(line) if b]
            if not anchored:
                problems.append(f"{doc.rel}#^{sid}: no block anchor, skipped")
                continue
            target, block = anchored[0]
            if target not in blocks or block not in blocks[target]:
                problems.append(
                    f"{doc.rel}#^{sid}: anchor {target}#^{block} does not resolve"
                )
                continue
            anchor, location = f"{target}#^{block}", blocks[target][block]
        elif source_type == "publication":
            quotes = [
                f.strip().lstrip(">").strip()
                for f in follow
                if f.strip().startswith(">")
            ]
            if not quotes:
                problems.append(f"{doc.rel}#^{sid}: no quotation, skipped")
                continue
            anchor = str(doc.fm.get("reference", ""))
            location = " ".join(quotes)
        elif source_type == "data":
            declared = [c for f in follow if (c := COMPUTATION.search(f))]
            if not declared:
                problems.append(f"{doc.rel}#^{sid}: no computation, skipped")
                continue
            anchor = declared[0].group(1)
            location = (
                f"computation: `{declared[0].group(1)}` → `{declared[0].group(2)}`"
            )
        else:
            problems.append(f"{doc.rel}: unknown source-type {source_type!r}, skipped")
            return []
        pairs.append(
            Pair(
                id=f"{doc.rel}#^{sid}",
                kind="source",
                document=doc.rel,
                anchor=anchor,
                location=location,
                claim=claim,
            )
        )
    return pairs


def _assertion_sentence(doc: Doc) -> str | None:
    for line in doc.body.splitlines():
        if line.startswith("# "):
            return line[2:].strip()
    return None


def _assertion_pairs(
    doc: Doc, statements: dict[str, str], problems: list[str]
) -> list[Pair]:
    claim = _assertion_sentence(doc)
    if not claim:
        problems.append(f"{doc.rel}: no assertion sentence (H1), skipped")
        return []
    pairs: list[Pair] = []
    for raw in doc.fm.get("grounding") or []:
        for target, block in _link_targets(str(raw)):
            key = f"{target}#^{block}" if block else target
            if key not in statements:
                problems.append(f"{doc.rel}: grounding {key} does not resolve, skipped")
                continue
            pairs.append(
                Pair(
                    id=f"{doc.rel}<-{key}",
                    kind="assertion",
                    document=doc.rel,
                    anchor=key,
                    location=statements[key],
                    claim=claim,
                )
            )
    return pairs


def cut_pairs(root: Path, problems: list[str] | None = None) -> list[Pair]:
    """All reviewable pairs of the vault, in document order."""
    problems = problems if problems is not None else []
    root = Path(root)
    docs = _load_docs(root)
    blocks = {
        rel: _block_locations(doc)
        for rel, doc in docs.items()
        if doc.fm.get("type") == "representation"
    }
    pairs: list[Pair] = []
    statements: dict[str, str] = {}
    for rel in sorted(docs):
        doc = docs[rel]
        if doc.fm.get("type") != "distillate":
            continue
        for pair in _source_pairs(doc, docs, blocks, problems):
            pairs.append(pair)
            statements[pair.id] = pair.claim
    for rel in sorted(docs):
        doc = docs[rel]
        if doc.fm.get("type") == "assertion":
            pairs += _assertion_pairs(doc, statements, problems)
    return pairs


def set_checked_date(text: str, check: str, date: str) -> str:
    """Write one entry into the `checked` map of a frontmatter, leaving the rest alone."""
    end = text.find("\n---", 4) if text.startswith("---\n") else -1
    if end < 0:
        raise ValueError("no frontmatter")
    head, tail = text[:end], text[end:]
    entry = re.compile(rf"^([ \t]+){re.escape(check)}:[ \t]*\S.*$", re.MULTILINE)
    if m := entry.search(head):
        return f"{head[: m.start()]}{m.group(1)}{check}: {date}{head[m.end() :]}{tail}"
    if m := CHECKED_EMPTY.search(head):
        return f"{head[: m.start()]}checked:\n  {check}: {date}{head[m.end() :]}{tail}"
    if m := CHECKED_BLOCK.search(head):
        return f"{head[: m.end()]}\n  {check}: {date}{head[m.end() :]}{tail}"
    raise ValueError(f"no checked field to write {check} into")


def _write_atomic(path: Path, text: str, newline: str) -> None:
    """Replace the file in one step, keeping the line endings it had on disk."""
    tmp = path.with_suffix(path.suffix + ".tmp")
    tmp.write_text(text, encoding="utf-8", newline=newline)
    tmp.replace(path)


def book_results(
    root: Path,
    pairs: list[Pair],
    verdicts: dict[str, str],
    date: str,
    apply: bool = False,
) -> Outcome:
    """Set checked.machine-review per document, only where every pair passed."""
    root = Path(root)
    outcome = Outcome()
    by_document: dict[str, list[Pair]] = {}
    for pair in pairs:
        by_document.setdefault(pair.document, []).append(pair)

    for document, group in by_document.items():
        missing = [p.id for p in group if p.id not in verdicts]
        outcome.unjudged += missing
        deviating = [
            Deviation(p.id, document, verdicts[p.id])
            for p in group
            if p.id in verdicts and verdicts[p.id] != PASSING_VERDICT
        ]
        outcome.deviations += deviating
        if missing:
            reason = f"{len(missing)} pair(s) unjudged"
        elif deviating:
            reason = f"{len(deviating)} verdict(s) below {PASSING_VERDICT}"
        else:
            reason = "all pairs fully supports"
        booked = not missing and not deviating
        if booked and apply:
            path = root / f"{document}.md"
            try:
                newline = "\r\n" if b"\r\n" in path.read_bytes() else "\n"
                text = set_checked_date(
                    path.read_text(encoding="utf-8"), "machine-review", date
                )
            except (ValueError, OSError) as exc:
                outcome.problems.append(f"{document}: not booked: {exc}")
                booked, reason = False, str(exc)
            else:
                _write_atomic(path, text, newline)
        outcome.documents.append(DocumentResult(document, len(group), booked, reason))
    return outcome


def read_verdicts(path: Path, problems: list[str]) -> dict[str, str]:
    """Read a JSONL of judgements; a record carries `verdict` or a raw `response`."""
    verdicts: dict[str, str] = {}
    for number, line in enumerate(
        Path(path).read_text(encoding="utf-8").splitlines(), 1
    ):
        if not line.strip():
            continue
        try:
            record = json.loads(line)
            pair_id = record["id"]
            verdicts[pair_id] = parse_verdict(
                record.get("verdict") or record["response"]
            )
        except (json.JSONDecodeError, KeyError, TypeError, ValueError) as exc:
            problems.append(f"{path}:{number}: {exc}")
    return verdicts


def run_claude(
    pairs: list[Pair], model: str | None, problems: list[str], timeout: int = 300
) -> list[dict[str, str]]:
    """Judge each pair with `claude -p` as a subprocess, one call per pair."""
    executable = shutil.which("claude")
    if not executable:
        raise RuntimeError("claude executable not found on PATH")
    records: list[dict[str, str]] = []
    for pair in pairs:
        command = [executable, "-p", pair.prompt]
        if model:
            command += ["--model", model]
        try:
            result = subprocess.run(
                command, capture_output=True, text=True, timeout=timeout, check=False
            )
        except subprocess.TimeoutExpired:
            problems.append(f"{pair.id}: judging timed out after {timeout}s")
            continue
        if result.returncode != 0:
            problems.append(f"{pair.id}: claude failed: {result.stderr.strip()[:120]}")
            continue
        record = {"id": pair.id, "response": result.stdout.strip()}
        if model:
            record["model"] = model
        try:
            record["verdict"] = parse_verdict(result.stdout)
        except ValueError as exc:
            problems.append(f"{pair.id}: {exc}")
        records.append(record)
        print(f"OK {pair.id}: {record.get('verdict', 'unparsed')}")
    return records


def _select(pairs: list[Pair], scope: str, prefix: str | None) -> list[Pair]:
    chosen = [p for p in pairs if scope == "all" or p.kind == scope]
    return [p for p in chosen if not prefix or p.document.startswith(prefix)]


def _write_jsonl(path: Path | None, records: list[dict[str, str]]) -> None:
    lines = [json.dumps(record, ensure_ascii=False) for record in records]
    if path is None:
        print("\n".join(lines))
        return
    Path(path).write_text("\n".join(lines) + "\n", encoding="utf-8")
    print(f"OK {len(records)} record(s) written to {path}")


def _report(outcome: Outcome, pairs: list[Pair]) -> int:
    for problem in outcome.problems:
        print(f"WARN {problem}", file=sys.stderr)
    for deviation in outcome.deviations:
        print(
            f"FINDING {deviation.verdict}: {deviation.pair_id}",
            file=sys.stderr,
        )
    for pair_id in outcome.unjudged:
        print(f"OPEN no verdict: {pair_id}", file=sys.stderr)
    booked = [r for r in outcome.documents if r.booked]
    print(
        f"{len(pairs)} pair(s), {len(booked)} of {len(outcome.documents)} document(s) clean, "
        f"{len(outcome.deviations)} deviating verdict(s), {len(outcome.unjudged)} unjudged"
    )
    for result in outcome.documents:
        mark = " " if result.booked else "*"
        print(f"{mark} {result.document}: {result.pairs} pair(s), {result.reason}")
    return 1 if outcome.deviations or outcome.unjudged or outcome.problems else 0


def main() -> None:
    if sys.platform == "win32":
        sys.stdout.reconfigure(encoding="utf-8")
        sys.stderr.reconfigure(encoding="utf-8")

    common = argparse.ArgumentParser(add_help=False)
    common.add_argument("root", type=Path, help="vault root directory")
    common.add_argument(
        "--scope",
        choices=("all", "source", "assertion"),
        default="all",
        help="which pair kind to review",
    )
    common.add_argument(
        "--path", help="restrict to documents whose path starts with this prefix"
    )
    booking = argparse.ArgumentParser(add_help=False)
    booking.add_argument(
        "--apply",
        action="store_true",
        help="write checked.machine-review; default is a dry run",
    )
    booking.add_argument(
        "--date",
        default=datetime.date.today().isoformat(),
        help="date recorded in checked.machine-review",
    )

    parser = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    sub = parser.add_subparsers(dest="command", required=True)
    sub.add_parser("stats", parents=[common], help="count the pairs without judging")
    emit = sub.add_parser(
        "emit", parents=[common], help="write the prompts as a JSONL batch"
    )
    emit.add_argument("--out", type=Path, help="output file; default is stdout")
    judge = sub.add_parser(
        "judge",
        parents=[common, booking],
        help="read verdicts back and book the result",
    )
    judge.add_argument(
        "--verdicts", type=Path, required=True, help="JSONL of judgements"
    )
    run = sub.add_parser(
        "run",
        parents=[common, booking],
        help="judge with `claude -p`, one call per pair",
    )
    run.add_argument("--model", help="model passed to claude -p")
    run.add_argument("--out", type=Path, help="write the judgements as JSONL as well")
    args = parser.parse_args()

    root = args.root.resolve()
    problems: list[str] = []
    pairs = _select(cut_pairs(root, problems), args.scope, args.path)

    if args.command == "stats":
        kinds = {
            kind: sum(p.kind == kind for p in pairs) for kind in ("source", "assertion")
        }
        documents = {p.document for p in pairs}
        print(f"{len(pairs)} pair(s) over {len(documents)} document(s): {kinds}")
    elif args.command == "emit":
        _write_jsonl(args.out, [p.to_dict() for p in pairs])
    elif args.command == "judge":
        verdicts = read_verdicts(args.verdicts, problems)
        outcome = book_results(root, pairs, verdicts, args.date, apply=args.apply)
        outcome.problems = problems + outcome.problems
        sys.exit(_report(outcome, pairs))
    elif args.command == "run":
        records = run_claude(pairs, args.model, problems)
        if args.out:
            _write_jsonl(args.out, records)
        verdicts = {r["id"]: r["verdict"] for r in records if "verdict" in r}
        outcome = book_results(root, pairs, verdicts, args.date, apply=args.apply)
        outcome.problems = problems + outcome.problems
        sys.exit(_report(outcome, pairs))

    for problem in problems:
        print(f"WARN {problem}", file=sys.stderr)
    sys.exit(1 if problems else 0)


if __name__ == "__main__":
    main()
