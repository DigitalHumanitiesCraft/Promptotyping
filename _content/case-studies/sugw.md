---
title: Medieval Legal Transactions
id: sugw
paper: "5.2, Table 1"
---

# Medieval Legal Transactions

## Context and research question

The project edits the prosopographic database of medieval Viennese legal transactions, the record of who transacted with whom in the city and under what terms. An edition of that corpus has to hold two things at once, a text faithful to the source and a register of persons that identifies the same individual across documents where spellings differ. The question the case answers is which of those two an agent may do.

## Data

The corpus is 3,611 TEI-XML documents, of which 3,092 sit in the subdirectories marked as done, alongside an extensive CSV dataset. The counts come from the repository's own generated validation report and from a recount of the source tree.

## Approach

The repository separates knowledge documents, sources, pipeline, edition and frontend. The pipeline is 14 transformers and 2 validators, covered by a regression suite, and the edition is rendered through Jinja2 templates into a static frontend.

What distinguishes the case is its working mode. The agent navigates the repository, reads the knowledge documents, runs validation, corrects what it finds, updates the registers and commits. The researcher asks a question of the repository and the agent answers by reading it, so the agent becomes the interface to the edition. Validation stays deterministic, a Relax NG schema decides conformance, and the LLM works on the errors the schema reports.

One boundary is held explicitly. Identifying a person across documents is excluded from LLM processing. That decision is editorial, it is where the interpretive work of a prosopographic edition actually sits, and handing it to a model would hand over the edition.

The pipeline was refactored from XSLT to Python with lxml over many sessions, and the journal carries it. The refactor also produced the case's most useful defect. Collection paths had been hardcoded, and nobody noticed until a new subcollection was added, at which point the workflow itself exposed the assumption.

## Methodological contribution

The case is the record's clearest instance of the division of labour the method claims. Everything decidable by rule runs deterministically or is delegated, and the one thing that is not decidable by rule stays with the editor by explicit exclusion. The commit history is what makes that division auditable, since every correction the agent made carries its own entry and the editorial responsibility can be traced to a specific change.

## Limits

The corpus is not schema-valid, and the project says so. The generated validation report of 16 May 2026 records that a minority of the files validate against the toolbox schema while the majority do not, with several thousand schema errors and a comparable number of referential-integrity findings. The report frames these as residual annotation issues in the source corpus, deliberately surfaced for editorial triage. Read as a defect that is the worst figure in the record. Read as a property it is the point, because the pipeline makes the state of the source visible. A pipeline that suppressed those errors would deliver a clean-looking edition over unclean data.

The repository is not public and the test deployment does not currently answer, so the figures above rest on the generated report and on the video documentation. No reader can open the corpus itself. Five of the seven knowledge documents carry no frontmatter, which puts most of the knowledge base outside the addressing mechanism the convention describes.
