---
type: use-case
tags: [promptotyping, digital-edition, original]
status: complete
created: 2026-01-29
repository: https://github.com/chpollin/zbz-ocr-tei
---

# Use Case: ZBZ OCR-TEI Pipeline (Jeanne Hersch Estate)

## Summary

LLM-assisted OCR and TEI pipeline for the Jeanne Hersch estate at the Zentralbibliothek Zurich. The pipeline processes 286 PDF scans (~4,150 pages) of French, German and English texts across diverse document types (monographs, journals, collected volumes) into validated TEI-XML following the DTA base format. 285 of 286 documents have been processed. The pipeline runs through nine stages: PDF to images, OCR, layout analysis, PAGE-XML conversion, NER with Wikidata linking, TEI-XML generation, quality screening, and curation.

The project is the most extensive Promptotyping case study to date in terms of scale, tool integration and documentation density. A centralized knowledge/ folder contains 16 documents that configure the entire agent layer, including CLAUDE.md, CLAUDE-COMMANDS.md and Promptotyping-Tools.md. No Python script was manually written or reviewed by the author. All code was generated, tested and committed by Claude Code operating against the knowledge documents. OCR cost for the full corpus was below 10 EUR via Azure. The repository contains 128 git commits accumulated over approximately six weeks of intermittent work.

A defining feature is the construction of Promptotyping Interfaces: viewer.html provides multi-source OCR comparison, layout overlay and TEI rendering; additional interfaces include a benchmark dashboard, an edition reader and a browser-based Curation Editor. These interfaces serve both human editors and AI agents (multimodal self-evaluation). Agent-based quality screening operates through Claude Code sub-agents that use repository scripts as tools. Knowledge documents were curated through prompts, not manually edited. Video documentation is available.

- Repository: [github.com/chpollin/zbz-ocr-tei](https://github.com/chpollin/zbz-ocr-tei)
- Status: Pipeline productive (285/286 docs processed)
- Scope: 286 PDFs, ~4,150 pages, French/German/English
- Commits: 128
- Duration: ~6 weeks intermittent

## LLMs und Tools

- Claude Opus 4.6 (Claude Code) -- agent layer, code generation, quality screening, knowledge curation
- Mistral Document AI (OCR via Azure)
- Gemini 3.1 Flash Lite -- OCR correction, layout QA, NER, TEI annotation

## Notizen zum Prozess

- 9-stage pipeline: PDF to Images to OCR to Layout to PAGE-XML to NER/Wikidata to TEI-XML to Quality Screening to Curation
- 16 knowledge documents in centralized knowledge/ folder
- CLAUDE.md + CLAUDE-COMMANDS.md + Promptotyping-Tools.md configure the agent layer
- JOURNAL.md with 30+ sessions (January to March 2026)
- DECISIONS.md with 13+ decisions and rationales
- No Python script was manually written or reviewed by the author
- Verification through Promptotyping Interfaces: viewer.html (multi-source OCR comparison, layout overlay, TEI rendering), benchmark dashboard, edition reader, Curation Editor
- Interfaces built for both human editors and AI agents (multimodal self-evaluation)
- Agent-based quality screening: Claude Code sub-agents use repository scripts as tools
- Knowledge documents curated through prompts, not manually edited
- OCR cost: <10 EUR for 4,150 pages via Azure
- DTA base format with Relax NG validation
- Video documentation available

## Promptotyping Documents

- INDEX.md (K) -- MOC, document dependencies
- PROJEKT.md (K) -- Project scope, milestones
- PIPELINE.md (K/A) -- Data flow, scripts
- QUELLENANALYSE.md (K) -- Material analysis, 4 document types
- ENGINES.md (K) -- OCR/layout tools comparison
- TEI-MAPPING.md (K) -- TEI encoding rules, DTA base format
- GND-STRATEGIE.md (K) -- Entity linking (Wikidata/GND)
- TESTPLAN.md (K/A) -- Quality metrics, CER/WER
- INFRASTRUKTUR.md (K) -- Azure, Podman, CI/CD
- DECISIONS.md (P) -- 13+ decisions with rationales
- ZBZ-WORKFLOW.md (K) -- Editorial workflow
- EDITION.md (K) -- Digital edition architecture
- DESIGN.md (K) -- Design system (EB Garamond, Jost)
- CURATION.md (K/A) -- Browser-based TEI curation editor
- PLAN.md (A) -- Implementation phases
- JOURNAL.md (P) -- 30+ session work log
- CLAUDE.md (A) -- Agent configuration
- CLAUDE-COMMANDS.md (A) -- 6 invocable commands
- Promptotyping-Tools.md (A) -- Methodology for agent

## Use Case Type

Data production + Workflow construction + Data exploration

## Related

- [[Promptotyping]]
- [[Context Engineering]]
- [[Critical-Expert-in-the-Loop]]
- [[Epistemic Infrastructure]]
- [[Asymmetric Amplification]]

## Sources

- ZBZ OCR-TEI. GitHub Repository: https://github.com/chpollin/zbz-ocr-tei
