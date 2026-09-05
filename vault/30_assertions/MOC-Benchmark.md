---
type: moc
topic: Benchmark
created: 2026-09-05
updated: 2026-09-05
checked:
  validation: 2026-09-05
---

# MOC: Benchmark

Research grounding and open questions for evaluating small DH research artefacts built by autonomous agents and researchers working with agents.

The
[proposal](../../research-artefacts/promptotyping-bench-proposal.md),
[experimental specification](../../knowledge/benchmark-specification.md) and
[working plan](../../knowledge/benchmark-plan.md) live at repository level.
This map reuses existing grounding and records open design questions. It contains
no assertion that the proposed benchmark or Promptotyping has demonstrated an effect.

## Existing source-supported findings

- [[30_assertions/record-does-not-separate-document-depth-from-verification-effort]] — the internal corpus audit identifies a confound the comparison must respect.
- [[30_assertions/unassisted-non-hybrid-artefact-production-is-unsupported]] — the transfer audit bounds the existing evidence for independent human use.
- [[30_assertions/record-has-no-failure-case-and-a-bounded-yield-pole]] — the internal audit identifies the absence of documented failure cases.
- [[30_assertions/tei-evaluation-assigns-its-dimensions-to-different-checking-regimes]] — a TEI framework separates automatic, reference-based and expert-centred checks.
- [[30_assertions/tei-permits-several-valid-encodings-of-one-phenomenon]] — legitimate interpretive alternatives constrain reference matching.
- [[30_assertions/an-open-tei-encoding-benchmark-exists-for-llm-generated-encodings]] — a task-specific DH precedent is already represented in this vault.
- [[30_assertions/llm-reproducibility-transparency-recommendations]] — the reporting basis for prompts, model versions, settings, code and data.
- [[30_assertions/llm-judgement-approximates-human-preference-and-carries-known-biases]] — the scope and limits of model-based judging.

These links retain their existing epistemic statuses. Inclusion in this map does
not constitute new source verification or human acceptance.

## Open research and design questions

- Does maintaining project knowledge improve research-artefact use after revision
  and continuation sufficiently to justify its measured cost?
- Which interventions help a researcher recognise an artefact's limits and make
  a justified acceptance or rejection decision?
- What can a whole-protocol comparison establish, and which later ablations would
  be needed to separate document maintenance from verification effort?
- Which small research-data tasks retain meaningful disciplinary judgement while
  permitting comparable observable outcomes?
- Which failures reflect the working protocol, the model/harness, task ambiguity
  or infrastructure, and how should those categories be recorded?

## Literature intake

The candidate bibliography and proposed design uses are in the
[specification](../../knowledge/benchmark-specification.md#literature-informing-the-design).
Existing distillates should be reused within the scope of their anchors. Candidate
papers without a source record require bibliographic identity, accessible passages
and quote/fidelity checking before new assertions are built. A planning summary
does not replace those sources. Processing state belongs in the
[intake register](../knowledge/state.md).

## Related

- [Artefact verification](MOC-ArtefactVerification.md)
- [Limitations](MOC-Limitations.md)
- [Evidence](MOC-Evidence.md)
