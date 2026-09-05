# SZD author-rehearsal preparation, 5 September 2026

Status: materials prepared and technically checked; no model or participant trial.
This record documents preparation, not an empirical evaluation of Promptotyping.

## Decision and scope

The operator accepted the preceding pilot recommendations with “go”. The
[benchmark plan](../knowledge/benchmark-plan.md#accepted-pilot-direction-5-september-2026)
records the accepted direction and remaining factual questions. The first rehearsal
uses condition B, the method's author and an agent, with approximately 60 minutes
planned for orientation, work and inspection. No session has been scheduled and
no model selected or invoked by the preparer.

The [task materials](../research-artefacts/promptotyping-bench/tasks/szd-correspondence/README.md)
contain initial implementation, revision and fresh-session continuation briefs,
shared interpretation policies, A/B protocols, an input schema, candidate reviewer
scenarios and a source-preserving preparer. The candidate policies and expected
outcomes await independent domain review.

## Generated local package

Local directory on the author's machine:
`C:/Users/chris/Documents/Promptotyping-Bench/szd-rehearsal-2026-09-05`.

| Location within the package | Role |
|---|---|
| `START-HERE.md` | Facilitator entry and manual transition instructions |
| `workspace/` | Initial participant working copy, with twelve records |
| `materials/initial/`, `revision/`, `continuation/` | Frozen episode inputs; four additional records held for continuation |
| `facilitator/GUIDE.md` | Candidate scenarios, rating anchors and effort recording |
| `facilitator/run-record.json` | Prepared-not-started author rehearsal, excluded from comparative results |
| `facilitator/usage.jsonl`, `interventions.jsonl` | Empty logs; automatic measurement is not implemented |
| `facilitator/check_prepared_data.py`, `preparation-check.json` | Local verification procedure and dated result |
| `package-manifest.json` | Hashes of frozen materials and designated source/facilitator files |

The preparer reads the exact committed source declared in the
[selection manifest](../research-artefacts/promptotyping-bench/tasks/szd-correspondence/source-selection.json).
Its SHA-256 is
`bb5998948e357e2ab0c64e438dda8b1aa53ea07c10602803f77636e4cfbaf2e2`.
The original XML is held with facilitator material; selected subtrees and header
are supplied to the participant. No facsimiles were copied. Directory separation
does not provide an OS sandbox. Model access restrictions, checkpoint capture and
episode transitions still need execution support or explicit manual operation.

## Verification evidence

- The preparation integrity check passed for 16 frozen files.
- All twelve initial and four continuation JSONL records passed the input schema.
- Selected XML subtrees and header matched the committed source after parsing
  and serialization; correspondence actions, people, name components, dates and
  places matched their source text and attributes in the JSON projection.
- Initial and continuation IDs are disjoint. The initial working copy matched
  its frozen inputs and contained none of the continuation IDs.
- Candidate scenarios matched the encoding: December 1939 has two within-month
  records plus one year-only overlap; five initial records have two recipients;
  May 1941 after continuation has five records and nine sender–recipient assignments.
  The questionable literal and empty name component in record 102 were retained.
  These checks do not constitute independent scholarly approval.
- Input sizes are 20,741 bytes of initial JSONL and 7,620 bytes of continuation
  JSONL. Their selected TEI files are 43,144 and 15,913 bytes respectively. These
  byte counts are not token estimates or measured provider usage.
- The combined repository, vault-tooling and benchmark suite passed 156 tests.
  Seven new tests cover source preservation, episode separation, condition parity,
  source/selection failures, material modification and output-path guards. Their
  tiny synthetic inputs are software fixtures, excluded from benchmark study data.
- The repository consistency check passed all 19 groups; external URL resolution
  was not part of that check. The SZD repository's `data/` working tree stayed clean.

The input schema checks structure. Material hashes check unchanged prepared files.
Neither checks whether a participant's resulting explorer works or supports the
research question. The first rehearsal remains to be conducted. Independent
reference review, a second reviewer, exact model/harness configuration, measured
execution, fresh evaluation probes and a documented metadata redistribution basis
remain open. No public release, paid model run or comparative result occurred.
