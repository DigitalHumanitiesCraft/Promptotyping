---
type: distillate
source-type: publication
reference: pollin-2025a
topics: ["[[Genealogy]]", "[[Limitations]]"]
status: grounded
checked:
  quote: 2026-07-23
  validation: 2026-07-23
created: 2026-07-23
updated: 2026-07-23
---

# Distillate: When it was 2024. Generative AI in digital scholarly editions (Pollin et al. 2025a)

The field survey records, in September 2024, LLM code generation for edition publishing systems and the teiCrafter / teiModeler / teiVerifier line of interacting agents, an early public trace of the working mode the paper consolidates; it also names the open problems the paper answers on other ground, that task-specific benchmarks are lacking and that a reproducibility standard from within the field calls for free, locally runnable models.

## Core statements

- The article records that code generation to set up technical systems for publishing was demonstrated by Christopher Pollin in September 2024. ^s1
  > "The use of code generation to set up technical systems for publishing has been demonstrated by Christopher Pollin in September 2024." (pollin-2025a, § 31)
- It describes a proposal of interacting agents that add TEI annotations to unstructured text (teiCrafter), conceptualise the target text model (teiModeler), and verify the resulting TEI encoding (teiVerifier). ^s2
  > "adding TEI annotations to unstructured text (teiCrafter), conceptualizing the target structure – the text model (teiModeler) – and verifying the resulting TEI encoding (teiVerifier)." (pollin-2025a, § 28)
- It names as an open problem that benchmarks to rigorously evaluate the quality and accuracy of AI-generated results for the field's specific tasks are still lacking. ^s3
  > "benchmarks to rigorously evaluate the quality and accuracy of AI-generated results for our specific tasks are still lacking." (pollin-2025a, § 35)
- Citing Reiter, it holds that evaluating non-local, API-based models is product testing rather than model evaluation, so that free and locally runnable AI systems, though currently resource-costly, are essential for comprehensible, reproducible, and open research. ^s4
  > "While the availability of the computational resources and skills necessary for employing free and local AI systems currently poses a problem, their use is essential for research that is comprehensible, reproducible, and open." (pollin-2025a, § 38)
- The Reiter point it cites is that including non-local, API-based models in an evaluation amounts to product testing, not model evaluation. ^s5
  > "when you’re evaluating #LLMs, and you’re including non-local, API-based models, you’re not doing model evaluation, but product testing." (pollin-2025a, § 38)

## Terms

- **teiCrafter / teiModeler / teiVerifier**: a proposed line of interacting LLM agents for TEI annotation, target-structure modelling, and encoding verification. [[10_distillates/publications/pollin-2025a-when-it-was-2024#^s2]]

## Open questions

- The article stops at experiment and proposal and explicitly leaves benchmarking open; whether the promptotyping method's answer, assigning the check to the human and the deterministic layer, satisfies the reproducibility standard it voices is the paper's own argument, not the source's.

## Related

- [[20_claims/field-literature-records-llm-code-generation-and-tei-agent-line-by-2024]]
- [[20_claims/edition-ai-benchmarks-lacking-and-reproducibility-favours-local-models]]
