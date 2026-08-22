---
title: Project
project:
  name: Promptotyping Site
  repository: https://github.com/DigitalHumanitiesCraft/Promptotyping
status: complete
language: en
version: 0.7
created: 2026-05-09
updated: 2026-08-22
authors: [Christopher Pollin]
generated-with: Claude Code (Claude Opus 4.8)
method:
  name: Promptotyping
  url: https://dhcraft.org/Promptotyping/
template:
  name: Vorlage Projekt-Wissensdokument
  version: 0.3
  url: https://dhcraft.org/Promptotyping/promptotyping-document/project
  alias: https://dhcraft.org/Promptotyping/#promptotyping-document-project
topics: ["[[Promptotyping]]", "[[Context Engineering]]"]
knowledge-sources:
  institutions:
    Digital Humanities Craft OG: https://dhcraft.org
    University of Graz: https://www.uni-graz.at
related: [INDEX, specification, architecture, design, governance, handoff, plan, journal]
---

# Project

This document is the charter for the repository `DigitalHumanitiesCraft/Promptotyping`. The repository renders on https://dhcraft.org/Promptotyping/ as the public method portal for Promptotyping. It integrates the methodology specification, the scholarly paper, the case evidence, reusable templates, and the canonical skill. Its machine-readable endpoints resolve the `template:` URIs used by Promptotyping repositories.

This English charter is part of an operator decision from 2026-07-23. The core knowledge documents (INDEX, project, specification, architecture, design) become English so the knowledge base can serve as the public showcase of the method applied to itself. The journal, the report, and the paper-writing document stay German.

## Identity

The site is the public counterpart to the Promptotyping method as the Pollin 2026 paper formalises it and as the vault develops it into systematic knowledge. Its primary user path is Understand, Evaluate, Apply. The paper supplies the scholarly rationale and evaluation within that portal, while the specification, case evidence, tutorial, templates, and skill support assessment and application.

The audiences are ordered by product priority:

- **Researchers and project leads** who want to assess and apply Promptotyping. They enter through the goal-based routes and leave with an executable tutorial, skill, and template set.
- **Reviewers and reproducers** who check a Promptotyping repository against the method. They enter through the convention or through a specific template address.
- **Coding agents** that resolve `template:` URIs from repository frontmatter fields. They enter through versioned anchors and need the templates as a machine-readable endpoint.

## Material basis

The methodology repository processes no research data, it mirrors knowledge. That is why the Data template does not apply and no `data.md` exists (see [journal.md](journal.md), entry 2026-05-09 on the template-trigger correction). The material basis is stated compactly here instead.

Four source types feed the site.

**The Pollin 2026 paper.** The scholarly method text, *Promptotyping. Translating Research Data into Research Artefacts through Context Engineering and Agentic Engineering*. It is the single English Markdown Research Artefact [promptotyping-paper.md](../research-artefacts/promptotyping-paper.md) in a two-document model, with everything decided, checked and still open about it held in [paper-specification.md](paper-specification.md). The current state is version 0.9.1, a four-chapter author-review draft established on 2026-08-22 from the revisions following the publicly circulated version 0.9. Version 1.0 requires complete author acceptance under the sentence-level protocol in `paper-specification.md`. The site renders the Research Artefact directly, so the deployed text is canonical. The chosen venue is the Zeitschrift für digitale Geisteswissenschaften (ZfdG); the submission package derives fresh from the submission section of `paper-specification.md` and the final text at submission time. Three earlier steering documents were consolidated into `paper-specification.md` and deleted with commit pins, `paper-writing.md`, `paper-argument-map.md` and `submission-zfdg.md`; their wording lives in the git history.

**Vault templates and convention.** The template catalogue under `Vault Operations/Templates/Promptotyping/` and the convention under `Vault Operations/Konventionen/Konvention Promptotyping Documents.md` are the source of truth in the vault. Function names and subject prefixes are English. The public mirrors preserve their established URLs and anchors while adopting the current naming contract and template versions.

**The case-study collection.** Documented case studies in the vault under `Projects/Promptotyping/Case Studies/`. Each carries repository URL, live-demo URL where available, status, main claim, and methodological aspects. A curated subset renders as depth pages, the remainder as cards in the gallery. The curation and the exact selection are owned by [specification.md](specification.md) (A7).

**Method videos on YouTube.**

- Part 1, method explanation: https://youtu.be/8sUe4Jkh3uQ (four phases, distillation, context-window management, Knowledge Documents, EIL, sycophancy)
- Part 2, live demo with Claude Code: https://youtu.be/hd_a-NBO_S4 (a set of Excel documents turned into a functional dashboard, thinking matrix, context compression, iterative error correction)

## Scope

The refactor deleted the outdated November 2025 state of the repository (six-phase model, seven old use cases, decorative Living-Paper modules, no addressable template system) and rebuilt the site from the vault knowledge, with the Pollin 2026 paper as reading substrate, the versioned templates as anchors, and curated case studies as cards in the paper text.

Out of scope:

- **No new scholarly paper.** The paper is authored under its own two-document model; the site mirrors and renders it.
- **No method refactor.** The four phases, the three document types, the template catalogue, and the concepts are fixed in the vault. The site mirrors them and does not revise them.
- **No vault refactor.** Vault corrections happen only when mirroring surfaces a discrepancy, and they are decided in the vault.
- **No parallel language architecture.** The public method pages and the repository's core Knowledge Documents are English. Established German template mirrors and teaching materials remain bounded exceptions.

## Current state

The repository baseline is complete. The site renders the method portal, the paper, the templates with side panels and the frontmatter inspector, the curated use-case gallery with its depth pages, the tutorial, the canonical skill, the Vault evidence layer, and the reference pages. Mobile layout, accessibility behaviour, stable addressing, and search-engine metadata are part of that baseline. What each surface must do and how it is built is owned by [specification.md](specification.md), [architecture.md](architecture.md), and [design.md](design.md); the header and footer use the DHCraft watercolour mark.

The repository implementation of the three portal scenarios is complete and verified. Understand connects Application to the paper and evidence; Evaluate connects the gallery, case depth pages, the paper, and the Vault; Apply connects the tutorial, canonical skill, templates, and Working environment. Three independent agent role simulations tested these paths from public content only. Their agent-owned findings were integrated into the fit check, terminology, document routing, data-profile boundary, and Skill application. The tutorial source is version 0.4 and remains a draft until the operator accepts its text. Human comprehension, scholarly adequacy, comparative effectiveness, resource requirements, and independent transfer belong to the external evaluation of the release candidate.

The public deployment changes only through an explicit release decision under [governance.md](governance.md). The repository and the live site can therefore differ between release decisions without changing which repository sources are canonical.

The phase-provenance lane was removed after the first deploy by operator decision (A2 in [specification.md](specification.md)). The `{:.phase-*}` tags it read have since left the paper Markdown as well.

The FAIR infrastructure policy is dual licensing, MIT for code and CC BY 4.0 for documentation and Knowledge Documents, with third-party research data exempted per repository under its own rights statement. The repository root carries a MIT `LICENSE` and a `CITATION.cff`; the citation identity is Christopher Pollin, Digital Humanities Craft OG, ORCID 0000-0002-4879-129X.

The `vault/` folder is a Grounded-Vault instance (template `DigitalHumanitiesCraft/grounded-vault`) that anchors the paper's load-bearing claims to sources. Work inside it follows its own action layer `vault/CLAUDE.md`.

The chronological course and the lane cuts live in [journal.md](journal.md), while the paper's governing knowledge lives in [paper-specification.md](paper-specification.md).

## Relationship to the vault

This knowledge base is a **mirror with a life of its own**. The vault templates that guide it are source of truth for the templates themselves. What is documented here is the *application* of those templates to this concrete refactor project, which triggers fire, which templates do not apply, which design decisions are made for this project. That is complementary to the vault template, the template describes the structural space and this document carries the filling.

## Expected outcome

- `https://dhcraft.org/Promptotyping/` guides a researcher or project lead through Understand, Evaluate, Apply.
- The Pollin 2026 paper remains readable and citable as the scholarly component of the portal.
- The catalogue templates are addressable under latest anchors (`#promptotyping-document-data` and so on), with snapshot sub-anchors added at later version jumps.
- Subpath aliases (`/promptotyping-document/data`) serve humans; static Markdown URLs under `_content/` serve as the machine address (ADR-10).
- Case-study depth pages plus a filterable, curated use-case gallery (A7).
- The tutorial and canonical skill support a first documented Promptotyping iteration from the same public interface.
- Glossary as a tooltip over the reading flow, with the full entry one link away; bibliography as an anchor list in which every entry carries its own address.
- Repositories can write `template: { url: "https://dhcraft.org/Promptotyping/promptotyping-document/data" }` into their frontmatter and thereby point at the canonical latest specification.

## Links

- Vault knowledge document [[Promptotyping]], the methodological core
- Vault convention [[Konvention Knowledge Documents]], the structural principles
- Vault templates [[Vorlagen Knowledge Documents]], the template catalogue
- Pollin 2026 paper, the reading substrate
