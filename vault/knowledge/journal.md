---
title: Journal
project:
  name: "Promptotyping Paper Vault"
  repository: "https://github.com/DigitalHumanitiesCraft/Promptotyping"
method:
  name: Promptotyping
  url: https://dhcraft.org/Promptotyping/
status: draft
language: en
created: "2026-07-19"
updated: "2026-07-19"
related: [specification, state]
---

# Journal

Chronological decision history of the vault, append-only, newest entry last. Content documents carry only current state; the reasoning that led there lives here. An entry records a decision, a rejected alternative with the reason, or a calibration result of a check mechanism.

## Entry format

```markdown
## <date> — <one-line subject>

<What was decided or found, why, and what it replaces. Link the affected
documents. Two to ten sentences.>
```

## 2026-07-19 — Vault instantiated

Instantiated from the Grounded Vault template (https://github.com/DigitalHumanitiesCraft/grounded-vault) on operator instruction, lifting the parking of a paper-work instantiation recorded in the Promptotyping repo's plan (Zielbild 4). Parameters recorded in [[knowledge/specification]]. The deliverable stays canonical in the Promptotyping repository; this vault carries the provenance layer beneath the paper. The source inventory is seeded with the genealogy sources identified by the E2 inventory of the same day and with the Section-4 verification findings.

## 2026-07-19 — Relocated into the Promptotyping repository

Moved from a standalone repository into `vault/` at the root of `DigitalHumanitiesCraft/Promptotyping`, next to the site's `knowledge/` base (operator decision). Reason: the provenance chain from a deliverable sentence down to a source location is machine-checkable only within one repository; with the paper in `_content/paper/` and the vault elsewhere, the chain would break at the repository boundary. The standalone repository was deleted before ever being pushed.

## 2026-07-19 — First production cycle completed (GM-DH PRISM)

The SETUP.md smallest full pass ran for the GM-DH `prompts/PRISM.md` source: representation with five block IDs, distillate with six statements, one Genealogy claim ([[20_claims/prism-prompt-documented-by-january-2025]]), validator clean after each step. Dating decision: `git log --follow` shows two commits, both 2025-01-21; the diff between them is cosmetic (a wrapping code fence and a trailing blank line), so the representation matches the second commit and its permalink serves as `metadata.identifier`, while the claim dates the wording to 2025-01-21. The chapter footnote itself is deliberately left to the paper workstream; the vault records the suggestion in [[knowledge/state]] § Open work, because a parallel session owns `_content/paper/`. Process rule for this build-out: production subagents write only layer files; the registers in [[knowledge/state]] and this journal are maintained by the orchestrating session, to keep concurrent edits off the shared registers.
