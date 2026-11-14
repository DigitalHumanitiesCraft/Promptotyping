# Promptotyping

[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.14160875.svg)](https://doi.org/10.5281/zenodo.14160875)

Promptotyping is a working practice that translates research data and their contexts into research artefacts that fit the researchers' questions and ways of working. It does so through three forms of engineering. Knowledge Engineering makes explicit and curates what a project knows about its domain, its data and its aims. Context Engineering selects from this knowledge what an agent needs for a task. Agentic Engineering organises the work of the agents that build on it.

The site at **https://dhcraft.org/Promptotyping/** presents the practice on one page, with the figure below, the terms, the files to download, a worked example and the citation. This README follows the same order in short form and links the page instead of repeating it.

![Researchers direct four recurrent forms of work, Preparation, Exploration, Distillation and Implementation, and assess each promptotype through scholarly validation. A promptotype is the state of an artefact together with its project knowledge base and its research data. Verification and agentic review accompany each iteration, and what checking and use reveal returns to the knowledge base through knowledge curation.](assets/img/promptotyping-practice.svg)

## What it is and where it comes from

Promptotyping grew out of research software development in the digital humanities. The term first named the generation of project-specific interfaces with LLMs in a dissertation at the University of Graz (2025), the practice was described in blog posts on DHCraft (2025) and L.I.S.A. (2026), and the paper on the practice, Pollin 2026, Promptotyping, submitted, traces it through three cases, CorrespExplorer, SZD-HTR and Klawiter-Rescue. Further projects are on the [use-case page](https://dhcraft.org/Promptotyping/#use-cases).

## Terms

In the figure, Knowledge Engineering is the project knowledge base and its curation, Context Engineering is the arrow that carries context to each task, and Agentic Engineering is the cycle of the four forms of work, Preparation, Exploration, Distillation and Implementation, with its checks. Each iteration yields a promptotype, the state of an artefact together with its project knowledge base and its research data. Verification and agentic review check it, and in scholarly validation the researchers decide whether it is warranted by the sources and fits their questions. The project knowledge base is a small set of Markdown files of three types, declarative, process and agent instruction documents. The [start page](https://dhcraft.org/Promptotyping/) explains the terms in a few paragraphs, and the [glossary](https://dhcraft.org/Promptotyping/#glossar) and the [specification](https://dhcraft.org/Promptotyping/#specification) give the full account.

## Reuse

A first iteration is meant for researchers and project teams with structured data and a concrete question. Check first whether the six conditions of the [fit check](_content/application.md) hold.

1. Install an AI coding agent such as Claude Code or Codex, Git and Python, then copy the skill into the agent's skills folder.

   ```bash
   git clone https://github.com/DigitalHumanitiesCraft/Promptotyping.git
   mkdir -p ~/.claude/skills
   cp -r Promptotyping/skills/promptotyping ~/.claude/skills/
   ```

   Codex reads skills from its skills directory, usually `$CODEX_HOME/skills/`. An agent that reads only `AGENTS.md` gets the skill through one line there, after the folder has been copied, for instance to `.agents/skills/promptotyping/`.

   ```markdown
   Before working in knowledge/, read .agents/skills/promptotyping/SKILL.md and follow the operation that fits the task.
   ```

2. Take the files. The skill lies under [`skills/promptotyping/`](skills/promptotyping/) with eight operations, Orient, Explore, Distil, Implement, Curate, Synthesise, Prune and Hand off. The templates for the knowledge base lie under [`_content/promptotyping-document/`](_content/promptotyping-document/), and the page offers each one and both sets as archives.

3. Work in your own words. Create an empty project folder with your data, start the agent there and name the step you want, from Prepare to the acceptance, as the example on the page and the [tutorial](_content/tutorial.md) do. The skill carries the procedure behind each step. An agent that cannot load skills gets it when you give it [`SKILL.md`](skills/promptotyping/SKILL.md) to read first.

## Example

The start page works through an invented family correspondence, [`intro/example/letters.csv`](intro/example/letters.csv), from setting up the folder to an accepted, versioned timeline. Each step is one sentence a person says to the agent, such as "Distil the knowledge base for a timeline of the letters, built as a static web page without a build step.", beside the file or state that results. The [introduction](https://dhcraft.org/Promptotyping/intro/) plays the same round beside the project folder.

## Limits, licence and citation

The practice has not yet been evaluated against other ways of working, and whether it transfers to other people and projects is still open. The automatic checks of this repository decide consistency between its own statements, while whether the description is right in substance remains scholarly judgement. The templates other than `technology` are written in German.

Text, templates and skill (Markdown under [`_content/`](_content/), [`knowledge/`](knowledge/), [`skills/`](skills/) and [`vault/`](vault/)) are licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), code under the MIT License in [LICENSE](LICENSE). The shared DHCraft web files under [`assets/dhcraft/`](assets/dhcraft/) carry their own [licence](assets/dhcraft/LICENSE.md), and the DHCraft mark is proprietary. The repository contains no third-party research data.

Cite the practice through [CITATION.cff](CITATION.cff), which GitHub offers under "Cite this repository". The concept DOI resolves to the latest archived version. Changes are listed in [CHANGELOG.md](CHANGELOG.md).

## Working on this repository

The knowledge base of the site itself is in [`knowledge/`](knowledge/INDEX.md), and [CLAUDE.md](CLAUDE.md) is the agent's entry point. The site has no build step. Serve the repository root locally with `python -m http.server 8000`, and run `python tools/build_downloads.py` once to preview the download archives, which the Pages workflow builds at delivery. The checks are `python tools/check_consistency.py` and the test run named in `CLAUDE.md`. [`tools/tests/README.md`](tools/tests/README.md) says where the tests lie, how to run them, what they check and how to carry the pattern into your own project.
