---
title: Overview
slug: overview
status: complete
language: en
version: "1.1"
updated: 2026-11-14
mirrored: 2026-06-10
machine-url: https://dhcraft.org/Promptotyping/_content/overview.md
---

# Promptotyping

A working practice for translating research data and their contexts into research artefacts that fit the researchers' purposes and ways of working. An AI coding agent builds the artefact from a small project knowledge base that researchers and agent keep in the repository and revise as the work proceeds. It is meant for researchers and project teams with structured data and a concrete question.

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
- The project knowledge base consists of declarative, process and agent instruction documents. The catalogue of their templates is `assets/data/promptotyping-documents.json`, each template is readable under `_content/promptotyping-document/{slug}.md`, and the [templates page](#vorlagen) renders them.
- Verification tests conformity to formalised requirements, agentic review lets an agent examine the work against named criteria, and scholarly validation by the researchers decides whether the work is warranted by the sources and fits its purpose. The last is the acceptance of a promptotype for a purpose.
- Knowledge curation examines and revises the project knowledge in light of what sources, checking and use reveal.

The full account is in [Application](#application) and the glossary.

## Reuse

1. Check the fit with the six conditions in [Application](#application).
2. Install an AI coding agent, Git and Python, and copy the Promptotyping skill into the agent's skills folder. The skill lives in the repository [promptotyping-skill](https://github.com/DigitalHumanitiesCraft/promptotyping-skill), tagged per version, whose README gives the installation for each agent and whose changelog records every change.
3. Work in your own words. Start the agent in a project folder with your data and say what you want or call a subcommand, as the [tutorial](#tutorial) shows. An agent that cannot load skills reads the skill's `SKILL.md` first.

## Skill

With the skill installed, a person says what they want in their own words, and the agent takes the procedure from the skill. Five subcommands name the moments at which the skill is called directly.

- `orient` starts a session. It establishes where the project stands and changes no file.
- `explore` establishes what the data can and cannot support and records it with its evidence.
- `distill` models the findings as knowledge documents, with epics and user stories.
- `curate` checks and corrects the knowledge documents, against the project, against outside sources, or through a review with a fresh context.
- `handoff` ends a session. It writes the journal, states what is open and commits without pushing.

Building has no subcommand and follows the rules in the skill. The repository [promptotyping-skill](https://github.com/DigitalHumanitiesCraft/promptotyping-skill) holds the skill with the procedure of each subcommand. The [introduction](intro/) plays one round on `intro/example/letters.csv`, an invented family correspondence with partly uncertain dates.

## Limits, licence and citation

The practice has not been evaluated against other ways of working, and whether it transfers to other people and projects is open. Text, templates and skill are licensed under CC BY 4.0, code under the MIT License.

Pollin, Christopher; Steiner, Christian: Promptotyping. Zenodo. https://doi.org/10.5281/zenodo.14160875
