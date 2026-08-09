---
type: distillate
source-type: publication
reference: strutz-2026
topics:
- '[[ArtefactVerification]]'
status: grounded
checked:
  quote: 2026-07-29
created: 2026-07-29
updated: 2026-07-29
---

# Distillate: A Multi-Dimensional Evaluation Framework for Assessing LLM Performance in TEI Encoding (Strutz 2026)

A discussion paper in the Journal of Open Humanities Data that builds a stratified framework for judging LLM-generated TEI across five dimensions and assigns each dimension to a checking regime, from fully automated reference-free validation through ground-truth comparison to expert-centred review; it is the paper's external carrier for the layering of Table 2 and for the statement that a task-specific benchmark now exists in digital editing.

## Core statements

- The field has no systematic frameworks for assessing the quality of LLM-generated encoding at scale, which is the gap the paper sets out to address. ^s1
  > "Yet the field lacks systematic evaluation frameworks for assessing LLM-generated encoding quality at scale." (strutz-2026, abstract)
- Conventional NLP evaluation metrics are held to be insufficient for a holistic assessment of TEI encoding, because TEI carries hierarchical XML structures and an interpretive flexibility that admits more than one valid encoding of the same phenomenon. ^s2
  > "While traditional Natural Language Processing (NLP) evaluation metrics are valuable for specific aspects, they appear insufficient for a holistic assessment of TEI encoding. This is because TEI encoding presents unique evaluation challenges, including hierarchical XML structures and interpretive flexibility, which allow for multiple valid encoding approaches." (strutz-2026, abstract)
- LLM-generated encodings are reported to alter content, to bias systematically towards modern language conventions, and to apply encoding decisions inconsistently. ^s3
  > "Additionally, LLM-generated encodings exhibit concerning behaviours, including content alteration, systematic biases towards modern language conventions and inconsistent application of encoding decisions." (strutz-2026, abstract)
- The methodology is stratified over five dimensions, syntactic validity, source fidelity, schema compliance, structural fidelity and semantic recognition. ^s4
  > "This research develops a stratified evaluation methodology assessing LLM-generated TEI documents across multiple dimensions: syntactic validity, source fidelity, schema compliance, structural fidelity, and semantic recognition." (strutz-2026, abstract)
- The framework's stated aim is to separate what automated validation can assess reliably at scale from what requires targeted human-in-the-loop review. ^s5
  > "The framework aims to identify which aspects can be reliably assessed through automated validation for scalable evaluation and which dimensions require targeted human-in-the-loop review." (strutz-2026, abstract)
- The dimensions are matched to different checking regimes rather than to one uniform metric, with the lowest three running as fully automated reference-free validation, the next two as computational metrics against a ground truth, two further ones as expert-centred review and the last as automated statistical analysis. ^s6
  > "Rather than applying uniform metrics across all dimensions, the framework matches evaluation approaches to task characteristics: Dimensions 0–2 employ fully automated, reference-free validation. Dimensions 3–4 use computational metrics with ground truth comparison. Dimensions 5–6 require expert-centred review, while Dimension 7 relies on automated statistical analysis." (strutz-2026, § Framework)
- The TEI Guidelines are said to permit several valid encoding approaches for one and the same textual phenomenon, which the paper reads as deliberate accommodation of interpretive multiplicity. ^s7
  > "TEI deliberately accommodates interpretive multiplicity: the Guidelines explicitly permit multiple valid encoding approaches for identical textual phenomena, reflecting diverse scholarly perspectives and project-specific methodologies." (strutz-2026, § Framework)
- The lowest dimension checks XML well-formedness, that is tag structure, nesting and character encoding, and it is foundational because its errors block every subsequent step. ^s8
  > "Dimension 0 establishes the technical foundation for all following evaluation dimensions by assessing XML well-formedness – proper tag structure, nesting, and character encoding – as errors block subsequent processing." (strutz-2026, § Framework)
- The framework is published as open-source software under an MIT licence with documentation and example datasets. ^s9
  > "The complete framework, including documentation and example datasets, is available as open-source software under an MIT licence at https://github.com/strubrina/tei-evaluation, supporting community adoption, refinement, and extension to diverse digital edition projects." (strutz-2026, § Framework)

## Terms

- **stratified evaluation**: an evaluation methodology that separates the properties of a generated TEI document into ordered dimensions and assigns a different checking regime to each, instead of collapsing them into one score. [[20_distillates/publications/strutz-2026-tei-evaluation-framework#^s6]]
- **interpretive multiplicity**: the property of the TEI Guidelines that several encodings of one textual phenomenon can be equally valid, which is why divergence from a reference encoding is not by itself an error. [[20_distillates/publications/strutz-2026-tei-evaluation-framework#^s7]]

## Open questions

- Distilled from the abstract and the framework section of the open-access article. The full operationalisation of the metrics per dimension, the sampling rule for the expert-centred dimensions, and the review procedure behind the manually encoded references were not read and carry no anchor here.
- The article is a discussion paper. Its claim to have closed the benchmark gap therefore rests on the framework and the accompanying dataset rather than on a completed community benchmark exercise, which is how the paper's verification architecture uses it.
- The dimension count is stated two ways in the source, five dimensions named in the abstract and a taxonomy of eight running from 0 to 7 in the framework section. The paper cites the five, and ^s6 carries the wider taxonomy for the regime assignment.
- ^s6 is the framework's design, and the implementation state of the upper dimensions is a separate question the source does not settle here. The operator's own project notes record the dimensions above the fifth as not implemented in the released software. That note is unchecked against the repository and carries no anchor; the paper's verification architecture therefore speaks of what the framework assigns and not of what the software currently computes.

## Related

- [[20_distillates/publications/strutz-2025-hammer-purgstall-tei-dataset]]
- [[30_assertions/tei-evaluation-assigns-its-dimensions-to-different-checking-regimes]]
- [[30_assertions/llm-generated-tei-alters-content-and-modernises-language]]
- [[30_assertions/tei-permits-several-valid-encodings-of-one-phenomenon]]
- [[30_assertions/an-open-tei-encoding-benchmark-exists-for-llm-generated-encodings]]
