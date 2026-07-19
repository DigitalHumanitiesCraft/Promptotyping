---
title: Handoff Vault-Ausarbeitung
project:
  name: Promptotyping Site
  repository: https://github.com/DigitalHumanitiesCraft/Promptotyping
status: snapshot
language: de
created: 2026-07-19
updated: 2026-07-19
authors: [Christopher Pollin]
generated-with: Claude Code mit Claude Fable 5
related: [plan, journal]
---

# Handoff Vault-Ausarbeitung (Session 2026-07-19)

Übergabenotiz der Vault-Lane für die nächste frische Session. Diese Session hat den Grounded Vault unter `vault/` komplett ausgearbeitet, den Projektplan ins Repo-Root gelegt und Active Work im Obsidian-Vault aktualisiert. Einstieg für die Folgesession über `PLAN.md` im Repo-Root, dann `vault/knowledge/state.md` § Open work.

## Stand

Vier Commits dieser Session sind auf `main` gepusht, `fddbc08` (PLAN.md), `fa36116` (erster Produktionszyklus PRISM), `d381274` (fünf Quellen ingestiert und destilliert, Evidence- und Concepts-Claims), `856305b` (Genealogy- und Method-Claim-Schicht). Der Vault validiert mit 0 Fehlern und 0 Warnungen (`python vault/tools/validate.py vault/` aus dem Repo-Root).

Quellinventar: alle sechs Ursprungs-Quellen plus der neu aufgenommene KE-Master-Foliensatz stehen auf `distilled`; nur die Data-Zeile (Projekt-Repos) ruht, bis ein Claim eine Berechnung braucht. 36 Claims über fünf befüllte Topic-MOCs (24 Evidence, 8 Genealogy, 2 Method, 3 Concepts, 2 davon nach Limitations cross-registriert; Mehrfach-Topics erklären die Summe). Alle Dokumente stehen auf `grounded` mit `checked.validation: 2026-07-19`; Publikations-Distillate tragen zusätzlich `checked.quote`.

## Entscheidungen dieser Session

- Produktions-Subagenten schreiben nur Ebenen-Dateien; die Register (`state.md`, `journal.md`) pflegt die orchestrierende Session. Begründung und alle weiteren Entscheidungen append-only in `vault/knowledge/journal.md`.
- Der KE-Master-Foliensatz wurde auf Operator-Anweisung als datierter Snapshot (handover, 2026-07-19) aufgenommen; die zwei Jagged-Alien-Intelligence-Claims tragen, was das Material behauptet. Ob die Charakterisierung zutrifft, bleibt externer Beleg oder Posit.
- Die genealogischen Synthesen (Dissertation als Ursprung des Ganzen, PRISM als Beiträger der Prozess-Einsicht) wurden bewusst keine Claims; sie liegen als Posit-Kandidaten mit Formulierungsvorschlägen in `state.md` § Open work.
- Daten aus Git-Metadaten oder CSL-Records werden im Claim genannt und in der Support-Sektion ihrem Träger zugeschrieben, weil kein Distillat-Statement sie trägt.

## Offene Fäden

1. **Paper-Session-Arbeit liegt uncommittet im Working Tree** (sechs Paper-Dateien, vier knowledge-Dateien, untracked `_content/paper/00-abstract.md`). Diese Lane hat sie nicht angefasst. Die Paper-Session muss ihre Sektion-6-Straffung abschließen und selbst committen.
2. **Befunde für die Paper-Session** in `vault/knowledge/state.md` § Open work: Fußnoten-Vorschlag 2.6 auf `prism-prompt-documented-by-january-2025`; der Blogpost 2025-04-24 stellt die Metadatenstandard-Frage nicht, die das 3.3-Narrativ ihm zuschreibt; llmdh-Site nennt „Advanced Prompting Techniques" statt „Advanced Prompt Engineering", datiert 8.–11. September 2025, kein wörtliches „Cologne"; drei Posit-Kandidaten.
3. **Machine Review** wartet auf Operator-Freigabe des Fremdfamilien-Mechanismus; bis dahin bleibt alles `grounded`.
4. **Offene Operator-Entscheidungen** E1 (Venue), E2-Rest (Zenodo-DOI fürs PRISM-Deck), E3 (Blogpost-Einstieg), Em-Dash-Register, Fork-Urheber-Nennung, Blog-Paper-Präzisierung.
5. **Obsidian**: `ACTIVE-WORK.md` ist aktualisiert, liegt aber uncommittet im Obsidian-Repo; Commit gehört in eine Vault-Session. M12 (Atom Promptotyping, Promptotyping MOC, Korrektur des PRISM-Framework-Atoms) braucht ebenfalls eine echte Vault-Session.
6. **Ungeklärte Referenz**: die vom Operator erwähnte „Spezifikationsseite, die auf Google Docs angezeigt wird" konnte keinem Artefakt zugeordnet werden; Link oder Titel nachliefern.

## Der eine nächste Schritt

Die Paper-Session (oder ihre Nachfolgerin) konsumiert die Open-work-Notizen aus `vault/knowledge/state.md`, setzt die 2.6-Fußnote und korrigiert die drei benannten Stellen; danach können die Kapitel die Claims spiegeln und der Machine-Review-Pass die Kette auf `validated` heben.

## Geteilt oder gehalten

Geteilt mit der Paper-Lane: `_content/paper/*`, `knowledge/plan.md`, `knowledge/journal.md`, `knowledge/INDEX.md`, `knowledge/verification-paper-figures.md` (alle dort uncommittet, Eigentum der Paper-Lane). Exklusiv dieser Lane: alles unter `vault/`, `PLAN.md` im Root, diese Notiz. Lokal und ungesichert: `vault/_sources/*` (bewusst gitignored, Originale), der Obsidian-Edit.
