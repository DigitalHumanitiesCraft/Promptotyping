---
title: Architecture
project:
  name: Promptotyping Site
  repository: https://github.com/DigitalHumanitiesCraft/Promptotyping
status: complete
language: en
version: 0.7
created: 2026-05-09
updated: 2026-07-26
authors: [Christopher Pollin]
generated-with: Claude Code (Claude Opus 4.8)
method:
  name: Promptotyping
  url: https://dhcraft.org/Promptotyping/
template:
  name: Vorlage Architecture
  version: 0.3
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

How the site is built. A single HTML page holds empty section shells; vanilla JavaScript fetches Markdown from `_content/` and JSON from `data/`, renders it with a vendored Markdown parser, and drives client-side routing. GitHub Pages serves the repository root directly, with no build step. What the site does is in [specification.md](specification.md); how it looks is in [design.md](design.md).

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
├── 404.html                        # subpath-routing fallback (copy of index with a routing prelude)
├── .nojekyll                       # forces GitHub Pages to publish _content/
├── README.md
├── CLAUDE.md                       # action layer
├── knowledge/                      # this knowledge base (specification)
├── _content/                       # Markdown content
│   ├── promptotyping-document/     # one template mirror per slug
│   ├── case-studies/               # case-study deep pages
│   ├── skills/                     # index, coding, writing
│   ├── ueberblick.md, konvention.md, praxis.md
│   ├── arbeitsumgebung.md, technology-baseline.md
│   ├── glossar.md               # generated from data/glossar.json
│   └── MANIFEST.md                 # mirror provenance
├── assets/
│   ├── css/style.css
│   ├── js/app.js
│   ├── js/modules/frontmatter-inspector.js
│   ├── js/modules/case-study-filter.js
│   ├── js/modules/term-index.js
│   ├── vendor/marked.min.js, vendor/js-yaml.min.js
│   ├── img/dhcraft-logo-watercolor.png
│   └── promptotyping-logo.png
├── data/                           # glossar.json, promptotyping-documents.json, case-studies.json
└── vault/                          # Grounded-Vault instance (see below)
```

## URL structure and routing

### Hash anchors (canonical for humans)
Routing uses browser-native `location.hash`. Since the rebuild of 2026-07-25 the site shows one page at a time, so the hash first selects a page and then an element within it. `pageForAnchor` resolves a hash in three steps: an exact page id wins, otherwise a prefix table maps sub-anchors onto their owning page (`abschnitt-*`, `literatur` and `fussnoten` onto `paper`, `case-*` onto `use-cases`, `praxis-*`, `skills-*`, `glossar-*` and `konzept-*`, `vault-*`, `promptotyping-document-*` onto `vorlagen`, `konvention-*`), and otherwise the DOM decides by walking up from the element to its `.doc-page` ancestor. `showPage` toggles the `is-active` class, marks the sidebar entry and sets the document title; the other pages stay in the DOM as `display: none`, so every published anchor keeps resolving whatever page is showing. A deep link scrolls twice, once immediately and once after `document.fonts.ready`, because web fonts reflow the page under the first scroll. The full anchor scheme is in [specification.md](specification.md), A4, and in `CLAUDE.md`.

### Page registry
`PAGES` in `app.js` is the single source for the page hosts, the sidebar tree, the route resolution and the generated specification index on the start page. Each entry carries id, label, group, a one-line note, a `kind` of `normative` or `informative`, optionally a machine address for the generated pages, and for the five parts of the specification proper a part number. The groups are Spezifikation, Referenz, Belege, Werkzeuge und Praxis, and Paper. `mountPages` builds the `.doc-page` hosts into `#content` before any rendering runs, so the render functions find their targets by id exactly as before, and gives each host `tabindex="-1"` so it can take the focus programmatically; a page change triggered by `hashchange` moves the focus onto the host of the target page with `preventScroll`, while resolving the initial hash on load leaves the focus where it is (A24); `buildNav` builds the tree; `buildSpecIndex` builds the index on the start page; `addPageStatusLines` puts the status line under every page title, drawing Geltung from the registry and the remaining fields from the frontmatter that `renderMarkdownInto` captures while rendering. `index.html` and `404.html` therefore carry no navigation markup at all and cannot drift apart.

### Subpath aliases via `404.html`
GitHub Pages returns its 404 document for any path that is not a real file. Since 2026-07-26 `404.html` is a stub rather than a second copy of the shell. It carries the theme prelude, the stylesheet, the routing script and a bare not-found body. The routing script strips the `/Promptotyping/` prefix, splits the remaining path into segments, and resolves the first segment through two tables, `PREFIXES` for the families (`promptotyping-document`, `konzepte`, `case-studies`, `konvention`, `paper`, `praxis`, `skills`, `vault`) and `PAGE_PATHS` for the bare pages. A snapshot suffix such as `#v0.1` on a `promptotyping-document` path is folded into the anchor. On a hit it hands over with `window.location.replace("/Promptotyping/#" + anchor)`, so the shell exists exactly once and the two files can no longer drift; on a miss the not-found body stays visible. The cost is one extra request on a subpath call, and it buys the removal of a whole class of drift, since the address bar already showed the hash form under the previous `history.replaceState`. The same mapping is factored into `resolveTemplateUrl` in `app.js` so the inspector and the router share one implementation.

### HTTP 404 by design and the machine address (ADR-10)
A subpath request is served by `404.html`, so it carries HTTP status 404 even though the page renders correctly. The subpath and hash forms in a document's `template:` field are the human-readable addresses, and their resolution needs JavaScript. For machine access without a browser, the canonical address of any content is the static Markdown URL under `_content/`, pattern `https://dhcraft.org/Promptotyping/_content/promptotyping-document/{slug}.md`. That URL returns the raw Markdown with HTTP 200 and no JavaScript. The site footer states this machine address explicitly.

## Script inventory

The logic is split by responsibility across ten files. `core.js` carries the shared helpers, escaping, slugify, loading Markdown and JSON, reading frontmatter, clipboard and code-copy buttons, the YouTube facade, and the guard around programmatic hash writes. `markdown.js` carries the marked configuration with the footnote apparatus, the heading-id generator and the stripper for the legacy `{:.phase-*}` markers, plus `renderPaperMarkdown` and `renderMarkdownInto`. `registry.js` carries `PAGES` and everything that follows from it, the page hosts, the sidebar tree, the specification index, the status lines, the route resolution with its special anchors, and `resolveTemplateUrl`. `shell.js` carries the reusable side panel and the theme toggle. The five `pages-*.js` files carry one page type each, paper, glossary, templates, vault, and the content pages without a data source of their own, that is Praxis, Skills and the use-case host together with the function hues of the Artefakt page. `app.js` carries only the boot order.

Calls across file boundaries go through the namespace at call time, so no load order among the first nine matters. Two positions are behaviour-relevant. `app.js` must be the last of the ten, because it starts `init()` when the document is already parsed, and the two shell-declared modules must follow it.

`init()` runs on `DOMContentLoaded` in this order:

1. `configureMarked()` registers the marked configuration and the phase-tag extension.
2. `mountPages()` and `buildNav()` build the page hosts and the sidebar tree from `PAGES`.
3. `setupSidePanel()`, `setupThemeToggle()` and `setupGlossarInteraction()` wire the reusable slide-in panel, the theme control and the glossar hover/click delegation. The sidebar has no toggle; it is always visible.
4. `showPage()` activates the routed page immediately, so the shell is never a blank frame while the content files are still in flight.
5. A `Promise.all` renders the static pages in parallel. `renderGlossar` must finish before the paper sections, because their glossar triggers cannot be marked otherwise.
6. `loadLateModules` injects and awaits the module scripts the shell does not declare, then `promptotyping:sections-ready` fires, so no module can miss its boot event. Paper renders, then vault, then `addPageStatusLines`, then `handleHash` against the fully rendered DOM, and last `promptotyping:content-ready`, the event at which every addressable piece of content stands in the DOM. The term index listens for the second event, because it scans the rendered pages rather than a data file alone.

**marked configuration and the phase-tag stripper** (`markdown.js`)**.** `configureMarked` calls `marked.use` with `gfm: true`, `breaks: false`, and one block-level extension named `classedParagraph`. marked.js does not parse the Pandoc-style class syntax `{:.class}` out of the box. The paper Markdown still carries `{:.phase-*}` tags as a methodological annotation, and the provenance lane that once rendered them was removed on 2026-06-10 by operator decision. The extension recognises a `{:.class}` tag at the start of a paragraph and strips only the four legacy classes `phase-preparation`, `phase-exploration`, `phase-distillation`, and `phase-implementation`, rendering the paragraph as a plain `<p>` with no class. Any other class tag falls through to the standard paragraph tokenizer. Do not add new `{:.phase-*}` tags; the lane is not to be revived (see `CLAUDE.md`).

**Paper rendering** (`pages-paper.js`)**.** The paper view fetches `knowledge/paper.md`, the canonical text, strips a leading YAML block if one is present, and renders it in one pass; the mirrored cut under `_content/paper/` no longer exists, and with it the largest class of drift. `sectionizePaper` groups the flat output into one `.paper-section` per H2, moving the heading id onto the section so every top-level section stays addressable and observable. `buildPaperToc` then builds the two-level table of contents (A23) from the section ids and the H3 ids and puts it directly after the H1, so the status line inserted later lands between title and contents. `addPaperAnchorAliases` keeps the older `#abschnitt-*` anchors resolving, and `HEADING_ID_MAP` maps `references` onto the `literatur` id so the table of contents entry still lands on the paper's own reference list. The reference list and the footnote apparatus are excluded from `decorateGlossarTriggers` and `decorateCitations`, because the one is the citation target itself and the other carries the source notes.

**Method pages** (`app.js` boot)**.** `anwendung`, `workflow`, `artefakt` and `verifikation` are static content pages rendered by `renderMarkdownInto` from `_content/{slug}.md`, resolvable as subpaths of the same name. The first three are written against the canonical paper; `workflow` walks the video-documented session through the four phases, is sourced from the cleaned scripts in the vault's representation layer, and carries the part-1 video, which used to sit in the hero above the paper. Since 2026-07-25 the sidebar tree puts the specification first and the paper last, so the site answers what Promptotyping is and how it is applied before it argues why (`knowledge/plan-site.md`).

**Vault sub-view** (`pages-vault.js`)**.** `renderVault` loads `data/vault.json` and builds the `#vault` section as one block per topic map, each listing its claims as buttons; `openVaultClaim` fills the side panel with the claim's statement, its status and topics, and its grounding anchors, which link to the distillate Markdown under `vault/10_distillates/`. Each claim carries the anchor `#vault-{slug}`, and `/vault/{slug}` resolves onto it. The index is generated by `vault/tools/build_site_index.py` from the claim and distillate layers and committed; the site fetches one static file rather than the several hundred Markdown files behind it, and it renders after the paper so the index never blocks the reading flow.

**Template catalogue.** Each row carries a `trigger` field, the condition under which the template's function applies, derived from the function table in `_content/konvention.md` and held in `data/promptotyping-documents.json`.

**Glossar** (`pages-glossar.js`)**.** `renderGlossar` loads `data/glossar.json`, sorts entries, renders the glossar section, and emits empty `konzept-*` alias anchors (via `KONZEPT_ALIASES`) so `#konzept-{name}` routing resolves into the matching entry. A sub-navigation of initials heads the section, one link per first letter to the first entry under it. `decorateGlossarTriggers` walks the text nodes of a rendered section and wraps the first occurrence of each term (longest term first, word-boundary check, skipping links, code, and headings) in a keyboard-accessible `.glossar-trigger`. `setupGlossarInteraction` shows a tooltip on hover after a delay and opens the side panel on click or Enter/Space.

**Citations** (`pages-paper.js`)**.** `decorateCitations` walks text nodes and turns parenthetical "Author Year" references into jump links to `#literatur`, matching an author with optional "et al." or a joined co-author and a four-digit year with an optional disambiguation letter.

**Side panel** (`shell.js`)**.** `openSidePanel`/`closeSidePanel` fill and reveal the single reusable `#side-panel`, manage the backdrop, trap and restore focus, and close on Escape or backdrop click.

**Vorlagen hub** (`pages-vorlagen.js`)**.** `renderVorlagen` loads `data/promptotyping-documents.json` (top-level `documents`, each with `slug`, `title`, `funktion`, `datei`, `typ`, `version`, `status`, `machineUrl`), builds the `#vorlagen` section as a hub with a quiet sub-navigation and four blocks: `#vorlagen-katalog` (the clickable template table wired by `wireVorlagenRows`), `#vorlagen-konvention` (a short abstract with a jump to `#konvention-v0.1`), `#vorlagen-maschinenzugriff` (the Frontmatter-Inspector host from `renderInspector` plus the machine-address note), and `#vorlagen-technology-baseline` (the baseline abstract linking `_content/technology-baseline.md`). The sub-anchors are in-page fragments without subpath routing; `handleSpecialAnchor` scrolls a `vorlagen`-prefixed hash directly. Clicking a table row calls `openTemplatePanel`, which fetches `_content/promptotyping-document/{slug}.md`, renders it into the side panel, appends a footer with a copyable `template:` block and a machine-URL link, and caches the result.

**Skills and Praxis** (`pages-content.js`)**.** `renderSkills` builds an intro plus `#skills-coding` and `#skills-writing` blocks from `_content/skills/`, adding copy buttons to code blocks. `renderPraxis` renders `_content/praxis.md` and gives each heading a stable `#praxis-{slug}` anchor matching the `/praxis/{slug}` route.

**Template URL resolution** (`registry.js`)**.** `resolveTemplateUrl` maps both subpath and hash template URLs onto the canonical hash anchor and is the shared implementation used by `404.html` and the inspector.

## Modules

**`frontmatter-inspector.js`** (A11, ADR-7). A paste-live-render control in the Maschinenzugriff block. It reads helpers from `window.PromptotypingApp`, seeds the textarea with an example frontmatter, and on input (debounced 300ms) or on the resolve button extracts the whole YAML block, parses it with `window.jsyaml.load`, reads `template.url` or `template.alias`, validates the URL against the site anchor scheme, and opens the referenced template in the side panel. `resolveWithFallback` maps a not-yet-minted snapshot anchor back to the latest anchor with a warning. The module boots on the `promptotyping:sections-ready` event, since its host markup is injected asynchronously.

**`case-study-filter.js`** (ADR-8). Renders the case-study cards from `data/case-studies.json` grouped by use case, with a filter bar (primary chips over the use-case typology, secondary interface-type select and demo-available checkbox). Each card carries a `#case-{id}` anchor; a "Mehr" button opens the deep page from `_content/case-studies/{id}.md` in the side panel, and a card-level video button loads a YouTube click-to-load facade in place via the shared `buildVideoFacade` helper. The module reads its host element `data-component="case-study-filter"` and boots on `promptotyping:sections-ready`. There is no internal genre vocabulary.

**`term-index.js`** (A25). Builds the term index above the glossary entries. It mounts its host on `promptotyping:sections-ready` and fills it on `promptotyping:content-ready`, taking the terms from `data/glossar.json` and testing each one against a lowercased text extract per page container, with a word-boundary check. It fetches nothing beyond the glossary file. The scan works only because the inactive pages stay in the DOM as `display: none`; lazy-mounting them would break the index in the same move in which it would break anchor resolution. `app.js` injects the script at runtime rather than the shell declaring it.

## Data flow

`_content/` holds the Markdown, mirrored from the vault and the paper source; `data/` holds the JSON that JavaScript consumes directly.

```
knowledge/paper.md                                      ← the paper, rendered from its canonical source
_content/promptotyping-document/{slug}.md               ← template mirrors, one file per slug
_content/case-studies/{id}.md                           ← case-study deep pages
_content/skills/{index,coding,writing}.md               ← skills content
_content/{ueberblick,konvention,praxis,arbeitsumgebung,technology-baseline}.md
_content/glossar.md                                     ← glossar prose, generated from data/glossar.json
_content/MANIFEST.md                                    ← mirror provenance
data/vault.json                                         ← claim layer, generated from vault/

data/glossar.json                 ← glossar entries (structured)
data/promptotyping-documents.json ← template catalogue (structured)
data/case-studies.json            ← case-study cards, grouped by use case
```

Markdown files are mirrored; the JSON files are generated from the Markdown frontmatters and the convention. `_content/MANIFEST.md` records the mirror provenance.

## Local development and deployment

Serve the repository root over HTTP for local work, for example `python -m http.server 8000`, and open `http://localhost:8000`. Deployment is a push to `main`; GitHub Pages publishes the root with no build step and no Jekyll processing. The custom domain `dhcraft.org/Promptotyping/` is configured via DNS and CNAME.

## Security and privacy

- No backend, no server-side logic, no database, no tracking.
- YouTube embeds use the `youtube-nocookie.com` variant behind a click-to-load facade, so no connection to YouTube is made before the click.
- External live-demo iframes carry a `sandbox` attribute where possible.

## The `vault/` folder

`vault/` is an instance of the Grounded-Vault template (`DigitalHumanitiesCraft/grounded-vault`), the provenance layer that anchors the load-bearing claims of the paper in verifiable sources (operator decision 2026-07-19). It carries its own action layer `vault/CLAUDE.md` and its own knowledge base under `vault/knowledge/`; work inside the vault follows those rules. The Python tool `vault/tools/validate.py` checks the vault's grounding integrity and is the sole permitted exception to the no-build rule of this repository, since it validates the vault rather than building anything for the site.
