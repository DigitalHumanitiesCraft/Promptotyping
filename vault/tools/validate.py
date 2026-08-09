"""Deterministic validation of a Grounded Vault against its schema.

Implements the validation contract from knowledge/operations.md: frontmatter
conformance per document type, anchor resolution, layer direction of anchors,
uniqueness of block and statement IDs, statement IDs, quotation recording,
computation declarations, MOC reachability, bidirectional contested links,
chapter mirror and footnote keywords, status discipline, the inventory
obligation of representations and distillates, a production chain that holds no
document at all, and checks older than the content they judge. The rules are defined
in knowledge/schema.md; this script only enforces them.

Warnings report that a check found nothing to check rather than passing
silently. An instance declares the warnings it expects under `expected-warnings`
in the frontmatter of knowledge/specification.md; every other warning is marked
unexpected, and a declaration that no longer fires is reported in turn.

Usage:
    python tools/validate.py <vault-root> [--no-computations]

Data anchors are re-run and compared by default; --no-computations skips that.

Exit code 0 when no errors were found; warnings alone do not fail the run.
"""

from __future__ import annotations

import argparse
import json
import re
import subprocess
import sys
from dataclasses import dataclass, field
from datetime import date
from pathlib import Path

import yaml

CONTENT_FOLDERS = (
    "10_markdown",
    "20_distillates",
    "30_assertions",
    "40_output",
    "glossary",
)

CHAIN_FOLDERS = ("10_markdown", "20_distillates", "30_assertions", "40_output")

TYPE_FOLDER = {
    "representation": "10_markdown",
    "distillate": "20_distillates",
    "assertion": "30_assertions",
    "moc": "30_assertions",
    "chapter": "40_output",
    "glossary": "glossary",
}

# Instance declaration: the cited publications are inventoried in the
# register of paper sources, the project documents in the state register.
INVENTORY_REGISTERS = ("knowledge/state.md", "knowledge/register-paper-sources.md")
INVENTORIED_FOLDERS = ("10_markdown", "20_distillates")
SPECIFICATION = "knowledge/specification.md"

REPRESENTATION_LAYER = "10_markdown/"
DISTILLATE_LAYER = "20_distillates/"
ASSERTION_LAYER = "30_assertions/"
FRONTMATTER_LINK_FIELDS = (
    "grounding",
    "assertions",
    "representation",
    "superseded-by",
    "contested-with",
)
PLACEHOLDER_SCAN_FILES = ("CLAUDE.md", "HOME.md")

SOURCE_TYPES = frozenset({"document", "publication", "data"})
CHANNELS = frozenset({"handover", "collection", "import", "deep-research"})
STATUS_VOCAB = {
    "distillate": frozenset({"grounded", "validated", "verified", "superseded"}),
    "assertion": frozenset({"grounded", "validated", "verified", "contested"}),
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
    "assertion": (
        "type",
        "topics",
        "status",
        "checked",
        "grounding",
        "created",
        "updated",
    ),
    "moc": ("type", "topic", "created", "updated"),
    "chapter": (
        "type",
        "status",
        "checked",
        "assertions",
        "posits",
        "created",
        "updated",
    ),
    "glossary": ("type", "term", "created", "updated"),
}

WIKILINK = re.compile(r"\[\[([^\]#|]+?)(?:#\^([A-Za-z0-9-]+))?(?:\|[^\]]*)?\]\]")
BLOCK_ID = re.compile(r"\^([A-Za-z0-9-]+)\s*$")
FOOTNOTE_DEF = re.compile(r"^\[\^([A-Za-z0-9]+)\]:\s*(.*)$")
FOOTNOTE_REF = re.compile(r"\[\^([A-Za-z0-9]+)\]")
COMPUTATION = re.compile(r"computation:\s*`([^`]+)`\s*(?:→|->)\s*`([^`]+)`")
PLACEHOLDER = re.compile(r"\{\{\s*([^{}]+?)\s*\}\}")


@dataclass
class Doc:
    path: Path
    rel: str  # root-relative path without extension, forward slashes
    fm: dict
    body: str
    blocks: list[str]  # in document order, duplicates kept for the uniqueness check


@dataclass
class Report:
    errors: list[tuple[str, str, str]] = field(default_factory=list)
    warnings: list[tuple[str, str, str]] = field(default_factory=list)
    expected_warnings: frozenset[str] = frozenset()

    def error(self, code: str, rel: str, message: str) -> None:
        self.errors.append((code, rel, message))

    def warn(self, code: str, rel: str, message: str) -> None:
        self.warnings.append((code, rel, message))

    def codes(self) -> set[str]:
        return {code for code, _, _ in self.errors}

    def unexpected_warnings(self) -> list[tuple[str, str, str]]:
        return [w for w in self.warnings if w[0] not in self.expected_warnings]


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
    blocks = [m.group(1) for line in body.splitlines() if (m := BLOCK_ID.search(line))]
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


def _iso_date(value: object) -> date | None:
    try:
        return date.fromisoformat(str(value).strip()[:10])
    except ValueError:
        return None


def _check_staleness(doc: Doc, report: Report) -> None:
    """Checks older than the content they judge no longer cover the document.

    A document that carries no check date at all is in the state the ladder
    starts from and is not stale.
    """
    checked = doc.fm.get("checked")
    if not isinstance(checked, dict):
        return
    dates = [d for value in checked.values() if (d := _iso_date(value))]
    updated = _iso_date(doc.fm.get("updated"))
    if not dates or updated is None:
        return
    latest = max(dates)
    if updated > latest:
        report.warn(
            "W-STALE",
            doc.rel,
            f"updated {updated.isoformat()} is newer than the latest check {latest.isoformat()}",
        )


def _resolve_anchor(
    target: str,
    block: str | None,
    docs: dict[str, Doc],
    root: Path,
    doc: Doc,
    report: Report,
) -> None:
    if target.startswith("00_sources/"):
        return  # originals are local-only and not resolvable on every clone
    if target not in docs:
        if not (root / f"{target}.md").exists() and not (root / target).exists():
            report.error("E-ANCHOR", doc.rel, f"link target does not exist: {target}")
        return
    if block is not None and block not in docs[target].blocks:
        report.error("E-ANCHOR", doc.rel, f"block ^{block} not found in {target}")


def _check_layer(
    target: str, expected: str, what: str, doc: Doc, report: Report
) -> None:
    """An anchor may only point one layer down, into the layer that grounds it."""
    if target.startswith("00_sources/"):
        return
    if not target.startswith(expected):
        report.error(
            "E-LAYER",
            doc.rel,
            f"{what} must anchor in {expected}, but points to {target}",
        )


def _frontmatter_links(doc: Doc) -> list[tuple[str, str, str | None]]:
    """Link targets of the frontmatter fields that name other documents."""
    found: list[tuple[str, str, str | None]] = []
    for name in FRONTMATTER_LINK_FIELDS:
        raw = doc.fm.get(name)
        if not raw:
            continue
        values = raw if isinstance(raw, list) else [raw]
        for value in values:
            found += [(name, t, b) for t, b in _link_targets(str(value))]
    return found


def _check_frontmatter_links(
    doc: Doc, docs: dict[str, Doc], root: Path, report: Report
) -> None:
    for name, target, block in _frontmatter_links(doc):
        _resolve_anchor(target, block, docs, root, doc, report)
        if name == "representation":
            _check_layer(target, REPRESENTATION_LAYER, "representation", doc, report)


def _check_duplicate_ids(doc: Doc, report: Report) -> None:
    doctype = doc.fm.get("type")
    if doctype == "representation":
        ids, label = doc.blocks, "block ID"
    elif doctype == "distillate":
        ids = [
            m.group(1)
            for line, _ in _statement_lines(doc.body)
            if (m := BLOCK_ID.search(line))
        ]
        label = "statement ID"
    else:
        return
    for dup in sorted({i for i in ids if ids.count(i) > 1}):
        report.error("E-DUPLICATE", doc.rel, f"duplicate {label}: ^{dup}")


def _check_placeholders(root: Path, report: Report) -> None:
    """Template tokens that survived instantiation, in content and in the layers around it."""
    paths = [
        p for folder in CONTENT_FOLDERS for p in sorted((root / folder).rglob("*.md"))
    ]
    paths += sorted((root / "knowledge").glob("*.md"))
    paths += [root / name for name in PLACEHOLDER_SCAN_FILES]
    for path in paths:
        if not path.is_file():
            continue
        seen: set[str] = set()
        for m in PLACEHOLDER.finditer(path.read_text(encoding="utf-8")):
            name = m.group(1)
            if name in seen:
                continue
            seen.add(name)
            report.warn(
                "W-PLACEHOLDER",
                path.relative_to(root).as_posix(),
                f"unfilled template placeholder: {{{{{name}}}}}",
            )


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
        anchored = [t for t, block in _link_targets(line) if block is not None]
        for target in anchored:
            if source_type == "document" or target.startswith(DISTILLATE_LAYER):
                _check_layer(
                    target, REPRESENTATION_LAYER, "distillate statement", doc, report
                )
        if source_type == "document":
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
            report.error(
                "E-TOPIC", doc.rel, f"topic outside the controlled topic set: {topic}"
            )


def _check_assertion(doc: Doc, docs: dict[str, Doc], report: Report) -> None:
    grounding = [
        (target, block)
        for raw in doc.fm.get("grounding") or []
        for target, block in _link_targets(str(raw))
    ]
    if not grounding:
        report.error(
            "E-GROUNDING", doc.rel, "assertion without a single grounding anchor"
        )
    for target, block in grounding:
        if block is None:
            report.error(
                "E-ANCHOR", doc.rel, f"grounding without statement anchor: {target}"
            )
        _check_layer(target, DISTILLATE_LAYER, "grounding", doc, report)
    contested = [
        t
        for raw in doc.fm.get("contested-with") or []
        for t, _ in _link_targets(str(raw))
    ]
    if doc.fm.get("status") == "contested" and not contested:
        report.error(
            "E-CONTESTED", doc.rel, "contested assertion without contested-with links"
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


def _check_chapter(doc: Doc, report: Report) -> None:
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

    grounded_assertions: set[str] = set()
    posit_count = 0
    for key, text in defs.items():
        if text.startswith("Grounded in"):
            targets = [t for t, _ in _link_targets(text)]
            if not targets:
                report.error(
                    "E-FOOTNOTE", doc.rel, f"footnote [^{key}] grounds in no assertion"
                )
            for target in targets:
                grounded_assertions.add(target)
                _check_layer(target, ASSERTION_LAYER, "chapter footnote", doc, report)
        elif text.startswith("Posit:"):
            posit_count += 1
        else:
            report.error(
                "E-FOOTNOTE",
                doc.rel,
                f"footnote [^{key}] starts with neither 'Grounded in' nor 'Posit:'",
            )

    mirror = {
        t for raw in doc.fm.get("assertions") or [] for t, _ in _link_targets(str(raw))
    }
    if mirror != grounded_assertions:
        report.error(
            "E-MIRROR",
            doc.rel,
            f"frontmatter assertions {sorted(mirror)} != footnote assertions {sorted(grounded_assertions)}",
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
        if doc.fm.get("type") == "assertion" and doc.rel not in listed:
            report.error("E-ORPHAN", doc.rel, "assertion reachable from no topic map")


_RUN_COMPUTATIONS = False


def _read_expected_warnings(root: Path) -> frozenset[str]:
    """The warning codes this instance has declared as its known baseline."""
    path = root / SPECIFICATION
    if not path.is_file():
        return frozenset()
    text = path.read_text(encoding="utf-8")
    if not text.startswith("---\n"):
        return frozenset()
    end = text.find("\n---", 4)
    fm = yaml.safe_load(text[4 : end if end > 0 else None]) or {}
    declared = fm.get("expected-warnings") or []
    if isinstance(declared, str):
        declared = [part.strip() for part in declared.split(",")]
    return frozenset(str(code).strip() for code in declared if str(code).strip())


def _check_inventory(root: Path, docs: dict[str, Doc], report: Report) -> None:
    """Every representation and distillate is named in an inventory register.

    A document listed in no register is invisible to every overview and every
    check that reads one, so it can be complete and conformant and still be
    missed. An instance may keep more than one register; any of them counts as
    proof of record.
    """
    registers = [root / name for name in INVENTORY_REGISTERS if (root / name).is_file()]
    if not registers:
        report.warn(
            "W-NO-INVENTORY",
            "knowledge/",
            "no inventory register found; the inventory obligation was not checked",
        )
        return
    listed = {
        target
        for path in registers
        for target, _ in _link_targets(path.read_text(encoding="utf-8"))
    }
    for doc in docs.values():
        if doc.rel.startswith(INVENTORIED_FOLDERS) and doc.rel not in listed:
            report.error(
                "E-INVENTORY",
                doc.rel,
                f"named in no inventory register ({', '.join(INVENTORY_REGISTERS)})",
            )


def _check_chain_populated(docs: dict[str, Doc], report: Report) -> None:
    """A vault whose production chain holds no document gave every content check an empty subject."""
    if not any(doc.rel.startswith(CHAIN_FOLDERS) for doc in docs.values()):
        report.warn(
            "W-EMPTY",
            ".",
            f"no document in the production chain ({' → '.join(CHAIN_FOLDERS)}); "
            "no content check had a subject",
        )


def _check_output_present(docs: dict[str, Doc], report: Report) -> None:
    """A validator must not report green on a contract that had no subject."""
    if not any(doc.fm.get("type") == "chapter" for doc in docs.values()):
        report.warn(
            "W-NO-OUTPUT",
            "40_output/",
            "no chapter document; the footnote contract does not take effect in this instance",
        )


def _check_expectations(report: Report) -> None:
    """A declared warning that no longer fires is a stale declaration."""
    raised = {code for code, _, _ in report.warnings}
    for code in sorted(report.expected_warnings - raised):
        report.warn(
            "W-STALE-EXPECTATION",
            SPECIFICATION,
            f"{code} is declared as expected but was not raised",
        )


def validate(root: Path, run_computations: bool = True) -> Report:
    global _RUN_COMPUTATIONS
    _RUN_COMPUTATIONS = run_computations
    report = Report(expected_warnings=_read_expected_warnings(root))
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
        _check_frontmatter_links(doc, docs, root, report)
        _check_duplicate_ids(doc, report)
        doctype = doc.fm.get("type")
        if doctype in ("distillate", "assertion", "chapter"):
            _check_status_discipline(doc, report)
            _check_staleness(doc, report)
        if doctype in ("distillate", "assertion"):
            _check_topics(doc, topic_names, report)
        if doctype == "distillate":
            _check_distillate(doc, docs, reference_ids, root, report)
        elif doctype == "assertion":
            _check_assertion(doc, docs, report)
        elif doctype == "chapter":
            _check_chapter(doc, report)
        for target, block in _link_targets(doc.body):
            if block is not None or any(target.startswith(f) for f in CONTENT_FOLDERS):
                _resolve_anchor(target, block, docs, root, doc, report)
    _check_moc_reachability(docs, report)
    _check_inventory(root, docs, report)
    _check_placeholders(root, report)
    _check_chain_populated(docs, report)
    _check_output_present(docs, report)
    _check_expectations(report)
    return report


def main() -> None:
    if sys.platform == "win32":
        sys.stdout.reconfigure(encoding="utf-8")
        sys.stderr.reconfigure(encoding="utf-8")
    parser = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    parser.add_argument("root", type=Path, help="vault root directory")
    parser.add_argument(
        "--no-computations",
        action="store_true",
        help="skip re-running data anchors",
    )
    parser.add_argument(
        "--run-computations",
        action="store_true",
        help="no-op, kept for documented invocations; computations run by default",
    )
    args = parser.parse_args()

    report = validate(args.root.resolve(), run_computations=not args.no_computations)
    for code, rel, message in report.errors:
        print(f"ERROR {code} {rel}: {message}", file=sys.stderr)
    for code, rel, message in report.warnings:
        mark = " " if code in report.expected_warnings else "*"
        print(f"WARN{mark} {code} {rel}: {message}", file=sys.stderr)
    undeclared = len(report.unexpected_warnings())
    summary = f"{len(report.errors)} error(s), {len(report.warnings)} warning(s)"
    if report.expected_warnings:
        summary += f", {undeclared} of them undeclared (marked *)"
    print(summary)
    if not report.errors:
        print("OK vault conforms to its schema")
    sys.exit(1 if report.errors else 0)


if __name__ == "__main__":
    main()
