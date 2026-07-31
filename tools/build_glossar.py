#!/usr/bin/env python3
"""Render _content/glossar.md from data/glossar.json.

The glossary exists twice: as the data source the site fetches at runtime and as
the Markdown mirror a reader or a machine retrieves over HTTP. Part 5 of the
specification requires that a generated document is rendered by a script rather
than kept by hand, and this file was the one place on the site that broke that
rule. The body is fully derivable from the JSON; the frontmatter, the H1 and the
lead paragraph are not, so they sit in HEADER below and are the only hand-written
part of the output.

Every path is resolved from this file, so the working directory does not matter:

    python tools/build_glossar.py

Add --check to compare instead of write; exit code 1 on any difference.
"""

from __future__ import annotations

import argparse
import json
import pathlib
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
SOURCE = ROOT / "data" / "glossar.json"
TARGET = ROOT / "_content" / "glossar.md"

# The non-derivable head of the file, taken verbatim from the mirror. The
# version and the mirroring date are operator-set and do not follow from the
# data, so they are edited here when the mirror is republished.
HEADER = """---
title: Glossary
slug: glossar
version: "0.4"
status: complete
source: data/glossar.json (authoritative data source); generated, not maintained by hand
mirrored: 2026-07-31
machine-url: https://dhcraft.org/Promptotyping/_content/glossar.md
---

# Glossary

Terms of the Promptotyping method and of the methodology site. The authoritative data source is `data/glossar.json`; this file is generated from it and carries the same content. Each entry gives the kind of thing the term names, a short definition for tooltips, a full definition and its sources. A source that this site holds an address for carries it as a hash anchor; the rest stay text. Terms the paper text does not carry are marked as site vocabulary in their source list."""


class EntryError(Exception):
    """An entry the generator cannot render, named in the message.

    A missing field used to end the run in a bare KeyError, before the check
    written for that case in check_consistency.py could say which entry was at
    fault. Every read below therefore names its entry and raises this instead.
    """


def entry_name(entry: dict, position: int) -> str:
    """What a report calls an entry: its slug, its term, or its position."""
    return str(entry.get("slug") or entry.get("begriff") or "entry %d" % (position + 1))


def field(entry: dict, key: str, position: int) -> object:
    value = entry.get(key)
    if not value:
        raise EntryError("the glossary entry %s carries no %s"
                         % (entry_name(entry, position), key))
    return value


def render_source(source: dict, where: str) -> str:
    """One source, as a link where it has an anchor and as text where it has none."""
    text = source.get("text")
    if not text:
        raise EntryError("a source of the glossary entry %s carries no text" % where)
    if source.get("anker"):
        return "[%s](#%s)" % (text, source["anker"])
    return text


def render(entries: list[dict], categories: dict) -> str:
    """The mirror text for a list of glossary entries, in the order given.

    Five fields carry into the Markdown. Any further field, such as the search
    form the term index reads, stays in the JSON and is not rendered. The
    category renders as its word, the way the site renders it beside its mark.
    """
    blocks = [HEADER]
    for position, entry in enumerate(entries):
        where = entry_name(entry, position)
        sources = "; ".join(render_source(s, where)
                            for s in field(entry, "quellen", position))
        kategorie = field(entry, "kategorie", position)
        blocks.append(
            "### %s\n\nKind: %s\n\n%s\n\n%s\n\nSource: %s"
            # A category the vocabulary does not name falls through as its own
            # key rather than stopping the generator; check_consistency.py is
            # where that case is reported.
            % (field(entry, "begriff", position), categories.get(kategorie, kategorie),
               field(entry, "kurz", position), field(entry, "voll", position), sources)
        )
    return "\n\n".join(blocks) + "\n"


def build() -> str:
    data = json.loads(SOURCE.read_text(encoding="utf-8"))
    if not data.get("eintraege"):
        raise EntryError("%s carries no eintraege list" % SOURCE.name)
    return render(data["eintraege"], (data.get("_meta") or {}).get("kategorien") or {})


def _excerpt(line: str, width: int = 90) -> str:
    """A glossary line is a whole paragraph, so a report quotes its opening."""
    return repr(line if len(line) <= width else line[:width] + "...")


def first_difference(expected: str, actual: str) -> str | None:
    """The first line where the two texts differ, phrased for a check report."""
    want = expected.split("\n")
    have = actual.split("\n")
    for i in range(max(len(want), len(have))):
        left = want[i] if i < len(want) else None
        right = have[i] if i < len(have) else None
        if left == right:
            continue
        if left is None:
            return "line %d: file has %s, the generator ends here" % (i + 1, _excerpt(right))
        if right is None:
            return "line %d: file ends here, the generator has %s" % (i + 1, _excerpt(left))
        return "line %d: file has %s, the generator renders %s" % (
            i + 1, _excerpt(right), _excerpt(left))
    return None


def read_target() -> str:
    """The mirror with its line endings normalised.

    check_consistency.py normalises the same way, so a clone that checked the
    file out with CRLF endings cannot make the two checks contradict each other.
    """
    return TARGET.read_text(encoding="utf-8").replace("\r\n", "\n")


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    parser.add_argument("--check", action="store_true",
                        help="compare only, write nothing")
    args = parser.parse_args()

    try:
        expected = build()
    except EntryError as error:
        print("FAIL: %s" % error, file=sys.stderr)
        return 1
    if not args.check:
        # newline="" keeps the LF endings the repository stores on every platform.
        TARGET.write_text(expected, encoding="utf-8", newline="")
        print("OK: wrote %s" % TARGET.relative_to(ROOT).as_posix())
        return 0

    difference = first_difference(expected, read_target())
    if difference:
        print("FAIL: %s is out of date with data/glossar.json"
              % TARGET.relative_to(ROOT).as_posix(), file=sys.stderr)
        print("      %s" % difference, file=sys.stderr)
        return 1
    print("OK: %s matches data/glossar.json" % TARGET.relative_to(ROOT).as_posix())
    return 0


if __name__ == "__main__":
    sys.exit(main())
