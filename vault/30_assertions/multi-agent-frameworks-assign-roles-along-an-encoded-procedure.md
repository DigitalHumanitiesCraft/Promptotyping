---
type: assertion
topics:
- '[[Method]]'
status: grounded
checked: {}
grounding:
- '[[20_distillates/publications/hong-2023-metagpt#^s1]]'
- '[[20_distillates/publications/hong-2023-metagpt#^s2]]'
- '[[20_distillates/publications/hong-2023-metagpt#^s3]]'
- '[[20_distillates/publications/hong-2023-metagpt#^s4]]'
created: 2026-07-26
updated: 2026-07-26
---

# Multi-agent frameworks assign distinct roles to separate agent instances along an encoded work procedure, so that intermediate results are checked by an agent other than their producer.

## Statement

MetaGPT encodes standardised operating procedures into prompt sequences and assigns diverse roles to agents on an assembly-line pattern, decomposing a complex task into subtasks worked by several agents. The stated purpose is that agents verify intermediate results and thereby reduce errors, against the cascading hallucinations that arise from naively chaining models; on collaborative software-engineering benchmarks the arrangement produces more coherent solutions than undifferentiated chat-based systems. This is the literature's name for role separation across agent instances. Permissions are not part of it, so the graded-rights half of the site's sub-agent construct rests on the security principle instead.

## Support

- [[20_distillates/publications/hong-2023-metagpt#^s1]] — the failure the arrangement is built against.
- [[20_distillates/publications/hong-2023-metagpt#^s2]] — procedure encoding and verification of intermediate results.
- [[20_distillates/publications/hong-2023-metagpt#^s3]] — role assignment on the assembly-line pattern.
- [[20_distillates/publications/hong-2023-metagpt#^s4]] — the benchmark result against undifferentiated multi-agent chat.

## Related

- [[30_assertions/least-privilege-bounds-damage-and-narrows-the-audit]]
- [[30_assertions/dialogue-agent-behaviour-is-described-as-role-play]]
- [[30_assertions/llm-based-agents-for-software-engineering]]
- [[30_assertions/MOC-Method]]
