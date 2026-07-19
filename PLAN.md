---
title: Projektplan Promptotyping
project:
  name: Promptotyping
  repository: https://github.com/DigitalHumanitiesCraft/Promptotyping
status: active
language: de
version: 0.1
created: 2026-07-19
updated: 2026-07-19
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
related: [knowledge/plan, knowledge/INDEX, vault/knowledge/state]
---

# Projektplan Promptotyping

Dieser Plan steuert das Gesamtprojekt Promptotyping auf Repo-Ebene. Das Projekt umfasst die Methode selbst, ihre öffentliche Definition auf der Methodik-Site, das kanonische Paper, die Provenienz-Schicht im Grounded Vault und die abgeleiteten Vermittlungsausgaben. Der Plan liegt auf Operator-Anweisung vom 2026-07-19 im Repo-Root, damit der Einstieg in das Projekt an einer Stelle beginnt. Er ordnet die Arbeitsstränge und ihre Abhängigkeiten; die operative Steuerung der Paper-Revision bleibt in [knowledge/plan.md](knowledge/plan.md), die Vault-Register bleiben in [vault/knowledge/state.md](vault/knowledge/state.md). Wo dieser Plan und die Strang-Dokumente divergieren, gilt das Strang-Dokument, und die Divergenz wird hier nachgezogen.

## Zielbild

Fertig bedeutet auf Projektebene:

1. **Site.** Die Methodik-Site auf https://dhcraft.org/Promptotyping/ ist die kanonische öffentliche Definition der Methode, konsistent mit dem revidierten Paper und dem Vault-Vorlagen-Katalog, mit stabilen Ankern für die `template:`-Adressierung aus anderen Repos.
2. **Paper.** Das Paper in `_content/paper/00–07` liegt in einreichfähiger Fassung vor. Jede tragende empirische Behauptung trägt einen Prüfvermerk, die Neuheitsbehauptungen halten dem Diskursabgleich stand, die Genealogie ist datierbar belegt.
3. **Vault.** Der Grounded Vault unter `vault/` verankert die tragenden Claims des Papers quellenfest. Das Quellinventar ist ingestiert und destilliert, die Claims sind über die Topic-MOCs erreichbar, der Validator läuft fehlerfrei. Machine Review startet erst nach Operator-Freigabe des Mechanismus; den Status `verified` vergibt ausschließlich der Operator.
4. **Abgeleitete Ausgaben.** Deutscher Blogpost, aktualisierte Site-Sektionen und der Abgleich des Obsidian-Vaults (Atom, MOC, Active Work) spiegeln den revidierten Stand.

## Arbeitsstränge

### Strang A, Site

Die Site ist implementiert und deployed; der Erstdeploy samt Operator-Review ist eingearbeitet. Offen sind die Browser-Sichtprüfung (Header, Anker-Offsets, Videos, mobile Navigation, Subpath-Routing), der Sweep-Review durch den Critical Expert in the Loop für Vorlage Action-Layer und Vorlage Journal sowie das Site-Update nach dem Vorlagen-Sweep (Milestone M11 in `knowledge/plan.md`, Spiegel und Anker der neuen Vorlagen, englisches Funktionsvokabular). Die Paper-Sektionen der Site ziehen über `_content/paper/` automatisch mit.

### Strang B, Paper

Die Paper-Revision folgt dem Phasenplan P0 bis P6 in `knowledge/plan.md` mit den Milestones M1 bis M12. In der laufenden Session sind die Sektion-4-Zahlen adversarial gegen die realen Repos geprüft und korrigiert (M3), die Genealogie-Sektion 2.6 ist auf die korrigierte Gewichtung umgebaut (Dissertation als Ursprung, PRISM als Seitenlinie), und ein Abstract-Entwurf liegt vor. Offen sind die Sektion-6-Straffung mit Limitations-Passage, die Gesamtdurchsicht (M7), der Diskursabgleich der Neuheitsclaims (M8) und die Venue-Anpassung (M9). Die Genealogie-Datierung (M4) stützt sich bis zur E2-Restentscheidung allein auf den GM-DH-Commit.

Als inhaltliche Erweiterung ist auf Operator-Anweisung vom 2026-07-19 zu prüfen, ob das Paper die LLM-Charakterisierung als Jagged Alien Intelligence aufnimmt, mit den in Vorträgen und Foliensätzen ausgearbeiteten Narrativen. Anschlussstellen sind die Kapability-Diskussion in Sektion 2.7 (Jagged-Frontier-Befund) und die Diskussion in Sektion 6. Die Materialbasis liegt im Master-Foliensatz »Knowledge und Context Engineering für AI Agents« und den daraus abgeleiteten Decks (Agentic Engineering, HEDIT); der Vault-Strang bereitet die Passage über Concepts-Claims vor, die redaktionelle Einarbeitung entscheidet die Paper-Session.

### Strang C, Vault

Der Vault unter `vault/` ist instanziiert (Journal-Einträge vom 2026-07-19); die Ausarbeitung läuft in dieser Reihenfolge:

1. Erster Produktionszyklus nach `vault/SETUP.md` mit der Quelle GM-DH `prompts/PRISM.md`, acquire, ingest, distill und genau ein Claim in MOC-Genealogy zur Existenz und zum Wortlaut des PRISM-Prompts spätestens Januar 2025. Der Fußnoten-Vorschlag für Paper-Sektion 2.6 geht als Notiz in `vault/knowledge/state.md`, die Einarbeitung ins Paper übernimmt der Paper-Strang.
2. Verifikationsbefund `knowledge/verification-paper-figures.md` als Handover-Quelle ingestieren und destillieren; die bestätigten Sektion-4-Zahlen und die Korrekturbefunde werden atomare Claims in MOC-Evidence, formuliert über den realen Repo-Stand.
3. Übrige Inventar-Quellen ingestieren, die llmdh-Site als Dokument, Dissertation und Blogpost 2025 als Publikationen über CSL-Records in `references/`. Projekt-Repos werden nur dann als Data-Quelle aufgenommen, wenn ein konkreter Claim sie braucht.
4. Genealogy-Claims nach der Operator-Korrektur vom 2026-07-19, die Dissertation als Ursprung der Methode (User Stories zu Interfaces, Mapping von Forschungsdaten und Kontext auf Artefakte), PRISM als Seitenlinie mit der Prozess-Einsicht der Kontextdokument-Konfiguration. Die Promptseption-Umbenennungs-Erzählung wird nicht als Claim geführt.
5. Concepts-Claims aus den Foliensatz-Quellen zum Jagged-Alien-Intelligence-Narrativ, sobald die Decks als datierbare Quellen ingestiert sind.
6. Machine Review nach Operator-Freigabe des Fremdfamilien-Mechanismus; bis dahin bleiben alle Dokumente `grounded` mit `checked.validation`-Datum.

Über alle Schritte invariant bleibt, dass Anker nur auf ihrer eigenen Ebene geprägt werden, eigene Schlussfolgerungen Posits werden, der Validator `python vault/tools/validate.py vault/` vor jeder Fertigmeldung läuft, Volatiles nach `state.md` geht und Entscheidungen append-only ins Vault-Journal.

### Strang D, Abgeleitete Ausgaben und Vermittlung

Nach der Paper-Durchsicht (M7) folgen der deutsche Blogpost (Einstiegsfrage E3), die Site-Sektionen (M11) und der Obsidian-Abgleich (M12) mit dem Atom Promptotyping, dem Promptotyping MOC und der Korrektur des PRISM-Framework-Atoms, das noch die alte Übergewichtung trägt. Der Obsidian-Abgleich braucht eine echte Vault-Session. Die Vermittlungsformate (Master-Foliensatz, Workshop-Decks für Agentic Engineering und Knowledge Engineering) speisen den Vault als Quellen und übernehmen umgekehrt die revidierten Paper-Begriffe; diese Rückkopplung läuft über die Slide Library im Obsidian-Vault.

## Reihenfolge und Abhängigkeiten

Die Stränge laufen parallel mit drei harten Kopplungen. Der Paper-Strang übernimmt Vault-Claims erst, wenn deren Validator-Lauf grün ist; der Vault-Strang schreibt dafür Fußnoten-Vorschläge nach `state.md` und fasst das Paper nicht an. Die abgeleiteten Ausgaben warten auf die Paper-Durchsicht M7. Statusvergaben oberhalb von `grounded` warten auf die Operator-Freigabe des Machine-Review-Mechanismus beziehungsweise auf die Operator-Verifikation selbst.

## Entscheidungsstand

Offene Operator-Entscheidungen, gesammelt aus `knowledge/plan.md` und dem Übergabe-Briefing vom 2026-07-19:

- **E1** Venue und finale Sprachprüfung der Einreichfassung.
- **E2-Rest** Zenodo-DOI-Snapshot für das PRISM-Original-Deck oder GM-DH-Commit als hinreichender Datierungsbeleg; bis zur Entscheidung wird nur der GM-DH-Beleg verwendet.
- **E3** Blogpost-Einstieg über das Alltags-Generalisierungsbeispiel und die Ein-Satz-Erwähnung der Generalisierbarkeit im Paper.
- **Machine-Review-Freigabe** Mechanismus laut `vault/knowledge/specification.md` (Fremdfamilien-Reviewer).
- **Weitere** Blog-Paper-Präzisierung (Sprache der Blog-Fassung, Zukunft der Paper-Sektion auf der Site), Em-Dash-Register im Paper, Namensnennung des Fork-Urhebers in Sektion 4.

## Pflege dieses Plans

Der Plan wird fortgeschrieben statt angesammelt. Erledigte Strang-Arbeit verdichtet sich in den Journalen (`knowledge/journal.md` für Site und Paper, `vault/knowledge/journal.md` für den Vault); dieser Plan hält nur Zielbild, Strangzuschnitt, Kopplungen und Entscheidungsstand aktuell. Zählbare Bestände (Quellen, Claims, Korrekturposten) stehen ausschließlich in den Registern der Stränge.
