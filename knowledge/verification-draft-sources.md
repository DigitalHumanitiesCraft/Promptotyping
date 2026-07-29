---
title: Verification of Draft Sources
project:
  name: Promptotyping Site
  repository: https://github.com/DigitalHumanitiesCraft/Promptotyping
status: active
language: en
version: 0.1
created: 2026-07-29
updated: 2026-07-29
authors: [Christopher Pollin]
generated-with: Claude Code (Claude Fable 5)
method:
  name: Promptotyping
  url: https://dhcraft.org/Promptotyping/
related: [paper-knowledge, journal]
---

# Verification of Draft Sources

Verification record for the 2025/2026 sources of `paper-draft.md`, per the Active Work Block of `paper-knowledge.md` (item: verify all 2025–2026 publication details). Each row states the claim checked, the procedure, and the verdict. Procedure was live web retrieval on 2026-07-29 (arXiv abstract pages, Zenodo records and API, publisher pages, TEI Guidelines site). Rows for works the draft cites but this pass did not check are marked open.

## Verdicts

| Reference in draft | Checked against | Verdict | Consequence |
|---|---|---|---|
| Cao 2026, arXiv 2606.05608 | arXiv abstract page | title changed in v2 (2026-06-10) to "Agentic Software: How AI Agents Are Restructuring the Software Paradigm"; preprint, no venue | reference corrected in draft (2026-07-29); cite as preprint |
| Alenezi 2026, arXiv 2606.28791 | arXiv abstract page | confirmed, v1 2026-06-27, cs.SE; preprint, no venue | cite as preprint |
| Zhong and Zhu 2026, arXiv 2605.13357 | arXiv abstract page | confirmed, "AI Harness Engineering: A Runtime Substrate for Foundation-Model Software Agents", v1 2026-05-13; preprint, no venue | cite as preprint |
| Mei et al. 2025, arXiv 2507.13334 | arXiv abstract page | confirmed, "A Survey of Context Engineering for Large Language Models", 15 authors, v2 2025-07-21; preprint, no venue | cite as preprint |
| Sapkota, Roumeliotis, and Karkee 2026 | ScienceDirect via search | confirmed published: Information Fusion 126 (2026), article 103599, DOI 10.1016/j.inffus.2025.103599 | peer-reviewed journal article; draft entry correct |
| Macedo 2026, arXiv 2606.04967 | arXiv abstract page | confirmed, v1 2026-06-03; preprint, no venue | cite as preprint; the draft already marks it as such |
| Sarkar and Drosos 2025 | arXiv 2506.23253 abstract page | confirmed, v2 2025-10-03, published in PPIG 2025 proceedings per comments field | venue acceptance holds; draft entry correct |
| TEI Consortium 2026 | tei-c.org/release/doc/tei-p5-doc/en/html/ | live Guidelines now P5 Version 4.12.0, 2026-07-28; the draft cited 4.11.0 of 2026-02-18 | reference updated to 4.12.0 (2026-07-29) |
| Pollin, Workshopreihe (Zenodo 20529814) | Zenodo record + versions API | record exists; earliest version v1.0.0 published 2023-11-02, current v1.3.0 of 2026-06-03 | footnote 5's "initiated in 2023" holds; the References entry carries year 2024, which matches no version date, and the entry is not cited author-date anywhere in the text — resolve at chapter acceptance (drop the entry and let footnote 5 carry it, or re-date) |
| Pollin, Steiner, and Zach 2023, FORGE (Zenodo 8425163) | Zenodo record | confirmed: presentation, 2023-10-10, FORGE 2023 Tübingen, three creators as cited | footnote 6 holds |
| Strutz 2025 / Strutz 2026 | verified 2026-07-29 (morning intake) | confirmed; vault carries CSL records, distillates, claims | draft entry for Strutz 2026 lacks the issue number (12(1): 39) — minor, at chapter acceptance |

## Open (not yet checked in this pass)

Wang et al. 2024 (Frontiers of Computer Science 18(6): 186345); Schulhoff et al. 2024 (arXiv 2406.06608); Zhao et al. 2023 (arXiv 2303.18223); Flanders and Jannidis 2015 (Companion chapter, DOI 10.1002/9781118680605.ch16); Mayr and Thalheim 2021; Geiger 2024 (v2 DOI 10.17175/wp_2023_003_v2; the vault register carries the work as geiger-2023, version reconciliation pending); Miksa et al. 2019; IEEE 1012-2016; Roberts 2007; Windhager et al. 2019; Pierazzo 2015; van Es, Wieringa, and Schäfer 2018; Owens 2011; Posner 2015. These are established or low-risk records; they are checked at the acceptance of the chapter that cites them.

## Method note

A preprint is never described as peer reviewed in the paper (rule in `paper-knowledge.md` §15). The two terms the paper leans on emergent literature for, Agentic Engineering and AI harness, rest on three preprints (Cao, Alenezi, Zhong/Zhu) and should be framed as first uses, with the concepts grounded primarily in the documented practice.
