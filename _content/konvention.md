---
title: Convention Knowledge Documents
slug: konvention
version: "0.3"
status: complete
language: en
source: Konvention Promptotyping Documents
updated: 2026-08-21
mirrored: 2026-08-21
machine-url: https://dhcraft.org/Promptotyping/_content/konvention.md
---

# Convention Knowledge Documents

## Summary

Knowledge Documents are the durable Markdown documents in the `knowledge/` folder of a Promptotyping repository. Their file names are the primary routing signal for agents working through terminals and search results. This convention defines the naming contract, document functions, frontmatter vocabulary, and structural principles of that knowledge base. The fillable templates remain addressable through stable Knowledge Document sections of this site.

## Scope

The convention applies to durable project knowledge under `knowledge/` and to the boundaries between that core and adjacent artefact areas. Vault mirrors follow a separate vault standard. Repository frontmatter and vault frontmatter are separate vocabularies, and a vault mirror does not inherit repository frontmatter unfiltered.

## Naming contract and artefact areas

File names carry function before a document is opened. Functional names and subject prefixes are English. The standard form is lowercase kebab-case; `INDEX.md` and `CLAUDE.md` are established exceptions with specific routing roles.

Single carriers use canonical names such as `project.md`, `data.md`, `specification.md`, `architecture.md`, `design.md`, `testing.md`, `verification.md`, `journal.md`, `handoff.md`, `plan.md`, and `governance.md`. Specialisations follow `<subject>-<function>.md`, for example `research-methodology.md`, `character-error-rate-methodology.md`, `data-schema.md`, `output-schema.md`, and `tei-mapping.md`. Terms are written out. Official or constitutive abbreviations are permitted when `INDEX.md` defines them.

Reports and exceptional handoff snapshots identify scope and date: `<scope>-report-YYYY-MM-DD.md` and `<scope>-handoff-YYYY-MM-DD.md`. Every project also carries the live Process Inbox `knowledge/handoff.md`, including when it is empty. Dated snapshots under `handoffs/` supplement this Inbox and never replace it. A document is split when its parts answer independent routing questions or develop different update cycles. The split produces named functions or specialisations and is registered in `INDEX.md`.

| Area | Contents | Lifecycle |
|---|---|---|
| `knowledge/` | durable Promptotyping Documents, including the live Process Inbox `handoff.md` | maintained with the project |
| `research-artefacts/` | papers, articles, talks, and other scholarly outputs | revised according to their publication lifecycle |
| `source-material/` | transcripts, imports, and supplied material | preserved as input and provenance |
| `snapshots/` | dated reports and frozen assessments | immutable in scope and date except for corrections |
| `handoffs/` | exceptional dated transfer snapshots between agents or workstreams | retained for re-entry and provenance |
| `generated/` | reproducible derived output | regenerated from its source; an established domain output folder may replace it when `INDEX.md` documents the rule |

The assignment needs no mandatory `function:` frontmatter field. The file name, lead paragraph, `template:` field, and `INDEX.md` carry it. Routing is a qualitative quality objective: a reader should identify the likely document from the search result and confirm the function in its lead. The convention introduces no A/B test, threshold, or LLM benchmark.

## What a Knowledge Document is

A Knowledge Document is a knowledge document, a structured unit of knowledge distilled from raw material and optimised as a context artefact for work shared between people and language models. Three properties make it one.

- **Dually readable.** The same text is comprehensible to the scholar and usable as context by the model. This is the property the whole method rests on, because reading is how the scholar verifies, and that same text is what the artefact is derived from.
- **Compact.** Maximum information at minimum tokens, which is the writing principle of the Distillation phase and the answer to the degradation of model performance under growing context.
- **Portable.** A Markdown file that can be linked and exchanged across knowledge systems, versioned in git, readable by people and machines without conversion.

Dual readability disciplines the writing. A data description too vague for a model to work against is usually also too vague to count as scholarly documentation, which is why the demand tightens the text instead of adding a second obligation to it.

One document carries one routing question. A small tool repository may consolidate several functions in a canonical carrier while they share one update cycle. A multi-stage project splits them when routing questions or update cycles diverge.

## Functions of a Promptotyping knowledge base

A knowledge base in the `knowledge/` folder covers a range of functions. Which functions are relevant, and how many files carry them, depends on the project. The convention describes these functions rather than a fixed list of documents, so that an agent setting up a new repository checks the trigger criterion per function and decides which documents to create.

The function names are English (Navigation, Charter, Material, Specification, Architecture, Technology Baseline, Domain Knowledge, Design, Quality Assurance, Verification, Provenance, Handoff, Planning, Governance, Reporting, Integration, Agent Instructions). Template names remain unchanged even where they are German because repositories reference them in `template:` fields and the site anchors rest on them. Template names are stable identifiers.

| Function | Question it answers | Trigger | Typical carrier |
|---|---|---|---|
| Navigation | What lies here, how do I read it, which terms are constitutive? | knowledge base has more than three documents or several constitutive terms | `INDEX.md` (combines navigation and term glossary) |
| Charter | What is this project, for whom, with what goal and what material basis? | always | `project.md` |
| Material | What is the substrate that is processed or produced? | project processes or produces data | `data.md` |
| Specification | What is the system to do and why? | always | `specification.md`; independent decision classes may become `architecture-decisions.md` or `project-decisions.md`; large narrative scenarios may become `user-stories.md` |
| Architecture | How is it technically realised? | system goes beyond a static site | `architecture.md` |
| Technology Baseline | With which technologies is a whole family of artefacts built, and why do the rules read as they do? | several projects build the same artefact type and the stack rationale is reusable; held centrally and referenced by the instances | `technology-baseline.md`; template [Vorlage Technology](#promptotyping-document-technology) |
| Domain Knowledge | Which scholarly-methodological knowledge and which stipulations apply? | research, edition or data project with a layer of methodological stipulation or theory | `research-methodology.md`, `editorial-guidelines.md`, `tei-mapping.md`, `ontology.md`; template [Vorlage Domänenwissen](#promptotyping-document-domain-knowledge) |
| Design | What does it look like, how does it behave aesthetically? | project has a UI | `design.md` |
| Quality Assurance | What is guaranteed, what deliberately is not, and how is it checked? | project with tests, verification or acceptance checks | `testing.md` or `<subject>-testing.md`; template [Vorlage Testing](#promptotyping-document-testing) |
| Verification | Do the project's own empirical and novelty claims survive an adversarial check against the raw data? | project makes empirical findings or novelty claims that are used externally | `verification.md` or `<subject>-verification.md`; template [Vorlage Verification](#promptotyping-document-verification) |
| Provenance | How did we get here? | always | `journal.md` |
| Handoff | Which received deltas still await checking, integration, or rejection? | always | `handoff.md`; template [Vorlage Handoff](#promptotyping-document-handoff) |
| Planning | Where does it go next, and in what order? | project with a multi-step sequence | `plan.md` or `<subject>-plan.md`; template [Vorlage Plan](#promptotyping-document-plan) |
| Governance | Which standing authority, decision, and change rules bind the project? | project with rules beyond the action layer | `governance.md` |
| Reporting | What was the correct state of a defined scope on date X for an external addressee? | project status report for an external recipient | `snapshots/<scope>-report-YYYY-MM-DD.md`; template [Vorlage Report](#promptotyping-document-report) |
| Integration | What does this project deliver to another one, or receive from it, in what format, and how is fulfilment measured? | project with data exchange or a standing cross-project contract | `integration.md`, `<counterpart>-integration.md`; template [Vorlage Integration](#promptotyping-document-integration) |
| Agent Instructions | How is the agent to behave, aesthetically included? | always | `CLAUDE.md` (in the repository root, not in `knowledge/`); references `design.md` as its source of values |

Functions may be merged while they share a routing question and update cycle. They are split when either boundary diverges. Every relevant function must remain covered in one findable place.

## Template catalogue

For the functions that recur in practice, fillable templates lie as Knowledge Document sections of this site. The catalogue is open, and a template arises as soon as a carrier of a function recurs in comparable form in at least two repositories.

One function escapes that count by construction. A centrally held document is written once for a whole family of projects and referenced from each of them, so a second carrier never appears however many projects rely on it. For such a function the admission criterion is the second referencing project rather than the second document, and Technology Baseline is the case in the current stock. The recurrence the rule looks for is the recurrence of the need, which a reference demonstrates as well as a copy does.

The current stock is the following.

| Template | Function | Recommended file name |
|---|---|---|
| [Vorlage Index](#promptotyping-document-index) | Navigation plus term glossary | `INDEX.md` |
| [Vorlage Projekt-Wissensdokument](#promptotyping-document-project) | Charter (possibly Material and Specification as well) | `project.md` |
| [Vorlage Datengrundlage](#promptotyping-document-data) | Material | `data.md` |
| [Vorlage Specification](#promptotyping-document-specification) | Specification (formal requirements, epics and user stories, functional scope, decisions) | `specification.md` |
| [Vorlage User Stories](#promptotyping-document-user-stories) | Specification (narrative usage scenarios in a separate file; documented exception only) | `user-stories.md` |
| [Vorlage Action-Layer](#promptotyping-document-action-layer) | Agent Instructions | `CLAUDE.md` (repository root) |
| [Vorlage Architecture](#promptotyping-document-architecture) | Architecture, including subject-specific specialisations | `architecture.md`, `<subject>-architecture.md` |
| [Vorlage Technology](#promptotyping-document-technology) | Technology Baseline (rules and rationale for a whole artefact family, held centrally) | `technology-baseline.md` |
| [Vorlage Domänenwissen](#promptotyping-document-domain-knowledge) | Domain Knowledge (layer of rationale and domain rulebook) | `research-methodology.md`, `editorial-guidelines.md`, `tei-mapping.md` and others |
| [Vorlage Design](#promptotyping-document-design) | Design | `design.md` |
| [Vorlage Testing](#promptotyping-document-testing) | Quality Assurance | `testing.md` |
| [Vorlage Verification](#promptotyping-document-verification) | Verification (adversarial check of a project's own claims against the raw data) | `verification.md` |
| [Vorlage Journal](#promptotyping-document-journal) | Provenance | `journal.md` |
| [Vorlage Handoff](#promptotyping-document-handoff) | Handoff (live Process Inbox) | `handoff.md` |
| [Vorlage Plan](#promptotyping-document-plan) | Planning (forward) | `plan.md`, `<subject>-plan.md` |
| [Vorlage Report](#promptotyping-document-report) | Reporting | `snapshots/<scope>-report-YYYY-MM-DD.md` |
| [Vorlage Integration](#promptotyping-document-integration) | Integration (cross-project contracts) | `integration.md`, `<counterpart>-integration.md` |

A template carries a function and follows the naming contract. A single carrier uses the canonical name; a specialisation uses `<subject>-<function>.md`. Existing public template file names, URLs, and anchors remain stable identifiers.

Convention change of 2026-05-30: epics and user stories move into `specification.md` as a section of their own, and a separate `user-stories.md` has since been the documented exception for large projects, typically edition projects, whose Specification function is split anyway. The [Vorlage Specification](#promptotyping-document-specification) carries the section from template version 0.2 onwards, and the [Vorlage User Stories](#promptotyping-document-user-stories) stays in the catalogue for the exceptional case.

Where a repository covers a function for which no template exists, for instance `character-error-rate-methodology.md` or `personas.md`, the document stays freehand and follows the naming contract and frontmatter vocabulary. A template becomes worthwhile once comparable structures recur.

Verification and Integration were candidate functions from 2026-06-13 and were promoted on 2026-07-19 to full functions with a template of their own, after the content audit confirmed the threshold of two comparable occurrences. Handoff entered the catalogue on 2026-08-21 as the mandatory Process Inbox of every project. All catalogue templates are released (`status: complete`); a draft status would stand visibly in catalogue and template alike.

## Template addressability through the `template:` field

Every template has a permanent public address on the Promptotyping site (https://dhcraft.org/Promptotyping/). Repositories link to the public mirror through a `template:` field in the frontmatter. The Vault template remains the editorial source of truth; the stable public mirror makes the same specification retrievable without Vault access.

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

Action documents lie in the repository root rather than in the `knowledge/` folder. The standard is `CLAUDE.md` as the agent configuration, and it refers explicitly to the durable knowledge base. At every session start the agent reads `knowledge/INDEX.md`, then `knowledge/handoff.md`, and then the task-relevant Declarative or Action Document. `journal.md` is consulted for provenance and decision grounds. Structure and filling are described by the [Vorlage Action-Layer](#promptotyping-document-action-layer). `RULES.md`, `INSTRUCTIONS.md` and `cloud-commands.md` are specific to the research control-room setup and are no standard for ordinary Promptotyping repositories.

On the aesthetic layer the Agent Instructions function takes effect through `CLAUDE.md` binding in `design.md` as its source of values, for instance through a section on design principles with imperatively formulated sentences derived from the design stance, or through the instruction to read `design.md` before generating any UI. The `design.md` itself stays a Declarative Document, and the imperative translation belongs in the action layer. This division follows the routing heuristic below and prevents a document from changing its analytical type.

## Classification of the document types

Promptotyping distinguishes three document types analytically (Pollin 2026, section 2.1). All three are knowledge documents, specialised by the kind of knowledge they hold.

Declarative Documents hold knowledge about the subject matter. They describe what is known about the data, the domain and the research context. Examples are `README.md`, `project.md`, `data.md`, `specification.md`, `architecture.md`, `design.md`, `editorial-guidelines.md`, mapping rules and verification documents. They extend the model's epistemic horizon and outlast, as a curated layer, the changes to code, model versions and tools. Until July 2026 this type was called Knowledge Document here; the name has moved to the superordinate term.

Process Documents separate three temporal functions. `handoff.md` contains open received deltas, `plan.md` accepted future work, and `journal.md` the curated backward provenance index. Git preserves earlier wording. These documents form the context memory without duplicating current project knowledge.

Action Documents hold knowledge about how to act. They describe what agents may do within the project and how. Examples are `instructions.md`, `rules.md`, `CLAUDE.md`, along with the testing strategy, the technology baseline, and in multi-agent projects the role and orchestration rules. They steer the model's behaviour.

`design.md` is declarative and thus a Declarative Document, because it describes design stance, design system and interaction patterns. The socialisation of the coding agent on the aesthetic layer is a reading effect that arises when an Action Document, typically `CLAUDE.md`, refers to the `design.md` and carries the imperative design principles there. The declarative stays declarative and the action stays action; the aesthetic steering comes from the composition of two documents rather than from a hybrid type.

This is the Knowledge-Action Composition, and the axis it runs along carries a name outside the method. Diátaxis separates technical documentation along action against cognition, practical knowledge against theoretical knowledge, knowing how against knowing that (Procida 2024), which is the cut that runs here between a Declarative Document and an Action Document. Two things shift once the addressee is a model. That framework's second axis falls away, acquisition against application, because it presupposes a reader who builds up a practice over time, while a model loads the documents per session and acquires nothing that persists. And the reason for the cut differs. Diátaxis separates so that a reader finds the form their situation calls for, and a knowledge base separates so that a stable description is not overwritten by a volatile instruction. That is why the typology needs both types instead of one mixed type.

The classification is analytical rather than rigid, and it is not carried in the frontmatter. It supplies a diagnostic grid. Where the output is factually wrong, the Declarative Document is checked first. Where it is formally wrong, the Action Document. Where the decision logic is unclear, the Process Document.

## Routing heuristic (file name to function to diagnosis)

Instead of a `type:` or `function:` field in frontmatter, the file name routes to a function and the lead confirms it. The following heuristic identifies the first document to inspect for a given failure pattern.

| Function | Type | Typical file names | Which failure pattern to check it for first |
|---|---|---|---|
| Navigation | Declarative | `INDEX.md` | order unclear, document not found, term used wrongly |
| Charter | Declarative | `project.md` | output factually wrong, project context unclear |
| Material | Declarative | `data.md`, `<subject>-data.md` | data fields confused, examples cited wrongly |
| Specification (formal) | Declarative | `specification.md`, `<subject>-specification.md` | acceptance criterion ignored, function misrepresented |
| Decision record | Process | `architecture-decisions.md`, `project-decisions.md` | a decision already taken is reopened, the current rule is not findable outside the log |
| Specification (narrative) | Declarative | `specification.md` (section on epics and user stories); where split, `user-stories.md`, `scholar-user-stories.md` | usage scenario misunderstood, research operation ignored |
| Architecture | Declarative | `architecture.md`, `<subject>-architecture.md` | false assumptions about components, data flow, layer boundaries |
| Technology Baseline | Action | `technology-baseline.md` | generated artefact breaks a family-wide technology rule (build step, forbidden dependency, wrong hosting form), or a deviation stands without a rationale in the instance's `architecture.md` |
| Domain Knowledge | Declarative | `research-methodology.md`, `editorial-guidelines.md`, `tei-mapping.md`, `ontology.md` | domain rule or method violated, editorial guideline ignored, layer of rationale missing |
| Design | Declarative | `design.md`, `<subject>-design.md` | UI inconsistency, break in the design system, design stance unclear |
| Quality Assurance | Action | `testing.md`, `<subject>-testing.md` | guarantee unclear, test missing or failing, acceptance criterion unchecked |
| Verification | Declarative | `verification.md`, `<subject>-verification.md` | externally used claim unsupported, headline figure not recomputable, novelty claim unchecked |
| Provenance | Process | `journal.md`, `project-learnings.md` | decision logic unclear, earlier dead ends repeated |
| Handoff | Process | `handoff.md` | open input overlooked, source or current target unchecked, durable content not yet integrated |
| Planning | Process | `plan.md`, `<subject>-plan.md` | order or phase boundary unclear, next step not recognisable |
| Governance | Action | `governance.md` | standing authority or change rule unclear, a settled rule is bypassed |
| Reporting | Declarative (snapshot) | `snapshots/<scope>-report-YYYY-MM-DD.md` | external claim about the state unclear or outdated, addressee not recognisable, evidence missing |
| Integration | Declarative | `integration.md`, `<counterpart>-integration.md` | interface format misunderstood, responsibility at the project boundary unclear, the two sides describe the contract inconsistently |
| Agent Instructions | Action | `CLAUDE.md`, `RULES.md`, `INSTRUCTIONS.md` (repository root) | break in style, prohibition ignored, formally wrong output |

Existing repositories may retain established names during a staged migration. New and renamed documents follow the naming contract so that routing converges without requiring a repository-wide rewrite.

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

Historical evidence only. In the HerData refactor `knowledge-sources:` was carried in `project.md`, `data.md` and `architecture.md`, while the files then named `design.md`, `decisions.md`, `features.md` and `JOURNAL.md` omitted it. The old names record that repository state and are no current naming examples. The field belongs only where external connections carry the substance.

### On the semantics of `topics:`

`topics` is the field in which a document names its fields of knowledge, the fields in which a coding agent or reviewer is to be situated while reading and filling it. Unlike `tags`, which classify a document, topics align the reading context. They tell the agent to read and work in this knowledge environment, and they say nothing about how the document is to be sorted.

Topics are written as wikilinks to vault concepts rather than as strings. The link into the vault's body of knowledge is thereby explicit. A `design.md` with `topics: ["[[Information Visualisation]]", "[[Scholar-Centered Design]]"]` sends the agent into exactly those concept documents when reasoning about UI design, instead of activating generic UI patterns. Repositories without a vault mirror can treat the wikilinks as plain identifiers; on vault synchronisation they resolve.

The vocabulary is project-free. There is no convention-wide controlled topic list, and every repository chooses its topics from its own knowledge environment. The only convention is kebab-case or Capital Case, as in the vault document name.

Bindingness is optional. Topics are carried where a clear field of knowledge is relevant (data modelling, information visualisation, requirements engineering); they are omitted where the document carries no thematic placement by domain, typically in `INDEX.md` and `journal.md`.

## Structural principles

Three principles should be recognisable in every Knowledge Document.

Separation of doing, not-doing and the origin of substance. The description of what the document delivers is kept apart from the deliberate negation and from the origin of the material used. This tripartition prevents an indistinguishable mixture of description, self-aggrandisement and data provenance.

Standards as a main component. Standards, vocabularies and ontologies in use belong in the main body of a knowledge document rather than in an appendix. Connectability to external knowledge is part of the project's identity.

Negative self-definition. What is deliberately not delivered is named as explicitly as what is delivered. This omission is constitutive and should be preserved.

## Distillation as a writing principle

Knowledge Documents follow the distillation principle from the method paper, maximum information with minimum tokens (Hong et al. 2025; Pollin 2026, sections 2.1 and 2.2). Concretely this means:

- A document carries one bounded function.
- Redundancies between documents are represented through wikilinks (`related:`).
- The most important content stands in the first sentences and at the close.
- Periodic refactoring, meaning consolidation through prompts, belongs to the routine.

The live Handoff Inbox is processed before its point is removed: verify source and current target, integrate durable content into the responsible Declarative or Action Document, then add a concise Journal record of subject, source, target, and result or rejection reason. A point has no status; its presence means open.

Journal compaction is semantic. It begins when repetition, copied durable knowledge, completed open lists, scattered decision grounds, or expensive regular reading impair the provenance function. Every substantive statement receives a disposition against a clean Git baseline: retain, integrate into a canonical target, reject with a reason, or preserve only through Git. Paths, anchors, and hashes are checked before the temporary coverage list is removed and a `verdichtet` record references the predecessor state. Fixed thresholds and a `journal-archive.md` are excluded.

## Application

When setting up a new Promptotyping repository:

1. Check the functions. Which of the functions listed above are relevant to this project (apply the trigger criterion per function)?
2. Create the always-triggered functions, including `knowledge/handoff.md`. Map the remaining functions onto documents. Merge only while routing question and update cycle remain shared.
3. Copy the matching template block from the catalogue per document and fill it in. Where no template exists, the convention alone serves as the guide.

When refactoring a knowledge folder, checklist:

- Does every document carry the mandatory core (`title, project, method, status, created, updated`)?
- Is `version:` consistent across the repository?
- Are nested fields (`project:`, `method:`, `knowledge-sources:`) cleanly structured, with no flat `method-url:` and the like?
- Is `knowledge-sources:` used selectively, where external connections carry, and omitted otherwise?
- Are the three structural principles (separation, standards in the main body, negative self-definition) recognisable in the document?
- Does `knowledge/handoff.md` exist with `status: active`, and does it contain only open points or the canonical empty state?

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
