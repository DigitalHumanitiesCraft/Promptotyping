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
generated-with: Claude Code (Claude Opus 5.5)
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
- To understand how the practice came about, read the entries of [journal.md](journal.md) from the bottom up. The full wording of the entries before 2026-11-14 stands in the Git history (`git show f211631:knowledge/journal.md`).
- To continue work on the repository, read the agent instructions in `CLAUDE.md`, then `## Open` in [journal.md](journal.md), then [specification.md](specification.md) and the document the task touches.

## Convention

This knowledge base follows the convention of the Promptotyping Documents in `templates/`, which governs file names, document functions, the frontmatter schema and the routing from file name to function.

## Terms

### Agent instruction document

A document that states how agents are to work, with procedures, constraints, the checks to be run and pointers to the relevant knowledge, in `CLAUDE.md` or `AGENTS.md` in the repository root.

### Agentic review

The examination of code, data or knowledge documents by an agent, often with a fresh context and against named criteria. Its findings are evidence.

### Declarative knowledge document

A knowledge document that states what holds, for instance the purpose of the project, the account of the data or what the artefact is to do.

### Distillation

The form of work that writes what Exploration taught into the knowledge documents, keeping the distinctions, conditions and uncertainties an implementation needs.

### Exploration

The form of work that establishes what the data can and cannot support.

### Implementation

The form of work that builds the artefact from the knowledge documents in bounded tasks whose results can be run and inspected.

### Knowledge curation

The examination and revision of the project knowledge in light of what sources, checking and use reveal. It runs across all four forms of work.

### Knowledge document

A Markdown document in the folder `knowledge/` of a repository, of one of three types, declarative, process or agent instruction.

### Preparation

The form of work that assembles the material and the research context.

### Process knowledge document

A knowledge document that states what is open and how the understanding developed and why, in `journal.md`.

### Project knowledge base

The knowledge documents of a project together with its agent instructions, versioned with the code.

### Promptotype

What an iteration yields, a prototype that can be used and inspected, together with the project knowledge base and the research data from which it was built, so that each state can be versioned as a whole.

### Promptotyping

A working practice that translates research data and their contexts into research artefacts that fit the researchers' purposes and ways of working, through Knowledge Engineering, Context Engineering and Agentic Engineering.

### Promptotyping Documents

The documents of a project knowledge base as the templates in `templates/` describe them, one template per document function.

### Researchers

The people who know the sources and the field and judge whether an artefact fits. Confirmation, scholarly validation and acceptance lie with them.

### Scholarly validation

The judgement of people who know the sources and the field on whether a result is warranted by the sources and adequate to the research purpose. For a Promptotype it is its acceptance for a purpose.

### Verification

The check whether a result conforms to a standard the project has accepted, at its strongest through an executable check that can fail.
