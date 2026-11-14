---
title: Specification template
slug: specification
version: "0.3"
status: complete
language: en
updated: 2026-11-14
machine-url: https://dhcraft.org/Promptotyping/templates/specification.md
---
# Specification template

This template structures the Specification document of a Promptotyping project knowledge base. The resulting document is typically called `specification.md` and lies in the repository's `knowledge/` folder. It consolidates requirements, epics and user stories, the range of functions and decisions into one central file and answers the project's question of what and why in one place. Since version 0.2 of the template (change of the convention on 2026-05-30) it also carries the narrative usage scenarios, which previously lay by default in a separate `user-stories.md`.

## Scope

The template holds for every Promptotyping repository, because the [convention](convention.md) lists the Specification function as always relevant. In very small projects it can be integrated into `project.md`.

The document arises early, typically in Preparation and Exploration, and afterwards lives in three rhythms. The requirements largely stay as they are, the range of functions is refactored for each release, and the decisions grow monotonically at the moment they are taken. The distillation boundary is reached when these rhythms drift apart as rhythms of separate files. The document is then split by Routing Question, for instance into `system-specification.md`, `architecture-decisions.md` and `user-stories.md`.

Splitting is the norm in larger projects. They regularly divide the Specification function among specialised carriers such as `system-specification.md`, `feature-specification.md` and `architecture-decisions.md`. Independent research questions receive functions tied to their subject, such as `research-analysis.md` or `research-exploration.md`. The division follows independent Routing Questions or update cycles. This template describes the consolidated single carrier `specification.md`. In a split, structural principles and frontmatter schema apply to each file.

Usage scenarios are integrated. User stories from the user's perspective in the format "As [role], who …, I want …, so that …" have belonged in `specification.md` as a section of their own (epics plus user stories) since the change of the convention on 2026-05-30. A separate `user-stories.md` is then no independent document. It is the split-off section on epics and user stories of this specification, a subdocument of the Specification function. It is the documented exception for large projects (typically edition projects) whose Specification function is split anyway. In that case the structural principles of the section Epics and user stories of this template apply to the split-off file, and a pointer remains in its place in `specification.md`. The split is reversible. teiCrafter moved the separate file back into the specification on 2026-06-12 and kept the scenarios as "Acceptance Scenarios" ("a usage scenario is a requirement seen from the user's side"). This in-spec form is an equivalent alternative to the section on epics and user stories.

## Function of the document

The document answers four connected questions in one place. They ask what the system is to provide (requirements), who uses it how and why (epics and user stories), which features it concretely offers (range of functions), and why it was built this way and in no other (decisions). These questions are kept in one document because their answers interlock. A story motivates a requirement, a feature implements it, and a decision justifies why this feature is realised this way. Whoever keeps the layers apart risks that a change in one layer silently makes the others obsolete.

The document addresses three groups of readers. A reviewer checks whether the requirements are met. A new team member wants to understand the range of functions. A coding agent is to extend a function or respect a decision.

## Structural principles

Three principles carry the document.

First, the sections are separated by their rhythm of updating. Requirements are static and rarely rewritten, since they record what was originally wanted. Epics and user stories share this slow rhythm, and only their validation status is updated (hypothesis to validated). The range of functions is refactored for each release, since it describes the current shape of the system. Decisions grow monotonically, since they are added and never overwritten. These rhythms can coexist in one file only if they are kept as separate sections.

Second, each decision has four parts, context, choice, justification and effect. A decision without justification is an assumption, and one without an observed effect is a claim. The ADR format (Architecture Decision Record) is the established form for these four parts. It is applied here to all decisions, including those beyond architecture.

Third, decisions are not overwritten. When a decision is revised, it receives a new entry that points to the old one. The old one remains visible, because its context and justification remain part of the project's history. The document shares this rule with the journal, since both keep historical states instead of replacing them.

## Frontmatter schema

The document follows the frontmatter schema of the [convention](convention.md) (required core `title, project, method, status, created, updated`). Specific to the Specification are the following fields.

- `topics:` typically holds `[[Requirements Engineering]]`, `[[Decision Records]]` (or `[[ADR]]`) and `[[User Stories]]`. These place the agent in the methodological fields of knowledge that carry formal requirements, usage scenarios and the documentation of decisions.
- `knowledge-sources:` is rarely used, because the Specification carries knowledge internal to the project and few external connections.
- `related:` typically holds `project`, `data`, `architecture` and `design`, and additionally `user-stories` where the stories are split off. The Specification is the hub document of the function of the same name and refers in both directions.

## Sections in detail

### Lead

The lead names the character of the document and its structure in two to three sentences. It points to the division into requirements, range of functions and decisions and explains their different rhythms of updating. The lead orients the reader, who would otherwise get lost between the three layers.

### Requirements

This section records what the system is to provide and for whom. It holds functional and non-functional requirements in formal language, with acceptance criteria as far as they can be operationalised, numbered consecutively (FR-NN, NFR-NN). Each requirement takes one sentence describing the behaviour plus an acceptance criterion. Non-functional requirements (accessibility, performance, data protection) are listed separately, where appropriate under a subheading of their own. This section is rarely rewritten.

This section carries formal requirements. Narrative scenarios from the perspective of researchers or other users belong in the section Epics and user stories of the same document. The sections are separate because requirements are formally checkable and serve the reviewer, while stories are narrative and oriented to use and serve the user. Both belong to the Specification function, but they speak different languages to different readers.

### Epics and user stories

This section documents who uses the system how and why. Epics are thematic bundles of related scenarios (typically three to five, for instance central research operations, scholarly safeguarding, conceptual orientation), and beneath them stand the individual stories in the format "As [role], who [context], I want [goal], so that [benefit]." Each story records its epistemic status (validated by whom and when, or an assumption with the observation point "Effect: to be observed" plus a resolving event) and a derivation as links into the project knowledge base. The derivation names which requirement (FR-NN), which component in `architecture.md` or `design.md` and which terms from `INDEX.md` the story leads to. The structural principles of this section are the three-part form of the story, the separation of the user's perspective from the system's, the obligation to state the derivation, and the epistemic status. If large edition projects split this section off into a separate `user-stories.md` (the documented exception), a pointer remains here.

### Range of functions

This section describes the current shape of the system. For each view or module it gives purpose, data basis, interaction and limits, four fields that make every feature comparable in the same form. The order of the features follows the logic of use (entry, main views, detail views, special views) and is not alphabetical. This section is refactored for each release.

### Decisions

This section records the design decisions with context, choice, justification and effect. It holds ADR-like entries that grow monotonically, newest at the top or newest at the bottom, what matters being consistency within the document. Each entry has a heading with an identifier (`### ADR-007 Accent colour changed from Forest Green to Academic Blue`) and four fields. On revision a new entry with a pointer is created, and the old one stays. In large projects the decisions section may be split off as `architecture-decisions.md` or another subject-bound `<subject>-decisions.md`, as long as exactly one canonical carrier exists.

Each decision has four fields.

- Context states the starting situation and the tension to be resolved.
- Choice states what was decided, in one sentence.
- Justification states why this choice was made and not another.
- Effect states what has been observed since.

## What does not belong here

- Architectural details. Stack, data flow and module boundaries belong in `architecture.md`. The Specification can point to an architectural decision but does not describe it itself.
- Design tokens and interface patterns. How something looks belongs in `design.md`.
- The data model. Which entities and relations the data carry belongs in `data.md`. The Specification describes what is done with the data, and `data.md` describes what they are.
- Implementation details. How a function is realised technically belongs in the code, and the Specification describes the behaviour.

## Template to fill in

The following block is meant as a template.

````markdown
---
title: Specification
project:
  name: [Project name]
  repository: [Repository URL]
status: draft
language: [de | en]
version: [Repository schema version]
created: [YYYY-MM-DD]
updated: [YYYY-MM-DD]
authors: [Author 1, Author 2]
generated-with: [Harness (LLM), if relevant]
method:
  name: Promptotyping
  url: https://lisa.gerda-henkel-stiftung.de/digitale_geschichte_pollin
template:
  name: Specification template
  version: 0.3
  url: https://dhcraft.org/Promptotyping/templates/specification.md
topics: ["[[Requirements Engineering]]", "[[Decision Records]]", "[[User Stories]]"]
related: [project, data, architecture, design]
---

<!-- Lead: two to three sentences. Mention the sections Requirements / Epics and user stories / Range of functions / Decisions and explain their different rhythms of updating. -->

[Lead paragraph]

## Requirements

<!-- Formal requirements, static. Narrative usage scenarios belong in the section Epics and user stories. -->

### Functional requirements

- FR-01: [Behaviour in one sentence]. Acceptance criterion: [...]
- FR-02: [...]

### Non-functional requirements

- NFR-01: [Requirement]. Measure: [...]
- NFR-02: [...]

## Epics and user stories

<!-- Epics as thematic bundles, stories beneath them. Per story: three-part form, validation status, derivation. If user-stories.md is split off (exception for large edition projects), only a pointer here. -->

### [Epic 1: for example central research operations]

#### [Story title]

*As [role], who [context], I want [goal], so that [benefit].*

Validation: [validated by role/person on YYYY-MM-DD | assumption (proxy: who), Effect: to be observed, Resolution: event]

Derivation:
- Requirement FR-NN
- Component [[design#Component]] (or [[architecture#Component]])
- Terms [[INDEX#Term A]], [[INDEX#Term B]]

### [Epic 2: for example scholarly safeguarding]

#### [Story title]

[...]

## Range of functions

<!-- Per view or module: purpose, data basis, interaction, limits. The order follows the logic of use. -->

### [Name of the view]

Purpose. [What this view provides.]

Data basis. [Which data are shown, with a pointer to data.md.]

Interaction. [How the user interacts with the view.]

Limits. [What it does not provide.]

### [Name of the next view]

[...]

## Decisions

<!-- ADR-like, growing monotonically. Per entry: context, choice, justification, effect. On revision create a new entry with a pointer and leave the old one standing. -->

### ADR-NNN Title of the decision

Context. [Starting situation, tension.]

Choice. [What was decided.]

Justification. [Why this choice.]

Effect. [What has been observed since.]

### ADR-NNN+1 Title of the next decision

[...]
````

## Use as a prompt template

The template serves as a structural anchor when setting up the Specification documentation. Requirements arise early, typically in Preparation and Exploration from Scholar-Centered Design sessions or requirements engineering. The range of functions fills iteratively during Implementation. Decisions are entered at the moment they are taken and are not reconstructed afterwards (Critical-Expert-in-the-Loop).

The template also serves as a yardstick for reviewing an existing Specification. An existing `specification.md`, or specialised carriers such as `system-specification.md`, `feature-specification.md` and `architecture-decisions.md`, are held against the template. The review checks the separation of sections, decisions in four parts, traceable revisions and the delimitation from architectural and design details.

## Example

HerData transferred the formerly separate files `features.md` and `decisions.md` into a consolidated `specification.md`, with drift between the files as the documented reason. The decisions section works with the four-part scheme "context, choice, justification, effect". One example is the decision on the accent colour, which documents as an ADR the change from Forest Green to Academic Blue with a justification based on a conflict. HerData is thus the reference case of the norm of consolidation.

sugw-Edition likewise merged the former `requirements.md` into `specification.md` but still keeps the usage scenarios as a separate `knowledge/user-stories.md` with derivation. It is the reference case for the documented exception of the split-off story file (the section Epics and user stories of this template, change of the convention on 2026-05-30). Both examples were verified against the repositories on 2026-06-09. Further empirical findings on the range of Specification forms are in the study of action layer and journal practice in Promptotyping repositories, 2026-06.

The failure pattern found by the content audit of July (2026-07-19, findings of the content audit of Promptotyping knowledge bases) is the factually outdated specification in an active project knowledge base, a range of functions that describes a superseded state of the system while the code has long moved on. The range of functions is the only section that must be actively updated with each release. If that is neglected, precisely the central document on what the system does becomes the wrong source.

## Terms

### Requirement

A recorded expectation of the system in formal, checkable language (FR-NN/NFR-NN) with an acceptance criterion. Its narrative form from the user's side is the user story in the section Epics and user stories.

### Feature

A concrete function or view the system provides. It typically implements one or more requirements.

### ADR

Architecture Decision Record, a four-part format (context, choice, justification, effect) for a documented design decision.

### Rhythm of updating

The typical frequency with which a section of a document changes. In the Specification the three sections differ considerably in this respect.

## Related

- Templates of the Promptotyping Documents (this folder)
- [Convention](convention.md)
- [Promptotyping](https://dhcraft.org/Promptotyping/)
- Critical-Expert-in-the-Loop
- [Project template](project.md)
- [Data template](data.md)
- [Architecture template](architecture.md)
- [Design template](design.md)
- [Journal template](journal.md)
