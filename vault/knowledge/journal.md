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

## 2026-07-19 — Source wave ingested and distilled (five sources, Evidence and Concepts claims)

Five parallel production cycles completed the inventory intake. The Section-4 verification findings became a handover representation with a distillate of 26 statements and 24 Evidence claims (confirmed figures, corrected real repository state, non-verifiable items, scope limits), all date-scoped to the 2026-07-19 snapshot. The dissertation (CSL `pollin-2025b`) and the initial blog post (CSL `pollin-2025d`) entered as publications with quote-checked distillates; the llmdh summer-school site entered as a document with git-permalink dating. On operator instruction of the same day, the KE master deck's LLM-characterisation slide entered as a dated snapshot source (handover), yielding two Concepts claims on the Jagged-Alien-Intelligence framing; the claims carry what the material states, with the truth of the characterisation left to external sourcing or a posit. Findings routed to the paper session via [[knowledge/state]] § Open work: the blog post does not pose the metadata-standard question the Section 3.3 narrative attributes to it, the llmdh site names the session "Advanced Prompting Techniques" rather than the footnote's "Advanced Prompt Engineering", and the site carries no literal "Cologne". The data-type source row (project repositories) stays dormant until a concrete claim needs a computation, per the briefing's no-stockpiling rule.

## 2026-07-19 — Genealogy and Method claim layer built

Nine claims completed the claim layer over the distilled sources, seven Genealogy (requirements chain, artifact mapping, ontology genesis, naming and first description, documentation aim, PRISM mechanism, PRISM teaching), one Method-only (form freedom), one Concepts (DIKW cognitive-agent premise). Two boundary decisions are recorded here. Dates that live in git metadata or CSL records rather than in distillate statements are stated in the claim and attributed to their carrier in the Support section, following the pattern of the first dating claim; this keeps the anchor discipline honest where the evidence is bibliographic rather than textual. And the genealogical syntheses themselves (dissertation as origin of the whole, PRISM as contributor of the process insight) were deliberately kept out of the claim layer as posit candidates for the paper, because no single source anchors them; the vault carries the components, the paper argues the lineage. With this entry every inventory source except the dormant data row stands at `distilled`, and all five topic maps hold claims; the vault validates clean at 0 errors, 0 warnings.

## 2026-07-20 — Section 3.3 standardisation grounded (two method-development sources)

One production cycle ingested two German method-development notes as handover document sources: the frontmatter-practice survey (2026-05-09) as `frontmatter-practice-2026-05`, and the knowledge-base content audit (2026-07-19) as `knowledge-base-content-audit-2026-07-19`. Both entered as verbatim Markdown copies with internal Obsidian wikilinks flattened to plain text so the validator does not chase vault-internal links; block IDs were minted only in the representations (four each), and each distillate carries four English core statements anchored to them. Three Method claims were built to ground paper Section 3.3 (standardisation stage) and registered in [[20_claims/MOC-Method]]: the mandatory frontmatter core reduced to six fields with type demoted to a reading heuristic ([[20_claims/frontmatter-core-reduced-to-six-fields]]), the status vocabulary extended with active and snapshot ([[20_claims/status-vocabulary-adds-active-and-snapshot]]), and adversarial self-verification promoted to a distinct document function ([[20_claims/verification-promoted-to-document-function]]). The sources are dated snapshots of a moving repository landscape, so the claims are stated as the standardisation decisions the notes record rather than as evergreen counts. Validator clean at 0 errors, 0 warnings.
