---
type: distillate
source-type: document
representation: "[[00_representation/documents/szd-htr-evaluation-results-2026-06-10]]"
topics: ["[[ArtefactVerification]]", "[[Evidence]]"]
status: grounded
checked:
  validation: 2026-07-24
created: 2026-07-24
updated: 2026-07-24
---

# Distillate: SZD-HTR evaluation results, error typology (2026-06-10)

The document records the error typology of the SZD-HTR transcription pipeline together with an empirical baseline taken at an early session, and it dates its own object and review figures as historical while stating the typology as still valid.

## Core statements

- Among the Kurrent correspondence objects of the evaluation session, one transcription of a hastily written manuscript carried the reading "Langentour Kantgewalt" where the source reads "Laufenden", recorded there as an object-level nonsense error. [[00_representation/documents/szd-htr-evaluation-results-2026-06-10#^ktbl]] ^s1
- The document states that at illegible Kurrent passages the model produces real words instead of the uncertainty marker, and that marker density was therefore dropped from the automatic review trigger in a later pipeline version. [[00_representation/documents/szd-htr-evaluation-results-2026-06-10#^nons]] ^s2
- The document dates its baseline to an early session in April 2026 and marks its object and review figures as historical, pointing to the live catalogue for the current state, while presenting the error typology as continuing to hold. [[00_representation/documents/szd-htr-evaluation-results-2026-06-10#^scope]] ^s3

## Open questions

- Whether the generalisation of statement ^s2 holds beyond the session it was taken in. The document itself marks its figures as historical, so any corpus-scale statement about how often uncertainty markers appear, and about how the confidence values distribute, has to be re-derived from the current output data before it is used.

## Related

- [[10_distillates/documents/szd-htr-fair4rs-audit-2026-07-23]]
- [[20_claims/szd-htr-confabulated-reading-in-hasty-kurrent]]
