# Promptotyping benchmark: dating-explorer tooling fixture

**Development package 0.1.0 — synthetic tooling fixture, excluded from benchmark
study results.** The operator requires real DH research data for every study task,
including feasibility pilots. This package remains useful for checking the runner,
grader and reference interface; it is not an eligible agent or human study task.
The first real-data research activity is SZD correspondence and dating. Its
[authoring draft and source selection](../../tasks/szd-correspondence/README.md) are separate
from this fixture; the real input package, reviewed expectations and runner
integration remain to be implemented.

The fixture demonstrates implementing a small **research artefact** from research data,
context and a research interest: a browser-based dating explorer. Normalising dates
is one component. This package contains one small DH task, two working protocols, three
episodes, a reference solution, a read-only grader, a local workspace runner and
tests of the evaluation machinery. It contains no agent-performance results.

The [research proposal](../../../promptotyping-bench-proposal.md) states the study's
rationale, and the [working plan](../../../../knowledge/benchmark-plan.md) sequences
review, harness development and feasibility trials. The governing
[specification](../../../../knowledge/benchmark-specification.md) explains
the comparison, limits, literature and next steps. Start human review with the
[editorial policy](participant/policy-v1.md), the [amendment](participant/policy-v2.md),
the [research brief](participant/research-brief.md), the [24 initial records](data/initial.csv), the [six new records](data/continuation.csv)
and the [rubric](rubric.md).

## What a trial does

| Episode | Material and work | Expected output |
|---|---|---|
| initial | Research brief, 24 records, policy v1 | Working explorer, normaliser and 24 JSON records |
| revision | Same research interest; policy v2 clarifies brackets | Updated explorer and 24 JSON records |
| continuation | Fresh session, six new records, a new month of interest | Working explorer over the six new records |

Condition [A](conditions/A.md) permits normal working practices; condition
[B](conditions/B.md) adds a compact Promptotyping workflow. Both receive identical
task requirements and source material. The CLI exports only the current episode
and its inputs; it never exports the reference folder, future task files or grader.

## Local verification without model calls

Python 3.11+; standard library only. From this package directory:

```sh
python tools/bench.py selfcheck
python -m unittest discover -s tests -v
```

`selfcheck` runs the **reference** through all three episodes of both conditions in
a temporary directory. It tests packaging and scoring, makes no model calls, and
removes its own temporary outputs. Its success is not an experimental result.

For an inspectable **reference artefact**, create a fresh external preview directory:

```powershell
$pilotPreview = Join-Path $env:TEMP 'promptotyping-reference-preview-001'
python tools/bench.py preview --run-dir $pilotPreview --episode initial
python -m http.server 8897 --bind 127.0.0.1 --directory (Join-Path $pilotPreview 'workspace')
```

Open http://127.0.0.1:8897. This explicitly labelled reference preview includes the
organiser solution and must not become a participant's starting workspace. A second
fresh directory with `--episode continuation` shows the six-record continuation.

## Preparing a development run (fixture only)

These commands exercise the current package. A study run requires a reviewed
real-data task package and the isolation and usage adapter in the working plan.

Choose a fresh absolute run directory **outside this repository**. In PowerShell:

```powershell
$pilotRun = Join-Path $env:TEMP 'promptotyping-date-pilot-A-001'
python tools/bench.py prepare --run-dir $pilotRun --condition A
```

This creates `workspace/`, `state.json` and `record.json`. Point the agent at
**workspace only**, with the instruction: “Read TASK.md and PROTOCOL.md and complete
the current episode.” Choose B for the other condition. Read the isolation limits
in the specification before attaching an agent: this runner is not a sandbox.

State, run records and grades include the task identity, synthetic data origin
and `benchmark_eligible: false`. These fields come from `task.json`. The package
fingerprint includes participant inputs, protocols, data, references, rubric,
human protocol and tools. README files at this package's root, tests and other
task drafts do not affect it. Start a fresh workspace after the package-layout
and fingerprint refactor; earlier fingerprints remain incompatible.

After the agent finishes each episode, record its trace and measured usage outside
the workspace and run:

```powershell
python tools/bench.py grade --run-dir $pilotRun
python tools/bench.py advance --run-dir $pilotRun
```

`grade` writes an organiser-only report, returning 0 for a passing output and 1
for a scored failure. It reads the output; it does not execute participant code.
`advance` saves the current workspace and its grade, then supplies the next episode.
Scored task failures may advance and remain in the record. Altered supplied inputs
stop advancement as a trial-integrity problem. After revision, explicitly start a
fresh agent session for continuation, retaining workspace files but no old chat.
The runner cannot verify that reset; record it in `record.json` with trace evidence.

After continuation use `grade` and then `finish` to retain its final snapshot:

```powershell
python tools/bench.py finish --run-dir $pilotRun
```

No report or grader feedback goes to the participant before the trial ends.
`record.json` is an organiser template for model/harness identity, per-episode
usage, human interventions and separate script-execution checks. Unknown values
are null. Fill it from actual logs; do not count reference checks as agent trials.
Budget enforcement and automatic provider-usage collection require a future adapter.

## Evaluation and review

Automatic scoring compares structured properties with explicitly authored labels
in `reference/expected-*.json`. Record order, object-key order and extra explanatory
fields do not affect correctness. Record identity, original strings and required
field types do. Reference labels do not come from the normaliser during grading.

The [human protocol](human-protocol.md) and [rubric](rubric.md) are templates to
adapt to the real-data task. They keep scholarly
acceptance, method compliance and output scoring distinct. Test unseen inputs in
the isolated execution environment before claiming a reusable implementation.
The grader's data-output pass alone cannot establish this or interface usability.

## Provenance, rights and limits

The catalogue records, source identifiers and policies are synthetic material
created for this pilot with Codex assistance on 5 September 2026. They refer to no
actual holdings or people. English instructions and German date strings are fixed
experimental choices. All reference labels remain proposed until reviewed.

Code follows the repository's MIT licence; authored task text, synthetic data and
reference annotations follow CC BY 4.0. This development package is not a secret
evaluation set: any agent able to inspect the authoring repository can see answers.
External run directories, traces and participant records are not published here.
