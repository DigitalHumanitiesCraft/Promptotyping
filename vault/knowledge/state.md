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
| LLM Summer School DH 2025 site (chpollin.github.io/llmdh, September 8-11, 2025) | document | collection | [[00_representation/documents/llmdh-summer-school-2025]] | [[10_distillates/documents/llmdh-summer-school-2025]] | distilled |
| Dissertation (Pollin 2025b) | publication | collection | CSL `pollin-2025b` in `references/` | [[10_distillates/publications/pollin-2025b-dissertation]] | distilled |
| Initial method description, blog post 2025 (Pollin 2025d) | publication | collection | CSL `pollin-2025d` in `references/` | [[10_distillates/publications/pollin-2025d-promptotyping-blog]] | distilled |
| Section-4 figures verification findings (Promptotyping repo, `knowledge/verification-paper-figures.md`, 2026-07-19) | document | handover | [[00_representation/documents/verification-paper-figures-2026-07-19]] | [[10_distillates/documents/verification-paper-figures-2026-07-19]] | distilled |
| Project repositories of the Section 4 evidence table | data | collection | — | — | new (activated only when a concrete claim needs a computation; the verified figures are carried by the verification-findings source) |
| KE master deck, LLM-characterisation slide (DHCraft workshop deck, snapshot 2026-07-19) | document | handover | [[00_representation/documents/ke-master-deck-2026-07-19]] | [[10_distillates/documents/ke-master-deck-2026-07-19]] | distilled |

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
- Note for the paper session from the blog intake: the 2025-04-24 post does not pose the open metadata-standard question that the Section 3.3 narrative attributes to "the blog post 2025" (no occurrence of Metadaten/Standard/Schema in the body); the post does carry the form-freedom stance ([[10_distillates/publications/pollin-2025d-promptotyping-blog#^s7]]). If the question appears elsewhere (second blog post 2025-05-27 or the L.I.S.A. article), that source needs its own intake; otherwise the paper wording needs softening.
- Notes for the paper session from the llmdh ingest: the site carries no literal "Cologne"; the location rests on the host domain `uni-koeln.de`. The site heads the session "Advanced Prompting Techniques" (within "Prompt Engineering & AI Engineering"), while the paper's footnote in 2.6 writes "Advanced Prompt Engineering"; the school dates are September 8-11, 2025. Correction candidates for the footnote wording.
- Note for the paper session (Concepts): [[20_claims/deck-characterises-llms-as-jagged-alien]] and [[20_claims/deck-derives-context-and-verification-from-llm-profile]] ground a possible Jagged-Alien-Intelligence passage (attachment points are Sections 2.7 and 6). The claims carry what the teaching material states and dates; whether the characterisation holds of LLMs would need external sources or enters as a posit.
