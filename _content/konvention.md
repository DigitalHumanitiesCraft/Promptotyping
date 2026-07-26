---
title: Convention Promptotyping Documents
slug: konvention
version: "0.2"
status: complete
language: en
source: Konvention Promptotyping Documents
updated: 2026-07-26
mirrored: 2026-06-10
machine-url: https://dhcraft.org/Promptotyping/_content/konvention.md
---

# Convention Promptotyping Documents

## Summary

Promptotyping Documents are the Markdown documents in the `knowledge/` folder of a Promptotyping repository. This convention describes, descriptively, which functions such a knowledge base covers, which frontmatter vocabulary applies, and which structural principles carry it. Which documents and how many a concrete repository holds depends on the project and is decided by the agent from the trigger criteria per function. The convention is derived from the practice in HerData (state of refactor `13f9880`, 2026-05-09), which serves as the reference implementation. The fillable templates are addressable as Promptotyping Document sections of this site (see the template catalogue below). The empirical basis is held in the vault document on frontmatter practice in Promptotyping repositories, 2026-05.

## Scope

The convention applies to Markdown files in the `knowledge/` folder, or an equivalently named folder, of a Promptotyping repository. It does not apply to vault mirror documents, which follow a separate vault standard. Repository frontmatter and vault frontmatter are two separate vocabularies, and a vault mirror of a repository document does not take over the repository frontmatter unfiltered.

## What a Promptotyping Document is

A Promptotyping Document is a knowledge document, a structured unit of knowledge distilled from raw material and optimised as a context artefact for work shared between people and language models. Three properties make it one.

- **Dually readable.** The same text is comprehensible to the scholar and usable as context by the model. This is the property the whole method rests on, because reading is how the scholar verifies, and that same text is what the artefact is derived from.
- **Compact.** Maximum information at minimum tokens, which is the writing principle of the Distillation phase and the answer to the degradation of model performance under growing context.
- **Portable.** A Markdown file that can be linked and exchanged across knowledge systems, versioned in git, readable by people and machines without conversion.

Dual readability disciplines the writing. A data description too vague for a model to work against is usually also too vague to count as scholarly documentation, which is why the demand tightens the text instead of adding a second obligation to it.

One document carries one function. A small tool repository may therefore consolidate several functions into one file, and a multi-stage pipeline may split them further; what stays constant is the function, not the file name. The functions below are the recurring ones, each with the condition under which it applies.

## Functions of a Promptotyping knowledge base

A knowledge base in the `knowledge/` folder covers a range of functions. Which functions are relevant, and how many files carry them, depends on the project. The convention describes these functions rather than a fixed list of documents, so that an agent setting up a new repository checks the trigger criterion per function and decides which documents to create.

The function names have been English since 2026-07-19 (Navigation, Charter, Material, Specification, Architecture, Technology Baseline, Domain Knowledge, Design, Quality Assurance, Provenance, Planning, Reporting, Agent Instructions, Verification, Integration). The template names remain unchanged even where they are German (Vorlage Datengrundlage, Vorlage Domänenwissen), because real repositories reference them in `template:` fields and the site anchors rest on them. Template names are identifiers rather than designations of function.

| Function | Question it answers | Trigger | Typical carrier |
|---|---|---|---|
| Navigation | What lies here, how do I read it, which terms are constitutive? | knowledge base has more than three documents or several constitutive terms | `INDEX.md` (combines navigation and term glossary) |
| Charter | What is this project, for whom, with what goal and what material basis? | always | `project.md` or `README.md` |
| Material | What is the substrate that is processed or produced? | project processes or produces data | `data.md` |
| Specification | What is the system to do and why? | always | `specification.md` (requirements, epics and user stories, functional scope, decisions); ADRs and decisions can be split out as `decisions.md`; narrative scenarios as a section in `specification.md`, as a separate `user-stories.md` for large projects, or as "Acceptance Scenarios" in the spec (equivalent) |
| Architecture | How is it technically realised? | system goes beyond a static site | `architecture.md` |
| Technology Baseline | With which technologies is a whole family of artefacts built, and why do the rules read as they do? | several projects build the same artefact type and the stack rationale is reusable; held centrally and referenced by the instances | `technology-baseline.md`; template [Vorlage Technology](#promptotyping-document-technology) |
| Domain Knowledge | Which scholarly-methodological knowledge and which stipulations apply (the why and the domain rulebook)? | research, edition or data project with a layer of methodological stipulation or theory | `editorial-guidelines.md`, `tei-mapping.md`, `methodik.md`, `forschungsrahmen.md`, `ontology.md`; template [Vorlage Domänenwissen](#promptotyping-document-domain-knowledge) |
| Design | What does it look like, how does it behave aesthetically? | project has a UI | `design.md` |
| Quality Assurance | What is guaranteed, what deliberately is not, and how is it checked? | project with tests, verification or acceptance checks | `testing.md` (or `test-strategy.md`); template [Vorlage Testing](#promptotyping-document-testing) |
| Verification | Do the project's own empirical and novelty claims survive an adversarial check against the raw data? | project makes empirical findings or novelty claims that are used externally (paper, report, handover) | `verification.md` (also `verifikation.md`, `conformance-*.md`); template [Vorlage Verification](#promptotyping-document-verification) |
| Provenance | How did we get here? | always | `journal.md` |
| Planning | Where does it go next, and in what order? | project with phases, milestones or sprint steering | `plan.md` (or `roadmap.md`); template [Vorlage Plan](#promptotyping-document-plan); forward counterpart to Provenance |
| Reporting | What is the correct state of the project on date X, communicated to an external addressee? | project status report for an external recipient (client, funder, stakeholder); the regular case in commissioned projects | `report.md` (or `status.md`, which collides less; genre-named `zwischenbericht.md`, `abschlussbericht.md`; machine-generated snapshots may lie outside `knowledge/` in `reports/`); template [Vorlage Report](#promptotyping-document-report) |
| Integration | What does this project deliver to another one, or receive from it, in what format, and how is fulfilment measured? | project with data exchange, contract or handoff to another project or lane | `integration.md`, `{counterpart}-integration.md`; template [Vorlage Integration](#promptotyping-document-integration) |
| Agent Instructions | How is the agent to behave, aesthetically included? | always | `CLAUDE.md` (in the repository root, not in `knowledge/`); references `design.md` as its source of values |

The functions can be merged where the project is small (a trivial tool repository often carries Charter, Material and Specification in a single `project.md`), or split where the project is large (zbz-ocr-tei splits Architecture into pipeline, engines, CER methodology and TEI mapping). The measure is that every function relevant to the project is covered at exactly one findable place, and completeness is beside the point.

Standard file names are lower case (`project.md`, `data.md`, `specification.md`, `architecture.md`, `design.md`, `journal.md`, `plan.md`, `testing.md`, `verification.md`, `integration.md`, `report.md`), with `INDEX.md` as the upper-case convention for hub documents. Repositories with other file-naming conventions, for instance zbz-ocr-tei with upper-case names such as `PIPELINE.md`, are not wrong, and they profit less from the reading heuristic below.

## Template catalogue

For the functions that recur in practice, fillable templates lie as Promptotyping Document sections of this site. The catalogue is open, and a template arises as soon as a carrier of a function recurs in comparable form in at least two repositories.

One function escapes that count by construction. A centrally held document is written once for a whole family of projects and referenced from each of them, so a second carrier never appears however many projects rely on it. For such a function the admission criterion is the second referencing project rather than the second document, and Technology Baseline is the case in the current stock. The recurrence the rule looks for is the recurrence of the need, which a reference demonstrates as well as a copy does.

The current stock is the following.

| Template | Function | Recommended file name |
|---|---|---|
| [Vorlage Index](#promptotyping-document-index) | Navigation plus term glossary | `INDEX.md` |
| [Vorlage Projekt-Wissensdokument](#promptotyping-document-project) | Charter (possibly Material and Specification as well) | `project.md` or `README.md` |
| [Vorlage Datengrundlage](#promptotyping-document-data) | Material | `data.md` |
| [Vorlage Specification](#promptotyping-document-specification) | Specification (formal requirements, epics and user stories, functional scope, decisions) | `specification.md` |
| [Vorlage User Stories](#promptotyping-document-user-stories) | Specification (narrative usage scenarios in a separate file; documented exception only) | `user-stories.md` |
| [Vorlage Action-Layer](#promptotyping-document-action-layer) | Agent Instructions | `CLAUDE.md` (repository root) |
| [Vorlage Architecture](#promptotyping-document-architecture) | Architecture (including external models and deployment as sections; regular split-out `pipeline.md`) | `architecture.md` |
| [Vorlage Technology](#promptotyping-document-technology) | Technology Baseline (rules and rationale for a whole artefact family, held centrally) | `technology-baseline.md` |
| [Vorlage Domänenwissen](#promptotyping-document-domain-knowledge) | Domain Knowledge (layer of rationale and domain rulebook) | `editorial-guidelines.md`, `methodik.md`, `tei-mapping.md` and others |
| [Vorlage Design](#promptotyping-document-design) | Design | `design.md` |
| [Vorlage Testing](#promptotyping-document-testing) | Quality Assurance | `testing.md` |
| [Vorlage Verification](#promptotyping-document-verification) | Verification (adversarial check of a project's own claims against the raw data) | `verification.md` |
| [Vorlage Journal](#promptotyping-document-journal) | Provenance | `journal.md` |
| [Vorlage Plan](#promptotyping-document-plan) | Planning (forward) | `plan.md` or `roadmap.md` |
| [Vorlage Report](#promptotyping-document-report) | Reporting | `report.md` |
| [Vorlage Integration](#promptotyping-document-integration) | Integration (cross-project contracts and handoffs) | `integration.md`, `{counterpart}-integration.md` |

A template carries a function rather than a fixed file name. Anyone who wants to name the repository document differently, for instance `material.md` instead of `data.md` or `corpus.md` for an edition project, uses the same template. The frontmatter schemas and structural principles hold independently of the concrete file name.

Convention change of 2026-05-30: epics and user stories move into `specification.md` as a section of their own, and a separate `user-stories.md` has since been the documented exception for large projects, typically edition projects, whose Specification function is split anyway. The [Vorlage Specification](#promptotyping-document-specification) carries the section from template version 0.2 onwards, and the [Vorlage User Stories](#promptotyping-document-user-stories) stays in the catalogue for the exceptional case.

Where a repository covers a function for which no template yet exists, for instance `cer-methodik.md` in OCR projects or `personas.md` as a UX artefact, the document stays freehand for the time being; the convention supplies the frontmatter vocabulary and the structural principles, which suffices for a start. As soon as a second repository carries the same function in comparable form, a template of its own becomes worthwhile.

Verification and Integration were candidate functions from 2026-06-13 and were promoted on 2026-07-19 to full functions with a template of their own, after the content audit confirmed the threshold of two comparable occurrences (Verification in kisug, FemPrompt and szd-htr-ocr-pipeline; Integration in teiCrafter and szd-htr-ocr-pipeline). Since 2026-07-19 all templates in the catalogue are released (`status: complete`), and a draft status of a template would stand visibly in catalogue and template alike.

## Template addressability through the `template:` field

Every template has a permanent public address on the Promptotyping site (https://dhcraft.org/Promptotyping/). Repositories link to the authoritative template specification through a `template:` field in the frontmatter. The document itself thereby becomes the canonical source rather than the template mirror in the vault, since a coding agent that sees a `template:` URI can retrieve the full specification without knowing the vault.

The field carries three mandatory subfields (`name`, `version`, `url`) and one optional subfield (`alias`). The default is latest addressing, so `url:` and `alias:` point at the current version of the template section on the site, without a version suffix. Two URL forms are canonical and equivalent, `url:` as the subpath form (machine-friendly) and `alias:` as the hash form (a browser-native anchor on the same page). Both resolve identically, and repositories may omit one of the two forms where they prefer.

```yaml
template:
  name: Vorlage Datengrundlage
  version: 0.1
  url: https://dhcraft.org/Promptotyping/promptotyping-document/data
  alias: https://dhcraft.org/Promptotyping/#promptotyping-document-data
```

Snapshot addressing. Should a `v0.2` or higher appear in future, older versions stay reachable through hash anchors on the same template page (`#v0.1`, `#v0.2` and so on). Repositories maintain their `template:` field once, pointing at the template, and thereby follow the latest version by default; anyone who wants to pin a particular snapshot version appends `#v0.1` to the `url:` and `-v0.1` to the `alias:`.

The field belongs to the recommended layer and is set as soon as a catalogue template exists for the document. Vault mirror documents do not carry it. Why it stands outside the mandatory core despite its functional weight is explained by the frontmatter schema.

## Action layer in the repository root

Action documents lie in the repository root rather than in the `knowledge/` folder. The standard is `CLAUDE.md` as the agent configuration, and it should refer explicitly to the `knowledge/` folder so that the agent takes the knowledge base as context. Structure and filling are described by the [Vorlage Action-Layer](#promptotyping-document-action-layer) (since 2026-06-09, released 2026-07-19). `RULES.md`, `INSTRUCTIONS.md` and `cloud-commands.md` are specific to the research control-room setup with several parallel agents in differentiated roles, and they are no standard for ordinary Promptotyping repositories.

On the aesthetic layer the Agent Instructions function takes effect through `CLAUDE.md` binding in `design.md` as its source of values, for instance through a section on design principles with imperatively formulated sentences derived from the design stance, or through the instruction to read `design.md` before generating any UI. The `design.md` itself stays a Declarative Document, and the imperative translation belongs in the action layer. This division follows the reading heuristic below and prevents a document from changing its analytical type.

## Classification of the document types

Promptotyping distinguishes three document types analytically (Pollin 2026, section 3.3). All three are knowledge documents, specialised by the kind of knowledge they hold.

Declarative Documents hold knowledge about the subject matter. They describe what is known about the data, the domain and the research context. Examples are `README.md`, `project.md`, `data.md`, `requirements.md`, `architecture.md`, `design.md`, `editorial-guidelines.md`, mapping rules and verification documents. They extend the model's epistemic horizon and outlast, as a curated layer, the changes to code, model versions and tools. Until July 2026 this type was called Knowledge Document here; the name has moved to the superordinate term.

Process Documents hold knowledge about the course of the work. They record the progress of the work, chronologically or analytically. Examples are `JOURNAL.md`, `learnings.md`, `plan.md`. They are updated continuously and form, together with the git history, the context memory.

Action Documents hold knowledge about how to act. They describe what agents may do within the project and how. Examples are `instructions.md`, `rules.md`, `CLAUDE.md`, along with the testing strategy, the technology baseline, and in multi-agent projects the role and orchestration rules. They steer the model's behaviour.

`design.md` is declarative and thus a Declarative Document, because it describes design stance, design system and interaction patterns. The socialisation of the coding agent on the aesthetic layer is a reading effect that arises when an Action Document, typically `CLAUDE.md`, refers to the `design.md` and carries the imperative design principles there. The declarative stays declarative and the action stays action; the aesthetic steering comes from the composition of two documents rather than from a hybrid type.

The classification is analytical rather than rigid, and it is not carried in the frontmatter. It supplies a diagnostic grid. Where the output is factually wrong, the Declarative Document is checked first. Where it is formally wrong, the Action Document. Where the decision logic is unclear, the Process Document.

## Reading heuristic (function to type to diagnosis)

Instead of a `type:` field in the frontmatter, a document's function carries its type implicitly. The following heuristic lets an agent decide without a frontmatter lookup which document to check first for a given failure pattern. The heuristic connects the function with typical file names; where a repository carries other file names, the function applies rather than the name.

| Function | Type | Typical file names | Which failure pattern to check it for first |
|---|---|---|---|
| Navigation | Declarative | `INDEX.md`, `00_INDEX.md` | order unclear, document not found, term used wrongly (the glossary lives in the index) |
| Charter | Declarative | `project.md`, `README.md`, `PROJEKT.md` | output factually wrong, project context unclear |
| Material | Declarative | `data.md`, `DATA.md`, `corpus.md`, `material.md` | data fields confused, examples cited wrongly |
| Specification (formal) | Declarative | `specification.md`, `requirements.md`, `features.md`, `decisions.md` as an ADR split-out | acceptance criterion ignored, earlier decision revised, function misrepresented |
| Decision record | Process | `decisions.md` where it lifts the standing decisions out of the running journal | a decision already taken is reopened, the current rule is not findable outside the log |
| Specification (narrative) | Declarative | `specification.md` (section on epics and user stories); where split, `user-stories.md`, `scholar-user-stories.md` | usage scenario misunderstood, research operation ignored |
| Architecture | Declarative | `architecture.md`, `pipeline.md`, `infrastruktur.md` | false assumptions about components, data flow, layer boundaries |
| Technology Baseline | Action | `technology-baseline.md` | generated artefact breaks a family-wide technology rule (build step, forbidden dependency, wrong hosting form), or a deviation stands without a rationale in the instance's `architecture.md` |
| Domain Knowledge | Declarative | `editorial-guidelines.md`, `tei-mapping.md`, `methodik.md`, `forschungsrahmen.md`, `ontology.md` | domain rule or method violated, editorial guideline ignored, layer of rationale missing |
| Design | Declarative | `design.md`, `DESIGN.md` | UI inconsistency, break in the design system, design stance unclear (for agent behaviour that contradicts design values, check `CLAUDE.md` as well) |
| Quality Assurance | Action | `testing.md`, `test-strategy.md` | guarantee unclear, test missing or failing, acceptance criterion unchecked |
| Verification | Declarative | `verification.md`, `verifikation.md`, `conformance-*.md` | externally used claim unsupported, headline figure not recomputable, novelty claim unchecked |
| Provenance | Process | `journal.md`, `JOURNAL.md`, `learnings.md` | decision logic unclear, earlier dead ends repeated |
| Planning | Process | `plan.md`, `roadmap.md` | order or phase boundary unclear, next step not recognisable (forward; Provenance is backward) |
| Reporting | Declarative (snapshot) | `report.md`, `status.md`, `zwischenbericht.md`, `abschlussbericht.md` | external claim about the state unclear or outdated, addressee not recognisable, evidence missing |
| Integration | Declarative | `integration.md`, `{counterpart}-integration.md`, `HANDOFF.md` | interface format misunderstood, responsibility at the project boundary unclear, the two sides describe the contract inconsistently |
| Agent Instructions | Action | `CLAUDE.md`, `RULES.md`, `INSTRUCTIONS.md` (repository root) | break in style, prohibition ignored, formally wrong output |

In repositories with file names shaped by project semantics, where zbz-ocr-tei carries `TEI-MAPPING.md`, `CER-METHODIK.md` and `EDITION.md`, the semantic content decides the function rather than the file name. As a rule these are Declarative Documents carrying a specialisation of the Material or Architecture function.

## Frontmatter schema

The frontmatter follows a reduced mandatory core and two optional layers. The core is as small as possible, because fewer fields are maintained more consistently. A field moves into the core only where the practice already carries it across the board.

### Mandatory core

| Field | Type | Purpose |
|---|---|---|
| `title` | string | Human-readable document title |
| `project` | object | Nested with `name` and `repository` |
| `method` | object | Nested with `name` and `url`; usually `Promptotyping` |
| `status` | enum | `draft`, `active`, `archived` |
| `created` | date YYYY-MM-DD | Date of creation |
| `updated` | date YYYY-MM-DD | Last substantive update |

The purpose of the document is carried by the first paragraph under the H1, in one sentence and understandable without repository context.

`template` sits in the recommended layer, and doing without it has a consequence worth knowing. Whoever carries the field is addressable through the frontmatter inspector and connectable by machine. Whoever omits it loses that property and nothing else.

### Recommended

| Field | Type | Purpose |
|---|---|---|
| `template` | object | Nested with `name`, `version`, `url`, optionally `alias`; see the section on template addressability. To be set as soon as a catalogue template exists |
| `authors` | list | Persons with curatorial responsibility. Carries humans exclusively, even where an LLM produced the text; responsibility lies with whoever commissions it |
| `generated-with` | string | Harness and LLM in the form `Harness (LLM)`, several LLMs comma-separated inside the brackets. Omitted where the document arose without an LLM |
| `topics` | list (wikilinks) | Fields of knowledge that contextualise the filling or reading of the document |
| `language` | string | Language code (`de`, `en`) |
| `version` | string | Repository schema version, raised jointly across the repository |
| `related` | list | Cross-references to sibling documents in the same repository |

### Context-dependent

| Field | Type | Purpose |
|---|---|---|
| `output-of` | string | The command that produces this document. Only for machine-generated documents; see the section on provenance in the frontmatter |
| `knowledge-sources` | nested map | External knowledge sources as a URI mapping, grouped by type (`institutions`, `standards`, `methods`, `vocabularies`) |
| `tags` | list | Optional, only where a cross-vault thematic search by domain is relevant; carries no structural information |
| `iteration` | integer | Only for iterated documents |
| `baseline` | wikilink | Predecessor document of the current iteration |
| `feedback-source` | string | The source the iteration arose from |
| `verification-milestone` | string | Associated verification milestone from the pipeline |
| `aliases` | list | Alternative designations for linking |
| `dependencies` | list (wikilinks) | Only in repositories with an explicit predecessor graph (the zbz-ocr-tei pattern); otherwise omitted |

### Provenance in the frontmatter

Three fields record how a document came about. Together they answer a single question from which an action follows at the next access, namely whether the document will be overwritten on the next run.

`authors` names the humans who are responsible for the content. An LLM never stands there, however much text it contributed, because responsibility lies with whoever commissions the work and checks the result. The survey found two violations of this, to be cleaned up on the next pass.

`generated-with` names harness and LLM in the form `Claude Code (Claude Opus 5)`, several LLMs comma-separated inside the brackets. The fixed format resolves a real conflict, since the existing stock holds `Claude Code mit Claude Opus 4.8` beside `Claude Code with Claude Opus 4.8`, carrying the same statement in two languages. The bracket is language-neutral.

`output-of` carries the command that produces the document, and it is set only where that command reproduces it. Where the field stands, the document is not edited by hand and a correction goes to the source. Where it is missing, a human is responsible for the text directly. The value is an executable command and is therefore open to scripts, make targets and command-line tools alike.

```yaml
authors: [Christopher Pollin]
generated-with: Claude Code (Claude Opus 5)
output-of: python tools/render_data.py
```

What does not belong in the header is the sequence of working steps. Whether a script produced a skeleton, an LLM iterated over it and a human then edited it is the course of the work and thus process knowledge. It belongs in the journal.

### Connection to Dublin Core

The field names carry no namespace prefixes. A colon in a YAML key forces quoting and raises the maintenance hurdle exactly where it already breaks, and some of the fields have no counterpart at all, so a mixed vocabulary would arise. The semantics is therefore recorded here instead of in the key. Eight fields correspond to a DCMI Metadata Term literally, and a generator that renders `CITATION.cff` or `codemeta.json` from the frontmatter can rely on that. A ninth mapping does not run through a field. `dcterms:description` is taken from the first paragraph under the H1, because since the reduction of the core the purpose of the document stands there.

| Field | DCMI Term | Definition at the source |
|---|---|---|
| `title` | `dcterms:title` | A name given to the resource |
| `authors` | `dcterms:creator` | An entity responsible for making the resource |
| `language` | `dcterms:language` | A language of the resource |
| `created` | `dcterms:created` | Date of creation of the resource |
| `updated` | `dcterms:modified` | Date on which the resource was changed |
| `related` | `dcterms:relation` | A related resource |
| `project` | `dcterms:isPartOf` | A related resource in which the described resource is physically or logically included |
| `template` | `dcterms:conformsTo` | An established standard to which the described resource conforms |

The match at `template` carries furthest. The relation of a document to its template is exactly what `dcterms:conformsTo` designates, which turns template addressability into a standard-conformant statement instead of a house convention.

Four fields remain without a counterpart. For `status` and `method` the DCMI Metadata Terms hold nothing suitable, and `dcterms:instructionalMethod` is meant pedagogically and does not carry here. For `generated-with` and `output-of` PROV would be the obvious connection, yet `prov:wasGeneratedBy` has a `prov:Activity` as its range rather than a tool, so a field with a command as its value does not map onto it directly. A clean PROV mapping remains to be worked out and is deliberately left open here.

### On the semantics of `version:`

The refactor in HerData (`13f9880`) carries `version: 0.2` throughout all eight documents, the same value across the whole knowledge base. `version:` is therefore to be understood as a repository-wide schema version rather than as document-individual. All documents are lifted to one level together, and the value marks the state of the refactor. At every knowledge-vault refactor the version is raised repository-wide.

### On the semantics of `knowledge-sources:`

`knowledge-sources` is the structural feature that distinguishes Promptotyping knowledge documents from generic READMEs. It makes the document connectable to linked open data, since every source listed is uniquely identified by a URI. The second level groups by source type, the third level lists label and URI.

Selective use. In the HerData refactor `knowledge-sources:` is carried only in `project.md`, `data.md` and `architecture.md`, that is, where external connections carry the substance. In `design.md`, `decisions.md`, `features.md` and `JOURNAL.md` it is deliberately absent. This selectivity is the correct practice, since the field belongs where it carries and nowhere else.

### On the semantics of `topics:`

`topics` is the field in which a document names its fields of knowledge, the fields in which a coding agent or reviewer is to be situated while reading and filling it. Unlike `tags`, which classify a document, topics align the reading context. They tell the agent to read and work in this knowledge environment, and they say nothing about how the document is to be sorted.

Topics are written as wikilinks to vault concepts rather than as strings. The link into the vault's body of knowledge is thereby explicit. A `design.md` with `topics: ["[[Information Visualisation]]", "[[Scholar-Centered Design]]"]` sends the agent into exactly those concept documents when reasoning about UI design, instead of activating generic UI patterns. Repositories without a vault mirror can treat the wikilinks as plain identifiers; on vault synchronisation they resolve.

The vocabulary is project-free. There is no convention-wide controlled topic list, and every repository chooses its topics from its own knowledge environment. The only convention is kebab-case or Capital Case, as in the vault document name.

Bindingness is optional. Topics are carried where a clear field of knowledge is relevant (data modelling, information visualisation, requirements engineering); they are omitted where the document carries no thematic placement by domain, typically in `INDEX.md` and `journal.md`.

## Structural principles

Three principles should be recognisable in every Promptotyping Document.

Separation of doing, not-doing and the origin of substance. The description of what the document delivers is kept apart from the deliberate negation and from the origin of the material used. This tripartition prevents an indistinguishable mixture of description, self-aggrandisement and data provenance.

Standards as a main component. Standards, vocabularies and ontologies in use belong in the main body of a knowledge document rather than in an appendix. Connectability to external knowledge is part of the project's identity.

Negative self-definition. What is deliberately not delivered is named as explicitly as what is delivered. This omission is constitutive and should be preserved.

## Distillation as a writing principle

Promptotyping Documents follow the distillation principle from the method paper, maximum information with minimum tokens (Hong et al. 2025; Pollin 2026, section 3.3). Concretely this means:

- A document carries one bounded function.
- Redundancies between documents are represented through wikilinks (`related:`).
- The most important content stands in the first sentences and at the close.
- Periodic refactoring, meaning consolidation through prompts, belongs to the routine.

## Application

When setting up a new Promptotyping repository:

1. Check the functions. Which of the functions listed above are relevant to this project (apply the trigger criterion per function)?
2. Map the functions onto documents. Small projects merge several functions into one document, large projects split one function across several documents.
3. Copy the matching template block from the catalogue per document and fill it in. Where no template exists, the convention alone serves as the guide.

When refactoring a knowledge folder, checklist:

- Does every document carry the mandatory core (`title, project, method, status, created, updated`)?
- Is `version:` consistent across the repository?
- Are nested fields (`project:`, `method:`, `knowledge-sources:`) cleanly structured, with no flat `method-url:` and the like?
- Is `knowledge-sources:` used selectively, where external connections carry, and omitted otherwise?
- Are the three structural principles (separation, standards in the main body, negative self-definition) recognisable in the document?

## Note by the site (2026-06-10)

This section is an addition by the site and no part of the vault convention v0.1. It clarifies how the template addresses are to be resolved for machines and for humans.

For machines, meaning coding agents that retrieve over HTTP without executing JavaScript, the canonical retrieval form of every template is the static Markdown URL under `_content/`. It delivers the raw Markdown text directly from the GitHub Pages repository root, without the site's single-page JavaScript having to run. The pattern:

```
https://dhcraft.org/Promptotyping/_content/promptotyping-document/{slug}.md
```

Concretely, for instance `https://dhcraft.org/Promptotyping/_content/promptotyping-document/data.md` for the Vorlage Datengrundlage. This address is also recorded in the `machine-url` frontmatter field of every mirrored template.

The subpath and hash forms carried in the `template:` field (`/promptotyping-document/{slug}` and `#promptotyping-document-{slug}`) are the human-readable addresses. They lead to the rendered template in the interactive single page. Subpath resolution presupposes JavaScript, since a call to `/promptotyping-document/{slug}` is rewritten by JavaScript through the repository's `404.html` onto the corresponding hash anchor. An agent that retrieves this form without JavaScript therefore receives the routing fallback instead of the template text. Whoever needs the raw text deterministically and without a browser environment uses the static `_content/` Markdown URL.

## Relation to the vault frontmatter

The vault standard fixes a frontmatter minimum of its own with a closed `type:` list. This convention extends the vocabulary for the repository context alone, so that in the repository's `knowledge/` folder the mandatory core described here applies instead of the vault minimum.

Where a repository document is created as a vault mirror, for instance a piece of method documentation held in the vault as a knowledge document, the frontmatter is adjusted. A vault-conformant `type:` is set, and repository-specific fields (`project`, `version`, `knowledge-sources`) are dropped or carried over into prose.
