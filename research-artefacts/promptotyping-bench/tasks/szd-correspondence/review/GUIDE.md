# Facilitator and reviewer guide

Authoring material: keep this guide outside the participant workspace. The operator
accepted an author–agent rehearsal followed by controlled comparisons. This guide
is a proposed assessment instrument; no independent review has occurred yet.

## Rehearsal, approximately 60 minutes

Prepare data and assessment material before the session. Allow roughly ten minutes
for orientation, 35 minutes for implementation/revision/continuation and 15 minutes
for joint inspection. These are planning allowances, not validated time limits.
If time expires, retain the actual artefact and record its state. Do not silently
extend a later frozen comparison's budget.

Use condition B for the first author rehearsal. It checks the proposed method
workflow; it does not estimate its effect against A. Record the exact model and
harness when selected. No model is selected or invoked by the data preparer.

Before each transition, save a copy of the complete participant workspace and its
timestamp in the facilitator's checkpoint store. Then provide the next task and,
for continuation, the additional input files. Start continuation in a fresh agent
session and record evidence of the reset. These actions are manual in this first
package; the preparer is not an execution harness or an OS sandbox.

## Observable scenarios and candidate expectations

All IDs below begin `SZDKOR.altmann-hannah.`. These expectations were authored from
the inspected XML; a domain reviewer must check them independently before study
use. They concern catalogue encoding under the public rehearsal policy.

| Scenario | Candidate expectation and evidence |
|---|---|
| Initial: December 1939 | Records `13` and `17` are within the month under encoded values; `4` is year-only overlapping evidence. Month and day precision stay distinct. |
| Initial: Lotte as participant | Her sender role in `13` and recipient role in `4` remain distinguishable; a person filter must not search only senders or only titles. |
| Initial: questionable representation | `102` preserves literal `15158`, encoded `1941-07`, the empty sender label with its GND reference, and both recipients. A source-grounded derived label is permitted if identified as such. The cause of the literal is not an established fact. |
| Revision: co-recipients | Records `4`, `48`, `64`, `102` and `103` have two recipient actions each. Count each catalogue ID once and each sender–recipient assignment separately. |
| Continuation: May 1941 | Records `116`–`120` are within May under encoded values: five catalogue records and nine sender–recipient assignments. Record `120` is month-granular; the other four are day-granular. |
| Continuation: retention | The December and source-review scenarios still work after adding the four records. |
| Source traceability | A researcher can move from a filtered item or count to source ID, original fields, signature and PID without losing context. |

Record each scenario as passed, partial, failed or not observed, with the artefact
checkpoint and a short reason. For actual user activity, record completion, errors
and time. A scripted browser check and observed human task completion are distinct
forms of evidence. Do not award success merely because an expected file exists.

## Independent scholarly ratings

Two reviewers should first rate the saved artefacts independently, without being
told the condition where practical. Preserve both initial ratings before discussing
disagreements. Available reviewers are not yet identified.

| Dimension | 0 | 1 | 2 |
|---|---|---|---|
| Source fidelity | Important source evidence changed, omitted or untraceable | Evidence retained but a material attribution or derivation is unclear | Relevant source and derived fields are distinguishable and traceable |
| Temporal and personal interpretation | Invented precision/identity or misleading counting | Main rules followed with an unresolved presentation or explanation weakness | Precision, annotations, all participants and counting units remain intelligible |
| Research usefulness | Main scenarios cannot be completed | Some can be completed, with substantial avoidable work or confusion | Required research scenarios can be completed and their evidence inspected |

Give a reason and an example for every rating. These are ordinal categories; do
not average them into a quality-per-token score. Keep disagreements visible.
Critical errors—such as invented precise dates, lost recipients, hidden source
alterations or complete-network claims from the sample—remain separate findings.
Final adequacy thresholds are to be set after this calibration and before comparison.

## Effort and scope

Record timestamped model input/output usage when the harness exposes it, preserving
raw fields and request IDs. Cached input and reasoning subsets are not additional
totals. Log human interventions, active work, episode boundaries and evaluator
effort separately. Unknown usage stays null; file size cannot establish billed
tokens. The prepared `usage.jsonl` and `interventions.jsonl` are empty logs, not
automatic collection. Follow the repository's shared measurement contract.

This rehearsal and these exposed development examples remain excluded from
comparative results. Select fresh evaluation probes later. Public metadata reuse
terms, independent reference review, model identity, isolation and automatic
measurement remain outstanding study-readiness conditions.
