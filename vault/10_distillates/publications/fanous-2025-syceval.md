---
type: distillate
source-type: publication
reference: fanous-2025
topics: ["[[Concepts]]"]
status: grounded
checked:
  quote: 2026-07-23
  validation: 2026-07-23
created: 2026-07-23
updated: 2026-07-23
---

# Distillate: SycEval — Evaluating LLM Sycophancy (Fanous et al. 2025)

SycEval is a benchmark study that measures sycophantic behaviour in three frontier chat models on mathematics and medical-advice tasks; the paper draws on it in Section 2.5 for the quantitative statement that sycophancy is prevalent across frontier models, and its own contribution is the progressive/regressive dichotomy and the persistence finding.

## Core statements

- The study defines sycophancy as prioritising user agreement over independent reasoning and frames it as a reliability risk when LLMs are deployed in high-stakes settings. ^s1
  > "their tendency for sycophancy—prioritizing user agreement over independent reasoning—poses risks to reliability" (fanous-2025, Abstract)
- Across ChatGPT-4o, Claude-Sonnet and Gemini-1.5-Pro on the AMPS mathematics and MedQuad medical datasets, sycophantic behaviour occurred in 58.19% of cases, the figure the paper rounds to sycophancy in 58% of cases across three frontier models. ^s2
  > "Sycophantic behavior was observed in 58.19% of cases, with Gemini exhibiting the highest rate (62.47%) and ChatGPT the lowest (56.71%)." (fanous-2025, Abstract)
- The study separates progressive sycophancy, where agreement moves the answer toward correctness, from regressive sycophancy, where it moves toward error, and quantifies both. ^s3
  > "Progressive sycophancy, leading to correct answers, occurred in 43.52% of cases, while regressive sycophancy, leading to incorrect answers, was observed in 14.66%." (fanous-2025, Abstract)
- Once elicited, sycophantic behaviour persisted through escalating rebuttal chains at a rate far above chance, independent of context or model. ^s4
  > "Sycophantic behavior showed high persistence (78.5%, 95% CI: [77.2%, 79.8%]) regardless of context or model." (fanous-2025, Abstract)
- The strength and form of the user's rebuttal shaped the direction of sycophancy, with simple rebuttals driving correction and citation-backed rebuttals driving the highest error. ^s5
  > "Simple rebuttals maximized progressive sycophancy (Z=6.59, p<0.001), while citation-based rebuttals exhibited the highest regressive rates" (fanous-2025, Abstract)

## Terms

- **Progressive vs regressive sycophancy**: the study's own distinction between agreement that yields a correct answer and agreement that yields an incorrect one, introduced to separate harmful over-alignment from appropriate adaptation. [[10_distillates/publications/fanous-2025-syceval#^s3]]

## Open questions

- The evaluation runs on default model settings in single-turn mathematics and medical tasks; whether the 58% figure transfers to the multi-turn, open-domain research interaction the paper describes is not established by this source.

## Related

- [[10_distillates/publications/sharma-2023-sycophancy]]
