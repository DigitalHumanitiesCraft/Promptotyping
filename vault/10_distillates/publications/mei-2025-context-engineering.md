---
type: distillate
source-type: publication
reference: mei-2025
topics: ["[[Concepts]]"]
status: grounded
checked:
  quote: 2026-07-23
  validation: 2026-07-23
created: 2026-07-23
updated: 2026-07-23
---

# Distillate: A Survey of Context Engineering for LLMs (Mei et al. 2025)

The survey that formalises Context Engineering as a discipline and supplies the paper's definition of the term in Section 2.1 and Section 1; Promptotyping is positioned as a domain-specific instance of it.

## Core statements

- The survey introduces Context Engineering as a formal discipline that goes beyond prompt design to the systematic optimisation of the information payload given to an LLM. ^s1
  > "This survey introduces Context Engineering, a formal discipline that transcends simple prompt design to encompass the systematic optimization of information payloads for LLMs." (mei-2025, Abstract)
- Its premise is that model performance is fundamentally set by the contextual information supplied at inference. ^s2
  > "The performance of Large Language Models (LLMs) is fundamentally determined by the contextual information provided during inference." (mei-2025, Abstract)
- It decomposes the field into three foundational components: context retrieval and generation, context processing, and context management. ^s3
  > "We first examine the foundational Components: (1) Context Retrieval and Generation, encompassing prompt-based generation and external knowledge acquisition; (2) Context Processing, addressing long sequence processing, self-refinement, and structured information integration; and (3) Context Management, covering memory hierarchies, compression, and optimization." (mei-2025, Abstract)
- The taxonomy is drawn from a systematic analysis of over 1,400 research papers and identifies an asymmetry between strong context understanding and weaker long-form generation as the field's open gap. ^s4
  > "Through this systematic analysis of over 1400 research papers, our survey not only establishes a technical roadmap for the field but also reveals a critical research gap: a fundamental asymmetry exists between model capabilities." (mei-2025, Abstract)

## Terms

- **Context Engineering**: the systematic design, optimisation and management of the information payload provided to an LLM at inference, treated as a formal discipline beyond individual prompt optimisation. [[10_distillates/publications/mei-2025-context-engineering#^s1]]

## Open questions

- The survey addresses general-purpose LLM systems; the paper's narrowing of context engineering to the mapping of research data onto artifacts is a specialisation the source enables but does not itself develop.

## Related

- [[10_distillates/publications/hong-2025-context-rot]]
