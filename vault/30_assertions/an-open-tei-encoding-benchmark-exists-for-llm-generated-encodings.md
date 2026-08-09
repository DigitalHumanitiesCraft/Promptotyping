---
type: assertion
topics:
- '[[ArtefactVerification]]'
status: grounded
checked:
  validation: 2026-08-09
grounding:
- '[[20_distillates/publications/strutz-2025-hammer-purgstall-tei-dataset#^s1]]'
- '[[20_distillates/publications/strutz-2025-hammer-purgstall-tei-dataset#^s3]]'
- '[[20_distillates/publications/strutz-2025-hammer-purgstall-tei-dataset#^s4]]'
- '[[20_distillates/publications/strutz-2025-hammer-purgstall-tei-dataset#^s6]]'
- '[[20_distillates/publications/strutz-2026-tei-evaluation-framework#^s1]]'
- '[[20_distillates/publications/strutz-2026-tei-evaluation-framework#^s9]]'
created: 2026-07-29
updated: 2026-08-09
---

# An open, task-specific benchmark for LLM-generated TEI encoding now exists, holding transcriptions, manually encoded reference documents, the encodings of four models, and the prompt scenarios that produced them.

## Statement

The gap the field named, that benchmarks for evaluating AI-generated results in digital-edition tasks are lacking, has begun to close for one task family. An openly licensed dataset pairs plain-text letter transcriptions with manually encoded TEI reference documents and with the encodings four models produced from the same input under five documented prompt scenarios, and the evaluation code is published under an MIT licence. The framework paper states the gap in its own words in the same year. The benchmark measures the dimensions a rule can decide and hands the interpretative ones to expert review, which leaves the division of checking work intact. The four-chapter text of 2026-07-31 carries no missing-benchmark argument, so this assertion stands as vault-internal checked material.

## Support

- [[20_distillates/publications/strutz-2025-hammer-purgstall-tei-dataset#^s1]] — purpose of the dataset, encoding, evaluation and comparison over a sampled corpus.
- [[20_distillates/publications/strutz-2025-hammer-purgstall-tei-dataset#^s3]] — the manually encoded TEI reference component.
- [[20_distillates/publications/strutz-2025-hammer-purgstall-tei-dataset#^s4]] — the four-model output component on identical input.
- [[20_distillates/publications/strutz-2025-hammer-purgstall-tei-dataset#^s6]] — the shipped prompt scenarios that make the generation condition inspectable.
- [[20_distillates/publications/strutz-2026-tei-evaluation-framework#^s1]] — the framework paper naming the same gap.
- [[20_distillates/publications/strutz-2026-tei-evaluation-framework#^s9]] — the evaluation framework published as open-source software.

## Related

- [[30_assertions/tei-evaluation-assigns-its-dimensions-to-different-checking-regimes]]
- [[30_assertions/field-literature-records-llm-code-generation-and-tei-agent-line-by-2024]]
