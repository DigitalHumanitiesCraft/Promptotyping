---
type: use-case
created: 2023-05-01
tags: [promptotyping, teicrafter, original]
status: complete
project: teiCrafter
repository: https://github.com/DigitalHumanitiesCraft/teiCrafter
---

# teiCrafter - LLM-assisted TEI Annotation Environment

## Summary

teiCrafter is the origin point of Promptotyping. Built as a hackathon prototype at FORGE 2023 in Tubingen, it demonstrated that GPT-4 could generate TEI-XML from transcribed historical texts. No Promptotyping methodology existed at this point -- the development was Vibe Coding before the term existed. The experience of building teiCrafter directly motivated the development of Promptotyping as a structured method.

Three functional cores were planned: modular plaintext-to-TEI-XML transformation, teiModeller (LLM-supported modelling), and a validation system combining rule-based checks with LLM-as-a-Judge. The tool was designed for pipeline integration: coOCR-HTR -> teiCrafter -> ediarum/GAMS/Publication. Early on, the risk that Big Tech might subsume such a product was recognised, which shifted focus from the tool itself toward method and competencies.

## LLMs und Tools

- GPT-4 (initial hackathon, 2023)
- Later iterations used Claude models

## Notizen zum Prozess

- Hackathon prototype (FORGE 2023, Tubingen) demonstrating GPT-4 could generate TEI-XML from transcribed texts
- No Promptotyping methodology at this point -- this was Vibe Coding before the term existed
- The experience of building teiCrafter directly motivated the development of Promptotyping as a structured method
- Three functional cores planned: modular plaintext-to-TEI-XML transformation, teiModeller (LLM-supported modelling), validation system (rule-based + LLM-as-a-Judge)
- Pipeline integration: coOCR-HTR -> teiCrafter -> ediarum/GAMS/Publication
- Recognised early that investing in a product that Big Tech might subsume was risky -- focus shifted to method and competencies

## Promptotyping Documents

None at origin. Later iterations added documentation.

## Use Case Type

Origin point (pre-method).

## Related

- [[Promptotyping]]
- [[LLM-gestützte TEI-Modellierung]]
- [[coOCR HTR]]

## Sources

- Pollin, Christopher, Steiner, Christian & Zach, Florian (2023). teiCrafter. FORGE 2023, Tubingen. https://doi.org/10.5281/zenodo.8425163
- teiCrafter. GitHub Repository: https://github.com/DigitalHumanitiesCraft/teiCrafter
