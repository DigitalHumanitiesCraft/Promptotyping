# A dating explorer: initial episode

Implement a small research artefact for the research interest and user stories in
`sources/research-brief.md`: a dating explorer over a synthetic correspondence
catalogue. Researchers need to inspect which catalogue records can be firmly placed
in a chosen month and which require further source examination. Build from
`data/dates.csv` and `sources/editorial-policy.md`.

## Deliverables and interface

Create `index.html` and any local CSS/JavaScript it needs. It must run when the
workspace is served using `python -m http.server`, without a build step, external
libraries or remote requests. It reads `output/normalized.json` and supports the
researcher scenarios in the brief. Also create `normalize.py`, runnable with Python
3.11+ and its standard library:

`python normalize.py --input data/dates.csv --output output/normalized.json --policy sources/editorial-policy.md`

The script must accept another input CSV with the same columns and documented date
forms. Create output directories when needed. Input is UTF-8 CSV with columns
`record_id`, `collection`, `date_literal`, `source_ref`. IDs are unique; collection
is `letter` or `register`. Preserve supplied files and their original bytes.

Output is a UTF-8 JSON array containing exactly one object per input ID. Each object
has these required fields; order and extra explanatory fields are unrestricted:

| Field | Type and meaning |
|---|---|
| record_id | string, exactly the input ID |
| date_literal | string, exactly the input string including spaces |
| source_ref | string, exactly the input reference |
| collection | string, exactly the input collection |
| date_value | string YYYY, YYYY-MM or YYYY-MM-DD, or null |
| precision | day, month, year, or unknown |
| certainty | certain, approximate, uncertain, or unknown |
| status | normalized, missing, invalid, or ambiguous |
| reason | direct, approximate, questioned, editorial_supplied, missing, invalid_calendar, or unresolved |

Use the policy for all classifications. Missing, invalid and ambiguous outputs
have null `date_value` and unknown precision/certainty. No record may disappear.

Inspect and test the artefact and its transformations. You may create notes and tests. Do not use network
services, install packages, or infer historical facts beyond the supplied material.
If a decision is unsupported, retain the unresolved state the policy specifies.
Read PROTOCOL.md for your working protocol. Finish with a brief account of checks
performed and remaining limitations. A final message does not replace output files.
