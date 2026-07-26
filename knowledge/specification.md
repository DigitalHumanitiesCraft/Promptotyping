---
title: Specification
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
  name: Vorlage Specification
  version: 0.3
  url: https://dhcraft.org/Promptotyping/promptotyping-document/specification
  alias: https://dhcraft.org/Promptotyping/#promptotyping-document-specification
topics: ["[[Requirements Engineering]]", "[[Decision Records]]"]
knowledge-sources:
  standards:
    Schema.org ScholarlyArticle: https://schema.org/ScholarlyArticle
    YAML Frontmatter: https://yaml.org/spec/1.2.2/
related: [INDEX, project, architecture, design, journal]
---

# Specification

What the site must do. The site is a specification documentation showing one page at a time, with the navigation tree as its table of contents; the Pollin 2026 paper is one of those pages, rendered from the canonical text, and the glossary tooltip, the embedded templates, the case-study cards and the side panel serve it. This document states the requirements and the design decisions. How the site is built is in [architecture.md](architecture.md); how it looks and behaves is in [design.md](design.md).

## Requirements

### A1 — Paper as reading flow
The canonical paper text is [paper.md](paper.md) in this knowledge base. The site renders that file directly as a continuous reading flow, grouped into one section per H2 at render time, so the deployed text is the canonical text by construction. It renders in a central reading column, with the sticky left sidebar carrying the site's page tree and the paper's own two-level table of contents standing in the page directly under the H1 (A23). Acceptance criterion. A visitor to https://dhcraft.org/Promptotyping/paper can read the paper from abstract to conclusion in one scroll.

The mirrored decomposition under `_content/paper/` is gone since 2026-07-25 (AP1 in [plan-site.md](plan-site.md)), and with it the largest class of drift this site had. There is one paper text, it lives in this knowledge base, and the site fetches it. Nothing is re-cut on release of a revision, because there is nothing to re-cut.

### A2 — Phases provenance lane (removed)
A left lane that marked each paragraph by its Promptotyping phase was removed after the first deploy (operator decision 2026-06-10). Legend, mobile phase bar, hover tooltip, and filter mode are gone from HTML, CSS, and JavaScript; the `{:.phase-*}` tags in the paper markdown are stripped by the marked extension and render nothing. The rationale survives as a decision record in ADR-4.

### A3 — Addressable templates
The mirrored templates are addressable under latest anchors (`#promptotyping-document-data`, `#promptotyping-document-journal`, …). Opening such an anchor jumps to the template and opens the side panel with its full specification. Version snapshots receive an additional sub-anchor on the same template section (A4, ADR-2).

### A4 — Two canonical URL forms, subpath and hash
Every addressable item exists under two equal canonical URL forms, a subpath for machines and structured human legibility, and a hash anchor for in-page navigation and fallback. Neither is an alias of the other; both are permanently stable. The subpath form resolves to the hash via `404.html` (see [architecture.md](architecture.md)). The convention for all anchor families:

| Anchor family | Hash anchor | Subpath URL |
|---|---|---|
| Promptotyping-Document latest | `#promptotyping-document-{slug}` | `/promptotyping-document/{slug}` |
| Promptotyping-Document snapshot | `#promptotyping-document-{slug}-v{version}` | `/promptotyping-document/{slug}#v{version}` |
| Concept | `#konzept-{name}` | `/konzepte/{name}` |
| Case study | `#case-{name}` | `/case-studies/{name}` |
| Convention | `#konvention-{version}` | `/konvention/{version}` |
| Glossary | `#glossar` | `/glossar` |
| Literature | `#literatur` | `/literatur` |
| Paper section | `#abschnitt-{n}-{slug}` | `/paper/{n}-{slug}` |
| Overview | `#ueberblick` | `/ueberblick` |
| Use cases | `#use-cases` | `/use-cases` |
| Practice entry | `#praxis-{slug}` | `/praxis/{slug}` |
| Skill | `#skills-{slug}` | `/skills/{slug}` |

The slug set for Promptotyping-Documents is `index`, `project`, `data`, `specification`, `user-stories`, `action-layer` (ADR-9), `architecture`, `domain-knowledge` (English slug, ADR-3), `design`, `testing`, `verification`, `journal`, `plan`, `report`, `integration`. The canonical source of each version is the `version` field of the mirror and `data/promptotyping-documents.json`. The latest anchor is the primary and only address point; a snapshot sub-anchor is issued only when a template's version changes, as an additional hash fragment on the same section, without its own subpath. Paper subsection anchors (for example `#phase-distillation` within section 3.3) are available inside their section without a subpath. Acceptance criterion. `/promptotyping-document/data` and `#promptotyping-document-data` both lead to the same rendered template.

### A5 — `template:` frontmatter field as machine address
Promptotyping repos carry a `template:` block in their `knowledge/` documents with `name`, `version`, `url` (subpath form, canonical), and optional `alias` (hash form, equal). The `url` points to the latest address of the template. A coding agent that reads a `template:` URI can call it and receives the authoritative template specification.

```yaml
template:
  name: Vorlage Datengrundlage
  version: 0.1
  url: https://dhcraft.org/Promptotyping/promptotyping-document/data
  alias: https://dhcraft.org/Promptotyping/#promptotyping-document-data
```

### A6 — Glossary as a tooltip over the reading flow
Every constitutive term in the paper reading flow is a glossary trigger with a dotted underline. Hover after a delay of 400ms, a click, or Enter shows a tooltip carrying the term, its short definition, and a link to the full entry under `#glossar-{slug}`; Escape, a click elsewhere, or leaving the trigger closes it. The click used to open the right side panel with the full definition, and that path was dropped on 2026-07-26 by operator decision. The reason is that the panel took over the whole right edge for three lines of text and covered the passage the reader had just come from, while the full entry is one link away on a page that carries every term anyway. The tooltip stays open while the pointer is inside it, since the link would otherwise be unreachable. Touch devices have no hover, so the click is the only way in and the toggle behaviour is what makes it usable. The glossary is also reachable as its own anchor `#glossar`.

### A7 — Use-case gallery
A dedicated `#use-cases` section holds a curated gallery of publicly documented projects (operator decision 2026-06-10), classified and filtered by a use-case typology, secondarily by interface type and demo availability. The internal genre vocabulary does not appear in the public UI. Selected cases carry a deep-dive page in the side panel (HerData, Klawiter-Rescue, zbz-ocr-tei, M3GIM, Notker-Edition, CorrespExplorer, coOCR-HTR). Three grounds exclude a case, missing client clearance, a mediation format in place of a research artefact, and the deliberate absence of the case from the paper, under which the Lucina Digital Edition was removed on 2026-07-26. The full evidence corpus stays documented in the paper, whose evidence section carries the project inventory. Data source `data/case-studies.json`, exclusions in `_content/MANIFEST.md`.

The use-case vocabulary of the gallery (data production, data exploration, data rescue and transformation, and so on) is the site's own ordering and was once attributed to a paper section. The paper orders artefacts by the five epistemic functions instead, Verification, Exploration, Edition, Capture, and Audit, and carries no use-case typology; the interface-type filter is the one that maps onto it. Re-basing the gallery classification on the five functions, or declaring the use-case vocabulary as the site's own, is open work for the next site update.

### A8 — Embedded YouTube videos
Part 1 on the Beispiel-Workflow page, where the worked case runs, part 2 at the VetMedAI knowledge-balance case, which sits in the projects section of the deployed decomposition and in the evidence section of the canonical text. Both run from the `youtube-nocookie.com` variant with no tracking before the click.

### A9 — DHCraft design system
Black on white, Inter for text, Consolas for code, no decorative elements. Unchromatic throughout, with two bounded exceptions decided on 2026-07-26: five muted hues that encode the epistemic function of an artefact, and one prismatic signature band that encodes nothing. A dark theme applies the system preference and can be overridden by a toggle. Side panels collapse to bottom sheets on mobile. Full token set, the grounds for the colour rules, and behaviour in [design.md](design.md).

### A10 — Vanilla tech stack
No framework, no build step. HTML5/CSS3/JS, marked.js v9.1.6 and js-yaml v4.1.0 vendored, GitHub-Pages-native hosting. Acceptance criterion. `git clone` and opening the site over a static server renders it locally. Details in [architecture.md](architecture.md).

### A11 — Frontmatter-Inspector as interactive self-demonstration
A module in the Vorlagen section with a textarea for the YAML frontmatter of a foreign `knowledge/` document. The inspector parses the block, extracts `template.url` (or `template.alias`), validates it against the site anchor schema, and opens the side panel with the rendered template. A default frontmatter with a latest URL is prefilled. On an invalid URL it shows the expected schema; when a snapshot anchor points to a missing version it falls back to the latest anchor with a warning. Implementation in [architecture.md](architecture.md).

### A12 — Cross-repo consistency, the site demonstrates rather than advertises
The site's own `knowledge/` documents carry the `template:` field and each links to its own template URL on the live site, subpath form canonical, hash form as alias. The site demonstrates the method on itself.

### A13 — Specification front page
The start page is the specification front, addressed `#ueberblick`. It states what Promptotyping is, carries a keyed status table (Fassung, Stand, kanonische Adresse, Maschinenadresse, Evidenz, Lizenz), a generated index of the specification, a short statement of what the method is, and signposts into paper, templates, use cases, practice, and skills. Three passages moved away on 2026-07-26, since carrying them twice made the landing page repeat the page behind it. The four phases went to part 1, the scaling statement to part 1 under "Zwei Modi", and the document-type classification and the artefact default fell without replacement in favour of parts 3 and 4, with a pointer to part 3 left in "Wo ansetzen". Substrate `_content/ueberblick.md`. Without it a visitor lands directly in an English academic paper.

### A14 — Practice section (method extensions)
A `#praxis` section with the empirically grown method extensions from the vault knowledge base (verification milestones, Promptotyping interfaces, subagents and role simulation, script-versus-LLM separation, knowledge curation, demo-repo reduction, claims verification, epistemic status of user stories, template catalog). Each entry has a stable anchor `#praxis-{slug}` and names its documented origin case. Substrate `_content/praxis.md`.

### A15 — Skills and system prompts
A `#skills` section with the reusable system prompts (coding, writing) as unchanged, copyable originals, plus the action-layer practice (CLAUDE.md, custom commands, system prompts). Anchors `#skills-coding`, `#skills-writing`. Substrate `_content/skills/`. Links to the action-layer template (A16).

### A16 — Ninth template, Action-Layer
The Action-Layer template (`CLAUDE.md`) is published under the slug `action-layer` (namespace decision ADR-9). It is released and carries mirror status `complete`, with no draft banner.

### A17 — Working-environment section
A `#arbeitsumgebung` section between skills and glossary with three short parts, the Obsidian vault as knowledge environment, the Promptotyping Agent Interface (experimental, in development), and the AI harness and skills (Claude Code as harness, links to `#skills` and the process videos). Substrate `_content/arbeitsumgebung.md`, routing `/arbeitsumgebung` via `404.html`.

### A18 — Site header, footer, video integration
A thin fixed header carrying the wordmark plus the kind marker `Spezifikation` left, and the theme toggle plus the Repository link right; the Paper link was dropped on 2026-07-26 because the tree carries it. No mark sits beside the wordmark. Both the DHCraft watercolour and `promptotyping-logo.png` were tried there and dropped, because a chromatic detail image at 22 pixels reads as a smudge and would be the only hue on the page that means nothing. The signature band runs along the foot of the header. The footer is a four-column grid on `--code-bg`, carrying carrier and licence, addresses, the state of the specification, and the machine-access note; the carrier mark stays there. `promptotyping-logo.png` sits at the head of the Vorlagen page. All process videos play without leaving the page, as click-to-load facades over `youtube-nocookie.com`.

### A21 — Page status line
Every page except the start page carries a head block under its title. Its first line is the one-line note from the page registry, which says what the page is about; a reader asking whether they are in the right place is on the page, not in the index that led there (added 2026-07-26). Under it stands the status line, stating whether it binds (`normative, part of the specification` or `informative`), its version, its date, and the machine address of its substrate. The keys read Standing, Version, Updated and Source. Standing comes from the page registry in `app.js`, the remaining fields from the frontmatter of the substrate file or, for the generated pages, from the registry. Added 2026-07-26.

### A22 — Colour that carries meaning, and the dark theme
Colour encodes exactly one thing, the epistemic function of an artefact, that is the five interface categories of A-level section 4.2 of the paper. The hue appears on the function list of the Artefakt page and on the left edge of a use-case card, and the category always stands there as a word as well. One prismatic signature band sits at the foot of the header, once per page, and encodes nothing. The dark theme is a token swap that follows the system preference, is overridden by a toggle, and is applied before first paint from `localStorage`. Grounds and token values in [design.md](design.md). Added 2026-07-26.

### A23 — Table of contents on the paper page
The paper page carries a static two-level table of contents under its title and status line, built from the same headings that produce the `#abschnitt-*` anchors, sections at the first level and subsections at the second. It does not scroll along; the on-this-page rail was removed on 2026-07-25 and stays removed. The paper is the longest page on the site and was the only one without an entry into its own structure. Acceptance criterion. Every entry points at an anchor that resolves, and the entry set matches the heading set of the rendered text. Added 2026-07-26.

### A24 — Focus on page change
A page change moves the focus into the content. The host of the target page carries `tabindex="-1"`, receives the focus programmatically, and shows no focus ring while doing so, because it is never reachable by Tab. Resolving the initial hash on load leaves the focus alone, so nothing is stolen from the header. The focus call must not overwrite the scroll position of a deep link. Without this a keyboard user lands back at the top of the sidebar after every navigation click. Added 2026-07-26.

### A25 — Term index in place of a full-text search
The glossary page carries, above its entries, an index that connects every glossary term with the pages on which it occurs, with a filter field over the terms. It is built at runtime from `data/glossar.json` against the page containers mounted in the DOM and fetches no further source. A full-text search was weighed and declined on 2026-07-26; the three audiences of [project.md](project.md) arrive with an address, resolve a `template:` URI, or read a flow, and none of them searches. What the site lacked instead was the path from a term to the place that uses it. A term that the index reports nowhere outside the glossary is a finding about the site, and the index shows it as such. Added 2026-07-26.

### A27 — The tree has two blocks
The sidebar carries the specification proper under its heading, since the part numbers only mean something under one, and every other page below it as a flat list without group labels (operator decision 2026-07-26). Five group labels over fourteen pages read as more structure than the site has, and two of them, Evidence and Tools and practice, are abstractions a first-time reader cannot yet place. The generated index on the start page carries the five numbered parts alone, under the heading "The specification in five parts", since the tree already lists every page and what it cannot say is that the specification is an ordered set of five.

### A28 — The site checks its own claims
`tools/check_consistency.py` decides by rule what the site states about itself in more than one place, that the catalogue and the convention agree on every document type, that catalogue and template folder cover each other with held-back slugs named, that the slug list in `CLAUDE.md` is complete, and that the gallery holds its own conditions, meaning depth pages and cards cover each other and both closed vocabularies are respected. With `--check-urls` it also resolves every address a card publishes; that pass is opt-in because the script runs before every commit and fifty network round trips would make that unusable. It exits non-zero on any failure. [verification.md](verification.md) records what is checked against what, with the verdict, and what stays with the Critical Expert because agreement in substance is not decidable by rule. Before 2026-07-26 the site specified the verification function in part 5 and ran no check of its own statements, while the vault under it had one from the start. Added 2026-07-26.

### A29 — Light is the first view
The site opens in the light theme regardless of the system preference (operator decision 2026-07-26). The theme prelude in the head always writes a `data-theme` attribute, taking the stored choice where one exists and `light` otherwise, so the attribute is set before first paint and a reader who chose dark never sees a white flash. The system preference still reaches the stylesheet through its `prefers-color-scheme` block, and the always-set attribute means that block no longer decides the first view. The theme control remains the way to dark, and the choice persists in `localStorage` under `promptotyping-theme`. Added 2026-07-26.

### A30 — A citation lands on its reference entry
Every entry of the paper's reference list carries an id built from the first author's surname and the year, pattern `ref-{surname}-{year}`, and a parenthetical citation in the text links to that id rather than to the head of the list. Where an entry ends in a URL, marked autolinks it and the site marks the link so the stylesheet can set an outward link apart from an internal jump. Two defects surfaced while building this and are part of the record. A mangled word-boundary escape in the citation pattern had left 23 of 78 entries without an anchor, and month-year parentheses such as "(January 2026)" had been decorated as citations from the start, which a month guard now excludes. A citation whose key is not in the map keeps pointing at the list, so an unmatched reference degrades to the previous behaviour instead of breaking. Added 2026-07-26.

### A26 — The site is English
Every string the site shows is English, in the British spelling the paper uses (operator decision 2026-07-25, carried out 2026-07-26). That covers the page registry labels, the status line, every control, the nine content pages directly under `_content/`, and the text fields of `data/glossar.json`, `data/case-studies.json` and `data/promptotyping-documents.json`.

Three sets under `_content/` are still German, and each for its own reason. Fifteen of the sixteen templates are vault mirrors whose translation belongs in a vault session together with their originals, so translating the repo copy alone would be the silent divergence `CLAUDE.md` forbids; the sixteenth, `technology`, has been repo-canonical since 2026-07-26 and stays German so that the catalogue reads in one language. The three files under `skills/` are reusable German system prompts, that is teaching material, which the language decision of 2026-07-25 exempts. The seven case-study depth pages have no such reason and are simply outstanding; they are the remainder of the pass. The source for the terminology of the distilled pages is [paper.md](paper.md), which they are distilled from; the German distillate is superseded and is not maintained as a back-translation source.

Three classes stay German because they are identifiers rather than text. The published anchors, since foreign repositories carry them as `template:` URIs. The template names, since they stand in foreign frontmatter blocks. And the German file names the convention cites as examples of real repositories. Thirteen glossary entries and all templates therefore appear under a German address with an English label, which is the separation of identifier from text that A1 weighed and recommended.

Two acceptance conditions follow. The five bold category names on the Artefakt page (`Verification`, `Exploration`, `Edition`, `Capture`, `Audit`, each followed by a full stop) are keys against `FUNCTION_SLUGS` in `pages-content.js`; translating them would switch off the colour encoding of the nominal scale without any visible error. And the `#praxis-*` anchors derive from the headings at render time, so translating a heading moves its address; six slugs moved on 2026-07-26 and are kept alive by `PRAXIS_ALIASES` in the same file. Any further translation of an anchor-bearing heading needs the same alias.

### A19 — Vorlagen hub
The `#vorlagen` section is the coherent hub of the method specification (operator decision 2026-07-23). After the section head come four blocks with additive in-page sub-anchor IDs. A quiet text subnav over these four was built and removed on 2026-07-26, because it repeated the four headings standing directly below it; the sub-anchors hang on the blocks and resolve without it. The Promptotyping mark at the head of the page went in the same move, being a decorative element and a hue that means nothing, which is the reason it had already left the header.

- `#vorlagen-katalog` — the clickable template table.
- `#vorlagen-konvention` — a short abstract of the convention with a jump link to `#konvention-v0.1`; the convention itself is neither duplicated nor moved.
- `#vorlagen-maschinenzugriff` — the Frontmatter-Inspector and the machine-address paragraph under one heading.
- `#vorlagen-technology-baseline` — what a Technology Baseline is, that this repo carries one for the static-web-tool artefact family (status draft), with a link to the machine address `https://dhcraft.org/Promptotyping/_content/technology-baseline.md` and a repo-relative link.

The sub-anchors are additive in-page fragments, no new top-level anchor, no new subpath, no change to `404.html`. The Technology template (slug `technology`) is not in `data/promptotyping-documents.json` and receives no catalog anchor; its vault-first release is pending. Acceptance criterion. Opening `#vorlagen` reaches all four blocks through the subnav, each block carries its sub-anchor as a directly addressable fragment.

## Function per site section

The paper-section numbers below refer to the deployed decomposition (A1). They are re-drawn against the canonical text when it is decomposed.

### Method (paper sections 1–3)
The paper narrative as reading flow on its own page. Terms as glossary triggers. The template table lives on the Vorlagen page with click links to side-panel specs.

### Vorlagen (`#vorlagen`)
Table of all mirrored templates with function, recommended file name, Promptotyping type, version, and status (function column English, template names German as identifiers). A click opens the side panel with the full spec including frontmatter schema, section structure, a copy button for the `template:` block, and a raw-text link (machine address, ADR-10). One latest anchor per template, snapshot anchors on version changes. Built out as the specification hub per A19.

### Use cases (`#use-cases`)
Curated cards grouped and filtered by the use-case typology (A7, ADR-8 addendum). Each card names the project, use case, one sentence, and demo/repo/video links where cleared. Selected cards carry a deep-dive page in the side panel. Part-2 video embedded in paper section 4.

### Concepts (embedded in the paper flow, plus anchors)
Concepts named in the paper flow are linked to their glossary anchors, with full definitions in the glossary side panel. Asymmetric Amplification, Critical-Expert-in-the-Loop, Scholar-Centered Design, and Context Engineering are carried by the canonical text. Epistemic Infrastructure is not; the concept was removed from the paper on 2026-07-23 and survives as a glossary entry and as a vault concept, which the deployed decomposition does not yet reflect.

### Glossary (`#glossar`)
A dedicated section at the page end, alphabetically ordered. Per entry, term, short and full definition, source (with vault link), and paper references. Same data source as the hover tooltips. The term index of A25 precedes the entries and is built from the same data.

### Literature (`#literatur`)
An ordered list at the page end. Inline references in the paper are anchor jump targets. Per entry, author, year, title, DOI/URL, anchor ID.

## Decisions (ADR)

### ADR-1 — Single page with anchor IDs
**Context.** The site should work as an interactive paper; multi-page would cut the reading flow. **Choice.** Single page with stable anchor IDs. **Rationale.** Continuous reading flow, all methodical parts integrated inline, direct linking through permanent anchors. **Effect.** Site size grows, but lazy loading of side-panel content keeps the initial load small. SEO via OpenGraph tags and section-wise crawling.

### ADR-2 — Latest anchor primary, snapshot sub-anchor on version change
**Context.** Templates may be refactored later (for example `data` v0.1 → v0.2). Repos linking by `template:` URI need stability without a permanent URL per version. **Choice.** One latest anchor per template (`#promptotyping-document-data`, subpath `/promptotyping-document/data`). A later version change adds a snapshot sub-anchor on the same section (`#promptotyping-document-data-v0.1`, subpath `/promptotyping-document/data#v0.1`); the latest anchor always points to the current version. **Rationale.** Repos overwhelmingly link "the current template", so a latest URL without a version suffix is the natural address point; on a version change they follow automatically. Whoever cites a specific version appends a sub-anchor. **Effect.** A compact URL collection, one stable latest URL per slug. The earlier form `#vorlage-{name}-{version}` with its own subpath hierarchy is discarded (see [journal.md](journal.md), 2026-05-09).

### ADR-3 — Both URL forms canonical, English slug, latest without version suffix
**Context.** Coding agents parse URLs structurally. `#promptotyping-document-data` reads as an anchor, `/promptotyping-document/data` as a path; both must work and neither may rank below the other. Two decisions ride along, an English path slug (because "Promptotyping Document" is the concept term from Pollin 2026 section 3.3 and lives in the repos' `template:` URIs), and no version suffix in the latest URL (per ADR-2). **Choice.** Both forms canonical and equal. Subpath form primary in `template:` `url:`, hash form as `alias:`. The site renders the same content under both. Slug section `/promptotyping-document/{slug}` for all slugs. **Rationale.** Subpath is robust for agents that know structural paths, hash for in-browser navigation without a server roundtrip. An English slug keeps the addressing in one language with its concept source. **Effect.** A `404.html` with JavaScript path-to-anchor mapping rewrites subpath to hash. The site's own `knowledge/` documents carry both forms (A12). The earlier form `/vorlagen/{name}/{version}` is discarded (see [journal.md](journal.md), 2026-05-09).

### ADR-4 — Phases provenance lane as an aesthetic device (superseded by A2)
**Context.** The site should carry a methodical statement of the paper visually rather than through ornament. **Choice.** A narrow left column with monochrome per-paragraph markers by phase class. **Rationale.** Made the paper's phase distribution legible and served as navigation, consistent with the black-grey-white design system. **Effect.** The Critical Expert had to assign each paragraph a phase during mirroring. The lane was removed after the first deploy (A2); this ADR remains as decision provenance.

### ADR-5 — Vanilla, no build
**Context.** The prior repo state was already vanilla; tooling effort should stay minimal. **Choice.** HTML5/CSS3/JS without a build step, marked.js vendored. **Rationale.** GitHub-Pages-native hosting works without configuration, `git clone` suffices to run locally, no npm, no bundler, no TypeScript compile. **Effect.** No code splitting or tree shaking; re-evaluate if the JS grows past roughly 100KB.

### ADR-6 — Drop the Vault-Explorer module entirely
**Context.** The old Living Paper had three interactive modules, Context-Rot-Viz, Vault-Explorer, Sycophancy-Trap; the plan first kept the Vault-Explorer. **Choice.** Drop all three. **Rationale.** They are didactic gadgets rather than method necessities; two are animations that distract in a calm reading environment, and the Vault-Explorer would have needed a `mock_vault.json` substrate that does not pay off when the paper's own reading flow already shows the Promptotyping Documents. **Effect.** Simpler code, focused on reading plus three useful modules, Frontmatter-Inspector, Case-Study-Filter, and the term index added on 2026-07-26 (A25). The third one earns its place on the same criterion the other two do; it stands in for the full-text search the site declined and answers a question the reader actually has.

### ADR-7 — Frontmatter-Inspector as paste-live-render module
**Context.** The `template:` URI resolution is central but invisible to an outside reader; a plain URL input would only replicate the anchor click without showing the frontmatter indirection. **Choice.** A textarea for the whole YAML frontmatter block. The inspector parses, extracts `template.url` (or `alias`), validates against the anchor schema, and opens the side panel with the rendered template, prefilled with an example latest-form `template:` field. **Rationale.** Shows the whole mechanism in one step and makes machine readability concrete when a reader pastes a real foreign frontmatter. **Effect.** A standalone module `assets/js/modules/frontmatter-inspector.js`; js-yaml v4.1.0 vendored under `assets/vendor/js-yaml.min.js`. Details in [architecture.md](architecture.md).

### ADR-8 — Case-Study-Filter as module
**Context.** Many case studies are hard to navigate without a filter. **Choice.** A filter bar above the cards. **Rationale.** Practically needed at the gallery size. **Effect.** A standalone module `assets/js/modules/case-study-filter.js`, data source `data/case-studies.json`. **Addendum 2026-06-10 (operator decision).** The primary filter is the use-case typology, secondary filters are interface type and demo availability; A7 records that the paper no longer carries the use-case typology. The genre vocabulary is internal working vocabulary and does not appear in the public UI. The gallery is curated (A7).

### ADR-9 — Action-Layer template as ninth slug under `/promptotyping-document/`
**Context.** The Action-Layer template addresses the repo-root `CLAUDE.md` rather than a `knowledge/` document; whether it needs its own anchor family was open (journal 2026-06-09). **Choice.** A ninth slug `action-layer` in the existing `/promptotyping-document/` namespace. **Rationale.** Function before filename. The template describes the action-layer function of a Promptotyping knowledge base; where the file sits does not change its membership in the catalog, and a separate anchor family would fragment the address schema. **Effect.** `_content/promptotyping-document/action-layer.md`, anchor `#promptotyping-document-action-layer`.

### ADR-10 — Static markdown URL as machine address, `.nojekyll` as condition
**Context.** Plan review 2026-06-10 found two things. GitHub Pages does not publish underscore directories without `.nojekyll`, so `_content/` would have been unreachable. And the subpath URLs did not meet their "robust for agents" purpose, because GitHub Pages serves `404.html` with HTTP status 404 and the content appears only after JavaScript, so a browserless HTTP fetch gets an error page. **Choice.** `.nojekyll` in the repo root. The static markdown URL `https://dhcraft.org/Promptotyping/_content/promptotyping-document/{slug}.md` is the documented machine address (mirror field `machine-url`, note in `_content/konvention.md`, note in the Vorlagen section). Subpath and hash stay the human-readable addresses; the `template:` field is unchanged. **Effect.** Agents get the markdown with HTTP 200 and no JavaScript. The vault convention is to adopt the machine address at its next update (open, vault-side).

## Out of scope
- **English site version.** A separate project after the German version proves out.
- **CMS functionality.** The site is static, content changes through Git.
- **User accounts, comments, annotations.** Out of scope.
- **Automatic vault sync.** Manual mirroring on refactor.
- **Print layout.** Browser print CSS optional, not a focus.
