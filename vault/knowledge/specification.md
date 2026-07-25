---
title: Specification
project:
  name: "Promptotyping Paper Vault"
  repository: "https://github.com/DigitalHumanitiesCraft/Promptotyping"
method:
  name: Promptotyping
  url: https://dhcraft.org/Promptotyping/
status: draft
language: en
created: "2026-07-19"
updated: "2026-07-25"
expected-warnings: [W-NO-DELIVERABLE]
related: [index, schema, operations]
---

# Specification

Purpose, parameters and settled decisions of this vault instance. The invariant architecture (layer model, anchor mechanics, check contracts, status progression) lives in [[knowledge/schema]] and [[knowledge/operations]]; this document holds what this project decided.

## Purpose

This vault grounds the Promptotyping paper. The deliverable is the paper maintained canonically in this repository as `knowledge/paper.md`, from which `_content/paper/` is derived as the publication form the site renders, regenerated only after release; this vault carries the provenance layer beneath it, anchoring the paper's load-bearing claims to the source material that supports them, from the Section 4 project figures through the genealogy claims to the novelty claims of the discussion. The evidence obligation follows the paper's own verification practice, adversarial checking against the public project repositories, so that the paper workstream's verification milestones (figures check M3, source dating M4, novelty research M8) read and write this vault instead of leaving their findings in session-local documents.

## Parameters

| Parameter | Value |
|---|---|
| Topic | The evidence base of the Promptotyping paper |
| Topic backbone | Genealogy, Method, Evidence, Concepts, Limitations, Frame, ArtefactVerification |
| Active source types | document, publication, data |
| Deliverable genre | scholarly synthesis |
| Chapter register | see [[knowledge/state]] |
| Working language of content | English |
| Verification role | Critical Expert in the Loop: the method's author (Digital Humanities Craft) |
| Validation mechanism | `tools/validate.py` |
| Machine review mechanism | Adversarial review by an LLM from a different model family than the producing agent (producer: Claude; reviewer: GPT- or Gemini-class), under the anti-anchoring protocol |

## Style sheet

English scholarly prose in the register of the paper. Figures follow the paper's three-class rule; exact numbers only where they carry an argument and are verified, tilde-rounded orders of magnitude for scale descriptors, volatile process metrics dated or stated qualitatively. Citation display is author-year against the CSL records in `references/`. Terminology follows the glossary of the Promptotyping site (https://dhcraft.org/Promptotyping/#glossar).

### Rules for every text in this vault

Sharpened on operator instruction, 2026-07-25. These four are the frequent failures and hold in English as they do in the paper.

1. No dash and no colon as a connector, for emphasis, or ahead of a summary or a run of examples. A colon stands only before a quotation, a code block, or a list whose items sit on their own lines.
2. No trailing negative apposition in the pattern "X, not Y" or "not X, but Y". State the point positively and give the excluded alternative its own sentence if it is needed at all. The licensed exception is Drucker's "capta rather than given data", because it quotes the source.
3. No triadic figures, anaphora, or rhetorical parallelism. An antithesis stands only where it carries content.
4. No sentence that reifies what preceded it and appends a verdict ("This gap is systematic", "the tension is real"), and no paragraph engineered to land on a closing line.

Beyond those: write LLM where an LLM is meant, since "model" carries the data model, the conceptual model, and Stachowiak's model concept in this project. Name real conflicts instead of smoothing them. Carry no volatile quantity into a durable document.

### Distillate statements

A statement is one assertion, anchored to one location, and it stands on its own without the quotation beside it. The quotation licenses exactly that assertion and nothing broader; where the source hedges, the statement hedges with it, and where the source is categorical, the statement does not soften it. Statements are never merged across sources, and they carry no evaluation of the source. Where a source says less than the paper takes from it, or says it differently, that goes under Open questions and is left standing there.

### Claims

A claim is one atomic assertion in the affirmative present, phrased as what is the case, while its anchors carry who says so. A claim earns its existence by being the form the deliverable needs; a restatement of a single distillate statement in other words is not a claim. Where sources conflict irreconcilably, both claims are stated positively, both marked contested, and both linked to each other.

### Registers and knowledge documents

Descriptive, one line per entry, no narration of the work that produced the entry. Decisions belong in the journal with their date, state belongs in the state register, and neither is retold in the other.

## Settled decisions

<!-- One line per decision with date; the reasoning behind each lives in the journal. -->

- 2026-07-19: Vault instantiated from the Grounded Vault template on operator instruction; the parking of a paper-work instantiation recorded in the Promptotyping repo's plan is lifted.
- 2026-07-19: The deliverable stays canonical at the root of this repository; `30_deliverable/` holds no copy. The chapter register in [[knowledge/state]] maps sections to claims. Deviation from the template default, to avoid drift between two copies of the paper.
- 2026-07-25: The footnote contract of the deliverable layer does not take effect in this instance, and what stands in its place is weaker. `_check_chapter` in `tools/validate.py` checks footnote keywords, the claim mirror and the posit count against the chapter files in `30_deliverable/`. That folder is empty because the deliverable is external, and the paper's own footnotes are ordinary literature notes rather than claim anchors, so the check reports green without having examined anything. In its place this instance runs `tools/coverage.py`, which reads `knowledge/paper.md`, proposes its empirical statements as candidates and reports which of them no claim in `20_claims/` matches. That comparison is lexical, over rare shared tokens and figures. A hit says that some claim uses similar wording; it says nothing about whether the claim supports the statement, and a miss can be a wording difference. The output is a warning that directs reading and carries no verdict. Machine checking of the provenance chain from a paper sentence to its claim therefore does not exist in this instance, and the whole weight of that step rests on the verification role.
- 2026-07-25: Two checks were added to `tools/validate.py` after an audit found the gaps they close. The inventory obligation (`E-INVENTORY`) requires every document in `00_representation/` and `10_distillates/` to be named in one of the two registers, [[knowledge/state]] or [[knowledge/register-paper-sources]]; the registers divide the work between project documents and cited publications, so either one counts as proof of record. Its trigger was a representation with its distillate that was entered in no register and stayed invisible for months. The second check reports the state of the deliverable layer, since `_check_chapter` had no subject in this instance and the validator reported green on the most expensive part of its contract without having examined anything.
- 2026-07-25: The success criterion of a validation run over this instance is zero errors and exactly one warning, `W-NO-DELIVERABLE` on `30_deliverable/`, which states that the footnote contract does not take effect here. The warning is expected and stays, because the deliverable is external by the decision of 2026-07-19 and the folder will stay empty; it keeps the gap visible instead of letting a green run suggest that the chain from a paper sentence to its claim was machine-checked. What stands in its place is `tools/coverage.py` and the verification role, under the terms of the decision below. A run that reports a second warning or any error is a finding.
- 2026-07-25: The References section of the paper and the records in `references/` stay two stocks maintained by hand, and `tools/bibliography.py` keeps them comparable instead of merging them. It renders the section from the records and reports the differences in both directions; it never writes to `knowledge/paper.md`, because the paper is the deliverable and adopting a rendered line is the operator's decision. Its rendering rules were read off the existing section, and the script's header records where the section is inconsistent and where the records fall short of what it prints.
- 2026-07-25: The canonical deliverable file is `knowledge/paper.md`. `_content/paper/` holds the section files the site renders and is the derived publication form, regenerated from the canonical text after release. Where the two diverge, `knowledge/paper.md` decides. Correction of the 2026-07-19 wording, which named the derived form as canonical.
- 2026-07-19: Topic backbone set to Genealogy, Method, Evidence, Concepts, Limitations.
- 2026-07-23: Scope extended by operator decision to full bibliography traceability. Every work the paper cites in its References is registered in [[knowledge/register-paper-sources]], and every accessible one is ingested as a publication source, distilled towards the statements the paper takes from it, and grounded through claims. Footnote-only resources (tools, videos, standards, repositories) stay outside intake, since the `source-type` vocabulary does not cover them and the paper uses them as tool evidence rather than as statement support.
- 2026-07-23: Topic backbone extended by Frame (the Section 2 discourses) and ArtefactVerification (Sections 4 and 6.2), to give the bibliography claims reachable topic maps.
