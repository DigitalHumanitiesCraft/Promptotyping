---
title: Index
project:
  name: "Promptotyping Paper Vault"
  repository: "https://github.com/DigitalHumanitiesCraft/Promptotyping"
method:
  name: Promptotyping
  url: https://dhcraft.org/Promptotyping/
status: draft
language: en
created: "2026-07-19"
updated: "2026-07-19"
related: [specification, schema, operations, state, journal]
---

# Index

Navigation and terminology of the vault. Human readers start at [[HOME]]; agents start at `CLAUDE.md`, which routes onto these documents.

## Reading paths

- **Understand the project**: [[knowledge/specification]] for purpose and parameters, then [[knowledge/state]] for where work stands.
- **Produce or check content**: [[knowledge/schema]] for what a well-formed artifact is, [[knowledge/operations]] for the chain that produces it.
- **Understand a past decision**: [[knowledge/journal]], append-only, newest last.

## The six knowledge documents

| Document | Holds | Changes |
|---|---|---|
| [[knowledge/index]] | navigation, terminology | rarely |
| [[knowledge/specification]] | purpose, parameters, settled decisions | on decisions |
| [[knowledge/schema]] | layer model, document types, anchor mechanics, audit trail | rarely, by decision |
| [[knowledge/operations]] | the chains: acquire, ingest, distill, claims, chapters, query, check | rarely, by decision |
| [[knowledge/state]] | source inventory, chapter register, everything volatile | constantly |
| [[knowledge/journal]] | decision history | append-only |

A document is split only when its sections develop divergent update rhythms or divergent readers.

## Terminology

- **Source**: any carrier of information that enters the vault. Being a source implies nothing about being checked or true.
- **Source type**: a class of sources defined by representation, distillation operation and grounding anchor.
- **Distillate**: the condensation of exactly one source into its core statements, each carrying a grounding anchor into that source.
- **Claim**: an atomic, source-independent statement, synthesized from one or more distillates; the layer where source types converge.
- **Grounding**: the anchor relation between a claim and its source locations. A structural property an agent can produce; it carries no truth assertion.
- **Evidence**: a grounding relation that has passed human expert verification. Relational and deliberately rare; a fresh vault contains grounding, evidence arises only through review.
- **Provenance chain**: the unbroken anchor path from a deliverable sentence through claims and distillates to source locations. A break anywhere is a defect that validation detects.
- **Audit trail**: the principle that status fields record outcomes of checks that actually ran, each with its date on the checked document.
- **Posit**: a conclusion in the deliverable without source support, explicitly marked with its rationale and open evidence question.
- **Validation / machine review / verification**: the three checking instances, deterministic, adversarial-probabilistic, human. Note that this assignment inverts the IEEE convention; here establishing truth is a human act.
