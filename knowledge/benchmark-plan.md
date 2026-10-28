---
title: Benchmark Plan
project:
  name: Promptotyping Site
  repository: https://github.com/DigitalHumanitiesCraft/Promptotyping
method:
  name: Promptotyping
  url: https://dhcraft.org/Promptotyping/
status: active
language: en
created: 2026-09-05
updated: 2026-10-28
related: [INDEX, benchmark-specification, governance, journal]
---

# Promptotyping Bench implementation plan

The [proposal](../research-artefacts/promptotyping-bench-proposal.md) states the
research rationale. The [specification](benchmark-specification.md) owns the
comparison and task contract. This plan records the work required to turn the
development package into a usable study. Later milestones are proposed work;
they are not completed trials, scheduled jobs or authorised expenditure.

## Baseline

The dating-explorer development package contains task context, synthetic data,
two working protocols, three episodes, reference labels and implementation, a
local workspace runner, automatic data grading, browser scenarios and a human
feasibility protocol. The reference checks are recorded in [journal.md](journal.md).
No model adapter, execution sandbox or participant study exists yet.

The operator now requires real DH research data in every study task. The existing
synthetic package is a tooling fixture, excluded from the study sample. The operator
selected Stefan Zweig digital and correspondence/dating. The
[source audit](../snapshots/benchmark-szd-data-audit-2026-09-05.md) and
[task materials](../research-artefacts/promptotyping-bench/tasks/szd-correspondence/README.md)
identify the development sample from the Hannah Altmann konvolut. The real task
now has participant materials, an input schema, a local preparer and a candidate
review guide. Domain review and a measured execution harness remain prerequisites
for study use.

The [preparation record](../snapshots/benchmark-szd-rehearsal-preparation-2026-09-05.md)
documents the generated local package and checks. Its working directory is
`C:/Users/chris/Documents/Promptotyping-Bench/szd-rehearsal-2026-09-05/workspace`;
the sibling `START-HERE.md` guides the facilitator. This is a machine-local
development output, not a portable source location. No participant or model trial
has started.

## Accepted pilot direction, 5 September 2026

The operator accepted the eight-question recommendations with “go”. This authorises
local preparation and sets the following working decisions; it does not certify
source interpretations, reviewer availability or redistribution rights.

| Decision | Accepted direction |
|---|---|
| Main research focus | Artefact quality after changes and fresh-session continuation, with initial quality and effort also measured |
| Development sample | The task manifest's 12 initial and four continuation SZD records; independent domain review remains necessary |
| First practical step | An author–agent rehearsal using B to exercise the practice; excluded from comparative results |
| Session allowance | Approximately 60 minutes: 10 orientation, 35 work and 15 joint inspection; preparation happens beforehand |
| First comparison | One model/harness in both conditions, same factual inputs/tools/limits, repeated runs; A may use notes and tests |
| Independent assessment | Obtain a second domain reviewer; no person's availability has been established |
| Openness | Prepare for public reuse of tasks, cleared data, criteria and code; no public release is authorised by this decision |
| Metadata rights | Still unresolved for the selected konvolut; document the actual basis before redistribution |

The exact model/harness, second reviewer and metadata reuse basis remain factual
inputs to obtain. Candidate assessment anchors and temporal policies are explicit
rehearsal proposals, not accepted historical judgements. Calibration informs the
later frozen resource ceiling and adequacy threshold.

The subsequent session-close instruction authorises committing and pushing the
project documents, task definitions and tools. The real extracted source package
remains outside the repositories; this instruction does not establish missing
metadata rights, scholarly acceptance or a completed benchmark study.

## Milestones and readiness criteria

| Milestone | Work and accountable role | Deliverable and exit criterion | State |
|---|---|---|---|
| M0: research design | Research lead reviews proposal, task relevance, comparison and limits | Dated design decision recording what is accepted and still provisional | Pilot direction accepted above; scholarly references/thresholds remain provisional |
| M1: real-data task | Research lead selects a real DH extract with provenance and documented sampling; domain reviewers author/check the collection-specific task, reference expectations and rating anchors; engineer adapts checks | Real-data task version, source manifest, independent review/disagreement record and fresh probes; synthetic fixture excluded | Participant materials, schema, preparer and review guide implemented; independent review, redistribution basis and fresh probes pending |
| M2: executable trial | Engineer provides isolation, model adapter, timestamped per-call usage, immutable checkpoints, enforced ceilings and browser/execution scoring | One calibration trial per condition on the real-data task; quality/resource observations at episode boundaries, working/evaluator effort separated, complete traces and no answer exposure | Pending M1 |
| M3: autonomous feasibility | Research lead freezes configuration and runs the dating task three times per condition; reviewer scores saved artefacts | Six trials, including failures and timeouts, with stage outcomes and measured cost; calibration runs excluded | Pending M1–M2 |
| M4: human feasibility | Research lead recruits four to six researchers, settles consent and onboarding, balances experience where feasible; independent reviewers score outputs | Observation report on comprehension, oversight, assistance, scoring agreement and effort; no powered-effect claim | Pending M1–M2; can run alongside M3 |
| M5: broaden and freeze | Domain authors add two task families and fresh variants, all using real DH research-data extracts | Reviewed task collection and analysis plan; decide whether a larger study is justified | Conditional on feasibility |

For M3, six trials each contain three episodes. If expanded to three task families
under the same two conditions and three repeats, the autonomous programme comprises
18 trials in total, not 18 plus the first six, provided the frozen protocol stays
the same. A changed protocol requires a new cohort and explicit treatment of the
earlier development runs. These counts are feasibility choices, not a power analysis.

For M4, initially assign each participant one condition for the dating task, balancing
experience as far as the small sample permits. This avoids treating a second attempt
at the same task as an independent observation. The pilot is descriptive. A later
within-person design needs parallel task variants and counterbalanced ordering.
The practice's author may rehearse the procedure, but that rehearsal is not evidence
of transfer to another researcher.

## Resources and stopping rules

Select one model/harness for calibration; record its full identity and configuration.
The proposed token and execution ceilings live in the specification and must be
calibrated before a study freeze. Record total metered input and output without
double-counting cached or reasoning subsets. Calculate expected spend from measured
usage and the applicable rates, including evaluation calls if any. Reserve and
record human task-authoring, onboarding, active work and reviewing time separately.

If both conditions fail because the environment is broken, fix the environment and
retain the failed calibration record. If all scenarios show ceiling performance,
revise a meaningful source ambiguity or handover demand before freezing the task.
If reference labels or rater interpretations remain contested, revise the contract
or permit explicit alternatives rather than force one arbitrary answer. Budget
exhaustion during a frozen comparative trial remains an outcome.

## Knowledge integration

| Knowledge or artefact | Canonical destination | Integration rule |
|---|---|---|
| Research rationale and proposed contribution | `research-artefacts/promptotyping-bench-proposal.md` | Hypotheses remain proposals until tested |
| Experimental decisions and operational work | `knowledge/benchmark-specification.md` and this plan | Update the owning document after a decision; journal the reason |
| Real-data task contracts and source selections | `research-artefacts/promptotyping-bench/tasks/` | Each task owns its brief, rules and source manifest; freeze reviewed inputs and evaluation material for study use |
| Synthetic tooling checks and reference artefact | `research-artefacts/promptotyping-bench/fixtures/` | Development evidence only; task identity and study ineligibility travel with generated records and reports |
| Literature and source-supported findings | `vault/references/`, `20_distillates/`, `30_assertions/` | Reuse existing anchors; new sources follow the vault intake and checking chain |
| Benchmark literature navigation | [MOC-Benchmark](../vault/30_assertions/MOC-Benchmark.md) | Link existing findings; label design questions and candidate literature explicitly |
| Cross-project orientation | Obsidian `Projects/Promptotyping/Promptotyping MOC.md` and `Project Overview Promptotyping.md` | Link canonical repository documents; do not copy the proposal or technical state |
| Portfolio-level next step | Existing Promptotyping entry in Obsidian `ACTIVE-WORK.md` | Point to this plan; leave detailed milestones in the repository |
| Raw trials and participant records | Restricted run store outside both published repository and general Obsidian vault | Preserve traces, versions and consent/retention boundaries |
| Cleared analysis and findings | Dated report under `snapshots/`, then Grounded Vault intake where a claim needs grounding | Distinguish technical checks, experimental observations and human acceptance |

The personal Obsidian vault and the embedded Grounded Vault have complementary
functions. The first connects projects and practice knowledge; the second maintains
the source-to-assertion chain. Benchmark planning does not require another vault.

The personal vault's MOC, Project Overview and ACTIVE-WORK were updated on
5 September 2026 under the operator's explicit session-close instruction. They
link to these canonical repository documents and retain the separate paper and
portal acceptance work. The navigation handoff is integrated; its outcome and the
scoped exception to the external-session writing boundary are recorded in
[journal.md](journal.md). Future transfers use the [handoff inbox](handoff.md).

## Next work

Use the local rehearsal package to review the brief, temporal rules, annotation
handling and candidate expectations. Record the model/harness, identify the second
reviewer and document the metadata reuse basis. Conduct the author rehearsal,
retaining observed usage and intervention gaps instead of imputing them. Then
refine the instrument, author fresh probes and implement isolated measured trials
under M2. The data preparer neither executes the agent nor supplies formal
assessment of the resulting research artefact. Existing paper and portal review
work stays in its own plan.
