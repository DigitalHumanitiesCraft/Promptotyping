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

A working practice for translating research data and their contexts into research artefacts that fit the researchers' questions and ways of working. An AI coding agent builds the artefact from a small project knowledge base that researchers and agent keep in the repository and revise as the work proceeds. It is meant for researchers and project teams with structured data and a concrete question.

This file is the machine-readable twin of the start page at https://dhcraft.org/Promptotyping/, which is static HTML in `index.html` with the seven parts of a DHCraft method page.

## Forms of work, promptotype and knowledge base

The start page shows Figure 1 of Pollin 2026, Promptotyping, submitted. Researchers direct four recurrent forms of work, shown in the order of a first pass, and assess each promptotype through scholarly validation. A promptotype is the state of an artefact together with its project knowledge base and its research data, and earlier states remain as versions. Distillation maintains the knowledge base, which supplies the context for each task. Verification and agentic review accompany each iteration, and what checking and use reveal returns to the knowledge base through knowledge curation.

## What it is and where it comes from

Promptotyping combines Knowledge Engineering, Context Engineering and Agentic Engineering and is tied to no particular model or tool. It originates in a dissertation at the University of Graz (2025), was first described in blog posts on DHCraft (2025) and L.I.S.A. (2026), and is defined in Pollin 2026, Promptotyping, submitted, with CorrespExplorer, SZD-HTR and Klawiter-Rescue as cases. The documented projects are under [use cases](#use-cases), and the [Vault](#vault) traces the practice's claims to their sources.

## Terms of the figure

- Preparation assembles the sources, the data and the research context. Done when the material is accessible and documented well enough to examine.
- Exploration profiles the data with scripts and tests what they can support. Done when the researchers recognise their material in the account.
- Distillation turns the findings into maintained knowledge documents. Done when a fresh agent can continue from the documents and the researchers confirm them.
- Implementation builds small, checked increments from the documents with an agent. Done when the increment meets the acceptance criteria and its checks.
- A promptotype is what an iteration yields, the state of an artefact together with its project knowledge base and research data.
- The project knowledge base consists of declarative, process and agent instruction documents. The catalogue of their templates is `data/promptotyping-documents.json`, each template is readable under `_content/promptotyping-document/{slug}.md`, and the [templates page](#vorlagen) renders them.
- Verification tests conformity to formalised requirements, agentic review lets an agent examine the work against named criteria, and scholarly validation by the researchers decides whether the work is warranted by the sources and fits its purpose. The last is the acceptance of a promptotype for a purpose.
- Knowledge curation examines and revises the project knowledge in light of what sources, checking and use reveal.

The full account is in [Application](#application) and the glossary.

## Reuse

1. Check the fit with the six conditions in [Application](#application).
2. Install an AI coding agent, Git and Python, and copy the [Promptotyping skill](#skills-promptotyping) from `skills/promptotyping/` into the agent's skills folder.
3. Work through the prompts of the [tutorial](#tutorial) in order, from Prepare to the mechanical checks, with knowledge curation and rebuild where a check fails.

## Example

The start page runs the prompts of the tutorial on `intro/example/letters.csv`, an invented family correspondence with partly uncertain dates, and states what each prompt yields. The [introduction](intro/) plays the same round.

## Limits, licence and citation

The practice has not been evaluated against other ways of working, and whether it transfers to other people and projects is open. Text, templates and skill are licensed under CC BY 4.0, code under the MIT License.

Pollin, Christopher; Steiner, Christian: Promptotyping. Zenodo. https://doi.org/10.5281/zenodo.14160875
