---
title: Index template
slug: index
version: "0.5"
status: complete
language: en
updated: 2026-11-14
machine-url: https://dhcraft.org/Promptotyping/templates/index.md
---
# Index template

This template structures the navigation document of a Promptotyping project knowledge base. The resulting document is called `INDEX.md` and lies in the `knowledge/` folder. Its capitalisation is the justified hub exception of the Naming Contract. Here people and agents find the register of documents, the reading order, the storage zones and the constitutive terms and abbreviations.

## Scope

The template holds as soon as the project knowledge base contains more than three documents. In smaller repositories an index is superfluous and can be integrated into the Charter document (`project.md` or `README.md`). It does not hold for overviews across projects or for MOCs in the vault, for which the document rules of the respective vault apply.

The index arises as soon as the fourth document crosses the threshold. It is maintained with every new, renamed or removed file, alongside the project knowledge base and not only at the end. Consistency with the actual content of the folder is its only obligation to update. An index that loses it is worse than none, because it creates false confidence.

## Function of the document

The index document addresses a human reviewer, a newly set-up coding agent and the person responsible for the project who returns after weeks. It answers which documents and areas of artefacts exist, which Routing Question each path serves, in which order they are read and which terms or abbreviations are constitutive. It is at once a navigation node and a lexicon of terms.

## Structural principles

Five principles carry the document.

First, the index points and does not store. Every piece of information summarised in the index must stand in the linked sibling document itself, otherwise conflicts of truth arise between index and source. The exception is the definitions of terms, which live here canonically because the glossary is centralised.

Second, the index provides reading paths in addition to a list. A flat enumeration of the documents is a file overview and gives no guidance for reading. Reading paths order documents by concern ("onboarding", "reproduction", "architecture review") and send the reader through the project knowledge base in an order suited to the task.

Third, the index carries the canonical terms of the project. Terms are defined where they are needed, and the index is the only place where the defining terms are maintained consistently across the vault. Sibling documents link to individual terms (`[[INDEX#Form of indexing]]`) instead of defining them themselves. With very many terms (more than 15 to 20) moving them into a separate `glossary.md` is permitted. As a rule a section in the index suffices.

Fourth, the index is consistent with the actual content of the folder. Every relevant file is listed, and no entry points to a deleted or planned file. Functions that are not relevant stay out without a written justification.

Fifth, the index explains every official or constitutive abbreviation that occurs in a file name. The document matrix gives the real spelling of the path and thereby confirms the primary routing signal.

## Frontmatter schema

The index document follows the frontmatter schema of the [convention](convention.md) (required core `title, project, method, status, created, updated`). Specific to the index are the following fields.

- `topics:` is usually empty, since the index is a meta document of the project knowledge base and carries no thematic placement in the domain.
- `related:` lists all sibling documents the index connects. This is the only place in the project knowledge base where `related:` must be complete.
- `knowledge-sources:` is omitted, because the index carries no substance of content.

## Sections in detail

### Lead

The lead makes clear in two to three sentences what the project knowledge base documents, for whom it is written and what it deliberately does not contain. It names the readership, the thematic coverage and points to operational matters (maintenance, workflow of data export) that do not lie in the project knowledge base itself. It contains no marketing sentences.

### Document matrix

This section gives a tabular overview of all durable Promptotyping Documents with path, function, Routing Question and occasion for updating. The matrix is the machine-readable form of the structure of the project knowledge base and is the first thing an agent consults. Its order follows the logic of the functions.

### Storage zones

This section explains the boundaries between `knowledge/`, `research-artefacts/`, `source-material/`, `snapshots/`, `handoffs/` and `generated/`. For each zone present it gives one sentence on the class of artefact and its life cycle. Output paths specific to a repository or typical of a domain are mapped here onto one of these classes.

### Reading paths

This section recommends orders for different concerns. It gives two to four paths in prose or as a list, for example "onboarding a new team member: project → data → specification → architecture", "reproducing a data export: data → architecture → journal", "understanding a design decision: specification (decisions section) → journal → design". Each path is justified.

### Convention

This section points to the convention by which the project knowledge base is maintained. It holds a link to the [convention](convention.md) or the repository's variant and one sentence stating that it explains the Naming Contract, the frontmatter schema and the routing heuristic.

### Terms

This section gives canonical definitions of the terms constitutive of the project and of the abbreviations used in file names, sorted alphabetically. Every abbreviation is spelled out and placed in its meaning for the project. Sibling documents link to the definition where needed. With an extensive stock of terms a separate `glossary.md` can take over, while the abbreviations in file names remain visible in the index.

## What does not belong here

- Transcriptions of content from the siblings. The index points and does not store, the exception being the definitions of terms, which live here canonically.
- Concrete numbers from the application (coverage, dataset sizes, test counts). These lie in the application itself and in `persons.json#meta` or comparable, and volatile quantities do not stand in knowledge documents.
- Session logs and narratives of the course of work. Substantive transitions are recorded briefly in `journal.md`.
- A section "What is missing and why". It was required until the rule change of 2026-06-29 and has been prohibited since. Functions that are not relevant stay out without comment, and pointers to material lying elsewhere stand positively at the place where they are needed.
- Methodological introductions to Promptotyping. The [Promptotyping](https://dhcraft.org/Promptotyping/) overview is responsible for that, and the index only points to it.
- Definitions of terms that occur in only a single sibling document. These live in the Terms section of that document.

## Template to fill in

The following block is meant as a template. Notes on filling it in stand as HTML comments and disappear in rendered Markdown.

````markdown
---
title: Index
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
  name: Index template
  version: 0.5
  url: https://dhcraft.org/Promptotyping/templates/index.md
related: [project, data, specification, architecture, design, journal]
---

<!-- Lead: two to three sentences. Who is addressed, what is covered, what lies elsewhere. -->

[Lead paragraph]

## Documents

| Path | Function | Routing Question | Updated |
|---|---|---|---|
| [[project]] | Charter | What is this project? | on a change of identity or scope |
| [[data]] | Material | What is the data basis? | on a data export or a change of schema |
| [[specification]] | Specification | What is the system to do, and why? | on a change of requirements or decisions |
| [[architecture]] | Architecture | How is it realised technically? | on a change of architecture |
| [[design]] | Design | How does it look and behave? | on a change of the design system |
| [[journal]] | Provenance | What is open, and what was decided, rejected, corrected or changed when and on which trigger? | at every handoff (`## Open` rewritten) and after substantively connected steps of the work |

<!-- The order follows the logic of the functions, not the alphabet. Leave out functions that are not relevant. -->

## Storage zones

- `knowledge/` contains the durably maintained Promptotyping Documents, including `journal.md` with what is open in the section `## Open`.
- `research-artefacts/` contains scholarly work products.
- `source-material/` contains adopted sources and transcripts.
- `snapshots/` contains dated reports and audits.
- `handoffs/` contains exceptional, dated handover snapshots.
- `generated/` contains reproducibly generated artefacts.

<!-- List only the zones present. Assign domain-specific output folders to their class of artefact. -->

## Reading paths

<!-- Two to four paths. Each path with a short justification. -->

- Session start: [[INDEX]] → [[journal#Open]] → [[project]] → [document relevant to the task].
- Reproducing a data export: [[data]] → [[architecture]] → [[testing]].
- Understanding a design decision: [[specification]] → [[journal]] → [[design]].

## Convention

This project knowledge base follows the convention for Promptotyping Documents. It governs the Naming Contract, the frontmatter schema, the routing heuristic and the structural principles. See the [convention](https://dhcraft.org/Promptotyping/templates/convention.md).

## Terms

<!-- Sorted alphabetically. Always spell out and define official or constitutive abbreviations in file names here. An extensive stock of technical terms can move to glossary.md. -->

### [Term A]

[Definition. What the term denotes in the project, delimited from related terms.]

Used in [[document#Section]], [[other-document]].

### [Term B]

[Definition.]

[Delimitation from a related term, where confusion is possible.]

Used in [[document#Section]].
````

## Use as a prompt template

The template serves as a structural anchor when setting up a new repository. The agent receives the template block, copies it as `INDEX.md` into the `knowledge/` folder and fills in the table as soon as the first sibling documents exist. The index arises alongside the project knowledge base and is maintained with every new file, not only at the end.

The template also serves as a yardstick for reviewing an existing project knowledge base. An existing index is held against the template to check whether all siblings are listed and no entry points to a deleted file, whether reading paths are actual paths rather than mere lists, and whether the convention is referenced.

## Example

HerData keeps `INDEX.md` with a lead, a document matrix, sections on reading paths and a pointer to the convention. Characteristic is the closing sentence of the lead, "Konkrete Zahlen erscheinen ausschliesslich in der Anwendung selbst, in den Stat-Cards der Hauptansichten und im Meta-Block der `persons.json`", which states that concrete numbers appear only in the application itself, in the stat cards of the main views and in the meta block of `persons.json`. This is a positive pointer to the place of truth for volatile numbers and remains permissible after the rule change of 2026-06-29, which abolished written sections on what is missing. HerData does not yet keep the Terms section. The refactoring should add it, because terms such as "Erwähnt", "Erwähnung", "Brief" and "Person" are constitutive of the project and are used consistently in several documents.

The content audit of July (2026-07-19, findings of the content audit of Promptotyping knowledge bases) shows the recurring failure pattern of indexes that drift from the content of the folder. One index lists only half of the documents that actually exist, another leaves three files unregistered, and a third links to a deleted data model. The index is the document of the project knowledge base most prone to drift, because every change to a sibling file affects it indirectly.

sugw-Edition keeps the glossary as an independent document `glossar.md` with twelve terms (Erschließungsform, Event, Faksimile, Gesamtnennung, Individuelle Person, Menschen-Event, Quelle, Quellenkorpus, Rechtsgeschäft, Regest, Rolle, Volltext). This is the variant of moving the glossary out, which the convention recommends above 15 to 20 terms. With twelve, a section in the index would also be permissible. sugw chose to move it out because the glossary serves as the source of interface tooltips in the frontend and is thus also consumed by machines.

## Terms

### Project knowledge base

The collection of all Markdown documents in the `knowledge/` folder of a Promptotyping repository.

### Reading path

A recommended order of several documents that answers a particular concern most efficiently.

### Document matrix

A tabular overview of the Promptotyping Documents with path, function, Routing Question and occasion for updating.

## Related

- Templates of the Promptotyping Documents (this folder)
- [Convention](convention.md)
- [Promptotyping](https://dhcraft.org/Promptotyping/)
- [Project template](project.md)
- [Journal template](journal.md), including its section `## Open`
