---
title: Application
slug: application
status: complete
language: en
version: "0.6"
created: 2026-07-25
updated: 2026-08-25
source: Promptotyping working practice, forms of work and project knowledge base
machine-url: https://dhcraft.org/Promptotyping/_content/application.md
---

# Application

The practice's unit of work is a small set of Markdown documents that are the specification of the artefact, versioned in the git history of the project repository. The central loop iterates over these documents, and the implementation is derived from them. This page resolves the four forms of work into actions, with entry condition, steps, stopping criterion and the documents that arise along the way. The [use cases](#use-cases) and the [Vault](#vault) carry the grounds on which the practice is built this way.

## Preparation

All materials are collected before technical decisions are made.

- **Entry.** A research undertaking, a body of data, and one or more questions put to it.
- **Steps.** Collect research data in its original formats. Add the documentation of the standards and data models the data follows. Record the research questions, provisional purpose, existing domain knowledge, and any requirements already present in the working material. These initial statements remain provisional until Exploration has tested their relation to the data and Distillation has formulated the durable requirements.
- **Stopping criterion.** The repository structure exists, the source data is accessible, and the research context is documented well enough for systematic examination.
- **Documents.** A project charter, the accessible source material and its documentation, and an initial action layer in the repository root. A preliminary `data.md` may be useful when the material is already well understood.

Vagueness at this point cascades through all subsequent forms of work. A vaguely formulated question produces a vaguely specified artefact, and the effort of correcting that later falls due again in every iteration.

## Exploration

The interface between data and research context is probed. The guiding question is whether the abstract research question can be concretely mapped onto the available data structure.

- **Entry.** The material collected in Preparation.
- **Steps.** Inspect the data directly where it is small enough to read. Beyond that, write a script that traverses the corpus and renders a compact description of it. Have the LLM generate mapping hypotheses from that description, meaning proposals about which data fields correspond to which analytical categories, which forms of presentation fit the data, and where the data is insufficient for the intended purpose. Evaluate these proposals against domain criteria.
- **Stopping criterion.** There is a documented understanding of what is feasible, what is not, and why.
- **Documents.** Exploration writes mainly back into `data.md`, extended by the dead ends and their reasons.

### Reading a corpus you cannot read

Past a few dozen files nobody opens each one, and neither does an agent. Feeding the whole corpus to the model is the wrong instrument twice over, because it spends the context budget on material the model will summarise anyway, and because the summary is a guess where a count would be an answer. The instrument is a script, and what it produces is a description of the corpus rather than the corpus.

A useful description has four parts.

- **The structural inventory.** Every key, path or element that occurs, with how often it occurs. For a CSV that is the header with the type each column actually holds; for XML the element and attribute paths; for JSON the key set at every level. This states what the data is made of, which is the question no sample can answer.
- **A few real examples per field.** Enough to see the shape of a value, the date format, the way a name is written, whether a field holds a list in disguise.
- **Aggregations.** Value ranges, cardinality, how many records leave a field empty, how the records distribute over time or over whichever dimension the research question uses.
- **The anomalies.** Fields that occur in a handful of records only, values that break the declared schema, places where the schema and the corpus disagree. These are where the project will lose time later, and they are cheapest to find now.

The script is worth more than its output. It is deterministic, so the description can be regenerated when the data changes, and it costs no tokens on the second run. Its output is a generated document, marked as such and never edited by hand, and it goes into the document set alongside the curated description. Where a step is decidable by counting, a script decides it; the model reads the result and proposes what it might mean.

### The epistemic side

This form of work has a dimension beyond the feasibility check. The LLM generates options the researchers would not have designed themselves, and their task becomes evaluation rather than invention. Understanding what the data cannot support is as valuable as knowing what is possible. Exploration is skipped where the data is already familiar and Preparation has settled these questions.

## Distillation

What Exploration taught is compressed into the document set. This is where context engineering happens in the strict sense, the deliberate construction of the context an LLM will work from, under the principle of maximum information with minimum tokens.

- **Entry.** The findings of Exploration and the raw materials of Preparation.
- **Steps.** Bring every document onto one bounded function. Resolve redundancy through references rather than repetition. Where the corpus is large or heterogeneous, render descriptions deterministically from the source data and place them beside the curated layer as generated documents. Before the passage into Implementation, run an overengineering check and deliberately reduce the specification to a minimal viable scope, so that the first working artefact stays small enough to inspect.
- **Stopping criterion.** A fresh agent instance, given only the documents and the data, could take up the project's logic and work from it without additional explanation.
- **Documents.** The durable set includes `INDEX.md`, `data.md`, `specification.md`, `design.md`, `verification.md`, the active Process Documents `handoff.md` and `journal.md`, the action layer, and generated descriptions.

The compression is not neutral. Encoding decisions are epistemic decisions, because they determine what information is available to all downstream steps.

## Implementation

The document set is handed to an agentic coding tool operating inside the project repository, and the derived artefact is checked.

- **Entry.** The distilled document set and the source data.
- **Steps.** Advance in milestones, each a small increment verified before the next begins. Steer the generation through three feedback loops, deterministic feedback from schema validation, test suites and builds, visual feedback from screenshots of the running artefact, and expert feedback from the judgement of whether the output is factually correct, domain-appropriate and aligned with the research question. Probe the possibility space deliberately by requesting radically different designs that run against the learned conventions.
- **Stopping criterion.** The artefact satisfies the acceptance criteria of `specification.md` and passes the checks of [checking](#verifikation). The exit point is a spectrum, from a small functional prototype to a multi-stage pipeline with verification interfaces at every stage, and what determines it is the research question.
- **Documents.** Durable findings update their responsible Declarative or Action Document. `verification.md` carries procedures and results, `journal.md` records substantively coherent transitions, and `handoff.md` retains only received deltas that remain open.

Deferring the check on a milestone is a decision with a price. It is most defensible in a first pass whose point is to see something running at all, and it leaves a verification debt to be settled before the artefact is used or handed on. Where the debt is carried, the record has to say so.

## Iteration and re-entry

The practice's signature is the loop from Implementation back into the documents. When the artefact is wrong, the specification was wrong or incomplete, and it is the specification that is fixed; the artefact is then regenerated. New knowledge from building, meaning unexpected data characteristics, performance constraints and design refinements, is written back into the documents.

Re-entry goes into whichever form of work the new knowledge belongs to.

- A wrong artefact sends the work back into Distillation.
- A finding that the data affords more or less than assumed sends it back into Exploration.
- Sources that arrive later send it back into Preparation.

A single pass through the four forms of work is the exception.

## Two modes

The practice has two modes of operation, distinguished by how the work is organised and independent of project size. The default is a single researcher with a single agent instance. In complex projects the work itself acquires the structure of a research organisation, with parallel tasks, differentiated roles and formalised handovers; there a lead instance coordinates sub-agents with defined permissions and knowledge zones, and the methodological burden shifts from steering one agent to designing a small team. The four forms of work apply in both modes. The documented experience lies overwhelmingly with the first, and the durability of sustained multi-agent monitoring is an open question.

Scaling runs across both modes. The more complex the domain, the more structure the organisation of knowledge needs, and the distilled document set grows with the project. Verification discipline through the Critical Expert in the Loop is untouched by this.

## Fit check

A bounded Promptotyping iteration is responsible only when every required condition below can be answered with yes.

- The project has accessible structured or semi-structured research data whose provenance and relevant semantics are sufficiently understood.
- One specific scholarly purpose and a limited first artefact can be stated.
- A Critical Expert can inspect the relation among source material, data, project knowledge, implementation, and output.
- The project has capacity for deterministic verification and domain validation before acceptance.
- Rights, privacy, institutional agreements, infrastructure, and model-provider conditions permit the intended processing.
- The expected state can be versioned, inspected, and accepted for a stated purpose.

An unknown answer requires resolution before implementation. A no answer excludes the proposed iteration in its current form. Public or institutional operation adds expertise in security, accessibility, maintainability, integration, and sustained operation.

A positive fit check licenses a bounded trial. It provides no comparative success forecast. The documented corpus is not representative, total human work remains unmeasured, and independent long-term transfer has yet to be established. The cases these limits are drawn from are listed under [use cases](#use-cases).

## Continue from here

To evaluate whether the practice fits a project, compare the [documented use cases](#use-cases), then follow a load-bearing statement through the [Vault](#vault) to its sources. To apply it, continue with the [tutorial](#tutorial), keep later sessions aligned with the [canonical Promptotyping skill](#skills-promptotyping), and take the required document structures from the [templates](#vorlagen).
