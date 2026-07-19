---
title: State
project:
  name: "Promptotyping Paper Vault"
  repository: "https://github.com/DigitalHumanitiesCraft/Promptotyping"
method:
  name: Promptotyping
  url: https://dhcraft.org/Promptotyping/
status: draft
language: en
created: "2026-07-19"
updated: "2026-07-19"
related: [operations, journal]
---

# State

Everything volatile in one place, so the rule documents stay stable. Update rows here as work proceeds; never record processing state anywhere else.

## Source inventory

One row per source. Processing status: `new` → `ingested` → `distilled`.

| Source | Type | Channel | Representation | Distillate | Status |
|---|---|---|---|---|---|
| GM-DH `prompts/PRISM.md` (public repo, commit 2025-01-21) | document | collection | [[00_representation/documents/gm-dh-prism-prompt-2025-01]] | [[10_distillates/documents/gm-dh-prism-prompt-2025-01]] | distilled |
| LLM Summer School DH 2025 site (chpollin.github.io/llmdh, Cologne, September 2025) | document | collection | — | — | new |
| Dissertation (Pollin 2025b) | publication | collection | — | — | new |
| Initial method description, blog post 2025 (Pollin 2025d) | publication | collection | — | — | new |
| Section-4 figures verification findings (Promptotyping repo, `knowledge/verification-paper-figures.md`, 2026-07-19) | document | handover | — | — | new |
| Project repositories of the Section 4 evidence table | data | collection | — | — | new |

## Chapter register

One row per chapter of the deliverable. Writing status mirrors the chapter's frontmatter.

The deliverable is external (settled decision in [[knowledge/specification]]); files live in `_content/paper/` at the root of this repository.

| Chapter | File | Status | Notes |
|---|---|---|---|
| Abstract | `00-abstract.md` | draft | created 2026-07-19 |
| 1 Introduction | `01-introduction.md` | revised draft | genealogy reweighted 2026-07-19 |
| 2 Terms and Positioning | `02-terms-positioning.md` | revised draft | 2.6 rewritten 2026-07-19 (dissertation origin, PRISM side line) |
| 3 Four Phases | `03-four-phases.md` | revised draft | standardisation stage 3.3; figure echoes corrected |
| 4 Projects and Evidence | `04-projects.md` | revised draft | figures verified and corrected 2026-07-19 |
| 5 Epistemic Infrastructure | `05-epistemic-infrastructure.md` | draft | |
| 6 Discussion | `06-discussion.md` | in revision | tightening, limitations passage pending |
| 7 Conclusion | `07-conclusion.md` | revised draft | stale figure corrected 2026-07-19 |

## Open work

<!-- Short, current list; done items are deleted, decisions go to the journal. -->

- Footnote suggestion for the paper session (Section 2.6, side-line dating): the sentence placing PRISM as the side line can carry a footnote grounded in [[20_claims/prism-prompt-documented-by-january-2025]]. The claim carries only that the PRISM prompt existed in its stated wording in the public GM-DH repository by 2025-01-21 (git-commit dating). It does not carry PRISM's influence on the dissertation or on the four-phase model; those links need their own claims or enter the paper as posits.
- Ingest the remaining `new` sources of the inventory.
- Machine review is operator-gated (mechanism per [[knowledge/specification]]); until released, documents stay `grounded` with `checked.validation` dates.
