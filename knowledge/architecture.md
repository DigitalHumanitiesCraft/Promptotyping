---
title: Architecture
project:
  name: Promptotyping Site
  repository: https://github.com/DigitalHumanitiesCraft/Promptotyping
status: complete
language: en
version: 0.9
created: 2026-05-09
updated: 2026-10-28
authors: [Christopher Pollin]
generated-with: Claude Code (Claude Opus 4.8)
method:
  name: Promptotyping
  url: https://dhcraft.org/Promptotyping/
template:
  name: Vorlage Architecture
  version: 0.4
  url: https://dhcraft.org/Promptotyping/promptotyping-document/architecture
  alias: https://dhcraft.org/Promptotyping/#promptotyping-document-architecture
topics: ["[[Web Standards]]", "[[Static Sites]]", "[[GitHub Pages]]"]
knowledge-sources:
  standards:
    HTML5: https://html.spec.whatwg.org/
    CSS3: https://www.w3.org/Style/CSS/
    Markdown: https://daringfireball.net/projects/markdown/
    JSON Schema: https://json-schema.org/
    IntersectionObserver API: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
  vocabularies:
    GitHub Pages: https://docs.github.com/en/pages
    marked.js: https://marked.js.org/
related: [INDEX, project, specification, design, journal]
---

# Architecture

The architecture below describes the Promptotyping portal. The separate benchmark
authoring area is documented in
[research-artefacts/promptotyping-bench/README.md](../research-artefacts/promptotyping-bench/README.md):
real-data task materials live in `tasks/`, while `fixtures/dating-explorer/` owns the
synthetic runner, grader and reference artefact. The SZD preparer reads a pinned
Git blob, checks its hash and exports selected TEI and JSONL into a fresh local
directory outside both repositories. It separates initial participant inputs from
later episodes and facilitator material, without supplying execution isolation or
model calls. These Python tools run locally for development and do not add a build
step or runtime dependency to the site.
The measured study harness remains planned under [benchmark-plan.md](benchmark-plan.md).

How the site is built. A single HTML page holds empty section shells; vanilla JavaScript fetches Markdown from `_content/` and JSON from `data/`, plus the canonical skill from its own repository once the Skills page is shown, renders it with a vendored Markdown parser, and drives client-side routing. GitHub Pages serves the repository root directly, with no build step. What the site does is in [specification.md](specification.md); how it looks is in [design.md](design.md).

## Stack

- **Hosting**: GitHub Pages, branch `main`, source at the repository root. No Jekyll build, `.nojekyll` present so `_content/` publishes.
- **HTML/CSS/JS**: vanilla, no framework, no bundler, no npm dependency.
- **Markdown parser**: marked.js v9.1.6, vendored in `assets/vendor/marked.min.js`. No CDN.
- **YAML parser**: js-yaml v4.1.0, vendored in `assets/vendor/js-yaml.min.js`, used by the Frontmatter-Inspector to parse pasted frontmatter blocks. No CDN.
- **Scripts**: ten plain scripts under `assets/js/`, each an IIFE extending the shared namespace `window.PromptotypingApp`, plus three module scripts under `assets/js/modules/`. No ES module, no `import`. `index.html` declares the ten core files in a fixed order and the first two modules; `app.js` injects `term-index.js` at runtime and awaits it. `404.html` is a stub and carries no site script at all.

## Directory layout

```
Promptotyping/
├── index.html                      # site entry, empty section shells
├── 404.html                        # subpath handover stub, passes the path to index.html as ?p=
├── .nojekyll                       # forces GitHub Pages to publish _content/
├── README.md
├── CLAUDE.md                       # action layer
├── CITATION.cff, LICENSE
├── knowledge/                      # this knowledge base (specification)
├── research-artefacts/             # benchmark proposal and benchmark authoring area
├── source-material/                # cleaned video transcripts
├── snapshots/                      # dated reports and audits
├── schema/                         # JSON Schema of the frontmatter core (check group V16)
├── tools/                          # check_consistency.py, build_glossar.py, tests/
├── _content/                       # Markdown content
│   ├── promptotyping-document/     # one template mirror per slug
│   ├── case-studies/               # case-study deep pages
│   ├── skills/                     # index, coding, writing
│   ├── examples/                   # illustrative example files
│   ├── overview.md, application.md, konvention.md, artefakt.md, verifikation.md
│   ├── praxis.md, workflow.md, tutorial.md, arbeitsumgebung.md, technology-baseline.md
│   ├── glossar.md                  # generated from data/glossar.json
│   └── MANIFEST.md                 # mirror provenance
├── assets/
│   ├── css/style.css
│   ├── js/                         # nine core scripts, app.js loads last
│   ├── js/modules/frontmatter-inspector.js
│   ├── js/modules/case-study-filter.js
│   ├── js/modules/term-index.js
│   ├── vendor/marked.min.js, vendor/js-yaml.min.js
│   ├── fonts/                      # Inter, self-hosted
│   ├── img/dhcraft-logo-watercolor.png
│   └── promptotyping-logo.png
├── data/                           # glossar.json, promptotyping-documents.json, case-studies.json, vault.json
└── vault/                          # Grounded-Vault instance (see below)
```

## URL structure and routing

### Hash anchors (canonical for humans)
Routing uses browser-native `location.hash`. Since the rebuild of 2026-07-25 the site shows one page at a time, so the hash first selects a page and then an element within it. `pageForAnchor` resolves a hash in three steps: an exact registry id wins and answers with the page it names, or with the page a part sits in (A32), otherwise a prefix table maps sub-anchors onto their owning entry (`case-*` onto `use-cases`, `praxis-*`, `skills-*`, `glossar-*` and `konzept-*`, `vault-*`, `promptotyping-document-*` onto the templates part, `konvention-*` onto the convention part), and otherwise the DOM decides by walking up from the element to its `.doc-page` ancestor. `showPage` toggles the `is-active` class, marks the sidebar entry, sets the document title and dispatches `promptotyping:page-shown` with the page id; the other pages stay in the DOM as `display: none`, so every published anchor keeps resolving whatever page is showing. A deep link scrolls twice, once immediately and once after `document.fonts.ready`, because web fonts reflow the page under the first scroll. The full anchor scheme is in [specification.md](specification.md), A4, and in `CLAUDE.md`.

### Page registry
`PAGES` in `registry.js` is the single source for page hosts, the sidebar tree, and canonical route resolution. Each entry carries id, label, group, a `kind` of `normative` or `informative`, optionally a note or machine address, and for the five parts of the specification a part number. `LEGACY_ROUTE_ALIASES` maps the historical `ueberblick` and `anwendung` forms onto the canonical `overview` and `application` ids before routing. `mountPages` builds the `.doc-page` hosts into `#content` before rendering and gives each host `tabindex="-1"`; `buildNav` builds the tree; `addPageStatusLines` adds only the metadata the surface requires. `index.html` and `404.html` carry no navigation or route vocabulary and cannot drift apart.

### Pages and parts (A32)
An entry that carries a `parent` field is a part rather than a page. `mountParts` gives the parent host a title and mounts one `.spec-part` section per part inside it, keeping the part's id on the section, so `renderMarkdownInto` and `renderVorlagen` find their targets by id and render into the merged page without knowing about it. `foldParts` runs once the five have rendered and moves their headings down one level, so the merged page carries a single H1; it also puts the part number in front of the heading the way the tree does. Three functions answer the page-and-part question for everything else: `isPageId` for what can be shown, `hostPage` for the page a part sits in, and `isRouteId` for what is addressable at all. `pageForAnchor` and `showPage` route through `hostPage`, `resolveTemplateUrl` accepts any registry slug, and `listPages`, which the term index reads, returns the parts in place of the page that holds them, so the register names the part a term stands in.

### Sub-navigation and scrollspy (A33)
`buildNav` emits a `.docs-nav-sub` list under the specification entry with its five parts, and `setupScrollspy` observes every element a subtree links to with one `IntersectionObserver`, whose root margin cuts the viewport down to the band under the fixed header. The callback records which targets intersect and marks the first of them in document order, as a class and as `aria-current="location"`. It runs on `promptotyping:content-ready`, the event at which every addressable piece of content stands in the DOM. Two properties fall out of the arrangement rather than being coded: an inactive page is `display: none` and never intersects, so a page change clears the marker of the page left behind, and a reader standing above the first section of a page is in no section, so nothing is marked.

### Subpath aliases via `404.html`
GitHub Pages returns its 404 document for any path that is not a real file, which makes `404.html` the only router the site has. Since 2026-07-26 it is a stub rather than a second copy of the shell, carrying the theme prelude, the stylesheet, the shared favicon, a handover script and a bare not-found body, and it states no address vocabulary of its own. The script strips the `/Promptotyping/` prefix and the trailing slash and hands the remaining path to the application with `window.location.replace("/Promptotyping/?p=" + encodeURIComponent(path) + window.location.hash)`. The incoming hash passes through untouched, because the snapshot form `/promptotyping-document/data#v0.1` carries its version there. An empty path leaves the not-found body visible, which is the case of a request for the 404 document itself.

`resolveTemplateUrl` in `registry.js` translates the handed-over path, and it is the one place a subpath becomes an anchor. It derives canonical bare page slugs from `PAGES`, compatibility forms from `LEGACY_ROUTE_ALIASES`, and prefixed families from `ANCHOR_FAMILIES`. The genuine special cases remain `konvention` onto `konvention-v0.1` and the snapshot suffix on a template path. The boot in `app.js` reads the parameter before `showPage` and sets the canonical hash with `history.replaceState`. A legacy hash received directly is normalised by `handleHash` through the same alias table. Neither replacement creates an additional browser-history entry.

The price of the handover is a not-found state inside the application. A subpath that resolves to nothing arrives as a normal load of `index.html` with HTTP 200, so `showNotFound` mounts a page host that is deliberately absent from the registry, from the sidebar tree and from the specification index. The earlier arrangement kept the address tables in `404.html` and answered an unknown path with the static not-found body, at the cost of a second copy of the vocabulary that had already drifted seven entries apart from the resolver.

### HTTP 404 by design and the machine address (ADR-10)
A subpath request is served by `404.html`, so it carries HTTP status 404 even though the page renders correctly. The subpath and hash forms in a document's `template:` field are the human-readable addresses, and their resolution needs JavaScript. For machine access without a browser, the canonical address of any content is the static Markdown URL under `_content/`, pattern `https://dhcraft.org/Promptotyping/_content/promptotyping-document/{slug}.md`. That URL returns the raw Markdown with HTTP 200 and no JavaScript. The site footer states this machine address explicitly.

## Script inventory

The logic is split by responsibility across nine core files and three modules. `core.js` carries the shared helpers, escaping, slugify, loading Markdown and JSON, reading frontmatter, clipboard and code-copy buttons, the YouTube facade, and the guard around programmatic hash writes. `markdown.js` carries the marked configuration, `parseMarkdown` and `renderMarkdownInto`. `registry.js` carries `PAGES` and everything that follows from it, the page hosts, the sidebar tree, the specification index, the status lines, the route resolution with its special anchors, and `resolveTemplateUrl`. `shell.js` carries the reusable side panel and the theme toggle. The four `pages-*.js` files carry one page type each, glossary, templates, vault, and the content pages without a data source of their own, that is Praxis, Skills and the use-case host together with the function hues of the Artefakt page. `app.js` carries only the boot order. ADR-5 records why the No-Build architecture is retained.

Calls across file boundaries go through the namespace at call time, so no load order among the first eight matters. Two positions are behaviour-relevant. `app.js` must be the last of the nine, because it starts `init()` when the document is already parsed, and the two shell-declared modules must follow it.

`init()` runs on `DOMContentLoaded` in this order:

1. `configureMarked()` registers the marked configuration.
2. `mountPages()` and `buildNav()` build the page hosts and the sidebar tree from `PAGES`.
3. `setupSidePanel()`, `setupThemeToggle()` and `setupGlossarInteraction()` wire the reusable slide-in panel, the theme control and the glossar tooltip delegation. The sidebar has no toggle; it is always visible.
4. `showPage()` activates the routed page immediately, so the shell is never a blank frame while the content files are still in flight.
5. A `Promise.all` renders the static pages and the glossary in parallel.
6. `loadLateModules` injects and awaits the module scripts the shell does not declare, then `promptotyping:sections-ready` fires, so no module can miss its boot event. The vault renders, then `addPageStatusLines`, then `handleHash` against the fully rendered DOM, and last `promptotyping:content-ready`, the event at which every addressable piece of content stands in the DOM. The term index listens for the second event, because it scans the rendered pages rather than a data file alone.

**marked configuration** (`markdown.js`)**.** `configureMarked` calls `marked.use` with `gfm: true` and `breaks: false`. The footnote apparatus and the heading-id generator served the paper view alone and left with it on 2026-10-28. A defensive stripper for the `{:.phase-*}` tags of the removed provenance lane stood here until 2026-07-27 and was deleted once a sweep confirmed that no such tag survives under `_content/`. marked.js does not parse the Pandoc-style class syntax `{:.class}`, so any class tag now renders literally. The lane is not to be revived; that decision stands in ADR-4.

**Practice pages** (`app.js` boot)**.** `overview`, `application`, `workflow`, `artefakt` and `verifikation` are static content rendered by `renderMarkdownInto`. Overview and Application use matching English substrate names. Application, Artefact and Checking are parts of the specification page; `workflow` is a page of its own. The first three are the practice accounts; `workflow` walks the video-documented session through the four forms of work and carries the part-1 video.

**Vault sub-view** (`pages-vault.js`)**.** `renderVault` loads `data/vault.json` and builds the `#vault` section as one block per topic map, each listing its assertions as buttons; `openVaultAssertion` fills the side panel with the assertion's statement, its status and topics, and its grounding anchors, which link to the distillate Markdown under `vault/20_distillates/`. An assertion may belong to several topic maps. Its first list occurrence carries the unique public anchor `#vault-{slug}` and later occurrences remain buttons without repeating the HTML id. `/vault/{slug}` resolves onto that first occurrence; the slugs survived the claim-to-assertion rename of August 2026 unchanged. The index is generated by `vault/tools/build_site_index.py` from the assertion and distillate layers and committed; the site fetches one static file rather than the several hundred Markdown files behind it, and it renders after the static pages so the index never blocks them. Since A37 the same file also carries the network view, a per-topic three-column SVG over assertion, distillate and source, drawn from the same index, which gained a source layer for it; the list stays the default, and a `#vault-{slug}` deep link switches back to the list so the published anchors resolve in both view states.

**Template catalogue.** Each row carries a `trigger` field, the condition under which the template's function applies, derived from the function table in `_content/konvention.md` and held in `data/promptotyping-documents.json`.

**Glossar** (`pages-glossar.js`)**.** `renderGlossar` loads `data/glossar.json` through the cached `A.glossarEntries()` getter, sorts entries once, and renders the glossar section; a `#konzept-{name}` address resolves into the matching entry through `konzeptSlug`, an identity mapping with two recorded aliases, so the section emits no alias anchors of its own. A sub-navigation of initials heads the section, one link per first letter to the first entry under it. `sourcesHtml` renders the `quellen` list of an entry, giving a source with an anchor a link and leaving a source without one as text (A34); the same function serves the entry on the page and the tooltip. `categoryHtml` renders the taxonomy mark of A36, taking the wording from `_meta.kategorien` of the same file and the shape from `CATEGORY_MARKS`; it is exposed on the namespace as `A.glossarCategoryHtml`, so the term index draws the same mark without a second table. `decorateGlossarTriggers` walks the text nodes of a rendered section and wraps the first occurrence of each term (longest term first, word-boundary check, skipping links, code, and headings) in a keyboard-accessible `.glossar-trigger`. Since the paper view left the site, no page calls it, and the tooltip path stays available for a future reading flow. `setupGlossarInteraction` shows a tooltip after a 400ms hover delay and toggles the same tooltip on click or Enter/Space (A6). The tooltip is one element appended to `document.body` and repositioned per trigger, clamped to the viewport, and it stays open while the pointer moves into it so the link to the full entry stays reachable. The side panel is no longer part of this path.

**Side panel** (`shell.js`)**.** `openSidePanel`/`closeSidePanel` fill and reveal the single reusable `#side-panel`, manage the backdrop, trap Tab navigation within the dialog, restore focus to its native trigger, and close on Escape or backdrop click. `openMarkdownPanel` caches rendered Markdown by public anchor and assigns each uncached request an identifier. A response fills the current open panel only while that identifier remains current; closing the panel or opening another one invalidates the pending update.

**Vorlagen hub** (`pages-vorlagen.js`)**.** `renderVorlagen` loads `data/promptotyping-documents.json` (top-level `documents`, each with `slug`, `title`, `funktion`, `datei`, `typ`, `version`, `status`, `machineUrl`), builds the `#vorlagen` section as a hub with four blocks, the quiet sub-navigation over them having been removed on 2026-07-26 (A19): `#vorlagen-katalog` (the clickable template table wired by `wireVorlagenRows`), `#vorlagen-konvention` (a short abstract with a jump to `#konvention-v0.1`), `#vorlagen-maschinenzugriff` (the Frontmatter-Inspector host from `renderInspector` plus the machine-address note), and `#vorlagen-technology-baseline` (the baseline abstract linking `_content/technology-baseline.md`). The sub-anchors are in-page fragments without subpath routing and without an entry in the anchor-family table; a `vorlagen`-prefixed hash resolves through the DOM fallback of `pageForAnchor`, which walks up from the element to its `.doc-page` ancestor. Each row keeps its stable anchor and pointer surface; a native button in its first cell carries the keyboard semantics. Activating either calls `openTemplatePanel`, which fetches `_content/promptotyping-document/{slug}.md`, renders it into the side panel, appends a footer with a copyable `template:` block and a machine-URL link, and caches the result.

**Skills and Praxis** (`pages-content.js`)**.** `renderSkills` builds an intro, the `#skills-promptotyping` package view, and the `#skills-coding` and `#skills-writing` teaching blocks from `_content/skills/`. The package view fetches `promptotyping/SKILL.md` from the canonical skill repository, `DigitalHumanitiesCraft/promptotyping-skill` (A42), through its `raw.githubusercontent.com` address, which answers with `Access-Control-Allow-Origin: *`. The fetch starts only when the Skills page is first shown, signalled by the `promptotyping:page-shown` event that `showPage` dispatches on every page change, and it stands outside the boot's `ready` promise, so a blocked or slow GitHub delays nothing else. `rebaseSkillLinks` points the file's package-relative links at the skill repository. The view copies the complete source, offers it for download as a same-origin blob, because browsers ignore the `download` attribute on a cross-origin link, and links to the package folder. If `raw.githubusercontent.com` is unreachable, the block shows the shared load error. The block carries `data-term-index-skip`, so the term index leaves its text out (A25). Prompt code blocks retain their own copy controls. `renderPraxis` renders `_content/praxis.md` and gives each heading a stable `#praxis-{slug}` anchor matching the `/praxis/{slug}` route.

**Template URL resolution** (`registry.js`)**.** `resolveTemplateUrl` maps both subpath and hash template URLs onto the canonical hash anchor. It is the one implementation of the subpath vocabulary, called by the boot in `app.js` for the path `404.html` hands over and by the inspector for a pasted address.

## Modules

**`frontmatter-inspector.js`** (A11, ADR-7). A paste-live-render control in the Maschinenzugriff block. It reads helpers from `window.PromptotypingApp`, seeds the textarea with an example frontmatter, and on input (debounced 300ms) or on the resolve button extracts the whole YAML block, parses it with `window.jsyaml.load`, reads `template.url` or `template.alias`, validates the URL against the site anchor scheme, and opens the referenced template in the side panel. `resolveWithFallback` maps a not-yet-minted snapshot anchor back to the latest anchor with a warning. The module boots on the `promptotyping:sections-ready` event, since its host markup is injected asynchronously.

**`case-study-filter.js`** (ADR-8). Renders the case-study cards from `data/case-studies.json` grouped by the role a case plays as evidence for the practice, evidence, genealogy, teaching or further, and ordered within a block by the epistemic function of its interface, with a filter bar whose primary chips run over the five epistemic interface functions and whose only secondary control is a demo-available checkbox. Each card carries a `#case-{id}` anchor; a "Mehr" button opens the deep page from `_content/case-studies/{id}.md` in the side panel, and a card-level video button loads a YouTube click-to-load facade in place via the shared `buildVideoFacade` helper. The module reads its host element `data-component="case-study-filter"` and boots on `promptotyping:sections-ready`. There is no internal genre vocabulary.

**`term-index.js`** (A25). Builds the term index above the glossary entries. It mounts its host on `promptotyping:sections-ready` and fills it on `promptotyping:content-ready`, taking the terms from `data/glossar.json` and testing each one against a lowercased text extract per page container, with a word-boundary check. Its middle column carries the category of A36, drawn through `A.glossarCategoryHtml`, and the filter searches the category label together with the term and the page labels. It fetches nothing beyond the glossary file. The scan works only because the inactive pages stay in the DOM as `display: none`; lazy-mounting them would break the index in the same move in which it would break anchor resolution. The one block loaded later by design, the canonical skill from its own repository, carries `data-term-index-skip`, and `pageText` subtracts its text whether it has arrived or not, so the register does not depend on the entry route or the network. `app.js` injects the script at runtime rather than the shell declaring it.

## Data flow

`_content/` holds the site's Markdown and `data/` the JSON that JavaScript consumes directly.

```
_content/promptotyping-document/{slug}.md               ← template mirrors, one file per slug
_content/case-studies/{id}.md                           ← case-study deep pages
_content/skills/{index,coding,writing}.md               ← skills content
promptotyping-skill: promptotyping/SKILL.md              ← canonical skill, fetched at runtime from its own repository
_content/{overview,application,konvention,artefakt,verifikation,praxis,workflow,tutorial,arbeitsumgebung,technology-baseline}.md
_content/glossar.md                                     ← glossar prose, generated from data/glossar.json
_content/MANIFEST.md                                    ← mirror provenance
data/vault.json                                         ← assertion layer, generated from vault/

data/glossar.json                 ← glossar entries (structured)
data/promptotyping-documents.json ← template catalogue (structured)
data/case-studies.json            ← case-study cards, grouped by use case
```

The template mirrors, except the repository-canonical `technology` template, and the pages `konvention.md` and `praxis.md` are copied from the vault, and `_content/MANIFEST.md` records their provenance. The other page texts are authored in this repository. `data/glossar.json` is maintained by hand, and `tools/build_glossar.py` generates `_content/glossar.md` from it. `data/vault.json` is generated from `vault/` by `vault/tools/build_site_index.py`. `data/promptotyping-documents.json` and `data/case-studies.json` are maintained by hand, and `tools/check_consistency.py` checks them against the mirrors, the convention and the case-study pages.

## Local development and deployment

Serve the repository root over HTTP for local work, for example `python -m http.server 8000`, and open `http://localhost:8000`. Deployment is a push to `main`; GitHub Pages publishes the root with no build step and no Jekyll processing. The custom domain `dhcraft.org/Promptotyping/` is configured via DNS and CNAME.

## Security and privacy

- No backend, no server-side logic, no database, no tracking.
- YouTube embeds use the `youtube-nocookie.com` variant behind a click-to-load facade, so no connection to YouTube is made before the click.
- External live-demo iframes carry a `sandbox` attribute where possible.
- The canonical skill is fetched from `raw.githubusercontent.com` only when a reader opens the Skills page, so no other page view contacts `raw.githubusercontent.com`. Its Markdown is rendered without sanitising, like every other source of the site; it follows the `main` branch of the skill repository unpinned.

## The `vault/` folder

`vault/` is an instance of the Grounded-Vault template (`DigitalHumanitiesCraft/grounded-vault`), the grounded evidence layer that anchors the load-bearing claims of the practice in verifiable sources (operator decision 2026-07-19). It carries its own action layer `vault/CLAUDE.md` and its own knowledge base under `vault/knowledge/`; work inside the vault follows those rules. The Python tools under `vault/tools/` are the permitted exceptions to the no-build rule of this repository; `validate.py` checks the vault's grounding integrity, and the others read the vault or render from it on demand. `build_site_index.py` is the one that writes into the site, and its output `data/vault.json` is committed, so nothing runs at delivery time.
