# Review rubric and reference scenario sheet

Development version 0.1.0. Proposed criteria and labels await scholarly review.
This sheet belongs to the synthetic tooling fixture. Benchmark study tasks must
use real DH research data; adapt this sheet and review its expectations against
that collection before any participant or comparative run.
Keep this organiser sheet outside participant workspaces. The participant's
research brief states the substantive requirements; the sheet adds no secret
requirements. A JSON pass is not a research-artefact pass.

## Three separate verdicts

1. **Automatic checks:** record correctness, source integrity and required files.
   Report each separately. Files being present does not establish working behaviour.
2. **Researcher scenarios:** use the running interface and record observed outcomes.
   A technical artefact pass requires all applicable scenarios below to pass.
3. **Scholarly acceptance:** a responsible reviewer assesses whether the artefact
   is adequate for this synthetic research purpose, citing evidence and limitations.
   An agent has no authority to supply this verdict on its own.

Method compliance is a process annotation, not an outcome score. Give the same
outcome credit to a successful artefact from either working condition. Do not reward
file count, prescribed words, visual polish or explanatory prose volume.

## Browser and implementation scenarios

Serve the participant workspace in its isolated execution environment. Use a fresh
browser state, wait for data loading, and retain a screenshot plus observed record
IDs for each scenario. Record browser/viewport and failures. Prefer raters who have
not seen the assigned working protocol; blind the outcome export where feasible.

| ID | Procedure | Passing evidence |
|---|---|---|
| S1 | Open index.html at each episode's required month. | Interface loads without missing assets/data; correct full-dataset counts and meaningful zero counts. |
| S2 | Select each evidence group and then All records. | Displayed IDs match the independent sets below; counts remain full-dataset counts. |
| S3 | Change the research month and repeat selection. | Counts and displayed IDs update correctly without modifying source/output data. |
| S4 | Inspect an exact, uncertain and unresolved record. | Original literal, source_ref, collection, value, precision, certainty and reason are accessible and agree with the reference labels. For D023 surrounding spaces are inspectable, e.g. quoted or preformatted. |
| S5 | Read the explanatory text. | Counts are explicitly catalogue records; no unique-letter/intensity claim. The review queue is not asserted to overlap the chosen month. |
| S6 | Operate controls by keyboard; inspect at a narrow viewport (~390 px). | Month and group have usable labels/focus, controls work, and required evidence can be read without clipping or inaccessible overlap. A scrollable data table is allowed. |
| S7 | Run the normaliser on an organiser-provided fresh, policy-equivalent CSV in the isolated environment. | It accepts the documented CLI and unseen IDs/date values, preserves original data and obeys policy. Do not execute untrusted participant code on the evaluator host. |

### Explicit browser reference sets

These sets are manually specified; they are not computed by the reference UI.

- Initial **and** revision, month **1830-05**: In month = D001, D002, D003
  (3); Outside month = D010 (1); Needs review = the other 20 records.
- Initial **and** revision, month **1832-02**: In month = D010 (1);
  Outside month = D001, D002, D003, D004, D023 (5); Needs review = the other 18.
- Continuation, month **1832-02**: In month = N005 (1); Outside month = N006 (1);
  Needs review = N001, N002, N003, N004 (4).
- Continuation, month **1832-03**: In month = N006 (1); Outside month = N005 (1);
  Needs review = N001, N002, N003, N004 (4).

The revision deliberately leaves group counts unchanged while changing the date
interpretation of D013, D014, D016 and D024. Inspect those records as well as counts;
an interface can display correct totals while concealing a faulty transformation.
D015 remains ambiguous. D013/D014/D016 remain uncertain under policy v2.

Suggested unseen S7 probes (different IDs/source references, both collections):
`März 1841`, `29.02.1900`, `29.02.2000`, `ca. 1842?`, `[April 1843]`, and a
literal with surrounding spaces. Their expected treatment follows the public policy.
Prepare/freeze a fresh probe set before a comparative pilot; these published probes
cannot count as a future secret holdout.

## Human judgement dimensions

Score each 0 (violated), 1 (partial or inconsistent), 2 (met), with an observation
and record ID/screenshot where relevant. Use N/A for genuinely unobserved behaviour;
do not turn it into zero or silently average it. Two raters first score independently
and then record any adjudication, retaining both original scores.

These are ordinal ratings, reported by dimension with distributions and reviewer
agreement/disagreement. They do not become interval measurements by averaging or
division by token count. Combine them with quantitative scenario completion and
error counts, and qualitative observations explaining scholarly adequacy. Formal
conformance alone does not establish semantic correctness or research usefulness.

| Dimension | 0 | 1 | 2 |
|---|---|---|---|
| Source fidelity | Alters evidence or invents facts | Evidence partly traceable | Relevant classifications remain traceable to preserved sources |
| Uncertainty communication | Presents unsupported certainty | Labels uncertainty but obscures its consequence | Distinguishes firm assignment, uncertainty and unresolved evidence accurately |
| Research usefulness | Researcher cannot perform the task | Task possible with material workarounds | Researcher can select, inspect and explain the evidence using the interface |
| Accountable acceptance | Accepts unsupported output without checking | Checks partly substantiate the decision | Acceptance/rejection cites appropriate checks and remaining limits |

Record critical errors independently of these scores: a lost catalogue record,
fabricated date or increased precision, erased uncertainty, changed source text,
wrong collection scope, and misleading counts of historical letters. No average
score cancels a critical error. A justified rejection may be good human oversight
while the artefact itself remains unsuccessful.

## Process and effort observations

Record whether an amendment was noticed, which durable rules changed, whether the
fresh session consulted them, what human intervention achieved, and what remained
only in chat. Support observations with saved files and observable traces; do not
infer private model reasoning. Record active human time, onboarding, method training,
model execution, interruptions, usage, retries and post-hoc repair separately.

Predeclare the primary analysis before comparative trials: S1–S7 outcomes after
revision/continuation, with each stage's data score and cost beside them. Three
repeats estimate run variability; they do not create three independent research
settings. This one development task supports no general claim of method effectiveness.
