#!/usr/bin/env python3
"""Check the site's own claims against each other.

The site publishes the same statement in more than one place: the template
catalogue in data/, the convention page in _content/, the anchor scheme in
CLAUDE.md and the files on disk. Two sources for one statement drift, and on
2026-07-26 three of them had. This script is the check the method's own
verification function asks for, applied to the site that specifies it.

Run from the repository root:  python tools/check_consistency.py
Exit code 0 when every check passes, 1 otherwise.
"""

import json
import pathlib
import re
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
CATALOGUE = ROOT / "data" / "promptotyping-documents.json"
CONVENTION = ROOT / "_content" / "konvention.md"
TEMPLATE_DIR = ROOT / "_content" / "promptotyping-document"
CLAUDE_MD = ROOT / "CLAUDE.md"

# Templates written but deliberately not wired into the catalogue, with the
# reason. A slug may sit here or in the catalogue, never in neither. Empty
# since 2026-07-26, when technology entered the catalogue.
HELD_BACK = {}

failures = []
notes = []


def fail(check, message):
    failures.append("%s: %s" % (check, message))


def note(message):
    notes.append(message)


def load_catalogue():
    return json.loads(CATALOGUE.read_text(encoding="utf-8"))["documents"]


def convention_function_types():
    """The type column of the reading-heuristic table, keyed by function."""
    text = CONVENTION.read_text(encoding="utf-8")
    types = {}
    for line in text.splitlines():
        if not line.startswith("|"):
            continue
        cells = [c.strip() for c in line.strip("|").split("|")]
        if len(cells) < 4:
            continue
        function, kind = cells[0], cells[1]
        if kind.split()[0] in ("Declarative", "Process", "Action"):
            types[function] = kind
    return types


def matching_rows(function, conv_types):
    """Convention rows for a catalogue function.

    The catalogue states the function in prose ("Navigation plus term lexicon")
    while the convention uses the bare name, sometimes split into variants
    ("Specification (formal)", "Specification (narrative)"). Match on the
    leading word and require the variants to agree.
    """
    exact = conv_types.get(function)
    if exact:
        return {function: exact}
    head = function.split()[0].rstrip(",")
    return {name: kind for name, kind in conv_types.items()
            if name.split()[0].rstrip(",") == head}


def check_types_agree(documents, conv_types):
    """Every catalogue entry states a type; the convention states it too."""
    for doc in documents:
        function = doc.get("funktion", "").split("(")[0].strip()
        declared = doc.get("typ", "")
        rows = matching_rows(function, conv_types)
        if not rows:
            fail("types", "no convention row for function %r (template %s)"
                 % (function, doc["slug"]))
            continue
        kinds = {k.split()[0] for k in rows.values()}
        if len(kinds) > 1:
            fail("types", "convention rows %s disagree on the type of %r"
                 % (sorted(rows), function))
            continue
        expected = kinds.pop()
        if declared.split()[0] != expected:
            fail("types", "%s is %r in the catalogue and %r in the convention"
                 % (doc["slug"], declared, expected))


def check_files_exist(documents):
    """Catalogue and template folder cover each other, held-back slugs aside."""
    catalogue_slugs = {d["slug"] for d in documents}
    on_disk = {p.stem for p in TEMPLATE_DIR.glob("*.md")}

    for slug in sorted(catalogue_slugs - on_disk):
        fail("files", "catalogue lists %s, no _content/promptotyping-document/%s.md"
             % (slug, slug))
    for slug in sorted(on_disk - catalogue_slugs):
        if slug in HELD_BACK:
            note("%s held back from the catalogue: %s" % (slug, HELD_BACK[slug]))
        else:
            fail("files", "template %s.md exists but no catalogue entry" % slug)


def check_claude_md_slugs(documents):
    """The action layer publishes the slug list; it must be the catalogue's."""
    text = CLAUDE_MD.read_text(encoding="utf-8")
    match = re.search(r"Slugs?: (.+?)\.", text)
    if not match:
        match = re.search(r"`data`.*?`integration`", text, re.S)
    if not match:
        note("no slug list found in CLAUDE.md; skipped")
        return
    listed = set(re.findall(r"`([a-z-]+)`", match.group(0)))
    catalogue_slugs = {d["slug"] for d in documents}
    missing = catalogue_slugs - listed
    if missing:
        fail("slugs", "in the catalogue but not in the CLAUDE.md slug list: %s"
             % ", ".join(sorted(missing)))


def main():
    documents = load_catalogue()
    conv_types = convention_function_types()

    check_types_agree(documents, conv_types)
    check_files_exist(documents)
    check_claude_md_slugs(documents)

    for message in notes:
        print("note:  %s" % message)
    for message in failures:
        print("FAIL:  %s" % message)
    print("%d check group(s), %d failure(s)" % (3, len(failures)))
    return 1 if failures else 0


if __name__ == "__main__":
    sys.exit(main())
