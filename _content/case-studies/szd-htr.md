---
title: SZD-HTR OCR Pipeline
id: szd-htr
paper: "4.3, Table 3"
source: Projects/Promptotyping/Case Studies/szd-htr.md
---

# SZD-HTR OCR Pipeline

## Context and research question

The pipeline applies handwritten text recognition to the digitised Stefan Zweig estate at the Literaturarchiv Salzburg, some twenty thousand facsimile scans of manuscripts, typescripts and correspondence. The scholarly purpose fixed in Preparation was to make the estate readable and searchable in diplomatic transcription, without normalisation. Section 2.3 of the paper develops the project as its worked example, and the modelling judgement and the verification judgement lay with the same person there.

## Data

Four collections of the estate, correspondence, life documents, works and essay files, in German, English and French, with handwritten, typewritten and mixed materials. TEI metadata from the Stefan Zweig Digital platform supplies each object's language, type and title as machine-readable context. That context is what drives the automatic assignment of a prompt variant per object type, so the document groups the pipeline distinguishes are derived from the catalogue instead of being declared by hand.

## Approach

Exploration ran vision-language-model transcription experiments on the hastily written Kurrent hands of the estate. What governed the design was the question of where the check on the output belongs, and the record answers it from the second pipeline project, whose agent-based screening stage was abolished after no human had granted the approval statuses it recorded.

Distillation turned that into documents. A verification concept specifies the ground-truth strategy, automatic quality signals that flag objects for review from outside the transcription step, cross-model consensus with a judging model, and agent-based vision checks. An annotation protocol fixes the transcription conventions, records the reason for each, and sets inter-annotator agreement as the standard against which its own precision is to be measured. Uncertain readings, illegible passages, deletions and insertions are mandated markup, so the design holds uncertainty visible.

Implementation derived the pipeline and the viewer through the agent, from a layered prompt system in which a global system prompt, a group prompt per document type, an optional per-object override and the dynamic TEI context compose the instruction for a given object. The viewer renders every transcription beside its facsimile.

## Methodological contribution

Verification runs as a three-status scheme in which human-checked, meaning every page read against the facsimile, ranks above agent-checked, meaning a vision-language model compared image and transcript, which ranks above unchecked. That is the authority ordering of Section 2.3 of the paper carried into project practice. Where a human corrects, the machine transcription is preserved in an edit history, so the two layers stay separable after the fact.

The model's own confidence report proved worthless early, since it announced high confidence for clean typescripts and for multi-page Kurrent alike, and the automatic quality signals were built to replace it with a judgement formed outside the transcription step. Their thresholds were recalibrated across several rounds, because the first version flagged so large a share of the corpus that it was useless for triage.

The loop back into the documents is on record. The review scheme itself was consolidated from four tiers to three by an operator decision documented in the knowledge base, and the journal carries the iterations and the models used.

## Limits

Vision-language models invent words instead of marking a gap, and across a large body of transcribed characters the early runs produced almost no uncertainty markers although the prompts demanded them for ambiguous Kurrent. Cautionary guidance is ignored where structural guidance is followed, which is why the quality signals had to be moved outside the model.

Agent verification is a cross-model check, one model transcribing and a second reading the result against the image. It substitutes for human review at no point. The agent can overlook errors and delivers no exhaustive proof, and handwriting is harder for it than print, which is why agent-checked ranks below human-checked in the scheme.

The annotation protocol sets inter-annotator agreement as its measure of precision, and the record carries that standard while a measurement against it is still outstanding.

A FAIR4RS audit of the repository was run on 23 July 2026 and is deposited in the project's own knowledge base. Findability fails throughout, with no persistent identifier and no versioned releases; the machine-readable citation metadata has since been added and the identifier gap stands. The audit was a single pass on one day without a second independent reviewer, and on two of the principles its verdict is an interpretation.
