---
title: Data template
slug: data
version: "0.3"
status: complete
language: en
updated: 2026-11-14
machine-url: https://dhcraft.org/Promptotyping/templates/data.md
---
# Data template

This template structures the Material document of a Promptotyping project knowledge base. A single carrier is called `data.md`. Separate data bases are specialised as `<subject>-data.md` or by their more precise function, for example `data-schema.md`. The document lies in the `knowledge/` folder and carries the epistemic responsibility for the material that is processed or produced.

The template was developed from a cross-survey of 19 real `data.md` files from the active Promptotyping repositories. It distinguishes four required sections from six optional sections, each with a trigger criterion.

## Scope

The template holds as soon as the project processes or produces data. In repositories that are purely tools, libraries or methods it is omitted, and the Charter document then carries the material basis itself in a compact section. The template does not hold for API documentation, descriptions of database schemas without reference to content, or data examples without provenance.

It holds both for repositories that produce their own data (HerData, klawiter-rescue, notker-edition, sugw-Edition) and for repositories that take external datasets only as input (wiiw-figaro-nam, vetmed-berichtswesen, objekt-bestimmung-workshop). The optional sections distinguish the cases.

The document arises as soon as the material is defined, typically with the first export or the first delivery. It is updated with every data export (`updated:` is one of the most active fields of the project knowledge base here) and every change of schema (section Model). A `data.md` whose Model section describes a superseded schema is the most costly pattern of decay of this function, because operational teams work with it. Counts never go out of date here, because they never stand here (third structural principle). Whoever wants to record a state of completion marks it as a dated snapshot or points to the measuring source.

## Function of the document

The document answers what the data are, where they come from, how they are modelled and where the material stops holding. It addresses three groups of readers. A reviewer wants to judge the quality of the data. A coding agent is to process or transform the data. A domain expert wants to follow the logic of selection. The document is epistemically responsible, since it makes transparent what the data provide and what they do not. Empirical statements about the material that are used externally (accuracy values, claims of completeness) are checked in `testing.md` ([testing template](testing.md)). The data document describes, and `testing.md` provides the evidence.

## Structural principles

Three principles carry the document.

First, it separates the production of data from their processing. Whoever captured the data (institution, edition team, external source) holds a different kind of authorship from whoever processes them here, and this separation must be named explicitly. Delimiting the project's own work from the production of the data is a basic rule. It is more than a gesture of courtesy.

Second, the document makes the limits of the material explicit. What the material does not cover is named just as what it covers. This statement is carried by the section `Limits` and is constitutive. It is a statement about the material and not about the document. The self-description prohibited since 2026-06-29 ("this document does not cover X") remains excluded here too ([convention](convention.md)).

Third, the document contains no concrete number that changes with the next data export. Coverage values, dataset sizes and distribution statistics lie in the application itself (in `persons.json#meta` or comparable) and in the stat cards of the main views. The document points to these sources without duplicating them.

## Frontmatter schema

The document follows the frontmatter schema of the [convention](convention.md) (required core `title, project, method, status, created, updated`). Specific to the data basis are the following fields.

- `topics:` typically holds `[[Data Modelling]]`, `[[Normdata]]` and `[[Controlled Vocabularies]]`, and in edition repositories also `[[TEI]]`, `[[Prosopography]]` or similar. These place the agent in the fields of knowledge that carry the documentation of material.
- `knowledge-sources:` is central here and should be maintained. It holds at least `institutions:` (institutions producing the data, with URI) and `standards:` (data standards, vocabularies and ontologies in use, with URI), optionally also `vocabularies:` for controlled vocabularies and `datasets:` for referenced external datasets.
- `related:` typically holds `project`, `architecture` and `specification`, the three documents that build on the data basis.
- `output-of:` carries the command that generates the document. It is set as soon as a script renders the description of the corpus from the source data, which is the normal case for large or heterogeneous holdings. Where the field is set, the document is not edited by hand, and a correction goes to the script. See the section on provenance in the frontmatter of the convention.
- `updated:` is updated with every new data export.

## Sections in detail

There are four required sections and six optional sections with a trigger criterion. Optional sections that do not apply are omitted rather than kept empty.

```
REQUIRED:   Subject → Sources → Model → Limits
OPTIONAL:   Authority data and connections
            Biases
            Provenance per value
            Relation to the external data source
            Workflow
            Examples
```

## Required sections

### Subject

This section states what the material is in the first place. It gives a brief characterisation of the content the data describe, the historical or scholarly subject as distinct from the format, in one to three sentences. It answers what is being talked about before structures are talked about. It does not carry data format, pipeline or evaluation.

### Sources

This section states where the material comes from. For each source it gives origin, logic of capture, licence, provenance and period of capture. With several sources it explains the relation between them, for example "Source A supplies the list of persons, source B supplies the letter metadata, linked through GND identifiers". Capture by persons is phrased in the language of institutions, without personal names. If a team of editors is to be acknowledged by name, this happens in a document of its own or in a section of acknowledgements at the end, outside the block on sources. The section does not carry the project's own logic of processing.

### Model

This section states how the material is structured. It covers the main entities and their relations, the schemas or annotation layers and the controlled vocabularies. For the project's own data production it gives the semantic model of the data produced (JSON Schema, RDF vocabulary). For markup bound to a standard it gives the annotation layers and schema constraints (TEI elements, RelaxNG constraints, mismatches between the ODD and the corpus). For external data deliveries it gives the delivered structure (columns, types, Hive partitioning). It points to the schema files in the repository as the source of truth. The document paraphrases the schema and does not replace it. The section does not carry pipeline steps, interface logic or implementation details.

### Limits

This section states what the material does not provide. It names what is not covered and why, meaning gaps, omissions, structural restrictions, closed holdings, undigitised parts and deliberate selection. It is phrased qualitatively and without percentages. Concrete coverage values belong in the `meta` block of the data file and in the stat cards of the application. The section answers where the material stops holding. It does not carry biases, which belong in the optional section `Biases`, or concrete coverage figures.

## Optional sections

### Authority data and connections

The trigger is that the material uses external identifiers (GND, Wikidata, GeoNames, AGRELON, VIAF, ORCID, IIIF, DOI). The section discloses external connections. It states which identifier systems connect the material to external knowledge, how they are integrated and which coverage is reached in qualitative terms ("complete", "patchy", "selective"). It links to the official documentation of the authority data systems. For pure edition data without a connection to authority data the section is omitted.

### Biases

The trigger is that the material shows recognisable systematic skews relevant to interpretation. The section makes these skews explicit. It names two to five biases with their reasons, for example "Map bias: geodata concentrate on Central Europe because the source is institutionally anchored there", "Gender bias: women are under-represented because the source basis is centred on Goethe", "Language bias: German-language secondary literature is disproportionately present because of the library's collecting focus". A bias without a reason is a conjecture, and a justified one is a design decision. For standardised datasets without recognisable skews, or for purely technical holdings, the section is omitted.

`Limits` and `Biases` differ in what they name. `Limits` names structural omissions ("the period 1418 to 1447 has not been evaluated"), while `Biases` names asymmetric coverage within the captured material ("among the persons captured, women with professional networks to men are over-represented").

### Provenance per value

The trigger is that values arise in several stages, through regular expressions, an LLM, manual annotation, AI correction or hybrid procedures. The section documents the trail of extraction per value, so that a Critical Expert acting as reviewer can decide what to check. For each group of fields it states the method of extraction (regex / llm / manual / missing) and a qualitative statement of coverage, without concrete percentages. It points to a machine-generated quality report file or debug JSON in the repository as the source of truth. For data from a single reliable source (an Excel delivery, a single export) the section is omitted.

### Relation to the external data source

The trigger is that the data are delivered and not produced. The repository takes external data as input and does not change them back. The section marks the relation to the source. It states in which form the data are delivered (Excel, Parquet, RDS, REST API), what is deliberately not done (no modification, no editing path, no re-upload, no editing in localStorage) and where the source of truth remains (collection management system, external API, delivery file). For repositories with their own data production the section is omitted.

### Workflow

The trigger is that a pipeline transforms the source into an application file. The section documents the path from the source to the application file. It states the pipeline stages briefly, with pointers to the scripts in the repository. The implementation of the workflow belongs in `architecture.md`, or in `pipeline-architecture.md` where it has an independent Routing Question. For read-only repositories without transformation the section is omitted.

### Examples

The trigger is that the data model is hard to grasp without a concrete example. The section makes the data model concrete. It gives one to three compact records (JSON, XML, RDF, depending on the format) in a code block that show the model by example. The examples are chosen from the real data and not invented. For very simple data models that are self-explanatory in the section `Model` the section is omitted.

## What does not belong here

- Concrete coverage figures, dataset sizes and distribution statistics. These lie in the application and in the meta block of the data file.
- Pipeline implementation. How the workflow is built belongs in `architecture.md`.
- Interface logic. How the data are displayed belongs in `specification.md` or `design.md`.
- Research results. What the data show in substance is a matter for the publications.

## Template to fill in

The following block is meant as a template. Optional sections that do not apply are deleted before the commit rather than left empty.

````markdown
---
title: Data
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
  name: Data template
  version: 0.3
  url: https://dhcraft.org/Promptotyping/templates/data.md
topics: ["[[Data Modelling]]", "[[Normdata]]", "[[Controlled Vocabularies]]"]
knowledge-sources:
  institutions:
    [Institution]: [URI]
  standards:
    [Standard]: [URI]
related: [project, architecture, specification]
---

<!-- Lead: one or two sentences. What the material is and where it comes from, without numbers. -->

[Lead paragraph]

## Subject

<!-- One to three sentences. What the material describes in content. Historical or scholarly subject, not format. No numbers. -->

[...]

## Sources

<!-- Per source: origin, logic of capture, licence, provenance, period of capture. With several sources, the relation between them. Persons in the language of institutions. -->

[...]

## Model

<!-- Main entities, relations, annotation layers or delivered structure. Pointer to the schema file as source of truth, paraphrase rather than replace. -->

[...]

## Limits

<!-- What is not covered and why. Structural omissions, closed holdings, deliberate selection. Qualitative, no percentages. -->

[...]

<!-- ============================================================ -->
<!-- OPTIONAL SECTIONS: delete those that do not apply before the commit -->
<!-- ============================================================ -->

## Authority data and connections

<!-- Trigger: external identifiers in use (GND, Wikidata, GeoNames, AGRELON, VIAF, ORCID, IIIF). -->

[...]

## Biases

<!-- Trigger: the material shows systematic skews relevant to interpretation. Two to five, each with its reason. -->

- [Bias]: [Reason].

## Provenance per value

<!-- Trigger: values arise in several stages (regex, LLM, manual, AI-corrected). Per group of fields the method of extraction. Pointer to the quality report. -->

[...]

## Relation to the external data source

<!-- Trigger: data are delivered, not produced. In which form delivered, what is not done, where the source of truth remains. -->

[...]

## Workflow

<!-- Trigger: a pipeline transforms the source into an application file. The stages briefly, pointers to scripts. The implementation belongs in architecture.md. -->

[...]

## Examples

<!-- Trigger: the data model is hard to grasp without a concrete example. One to three real records in a code block. -->

```json
[...]
```
````

## Use as a prompt template

The template serves as a structural anchor when setting up the data basis. The agent receives the template block and fills it iteratively from the source documents (licence texts, schema files, README of the data's origin). Before filling it in for the first time, the agent decides for each optional section from its trigger whether it holds, and deletes those that do not apply. The section `Biases`, where it holds, requires domain expertise and should be validated in substance by the Critical Expert (Critical-Expert-in-the-Loop).

The template also serves as a yardstick for reviewing an existing data basis. An existing `data.md` is held against the template to check whether the four required sections hold, whether `knowledge-sources:` is maintained in the frontmatter, whether no concrete numbers are duplicated from the application, whether optional sections meet their trigger, and whether sections without a trigger are not carried along out of habit.

## Example

HerData (own data production with a connection to authority data) carries Subject, Sources, Model, Limits, Authority data and connections, Biases, Provenance per value, Workflow and Examples. Characteristic is the explicit section on map bias, which is made visible in the application itself (onboarding step MapBias). `knowledge-sources` lists the Goethe- und Schiller-Archiv and PROPYLÄEN as institutions and CMIF, GND, GeoNames and AGRELON as standards.

notker-edition and sugw-Edition (edition data bound to a standard) carry Subject, Sources, Model (with annotation layers and schema constraints in the section Model), Limits, Authority data and connections (IIIF, GND) and Examples. `Relation to the external data source` and `Provenance per value` are omitted, since there is an editorial data production of their own.

vetmed-berichtswesen and objekt-bestimmung-workshop (external data source as input) carry Subject, Sources, Model (delivered structure), Limits, Relation to the external data source, Workflow and Examples. `Authority data and connections` and `Biases` are typically omitted.

klawiter-rescue (multi-stage reconstruction of data) carries all four required sections together with Authority data and connections, Biases, Provenance per value, Workflow and Examples. This is the full programme, and `Provenance per value` is central here because values are combined from regular expressions, an LLM and Wikidata reconciliation.

The failure patterns found by the content audit of July (2026-07-19, findings of the content audit of Promptotyping knowledge bases) are the unmarked snapshot, a `data.md` that carries counts of the state of capture without a reference date and thus becomes silently wrong from the next export onwards, and the data miscellany, a `data.md` that mixes material, workflow and state of completion without separation.

## Terms

### Material

The substrate processed or produced by a Promptotyping project, such as data, a corpus, a collection of documents or a body of images.

### Limits

What the material structurally does not cover, that is, closed holdings, undigitised parts and deliberate selection.

### Bias

A systematic skew within the captured material, caused by the logic of capture or selection of the source.

### Provenance

The history of origin and processing of a data source, including the institutions and persons who produced it.

### Provenance per value

A fine-grained trail of extraction per data field, recording by which method (regex, LLM, manual, AI-corrected) a value entered the dataset.

## Related

- Templates of the Promptotyping Documents (this folder)
- [Convention](convention.md)
- [Promptotyping](https://dhcraft.org/Promptotyping/)
- Epistemic Infrastructure
- Critical-Expert-in-the-Loop
- [Project template](project.md)
- [Specification template](specification.md)
- [Architecture template](architecture.md)
