---
title: Index
project:
  name: Promptotyping specification
  repository: https://github.com/DigitalHumanitiesCraft/Promptotyping
status: complete
language: en
version: "2.0"
created: 2026-05-09
updated: 2026-11-14
authors: [Christopher Pollin]
generated-with: Claude Code (Claude Fable 5.2, Claude Opus 5.5)
method:
  name: Promptotyping
  url: https://dhcraft.org/Promptotyping/
template:
  name: Index template
  version: 0.5
  url: https://dhcraft.org/Promptotyping/templates/index.md
related: [project, practice, specification, architecture, design, journal]
---

# Index

This knowledge base describes Promptotyping and how it came about, and it is the worked example of the practice, the Promptotyping specification documented with its own templates. It is written for researchers, reviewers and coding agents who do not know the project. The templates themselves lie in [templates/](../templates/), the documented projects in [case-studies/](../case-studies/), and the skill in its [own repository](https://github.com/DigitalHumanitiesCraft/promptotyping-skill).

## Documents

| Path | Function | Routing question | Updated |
|---|---|---|---|
| [project.md](project.md) | Charter | What is this repository, for whom, on what material and under which licence? | on a change of identity or scope |
| [practice.md](practice.md) | Domain knowledge | How does Promptotyping work, from the forms of work to checking and the artefact? | on a change of the practice |
| [specification.md](specification.md) | Specification | What must the repository deliver, and which decisions bind it? | on a change of requirements or decisions |
| [architecture.md](architecture.md) | Architecture | How is the repository built and published? | on a change of structure or workflow |
| [design.md](design.md) | Design | How does the page look and behave? | on a change of the design system |
| [journal.md](journal.md) | Provenance | What is open, and how did Promptotyping and this repository come about? | at every handoff and after each coherent step of the work |

## Storage zones

- `knowledge/` contains this project knowledge base, including `journal.md` with what is open in its section `## Open`.
- `templates/` contains the templates of the Promptotyping Documents and their convention, the published single source.
- `case-studies/` contains the documented use cases.

## Reading paths

- To understand the practice, read [practice.md](practice.md), then [project.md](project.md) for the place of this repository.
- To understand how the practice came about, read the entries of [journal.md](journal.md) from the bottom up.
- To continue work on the repository, read the agent instructions in `CLAUDE.md`, then `## Open` in [journal.md](journal.md), then [specification.md](specification.md) and the document the task touches.

## Convention

This knowledge base follows the convention of the Promptotyping Documents in `templates/`, which governs file names, document functions, the frontmatter schema and the routing from file name to function.

## Terms

### Acceptance

The judgement of the researchers who work with a Promptotype that it is good enough for a stated purpose. It is distinct from scholarly validation and from passing checks, and a Promptotype can be in use before most of its data are confirmed.

### Agent instruction document

A document that tells agents how to work. It holds procedures, constraints, the checks to run and pointers to the knowledge a task needs, and it is named `CLAUDE.md` or `AGENTS.md` and lies in the repository root.

### Agentic Engineering

The organisation of the agents' work, which settles how tasks are cut, how state passes from step to step, at which points the researchers come in and how results are checked.

### Agentic review

An agent examines code, data or knowledge documents, often with a fresh context. Its findings are evidence.

### Context Engineering

Deciding what an agent is given for a task. It selects from the research data and the project knowledge base what the task needs and keeps the rest out of the context.

### Declarative knowledge document

A knowledge document that states what holds, for instance the purpose of the project, the account of the data or what the artefact is to do.

### Distillation

The form of work that writes what Exploration taught into the knowledge documents, keeping every distinction, condition and uncertainty an adequate implementation depends on.

### Exploration

The form of work that establishes what the data can and cannot support.

### Implementation

The form of work that builds the artefact from the knowledge documents in bounded tasks whose results can be run and inspected.

### Knowledge curation

Examining and revising the project knowledge whenever sources, checking and use bring something to light. It runs across all four forms of work.

### Knowledge document

A Markdown document of a project knowledge base, of one of three types, declarative, process or agent instruction. Declarative and process knowledge documents lie in the folder `knowledge/`, agent instruction documents in the repository root.

### Knowledge Engineering

Eliciting, modelling and curating the researchers' knowledge of the domain, of the data and of their own aims. Its result is the project knowledge base.

### Operator

The person who directs this repository and decides on its direction, its definitions, its release and what it publishes.

### Preparation

The form of work that assembles the material and the research context.

### Process knowledge document

A knowledge document that states what is open and how the understanding developed and why, in `journal.md`.

### Project knowledge base

The knowledge documents of a project, its agent instructions among them, versioned with the code.

### Promptotype

What an iteration yields. It consists of a prototype open to use and inspection, the research data it was built from and the project knowledge base, so that every state of the three can be versioned as a single whole.

### Promptotyping

A working practice in which research data and their contexts are translated into research artefacts with frontier Large Language Model (LLM) agents, so that the artefacts fit the purposes of the researchers and the ways in which they work, as [practice.md](practice.md#the-working-practice) states it.

### Promptotyping Documents

The documents of a project knowledge base as the templates in `templates/` describe them, one template per document function.

### Research software developer

The person who decides workflow, technology and the form of the artefact and reports a fault to the agent in the terms the agent works in. Researchers and research software developers carry out the practice together, or one person holds both roles, and the researchers judge whether an artefact fits.

### Researchers

The people who know the sources and the field and judge whether an artefact fits. Scholarly validation and acceptance lie with them. Confirmation lies with whoever has the expertise a decision requires, or with a validated deterministic rule.

### Scholarly validation

A judgement by people who know the sources and the field. They decide whether the sources warrant a result and whether it is adequate to the research purpose. It is distinct from acceptance.

### Status

One of three states of a result. A proposal is what an agent or an LLM produces. It is doubted once anyone who takes part in the work, an agent included, has marked it as doubtful. It is confirmed by a person whose expertise extends as far as the decision demands, or by a validated deterministic rule. Who or what set a status is recorded with it.

### Validated deterministic rule

An executable check that runs over the whole of the real data, has failed where it should on cases whose answers are known, and has been adopted by the researchers for a defined kind of decision.

### Verification

The check whether a result meets a standard that the project has adopted, at its strongest as an executable check that can fail.
