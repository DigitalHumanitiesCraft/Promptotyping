---
type: assertion
topics:
- '[[Method]]'
status: grounded
checked: {}
grounding:
- '[[20_distillates/publications/saltzer-1975-protection-of-information#^s1]]'
- '[[20_distillates/publications/saltzer-1975-protection-of-information#^s2]]'
- '[[20_distillates/publications/saltzer-1975-protection-of-information#^s3]]'
- '[[20_distillates/publications/saltzer-1975-protection-of-information#^s4]]'
- '[[20_distillates/publications/saltzer-1975-protection-of-information#^s5]]'
- '[[20_distillates/publications/saltzer-1975-protection-of-information#^s6]]'
created: 2026-07-26
updated: 2026-07-26
---

# Least privilege, the established name for giving an actor only the permissions its task needs, bounds the damage of an error and narrows what an audit has to cover.

## Statement

Saltzer and Schroeder state least privilege as one of eight protection design principles, requiring every program and every user to operate with the least set of privileges the job needs. They give three effects, a bound on the damage an accident or error can do, a reduction of the interactions among privileged programs and therefore of the surface for improper use, and a smaller set of programs that must be audited when misuse is suspected. The principle also tells the designer where to put a boundary. This is the established name for the arrangement in which an analysis agent holds read permissions only.

## Support

- [[20_distillates/publications/saltzer-1975-protection-of-information#^s1]] — the eight principles and why they are offered.
- [[20_distillates/publications/saltzer-1975-protection-of-information#^s2]] — the statement of the principle itself.
- [[20_distillates/publications/saltzer-1975-protection-of-information#^s3]] — the damage bound.
- [[20_distillates/publications/saltzer-1975-protection-of-information#^s4]] — the reduction of privileged interactions.
- [[20_distillates/publications/saltzer-1975-protection-of-information#^s5]] — the narrowed audit.
- [[20_distillates/publications/saltzer-1975-protection-of-information#^s6]] — the principle as a rule for where a boundary goes.

## Related

- [[30_assertions/multi-agent-frameworks-assign-roles-along-an-encoded-procedure]]
- [[30_assertions/dialogue-agent-behaviour-is-described-as-role-play]]
- [[30_assertions/MOC-Method]]
