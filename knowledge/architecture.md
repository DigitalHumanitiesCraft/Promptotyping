---
title: Architecture
project:
  name: Promptotyping Site
  repository: https://github.com/DigitalHumanitiesCraft/Promptotyping
status: complete
language: en
version: 0.9
created: 2026-05-09
updated: 2026-11-14
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

The architecture below describes the Promptotyping portal.

How the site is built. A single HTML page holds the static start page (A48) and empty section shells for every other page; vanilla JavaScript fetches Markdown from `_content/` and JSON from `data/`, renders it with a vendored Markdown parser, and drives client-side routing. GitHub Pages publishes a tree that a workflow copies from the repository, with no build step. What the site does is in [specification.md](specification.md); how it looks is in [design.md](design.md).

## Stack

- **Hosting**: GitHub Pages, branch `main`, deployed by `.github/workflows/pages.yml`, which copies `index.html`, `404.html`, `LICENSE`, `CITATION.cff`, `assets/`, `_content/` and `schema/` into the Pages artifact. The knowledge base, the action layer, tools and tests are not published. Until 2026-11-14 it also published the introduction page under `intro/` and the vault layers the Vault view linked. No Jekyll build runs; `.nojekyll` keeps the legacy root build raw until the Pages source is GitHub Actions.
- **HTML/CSS/JS**: vanilla, no framework, no bundler, no npm dependency.
- **Markdown parser**: marked.js v9.1.6, vendored in `assets/vendor/marked.min.js`. No CDN.
- **YAML parser**: js-yaml v4.1.0, vendored in `assets/vendor/js-yaml.min.js`, used by the Frontmatter-Inspector to parse pasted frontmatter blocks. No CDN.
- **Introduction page**: withdrawn on 2026-11-14 together with `intro/` (A47).
- **Scripts**: seven plain scripts under `assets/js/`, each an IIFE extending the shared namespace `window.PromptotypingApp`, plus two module scripts under `assets/js/modules/`. No ES module, no `import`. `index.html` declares the seven core files in a fixed order and both modules after them. `404.html` is a stub and carries no site script at all. The glossary and Vault scripts and the term index, which `app.js` injected at runtime, were removed on 2026-11-14.

## Directory layout

```
Promptotyping/
├── index.html                      # site entry, static start page and empty section shells
├── 404.html                        # subpath handover stub, passes the path to index.html as ?p=
├── .nojekyll                       # forces GitHub Pages to publish _content/
├── README.md
├── CLAUDE.md                       # action layer
├── CITATION.cff, LICENSE
├── knowledge/                      # this knowledge base (specification)
├── schema/                         # JSON Schema of the frontmatter core (check group V16)
├── tools/                          # check_consistency.py, build_downloads.py, tests/
├── _content/                       # Markdown content
│   ├── promptotyping-document/     # one template mirror per slug
│   ├── case-studies/               # case-study deep pages
│   ├── examples/                   # illustrative example files
│   ├── overview.md, application.md, konvention.md, artefakt.md, verifikation.md
│   ├── praxis.md, workflow.md, tutorial.md, arbeitsumgebung.md, technology-baseline.md
│   └── MANIFEST.md                 # mirror provenance
├── assets/
│   ├── css/style.css
│   ├── js/                         # seven core scripts, app.js loads last
│   ├── js/modules/frontmatter-inspector.js
│   ├── js/modules/case-study-filter.js
│   ├── vendor/marked.min.js, vendor/js-yaml.min.js
│   ├── data/                       # promptotyping-documents.json, case-studies.json
│   ├── dhcraft/                    # shared DHCraft tokens, blocks, mark and fonts (A49), unchanged copies
│   ├── img/dhcraft-logo-watercolor.png
│   └── promptotyping-logo.png
```

## URL structure and routing

### Hash anchors (canonical for humans)
Routing uses browser-native `location.hash`. Since the rebuild of 2026-07-25 the site shows one page at a time, so the hash first selects a page and then an element within it. `pageForAnchor` resolves a hash in three steps: an exact registry id wins and answers with the page it names, or with the page a part sits in (A32), otherwise a prefix table maps sub-anchors onto their owning entry (`case-*` onto `use-cases`, `praxis-*`, the retired `skills-*`, `glossar-*`, `konzept-*` and `vault-*` onto the start page, `promptotyping-document-*` onto the templates part, `konvention-*` onto the convention part), and otherwise the DOM decides by walking up from the element to its `.doc-page` ancestor. `showPage` toggles the `is-active` class, marks the sidebar entry, sets the document title and dispatches `promptotyping:page-shown` with the page id; the other pages stay in the DOM as `display: none`, so every published anchor keeps resolving whatever page is showing. A deep link scrolls twice, once immediately and once after `document.fonts.ready`, because web fonts reflow the page under the first scroll. The full anchor scheme is in [specification.md](specification.md), A4, and in `CLAUDE.md`.

### Page registry
`PAGES` in `registry.js` is the single source for page hosts, the sidebar tree, and canonical route resolution. Each entry carries id, label, group, a `kind` of `normative` or `informative`, optionally a note or machine address, and for the five parts of the specification a part number. `LEGACY_ROUTE_ALIASES` maps the historical `ueberblick` and `anwendung` forms onto the canonical `overview` and `application` ids before routing, and the addresses of the pages retired on 2026-11-14, `skills`, `vault` and `glossar`, onto the start page. `mountPages` builds the `.doc-page` hosts into `#content` before rendering and gives each host `tabindex="-1"`; `buildNav` builds the tree; `addPageStatusLines` adds only the metadata the surface requires. `index.html` and `404.html` carry no navigation or route vocabulary and cannot drift apart.

### Pages and parts (A32)
An entry that carries a `parent` field is a part rather than a page. `mountParts` gives the parent host a title and mounts one `.spec-part` section per part inside it, keeping the part's id on the section, so `renderMarkdownInto` and `renderVorlagen` find their targets by id and render into the merged page without knowing about it. `foldParts` runs once the five have rendered and moves their headings down one level, so the merged page carries a single H1; it also puts the part number in front of the heading the way the tree does. Three functions answer the page-and-part question for everything else: `isPageId` for what can be shown, `hostPage` for the page a part sits in, and `isRouteId` for what is addressable at all. `pageForAnchor` and `showPage` route through `hostPage`, and `resolveTemplateUrl` accepts any registry slug.

### Sub-navigation and scrollspy (A33)
`buildNav` emits a `.docs-nav-sub` list under the specification entry with its five parts, and `setupScrollspy` observes every element a subtree links to with one `IntersectionObserver`, whose root margin cuts the viewport down to the band under the fixed header. The callback records which targets intersect and marks the first of them in document order, as a class and as `aria-current="location"`. It runs on `promptotyping:content-ready`, the event at which every addressable piece of content stands in the DOM. Two properties fall out of the arrangement rather than being coded: an inactive page is `display: none` and never intersects, so a page change clears the marker of the page left behind, and a reader standing above the first section of a page is in no section, so nothing is marked.

### Subpath aliases via `404.html`
GitHub Pages returns its 404 document for any path that is not a real file, which makes `404.html` the only router the site has. Since 2026-07-26 it is a stub rather than a second copy of the shell, carrying the theme prelude, the stylesheet, the shared favicon, a handover script and a bare not-found body, and it states no address vocabulary of its own. The script strips the `/Promptotyping/` prefix and the trailing slash and hands the remaining path to the application with `window.location.replace("/Promptotyping/?p=" + encodeURIComponent(path) + window.location.hash)`. The incoming hash passes through untouched, because the snapshot form `/promptotyping-document/data#v0.1` carries its version there. An empty path leaves the not-found body visible, which is the case of a request for the 404 document itself.

`resolveTemplateUrl` in `registry.js` translates the handed-over path, and it is the one place a subpath becomes an anchor. It derives canonical bare page slugs from `PAGES`, compatibility forms from `LEGACY_ROUTE_ALIASES`, and prefixed families from `ANCHOR_FAMILIES`. The genuine special cases remain `konvention` onto `konvention-v0.1` and the snapshot suffix on a template path. The boot in `app.js` reads the parameter before `showPage` and sets the canonical hash with `history.replaceState`. A legacy hash received directly is normalised by `handleHash` through the same alias table. Neither replacement creates an additional browser-history entry.

The price of the handover is a not-found state inside the application. A subpath that resolves to nothing arrives as a normal load of `index.html` with HTTP 200, so `showNotFound` mounts a page host that is deliberately absent from the registry, from the sidebar tree and from the specification index. The earlier arrangement kept the address tables in `404.html` and answered an unknown path with the static not-found body, at the cost of a second copy of the vocabulary that had already drifted seven entries apart from the resolver.

### HTTP 404 by design and the machine address (ADR-10)
A subpath request is served by `404.html`, so it carries HTTP status 404 even though the page renders correctly. The subpath and hash forms in a document's `template:` field are the human-readable addresses, and their resolution needs JavaScript. For machine access without a browser, the canonical address of any content is the static Markdown URL under `_content/`, pattern `https://dhcraft.org/Promptotyping/_content/promptotyping-document/{slug}.md`. That URL returns the raw Markdown with HTTP 200 and no JavaScript. The site footer states this machine address explicitly.

## Script inventory

The logic is split by responsibility across seven core files and two modules. `core.js` carries the shared helpers, escaping, slugify, loading Markdown and JSON, reading frontmatter, clipboard and code-copy buttons, the YouTube facade, and the guard around programmatic hash writes. `markdown.js` carries the marked configuration, `parseMarkdown` and `renderMarkdownInto`. `registry.js` carries `PAGES` and everything that follows from it, the page hosts, the sidebar tree, the specification index, the status lines, the route resolution with its special anchors, and `resolveTemplateUrl`. `shell.js` carries the reusable side panel and the theme toggle. The two `pages-*.js` files carry one page type each, templates, and the content pages without a data source of their own, that is Praxis, Skills and the use-case host together with the function hues of the Artefakt page. `app.js` carries only the boot order. ADR-5 records why the No-Build architecture is retained.

Calls across file boundaries go through the namespace at call time, so no load order among the first six matters. Two positions are behaviour-relevant. `app.js` must be the last of the seven, because it starts `init()` when the document is already parsed, and the two shell-declared modules must follow it.

`init()` runs on `DOMContentLoaded` in this order:

1. `configureMarked()` registers the marked configuration.
2. `mountPages()` and `buildNav()` build the page hosts and the sidebar tree from `PAGES`.
3. `setupSidePanel()` and `setupThemeToggle()` wire the reusable slide-in panel and the theme control. The sidebar has no toggle; it is always visible.
4. `showPage()` activates the routed page immediately, so the shell is never a blank frame while the content files are still in flight.
5. A `Promise.all` renders the static pages in parallel.
6. `foldParts` folds the five parts into the specification page, then `promptotyping:sections-ready` fires for the two modules, then `addPageStatusLines`, then `handleHash` against the fully rendered DOM, and last `promptotyping:content-ready`, the event at which every addressable piece of content stands in the DOM and on which the scrollspy sets up.

**marked configuration** (`markdown.js`)**.** `configureMarked` calls `marked.use` with `gfm: true` and `breaks: false`. The footnote apparatus and the heading-id generator served the paper view alone and left with it on 2026-10-28. A defensive stripper for the `{:.phase-*}` tags of the removed provenance lane stood here until 2026-07-27 and was deleted once a sweep confirmed that no such tag survives under `_content/`. marked.js does not parse the Pandoc-style class syntax `{:.class}`, so any class tag now renders literally. The lane is not to be revived; that decision stands in ADR-4.

**Start page** (`index.html`)**.** The start page stands as a static `section#overview` in `index.html`, so it reads without JavaScript. `mountPages` adopts an existing host instead of mounting a second one, and `app.js` fetches `_content/overview.md` only for its frontmatter, which the footer reads. The copy buttons of its fields come from the shared module `assets/dhcraft/dhcraft-copy.js`, which renders them only where the Clipboard API exists. `showPage` writes the page id to `body[data-page]`, which the stylesheet reads to widen the start page to the page frame. The header navigation is static markup (A50); `markNavActive` and the scrollspy mark its entries. `tools/build_downloads.py` builds the template archive that the page offers, and the skill is offered as a link to its repository (A42); the Pages workflow runs it on the assembled tree, and a local run writes into the ignored folder `downloads/`.

**Practice pages** (`app.js` boot)**.** `application`, `workflow`, `artefakt` and `verifikation` are static content rendered by `renderMarkdownInto`. Overview and Application use matching English substrate names. Application, Artefact and Checking are parts of the specification page; `workflow` is a page of its own. Application, Artefact and Checking are the practice accounts; `workflow` walks the video-documented session through the four forms of work and carries the part-1 video.

**Template catalogue.** Each row carries a `trigger` field, the condition under which the template's function applies, derived from the function table in `_content/konvention.md` and held in `assets/data/promptotyping-documents.json`.

**Side panel** (`shell.js`)**.** `openSidePanel`/`closeSidePanel` fill and reveal the single reusable `#side-panel`, manage the backdrop, trap Tab navigation within the dialog, restore focus to its native trigger, and close on Escape or backdrop click. `openMarkdownPanel` caches rendered Markdown by public anchor and assigns each uncached request an identifier. A response fills the current open panel only while that identifier remains current; closing the panel or opening another one invalidates the pending update.

**Vorlagen hub** (`pages-vorlagen.js`)**.** `renderVorlagen` loads `assets/data/promptotyping-documents.json` (top-level `documents`, each with `slug`, `title`, `funktion`, `datei`, `typ`, `version`, `status`, `machineUrl`), builds the `#vorlagen` section as a hub with four blocks, the quiet sub-navigation over them having been removed on 2026-07-26 (A19): `#vorlagen-katalog` (the clickable template table wired by `wireVorlagenRows`), `#vorlagen-konvention` (a short abstract with a jump to `#konvention-v0.1`), `#vorlagen-maschinenzugriff` (the Frontmatter-Inspector host from `renderInspector` plus the machine-address note), and `#vorlagen-technology-baseline` (the baseline abstract linking `_content/technology-baseline.md`). The sub-anchors are in-page fragments without subpath routing and without an entry in the anchor-family table; a `vorlagen`-prefixed hash resolves through the DOM fallback of `pageForAnchor`, which walks up from the element to its `.doc-page` ancestor. Each row keeps its stable anchor and pointer surface; a native button in its first cell carries the keyboard semantics. Activating either calls `openTemplatePanel`, which fetches `_content/promptotyping-document/{slug}.md`, renders it into the side panel, appends a footer with a copyable `template:` block and a machine-URL link, and caches the result.

**Retired pages.** The glossary (A6) and the Vault view (A37) were retired on 2026-11-14, with `pages-glossar.js`, `pages-vault.js`, the term index and their data files. `registry.js` sends `#glossar`, `#vault`, the families `glossar-`, `konzept-` and `vault-` and the subpaths `/glossar`, `/konzepte/{name}`, `/vault` and `/vault/{slug}` to the start page.

**Praxis** (`pages-content.js`)**.** The Skills page was retired on 2026-11-14 together with the copy of the skill (A42). `registry.js` sends `#skills` and every `#skills-{name}` to the start page through `LEGACY_ROUTE_ALIASES` and the `skills-` anchor family, and `#skills-promptotyping` to the start page's section `#start-example`, so published links still land. `renderPraxis` renders `_content/praxis.md` and gives each heading a stable `#praxis-{slug}` anchor matching the `/praxis/{slug}` route.

**Template URL resolution** (`registry.js`)**.** `resolveTemplateUrl` maps both subpath and hash template URLs onto the canonical hash anchor. It is the one implementation of the subpath vocabulary, called by the boot in `app.js` for the path `404.html` hands over and by the inspector for a pasted address.

## Modules

**`frontmatter-inspector.js`** (A11, ADR-7). A paste-live-render control in the Maschinenzugriff block. It reads helpers from `window.PromptotypingApp`, seeds the textarea with an example frontmatter, and on input (debounced 300ms) or on the resolve button extracts the whole YAML block, parses it with `window.jsyaml.load`, reads `template.url` or `template.alias`, validates the URL against the site anchor scheme, and opens the referenced template in the side panel. `resolveWithFallback` maps a not-yet-minted snapshot anchor back to the latest anchor with a warning. The module boots on the `promptotyping:sections-ready` event, since its host markup is injected asynchronously.

**`case-study-filter.js`** (ADR-8). Renders the case-study cards from `assets/data/case-studies.json` grouped by the role a case plays as evidence for the practice, evidence, genealogy, teaching or further, and ordered within a block by the epistemic function of its interface, with a filter bar whose primary chips run over the five epistemic interface functions and whose only secondary control is a demo-available checkbox. Each card carries a `#case-{id}` anchor; a "Mehr" button opens the deep page from `_content/case-studies/{id}.md` in the side panel, and a card-level video button loads a YouTube click-to-load facade in place via the shared `buildVideoFacade` helper. The module reads its host element `data-component="case-study-filter"` and boots on `promptotyping:sections-ready`. There is no internal genre vocabulary.

## Data flow

`_content/` holds the site's Markdown and `assets/data/` the JSON that JavaScript consumes directly.

```
_content/promptotyping-document/{slug}.md               ← template mirrors, one file per slug
_content/case-studies/{id}.md                           ← case-study deep pages
_content/{overview,application,konvention,artefakt,verifikation,praxis,workflow,tutorial,arbeitsumgebung,technology-baseline}.md
_content/MANIFEST.md                                    ← mirror provenance

assets/data/promptotyping-documents.json ← template catalogue (structured)
assets/data/case-studies.json            ← case-study cards, grouped by use case
```

The template mirrors, except the repository-canonical `technology` template, and the pages `konvention.md` and `praxis.md` are copied from the vault, and `_content/MANIFEST.md` records their provenance. The other page texts are authored in this repository. `assets/data/promptotyping-documents.json` and `assets/data/case-studies.json` are maintained by hand, and `tools/check_consistency.py` checks them against the mirrors, the convention and the case-study pages.

## Local development and deployment

Serve the repository root over HTTP for local work, for example `python -m http.server 8000`, and open `http://localhost:8000`. Deployment is a push to `main`; the Pages workflow publishes the listed folders with no build step and no Jekyll processing. A local preview of the published tree copies the same list. The custom domain `dhcraft.org/Promptotyping/` is configured via DNS and CNAME.

## Security and privacy

- No backend, no server-side logic, no database, no tracking.
- YouTube embeds use the `youtube-nocookie.com` variant behind a click-to-load facade, so no connection to YouTube is made before the click.
- External live-demo iframes carry a `sandbox` attribute where possible.

## The `vault/` folder (retired)

`vault/` held an instance of the Grounded-Vault template (`DigitalHumanitiesCraft/grounded-vault`) from 2026-07-19 to 2026-11-14, with its own action layer, knowledge base, Python tools and tests, and `vault/tools/build_site_index.py` wrote the committed `assets/data/vault.json` for the Vault view. The folder, the view and the index left the repository on 2026-11-14 (operator decision, A37). `.gitignore` keeps a local copy of the folder out of version control, because its sources may be confidential.
