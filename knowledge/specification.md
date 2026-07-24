---
title: Specification
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

What the site must do. The site renders the Pollin 2026 paper as a scrollable single page with an inline glossary, embedded templates, case-study cards, and side panels. This document states the requirements and the design decisions. How the site is built is in [architecture.md](architecture.md); how it looks and behaves is in [design.md](design.md).

## Requirements

### A1 — Paper as reading flow
The canonical paper text is [paper.md](paper.md) in this knowledge base. The site renders a decomposition of it as a continuous reading flow, one file per H2 section under `_content/paper/` plus an abstract file prepended to section 1, with the references as `_content/literatur.md`. It renders in a central reading column with the table of contents as a sticky left sidebar. Acceptance criterion. A visitor to https://dhcraft.org/Promptotyping/ can scroll the paper from abstract to conclusion.

The deployed decomposition predates the revision round of 2026-07-24 and no longer matches the canonical text. Its section-5 file is titled Epistemic Infrastructure, a section the paper does not carry any more, and the abstract file holds the superseded abstract. Which files exist, how they are numbered, and which anchors they receive follows from the canonical text and is re-cut when the operator releases the revised paper for decomposition; until then the deployed cut is the state described here and in [architecture.md](architecture.md), and it is not the specification of the paper.

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

### A6 — Glossary as hover and click source
Every constitutive term in the paper reading flow is a glossary trigger with a dotted underline. Hover shows a short definition, click opens the right side panel with the full definition, sources, and paper references. The glossary is also reachable as its own anchor `#glossar`.

### A7 — Use-case gallery
A dedicated `#use-cases` section holds a curated gallery of publicly documented projects (operator decision 2026-06-10), classified and filtered by a use-case typology, secondarily by interface type and demo availability. The internal genre vocabulary does not appear in the public UI. Selected cases carry a deep-dive page in the side panel (HerData, Klawiter-Rescue, zbz-ocr-tei, M3GIM, Notker-Edition, CorrespExplorer, coOCR-HTR). Missing client clearance or a mediation format rather than a research artefact excludes a case; the full evidence corpus stays documented in the paper, whose evidence section carries the project inventory. Data source `data/case-studies.json`, exclusions in `_content/MANIFEST.md`.

The use-case vocabulary of the gallery (data production, data exploration, data rescue and transformation, and so on) is the site's own ordering and was once attributed to a paper section. The paper orders artefacts by the five epistemic functions instead, Verification, Exploration, Edition, Capture, and Audit, and carries no use-case typology; the interface-type filter is the one that maps onto it. Re-basing the gallery classification on the five functions, or declaring the use-case vocabulary as the site's own, is open work for the next site update.

### A8 — Embedded YouTube videos
Part 1 as a hero embed above the paper, part 2 at the VetMedAI knowledge-balance case, which sits in the projects section of the deployed decomposition and in the evidence section of the canonical text. Both run from the `youtube-nocookie.com` variant with no tracking before the click.

### A9 — DHCraft design system
Light grey `#d5d5d5` accent, black on white, Inter for text, Consolas for code, no decorative elements. Side panels collapse to bottom sheets on mobile. Full token set and behaviour in [design.md](design.md).

### A10 — Vanilla tech stack
No framework, no build step. HTML5/CSS3/JS, marked.js v9.1.6 and js-yaml v4.1.0 vendored, GitHub-Pages-native hosting. Acceptance criterion. `git clone` and opening the site over a static server renders it locally. Details in [architecture.md](architecture.md).

### A11 — Frontmatter-Inspector as interactive self-demonstration
A module in the Vorlagen section with a textarea for the YAML frontmatter of a foreign `knowledge/` document. The inspector parses the block, extracts `template.url` (or `template.alias`), validates it against the site anchor schema, and opens the side panel with the rendered template. A default frontmatter with a latest URL is prefilled. On an invalid URL it shows the expected schema; when a snapshot anchor points to a missing version it falls back to the latest anchor with a warning. Implementation in [architecture.md](architecture.md).

### A12 — Cross-repo consistency, the site demonstrates rather than advertises
The site's own `knowledge/` documents carry the `template:` field and each links to its own template URL on the live site, subpath form canonical, hash form as alias. The site demonstrates the method on itself.

### A13 — Method overview as entry point
A German `#ueberblick` section between hero and paper states what Promptotyping is, the four phases in brief, the three document types with the diagnostic rule, the two modes, and signposts into paper, templates, use cases, practice, and skills. Substrate `_content/ueberblick.md`. Without it a visitor lands directly in an English academic paper.

### A14 — Practice section (method extensions)
A `#praxis` section with the empirically grown method extensions from the vault knowledge base (verification milestones, Promptotyping interfaces, subagents and role simulation, script-versus-LLM separation, knowledge curation, demo-repo reduction, claims verification, epistemic status of user stories, template catalog). Each entry has a stable anchor `#praxis-{slug}` and names its documented origin case. Substrate `_content/praxis.md`.

### A15 — Skills and system prompts
A `#skills` section with the reusable system prompts (coding, writing) as unchanged, copyable originals, plus the action-layer practice (CLAUDE.md, custom commands, system prompts). Anchors `#skills-coding`, `#skills-writing`. Substrate `_content/skills/`. Links to the action-layer template (A16).

### A16 — Ninth template, Action-Layer
The Action-Layer template (`CLAUDE.md`) is published under the slug `action-layer` (namespace decision ADR-9). It is released and carries mirror status `complete`, with no draft banner.

### A17 — Working-environment section
A `#arbeitsumgebung` section between skills and glossary with three short parts, the Obsidian vault as knowledge environment, the Promptotyping Agent Interface (experimental, in development), and the AI harness and skills (Claude Code as harness, links to `#skills` and the process videos). Substrate `_content/arbeitsumgebung.md`, routing `/arbeitsumgebung` via `404.html`.

### A18 — Site header, footer, hero, video integration
A sticky white header with the DHCraft logo and wordmark left, section nav and GitHub link right; nav links hidden on narrow viewports (mobile navigation via the TOC toggle). Footer on `#f5f5f5` with carrier note, repo and YouTube links, license line, and machine-address note. The hero is purely typographic; `promptotyping-logo.png` sits at the head of the Vorlagen section. All process videos play without leaving the page, as click-to-load facades over `youtube-nocookie.com`.

### A19 — Vorlagen hub
The `#vorlagen` section is the coherent hub of the method specification (operator decision 2026-07-23). After the section head and a quiet text subnav (Katalog, Konvention, Maschinenzugriff, Technology Baseline, plain text links in the design-system greys) come four blocks with additive in-page sub-anchor IDs:

- `#vorlagen-katalog` — the clickable template table.
- `#vorlagen-konvention` — a short abstract of the convention with a jump link to `#konvention-v0.1`; the convention itself is neither duplicated nor moved.
- `#vorlagen-maschinenzugriff` — the Frontmatter-Inspector and the machine-address paragraph under one heading.
- `#vorlagen-technology-baseline` — what a Technology Baseline is, that this repo carries one for the static-web-tool artefact family (status draft), with a link to the machine address `https://dhcraft.org/Promptotyping/_content/technology-baseline.md` and a repo-relative link.

The sub-anchors are additive in-page fragments, no new top-level anchor, no new subpath, no change to `404.html`. The Technology template (slug `technology`) is not in `data/promptotyping-documents.json` and receives no catalog anchor; its vault-first release is pending. Acceptance criterion. Opening `#vorlagen` reaches all four blocks through the subnav, each block carries its sub-anchor as a directly addressable fragment.

## Function per site section

The paper-section numbers below refer to the deployed decomposition (A1). They are re-drawn against the canonical text when it is decomposed.

### Method (paper sections 1–3)
The paper narrative as reading flow. Terms as glossary triggers. The template table in the section-3 context with click links to side-panel specs. Hero video part 1 above.

### Vorlagen (`#vorlagen`)
Table of all mirrored templates with function, recommended file name, Promptotyping type, version, and status (function column English, template names German as identifiers). A click opens the side panel with the full spec including frontmatter schema, section structure, a copy button for the `template:` block, and a raw-text link (machine address, ADR-10). One latest anchor per template, snapshot anchors on version changes. Built out as the specification hub per A19.

### Use cases (`#use-cases`)
Curated cards grouped and filtered by the use-case typology (A7, ADR-8 addendum). Each card names the project, use case, one sentence, and demo/repo/video links where cleared. Selected cards carry a deep-dive page in the side panel. Part-2 video embedded in paper section 4.

### Concepts (embedded in the paper flow, plus anchors)
Concepts named in the paper flow are linked to their glossary anchors, with full definitions in the glossary side panel. Asymmetric Amplification, Critical-Expert-in-the-Loop, Scholar-Centered Design, and Context Engineering are carried by the canonical text. Epistemic Infrastructure is not; the concept was removed from the paper on 2026-07-23 and survives as a glossary entry and as a vault concept, which the deployed decomposition does not yet reflect.

### Glossary (`#glossar`)
A dedicated section at the page end, alphabetically ordered. Per entry, term, short and full definition, source (with vault link), and paper references. Same data source as the hover tooltips.

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
**Context.** The old Living Paper had three interactive modules, Context-Rot-Viz, Vault-Explorer, Sycophancy-Trap; the plan first kept the Vault-Explorer. **Choice.** Drop all three. **Rationale.** They are didactic gadgets rather than method necessities; two are animations that distract in a calm reading environment, and the Vault-Explorer would have needed a `mock_vault.json` substrate that does not pay off when the paper's own reading flow already shows the Promptotyping Documents. **Effect.** Simpler code, focused on reading plus two useful modules, Frontmatter-Inspector and Case-Study-Filter.

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
