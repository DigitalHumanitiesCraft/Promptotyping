---
title: Plan
project:
  name: Promptotyping Site
  repository: https://github.com/DigitalHumanitiesCraft/Promptotyping
status: active
language: en
version: "0.6"
created: 2026-07-29
updated: 2026-11-14
authors: [Christopher Pollin]
generated-with: Claude Code (Claude Fable 5, Claude Opus 5.5)
method:
  name: Promptotyping
  url: https://dhcraft.org/Promptotyping/
template:
  name: Vorlage Plan
  version: 0.3
  url: https://dhcraft.org/Promptotyping/promptotyping-document/plan
  alias: https://dhcraft.org/Promptotyping/#promptotyping-document-plan
related: [INDEX, specification, architecture, design, journal]
---

# Plan

This plan owns current project workstreams and their relationship to the Promptotyping portal release. The paper and its acceptance are maintained outside this repository. Historical frontend packages were preserved in a dated record under `snapshots/`, which left the repository on 2026-11-14 and remains in the commit history; their old status statements do not set the current execution order.

## Current delivery milestones

| Milestone | Outcome | Exit condition | State |
|---|---|---|---|
| 1. Canonical foundation | Practice specification, governance, handoff, retired-interface record, canonical skill, and frontend describe one system of the practice. | Active references to the retired interface repository are removed, canonical terms and status statements agree, the goal-based frontend routes resolve, and all repository and browser checks pass. | Repository scope completed and verified on 2026-08-22. Current cross-project transfers are tracked in the section `## Open` of [journal.md](journal.md). |
| 2. Usable Promptotyping portal | Researchers and project leads can understand, evaluate, and apply Promptotyping through the frontend. | A representative user can complete the defined portal scenarios from the public interface alone, with stable addresses and traceable sources. | Repository and browser scenarios completed on 2026-08-22. Three independent agent role simulations identified internal interpretation and first-use conflicts; their agent-owned corrections are integrated in tutorial v0.4 and the practice pages. The 2026-08-25 acceptance round made Overview and Application canonical English routes, retained the German aliases, and compacted the two opening surfaces. The tutorial remains draft pending operator text acceptance. |
| 3. Evaluated public release | The practice package is versioned, citable, empirically evaluated, and publicly released from one approved state. | The evaluation has no blocking findings, the public site matches the released commit, and specification, skill, and templates identify the same method version. | Pending. Agent simulation supplies a pre-test. External participant use, an independently led transfer case, a documented unsuccessful or discontinued path, resource evidence, operator acceptance, and release remain open. |

The final evaluation target is an external researcher or project lead who can explain the practice's purpose, judge its fit for a project, and complete one documented Promptotyping iteration with the skill or a template without private project context.

## Current workstreams and ownership

| Workstream | Owning document | Next work |
|---|---|---|
| Portal evaluation | This plan and [verification.md](verification.md) | Retain technical checks; obtain external use and operator acceptance against the delivery milestones |
| Project knowledge maintenance | [INDEX.md](INDEX.md) and the relevant owning document | Keep current contracts, state and historical evidence distinct; update links after moving an artefact |

The earlier F1–F9 proposals and their recorded reviews remain discoverable in the
historical frontend plan in the commit history. Any revived candidate needs a current disposition; the
archived execution order is not an active instruction.

## Practice-maintenance lanes

The current `knowledge/journal.md` predates template version 0.6 and remains a narrative, oldest-first project record, which since 2026-11-14 opens with the section `## Open`. A repository-specific migration to the entry fields and newest-first order of version 0.6 was planned, without `journal-archive.md`. The rule of 2026-11-14 lets the earlier entries of a journal keep their form and order and replaces semantic compaction without archive by condensing with `journal-archive.md`, so whether the migration still takes place is open for the operator. Until then new entries follow the existing oldest-first order.

Since 2026-11-14 the skill is version 2.0.0 with five subcommands and no longer uses `knowledge/handoff.md`. On the same day the vault revised the convention and the templates, and this repository followed (A40). The mirrors of the journal, handoff, action-layer, index, integration and plan templates, the English convention, the catalogue with `handoff` marked as superseded, the start page, the consistency check with its tests, the tutorial, the Application page, the glossary, this knowledge base and the working rules in `CLAUDE.md` state the new rule, and this repository's empty `knowledge/handoff.md` is removed with the operator's approval. Still describing `handoff.md` as an inbox is the worked workflow `_content/workflow.md`, which lay outside that step. The eval cases under `tools/skill-evals/` left this repository on 2026-11-14.

Since 2026-11-14 the repository `DigitalHumanitiesCraft/promptotyping-skill` is the single source of the skill (A42, revising the placement in this repository of 2026-11-10). The site describes and links it, the start page offers no skill file or archive, and the checks hold the link, the redirect of `#skills-promptotyping` to the start page's Skill section and the five subcommand names. The Skills page with the two system prompts is retired on the same day, and `_content/skills/` is removed. The local copy under `skills/promptotyping/` is removed after this step. The eval cases under `tools/skill-evals/` were removed on 2026-11-14 together with the glossary, the Vault view with `vault/` and `snapshots/`, by the operator's decision to keep the repository lean. Installed copies remain outside repository synchronisation.
