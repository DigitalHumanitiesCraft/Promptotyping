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

This template structures the Specification document of a Promptotyping project knowledge base. The resulting document is typically called `specification.md` and lies in the repository's `knowledge/` folder. It consolidates requirements, epics and user stories, the range of functions and decisions into one central file and answers the project's question of what and why in one place. It also carries the narrative usage scenarios as epics and user stories.

## Scope

The template holds for every Promptotyping repository, because the [convention](convention.md) lists the Specification function as always relevant, and it always stands as a document of its own beside `project.md`.

The document arises early, typically in Preparation and Exploration, and afterwards lives in three rhythms. The requirements largely stay as they are, the range of functions is refactored for each release, and the decisions grow monotonically at the moment they are taken. The distillation boundary is reached when these rhythms drift apart as rhythms of separate files. The document is then split by routing question, for instance into `system-specification.md`, `feature-specification.md` and `architecture-decisions.md`.

Splitting is the norm in larger projects. They regularly divide the Specification function among specialised carriers such as `system-specification.md`, `feature-specification.md` and `architecture-decisions.md`. Independent research questions receive functions tied to their subject, such as `research-analysis.md` or `research-exploration.md`. The division follows independent routing questions or update cycles. This template describes the consolidated single carrier `specification.md`. In a split, structural principles and frontmatter schema apply to each file.

Usage scenarios are integrated. User stories in the form "As a ..., I want to ..., so that I can ..." belong in `specification.md` as a section of their own (epics plus user stories). An older project may still keep them in a separate `user-stories.md`. The principles of the section Epics and user stories then apply to that file, a pointer stands in its place in `specification.md`, and the file can be moved back. teiCrafter moved its separate file back into the specification on 2026-06-12 and kept the scenarios as "Acceptance Scenarios" ("a usage scenario is a requirement seen from the user's side"). This in-spec form is an equivalent alternative to the section on epics and user stories.

## Function of the document

The document answers four connected questions in one place. They ask what the system is to provide (requirements), who uses it how and why (epics and user stories), which features it concretely offers (range of functions), and why it was built this way and in no other (decisions). These questions are kept in one document because their answers interlock. A story motivates a requirement, a feature implements it, and a decision justifies why this feature is realised this way. Whoever keeps the layers apart risks that a change in one layer silently makes the others obsolete.

The document addresses three groups of readers. A reviewer checks whether the requirements are met. A new team member wants to understand the range of functions. A coding agent is to extend a function or respect a decision.

## Structural principles

Three principles carry the document.

First, the sections are separated by their rhythm of updating. Requirements are static and rarely rewritten, since they record what was originally wanted. Epics and user stories share this slow rhythm, and mainly their status is updated (proposal to confirmed). The range of functions is refactored for each release, since it describes the current shape of the system. Decisions grow monotonically, since they are added and never overwritten. These rhythms can coexist in one file only if they are kept as separate sections.

Second, each decision has four parts, context, choice, justification and effect. A decision without justification is an assumption, and one without an observed effect is a claim. The ADR format (Architecture Decision Record) is the established form for these four parts. It is applied here to all decisions, including those beyond architecture.

Third, decisions are not overwritten. When a decision is revised, it receives a new entry that points to the old one. The old one remains visible, because its context and justification remain part of the project's history. The document shares this rule with the journal, since both keep historical states instead of replacing them.

## Frontmatter schema

The document follows the frontmatter schema of the [convention](convention.md) (required core `title, project, method, status, created, updated`). Specific to the Specification are the following fields.

- `topics:` typically holds `[[Requirements Engineering]]`, `[[Decision Records]]` (or `[[ADR]]`) and `[[User Stories]]`. These place the agent in the methodological fields of knowledge that carry formal requirements, usage scenarios and the documentation of decisions.
- `knowledge-sources:` is rarely used, because the Specification carries knowledge internal to the project and few external connections.
- `related:` typically holds `project`, `data`, `architecture` and `design`. The Specification is the hub document of the function of the same name and refers in both directions.

## Sections in detail

### Lead

The lead names the character of the document and its structure in two to three sentences. It points to the division into requirements, range of functions and decisions and explains their different rhythms of updating. The lead orients the reader, who would otherwise get lost between the three layers.

### Requirements

This section records what the system is to provide and for whom. It holds functional and non-functional requirements in formal language, with acceptance criteria as far as they can be operationalised, numbered consecutively (FR-NN, NFR-NN). Each requirement takes one sentence describing the behaviour plus an acceptance criterion. Non-functional requirements (accessibility, performance, data protection) are listed separately, where appropriate under a subheading of their own. This section is rarely rewritten.

This section carries formal requirements. Narrative scenarios from the perspective of researchers or other users belong in the section Epics and user stories of the same document. The sections are separate because requirements are formally checkable and serve the reviewer, while stories are narrative and oriented to use and serve the user. Both belong to the Specification function, but they speak different languages to different readers.

### Epics and user stories

This section documents who uses the artefact how and why. It follows Scholar-Centred Design, in which the researchers' knowledge of the sources, their methods and their research agenda enter the development. A persona names a kind of researcher and the analytical approach they bring, such as a social historian who studies community relations. An epic names a large body of work for that persona, such as social networks and community relationships. A user story breaks an epic down in the form "As a ..., I want to ..., so that I can ...", and each story carries an acceptance criterion the researchers can decide in front of the running artefact.

Four principles hold for the stories.

1. A story states what the persona wants and why. What the system provides belongs in the requirements, so that the stories do not turn into feature lists in disguise.
2. Each story has persona, goal and benefit. A story without a benefit is a wish for a function, and a story without a persona is a generic requirement.
3. Each story carries a stable identifier (US-NN), to which acceptance criteria, tests and journal entries refer, and a derivation into the knowledge base. The derivation names the requirement (FR-NN), the component in `architecture.md` or `design.md` and the terms from `INDEX.md` the story leads to.
4. Each story carries its status. Stories are elicited with the researchers at their material and are theirs. A story the agent proposes, or one a proxy wrote for the persona, stays a proposal until the researchers adopt it, and the entry names the occasion at which this will be decided. Priorities are set with the researchers, and what no story carries is left out, however reasonable it looks.

A script can decide whether each story has the story form with persona and goal, contains nothing beyond persona, goal and benefit, concerns exactly one feature, occurs only once, follows the same form as the other stories, and carries an identifier, an acceptance criterion and a status. For the status the script checks presence and leaves its truth open. A person decides whether the goal names a feature and the benefit a reason, whether the story names the problem and leaves its solution open, whether its terms allow only one reading, whether stories contradict each other, whether together they leave no step of the use missing, and whether a story depends on another, in which case the dependency is declared. Whether a story holds for its persona is confirmed only by the researchers, with who confirmed it and when.

Where an older project keeps the stories in a separate `user-stories.md`, a pointer stands here.

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
  url: https://dhcraft.org/Promptotyping/
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

<!-- Personas, an epic per large body of work, stories beneath it. Per story: identifier, story sentence, acceptance criterion, status, derivation. -->

Persona. [Kind of researcher and the analytical approach they bring.]

### [Epic 1: for example social networks and community relationships]

#### US-01 [Story title]

*As a [persona], I want to [goal], so that I can [benefit].*

Acceptance criterion: [What the researchers can decide in front of the running artefact.]

Status: [proposal (agent | proxy: who), decided at: occasion | confirmed by role on YYYY-MM-DD]

Derivation:
- Requirement FR-NN
- Component [[design#Component]] (or [[architecture#Component]])
- Terms [[INDEX#Term A]], [[INDEX#Term B]]

### [Epic 2: for example ...]

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

The template serves as a structural anchor when setting up the Specification documentation. Requirements arise early, typically in Preparation and Exploration from Scholar-Centred Design sessions or requirements engineering. The range of functions fills iteratively during Implementation. Decisions are entered at the moment they are taken and are not reconstructed afterwards.

The template also serves as a yardstick for reviewing an existing Specification. An existing `specification.md`, or specialised carriers such as `system-specification.md`, `feature-specification.md` and `architecture-decisions.md`, are held against the template. The review checks the separation of sections, decisions in four parts, traceable revisions and the delimitation from architectural and design details.

## Example

The consolidated single carrier arises when a project transfers formerly separate files `features.md` and `decisions.md` into one `specification.md` and records drift between the files as the reason. Its decisions section works with the four-part scheme "context, choice, justification, effect". A decision on the accent colour, for instance, documents as an ADR the change from one accent colour to another with a justification based on a conflict.

An older project whose story file predates the integration of user stories into the specification may merge its former `requirements.md` into `specification.md` and still keep the usage scenarios as a separate `knowledge/user-stories.md` with derivation, with a pointer in the specification.

A frequent failure pattern is the factually outdated specification in an active project knowledge base, a range of functions that describes a superseded state of the system while the code has long moved on. The range of functions is the only section that must be actively updated with each release. If that is neglected, precisely the central document on what the system does becomes the wrong source.

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

- [Convention](convention.md), with the list of all templates
- [Promptotyping](https://dhcraft.org/Promptotyping/)
- [Project template](project.md)
- [Data template](data.md)
- [Architecture template](architecture.md)
- [Design template](design.md)
- [Journal template](journal.md)
