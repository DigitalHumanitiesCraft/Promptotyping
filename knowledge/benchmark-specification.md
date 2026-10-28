---
title: Benchmark Specification
project:
  name: Promptotyping Site
  repository: https://github.com/DigitalHumanitiesCraft/Promptotyping
method:
  name: Promptotyping
  url: https://dhcraft.org/Promptotyping/
status: draft
language: en
created: 2026-09-05
updated: 2026-10-28
related: [INDEX, governance, verification, benchmark-plan]
---

# Promptotyping benchmark pilot specification

## Purpose and status

The operator requested a small, token-conscious evaluation of autonomous agents
and humans working with agents on Digital Humanities research data. This document
operationalises the discussion of 5 September 2026. The development package is
[promptotyping-bench](../research-artefacts/promptotyping-bench/README.md).

The [research proposal](../research-artefacts/promptotyping-bench-proposal.md) develops
the rationale and intended contribution. The [working plan](benchmark-plan.md)
owns milestones, readiness criteria and knowledge integration. Existing grounded
findings and open literature work are linked from
[MOC-Benchmark](../vault/30_assertions/MOC-Benchmark.md).

The operator requires **real DH research data for every benchmark study task**,
including the first agent and human feasibility tasks. The existing package 0.1.0
uses synthetic data and is therefore a **tooling fixture only**, ineligible for
benchmark results. Its policies and labels remain generated proposals. Reference
self-checks verify the machinery; no participant or model study has been conducted.
The operator selected Stefan Zweig digital and correspondence/dating as the first
research activity. The [SZD task materials](../research-artefacts/promptotyping-bench/tasks/szd-correspondence/README.md)
now include real source selection, participant briefs, a schema, local
preparation tooling and candidate assessment expectations. The accepted pilot
direction is recorded in the working plan. Independent review and a measured
study harness remain open.

## Research-data requirement

Use a bounded extract of an actual DH research collection, preserving stable record
identifiers, original literals, meaningful source context and documented uncertainty.
Record the dataset citation, version or commit, checksum, retrieval date, rights
basis, selection rule and every extraction/transformation step. Small volume must
not remove the context needed to judge the intended research use. Choose cases
before comparative runs and report sampling limits; a curated hard-case sample
does not estimate error prevalence in the full collection.

Research briefs and change requests may be authored for the benchmark, but claims
about collection conventions must be sourced or explicitly declared task policies.
Do not relabel invented records as authentic or transplant the fixture's bracket
rules into a real edition without evidence. Reference annotations are reviewer-
authored interpretations of identified real records, kept separate from source
data; allow documented alternatives and unresolved cases. Freeze disjoint record
sets for development and evaluation where feasible, and record public exposure
and possible prior model familiarity. Synthetic fixtures may test software only.

## Research question and estimand

Under the same model, harness, materials and resource ceilings, does an explicit
protocol for maintaining project knowledge, checking work and writing back changes
improve correctness after an amendment and after session handover, and at what cost?

Condition A permits an agent's normal working practices, including documentation
and tests. Condition B adds a compact Promptotyping protocol. All substantive task
requirements, editorial rules, supplied examples, capabilities and resources are
identical. B receives no additional factual hints or reference answers. The primary
comparison concerns the **whole protocol**, not an isolated effect of documents or
write-back. A later ablation may distinguish those mechanisms.

The autonomous track deliberately removes the Critical Expert during execution.
It evaluates delegated work and the consequences of that removal; it cannot supply
purpose-specific scholarly acceptance. The human track adds accountable intervention
and acceptance. Post-run scoring is separate from both.

## Initial task and expected contrast

The selected real-data task is the [SZD correspondence explorer](../research-artefacts/promptotyping-bench/tasks/szd-correspondence/README.md).
Its task document owns the research activity, collection-specific rules and episode
scenarios; its source manifest owns exact source versions and selected record IDs.
The [source audit](../snapshots/benchmark-szd-data-audit-2026-09-05.md) supplies dated
inspection evidence. Packaging and review readiness are tracked in the working plan.
The [synthetic fixture](../research-artefacts/promptotyping-bench/fixtures/dating-explorer/README.md)
has separate policies and checks, which do not transfer to SZD.

The unit of evaluation is an implemented research artefact and the research work
it enables. Its data transformation is an editorial-policy-constrained component.
Reference labels establish correctness under that explicitly declared policy, not
universal historical truth. Ambiguous or unsupported expressions have a correct
unresolved outcome. An agreed machine-readable output contract supports deterministic component
checks; researcher scenarios assess the working artefact, and the human rubric
evaluates its research usefulness, explanations and accountable control.

Every later task should supply a small dataset, its provenance and limitations,
a disciplinary context, a research interest, researcher scenarios and observable
acceptance criteria. Keep input volume small while retaining meaningful decisions
about evidence. Freeze only interface details required for comparable observation;
do not require participants to reproduce the reference layout. A small task can
assess support for a stated research activity; claims about novel historical
findings require an additional scholarly evaluation.

## Outcomes and analysis

- Primary: successful researcher scenarios after revision and continuation,
  reported separately, with record-level correctness as supporting evidence.
- Secondary: critical-error categories, initial correctness, usable script,
  source integrity, repeatability, and active human time plus model usage.
- Process: whether changes are represented in durable knowledge and used in later
  work. File count, prose length and compliance receive no outcome-quality points.
- Human: correct detection and correction of errors, justified acceptance or
  rejection, external assistance and observed difficulty.

The automatic grader checks submitted data, presence of the interface and source
integrity. It does **not** execute participant code or assess rendered usability.
Browser scenarios and script execution on unseen policy-equivalent inputs are
separately recorded checks in an isolated environment. A JSON pass is explicitly
not a research-artefact pass. The reference solution is tested against independently
listed labels; grading never calls the reference normaliser for expected answers.

There is no aggregate leaderboard score in this pilot. Keep unsuccessful runs and
timeouts. Infrastructure failures, source-integrity violations and missing outcomes
remain identifiable rather than silently removed or interpreted as scholarly errors.
Repeated trials within one task are not independent new tasks or participants.

## Measurement protocol

Evaluation combines quantitative observations, ordinal expert ratings and
qualitative explanations. Human judgement and qualitative data are not synonyms:
an expert can apply a prespecified rating scale, while an interview or explanation
reveals why an artefact succeeds or fails. The following is a proposed measurement
contract, not functionality already supplied by the local runner.

| Dimension | Operational measure | Collection and interpretation |
|---|---|---|
| Formal conformance | Parse/schema pass, required fields, identifier resolution, source preservation and fixed requirement checks | Benchmark-owned validators against a frozen contract; report families and denominators, not a manipulable total of participant-authored tests |
| Functional and bounded semantic correctness | Correct query results, counts, links or classifications against independently reviewed expectations on real records | Automated assertions where justified; accepted alternatives and unresolved cases declared before scoring |
| Research use | Correct completion of predefined researcher scenarios; errors, assistance and time to locate and explain evidence | Observe a designated evaluator/user using the saved artefact under a common protocol; distinguish this use time from development time |
| Scholarly adequacy | Source fidelity, appropriate uncertainty, research usefulness and justified acceptance | Two independent expert ratings per dimension, with evidence and qualitative reasons; ordinal 0/1/2 means violated/partial/met, not an interval scale |
| Development resources | Cumulative and incremental tokens, billed cost, wall time, tool time and active human time | Timestamped usage events plus immutable artefact checkpoints; keep trial work and evaluator overhead separate |
| Human oversight | Reviewed errors detected/corrected, false acceptance and new errors introduced by intervention | Compare observed intervention evidence and independently assessed artefact states; give event counts and denominators, N/A when no opportunity exists |

Schema validity establishes conformance to encoded constraints, not semantic truth
or suitability for the research purpose. Conversely, reviewer judgement does not
imply that every aspect is unquantifiable. Use completion counts and rating
distributions with their evidence; retain disagreements before adjudication.
Calibrate the rating anchors on examples before outcome scoring. With sufficient
ratings, prespecify an agreement statistic suited to ordinal data and missingness;
the first small pilot should display paired ratings and disagreements directly.
Critical errors remain visible even when other dimensions score well.

### Resource and quality observations over the course of a trial

For model call i, retain request ID, start/end timestamps, episode, model/configuration,
input tokens I_i, output tokens O_i, cached-input and reasoning subsets where reported,
usage completeness, cost/currency, and retry/termination state. Count every reported
call once, including repeated context, summaries, retries and parallel working-agent
calls. Do not infer missing usage as zero. Metered total through call k is
`T(k) = sum(I_i + O_i for i <= k)` where the provider defines these totals without
overlap. Cached input and reasoning already contained in those totals are breakdowns,
not extra terms. Retain raw provider fields and document the accounting mapping.

Report input/output separately, cached share, billed money, elapsed time, tool
execution and active human time. Tokens are an effort measure, not a quality score
or a model-independent measure of computation; tokenisation and prices differ.
Separate evaluator tokens/time from working-agent tokens/time, and record both.

Save immutable artefact checkpoints after initial implementation, revision and
continuation, linking each to its trace event and cumulative usage. Score each saved
state later with no hidden evaluator feedback to the participant. Plot scenario
success and separate expert dimensions against cumulative tokens and elapsed time.
Show per-episode resource increments and any quality regression; do not assume
quality improves monotonically or interpolate unobserved expert judgements.

For finer trajectories, prespecify common within-episode budgets and capture the
latest completed checkpoint at or before each budget, with its actual usage. If no
checkpoint exists, record it as unavailable. Align comparisons by episode and data
state, so a continuation task is not compared with an initial task accidentally.
Repeatable automated checks may run on more checkpoints; expert scoring can remain
at episode boundaries to limit review burden.

Define an adequate-artefact threshold before trials, combining required scenario
passes, no disqualifying critical errors and declared expert-rating requirements.
Report the first *observed* checkpoint meeting it and the resources used. A run
that never meets it is a failure or censored at its budget, not a zero-cost success.
The main comparison shows quality at common resource ceilings and resources needed
for adequate quality; do not divide an ordinal quality score by token count.

## Budget and progression

1. Prepare the selected real DH extract and review the first task and rubric.
   Begin with the accepted author–agent rehearsal, then calibrate both conditions
   before comparative study use. Synthetic fixture runs
   remain engineering checks and never enter the study sample.
2. Freeze a version and limits before the comparative pilot. Proposed ceiling:
   15,000 cumulative metered tokens over all three episodes and 15 minutes of agent
   execution per trial. These are uncalibrated proposals, not enforced by the local
   file runner. Include harness prompts, repeated/cached input and reported reasoning
   usage without double-counting fields already included by the provider.
3. Add a small TEI passage explorer and a person-reconciliation review interface
   only after this task works. Each needs its own research brief and usage scenarios;
   extraction or matching alone is not the deliverable.
   Three tasks x two conditions x three attempts with one model/harness = 18 trials.
4. Run a 4–6-person human feasibility pilot before planning a powered comparison.

A model adapter must enforce the frozen ceilings before paid trials. Record model
identifier, harness version, instructions, reasoning setting, available tools,
runtime, timestamps and the complete observable tool/message trace. Record billed
usage from the provider rather than estimating it from source-file size. Never
infer a missing usage field as zero. No model API adapter is included yet.

For external humans, standardise tool onboarding and record training time for the practice.
The first small pilot diagnoses protocol usability and scoring problems. A later
comparison requires assignment balancing/randomisation, handling of learning and
carryover, an analysis plan, and participant recording/consent arrangements. If
human–AI synergy relative to either actor alone is claimed, add a human-only arm.

## Isolation and publication

Only the exported participant workspace may be made available to an agent.
Starting a trial inside this specification repository would expose reference answers,
future episodes and its extensive agent instructions. An external path is helpful
but is **not** an OS sandbox: restrict filesystem access or mount only that workspace
into a prepared container. Network use is disabled except for the authorised model
endpoint; Python dependencies are installed before the trial. The runner does not
provide or attest this isolation.

Run directories and traces stay outside the repository. They may contain participant
data or credentials and require review before publication. The development task's
references are visible in the authoring repository and are not a contamination-free
holdout. Create independently reviewed fresh variants before evaluation claims.
No public release or change of the canonical terminology of the practice follows from this pilot.

## Literature informing the design

These are starting points checked during the preceding discussion, not a complete
systematic review or a newly ingested Grounded Vault evidence chain.

- [Strutz (2026), A Multi-Dimensional Evaluation Framework for Assessing LLM Performance in TEI Encoding](https://doi.org/10.5334/johd.484): separate formal and scholarly dimensions; already registered in the Vault.
- [Gloaguen et al. (2026), Evaluating AGENTS.md](https://arxiv.org/abs/2602.11988): compare context interventions against a credible baseline; additional context is not presumed beneficial.
- [Kapoor et al. (2024), AI Agents That Matter](https://arxiv.org/abs/2407.01502): report cost with success, use holdouts and preserve reproducible evaluation conditions.
- [Yehudai et al. (2025; revised 2026), Survey on Evaluation of LLM-based Agents](https://arxiv.org/abs/2503.16416): evaluation dimensions and frameworks; already registered in the Vault.
- [Vaccaro, Almaatouq and Malone (2024), When combinations of humans and AI are useful](https://doi.org/10.1038/s41562-024-02024-1): distinguish human, AI and combined performance.
- [Sterz et al. (2024), On the Quest for Effectiveness in Human Oversight](https://arxiv.org/abs/2404.04059): examine actual access and power to intervene; already registered in the Vault.
- [Merrill et al. (2026), Terminal-Bench](https://arxiv.org/abs/2601.11868): executable environments, reference solutions and task tests.
- [Anthropic (2026), Demystifying evals for AI agents](https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents): engineering guidance for distinguishing trials, traces, graders and outcomes; a vendor guide, not independent effectiveness evidence.
- [NIST, Usability Testing](https://www.nist.gov/programs-projects/usability-testing): combines quantitative task completion, error and time measures with qualitative observations; supports the distinction between measured use and interpretive explanation.

Kapoor's abstract, NIST's methodology page and Strutz's framework were consulted
on 5 September 2026 when specifying resource trajectories and mixed evaluation.
Their design implications here are adaptations. New literature links are not a
claim that full Grounded Vault source intake or expert verification has occurred.

## Decisions needed after the concrete package review

The Critical Expert selects and reviews the real-data task's relevance, sourced
collection conventions, reference labels and rubric. Calibration then chooses the model/harness
adapter and feasible ceilings. These decisions precede comparative or human trials;
they do not block local reference checks or repairs to this development package.
