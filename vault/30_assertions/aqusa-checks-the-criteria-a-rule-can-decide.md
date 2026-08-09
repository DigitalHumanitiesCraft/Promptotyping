---
type: assertion
topics:
- '[[Method]]'
status: grounded
checked: {}
grounding:
- '[[20_distillates/publications/lucassen-2016-quality-user-story#^s7]]'
- '[[20_distillates/publications/lucassen-2016-quality-user-story#^s8]]'
- '[[20_distillates/publications/lucassen-2016-quality-user-story#^s9]]'
created: 2026-07-26
updated: 2026-07-26
---

# The QUS tool checks only the criteria a rule can decide and excludes the semantic ones, because those require understanding of the requirement's content.

## Statement

AQUSA is designed for the clerical part of requirements engineering, the defects that are easy to describe and algorithmically determinable. Its selection rule admits the syntactic criteria and those pragmatic criteria a rule can decide, and it excludes the semantic criteria on the stated ground that they require deep understanding of the content. The reported first version implements five analyzers, for well-formed, atomic, minimal, unique and uniform. This is the source's own division between what a script decides and what a reader must decide, and it is the division the site's script-versus-LLM vocabulary describes from the other end.

## Support

- [[20_distillates/publications/lucassen-2016-quality-user-story#^s7]] — the selection rule and the stated reason for excluding the semantic criteria.
- [[20_distillates/publications/lucassen-2016-quality-user-story#^s8]] — the five implemented analyzers of the first version.
- [[20_distillates/publications/lucassen-2016-quality-user-story#^s9]] — the tool's remit, the clerical and algorithmically determinable part.

## Related

- [[30_assertions/qus-defines-thirteen-user-story-quality-criteria]]
- [[30_assertions/llm-judgement-approximates-human-preference-and-carries-known-biases]]
- [[30_assertions/MOC-Method]]
