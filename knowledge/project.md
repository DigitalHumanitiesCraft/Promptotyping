---
title: Project
project:
  name: Promptotyping Site
  repository: https://github.com/DigitalHumanitiesCraft/Promptotyping
status: complete
language: en
version: 0.7
created: 2026-05-09
updated: 2026-10-28
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

This document is the charter for the repository `DigitalHumanitiesCraft/Promptotyping`. The repository renders on https://dhcraft.org/Promptotyping/ as the public method portal for Promptotyping. It integrates the methodology specification, the case evidence, reusable templates, and the canonical skill. Its machine-readable endpoints resolve the `template:` URIs used by Promptotyping repositories.

This English charter is part of an operator decision from 2026-07-23. The core knowledge documents (INDEX, project, specification, architecture, design) become English so the knowledge base can serve as the public showcase of the method applied to itself. The journal and the report stay German.

## Identity

The site is the public counterpart to the Promptotyping method as the vault develops it into systematic knowledge. Its primary user path is Understand, Evaluate, Apply. The specification, case evidence, tutorial, templates, and skill support understanding, assessment and application. The scholarly rationale and evaluation stand in the method paper, which is maintained outside this repository and will be published in the journal.

The audiences are ordered by product priority:

- **Researchers and project leads** who want to assess and apply Promptotyping. They enter through the goal-based routes and leave with an executable tutorial, skill, and template set.
- **Reviewers and reproducers** who check a Promptotyping repository against the method. They enter through the convention or through a specific template address.
- **Coding agents** that resolve `template:` URIs from repository frontmatter fields. They enter through versioned anchors and need the templates as a machine-readable endpoint.

## Material basis

The method portal primarily mirrors knowledge. Its material basis is stated compactly here rather than in a root `data.md` (see [journal.md](journal.md), entry 2026-05-09 on the template-trigger correction). The separate [benchmark authoring area](../research-artefacts/promptotyping-bench/README.md) distinguishes real-data task contracts and source manifests under `tasks/` from synthetic tooling material under `fixtures/`.

Four source types feed the site.

**The method paper.** The scholarly method text, *Promptotyping. Translating Research Data into Research Artefacts through Context Engineering and Agentic Engineering*, is maintained outside this repository and will be published in the journal. Neither the manuscript nor the material bound to it, its specification, review tooling, figures and audits, belongs to this repository (operator decision 2026-10-28).

**Vault templates and convention.** The template catalogue under `Vault Operations/Templates/Promptotyping/` and the convention under `Vault Operations/Konventionen/Konvention Promptotyping Documents.md` are the source of truth in the vault. Function names and subject prefixes are English. The public mirrors preserve their established URLs and anchors while adopting the current naming contract and template versions.

**The case-study collection.** Documented case studies in the vault under `Projects/Promptotyping/Case Studies/`. Each carries repository URL, live-demo URL where available, status, main claim, and methodological aspects. A curated subset renders as depth pages, the remainder as cards in the gallery. The curation and the exact selection are owned by [specification.md](specification.md) (A7).

**Method videos on YouTube.**

- Part 1, method explanation: https://youtu.be/8sUe4Jkh3uQ (four phases, distillation, context-window management, Knowledge Documents, EIL, sycophancy)
- Part 2, live demo with Claude Code: https://youtu.be/hd_a-NBO_S4 (a set of Excel documents turned into a functional dashboard, thinking matrix, context compression, iterative error correction)

## Scope

The refactor deleted the outdated November 2025 state of the repository (six-phase model, seven old use cases, decorative Living-Paper modules, no addressable template system) and rebuilt the site from the vault knowledge, with the versioned templates as anchors and curated case studies as cards.

Out of scope:

- **No scholarly paper.** The method paper is authored and maintained outside this repository; the site neither mirrors nor renders it.
- **No method refactor.** The four forms of work, the three document types, the template catalogue, and the concepts are fixed in the vault. The site mirrors them and does not revise them.
- **No vault refactor.** Vault corrections happen only when mirroring surfaces a discrepancy, and they are decided in the vault.
- **No parallel language architecture.** The public method pages and the repository's core Knowledge Documents are English. Established German template mirrors and teaching materials remain bounded exceptions.

## Current state

The repository baseline is complete. The site renders the method portal, the templates with side panels and the frontmatter inspector, the curated use-case gallery with its depth pages, the tutorial, the canonical skill, the Vault evidence layer, and the reference pages. Mobile layout, accessibility behaviour, stable addressing, and search-engine metadata are part of that baseline. What each surface must do and how it is built is owned by [specification.md](specification.md), [architecture.md](architecture.md), and [design.md](design.md); the header and footer use the DHCraft watercolour mark.

The repository implementation of the three portal scenarios is complete and verified. Understand connects Application to the evidence; Evaluate connects the gallery, case depth pages, and the Vault; Apply connects the tutorial, canonical skill, templates, and Working environment. Three independent agent role simulations tested these paths from public content only. Their agent-owned findings were integrated into the fit check, terminology, document routing, data-profile boundary, and Skill application. The tutorial source is version 0.4 and remains a draft until the operator accepts its text. Human comprehension, scholarly adequacy, comparative effectiveness, resource requirements, and independent transfer belong to the external evaluation of the release candidate.

The public deployment changes only through an explicit release decision under [governance.md](governance.md). The repository and the live site can therefore differ between release decisions without changing which repository sources are canonical.

The phase-provenance lane was removed after the first deploy by operator decision (A2 in [specification.md](specification.md)).

The FAIR infrastructure policy is dual licensing, MIT for code and CC BY 4.0 for documentation and Knowledge Documents, with third-party research data exempted per repository under its own rights statement. The repository root carries a MIT `LICENSE` and a `CITATION.cff`; the citation identity is Christopher Pollin, Digital Humanities Craft OG, ORCID 0000-0002-4879-129X.

The `vault/` folder is a Grounded-Vault instance (template `DigitalHumanitiesCraft/grounded-vault`) that anchors the method's load-bearing claims to sources. Work inside it follows its own action layer `vault/CLAUDE.md`.

The [Promptotyping Bench proposal](../research-artefacts/promptotyping-bench-proposal.md)
opens a bounded research workstream on small research-artefact implementation tasks.
Its [specification](benchmark-specification.md) and [plan](benchmark-plan.md) own
the proposed study; [MOC-Benchmark](../vault/30_assertions/MOC-Benchmark.md) connects
it to the existing research basis. Every benchmark study task must use real DH
research data; the synthetic development package serves only as a tooling fixture.
The operator selected SZD correspondence and dating for the first real-data task;
its [rehearsal materials](../research-artefacts/promptotyping-bench/tasks/szd-correspondence/README.md)
now include source selection, participant briefs, an input schema, a local data
preparer and candidate assessment scenarios. A local author-rehearsal package is
prepared; independent domain review and measured trials remain outstanding. This
preparation provides no empirical result or revision of the method paper.

The chronological course and the lane cuts live in [journal.md](journal.md).

## Relationship to the vault

This knowledge base is a **mirror with a life of its own**. The vault templates that guide it are source of truth for the templates themselves. What is documented here is the *application* of those templates to this concrete refactor project, which triggers fire, which templates do not apply, which design decisions are made for this project. That is complementary to the vault template, the template describes the structural space and this document carries the filling.

## Expected outcome

- `https://dhcraft.org/Promptotyping/` guides a researcher or project lead through Understand, Evaluate, Apply.
- The portal names the method paper as the scholarly account of the method and cites it once the journal has published it.
- The catalogue templates are addressable under latest anchors (`#promptotyping-document-data` and so on), with snapshot sub-anchors added at later version jumps.
- Subpath aliases (`/promptotyping-document/data`) serve humans; static Markdown URLs under `_content/` serve as the machine address (ADR-10).
- Case-study depth pages plus a filterable, curated use-case gallery (A7).
- The tutorial and canonical skill support a first documented Promptotyping iteration from the same public interface.
- A glossary that defines every term of the method and names its sources, each entry under its own address.
- Repositories can write `template: { url: "https://dhcraft.org/Promptotyping/promptotyping-document/data" }` into their frontmatter and thereby point at the canonical latest specification.

## Links

- Vault knowledge document [[Promptotyping]], the methodological core
- Vault convention [[Konvention Knowledge Documents]], the structural principles
- Vault templates [[Vorlagen Knowledge Documents]], the template catalogue
- Pollin 2026, the method paper (maintained outside this repository)
