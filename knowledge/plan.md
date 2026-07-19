---
title: Plan
project:
  name: Promptotyping Site
  repository: https://github.com/DigitalHumanitiesCraft/Promptotyping
status: draft
language: de
version: 0.3
created: 2026-07-19
updated: 2026-07-19
authors: [Christopher Pollin]
generated-with: Claude Code mit Claude Fable 5
method:
  name: Promptotyping
  url: https://dhcraft.org/Promptotyping/
template:
  name: Vorlage Plan
  version: 0.1
  url: https://dhcraft.org/Promptotyping/promptotyping-document/plan
  alias: https://dhcraft.org/Promptotyping/#promptotyping-document-plan
related: [INDEX, specification, journal]
---

# Plan

Dieser Plan steuert die Revision des Papers in `_content/paper/` zur einreichfähigen, kanonischen Definition von Promptotyping sowie die daraus abgeleiteten Ausgaben (deutscher Blogpost, Site-Aktualisierung, Vault-Abgleich). Er ist das vorwärts gerichtete Gegenstück zum `journal.md` und wird fortgeschrieben statt angesammelt; erledigte Arbeit wandert in den Status-Tracker und verdichtet sich im Journal. Entscheidungen, die unterwegs fallen, gehen als ADR in die `specification.md` der Site, sofern sie die Site betreffen; Entscheidungen zur Paper-Revision hält der Abschnitt *Offene Entscheidungen* hier fest. Die Exit-Bedingungen verankern gegen das Zielbild dieses Plans, weil der Paper-Workstream bewusst keine eigene Spezifikation führt (Vermeidung von Over-Engineering; die `specification.md` dieses Repos spezifiziert die Site, das Paper trägt seine Anforderungen im Zielbild).

## Zielbild

Fertig bedeutet:

1. Das Paper in `_content/paper/01–07` liegt in revidierter, einreichfähiger Fassung vor. Die Revision ist additiv (Struktur und Argumentation bleiben) und integriert zwei neue Teile: einen Genealogie-Herkunftsabschnitt in Sektion 2 (PRISM als datierter Entstehungsort der Methode, Verschiebung der Prompt-Scaffolds zur dokumentgestützten Delegation) und die Standardisierungsstufe in Sektion 3.3 (funktionsorientierter Vorlagen-Katalog, Frontmatter-Pflichtkern, `template:`-Adressierung als Antwort auf die offene Metadatenstandard-Frage des Blogbeitrags 2025). Der Abstract ist entsprechend aktualisiert.
2. Die tragenden empirischen Behauptungen, insbesondere die Projektangaben der Sektion-4-Tabelle, sind gegen die Repos geprüft; die Neuheitsbehauptungen sind gegen den aktuellen Diskurs (Context Engineering, agentische Methoden) recherchiert, und außenwirksame Claims stehen nur in der Form im Text, die die Prüfung lizenziert.
3. Aus dem revidierten Paper sind die abgeleiteten Ausgaben erzeugt: ein deutscher Blogpost und die aktualisierten nicht-Paper-Sektionen der Site (`ueberblick.md`, `praxis.md`); das Vault-Atom [[Promptotyping]] und das Promptotyping MOC sind auf den Paper-Stand gezogen.
4. Ausdrücklich nicht Gegenstand: Grounded Vault (eigenes Paper-Vorhaben, als Ideen-Dokument im Vault geparkt), das integrative Vier-Schichten-Paper (ebenfalls geparkt), eine Grounded-Vault-Instanziierung für die Paper-Arbeit, Repo-Hygiene jenseits der quellenrelevanten Bestände.

## Phasen und Milestones

| Phase | Milestones | Gate |
|---|---|---|
| P0 — Sicherung | M1 Quell-Repos gesichert | git-Status sauber |
| P1 — Bestandsaufnahme | M2 Delta-Liste | Operator bestätigt |
| P2 — Quellenprüfung | M3 Zahlen geprüft, M4 Quellen datiert | Prüfvermerk je Claim |
| P3 — Revision | M5 Genealogie, M6 Standardisierung, M7 Abstract | Operator-Review |
| P4 — Diskursabgleich | M8 Novelty-Recherche eingearbeitet | Verdikt je Neuheitsclaim |
| P5 — Einreichfassung | M9 Venue-Anpassung | einreichfertig |
| P6 — Abgeleitete Ausgaben | M10 Blogpost, M11 Site-Sektionen, M12 Vault-Abgleich | publiziert bzw. Vault aktuell |

### P0 — Sicherung

**Ziel:** Das Quellkorpus der Revision ist vollständig versioniert und gepusht.

#### Milestone 1 — Quell-Repos gesichert

**Entry-Bedingung:** keine.

- KASKADE initial committen, Remote anlegen und pushen (Bestand ist derzeit ohne Historie).
- Uncommitteten Stand in `slides-generator` sichten und mit dem Operator committen oder verwerfen.
- Ungepushte Commits in quellenrelevanten Repos pushen.

**Exit-Bedingung (M1):** Done when jedes Repo des Quellkorpus sauberen, gepushten Stand hat, belegt per `git status`.

### P1 — Bestandsaufnahme

**Ziel:** Der Ist-Stand des Papers und das Delta zu den Methodenerweiterungen seit Juni 2026 sind dokumentiert.

#### Milestone 2 — Delta-Liste

**Entry-Bedingung:** keine (parallel zu P0 möglich).

- Vollständige Lektüre von `_content/paper/01–07`, Abgleich mit dem Vault-Spiegel (Lesefassung).
- Delta-Liste gegen die seither entstandenen Bestände: Vorlagen-Katalog und Konvention (Stand der Funktions-Umbenennung), Frontmatter-Befund der Repo-Exploration, FemPrompt-Verifikationsbefunde, PRISM-Genealogie aus dem Vault-Atom.
- Priorisierung der Deltas nach den zwei Revisionsteilen des Zielbilds; alles Übrige wird als nicht-Gegenstand notiert.

**Exit-Bedingung (M2):** Done when die priorisierte Revisionsliste vorliegt und vom Operator bestätigt ist (Zielbild 1).

### P2 — Quellenprüfung

**Ziel:** Die empirische Basis des Papers ist belastbar.

#### Milestone 3 — Zahlen geprüft

**Entry-Bedingung:** M2 (die Delta-Liste benennt die zu prüfenden Stellen).

- Projektangaben der Sektion-4-Tabelle und der Insight-Abschnitte gegen die realen Repos prüfen; Abweichungen als Korrekturposten in die Revisionsliste.

**Exit-Bedingung (M3):** Done when jede tragende Zahl einen Prüfvermerk trägt (bestätigt oder korrigiert), gemäß Zielbild 2.

#### Milestone 4 — Quellen datiert

**Entry-Bedingung:** Foliensatz-Auswahl durch den Operator (offene Entscheidung E2).

- PRISM-Original-Deck und ausgewählte Foliensätze als datierte Quellen für den Genealogie-Abschnitt registrieren (`_content/literatur.md` bzw. Paper-Referenzen).

**Exit-Bedingung (M4):** Done when die Genealogie-Behauptungen datierbare Belege haben (Zielbild 1 und 2).

### P3 — Revision

**Ziel:** Die zwei neuen Teile stehen im Paper, additiv eingepasst.

#### Milestone 5 — Genealogie-Abschnitt

**Entry-Bedingung:** M2 und M4.

- Herkunftsabschnitt in Sektion 2 (`02-terms-positioning.md`): PRISM als im LLM-Dialog entwickeltes Reasoning-Scaffold, Funktionsverlust durch native Reasoning-Modelle, Überleben des dialogisch-dokumentierenden Herstellungsprozesses als Promptotyping; die Einsicht, dass Modellverhalten über Kontextdokumente konfiguriert wird, als Kontinuitätslinie.

**Exit-Bedingung (M5):** Done when der Abschnitt eingepasst ist, ohne bestehende Argumentation umzubauen (Additivitäts-Vorgabe des Zielbilds).

#### Milestone 6 — Standardisierungsstufe

**Entry-Bedingung:** M2.

- Erweiterung der Sektion 3.3 (`03-four-phases.md`): Vorlagen-Katalog, reduzierter Frontmatter-Pflichtkern mit empirischer Korrektur-Begründung, `template:`-Feld mit maschinenlesbarer Adresse; Auflösung der Spannung zwischen der Formfreiheit des Blogbeitrags 2025 und dem Katalog über das Open-Catalog-Prinzip.

**Exit-Bedingung (M6):** Done when die Standardisierungsstufe beschrieben und gegen die Konvention konsistent ist.

#### Milestone 7 — Abstract und Durchsicht

**Entry-Bedingung:** M5 und M6.

- Abstract um Genealogie und Standardisierung ergänzen; Gesamtdurchsicht der revidierten Fassung.

**Exit-Bedingung (M7):** Done when der Operator die revidierte Fassung im Review freigegeben hat.

### P4 — Diskursabgleich

**Ziel:** Die Neuheitsbehauptungen halten dem aktuellen Diskurs stand.

#### Milestone 8 — Novelty-Recherche eingearbeitet

**Entry-Bedingung:** M7.

- Webrecherche gegen die Neuheitsclaims (Dokumente als primäres Artefakt, Interface-Typologie nach epistemischer Funktion, Standardisierung als Metadatenpraxis) mit dem Ziel der Widerlegung; Related-Work-Refresh.
- Claims, die die Recherche nicht trägt, werden abgeschwächt oder gestrichen.

**Exit-Bedingung (M8):** Done when jeder Neuheitsclaim ein Recherche-Verdikt trägt und der Text nur lizenzierte Formen verwendet (Zielbild 2).

### P5 — Einreichfassung

**Ziel:** Das Paper ist auf die gewählte Venue zugeschnitten.

#### Milestone 9 — Venue-Anpassung

**Entry-Bedingung:** M8 und Venue-Entscheidung (E1).

- Formalia, Zitierstil, Umfang, Einreichunterlagen.

**Exit-Bedingung (M9):** Done when die Einreichfassung vollständig ist und der Operator die Einreichung freigegeben hat.

### P6 — Abgeleitete Ausgaben

**Ziel:** Blogpost, Site und Vault spiegeln den revidierten Stand.

#### Milestone 10 — Blogpost

**Entry-Bedingung:** M7 (kann vor M9 beginnen).

- Deutscher Blogpost aus dem revidierten Paper destilliert; Kandidat für den Einstieg ist das Alltags-Generalisierungsbeispiel (Wissensstruktur für eine Liedkomposition, Rolle befreundeter Musiker, keine Namen), Entscheidung E3.

**Exit-Bedingung (M10):** Done when der Blogpost publiziert ist.

#### Milestone 11 — Site-Sektionen

**Entry-Bedingung:** M7.

- `ueberblick.md` und `praxis.md` auf den revidierten Paper-Stand ziehen; die Paper-Sektionen der Site aktualisieren sich über `_content/paper/` mit.

**Exit-Bedingung (M11):** Done when die Site konsistent zum revidierten Paper ist (Anforderung A12 der `specification.md`, Cross-Repo-Konsistenz).

#### Milestone 12 — Vault-Abgleich

**Entry-Bedingung:** M7.

- Vault-Atom [[Promptotyping]] und Promptotyping MOC auf den Paper-Stand ziehen (in einer Vault-Session); veraltete MOC-Angaben korrigieren (die dort notierten ungemergten `claude/*`-Branches existieren nicht mehr).
- Ideen-Dokumente für die geparkten Vorhaben anlegen (Grounded-Vault-Paper, integratives Vier-Schichten-Paper) mit anchor-project.

**Exit-Bedingung (M12):** Done when Atom und MOC den revidierten Stand tragen und die Parkdokumente existieren (Zielbild 3 und 4).

## Status-Tracker

| Milestone | Status | Notizen |
|---|---|---|
| M1 — Quell-Repos gesichert | in progress | Repo-Klon erledigt (2026-07-19); Sichtung ergab: `claude/*`-Branches existieren remote nicht mehr, Sichtungspunkt gegenstandslos. Offen: KASKADE (7 untrackte Dateien, keine Historie), slides-generator (2 uncommittete Dateien), deepseek-ocr (2 ungepushte Commits, Relevanz prüfen) |
| M2 — Delta-Liste | pending | |
| M3 — Zahlen geprüft | pending | |
| M4 — Quellen datiert | pending | wartet auf E2 |
| M5 — Genealogie-Abschnitt | pending | Materialbasis: Vault-Atom PRISM Framework (Stand 2026) |
| M6 — Standardisierungsstufe | pending | Materialbasis: Konvention Promptotyping Documents (Stand 2026-06-29) |
| M7 — Abstract und Durchsicht | pending | |
| M8 — Novelty-Recherche | pending | |
| M9 — Venue-Anpassung | pending | wartet auf E1 |
| M10 — Blogpost | pending | wartet auf E3 |
| M11 — Site-Sektionen | pending | |
| M12 — Vault-Abgleich | pending | Vault-Session erforderlich |

Legende: completed, in progress, pending.

## Offene Entscheidungen und Abhängigkeiten

- **E1 — Venue und finale Sprachprüfung.** Zieljournal oder Konferenz für die englische Einreichfassung. Decide before M9; bis dahin blockiert nur P5.
- **E2 — Foliensatz-Auswahl.** Welche Foliensätze als Genealogie-Quellen ins Korpus gehen (Kandidaten: GM-DH-Workshopreihe, LLM Summer School, AGKI-Webinare, slides-generator-Decks) und wo das PRISM-Original-Deck datierbar vorliegt. Decide before M4.
- **E3 — Blogpost-Einstieg.** Ob das Alltags-Generalisierungsbeispiel (Liedkomposition) den Blogpost eröffnet und ob die Diskussionssektion des Papers die Generalisierbarkeit in einem Satz erwähnt. Decide before M10; die Paper-Erwähnung before M7.
- **Harte Abhängigkeiten.** M5 braucht M4 (keine Genealogie-Behauptung ohne datierte Quelle). M8 folgt auf M7, damit die Recherche gegen den revidierten Text läuft. M10 bis M12 brauchen M7, aber nicht M9; die abgeleiteten Ausgaben dürfen vor der Einreichung erscheinen, sofern der Operator es nicht anders entscheidet.

## Abweichungen

Die Phasenreihenfolge ist Empfehlung; P0 bis P2 dürfen parallel laufen. Unverhandelbar sind die Gates: keine Revision ohne bestätigte Delta-Liste, kein Claim ohne Prüfvermerk, keine Einreichung ohne Operator-Freigabe. Abweichungen von der Sequenz werden mit Begründung im `journal.md` dokumentiert.
