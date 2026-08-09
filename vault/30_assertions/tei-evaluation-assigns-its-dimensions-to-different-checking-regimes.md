---
type: assertion
topics:
- '[[ArtefactVerification]]'
status: grounded
checked:
  validation: 2026-08-09
grounding:
- '[[20_distillates/publications/strutz-2026-tei-evaluation-framework#^s4]]'
- '[[20_distillates/publications/strutz-2026-tei-evaluation-framework#^s5]]'
- '[[20_distillates/publications/strutz-2026-tei-evaluation-framework#^s6]]'
- '[[20_distillates/publications/strutz-2026-tei-evaluation-framework#^s8]]'
created: 2026-07-29
updated: 2026-08-09
---

# A published framework for evaluating LLM-generated TEI assigns its dimensions to different checking regimes, from automated reference-free validation through ground-truth comparison to expert-centred review.

## Statement

The framework separates the properties of a generated TEI document into ordered dimensions and gives each its own regime instead of one uniform metric. Well-formedness, source fidelity and schema conformance run as fully automated reference-free validation; structural fidelity and semantic recognition run as computational metrics against a ground truth; two higher dimensions are assigned to expert-centred review. The framework states its purpose in the same terms, to identify what automated validation can assess reliably at scale and what requires targeted human-in-the-loop review. This is the layering of Table 1 of the paper (the checking layering) reached independently, from a different research group and a different task family, which is what makes it evidence rather than restatement.

## Support

- [[20_distillates/publications/strutz-2026-tei-evaluation-framework#^s4]] — the five dimensions the framework names.
- [[20_distillates/publications/strutz-2026-tei-evaluation-framework#^s5]] — the stated aim, separating scalable automated validation from targeted human review.
- [[20_distillates/publications/strutz-2026-tei-evaluation-framework#^s6]] — the regime assigned to each band of dimensions.
- [[20_distillates/publications/strutz-2026-tei-evaluation-framework#^s8]] — well-formedness as the foundational, blocking check.

## Related

- [[30_assertions/glam-practice-layers-llm-extraction-with-deterministic-checks-and-expert-review]]
- [[30_assertions/tei-permits-several-valid-encodings-of-one-phenomenon]]
- [[30_assertions/llm-judgement-approximates-human-preference-and-carries-known-biases]]
