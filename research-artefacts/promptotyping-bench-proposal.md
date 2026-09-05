# Promptotyping Bench: evaluating the construction of small research artefacts

Research proposal, draft 0.4, 5 September 2026. Prepared with Codex assistance
from the operator's research brief and the linked project knowledge. The design
and hypotheses await scholarly review; this document reports no study results.

## Purpose

Promptotyping Bench will investigate how autonomous agents and researchers working
with agents construct small digital research artefacts from research data, domain
context and a research interest. Its unit is a usable artefact and the research
work it enables: selecting evidence, inspecting representations, tracing claims to
sources and recognising uncertainty. Tasks will include an initial implementation,
a consequential change and a continuation across an agent-session boundary.

The proposed contribution is a reusable, inspectable evaluation instrument and
bounded empirical findings about quality, continuity, human control and effort.
Digital Humanities and research-data tasks provide the initial domain. Small
datasets and limited functionality keep the pilot affordable while preserving
decisions that require disciplinary understanding.

## Problem and existing research basis

Two internal audits identify the limits this study should address. The documented
project record does not isolate document depth from verification effort and overall
practitioner attention. It also leaves independent artefact production by domain
experts without a programming background unresolved. These are grounded project
findings, not results of a controlled comparison.[^confounding][^transfer]

A published TEI-evaluation framework assigns different properties to automated
checks, reference comparison and expert review. Its recognition of legitimate
encoding alternatives also cautions against equating reference disagreement with
error.[^tei][^alternatives] We propose applying that distinction to complete research
artefacts. This extension is a design proposal, not a conclusion established by
the TEI work. The broader literature and its intake status are routed through the
[benchmark research map](../vault/30_assertions/MOC-Benchmark.md).

## Research questions and hypotheses

1. Does an explicit Promptotyping protocol improve successful research use after
   a requirements change and an agent-session handover, compared with ordinary
   agent-assisted working practices under comparable resource limits?
2. How do researchers detect and correct errors, preserve uncertainty and make
   justified acceptance or rejection decisions while working with an agent?
3. What additional or saved model usage, active human time and training effort
   accompany these outcomes?

The principal hypothesis is that maintained project knowledge helps preserve
consequential decisions through revision and continuation. A competing hypothesis
is that its overhead consumes the budget without improving the artefact. Both
remain open. Better documentation alone will not count as better performance.

## Task design

Every task package supplies data and their provenance, relevant domain conventions,
a research interest, researcher scenarios and observable acceptance criteria.
Participants implement the artefact, with freedom over layout and implementation
choices that do not affect comparability. Unsupported interpretations must remain
unresolved. A reference implementation demonstrates feasibility, and separately
authored expectations define what can be scored deterministically.

| Proposed task family | Data and research interest | Research artefact |
|---|---|---|
| Dating evidence, first study candidate | Real catalogue records with differing date precision; distinguish encoded month assignments from evidence needing further examination | Dating explorer with filters, original literals, source references and uncertainty |
| TEI passages, later candidate | A few short encoded texts; inspect occurrences of a defined phenomenon in their textual context | Passage explorer with source locations and explicit treatment of encoding alternatives |
| Person reconciliation, later candidate | A small local mention list and authority extract; assess which links are defensible | Review interface showing candidate matches, supporting evidence and unresolved identities |

Every study task, including the first feasibility task, must use a small, rights-
cleared extract of **real DH research data**, under the operator's explicit design
decision. Preserve source identifiers, context and uncertainty; document selection,
version and transformations. Sampling for difficult cases does not establish their
prevalence in the full collection. The [synthetic fixture](promptotyping-bench/fixtures/dating-explorer/README.md)
contains synthetic material and serves only as a tooling fixture, excluded from
benchmark results. Its research brief, policies and labels must be re-authored for
the chosen real collection. The SZD task now has its own rehearsal materials;
independent review and an executable measured study remain outstanding.

Each task has three episodes: build from the brief; revise after new research
requirements or domain information; continue in a fresh agent session with the saved project files and
new data. A session reset retains current source material in both conditions.
Transfer to another human is a separate extension.

## Comparison design

| Track | A: ordinary working practices | B: explicit Promptotyping protocol |
|---|---|---|
| Autonomous agent | Same task, sources, tools and resource ceilings; normal notes and tests permitted | Adds a compact cycle of inspecting, maintaining project knowledge, implementing, checking and writing back |
| Researcher with agent | Researcher directs, checks and accepts or rejects the work | Researcher uses the explicit protocol while retaining the same authority |

Within each track, keep the model, harness, task information and available tools
constant. Record training time and actual usage; equal ceilings do not imply equal
effort. The first comparison estimates the effect of the whole working protocol.
It will not identify the contribution of documentation independently of checking,
or establish that this compact protocol represents every Promptotyping practice.

The autonomous track evaluates delegated implementation with the expert absent
during execution. Post-run scholarly assessment remains external. It is therefore
not a complete enactment of the method's expert role. A human-only condition is
needed if a later study claims human–AI synergy relative to either actor alone;
the initial study asks the narrower workflow question.

## Evaluation and analysis

Primary outcomes are successful researcher scenarios after revision and after
continuation, reported separately. The task's scenario sheet combines observed
browser behaviour and execution on fresh policy-equivalent inputs. Automatic data
correctness supports the verdict but cannot establish a working interface.

Quality is assessed through a combination of quantitative task outcomes, ordinal
expert ratings and qualitative explanations. Formal validity alone does not
establish semantic correctness: schema-valid records may link the wrong person or
erase an uncertain date. Independently reviewed reference expectations can quantify
bounded semantic correctness, and observed task completion, errors and evidence-
finding time measure research use. Experts rate disciplinary adequacy with anchored
criteria and explain their judgements, retaining legitimate alternatives.

Secondary outcomes include source fidelity, uncertainty communication, research
usefulness, critical errors, completion, active human time and model usage. Human
oversight is assessed from observable interventions and justified decisions. A
justified rejection may demonstrate good oversight while the artefact fails.

Use the same outcome rubric across conditions. Outcome raters should be unaware
of assignment where feasible; assess method adherence separately from artefact
quality. Two raters score the human dimensions independently before adjudication,
retaining disagreements. Do not use an LLM judge as the sole scholarly authority.

The feasibility report will describe individual runs, failure modes, rater
disagreements and costs. Retain timeouts and unsuccessful outputs. Distinguish
infrastructure failures and integrity violations. Repeated runs on one task do
not create independent task families, and repeated tasks by one person do not
create independent participants. A later confirmatory study needs a prespecified
analysis, appropriate assignment and a sample-size justification.

Record timestamped model usage and immutable artefact checkpoints. Relate quality
after initial implementation, revision and continuation to cumulative input/output
tokens, monetary cost and elapsed/active human time. Repeated context and retries
count; cached and reasoning subsets must not be double-counted. Compare quality
at common ceilings and resources to a prespecified adequate-artefact threshold.
Keep evaluator overhead separate. The specification owns the detailed
[measurement protocol](../knowledge/benchmark-specification.md#measurement-protocol).

## Pilot and resources

The operator selected Stefan Zweig digital and correspondence/dating for the first
task. The [SZD rehearsal materials](promptotyping-bench/tasks/szd-correspondence/README.md) specify
a small explorer using a bounded selection from the Hannah Altmann konvolut.
The task document owns the episodes and its manifest owns the record selection.
The [source audit](../snapshots/benchmark-szd-data-audit-2026-09-05.md)
and ID manifest document the inspected version and development sample. Participant
briefs, source-preserving local packaging, an input schema and candidate research
scenarios are implemented. Collection-specific policies and expectations still
require independent domain review; metadata redistribution terms remain unresolved.
The operator accepted an approximately 60-minute author–agent rehearsal as the
first practical step, using condition B to exercise the method. It has been
prepared but not conducted. Follow it with one calibration run per condition using
one selected model/harness before freezing limits. Rehearsal and calibration runs
develop the instrument and stay outside comparative results.
Then conduct a small repeated autonomous pilot and a separate feasibility study
with four to six researchers, recording experience and any facilitator assistance.
Use this stage to test task comprehension and scoring, not to estimate a general
population effect. Recruitment beyond the method's author is necessary to examine
independent use.

The minimum team covers domain/task design, harness engineering and outcome review;
some roles may be combined, but independent review must be made visible. Required
infrastructure comprises isolated participant environments, a model adapter with
usage and budget enforcement, browser/execution evaluation, versioned artefacts
and traces, and a restricted store for participant information. The synthetic
fixture supplies workspace preparation and data grading for tooling checks. The
real SZD preparer packages inputs and checks material integrity; it does not assess
participant outputs. The measured model adapter, execution isolation and real-task
output assessment remain to be built. Participant consent, retention and recording terms
must be settled for the actual human study.

The [working specification](../knowledge/benchmark-specification.md) owns the
experimental contract. The [implementation plan](../knowledge/benchmark-plan.md)
owns sequencing, deliverables and readiness criteria. Cost estimates will follow
measured calibration rather than dataset size alone.

## Expected contribution and limits

A useful first outcome is a task that domain reviewers recognise as meaningful,
that can be run affordably, and whose scoring distinguishes sound from misleading
artefacts. Findings may support, qualify or contradict the protocol hypothesis.
The instrument can address missing comparison conditions, unmeasured effort and
limited transfer evidence. A single small DH task cannot establish general method
superiority, long-term maintainability, independent effects of each method component
or broad disciplinary transfer.

Publishable outputs would be a versioned task collection, execution and evaluation
protocol, reference artefacts, documented limitations and appropriately cleared
results. Research claims enter the Grounded Vault only through their actual source
or result records and review. The proposal itself is not evidence that the method
works, and preparing it does not change the canonical method paper.

[^confounding]: [Grounded project finding: documentation and verification effort are not separated](../vault/30_assertions/record-does-not-separate-document-depth-from-verification-effort.md), with links to the internal corpus audit. Status at drafting: grounded.
[^transfer]: [Grounded project finding: independent non-hybrid artefact production remains open](../vault/30_assertions/unassisted-non-hybrid-artefact-production-is-unsupported.md), with links to the internal transfer audit. Status at drafting: grounded.
[^tei]: [Strutz 2026 framework, checking-regime assertion and its source anchors](../vault/30_assertions/tei-evaluation-assigns-its-dimensions-to-different-checking-regimes.md). The proposed evaluation layering is our adaptation of the framework, not a reported effect on Promptotyping.
[^alternatives]: [TEI permits multiple valid encodings](../vault/30_assertions/tei-permits-several-valid-encodings-of-one-phenomenon.md), grounded in the same framework.
