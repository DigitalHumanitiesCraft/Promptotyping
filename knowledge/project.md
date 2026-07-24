---
title: Project
project:
  name: Promptotyping Site
  repository: https://github.com/DigitalHumanitiesCraft/Promptotyping
status: complete
language: en
version: 0.5
created: 2026-05-09
updated: 2026-07-24
authors: [Christopher Pollin]
generated-with: Claude Code with Claude Opus 4.8
method:
  name: Promptotyping
  url: https://dhcraft.org/Promptotyping/
template:
  name: Vorlage Projekt-Wissensdokument
  version: 0.2
  url: https://dhcraft.org/Promptotyping/promptotyping-document/project
  alias: https://dhcraft.org/Promptotyping/#promptotyping-document-project
topics: ["[[Promptotyping]]", "[[Context Engineering]]"]
knowledge-sources:
  institutions:
    Digital Humanities Craft OG: https://dhcraft.org
    University of Graz: https://www.uni-graz.at
related: [INDEX, specification, architecture, design, journal]
---

# Project

This document is the charter for the repository `DigitalHumanitiesCraft/Promptotyping`. The repository renders on https://dhcraft.org/Promptotyping/ as an interactive paper and serves as the public methodology specification for Promptotyping, addressable, versioned, readable as a paper narrative, and machine-readable as the endpoint that `template:` URIs in Promptotyping repositories resolve to.

This English charter is part of an operator decision from 2026-07-23. The core knowledge documents (INDEX, project, specification, architecture, design) become English so the knowledge base can serve as the public showcase of the method applied to itself. The journal, the report, and the paper-writing document stay German.

## Identity

The site is the public counterpart to the Promptotyping method as the Pollin 2026 paper formalises it and as the vault develops it into systematic knowledge. The site is an interactive reading and addressing layer over the paper, with every methodological component embedded in it (templates, convention, case studies, glossary, bibliography). It does not replace the paper.

Three audiences use it:

- **Researchers** who want to apply Promptotyping. They enter through the method narrative, read the paper in its flow, and leave with concrete templates.
- **Reviewers and reproducers** who check a Promptotyping repository against the method. They enter through the convention or through a specific template address.
- **Coding agents** that resolve `template:` URIs from repository frontmatter fields. They enter through versioned anchors and need the templates as a machine-readable endpoint.

## Material basis

The methodology repository processes no research data, it mirrors knowledge. That is why the Data template does not apply and no `data.md` exists (see [journal.md](journal.md), entry 2026-05-09 on the template-trigger correction). The material basis is stated compactly here instead.

Four source types feed the site.

**The Pollin 2026 paper.** The scholarly method text. It is written as a single English Markdown document [paper.md](paper.md) in a two-document model, with the writing knowledge held in [paper-writing.md](paper-writing.md) and the argument in compact notation in [paper-argument-map.md](paper-argument-map.md). The draft is complete for operator reading and carries no open markers. A revision round on 2026-07-24 retired the translation doubling as the paper's theoretical core and the claim that the documents are the primary artefact, dissolved section 3.4 into 2.4 and 3.3, replaced the abstract, and reworked the evidence sections; the title still stands as it was and is with the operator. The chosen venue is the Zeitschrift für digitale Geisteswissenschaften (ZfdG), and the submission package (exposé, German and English short abstracts, formal checklist) lives in [submission-zfdg.md](submission-zfdg.md). The deployed site still renders the earlier decomposed sections under `_content/paper/`, a cut that predates the revision. Decomposition of the consolidated draft into section files happens only after the operator releases it.

**Vault templates and convention.** The template catalogue under `Vault Operations/Templates/Promptotyping/` and the convention under `Vault Operations/Konventionen/Konvention Promptotyping Documents.md`, both source of truth in the vault. The template function names are English since the 2026-07-19 catalogue sweep. When a template is mirrored into the repository, vault-internal wikilinks are replaced by site anchors or inline explanations, and the mirrored versions lag the vault state until the next site update.

**The case-study collection.** Documented case studies in the vault under `Projects/Promptotyping/Case Studies/`. Each carries repository URL, live-demo URL where available, status, main claim, and methodological aspects. A curated subset renders as depth pages, the remainder as cards in the gallery. The curation and the exact selection are owned by [specification.md](specification.md) (A7).

**Method videos on YouTube.**

- Part 1, method explanation: https://youtu.be/8sUe4Jkh3uQ (four phases, distillation, context-window management, Promptotyping Documents, EIL, sycophancy)
- Part 2, live demo with Claude Code: https://youtu.be/hd_a-NBO_S4 (a set of Excel documents turned into a functional dashboard, thinking matrix, context compression, iterative error correction)

## Scope

The refactor deleted the outdated November 2025 state of the repository (six-phase model, seven old use cases, decorative Living-Paper modules, no addressable template system) and rebuilt the site from the vault knowledge, with the Pollin 2026 paper as reading substrate, the versioned templates as anchors, and curated case studies as cards in the paper text.

Out of scope:

- **No new scholarly paper.** The paper is authored under its own two-document model; the site mirrors and renders it.
- **No method refactor.** The four phases, the three document types, the template catalogue, and the concepts are fixed in the vault. The site mirrors them and does not revise them.
- **No vault refactor.** Vault corrections happen only when mirroring surfaces a discrepancy, and they are decided in the vault.
- **No internationalisation of the whole site yet.** The site is German first. A full bilingual edition is a later project. The English core knowledge documents are the bounded exception the operator decided on 2026-07-23.

## Current state

Status is complete and deployed. The site renders the paper reading flow, the templates with side panels and the frontmatter inspector, the curated use-case gallery with its depth pages, and the overview, practice, skills, working-environment, glossary, convention, and bibliography sections, with mobile layout and SEO. What each of these must do and how it is built is owned by [specification.md](specification.md), [architecture.md](architecture.md), and [design.md](design.md); the header and footer run on the DHCraft watercolour mark.

The phase-provenance lane was removed after the first deploy by operator decision. The `{:.phase-*}` tags remain in the paper Markdown as methodological annotation and are stripped at render time (A2 in [specification.md](specification.md)).

The FAIR infrastructure policy is dual licensing, MIT for code and CC BY 4.0 for documentation and Promptotyping documents, with third-party research data exempted per repository under its own rights statement. The repository root carries a MIT `LICENSE` and a `CITATION.cff`; the citation identity is Christopher Pollin, Digital Humanities Craft OG, ORCID 0000-0002-4879-129X.

The `vault/` folder is a Grounded-Vault instance (template `DigitalHumanitiesCraft/grounded-vault`) that anchors the paper's load-bearing claims to sources. Work inside it follows its own action layer `vault/CLAUDE.md`.

The refactor and paper work continue in a multi-lane setup with research reporting. The chronological course and the lane cuts live in [journal.md](journal.md), the paper steering in [paper-writing.md](paper-writing.md).

## Relationship to the vault

This knowledge base is a **mirror with a life of its own**. The vault templates that guide it are source of truth for the templates themselves. What is documented here is the *application* of those templates to this concrete refactor project, which triggers fire, which templates do not apply, which design decisions are made for this project. That is complementary to the vault template, the template describes the structural space and this document carries the filling.

## Expected outcome

- `https://dhcraft.org/Promptotyping/` renders the Pollin 2026 paper as a scrollable interactive paper.
- The catalogue templates are addressable under latest anchors (`#promptotyping-document-data` and so on), with snapshot sub-anchors added at later version jumps.
- Subpath aliases (`/promptotyping-document/data`) serve humans; static Markdown URLs under `_content/` serve as the machine address (ADR-10).
- Case-study depth pages plus a filterable, curated use-case gallery (A7).
- Glossary as hover and side-panel source, bibliography as an anchor list.
- Repositories can write `template: { url: "https://dhcraft.org/Promptotyping/promptotyping-document/data" }` into their frontmatter and thereby point at the canonical latest specification.

## Links

- Vault knowledge document [[Promptotyping]], the methodological core
- Vault convention [[Konvention Promptotyping Documents]], the structural principles
- Vault templates [[Vorlagen Promptotyping Documents]], the template catalogue
- Pollin 2026 paper, the reading substrate