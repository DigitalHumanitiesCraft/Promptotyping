---
title: Specification
project:
  name: Promptotyping Site
  repository: https://github.com/DigitalHumanitiesCraft/Promptotyping
status: complete
language: en
version: "1.0"
created: 2026-05-09
updated: 2026-11-14
authors: [Christopher Pollin]
generated-with: Claude Code (Claude Opus 4.8, Claude Opus 5.5)
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

## Manuscript publication boundary

The paper is maintained outside this repository and will be published in the journal. The manuscript left the repository and GitHub Pages on 14 October 2026, and on 28 October 2026 everything bound to it followed, the paper specification, the review tooling, the figures, the submission report and the manuscript audits in the vault (operator decision). The site renders no manuscript text and carries no paper page. Since the author decision of 28 October 2026 it also states in its own words the definitions it shares with the manuscript, and its glossary sources name the site page or repository document that carries a definition in place of a paper section. Earlier commits and historical publication records are retained, so the removal does not undo prior public availability. Requirements below that served the paper view are retired and keep their numbers.

What the site must do. The site is a specification documentation showing one page at a time, with the navigation tree as its table of contents; the glossary, the embedded templates, the case-study cards, the vault view and the side panel serve it. This document states the requirements and the design decisions. How the site is built is in [architecture.md](architecture.md); how it looks and behaves is in [design.md](design.md).

## Scope and the division of roles

The site says what Promptotyping is and how it is applied. The paper, maintained outside this repository, says why the practice is built the way it is and whether it holds. The rebuild that established this division ran as work packages AP1 to AP8 under the operator decision of 2026-07-25 and was completed the same day; the packages are spent and their record is in [journal.md](journal.md) and in the git history.

Four things stay out of scope. No bilingual site. No build step. No colours outside the design system. No modules beyond those A11, A7, A25 and the vault view name. The introduction page of A47 is a separate page outside the portal and the one bounded exception to the first and third rule.

One item of the target state is still undecided. The mandatory frontmatter core is carried by this knowledge base with six fields while the published convention describes it alongside, and settling that on one version is an operator decision rather than an implementation gap.

## Requirements

### A1 — Paper as reading flow (retired)
Retired 2026-10-28 with the manuscript-bound material (operator decision). The site renders no manuscript text; the number stays reserved so older references keep their meaning.

### A2 — Phases provenance lane (removed)
A left lane that marked each paragraph by its Promptotyping phase was removed after the first deploy (operator decision 2026-06-10). Legend, mobile phase bar, hover tooltip, and filter mode are gone from HTML, CSS, and JavaScript. The `{:.phase-*}` tags left the content with the revisions that followed, and the marked extension that had stripped them was deleted on 2026-07-27 once a sweep confirmed the tags were gone. The rationale survives as a decision record in ADR-4.

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
| Part of the specification | `#application`, `#vorlagen`, `#konvention-v0.1`, `#artefakt`, `#verifikation` | the same slug as a subpath |
| Convention | `#konvention-{version}` | `/konvention/{version}` |
| Glossary | `#glossar` | `/glossar` |
| Overview | `#overview` | `/overview` |
| Use cases | `#use-cases` | `/use-cases` |
| Practice entry | `#praxis-{slug}` | `/praxis/{slug}` |
| Skill (retired, lands on the start page) | `#skills-{slug}` | `/skills/{slug}` |
| Tutorial | `#tutorial` | `/tutorial` |

The slug set for Promptotyping-Documents is `index`, `project`, `data`, `specification`, `user-stories`, `action-layer` (ADR-9), `architecture`, `technology`, `domain-knowledge` (English slug, ADR-3), `design`, `testing`, `verification`, `journal`, `handoff`, `plan`, `report`, `integration`. The canonical source of each version is the `version` field of the mirror and `assets/data/promptotyping-documents.json`. The latest anchor is the primary and only address point; a snapshot sub-anchor is issued only when a template's version changes, as an additional hash fragment on the same section, without its own subpath. Acceptance criterion. `/promptotyping-document/data` and `#promptotyping-document-data` both lead to the same rendered template.

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
Every constitutive term in a long-form reading flow is a glossary trigger with a dotted underline. Since the paper view left the site, no page carries such a flow, and the trigger path stays available. Hover after a delay of 400ms, a click, or Enter shows a tooltip carrying the term, its short definition, and a link to the full entry under `#glossar-{slug}`; Escape, a click elsewhere, or leaving the trigger closes it. The click used to open the right side panel with the full definition, and that path was dropped on 2026-07-26 by operator decision. The reason is that the panel took over the whole right edge for three lines of text and covered the passage the reader had just come from, while the full entry is one link away on a page that carries every term anyway. The tooltip stays open while the pointer is inside it, since the link would otherwise be unreachable. Touch devices have no hover, so the click is the only way in and the toggle behaviour is what makes it usable. The glossary is also reachable as its own anchor `#glossar`. Since 2026-07-29 the tooltip carries the entry's sources between the short definition and that link, as the resolvable links A34 describes.

### A7 — Use-case gallery
Amended on 2026-11-10 by the owner's review: the page head has three levels, title with one sentence, one filter over the five functions and the list, without the status line, the demo checkbox and the notes under the group headings. Each entry has three levels, name, one sentence and one line of function and links, all of the same form (Live, Code, Video, Details).

A dedicated `#use-cases` section holds the gallery of documented projects. It breaks into blocks by what a case argues for and orders within a block by the epistemic function of its interface; the filter bar is primary over those five functions and secondary over demo availability. Data source `assets/data/case-studies.json`.

Admission is decided by what a card lets a reader check (operator decision 2026-07-26). Every project of the paper's case comparison has a card, because a reader who comes from that comparison to verify a claim has to find the project. Beyond the evidence inventory the gallery carries the projects the practice grew out of and the teaching formats on which its teachability rests. A project that supports no claim about the practice has no card, which is why a strategy game built with the same tooling stays out.

That criterion replaced an earlier curation whose exclusion notes had gone stale. Three projects were held out for want of client clearance and were found on 2026-07-26 to be public, two as repositories with working demos and the third as the paper's Medieval Legal Transactions with public video documentation. The Aldersbach monastic accounts stay although the paper dropped the case as too old, because the genealogy is what they carry (operator decision 2026-07-25).

Every case carries a depth page, and its length follows the role. A case in the evidence or further block carries five sections, context and research question, data, approach, methodological contribution, and limits. A case in the genealogy or teaching block carries three, context, contribution, and limits, because for a recorded session the approach is the subject itself and the data basis carries nothing. The limits section is compulsory in both forms, since a case report that names only what worked argues for the practice instead of documenting it. Addresses live on the card alone, so a depth page never repeats them.

No reduced cards exist. The form was specified for a project under client clearance that may name no data and no address, and when the five candidates were checked on 2026-07-26 four turned out to be publishable and the fifth is not named in the paper, so it has no card at all. The form stays specified here for the next such case.

Two things stay out of a depth page. Volatile quantities, meaning any figure that moves as the project continues, which covers document counts, file counts, test counts, corpus sizes and the number of views an interface offers; the page states the matter qualitatively or points at the source of truth that holds the current figure. And narrative detail that carries no argument, the session story and the anecdote about how a defect was found. Fixed defining figures stay, among them a period such as 2010 to 2018, a year, and a count the source itself fixes such as the verses of an edited psalm.

The rule on volatile quantities binds the card as well (operator decision 2026-07-26). Card and depth page carry the same statement about a project, so a rule that binds one carrier leaves the figure standing on the other, and a reader who goes no further than the gallery is handed the number that has since moved. On a card it applies to all four text fields, `summary`, `data`, `artifact` and `insight`.

The gallery ran on a nine-value vocabulary of its own until 2026-07-26, invented for the site and at one point misattributed to a paper section. It is gone (operator decision 2026-07-26), and both grouping and filtering now use the five epistemic functions of the site's own typology. Three things thereby come to mean one thing, the block order, the filter chips and the hue on the card edge, where the vocabulary and the colour had previously encoded different dimensions on the same card. The price is a loss of description: a value such as data rescue and transformation said something about Klawiter that its functions, verification and capture, do not, and that description now lives in the card summary.

Two dimensions remain, and they are orthogonal on purpose. The epistemic function is a property of the artefact and answers what the interface is for. The role is a property of the argument and answers what the case is evidence for, with the values evidence, genealogy, teaching and further, their labels and one-line notes held in `role_labels` and `role_notes`. The gallery breaks on the role because a genealogy prototype standing beside a production pipeline as an equal makes a false claim about the practice, and it orders on the function because the function says what each artefact within a block is for. The typology is the site's own, since the paper 1.0 defines research artefacts by function without sorting them into types.

### A8 — Embedded YouTube videos
Part 1 on the Beispiel-Workflow page, where the worked case runs, part 2 on the tutorial page (operator decision 2026-07-31: the paper page carries the academic text alone, and the demo video belongs to learning the practice). Until then part 2 sat in the paper's evidence section at the VetMedAI case, which the promoted five-chapter text no longer carries. Both run from the `youtube-nocookie.com` variant with no tracking before the click.

### A9 — DHCraft design system
Amended on 2026-11-10 by A49: palette and fonts follow the shared DHCraft tokens; the function hues, the signature band, the dark theme toggle and the bottom sheets stay.

Black on white, Inter for text, Consolas for code, no decorative elements. Unchromatic throughout, with two bounded exceptions decided on 2026-07-26: five muted hues that encode the epistemic function of an artefact, and one prismatic signature band that encodes nothing. A dark theme applies the system preference and can be overridden by a toggle. Side panels collapse to bottom sheets on mobile. Full token set, the grounds for the colour rules, and behaviour in [design.md](design.md).

### A10 — Vanilla tech stack
No framework, no build step. HTML5/CSS3/JS, marked.js v9.1.6 and js-yaml v4.1.0 vendored, GitHub-Pages-native hosting. Acceptance criterion. `git clone` and opening the site over a static server renders it locally. Details in [architecture.md](architecture.md).

### A11 — Frontmatter-Inspector as interactive self-demonstration
A module in the Vorlagen section with a textarea for the YAML frontmatter of a foreign `knowledge/` document. The inspector parses the block, extracts `template.url` (or `template.alias`), validates it against the site anchor schema, and opens the side panel with the rendered template. A default frontmatter with a latest URL is prefilled. On an invalid URL it shows the expected schema; when a snapshot anchor points to a missing version it falls back to the latest anchor with a warning. Implementation in [architecture.md](architecture.md).

### A12 — Cross-repo consistency, the site demonstrates rather than advertises
The site's own `knowledge/` documents carry the `template:` field and each links to its own template URL on the live site, the subpath form in `url:` and the hash form in `alias:`, both canonical (A4). The site demonstrates the practice on itself.

### A13 — Specification front page
Superseded in its page content on 2026-11-10 by A48; the address `#overview`, the legacy aliases and the Markdown substrate stay.

Extended on 2026-07-29 by A32. The five numbered parts are sections of one specification page and remain continuously visible in its navigation subtree.

The start page is the specification front, addressed `#overview`. It states what Promptotyping is and routes readers by their goal. Understanding leads to Application, evaluation leads to the use cases and the Vault, and application leads to the tutorial, canonical skill, and templates. A compact operational account and keyed status block complete the page. The five normative parts appear once in the permanent navigation subtree and are not repeated in the page body. Three passages moved away on 2026-07-26, since carrying them twice made the landing page repeat the page behind it. The four forms of work went to part 1, the scaling statement to part 1 under "Two modes", and the document-type classification and the artefact default fell without replacement in favour of parts 3 and 4. Substrate `_content/overview.md`. The overview and its first normative destination use English canonical addresses; `#ueberblick`, `/ueberblick`, `#anwendung`, and `/anwendung` remain route aliases.

### A14 — Practice section (practice extensions)
A `#praxis` section with the empirically grown practice extensions from the vault knowledge base (verification milestones, Promptotyping interfaces, subagents and role simulation, script-versus-LLM separation, knowledge curation, demo-repo reduction, claims verification, epistemic status of user stories, template catalog). Each entry has a stable anchor `#praxis-{slug}` and names its documented origin case. Substrate `_content/praxis.md`.

### A15 — Skills and system prompts (retired)
Retired on 2026-11-14 (operator decision). Until then a `#skills` section carried the skill and the two reusable system prompts for coding and writing as copyable originals, with the anchors `#skills-promptotyping`, `#skills-coding` and `#skills-writing` and the substrate `_content/skills/`. The skill lives in its own repository (A42), and neither it nor the prompts are published here. `#skills-promptotyping` resolves to the start page's Skill section `#start-example`, and `#skills` and the other `#skills-{name}` addresses land on the start page (V18).

### A16 — Ninth template, Action-Layer
The Action-Layer template (`CLAUDE.md`) is published under the slug `action-layer` (namespace decision ADR-9). It is released and carries mirror status `complete`, with no draft banner.

### A17 — Working-environment section
A `#arbeitsumgebung` section between skills and glossary with two short parts, the Obsidian vault as knowledge environment and the AI harness and skills (Claude Code as harness, a link to the skill repository and the process videos). Substrate `_content/arbeitsumgebung.md`, routing `/arbeitsumgebung` via `404.html`.

### A18 — Site header, footer, video integration
Amended on 2026-11-10 by A49: the header carries the watercolour mark beside the wordmark at 2rem, and the footer is the shared footer block with publisher, licence with the logo excluded, source, version, machine address and implementation.

A thin fixed header carries the wordmark plus the kind marker `Specification` left and the theme toggle plus the Repository link right; the Paper link was dropped on 2026-07-26 because the tree carries it. No mark sits beside the wordmark. Both the DHCraft watercolour and `promptotyping-logo.png` were tried there and dropped, because a chromatic detail image at 22 pixels reads as a smudge and would be the only hue on the page that means nothing. The signature band runs along the foot of the header. The footer uses an auto-fitting grid with four current columns on `--code-bg`: carrier and licence, addresses and machine access, the state of the specification, and implementation. The implementation column identifies Digital Humanities Craft, Claude Code with Fable 5 and Opus 5, Codex with GPT-5.6 Sol, and Promptotyping. The watercolour carrier mark also supplies the favicon; its footer instance is decoded asynchronously. `promptotyping-logo.png` remains the OpenGraph preview. All process videos play without leaving the page, as click-to-load facades over `youtube-nocookie.com`.

### A21 — Page status line
Informative pages carry a head block under the title with the registry note, standing, version, date, and machine address where available. The keys read Standing, Version, Updated and Source. Standing comes from the page registry in `registry.js`, the remaining fields from the substrate frontmatter or, for generated pages, from the registry. Added 2026-07-26.

Extended on 2026-07-29 by A32 and reduced on 2026-08-25. The Specification page carries no explanatory tagline or standing line, since the title and permanent five-part subtree already establish both. Each part carries only version, date, and source metadata under its heading. Part taglines and decorative rules are absent.

### A22 — Colour that carries meaning, and the dark theme
Amended on 2026-11-10 by A49: the brand accent marks the primary action, focus and links; the function hues remain the only colour that encodes a category.

Colour encodes exactly one thing, the epistemic function of an artefact, that is the five interface categories of the site's own typology on the Artefakt page. The hue appears on the function list of the Artefakt page and on the left edge of a use-case card, and the category always stands there as a word as well. One prismatic signature band sits at the foot of the header, once per page, and encodes nothing. The dark theme is a token swap that follows the system preference, is overridden by a toggle, and is applied before first paint from `localStorage`. Grounds and token values in [design.md](design.md). Added 2026-07-26.

### A23 — Table of contents on the paper page (retired)
Retired 2026-10-28 with the manuscript-bound material (operator decision). The site renders no manuscript text; the number stays reserved so older references keep their meaning.

### A24 — Focus on page change
A page change moves the focus into the content. The host of the target page carries `tabindex="-1"`, receives the focus programmatically, and shows no focus ring while doing so, because it is never reachable by Tab. Resolving the initial hash on load leaves the focus alone, so nothing is stolen from the header. The focus call must not overwrite the scroll position of a deep link. Without this a keyboard user lands back at the top of the sidebar after every navigation click. Added 2026-07-26.

### A25 — Term index in place of a full-text search
The glossary page carries, above its entries, an index that connects every glossary term with the pages on which it occurs, with a filter field over the terms. It is built at runtime from `assets/data/glossar.json` against the page containers mounted in the DOM and fetches no further source. A full-text search was weighed and declined on 2026-07-26; the three audiences of [project.md](project.md) arrive with an address, resolve a `template:` URI, or read a flow, and none of them searches. What the site lacked instead was the path from a term to the place that uses it. A term that the index reports nowhere outside the glossary is a finding about the site, and the index shows it as such. Added 2026-07-26. Content loaded from another repository is not site text and stays out of the index; from 2026-10-19 to 2026-11-14 that was the canonical skill rendered under `#skills-promptotyping` (A42), and since the retirement of the Skills page no such content is loaded.

### A27 — The tree carries no group labels
Retired on 2026-11-10 with the tree by A50.

The sidebar carries the specification proper under its heading, since the part numbers only mean something under one, and every other page below it as a flat list without group labels (operator decision 2026-07-26). Five group labels over fourteen pages read as more structure than the site has, and two of them, Evidence and Tools and practice, are abstractions a first-time reader cannot yet place. The generated index that formerly repeated the five parts on the start page was removed on 2026-08-25. The permanent specification subtree now carries that ordered navigation once.

Amended on 2026-07-29 by the merge recorded in A32. The heading over the specification block went with the merge, because the block it named had shrunk to two entries while the part numbers moved into the subtree under the second of them. The tree is now one flat list per group run, with a gap between the runs and no label over any of them. The ban on group labels stands, and the gap is what lets the pages that answer the same kind of question read as belonging together. The one-line note per entry was rewritten in the same move, so that each page says what distinguishes it from its neighbour in the run.

### A28 — The site checks its own claims
`tools/check_consistency.py` decides by rule what the site states about itself in more than one place, that the catalogue and the convention agree on every document type, that catalogue and template folder cover each other with held-back slugs named, that the slug list in `CLAUDE.md` is complete, that the gallery holds its own conditions, meaning depth pages and cards cover each other and both closed vocabularies are respected. The interface typology lives in the gallery data alone. With `--check-urls` it also resolves every address a card publishes; that pass is opt-in because the script runs before every commit and fifty network round trips would make that unusable. It exits non-zero on any failure. [verification.md](verification.md) records what is checked against what, with the verdict, and what stays with the Critical Expert because agreement in substance is not decidable by rule. Before 2026-07-26 the site specified the verification function in part 5 and ran no check of its own statements, while the vault under it had one from the start. Added 2026-07-26.

### A29 — Light is the first view
The site opens in the light theme regardless of the system preference (operator decision 2026-07-26). The theme prelude in the head always writes a `data-theme` attribute, taking the stored choice where one exists and `light` otherwise, so the attribute is set before first paint and a reader who chose dark never sees a white flash. The system preference still reaches the stylesheet through its `prefers-color-scheme` block, and the always-set attribute means that block no longer decides the first view. The theme control remains the way to dark, and the choice persists in `localStorage` under `promptotyping-theme`. Added 2026-07-26.

### A30 — A citation lands on its reference entry (retired)
Retired 2026-10-28 with the manuscript-bound material (operator decision). The site renders no manuscript text; the number stays reserved so older references keep their meaning.

### A31 — Tutorial page, a guided first iteration
Amended on 2026-11-10 by A51: the copyable prompts are short sentences in the reader's own words, and the procedure behind them stands in the skill.

A `#tutorial` page that directs a reader through their own first Promptotyping iteration, from a structured dataset they bring to an accepted and versioned first promptotype. It differs from the worked workflow, which narrates a completed case; the tutorial instructs the reader's own pass (operator request 2026-07-29).

The didactic form is constructive. Each step carries the same four elements, the goal of the step, the concrete action with a copyable prompt where the action addresses the agent, the state the reader should now be in, and a self-check the reader can decide alone. The self-checks operationalise the practice's own criteria, among them the falsification probe on `data.md` after Exploration, the fresh-instance test as the completion criterion of Distillation, and the requirement that acceptance names its documented grounds. Prompts render with the copy button the skills page already uses.

The page is informative, English, substrate `_content/tutorial.md`, machine address `https://dhcraft.org/Promptotyping/_content/tutorial.md`. Anchor `#tutorial`, subpath `/tutorial`, which resolves through the existing bare-page rule with no change to `404.html`. Step headings mint their in-page anchors at render time, so a later rewording of a step heading needs the same alias discipline as A26 records for the practice entries. No new module; the page is content rendered like every other content page.

Acceptance criterion. A reader who arrives with a structured dataset, an agentic coding tool, and competence in their own material can follow the steps in order, knows at every step what done looks like, and leaves with a repository whose `knowledge/` folder, artefact, and journal entry identify a first promptotype.

### A32 — The specification is one page in five parts
The five numbered parts are sections of one page addressed `#specification`, subpath `/specification` (operator decision 2026-07-29, package F9 of [historical frontend plan](../snapshots/frontend-plan-history-2026-09-05.md)). A reader who wants the specification reads one document from application through verification, and the tree entry Specification carries the five as a permanent subtree. The start page keeps its own address and stays a page of its own, since it is the front of the specification rather than a part of it.

The five section ids are `application`, `vorlagen`, `konvention-v0.1`, `artefakt` and `verifikation`. The English `application` id replaced the former canonical `anwendung` id on 2026-08-25; the historical hash and subpath resolve through `LEGACY_ROUTE_ALIASES`. The registry decides this before the DOM. A registry entry with a `parent` field is a part instead of a page, `pageForAnchor` answers with the page a part sits in, `showPage` accepts either and shows the page, and `resolveTemplateUrl` accepts a canonical or legacy bare slug. The two anchor families below the Templates and Convention parts continue to resolve unchanged.

Each part keeps its own substrate and compact source metadata (A21 extended). The part headings move down one level once the parts are rendered, so the merged page carries a single H1; nothing addressable moves with them, because heading ids are minted for the paper alone.

Acceptance criterion. `/application`, `/vorlagen`, `/konvention`, `/artefakt`, `/verifikation` and their hash forms lead to the specification sections. `/anwendung` and `#anwendung` lead to Application and expose the canonical `#application` address. A template row still opens its side panel, and the frontmatter inspector still resolves a pasted `template:` block.

### A33 — The tree carries its subtrees permanently, and nothing collapses
Amended on 2026-11-10 by A50: the tree is retired, and the rule that nothing collapses stands.

The specification entry of the tree shows its inner structure, the five parts (operator request 2026-07-29, package F1). The subtree stands at all times. Scrolling the reading column moves a current marker over it, set as a class and as `aria-current="location"` by one `IntersectionObserver` over the band under the fixed header, so a reader always sees where in the specification they are. The paper subtree that stood beside it left with the paper view on 2026-10-28. This is navigation logic and belongs to the registry, so no module was added.

Nothing in the interface opens or closes (operator decision 2026-07-29). A sweep on the same day found two devices that reveal something on a click, and both stay, because neither hides text the page already carries. The side panel slides in over 200ms and becomes a bottom sheet below 860px, which is the design system's one animation. The video facade of A8 loads an embed on the click that a reader has to make anyway, since nothing reaches YouTube before it. No third device was found.

Below 860px the tree stands above the page instead of beside it, so every entry of it is scrolled past before the text begins. There only the subtree of the page being read stands. That is a width rule and carries no control.

No third column with the headings of the active page returns.

Acceptance criterion. Opening `#artefakt` marks the corresponding tree entry as current, scrolling on into the next section moves the marker, and switching to another page leaves no marker behind.

### A34 — A glossary source is a link wherever the site holds its address
Every entry of `assets/data/glossar.json` carries a source list in place of the free-text line it carried until 2026-07-29 (package F2 of [historical frontend plan](../snapshots/frontend-plan-history-2026-09-05.md)). A source states its kind, its display text and the anchor it resolves to. Three kinds exist, an assertion of the grounded vault, a page or block of this site, and a carrier the site holds no address for, which keeps its wording and stays text; paper sections and reference entries became text sources when the manuscript left the repository. The curation runs entry by entry and was checked against the real inventory, meaning the assertion files under `vault/30_assertions/` and the anchors the page registry mounts. No address was invented for a carrier that has none, among them the vault concept documents that live outside this repository.

The tooltip and the glossary page render the list as links. `tools/build_glossar.py` renders it into the Markdown mirror as hash links, which brings the mirror under the anchor check of A28 by the same path every other `_content` file takes. Two further things hold by rule, that an entry names at least one source and that a kind and its anchor family agree.

Acceptance criterion. A source line in the tooltip and on the glossary page lands on the claim or page it names.

### A35 — The case table links to the gallery (retired)
Retired 2026-10-28 with the manuscript-bound material (operator decision). The site renders no manuscript text; the number stays reserved so older references keep their meaning.

### A36 — The glossary classifies its terms, and the class is drawn as a shape
Every glossary entry states what kind of thing its term names, from a closed vocabulary of eight values (package F3 of [historical frontend plan](../snapshots/frontend-plan-history-2026-09-05.md), extended on 2026-09-27). The values are form of work, practice, document function, role and authority, artefact and interface, checking and acceptance, failure mode and limit, and infrastructure and environment. Their wording stands in `_meta.kategorien` of `assets/data/glossar.json`, which makes the vocabulary data, and the mark drawn for each stands as `CATEGORY_MARKS` in `pages-glossar.js`, which makes the mark presentation. `tools/check_consistency.py` holds the two against each other, so a value can neither lose its mark nor acquire one that nothing names.

The mark is one geometric form per value, inline SVG at twelve pixels with a 1.25-pixel stroke in `currentColor` and no fill. It carries no hue, because hue on this site encodes the epistemic function of an artefact and nothing else (A22). The category word stands beside the mark wherever it appears, so the shape is never the sole carrier (WCAG 2.1, success criterion 1.4.1). Tooltip, glossary entry and term index render the same pair, and the register carries it as a column its filter field searches alongside the term and the pages. Grounds for the shape encoding and the form per value are in [design.md](design.md).

Acceptance criterion. Every entry shows exactly one mark with its category word, the register narrows to a category when its name is typed into the filter, and no mark carries a colour.

### A37 — The vault page carries a secondary grounding network
The vault page keeps its list as the primary form and the default, and adds a network view over the grounding chain, claim to distillate to source (package F4 of [historical frontend plan](../snapshots/frontend-plan-history-2026-09-05.md)). The view answers what rests on what and nothing more, which is its acceptance guardrail as stated by the operator on 2026-07-29. One topic renders at a time, chosen from the seven topic maps, because a single canvas over the full claim set shows edge tangle in place of grounding. The layout is three static columns of vanilla SVG in `pages-vault.js`; the container scrolls, nothing is simulated, nothing animates, and hue is absent (A22). The source layer that the edges need entered `assets/data/vault.json` through `vault/tools/build_site_index.py`, the vault's own index tool, and the result is committed as the site's static data.

Hover and focus light a node together with everything its anchors connect, as a class switch. A claim node leads back to the claim in the list, which is where the published `#vault-{slug}` address resolves; a deep link therefore switches the page to the list whichever view the reader left behind, so every published claim anchor keeps resolving in both view states. Distillate and source nodes open their Markdown carriers in the repository. The nodes are focusable and named for assistive technology, and the view switch is a button group with pressed states.

Acceptance criterion. The operator accepts the first pass; the standing test is that a reader can pick any claim in the network and reach, within one interaction each, the distillates it rests on, the sources beneath them, and the claim's own list entry.

### A38 — Part 5 is titled Checking
The fifth part of the specification displays as Checking (operator decision 2026-07-31); its anchor `#verifikation` and subpath stay, since published addresses are identifiers rather than text (A26). The rename follows the paper's terminology reversal of the same day (steering document, decision 21), after which verification names the formal rule check and validation the expert judgement. A part titled Verification would have named one of its two kinds of check while covering both, and the document type Verification (`verification.md`) would have shared its name with a part that means something else; the umbrella word checking is the paper's own (Table 1). Changed are the registry label, the page title and heading, one link label on the Application page, and the source label in `assets/data/glossar.json`. The document-type name, the Verification Interface category, and Verification Milestone stand unchanged as proper names. Added 2026-07-31.

### A39 — The site describes the practice as knowledge-driven
Site self-descriptions call Promptotyping an iterative, knowledge-driven working practice for developing project-specific research artefacts from structured research data and maintained project knowledge (operator decision 2026-07-31). Until 28 October 2026 they called it a method; the author decision of that day replaced the word, because a method would claim an empirical validation that does not exist. The earlier self-descriptions diverged three ways, context-engineering method in the INDEX lexicon, document-driven context-engineering method in the glossary, knowledge-driven in the paper; the INDEX and the `og:description` also derived the artefacts from data and frontier LLMs, which put the model into the definitional slot the paper gives to maintained project knowledge. Context Engineering is one of the practice's engineering forms rather than its genus. Changed are the `og:description` in `index.html`, the overview page's description line, the glossary entry (whose long text also takes the paper's current etymology wording and the validation term of decision 21), and the INDEX lexicon, which additionally gains the missing Promptotype entry. Added 2026-07-31. Amended on 2026-11-05 by the operator decision that adopted the three engineering forms of the paper 1.0, Knowledge Engineering, Context Engineering and Agentic Engineering, where the site had named Context Engineering and Agentic Engineering as the practice's two foundations. The amendment changed the README, this paragraph, the INDEX lexicon, the Distillation section of the Application page and the glossary entries Promptotyping, Context Engineering, Agentic Engineering and Distillation, and it added the entry Knowledge Engineering.

### A40 — The journal carries the open points, Handoff is superseded

The catalogue has seventeen slugs. `journal` is the Process template with the always trigger, and its template from version 0.7 opens with the section `## Open`, whose empty state is "Nothing open."; heading and empty state are fixed English strings in every language. `handoff` stays in the catalogue with its mirror and both addresses, marked as superseded by `journal.md`, because existing documents name it in their `template:` field. A repository that still carries `knowledge/handoff.md` moves its open points into `## Open` at its next handoff. Exceptional dated snapshots under `handoffs/` remain separate artefacts. Acceptance criterion. `tools/check_consistency.py` (V17) reports a catalogue in which `handoff` reads as an always document or is missing, and a journal template block without `## Open` and "Nothing open.".

Revised on 2026-11-14 after the vault revised the convention and the templates (operator decision with the project partner during the work on skill version 2). From 2026-08-21 until then, A40 made `knowledge/handoff.md` the mandatory Process Inbox of every project, with the empty state “Keine offenen Handoff-Punkte.” under `## Offene Handoff-Punkte` and the point fields `Received`, `Source`, `Target` and `Context`. This repository's own `knowledge/handoff.md` was empty and is removed with the operator's approval of 2026-11-14.

### A41 — Journal is the working diary

The Journal template is version 0.7. The journal opens with the section `## Open`, the complete current list of what the next session needs, rewritten at every handoff and reading "Nothing open." when nothing is open. Entries follow newest first, each for one substantively coherent step, and carry only the fields that have content: Anlass, Befund, Entschieden, Verworfen, Korrigiert, Geändert, Belege (English journals: Trigger, Found, Decided, Rejected, Corrected, Changed, Evidence). Operator judgements stand verbatim under Entschieden, a delegated decision names its origin, and every entry names at least one commit or other checkable evidence. Current status, accepted work not yet begun and detailed verification results remain in their responsible documents. Condensing begins when the older entries no longer help a reader understand the current state and uses no fixed threshold. It keeps `## Open` and the five newest entries, appends the unchanged wording of every older entry to `journal-archive.md`, which is only appended to, folds related older entries into milestone entries, and records itself in a `verdichtet` entry. Entries cited outside the journal, operator judgements, statements of origin, corrections, rejected alternatives and commit hashes are preserved verbatim. A journal without `## Open` receives it at its next handoff, and its earlier entries keep their form and order.

Revised on 2026-11-14 with the vault convention (A40). Version 0.6 of 2026-10-28 kept open points out of the journal, compacted semantically by disposing every substantive statement against the direct parent of the compaction commit, and created no archive document.

### A42 — The canonical skill follows the document semantics

The Promptotyping skill lives in the repository [DigitalHumanitiesCraft/promptotyping-skill](https://github.com/DigitalHumanitiesCraft/promptotyping-skill), which is its single source, with the skill folder `promptotyping/`, a README with the installation for each agent, a changelog and one tag per version (operator decision of 2026-11-14). This site describes the skill and links that repository, and it carries no copy of the skill and no skill archive. The skill is portable, so it names no path or rule bound to one machine.

The decision of 2026-11-14 revises A42 of 2026-11-10, which on an operator statement relayed by the coordinating session had placed the canonical skill in this repository under `skills/promptotyping/`, with agent metadata under `agents/`, and rendered its `SKILL.md` on the Skills page. That in turn had revised the decision of 2026-10-19, agreed with a project partner, which placed the skill in its own repository. The eval cases moved out of the package to `tools/skill-evals/` on 2026-11-11 and stay there; no check of this repository runs them.

Since version 2.0.0 (operator decision of 2026-11-14, taken with the project partner) the skill has five subcommands, `orient`, `explore`, `distill`, `curate` and `handoff`, each standing for a moment at which a person actually calls it. `SKILL.md` carries the definition, the terms and the rules for building and checking, and `references/` carries one file per subcommand. `orient` reads the state of the project, changes no file and names the next step. `explore` is the form of work Exploration, with Preparation at its beginning in a new project. `distill` models the findings as knowledge documents and writes the specification as epics and user stories. `curate` maintains the existing documents in three kinds among which the agent chooses, against the project, as grounding against knowledge outside it, and as review by an agent with a fresh context. It leaves the set of documents as it is, so refactoring is no part of the skill. `handoff` ends a session, writes the journal with the section `## Open` at its beginning and commits without pushing, and `handoff deep` curates first and condenses the journal, keeping the full originals in `journal-archive.md`. Preparation and Implementation have no subcommand. The operations Implement, Synthesise, Prune and the processing of an inbox, which the skill carried until 2026-11-14, are dropped as calls, and the calls `check`, `verify` and `compact` of version 1 remain valid. The skill no longer uses `knowledge/handoff.md`, because the journal carries what is open. The convention and the templates followed in the vault on 2026-11-14, and their mirrors, the catalogue and this repository's own knowledge base followed on the same day (A40). Which repository is the source, left open in issue 6, is settled by the decision of 2026-11-14 above.

The start page names the five subcommands and links the skill repository with its README, changelog and tags, and the Skills page is retired (A15). Acceptance criterion. `#skills-promptotyping` resolves to the start page's Skill section, and `tools/check_consistency.py` passes its skill group (V18). Until 2026-11-14 the Skills page fetched `skills/promptotyping/SKILL.md` from the same origin and offered controls for copying and downloading it.

### A43 — The side panel preserves modal focus and request ownership

The reusable side panel keeps keyboard focus inside the open dialog, closes on Escape, and returns focus to the control that opened it. Template rows retain their table semantics; a native button in the first cell provides the keyboard action while the full row remains a pointer target. An asynchronous Markdown response may update only the panel request that initiated it. Closing the panel or opening a newer panel invalidates an earlier pending response. Acceptance criterion. On a template's first uncached open, Shift+Tab from the close button wraps to the final panel control, Tab returns to the close button, Escape closes the panel and focuses the template button, and a response arriving after close leaves the panel closed.

### A44 — The portal supports three complete user scenarios

The primary path is Understand, Evaluate, Apply. Each scenario starts on the overview, reaches its evidence or working surface through a stable public anchor, and ends with an explicit continuation into the next relevant surface.

- **Understand.** A researcher opens Application, identifies the four forms of work and the role of the maintained knowledge base, then reaches the use cases and the Vault for the evidence.
- **Evaluate.** A researcher filters the Use Cases by epistemic function, opens a case's context, data, approach, contribution, and limits, then traces a load-bearing statement through the Vault to its grounded sources.
- **Apply.** A researcher follows the tutorial from prerequisites to an accepted first iteration, copies an agent instruction, reaches the canonical skill and its operations, and copies a suitable template block. The Working environment page explains how the vault, action document, harness, and skill relate.

Acceptance criterion. The overview exposes all three routes. The Application, Use Cases, tutorial, skill, templates, Vault, and Working environment surfaces link into their stated scenario without private project context. At desktop and mobile widths, the filters, case depth panel, Vault assertion panel, skill copy control, and template frontmatter control complete their documented actions without a console error. Static checks preserve the cross-links; browser verification decides the rendered interactions. Human comprehension and scholarly adequacy remain the participant evaluation of the public-release milestone.

### A45 — The portal supports a responsible fit and first-use decision

Application exposes a compact fit check derived from the practice's evidential scope. It distinguishes the conditions for a bounded iteration from the additional engineering competence required for dependable public or institutional operation, and it states the empirical limits of the current corpus. The site consistently calls Preparation, Exploration, Distillation, and Implementation recurrent forms of work. A repository-based `knowledge/` folder is the canonical public convention; inspectable and revisable alternatives remain methodologically possible.

The tutorial preserves the document boundaries defined by the templates. Step 1 records a minimal charter with provisional user stories in `project.md`; Step 3 transfers them into `specification.md`. Step 2 keeps qualitative, curated data knowledge in `data.md` and writes volatile quantitative profiles to a generated report. Step 3 invokes the canonical Skill's Distil operation; an agent without skill support reads the skill file first (amended on 2026-11-10 by A51, which retired the self-contained instructions). Step 6 assigns only mechanically decidable criteria to the agent and lists the remaining criteria for human judgement.

Acceptance criterion. A reader can decide whether a bounded Promptotyping iteration is responsible, identify which evidence is still missing for a comparative methods decision, and follow the tutorial without inventing a document destination or assigning scholarly acceptance to the agent. The canonical Skill, templates, Application, Overview, Glossary, tutorial, and Working environment use the same terminology and routing contract.

### A46 — The specification entry is compact and canonically English

Overview and Application own the English canonical ids, subpaths, and Markdown substrates `overview`, `/overview`, `_content/overview.md`, `application`, `/application`, and `_content/application.md`. The former `ueberblick` and `anwendung` hash and subpath forms resolve through `LEGACY_ROUTE_ALIASES` and are normalised to the English hash without creating another history entry.

Amended on 2026-11-10 by A48, which replaces the content of the Overview; the route contract of this requirement stands. The Overview presented the practice definition, the three goal routes, a compact operational account, and its status block. The five-part index that duplicated the permanent navigation subtree is absent. At a 1440 by 900 CSS-pixel viewport, the bottom of the status block is visible without scrolling. The Specification page carries its title and the five numbered sections; the page tagline, standing line, part taglines, and decorative horizontal rules are absent. Version, date, and source metadata may remain on each part.

Acceptance criterion. Canonical and legacy Overview and Application routes reach the same content, the address bar shows the English hash after legacy resolution, browser Back returns to the previous page, keyboard navigation reaches the five parts, and desktop and narrow layouts show no horizontal document scroll or console error.

### A47 — Introduction page for newcomers
A separate page under `intro/` (`https://dhcraft.org/Promptotyping/intro/`) explains the practice to readers without prior knowledge of Git, coding assistants or the specification (operator decision 2026-11-04, prepared for the workshop of 9 and 10 November 2026). It follows the method pages of the Second Brain Vault and Grounded Vault rather than the portal, so it carries the DHCraft corporate design and an English default with a German version under `?lang=de`. The portal remains the specification, its anchors and design are untouched, and the Overview links the page from its goal routes.

The page answers three questions in three parts. The hero states what Promptotyping physically is and for whom, and plays one synthetic round in seven named steps beside the project folder and a small prototype. The second part opens with setting up the agent and the skill and then gives the six tutorial steps under the names of the example, each with a short paragraph that ends in the reader's own check, one sentence in the copy field and what results, beside a folder that follows the step in view (amended on 2026-11-11 under A51, which retired the page's long prompts). The third part states what leaves the reader's computer, what the practice is and is not, and where the specification continues. Interaction and visual rules are in [design.md](design.md#introduction-page).

The example is invented. A family correspondence with partly uncertain dates becomes a timeline. The check finds that letters dated only to a year sit on 1 January, the finding is written into specification, design and journal before the code changes, and the next version draws such dates as spans. It shows the knowledge curation that distinguishes the practice from code generation, and its user story is the one the tutorial uses.

Acceptance criterion. From the page alone, a reader without prior knowledge can say what the practice is, retell the example round including the curation step, and name the first step on their own data, in both languages, on a 1440 by 900 desktop and a 390-pixel phone, with no horizontal scroll and no console error.

### A48 — The start page is the level from which the practice is reused
Operator commission of 2026-11-10, revised the same day in two rounds of the owner's review: one static page from which everything needed to reuse the practice is reached, compact and matter-of-fact. It follows the seven parts of a DHCraft method page in the brand-assets design document (`web/design.md`, Page structure of a method site, and the decisions of 2026-11-10). Under `#overview` stand the title with an abstract that defines the practice through Knowledge, Context and Agentic Engineering (owner wording of 2026-11-10), Figure 1 of the paper as the main figure without heading or caption, three short paragraphs of prose that define the figure's terms with links to Application, Checking, the glossary and the citation in the sentences, a drawn overview of the three document types with their files, the origin with its sources as links in one paragraph, Reuse with the fit check as a sentence, three steps and a separate block of files to download, the example as a numbered sequence of short sentences on the invented letters with what each yields (A51, which replaced the tutorial's prompts on 2026-11-10), and limits, licence and citation.

The page is static markup in `index.html`, so it reads without JavaScript, and its downloads work there too. `registry.js` adopts the existing section as a host, and `app.js` reads only the frontmatter of `_content/overview.md`, which stays the machine-readable twin and the source of the version in the footer. Every recurring entry has at most three visual levels, the step with its instruction, the copyable field whose head row carries label and copy button, and the result. Text to paste in the example stands in the instruction. A copyable field has a dashed frame set in from the text, sets its text in the system monospace at a measure of about 76 characters and a line height of 1.65, and carries an icon-only copy button with an accessible name, a visible focus ring, a check mark after copying and a status announcement. The seventh part carries limits and citation, and the licence stands in the footer. Headings stay on two levels.

The block of files offers the skill as one link to its repository (A42) and each template as a single download with the short condition of `mark` in `assets/data/promptotyping-documents.json`, and the templates together as an archive. `tools/build_downloads.py` builds the archive at delivery in the Pages workflow and locally into the ignored folder `downloads/`. The template entries, the five subcommand names with the link to the skill repository, the three cases and the archive are held against their sources by V24 in [verification.md](verification.md). Until 2026-11-14 the block also offered `SKILL.md` and a skill archive from this repository.

Acceptance criterion. From the start page alone, a reader can read the figure and its terms, start a first iteration, download every template singly or together, reach the skill repository, follow the example to an accepted promptotype and find citation and licence, at 1440 by 900 and at 360 pixels, light and dark, with JavaScript and without, without horizontal document scroll or console error. Scholarly adequacy and the owner's acceptance stay open.

### A50 — The start page is the site, and one further page carries the use cases
Owner decisions of 2026-11-10 in two steps: first the tree with eleven entries was retired, then the owner asked for one page in the core and at most one more. The header carries the shared `dh-head` block with brand, a static navigation of Reuse, Downloads, Example and Citation as anchors on the start page and Use cases as the one further page, and the tools. Every registered page stays mounted, so every published address resolves, and the pages outside the navigation are reached from links in the start page, the footer and the specification. The assignment and its reasons are these.

- Overview is the start page itself, so it needs no entry of its own and the brand links to it.
- Specification leaves the navigation and stays a plain reading page with a stable address, because the seventeen template mirrors carry `template:` fields with `/promptotyping-document/{slug}` and `#promptotyping-document-{slug}` that foreign repositories copy, the README and the knowledge base link `#promptotyping-document-data` and `#tutorial`, and the start page links Application, Checking and the templates page in its sentences; the paper itself links only a Markdown file under `_content/`. The footer links it.
- Templates leaves the navigation, since the download block of the start page offers every template, while the templates part of the specification keeps the frontmatter inspector and the full conditions.
- Glossary leaves the navigation, since the start page defines the figure's terms in its prose, and the page stays the target of the tooltips' Full entry and of the `#glossar-*` and `#konzept-*` addresses.
- Use cases stays the one further page, because it is a tool with a filter over the documented projects that the start page would only repeat. The three cases of the paper stand on the start page in the origin paragraph.
- Vault leaves the navigation, and the start page links the Grounded Vault in the repository, because it is a repository document; the explorer page stays for the `#vault-*` addresses.
- Tutorial, Worked workflow, Best Practices and Working environment were already left out on the same day and stay addressable long forms. Skills was left out too and was retired on 2026-11-14 (A15).

A32 and A33 remain for the inner structure of the specification page, whose five parts stand in one page, and A27 is retired with the tree.

### A51 — The example works through the skill in the user's own words
Owner decision of 2026-11-10: nobody works with long prompts to copy, and whoever uses Promptotyping loads the skill and speaks to the agent in their own words. The example on the start page therefore shows, for the letters project, one step per form of work or skill operation, each with the one or two lines a person says in the copyable field and one sentence on the file or state that results. The steps are Prepare, Explore, Distil, Prune, Orient, Implement, Check, Curate, Rebuild, Accept and version, Synthesise and Hand off. Installing the skill stays the first step of Reuse, and the example links it instead of repeating it, so that only that step depends on where the skill is published. A reader without a skill-capable agent gives the agent the skill's `SKILL.md` from the skill repository to read first.

The procedure the long prompts carried stands in the skill, in its sections Rules for building and Checking and in the reference files of its subcommands. Owner decision of 2026-11-14: the worked example leaves the start page, because less is more there. In its place the section lists the five subcommands with one sentence each, under the unchanged anchor `#start-example` and the heading Skill, and the introduction page keeps the played round. This revises the form of the example decided on 2026-11-10; the rule that a procedure stands in the skill and never in a prompt on the page holds. The tutorial gives the same kind of sentence for the reader's own data and keeps its explanations and self-checks. Each subcommand of the section links the skill repository for its procedure. Until 2026-11-14 each step named its skill section in a `data-skill` attribute, which V24 held against the headings of the local `SKILL.md`; with the skill outside this repository the attribute and that part of V24 are gone, and V24 holds the five names as a fixed list.

The introduction page (A47) follows the same form since 2026-11-11. What it carries beyond the start page is a guided entry for readers without prior knowledge, namely the played round with project folder and prototype, setting up the agent with a schematic window, the reader's own check in each step, what leaves the reader's computer, and the German version. Its notes leave the citation and the case list to the start page and link them.

Acceptance criterion. Every example step shows one sentence of at most two lines at 1280 pixels and its result, the Skill section names the five subcommands and links the skill repository, and no prompt on the start page, in the tutorial or on the introduction page restates a procedure the skill carries.

### A49 — The portal adopts the shared DHCraft design
Decision of the coordination on 2026-11-10, in the sense of the owner's request for one corporate design across the Promptotyping, Second Brain Vault and Research Mission Control sites. The portal loads `assets/dhcraft/dhcraft-tokens.css` and `assets/dhcraft/dhcraft-components.css`, unchanged copies of the brand-assets repository's folder `web/` (local commit `9d68bc1`), before its own stylesheet; it serves Sora and Instrument Sans from `assets/dhcraft/fonts/` and shows the watercolour mark `assets/dhcraft/dhcraft-mark-watercolor-128.png` in the header. The portal's colour, font and radius tokens resolve onto the `--dh-*` roles, so the dark theme follows from `light-dark()` and the existing toggle. Inter is retired and its files are deleted. Kept as project decisions are the five function hues, the signature band under the header, the side panel and the bottom sheet. The shared design document stays in the brand-assets repository with `status: draft` and is not copied, since drafts are not served. Two conditions lie with the owner before a push: the licence of the copied CSS and the logo, which the brand-assets repository still holds under all rights reserved, and whether the signature band and the introduction page's own token copy stay.

Acceptance criterion. Every portal page renders in Sora and Instrument Sans on the paper ground in light and on ink-deep in dark, with the watercolour mark in the header and the shared footer, without a runtime request outside the site and without a hex value outside the token blocks.

### A26 — The site is English
Every string the site shows is English, in British spelling (operator decision 2026-07-25, carried out 2026-07-26). That covers the page registry labels, the status line, every control, the nine content pages directly under `_content/`, and the text fields of `assets/data/glossar.json`, `assets/data/case-studies.json` and `assets/data/promptotyping-documents.json`.

Two sets under `_content/` are still German, and each for its own reason. Sixteen of the seventeen templates are vault mirrors whose translation belongs in a vault session together with their originals, so translating the repo copy alone would be the silent divergence `CLAUDE.md` forbids; the seventeenth, `technology`, has been repo-canonical since 2026-07-26 and stays German so that the catalogue reads in one language. The three German files under `_content/skills/`, which the language decision of 2026-07-25 exempted as teaching material, left the repository with the Skills page on 2026-11-14 (A15). The skill, maintained in its own repository (A42), is English. The seven case-study depth pages had no such reason and were carried over on 2026-07-26, onto the shape A7 prescribes, which ended the pass. The terminology of the distilled pages follows the glossary; the German distillate is superseded and is not maintained as a back-translation source.

Three bounded classes retain German identifiers. Published template, convention, artefact, checking, glossary and working-environment anchors remain stable where external documents address them. Template names remain unchanged because they stand in foreign frontmatter blocks, and the convention cites German file names from real repositories. The public Overview and Application routes are canonical English addresses since 2026-08-25; their former German forms remain compatibility aliases.

Two acceptance conditions follow. The five bold category names on the Artefakt page (`Verification`, `Exploration`, `Edition`, `Capture`, `Audit`, each followed by a full stop) are keys against `FUNCTION_SLUGS` in `pages-content.js`; translating them would switch off the colour encoding of the nominal scale without any visible error. And the `#praxis-*` anchors derive from the headings at render time, so translating a heading moves its address; six slugs moved on 2026-07-26 and are kept alive by `PRAXIS_ALIASES` in the same file. Any further translation of an anchor-bearing heading needs the same alias.

### A19 — Vorlagen hub
The `#vorlagen` section is the coherent hub of the practice specification (operator decision 2026-07-23). After the section head come four blocks with additive in-page sub-anchor IDs. A quiet text subnav over these four was built and removed on 2026-07-26, because it repeated the four headings standing directly below it; the sub-anchors hang on the blocks and resolve without it. The Promptotyping mark at the head of the page went in the same move, being a decorative element and a hue that means nothing, which is the reason it had already left the header.

- `#vorlagen-katalog` — the clickable template table.
- `#vorlagen-konvention` — a short abstract of the convention with a jump link to `#konvention-v0.1`; the convention itself is neither duplicated nor moved.
- `#vorlagen-maschinenzugriff` — the Frontmatter-Inspector and the machine-address paragraph under one heading.
- `#vorlagen-technology-baseline` — what a Technology Baseline is, that this repo carries one for the static-web-tool artefact family (status draft), with a link to the machine address `https://dhcraft.org/Promptotyping/_content/technology-baseline.md` and a repo-relative link.

The sub-anchors are additive in-page fragments, no new top-level anchor, no new subpath, no change to `404.html`. The Technology template (slug `technology`) entered `assets/data/promptotyping-documents.json` on 2026-07-26 and carries a catalogue anchor like every other template; the block described here is about the filled Technology Baseline of this repository, which is a different document and still a draft. Acceptance criterion. Every block under `#vorlagen` carries its sub-anchor as a directly addressable fragment, and each resolves without a subnav.

## Function per site section

### Vorlagen (`#vorlagen`)
Table of all mirrored templates with function, recommended file name, Promptotyping type, version, and status (function column English, template names German as identifiers). A click opens the side panel with the full spec including frontmatter schema, section structure, a copy button for the `template:` block, and a raw-text link (machine address, ADR-10). One latest anchor per template, snapshot anchors on version changes. Built out as the specification hub per A19.

### Use cases (`#use-cases`)
Curated cards grouped and filtered by the use-case typology (A7, ADR-8 addendum). Each card names the project, use case, one sentence, and demo/repo/video links where cleared. Selected cards carry a deep-dive page in the side panel.

### Concepts (anchors)
Concepts are linked to their glossary anchors, with full definitions on the glossary page (A6). Asymmetric Amplification, Critical-Expert-in-the-Loop, Scholar-Centered Design, Context Engineering and Epistemic Infrastructure carry glossary entries.

### Glossary (`#glossar`)
A dedicated section at the page end, alphabetically ordered. Per entry, term, short and full definition, source (with vault link). Same data source as the hover tooltips. The term index of A25 precedes the entries and is built from the same data.

## Decisions (ADR)

### ADR-1 — Single shell with stable anchor IDs
**Context.** The no-build site needs stable deep links while one static HTML shell hosts the Promptotyping portal. **Choice.** One HTML shell mounts the registered page containers and uses stable hash IDs; the registry reveals one page at a time. **Rationale.** This preserves direct addresses and GitHub Pages deployment without a server-side router. The paper keeps its continuous reading flow within its own page. **Effect.** Inactive pages remain mounted and hidden in the DOM, while side-panel content loads only when requested. OpenGraph metadata describes the portal as a whole. This wording incorporates the page-model decisions of 2026-07-25 and A32; the earlier interactive-paper rationale remains in the Git history.

### ADR-2 — Latest anchor primary, snapshot sub-anchor on version change
**Context.** Templates may be refactored later (for example `data` v0.1 → v0.2). Repos linking by `template:` URI need stability without a permanent URL per version. **Choice.** One latest anchor per template (`#promptotyping-document-data`, subpath `/promptotyping-document/data`). A later version change adds a snapshot sub-anchor on the same section (`#promptotyping-document-data-v0.1`, subpath `/promptotyping-document/data#v0.1`); the latest anchor always points to the current version. **Rationale.** Repos overwhelmingly link "the current template", so a latest URL without a version suffix is the natural address point; on a version change they follow automatically. Whoever cites a specific version appends a sub-anchor. **Effect.** A compact URL collection, one stable latest URL per slug. The earlier form `#vorlage-{name}-{version}` with its own subpath hierarchy is discarded (see [journal.md](journal.md), 2026-05-09).

### ADR-3 — Both URL forms canonical, English slug, latest without version suffix
**Context.** Coding agents parse URLs structurally. `#promptotyping-document-data` reads as an anchor, `/promptotyping-document/data` as a path; both must work and neither may rank below the other. Two decisions ride along, an English path slug (because the class name, Promptotyping Document at the time and Knowledge Document since 2026-07-31, is the concept term of the practice and the path segment lives in the repos' `template:` URIs), and no version suffix in the latest URL (per ADR-2). **Choice.** Both forms canonical and equal. Subpath form primary in `template:` `url:`, hash form as `alias:`. The site renders the same content under both. Slug section `/promptotyping-document/{slug}` for all slugs. **Rationale.** Subpath is robust for agents that know structural paths, hash for in-browser navigation without a server roundtrip. An English slug keeps the addressing in one language with its concept source. **Effect.** A `404.html` with JavaScript path-to-anchor mapping rewrites subpath to hash. The site's own `knowledge/` documents carry both forms (A12). The earlier form `/vorlagen/{name}/{version}` is discarded (see [journal.md](journal.md), 2026-05-09).

### ADR-4 — Phases provenance lane as an aesthetic device (superseded by A2)
**Context.** The site should carry a methodical statement of the paper visually rather than through ornament. **Choice.** A narrow left column with monochrome per-paragraph markers by phase class. **Rationale.** Made the paper's phase distribution legible and served as navigation, consistent with the black-grey-white design system. **Effect.** The Critical Expert had to assign each paragraph a phase during mirroring. The lane was removed after the first deploy (A2); this ADR remains as decision provenance.

### ADR-5 — Vanilla, no build
**Context.** The prior repo state was already vanilla; tooling effort should stay minimal. **Choice.** HTML5/CSS3/JS without a build step, marked.js vendored. **Rationale.** GitHub-Pages-native hosting works without configuration, `git clone` suffices to run locally, no npm, no bundler, no TypeScript compile. **Effect.** No code splitting or tree shaking; re-evaluate if the JS grows past roughly 100KB.

**Re-evaluation, 2026-08-22.** The thirteen first-party JavaScript files total 148,789 bytes raw and approximately 49,840 bytes when each file is gzip-compressed at level 9. Their split follows runtime responsibilities and lets the browser cache unchanged files independently. The site also requires the mounted document set for stable deep links and the generated term index. A build step would add a deployment dependency without removing that content requirement. The No-Build choice therefore remains proportionate; transfer size or measured runtime regression, rather than the raw-source threshold alone, will trigger the next review.

### ADR-6 — Drop the Vault-Explorer module entirely
**Context.** The old Living Paper had three interactive modules, Context-Rot-Viz, Vault-Explorer, Sycophancy-Trap; the plan first kept the Vault-Explorer. **Choice.** Drop all three. **Rationale.** They are didactic gadgets rather than method necessities; two are animations that distract in a calm reading environment, and the Vault-Explorer would have needed a `mock_vault.json` substrate that does not pay off when the paper's own reading flow already shows the Knowledge Documents. **Effect.** Simpler code, focused on reading plus three useful modules, Frontmatter-Inspector, Case-Study-Filter, and the term index added on 2026-07-26 (A25). The third one earns its place on the same criterion the other two do; it stands in for the full-text search the site declined and answers a question the reader actually has.

### ADR-7 — Frontmatter-Inspector as paste-live-render module
**Context.** The `template:` URI resolution is central but invisible to an outside reader; a plain URL input would only replicate the anchor click without showing the frontmatter indirection. **Choice.** A textarea for the whole YAML frontmatter block. The inspector parses, extracts `template.url` (or `alias`), validates against the anchor schema, and opens the side panel with the rendered template, prefilled with an example latest-form `template:` field. **Rationale.** Shows the whole mechanism in one step and makes machine readability concrete when a reader pastes a real foreign frontmatter. **Effect.** A standalone module `assets/js/modules/frontmatter-inspector.js`; js-yaml v4.1.0 vendored under `assets/vendor/js-yaml.min.js`. Details in [architecture.md](architecture.md).

### ADR-8 — Case-Study-Filter as module
**Context.** Many case studies are hard to navigate without a filter. **Choice.** A filter bar above the cards. **Rationale.** Practically needed at the gallery size. **Effect.** A standalone module `assets/js/modules/case-study-filter.js`, data source `assets/data/case-studies.json`. **Addendum 2026-06-10 (operator decision).** The primary filter is the use-case typology, secondary filters are interface type and demo availability; A7 records that the paper no longer carries the use-case typology. The genre vocabulary is internal working vocabulary and does not appear in the public UI. The gallery is curated (A7).

### ADR-9 — Action-Layer template as ninth slug under `/promptotyping-document/`
**Context.** The Action-Layer template addresses the repo-root `CLAUDE.md` rather than a `knowledge/` document; whether it needs its own anchor family was open (journal 2026-06-09). **Choice.** A ninth slug `action-layer` in the existing `/promptotyping-document/` namespace. **Rationale.** Function before filename. The template describes the action-layer function of a Promptotyping knowledge base; where the file sits does not change its membership in the catalog, and a separate anchor family would fragment the address schema. **Effect.** `_content/promptotyping-document/action-layer.md`, anchor `#promptotyping-document-action-layer`.

### ADR-10 — Static markdown URL as machine address, `.nojekyll` as condition
**Context.** Plan review 2026-06-10 found two things. GitHub Pages does not publish underscore directories without `.nojekyll`, so `_content/` would have been unreachable. And the subpath URLs did not meet their "robust for agents" purpose, because GitHub Pages serves `404.html` with HTTP status 404 and the content appears only after JavaScript, so a browserless HTTP fetch gets an error page. **Choice.** `.nojekyll` in the repo root. The static markdown URL `https://dhcraft.org/Promptotyping/_content/promptotyping-document/{slug}.md` is the documented machine address (mirror field `machine-url`, note in `_content/konvention.md`, note in the Vorlagen section). Subpath and hash stay the human-readable addresses; the `template:` field is unchanged. **Effect.** Agents get the markdown with HTTP 200 and no JavaScript. The vault convention is to adopt the machine address at its next update (open, vault-side).

## Out of scope
- **Parallel bilingual edition.** The public pages of the practice are English. Established German template mirrors and teaching materials remain the bounded exceptions, together with the introduction page of A47, which carries both languages from one text source.
- **CMS functionality.** The site is static, content changes through Git.
- **User accounts, comments, annotations.** Out of scope.
- **Automatic vault sync.** Manual mirroring on refactor.
- **Print layout.** Browser print CSS optional, not a focus.
