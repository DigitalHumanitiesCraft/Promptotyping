---
title: Plan
project:
  name: Promptotyping Site
  repository: https://github.com/DigitalHumanitiesCraft/Promptotyping
status: active
language: de
version: 0.4
created: 2026-07-19
updated: 2026-07-23
authors: [Christopher Pollin]
generated-with: Claude Code mit Claude Fable 5
method:
  name: Promptotyping
  url: https://dhcraft.org/Promptotyping/
template:
  name: Vorlage Plan
  version: 0.2
  url: https://dhcraft.org/Promptotyping/promptotyping-document/plan
  alias: https://dhcraft.org/Promptotyping/#promptotyping-document-plan
related: [INDEX, paper-outline, specification, journal]
---

# Plan

Dieser Plan steuert den Weg von der zusammengeführten Paper-Fassung `paper-v2-draft.md` zur Einreichung und zu den abgeleiteten Ausgaben (Site-Sektionen, Blogpost, Vault-Abgleich). Die inhaltliche Steuerung der Zusammenführung selbst, Gliederung, Entscheidungsstand und offene Prüfpunkte, liegt in `paper-outline.md`; dieser Plan hält die Reihenfolge, die Gates und die offenen Entscheidungen. Er ist das vorwärts gerichtete Gegenstück zum `journal.md` und wird fortgeschrieben statt angesammelt. Die Vorfassung dieses Plans (v0.3, additive Revision der Site-Fassung) ist durch die Zusammenführung vom 2026-07-23 überholt; ihre erledigten Milestones (Zahlenverifikation, Genealogie-Abschnitt, Standardisierungsstufe) sind in die v2 eingeflossen, der Rest ist unten neu geschnitten. Die Historie trägt die Git-History.

## Zielbild

Fertig bedeutet:

1. Die v2 ist nach den Feedback-Runden des Operators inhaltlich freigegeben; alle `[...]`-Marker im Text sind aufgelöst (verifiziert, belegt oder gestrichen), die Provenienz der tragenden Claims liegt im Grounded Vault `vault/`.
2. Die Neuheitsbehauptungen sind gegen den aktuellen Diskurs recherchiert; außenwirksame Claims stehen nur in der Form im Text, die die Prüfung lizenziert.
3. Die Einreichfassung ist auf die gewählte Venue zugeschnitten und vom Operator zur Einreichung freigegeben.
4. Die abgeleiteten Ausgaben sind erzeugt: Zerlegung der v2 in `_content/paper/`, aktualisierte Site-Sektionen, deutscher Blogpost, Vault-Abgleich (Atom [[Promptotyping]] und MOC).
5. Ausdrücklich nicht Gegenstand: das Grounded-Vault-Paper und das integrative Vier-Schichten-Paper (geparkt), Repo-Hygiene jenseits der quellenrelevanten Bestände.

## Milestones

| Milestone | Gate | Status |
|---|---|---|
| M1 Quell-Repos gesichert | git-Status sauber | in progress (offen: KASKADE ohne Historie, slides-generator uncommittet, deepseek-ocr ungepusht) |
| M2 Marker-Auflösung (Aldersbach-Fakten, Zenodo-DOI, Berners-Lee-Titel, RSE-Beleg, Übersetzungs-Attribution, Exemplar-Zuordnungen) | Prüfvermerk je Marker | pending |
| M3 Quellen datiert (PRISM-Deck, Foliensätze) | datierbarer Beleg je Genealogie-Behauptung | pending, wartet auf E2 |
| M4 Operator-Freigabe der v2 | Review durch den Operator | in progress (Feedback-Runden laufen) |
| M5 Novelty-Recherche eingearbeitet | Recherche-Verdikt je Neuheitsclaim | pending, nach M4 |
| M6 Venue-Anpassung und Einreichung | Operator-Freigabe | pending, wartet auf E1 |
| M7 Zerlegung der v2 in `_content/paper/` und Site-Sektionen | Site konsistent zur v2 (A3, A12, A16 der `specification.md`), inklusive des offenen Vorlagen-Sweep-Site-Updates | pending, nach M4 |
| M8 Blogpost | publiziert | pending, wartet auf E3 |
| M9 Vault-Abgleich (Atom, MOC, Parkdokumente) | Vault-Session, Stand trägt | pending, nach M4 |

Harte Abhängigkeiten: M5 folgt auf M4, damit die Recherche gegen den freigegebenen Text läuft; M7 bis M9 brauchen M4, aber nicht M6. Unverhandelbar bleiben die Gates: kein Claim ohne Prüfvermerk, keine Einreichung ohne Operator-Freigabe. Abweichungen werden mit Begründung im `journal.md` dokumentiert.

## Offene Entscheidungen

- **E1 — Venue.** Zieljournal oder Konferenz für die englische Einreichfassung. Decide before M6.
- **E2 — Foliensatz-Auswahl.** Ob das PRISM-Original-Deck einen Zenodo-DOI-Snapshot bekommt oder die GM-DH-Commit-Datierung genügt. Decide before M3.
- **E3 — Blogpost-Einstieg.** Ob das Alltags-Generalisierungsbeispiel (Liedkomposition) den Blogpost eröffnet. Decide before M8.
