# /// script
# requires-python = ">=3.11"
# dependencies = []
# ///
"""Triage report on paper statements that no claim of the evidence layer covers.

The validator checks the deliverable layer for unanchored paragraphs, and that
check has no subject here because the paper is maintained outside the vault.
This script fills that gap from the outside: it reads the paper text, proposes
the substantial empirical statements as candidates, and reports which of them
finds no matching claim in 20_claims/. It reads and prints; it writes nothing.

How it decides
--------------
1. Segmentation. Headings set the section context. Fenced code is skipped, and
   so is the References section, whose bibliographic years would otherwise
   flood the candidate list; the skip is named in the report rather than kept
   silent. Prose paragraphs are split into sentences, list items and footnote
   definitions stand on their own, and every data row of a Markdown table
   becomes one unit, because the project inventory carries its figures there.
2. Candidacy. A unit becomes a candidate when it carries at least one lexical
   trigger of five families: a figure, a priority or superlative word, an
   all-quantifier, an evidential verb of the "the record documents" kind, or a
   temporal marker. Citation parentheses and section cross-references are
   removed before the test, so a sentence does not become a candidate for
   citing a work or pointing at a section. Units without any trigger are
   dropped as method-describing or definitional prose.
3. Matching. Every claim contributes its title, its Statement section, its
   support glosses and its slug as a token bag. Only rare tokens count as
   evidence that two texts speak about the same thing: one in at most two
   percent of the claims counts always, one in at most eight percent counts
   where the paper writes it as a name, and anything more common counts for
   nothing, which keeps the vocabulary of the method itself from matching
   everything. A shared figure scores three, a shared rare token two, and a
   shared year nothing, years being too promiscuous to carry aboutness. From
   five points a candidate counts as covered, so a figure plus one term does it,
   or three terms, while a pile of common words never does.
4. Ordering. The uncovered candidates are grouped by exposure, the number of
   trigger families plus one for a figure. That ordering is a reading aid only.

Where it stops
--------------
Whether a sentence is substantial is a judgment about its role in the argument
and is not decidable by lexical means; the trigger list buys recall at the price
of precision, and false positives are expected. The matching is token overlap
and knows nothing of meaning: a candidate can be reported as covered by a claim
that in fact limits or contradicts it, which is the case for the negative claims
of this vault. The reverse direction, claims that no passage of the paper uses
any more, is not examined. The script therefore proposes a list for human
triage and passes no verdict; it always exits 0 and gates nothing.

Usage:
    uv run tools/coverage.py                 # from the vault root
    uv run tools/coverage.py --show-covered  # add the matched candidates
"""

import argparse
import re
import sys
from collections import Counter
from dataclasses import dataclass
from pathlib import Path

SKIP_SECTIONS = ("References",)
RARE_SHARE = 0.02  # claim share up to which a token carries weight on its own
NAME_SHARE = 0.08  # claim share up to which a token carries weight as a name

# Lexical triggers, one family per entry. Word boundaries are applied at match time.
TRIGGERS: dict[str, tuple[str, ...]] = {
    "figure": (r"\d",),
    "priority": (
        "first",
        "only",
        "sole",
        "unique",
        "largest",
        "smallest",
        "earliest",
        "latest",
        "never",
        "alone",
        "one instance",
        "no other",
        "paradigmatic",
    ),
    "quantifier": ("every", "each", "all", "none", "no", "any", "throughout"),
    "evidential": (
        "audit",
        "audited",
        "demonstrates",
        "document",
        "documented",
        "documents",
        "evidence",
        "found",
        "inventory",
        "measured",
        "observation",
        "observed",
        "produced",
        "records",
        "reported",
        "reports",
        "shows",
        "survey",
        "surveyed",
        "traceable",
        "verified",
        "verification",
    ),
    "temporal": (
        "january",
        "february",
        "march",
        "april",
        "may",
        "june",
        "july",
        "august",
        "september",
        "october",
        "november",
        "december",
        "since",
        "today",
        "currently",
        "so far",
    ),
}

CITATION = re.compile(r"\((?:[^()]*?\b(?:1[89]|20)\d{2}[a-z]?)[^()]*?\)")
SECTION_REF = re.compile(r"\bSections?\s+\d+(?:\.\d+)*", re.IGNORECASE)
FOOTNOTE_MARK = re.compile(r"\[\^[^\]]+\]")
URL = re.compile(r"https?://\S+")
SENTENCE_SPLIT = re.compile(r"(?<=[.!?])\s+(?=[A-Z\"“(\[])")
ABBREV_TAIL = re.compile(
    r"\b(?:e\.g|i\.e|cf|vs|no|pp?|ch|fig|et al|ca|approx|vol|eds?|St|Mr|Ms|Dr|Prof|[A-Z])\.$"
)
BULLET = re.compile(r"^(?:[-*+]\s|\d+\.\s)")
NUMBER = re.compile(r"\d[\d,]*(?:\.\d+)?")
WORD = re.compile(r"[a-z][\w³-]{3,}")
NAME = re.compile(r"[A-Za-z][\w³-]{3,}")
TITLE_LINE = re.compile(r"^#\s+(.*)$")
SUPPORT_GLOSS = re.compile(r"—\s*(.*)$")


@dataclass(frozen=True)
class Unit:
    """One addressable piece of paper text: a sentence, a footnote, a table row."""

    line: int
    section: str
    kind: str
    text: str


@dataclass(frozen=True)
class Claim:
    """One claim of the evidence layer, reduced to what matching needs."""

    slug: str
    tokens: frozenset[str]
    numbers: frozenset[str]


def _clean(text: str) -> str:
    """Strip what should not make a sentence a candidate on its own."""
    for pattern in (URL, CITATION, SECTION_REF, FOOTNOTE_MARK):
        text = pattern.sub(" ", text)
    return text


def _split_sentences(text: str) -> list[str]:
    parts: list[str] = []
    for candidate in SENTENCE_SPLIT.split(text.strip()):
        if parts and ABBREV_TAIL.search(parts[-1]):
            parts[-1] = f"{parts[-1]} {candidate}"
        else:
            parts.append(candidate)
    return [p.strip() for p in parts if p.strip()]


def read_units(paper: Path) -> tuple[list[Unit], list[str]]:
    """Segment the paper into candidate-sized units, plus the sections skipped."""
    units: list[Unit] = []
    skipped: list[str] = []
    section = "(front matter)"
    in_code = False
    skipping = False
    paragraph: list[str] = []
    paragraph_line = 0

    def flush() -> None:
        nonlocal paragraph, paragraph_line
        if paragraph:
            joined = " ".join(paragraph)
            kind = "footnote" if joined.lstrip().startswith("[^") else "prose"
            units.extend(
                Unit(paragraph_line, section, kind, s) for s in _split_sentences(joined)
            )
            paragraph = []

    for number, raw in enumerate(paper.read_text(encoding="utf-8").splitlines(), 1):
        line = raw.rstrip()
        if line.startswith("```"):
            flush()
            in_code = not in_code
            continue
        if in_code:
            continue
        if line.startswith("#"):
            flush()
            section = line.lstrip("# ").strip()
            skipping = any(section.startswith(name) for name in SKIP_SECTIONS)
            if skipping:
                skipped.append(section)
            continue
        if skipping:
            continue
        if line.startswith("|"):
            flush()
            cells = [c.strip() for c in line.strip("|").split("|")]
            if not all(set(c) <= set("-: ") for c in cells):
                units.append(Unit(number, section, "table row", " | ".join(cells)))
            continue
        if not line.strip():
            flush()
            continue
        if BULLET.match(line.strip()) or line.startswith("[^"):
            flush()  # a list item and a footnote each stand on their own
        if not paragraph:
            paragraph_line = number
        paragraph.append(line.strip())
    flush()
    return units, skipped


def triggers_of(text: str) -> list[str]:
    """The trigger families a unit carries, in fixed order."""
    cleaned = _clean(text)
    lowered = cleaned.lower()
    hits = []
    for family, markers in TRIGGERS.items():
        for marker in markers:
            pattern = marker if family == "figure" else rf"\b{re.escape(marker)}\b"
            if re.search(pattern, lowered):
                hits.append(family)
                break
    return hits


def _numbers(text: str) -> set[str]:
    return {m.group(0).replace(",", "") for m in NUMBER.finditer(text)}


def _is_strong(number: str) -> bool:
    """A figure rather than a year or a small count."""
    digits = number.replace(".", "")
    if len(digits) >= 3 and not (
        len(digits) == 4 and 1900 <= int(digits) <= 2100 and "." not in number
    ):
        return True
    return "." in number


def _words(text: str) -> set[str]:
    return set(WORD.findall(text.lower()))


def _names(text: str) -> set[str]:
    """Tokens the paper writes as names, lowercased; the leading word does not count."""
    tokens = NAME.findall(text)
    return {t.lower() for t in tokens[1:] if any(c.isupper() for c in t)}


def read_claims(claims_dir: Path) -> list[Claim]:
    claims: list[Claim] = []
    for path in sorted(claims_dir.glob("*.md")):
        if path.name.startswith("MOC-"):
            continue
        text = path.read_text(encoding="utf-8")
        body = text.split("\n---", 1)[-1] if text.startswith("---") else text
        material = [path.stem.replace("-", " ")]
        section = ""
        for line in body.splitlines():
            if m := TITLE_LINE.match(line):
                material.append(m.group(1).strip())
            elif line.startswith("## "):
                section = line[3:].strip().lower()
            elif section == "statement":
                material.append(line)
            elif section == "support" and (m := SUPPORT_GLOSS.search(line)):
                material.append(m.group(1))
        blob = " ".join(material)
        claims.append(
            Claim(
                slug=path.stem,
                tokens=frozenset(_words(blob)),
                numbers=frozenset(_numbers(blob)),
            )
        )
    return claims


def token_weights(claims: list[Claim]) -> dict[str, int]:
    """Weight per token, by how rare it is across the claim layer.

    Two tiers, because only rarity signals that two texts speak about the same
    thing. A token that occurs in at most `RARE_SHARE` of the claims carries
    weight on its own; one up to `NAME_SHARE` carries weight only where the paper
    writes it as a name. The shared vocabulary of the method weighs nothing.
    """
    frequency: Counter[str] = Counter()
    for claim in claims:
        frequency.update(claim.tokens)
    rare = max(1, int(len(claims) * RARE_SHARE))
    for_names = max(rare + 1, int(len(claims) * NAME_SHARE))
    return {
        token: 2 if count <= rare else 1 if count <= for_names else 0
        for token, count in frequency.items()
    }


def exposure(unit: Unit, families: list[str]) -> int:
    """How exposed a candidate is to a reviewer's demand for evidence.

    Trigger density with a bonus for a figure, used to order the report. It is an
    ordering aid and no part of the coverage decision.
    """
    return len(families) + (1 if any(_is_strong(n) for n in _numbers(unit.text)) else 0)


def score(unit: Unit, claim: Claim, weights: dict[str, int]) -> int:
    """Shared evidence between one paper unit and one claim, in points."""
    text = _clean(unit.text)
    strong = sum(1 for n in _numbers(text) & claim.numbers if _is_strong(n))
    names = _names(unit.text)
    points = 3 * strong
    for token in _words(text) & claim.tokens:
        weight = weights.get(token, 0)
        if weight == 2 or (weight == 1 and token in names):
            points += 2
    return points


def render(
    units: list[Unit],
    claims: list[Claim],
    skipped: list[str],
    threshold: int,
    show_covered: bool,
    paper: Path,
) -> str:
    weights = token_weights(claims)
    out: list[str] = [
        "# Coverage triage: paper statements against the claim layer",
        "",
        f"Paper: `{paper}`. Claims read: {len(claims)}. Coverage threshold: {threshold} points.",
        f"Sections skipped by rule: {', '.join(skipped) if skipped else 'none'}.",
        "",
        "Candidacy is lexical and matching is token overlap, so this is a list for human",
        "triage and not a verdict. False positives are expected; a match is no proof that",
        "the claim supports the sentence rather than limiting it.",
        "",
    ]
    uncovered: list[tuple[int, Unit, list[str], Claim | None, int]] = []
    covered: list[tuple[Unit, Claim, int]] = []
    for unit in units:
        families = triggers_of(unit.text)
        if not families:
            continue
        ranked = sorted(
            ((score(unit, c, weights), c) for c in claims),
            key=lambda pair: (-pair[0], pair[1].slug),
        )
        best_score, best = ranked[0] if ranked else (0, None)
        if best is not None and best_score >= threshold:
            covered.append((unit, best, best_score))
        else:
            uncovered.append(
                (exposure(unit, families), unit, families, best, best_score)
            )

    out.append(
        f"## Candidates without a covering claim ({len(uncovered)} of {len(uncovered) + len(covered)})"
    )
    out.extend(
        [
            "",
            "Grouped by exposure, the count of trigger families plus one for a figure. The",
            "grouping orders the reading and judges nothing; a low group holds ordinary",
            "method prose as well as the occasional claim a reviewer would go for.",
            "",
        ]
    )
    grade = None
    for rank, unit, families, best, best_score in sorted(
        uncovered, key=lambda row: (-row[0], row[1].line)
    ):
        if rank != grade:
            grade = rank
            out.extend([f"### Exposure {rank}", ""])
        out.append(
            f"- **L{unit.line}**, {unit.section} ({unit.kind}, {'/'.join(families)}) {unit.text}"
        )
        nearest = (
            f"nearest claim `{best.slug}` at {best_score} points"
            if best is not None and best_score > 0
            else "no claim shares any evidence token"
        )
        out.append(f"  - {nearest}")
    out.append("")

    if show_covered:
        out.extend([f"## Candidates with a covering claim ({len(covered)})", ""])
        for unit, claim, points in covered:
            out.append(f"- **L{unit.line}** {unit.text}")
            out.append(f"  - `{claim.slug}` at {points} points")
        out.append("")
    return "\n".join(out)


def main() -> None:
    if sys.platform == "win32":
        sys.stdout.reconfigure(encoding="utf-8")
    here = Path(__file__).resolve()
    parser = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    parser.add_argument(
        "--paper",
        type=Path,
        default=here.parents[2] / "knowledge" / "paper.md",
        help="paper text to read (default: knowledge/paper.md of the repository)",
    )
    parser.add_argument(
        "--claims",
        type=Path,
        default=here.parents[1] / "20_claims",
        help="claim folder to match against (default: 20_claims/ of this vault)",
    )
    parser.add_argument(
        "--threshold",
        type=int,
        default=5,
        help="points from which a candidate counts as covered (default: 5)",
    )
    parser.add_argument(
        "--show-covered",
        action="store_true",
        help="also list the candidates that found a claim",
    )
    args = parser.parse_args()

    units, skipped = read_units(args.paper)
    claims = read_claims(args.claims)
    if not claims:
        sys.exit(f"no claims found in {args.claims}")
    print(
        render(
            units, claims, skipped, args.threshold, args.show_covered, args.paper.name
        )
    )


if __name__ == "__main__":
    main()
