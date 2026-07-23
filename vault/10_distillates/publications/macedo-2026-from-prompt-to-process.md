---
type: distillate
source-type: publication
reference: macedo-2026
topics: ["[[Concepts]]"]
status: grounded
checked:
  quote: 2026-07-23
  validation: 2026-07-23
created: 2026-07-23
updated: 2026-07-23
---

# Distillate: From Prompt to Process (Macedo 2026)

A process taxonomy and comparative assessment of six agentic software-development frameworks; the paper cites it in Section 2.5 as the first process taxonomy of the Spec-Driven-Development wave and for the convergence that specifications, not isolated prompts, govern coding agents.

## Core statements

- The study observes that AI programming tools have moved from autocomplete and chat to development frameworks that carry process, roles, artifacts and verification. ^s1
  > "AI tools for programming are no longer just autocomplete or chat assistants: they organize themselves as development frameworks, with process, roles, artifacts and verification." (macedo-2026, Abstract)
- It identifies the gap it fills: prior surveys map agents and LLMs for SE, but no study centres on the operational frameworks that turn these capabilities into process. ^s2
  > "Recent surveys map agents and LLMs for software engineering, but a study centered on the operational frameworks that turn these capabilities into process is missing." (macedo-2026, Abstract)
- Its central contribution is a six-dimension process taxonomy with a scoring rubric that makes it a replicable instrument. ^s3
  > "Our central contribution is a six-dimension process taxonomy: specification, context, roles, execution, validation and portability, with a scoring rubric that turns it into a replicable instrument." (macedo-2026, Abstract)
- Across frameworks that adopt a process, the isolated prompt loses centrality and persistent artifacts, work contracts, traceability and human review become the coordinating mechanisms. ^s4
  > "the isolated prompt loses centrality, and persistent artifacts, work contracts, traceability and human review become mechanisms that reduce ambiguity and coordinate agents." (macedo-2026, Abstract)
- GitHub Spec Kit is characterised as operationalising Spec-Driven Development by treating specifications as the central artifact feeding plans, tasks and implementation. ^s5
  > "GitHub Spec Kit operationalizes Spec-Driven Development and treats specifications as a central artifact that feeds plans, tasks and implementation." (macedo-2026, §1)
- No framework strongly covers all six dimensions, exposing a structural trade-off between process depth and portability across agents. ^s6
  > "The central result is simple: no framework strongly covers all six dimensions. There is a structural trade-off between process depth and portability." (macedo-2026, §1)

## Terms

- **Object-framework**: a structured set of artifacts, commands, roles, templates, workflows or policies that runs over a coding agent to organise the work, distinct from the agent itself. [[10_distillates/publications/macedo-2026-from-prompt-to-process#^s1]]

## Open questions

- The taxonomy scores product-oriented frameworks; whether it transfers to a research-artifact method with a data layer and a scholarly verification duty, as the paper claims for Promptotyping, is outside its scope.

## Related

- [[10_distillates/publications/liu-2024-llm-agents-se-survey]]
