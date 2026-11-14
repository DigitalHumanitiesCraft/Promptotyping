---
title: Specification
project:
  name: Promptotyping specification
  repository: https://github.com/DigitalHumanitiesCraft/Promptotyping
status: complete
language: en
version: "2.0"
created: 2026-05-09
updated: 2026-11-14
authors: [Christopher Pollin]
generated-with: Claude Code (Claude Opus 5.5)
method:
  name: Promptotyping
  url: https://dhcraft.org/Promptotyping/
template:
  name: Specification template
  version: 0.3
  url: https://dhcraft.org/Promptotyping/templates/specification.md
topics: ["[[Requirements Engineering]]", "[[Decision Records]]", "[[User Stories]]"]
related: [INDEX, project, practice, architecture, design, journal]
---

# Specification

This document states what the repository must deliver since the operator's decision of 2026-11-14 to reduce it to one web page, the templates with their convention, the use cases and this published knowledge base. The requirements change rarely, the stories carry their status, the range of functions describes the page as it is to be, and the decisions grow and are never overwritten. How the repository is built is in [architecture.md](architecture.md), how the page looks in [design.md](design.md).

## Requirements

### Functional requirements

- FR-01. The repository publishes one web page at https://dhcraft.org/Promptotyping/. Acceptance criterion: the site has no second page in its navigation, and every further content is a Markdown file or an external link.
- FR-02. The page defines Promptotyping in the wording of the start page and of [practice.md](practice.md), shows the figure of the practice, names the four forms of work, the Promptotype, the three document types and the three kinds of checking, and states that the researchers decide. Acceptance criterion: the definition on the page, in the README and in `practice.md` is the same sentence.
- FR-03. The page says how to start, names the five subcommands of the skill (`orient`, `explore`, `distill`, `curate`, `handoff`) with one sentence each and links the skill repository. Acceptance criterion: the page restates no procedure the skill carries.
- FR-04. The page lists the eleven templates and the convention, each with the condition under which a project needs it and a link to its file. Acceptance criterion: each link resolves.
- FR-05. Each template and the convention are readable as raw Markdown under `https://dhcraft.org/Promptotyping/templates/<slug>.md`, with the slugs `action-layer`, `architecture`, `data`, `design`, `domain-knowledge`, `index`, `journal`, `plan`, `project`, `specification` and `testing`, and `convention` for the convention. Acceptance criterion: a request without JavaScript returns the Markdown with HTTP status 200.
- FR-06. The page leads to the documented use cases in `case-studies/`. Acceptance criterion: each case is reachable from the page.
- FR-07. The page presents `knowledge/` as the worked example, the Promptotyping project documented with its own templates, and links its entry point [INDEX.md](INDEX.md). Acceptance criterion: a reader reaches every document of the knowledge base from the page in two steps.
- FR-08. The page carries origin, limits, licence and citation. Acceptance criterion: it states that the practice has not been evaluated against other ways of working and that its transfer is open, and it gives the citation of `CITATION.cff`.

### Non-functional requirements

- NFR-01. Every string the site shows is English in British spelling. Measure: no German text outside quoted identifiers.
- NFR-02. The page reads without JavaScript, and every document it links opens without it. Measure: the page and its links work with JavaScript disabled.
- NFR-03. The site has no build step, loads nothing from a CDN at runtime and sends no request before a user action. Measure: the published tree equals the files in the repository, and the network log of a page load shows only requests to the site itself.
- NFR-04. The page meets the accessibility minima of [design.md](design.md) at 1440 by 900 and at 360 pixels, in light and dark. Measure: no horizontal document scroll and no console error at either width.
- NFR-05. The site serves only material meant for readers. Before a push that changes the site, the built output is checked for drafts, review markers, internal notes, personal data of third parties and material with unresolved rights. `knowledge/` is published as a deliberate exception and therefore follows the same rule. Measure: the check has run and its result is recorded in the journal.
- NFR-06. The site renders no manuscript text of the paper and carries no paper page. It states the definitions it shares with the paper in its own words. Measure: no passage of eight or more words matches the manuscript.
- NFR-07. Durable documents state changing quantities qualitatively or point to their source. Defining dates, versions and identifiers stay. For a case study this covers card and text alike.

## Epics and user stories

Persona. A researcher or project lead with structured data, a concrete question and an AI coding agent, who has not used Promptotyping before.

### Understand, judge and start

#### US-01 Understanding the practice

*As a researcher, I want to read on one page what Promptotyping is and how its parts relate, so that I can explain it to a colleague.*

Acceptance criterion: from the page alone, the researcher can name the four forms of work, the Promptotype and who decides on acceptance.

Status: proposal (agent, 2026-11-14), derived from the scenario Understand of 2026-08-22, decided at the operator's acceptance of the page.

Derivation: FR-02, FR-08, [practice.md](practice.md).

#### US-02 Judging the fit

*As a project lead, I want to see documented projects and the conditions under which an iteration is responsible, so that I can decide whether the practice fits my project.*

Acceptance criterion: the project lead reaches the fit check and at least one use case with its limits.

Status: proposal (agent, 2026-11-14), derived from the scenario Evaluate of 2026-08-22, decided at the operator's acceptance of the page.

Derivation: FR-06, [practice.md#fit-check](practice.md#fit-check).

#### US-03 Starting a first iteration

*As a researcher, I want to install the skill and take the templates I need, so that I can start a first iteration with my own data.*

Acceptance criterion: the researcher reaches the skill repository and the file of every template from the page.

Status: proposal (agent, 2026-11-14), derived from the scenario Apply of 2026-08-22, decided at the operator's acceptance of the page.

Derivation: FR-03, FR-04, FR-05.

## Range of functions

### The web page

Purpose. One page from which the practice can be understood, judged and reused. It was built on 2026-11-14 with the sections Skill, Templates, Knowledge, Use cases and Cite.

Data basis. The definition and terms of [practice.md](practice.md), the templates in `templates/`, the use cases in `case-studies/`, this knowledge base and `CITATION.cff`.

Interaction. Reading and following links. Copyable fields carry a copy button. Nothing opens or closes.

Limits. The page explains and points. The procedure lies in the skill, the structures in the templates and the history in the journal.

### The templates and the convention

Purpose. The fillable structures of the Promptotyping Documents and the rules they share, in English, under `templates/`.

Data basis. The eleven templates were translated from the German mirrors on 2026-11-14 (`10ac455`), and the rules of the six retired templates were carried into `testing`, `architecture` and `specification` (`3736f03`). The retired templates are `handoff` (superseded by the section `## Open` of the journal), `user-stories` (the stories belong in the specification), `technology` (a shared baseline is now a section of the architecture template), `verification` (claims carried outside the project belong in testing), `integration` (interfaces to other projects are a section of the architecture template) and `report`, which has no successor.

Interaction. A project copies a template, an agent fetches it from its address, and a document names the template it follows in its `template:` field.

Limits. The templates were translated and reduced on one day and have not yet been used in a new project in their English form.

### The use cases

Purpose. The documented projects on which the practice was built and tested, so that a reader can check a claim about the practice against a project.

Data basis. One text per project in `case-studies/`.

Interaction. Each case is reached from the page and opens as a document.

Limits. A project has a case only when it lets a reader check something about the practice, through evidence for it, its genealogy or its teaching. A case in the evidence group states context and question, data, approach, contribution and limits, and a genealogy or teaching case states context, contribution and limits. The limits section is compulsory, because a case that names only what worked argues for the practice instead of documenting it. Narrative detail that carries no argument stays out, and so do volatile quantities.

### The published knowledge base

Purpose. This knowledge base describes Promptotyping and how it came about, and it is the worked example of a project knowledge base filled with the templates.

Data basis. The documents listed in [INDEX.md](INDEX.md).

Interaction. The page links the entry point, and the documents open on GitHub, while their raw files stay addressable on the site.

Limits. The knowledge base is written for readers who do not know the project and therefore carries no internal working notes.

## Decisions

### ADR-01 The skill has one source

Context. Between 2026-08-22 and 2026-11-14 the skill lay in this repository, in its own repository, and again here.

Choice. The repository `DigitalHumanitiesCraft/promptotyping-skill` is the single source of the skill, with a README, a changelog and one tag per version (operator decision of 2026-11-14).

Justification. Two copies drifted, and an installation needs one address.

Effect. This repository describes and links the skill and carries no copy, no archive and no page of its own for it.

### ADR-02 Templates and convention have their single source here

Context. Until 2026-11-14 the templates were German mirrors of a catalogue kept in the operator's vault, which diverged from it more than once.

Choice. The templates and the convention live in English under `templates/` in this repository, reduced to eleven (operator decision of 2026-11-14), and the vault keeps a pointer.

Justification. The skill and foreign repositories read the templates from this site, so the published file has to be the source.

Effect. A template changes here first. Template names and slugs are English, and the stable address is `templates/<slug>.md`.

### ADR-03 `knowledge/` is the only knowledge folder

Context. Some projects kept their documents under `docs/`, and a move of this site into `docs/` was considered on 2026-11-14.

Choice. The knowledge documents of a project lie in `knowledge/`, and `docs/` is left to a website published from the repository. This site is published from the root through the workflow.

Justification. A `docs/` site would have pulled the templates to the place of the website or broken the addresses the skill and other repositories use.

Effect. The skill, the templates and this repository name `knowledge/` alone.

### ADR-04 No build step

Context. The site was vanilla from its first rebuild, and a re-evaluation on 2026-08-22 found no content requirement a build step would remove.

Choice. HTML, CSS and vanilla JavaScript without a build step, a package manager or a runtime CDN, with any library vendored.

Justification. `git clone` and a static server suffice, and tool chains decay faster than the content.

Effect. The published tree is the repository's files. The download archive built at delivery was retired on 2026-11-14 with the tooling.

### ADR-05 Raw Markdown is the machine address

Context. GitHub Pages answers a subpath that is no file with its 404 page and HTTP status 404, so an agent fetching an address without a browser received an error page (finding of 2026-06-10).

Choice. The raw Markdown file under its path is the address for agents. Since 2026-11-14 it is `templates/<slug>.md`, and before that it was `_content/promptotyping-document/<slug>.md`.

Justification. A request without JavaScript returns the document with status 200.

Effect. Foreign documents name a template by this address in their `template:` field. Published addresses are never renamed without a decision on how the old ones resolve.

### ADR-06 One page

Context. On 2026-11-10 the operator saw too many pages and much redundancy and asked for one page in the core and at most one more. On 2026-11-14 he decided to reduce the repository further.

Choice. The site is one page. Application, Checking, Artefact and boundary, Worked workflow, Tutorial, Best Practices, Technology Baseline and Working environment disappear as pages, and their content that still binds stands condensed in [practice.md](practice.md).

Justification. Each further page repeated the start page or another page, and a second carrier of the same statement ages unobserved.

Effect. The page explains and points, and the knowledge base carries the substance.

### ADR-07 The knowledge base is published

Context. The rule for public sites serves only content meant for readers and keeps knowledge folders off the site.

Choice. As an explicit exception (operator decision of 2026-11-14), `knowledge/` is published and shown as the worked example.

Justification. A project knowledge base filled with the templates shows the practice more precisely than a description of it.

Effect. The knowledge base is written for outside readers, and the publication check of NFR-05 covers it.

### ADR-08 The researchers decide

Context. The governance document of 2026-08-17 named a Critical Expert with final authority, and the skill of 2026-11-14 names the researchers.

Choice. Agents propose, and confirmation, scholarly validation and acceptance are recorded only as the judgement of the person who gave it. In this repository the operator decides on the practice, its definitions, the release and anything published.

Justification. A self-report of an agent is evidence for a decision and cannot replace it.

Effect. The journal records operator judgements verbatim, and a delegated decision names its origin.

### ADR-09 Working practice

Context. Until 2026-10-28 the site called Promptotyping a method.

Choice. Promptotyping is called a working practice (author decision of 2026-10-28).

Justification. A method would claim an empirical validation that does not yet exist.

Effect. The site and the documents say working practice or practice, and `method` stays only as a frontmatter field.

### ADR-10 The manuscript stays out

Context. The paper may appear only in the journal.

Choice. The manuscript left the repository and the site on 2026-10-14, and the material bound to it followed on 2026-10-28.

Justification. A public version of the text could conflict with the publication.

Effect. Paper work does not happen here. Earlier commits keep their content, so the removal does not undo earlier public availability.

### ADR-11 The journal carries what is open

Context. From 2026-08-21 a separate `knowledge/handoff.md` held open points, while the journal held history.

Choice. The journal opens with `## Open` and condenses into `journal-archive.md` (convention and skill 2.0.0 of 2026-11-14), and `handoff.md` is gone.

Justification. Two carriers for what is open drifted, and the journal is read at every session start anyway.

Effect. This journal was rewritten on 2026-11-14 in the form of the template, and its earlier wording stands in the Git history (`git show f211631:knowledge/journal.md`). It was not kept as `journal-archive.md`, because the folder is published and the earlier entries were written as internal working notes.

## Retired on 2026-11-14

- The multi-page portal with its registry, routing and side panel, because the operator reduced the site to one page and its pages repeated one another.
- The Vault view with the Grounded Vault instance under `vault/`, because the repository was to be kept lean and the instance's sources may be confidential. The template of the Grounded Vault lives in its own repository.
- The glossary with its term index and in-text term links, because the page defines the terms it uses in its own prose and [INDEX.md](INDEX.md) holds the constitutive terms.
- The introduction page under `intro/`, because its text no longer followed the terms of the paper and the start page already showed the five subcommands.
- The Skills page with the two system prompts, because the skill has its single source in its own repository.
- The Promptotyping Bench with its planning documents, because the operator took it out of the repository before any run had taken place.
- The JSON Schema of the frontmatter core, because the templates and the convention state the core and the schema's only reader was the consistency check.
- The consistency tooling under `tools/` with its tests, because it held many repeated statements against one another, and with one page and single-source templates few such repetitions remain.
- The download archive of the templates, because every template is addressable as a single file and the archive was the one artefact built at delivery.
