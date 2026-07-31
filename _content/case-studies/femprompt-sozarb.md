---
title: FemPrompt SozArb
id: femprompt-sozarb
paper: none
source: Projects/Promptotyping/Case Studies/femprompt-sozarb.md
---

# FemPrompt SozArb

## Context and research question

FemPrompt SozArb is a systematic literature review on AI literacy and LLM bias in social work, carried out as a staged pipeline whose own record is published alongside its result. The question the project set itself is about the process. It asks how the transformation a body of literature undergoes in an LLM-supported review can be made inspectable at every step. It is the record's one case outside the digital humanities and its one artefact for the audit function in the [interface typology](#artefakt) this site carries.

## Data

A corpus of academic papers at the intersection of AI, social work and gender studies, assembled through several deep-research systems and augmented by hand by the domain experts. The PDFs were converted to Markdown and distilled into knowledge documents carrying research question, method, key finding, main arguments and a category classification with quoted evidence per category.

A second data layer arose inside the project. Human reviewers and an LLM rated the same papers independently against one binary schema of ten categories, under an inclusion rule requiring at least one affirmed category on the technical side and at least one on the social side. The disagreements between the two ratings became a documented set of their own.

## Approach

The pipeline runs in five stages. Identification through several deep-research systems with manual expert augmentation. Verification of the PDF metadata. Structured knowledge extraction in three steps, an LLM pass that extracts and classifies, a deterministic pass that formats the result as Markdown with YAML frontmatter, and a second LLM pass that verifies the generated document against the original text and returns a confidence score. Dual assessment, in which the human reviewers worked in a spreadsheet while the LLM applied the identical schema without sight of their verdicts. Deterministic synthesis, in which a Python script generates the knowledge vault, with LLM involvement confined to concept extraction and to the classification of divergence cases.

Verification points sit after every AI-assisted stage and are either human or rule-based. The analysis phase itself runs deterministically. Sycophancy is addressed inside the assessment prompt through negative constraints that restrict when a category may be affirmed and cap how many categories one paper may carry, with the prompts versioned so that a change in the verdict can be traced to a change in the instruction.

## Methodological contribution

The divergence between human and machine judgement is treated as a primary research output. The LLM included papers at a markedly higher rate than the human reviewers, the disagreement cases were classified by pattern, and each became a document in the vault, which turns an error term into readable evidence about where machine assessment of scholarly relevance departs from expert assessment.

The vault itself is generated from the pipeline data by a named script, an instance of the generated document of Section 2.1 of the paper. Its stated obligation runs on three levels, what is the case, how it came about with the prompts and configurations that produced it, and what the process cannot deliver. The published limitations of each pipeline stage therefore sit inside the artefact, one note per stage.

The evidence companion renders three views over that infrastructure, the paper corpus as a searchable and filterable set, the concept network extracted from the knowledge documents, and the comparison of human against LLM assessment with its confusion matrix and agreement statistic. That is the audit function in its clearest form, since the path that produced the result is rendered beside the result.

## Limits

Section 4.1 of the paper keeps the case out of the documented cases. Its corpus of academic papers lies far from the modelled research data on which the argument about question-specific interfaces turns, so what the artefact demonstrates about the audit function transfers to research data only by analogy.

The human rating covers a part of the corpus while the LLM rated all of it, so the comparison rests on the overlap alone. The LLM judged from title and abstract without access to the full texts, which bounds what its verdicts can be held to.

The agreement statistic is reported by the project as a prevalence-bias artefact rather than as its primary measure, a caveat the project raises against its own headline figure. Sycophancy mitigation through negative constraints reduces the effect without eliminating it.

The classification of the divergence cases is an LLM interpretation of a divergence between an LLM and human reviewers, so the meta level inherits the property it was built to describe. Concept extraction is probabilistic and depends on the model, and the co-occurrence it reports is measured per document rather than per sentence.

Papers were lost at the conversion step, and extraction quality depends on the converted Markdown, in which tables and figures are absent. The verification pass compares the generated document against the original text, which catches distortion of the source and leaves the correctness of the source untouched.
