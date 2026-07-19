---
title: Operations
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
related: [schema, state, journal]
---

# Operations

This document is the procedural playbook of the vault, one section per chain. Every chain produces or checks artifacts defined in [[knowledge/schema]] and updates the registers in [[knowledge/state]]. Decisions made along the way go to [[knowledge/journal]].

## Acquire

How a source enters the vault is orthogonal to its type; the channel is recorded in the representation's `channel` field and changes nothing about checking.

- **handover** and **collection**: place the original in `_sources/`, record it in the source inventory in [[knowledge/state]] with status `new`.
- **import**: export records from the reference library as CSL JSON into `references/`, one inventory row per record.
- **deep-research**: run the research prompt below. Capture every located publication in the reference manager and export it as CSL JSON into `references/`. The research report itself never becomes a source; all anchors bind to the located publications.

### Deep research prompt skeleton

> Research the topic **{topic from the backbone}** for the project **{project}**.
> Search broadly, then prioritize: peer-reviewed and official sources first;
> exclude: {project exclusion list}. Evaluate candidates at full text.
> Counter-check adversarially: for each candidate finding, search for sources
> that contradict it. Deliver a list of publications with full bibliographic
> data and, per publication, the two or three passages that matter for the
> topic, quoted verbatim. Do not deliver synthesis; the vault synthesizes.

## Ingest

Per source, produce the representation.

1. **document**: convert the original once (converter noted in frontmatter), set the H1, append a block ID to every anchor-relevant paragraph, fill the metadata block. Never edit the file after IDs exist.
2. **data**: place the data file in `00_representation/data/`, write the schema description of the same slug, fill the metadata block.
3. **publication**: no representation; the CSL JSON record in `references/` is the root.

Update the inventory row to `ingested`.

## Distill

One distillate per source, produced as a three-stage chain:

1. **Extraction**: an LLM extracts the core statements with the canonical prompt (one statement per anchor, no evaluation, no cross-source merging).
2. **Formatting**: deterministic pass that enforces the section skeleton, statement IDs and anchor syntax from [[knowledge/schema]].
3. **Fidelity check**: compare each statement against its anchor; for publications run the quotation check now, while the source text is at hand, and record it as `checked.quote`.

The distillate enters at `status: grounded`. Update the inventory row to `distilled`.

## Build claims

Read the distillates of a topic, synthesize atomic statements that the deliverable will need, one file per claim. Every claim grounds in at least one distillate statement; a claim spanning several sources lists every anchor. Irreconcilable statements become two claims, both `contested`, linked in both directions. Register every claim in its topic map. A conclusion without source support is noted for the deliverable as a posit candidate and never becomes a claim.

## Write chapters

Write per chapter, in the working language and style sheet set in [[knowledge/specification]]. Every load-bearing sentence gets a footnote `Grounded in [[claim]]`; every own conclusion gets a footnote `Posit: <rationale>. Open evidence question: <question>`. Mirror the referenced claims and the posit count in the frontmatter. Update the chapter register in [[knowledge/state]].

## Query

To answer a question from the vault, enter through the topic maps, follow claims to their distillate statements and, where exactness matters, down to the source passage. Quote claims by wikilink so the answer stays anchored. Questions the vault cannot answer are recorded as open questions in the topic's map.

## Check

Three instances check the vault. The architecture fixes their contracts; the mechanism fulfilling each contract is an instantiation decision recorded in [[knowledge/specification]].

### Contract: validation

- Judges: formal conformance of every file against [[knowledge/schema]].
- Authority: gates everything; no other check runs on a file that fails validation. Sets no status by itself except enforcing the discipline.
- Conditions: deterministic, same input, same verdict. Runs on every change.
- Record: `checked.validation: <date>` on every file that passes.
- Reference mechanism: `python tools/validate.py .` (checks frontmatter per type, anchor resolution, statement IDs, quotation identity where a source text is available, computation declarations, MOC reachability, bidirectional contested links, chapter mirror and footnote keywords, status discipline). `--run-computations` re-runs data anchors and compares results.

### Contract: machine review

- Judges: whether a source location actually supports the statement built on it, per pair, with the fixed verdict vocabulary: **fully supports** | **partially supports** | **overreaches** | **contradicts** | **not in the text**. Only *fully supports* passes.
- Authority: together with validation lifts a document to `validated`, never higher.
- Conditions: anti-anchoring is mandatory. The reviewer sees only the source location and the statement; the producing agent's reasoning stays hidden. A reviewer from a different model family than the producer decorrelates error modes and is recommended.
- Record: `checked.machine-review: <date>`; verdicts below *fully supports* trigger rework and are noted in the journal when they reveal a systematic pattern.
- Reference prompt skeleton:

  > You are an adversarial reviewer. Below are a source passage and a statement
  > that claims to be supported by it. Your task is to refute the statement.
  > Judge only whether this passage supports this statement. Answer with exactly
  > one verdict: fully supports | partially supports | overreaches | contradicts
  > | not in the text. Then give one sentence of justification.
  >
  > PASSAGE: {source location, with its heading path}
  > STATEMENT: {statement}

- Pair cutting: a pair consists of the anchored location (for documents the block plus its heading path, for publications the quotation, for data the computation and its result) and the bare statement. Nothing else enters the pair.

### Contract: verification

- Judges: whether a grounding relation holds as evidence, by human expert judgment. The authority is the verification role named in [[knowledge/specification]].
- Authority: alone lifts to `verified`. Machine checks prepare, never replace it.
- Conditions: proceeds passage by passage on the prepared pairs; may sample where the machine review pass rate justifies it, with the sampling rule noted in the journal.
- Record: `checked.verification: <date>` set by or on behalf of the verifying role.

### Status discipline

`grounded` → (validation and machine review passed) → `validated` → (expert passed) → `verified`. `contested` is set by claim building or review when sources conflict, and resolved only by verification. A document's status is the minimum of its anchors' states.
