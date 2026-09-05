---
title: Plan
project:
  name: Promptotyping Site
  repository: https://github.com/DigitalHumanitiesCraft/Promptotyping
status: active
language: en
version: "0.6"
created: 2026-07-29
updated: 2026-09-05
authors: [Christopher Pollin]
generated-with: Claude Code (Claude Fable 5)
method:
  name: Promptotyping
  url: https://dhcraft.org/Promptotyping/
template:
  name: Vorlage Plan
  version: 0.3
  url: https://dhcraft.org/Promptotyping/promptotyping-document/plan
  alias: https://dhcraft.org/Promptotyping/#promptotyping-document-plan
related: [INDEX, specification, architecture, design, handoff, journal, paper-specification, benchmark-plan]
---

# Plan

This plan owns current project workstreams and their relationship to the method portal release. The paper specification owns manuscript acceptance, and the benchmark plan owns study development. Historical frontend packages are preserved in a [dated record](../snapshots/frontend-plan-history-2026-09-05.md); their old status statements do not set the current execution order.

## Current delivery milestones

| Milestone | Outcome | Exit condition | State |
|---|---|---|---|
| 1. Canonical foundation | Paper, method specification, governance, handoff, retired-interface record, canonical skill, and frontend describe one method system. | Active references to the retired interface repository are removed, canonical terms and status statements agree, the goal-based frontend routes resolve, and all repository and browser checks pass. | Repository scope completed and verified on 2026-08-22. Current cross-project transfers are tracked in [handoff.md](handoff.md). |
| 2. Usable method portal | Researchers and project leads can understand, evaluate, and apply Promptotyping through the frontend. | A representative user can complete the defined portal scenarios from the public interface alone, with stable addresses and traceable sources. | Repository and browser scenarios completed on 2026-08-22. Three independent agent role simulations identified internal interpretation and first-use conflicts; their agent-owned corrections are integrated in tutorial v0.4 and the method pages. The 2026-08-25 acceptance round made Overview and Application canonical English routes, retained the German aliases, and compacted the two opening surfaces. The tutorial remains draft pending operator text acceptance. |
| 3. Evaluated public release | The method package is versioned, citable, empirically evaluated, and publicly released from one approved state. | The evaluation has no blocking findings, the public site matches the released commit, and paper, specification, skill, and templates identify the same method version. | Pending. Paper version 0.9.1 is the author-review baseline; version 1.0 requires the complete acceptance protocol in `paper-specification.md`. Agent simulation supplies a pre-test. External participant use, an independently led transfer case, a documented unsuccessful or discontinued path, resource evidence, reverse Paper-to-Vault traceability, operator acceptance, and release remain open. |

The final evaluation target is an external researcher or project lead who can explain the method's purpose, judge its fit for a project, and complete one documented Promptotyping iteration with the skill or a template without private project context.

## Current workstreams and ownership

| Workstream | Owning document | Next work |
|---|---|---|
| Paper review and release | [paper-specification.md](paper-specification.md) | Complete the author's acceptance protocol and resolve the external review record |
| Method portal evaluation | This plan and [verification.md](verification.md) | Retain technical checks; obtain external use and operator acceptance against the delivery milestones |
| Promptotyping Bench | [benchmark-plan.md](benchmark-plan.md) | Use the prepared SZD package for an author rehearsal, obtain independent review and build measured trials; no effectiveness result exists yet |
| Project knowledge maintenance | [INDEX.md](INDEX.md) and the relevant owning document | Keep current contracts, state and historical evidence distinct; update links after moving an artefact |

Benchmark development contributes an approach to empirical evaluation. Completing
its tooling alone does not complete the portal's release criteria or the paper's
scholarly acceptance. Trial counts, sample IDs and collection rules remain in the
benchmark plan and task documents rather than being maintained again here.

The earlier F1–F9 proposals and their recorded reviews remain discoverable in the
historical frontend plan. Any revived candidate needs a current disposition; the
archived execution order is not an active instruction.

## Method-maintenance lanes

The current `knowledge/journal.md` predates template version 0.4 and remains a narrative project record. A later repository-specific migration will apply the curated provenance types and semantic compaction rule against a clean Git baseline. That migration will preserve every substantive statement through an explicit disposition and will not create `journal-archive.md`.

The canonical Promptotyping skill delivery lane closed on 2026-08-22. The repository source is `skills/promptotyping/SKILL.md`; the Skills page renders that file directly and exposes copy, download, and package links. Its `orient`, `handoff`, `compact`, and `distill` operations follow the method specification. Installed copies remain outside repository synchronisation.
