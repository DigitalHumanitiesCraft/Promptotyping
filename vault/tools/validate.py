"""Deterministic validation of a Grounded Vault against its schema.

Implements the validation contract from knowledge/operations.md: frontmatter
conformance per document type, anchor resolution, statement IDs, quotation
recording, computation declarations, MOC reachability, bidirectional contested
links, chapter mirror and footnote keywords, and status discipline. The rules
themselves are defined in knowledge/schema.md; this script only enforces them.

Usage:
    python tools/validate.py <vault-root> [--run-computations]

Exit code 0 when no errors were found; warnings alone do not fail the run.
"""

from __future__ import annotations

import argparse
import json
import re
import subprocess
import sys
from dataclasses import dataclass, field
from pathlib import Path

import yaml

CONTENT_FOLDERS = (
    "00_representation",
    "10_distillates",
    "20_claims",
    "30_deliverable",
    "glossary",
)

TYPE_FOLDER = {
    "representation": "00_representation",
    "distillate": "10_distillates",
    "claim": "20_claims",
    "moc": "20_claims",
    "chapter": "30_deliverable",
    "glossary": "glossary",
}

SOURCE_TYPES = frozenset({"document", "publication", "data"})
CHANNELS = frozenset({"handover", "collection", "import", "deep-research"})
STATUS_VOCAB = {
    "distillate": frozenset({"grounded", "validated", "verified", "superseded"}),
    "claim": frozenset({"grounded", "validated", "verified", "contested"}),
    "chapter": frozenset({"grounded", "validated", "verified"}),
}
REQUIRED_FIELDS = {
    "representation": (
        "type",
        "source-type",
        "channel",
        "metadata",
        "created",
        "updated",
    ),
    "distillate": (
        "type",
        "source-type",
        "topics",
        "status",
        "checked",
        "created",
        "updated",
    ),
    "claim": ("type", "topics", "status", "checked", "grounding", "created", "updated"),
    "moc": ("type", "topic", "created", "updated"),
    "chapter": ("type", "status", "checked", "claims", "posits", "created", "updated"),
    "glossary": ("type", "term", "created", "updated"),
}

WIKILINK = re.compile(r"\[\[([^\]#|]+?)(?:#\^([A-Za-z0-9-]+))?(?:\|[^\]]*)?\]\]")
BLOCK_ID = re.compile(r"\^([A-Za-z0-9-]+)\s*$")
FOOTNOTE_DEF = re.compile(r"^\[\^([A-Za-z0-9]+)\]:\s*(.*)$")
FOOTNOTE_REF = re.compile(r"\[\^([A-Za-z0-9]+)\]")
COMPUTATION = re.compile(r"computation:\s*`([^`]+)`\s*(?:→|->)\s*`([^`]+)`")


@dataclass
class Doc:
    path: Path
    rel: str  # root-relative path without extension, forward slashes
    fm: dict
    body: str
    blocks: set[str]


@dataclass
class Report:
    errors: list[tuple[str, str, str]] = field(default_factory=list)
    warnings: list[tuple[str, str, str]] = field(default_factory=list)

    def error(self, code: str, rel: str, message: str) -> None:
        self.errors.append((code, rel, message))

    def warn(self, code: str, rel: str, message: str) -> None:
        self.warnings.append((code, rel, message))

    def codes(self) -> set[str]:
        return {code for code, _, _ in self.errors}


def _parse_doc(path: Path, root: Path, report: Report) -> Doc | None:
    rel = path.relative_to(root).with_suffix("").as_posix()
    text = path.read_text(encoding="utf-8")
    if not text.startswith("---\n"):
        report.error("E-FRONTMATTER", rel, "missing frontmatter")
        return None
    end = text.find("\n---", 4)
    if end < 0:
        report.error("E-FRONTMATTER", rel, "unterminated frontmatter")
        return None
    try:
        fm = yaml.safe_load(text[4:end]) or {}
    except yaml.YAMLError as exc:
        report.error("E-FRONTMATTER", rel, f"frontmatter is not valid YAML: {exc}")
        return None
    body = text[end + 4 :]
    blocks = {m.group(1) for line in body.splitlines() if (m := BLOCK_ID.search(line))}
    return Doc(path=path, rel=rel, fm=fm, body=body, blocks=blocks)


def _load_reference_ids(root: Path) -> set[str]:
    ids: set[str] = set()
    refdir = root / "references"
    if not refdir.is_dir():
        return ids
    for path in refdir.glob("*.json"):
        try:
            records = json.loads(path.read_text(encoding="utf-8"))
        except json.JSONDecodeError:
            continue  # reported implicitly when a reference does not resolve
        for record in records if isinstance(records, list) else []:
            if isinstance(record, dict) and "id" in record:
                ids.add(str(record["id"]))
    return ids


def _link_targets(text: str) -> list[tuple[str, str | None]]:
    return [(m.group(1).strip(), m.group(2)) for m in WIKILINK.finditer(text)]


def _check_frontmatter(doc: Doc, report: Report) -> None:
    doctype = doc.fm.get("type")
    if doctype not in REQUIRED_FIELDS:
        report.error("E-FRONTMATTER", doc.rel, f"unknown or missing type: {doctype!r}")
        return
    for key in REQUIRED_FIELDS[doctype]:
        if key not in doc.fm:
            report.error("E-FRONTMATTER", doc.rel, f"missing required field: {key}")
    if not doc.rel.startswith(TYPE_FOLDER[doctype]):
        report.error(
            "E-FRONTMATTER", doc.rel, f"type {doctype} does not belong in this folder"
        )
    if (
        doctype in STATUS_VOCAB
        and "status" in doc.fm
        and doc.fm["status"] not in STATUS_VOCAB[doctype]
    ):
        report.error(
            "E-FRONTMATTER", doc.rel, f"illegal status value: {doc.fm['status']!r}"
        )
    if "source-type" in doc.fm and doc.fm["source-type"] not in SOURCE_TYPES:
        report.error(
            "E-FRONTMATTER", doc.rel, f"illegal source-type: {doc.fm['source-type']!r}"
        )
    if doctype == "representation" and doc.fm.get("channel") not in CHANNELS:
        report.error(
            "E-FRONTMATTER", doc.rel, f"illegal channel: {doc.fm.get('channel')!r}"
        )
    if doctype == "distillate" and doc.fm.get("source-type") == "publication":
        if not doc.fm.get("reference"):
            report.error(
                "E-FRONTMATTER", doc.rel, "publication distillate needs a reference id"
            )
    elif doctype == "distillate" and not doc.fm.get("representation"):
        report.error("E-FRONTMATTER", doc.rel, "distillate needs a representation link")
    if doctype == "representation" and not (doc.fm.get("source") or doc.fm.get("data")):
        report.error(
            "E-FRONTMATTER", doc.rel, "representation needs a source or data field"
        )


def _check_status_discipline(doc: Doc, report: Report) -> None:
    status = doc.fm.get("status")
    checked = doc.fm.get("checked") or {}
    if not isinstance(checked, dict):
        report.error("E-STATUS", doc.rel, "checked must be a map of check name to date")
        return
    needed: tuple[str, ...] = ()
    if status == "validated":
        needed = ("validation", "machine-review")
    elif status == "verified":
        needed = ("validation", "machine-review", "verification")
    for check in needed:
        if check not in checked:
            report.error(
                "E-STATUS", doc.rel, f"status {status} without checked.{check}"
            )


def _resolve_anchor(
    target: str,
    block: str | None,
    docs: dict[str, Doc],
    root: Path,
    doc: Doc,
    report: Report,
) -> None:
    if target.startswith("_sources/"):
        return  # originals are local-only and not resolvable on every clone
    if target not in docs:
        if not (root / f"{target}.md").exists() and not (root / target).exists():
            report.error("E-ANCHOR", doc.rel, f"link target does not exist: {target}")
        return
    if block is not None and block not in docs[target].blocks:
        report.error("E-ANCHOR", doc.rel, f"block ^{block} not found in {target}")


def _statement_lines(body: str) -> list[tuple[str, list[str]]]:
    """Top-level bullets of the Core statements section, each with its indented follow-up lines."""
    lines = body.splitlines()
    statements: list[tuple[str, list[str]]] = []
    in_section = False
    for line in lines:
        if line.startswith("## "):
            in_section = line.strip().lower() == "## core statements"
            continue
        if not in_section:
            continue
        if line.startswith("- "):
            statements.append((line, []))
        elif line.startswith((" ", "\t")) and statements:
            statements[-1][1].append(line)
    return statements


def _check_distillate(
    doc: Doc, docs: dict[str, Doc], reference_ids: set[str], root: Path, report: Report
) -> None:
    source_type = doc.fm.get("source-type")
    statements = _statement_lines(doc.body)
    if not statements:
        report.error("E-STATEMENT", doc.rel, "no core statements found")
    if source_type == "publication":
        if doc.fm.get("reference") and str(doc.fm["reference"]) not in reference_ids:
            report.error(
                "E-ANCHOR",
                doc.rel,
                f"reference id not in references/: {doc.fm['reference']}",
            )
        if "quote" not in (doc.fm.get("checked") or {}):
            report.error(
                "E-QUOTE", doc.rel, "quotation check not recorded (checked.quote)"
            )
    for line, follow in statements:
        if not BLOCK_ID.search(line):
            report.error(
                "E-STATEMENT",
                doc.rel,
                f"core statement without statement ID: {line.strip()[:60]}",
            )
        if source_type == "document":
            links = _link_targets(line)
            anchored = [t for t in links if t[1] is not None]
            if not anchored:
                report.error(
                    "E-STATEMENT",
                    doc.rel,
                    f"core statement without block anchor: {line.strip()[:60]}",
                )
        elif source_type == "publication":
            if not any(
                f.lstrip().startswith(">") and '"' in f and "(" in f for f in follow
            ):
                report.error(
                    "E-STATEMENT",
                    doc.rel,
                    f"core statement without quotation: {line.strip()[:60]}",
                )
        elif source_type == "data":
            declared = [m for f in follow if (m := COMPUTATION.search(f))]
            if not declared:
                report.error(
                    "E-STATEMENT",
                    doc.rel,
                    f"core statement without computation: {line.strip()[:60]}",
                )
            for m in declared:
                _check_computation(m.group(1), m.group(2), root, doc, report)


def _check_computation(
    command: str, stated: str, root: Path, doc: Doc, report: Report
) -> None:
    scripts = [part for part in command.split() if part.endswith(".py")]
    if not scripts:
        report.error(
            "E-COMPUTATION", doc.rel, f"no script named in computation: {command}"
        )
        return
    script = root / scripts[0]
    if not script.exists():
        report.error(
            "E-COMPUTATION", doc.rel, f"computation script missing: {scripts[0]}"
        )
        return
    if _RUN_COMPUTATIONS:
        result = subprocess.run(
            [sys.executable, str(script)],
            cwd=root,
            capture_output=True,
            text=True,
            timeout=120,
            check=False,
        )
        if result.returncode != 0:
            report.error(
                "E-COMPUTATION",
                doc.rel,
                f"computation failed: {scripts[0]}: {result.stderr.strip()[:120]}",
            )
        elif result.stdout.strip() != stated:
            report.error(
                "E-COMPUTATION",
                doc.rel,
                f"stated result {stated!r} but computation yields {result.stdout.strip()!r}",
            )


def _check_topics(doc: Doc, topic_names: set[str], report: Report) -> None:
    for raw in doc.fm.get("topics") or []:
        topic = str(raw).strip("[] ")
        if topic not in topic_names:
            report.error("E-TOPIC", doc.rel, f"topic outside the backbone: {topic}")


def _check_claim(doc: Doc, docs: dict[str, Doc], root: Path, report: Report) -> None:
    for raw in doc.fm.get("grounding") or []:
        for target, block in _link_targets(str(raw)):
            if block is None:
                report.error(
                    "E-ANCHOR", doc.rel, f"grounding without statement anchor: {target}"
                )
            _resolve_anchor(target, block, docs, root, doc, report)
    contested = [
        t
        for raw in doc.fm.get("contested-with") or []
        for t, _ in _link_targets(str(raw))
    ]
    if doc.fm.get("status") == "contested" and not contested:
        report.error(
            "E-CONTESTED", doc.rel, "contested claim without contested-with links"
        )
    for target in contested:
        other = docs.get(target)
        if other is None:
            report.error(
                "E-CONTESTED", doc.rel, f"contested counterpart missing: {target}"
            )
            continue
        back = [
            t
            for raw in other.fm.get("contested-with") or []
            for t, _ in _link_targets(str(raw))
        ]
        if doc.rel not in back:
            report.error(
                "E-CONTESTED",
                doc.rel,
                f"one-sided contested relation: {target} does not link back",
            )


def _check_chapter(doc: Doc, docs: dict[str, Doc], root: Path, report: Report) -> None:
    defs: dict[str, str] = {}
    body_lines = []
    for line in doc.body.splitlines():
        if m := FOOTNOTE_DEF.match(line):
            defs[m.group(1)] = m.group(2)
        elif not line.startswith((" ", "\t")) or not defs:
            body_lines.append(line)
    refs = {m.group(1) for line in body_lines for m in FOOTNOTE_REF.finditer(line)}
    for ref in sorted(refs - set(defs)):
        report.error("E-FOOTNOTE", doc.rel, f"footnote [^{ref}] used but never defined")
    for unused in sorted(set(defs) - refs):
        report.error(
            "E-FOOTNOTE", doc.rel, f"footnote [^{unused}] defined but never used"
        )

    grounded_claims: set[str] = set()
    posit_count = 0
    for key, text in defs.items():
        if text.startswith("Grounded in"):
            targets = [t for t, _ in _link_targets(text)]
            if not targets:
                report.error(
                    "E-FOOTNOTE", doc.rel, f"footnote [^{key}] grounds in no claim"
                )
            for target in targets:
                grounded_claims.add(target)
                _resolve_anchor(target, None, docs, root, doc, report)
        elif text.startswith("Posit:"):
            posit_count += 1
        else:
            report.error(
                "E-FOOTNOTE",
                doc.rel,
                f"footnote [^{key}] starts with neither 'Grounded in' nor 'Posit:'",
            )

    mirror = {
        t for raw in doc.fm.get("claims") or [] for t, _ in _link_targets(str(raw))
    }
    if mirror != grounded_claims:
        report.error(
            "E-MIRROR",
            doc.rel,
            f"frontmatter claims {sorted(mirror)} != footnote claims {sorted(grounded_claims)}",
        )
    if doc.fm.get("posits") != posit_count:
        report.error(
            "E-MIRROR",
            doc.rel,
            f"frontmatter posits {doc.fm.get('posits')} != {posit_count} posit footnotes",
        )

    paragraph = []
    for line in [*body_lines, ""]:
        if line.strip():
            paragraph.append(line)
            continue
        text = " ".join(paragraph)
        if paragraph and not text.startswith("#") and not FOOTNOTE_REF.search(text):
            report.warn(
                "W-UNANCHORED",
                doc.rel,
                f"paragraph without any footnote marker: {text[:60]}",
            )
        paragraph = []


def _check_moc_reachability(docs: dict[str, Doc], report: Report) -> None:
    mocs = [d for d in docs.values() if d.fm.get("type") == "moc"]
    listed = {target for moc in mocs for target, _ in _link_targets(moc.body)}
    for doc in docs.values():
        if doc.fm.get("type") == "claim" and doc.rel not in listed:
            report.error("E-ORPHAN", doc.rel, "claim reachable from no topic map")


_RUN_COMPUTATIONS = False


def validate(root: Path, run_computations: bool = False) -> Report:
    global _RUN_COMPUTATIONS
    _RUN_COMPUTATIONS = run_computations
    report = Report()
    docs: dict[str, Doc] = {}
    for folder in CONTENT_FOLDERS:
        for path in sorted((root / folder).rglob("*.md")):
            if doc := _parse_doc(path, root, report):
                docs[doc.rel] = doc
    reference_ids = _load_reference_ids(root)
    topic_names = {
        str(d.fm.get("topic")) for d in docs.values() if d.fm.get("type") == "moc"
    }

    for doc in docs.values():
        _check_frontmatter(doc, report)
        doctype = doc.fm.get("type")
        if doctype in ("distillate", "claim", "chapter"):
            _check_status_discipline(doc, report)
        if doctype in ("distillate", "claim"):
            _check_topics(doc, topic_names, report)
        if doctype == "distillate":
            _check_distillate(doc, docs, reference_ids, root, report)
        elif doctype == "claim":
            _check_claim(doc, docs, root, report)
        elif doctype == "chapter":
            _check_chapter(doc, docs, root, report)
        for target, block in _link_targets(doc.body):
            if block is not None or any(target.startswith(f) for f in CONTENT_FOLDERS):
                _resolve_anchor(target, block, docs, root, doc, report)
    _check_moc_reachability(docs, report)
    return report


def main() -> None:
    if sys.platform == "win32":
        sys.stdout.reconfigure(encoding="utf-8")
        sys.stderr.reconfigure(encoding="utf-8")
    parser = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    parser.add_argument("root", type=Path, help="vault root directory")
    parser.add_argument(
        "--run-computations",
        action="store_true",
        help="re-run data anchors and compare results",
    )
    args = parser.parse_args()

    report = validate(args.root.resolve(), run_computations=args.run_computations)
    for code, rel, message in report.errors:
        print(f"ERROR {code} {rel}: {message}", file=sys.stderr)
    for code, rel, message in report.warnings:
        print(f"WARN  {code} {rel}: {message}", file=sys.stderr)
    print(f"{len(report.errors)} error(s), {len(report.warnings)} warning(s)")
    if not report.errors:
        print("OK vault conforms to its schema")
    sys.exit(1 if report.errors else 0)


if __name__ == "__main__":
    main()
