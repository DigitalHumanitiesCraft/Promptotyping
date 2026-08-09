---
type: distillate
source-type: publication
reference: yehudai-2025
topics:
- '[[Frame]]'
status: grounded
checked:
  quote: 2026-07-27
  validation: 2026-07-27
created: 2026-07-27
updated: 2026-07-27
---

# Distillate: Survey on Evaluation of LLM-based Agents (Yehudai et al. 2025)

The first comprehensive survey of evaluation methods for LLM-based agents, published in Findings of the Association for Computational Linguistics: ACL 2025. The paper draft of 2026-07-27 introduces it in the Agentic Engineering passage as the reference for what characterises an LLM agent, a term the text had until then set on its own authority. Quotations are taken from the arXiv abstract page (arXiv:2503.16416, submitted 20 March 2025).

## Core statements

- LLM-based agents are autonomous systems that plan, reason, and use tools while interacting with dynamic environments. ^s1
  > "LLM-based agents represent a paradigm shift in AI, enabling autonomous systems to plan, reason, and use tools while interacting with dynamic environments." (yehudai-2025, Abstract)
- The survey is the first comprehensive treatment of evaluation methods for such agents. ^s2
  > "This paper provides the first comprehensive survey of evaluation methods for these increasingly capable agents." (yehudai-2025, Abstract)
- Planning and tool use are treated as core LLM capabilities required for agentic workflows. ^s3
  > "We analyze the field of agent evaluation across five perspectives: (1) Core LLM capabilities needed for agentic workflows, like planning, and tool use" (yehudai-2025, Abstract)
- Evaluation of agents is moving towards more realistic and harder tasks with continuously updated benchmarks. ^s4
  > "Our analysis reveals current trends, including a shift toward more realistic, challenging evaluations with continuously updated benchmarks." (yehudai-2025, Abstract)
- Cost-efficiency, safety, and robustness remain under-assessed, and fine-grained scalable evaluation methods are missing. ^s5
  > "We also identify critical gaps that future research must address, particularly in assessing cost-efficiency, safety, and robustness, and in developing fine-grained, scalable evaluation methods." (yehudai-2025, Abstract)

## Terms

- **LLM-based agent**: an autonomous system that plans, reasons, and uses tools while interacting with a dynamic environment. [[20_distillates/publications/yehudai-2025-survey-evaluation-llm-agents#^s1]]

## Open questions

- The paper draft attributes five capabilities to the source, planning, tool use, memory, reflection, and interaction with an environment. The abstract carries planning, reasoning, tool use, and environment interaction. Memory and self-reflection are section-level topics of the survey, visible as the heading "Fundamental Agent Capabilities: Planning, Tool Use, Self-Reflection, Memory" in the authors' companion repository, and they are not in the abstract. Either the draft sentence is cut back to ^s1 and ^s3, or the full-text section is ingested and the two further capabilities are anchored there.
- The survey defines the agent by capability and by evaluation need. The span of autonomy between two human interventions, which the paper's own definition makes the methodologically decisive variable, is not a dimension this source supplies; that step stays the paper's own.

## Related

- [[20_distillates/publications/liu-2024-llm-agents-se-survey]]
- [[20_distillates/publications/macedo-2026-from-prompt-to-process]]
