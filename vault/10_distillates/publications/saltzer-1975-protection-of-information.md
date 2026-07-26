---
type: distillate
source-type: publication
reference: saltzer-1975
topics: ["[[Method]]"]
status: grounded
checked:
  quote: 2026-07-26
created: 2026-07-26
updated: 2026-07-26
---

# Distillate: The Protection of Information in Computer Systems (Saltzer and Schroeder 1975)

The canonical statement of the eight protection design principles, among them least privilege, which is the established name for the arrangement the site's sub-agent vocabulary describes when it gives an analysis role read permissions only. Quotations come from the HTML transcription hosted at the University of Virginia. Typographic quotation marks, apostrophes and dashes are normalised to their ASCII forms in the quotations.

## Core statements

- The design principles are offered because no one knows how to build a flawless system, and they reduce the number and the severity of flaws. ^s1
  > "Since no one knows how to build a system without flaws, the alternative is to rely on eight design principles, which tend to reduce both the number and the seriousness of any flaws: Economy of mechanism, fail-safe defaults, complete mediation, open design, separation of privilege, least privilege, least common mechanism, and psychological acceptability." (saltzer-1975, §I.A.3)
- Least privilege requires every program and every user to operate with the smallest set of privileges the job needs. ^s2
  > "Least privilege: Every program and every user of the system should operate using the least set of privileges necessary to complete the job." (saltzer-1975, §I.A.3, item f)
- Its primary purpose is to bound the damage an accident or an error can do. ^s3
  > "Primarily, this principle limits the damage that can result from an accident or error." (saltzer-1975, §I.A.3, item f)
- It also reduces the interactions among privileged programs and thereby the surface on which unintended or improper use of privilege can occur. ^s4
  > "It also reduces the number of potential interactions among privileged programs to the minimum for correct operation, so that unintentional, unwanted, or improper uses of privilege are less likely to occur." (saltzer-1975, §I.A.3, item f)
- A further effect is auditability, since a question about misuse of a privilege has to be traced through the smallest possible number of programs. ^s5
  > "Thus, if a question arises related to misuse of a privilege, the number of programs that must be audited is minimized." (saltzer-1975, §I.A.3, item f)
- The principle tells the designer where to place a boundary rather than only that one is needed. ^s6
  > "Put another way, if a mechanism can provide \"firewalls,\" the principle of least privilege provides a rationale for where to install the firewalls." (saltzer-1975, §I.A.3, item f)

## Terms

- **Least privilege**: the design rule that an actor holds only the privileges its task requires. [[10_distillates/publications/saltzer-1975-protection-of-information#^s2]]

## Open questions

- The principle is stated for programs and users of an operating system. Applying it to a language-model agent whose permissions are configuration rather than an enforced kernel mechanism is an analogy; whether a prompt-level role restriction constitutes a privilege boundary in this sense is outside the source.
- The carrier is a third-party HTML transcription, not the IEEE version of record, so the quotations are located by section and not by page.

## Related

- [[10_distillates/publications/liu-2024-llm-agents-se-survey]]
- [[10_distillates/publications/hong-2023-metagpt]]
