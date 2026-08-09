---
type: distillate
source-type: publication
reference: hong-2023-metagpt
topics:
- '[[Method]]'
status: grounded
checked:
  quote: 2026-07-26
created: 2026-07-26
updated: 2026-07-26
---

# Distillate: MetaGPT, Meta Programming for A Multi-Agent Collaborative Framework (Hong et al. 2024)

The most cited framework in which several language-model agents are given distinct roles along a workflow, so that intermediate results are checked by an agent other than the one that produced them. It supplies the literature's name for the sub-agent arrangement the site describes, role assignment along an encoded procedure. Quotations come from the arXiv abstract.

## Core statements

- Naive chaining of language models produces cascading hallucinations and logical inconsistency, which is the failure the framework is built against. ^s1
  > "Solutions to more complex tasks, however, are complicated through logic inconsistencies due to cascading hallucinations caused by naively chaining LLMs." (hong-2023-metagpt, Abstract)
- The framework encodes standardised operating procedures into prompt sequences so that agents can check intermediate results and reduce errors. ^s2
  > "MetaGPT encodes Standardized Operating Procedures (SOPs) into prompt sequences for more streamlined workflows, thus allowing agents with human-like domain expertise to verify intermediate results and reduce errors." (hong-2023-metagpt, Abstract)
- Roles are assigned to agents on an assembly-line pattern, which decomposes a complex task into subtasks worked by several agents together. ^s3
  > "MetaGPT utilizes an assembly line paradigm to assign diverse roles to various agents, efficiently breaking down complex tasks into subtasks involving many agents working together." (hong-2023-metagpt, Abstract)
- On collaborative software-engineering benchmarks the role-structured arrangement produces more coherent solutions than undifferentiated chat-based multi-agent systems. ^s4
  > "On collaborative software engineering benchmarks, MetaGPT generates more coherent solutions than previous chat-based multi-agent systems." (hong-2023-metagpt, Abstract)

## Terms

- **Role assignment**: the allocation of distinct, procedure-defined parts to separate agent instances along a workflow. [[20_distillates/publications/hong-2023-metagpt#^s3]]
- **Standardised operating procedure (SOP) encoding**: the translation of a human work procedure into the prompt sequence that structures the agents' collaboration. [[20_distillates/publications/hong-2023-metagpt#^s2]]

## Open questions

- Roles here are separate agent instances with separate prompts, and the source says nothing about permissions, read-only access, or any enforced boundary between them. The permission side of the site's sub-agent construct is not carried by this source and rests on saltzer-1975 as a design principle.
- The benchmarks are software-engineering tasks with a decidable outcome. Whether role decomposition helps where the outcome is a scholarly judgement is outside the source.
- The quotations come from the abstract; per-benchmark figures would need a check against the body.

## Related

- [[20_distillates/publications/liu-2024-llm-agents-se-survey]]
- [[20_distillates/publications/shanahan-2023-role-play]]
- [[20_distillates/publications/saltzer-1975-protection-of-information]]
