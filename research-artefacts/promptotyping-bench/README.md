# Promptotyping Bench

This is the authoring area for a proposed evaluation of small DH research artefacts.
Every study task must use real research data. No agent or participant study has
been conducted. Executable tools cover a synthetic fixture and local preparation
of the real SZD rehearsal materials.

| Area | Purpose | Current state |
|---|---|---|
| [tasks/szd-correspondence](tasks/szd-correspondence/README.md) | First real-data task: explore correspondence and dating in Stefan Zweig digital | Participant materials, schema, local preparer and review guide available; independent review and measured harness pending |
| [fixtures/dating-explorer](fixtures/dating-explorer/README.md) | Synthetic input, reference artefact, runner and grader for testing the evaluation machinery | Executable tooling fixture; excluded from study results |

## Where each decision lives

- [Research proposal](../promptotyping-bench-proposal.md): rationale, research questions and intended contribution.
- [Benchmark specification](../../knowledge/benchmark-specification.md): comparison, measurement, shared evaluation requirements and resource policy.
- [Implementation plan](../../knowledge/benchmark-plan.md): readiness, milestones and next work.
- Each task's README: its research activity, collection-specific rules and scenarios.
- Each task's source manifest: exact source version, selected record IDs and packaging status.
- [SZD source audit](../../snapshots/benchmark-szd-data-audit-2026-09-05.md): dated inspection evidence, kept distinct from current operational state.
- [SZD preparation record](../../snapshots/benchmark-szd-rehearsal-preparation-2026-09-05.md): generated local rehearsal materials and technical input checks.

Maintain a decision in its owning document and link to it elsewhere. The synthetic
fixture's policies and executable checks do not define the SZD task. The current
runner is specific to that fixture; a shared harness should follow the real task's
requirements once its input and assessment contract have been reviewed.

## Check the existing tooling

From the repository root, with Python 3.11 or later:

```sh
python research-artefacts/promptotyping-bench/fixtures/dating-explorer/tools/bench.py selfcheck
python -m unittest discover -s research-artefacts/promptotyping-bench/fixtures/dating-explorer/tests -v
```

These checks make no model calls. Run records and grading reports carry their task
identity, data origin and `benchmark_eligible: false`. The fixture fingerprint
covers task inputs, assessment material and executable tooling; unrelated task
drafts, README edits and test files do not invalidate a prepared run. Changes to
inputs, reference expectations, protocols or scoring code do invalidate it.

Create fresh fixture workspaces after this layout/fingerprint change; earlier
workspace fingerprints are intentionally incompatible. Use the fixture README
for preview and lifecycle commands. Study isolation, usage collection and budget
enforcement are still to be built under the implementation plan.
