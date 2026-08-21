---
type: glossary
term: Agentic review
created: 2026-07-29
updated: 2026-07-29
---

# Agentic review

Agentic review uses an LLM-based agent to compare outputs with sources, project documents, rules, user stories, acceptance criteria, and expected interface behaviour. It may extend the coverage of checking and surface plausible failures, and it never authorises. It stays a generative operation and acquires no scholarly authority from a second model, from agreement among several agents, from a confidence score attached to its output, or from the systematic appearance of the procedure.

The definition stands in `knowledge/paper-specification.md` (§6.4), which places agentic review between deterministic validation and Critical Expert verification in the checking vocabulary and forbids collapsing the two into one category. The canonical `research-artefacts/promptotyping-paper.md` does not carry the term; its Section 6.2 sets [[glossary/adversarial-machine-review]] for a review instructed to attack an output against its sources, and the relation between the two wordings is settled when the restructured manuscript becomes canonical. The term carries no external source.

## Related

- [[glossary/adversarial-machine-review]]
- [[glossary/verification]]
- [[glossary/validation]]
- [[glossary/documented-grounds-of-acceptance]]
