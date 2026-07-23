---
type: claim
topics: ["[[Frame]]"]
status: grounded
checked:
  validation: 2026-07-23
grounding:
  - "[[10_distillates/publications/hong-2025-context-rot#^s2]]"
  - "[[10_distillates/publications/hong-2025-context-rot#^s3]]"
  - "[[10_distillates/publications/hong-2025-context-rot#^s4]]"
created: 2026-07-23
updated: 2026-07-23
---

# LLM performance degrades non-uniformly as input length grows, even on simple tasks, with input length isolated as the cause.

## Statement

An evaluation of 18 models, including GPT-4.1, Claude 4, Gemini 2.5 and Qwen3, shows that models do not use their context uniformly; performance grows increasingly unreliable as input length increases, even under minimal task conditions, and the effect is attributable to input length because task complexity was held constant. This is the empirical rationale for the paper's Distillation phase in Sections 2.3 and 3.3, whose principle is maximum information with minimum tokens.

## Support

- [[10_distillates/publications/hong-2025-context-rot#^s2]] — 18 models; performance grows increasingly unreliable as input length grows.
- [[10_distillates/publications/hong-2025-context-rot#^s3]] — degradation appears even under minimal task conditions, non-uniformly.
- [[10_distillates/publications/hong-2025-context-rot#^s4]] — task complexity held constant, isolating input length as the cause.

## Related

- [[20_claims/context-engineering-systematic-inference-context]]
- [[20_claims/MOC-Concepts]]
