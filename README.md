# Promptotyping

[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.14160875.svg)](https://doi.org/10.5281/zenodo.14160875)

Promptotyping is a working practice in which research data and their contexts are translated, with the help of frontier LLM agents, into research artefacts that suit the purposes of the researchers and the ways in which they work. It draws on Knowledge Engineering, Context Engineering and Agentic Engineering, and its work takes four recurring forms, namely Preparation, Exploration, Distillation and Implementation.

![Research data and their contexts enter four recurrent forms of work, called Preparation, Exploration, Distillation and Implementation, which researchers and research software developers direct and LLM agents carry out. Each iteration yields a Promptotype, a prototype that counts along with the project knowledge base and with the research data. Verification and agentic review check it, the researchers assess it through scholarly validation, the knowledge base supplies the context for each task, and what checking and use reveal returns to it through knowledge curation.](assets/img/promptotyping-practice.svg)

![A Promptotype opened, with CorrespExplorer as the example. The prototype offers coordinated visualisation views and is built from the research data, correspondence metadata in CMIF-XML. The project knowledge base describes the data and holds declarative documents such as project.md, data.md, specification.md and design.md, the process documents journal.md and plan.md, and the agent instructions in CLAUDE.md.](assets/img/promptotype-example.svg)

The site at https://dhcraft.org/Promptotyping/ shows the same on one page.

## What is here

- [`templates/`](templates/) holds the templates of the Promptotyping Documents, the knowledge documents of a project, and the [convention](templates/convention.md) they follow. This repository is their single source. Each file is also readable as plain Markdown at `https://dhcraft.org/Promptotyping/templates/<name>.md`.
- [`knowledge/`](knowledge/INDEX.md) is the knowledge base of this project, written with its own templates. [`practice.md`](knowledge/practice.md) describes the four forms of work, the three kinds of checking and the limits of the artefact, and [`journal.md`](knowledge/journal.md) tells how the practice and the repository came about.
- [`case-studies/`](case-studies/) describes the projects in which the practice was used, each with its data, its artefact and what it shows.

The skill that gives an agent the procedure of the practice lives in its own repository, [promptotyping-skill](https://github.com/DigitalHumanitiesCraft/promptotyping-skill), with the five subcommands `orient`, `explore`, `distill`, `curate` and `handoff`.

## Use

Install an AI coding agent such as Claude Code, create a project folder with your data and start the agent there. The [start prompt](https://github.com/DigitalHumanitiesCraft/promptotyping-skill#start-with-a-prompt) lets the agent install the skill and look at your project, and the README of the skill repository also gives the installation by hand.

From then on you say what you want in your own words. The skill reads the template of a document before it creates it, so the templates need not be copied by hand.

## Origin

Promptotyping grew out of research software development in the digital humanities. The term first named the generation of project-specific interfaces with LLMs in a [dissertation at the University of Graz](https://unipub.uni-graz.at/obvugrhs/12127700) (2025), and the practice was described in blog posts on [DHCraft](https://dhcraft.org/excellence/blog/Promptotyping/) (2025) and [L.I.S.A.](https://lisa.gerda-henkel-stiftung.de/digitale_geschichte_pollin) (2026). The paper on the practice (Pollin 2026, Promptotyping, submitted) traces it through three cases, [CorrespExplorer](case-studies/corresp-explorer.md), [SZD-HTR](case-studies/szd-htr.md) and [Klawiter-Rescue](case-studies/klawiter-rescue.md).

## Limits, licence and citation

The practice has not yet been evaluated against other ways of working, and whether it transfers to other people and projects is open.

Text and templates are licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), code under the MIT License in [LICENSE](LICENSE). The shared DHCraft web files under [`assets/dhcraft/`](assets/dhcraft/) carry their own [licence](assets/dhcraft/LICENSE.md), and the DHCraft mark is proprietary. The repository contains no third-party research data.

Cite the practice through [CITATION.cff](CITATION.cff), which GitHub offers under "Cite this repository". The concept DOI resolves to the latest archived version. Changes are listed in [CHANGELOG.md](CHANGELOG.md).

## Working on this repository

[CLAUDE.md](CLAUDE.md) is the agent's entry point. The site is one hand-written page without a build step. Serve the repository root locally with `python -m http.server 8000`. The Pages workflow publishes an explicit list of paths and packs the templates into one archive.
