---
type: distillate
source-type: publication
reference: hong-2025
topics: ["[[Concepts]]"]
status: grounded
checked:
  quote: 2026-07-23
  validation: 2026-07-23
created: 2026-07-23
updated: 2026-07-23
---

# Distillate: Context Rot (Hong et al. 2025)

A Chroma technical report showing that LLM performance degrades non-uniformly as input length grows, even on simple tasks; the paper cites it in Section 2.3 and Section 3.3 as the empirical rationale for the Distillation phase, whose principle is maximum information with minimum tokens.

## Core statements

- The report challenges the assumption that models process context uniformly across position and length. ^s1
  > "Large Language Models (LLMs) are typically presumed to process context uniformly—that is, the model should handle the 10,000th token just as reliably as the 100th. However, in practice, this assumption does not hold." (hong-2025, §Abstract)
- Across 18 evaluated models, including GPT-4.1, Claude 4, Gemini 2.5 and Qwen3, performance grows increasingly unreliable as input length increases. ^s2
  > "we evaluate 18 LLMs, including the state-of-the-art GPT-4.1, Claude 4, Gemini 2.5, and Qwen3 models. Our results reveal that models do not use their context uniformly; instead, their performance grows increasingly unreliable as input length grows." (hong-2025, §Abstract)
- Degradation appears even under deliberately minimal task conditions, in surprising and non-uniform ways. ^s3
  > "even under these minimal conditions, model performance degrades as input length increases, often in surprising and non-uniform ways." (hong-2025, §Abstract)
- The experiments hold task complexity constant and vary only input length, isolating input length as the cause of the decline. ^s4
  > "our experiments hold task complexity constant while varying only the input length—allowing us to directly measure the effect of input length alone." (hong-2025, §Evaluating the Effect of Input Length)

## Terms

- **Context rot**: the non-uniform decline of model reliability as input length grows, distinct from increased task difficulty, which the report isolates by holding complexity fixed. [[10_distillates/publications/hong-2025-context-rot#^s2]]

## Open questions

- The report measures controlled retrieval-style tasks; the paper's inference that this mandates aggressive document compression is an application the source supports in principle but does not test on research documents.

## Related

- [[10_distillates/publications/mei-2025-context-engineering]]
