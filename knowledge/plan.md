---
title: Plan
project:
  name: Promptotyping Site
  repository: https://github.com/DigitalHumanitiesCraft/Promptotyping
status: active
language: en
version: "0.6"
created: 2026-07-29
updated: 2026-10-28
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
related: [INDEX, specification, architecture, design, handoff, journal, benchmark-plan]
---

# Plan

This plan owns current project workstreams and their relationship to the Promptotyping portal release. The paper and its acceptance are maintained outside this repository, and the benchmark plan owns study development. Historical frontend packages are preserved in a [dated record](../snapshots/frontend-plan-history-2026-09-05.md); their old status statements do not set the current execution order.

## Current delivery milestones

| Milestone | Outcome | Exit condition | State |
|---|---|---|---|
| 1. Canonical foundation | Practice specification, governance, handoff, retired-interface record, canonical skill, and frontend describe one system of the practice. | Active references to the retired interface repository are removed, canonical terms and status statements agree, the goal-based frontend routes resolve, and all repository and browser checks pass. | Repository scope completed and verified on 2026-08-22. Current cross-project transfers are tracked in [handoff.md](handoff.md). |
| 2. Usable Promptotyping portal | Researchers and project leads can understand, evaluate, and apply Promptotyping through the frontend. | A representative user can complete the defined portal scenarios from the public interface alone, with stable addresses and traceable sources. | Repository and browser scenarios completed on 2026-08-22. Three independent agent role simulations identified internal interpretation and first-use conflicts; their agent-owned corrections are integrated in tutorial v0.4 and the practice pages. The 2026-08-25 acceptance round made Overview and Application canonical English routes, retained the German aliases, and compacted the two opening surfaces. The tutorial remains draft pending operator text acceptance. |
| 3. Evaluated public release | The practice package is versioned, citable, empirically evaluated, and publicly released from one approved state. | The evaluation has no blocking findings, the public site matches the released commit, and specification, skill, and templates identify the same method version. | Pending. Agent simulation supplies a pre-test. External participant use, an independently led transfer case, a documented unsuccessful or discontinued path, resource evidence, operator acceptance, and release remain open. |

The final evaluation target is an external researcher or project lead who can explain the practice's purpose, judge its fit for a project, and complete one documented Promptotyping iteration with the skill or a template without private project context.

## Current workstreams and ownership

| Workstream | Owning document | Next work |
|---|---|---|
| Portal evaluation | This plan and [verification.md](verification.md) | Retain technical checks; obtain external use and operator acceptance against the delivery milestones |
| Promptotyping Bench | [benchmark-plan.md](benchmark-plan.md) | Use the prepared SZD package for an author rehearsal, obtain independent review and build measured trials; no effectiveness result exists yet |
| Project knowledge maintenance | [INDEX.md](INDEX.md) and the relevant owning document | Keep current contracts, state and historical evidence distinct; update links after moving an artefact |

Benchmark development contributes an approach to empirical evaluation. Completing
its tooling alone does not complete the portal's release criteria. Trial counts, sample IDs and collection rules remain in the
benchmark plan and task documents rather than being maintained again here.

The earlier F1–F9 proposals and their recorded reviews remain discoverable in the
historical frontend plan. Any revived candidate needs a current disposition; the
archived execution order is not an active instruction.

## Practice-maintenance lanes

The current `knowledge/journal.md` predates template version 0.6 and remains a narrative, oldest-first project record. A later repository-specific migration will apply the entry fields, newest-first order and semantic compaction rule of version 0.6 against a clean Git baseline, protecting entries cited outside the journal. That migration will preserve every substantive statement through an explicit disposition and will not create `journal-archive.md`.

The canonical Promptotyping skill is maintained in [DigitalHumanitiesCraft/promptotyping-skill](https://github.com/DigitalHumanitiesCraft/promptotyping-skill) since the operator decision of 2026-10-19 (A42); the repository-local package of 2026-08-22 was removed. Aligning that skill with the practice contract of A42 is open work in [promptotyping-skill#2](https://github.com/DigitalHumanitiesCraft/promptotyping-skill/issues/2). Installed copies remain outside repository synchronisation.
