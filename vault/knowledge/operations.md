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
updated: "2026-08-09"
related: [schema, state, journal]
---

# Operations

This document defines the procedures of the vault, one section per chain. Every chain produces or checks artifacts defined in [[knowledge/schema]] and updates the registers in [[knowledge/state]]. Decisions made along the way go to [[knowledge/journal]].

## Acquire

How a source enters the vault is orthogonal to its type; the channel is recorded in the `channel` field of the Markdown representation and changes nothing about checking.

- **handover** and **collection**: place the original in `00_sources/`, record it in the source inventory in [[knowledge/state]] with status `new`.
- **import**: export records from the reference library as CSL JSON into `references/`, one inventory row per record.
- **deep-research**: run the research prompt below. Capture every located publication in the reference manager and export it as CSL JSON into `references/`. The research report itself never becomes a source; all anchors bind to the located publications.

### Deep research prompt skeleton

> Research the topic **{topic from the controlled topic set}** for the project **{project}**.
> Search broadly, then prioritize: peer-reviewed and official sources first;
> exclude: {project exclusion list}. Evaluate candidates at full text.
> Counter-check adversarially: for each candidate finding, search for sources
> that contradict it. Deliver a list of publications with full bibliographic
> data and, per publication, the two or three passages that matter for the
> topic, quoted verbatim. Do not deliver synthesis; the vault synthesizes.

## Ingest

Per source, produce the Markdown representation. The operation is the **Markdown conversion**, and it runs in two steps. The first step converts the original into structure-preserving Markdown, so that headings, lists, tables and paragraph boundaries survive as the original had them. The second step stamps a block ID onto every anchor-relevant paragraph. After the second step the file is never edited again, because every later layer anchors into these blocks and an edit would move them.

Which converter performs the first step is decided per source, along this list. The chosen converter is recorded in the `converter` field of the Markdown representation as before, so that a later run can be reproduced or repeated with a different tool.

- Short, simply structured texts are converted by the agent itself, because a tool adds nothing where the structure is already flat.
- Standard office and PDF formats go through MarkItDown or pandoc.
- Complex layouts and scanned documents go through Docling, which works markedly faster when a GPU is available.
- Image sources that require OCR are a named extension point of this profile and are not yet worked out.

1. **document**: run the Markdown conversion into `10_markdown/documents/`, note the converter in the frontmatter, set the H1 from the original, fill the metadata block.
2. **data**: place the data file in `10_markdown/data/`, write the schema description of the same slug, fill the metadata block.
3. **publication**: no Markdown representation, because the CSL JSON record in `references/` is the root of this source type.

Update the inventory row to `ingested`.

## Distill

One distillate per source, produced as a three-stage chain:

1. **Extraction**: an LLM extracts the core statements with the canonical prompt (one statement per anchor, no evaluation, no cross-source merging).
2. **Formatting**: deterministic pass that enforces the section skeleton, statement IDs and anchor syntax from [[knowledge/schema]].
3. **Fidelity check**: compare each statement against its anchor; for publications run the quotation check now, while the source text is at hand, and record it as `checked.quote`.

### Canonical extraction prompt skeleton

> Extract the core statements of the source **{source short title}**, and of this
> source alone. Work only from the text given below.
> One statement per anchor. Each statement stands on its own, is understandable
> without its neighbours, and stays within the literal sense of the source.
> Do not evaluate, do not interpret, do not infer, and do not merge this source
> with any other; the vault synthesizes at a later layer.
> No statement without a nameable source location. Where you cannot name one,
> drop the statement.
> Deliver per statement the statement itself and its source location, in the form
> the source type requires: for a document the block it was taken from, for a
> publication the verbatim quotation with page, for data the computation that
> yields the stated result.
>
> SOURCE: {Markdown representation, quotation set, or data schema description}

The chain iterates. A statement that fails the fidelity check is reformulated or discarded, and the check runs again, until every remaining statement passes.

The distillate enters at `status: grounded`. Update the inventory row to `distilled`.

## Build assertions

Assertions are where the vault synthesizes, one file per assertion, and the work proceeds by topic in these steps.

1. **Read in**: enter through the topic map of the topic and read every distillate registered there, so that synthesis covers the sources the topic actually holds rather than the ones at hand.
2. **Group**: gather the distillate statements that concern the same matter, across sources and across source types. A group is the unit an assertion is written from.
3. **Formulate**: write one atomic assertion per group, carried jointly by the sources of that group. Atomic means one statement that cannot be split without losing its point.
4. **Ground**: list in `grounding` every statement ID that supports the assertion, one per supporting source, and say in the Support section what each anchor contributes.
5. **Contradictions**: where a group holds statements that cannot be reconciled, write two assertions instead of one, set both to `contested`, and link them to each other in `contested-with` on both sides.
6. **Posit candidates**: a conclusion that no distillate statement carries is noted for the output as a posit candidate and never becomes an assertion.
7. **Register**: enter every assertion in its topic map with a half-sentence of orientation, and record questions the sources leave open under the map's open questions.

Machine review then runs over every pair of assertion and supporting statement, under the contract below. A verdict below *fully supports* means the assertion is reformulated to the width its sources actually carry, or the grounding is corrected by dropping the anchor that does not carry it and naming one that does. Review repeats on the changed pair.

### Assertion review prompt skeleton

> You are an adversarial reviewer. Below are a distillate statement and an
> assertion that claims to be supported by it. Your task is to refute the
> assertion. Judge only whether this statement supports this assertion; whether
> the assertion is true is out of scope. Answer with exactly one verdict: fully supports
> | partially supports | overreaches | contradicts | not in the text. Then give
> one sentence of justification, and where the verdict is not *fully supports*,
> name the part of the assertion that the statement does not carry.
>
> STATEMENT: {distillate statement, without its own grounding anchor}
> ASSERTION: {assertion as one sentence}

## Write chapters

Write per chapter, in the working language and style sheet set in [[knowledge/specification]]. Every load-bearing sentence gets a footnote `Grounded in [[assertion]]`; every own conclusion gets a footnote `Posit: <rationale>. Open evidence question: <question>`. Mirror the referenced assertions and the posit count in the frontmatter. Update the chapter register in [[knowledge/state]].

## Query

To answer a question from the vault, enter through the topic maps, follow assertions to their distillate statements and, where exactness matters, down to the source passage. Quote assertions by wikilink so the answer stays anchored. Questions the vault cannot answer are recorded as open questions in the topic's map.

## Check

Three instances check the vault. The architecture fixes their contracts; the mechanism fulfilling each contract is an instantiation decision recorded in [[knowledge/specification]].

### Contract: validation

- Judges: formal conformance of every file against [[knowledge/schema]].
- Authority: gates everything; no other check runs on a file that fails validation. Sets no status by itself except enforcing the discipline.
- Conditions: deterministic, same input, same verdict. Runs on every change.
- Record: `checked.validation: <date>` on every file that passes.
- Reference mechanism: `python tools/validate.py .` (checks frontmatter per type, anchor resolution, statement IDs, quotation identity where a source text is available, computation declarations, MOC reachability, bidirectional contested links, chapter mirror and footnote keywords, status discipline, inventory completeness). Data anchors are re-run and compared by default; `--no-computations` switches that off for a fast run.
- The checks with their own codes are these. `E-ANCHOR` fires when an anchor does not resolve, and it resolves the frontmatter targets `representation`, `superseded-by` and `contested-with` as well as the anchors in the body. `E-LAYER` fires when an anchor skips a layer instead of binding to the layer directly beneath its own. `E-GROUNDING` fires when a document that owes grounding carries an empty grounding. `E-DUPLICATE` fires when a block ID or a statement ID occurs more than once in one file. `W-PLACEHOLDER` fires while an unreplaced template placeholder in double braces remains anywhere in the vault. `W-EMPTY` fires while the production chain from `10_markdown` to `40_output` holds no document, so that no content check had a subject. `W-STALE` fires when a document's `updated` date is younger than the youngest of its `checked` dates, because then its checks are older than the content they judge; a document without any check date does not fire, since that is the state the status ladder starts from.
- A run without errors is not by itself the success criterion. A warning states that a check found no subject, which is the failure mode a silent green run hides. The instance declares the warnings it expects under `expected-warnings` in the frontmatter of `knowledge/specification.md`; every other warning is printed with an asterisk and counted separately, and a declaration that no longer fires is reported as `W-STALE-EXPECTATION`.

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

`grounded` → (validation and machine review passed) → `validated` → (expert passed) → `verified`. `contested` is set by assertion building or review when sources conflict, and resolved only by verification. A document's status is the minimum of its anchors' states.
