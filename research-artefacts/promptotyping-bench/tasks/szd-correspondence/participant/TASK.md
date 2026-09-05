# Build a small SZD correspondence explorer

This is a developmental rehearsal using authentic catalogue metadata from Stefan
Zweig digital. Its research question is: which contacts involving Stefan and Lotte
Zweig can be located in the selected descriptions, when can they be placed, and
what limits those statements?

Read `PROTOCOL.md` for your working protocol and `DATA.md` for source structure and
the rehearsal's interpretation rules. `data/initial.jsonl` contains the initial
records, one JSON object per line. `sources/initial.xml` contains their fuller TEI
descriptions and source header. `SOURCE.json` identifies the exact source version.

Implement a locally usable browser artefact with:

- a list of the supplied records and filters for month and person;
- an evidence view showing all senders and recipients, original date wording,
  encoded date, annotations, source ID, archival signature and source PID;
- distinct presentation of dates placed within the chosen month and coarser dates
  that only overlap it; incomplete or conflicting representations remain visible;
- a JSON export of the data used by the interface, with source and derived fields
  distinguishable, plus short launch and use instructions in `README.md`.

Use `index.html` as the browser entry point. No specific framework or layout is
required. Do not rely on live APIs or fetch the full SZD dataset. Source links are
evidence pointers; access to facsimiles is not required for this metadata task.
Only the supplied records belong to the sample. Keep input files intact and write
derived data to a separate output file.

A researcher must be able to compare the December 1939 entries, find records
involving Lotte Zweig, explain how a year-only date affects month filtering, and
inspect the evidence for any uncertain or incomplete attribution. Report what is
working, what was checked and any remaining limitations. Later requests may add
research uses and records; preserve earlier working behaviour when extending it.
