#!/usr/bin/env python3
"""Build a version-bound review inventory for the canonical method paper.

The author review works paragraph by paragraph while showing every sentence or
non-sentence content unit in its subsection context. This tool derives those
addresses from the canonical Markdown without copying the manuscript into a
second editable document. It also reports the bibliography and footnotes as a
separate apparatus inventory.

Run the complete inventory summary from any working directory:

    python tools/paper_review.py

Show the exact review units of one section:

    python tools/paper_review.py --section 1.1

The source digest binds every report to an exact manuscript state. A semantic
change to an accepted paragraph therefore requires renewed author acceptance.
"""

from __future__ import annotations

import argparse
import hashlib
import json
import pathlib
import re
import sys
from dataclasses import asdict, dataclass

TOOLS = pathlib.Path(__file__).resolve().parent
ROOT = TOOLS.parent
PAPER = ROOT / "research-artefacts" / "promptotyping-paper.md"

HEADING = re.compile(r"^(#{1,4})\s+(.+)$")
FOOTNOTE = re.compile(r"^\[\^([^]]+)\]:\s+")
LIST_ITEM = re.compile(r"^(?:[-*]|\d+[.)])\s+")
TABLE_DIVIDER = re.compile(r"^\|(?:\s*:?-+:?\s*\|)+$")
SENTENCE_BOUNDARY = re.compile(
    r"[.!?](?:\[\^[^]]+\])?(?:\*{1,3}|_{1,3})?[\"'’”]?\s+"
    r"(?=(?:\*{1,3}|_{1,3}|[\"'‘“([])*[A-Z0-9])"
)
ABBREVIATIONS = (
    "e.g.",
    "i.e.",
    "et al.",
    "Dr.",
    "Mr.",
    "Ms.",
    "Prof.",
    "vs.",
)
PROTECTED_DOT = "\ue000"


@dataclass(frozen=True)
class ReviewUnit:
    """One exact sentence or bounded non-sentence item for author review."""

    id: str
    text: str
    digest: str


@dataclass(frozen=True)
class ReviewBlock:
    """A paragraph-level context that keeps local argumentative relations visible."""

    id: str
    kind: str
    line_start: int
    line_end: int
    digest: str
    units: tuple[ReviewUnit, ...]


@dataclass(frozen=True)
class ReviewSection:
    """A manuscript subsection and the blocks assigned to it."""

    id: str
    heading: str
    level: int
    blocks: tuple[ReviewBlock, ...]


@dataclass(frozen=True)
class PaperInventory:
    """Version-bound body and apparatus inventory derived from one Markdown file."""

    source: str
    source_digest: str
    title: str
    sections: tuple[ReviewSection, ...]
    references: int
    footnotes: int


def _digest(text: str) -> str:
    return hashlib.sha256(text.encode("utf-8")).hexdigest()


def _section_id(heading: str) -> str:
    number = re.match(r"^(\d+(?:\.\d+)*)\b", heading)
    if number:
        return number.group(1)
    if heading == "Abstract":
        return "abstract"
    if heading.startswith("Author"):
        return "authors-note"
    return re.sub(r"[^a-z0-9]+", "-", heading.lower()).strip("-")


def _protect_abbreviations(text: str) -> str:
    protected = text
    for abbreviation in ABBREVIATIONS:
        pattern = re.compile(re.escape(abbreviation), re.IGNORECASE)
        protected = pattern.sub(
            lambda match: match.group(0).replace(".", PROTECTED_DOT),
            protected,
        )
    return re.sub(r"(?<=\d)\.(?=\d)", PROTECTED_DOT, protected)


def split_review_units(text: str) -> tuple[str, ...]:
    """Split prose conservatively while preserving every source character."""

    compact = " ".join(part.strip() for part in text.splitlines() if part.strip())
    protected = _protect_abbreviations(compact)
    starts = [0]
    starts.extend(match.end() for match in SENTENCE_BOUNDARY.finditer(protected))
    units: list[str] = []
    for start, end in zip(starts, [*starts[1:], len(compact)], strict=True):
        unit = compact[start:end].strip()
        if unit:
            units.append(unit)
    if " ".join(units) != compact:
        raise ValueError("Sentence inventory is not a lossless partition of its block")
    return tuple(units)


def _block_kind(lines: list[str]) -> str:
    if all(line.lstrip().startswith("|") for line in lines):
        return "table"
    if all(LIST_ITEM.match(line.lstrip()) for line in lines):
        return "list"
    if any(line.lstrip().startswith("![") for line in lines):
        return "figure"
    return "prose"


def _block_units(lines: list[str], kind: str) -> tuple[str, ...]:
    if kind == "table":
        return tuple(line.strip() for line in lines if not TABLE_DIVIDER.match(line.strip()))
    if kind == "list":
        units: list[str] = []
        for line in lines:
            item = LIST_ITEM.sub("", line.strip(), count=1)
            units.extend(split_review_units(item))
        return tuple(units)
    return split_review_units("\n".join(lines))


def _make_block(
    section_id: str,
    ordinal: int,
    lines: list[str],
    line_start: int,
    line_end: int,
) -> ReviewBlock:
    kind = _block_kind(lines)
    text = "\n".join(lines)
    unit_texts = _block_units(lines, kind)
    block_id = f"{section_id}.p{ordinal}"
    units = tuple(
        ReviewUnit(
            id=f"{block_id}.s{unit_ordinal}",
            text=unit,
            digest=_digest(unit),
        )
        for unit_ordinal, unit in enumerate(unit_texts, start=1)
    )
    return ReviewBlock(
        id=block_id,
        kind=kind,
        line_start=line_start,
        line_end=line_end,
        digest=_digest(text),
        units=units,
    )


def build_inventory(path: pathlib.Path = PAPER) -> PaperInventory:
    """Parse the paper into review sections and count separate apparatus entries."""

    if not path.is_file():
        raise FileNotFoundError(f"Paper source not found: {path}")

    source = path.read_text(encoding="utf-8")
    lines = source.splitlines()
    title = ""
    current_id = ""
    current_heading = ""
    current_level = 0
    current_blocks: list[ReviewBlock] = []
    section_rows: list[ReviewSection] = []
    block_lines: list[str] = []
    block_start = 0
    in_references = False
    references = 0
    footnotes = 0

    def flush_block(line_end: int) -> None:
        nonlocal block_lines, block_start, references, footnotes
        if not block_lines:
            return
        if in_references:
            first = block_lines[0].strip()
            if FOOTNOTE.match(first):
                footnotes += 1
            elif first.startswith("-"):
                references += 1
        elif current_id:
            current_blocks.append(
                _make_block(
                    current_id,
                    len(current_blocks) + 1,
                    block_lines,
                    block_start,
                    line_end,
                )
            )
        block_lines = []
        block_start = 0

    def flush_section() -> None:
        nonlocal current_blocks
        if current_id and not in_references:
            section_rows.append(
                ReviewSection(
                    id=current_id,
                    heading=current_heading,
                    level=current_level,
                    blocks=tuple(current_blocks),
                )
            )
        current_blocks = []

    for line_number, line in enumerate(lines, start=1):
        heading = HEADING.match(line)
        if heading:
            flush_block(line_number - 1)
            flush_section()
            level = len(heading.group(1))
            text = heading.group(2).strip()
            if level == 1 and not title:
                title = text
                current_id = ""
                current_heading = ""
                current_level = 0
                continue
            in_references = text == "References"
            current_id = _section_id(text)
            current_heading = text
            current_level = level
            continue
        if not line.strip():
            flush_block(line_number - 1)
            continue
        if not block_lines:
            block_start = line_number
        block_lines.append(line)

    flush_block(len(lines))
    flush_section()

    if not title:
        raise ValueError("Paper source has no H1 title")
    if not section_rows:
        raise ValueError("Paper source has no reviewable sections")

    return PaperInventory(
        source=path.relative_to(ROOT).as_posix() if path.is_relative_to(ROOT) else str(path),
        source_digest=_digest(source),
        title=title,
        sections=tuple(section_rows),
        references=references,
        footnotes=footnotes,
    )


def summary(inventory: PaperInventory) -> dict[str, object]:
    blocks = sum(len(section.blocks) for section in inventory.sections)
    units = sum(
        len(block.units)
        for section in inventory.sections
        for block in section.blocks
    )
    return {
        "source": inventory.source,
        "source_digest": inventory.source_digest,
        "title": inventory.title,
        "sections": len(inventory.sections),
        "blocks": blocks,
        "review_units": units,
        "references": inventory.references,
        "footnotes": inventory.footnotes,
    }


def _show_section(inventory: PaperInventory, section_id: str) -> None:
    section = next(
        (candidate for candidate in inventory.sections if candidate.id == section_id),
        None,
    )
    if section is None:
        available = ", ".join(candidate.id for candidate in inventory.sections)
        raise ValueError(f"Unknown section {section_id!r}. Available: {available}")
    print(f"# {section.id} {section.heading}")
    for block in section.blocks:
        print(f"\n## {block.id} [{block.kind}; lines {block.line_start}-{block.line_end}]")
        for unit in block.units:
            print(f"\n- **{unit.id}** {unit.text}")


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--paper", type=pathlib.Path, default=PAPER)
    parser.add_argument("--section", help="Show one section with version-bound review IDs")
    parser.add_argument(
        "--json",
        action="store_true",
        help="Print the complete inventory as JSON instead of a compact summary",
    )
    return parser.parse_args()


def main() -> int:
    if hasattr(sys.stdout, "reconfigure"):
        sys.stdout.reconfigure(encoding="utf-8")
        sys.stderr.reconfigure(encoding="utf-8")
    args = parse_args()
    try:
        inventory = build_inventory(args.paper.resolve())
        if args.section:
            _show_section(inventory, args.section)
        elif args.json:
            print(json.dumps(asdict(inventory), ensure_ascii=False, indent=2))
        else:
            print(json.dumps(summary(inventory), ensure_ascii=False, indent=2))
    except (FileNotFoundError, ValueError) as exc:
        print(f"ERROR: {exc}", file=sys.stderr)
        return 1
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
