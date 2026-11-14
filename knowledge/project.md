---
title: Project
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
  name: Project template
  version: 0.3
  url: https://dhcraft.org/Promptotyping/templates/project.md
knowledge-sources:
  institutions:
    Digital Humanities Craft OG: https://dhcraft.org
    University of Graz: https://www.uni-graz.at
related: [INDEX, practice, specification, architecture, design, journal]
---

# Project

The repository `DigitalHumanitiesCraft/Promptotyping` is the public specification of Promptotyping, the working practice that [practice.md](practice.md#the-working-practice) defines, published at https://dhcraft.org/Promptotyping/. It holds one web page, the templates of the Promptotyping Documents with their convention, the documented use cases, and this project knowledge base, which describes Promptotyping and how it came about and is itself published as the worked example of the practice.

## Data basis

This repository processes no research data of its own. Its material is knowledge about the practice, drawn from the documented research software projects of Digital Humanities Craft and its partners in [case-studies/](../case-studies/), from the dissertation, the published descriptions, the paper and the skill listed under [Sources](practice.md#sources), and from the work on this repository recorded in [journal.md](journal.md).

## Wider context

The paper on the practice is maintained outside this repository and will be published in a scholarly journal ([ADR-10](specification.md#adr-10-the-manuscript-stays-out)), and the site states the definitions it shares with the paper in its own words. The [Promptotyping skill](https://github.com/DigitalHumanitiesCraft/promptotyping-skill) is the installable part of the practice and has its single source in its own repository ([ADR-01](specification.md#adr-01-the-skill-has-one-source)), and it reads the templates from here. The repository is a project of Digital Humanities Craft OG.

## What it is about

In the documented projects, researchers with structured data and a concrete question built their own research software with AI coding agents. Promptotyping states how such work stays answerable to the sources and the research purpose. The repository serves three groups of readers.

- Researchers and project teams who want to judge whether the practice fits a project and to start a first iteration.
- Reviewers who check a Promptotyping repository against the practice and its templates.
- Coding agents that read a template or the convention from a stable address before they create a document.

The repository applies the practice to itself. Its knowledge base follows the templates it publishes, so that a reader can see a filled project knowledge base beside the empty structures.

## Technical implementation

The authors named in `CITATION.cff` are responsible for the practice and the repository, the first author maintains this knowledge base, and Digital Humanities Craft OG publishes it. The site and the documents were built with AI coding agents under the practice they describe, with the operator deciding what is accepted. How the repository is built is stated in [architecture.md](architecture.md).

## Range of functions

The single web page states what Promptotyping is, shows its figure, names the four forms of work, the Promptotype and the three kinds of checking, says how to install the skill and lists its five subcommands, and from there it leads to the templates, the use cases and this knowledge base. Every template and the convention are readable as Markdown under a stable address, so that an agent can fetch them over HTTP without a browser. What the page must contain is stated in [specification.md](specification.md).

The page claims no more than the practice has shown. It states that Promptotyping has not been evaluated against other ways of working and that its transfer to other people and projects is open.

## Delimitations

The repository deliberately leaves out the following.

- A tutorial, a worked workflow and teaching material, since the skill carries the procedure and the use cases show the practice at work.
- A glossary page, since the page and [INDEX.md](INDEX.md) define the terms they use.
- An evidence layer of sources, distillates and assertions, which was retired on 2026-11-14.
- Research data, tooling for consistency checks and a build step.

These boundaries keep one source for each kind of statement, so that the page, the templates and the skill cannot drift apart unnoticed.

## Licence

Text, templates and documentation, including this knowledge base and the case studies, are licensed under CC BY 4.0, and code under the MIT License in `LICENSE`. The shared DHCraft web files carry their own licence (MIT for the files, the SIL Open Font License for the fonts), and the DHCraft mark is proprietary. Cite the practice through `CITATION.cff`, whose concept DOI resolves to the latest archived version.
