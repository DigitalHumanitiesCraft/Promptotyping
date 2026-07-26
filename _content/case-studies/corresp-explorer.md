---
title: CorrespExplorer
id: corresp-explorer
paper: "5.2, Table 1"
---

# CorrespExplorer

## Context and research question

CorrespExplorer is a research tool for the interactive visualisation of correspondence metadata in CMIF format. The question is how FAIR-conformant letter data can be carried onto scholar-centred interfaces. The project began as a fork of an earlier letter project, HerData, and it shows how structured research data and scholar-centred design requirements pass into functional prototypes through context engineering.

## Data

The basis is the CMIF-XML structure of correspSearch, which is TEI-based. Three modes open the data, upload of local CMIF files, direct queries against the correspSearch API, and test data from the Hugo Schuchardt archive. The FAIR conformance of the CMIF standard is the epistemic precondition of the case. The model understands the data structure without laborious explanation because that structure is standardised, semantically documented and machine-readable.

## Approach

Development took about two afternoons through Claude Code. This is the first complete document set in the record, with user stories and their acceptance criteria, a design document, a journal kept by phase, and a browser-based test suite. Instead of one monolithic dashboard the project chose a set of complementary views, each answering a different question of the data. Tests served as context feedback, generate, run, and return the errors into the context window.

## Methodological contribution

The case yields three observations. FAIR data act as an enabler, since output quality tracks the FAIR conformance of the input. Context rot appears as a practical problem, because the process documentation records a degradation well inside the advertised context window, observed qualitatively rather than measured, which forced the distillation of the documentation. Sycophancy appears in practice, since the model agreed with suboptimal decisions as soon as they were phrased as a proposal, which made an explicit demand for criticism necessary in the prompts.

## Limits

The result rests on a standard. What the case shows about the ease of the translation holds for data that is standardised, documented and machine-readable, and it says nothing about the idiosyncratic spreadsheet or the undocumented database that much research data actually looks like.

The context rot observation is qualitative. The documentation records that output quality fell inside the advertised window, and it carries no measurement, no token count and no controlled comparison. It is a report of what the builder noticed, and it grounds the practice of distillation rather than a claim about the model.

The sycophancy observation has the same status. It was countered by prompting, and whether the countermeasure worked was judged by the same person who wrote the prompt.
