---
title: Action layer template
slug: action-layer
version: "0.7"
status: complete
language: en
updated: 2026-11-14
machine-url: https://dhcraft.org/Promptotyping/templates/action-layer.md
---
# Action layer template

This template structures the action layer of a Promptotyping repository. Its entry point lies in the repository root and follows the agent environment in use, for example `CLAUDE.md` or `AGENTS.md`. Wherever the template below names `CLAUDE.md`, the same holds for `AGENTS.md`. The action layer holds procedural knowledge and points to the declarative project knowledge base. A delimited tool block contains the technical prerequisites. The empirical evidence base is the study of action layer and journal practice in Promptotyping repositories, 2026-06.

## Scope

The template holds for every Promptotyping repository, because the [convention](convention.md) requires the Agent Instructions function in every case. Specialised role and orchestration documents and the vault constitution follow conventions of their own. When the agent environment changes, the entry path, the actual loading mechanism and the tool block are checked. The practice core remains transferable insofar as its prerequisites are met.

The action layer is created at repository setup from the first knowledge documents, including `knowledge/journal.md`. It is updated when rules, the project knowledge base or tools change. Because its instructions determine how a session begins, repeated knowledge content is traced back to the places where it is maintained.

## Function of the document

The action layer answers how the agent is to work in the repository, including the design rules. It addresses the coding agent and remains checkable for people. Whether it loads automatically depends on the configured harness. Without that mechanism it is read explicitly. When output is formally wrong or prohibitions are ignored, the instructions and their actual delivery are checked, and for errors of content the project knowledge base as well.

## Structural principles

Three principles carry the document.

First, the practice core and the tool block are separated. The practice core is portable and comprises the pointer to the project knowledge base with a reading path, the handoff through the journal, journal provenance, the CEIL rules for checking, design principles, a negative list of scope and a hierarchy of truth. The tool block is exchangeable and comprises commands, hooks, permissions, stack conventions, security and details bound to a machine or platform. The test is that, once the tool block is deleted, the practice core must be transferable without change into another agent format. Tool-bound sentences in the practice core are errors (a finding in sugw placed "No assumptions" next to `core.longpaths` in the same section).

Second, composition takes the place of duplication. `design.md` remains a declarative knowledge document, while CLAUDE.md carries the imperative translation of the design stance and names `design.md` as the source of values. The same principle applies to all volatile content, so that numbers, states and inventories are linked to their living source. What is open stands in the section `## Open` of `journal.md`, accepted future work in `plan.md` and results of checks in `testing.md`. Aesthetic and factual steering come from the composition of two documents, without a hybrid document.

Third, distillation. CLAUDE.md is a concise pointer and carries only what can be derived neither from the code nor from the project knowledge base. The brevity serves selection, and the distinctions, conditions and limits the agent needs for its work are kept. Every line costs context budget in every session. Reference wordings from practice include "this file is the concise pointer" (mhdbdb-tei-only), "Prozessual, nicht dokumentarisch" (m3gim, "procedural, not documentary") and "what is not derivable from the code alone" (HerData).

## Frontmatter schema

Unlike the templates for `knowledge/`, CLAUDE.md carries no YAML frontmatter. The reason is that the tool injects the document as raw prompt context, and in the whole evidence base (35 repositories) not a single CLAUDE.md carries frontmatter. The provenance of the template stands instead as an HTML comment in the first line:

```markdown
<!-- template: Action layer template v0.7, https://dhcraft.org/Promptotyping/templates/action-layer.md -->
```

The canonical address is the stable slug `action-layer` in the folder `templates/`, at `https://dhcraft.org/Promptotyping/templates/action-layer.md`. The deviation from the `template:` recommendation of the convention for frontmatter was ratified with the release of the template on 2026-07-19.

## Sections in detail

### Identity (head)

This section places the agent in one paragraph. It states what the project is (one sentence), the working practice Promptotyping with the core sentence that the documents in `knowledge/` hold the domain knowledge and the specification from which the implementation is built, and the division of roles between people and agent where it needs clarifying (Critical Expert, project lead, someone other than a developer). It contains no marketing and no history.

### Project knowledge base

After the action layer has loaded, the reading path begins with `knowledge/INDEX.md`, followed by the beginning of `knowledge/journal.md` with the section `## Open` and the most recent entry, and then the declarative knowledge documents or agent instruction documents relevant to the task. Older journal entries and `journal-archive.md` are read for reasons behind decisions and earlier transitions. A routing table complements the reading path according to the criteria of the convention. The pointers lead to project sources inside the repository, so that the methodological basis is available with the repository. If a necessary source lies only in an unreachable vault, the step that depends on it remains open.

### Working rules

This section states the portable practice core as a list of rules, made concrete for the project:

- Open points and handoff. At every session start, read `## Open` at the beginning of `knowledge/journal.md`. Before using an open or handed-over point, check its source and current goal and first integrate durable content into the responsible declarative knowledge document or agent instruction document. At the handoff at the end of a session, add the session's entries and rewrite `## Open` as the complete current list, with "Nothing open." when nothing remains. A `knowledge/handoff.md` that still exists hands its points over to `## Open` in the process.
- Journal provenance. One entry is written per substantively connected step of the work and carries the applicable fields of the [journal template](journal.md) (Trigger, Found, Decided, Rejected, Corrected, Changed, Evidence). Current project status, accepted work and detailed results of checks lie in their responsible documents.
- Journal condensing. Condense when the older entries no longer help a reader understand the current state. `## Open` and the five most recent entries stay, the wording of older entries goes to `journal-archive.md`, and the procedure follows the [journal template](journal.md), section Condensing and archive.
- Verification and CEIL. No invented values, terms or quotations, and when knowledge is missing, ask instead of guessing. Name the checkpoints specific to the project, meaning what is put to the Critical Expert and when, and what never runs without approval. Where machine checks exist (tests, validation scripts, data contracts), name them as mandatory runs.
- Hierarchy of truth. A precedence rule per class of conflict, stating which source is canonical and which derived (TEI before JSON, specification before code, stored state before memory for numbers). The closing sentence says never to let sources diverge silently and to report contradictions.
- Rule on quantities. No volatile numbers in this file or in knowledge documents. Name the living source instead.

### Design principles

This section is the imperative translation of the design stance. It names `design.md` as the source of values, instructs the agent to read `design.md` before generating interface or text, and then gives three to seven imperatively phrased sentences derived from the design stance. It is omitted only if the project has no Design function (no interface, no designed texts). The principles are phrased as binding ("Use colour only functionally") and not as descriptions.

### Scope

This section is a negative list against feature drift and misuse of tools. It states what the project deliberately does not do, with a pointer to the decision in force in `specification.md`, and what the agent is not to do. Omissions are design decisions and are named as such.

### Known limits

This optional section states the epistemic status. It names honest limits of system, model or data that the agent must know so as not to treat gaps as bugs, and marks unconfirmed inferences explicitly as such until they are clarified. It contains no success prose and no numbers, since the rule on quantities holds here as well, with a qualitative description plus a pointer to the measuring source.

### Tool (exchangeable block)

This section holds everything tool-bound in exactly one place, separated from the practice core by a visible marker. Its content falls into subsections:

- Commands. Build, tests and pipeline steps as concrete calls, stating when they are mandatory.
- Conventions. Stack decisions, encoding, platform pitfalls and Git rules (commit format, what never happens without a request).
- Security. Never read or output `.env`, secrets only as environment variables, data protection limits for LLM services.
- Hooks and permissions. The controls actually set up in the chosen environment, with their checked range of application. A configuration file alone does not prove an effective block.

Absolute paths bound to a machine are explicitly marked as such here. When porting, the entry path and the actual loading of the rules are checked alongside this block.

## What does not belong here

- Volatile numbers, counts, coverage values and file inventories. They inevitably drift, so the living source is linked instead of copied.
- Narratives of project status and session results. The current state lies in the living status source specific to the project, accepted future work in `plan.md`, results of checks in `testing.md`, and what is open together with the evidence of transitions in `journal.md`.
- Declarative knowledge of the domain and the architecture. It belongs in `knowledge/`, and CLAUDE.md points to it.
- Compensatory bundling. CLAUDE.md is no substitute for a missing `project.md`, `architecture.md`, `design.md` or `specification.md`. In most of the repositories examined it absorbs Charter, Architecture, Design or ADR exactly when these documents are missing. This is a symptom of missing knowledge documents and no content of its own. It routes and binds and duplicates no substance.
- A wrong location or an empty stub. CLAUDE.md belongs in the repository root and never in `knowledge/`, and it is not created as an empty placeholder. Both are recurring errors (CLAUDE.md in `knowledge/` in diged-neolat and grip, empty stubs in docta and kulturpool).
- Specification and decisions. Requirements and ADRs live in `specification.md`. CLAUDE.md may quote individual decisions as rules, with a pointer to the source.
- Secrets, personal data, model prices and hard-coded model names in the practice core.
- Content for human readers. The file is agent configuration, and user documentation lies in `README.md`.

## Template to fill in

The following block is meant as a template.

````markdown
<!-- template: Action layer template v0.7, https://dhcraft.org/Promptotyping/templates/action-layer.md -->

# Project instructions for [Project name]

[One paragraph: what the project is, in one sentence. Working practice: Promptotyping, the documents in `knowledge/` hold the domain knowledge and the specification from which the implementation is built. Division of roles between people and agent, where it needs clarifying.]

## Project knowledge base

The project knowledge base lies in `knowledge/`. At every session start, after this action layer, first read `knowledge/INDEX.md`, then the beginning of `knowledge/journal.md` with the section `## Open` and the most recent entry, and after that the declarative knowledge documents or agent instruction documents relevant to the task. Read older journal entries and `knowledge/journal-archive.md` only when the origin of a transition or the reasons behind a decision are needed.

| Task | Read first |
|---|---|
| [Work on data] | [`knowledge/data.md`] |
| [Requirements, decisions] | [`knowledge/specification.md`] |
| [Interface, design] | [`knowledge/design.md`] |
| [Open point or handover] | [`## Open` in `knowledge/journal.md`] |
| [Origin or reason for a decision unclear] | [older entries in `knowledge/journal.md`] |

## Working rules

- Open points: At every session start, read `## Open` in `knowledge/journal.md`. Check the source and current goal of each point used and first integrate durable content into the responsible document.
- Handoff: At the end of a session, add the session's entries and rewrite `## Open` as the complete current list, with "Nothing open." when nothing remains.
- Journal: For each substantively connected step of the work, write one entry with the applicable fields Trigger, Found, Decided, Rejected, Corrected, Changed and Evidence. Keep current project status, accepted work and detailed results of checks in their responsible documents.
- Condensing: When older entries no longer explain the current state, leave `## Open` and the five most recent entries standing, append the wording of older entries to `knowledge/journal-archive.md` and fold them into milestone entries.
- Invent nothing: [rule specific to the project: which values, terms and quotations may come only from which sources]. When knowledge is missing, ask instead of guessing.
- Checkpoints: [what is put to the Critical Expert and when; what never runs without approval; which check runs are mandatory].
- Hierarchy of truth: In a contradiction, [canonical source] takes precedence over [derived source]. [Further precedence rules.] Never let sources diverge silently, report contradictions.
- No volatile numbers in this file or in knowledge documents. Current numbers → [living source]. Future work → `knowledge/plan.md`. Open points → `## Open` in `knowledge/journal.md`. Results of checks → `knowledge/testing.md`.

## Design principles

Source of values: `knowledge/design.md`. Read it before generating interface or text. Binding:

- [Principle 1, phrased imperatively, derived from design.md]
- [Principle 2]
- [Principle 3]

## Scope

What this project does not do:

- [deliberate omission with a pointer to the decision in specification.md or journal.md]

What you are not to do:

- [red line 1, e.g. no destructive Git operations without a request]
- [red line 2]

## Known limits

[Optional. Limits of system, model or data, described qualitatively. Mark unconfirmed inferences as such until they are clarified.]

## Tool

<!-- Enter the actual agent environment. When porting, also check the entry path and the loading of the rules. -->

Before dependent steps, check the available tools, runtimes and connections. Missing binding rule sources hold the dependent change. Name checks that were not run. A received document or an available tool does not extend the commission.

### Commands

- Build/pipeline: [`command`]
- Tests: [`command`], [when mandatory, e.g. before every commit]
- [further commands]

### Conventions

- [Stack decisions, encoding, platform pitfalls]
- Git: [commit rules; what never happens without an explicit request]

### Security

- Never read or output `.env`; secrets only as environment variables.
- [Data protection rule: which data may go to LLM services and which may not]

### Hooks and permissions

[If present, the controls actually active in the chosen environment and their checked range of application. Mark paths bound to a machine as such.]
````

## Use as a prompt template

The template generates the action layer at repository setup. The agent reads the [convention](convention.md) and the existing project knowledge base, creates `knowledge/journal.md` with the section `## Open` if it is missing, copies the template and fills the practice core from the knowledge documents. Design principles are translated imperatively from `design.md`, the hierarchy of truth is derived from the structure of the documents, and limits of scope are taken over from `specification.md`. Where the project knowledge base leaves a gap, the agent asks.

The template also serves as a yardstick for reviewing an existing CLAUDE.md. The review checks the separation of practice core and tool block, the order at session start through `INDEX.md` and the beginning of `journal.md`, the order of integration before the evidence in the journal, the handoff rule for `## Open`, journal condensing with the archive, and the pointers to living sources. It further checks routing table and project knowledge base against each other.

When porting, the entry path, the loading mechanism and the tool block are matched to the target environment. The practice core is checked against that environment's actual capabilities. Several entry files are derived from the same rule source and checked for agreement. A successful generation of the file does not yet prove an observed agent run.

## Example

m3gim opens its CLAUDE.md with the self-restriction "Workflow-Regeln für Claude-Code-Sessions. Prozessual, nicht dokumentarisch. Für Dokumentation siehe `knowledge/`" (workflow rules for Claude Code sessions, procedural rather than documentary, with documentation in `knowledge/`) and anchors the hierarchy of specifications as an order of truth before any change. zbz-ocr-tei encodes the discipline of the project knowledge base as its first rule ("Wissen in `knowledge/`: nicht in CLAUDE.md duplizieren. Single Source of Truth pro Fakt", that is, knowledge stays in `knowledge/` without duplication in CLAUDE.md, with one source of truth per fact) and keeps the journal obligation, security and commands as separate sections. Both show the pointer character. zbz-ocr-tei also shows the limit, since an overly extensive command-line reference in the action layer produces waves of drift with every change to the pipeline.

## Terms

### Action layer

The imperative document in the repository root that socialises the agent, of the analytical type Action alongside Declarative and Process.

### Practice core

The portable part of the action layer (routing through the project knowledge base, handoff through the journal, journal provenance, CEIL rules, design principles, scope, hierarchy of truth), independent of the specific coding agent.

### Tool block

The exchangeable, tool-bound part (commands, hooks, permissions, security, platform conventions).

### Composition

The principle that aesthetic and factual steering arise from an action document pointing to a knowledge document (design.md → CLAUDE.md), without a hybrid type.

### Drift

The divergence of CLAUDE.md from reality (code, data, project knowledge base), the most frequent failure of this type of document, caused mainly by duplicated volatile content.

## Related

- Templates of the Promptotyping Documents (this folder)
- [Convention](convention.md)
- [Promptotyping](https://dhcraft.org/Promptotyping/)
- Agent socialisation
- Composition of knowledge and action
- Action layer and journal practice in Promptotyping repositories, 2026-06
- [Design template](design.md)
- [Journal template](journal.md), including its section `## Open`
- Context Engineering
