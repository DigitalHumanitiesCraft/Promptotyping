---
type: use-case
created: 2025-12-01
tags: [promptotyping, literature, original]
status: complete
project: FemPrompt SozArb
repository: https://github.com/chpollin/FemPrompt_SozArb
demo: https://chpollin.github.io/FemPrompt_SozArb/
---

# FemPrompt SozArb - Systematic Literature Review Infrastructure

## Summary

FemPrompt SozArb is a systematic literature review on AI literacy and LLM bias in social work, built around a 5-stage LLM pipeline. The project processed 326 academic papers and produced an Obsidian vault of 505 Markdown files (248 papers, 136 concepts, 111 divergence analyses). The pipeline separates AI-assisted stages (identification, extraction) from a strictly deterministic analysis phase, with verification points after each AI-assisted step.

The core methodological contribution is the dual assessment design: human experts and an LLM independently evaluated papers using an identical 10-category schema. This produced measurable epistemic asymmetry (68% LLM inclusion rate vs. 42% human inclusion rate), quantified through confusion matrices and kappa statistics. The divergence analysis is not a byproduct but a primary research output.

The Evidence Companion web interface provides three views for navigating the review infrastructure: Korpus (326 papers, searchable and filterable), Wissensnetz (136-node concept network), and Bewertungsvergleich (human-LLM divergence analysis). The repository itself is treated as epistemic infrastructure, with a dedicated paper in preparation. A CLAUDE.md configures a 3-layer architecture spanning vault, web interface, and paper. Paper deadline: Forum Wissenschaft 2/2026, May 4, 2026.

## LLMs und Tools

- OpenAI Deep Research, Google Deep Research, Perplexity Deep Research, Claude Deep Research (identification phase)
- Gemini (knowledge extraction)
- Claude (assessment)

## Notizen zum Prozess

- 5-stage pipeline: Identification (4 Deep Research systems + manual expert augmentation) -> PDF metadata verification -> Knowledge extraction (3-stage: semantic decomposition -> standardized summary -> verification against original) -> Dual assessment (human experts in Google Sheets + LLM independently, identical 10-category schema) -> Deterministic synthesis in web environment
- Evidence Companion: web interface with 3 views -- Korpus (326 papers, searchable/filterable), Wissensnetz (136 concept network), Bewertungsvergleich (human-LLM divergence analysis with confusion matrices, kappa statistics)
- Epistemic asymmetry: 68% LLM inclusion vs 42% human inclusion rates
- Verification points after each AI-assisted step (human or rule-based)
- No LLM involvement in the analysis phase -- deterministic only
- Repository itself treated as epistemic infrastructure (dedicated paper in preparation)
- Sycophancy mitigation: negative constraints in prompts, calibration items, prompt versioning
- CLAUDE.md configures 3-layer architecture (Vault, Web Interface, Paper)

## Promptotyping Documents

- CLAUDE.md (A) -- Agent configuration, 3-layer architecture
- knowledge/journal.md (P) -- Work log
- pipeline/knowledge/distilled/ (K) -- 249+ extracted knowledge documents
- assessment/ with README.md (K) -- Dual assessment documentation
- benchmark/ with README.md (A) -- Benchmark script documentation

## Use Case Type

Literature review infrastructure.

## Related

- [[Promptotyping]]
- [[Epistemic Infrastructure]]
- [[Critical-Expert-in-the-Loop]]
- [[Asymmetric Amplification]]

## Sources

- FemPrompt SozArb. GitHub Repository: https://github.com/chpollin/FemPrompt_SozArb
- FemPrompt SozArb. Evidence Companion: https://chpollin.github.io/FemPrompt_SozArb/
