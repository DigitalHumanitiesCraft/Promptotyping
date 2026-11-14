---
title: Architecture template
slug: architecture
version: "0.4"
status: complete
language: en
updated: 2026-11-14
machine-url: https://dhcraft.org/Promptotyping/templates/architecture.md
---
# Architecture template

This template structures the architecture document of a Promptotyping knowledge base. A single document is called `architecture.md`, and specialisations follow `<subject>-architecture.md`. The document lies in the `knowledge/` folder and carries the technical realisation of the system. It answers the question of how, as distinct from the question of what (specification) and the question of appearance (design).

## Scope

The template applies as soon as the system is more than a trivial frontend, that is, as soon as pipeline stages, module boundaries, data flows or security assumptions have to be documented. Single-page static site repositories without a build step do without it, and a short architecture section in `specification.md` is then enough. It does not apply to code documentation at the level of functions or classes, which lies in the code (docstrings, comments, JSDoc).

The document comes into being once the stack is settled and is updated on a change of stack, a rebuild of components or the removal of a component, in the same pass as the code. The gravest decay pattern in practice is an architecture document that goes on describing a removed component as active. When the pipeline develops a routing question of its own or an update cycle of its own, `pipeline-architecture.md` comes into being.

Architecture normally remains one document. External models, services, deployment and continuous integration are sections of this document. An aspect is moved out as soon as it develops a routing question or an update cycle of its own. The file names then follow `<subject>-architecture.md`, for instance `pipeline-architecture.md`, `model-services-architecture.md` or `deployment-architecture.md`. The structural principles and frontmatter schema of this template apply to each file, and `INDEX.md` registers every specialisation.

## Function of the document

The document answers how the system is built, meaning which stack, which components, which data flow, which external models and services, and which security and accessibility measures. It addresses three groups of readers. A new developer has to understand how the code is organised. A reviewer checks the architectural decisions. A coding agent extends or rebuilds components. In the context of Promptotyping the third group matters most. The agent reads this document before generating code, and its descriptions of module boundaries give the agent a hold during implementation. An architecture description that is too vague leads to code that ignores the intended layers.

## Structural principles

Three principles carry the document.

1. The document separates how from what and from appearance. Which requirements the system meets belongs in `specification.md`. How the interface is designed belongs in `design.md`. How the system is technically realised belongs here. This separation prevents a change of architecture from forcing a change of specification and design as well.
2. The document describes module boundaries and leaves implementations to the code. What a component achieves and where it stops is architecture, and how it works internally is code. A description that reaches into the code goes stale faster than it is of use. In the context of Promptotyping the module boundary is the place where the coding agent needs help, and describing it means telling the agent where to stop building.
3. The document carries security and accessibility as main components and never as an appendix. Security assumptions and accessibility measures are architectural decisions, and a compliance section added afterwards misrepresents them. They stand in the main part or not at all.

## Frontmatter schema

The document follows the frontmatter schema of the [convention](convention.md) (required core `title, project, method, status, created, updated`). Specific to architecture are these fields.

- `topics:` depends on the project. Typical are `[[Software Architecture]]`, `[[Pipeline Design]]`, `[[Web Architecture]]`, according to the character of the system. ML or OCR pipelines add `[[Computer Vision]]` or `[[NLP Pipelines]]`. Topics are chosen so that the agent activates the right architectural standards when reasoning about implementation.
- `knowledge-sources:` useful when the system builds on institutional platforms (GAMS, eXist-db) or established architectural patterns (REST, RDF triplestore, static generators). Standards such as WCAG for accessibility or OWASP for security are recorded as URIs.
- `related:` typically `data`, `specification`, `design`.

## Sections in detail

### Lead

The lead names the architectural pattern in two to three sentences. It states the character of the application (static web application, pipeline with frontend, RDF-driven system), the essential design decision in the sense of "deliberately kept simple, complex or redundant because …", and points to the other documents in which the what and the appearance lie.

### Stack

This section names and justifies the technologies used, meaning languages, frameworks, build tooling and platforms. Each choice receives one sentence of justification unless it is trivial, for instance "Vanilla JavaScript without a framework, because the project is a research frontend and maintenance effort is to be kept minimal". Version information is sparing. The major version is enough, and minor versions stand in `package.json` or `requirements.txt`.

### Components

This section gives the main modules and their responsibility, for each component its purpose, interface and module boundary. A short list or table is usually clearer than extended prose. Components are named at a granularity that tells a developer which file or folder is meant.

### Data flow

This section shows how data flow from source to display. It gives the pipeline stages with clear transitions, for instance "XML sources → Python pipeline → JSON export → JavaScript frontend", and for each stage the format produced and the place where validation happens. When the data flow has a routing question or a maintenance cycle of its own, this section becomes `pipeline-architecture.md`. Components and data flow are then combined there in a table of stages with script, input format, output format and responsibility.

### External models and services

This section documents all external processing resources the system uses. For each model or service it gives the role in the pipeline, provider, endpoint format, authentication, limits and form of output. The section normally remains in `architecture.md` or `pipeline-architecture.md`. When it has a maintenance cycle of its own, `model-services-architecture.md` comes into being.

### Security

This section discloses security assumptions and measures. It states what the system protects against what (input sanitisation, authentication, data minimisation), which assumptions underlie this (a static site without a backend has no server-side attack surface) and which risks remain accepted. A security section without a risk assumption is a mere claim of security.

### Accessibility

This section documents WCAG conformance and measures. It states the WCAG level aimed for (typically AA), the measures taken (semantic HTML, ARIA attributes, keyboard operation, contrast values, screen reader tests) and known gaps, with a pointer to audit tools and reports where they exist.

### Repository structure

This section explains the top-level folders and their functions, in a table or list of the main folders with one sentence per folder. The order follows the logic of the data flow and is not alphabetical.

### Build and deployment

This section documents the way from the repository to the running application, meaning the local development environment, the build step, the deployment target and the continuous integration configuration. These aspects remain here as long as they share the same maintenance cycle. When they have a routing question of their own, `deployment-architecture.md` comes into being. The concrete workflow files (`.github/workflows/`, `pyproject.toml`) are referred to as the source of truth.

## What does not belong here

- User requirements. Which functionality the system provides belongs in `specification.md`.
- Design tokens and interface patterns. How the system looks belongs in `design.md`.
- Code implementation. How a component works internally belongs in the code (docstrings, comments).
- Test cases. Concrete test suites are documented in the code, and the architecture document names the test strategy in one or two sentences only.

## Template to fill in

The following block is meant as a template.

````markdown
---
title: Architecture
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
  name: Architecture template
  version: 0.4
  url: https://dhcraft.org/Promptotyping/templates/architecture.md
topics: ["[[Software Architecture]]"]  # pipeline projects add [[Pipeline Design]]
knowledge-sources:
  standards:
    [Standard, for instance WCAG]: [URI]
related: [data, specification, design]
---

<!-- Lead: two to three sentences. Name the architectural pattern, indicate the essential design decision, point to the what and the appearance. -->

[Lead paragraph]

## Stack

<!-- Languages, frameworks, build tooling. One sentence of justification per choice. -->

[...]

## Components

<!-- Main modules with purpose, interface, module boundary. A table is often clearer than prose. -->

| Component | Purpose | Interface |
|---|---|---|
| [Component] | [Purpose] | [Interface] |

## Data flow

<!-- Pipeline stages with transitions and validation points. With a routing question or maintenance cycle of its own, move it out as pipeline-architecture.md. -->

[...]

## External models and services

<!-- Optional. OCR models, LLM endpoints, NER tools, embeddings, geocoding. With a maintenance cycle of its own, move it out as model-services-architecture.md. -->

| Model/service | Role | Provider | Endpoint |
|---|---|---|---|
| [Model] | [Role in the pipeline] | [Provider] | [Endpoint format] |

## Security

<!-- Assumptions, measures, accepted risks. No mere claim. -->

[...]

## Accessibility

<!-- WCAG level, measures, known gaps. -->

[...]

## Repository structure

<!-- Top-level folders with their functions. -->

| Folder | Function |
|---|---|
| `[folder/]` | [Function] |

## Build and deployment

<!-- Local development, build, deployment target. Pointer to the workflow files. -->

[...]
````

## Use as a prompt template

The template serves as a structural anchor when the architecture is set up. The agent receives the template block and fills it from the code organisation that actually exists, from `package.json` or `requirements.txt`, the CI/CD configuration and the build scripts. The security and accessibility sections require domain knowledge and should be checked by the Critical Expert where needed.

The template also serves as a review sheet for an existing architecture. An existing `architecture.md` is held against the template to check whether all sections hold, whether the module boundaries are clean, whether security and accessibility are kept as main components and not as an appendix, and whether no code implementation has grown into the document.

## Example

HerData is the monolithic case. Its `architecture.md` has the sections Stack, Components, Data flow, Security, Accessibility, Repository structure and Build and deployment. The justification in the lead is characteristic and reads, in translation, "HerData is a static web application with a Python pipeline for data preparation and a Vanilla JavaScript frontend without a framework. This simplicity is chosen deliberately, as it reduces maintenance effort, loading complexity and error risks to the minimum a research frontend needs." The lead carries the essential architectural decision (deliberate simplicity) and its justification in two sentences.

The frontmatter of HerData's `architecture.md`, with the author field replaced by a placeholder, reads as follows.

```yaml
---
title: Architektur
project:
  name: HerData
  repository: https://github.com/chpollin/HerData
status: complete
language: de
version: 0.2
tags: [template, promptotyping, vault-operations]
created: 2026-05-05
updated: 2026-05-09
authors: [Author]
generated-with: Claude Code (Claude Opus 4.7)
method:
  name: Promptotyping
  url: https://lisa.gerda-henkel-stiftung.de/digitale_geschichte_pollin
knowledge-sources:
  institutions:
    Goethe- und Schiller-Archiv: https://www.klassik-stiftung.de/goethe-und-schiller-archiv/
    PROPYLÄEN: https://goethe-biographica.de
related: [data, design, features, maintenance]
---
```

A large system can divide the architecture function among `pipeline-architecture.md`, `model-services-architecture.md` and `deployment-architecture.md` when these aspects are looked up or maintained independently. A new repository starts with `architecture.md` and divides only at this demonstrated boundary.

The failure pattern found by the content audit of July (2026-07-19 - Promptotyping-Wissensbasen Inhaltsaudit (Befund)) is the outdated architecture in an active knowledge base, an `architecture.md` that describes a component removed weeks earlier as active, because the document was not updated when the component was removed. Architecture goes stale through removal and seldom through growth.

## Terms

### Stack

The totality of the technologies used (languages, frameworks, platforms, tooling).

### Module boundary

The interface at which one component ends and another begins. It is the central information of an architecture description.

### Data flow

The path that data take from the source to the display, with formats and validation points at every transition.

### Pipeline

A processing workflow of several stages that turns a source into a target artefact through defined stages. With a routing question of its own it becomes a specialisation as `pipeline-architecture.md`.

## Related

- [Templates of the Promptotyping Documents](./)
- [Convention](convention.md)
- [Promptotyping](https://dhcraft.org/Promptotyping/)
- [Specification template](specification.md)
- [Data template](data.md)
- [Design template](design.md)
