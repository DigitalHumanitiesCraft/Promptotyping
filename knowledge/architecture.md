---
title: Architecture
project:
  name: Promptotyping Site
  repository: https://github.com/DigitalHumanitiesCraft/Promptotyping
status: complete
language: en
version: 0.5
created: 2026-05-09
updated: 2026-07-24
authors: [Christopher Pollin]
generated-with: Claude Code with Claude Opus 4.8
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
- **Scripts**: `assets/js/app.js` (an IIFE that exposes shared helpers on `window.PromptotypingApp`) plus two plain-script modules under `assets/js/modules/`. No ES-module `import`.

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
│   ├── paper/                      # section files of the deployed (pre-revision) cut
│   ├── promptotyping-document/     # one template mirror per slug
│   ├── case-studies/               # case-study deep pages
│   ├── skills/                     # index, coding, writing
│   ├── ueberblick.md, konvention.md, praxis.md
│   ├── arbeitsumgebung.md, technology-baseline.md
│   ├── glossar.md, literatur.md
│   └── MANIFEST.md                 # mirror provenance
├── assets/
│   ├── css/style.css
│   ├── js/app.js
│   ├── js/modules/frontmatter-inspector.js
│   ├── js/modules/case-study-filter.js
│   ├── vendor/marked.min.js, vendor/js-yaml.min.js
│   ├── img/dhcraft-logo-watercolor.png
│   └── promptotyping-logo.png
├── data/                           # glossar.json, promptotyping-documents.json, case-studies.json
└── vault/                          # Grounded-Vault instance (see below)
```

## URL structure and routing

### Hash anchors (canonical for humans)
Routing uses browser-native `location.hash`. On load and on `hashchange`, `app.js` inspects the hash. Anchors of type `promptotyping-document-*`, `glossar-*`, and `konzept-*` open or scroll within already-rendered sections. Static section anchors (`ueberblick`, `use-cases`, `praxis`, `skills`, `arbeitsumgebung`, `konvention`, `vorlagen`) scroll directly. A paper-section anchor (`abschnitt-{n}-{slug}`) triggers a load of that section and everything above it, so the scroll position stays stable, then scrolls to the target. The full anchor scheme is in [specification.md](specification.md), A4, and in `CLAUDE.md`.

### Subpath aliases via `404.html`
GitHub Pages returns its 404 document for any path that is not a real file. `404.html` is a copy of `index.html` with a routing prelude in the `<head>`. The prelude strips the `/Promptotyping/` prefix, splits the remaining path into segments, maps the first segment to a canonical anchor (`promptotyping-document/`, `konzepte/`, `case-studies/`, `konvention/`, `paper/`, `praxis/`, `skills/`, plus the bare pages `ueberblick`, `use-cases`, `arbeitsumgebung`, `glossar`, `literatur`), and rewrites the URL to `/Promptotyping/#{anchor}` with `history.replaceState`. A snapshot suffix such as `#v0.1` on a `promptotyping-document` path is preserved and folded into the anchor. When no segment matches, the prelude sets `window.__promptotyping404` and the body script reveals the error message. The same mapping is factored into `resolveTemplateUrl` in `app.js` so the inspector and the router share one implementation.

### HTTP 404 by design and the machine address (ADR-10)
A subpath request is served by `404.html`, so it carries HTTP status 404 even though the page renders correctly. The subpath and hash forms in a document's `template:` field are the human-readable addresses, and their resolution needs JavaScript. For machine access without a browser, the canonical address of any content is the static Markdown URL under `_content/`, pattern `https://dhcraft.org/Promptotyping/_content/promptotyping-document/{slug}.md`. That URL returns the raw Markdown with HTTP 200 and no JavaScript. The site footer states this machine address explicitly.

## `app.js` module inventory

`app.js` is one IIFE. `init()` runs on `DOMContentLoaded` in this order:

1. `configureMarked()` registers the marked configuration and the phase-tag extension.
2. `setupSidePanel()`, `setupTocToggle()`, and `setupGlossarInteraction()` wire the reusable slide-in panel, the mobile table-of-contents toggle, and the glossar hover/click delegation.
3. A `Promise.all` renders the static sections in parallel: `renderGlossar` (must finish before paper sections so their glossar triggers can be marked), `renderMarkdownInto("ueberblick", …)`, `renderVorlagen`, the `konvention` render, `renderPraxis`, `renderSkills`, and the `arbeitsumgebung` render. `renderUseCasesHost` injects the host markup for the case-study module.
4. When rendering settles, `app.js` dispatches `promptotyping:sections-ready` (the two modules boot on it), then runs `setupLazyLoading`, `setupScrollSpy`, and `handleInitialHash`.

**marked configuration and the phase-tag stripper.** `configureMarked` calls `marked.use` with `gfm: true`, `breaks: false`, and one block-level extension named `classedParagraph`. marked.js does not parse the Pandoc-style class syntax `{:.class}` out of the box. The paper Markdown still carries `{:.phase-*}` tags as a methodological annotation, and the provenance lane that once rendered them was removed on 2026-06-10 by operator decision. The extension recognises a `{:.class}` tag at the start of a paragraph and strips only the four legacy classes `phase-preparation`, `phase-exploration`, `phase-distillation`, and `phase-implementation`, rendering the paragraph as a plain `<p>` with no class. Any other class tag falls through to the standard paragraph tokenizer. Do not add new `{:.phase-*}` tags; the lane is not to be revived (see `CLAUDE.md`).

**Paper sections and lazy loading.** `SECTIONS` lists the seven paper files (`_content/paper/01-introduction.md` through `07-conclusion.md`) plus `_content/literatur.md`, keyed to the `abschnitt-*` element ids. This file set is the decomposition of the pre-revision paper and stays deployed until the operator releases the revised text; the canonical text is `knowledge/paper.md`, and re-decomposition re-cuts the files, the ids, and this list with it (A1 in [specification.md](specification.md)). `loadAndRenderSection` fetches a file, strips its YAML frontmatter, renders it, and de-duplicates via a `loadedSections` guard. The first section loads immediately; the rest are `paper-section-placeholder` shells observed by an IntersectionObserver with a 200px root margin. Section 4 additionally receives the part-2 YouTube facade before the "VetMedAI Wissensbilanz" mention and a compact use-case reference block linking into the gallery. Every rendered section except `literatur` is post-processed by `decorateGlossarTriggers` and `decorateCitations`.

**Glossar.** `renderGlossar` loads `data/glossar.json`, sorts entries, renders the glossar section, and emits empty `konzept-*` alias anchors (via `KONZEPT_ALIASES`) so `#konzept-{name}` routing resolves into the matching entry. `decorateGlossarTriggers` walks the text nodes of a rendered section and wraps the first occurrence of each term (longest term first, word-boundary check, skipping links, code, and headings) in a keyboard-accessible `.glossar-trigger`. `setupGlossarInteraction` shows a tooltip on hover after a delay and opens the side panel on click or Enter/Space.

**Citations.** `decorateCitations` walks text nodes and turns parenthetical "Author Year" references into jump links to `#literatur`, matching an author with optional "et al." or a joined co-author and a four-digit year with an optional disambiguation letter.

**Side panel.** `openSidePanel`/`closeSidePanel` fill and reveal the single reusable `#side-panel`, manage the backdrop, trap and restore focus, and close on Escape or backdrop click.

**Vorlagen hub.** `renderVorlagen` loads `data/promptotyping-documents.json` (top-level `documents`, each with `slug`, `title`, `funktion`, `datei`, `typ`, `version`, `status`, `machineUrl`), builds the `#vorlagen` section as a hub with a quiet sub-navigation and four blocks: `#vorlagen-katalog` (the clickable template table wired by `wireVorlagenRows`), `#vorlagen-konvention` (a short abstract with a jump to `#konvention-v0.1`), `#vorlagen-maschinenzugriff` (the Frontmatter-Inspector host from `renderInspector` plus the machine-address note), and `#vorlagen-technology-baseline` (the baseline abstract linking `_content/technology-baseline.md`). The sub-anchors are in-page fragments without subpath routing; `handleInitialHash` scrolls a `vorlagen`-prefixed hash directly. Clicking a table row calls `openTemplatePanel`, which fetches `_content/promptotyping-document/{slug}.md`, renders it into the side panel, appends a footer with a copyable `template:` block and a machine-URL link, and caches the result.

**Skills and Praxis.** `renderSkills` builds an intro plus `#skills-coding` and `#skills-writing` blocks from `_content/skills/`, adding copy buttons to code blocks. `renderPraxis` renders `_content/praxis.md` and gives each heading a stable `#praxis-{slug}` anchor matching the `/praxis/{slug}` route.

**Template URL resolution.** `resolveTemplateUrl` maps both subpath and hash template URLs onto the canonical hash anchor and is the shared implementation used by `404.html` and the inspector.

## Modules

**`frontmatter-inspector.js`** (A11, ADR-7). A paste-live-render control in the Maschinenzugriff block. It reads helpers from `window.PromptotypingApp`, seeds the textarea with an example frontmatter, and on input (debounced 300ms) or on the resolve button extracts the whole YAML block, parses it with `window.jsyaml.load`, reads `template.url` or `template.alias`, validates the URL against the site anchor scheme, and opens the referenced template in the side panel. `resolveWithFallback` maps a not-yet-minted snapshot anchor back to the latest anchor with a warning. The module boots on the `promptotyping:sections-ready` event, since its host markup is injected asynchronously.

**`case-study-filter.js`** (ADR-8). Renders the case-study cards from `data/case-studies.json` grouped by use case, with a filter bar (primary chips over the use-case typology, secondary interface-type select and demo-available checkbox). Each card carries a `#case-{id}` anchor; a "Mehr" button opens the deep page from `_content/case-studies/{id}.md` in the side panel, and a card-level video button loads a YouTube click-to-load facade in place via the shared `buildVideoFacade` helper. The module reads its host element `data-component="case-study-filter"` and boots on `promptotyping:sections-ready`. There is no internal genre vocabulary.

## Data flow

`_content/` holds the Markdown, mirrored from the vault and the paper source; `data/` holds the JSON that JavaScript consumes directly.

```
_content/paper/01-introduction.md … 07-conclusion.md   ← paper sections
_content/literatur.md                                   ← references (own anchor)
_content/promptotyping-document/{slug}.md               ← template mirrors, one file per slug
_content/case-studies/{id}.md                           ← case-study deep pages
_content/skills/{index,coding,writing}.md               ← skills content
_content/{ueberblick,konvention,praxis,arbeitsumgebung,technology-baseline}.md
_content/glossar.md                                     ← glossar prose
_content/MANIFEST.md                                    ← mirror provenance

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
