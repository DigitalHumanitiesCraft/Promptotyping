---
title: Specification
project:
  name: Promptotyping Site
  repository: https://github.com/DigitalHumanitiesCraft/Promptotyping
status: complete
language: en
version: 0.8
created: 2026-05-09
updated: 2026-08-21
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
related: [INDEX, project, architecture, design, handoff, journal]
---

# Specification

What the site must do. The site is a specification documentation showing one page at a time, with the navigation tree as its table of contents; the Pollin 2026 paper is one of those pages, rendered from the canonical text, and the glossary tooltip, the embedded templates, the case-study cards and the side panel serve it. This document states the requirements and the design decisions. How the site is built is in [architecture.md](architecture.md); how it looks and behaves is in [design.md](design.md).

## Scope and the division of roles

The site says what Promptotyping is and how it is applied. The paper says why the method is built the way it is and whether it holds. Each text carries one sentence of the other's job, so that two documents never compete for the same role. The rebuild that established this division ran as work packages AP1 to AP8 under the operator decision of 2026-07-25 and was completed the same day; the packages are spent and their record is in [journal.md](journal.md) and in the git history.

Four things stay out of scope. No bilingual site. No build step. No colours outside the design system. No modules beyond those A11, A7, A25 and the vault view name.

One item of the target state is still undecided. The mandatory frontmatter core is carried by this knowledge base with six fields while the published convention describes it alongside, and settling that on one version is an operator decision rather than an implementation gap.

## Requirements

### A1 — Paper as reading flow
The canonical paper text is [promptotyping-paper.md](../research-artefacts/promptotyping-paper.md). The site renders that file directly as a continuous reading flow, grouped into one section per H2 at render time, so the deployed text is the canonical text by construction. It renders in a central reading column, with the sticky left sidebar carrying the site's page tree and the paper's own two-level table of contents standing in the page directly under the H1 (A23). Acceptance criterion. A visitor to https://dhcraft.org/Promptotyping/paper can read the paper from abstract to conclusion in one scroll.

The mirrored decomposition under `_content/paper/` is gone since 2026-07-25, and with it the largest class of drift this site had. There is one paper text, it lives in this knowledge base, and the site fetches it. Nothing is re-cut on release of a revision, because there is nothing to re-cut.

### A2 — Phases provenance lane (removed)
A left lane that marked each paragraph by its Promptotyping phase was removed after the first deploy (operator decision 2026-06-10). Legend, mobile phase bar, hover tooltip, and filter mode are gone from HTML, CSS, and JavaScript. The `{:.phase-*}` tags left the paper markdown with the revisions that followed, and the marked extension that had stripped them was deleted on 2026-07-27 once a sweep confirmed the tags were gone. The rationale survives as a decision record in ADR-4.

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
| Specification | `#specification` | `/specification` |
| Part of the specification | `#anwendung`, `#vorlagen`, `#konvention-v0.1`, `#artefakt`, `#verifikation` | the same slug as a subpath |
| Convention | `#konvention-{version}` | `/konvention/{version}` |
| Glossary | `#glossar` | `/glossar` |
| Literature | `#literatur` | `/literatur` |
| Paper section | `#abschnitt-{n}-{slug}` | `/paper/{n}-{slug}` |
| Overview | `#ueberblick` | `/ueberblick` |
| Use cases | `#use-cases` | `/use-cases` |
| Practice entry | `#praxis-{slug}` | `/praxis/{slug}` |
| Skill | `#skills-{slug}` | `/skills/{slug}` |
| Tutorial | `#tutorial` | `/tutorial` |

The slug set for Promptotyping-Documents is `index`, `project`, `data`, `specification`, `user-stories`, `action-layer` (ADR-9), `architecture`, `technology`, `domain-knowledge` (English slug, ADR-3), `design`, `testing`, `verification`, `journal`, `handoff`, `plan`, `report`, `integration`. The canonical source of each version is the `version` field of the mirror and `data/promptotyping-documents.json`. The latest anchor is the primary and only address point; a snapshot sub-anchor is issued only when a template's version changes, as an additional hash fragment on the same section, without its own subpath. Paper subsection anchors (for example `#phase-distillation` within section 3.3) are available inside their section without a subpath. Acceptance criterion. `/promptotyping-document/data` and `#promptotyping-document-data` both lead to the same rendered template.

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
Every constitutive term in the paper reading flow is a glossary trigger with a dotted underline. Hover after a delay of 400ms, a click, or Enter shows a tooltip carrying the term, its short definition, and a link to the full entry under `#glossar-{slug}`; Escape, a click elsewhere, or leaving the trigger closes it. The click used to open the right side panel with the full definition, and that path was dropped on 2026-07-26 by operator decision. The reason is that the panel took over the whole right edge for three lines of text and covered the passage the reader had just come from, while the full entry is one link away on a page that carries every term anyway. The tooltip stays open while the pointer is inside it, since the link would otherwise be unreachable. Touch devices have no hover, so the click is the only way in and the toggle behaviour is what makes it usable. The glossary is also reachable as its own anchor `#glossar`. Since 2026-07-29 the tooltip carries the entry's sources between the short definition and that link, as the resolvable links A34 describes.

### A7 — Use-case gallery
A dedicated `#use-cases` section holds the gallery of documented projects. It breaks into blocks by what a case argues for and orders within a block by the epistemic function of its interface; the filter bar is primary over those five functions and secondary over demo availability. Data source `data/case-studies.json`.

Admission is decided by what a card lets a reader check (operator decision 2026-07-26). Every project in Table 1 of the paper (section 3.2) has a card, because a reader who comes from the case comparison of section 3.2 to verify a claim has to find the project; the `paper_row` field carries the link and V5 in [verification.md](verification.md) holds it in both directions. Beyond the evidence inventory the gallery carries the projects the method grew out of, which the genealogy in the opening of section 2 needs, and the teaching formats, on which the teachability argument of section 4.3 rests. A project that supports no claim of the paper has no card, which is why a strategy game built with the same tooling stays out.

That criterion replaced an earlier curation whose exclusion notes had gone stale. Three projects were held out for want of client clearance and were found on 2026-07-26 to be public, two as repositories with working demos and the third as the paper's Medieval Legal Transactions with public video documentation. The Aldersbach monastic accounts stay although the paper dropped the case as too old, because the genealogy is what they carry (operator decision 2026-07-25).

Every case carries a depth page, and its length follows the role. A case in the evidence or further block carries five sections, context and research question, data, approach, methodological contribution, and limits. A case in the genealogy or teaching block carries three, context, contribution, and limits, because for a recorded session the approach is the subject itself and the data basis carries nothing. The limits section is compulsory in both forms, since a case report that names only what worked argues for the method instead of documenting it. Addresses live on the card alone, so a depth page never repeats them.

No reduced cards exist. The form was specified for a project under client clearance that may name no data and no address, and when the five candidates were checked on 2026-07-26 four turned out to be publishable and the fifth is not named in the paper, so it has no card at all. The form stays specified here for the next such case.

Two things stay out of a depth page. Volatile quantities, meaning any figure that moves as the project continues, which covers document counts, file counts, test counts, corpus sizes and the number of views an interface offers; the page states the matter qualitatively or points at the source of truth that holds the current figure. And narrative detail that carries no argument, the session story and the anecdote about how a defect was found. Fixed defining figures stay, among them a period such as 2010 to 2018, a year, and a count the source itself fixes such as the verses of an edited psalm.

The rule on volatile quantities binds the card as well (operator decision 2026-07-26). Card and depth page carry the same statement about a project, so a rule that binds one carrier leaves the figure standing on the other, and a reader who goes no further than the gallery is handed the number that has since moved. On a card it applies to all four text fields, `summary`, `data`, `artifact` and `insight`.

The gallery ran on a nine-value vocabulary of its own until 2026-07-26, invented for the site and at one point misattributed to a paper section. It is gone (operator decision 2026-07-26), and both grouping and filtering now use the five epistemic functions of the site's own typology. Three things thereby come to mean one thing, the block order, the filter chips and the hue on the card edge, where the vocabulary and the colour had previously encoded different dimensions on the same card. The price is a loss of description: a value such as data rescue and transformation said something about Klawiter that its functions, verification and capture, do not, and that description now lives in the card summary.

Two dimensions remain, and they are orthogonal on purpose. The epistemic function is a property of the artefact and answers what the interface is for. The role is a property of the argument and answers what the case is evidence for, with the values evidence, genealogy, teaching and further, their labels and one-line notes held in `role_labels` and `role_notes`. The gallery breaks on the role because a genealogy prototype standing beside a production pipeline as an equal makes a false claim about the method, and it orders on the function because that is the paper's own typology.

### A8 — Embedded YouTube videos
Part 1 on the Beispiel-Workflow page, where the worked case runs, part 2 on the tutorial page (operator decision 2026-07-31: the paper page carries the academic text alone, and the demo video belongs to learning the method). Until then part 2 sat in the paper's evidence section at the VetMedAI case, which the promoted five-chapter text no longer carries. Both run from the `youtube-nocookie.com` variant with no tracking before the click.

### A9 — DHCraft design system
Black on white, Inter for text, Consolas for code, no decorative elements. Unchromatic throughout, with two bounded exceptions decided on 2026-07-26: five muted hues that encode the epistemic function of an artefact, and one prismatic signature band that encodes nothing. A dark theme applies the system preference and can be overridden by a toggle. Side panels collapse to bottom sheets on mobile. Full token set, the grounds for the colour rules, and behaviour in [design.md](design.md).

### A10 — Vanilla tech stack
No framework, no build step. HTML5/CSS3/JS, marked.js v9.1.6 and js-yaml v4.1.0 vendored, GitHub-Pages-native hosting. Acceptance criterion. `git clone` and opening the site over a static server renders it locally. Details in [architecture.md](architecture.md).

### A11 — Frontmatter-Inspector as interactive self-demonstration
A module in the Vorlagen section with a textarea for the YAML frontmatter of a foreign `knowledge/` document. The inspector parses the block, extracts `template.url` (or `template.alias`), validates it against the site anchor schema, and opens the side panel with the rendered template. A default frontmatter with a latest URL is prefilled. On an invalid URL it shows the expected schema; when a snapshot anchor points to a missing version it falls back to the latest anchor with a warning. Implementation in [architecture.md](architecture.md).

### A12 — Cross-repo consistency, the site demonstrates rather than advertises
The site's own `knowledge/` documents carry the `template:` field and each links to its own template URL on the live site, subpath form canonical, hash form as alias. The site demonstrates the method on itself.

### A13 — Specification front page
Extended on 2026-07-29 by A32. The generated index still carries the five numbered parts, and each entry now addresses a section of the one specification page instead of a page of its own.

The start page is the specification front, addressed `#ueberblick`. It states what Promptotyping is, carries a keyed status table (Fassung, Stand, kanonische Adresse, Maschinenadresse, Evidenz, Lizenz), a generated index of the specification, a short statement of what the method is, and signposts into paper, templates, use cases, practice, and skills. Three passages moved away on 2026-07-26, since carrying them twice made the landing page repeat the page behind it. The four phases went to part 1, the scaling statement to part 1 under "Zwei Modi", and the document-type classification and the artefact default fell without replacement in favour of parts 3 and 4, with a pointer to part 3 left in "Wo ansetzen". Substrate `_content/ueberblick.md`. Without it a visitor lands directly in an English academic paper.

### A14 — Practice section (method extensions)
A `#praxis` section with the empirically grown method extensions from the vault knowledge base (verification milestones, Promptotyping interfaces, subagents and role simulation, script-versus-LLM separation, knowledge curation, demo-repo reduction, claims verification, epistemic status of user stories, template catalog). Each entry has a stable anchor `#praxis-{slug}` and names its documented origin case. Substrate `_content/praxis.md`.

### A15 — Skills and system prompts
A `#skills` section with the reusable system prompts (coding, writing) as unchanged, copyable originals, plus the action-layer practice (CLAUDE.md, custom commands, system prompts). Anchors `#skills-coding`, `#skills-writing`. Substrate `_content/skills/`. Links to the action-layer template (A16).

### A16 — Ninth template, Action-Layer
The Action-Layer template (`CLAUDE.md`) is published under the slug `action-layer` (namespace decision ADR-9). It is released and carries mirror status `complete`, with no draft banner.

### A17 — Working-environment section
A `#arbeitsumgebung` section between skills and glossary with two short parts, the Obsidian vault as knowledge environment and the AI harness and skills (Claude Code as harness, links to `#skills` and the process videos). Substrate `_content/arbeitsumgebung.md`, routing `/arbeitsumgebung` via `404.html`.

### A18 — Site header, footer, video integration
A thin fixed header carrying the wordmark plus the kind marker `Spezifikation` left, and the theme toggle plus the Repository link right; the Paper link was dropped on 2026-07-26 because the tree carries it. No mark sits beside the wordmark. Both the DHCraft watercolour and `promptotyping-logo.png` were tried there and dropped, because a chromatic detail image at 22 pixels reads as a smudge and would be the only hue on the page that means nothing. The signature band runs along the foot of the header. The footer is a four-column grid on `--code-bg`, carrying carrier and licence, addresses, the state of the specification, and the machine-access note; the carrier mark stays there. `promptotyping-logo.png` sits at the head of the Vorlagen page. All process videos play without leaving the page, as click-to-load facades over `youtube-nocookie.com`.

### A21 — Page status line
Every page except the start page carries a head block under its title. Its first line is the one-line note from the page registry, which says what the page is about; a reader asking whether they are in the right place is on the page, not in the index that led there (added 2026-07-26). Under it stands the status line, stating whether it binds (`normative, part of the specification` or `informative`), its version, its date, and the machine address of its substrate. The keys read Standing, Version, Updated and Source. Standing comes from the page registry in `registry.js`, the remaining fields from the frontmatter of the substrate file or, for the generated pages, from the registry. Added 2026-07-26.

Extended on 2026-07-29 by A32. A part of the specification page carries the same block under its own heading, with the note, the version, the date and the machine address of its substrate. The Standing field stays out there, because the page states once for all five that they bind, and repeating it under every part would say the same thing five times.

### A22 — Colour that carries meaning, and the dark theme
Colour encodes exactly one thing, the epistemic function of an artefact, that is the five interface categories of the site's own typology on the Artefakt page. The hue appears on the function list of the Artefakt page and on the left edge of a use-case card, and the category always stands there as a word as well. One prismatic signature band sits at the foot of the header, once per page, and encodes nothing. The dark theme is a token swap that follows the system preference, is overridden by a toggle, and is applied before first paint from `localStorage`. Grounds and token values in [design.md](design.md). Added 2026-07-26.

### A23 — Table of contents on the paper page
The paper page carries a static two-level table of contents under its title and status line, built from the same headings that produce the `#abschnitt-*` anchors, sections at the first level and subsections at the second. It does not scroll along; the on-this-page rail was removed on 2026-07-25 and stays removed. The paper is the longest page on the site and was the only one without an entry into its own structure. Acceptance criterion. Every entry points at an anchor that resolves, and the entry set matches the heading set of the rendered text. Added 2026-07-26.

### A24 — Focus on page change
A page change moves the focus into the content. The host of the target page carries `tabindex="-1"`, receives the focus programmatically, and shows no focus ring while doing so, because it is never reachable by Tab. Resolving the initial hash on load leaves the focus alone, so nothing is stolen from the header. The focus call must not overwrite the scroll position of a deep link. Without this a keyboard user lands back at the top of the sidebar after every navigation click. Added 2026-07-26.

### A25 — Term index in place of a full-text search
The glossary page carries, above its entries, an index that connects every glossary term with the pages on which it occurs, with a filter field over the terms. It is built at runtime from `data/glossar.json` against the page containers mounted in the DOM and fetches no further source. A full-text search was weighed and declined on 2026-07-26; the three audiences of [project.md](project.md) arrive with an address, resolve a `template:` URI, or read a flow, and none of them searches. What the site lacked instead was the path from a term to the place that uses it. A term that the index reports nowhere outside the glossary is a finding about the site, and the index shows it as such. Added 2026-07-26.

### A27 — The tree carries no group labels
The sidebar carries the specification proper under its heading, since the part numbers only mean something under one, and every other page below it as a flat list without group labels (operator decision 2026-07-26). Five group labels over fourteen pages read as more structure than the site has, and two of them, Evidence and Tools and practice, are abstractions a first-time reader cannot yet place. The generated index on the start page carries the five numbered parts alone, under the heading "The specification in five parts", since the tree already lists every page and what it cannot say is that the specification is an ordered set of five.

Amended on 2026-07-29 by the merge recorded in A32. The heading over the specification block went with the merge, because the block it named had shrunk to two entries while the part numbers moved into the subtree under the second of them. The tree is now one flat list per group run, with a gap between the runs and no label over any of them. The ban on group labels stands, and the gap is what lets the pages that answer the same kind of question read as belonging together. The one-line note per entry was rewritten in the same move, so that each page says what distinguishes it from its neighbour in the run.

### A28 — The site checks its own claims
`tools/check_consistency.py` decides by rule what the site states about itself in more than one place, that the catalogue and the convention agree on every document type, that catalogue and template folder cover each other with held-back slugs named, that the slug list in `CLAUDE.md` is complete, that the gallery holds its own conditions, meaning depth pages and cards cover each other and both closed vocabularies are respected, and that every case in Table 3 of the paper has a card, matched by case name in both directions; the promoted five-chapter paper carries no per-case interface types, so the typology lives in the gallery data alone. With `--check-urls` it also resolves every address a card publishes; that pass is opt-in because the script runs before every commit and fifty network round trips would make that unusable. It exits non-zero on any failure. [verification.md](verification.md) records what is checked against what, with the verdict, and what stays with the Critical Expert because agreement in substance is not decidable by rule. Before 2026-07-26 the site specified the verification function in part 5 and ran no check of its own statements, while the vault under it had one from the start. Added 2026-07-26.

### A29 — Light is the first view
The site opens in the light theme regardless of the system preference (operator decision 2026-07-26). The theme prelude in the head always writes a `data-theme` attribute, taking the stored choice where one exists and `light` otherwise, so the attribute is set before first paint and a reader who chose dark never sees a white flash. The system preference still reaches the stylesheet through its `prefers-color-scheme` block, and the always-set attribute means that block no longer decides the first view. The theme control remains the way to dark, and the choice persists in `localStorage` under `promptotyping-theme`. Added 2026-07-26.

### A30 — A citation lands on its reference entry
Every entry of the paper's reference list carries an id built from the first author's surname and the year, pattern `ref-{surname}-{year}`, and a parenthetical citation in the text links to that id rather than to the head of the list. Where an entry ends in a URL, marked autolinks it and the site marks the link so the stylesheet can set an outward link apart from an internal jump. Two defects surfaced while building this and are part of the record. A mangled word-boundary escape in the citation pattern had left 23 of 78 entries without an anchor, and month-year parentheses such as "(January 2026)" had been decorated as citations from the start, which a month guard now excludes. A citation whose key is not in the map keeps pointing at the list, so an unmatched reference degrades to the previous behaviour instead of breaking. Added 2026-07-26.

### A31 — Tutorial page, a guided first iteration
A `#tutorial` page that directs a reader through their own first Promptotyping iteration, from a structured dataset they bring to an accepted and versioned first promptotype. It differs from the worked workflow, which narrates a completed case; the tutorial instructs the reader's own pass (operator request 2026-07-29).

The didactic form is constructive. Each step carries the same four elements, the goal of the step, the concrete action with a copyable prompt where the action addresses the agent, the state the reader should now be in, and a self-check the reader can decide alone. The self-checks operationalise the method's own criteria, among them the falsification probe on `data.md` after Exploration, the fresh-instance test as the completion criterion of Distillation, and the requirement that acceptance names its documented grounds. Prompts render with the copy button the skills page already uses.

The page is informative, English, substrate `_content/tutorial.md`, machine address `https://dhcraft.org/Promptotyping/_content/tutorial.md`. Anchor `#tutorial`, subpath `/tutorial`, which resolves through the existing bare-page rule with no change to `404.html`. Step headings mint their in-page anchors at render time, so a later rewording of a step heading needs the same alias discipline as A26 records for the practice entries. No new module; the page is content rendered like every other content page.

Acceptance criterion. A reader who arrives with a structured dataset, an agentic coding tool, and competence in their own material can follow the steps in order, knows at every step what done looks like, and leaves with a repository whose `knowledge/` folder, artefact, and journal entry identify a first promptotype.

### A32 — The specification is one page in five parts
The five numbered parts are sections of one page addressed `#specification`, subpath `/specification` (operator decision 2026-07-29, package F9 of [plan.md](plan.md)). A reader who wants the specification reads one document from application through verification, and the tree entry Specification carries the five as a permanent subtree. The start page keeps its own address and stays a page of its own, since it is the front of the specification rather than a part of it.

The five ids stay. `anwendung`, `vorlagen`, `konvention-v0.1`, `artefakt` and `verifikation` are the ids of the sections inside the merged page, so `#anwendung` and `/anwendung` resolve as they did, and so do the two anchor families that hang under them, `#promptotyping-document-{slug}` and `#konvention-*`. The registry decides this rather than the DOM. A registry entry with a `parent` field is a part instead of a page, `pageForAnchor` answers with the page a part sits in, `showPage` accepts either and shows the page, and `resolveTemplateUrl` accepts a part slug as the bare slug it always was. The DOM fallback over `.doc-page` would resolve a part anchor as well, and the registry answers before it, which keeps an address resolvable before the content carrying it has rendered.

Each part keeps its own substrate and its own status line (A21 extended), and the generated index of the start page keeps its five entries (A13 extended). The part headings move down one level once the parts are rendered, so the merged page carries a single H1; nothing addressable moves with them, because heading ids are minted for the paper alone.

Acceptance criterion. `/anwendung`, `/vorlagen`, `/konvention`, `/artefakt`, `/verifikation` and their hash forms lead to the same content as before the merge, a template row still opens its side panel, and the frontmatter inspector still resolves a pasted `template:` block.

### A33 — The tree carries its subtrees permanently, and nothing collapses
Two entries of the tree show their inner structure, the specification with its five parts and the paper with its sections (operator request 2026-07-29, package F1). Both subtrees stand at all times. Scrolling the reading column moves a current marker over them, set as a class and as `aria-current="location"` by one `IntersectionObserver` over the band under the fixed header, so a reader always sees where in the specification or in the paper they are. The paper subtree is built from the rendered `.paper-section` elements, the same elements that carry the `#abschnitt-*` anchors, once `promptotyping:content-ready` reports the content as mounted. This is navigation logic and belongs to the registry, so no module was added.

Nothing in the interface opens or closes (operator decision 2026-07-29). A sweep on the same day found two devices that reveal something on a click, and both stay, because neither hides text the page already carries. The side panel slides in over 200ms and becomes a bottom sheet below 860px, which is the design system's one animation. The video facade of A8 loads an embed on the click that a reader has to make anyway, since nothing reaches YouTube before it. No third device was found.

Below 860px the tree stands above the page instead of beside it, so every entry of it is scrolled past before the text begins. There only the subtree of the page being read stands. That is a width rule and carries no control.

A23 stands unchanged. The paper keeps its table of contents in the page, and no third column returns. The two answer different questions, the subtree where the reader is and the in-page contents what the paper holds.

Acceptance criterion. Opening `#abschnitt-2-promptotyping-as-a-method` marks the corresponding tree entry as current, scrolling on into the next section moves the marker, and switching to another page leaves no marker behind.

### A34 — A glossary source is a link wherever the site holds its address
Every entry of `data/glossar.json` carries a source list in place of the free-text line it carried until 2026-07-29 (package F2 of [plan.md](plan.md)). A source states its kind, its display text and the anchor it resolves to. Five kinds exist, a section of the canonical paper, an entry of the reference list under the `ref-{surname}-{year}` ids of A30, an assertion of the grounded vault, a page or block of this site, and a carrier the site holds no address for, which keeps its wording and stays text. The curation runs entry by entry and was checked against the real inventory, meaning the heading set of [promptotyping-paper.md](../research-artefacts/promptotyping-paper.md), the reference list of the same file, the assertion files under `vault/30_assertions/` and the anchors the page registry mounts. No address was invented for a carrier that has none, among them the vault concept documents that live outside this repository.

The tooltip and the glossary page render the list as links. `tools/build_glossar.py` renders it into the Markdown mirror as hash links, which brings the mirror under the anchor check of A28 by the same path every other `_content` file takes. Three further things hold by rule, that an entry names at least one source, that a kind and its anchor family agree, and that a cited reference id is one the paper's own list mints; the last of these rebuilds the ids rather than trusting the `ref-` prefix.

Acceptance criterion. A source line in the tooltip and on the glossary page lands on the paper section, reference entry, claim or page it names.

### A35 — The case table links to the gallery
The first column of Table 1 in section 3.2 carries each project into its use-case card under `#case-{id}` (raised 2026-07-29, package F2 of [plan.md](plan.md)). The correspondence is the `paper_row` field of `data/case-studies.json`, which A7 already relies on and V5 of [verification.md](verification.md) holds in both directions, so no second table arises. `pages-paper.js` fetches the gallery data and rewrites the first column after the paper has rendered and before the glossary triggers run. The Markdown source stays plain, so a machine fetching `research-artefacts/promptotyping-paper.md` receives the table the paper writes. A row that no card claims stays plain text, and A28 reports it as a gap in the gallery.

Acceptance criterion. Clicking a project name in Table 1 opens the use-case gallery at that project's card.

### A36 — The glossary classifies its terms, and the class is drawn as a shape
Every glossary entry states what kind of thing its term names, from a closed vocabulary of seven values (package F3 of [plan.md](plan.md)). The values are form of work, document function, role and authority, artefact and interface, checking and acceptance, failure mode and limit, and infrastructure and environment. Their wording stands in `_meta.kategorien` of `data/glossar.json`, which makes the vocabulary data, and the mark drawn for each stands as `CATEGORY_MARKS` in `pages-glossar.js`, which makes the mark presentation. `tools/check_consistency.py` holds the two against each other, so a value can neither lose its mark nor acquire one that nothing names.

The mark is one geometric form per value, inline SVG at twelve pixels with a 1.25-pixel stroke in `currentColor` and no fill. It carries no hue, because hue on this site encodes the epistemic function of an artefact and nothing else (A22). The category word stands beside the mark wherever it appears, so the shape is never the sole carrier (WCAG 2.1, success criterion 1.4.1). Tooltip, glossary entry and term index render the same pair, and the register carries it as a column its filter field searches alongside the term and the pages. Grounds for the shape encoding and the form per value are in [design.md](design.md).

Acceptance criterion. Every entry shows exactly one mark with its category word, the register narrows to a category when its name is typed into the filter, and no mark carries a colour.

### A37 — The vault page carries a secondary grounding network
The vault page keeps its list as the primary form and the default, and adds a network view over the grounding chain, claim to distillate to source (package F4 of [plan.md](plan.md)). The view answers what rests on what and nothing more, which is its acceptance guardrail as stated by the operator on 2026-07-29. One topic renders at a time, chosen from the seven topic maps, because a single canvas over the full claim set shows edge tangle in place of grounding. The layout is three static columns of vanilla SVG in `pages-vault.js`; the container scrolls, nothing is simulated, nothing animates, and hue is absent (A22). The source layer that the edges need entered `data/vault.json` through `vault/tools/build_site_index.py`, the vault's own index tool, and the result is committed as the site's static data.

Hover and focus light a node together with everything its anchors connect, as a class switch. A claim node leads back to the claim in the list, which is where the published `#vault-{slug}` address resolves; a deep link therefore switches the page to the list whichever view the reader left behind, so every published claim anchor keeps resolving in both view states. Distillate and source nodes open their Markdown carriers in the repository. The nodes are focusable and named for assistive technology, and the view switch is a button group with pressed states.

Acceptance criterion. The operator accepts the first pass; the standing test is that a reader can pick any claim in the network and reach, within one interaction each, the distillates it rests on, the sources beneath them, and the claim's own list entry.

### A38 — Part 5 is titled Checking
The fifth part of the specification displays as Checking (operator decision 2026-07-31); its anchor `#verifikation` and subpath stay, since published addresses are identifiers rather than text (A26). The rename follows the paper's terminology reversal of the same day (steering document, decision 21), after which verification names the formal rule check and validation the expert judgement. A part titled Verification would have named one of its two kinds of check while covering both, and the document type Verification (`verification.md`) would have shared its name with a part that means something else; the umbrella word checking is the paper's own (Table 1). Changed are the registry label, the page title and heading, one link label on the Application page, and the source label in `data/glossar.json`. The document-type name, the Verification Interface category, and Verification Milestone stand unchanged as proper names. Added 2026-07-31.

### A39 — The site describes the method as knowledge-driven
Site self-descriptions carry the paper's framing, an iterative, knowledge-driven method for developing project-specific research artefacts from structured research data and maintained project knowledge (operator decision 2026-07-31). The earlier self-descriptions diverged three ways, context-engineering method in the INDEX lexicon, document-driven context-engineering method in the glossary, knowledge-driven in the paper; the INDEX and the `og:description` also derived the artefacts from data and frontier LLMs, which put the model into the definitional slot the paper gives to maintained project knowledge. Context Engineering remains one of the method's two named foundations rather than its genus. Changed are the `og:description` in `index.html`, the overview page's description line, the glossary entry (whose long text also takes the paper's current etymology wording and the validation term of decision 21), and the INDEX lexicon, which additionally gains the missing Promptotype entry. Added 2026-07-31.

### A40 — Handoff is a mandatory Process Inbox

The catalogue has seventeen slugs and includes `handoff` as a Process Document with the always trigger. Every Promptotyping project carries `knowledge/handoff.md` with `status: active`. An empty inbox contains only “Keine offenen Handoff-Punkte.” under `## Offene Handoff-Punkte`. Each open point carries `Received`, `Source`, `Target`, and `Context`; optional fields are omitted when empty. A processed point is integrated or rejected, evidenced in `journal.md`, and removed completely. Exceptional dated snapshots under `handoffs/` remain separate artefacts.

### A41 — Journal is a curated provenance index

The Journal template is version 0.4. Entries represent substantively coherent transitions of type `integriert`, `verworfen`, or `korrigiert`; `verdichtet` is reserved for semantic maintenance and names its Git baseline. Current status, future work, open inputs, and detailed verification results remain in their responsible documents. Compaction begins when the journal loses its provenance function and disposes every substantive statement; it uses no fixed threshold and creates no archive document.

### A42 — The canonical skill follows the document semantics

The later canonical Promptotyping skill must make `orient` read `handoff.md` before `journal.md`; `handoff` integrates durable knowledge before it retains open deltas and writes the Journal before the shared commit; `compact` applies semantic compaction without an archive; `distill` creates both `journal.md` and `handoff.md`. Integration remains an invariant of orientation, ongoing work, and handoff processing. The operation set gains no `integrate` command. Repository source and synchronisation belong to the separate skill-delivery lane in `plan.md`.

### A26 — The site is English
Every string the site shows is English, in the British spelling the paper uses (operator decision 2026-07-25, carried out 2026-07-26). That covers the page registry labels, the status line, every control, the nine content pages directly under `_content/`, and the text fields of `data/glossar.json`, `data/case-studies.json` and `data/promptotyping-documents.json`.

Three sets under `_content/` are still German, and each for its own reason. Sixteen of the seventeen templates are vault mirrors whose translation belongs in a vault session together with their originals, so translating the repo copy alone would be the silent divergence `CLAUDE.md` forbids; the seventeenth, `technology`, has been repo-canonical since 2026-07-26 and stays German so that the catalogue reads in one language. The three files under `skills/` are reusable German system prompts, that is teaching material, which the language decision of 2026-07-25 exempts. The seven case-study depth pages had no such reason and were carried over on 2026-07-26, onto the shape A7 prescribes, which ended the pass. The source for the terminology of the distilled pages is [promptotyping-paper.md](../research-artefacts/promptotyping-paper.md), which they are distilled from; the German distillate is superseded and is not maintained as a back-translation source.

Three classes stay German because they are identifiers rather than text. The published anchors, since foreign repositories carry them as `template:` URIs. The template names, since they stand in foreign frontmatter blocks. And the German file names the convention cites as examples of real repositories. Thirteen glossary entries and all templates therefore appear under a German address with an English label, which is the separation of identifier from text that A1 weighed and recommended.

Two acceptance conditions follow. The five bold category names on the Artefakt page (`Verification`, `Exploration`, `Edition`, `Capture`, `Audit`, each followed by a full stop) are keys against `FUNCTION_SLUGS` in `pages-content.js`; translating them would switch off the colour encoding of the nominal scale without any visible error. And the `#praxis-*` anchors derive from the headings at render time, so translating a heading moves its address; six slugs moved on 2026-07-26 and are kept alive by `PRAXIS_ALIASES` in the same file. Any further translation of an anchor-bearing heading needs the same alias.

### A19 — Vorlagen hub
The `#vorlagen` section is the coherent hub of the method specification (operator decision 2026-07-23). After the section head come four blocks with additive in-page sub-anchor IDs. A quiet text subnav over these four was built and removed on 2026-07-26, because it repeated the four headings standing directly below it; the sub-anchors hang on the blocks and resolve without it. The Promptotyping mark at the head of the page went in the same move, being a decorative element and a hue that means nothing, which is the reason it had already left the header.

- `#vorlagen-katalog` — the clickable template table.
- `#vorlagen-konvention` — a short abstract of the convention with a jump link to `#konvention-v0.1`; the convention itself is neither duplicated nor moved.
- `#vorlagen-maschinenzugriff` — the Frontmatter-Inspector and the machine-address paragraph under one heading.
- `#vorlagen-technology-baseline` — what a Technology Baseline is, that this repo carries one for the static-web-tool artefact family (status draft), with a link to the machine address `https://dhcraft.org/Promptotyping/_content/technology-baseline.md` and a repo-relative link.

The sub-anchors are additive in-page fragments, no new top-level anchor, no new subpath, no change to `404.html`. The Technology template (slug `technology`) entered `data/promptotyping-documents.json` on 2026-07-26 and carries a catalogue anchor like every other template; the block described here is about the filled Technology Baseline of this repository, which is a different document and still a draft. Acceptance criterion. Every block under `#vorlagen` carries its sub-anchor as a directly addressable fragment, and each resolves without a subnav.

## Function per site section

The paper-section numbers below refer to the canonical text in `research-artefacts/promptotyping-paper.md`, which the site renders directly.

### Method (paper sections 1–3)
The paper narrative as reading flow on its own page. Terms as glossary triggers. The template table lives on the Vorlagen page with click links to side-panel specs.

### Vorlagen (`#vorlagen`)
Table of all mirrored templates with function, recommended file name, Promptotyping type, version, and status (function column English, template names German as identifiers). A click opens the side panel with the full spec including frontmatter schema, section structure, a copy button for the `template:` block, and a raw-text link (machine address, ADR-10). One latest anchor per template, snapshot anchors on version changes. Built out as the specification hub per A19.

### Use cases (`#use-cases`)
Curated cards grouped and filtered by the use-case typology (A7, ADR-8 addendum). Each card names the project, use case, one sentence, and demo/repo/video links where cleared. Selected cards carry a deep-dive page in the side panel.

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
**Context.** Coding agents parse URLs structurally. `#promptotyping-document-data` reads as an anchor, `/promptotyping-document/data` as a path; both must work and neither may rank below the other. Two decisions ride along, an English path slug (because "Knowledge Document" is the concept term from Pollin 2026 section 3.3 and lives in the repos' `template:` URIs), and no version suffix in the latest URL (per ADR-2). **Choice.** Both forms canonical and equal. Subpath form primary in `template:` `url:`, hash form as `alias:`. The site renders the same content under both. Slug section `/promptotyping-document/{slug}` for all slugs. **Rationale.** Subpath is robust for agents that know structural paths, hash for in-browser navigation without a server roundtrip. An English slug keeps the addressing in one language with its concept source. **Effect.** A `404.html` with JavaScript path-to-anchor mapping rewrites subpath to hash. The site's own `knowledge/` documents carry both forms (A12). The earlier form `/vorlagen/{name}/{version}` is discarded (see [journal.md](journal.md), 2026-05-09).

### ADR-4 — Phases provenance lane as an aesthetic device (superseded by A2)
**Context.** The site should carry a methodical statement of the paper visually rather than through ornament. **Choice.** A narrow left column with monochrome per-paragraph markers by phase class. **Rationale.** Made the paper's phase distribution legible and served as navigation, consistent with the black-grey-white design system. **Effect.** The Critical Expert had to assign each paragraph a phase during mirroring. The lane was removed after the first deploy (A2); this ADR remains as decision provenance.

### ADR-5 — Vanilla, no build
**Context.** The prior repo state was already vanilla; tooling effort should stay minimal. **Choice.** HTML5/CSS3/JS without a build step, marked.js vendored. **Rationale.** GitHub-Pages-native hosting works without configuration, `git clone` suffices to run locally, no npm, no bundler, no TypeScript compile. **Effect.** No code splitting or tree shaking; re-evaluate if the JS grows past roughly 100KB.

### ADR-6 — Drop the Vault-Explorer module entirely
**Context.** The old Living Paper had three interactive modules, Context-Rot-Viz, Vault-Explorer, Sycophancy-Trap; the plan first kept the Vault-Explorer. **Choice.** Drop all three. **Rationale.** They are didactic gadgets rather than method necessities; two are animations that distract in a calm reading environment, and the Vault-Explorer would have needed a `mock_vault.json` substrate that does not pay off when the paper's own reading flow already shows the Knowledge Documents. **Effect.** Simpler code, focused on reading plus three useful modules, Frontmatter-Inspector, Case-Study-Filter, and the term index added on 2026-07-26 (A25). The third one earns its place on the same criterion the other two do; it stands in for the full-text search the site declined and answers a question the reader actually has.

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
