---
type: use-case
tags: [promptotyping, data-modeling, original]
status: complete
created: 2025-09-01
repository: https://github.com/DigitalHumanitiesCraft/m3gim
demo: https://dhcraft.org/m3gim
---

# Use Case: M3GIM -- Mapping Mobile Musicians

## Summary

Digital collection and multi-view exploration of the Ira Malaniuk archive at KUG Graz. The project models archival data from the university archive (UAKUG/NIM) in RiC-O/JSON-LD and renders it through an 8-tab exploration interface. 171 Wikidata reconciliation matches link the archive to external authority data. The data model operates on three layers: RiC-O 1.1, m3gim-specific extensions and the partitur.json schema. Seven scripts implement a 5-stage data flow from XLSX to JSON-LD to rendered views.

The knowledge/ folder contains 8 documents plus a journal appendix. 49 decisions (E-01 to E-49) are documented in entscheidungen.md. The exploration interface comprises 8 tabs: Archiv, Indizes, Mobilitat, Matrix, Kosmos (network), Zeitfluss (temporal), Korb (basket) and an entry point view. A pre-refactor archive preserves 12 old-format documents. The data model was still evolving during capture -- the interface revealed model gaps that would otherwise have remained hidden. Researchers learn about modelling decisions through the visualisations, not through documentation alone.

The project is funded by Stadt Graz and the Mariann Steegmann Foundation. Session 25 (2026-03-19) involved a redesign and entry point refactor.

- Repository: [github.com/DigitalHumanitiesCraft/m3gim](https://github.com/DigitalHumanitiesCraft/m3gim)
- Demo: [dhcraft.org/m3gim](https://dhcraft.org/m3gim)
- Scope: RiC-O/JSON-LD archival data, 171 Wikidata matches
- Decisions: 49 documented (E-01 to E-49)

## LLMs und Tools

- Claude Opus 4.6 (Claude Code)
- Claude Sonnet 4.5

## Notizen zum Prozess

- 8 knowledge documents in centralized knowledge/ folder + journal appendix
- 49 documented decisions (E-01 to E-49)
- 3-layer data model: RiC-O 1.1 + m3gim extensions + partitur.json schema
- 7 scripts, 5-stage data flow (XLSX to JSON-LD to Views)
- 8-tab exploration interface: Archiv, Indizes, Mobilitat, Matrix, Kosmos (network), Zeitfluss (temporal), Korb (basket)
- Data model still evolving during capture -- interface reveals model gaps
- Researchers learn about modelling decisions through visualisation
- Pre-refactor archive: 12 old-format documents preserved in _archive/
- Session 25 (2026-03-19): Redesign + entry point refactor
- Funded by Stadt Graz + Mariann Steegmann Foundation

## Promptotyping Documents

- README.md (K) -- KB navigation
- forschung.md (K) -- Research framework, 5 mobility types, FF1-FF4
- datenmodell.md (K) -- 3-layer model, RiC-O + extensions
- pipeline.md (K/A) -- 7 scripts, 5-stage data flow
- frontend.md (K) -- Runtime model, 7 modules
- visualisierungen.md (K) -- 7 views, layer architecture
- entscheidungen.md (P) -- E-01 to E-49 decisions
- projekt-status.md (K/P) -- Project card, implementation status
- appendices/journal-volltext.md (P) -- Full work journal

## Use Case Type

Data modelling and capture

## Related

- [[Promptotyping]]
- [[Context Engineering]]
- [[Information Visualization]]
- [[Scholar-Centered Design]]

## Sources

- M3GIM. GitHub Repository: https://github.com/DigitalHumanitiesCraft/m3gim
- M3GIM. Live Demo: https://dhcraft.org/m3gim
