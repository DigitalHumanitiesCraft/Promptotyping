#!/usr/bin/env python3
"""Check the site's own claims against each other.

The site publishes the same statement in more than one place: the template
catalogue in data/, the convention page in _content/, the anchor scheme in
CLAUDE.md and the files on disk. Two sources for one statement drift, and on
2026-07-26 three of them had. This script is the check the method's own
verification function asks for, applied to the site that specifies it.

Run from the repository root:  python tools/check_consistency.py
Add --check-urls to also resolve every address the gallery publishes. That pass
is opt-in because it needs the network and this script runs before every commit.
Exit code 0 when every check passes, 1 otherwise.
"""

import json
import pathlib
import re
import sys
import urllib.error
import urllib.request

ROOT = pathlib.Path(__file__).resolve().parent.parent
CATALOGUE = ROOT / "data" / "promptotyping-documents.json"
CONVENTION = ROOT / "_content" / "konvention.md"
TEMPLATE_DIR = ROOT / "_content" / "promptotyping-document"
CLAUDE_MD = ROOT / "CLAUDE.md"
CASES = ROOT / "data" / "case-studies.json"
CASE_DIR = ROOT / "_content" / "case-studies"

# The five epistemic functions of the paper's interface typology (section 4.2).
INTERFACE_TYPES = {"verification", "exploration", "edition", "capture", "audit"}

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


def load_cases():
    return json.loads(CASES.read_text(encoding="utf-8"))


def check_gallery(data):
    """The gallery's own conditions: files, closed vocabularies, labels.

    The gallery is the part of the site that ages fastest, because every card
    points at a repository, a demo or a video that someone else may move.
    """
    cases = data["caseStudies"]
    labels = data["_meta"]["use_case_labels"]

    with_text = {c["id"] for c in cases if c.get("deep_page")}
    on_disk = {p.stem for p in CASE_DIR.glob("*.md")}
    for case_id in sorted(with_text - on_disk):
        fail("gallery", "%s claims a depth page, no _content/case-studies/%s.md"
             % (case_id, case_id))
    for case_id in sorted(on_disk - with_text):
        fail("gallery", "_content/case-studies/%s.md exists but no card claims it"
             % case_id)

    seen = set()
    for case in cases:
        case_id = case["id"]
        if case_id in seen:
            fail("gallery", "duplicate card id %s" % case_id)
        seen.add(case_id)

        use_case = case.get("useCase")
        if use_case not in labels:
            fail("gallery", "%s carries useCase %r, not in use_case_labels"
                 % (case_id, use_case))
        elif case.get("useCaseLabel") != labels[use_case]:
            fail("gallery", "%s label %r does not match use_case_labels[%r]"
                 % (case_id, case.get("useCaseLabel"), use_case))

        for kind in case.get("interfaceTypes") or []:
            if kind not in INTERFACE_TYPES:
                fail("gallery", "%s carries interface type %r, not one of the five"
                     % (case_id, kind))


def urls_of(cases):
    for case in cases:
        for field in ("repo_url", "demo_url", "video_url"):
            url = case.get(field)
            if url:
                yield case["id"], field, url


def check_urls(data):
    """Resolve every address the gallery publishes.

    A dead link in the gallery is a claim the site cannot keep. Two of them sat
    there until the consistency pass of 2026-07-25 found them by hand.
    """
    for case_id, field, url in urls_of(data["caseStudies"]):
        request = urllib.request.Request(url, method="HEAD", headers={
            "User-Agent": "Promptotyping-consistency-check",
        })
        try:
            with urllib.request.urlopen(request, timeout=20) as response:
                status = response.status
        except urllib.error.HTTPError as error:
            status = error.code
        except Exception as error:  # network, DNS, TLS, redirect loop
            fail("urls", "%s %s %s does not resolve (%s)"
                 % (case_id, field, url, type(error).__name__))
            continue
        if status >= 400:
            fail("urls", "%s %s %s answers %d" % (case_id, field, url, status))


def main():
    documents = load_catalogue()
    conv_types = convention_function_types()

    check_types_agree(documents, conv_types)
    check_files_exist(documents)
    check_claude_md_slugs(documents)

    cases = load_cases()
    check_gallery(cases)

    groups = 4
    if "--check-urls" in sys.argv:
        check_urls(cases)
        groups = 5
    else:
        note("URL resolution skipped; run with --check-urls to include it")

    for message in notes:
        print("note:  %s" % message)
    for message in failures:
        print("FAIL:  %s" % message)
    print("%d check group(s), %d failure(s)" % (groups, len(failures)))
    return 1 if failures else 0


if __name__ == "__main__":
    sys.exit(main())
