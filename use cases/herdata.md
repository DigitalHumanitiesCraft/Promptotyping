---
type: use-case
created: 2025-06-01
tags: [promptotyping, digital-humanities, original]
status: complete
project: HerData
repository: https://github.com/chpollin/HerData
demo: https://chpollin.github.io/HerData
---

# HerData - Women in Goethe's Correspondence

## Summary

HerData is a semantic enrichment and visual exploration tool for women mentioned in Goethe's correspondence. The project processes TEI/Wikidata-linked metadata across 1,793 letters, identifying 448 women at 227 georeferenced locations. An interactive map built with MapLibre provides coordinated filters for role, occupation, time period, network type and place type, enabling gender-focused network analysis across family, professional, social and correspondence dimensions.

A distinctive feature is the epistemological onboarding: a "Map Bias" section explicitly teaches users about data completeness and representation limits before they interact with the visualisations. The 4-stage pipeline moves from metadata reconciliation through NER and enrichment to narrativisation. HerData was developed with a full Promptotyping vault and is in completion phase, awaiting publication release.

- Repository: [github.com/chpollin/HerData](https://github.com/chpollin/HerData)
- Demo: [chpollin.github.io/HerData](https://chpollin.github.io/HerData)
- Scope: 1,793 letters, 448 women, 227 georeferenced locations

## LLMs und Tools

- Claude Opus 4.5 (Claude Code)

## Notizen zum Prozess

- 4-stage pipeline: metadata reconciliation, NER, enrichment, narrativisation
- Interactive map (MapLibre) with coordinated filters: role, occupation, time period, network type, place type
- Epistemological onboarding: "Map Bias" section teaches users about data completeness and representation limits
- Gender-based network analysis across four dimensions: family, professional, social, correspondence
- Full Promptotyping vault with six knowledge and process documents
- Project in completion phase (awaiting publication release)

## Promptotyping Documents

- data.md (K) -- Data structure and sources
- requirements.md (K) -- User stories
- design.md (K/A) -- Visual design and interaction
- wireframe.md (K) -- Layout specifications
- decisions.md (P) -- Decision log
- technical-architecture.md (K/A) -- System architecture

## Use Case Type

Data exploration

## Related

- [[Promptotyping]]
- [[Context Engineering]]
- [[Scholar-Centered Design]]

## Sources

- HerData. GitHub Repository: https://github.com/chpollin/HerData
- HerData. Live Demo: https://chpollin.github.io/HerData
