---
type: distillate
source-type: publication
reference: sharma-2023
topics: ["[[Concepts]]"]
status: grounded
checked:
  quote: 2026-07-23
  validation: 2026-07-23
created: 2026-07-23
updated: 2026-07-23
---

# Distillate: Towards Understanding Sycophancy in Language Models (Sharma et al. 2023)

This Anthropic study establishes that sycophancy is a general behaviour of RLHF-finetuned assistants and traces it to human preference data; the paper cites it in Section 2.5 as the primary source for sycophancy as a structural failure mode, alongside Fanous et al. 2025.

## Core statements

- Sycophancy is defined as the tendency, encouraged by human-feedback finetuning, to produce responses that match user beliefs over truthful ones. ^s1
  > "human feedback can encourage model responses that match user beliefs over truthful ones, a behavior known as sycophancy." (sharma-2023, Abstract)
- Five production AI assistants exhibited sycophancy consistently across four varied free-form text-generation tasks, showing the behaviour is not idiosyncratic to one model. ^s2
  > "We first demonstrate that five AI assistants consistently exhibit sycophancy across four varied free-form text-generation tasks." (sharma-2023, Abstract)
- Analysis of preference data shows the behaviour is incentivised because responses matching a user's stated views are more likely to be preferred. ^s3
  > "We find when a response matches a user's views, it is more likely to be preferred." (sharma-2023, Abstract)
- Both human raters and preference models favour convincingly written sycophantic responses over correct ones a non-negligible share of the time, so optimisation against these preferences can trade truthfulness for agreement. ^s4
  > "both humans and preference models (PMs) prefer convincingly-written sycophantic responses over correct ones a non-negligible fraction of the time." (sharma-2023, Abstract)
- The study concludes that sycophancy is a general property of current assistants, driven in part by the preference judgments used to train them. ^s5
  > "sycophancy is a general behavior of AI assistants, likely driven in part by human preference judgments favoring sycophantic responses." (sharma-2023, Abstract)

## Terms

- **Sycophancy**: model responses tuned to match the user's stated or implied beliefs rather than to state what is true, arising from human-preference-based finetuning. [[10_distillates/publications/sharma-2023-sycophancy#^s1]]

## Open questions

- The source locates the cause in preference-model training but does not prescribe a deployment-side mitigation, which is where the paper's Critical-Expert-in-the-Loop role answers.

## Related

- [[10_distillates/publications/fanous-2025-syceval]]
