---
title: Project template
slug: project
version: "0.3"
status: complete
language: en
updated: 2026-11-14
machine-url: https://dhcraft.org/Promptotyping/templates/project.md
---
# Project template

This template structures `project.md`, the canonical carrier of the Charter in a Promptotyping project. It is abstracted from concrete project overviews and turns their structural logic into a reusable form. A public `README.md` can derive from it and points to the project knowledge base, but it does not replace `knowledge/project.md`.

## Scope

The template suits the central project knowledge document `knowledge/project.md`. It holds for projects that have at least three properties:

- They process or produce a bounded material, such as data, corpora or documents.
- They are embedded in an institutional, methodological or technical context that does not explain itself.
- They have defined functions whose description differs from the description of what is deliberately not provided.

The range of functions is elastic. In small projects this document carries the material itself in a brief account of the data. As soon as the material receives a document of its own (`data.md`), it shrinks to the Charter and points to it, which is why the function table of the convention lists the Charter as possibly also carrying Material. The specification always stands in `specification.md`, and the section Range of functions here stays at the level of design principles.

The template does not hold for task, diary or discussion documents, for which other templates are more suitable. Nor is it meant as a library or tool README, where installation and API documentation come first.

The project description is the first document of the repository and changes rarely afterwards, because it carries the stable identity. An update is triggered by a change of commission, material or institutional frame, and progress of the work is no such trigger. The distillation boundary follows the elasticity described above. As soon as Material receives a document of its own, the Charter shrinks to pointers and hands over the substance instead of keeping it twice.

## Function of the document

The document answers the Charter question of the convention, namely what this project is, for whom, with which aim and on which material. Title and heading are plain, `Project`. The function name Charter remains the key of the convention, and in prose the document is called the project description. It addresses three groups of readers. An external reader wants to place the project without knowing the repository. A coding agent loads the project context at session start before reading the documents relevant to its task. The person responsible for the project uses the statements of identity (scope, standards, licence) as a stable reference against drift.

## Structural principles

Three principles carry the template and should be preserved when filling it in.

First, the structure consistently separates what the project does, what it does not do and where its substance comes from. This threefold division prevents description, self-aggrandisement and data provenance from merging into an indistinguishable mixture.

Second, data provenance and standards are main structural components and not appendices. This reflects an epistemic stance in which the capacity to connect to external knowledge is part of the project's identity.

Third, the structure explicitly delimits the project's scope. What the project deliberately does not provide is named in the section on delimitations just as what it provides, and this statement of scope is constitutive. It differs from the self-description of the document, which the third structural principle of the [convention](convention.md) excludes. "The project exports no RDF" is a permissible design decision. "This document does not cover X, see elsewhere" is an impermissible boundary note.

## Structure at a glance

The template consists of frontmatter and nine sections, some of them required and some dependent on context.

Required:

- Lead
- Data basis (or "material basis" for projects not centred on data)
- What it is about
- Range of functions
- Licence

Strongly recommended:

- Standards
- Terms

Dependent on context:

- Wider context
- Technical implementation
- Delimitations

## Frontmatter schema

The frontmatter follows the reduced required core of the [convention](convention.md), with `title`, `project` (an object with `name` and `repository`), `method` (an object with `name` and `url`), `status` (document maturity, not operational status), `created` and `updated`. The purpose lives as the first paragraph under the H1, and `template:` is recommended. Beyond the required core, the schema of the Charter document falls into five families of fields.

Identification comprises `title` as the human-readable title and `project` as a nested field with `name` and `repository`.

Status and versioning comprise `status` as document maturity (`idea`, `draft`, `stub`, `complete`, `reviewed`, `archived`, plus `active` and `snapshot`), which differs from the operational project status kept outside the project knowledge base. They further comprise `language` as a language code, `version` as a version number, and `created` and `updated` as dates in the format `YYYY-MM-DD`.

Responsibility comprises `authors` as a list that holds only people, even when an LLM produced the text, and `generated-with` for harness and LLM in the format `Harness (LLM)`, for example `Claude Code (Claude Opus 5)`, if the document was produced with LLM support. If a command reproduces the document, `output-of` with that command is added. See the section on provenance in the frontmatter of the [convention](convention.md).

Methodology comprises `method` as a nested field with `name` and `url`, which names the methodological frame.

Knowledge sources comprise `knowledge-sources` as a nested mapping that holds external bodies of knowledge as URI references. The second level groups by type (for example `institutions`, `standards`, `methods`, `vocabularies`), and the third level lists a human-readable label as key and a dereferenceable URI as value.

The field `knowledge-sources` is the structural feature that distinguishes the template from generic READMEs. It makes the document connectable to Linked Open Data, since every listed source is identified unambiguously by a URI and reachable directly when resolved. Where needed, a URI can also serve as a namespace for the semantic markup of other content in the document.

Topics are optional and take the form of wikilinks to concept documents. In the project description they are typically sparse, for example `[[Scholar-Centred Design]]` or the overarching research field, insofar as it guides filling in the project. If no clear placement holds, leave them out.

## Sections in detail

Each section has a specific function. The following notes explain what belongs in it and what does not.

### Lead

The lead allows quick agreement on the identity of the project. It holds one or two sentences that define the project, briefly name the data basis and list the central components of the application. It uses no marketing tone and makes no promises. Whoever reads the lead should know what the project is about and where the material comes from.

### Data basis

This section makes the epistemic responsibility for the data basis explicit. It covers the provenance of the data, the logic of selection and capture, the character of the dataset (complete or curated) and the delimitation of the project's own work from the production of the data. It points to a detailed document if one exists. It names no persons where the production of the data can be attributed to an institution.

### Wider context

This section places the project in relation to larger frames. It covers the institutional, academic or methodological frame in which the project is embedded and clarifies whether the project is an official part of that frame or an independent application to it. The section is omitted if the project stands on its own.

### What it is about

This section makes motivation and values visible. It covers the problem the project addresses, the concerns it pursues and a programmatic setting of priorities where relevant. A soberly phrased statement of values may stand here, such as "The project prioritises X over Y".

### Standards

This section documents technical and methodological connectability. It lists the standards, vocabularies, ontologies or frameworks in use, each with a short statement of its function. A reflective paragraph follows that justifies the choice and names distortions or limits of the material.

### Technical implementation

This section makes the technical work attributable. It states who is responsible for the implementation, in which methodological frame it stands and how it is delimited from the production of the content data. A brief paragraph suffices, without CVs.

### Range of functions

This section conveys an understanding of the application itself. It states the central design principles and their concrete realisation in two paragraphs. The first paragraph covers entry, navigation, views of the data, filters and export. The second paragraph covers the design stance towards data coverage and uncertainty, that is, how missing data and provenance are handled. It gives no exhaustive feature list, since interface details belong in a detailed document.

### Delimitations

This section calibrates expectations and marks limits as design decisions. It lists what is deliberately not provided, followed by a sentence giving the reason. The list should comprise five to eight points, since fewer appear too casual and more appear defensive.

### Terms

This section secures terminological coherence in the project knowledge base. It holds a glossary of terms central to the project, each entry defined in one sentence. Terms that occur in only a single section do not belong in the glossary. The glossary is for terms that are to be used consistently across several knowledge documents.

### Licence

This section is the legal anchor. It points briefly to the actual licence document and indicates the main logic of the licensing (for example a code licence and a data licence, if they differ). Three to four sentences suffice, and legal details lie in the licence document.

## What does not belong here

- Operational project status, next steps and dates. These live in `plan.md` or outside the repository, while the project description carries the stable identity.
- Evidence of the provenance of substantive transitions and the decisions in force. These lie in `journal.md` and in the decisions section of `specification.md` respectively.
- Volatile numbers (dataset sizes, processing states). The project description names the character of the dataset qualitatively and points to the living source.
- A detailed data model and field lists. As soon as `data.md` exists, the section on the data basis points there.
- Requirements and feature lists. The range of functions stays at the level of design principles, and formal content belongs in `specification.md`.

## Template to fill in

The following block is meant as a template. Notes on filling it in stand as HTML comments and disappear in rendered Markdown.

````markdown
---
title: [Document title]
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
  name: Project template
  version: 0.3
  url: https://dhcraft.org/Promptotyping/templates/project.md
# topics: ["[[Field of knowledge]]"]  # optional, only if a placement guides filling in
knowledge-sources:
  institutions:
    [Institution]: [URI]
  standards:
    [Standard]: [URI]
---

<!-- Lead: one or two sentences. What the project is, where the data come from, which components belong to it. -->

[Lead paragraph]

## Data basis

<!-- Provenance of the data, logic of selection, character of the dataset, delimitation of the project's own work. Pointer to a detailed document. No personal names where institutions suffice. -->

[...]

## Wider context

<!-- Optional. Only if a larger frame exists. Clarify whether the project is an official part of it or independent. -->

[...]

## What it is about

<!-- Problem, concerns, programmatic priorities. -->

[...]

## Standards

<!-- List of standards with their function, followed by a reflective paragraph. -->

Technical connectability follows established standards:

- [Function]: [Standard with short description]
- [Function]: [Standard with short description]

[Reflective paragraph]

## Technical implementation

<!-- Optional. Those responsible, methodological frame, delimitation from the work on content. -->

[...]

## Range of functions

<!-- First paragraph: design principles and concrete functions. Second paragraph: handling of data coverage and uncertainty. -->

[First paragraph]

[Second paragraph]

## Delimitations

<!-- Optional but recommended. Five to eight negations, followed by a sentence giving the reason. -->

The project does not provide:

- [Negative statement]
- [Negative statement]

[Sentence giving the reason]

## Terms

<!-- Glossary of terms central to the project, consistent across the knowledge documents. One heading per term, its definition beneath. -->

### [Term]

[Definition.]

### [Term]

[Definition.]

## Licence

<!-- Three to four sentences, pointer to [[license]] or equivalent. -->

[...]
````

## Use as a prompt template

The template can be used in a Promptotyping workflow in two ways.

The first use is as a structural anchor in Preparation. The agent receives the template block as context and is asked to fill in the sections from materials that already exist (notes, sketches, preliminary conversations). The HTML comments in the template act as implicit rules for filling it in.

The second use is as a yardstick for reviewing an existing document. An existing project document is held against the template to check which sections are missing, which are superfluous and which do not fit the structure in style.

In both cases the filling in should proceed iteratively. Generating the whole document from a single prompt tends to produce superficial content, because the individual sections need different sources. Filling in section by section with targeted questions works better.

## Example

A reference implementation carries the lead, the data basis with institutional attribution, the wider context (for instance the editorial platform that publishes the source), standards with a reflective paragraph, the range of functions at the level of design principles and a list of delimitations with a sentence giving the reason. The substance of Material and Specification has been handed over to `data.md` and the specification.

Two failure patterns recur. The first is the Charter as a miscellany, a `project.md` that mixes Charter, Material and Planning without separation, so that the stable core of identity is lost in the volatile state of planning. The second is the missing Charter. A knowledge base may have no document at all that answers the Charter question, so that every session start has to reconstruct the project context from scattered sources.

## Terms

### Knowledge document

A structured unit of knowledge distilled from raw material for work shared between people and LLMs, as the [convention](convention.md) defines it.

### Frontmatter

The machine-readable YAML block at the beginning of a Markdown document, which carries structured metadata.

### knowledge-sources

A frontmatter field that aggregates external knowledge sources as a URI mapping, grouped by type of source.

### Delimitation

A deliberate, explicit enumeration of what a project does not provide, as part of the project description. It is a statement of scope about the project and no boundary note about the document.

### Scope

The conditions under which a template holds, delimited from use cases for which other structures are more suitable.

## Licence

The template stands under the licence of the Promptotyping repository and may be adapted freely. Licence notes on concrete projects that use this template belong in the respective project document.

## Related

- [Convention](convention.md), with the list of all templates
- [Promptotyping](https://dhcraft.org/Promptotyping/)
- [Data template](data.md)
- [Specification template](specification.md)
