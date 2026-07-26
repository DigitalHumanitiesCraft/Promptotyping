---
title: coOCR-HTR
id: coocr-htr
paper: "5.2, Table 1"
source: Projects/Promptotyping/Case Studies/coocr-htr.md
---

# coOCR-HTR

## Context and research question

coOCR-HTR is a browser-based workbench for expert-in-the-loop transcription workflows. The question it answers is whether a particular transcription process holds at all, and the workbench exists to make that process visible and testable. The artefact is a means of addressing the epistemic asymmetry between machine transcription and human correction, and it was never meant as a finished correction tool.

## Data

The workbench processes OCR and HTR outputs and renders them beside the source images. That juxtaposition is the core of the tool, because it exposes the places where the model is uncertain or invents a word instead of marking a gap. Validation is hybrid, deterministic rules decide what a rule can decide, and an LLM-as-a-judge step handles the rest.

## Approach

The prototype was built in a single working day with Promptotyping and consolidated afterwards. Development ran through Claude Code, and validation drew on vision-language models. Over the following two months the one-day prototype grew into a production-grade codebase with a regression suite, several LLM providers, hybrid validation, full internationalisation and progressive web app support, without npm production dependencies. A community fork from the Austrian Academy of Sciences was integrated, the only external contribution in the record.

## Methodological contribution

The case shows that the step from prototype to production-grade research software can be measured in weeks when a single domain-competent person works with methodological literacy. Its second contribution is the operationalisation of the expert in the loop. The workbench moves human checking to exactly those places where the model is unreliable, which turns the epistemic asymmetry between machine transcription and human correction into the design principle of the interface.

## Limits

The workbench shows where the model was uncertain. Establishing that a transcription is correct stays with the expert, and what the interface adds is a defined place for that judgement.

The LLM-as-a-judge step in the hybrid validation ranks below human verification for the reasons Section 6.2 of the paper gives, since the documented biases of that arrangement apply here. Everything the deterministic rules cannot reach inherits that caveat.

The case rests on a single expert working in his own domain, so what it shows about the speed of the step to production software is bound to that condition. The record holds no comparable case where the builder lacked the domain competence.
