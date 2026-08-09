---
type: claim
topics: ["[[ArtefactVerification]]"]
status: grounded
checked: {}
grounding:
  - "[[10_distillates/publications/zheng-2023-llm-as-a-judge#^s1]]"
  - "[[10_distillates/publications/zheng-2023-llm-as-a-judge#^s2]]"
  - "[[10_distillates/publications/zheng-2023-llm-as-a-judge#^s3]]"
  - "[[10_distillates/publications/zheng-2023-llm-as-a-judge#^s4]]"
created: 2026-07-26
updated: 2026-07-26
---

# A strong judging model matches human preference at the rate humans match each other, and carries position, verbosity and self-enhancement biases together with limited reasoning.

## Statement

Zheng et al. measure the agreement between a strong language model acting as judge and human preference on open-ended questions, and report over eighty per cent, the same level at which humans agree with each other. They name the pattern's limitations in the same breath, position bias, verbosity bias, self-enhancement bias and limited reasoning ability, and present the arrangement as a scalable approximation of human preference. The measurement marks the zone in which a model may legitimately be asked to judge, questions no rule decides and whose answer is a preference; it does not extend to a judgement a rule already decides, and it does not reach a scholarly judgement against sources.

## Support

- [[10_distillates/publications/zheng-2023-llm-as-a-judge#^s1]] — the setting, open-ended questions that existing benchmarks fail to measure.
- [[10_distillates/publications/zheng-2023-llm-as-a-judge#^s2]] — the four named limitations.
- [[10_distillates/publications/zheng-2023-llm-as-a-judge#^s3]] — the measured agreement rate and its human baseline.
- [[10_distillates/publications/zheng-2023-llm-as-a-judge#^s4]] — the framing as approximation rather than replacement.

## Related

- [[20_claims/aqusa-checks-the-criteria-a-rule-can-decide]]
- [[20_claims/glam-practice-layers-llm-extraction-with-deterministic-checks-and-expert-review]]
- [[20_claims/MOC-ArtefactVerification]]
