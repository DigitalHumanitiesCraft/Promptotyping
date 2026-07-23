---
type: distillate
source-type: publication
reference: fischer-2025
topics: ["[[Method]]"]
status: grounded
checked:
  quote: 2026-07-23
  validation: 2026-07-23
created: 2026-07-23
updated: 2026-07-23
---

# Distillate: Semi-automatic cataloguing of image cards (Fischer / Kimmel / Puppe 2025)

The report extracts structured text from labelled archival image cards with two methods, a classical deep-learning pipeline and multimodal LLMs, and pairs the LLM output with deterministic regular-expression post-checks and an expert correction tool; it is the paper's Section 6.2 GLAM example of layered verification, where a non-deterministic extraction step is bracketed by deterministic checks and human review.

## Core statements

- Two methods were tested, a classical deep-learning pipeline and large language models such as GPT-4o, with the LLMs handling the varying card structures better and automated pre- and post-processing lifting recognition rates above 90 %. ^s1
  > "a classical deep learning pipeline and large language models (LLMs) such as GPT-4o. Both approaches achieved good results, with the LLMs being better able to deal with the different structures of the record cards. With automated pre– and post-processing, we achieved recognition rates of over 90 %." (fischer-2025, abstract)
- The category-value pairs are not extracted from the LLM output by the LLM itself, which lowered quality, but by several regular grammars defined per category word and applied to the GPT-4o output. ^s2
  > "Stattdessen wurden für jedes Kategorie-Wort mehrere reguläre Grammatiken definiert, die auf die Ausgabe von GPT-4o angewandt werden." (fischer-2025, § 24)
- Because inventory numbers have an exactly prescribed structure, regular expressions are used to check whether these numbers are correctly assigned to their categories, and to move them when they are not. ^s3
  > "Da diese eine exakt vorgegebene Struktur haben, werden reguläre Ausdrücke verwendet, um festzustellen, ob diese Nummern den entsprechenden Kategorien korrekt zugeordnet werden." (fischer-2025, § 25)
- A purpose-built correction tool shows each card next to its extracted fields, which an expert can then manually check for consistency, adjust or delete, and complete with missing entries. ^s4
  > "Diese können dann manuell auf Konsistenz geprüft und ggf. angepasst bzw. gelöscht werden und fehlende Einträge hinzugefügt." (fischer-2025, § 28)

## Terms

- **wissensbasierte Nachbearbeitung**: knowledge-based post-processing that corrects typical extraction errors with regular expressions and a growing name database. [[10_distillates/publications/fischer-2025-bildkarten#^s3]]

## Open questions

- The report treats a bounded cataloguing task with fixed category schemas; it does not generalise the layered-check pattern into a method, which is the paper's reading of it.

## Related

- [[20_claims/glam-practice-layers-llm-extraction-with-deterministic-checks-and-expert-review]]
