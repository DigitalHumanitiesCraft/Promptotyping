---
title: Project knowledge and benchmark refactor
status: snapshot
language: en
created: 2026-09-05
related: [../knowledge/INDEX, ../knowledge/plan, ../knowledge/verification, ../knowledge/journal]
---

# Project knowledge refactor, 5 September 2026

The operator requested a benchmark refactor, then extended the work to Markdown
and maintained project knowledge across the repository. This report records the
structural and consistency pass. It is not a scholarly re-review of the paper or
all imported research claims, and it supplies no benchmark effectiveness results.

## Inventory and treatment

The initial broad inventory contained 469 Markdown files after the benchmark's
directory split. Retaining the old frontend plan and adding this report brings
the final inventory to 471 files.

| Area | Markdown files | Treatment |
|---|---:|---|
| Repository root | 2 | Updated orientation, version wording and action routing |
| `knowledge/` | 13 | Reviewed document ownership and current state; condensed active planning and removed duplicated task details |
| `_content/` | 58 | Included in consistency and link checks; public method text and template mirrors retained |
| `research-artefacts/` | 15 | Separated benchmark task drafts and tooling; retained the canonical paper text |
| `skills/` | 1 | Checked through existing skill/portal contracts; no skill change needed |
| `snapshots/` | 5 | Preserved dated evidence and moved historical planning here |
| `handoffs/` | 1 | Included in link verification; current inbox remains `knowledge/handoff.md` |
| `source-material/` | 2 | Retained source texts; included in the structural inventory and link scan |
| `assets/` | 15 | Retained figure provenance and specifications; included in the structural inventory and link scan |
| `vault/` | 359 | Checked the production evidence chain with its own validator; imported representations, assertions and epistemic statuses were not rewritten |

The `vault/` inventory includes intentionally broken test-fixture documents.
Those are software test material, not production evidence failures.

## Resolved findings

1. **Cross-task fingerprint coupling.** Reproduced the old runner's rejection of a
   prepared synthetic run after editing only the SZD draft README. The task draft
   and fixture now occupy separate directories. Fingerprints include task inputs,
   assessment material and executable tools; unrelated drafts, root README and
   tests do not invalidate an existing run. Relevant changes still do.
2. **Missing output provenance.** The fixture's `task.json` already excluded it
   from studies, but run and grade outputs did not carry that fact. State, run
   records, grades and selfcheck summaries now carry task identity, data origin
   and `benchmark_eligible: false` from the owning manifest.
3. **Mixed current and historical planning.** The active project plan shrank from
   172 to 61 lines. Its old F1–F9 package descriptions and dated state statements
   are preserved in [frontend planning history](frontend-plan-history-2026-09-05.md).
   Their body was compared with `HEAD:knowledge/plan.md`; only relative links were
   relocated. Specification citations now point to that historical carrier.
4. **Repeated task state.** Shared experiment and measurement rules remain in the
   benchmark specification, readiness in its plan, research scenarios in the task
   README, and exact source versions and record selections in its manifest. Other
   documents link to these owners. The project plan now routes the benchmark work.
5. **Incomplete operational routing.** `CLAUDE.md`, root README, INDEX, architecture
   and verification documentation now identify the benchmark's actual role and
   structure. The README no longer characterises the entire repository as doing
   no data processing. Paper governance distinguishes the deployed commit from
   the current canonical working repository.
6. **Link-check coverage gap.** The existing V15 check now also covers
   `research-artefacts/`, `snapshots/` and `handoffs/`. Regression tests ensure that
   missing targets are caught and portal-root-relative figure links remain valid.

## Current navigation

| Information | Current owner |
|---|---|
| Project workstreams and release milestones | [knowledge/plan.md](../knowledge/plan.md) |
| Document routing | [knowledge/INDEX.md](../knowledge/INDEX.md) |
| Benchmark rationale | [proposal](../research-artefacts/promptotyping-bench-proposal.md) |
| Shared study and measurement contract | [benchmark specification](../knowledge/benchmark-specification.md) |
| Benchmark readiness and next work | [benchmark plan](../knowledge/benchmark-plan.md) |
| Task and tooling entry point | [benchmark README](../research-artefacts/promptotyping-bench/README.md) |
| Real SZD task draft and source selection | [tasks/szd-correspondence](../research-artefacts/promptotyping-bench/tasks/szd-correspondence/README.md) |
| Synthetic fixture, reference and tooling | [fixtures/dating-explorer](../research-artefacts/promptotyping-bench/fixtures/dating-explorer/README.md) |

The previous benchmark-root `tools/`, `tests/`, `data/`, `reference/`, `participant/`,
`conditions/`, `task.json`, rubric and human protocol moved together into
`fixtures/dating-explorer/`. The former `szd-correspondence/` folder moved into
`tasks/`. The benchmark root README is now the common entry point. Existing fixture
workspaces require a fresh preparation because the fingerprint contract changed.

## Verification and limits

- Combined regression suite: **149 passed**, including 15 benchmark tooling tests.
- Repository consistency: **19 groups, zero failures**. External URL resolution
  was not requested by this check run.
- Grounded Vault validation: **zero errors**, one declared `W-NO-OUTPUT` warning,
  zero undeclared warnings. The canonical manuscript intentionally lives outside
  the vault's `40_output/` directory.
- Relocated SZD manifest: source blob hash and 16 distinct selected IDs retained.
- Historical plan: retained body compared against the pre-refactor Git version.
- Diff whitespace check passed; no model calls, participant trials or publication.

A simple all-file inline-link scan produced four path-resolution candidates.
The technology-baseline link and paper figure resolve against the portal's
repository root, which V15 supports. `DOC1.md` and `DOC2.md` occur in an ingested
source representation as examples; editing that source would break its provenance
contract. No unresolved current navigation link was found by the checks used.

The 1,955-plus-line paper specification remains the governing scholarly contract;
this pass did not decide which scholarly provisions could be merged or removed.
The narrative journal remains the existing provenance record. Its separately
planned semantic compaction is still documented in the active plan. Personal
Obsidian integration remains in the existing handoff; this refactor changed only
the repository workspace.
