#!/usr/bin/env python3
"""Check the site's own claims against each other.

The site publishes the same statement in more than one place: the template
catalogue in assets/data/, the convention page in _content/, the anchor scheme in
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
from datetime import date

TOOLS = pathlib.Path(__file__).resolve().parent
ROOT = TOOLS.parent
CATALOGUE = ROOT / "assets" / "data" / "promptotyping-documents.json"
CONVENTION = ROOT / "_content" / "konvention.md"
TEMPLATE_DIR = ROOT / "_content" / "promptotyping-document"
CLAUDE_MD = ROOT / "CLAUDE.md"
README = ROOT / "README.md"
CASES = ROOT / "assets" / "data" / "case-studies.json"
CASE_DIR = ROOT / "_content" / "case-studies"
CONTENT_DIR = ROOT / "_content"
PRAXIS = CONTENT_DIR / "praxis.md"
KNOWLEDGE_DIR = ROOT / "knowledge"
JS_DIR = ROOT / "assets" / "js"
NOT_FOUND = ROOT / "404.html"
INDEX_HTML = ROOT / "index.html"
# The skill lives in the repository promptotyping-skill (operator decision of
# 2026-11-14, revising A42 of 2026-11-10). The site links it and states its five
# subcommands; it carries no copy, so the names are held here as a fixed list.
SKILL_REPOSITORY = "https://github.com/DigitalHumanitiesCraft/promptotyping-skill"
SKILL_SUBCOMMANDS = ("orient", "explore", "distill", "curate", "handoff")
PAGES_WORKFLOW = ROOT / ".github" / "workflows" / "pages.yml"
PAGES_CONTENT = JS_DIR / "pages-content.js"
CASE_FILTER = JS_DIR / "modules" / "case-study-filter.js"
OVERVIEW = CONTENT_DIR / "overview.md"
APPLICATION = CONTENT_DIR / "application.md"
TUTORIAL = CONTENT_DIR / "tutorial.md"
WORKING_ENVIRONMENT = CONTENT_DIR / "arbeitsumgebung.md"

# The site's own base, as the template: fields and the prose spell it.
SITE_BASE = "dhcraft.org/Promptotyping/"

# tools/ is a folder of scripts rather than a package, so the archive builder
# is reached by path. The download check runs it rather than restating its list.
sys.path.insert(0, str(TOOLS))

# The five epistemic functions of the site's interface typology (artefact page).
INTERFACE_TYPES = {"verification", "exploration", "edition", "capture", "audit"}

# Templates written but deliberately not wired into the catalogue, with the
# reason. A slug may sit here or in the catalogue, never in neither. Empty
# since 2026-07-26, when technology entered the catalogue.
HELD_BACK = {}

EXPECTED_TEMPLATE_COUNT = 17

# Templates whose function the convention no longer carries, each with the
# template that took it over. They stay in the catalogue because published
# template: fields name them, so the slug count and their addresses hold, but
# no convention row types them any more. Handoff since 2026-11-14, when the
# section ## Open of the journal took over the open points.
SUPERSEDED = {"handoff": "journal"}
SUPERSEDED_MARK = "superseded by journal.md"

# The fixed strings by which agents and tools find the open points of a
# journal; the convention keeps them the same in every language.
OPEN_HEADING = "## Open"
OPEN_EMPTY = "Nothing open."
RETIRED_GENERIC_NAMES = (
    "pipeline.md",
    "engines.md",
    "infrastruktur.md",
    "decisions.md",
    "requirements.md",
    "features.md",
    "analyse.md",
    "exploration.md",
    "JOURNAL.md",
)
NORMATIVE_FILES = (
    CLAUDE_MD,
    README,
    CONVENTION,
    CONTENT_DIR / "application.md",
    CONTENT_DIR / "tutorial.md",
    CONTENT_DIR / "workflow.md",
    KNOWLEDGE_DIR / "INDEX.md",
    KNOWLEDGE_DIR / "architecture.md",
    KNOWLEDGE_DIR / "governance.md",
    KNOWLEDGE_DIR / "plan.md",
    KNOWLEDGE_DIR / "project.md",
    KNOWLEDGE_DIR / "specification.md",
)

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
        if doc.get("slug") in SUPERSEDED:
            continue
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


def check_catalogue_contract(documents):
    """The catalogue carries the mandatory journal, the superseded handoff and the type invariants."""
    slugs = [document.get("slug") for document in documents]
    if len(documents) != EXPECTED_TEMPLATE_COUNT:
        fail("naming", "catalogue has %d entries; expected %d"
             % (len(documents), EXPECTED_TEMPLATE_COUNT))
    if len(set(slugs)) != len(slugs):
        fail("naming", "catalogue slugs are not unique")

    by_slug = {document.get("slug"): document for document in documents}
    journal = by_slug.get("journal")
    if journal is None:
        fail("naming", "catalogue misses the mandatory journal slug")
    else:
        expected = {
            "datei": "journal.md",
            "typ": "Process",
            "trigger": "always",
        }
        for field, value in expected.items():
            if journal.get(field) != value:
                fail("naming", "journal %s is %r; expected %r"
                     % (field, journal.get(field), value))
        if not journal.get("funktion", "").startswith("Provenance"):
            fail("naming", "journal funktion is %r; expected the Provenance function"
                 % journal.get("funktion"))

    # A superseded template keeps its slug and address but must not read as a
    # document every project carries.
    for slug, successor in SUPERSEDED.items():
        document = by_slug.get(slug)
        if document is None:
            fail("naming", "catalogue misses the superseded slug %s, whose address "
                           "existing template: fields name" % slug)
            continue
        if successor not in by_slug:
            fail("naming", "%s is superseded by %s, which the catalogue does not carry"
                 % (slug, successor))
        if document.get("trigger") == "always" or document.get("mark") != SUPERSEDED_MARK:
            fail("naming", "%s is superseded; its trigger must not be 'always' and its "
                           "mark must be %r" % (slug, SUPERSEDED_MARK))
        if "superseded" not in document.get("funktion", ""):
            fail("naming", "%s funktion does not say that the template is superseded"
                 % slug)

    testing = by_slug.get("testing")
    if testing is None:
        fail("naming", "catalogue misses the testing slug")
    elif testing.get("typ") != "Action":
        fail("naming", "testing is %r; expected 'Action'" % testing.get("typ"))

    journal_template = TEMPLATE_DIR / "journal.md"
    if journal_template.is_file():
        block = template_fill_block(journal_template)
        for marker in (OPEN_HEADING + "\n\n" + OPEN_EMPTY, "- Verworfen:",
                       "- Belege:"):
            if marker not in block:
                fail("naming", "journal template block misses %r" % marker)
        if "journal-archive.md" not in read_text(journal_template):
            fail("naming", "journal template does not name journal-archive.md")

    handoff_template = TEMPLATE_DIR / "handoff.md"
    if not handoff_template.is_file():
        return
    template = read_text(handoff_template)
    if "Überholt seit dem 14.11.2026" not in template:
        fail("naming", "handoff template does not carry its superseded notice")
    required_markers = (
        "Keine offenen Handoff-Punkte.",
        "- Received:",
        "- Source:",
        "- Target:",
        "- Context:",
        "- Evidence:",
        "- Next action:",
        "- Blocker:",
        "- Operator point:",
    )
    for marker in required_markers:
        if marker not in template:
            fail("naming", "handoff template misses %r" % marker)


# Pages retired on 2026-11-14 whose published addresses must still land
# somewhere. Each bare address maps onto its target, and each family is the
# (prefix, page, segment) triple ANCHOR_FAMILIES must carry.
RETIRED_ROUTES = {
    "skills": "overview",
    "skills-promptotyping": "start-example",
    "vault": "overview",
    "glossar": "overview",
    "intro": "overview",
}
RETIRED_FAMILIES = (
    ("skills-", "overview", "skills"),
    ("vault-", "overview", "vault"),
    ("glossar-", "overview", None),
    ("konzept-", "overview", "konzepte"),
)
RETIRED_PAGES = ("skills", "vault", "glossar")


def check_retired_addresses() -> None:
    """The addresses of the retired pages still land somewhere.

    The Skills page was retired on 2026-11-14 together with the copy of the
    skill (A42), and the Vault view and the glossary on the same day. Published
    pages and repositories may still link their addresses, so the registry
    sends #skills-promptotyping to the start page's section headed Skill, and
    #skills, #vault, #glossar and the families #skills-, #vault-, #glossar- and
    #konzept- with their subpaths to the start page.
    """
    registry = read_text(JS_DIR / "registry.js")
    aliases = js_string_map(registry, "LEGACY_ROUTE_ALIASES")
    for legacy, target in RETIRED_ROUTES.items():
        if aliases.get(legacy) != target:
            fail("retired", "the retired address #%s must resolve to #%s" % (legacy, target))
    families = anchor_families(registry)
    for family in RETIRED_FAMILIES:
        if family not in families:
            fail("retired", "the retired family #%s{name} must land on the start page"
                 % family[0])
    mounted = registry_pages(registry)
    for page in RETIRED_PAGES:
        if page in mounted:
            fail("retired", "registry.js still mounts the retired page %s" % page)
    if 'id="start-example"' not in read_text(INDEX_HTML):
        fail("retired", "index.html lost the section #start-example that "
                        "#skills-promptotyping resolves to")


def check_portal_paths() -> None:
    """The Understand, Evaluate, and Apply routes stay connected.

    Browser verification decides whether the controls work. This static half
    protects the explicit transitions that make those controls one user path
    rather than a collection of individually reachable pages (A44).
    """
    surfaces = (
        ("overview", OVERVIEW,
         ("#application", "#use-cases", "#tutorial",
          SKILL_REPOSITORY, "#vorlagen")),
        ("understand", APPLICATION,
         ("#use-cases", "#tutorial",
          SKILL_REPOSITORY, "#vorlagen")),
        ("evaluate", PAGES_CONTENT,
         ("#overview",)),
        ("apply", TUTORIAL,
         (SKILL_REPOSITORY, "#vorlagen", "#arbeitsumgebung")),
        ("working environment", WORKING_ENVIRONMENT,
         (SKILL_REPOSITORY,)),
    )
    for scenario, path, anchors in surfaces:
        if not path.is_file():
            fail("portal", "%s surface %s is missing" % (scenario, path.as_posix()))
            continue
        text = read_text(path)
        missing = [anchor for anchor in anchors if anchor not in text]
        if missing:
            fail("portal", "%s surface %s misses %s"
                 % (scenario, path.as_posix(), ", ".join(missing)))

    if not CASE_FILTER.is_file():
        fail("portal", "Use Cases error boundary %s is missing" % CASE_FILTER.as_posix())
    elif "App.showLoadError(listHost, err);" not in read_text(CASE_FILTER):
        fail("portal", "Use Cases error boundary does not call the shared load-error path")


def start_page_html() -> str:
    """Return the static start page section of index.html, or an empty string."""
    # The start page holds a nested section (the downloads), so it ends at the
    # closing tag right before </main>.
    match = re.search(r'<section[^>]*id="overview"[^>]*>(.*)</section>\s*</main>',
                      read_text(INDEX_HTML), re.S)
    return match.group(1) if match else ""


def plain(fragment: str) -> str:
    """Strip tags and decode the few entities the start page uses."""
    text = re.sub(r"<[^>]+>", "", fragment)
    return " ".join(text.replace("&amp;", "&").replace("&#39;", "'").split())


def check_start_page(documents) -> None:
    """The static start page states its sources' current wording.

    The start page repeats three things that live elsewhere, so a change at the
    source must reach it: one entry per catalogue template with its condition
    and both addresses, the names of the skill's five subcommands with the link
    to the skill repository, and the three paper cases with their addresses
    (A48, A50, A51).
    """
    page = start_page_html()
    if not page:
        fail("start", "index.html carries no static section#overview")
        return

    entries = dict(re.findall(r'<li data-slug="([^"]+)">(.*?)</li>', page, re.S))
    for doc in documents:
        slug = doc["slug"]
        entry = entries.pop(slug, None)
        if entry is None:
            fail("start", "start page lists no entry for template %s" % slug)
            continue
        when = re.search(r'<span class="doc-when[^"]*">(.*?)</span>', entry, re.S)
        if not when or plain(when.group(1)) != doc.get("mark"):
            fail("start", "start page entry %s differs from the catalogue" % slug)
        for href in ("#promptotyping-document-%s" % slug,
                     "_content/promptotyping-document/%s.md" % slug):
            if 'href="%s"' % href not in entry:
                fail("start", "start page entry %s misses %s" % (slug, href))
    for slug in entries:
        fail("start", "start page lists %s, which the catalogue does not carry" % slug)

    named = ", ".join(SKILL_SUBCOMMANDS[:-1]) + " and " + SKILL_SUBCOMMANDS[-1]
    if named not in plain(page):
        fail("start", "the start page does not name the subcommands %s" % named)
    for name in SKILL_SUBCOMMANDS:
        if "/promptotyping %s</code>" % name not in page:
            fail("start", "the Skill section of the start page does not show %s" % name)
    if 'href="%s"' % SKILL_REPOSITORY not in page:
        fail("start", "the start page does not link the skill repository")
    if "skills/promptotyping" in page:
        fail("start", "the start page points into skills/promptotyping, which this "
                      "repository no longer carries")

    cases = {c["id"]: c for c in load_json(CASES)["caseStudies"]}
    shown = re.findall(r'<span data-case="([^"]+)">(.*?)</span>', page, re.S)
    if len(shown) != 3:
        fail("start", "the start page names %d cases of the paper instead of three" % len(shown))
    for case_id, item in shown:
        case = cases.get(case_id)
        if case is None:
            fail("start", "start page names unknown case %s" % case_id)
            continue
        for url in (case.get("demo_url"), "#case-" + case_id):
            if url and 'href="%s"' % url not in item:
                fail("start", "start page case %s misses %s" % (case_id, url))

    for anchor in ("#application", "#use-cases", "#tutorial", "#vorlagen"):
        if 'href="%s"' % anchor not in page:
            fail("start", "start page does not link %s" % anchor)

    check_download_archives(page, documents)


def check_download_archives(page: str, documents) -> None:
    """The archive holds exactly the files the single download links offer.

    The archive is built at delivery by tools/build_downloads.py, so the check
    holds the builder's member list against the catalogue, the page's links
    against the archive names, the Pages workflow against the build step, and a
    locally built archive against its sources.
    """
    import zipfile

    import build_downloads

    members = build_downloads.archive_members()
    templates = members[build_downloads.TEMPLATES_ZIP]
    expected = ["promptotyping-templates/%s.md" % d["slug"] for d in documents]
    if [name for name, _ in templates] != expected:
        fail("start", "the template archive does not hold one file per catalogue template")
    for name in members:
        if 'href="downloads/%s"' % name not in page:
            fail("start", "the start page does not offer downloads/%s" % name)
    if PAGES_WORKFLOW.is_file() and "tools/build_downloads.py _site/downloads" not in read_text(PAGES_WORKFLOW):
        fail("start", "the Pages workflow does not build the download archives")
    built = ROOT / "downloads"
    for name, listed in members.items():
        path = built / name
        if not path.is_file():
            continue
        with zipfile.ZipFile(path) as archive:
            held = {info.filename: archive.read(info) for info in archive.infolist()}
        if set(held) != {n for n, _ in listed} or any(held[n] != src.read_bytes() for n, src in listed):
            fail("start", "the local archive %s differs from its sources; rerun tools/build_downloads.py" % name)


def check_english_route_contract() -> None:
    """Overview and Application own English canonical routes and substrates.

    The published German hashes and subpaths remain accepted through the route
    alias table. They must not remain canonical registry entries or duplicate
    Markdown substrates, because that would leave the English site exposing a
    German machine address.
    """
    registry_path = JS_DIR / "registry.js"
    app_path = JS_DIR / "app.js"
    if not registry_path.is_file() or not app_path.is_file():
        fail("english-routes", "registry.js or app.js is missing")
        return

    registry = read_text(registry_path)
    app = read_text(app_path)
    page_ids = registry_pages(registry)
    aliases = js_string_map(registry, "LEGACY_ROUTE_ALIASES")
    contracts = (
        ("overview", "ueberblick", OVERVIEW),
        ("application", "anwendung", APPLICATION),
    )
    for canonical, legacy, substrate in contracts:
        if canonical not in page_ids or legacy in page_ids:
            fail(
                "english-routes",
                "%s must be the canonical page id and %s must not be a registry page"
                % (canonical, legacy),
            )
        if aliases.get(legacy) != canonical:
            fail(
                "english-routes",
                "legacy route %s must resolve to %s" % (legacy, canonical),
            )
        legacy_substrate = CONTENT_DIR / (legacy + ".md")
        if legacy_substrate.is_file():
            fail(
                "english-routes",
                "legacy substrate %s must be removed" % legacy_substrate.as_posix(),
            )
        if not substrate.is_file():
            fail("english-routes", "canonical substrate %s is missing" % substrate.as_posix())
            continue
        text = read_text(substrate)
        if not re.search(r"^slug:\s*%s\s*$" % re.escape(canonical), text, re.M):
            fail("english-routes", "%s does not carry slug: %s" % (substrate, canonical))
        expected_machine = "_content/%s.md" % canonical
        if expected_machine not in text or "_content/%s.md" % legacy in text:
            fail(
                "english-routes",
                "%s does not carry the English machine address %s"
                % (substrate, expected_machine),
            )
        # The start page is static markup in index.html, and app.js reads its
        # Markdown twin for the frontmatter alone; every other page renders
        # from its substrate.
        marker = ('"_content/%s.md"' % canonical if canonical == "overview"
                  else 'A.renderMarkdownInto("%s", "_content/%s.md"' % (canonical, canonical))
        if marker not in app:
            fail("english-routes", "app.js does not render %s from %s" %
                 (canonical, expected_machine))


def template_fill_block(path):
    """Return the current fillable block, excluding examples and history.

    The section ends at the next level-two heading outside a code fence. The
    fenced template itself carries level-two headings, such as the journal's
    ## Open, which must not end the section early.
    """
    lines = read_text(path).split("\n")
    try:
        start = lines.index("## Vorlage zum Befüllen") + 1
    except ValueError:
        return ""
    block = []
    fence = None
    for line in lines[start:]:
        opener = re.match(r"^\s*(`{3,}|~{3,})", line)
        if opener:
            marker = opener.group(1)
            if fence is None:
                fence = marker
            elif marker.startswith(fence) and not line.strip()[len(marker):]:
                fence = None
        elif fence is None and line.startswith("## "):
            break
        block.append(line)
    return "\n".join(block) + "\n"


def check_normative_names():
    """Retired generic names do not return to current routing surfaces."""
    surfaces = []
    for path in NORMATIVE_FILES:
        if not path.is_file():
            continue
        text = read_text(path)
        if path == CONVENTION:
            text = "\n".join(
                line for line in text.splitlines()
                if not line.startswith("Historical evidence only.")
            )
        surfaces.append((path, text))
    for path in sorted(TEMPLATE_DIR.glob("*.md")):
        surfaces.append((path, template_fill_block(path)))

    for path, text in surfaces:
        for retired in RETIRED_GENERIC_NAMES:
            pattern = re.compile(
                r"(?<![A-Za-z0-9-])%s(?![A-Za-z0-9-])" % re.escape(retired)
            )
            if pattern.search(text):
                try:
                    label = path.relative_to(ROOT).as_posix()
                except ValueError:
                    label = path.as_posix()
                fail("naming", "%s uses retired normative name %s"
                     % (label, retired))


def check_naming_contract(documents):
    """Run the catalogue and current-name halves of the naming contract."""
    check_catalogue_contract(documents)
    check_normative_names()


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


def route_aliases(registry_js):
    """Legacy bare routes mapped onto their canonical registry ids."""
    return js_string_map(registry_js, "LEGACY_ROUTE_ALIASES")


def slugify(text):
    """Port of slugify in assets/js/core.js."""
    lowered = text.lower()
    for umlaut, replacement in (("ä", "ae"), ("ö", "oe"), ("ü", "ue"), ("ß", "ss")):
        lowered = lowered.replace(umlaut, replacement)
    return re.sub(r"[^a-z0-9]+", "-", lowered).strip("-")


# Known input and output of the port above, read off slugify in
# assets/js/core.js. The cases cover what the practice page actually puts
# through it, umlauts and the sharp s, a character outside the alphabet, and
# punctuation runs and edge dashes.
SLUGIFY_CASES = (
    ("Grundlagen der Prüfung", "grundlagen-der-pruefung"),
    ("Öffentliche Straße", "oeffentliche-strasse"),
    ("Data, Capture & Audit!", "data-capture-audit"),
    ("  --Trailing--  ", "trailing"),
    ("Café", "caf"),
    ("2026-07-30", "2026-07-30"),
)

def check_ports():
    """The port of slugify still computes what the browser computes.

    slugify decides the praxis anchors every check of the group below is held
    against. A port that drifts from
    the JavaScript does not report anything; it turns those checks into silent
    passes, which is why the rebuilt resolver carries a self-test of the same
    kind in check_subpath_handover.
    """
    for text, expected in SLUGIFY_CASES:
        actual = slugify(text)
        if actual != expected:
            fail("ports", "slugify(%r) gives %r; slugify in assets/js/core.js "
                          "gives %r" % (text, actual, expected))


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

    The praxis anchors are built from the rendered heading.
    """
    text = re.sub(r"\[([^\]]*)\]\([^)]*\)", r"\1", text)
    return text.replace("`", "").replace("**", "").replace("*", "").replace("_", "")


# The script files this group reads its declarations out of. A rename would
# otherwise end the run in a bare KeyError that says nothing about what is
# missing or why the check needed it.
DECLARING_SCRIPTS = ("registry.js", "pages-content.js")


def declared_anchors(js_texts):
    """Every anchor the site mounts, gathered from the tables that mount it."""
    by_name = {pathlib.PurePosixPath(k).name: v for k, v in js_texts.items()}
    for name in DECLARING_SCRIPTS:
        if name not in by_name:
            sys.exit("FAIL:  assets/js/%s is gone; the anchor checks read the "
                     "declared side of the site out of it" % name)
    praxis_aliases = js_string_map(by_name["pages-content.js"], "PRAXIS_ALIASES")

    anchors = set(registry_pages(by_name["registry.js"]))
    anchors.update(route_aliases(by_name["registry.js"]))
    # The static start page and the icon set in index.html declare ids too.
    if INDEX_HTML.is_file():
        anchors.update(re.findall(r'\bid="([^"]+)"', read_text(INDEX_HTML)))

    for doc in load_json(CATALOGUE)["documents"]:
        anchors.add("promptotyping-document-" + doc["slug"])
    for case in load_json(CASES)["caseStudies"]:
        anchors.add("case-" + case["id"])

    praxis_ids = ["praxis-" + slugify(plain_inline(h))
                  for h in markdown_headings(PRAXIS, (2, 3))]
    anchors.update(praxis_ids)
    anchors.update(praxis_aliases)

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

    return anchors


def is_declared(anchor, anchors):
    return anchor in anchors


def resolve_site_url(url, page_ids, families, aliases=None):
    """Port of resolveTemplateUrl in assets/js/registry.js."""
    aliases = aliases or {}
    rest = re.sub(r"^https?://", "", url)
    if rest.startswith(SITE_BASE):
        rest = rest[len(SITE_BASE):]
    rest = rest.lstrip("/")
    if rest.startswith("#"):
        anchor = rest[1:] or None
        return aliases.get(anchor, anchor)

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
    if rest in aliases:
        return aliases[rest]
    if rest == "konvention":
        return "konvention-v0.1"
    if any(rest.startswith(p) for p, _, _ in families):
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
    for path in sorted(KNOWLEDGE_DIR.glob("*.md")):
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
        # An anchor holds no whitespace, so a Markdown heading quoted in code,
        # such as the journal's `## Open`, is not taken for one.
        for token in re.findall(r"`(#[^`\s]+)`", text):
            if "{" not in token:
                yield name, token
        for token in re.findall(r"(?:https?://)?dhcraft\.org/Promptotyping/[^\s`)\]\"'<>]*",
                                text):
            token = re.sub(r"^https?://", "", token).rstrip(".,;:")
            if "{" in token or "*" in token or token.rstrip("/") == SITE_BASE.rstrip("/"):
                continue
            # A path that is a published file, such as _content/overview.md, is
            # served as it stands and routes through no anchor.
            rel = token.split("dhcraft.org/Promptotyping/", 1)[-1].split("#", 1)[0]
            if rel and (ROOT / rel).is_file():
                continue
            yield name, token


HANDOVER_PARAM = "p"


def check_subpath_handover(page_ids, families, aliases):
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
        if resolve_site_url(page, page_ids, families, aliases) != page:
            fail("anchors", "the subpath /%s does not resolve to #%s" % (page, page))
    for legacy, canonical in sorted(aliases.items()):
        if resolve_site_url(legacy, page_ids, families, aliases) != canonical:
            fail("anchors", "the legacy subpath /%s does not resolve to #%s"
                 % (legacy, canonical))
    for prefix, _page, segment in families:
        if not segment:
            continue
        resolved = resolve_site_url(segment + "/probe", page_ids, families, aliases)
        if resolved != prefix + "probe":
            fail("anchors", "the subpath /%s/probe resolves to %s, not to #%sprobe"
                 % (segment, "#" + resolved if resolved else "nothing", prefix))
    if resolve_site_url("konvention", page_ids, families, aliases) != "konvention-v0.1":
        fail("anchors", "the subpath /konvention no longer resolves to #konvention-v0.1")


def check_anchors():
    """Every anchor a hand-written reference names is one the site mounts."""
    js_texts = {p.relative_to(ROOT).as_posix(): read_text(p)
                for p in sorted(JS_DIR.glob("**/*.js"))}
    registry_js = read_text(JS_DIR / "registry.js")
    page_ids = registry_pages(registry_js)
    families = anchor_families(registry_js)
    aliases = route_aliases(registry_js)

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
        anchor = resolve_site_url(url, page_ids, families, aliases)
        if anchor is None:
            fail("anchors", "%s: template.%s %s resolves to no anchor" % (where, field, url))
        elif not is_declared(anchor, anchors):
            fail("anchors", "%s: template.%s %s resolves to #%s, which nothing declares"
                 % (where, field, url, anchor))

    for where, token in prose_site_urls():
        anchor = resolve_site_url(token, page_ids, families, aliases)
        if anchor is None:
            fail("anchors", "%s names %s, which resolves to no anchor" % (where, token))
        elif not is_declared(anchor, anchors):
            fail("anchors", "%s names %s, which resolves to #%s, and nothing declares it"
                 % (where, token, anchor))

    check_subpath_handover(page_ids, families, aliases)


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
    that the published scheme the next agent reads never heard of it. Two ids
    were missing on 2026-07-29 when the group was written.
    """
    text = read_text(CLAUDE_MD)
    for page in registry_pages(read_text(JS_DIR / "registry.js")):
        if not re.search(r"#%s\b" % re.escape(page), text):
            fail("action-layer", "registry.js mounts %r; the anchor scheme in "
                                 "CLAUDE.md does not name #%s" % (page, page))


# Documents in which a bare A-number does not mean a requirement. INDEX.md
# names the archived audits A1 and A2, which are records rather than
# requirements. The dated records fall out
# for that same reason and are recognised the way V9 recognises them, since a
# journal entry naming an audit run is recording a name, not citing a number.
REQUIREMENT_EXEMPT = ("INDEX.md",)


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


CORE_FIELDS = ("title", "project", "method", "status", "created", "updated")
STATUS_VOCABULARY = ("idea", "draft", "stub", "complete", "reviewed",
                     "archived", "active", "snapshot")
DATE_FORM = re.compile(r"^\d{4}-\d{2}-\d{2}$")


def check_knowledge_frontmatter() -> None:
    """Every knowledge document carries the convention's mandatory core.

    The published machine form of the convention's frontmatter vocabulary is
    schema/knowledge-document.schema.json; this group checks the mandatory
    core natively and pins the schema's required list to the same tuple, so
    the schema and the check cannot drift apart silently.
    """
    schema = json.loads((ROOT / "schema" / "knowledge-document.schema.json")
                        .read_text(encoding="utf-8"))
    if tuple(schema.get("required", ())) != CORE_FIELDS:
        fail("frontmatter", "schema required list %r diverges from the checked core %r"
             % (schema.get("required"), list(CORE_FIELDS)))
    if tuple(schema["properties"]["status"]["enum"]) != STATUS_VOCABULARY:
        fail("frontmatter", "schema status enum diverges from the template vocabulary")
    try:
        import yaml
    except ImportError:
        fail("frontmatter", "PyYAML is not available; the mandatory frontmatter "
                            "contract cannot be checked")
        return
    for path in sorted((ROOT / "knowledge").glob("*.md")):
        text = read_text(path)
        frontmatter = re.match(r"^---\n(.*?)\n---(?:\n|$)", text, re.S)
        if not frontmatter:
            fail("frontmatter", "knowledge/%s carries no complete frontmatter block"
                 % path.name)
            continue
        try:
            front = yaml.safe_load(frontmatter.group(1)) or {}
        except (ValueError, yaml.YAMLError) as error:
            fail("frontmatter", "knowledge/%s carries invalid YAML: %s"
                 % (path.name, error))
            continue
        rel = "knowledge/%s" % path.name
        if not isinstance(front, dict):
            fail("frontmatter", "%s frontmatter is not a mapping" % rel)
            continue
        for field in CORE_FIELDS:
            if field not in front:
                fail("frontmatter", "%s misses the core field %r" % (rel, field))
        for parent, subfields in (("project", ("name", "repository")),
                                  ("method", ("name", "url"))):
            value = front.get(parent)
            if parent not in front:
                continue
            if not isinstance(value, dict):
                fail("frontmatter", "%s field %s is not a mapping" % (rel, parent))
                continue
            for sub in subfields:
                if sub not in value:
                    fail("frontmatter", "%s misses %s.%s" % (rel, parent, sub))
        status = front.get("status")
        if status is not None and status not in STATUS_VOCABULARY:
            fail("frontmatter", "%s status %r is outside the template vocabulary"
                 % (rel, status))
        for field in ("created", "updated"):
            value = front.get(field)
            if value is None:
                continue
            if not DATE_FORM.fullmatch(str(value)):
                fail("frontmatter", "%s %s %r is no YYYY-MM-DD date" % (rel, field, value))
                continue
            try:
                date.fromisoformat(str(value))
            except ValueError:
                fail("frontmatter", "%s %s %r is not a valid calendar date"
                     % (rel, field, value))


def check_relative_links():
    """Every relative Markdown link resolves to a file that exists.

    Consolidation rounds delete documents and leave the links behind. Eight
    such links stood in knowledge/ and the template mirror until 2026-07-31,
    pointing at three steering documents that had been consolidated away, and
    no check saw them. External addresses stay out of this group, they belong
    to the opt-in URL pass; fragment-only links are anchors and are covered by
    check_anchors.
    """
    targets = (list(ROOT.glob("*.md"))
               + list((ROOT / "knowledge").glob("*.md"))
               + list((ROOT / "_content").rglob("*.md"))
               + list((ROOT / "handoffs").rglob("*.md")))
    pattern = re.compile(r"\]\((?!https?:|mailto:|#)([^)]+)\)")
    for path in sorted(targets):
        text = path.read_text(encoding="utf-8", errors="replace")
        for match in pattern.finditer(text):
            target = match.group(1).split("#")[0].strip()
            if not target:
                continue
            if (path.parent / target).exists() or (ROOT / target).exists():
                continue
            label = path.relative_to(ROOT).as_posix()
            if is_dated_record(path) and retired_target(path, target):
                note("%s keeps its dated link to %s, which the repository "
                     "removed" % (label, target))
                continue
            fail("links", "%s links to %s, which does not exist" % (label, target))


# Areas the repository removed on purpose. A dated record that linked into
# them stays as it was written, because a snapshot is correct as of its date;
# every other document must not link there. Removed on 2026-11-14 by operator
# decision: the benchmark with its two knowledge documents, the source
# material, the copy of the skill and the Skills page, the Process Inbox, the
# Grounded Vault with its view, the glossary, the dated snapshots and the eval
# cases of the skill.
RETIRED_PATHS = (
    "research-artefacts/",
    "source-material/",
    "skills/",
    "_content/skills/",
    "knowledge/benchmark-plan.md",
    "knowledge/benchmark-specification.md",
    "knowledge/handoff.md",
    "vault/",
    "assets/data/vault.json",
    "assets/data/glossar.json",
    "_content/glossar.md",
    "tools/build_glossar.py",
    "snapshots/",
    "tools/skill-evals/",
)


def retired_target(path, target):
    """Whether a relative link from path points into a removed area."""
    resolved = (path.parent / target).resolve()
    try:
        rel = resolved.relative_to(ROOT.resolve()).as_posix()
    except ValueError:
        return False
    return any(rel == retired.rstrip("/") or rel.startswith(retired)
               for retired in RETIRED_PATHS)


def main() -> int:
    failures.clear()
    notes.clear()
    documents = load_catalogue()
    conv_types = convention_function_types()
    cases = load_cases()

    # The groups are counted rather than stated, so adding one cannot leave a
    # stale number behind.
    groups = [
        lambda: check_types_agree(documents, conv_types),
        lambda: check_files_exist(documents),
        lambda: check_naming_contract(documents),
        lambda: check_claude_md_slugs(documents),
        lambda: check_gallery(cases),
        check_ports,
        check_anchors,
        check_symbol_bindings,
        check_action_layer_pages,
        check_requirement_numbers,
        check_relative_links,
        check_knowledge_frontmatter,
        check_retired_addresses,
        check_portal_paths,
        check_english_route_contract,
        lambda: check_start_page(documents),
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
