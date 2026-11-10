---
title: Overview
slug: overview
status: complete
language: en
version: "1.0"
updated: 2026-11-10
mirrored: 2026-06-10
machine-url: https://dhcraft.org/Promptotyping/_content/overview.md
---

# Promptotyping

A working practice for translating research data and their contexts into research artefacts that fit the researchers' questions and ways of working. An AI coding agent builds the artefact from a small project knowledge base that researchers and agent keep in the repository and revise as the work proceeds.

This file is the machine-readable twin of the start page at https://dhcraft.org/Promptotyping/, which is static HTML in `index.html`.

## Four forms of work

1. Preparation assembles the sources, the data and the research context. It is done when the material is accessible and documented well enough to examine, and it writes `project.md` and the action layer.
2. Exploration profiles the data with scripts and tests what it can support. It is done when the researchers recognise their material in the account, and it writes `data.md` and profiling scripts.
3. Distillation turns the findings into maintained knowledge documents. It is done when a fresh agent can continue from the documents alone, and it writes `specification.md`, `design.md` and `INDEX.md`.
4. Implementation builds small, checked increments from the documents with an agent. It is done when the increment meets the acceptance criteria and its checks, and it writes the artefact and `journal.md`.

A first pass runs through the four forms in order. Afterwards they recur as the work requires. Knowledge curation writes findings back into the project knowledge base, most often into Distillation, and the knowledge base in `knowledge/` with `CLAUDE.md` or `AGENTS.md` is read and revised in every form of work. Each iteration yields a promptotype, the state of an artefact together with the project knowledge and the research data from which it was built. The operational account is in [Application](#application).

## First iteration on your own data

1. Install an AI coding agent such as Claude Code or Codex, Git, and Python, and copy the [Promptotyping skill](#skills-promptotyping) into the agent's skills folder.
2. Prepare. Write the purpose, your question and two or three user stories in your own words, copy your data into `data/`, and give the agent the prompt of step 1 of the [tutorial](#tutorial).
3. Explore with the prompt of step 2 of the tutorial, then check one claim in `data.md` against the rows it names.
4. Distil, build and check with steps 3 to 6 of the tutorial.

To rehearse, use the invented letters of the [introduction](intro/), `intro/example/letters.csv`.

## Documents of the knowledge base

Five functions are needed in every project, the charter (`project.md`), the specification, provenance (`journal.md`), the handoff inbox (`handoff.md`) and the agent instructions (`CLAUDE.md` or `AGENTS.md`). The others are added when their condition holds. The catalogue with function, condition and version of every template is `data/promptotyping-documents.json`, each template is readable under `_content/promptotyping-document/{slug}.md`, and the [templates page](#vorlagen) renders them.

## The Promptotyping skill

One `SKILL.md` under `skills/promptotyping/` with seven operations, Orient, Distil, Implement, Curate, Synthesise, Prune and Hand off. Every operation starts with Orient.

## Three kinds of checking

- Verification tests conformity to formalised requirements through schemas, tests and reproducible measurements.
- Agentic review lets an agent, often with a fresh context, examine the work against named criteria. Its findings remain probabilistic evidence.
- Scholarly validation decides whether representations and requirements are warranted by the sources and adequate to the research purpose. The researchers carry it.

A promptotype is accepted for a purpose when the researchers who will work with it judge that it fits their questions and ways of working.

## Example research artefacts

CorrespExplorer, the SZD-HTR OCR Pipeline and the Klawiter Bibliography Rescue are the three cases of the paper on Promptotyping. The [use cases](#use-cases) list every documented project, and the [Vault](#vault) traces the practice's claims to their sources.

## Citation and licence

Pollin, Christopher; Steiner, Christian: Promptotyping. Zenodo. https://doi.org/10.5281/zenodo.14160875

The concept DOI resolves to the latest archived version, and `CITATION.cff` carries the full metadata. Text, templates and skill are licensed under CC BY 4.0, code under the MIT License.
