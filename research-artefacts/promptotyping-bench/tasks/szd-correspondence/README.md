# SZD correspondence explorer: local rehearsal materials

The operator accepted the pilot recommendations on 5 September 2026: a small
SZD correspondence task, an author–agent rehearsal, and then a controlled
same-model comparison. The source selection is accepted for development;
independent domain review and study readiness remain open. No model or participant
trial has been executed by the preparer.

The research activity is to locate and compare contacts involving Stefan and Lotte
Zweig in selected Hannah Altmann correspondence descriptions, while preserving
temporal precision, multiple participants and limits of the evidence.

## Owning files

| Material | Owner |
|---|---|
| Initial research task and required artefact | [participant/TASK.md](participant/TASK.md) |
| Source projection and rehearsal interpretation policy | [participant/DATA.md](participant/DATA.md) |
| Research-driven change | [participant/REVISION.md](participant/REVISION.md) |
| Additional data and session continuation | [participant/CONTINUATION.md](participant/CONTINUATION.md) |
| Ordinary and Promptotyping working protocols | [A](conditions/A.md), [B](conditions/B.md) |
| Exact source, selected IDs and extraction contract | [source-selection.json](source-selection.json) |
| Input record structure | [record.schema.json](record.schema.json) |
| Facilitator procedure and candidate assessment expectations | [review/GUIDE.md](review/GUIDE.md) |
| Export and material-integrity check | [tools/prepare_rehearsal.py](tools/prepare_rehearsal.py) |

The [source audit](../../../../snapshots/benchmark-szd-data-audit-2026-09-05.md)
records the original inspection. The shared
[benchmark specification](../../../../knowledge/benchmark-specification.md) owns
comparison and measurement; the [plan](../../../../knowledge/benchmark-plan.md)
owns current readiness. The synthetic fixture has its own inputs and policies;
its grader is not used for this task.

## Prepare a local package

Python 3.11+ and Git are required. The preparer uses the standard library and reads
the pinned Git blob, so local line-ending conversion or a later working-tree edit
does not change its source silently. Choose a fresh absolute output directory
outside both the Promptotyping repository and the SZD source repository:

```powershell
python research-artefacts/promptotyping-bench/tasks/szd-correspondence/tools/prepare_rehearsal.py prepare --source-repo C:/path/to/SZD --output C:/local-runs/szd-rehearsal --condition B
python research-artefacts/promptotyping-bench/tasks/szd-correspondence/tools/prepare_rehearsal.py verify --output C:/local-runs/szd-rehearsal
```

The package contains `START-HERE.md`, frozen episode `materials/`, an initial
`workspace/` with the 12 records, and `facilitator/` with candidate expectations,
provenance and empty run/usage/intervention records. Four additional records are
held with the continuation materials outside the initial workspace. Both working
conditions receive identical facts and inputs; only `PROTOCOL.md` differs.

The JSONL projection preserves source strings and every person/action. The fuller
selected TEI is available on demand, and the exact original source blob is retained
for facilitator inspection. No facsimile image is copied. Original and projected
files have recorded hashes. The integrity command checks frozen material, not
participant outputs, scholarly correctness or the current working copy after edits.

The schema describes the input record structure; an independent JSON Schema
validator such as `jsonschema` can check each JSONL line. It is not an output-quality
rubric. Human review must assess the interpretation and working research artefact.

## Run and assess the rehearsal

Begin with the accepted author–agent rehearsal, using protocol B to exercise the
method. The approximately 60-minute session is a calibration allowance; preparation
and reference authoring happen beforehand. Follow the facilitator guide for manual
checkpoints, episode transitions, independent ratings and source-linked scenarios.
Record the chosen model/harness before starting. Other reviewers have not yet been
identified, and no appointment has been scheduled by this package.

Folder separation does not provide an OS sandbox. The participant must receive
only the current workspace, and actual trials require the isolation and measured
harness in the shared plan. Token and intervention logs are templates awaiting
real observations; the preparer makes no model calls and captures no provider usage.
Author rehearsals and exposed development examples are excluded from comparative
results. Public redistribution of the selected metadata is still unresolved.

## Tool verification

From the repository root:

```sh
python -m unittest discover -s research-artefacts/promptotyping-bench/tasks/szd-correspondence/tests -v
```

The software unit tests use explicitly synthetic XML to test preservation of
multiple recipients, empty labels and awkward literals; future-input separation;
source-hash and ID checks; condition parity; and frozen-material integrity.
Those fixtures are not benchmark study data. The real local export is checked
separately against the pinned SZD source and the input schema.
