---
title: teiCrafter
id: teicrafter
paper: "4.3, Table 3"
source: Projects/Promptotyping/Case Studies/teicrafter.md
---

# teiCrafter

## Context

teiCrafter of 2023 is the origin point of the method, and no software was written for it. The artefact was a Custom GPT holding a mapping from plain text to TEI-XML (P5) together with a quality-control instruction, both configured in prose, with the editor in the loop as the checking authority. That is the conception of the method in the one form the tooling of 2023 afforded. Three functional cores were planned around it, the modular transformation itself, a modelling assistant, and a validation system combining rule-based checks with an LLM-as-a-judge step. The intended position was inside a pipeline running from handwritten-text recognition through the conversion into an edition publication system. The same conception was taken up in 2026 and built as the browser-based lossless TEI editor that carries the name today and remains in active development.

## Contribution

The case dates a capability. What separates the 2023 artefact from the 2026 editor is the maturity of the agentic tooling, since the conception stayed the same across the interval and became implementable only once the tools carried it. The pair therefore works as a control on the method's dependence on frontier tooling, which is otherwise asserted from cases that all sit on one side of that threshold.

The shape of the 2023 artefact is the second point. A mapping rule and a quality-control instruction, written in prose and executed by a model, is the working core of what the method later formalises as a Promptotyping Document. The editor who checks each conversion occupies the verifying role that the method later names.

A third observation redirected the work. The risk that a general-purpose provider would absorb a product of this kind was recognised at the time, and the effort moved from building the tool towards the method and the competences it requires.

## Limits

The case precedes the method's vocabulary and left no documents. The prose configuration lived inside the Custom GPT, so nothing existed that a later session could have resumed from or that a third party could inspect.

Conversion quality was never evaluated systematically. The validation system that would have made it checkable belonged to the plan of 2023 and was never built, and what the case shows about TEI generation therefore rests on the editor's judgement inside each session.

The two artefacts share a name and a conception and no code. The continuity the case documents is one of intent, and it carries no claim about a codebase or an evolution of one.

The method's vocabulary postdates the practice this case belongs to, and the paper maps no single method component onto a project of that phase. What it records about the name is that the Custom GPT of 2023 and the editor of today are distinct software states (Section 4.2). Naming teiCrafter the origin point is the site's own reading of the record, and the case supports nothing beyond it.

What survives of 2023 is a conference contribution and a project page. The sessions themselves were not recorded, so the working mode of that year is reconstructed from its results.
