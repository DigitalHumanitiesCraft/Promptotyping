---
type: distillate
source-type: publication
reference: strutz-2025
topics:
- '[[ArtefactVerification]]'
status: grounded
checked:
  quote: 2026-07-29
created: 2026-07-29
updated: 2026-07-29
---

# Distillate: Hammer-Purgstall Correspondence TEI Evaluation Dataset (Strutz 2025)

An openly licensed Zenodo dataset that pairs plain-text letter transcriptions with manually encoded TEI reference documents and the encodings four models produced from the same input, together with prompt templates and evaluation results; it is the empirical body of the evaluation framework and the concrete object the paper's verification architecture points to when it says that a task-specific benchmark now exists.

## Core statements

- The dataset serves LLM-supported TEI encoding, output evaluation and comparison, over a representative sample of one hundred letters from a nineteenth-century correspondence. ^s1
  > "This dataset supports LLM-supported TEI encoding tasks, output evaluation and comparison. It comprises a representative sample of 100 letters from the correspondence of Joseph von Hammer-Purgstall (1774-1856), an Austrian orientalist, historian, and diplomat." (strutz-2025, description)
- The corpus is multilingual across six decades, predominantly German alongside English, French and Italian, with code-switched segments in Latin, Greek and Arabic. ^s2
  > "The correspondence spans six decades (1790s-1850s) and exhibits significant linguistic diversity, containing letters primarily in German alongside English, French, and Italian, with instances of code-switching (Latin, Greek, and Arabic text segments)." (strutz-2025, description)
- The reference component is a manually encoded TEI P5 annotation of every transcription, following the TEI Guidelines for correspondence. ^s3
  > "Reference component: 100 manually encoded TEI XML (P5) reference annotations following TEI Guidelines for correspondence" (strutz-2025, description)
- The output component holds the encodings of four models over the same transcriptions, four hundred in total, which is what makes cross-model comparison on identical input possible. ^s4
  > "Output component: LLM-generated TEI XML encodings from four models (GPT-5-mini, Claude Sonnet 4.5, Qwen3-14B-Q6, OLMo2-32B-instruct-Q4), totaling 400 encodings" (strutz-2025, description)
- The sample was drawn by systematic stratified sampling over language distribution, writer diversity and letter length. ^s5
  > "The sample was selected through systematic stratified sampling based on language distribution, writer diversity, and letter length variation." (strutz-2025, description)
- The prompt scenarios ship with the dataset, with encoding instructions and few-shot samples, so the generation condition is inspectable and not only its result. ^s6
  > "hpe-prompt-templates.zip: Five prompt scenarios for LLM processing with encoding instructions and few-shot samples" (strutz-2025, description)

## Terms

- **reference encoding**: a manually produced TEI document for a transcription, used as the ground truth against which a generated encoding is measured. [[20_distillates/publications/strutz-2025-hammer-purgstall-tei-dataset#^s3]]

## Open questions

- The record states that the references were manually encoded and does not state how they were reviewed or whether agreement between encoders was measured. A reference encoding carries editorial decisions of its own, so the ground truth is itself an interpretation, which the record leaves unaddressed.
- Distilled from the Zenodo record description. The files themselves were not downloaded, so nothing here is anchored in the data.

## Related

- [[20_distillates/publications/strutz-2026-tei-evaluation-framework]]
- [[30_assertions/an-open-tei-encoding-benchmark-exists-for-llm-generated-encodings]]
