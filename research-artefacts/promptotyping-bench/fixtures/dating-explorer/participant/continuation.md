# Dating explorer: continuation episode

This episode starts in a fresh session with the retained project files and no prior
conversation. Read CONTRACT.md, PROTOCOL.md, current sources and any project notes.
`data/continuation.csv` contains six new records under the same current policy.

The researcher's month of interest is now **February 1832**. Use or repair the
existing artefact and normaliser to produce `output/normalized.json` for these
six records only:

`python normalize.py --input data/continuation.csv --output output/normalized.json --policy sources/editorial-policy.md`

Make the explorer open with February 1832 selected and display the six new records
with working month/group controls. Original files remain available. Explain any repairs briefly and identify remaining
limitations. The output must obey the same record schema and provenance requirements.
