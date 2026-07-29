---
type: distillate
source-type: publication
reference: zheng-2023
topics: ["[[ArtefactVerification]]"]
status: grounded
checked:
  quote: 2026-07-26
created: 2026-07-26
updated: 2026-07-29
---

# Distillate: Judging LLM-as-a-Judge with MT-Bench and Chatbot Arena (Zheng et al. 2023)

The paper already cites this work in its verification architecture for the LLM-as-a-judge pattern and its weaknesses. The distillate makes the positive side citable as well, the measured agreement between a strong judging model and human preference, which is what marks off the zone in which a model may legitimately judge from the zone a rule decides. Quotations come from the arXiv abstract page.

## Core statements

- The work examines strong language models as judges of other models on open-ended questions, where existing benchmarks fail to measure human preference. ^s1
  > "Evaluating large language model (LLM) based chat assistants is challenging due to their broad capabilities and the inadequacy of existing benchmarks in measuring human preferences. To address this, we explore using strong LLMs as judges to evaluate these models on more open-ended questions." (zheng-2023, Abstract)
- The named limitations of the pattern are position bias, verbosity bias, self-enhancement bias and limited reasoning ability. ^s2
  > "We examine the usage and limitations of LLM-as-a-judge, including position, verbosity, and self-enhancement biases, as well as limited reasoning ability, and propose solutions to mitigate some of them." (zheng-2023, Abstract)
- A strong judging model reaches over eighty per cent agreement with human preference, the level at which humans agree with each other. ^s3
  > "Our results reveal that strong LLM judges like GPT-4 can match both controlled and crowdsourced human preferences well, achieving over 80% agreement, the same level of agreement between humans." (zheng-2023, Abstract)
- The pattern is presented as a scalable approximation of human preference rather than a replacement for it. ^s4
  > "Hence, LLM-as-a-judge is a scalable and explainable way to approximate human preferences, which are otherwise very expensive to obtain." (zheng-2023, Abstract)

## Terms

- **LLM-as-a-judge**: the use of a strong language model to grade the output of another model on questions whose answers no rule decides. [[10_distillates/publications/zheng-2023-llm-as-a-judge#^s1]]
- **Self-enhancement bias**: the judging model's tendency to favour output of its own kind. [[10_distillates/publications/zheng-2023-llm-as-a-judge#^s2]]

## Open questions

- Agreement is measured on chat-assistant answers judged against general human preference. Whether the same agreement rate holds for a scholarly judgement against sources is not tested here, and the paper's ranking of the judging instance below human verification does not follow from this source alone.
- The quotations come from the abstract; the per-bias measurements sit in the body and would need a page-level check if a claim were to rest on their size.

## Related

- [[10_distillates/publications/abdurahman-2025-primer-llm-evaluation]]
- [[10_distillates/publications/fanous-2025-syceval]]
- [[10_distillates/publications/sharma-2023-sycophancy]]
