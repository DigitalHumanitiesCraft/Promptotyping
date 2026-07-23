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
updated: "2026-07-23"
related: [index, schema, operations]
---

# Specification

Purpose, parameters and settled decisions of this vault instance. The invariant architecture (layer model, anchor mechanics, check contracts, status progression) lives in [[knowledge/schema]] and [[knowledge/operations]]; this document holds what this project decided.

## Purpose

This vault grounds the Promptotyping paper. The deliverable is the paper maintained canonically in this repository under `_content/paper/`; this vault carries the provenance layer beneath it, anchoring the paper's load-bearing claims to the source material that supports them, from the Section 4 project figures through the genealogy claims to the novelty claims of the discussion. The evidence obligation follows the paper's own verification practice, adversarial checking against the public project repositories, so that the paper workstream's verification milestones (figures check M3, source dating M4, novelty research M8) read and write this vault instead of leaving their findings in session-local documents.

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

## Settled decisions

<!-- One line per decision with date; the reasoning behind each lives in the journal. -->

- 2026-07-19: Vault instantiated from the Grounded Vault template on operator instruction; the parking of a paper-work instantiation recorded in the Promptotyping repo's plan is lifted.
- 2026-07-19: The deliverable stays canonical in `_content/paper/` at the root of this repository; `30_deliverable/` holds no copy. The chapter register in [[knowledge/state]] maps sections to claims. Deviation from the template default, to avoid drift between two copies of the paper.
- 2026-07-19: Topic backbone set to Genealogy, Method, Evidence, Concepts, Limitations.
- 2026-07-23: Scope extended by operator decision to full bibliography traceability. Every work the paper cites in its References is registered in [[knowledge/register-paper-sources]], and every accessible one is ingested as a publication source, distilled towards the statements the paper takes from it, and grounded through claims. Footnote-only resources (tools, videos, standards, repositories) stay outside intake, since the `source-type` vocabulary does not cover them and the paper uses them as tool evidence rather than as statement support.
- 2026-07-23: Topic backbone extended by Frame (the Section 2 discourses) and ArtefactVerification (Sections 4 and 6.2), to give the bibliography claims reachable topic maps.
