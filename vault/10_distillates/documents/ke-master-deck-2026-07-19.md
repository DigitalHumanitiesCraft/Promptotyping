---
type: distillate
source-type: document
representation: "[[00_representation/documents/ke-master-deck-2026-07-19]]"
topics: ["[[Concepts]]"]
status: grounded
checked:
  validation: 2026-07-19
created: 2026-07-19
updated: 2026-07-19
---

# Distillate: Knowledge und Context Engineering deck, LLM-characterisation slide

The master workshop deck characterises LLMs on one slide as a "Jagged Alien Intelligence", and its slide text plus speaker notes fix the components, the named coinages, and the practice consequence the vault records for the Concepts topic.

## Core statements

- The deck's slide labels LLMs as "Jagged Alien Intelligence" and lists the components it associates with that label, unstable arithmetic, spelling and counting, a statistical, confabulating, biased, black-box method, tool-use, the context window as attention span, a knowledge cut-off without continual learning, reasoning as thinking tokens, sycophancy, and the LeCun quote that every cat is smarter than an LLM. [[00_representation/documents/ke-master-deck-2026-07-19#^slide]] ^s1
- The deck defines the jagged-alien term as the finding that strength and weakness lie unpredictably next to each other in LLMs, and traces it to Mollick and co-authors 2023 (jagged frontier), Karpathy 2024 (jagged intelligence), and Summerfield on the alienness of the error distribution, from which it derives the need for curated context and verification. [[00_representation/documents/ke-master-deck-2026-07-19#^jag]] ^s2
- The deck attributes the unreliability of arithmetic, spelling and counting to these operations running at token level, and cites Anthropic's 2025 attribution-graph work as showing that the model adds internally via parallel heuristics while reporting the written calculation method, so its self-report does not describe its actual computation. [[00_representation/documents/ke-master-deck-2026-07-19#^tok]] ^s3
- The deck groups statistical processing, confabulation, bias and black-box character as properties of the underlying method, defines "reasoning" as the generation of thinking tokens, that is additional sampling compute rather than verified inference, and defines sycophancy as the tendency to confirm user assessments instead of contradicting them. [[00_representation/documents/ke-master-deck-2026-07-19#^clu]] ^s4
- The deck marks tool-use, context window and knowledge cut-off as system properties rather than capability jags, names tool-use as the first remedy that compensates some of the named weaknesses, and frames compensating model weaknesses through the environment as the harness argument. [[00_representation/documents/ke-master-deck-2026-07-19#^sys]] ^s5

## Terms

- **Jagged Alien Intelligence**: the deck's label for the finding that strength and weakness lie unpredictably next to each other in LLMs and that the errors fall where human errors would not. [[00_representation/documents/ke-master-deck-2026-07-19#^jag]]
- **Sycophancy**: as the deck uses it, the tendency of LLMs to confirm a user's assessment rather than contradict it. [[00_representation/documents/ke-master-deck-2026-07-19#^clu]]

## Open questions

- The slide-text export is a working draft snapshot; the deck states the characterisation for teaching without reporting its own empirical study, so the claims record what the material asserts and dates, never whether the characterisation holds of LLMs.

## Related

- [[20_claims/deck-characterises-llms-as-jagged-alien]]
- [[20_claims/deck-derives-context-and-verification-from-llm-profile]]
