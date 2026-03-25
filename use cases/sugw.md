---
type: use-case
tags: [promptotyping, digital-edition, original]
status: complete
created: 2025-11-01
repository: https://github.com/chpollin/db_for_medieval_legal_transactions
demo: https://stadtgemeinschaftwien.univie.ac.at/datenbank_test/
---

# Use Case: Stadt und Gemeinschaft Wien (SUGW) -- [[Agentic Edition Workflow]]

## Summary

Agentic Edition Workflow for the prosopographic database of medieval Viennese legal transactions (Stadt und Gemeinschaft Wien). The repository contains ~6,400 TEI-XML documents (5,715 marked as done) and 203,475 CSV data rows. The pipeline comprises 14 transformers and 2 validators, with 381 regression tests. The edition is rendered through Jinja2 templates and deployed as a static frontend.

The project demonstrates a specific form of Promptotyping: Claude Code navigates the repository, reads knowledge documents, executes validation, fixes errors, updates registers and commits changes. The agent functions as an editorial interface -- the researcher asks questions ("Where is the Relax NG?") and the agent answers by reading the repository. Deterministic validation (Relax NG) is combined with LLM-assisted error analysis. Interpretive limits are explicitly maintained: person identification across documents is excluded from LLM processing. Commit-based workflow makes editorial responsibility traceable.

A major refactor from XSLT to Python/lxml is documented in JOURNAL.md across 22+ sessions. Bug discovery occurred through the workflow itself: hardcoded collection paths were exposed when a new subcollection was added. Video documentation is available (March 2026).

- Repository: [github.com/chpollin/db_for_medieval_legal_transactions](https://github.com/chpollin/db_for_medieval_legal_transactions)
- Demo: [stadtgemeinschaftwien.univie.ac.at/datenbank_test](https://stadtgemeinschaftwien.univie.ac.at/datenbank_test/)
- Scope: ~6,400 TEI-XML documents, 203,475 CSV rows
- Tests: 381 regression tests

## LLMs und Tools

- Claude Opus 4.6 (Claude Code)

## Notizen zum Prozess

- Repository structure: knowledge/ (8 docs), sources/ (~6,400 TEI-XML), pipeline/ (14 transformers + 2 validators), edition/ (Jinja2 rendering), docs/ (frontend)
- 381 regression tests
- Agentic Edition Workflow: Claude Code navigates repository, reads knowledge docs, executes validation, fixes errors, updates registers, commits changes
- Claude Code as editorial interface: human asks questions, agent answers by reading the repository
- Deterministic validation (Relax NG) combined with LLM-assisted error analysis
- Bug discovery through workflow: hardcoded collection paths exposed by adding new subcollection
- Interpretive limits explicitly maintained: person identification across documents excluded from LLM processing
- Commit-based workflow makes editorial responsibility explicit
- JOURNAL.md with 22+ sessions, major refactor from XSLT to Python/lxml documented
- Video documentation available (March 2026)

## Promptotyping Documents

- architecture.md (K) -- ER model (79 nodes, 103 edges), 3 processing paths
- data.md (K) -- XML structure, data quality baseline
- design.md (K/A) -- Edition UI, annotation colours
- edition.md (K) -- HTML rendering, Jinja2 templates
- plan.md (A) -- Implementation checklist
- ui.md (K) -- Frontend components, facsimile viewer
- visualization.md (K) -- Register pages, statistics dashboard
- journal.md (P) -- Sessions 1-22b

## Use Case Type

Workflow construction

## Related

- [[Agentic Edition Workflow]]
- [[Promptotyping]]
- [[Context Engineering]]
- [[Critical-Expert-in-the-Loop]]
- [[SuGW – Strategisches Wissensdokument]]

## Sources

- Stadt und Gemeinschaft Wien. GitHub Repository: https://github.com/chpollin/db_for_medieval_legal_transactions
- Stadt und Gemeinschaft Wien. Demo: https://stadtgemeinschaftwien.univie.ac.at/datenbank_test/
