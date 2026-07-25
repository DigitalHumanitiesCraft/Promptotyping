# /// script
# requires-python = ">=3.11"
# dependencies = []
# ///
"""Bibliography of the paper, rendered from the CSL records in references/.

The References section of `knowledge/paper.md` and the records in `references/`
carry the same information twice and are maintained by hand twice. This script
renders the section from the records and, in `--compare` mode, names where the
two stocks differ. It only reads and prints. The paper is the deliverable, so
adopting a proposed line stays a human decision.

The rules below were read off the existing References section, not taken from a
citation style. Where the section is inconsistent, the majority form is the rule
and the deviation is named.

Rules recognised
----------------
Names. The first name is inverted (`Family, Given`), the following ones are not,
and the last is joined with `, and ` (the comma stands even with two names). A
record without `author` falls back to `editor` and the list then ends in `, eds.`
(`, ed.` for one). A name ending in an initial keeps its own period and takes no
second one. Sorting is by the family names in order, then by year, then by
id; diacritics fold, so `Schöch` precedes `Schonhardt`, and a shorter author list
precedes a longer one with the same lead (`Pollin` alone before `Pollin` et al.).

Title. Quoted with the period inside for articles, chapters, conference papers,
reports, talks, blog posts and web pages; italic for books and standards; plain
for theses and datasets. A title already ending in `?` or `!` takes no period.

Type-specific tails. Journal articles print `*Container* Volume, no. Issue
(Year): Pages`; page ranges use an en dash, and an issue that does not begin with
a digit is printed without `no.`. Books print `[Series Number.] Place: Publisher,
Year`. Conference papers print `In *Proceedings*, [series number | pages]. Place:
Publisher, Year`. Reports print their `number` where they have one and their
publisher, plus genre, where they do not; a `note` follows the year as its own
sentence. Talks print `Paper presented at Event, Place, Date`. Blog posts print
`Container, Date`, web pages `Container (Year)`, theses `Genre, Publisher
(Year)`, datasets `Publisher, vVersion (Year)`, standards `Number. Place:
Publisher, Year`. A URL closes the entry, except where a `number` already
identifies the work, which is the practice of the preprint entries.

Year. The parenthetical year is the disambiguated one where the record id carries
a letter suffix (`pollin-2025a`), otherwise the year in `issued`. A blog post
whose id carries no suffix prints no parenthetical at all, its date already
carrying the year.

Where the stock is inconsistent or the records fall short
--------------------------------------------------------
Truncation to `et al.` has no expression in CSL JSON. Some records are shortened
to one or three authors where the paper prints `et al.`, and one record carries
its full list of fifteen while the paper truncates. Rendering prints what the
record holds, so these entries show up as differences.

Single instances that no rule covers, each of them a difference in `--compare`:
the chapter entry names an editing body and a version date that the record does
not hold; one talk prints a date range where the record holds one date, and the
other quotes its event name; one conference paper prints its year in parentheses
and omits place and publisher; two standards abbreviate their publisher; one book
prints `with` before its second name; the thesis shortens its genre and resolves
to a different host than its record. The sort order of the section itself
deviates in two places, one work under M and one of the two Berners-Lee entries.

Usage:
    python tools/bibliography.py             # from the vault root
    python tools/bibliography.py --compare   # differences against the paper
"""

from __future__ import annotations

import argparse
import json
import re
import sys
import unicodedata
from dataclasses import dataclass, field
from pathlib import Path

EN_DASH = "–"  # noqa: RUF001 — the page ranges of the section are set with it
ITALIC_TYPES = frozenset({"book", "standard"})
PLAIN_TYPES = frozenset({"thesis", "dataset"})
REFERENCES_HEADING = "## References"
ID_YEAR_SUFFIX = re.compile(r"-(\d{4})([a-z])$")
MONTHS = (
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
)


@dataclass
class Comparison:
    records_without_entry: list[dict] = field(default_factory=list)
    entries_without_record: list[str] = field(default_factory=list)
    differing: list[tuple[str, str]] = field(default_factory=list)
    agreeing: int = 0


def load_records(directory: Path) -> list[dict]:
    records: list[dict] = []
    for path in sorted(directory.glob("*.json")):
        loaded = json.loads(path.read_text(encoding="utf-8"))
        records.extend(r for r in loaded if isinstance(r, dict))
    return records


def _fold(text: str) -> str:
    stripped = unicodedata.normalize("NFKD", text)
    return "".join(c for c in stripped if not unicodedata.combining(c)).casefold()


def _families(record: dict) -> tuple[str, ...]:
    people = record.get("author") or record.get("editor") or []
    return tuple(_fold(p.get("family") or p.get("literal", "")) for p in people)


def _issued_year(record: dict) -> int:
    parts = (record.get("issued") or {}).get("date-parts") or [[]]
    return int(parts[0][0]) if parts[0] else 0


def sort_records(records: list[dict]) -> list[dict]:
    return sorted(
        records, key=lambda r: (_families(r), _issued_year(r), r.get("id", ""))
    )


def _display_year(record: dict) -> str:
    if m := ID_YEAR_SUFFIX.search(str(record.get("id", ""))):
        return f"{m.group(1)}{m.group(2)}"
    return str(_issued_year(record))


def _full_date(record: dict) -> str:
    parts = (record.get("issued") or {}).get("date-parts") or [[]]
    fields = parts[0]
    if len(fields) >= 3:
        return f"{fields[2]} {MONTHS[int(fields[1]) - 1]} {fields[0]}"
    if len(fields) == 2:
        return f"{MONTHS[int(fields[1]) - 1]} {fields[0]}"
    return str(fields[0]) if fields else ""


def _name(person: dict, inverted: bool) -> str:
    if literal := person.get("literal"):
        return str(literal)
    family, given = person.get("family", ""), person.get("given", "")
    if not given:
        return family
    return f"{family}, {given}" if inverted else f"{given} {family}"


def _people(record: dict) -> str:
    people = record.get("author") or record.get("editor") or []
    if not people:
        return ""
    names = [_name(p, i == 0) for i, p in enumerate(people)]
    joined = (
        names[0] if len(names) == 1 else f"{', '.join(names[:-1])}, and {names[-1]}"
    )
    if not record.get("author"):
        return f"{joined}, eds." if len(names) > 1 else f"{joined}, ed."
    return joined if joined.endswith(".") else f"{joined}."  # an initial closes itself


def _title(record: dict) -> str:
    title = str(record.get("title", "")).strip()
    stop = "" if title.endswith(("?", "!", ".")) else "."
    kind = record.get("type", "")
    if kind in ITALIC_TYPES:
        return f"*{title}{stop}*"
    if kind in PLAIN_TYPES:
        return f"{title}{stop}"
    return f'"{title}{stop}"'


def _pages(record: dict) -> str:
    return str(record.get("page", "")).replace("-", EN_DASH)


def _imprint(record: dict, year: str) -> str:
    """Place, publisher and year as the book-like types print them."""
    place, publisher = record.get("publisher-place"), record.get("publisher")
    if place and publisher:
        return f"{place}: {publisher}, {year}."
    if place:
        return f"{place}, {year}."
    if publisher:
        return f"{publisher}, {year}."
    return f"{year}."


def _series(record: dict, number_field: str = "collection-number") -> str:
    title = record.get("collection-title")
    if not title:
        return ""
    number = record.get(number_field)
    return f"{title} {number}." if number else f"{title}."


def _journal_tail(record: dict, year: str) -> str:
    out = f"*{record.get('container-title', '')}*"
    volume, issue = record.get("volume"), record.get("issue")
    if volume and issue:
        separator = "no. " if str(issue)[:1].isdigit() else ""
        out += f" {volume}, {separator}{issue}"
    elif volume:
        out += f" {volume}"
    out += f" ({year})"
    pages = _pages(record)
    return f"{out}: {pages}." if pages else f"{out}."


def _conference_tail(record: dict, year: str) -> str:
    out = f"In *{record.get('container-title', '')}*"
    if series := _series(record, number_field="volume"):
        out += f", {series}"
    elif pages := _pages(record):
        out += f", {pages}."
    else:
        out += "."
    return f"{out} {_imprint(record, year)}"


def _report_tail(record: dict, year: str) -> str:
    if number := record.get("number"):
        designator = str(number)
    else:
        designator = " ".join(
            str(part) for part in (record.get("publisher"), record.get("genre")) if part
        )
    out = f"{designator} ({year})." if designator else f"({year})."
    if note := record.get("note"):
        out += f" {note}."
    return out


def _tail(record: dict, year: str) -> str:
    kind = record.get("type", "")
    if kind == "article-journal":
        return _journal_tail(record, year)
    if kind == "paper-conference":
        return _conference_tail(record, year)
    if kind == "report":
        return _report_tail(record, year)
    if kind == "book":
        parts = [_series(record), _imprint(record, year)]
        return " ".join(p for p in parts if p)
    if kind == "chapter":
        parts = [
            f"In *{record.get('container-title', '')}*.",
            _series(record),
            _imprint(record, year),
        ]
        return " ".join(p for p in parts if p)
    if kind == "standard":
        return f"{record.get('number', '')}. {_imprint(record, year)}".lstrip(". ")
    if kind == "speech":
        place = record.get("event-place")
        head = f"Paper presented at {record.get('event', '')}"
        return f"{head}{f', {place}' if place else ''}, {_full_date(record)}."
    if kind == "post-weblog":
        suffixed = ID_YEAR_SUFFIX.search(str(record.get("id", "")))
        marker = f" ({year})" if suffixed else ""
        return f"{record.get('container-title', '')}, {_full_date(record)}{marker}."
    if kind == "webpage":
        return f"{record.get('container-title', '')} ({year})."
    if kind == "thesis":
        genre = record.get("genre", "")
        publisher = record.get("publisher", "")
        return f"{genre}, {publisher} ({year}).".lstrip(", ")
    if kind == "dataset":
        version = f", v{record['version']}" if record.get("version") else ""
        return f"{record.get('publisher', '')}{version} ({year})."
    return f"({year})."


def render_entry(record: dict) -> str:
    year = _display_year(record)
    parts = [_people(record), _title(record), _tail(record, year)]
    # A number identifies a preprint in place of its URL, as the paper prints it.
    if (url := record.get("URL")) and not (
        record.get("number") and record.get("type") in ("report", "paper-conference")
    ):
        parts.append(str(url))
    return " ".join(p for p in parts if p)


def render_bibliography(records: list[dict]) -> list[str]:
    return [render_entry(r) for r in sort_records(records)]


def paper_entries(paper: Path) -> list[str]:
    """The list items of the paper's References section, in file order."""
    entries: list[str] = []
    inside = False
    for line in paper.read_text(encoding="utf-8").splitlines():
        if line.startswith("#"):
            inside = line.strip() == REFERENCES_HEADING
            continue
        if inside and line.startswith("- "):
            entries.append(line[2:].strip())
    return entries


def _key(text: str) -> str:
    return "".join(c for c in _fold(text) if c.isalnum())


def compare(records: list[dict], entries: list[str]) -> Comparison:
    """Match records to paper entries by title and report the three differences."""
    result = Comparison()
    keyed = [(_key(entry), entry) for entry in entries]
    matched: set[str] = set()
    for record in sort_records(records):
        title_key = _key(str(record.get("title", "")))
        found = next(
            (entry for key, entry in keyed if title_key and title_key in key), None
        )
        if found is None:
            result.records_without_entry.append(record)
            continue
        matched.add(found)
        generated = render_entry(record)
        if generated == found:
            result.agreeing += 1
        else:
            result.differing.append((generated, found))
    result.entries_without_record = [e for e in entries if e not in matched]
    return result


def _report(result: Comparison) -> str:
    out = [
        "# Bibliography comparison",
        "",
        f"Agreeing entries: {result.agreeing}. "
        f"Differing: {len(result.differing)}. "
        f"Records without a paper entry: {len(result.records_without_entry)}. "
        f"Paper entries without a record: {len(result.entries_without_record)}.",
        "",
        "Matching is by title, so an entry counts as found even where its text "
        "differs in every other respect.",
        "",
        "## Records without an entry in the paper",
        "",
    ]
    out.extend(
        f"- `{r.get('id')}` {render_entry(r)}" for r in result.records_without_entry
    )
    out.extend(["", "## Paper entries without a record", ""])
    out.extend(f"- {entry}" for entry in result.entries_without_record)
    out.extend(["", "## Entries whose text differs", ""])
    for generated, found in result.differing:
        out.append(f"- generated: {generated}")
        out.append(f"  paper:     {found}")
    return "\n".join(out)


def main() -> None:
    if sys.platform == "win32":
        sys.stdout.reconfigure(encoding="utf-8")
    here = Path(__file__).resolve()
    parser = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    parser.add_argument(
        "--references",
        type=Path,
        default=here.parents[1] / "references",
        help="folder of CSL JSON records (default: references/ of this vault)",
    )
    parser.add_argument(
        "--paper",
        type=Path,
        default=here.parents[2] / "knowledge" / "paper.md",
        help="paper to compare against (default: knowledge/paper.md of the repository)",
    )
    parser.add_argument(
        "--compare",
        action="store_true",
        help="report the differences instead of printing the bibliography",
    )
    args = parser.parse_args()

    records = load_records(args.references)
    if not records:
        sys.exit(f"no CSL records found in {args.references}")
    if args.compare:
        print(_report(compare(records, paper_entries(args.paper))))
    else:
        print("\n".join(f"- {entry}" for entry in render_bibliography(records)))


if __name__ == "__main__":
    main()
