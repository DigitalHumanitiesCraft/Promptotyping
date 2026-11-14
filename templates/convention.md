---
title: Convention for Promptotyping Documents
slug: convention
version: "0.5"
status: complete
language: en
updated: 2026-11-14
machine-url: https://dhcraft.org/Promptotyping/templates/convention.md
---
# Convention for Promptotyping Documents

This convention governs the knowledge documents of a Promptotyping repository, meaning their names, functions, frontmatter, structure and maintenance. The templates in this folder apply it document by document, and where a template is more specific, the template holds.

## Scope

The convention applies to the durable project knowledge in the folder `knowledge/` in the repository root, to the action layer `CLAUDE.md` or `AGENTS.md` beside it, and to the boundaries between that core and the other artefact areas of the repository. A folder `docs/` is left to a website published from the repository.

## What a knowledge document is

A knowledge document is a structured unit of knowledge distilled from raw material for work shared between people and LLMs. Three properties make it one.

- It is readable by both. The same text is comprehensible to the researcher and usable as context by the LLM. Reading is how the researcher checks, and the same text is what the artefact is built from. A data description too vague for an LLM to work against is usually too vague to count as scholarly documentation as well.
- It is selective. It keeps what its purpose needs, with the distinctions, conditions and uncertainties an implementation requires. Distillation therefore goes beyond summary or context compression.
- It is portable. A Markdown file can be linked, exchanged between knowledge systems, versioned in Git and read by people and machines without conversion.

One document carries one routing question. A small repository may let a canonical carrier hold several functions while they share one update cycle, and `project.md`, `specification.md` and `journal.md` always stay documents of their own. Functions are split as soon as their routing questions or update cycles diverge. Every relevant function stays covered in one findable place.

## Document types

Promptotyping distinguishes three types of knowledge document by the kind of knowledge they hold. The type is an analytical distinction and stands in no frontmatter field. The short forms Declarative, Process and Action are used in the templates. All three types form the project knowledge base, the declarative and process documents in `knowledge/` and the agent instruction documents in the repository root.

- Declarative knowledge documents state what holds about the subject, the data, the domain, the research context and the work accepted for the project. Examples are `INDEX.md`, `project.md`, `data.md`, `specification.md` with its decisions or a decision record split off from it such as `architecture-decisions.md`, `architecture.md`, `design.md`, `testing.md`, `plan.md`, `governance.md` and the domain knowledge documents. They outlast changes to code, LLM versions and tools.
- Process knowledge documents state what is open and how the understanding developed and why, in `journal.md`. It carries what is open at its beginning and the record of the work beneath it, and `journal-archive.md` and Git preserve its earlier wording.
- Agent instruction documents tell agents how to work in the project. They hold procedures, constraints, the checks to run and pointers to the knowledge a task needs, in the action layer `CLAUDE.md` or `AGENTS.md` in the repository root.

The types are composed and never mixed. `design.md` stays declarative, because it describes design stance, design system and interaction patterns. The action layer names `design.md` as its source of values and carries the imperative design principles derived from it. A stable description is thus never overwritten by a volatile instruction.

The types also give a diagnostic grid. Where output is wrong in substance, the responsible declarative document is the first place to check. Where an agent acts impermissibly, the agent instruction document and its actual delivery are checked. The process documents open up the course of the work and the grounds of decisions. A failure pattern does not establish its cause, and implementation errors remain possible under a correct specification.

## Naming contract

File names carry the function before a document is opened, so that an agent or a reader picks the right document from a file listing or a search result. Names are English and lowercase kebab-case. `INDEX.md` and `CLAUDE.md` (or `AGENTS.md`) are the established exceptions with specific routing roles.

A single carrier uses the canonical name of its function, such as `project.md`, `data.md`, `specification.md`, `architecture.md`, `design.md`, `testing.md`, `journal.md`, `plan.md` or `governance.md`. A specialisation follows `<subject>-<function>.md`, such as `data-schema.md`, `tei-mapping.md`, `pipeline-architecture.md` or `character-error-rate-methodology.md`. Terms are written out, and an official or constitutive abbreviation is permitted when `INDEX.md` defines it.

A name states the routing question of its document and nothing else. The project follows from the repository, status, version and author from the frontmatter and Git. A date belongs only in the name of a dated report or snapshot. A name that carries a status or a sequence number, such as `draft-spec.md`, `02-data.md` or `notes-new.md`, ages with the work and misroutes the next session. A rename is registered in `INDEX.md`, and every link to the old name is updated in the same commit.

A document is split when its parts answer independent routing questions or develop different update cycles. The split produces named functions or specialisations and is registered in `INDEX.md`. Existing repositories may keep established names during a staged migration, and new and renamed documents follow the contract.

## Artefact areas

The durable knowledge core is kept apart from the other areas of a repository. `INDEX.md` lists the areas present and maps a domain-specific output folder onto one of them.

| Area | Contents | Lifecycle |
|---|---|---|
| `knowledge/` | durable knowledge documents, including `journal.md` | maintained with the project |
| `research-artefacts/` | papers, articles, talks and other scholarly outputs | revised according to their publication lifecycle |
| `source-material/` | transcripts, imports and supplied material | preserved as input and provenance |
| `snapshots/` | dated reports and frozen assessments, named `<scope>-report-YYYY-MM-DD.md` | fixed in scope and date except for corrections |
| `handoffs/` | exceptional dated transfer snapshots, named `<scope>-handoff-YYYY-MM-DD.md` | retained for re-entry and provenance |
| `generated/` | reproducible derived output | regenerated from its source |

## Functions and templates

The convention describes functions and leaves the number of files to the project. When a repository is set up, the trigger of each function is checked, and the documents follow from the functions that apply.

| Function | Question it answers | Trigger | Typical carrier | Template |
|---|---|---|---|---|
| Navigation | What lies here, in which order is it read, and which terms are constitutive? | more than three knowledge documents | `INDEX.md`, with the glossary of the project | [index](index.md) |
| Charter | What is the project, for whom, with which aim and on which material? | always | `project.md`, possibly also carrying Material in a small project | [project](project.md) |
| Material | What is the material that is processed or produced? | the project processes or produces data | `data.md`, `<subject>-data.md`, `data-schema.md` | [data](data.md) |
| Specification | What is the system to do, for whom, and why? | always | `specification.md` with requirements, epics and user stories, range of functions and decisions | [specification](specification.md) |
| Architecture | How is the system realised technically, and how does it connect to other projects? | pipeline stages, module boundaries, data flows or security assumptions need documenting | `architecture.md`, `<subject>-architecture.md` | [architecture](architecture.md) |
| Domain knowledge | Which methodological rules of the discipline apply, and on what grounds? | a rule, mapping, calculation logic, vocabulary or theoretical framing that follows neither from the material nor from the requirements | `editorial-guidelines.md`, `tei-mapping.md`, `ontology.md`, `research-methodology.md`, `research-framework.md` | [domain-knowledge](domain-knowledge.md) |
| Design | What does it look like, and how does it behave? | the project has a user interface | `design.md` | [design](design.md) |
| Quality assurance | What is demonstrably guaranteed, what deliberately not, how is it checked, and do claims used outside the project hold? | systematic quality assurance to document, or empirical findings or claims of novelty carried outside the project | `testing.md`, `<subject>-testing.md` | [testing](testing.md) |
| Provenance | What is open, and how did the project reach its state? | always | `journal.md`, with `journal-archive.md` after condensing | [journal](journal.md) |
| Planning | What comes next, in which order, and when is a step done? | at least two sections of work build on each other with checkable completion conditions, or a fixed date paces the work | `plan.md`, `<subject>-plan.md` | [plan](plan.md) |
| Governance | Which standing authority, decision and change rules bind the project? | rules beyond the action layer | `governance.md` | none |
| Agent instructions | How is the agent to work, including in design? | always | `CLAUDE.md` or `AGENTS.md` in the repository root | [action-layer](action-layer.md) |

Several related needs are sections of these documents and no documents of their own. Narrative usage scenarios are the section Epics and user stories of `specification.md`. A rule shared by several projects that build the same kind of artefact lives in a technology baseline that `architecture.md` names by its address in the section Stack, together with the project's own deviations. A contract with another project or system is the section Interfaces to other projects or systems of `architecture.md`. Checking claims carried outside the project is the section Claims carried outside the project of `testing.md`. Older projects may still hold `handoff.md`, `user-stories.md`, `verification.md`, `integration.md`, `technology-baseline.md` or a report template. Their content belongs in `## Open` of the journal, in the specification, in `testing.md` or in `architecture.md` respectively, and a dated report stands under `snapshots/`.

A function without a template, such as Governance or a project-specific `personas.md`, is written freehand and follows the naming contract and the frontmatter schema. The catalogue is open, and a template is added once comparable carriers of a function recur in at least two repositories.

## Routing heuristic

The file name routes to a function, and the lead paragraph confirms it. For a given failure pattern the following document is the first to inspect.

| Document | Check it first when |
|---|---|
| `INDEX.md` | order unclear, document not found, term used wrongly |
| `project.md` | output factually wrong, project context unclear |
| `data.md` | data fields confused, examples cited wrongly |
| `specification.md`, requirements | acceptance criterion ignored, function misrepresented |
| `specification.md`, epics and user stories | usage scenario misunderstood, research operation ignored |
| `specification.md`, decisions, or a split `architecture-decisions.md` | a decision already taken is reopened, the current rule is not findable |
| `architecture.md` | false assumptions about components, data flow or layer boundaries, a family-wide technology rule broken, an interface format misunderstood, responsibility at a project boundary unclear |
| domain knowledge documents | domain rule or method violated, editorial guideline ignored, justification missing |
| `design.md` | interface inconsistent, design system broken, design stance unclear |
| `testing.md` | guarantee unclear, test missing or failing, acceptance criterion unchecked, an externally used claim unsupported or not recomputable |
| `journal.md` | decision logic unclear, earlier dead ends repeated, open point overlooked, work begun not continued |
| `plan.md` | order or phase boundary unclear, next step not recognisable |
| `governance.md` | standing authority or change rule unclear, a settled rule bypassed |
| `CLAUDE.md` or `AGENTS.md` | break in style, prohibition ignored, formally wrong output |

## Action layer in the repository root

The entry point of the action layer lies in the repository root and routes into `knowledge/`. File name and loading mechanism follow the agent environment actually used, such as `CLAUDE.md` for Claude Code and `AGENTS.md` for Codex. With several entry points the rules stay in one maintained place, and derived files are checked for agreement. A file name alone does not establish that an environment loads it, so without such evidence the agent reads the instruction source explicitly.

After the action layer the agent reads `knowledge/INDEX.md`, then the beginning of `knowledge/journal.md` with the section `## Open` and the newest entry, and then the documents relevant to the task. Older journal entries and `journal-archive.md` are read for the grounds of a decision or an earlier transition. Structure and filling follow the [action layer template](action-layer.md).

Where the project has a `design.md`, the action layer names it as the source of values for its design principles and translates the design stance into imperatives. The imperative translation belongs in the action layer, and `design.md` stays declarative.

## Frontmatter schema

The frontmatter has a small mandatory core and two optional layers, because fewer fields are maintained more consistently. A field enters the core only where practice already carries it across the board. The purpose of a document stands in the first paragraph under the H1, in one sentence understandable without repository context, and no `type:`, `function:` or `zweck:` field is introduced.

### Mandatory core

| Field | Type | Purpose |
|---|---|---|
| `title` | string | human-readable title |
| `project` | object | `name` and `repository` |
| `method` | object | `name` and `url`, usually Promptotyping |
| `status` | enum | maturity of the document |
| `created` | date `YYYY-MM-DD` | date of creation |
| `updated` | date `YYYY-MM-DD` | last substantive update |

`status` takes one of `idea`, `draft`, `stub`, `complete`, `reviewed` and `archived`, plus `active` for a continuously maintained process document and `snapshot` for a dated record. It states the maturity of the document and never the operational state of the project. `journal.md` and a plan carried forward are `active`.

### Recommended

| Field | Type | Purpose |
|---|---|---|
| `template` | object | the template the document follows, see Template addressability |
| `authors` | list | the people responsible for the content |
| `generated-with` | string | harness and LLM, see Provenance in the frontmatter |
| `language` | string | language code (`de`, `en`) |
| `version` | string | schema version of the repository's knowledge base |
| `topics` | list of wikilinks | fields of knowledge that frame the filling or reading of the document |
| `related` | list | sibling documents in the same repository |

`version` is the same in every document of a repository. All documents are raised together whenever the knowledge base is refactored, and the value marks that state.

`topics` aligns the reading context and does not classify. It names the fields of knowledge in which an agent or reviewer is to situate itself, written as wikilinks to concept documents, such as `[[Information Visualisation]]` in a `design.md`. A repository without such concept documents treats them as plain identifiers. There is no controlled topic list. Topics are carried where a clear field of knowledge matters and omitted otherwise, typically in `INDEX.md`, `journal.md` and `plan.md`.

### Context-dependent

| Field | Type | Purpose |
|---|---|---|
| `output-of` | string | the command that reproduces the document |
| `knowledge-sources` | nested map | external knowledge sources as URIs, grouped by type (`institutions`, `standards`, `methods`, `vocabularies`, `datasets`) |
| `tags` | list | only where a thematic search across repositories needs it, with no structural information |
| `iteration` | integer | only for iterated documents |
| `baseline` | link | predecessor document of the current iteration |
| `feedback-source` | string | the source an iteration arose from |
| `aliases` | list | alternative designations for linking |
| `dependencies` | list | only in repositories with an explicit graph of predecessor documents |

`knowledge-sources` distinguishes a knowledge document from a generic README, because every source it lists is identified by a URI and so connectable to linked open data. It is carried where external connections carry the substance, typically in `project.md`, `data.md`, `architecture.md` and the domain knowledge documents, and omitted elsewhere.

A method or theory document that is read primarily as an atomic unit of knowledge may follow the atom structure of the knowledge system it belongs to instead of this schema, as the [domain knowledge template](domain-knowledge.md) shows.

### Provenance in the frontmatter

Three fields record how a document came about, and together they decide whether the document will be overwritten on the next run.

- `authors` names the people responsible for the content. An LLM never stands there, however much text it contributed, because responsibility lies with whoever commissions the work and checks the result.
- `generated-with` names harness and LLM in the form `Harness (LLM)`, with several LLMs comma-separated inside the brackets. The bracket form is language-neutral. The field is omitted where the document arose without an LLM.
- `output-of` carries the executable command that reproduces the document and is set only where that command does. Where the field stands, the document is not edited by hand, and a correction goes to the source. Where it is missing, a person is responsible for the text directly.

```yaml
authors: [Author]
generated-with: Claude Code (Claude Opus 5)
output-of: python tools/render_data.py
```

The sequence of working steps, such as a script producing a skeleton that an LLM extended and a person edited, is process knowledge and belongs in the journal.

### Connection to Dublin Core

The field names carry no namespace prefix, because a colon in a YAML key forces quoting. Eight fields correspond literally to a DCMI Metadata Term, so a generator that renders `CITATION.cff` or `codemeta.json` from the frontmatter can rely on them, and `dcterms:description` is taken from the first paragraph under the H1.

| Field | DCMI term |
|---|---|
| `title` | `dcterms:title` |
| `authors` | `dcterms:creator` |
| `language` | `dcterms:language` |
| `created` | `dcterms:created` |
| `updated` | `dcterms:modified` |
| `related` | `dcterms:relation` |
| `project` | `dcterms:isPartOf` |
| `template` | `dcterms:conformsTo` |

`status`, `method`, `generated-with` and `output-of` have no DCMI counterpart, and a mapping of the last two onto PROV is left open.

## Template addressability

Every template in this folder has a stable machine address that delivers its raw Markdown, `https://dhcraft.org/Promptotyping/templates/<slug>.md`, with the slugs `project`, `specification`, `journal`, `action-layer`, `data`, `design`, `testing`, `architecture`, `domain-knowledge`, `index` and `plan`. A document that follows a template names it in the `template:` field as soon as the template has been applied. The field carries the template's name, the template version the document follows and the address.

```yaml
template:
  name: Data template
  version: 0.3
  url: https://dhcraft.org/Promptotyping/templates/data.md
```

A document that carries an earlier template name, a site address or an `alias:` subfield receives the current name and address at its next substantive update. The action layer carries no frontmatter, because the agent environment injects it as raw context, and it names its template in an HTML comment on its first line instead.

## Structural principles

Three principles are recognisable in every knowledge document.

1. Content and origin stay apart. What the document delivers is described separately from where its material comes from, so that description, self-promotion and data provenance do not merge.
2. Standards are a main component. Standards, vocabularies and ontologies in use stand in the main body, because connectability to external knowledge is part of the project's identity.
3. A document does not describe itself. It does not state what it leaves out or that material lies elsewhere, and it carries no section on what is missing. Its boundary follows its routing question and update cycle, and related material is linked at the point of use. Limits of the material or of the project scope are statements about the subject and stay, for instance in the section Limits of `data.md` or Delimitations of `project.md`.

## Distillation

Knowledge documents are distilled. Distillation produces an inspectable, selective representation for a purpose that keeps every distinction, condition and uncertainty an adequate implementation depends on.

- A document carries one bounded function.
- Content shared between documents is represented by links, through `related:` and at the point of use.
- The most important content stands in the first sentences.
- Volatile quantities such as dataset sizes, processing states and test counts stay out of knowledge documents, which name their living source instead. The status tracker of `plan.md` and the state sections of `testing.md` are dated snapshots and may carry them.
- Distillation recurs throughout a project, because journals fill and earlier distillations lose their shape.

## Knowledge curation and write-back

A durable finding from implementation, checking or use is written into the document responsible for it first, and the code follows. Outdated statements there are corrected or removed. Then every document that restates the changed statement is read, and for each one it is decided whether the restatement is brought into step, replaced by a link or left with a reason. A restatement that misses a reversal carries the earlier state on in the present tense.

## Journal, open points and condensing

`journal.md` is the working diary of the project, and the [journal template](journal.md) gives its form. It begins with the section `## Open`, which holds what the next session needs in order to continue, meaning work begun, unchecked results, questions waiting for the researchers and work handed to a named recipient. Every handoff at the end of a session rewrites it as the complete current list. A settled point leaves the section, and an entry records how it was settled. When nothing is open, the section reads "Nothing open." The heading `## Open` and this sentence are fixed strings and stay English in every language, because agents and tools recognise the section by them.

The entries follow under `## Entries`, newest first, each headed `### YYYY-MM-DD Subject`. An entry covers one substantively coherent step of the work and carries the fields Trigger, Found, Decided, Rejected, Corrected, Changed and Evidence where they have content, with at least one checkable piece of evidence. An existing German journal may keep `## Einträge` and the labels Anlass, Befund, Entschieden, Verworfen, Korrigiert, Geändert and Belege. Judgements of the researchers and of the user who directs the work stand verbatim, and a delegated decision carries a statement of origin naming who decided under which delegation. The researchers' judgement on a Promptotype is an entry of its own in their words. An entry is history and is rewritten only by condensing. Accepted work that has not begun stands in the specification or in `plan.md`, and current project status, detailed check results and durable knowledge lie in the documents responsible for them.

A transfer to a named recipient is a point under `## Open` that names the recipient and what they need to begin, namely source, state and evidence. Where the recipient works in another repository, the point stands in `## Open` of that repository's journal. Before a transferred or open point is used, its source and current goal are checked, and durable content is integrated into the responsible document. Dated snapshots under `handoffs/` remain for exceptional transfers and never replace `## Open`.

Condensing begins when the older entries no longer help a reader understand the current state, for instance through repetition, copied durable knowledge, scattered grounds of decisions or an expensive regular reading context. No count of lines or entries triggers it. Condensing removes detail from `journal.md` only, and the full wording stays in `journal-archive.md` in the same folder and in Git. The procedure is fixed.

1. The starting state is fully committed.
2. `## Open` and the five newest entries stay unchanged.
3. The unchanged wording of every older entry is appended to `journal-archive.md`, oldest first and only where it is not already there. The archive is only appended to and is read at session start only when the ground of a decision is needed.
4. Before any change to `journal.md`, a check confirms that the heading of every entry to be condensed stands in the archive.
5. Related older entries are folded into one milestone entry each, which carries its period in the heading. Decisions with their grounds, corrections, rejected alternatives with their reasons, commit hashes, quoted judgements and statements of origin are kept verbatim, and so are entries cited outside the journal, whose headings stay stable as anchors.
6. One line points to the archive, an entry of its own records the condensing with starting state, range and number of archived entries, and the state is committed.

A knowledge base that is published may keep the earlier wording in the Git history alone instead of in `journal-archive.md`. Its journal then names the commit that holds that wording, and steps 3 and 4 refer to that commit.

A journal without `## Open` receives the section at its next handoff, and its earlier entries keep their form and order. A `knowledge/handoff.md` that still exists hands its open points to `## Open` at that handoff, and the file is proposed to the researchers for removal.

## Application

A new repository is set up in three steps.

1. Check the trigger of every function and decide which documents follow.
2. Create the always-triggered functions, among them `knowledge/journal.md` with `## Open` and "Nothing open.", and the action layer in the repository root. Merge functions only while routing question and update cycle are shared.
3. Fill each document from its template and follow the template as far as the material fills it. Where no template exists, this convention is the guide.

A refactored knowledge folder is checked against these questions.

- Does every file name signal the routing question of its document?
- Are research artefacts, source material, snapshots, handoffs and generated output kept apart from `knowledge/`?
- Does every document carry the mandatory core, with a consistent `version:` across the repository and nested fields such as `project:`, `method:` and `knowledge-sources:` without flat substitutes like `method-url:`?
- Is `knowledge-sources:` used only where external connections carry the substance?
- Are the three structural principles recognisable, with no section on what is missing and no note that material lies elsewhere?
- Does `knowledge/journal.md` begin with `## Open`, carrying the complete current list or "Nothing open.", and has any remaining `handoff.md` been moved into it?
- Does every `template:` field point to a current template address?
