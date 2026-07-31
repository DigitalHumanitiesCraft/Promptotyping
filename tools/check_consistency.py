#!/usr/bin/env python3
"""Check the site's own claims against each other.

The site publishes the same statement in more than one place: the template
catalogue in data/, the convention page in _content/, the anchor scheme in
CLAUDE.md and the files on disk. Two sources for one statement drift, and on
2026-07-26 three of them had. This script is the check the method's own
verification function asks for, applied to the site that specifies it.

Every path is resolved from this file, so the working directory does not matter:

    python tools/check_consistency.py

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

TOOLS = pathlib.Path(__file__).resolve().parent
ROOT = TOOLS.parent
CATALOGUE = ROOT / "data" / "promptotyping-documents.json"
CONVENTION = ROOT / "_content" / "konvention.md"
TEMPLATE_DIR = ROOT / "_content" / "promptotyping-document"
CLAUDE_MD = ROOT / "CLAUDE.md"
README = ROOT / "README.md"
CASES = ROOT / "data" / "case-studies.json"
CASE_DIR = ROOT / "_content" / "case-studies"
PAPER = ROOT / "knowledge" / "paper.md"
CONTENT_DIR = ROOT / "_content"
PRAXIS = CONTENT_DIR / "praxis.md"
GLOSSAR_JSON = ROOT / "data" / "glossar.json"
GLOSSAR_MD = CONTENT_DIR / "glossar.md"
VAULT_JSON = ROOT / "data" / "vault.json"
KNOWLEDGE_DIR = ROOT / "knowledge"
VAULT_SOURCES = ROOT / "vault" / "_sources"
JS_DIR = ROOT / "assets" / "js"
NOT_FOUND = ROOT / "404.html"

# The site's own base, as the template: fields and the prose spell it.
SITE_BASE = "dhcraft.org/Promptotyping/"

# tools/ is a folder of scripts rather than a package, so the generator is
# reached by path. The mirror check runs it rather than restating its rules.
sys.path.insert(0, str(TOOLS))
import build_glossar  # noqa: E402

# The header row of the paper's case table, Table 3 in section 4.3 of the
# five-chapter text (promotion of 2026-07-30). Parsing keys on this line rather
# than on a position, so inserting a section cannot move it.
CASE_TABLE_HEADER = "| Case | Data state | Artefact | Central finding | Write-back or acceptance |"

# The anchor prefix a numbered paper heading takes, as headingId in
# assets/js/markdown.js mints it. The port below and the source-type table of
# the glossary both read it from here rather than spelling it out twice.
PAPER_SECTION_PREFIX = "abschnitt-"

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


def load_json(path):
    """A data file, with the file named where it cannot be parsed.

    Every check below reads its subject from one of these files, so a broken one
    ends the run; the message has to say which file it was.
    """
    try:
        return json.loads(path.read_text(encoding="utf-8"))
    except json.JSONDecodeError as error:
        sys.exit("FAIL:  %s is not valid JSON: %s"
                 % (path.relative_to(ROOT).as_posix(), error))


def read_text(path):
    """File text with line endings normalised, the way a browser reads it."""
    return path.read_text(encoding="utf-8").replace("\r\n", "\n")


def load_catalogue():
    return load_json(CATALOGUE)["documents"]


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
    """The action layer publishes the slug list; it must be the catalogue's.

    The list is read as the remainder of the line that introduces it, so a
    change of the count word or of the punctuation inside the list cannot hide
    it. A list this check no longer finds is a failure rather than a note: a
    check whose subject has disappeared must not stay green, and naming the
    slugs as literals here would restore the second copy the check exists for.
    """
    text = read_text(CLAUDE_MD)
    match = re.search(r"^.*\bSlugs?:[ \t]*(.+)$", text, re.M)
    if not match:
        fail("slugs", "CLAUDE.md carries no slug list; the anchor scheme has to "
                      "publish one, and this check has no subject without it")
        return
    listed = set(re.findall(r"`([a-z][a-z-]*)`", match.group(1)))
    catalogue_slugs = {d["slug"] for d in documents}
    missing = catalogue_slugs - listed
    if missing:
        fail("slugs", "in the catalogue but not in the CLAUDE.md slug list: %s"
             % ", ".join(sorted(missing)))


def load_cases():
    return load_json(CASES)


def check_gallery(data):
    """The gallery's own conditions: files, closed vocabularies, labels.

    The gallery is the part of the site that ages fastest, because every card
    points at a repository, a demo or a video that someone else may move.
    """
    cases = data["caseStudies"]
    roles = data["_meta"]["role_labels"]

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

        role = case.get("role")
        if role not in roles:
            fail("gallery", "%s carries role %r, not in role_labels"
                 % (case_id, role))

        for kind in case.get("interfaceTypes") or []:
            if kind not in INTERFACE_TYPES:
                fail("gallery", "%s carries interface type %r, not one of the five"
                     % (case_id, kind))

        # A card in the evidence block claims a row of the paper's case table
        # (Table 3, section 4.3), and only there.
        if role == "evidence" and not case.get("paper_row"):
            fail("gallery", "%s has role evidence but claims no case-table row" % case_id)
        if role != "evidence" and case.get("paper_row"):
            fail("gallery", "%s claims case-table row %r but its role is %r"
                 % (case_id, case["paper_row"], role))


def paper_case_table():
    """The paper's case table (Table 3, section 4.3), as the set of case names.

    The five-chapter text carries no per-case interface types, so the table
    yields names alone; the interface typology lives in the gallery data.
    """
    rows = set()
    lines = PAPER.read_text(encoding="utf-8").splitlines()
    try:
        start = lines.index(CASE_TABLE_HEADER)
    except ValueError:
        fail("evidence", "case-table header row not found in knowledge/paper.md")
        return rows
    for line in lines[start + 2:]:
        if not line.startswith("|"):
            break
        cells = [c.strip() for c in line.strip("|").split("|")]
        if len(cells) < 3:
            break
        rows.add(cells[0].replace("*", "").strip())
    return rows


def check_evidence_reachable(data):
    """Every case the paper analyses is reachable on the site.

    A reader who comes from the paper wanting to check a claim of section 4
    has to find the project. This is the condition the gallery exists for, and
    it held for ten of thirteen projects until 2026-07-26.
    """
    table = paper_case_table()
    if not table:
        return
    claimed = {}
    for case in data["caseStudies"]:
        name = case.get("paper_row")
        if not name:
            continue
        if name in claimed:
            fail("evidence", "cards %s and %s both claim case-table row %r"
                 % (claimed[name], case["id"], name))
            continue
        claimed[name] = case["id"]

    for name in sorted(set(table) - set(claimed)):
        fail("evidence", "the case table lists %r; no card claims it" % name)
    for name in sorted(set(claimed) - set(table)):
        fail("evidence", "card %s claims case-table row %r; the paper has no such row"
             % (claimed[name], name))


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


def check_glossar_mirror():
    """_content/glossar.md is what tools/build_glossar.py renders.

    Part 5 states that a generated document is rendered by a script. The mirror
    was kept by hand until 2026-07-26, which is the one place on the site where
    that rule was broken; the generator now decides what the file says.
    """
    try:
        expected = build_glossar.build()
    except build_glossar.EntryError as error:
        fail("glossar", "the generator cannot render data/glossar.json: %s" % error)
        return
    difference = build_glossar.first_difference(expected, read_text(GLOSSAR_MD))
    if difference:
        fail("glossar", "_content/glossar.md is not what build_glossar.py renders "
                        "from data/glossar.json; %s" % difference)


# The source types data/glossar.json declares, each with the anchor prefix its
# addresses carry. A type mapped to None takes no anchor at all.
SOURCE_PREFIXES = {
    "paper": PAPER_SECTION_PREFIX,
    "literature": "ref-",
    "vault": "vault-",
    "page": "",
    "text": None,
}


def reference_ids():
    """The ref-* anchors of A30, rebuilt from the reference list of the paper.

    Port of indexReferences in assets/js/pages-paper.js. The id of an entry is
    the surname of its first author with the year, and the first entry to claim
    a key keeps it. Without this the ref- prefix alone would pass any string.
    """
    text = read_text(PAPER)
    if "## References" not in text:
        return set()
    found = set()
    for line in text.split("## References", 1)[1].split("\n"):
        line = line.strip()
        if not line.startswith("- "):
            continue
        plain = line[2:].replace("*", "")
        match = (re.search(r"^([^,]+),.*?\((\d{4}[a-z]?)\)", plain)
                 or re.search(r"^([^,]+),.*?\b(\d{4}[a-z]?)\b", plain))
        if match:
            found.add("ref-" + slugify(match.group(1)) + "-" + match.group(2))
    return found


def glossar_categories(meta):
    """The taxonomy vocabulary, and the mark the site draws for each of its values.

    The wording is data and stands in _meta.kategorien; the mark is presentation
    and stands as CATEGORY_MARKS in pages-glossar.js. A value that carries only
    one of the two renders as a category without a mark or as a mark nothing
    names, so the two are held against each other here (A36).
    """
    vocabulary = set(meta.get("kategorien") or {})
    # The values are SVG fragments in single quotes, so only the keys are read.
    source = js_literal(read_text(JS_DIR / "pages-glossar.js"), "CATEGORY_MARKS")
    if source is None:
        fail("glossar", "pages-glossar.js declares no CATEGORY_MARKS table")
        return vocabulary
    marks = set(re.findall(r'^\s*"([a-z-]+)":', source, re.M))
    for value in sorted(vocabulary - marks):
        fail("glossar", "the category %r has no mark in CATEGORY_MARKS" % value)
    for value in sorted(marks - vocabulary):
        fail("glossar", "CATEGORY_MARKS draws %r, which _meta.kategorien does "
                        "not name" % value)
    return vocabulary


def check_glossar_sources(anchors):
    """Every glossary entry names its kind and its carriers, and each address holds.

    The source list replaced a free-text field on 2026-07-29 (A34) and the
    taxonomy field arrived with A36, so the entry now states what kind of thing
    the term names, which carrier is of which kind, and where each one lives.
    Four ways this can go wrong silently: a category the render table does not
    know, a source type outside the declared vocabulary, an anchor under the
    wrong family, and a reference key that no entry of the paper's list mints.
    """
    refs = reference_ids()
    data = load_json(GLOSSAR_JSON)
    categories = glossar_categories(data["_meta"])
    for entry in data["eintraege"]:
        slug = entry["slug"]
        if entry.get("kategorie") not in categories:
            fail("glossar", "%s is classified as %r, which _meta.kategorien does "
                            "not name" % (slug, entry.get("kategorie")))
        sources = entry.get("quellen") or []
        if not sources:
            fail("glossar", "the entry %s names no source" % slug)
        for source in sources:
            typ = source.get("typ")
            anchor = source.get("anker")
            if typ not in SOURCE_PREFIXES:
                fail("glossar", "%s carries a source of type %r, which the schema "
                                "does not declare" % (slug, typ))
                continue
            prefix = SOURCE_PREFIXES[typ]
            if prefix is None:
                if anchor:
                    fail("glossar", "%s gives the text source %r an anchor #%s"
                         % (slug, source.get("text"), anchor))
                continue
            if not anchor:
                fail("glossar", "%s carries a %s source without an anchor" % (slug, typ))
                continue
            if not anchor.startswith(prefix):
                fail("glossar", "%s calls #%s a %s source; those carry the prefix %r"
                     % (slug, anchor, typ, prefix))
            if typ == "literature":
                if anchor not in refs:
                    fail("glossar", "%s cites #%s; the reference list of the paper "
                                    "mints no such id" % (slug, anchor))
            elif not is_declared(anchor, anchors):
                fail("glossar", "%s links to #%s; nothing on the site declares that "
                                "anchor" % (slug, anchor))


# ---------------------------------------------------------------------------
# Anchor resolution
#
# The failure class this group exists for: a value that is at once display text
# and identifier. Translating a heading moves its anchor, renaming a card moves
# its card id, and nothing complains, because both sides read plausibly on their
# own. The English pass of 2026-07-26 hit it three times.
#
# The declared side is read out of the same tables the site reads at run time.
# Restating any of those lists in Python would create the second copy whose
# drift this group is meant to catch, so every table below is parsed from its
# source file.
# ---------------------------------------------------------------------------

CLOSING = {"{": "}", "[": "]"}


def js_literal(text, name):
    """Source of the object or array literal assigned to `var name`.

    Scans for the matching bracket while skipping string contents, so a nested
    object or a bracket inside a string cannot end the literal early.
    """
    match = re.search(r"\bvar\s+%s\s*=\s*([\[{])" % re.escape(name), text)
    if not match:
        return None
    opener = match.group(1)
    closer = CLOSING[opener]
    depth = 0
    quote = None
    i = match.start(1)
    while i < len(text):
        char = text[i]
        if quote:
            if char == "\\":
                i += 2
                continue
            if char == quote:
                quote = None
        elif char in "\"'":
            quote = char
        elif char == opener:
            depth += 1
        elif char == closer:
            depth -= 1
            if depth == 0:
                return text[match.start(1):i + 1]
        i += 1
    return None


def js_string_map(text, name):
    """String key/value pairs of a flat JS object literal, quoted keys or bare."""
    source = js_literal(text, name)
    if source is None:
        fail("anchors", "no object literal %s found in the JavaScript" % name)
        return {}
    pairs = re.findall(r'(?:"([^"]*)"|([A-Za-z_$][\w$.-]*))\s*:\s*"([^"]*)"', source)
    return {(quoted or bare): value for quoted, bare, value in pairs}


def registry_pages(registry_js):
    """The page ids of PAGES, in registry order."""
    source = js_literal(registry_js, "PAGES") or ""
    return re.findall(r'\{\s*id:\s*"([^"]+)"', source)


def anchor_families(registry_js):
    """ANCHOR_FAMILIES as (prefix, page, segment); segment is None for null."""
    source = js_literal(registry_js, "ANCHOR_FAMILIES") or ""
    out = []
    for prefix, page, segment in re.findall(
            r'\{\s*prefix:\s*"([^"]+)",\s*page:\s*"([^"]+)",'
            r'\s*segment:\s*(?:"([^"]+)"|null)\s*\}', source):
        out.append((prefix, page, segment or None))
    return out


def paper_anchor_pattern(registry_js):
    """The PAPER_ANCHOR regex of registry.js, reused rather than restated."""
    match = re.search(r"var PAPER_ANCHOR = /(.+?)/;", registry_js)
    return re.compile(match.group(1)) if match else re.compile(r"^$")


def slugify(text):
    """Port of slugify in assets/js/core.js."""
    lowered = text.lower()
    for umlaut, replacement in (("ä", "ae"), ("ö", "oe"), ("ü", "ue"), ("ß", "ss")):
        lowered = lowered.replace(umlaut, replacement)
    return re.sub(r"[^a-z0-9]+", "-", lowered).strip("-")


def heading_id(text, overrides):
    """Port of headingId in assets/js/markdown.js, overrides included."""
    plain = re.sub(r"<[^>]*>", "", text).strip()
    numbered = re.match(r"^(\d+(?:\.\d+)*)\.?\s+([\s\S]*)$", plain)
    if numbered:
        anchor = PAPER_SECTION_PREFIX + numbered.group(1).replace(".", "-") + "-" + \
            slugify(numbered.group(2))
    else:
        anchor = slugify(plain)
    return overrides.get(anchor, anchor)


def unique_ids(ids):
    """Port of uniqueHeadingId: the nth repeat of an id gets the suffix -n."""
    used = {}
    out = []
    for anchor in ids:
        if anchor not in used:
            used[anchor] = 1
            out.append(anchor)
            continue
        used[anchor] += 1
        out.append("%s-%d" % (anchor, used[anchor]))
    return out


# Known input and output of the three ports above, read off the JavaScript they
# port: slugify in assets/js/core.js, headingId and uniqueHeadingId in
# assets/js/markdown.js. The cases cover what the paper and the practice page
# actually put through them, umlauts and the sharp s, a character outside the
# alphabet, punctuation runs and edge dashes, a numbered heading at both depths,
# an override and the collision suffix.
SLUGIFY_CASES = (
    ("Grundlagen der Prüfung", "grundlagen-der-pruefung"),
    ("Öffentliche Straße", "oeffentliche-strasse"),
    ("Data, Capture & Audit!", "data-capture-audit"),
    ("  --Trailing--  ", "trailing"),
    ("Café", "caf"),
    ("2026-07-30", "2026-07-30"),
)

HEADING_ID_CASES = (
    ("1. Introduction", {}, "abschnitt-1-introduction"),
    ("4.3 Cross-case findings", {}, "abschnitt-4-3-cross-case-findings"),
    ("References", {}, "references"),
    ("References", {"references": "literatur"}, "literatur"),
    ("<em>Emphasis</em> in a heading", {}, "emphasis-in-a-heading"),
    ("A. Not a number", {}, "a-not-a-number"),
)

UNIQUE_ID_CASES = (
    (["a", "b", "a", "a", "b"], ["a", "b", "a-2", "a-3", "b-2"]),
)


def check_ports():
    """The three ports of the JavaScript still compute what the browser computes.

    slugify, the heading-id generator and its collision suffix decide the anchor
    set every check of the group above is held against. A port that drifts from
    the JavaScript does not report anything; it turns those checks into silent
    passes, which is why the rebuilt resolver carries a self-test of the same
    kind in check_subpath_handover.
    """
    for text, expected in SLUGIFY_CASES:
        actual = slugify(text)
        if actual != expected:
            fail("ports", "slugify(%r) gives %r; slugify in assets/js/core.js "
                          "gives %r" % (text, actual, expected))
    for text, overrides, expected in HEADING_ID_CASES:
        actual = heading_id(text, overrides)
        if actual != expected:
            fail("ports", "heading_id(%r) gives %r; headingId in "
                          "assets/js/markdown.js gives %r" % (text, actual, expected))
    for ids, expected in UNIQUE_ID_CASES:
        actual = unique_ids(ids)
        if actual != list(expected):
            fail("ports", "unique_ids(%r) gives %r; uniqueHeadingId in "
                          "assets/js/markdown.js gives %r" % (ids, actual, expected))


def markdown_headings(path, levels):
    """Heading texts of a Markdown file, fenced code blocks skipped."""
    out = []
    fenced = False
    for line in read_text(path).split("\n"):
        if re.match(r"^\s*(```|~~~)", line):
            fenced = not fenced
            continue
        if fenced:
            continue
        match = re.match(r"^(#{1,6})\s+(.*?)\s*#*\s*$", line)
        if match and len(match.group(1)) in levels:
            out.append(match.group(2))
    return out


def plain_inline(text):
    """Markdown inline markup removed, the way textContent sees a heading.

    The praxis anchors are built from the rendered heading, the paper anchors
    from the raw Markdown; only this path needs the stripping.
    """
    text = re.sub(r"\[([^\]]*)\]\([^)]*\)", r"\1", text)
    return text.replace("`", "").replace("**", "").replace("*", "").replace("_", "")


# The script files this group reads its declarations out of. A rename would
# otherwise end the run in a bare KeyError that says nothing about what is
# missing or why the check needed it.
DECLARING_SCRIPTS = ("registry.js", "markdown.js", "pages-glossar.js",
                     "pages-content.js", "pages-paper.js")


def declared_anchors(js_texts):
    """Every anchor the site mounts, gathered from the tables that mount it."""
    by_name = {pathlib.PurePosixPath(k).name: v for k, v in js_texts.items()}
    for name in DECLARING_SCRIPTS:
        if name not in by_name:
            sys.exit("FAIL:  assets/js/%s is gone; the anchor checks read the "
                     "declared side of the site out of it" % name)
    overrides = js_string_map(by_name["markdown.js"], "HEADING_ID_OVERRIDES")
    konzept_aliases = js_string_map(by_name["pages-glossar.js"], "KONZEPT_ALIASES")
    praxis_aliases = js_string_map(by_name["pages-content.js"], "PRAXIS_ALIASES")
    paper_aliases = js_string_map(by_name["pages-paper.js"], "PAPER_ANCHOR_ALIASES")

    anchors = set(registry_pages(by_name["registry.js"]))

    for doc in load_json(CATALOGUE)["documents"]:
        anchors.add("promptotyping-document-" + doc["slug"])
    glossar_slugs = [e["slug"] for e in load_json(GLOSSAR_JSON)["eintraege"]]
    anchors.update("glossar-" + slug for slug in glossar_slugs)
    # handleSpecialAnchor maps #konzept-x through KONZEPT_ALIASES and falls back
    # to x itself, so a bare glossary slug is addressable as a concept too.
    anchors.update("konzept-" + alias for alias in konzept_aliases)
    anchors.update("konzept-" + slug for slug in glossar_slugs)
    for case in load_json(CASES)["caseStudies"]:
        anchors.add("case-" + case["id"])
    vault = load_json(VAULT_JSON)
    anchors.update("vault-" + claim["slug"] for claim in vault["claims"])
    anchors.update("vault-topic-" + topic["slug"] for topic in vault["topics"])

    praxis_ids = ["praxis-" + slugify(plain_inline(h))
                  for h in markdown_headings(PRAXIS, (2, 3))]
    anchors.update(praxis_ids)
    anchors.update(praxis_aliases)

    paper_ids = unique_ids([heading_id(h, overrides)
                            for h in markdown_headings(PAPER, (1, 2, 3, 4, 5, 6))])
    anchors.update(paper_ids)
    anchors.update(paper_aliases)

    # Block anchors written as literals in the JavaScript, plus the host ids
    # that a *_ID constant names.
    for text in js_texts.values():
        anchors.update(re.findall(r'\bid="([a-z][a-z0-9-]*)"', text))
        anchors.update(re.findall(r'\bvar [A-Z][A-Z0-9_]*_ID = "([a-z][a-z0-9-]*)"', text))

    # An alias whose target does not exist is a dead anchor that reports nothing.
    for alias, target in sorted(praxis_aliases.items()):
        if target not in praxis_ids:
            fail("anchors", "PRAXIS_ALIASES sends %s to #%s; no praxis heading "
                            "carries that anchor" % (alias, target))
    for alias, target in sorted(paper_aliases.items()):
        if target not in paper_ids:
            fail("anchors", "PAPER_ANCHOR_ALIASES sends %s to #%s; no paper heading "
                            "carries that anchor" % (alias, target))
    for alias, target in sorted(konzept_aliases.items()):
        if target not in glossar_slugs:
            fail("anchors", "KONZEPT_ALIASES sends konzept-%s to the glossary entry "
                            "%s, which data/glossar.json does not hold" % (alias, target))

    return anchors


# Anchor families the code mints per item at render time rather than declaring:
# figures, reference-list entries and the footnote apparatus. A link into one of
# them is checked by its prefix, since the item set follows from the paper text.
# ref- is deliberately weaker here than in the glossary: indexReferences in
# pages-paper.js mints one id per entry of the paper's reference list while the
# paper renders, so the set exists only after a render. A hand-written #ref-
# link therefore passes on its prefix alone everywhere except in the glossary,
# where check_glossar_sources rebuilds those ids from the paper's own list and
# rejects a key the list does not mint. The glossary is the one place that
# carries such links by hand, which is why the strict test sits there.
GENERATED_PREFIXES = ("figure-", "ref-", "fn-", "fnref-")


def is_declared(anchor, anchors):
    return anchor in anchors or anchor.startswith(GENERATED_PREFIXES)


def resolve_site_url(url, page_ids, families, paper_anchor):
    """Port of resolveTemplateUrl in assets/js/registry.js."""
    rest = re.sub(r"^https?://", "", url)
    if rest.startswith(SITE_BASE):
        rest = rest[len(SITE_BASE):]
    rest = rest.lstrip("/")
    if rest.startswith("#"):
        return rest[1:] or None

    suffix = ""
    if "#" in rest:
        rest, suffix = rest.split("#", 1)
    rest = rest.rstrip("/")
    segments = rest.split("/")

    for prefix, _page, segment in families:
        if segment and segment == segments[0] and len(segments) > 1 and segments[1]:
            anchor = prefix + segments[1]
            if segment == "promptotyping-document" and re.match(r"^v[\d.]+$", suffix):
                anchor += "-" + suffix
            return anchor
    if len(segments) > 1 and segments[1]:
        return None
    if rest in page_ids:
        return rest
    if rest == "konvention":
        return "konvention-v0.1"
    if paper_anchor.search(rest) or any(rest.startswith(p) for p, _, _ in families):
        return rest
    return None


def content_anchor_links():
    """The ](#anchor) links a human wrote into the Markdown under _content/."""
    for path in sorted(CONTENT_DIR.glob("**/*.md")):
        for anchor in re.findall(r"\]\(#([^)\s]+)\)", read_text(path)):
            yield path.relative_to(ROOT).as_posix(), anchor


def js_anchor_links(js_texts):
    """Literal href="#..." strings in the site scripts.

    An href assembled at run time carries no literal to check and is skipped;
    the anchor it builds is covered on the declared side instead.
    """
    for name, text in sorted(js_texts.items()):
        for anchor in re.findall(r'href="#([a-z0-9][a-z0-9.-]*)"', text):
            yield name, anchor


def template_field_urls():
    """The template: url and alias of every frontmatter block that carries one."""
    paths = sorted(KNOWLEDGE_DIR.glob("*.md"))
    if VAULT_SOURCES.is_dir():
        paths += sorted(VAULT_SOURCES.glob("*.md"))
    for path in paths:
        frontmatter = re.match(r"^---\n(.*?)\n---", read_text(path), re.S)
        if not frontmatter:
            continue
        block = re.search(r"^template:\n((?:[ \t]+.*\n?)*)", frontmatter.group(1), re.M)
        if not block:
            continue
        for field, url in re.findall(r"^[ \t]+(url|alias):[ \t]*(\S+)", block.group(1), re.M):
            yield path.relative_to(ROOT).as_posix(), field, url.strip("\"'")


def prose_site_urls():
    """Site addresses named in the two prose documents of the repository root.

    Both spell out the anchor scheme, so the placeholder forms ({slug}, {n}) are
    the schema itself and carry nothing to resolve.
    """
    for path in (CLAUDE_MD, README):
        text = read_text(path)
        name = path.relative_to(ROOT).as_posix()
        for token in re.findall(r"`(#[^`]+)`", text):
            if "{" not in token:
                yield name, token
        for token in re.findall(r"(?:https?://)?dhcraft\.org/Promptotyping/[^\s`)\]\"'<>]*",
                                text):
            token = re.sub(r"^https?://", "", token).rstrip(".,;:")
            if "{" in token or "*" in token or token.rstrip("/") == SITE_BASE.rstrip("/"):
                continue
            yield name, token


HANDOVER_PARAM = "p"


def check_subpath_handover(page_ids, families, paper_anchor):
    """The one subpath vocabulary resolves, and 404.html states none of its own.

    Since 2026-07-26 the router hands the requested path to the application as a
    query parameter and resolveTemplateUrl in registry.js translates it. Two
    things can break that silently. The parameter name is written in one file and
    read in another, and a slug reintroduced into 404.html would restore the
    duplicate table the handover removed.
    """
    text = read_text(NOT_FOUND)
    app = read_text(JS_DIR / "app.js")

    written = re.search(r'\?%s=" \+' % HANDOVER_PARAM, text)
    read = re.search(r'\.get\("(%s)"\)' % HANDOVER_PARAM, app)
    if not written:
        fail("anchors", "404.html no longer hands the path over as ?%s=" % HANDOVER_PARAM)
    if not read:
        fail("anchors", "app.js no longer reads the handover parameter ?%s=" % HANDOVER_PARAM)

    vocabulary = set(page_ids) | {s for _p, _pg, s in families if s}
    for literal in sorted(set(re.findall(r'"([a-z][a-z0-9.-]{2,})"', text)) & vocabulary):
        fail("anchors", "404.html names the address %r; the handover exists so the "
                        "subpath vocabulary stands only in registry.js" % literal)

    # A self-test of the Python rebuild below, which every other anchor check
    # runs through. It holds resolve_site_url against the declarations it reads
    # out of registry.js, so a rebuild that stops understanding a declaration
    # shows up here instead of turning the checks above into silent passes. That
    # the JavaScript resolver agrees is the browser half of the verification.
    for page in sorted(page_ids):
        if resolve_site_url(page, page_ids, families, paper_anchor) != page:
            fail("anchors", "the subpath /%s does not resolve to #%s" % (page, page))
    for prefix, _page, segment in families:
        if not segment:
            continue
        resolved = resolve_site_url(segment + "/probe", page_ids, families, paper_anchor)
        if resolved != prefix + "probe":
            fail("anchors", "the subpath /%s/probe resolves to %s, not to #%sprobe"
                 % (segment, "#" + resolved if resolved else "nothing", prefix))
    if resolve_site_url("konvention", page_ids, families, paper_anchor) != "konvention-v0.1":
        fail("anchors", "the subpath /konvention no longer resolves to #konvention-v0.1")


def check_anchors():
    """Every anchor a hand-written reference names is one the site mounts."""
    js_texts = {p.relative_to(ROOT).as_posix(): read_text(p)
                for p in sorted(JS_DIR.glob("**/*.js"))}
    registry_js = read_text(JS_DIR / "registry.js")
    page_ids = registry_pages(registry_js)
    families = anchor_families(registry_js)
    paper_anchor = paper_anchor_pattern(registry_js)

    anchors = declared_anchors(js_texts)

    for where, anchor in content_anchor_links():
        if not is_declared(anchor, anchors):
            fail("anchors", "%s links to #%s; nothing on the site declares that anchor"
                 % (where, anchor))
    for where, anchor in js_anchor_links(js_texts):
        if not is_declared(anchor, anchors):
            fail("anchors", "%s links to #%s; nothing on the site declares that anchor"
                 % (where, anchor))

    for where, field, url in template_field_urls():
        anchor = resolve_site_url(url, page_ids, families, paper_anchor)
        if anchor is None:
            fail("anchors", "%s: template.%s %s resolves to no anchor" % (where, field, url))
        elif not is_declared(anchor, anchors):
            fail("anchors", "%s: template.%s %s resolves to #%s, which nothing declares"
                 % (where, field, url, anchor))

    for where, token in prose_site_urls():
        anchor = resolve_site_url(token, page_ids, families, paper_anchor)
        if anchor is None:
            fail("anchors", "%s names %s, which resolves to no anchor" % (where, token))
        elif not is_declared(anchor, anchors):
            fail("anchors", "%s names %s, which resolves to #%s, and nothing declares it"
                 % (where, token, anchor))

    check_glossar_sources(anchors)
    check_subpath_handover(page_ids, families, paper_anchor)


# ---------------------------------------------------------------------------
# File and symbol bindings
#
# Statements of the form "`PAGES` in `assets/js/registry.js`" bind a function to
# a file and a name. A cut through the code moves the name and leaves the
# sentence standing; four of them pointed at the wrong file on 2026-07-26.
# ---------------------------------------------------------------------------

SYMBOL_BINDING = re.compile(
    r"`([A-Za-z_][A-Za-z0-9_.$]*)(?:\([^`]*\))?`\s+in\s+`([^`]+\.(?:js|py))`")

# Chronological and dated records are exempt. A journal entry and an archived
# audit are correct as of their date and are not rewritten when the code moves
# afterwards; holding them against today's code would ask a record to stop being
# a record. The statuses come from the vocabulary INDEX.md defines.
DATED_STATUSES = ("archived", "snapshot")
PROCESS_DOCUMENTS = ("journal.md",)


def is_dated_record(path):
    if path.name in PROCESS_DOCUMENTS:
        return True
    frontmatter = re.match(r"^---\n(.*?)\n---", read_text(path), re.S)
    if not frontmatter:
        return False
    status = re.search(r"^status:\s*(\S+)", frontmatter.group(1), re.M)
    return bool(status) and status.group(1) in DATED_STATUSES


def locate_code_file(named):
    """The file a prose statement means, by path or by bare file name."""
    direct = ROOT / named
    if direct.is_file():
        return [direct]
    return [p for p in ROOT.glob("**/" + pathlib.PurePosixPath(named).name)
            if ".git" not in p.parts]


def check_symbol_bindings():
    """Every prose statement binding a symbol to a code file still holds."""
    paths = [CLAUDE_MD] + sorted(KNOWLEDGE_DIR.glob("*.md"))
    for path in paths:
        if path != CLAUDE_MD and is_dated_record(path):
            continue
        where = path.relative_to(ROOT).as_posix()
        for symbol, named in SYMBOL_BINDING.findall(read_text(path)):
            found = locate_code_file(named)
            if not found:
                fail("bindings", "%s puts %s in %s, which is not a file of this repository"
                     % (where, symbol, named))
                continue
            if len(found) > 1:
                fail("bindings", "%s names %s, which matches %d files; state the path"
                     % (where, named, len(found)))
                continue
            if not re.search(r"\b%s\b" % re.escape(symbol), read_text(found[0])):
                fail("bindings", "%s puts %s in %s; the file does not carry that name"
                     % (where, symbol, named))


# V10, the load-bearing-anchor pairs of Section 1, was retired with the
# promotion of 2026-07-30: every dependent phrase of its declared table left the
# text together with the seven-chapter structure and the steering document it
# also read, which is the table's own retirement condition (a pair falls silent
# when the dependent phrase goes). The mechanism stays documented in
# knowledge/verification.md should a rewrite of the new opening call for it.


def check_action_layer_pages():
    """Every id the registry mounts is named in the action layer's anchor scheme.

    The prose checks above run the other direction, every address CLAUDE.md
    names must exist. This one closes the gap that direction leaves: a page or
    part added in registry.js is live and addressable, and nothing complained
    that the published scheme the next agent reads never heard of it. Two ids,
    workflow and paper, were missing on 2026-07-29 when the group was written.
    """
    text = read_text(CLAUDE_MD)
    for page in registry_pages(read_text(JS_DIR / "registry.js")):
        if not re.search(r"#%s\b" % re.escape(page), text):
            fail("action-layer", "registry.js mounts %r; the anchor scheme in "
                                 "CLAUDE.md does not name #%s" % (page, page))


# Documents in which a bare A-number does not mean a requirement. The paper
# texts use no requirement numbers, and INDEX.md names the archived audits A1
# and A2, which are records rather than requirements. The dated records fall out
# for that same reason and are recognised the way V9 recognises them, since a
# journal entry naming an audit run is recording a name, not citing a number.
REQUIREMENT_EXEMPT = ("paper.md", "paper-knowledge.md", "INDEX.md")


def requirement_citing_paths():
    """The action layer and every core knowledge document the rule covers.

    Open by construction rather than a fixed list, so a knowledge document added
    tomorrow is under the rule without anyone remembering to enrol it.
    """
    paths = [CLAUDE_MD]
    for path in sorted(KNOWLEDGE_DIR.glob("*.md")):
        if path.name in REQUIREMENT_EXEMPT or is_dated_record(path):
            continue
        paths.append(path)
    return paths


def check_requirement_numbers():
    """The requirement numbers are unique and every cited one exists.

    specification.md mints the A-numbers as headings; the action layer, the
    plan and the core documents cite them bare. A duplicate heading splits one
    number over two requirements, and a citation without a heading sends the
    reader to nothing, which is silent because the citing sentence keeps
    reading well. Gaps in the sequence are allowed; a requirement may be
    withdrawn, its number is not reused.
    """
    spec = read_text(KNOWLEDGE_DIR / "specification.md")
    headings = re.findall(r"^### (A\d+)\b", spec, re.M)
    seen = set()
    for number in headings:
        if number in seen:
            fail("requirements", "specification.md carries the heading %s twice"
                 % number)
        seen.add(number)
    for path in requirement_citing_paths():
        name = path.relative_to(ROOT).as_posix()
        cited = set(re.findall(r"\bA\d+\b", read_text(path)))
        for number in sorted(cited - seen, key=lambda n: int(n[1:])):
            fail("requirements", "%s cites %s; specification.md has no such heading"
                 % (name, number))


def check_vault_index_current():
    """Everything data/vault.json points at still exists under vault/.

    The index is generated by vault/tools/build_site_index.py and committed, so
    a rename or removal in the claim, distillate or source layer leaves stale
    entries behind until the generator is re-run, and the site then links into
    nothing. The reverse direction stays open by construction: a claim outside
    every topic map is legitimately absent from the index, so absence proves
    nothing and is not checked.
    """
    vault = load_json(VAULT_JSON)
    claim_files = {p.stem for p in (ROOT / "vault" / "20_claims").glob("*.md")}
    for claim in vault["claims"]:
        if claim["slug"] not in claim_files:
            fail("vault-index", "data/vault.json lists the claim %s; "
                                "vault/20_claims/ has no such file" % claim["slug"])
    for kind in ("distillates", "sources"):
        for entry in vault[kind]:
            path = entry.get("path")
            if not path:
                # The generator writes an empty path for a source it could not
                # resolve, so skipping the empty case would pass over exactly
                # the entries the index is least sure of.
                fail("vault-index", "data/vault.json carries the %s %s without a "
                                    "path; the generator leaves it empty where it "
                                    "could not resolve the entry"
                     % (kind[:-1], entry["slug"]))
            elif not (ROOT / path).is_file():
                fail("vault-index", "data/vault.json points the %s %s at %s, "
                                    "which is not a file"
                     % (kind[:-1], entry["slug"], path))


def main():
    documents = load_catalogue()
    conv_types = convention_function_types()
    cases = load_cases()

    # The groups are counted rather than stated, so adding one cannot leave a
    # stale number behind.
    groups = [
        lambda: check_types_agree(documents, conv_types),
        lambda: check_files_exist(documents),
        lambda: check_claude_md_slugs(documents),
        lambda: check_gallery(cases),
        lambda: check_evidence_reachable(cases),
        check_glossar_mirror,
        check_ports,
        check_anchors,
        check_symbol_bindings,
        check_action_layer_pages,
        check_requirement_numbers,
        check_vault_index_current,
    ]
    if "--check-urls" in sys.argv:
        groups.append(lambda: check_urls(cases))
    else:
        note("URL resolution skipped; run with --check-urls to include it")

    for group in groups:
        group()

    for message in notes:
        print("note:  %s" % message)
    for message in failures:
        print("FAIL:  %s" % message)
    print("%d check group(s), %d failure(s)" % (len(groups), len(failures)))
    return 1 if failures else 0


if __name__ == "__main__":
    sys.exit(main())
