---
title: Design template
slug: design
version: "0.3"
status: complete
language: en
updated: 2026-11-14
machine-url: https://dhcraft.org/Promptotyping/templates/design.md
---
# Design template

This template structures the design document of a Promptotyping knowledge base. The resulting `design.md` lies in the `knowledge/` folder and describes the design stance, design system, interaction patterns and visualisation logic. An existing action layer points to this declarative knowledge as its source of values and translates it into instructions for the agent. This coupling is what agent socialisation describes.

## Scope

The template applies as soon as the project has a user interface, meaning visual surfaces with which a person interacts. Pure pipeline, data model or library repositories do without it. It does not apply to stand-alone style guides or design system specifications without a project, which are artefacts in their own right.

The document comes into being once the first iterations of the interface have validated the design stance, since before that the stance is speculative. It is updated on a refactoring of the design system and on the removal of a described view, in the same pass as the removal. A `design.md` that goes on describing a deleted view shares the decay pattern of the architecture document. Token values never go stale here, because they never stand here (second structural principle).

The coupling to the action layer is optional. `design.md` remains a complete declarative document even without such a consumer. An existing action layer translates the design stance into imperatives and names `design.md` as its source of values. Its actual entry path follows the [action layer template](action-layer.md). The empirical evidence base also contains repositories without a `CLAUDE.md` that draws on the design document.

## Function of the document

The document records design decisions for human readers, namely which design stance the project holds, which design system it uses, which interaction patterns apply and which visualisation logic applies. It addresses three groups of readers. A reviewer checks the design stance. A UX designer continues working against the design stance. A coding agent reads the document before generating an interface, in order to know the project's scale of values.

The action layer in the repository root points to `design.md` and carries the design principles derived from it. The design document remains the declarative source of values. This division of labour keeps description and instruction apart.

## Structural principles

Three principles carry the document.

1. The document separates design from architecture and specification. How something looks is distinct from how it is technically realised (`architecture.md`) and from what it is to achieve (`specification.md`). Mixing them lets every change to the interface seep into all three documents.
2. The document points to the code as the source of truth instead of copying token values. Concrete hex values, font sizes and spacing tokens stand in the token file (typically `tokens.css` or similar). The document describes the system and leaves the values to the code, since otherwise it goes stale with every token refactoring.
3. The document stays declarative. Design stance, token categories and interaction patterns are described declaratively. The imperative translation lies in the actual action layer in the repository root, which refers to this document as its source of values.

## Frontmatter schema

The document follows the frontmatter schema of the [convention](convention.md) (required core `title, project, method, status, created, updated`). Specific to design are these fields.

- `topics:` typically `[[Information Visualisation]]` and `[[Scholar-Centered Design]]`. They place the agent in the fields of knowledge that give it a hold when generating an interface, with Tufte, Munzner and Bertin as background in place of generic interface patterns. For frontends that are not dominated by visualisation, another field of user experience knowledge such as `[[Human-Centred Design]]` takes the place of `[[Information Visualisation]]`.
- `knowledge-sources:` rarely used, because design decisions are mostly taken within the project. When an established design system (Material, Carbon, IBM Design Language) serves as a reference, it is recorded here as a URI.
- `related:` typically `specification`, `architecture`.

## Sections in detail

### Lead

The lead names the design stance in two to three sentences. It states the character of the application (research tool, didactic edition, exploratory data view), which tradition it stands close to and what it sets itself apart from. The lead carries the design decision in one sentence, and all further sections unfold it.

### Design stance

This section makes the aesthetic system of values explicit. It holds three to five sentences on the fundamental stance, for instance "The interface positions itself as a research tool rather than a dashboard. Data quality is not disguised, and gaps stand as they are in the holdings." This section is later the source from which the action principles for the agent are derived.

### Design system

This section names the structural components. Tokens (colours, typography, spacing) appear as categories with a pointer to the token file in the repository, without a table of values. Components (cards, buttons, filters) appear as categories with a pointer to the component folder. Layout principles (grid, container, responsive breakpoints) are described in prose.

### Interaction patterns

This section describes the behaviour of the application, meaning how filters, navigation, profiles and detail views work. It describes the logic of the interaction and leaves the implementation to the code. An example is "Filters act cumulatively, and the filtered state becomes visible through accent colouring of the stat cards", where a description such as "`applyFilters()` sets the class `is-filtered`" would be out of place.

### Visualisation logic

For data visualisations, this section records the methodological choice. It states which chart types serve which research question, which were deliberately excluded and how uncertainty in the data is handled visually (coverage anchors, provenance markers, representation of gaps). The section is left out when the project carries no substantial data visualisations.

### Coupling to the action layer

The section links the action layer that actually exists and the design principles derived there. It is kept only when this coupling exists. The chosen file name follows the [action layer template](action-layer.md).

## What does not belong here

- Concrete token values (hex colours, pixel sizes, font names). They lie in the token file in the code.
- Component implementation. How a component is technically built lies in the code.
- Requirements or features. What the application achieves belongs in `specification.md`.
- Choice of stack. Vanilla JavaScript versus a framework is a question of architecture.

## Template to fill in

The following block is meant as a template.

````markdown
---
title: Design
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
  name: Design template
  version: 0.3
  url: https://dhcraft.org/Promptotyping/templates/design.md
topics: ["[[Information Visualisation]]", "[[Scholar-Centered Design]]"]
related: [specification, architecture]
---

<!-- Lead: two to three sentences. The design stance in one sentence, the character of the application. -->

[Lead paragraph]

## Design stance

<!-- Three to five sentences on the aesthetic system of values. Source for the agent principles further below. -->

[...]

## Design system

<!-- Tokens, components and layout as categories with a pointer to the code as the source of truth. No values here. -->

Tokens. [Description of the token categories, pointer to the token file.]

Components. [Description of the component categories, pointer to the component folder.]

Layout. [Grid, container, responsive breakpoints in prose.]

## Interaction patterns

<!-- Behaviour of the application, not its implementation. Filters, navigation, profiles, detail views. -->

[...]

## Visualisation logic

<!-- Optional. For data visualisations, the methodological choice and the handling of uncertainty. -->

[...]

## Coupling to the action layer

<!-- Optional. Link the action layer that actually exists and its section with the derived design principles. Insert the path according to the repository, for instance ../AGENTS.md or ../CLAUDE.md. Leave this section out when the coupling is missing. -->

[Pointer to the existing action layer and to the section with the imperative translation of this design stance.]
````

## Use as a prompt template

When the design system is set up, the design stance and the design system are worked out first. The imperative translation in the existing action layer is derived from them and checked against the actual iterations of the interface.

When an existing `design.md` is checked, the declarative design stance, the actual pointer to the action layer, the maintenance of the token values in the code and the description of the interaction logic are checked against the template.

## Example

HerData keeps a `design.md` with lead, design stance, design system, interaction patterns and design principles for the agent. Its lead sentence is characteristic, stating in translation that component detail lies in the code and not in the documentation, because there it goes stale faster than it is of use. This justification carries the second structural principle (pointer to the code as the source of truth) into the lead as an explicit rule.

The content audit of July (2026-07-19 - Promptotyping-Wissensbasen Inhaltsaudit (Befund)) found two failure patterns. One is a `design.md` that goes on describing a removed component as active over a third of the document. The other is self-describing sections ("What this document does not contain"), which the rule change of 2026-06-29 prohibits.

## Terms

### Design stance

The fundamental aesthetic system of values of a project, stated in three to five sentences.

### Design system

The collection of tokens, components and layout principles that a project uses.

### Design principle

A rule in the action layer, stated in the imperative, that guides the coding agent when it generates an interface.

### Coupling to the action layer

A pointer to the declarative design document together with the translation of its values into instructions.

## Related

- [Templates of the Promptotyping Documents](./)
- [Convention](convention.md)
- [Promptotyping](https://dhcraft.org/Promptotyping/)
- Agent socialisation
- Scholar-Centered Design
- [Specification template](specification.md)
- [Architecture template](architecture.md)
