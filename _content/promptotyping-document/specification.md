---
title: Vorlage Specification
slug: specification
version: "0.2"
status: complete
source: Vorlage Specification
mirrored: 2026-06-10
machine-url: https://dhcraft.org/Promptotyping/_content/promptotyping-document/specification.md
---

# Vorlage Specification

Diese Vorlage strukturiert das Substanz-Dokument einer Promptotyping-Wissensbasis. Das resultierende Dokument heißt typischerweise `specification.md` und liegt im `knowledge/`-Ordner des Repos. Es konsolidiert Anforderungen, Epics und User Stories, Funktionsumfang und Entscheidungen zu einer zentralen Datei und beantwortet die Was-und-Warum-Frage des Projekts am Stück. Seit Vorlagen-Version 0.2 (Konventionsänderung 2026-05-30) trägt es auch die narrativen Anwendungsszenarien, die zuvor per Default in einer separaten `user-stories.md` lagen.

## Geltungsbereich

Die Vorlage trägt für jedes Promptotyping-Repo, weil die Substanz-Funktion in der [Konvention Promptotyping Documents](#konvention-v0.1) als immer-relevant geführt wird. Bei sehr kleinen Projekten kann sie in `project.md` integriert werden.

Spaltung als Norm. Die Praxis in untersuchten Repos zeigt, dass größere Projekte die Substanz-Funktion regelmäßig in mehrere Dokumente aufteilen: `requirements.md`, `features.md`, `decisions.md` plus thematische Vertiefungen wie `analyse.md` oder `exploration.md`. Diese Spaltung ist nicht falsch, sondern Reaktion auf die Größe der Substanz. Diese Vorlage beschreibt das Idealbild der Konsolidierung in einer `specification.md`; bei der Anwendung in einem realen Repo entscheidet die Projektgröße, ob konsolidiert oder gespalten wird. Die Strukturprinzipien und das Frontmatter-Schema gelten dann pro Datei.

Anwendungsszenarien sind integriert. User Stories aus Anwender-Perspektive im Format „Als [Rolle], die …, will ich …, damit …" gehören seit der Konventionsänderung 2026-05-30 als eigene Sektion (Epics plus User Stories) in `specification.md`. Eine separate `user-stories.md` (siehe [Vorlage User Stories](#promptotyping-document-user-stories)) ist die dokumentierte Ausnahme für große Projekte (typischerweise Editionsprojekte), deren Substanz-Funktion ohnehin gespalten wird; in dem Fall gelten die Strukturprinzipien der Vorlage User Stories für die ausgelagerte Datei.

## Funktion des Dokuments

Das Dokument beantwortet vier verbundene Fragen am Stück: was soll das System leisten (Anforderungen), wer nutzt es wie und warum (Epics und User Stories), welche Features stellt es konkret bereit (Funktionsumfang), warum haben wir es so und nicht anders gebaut (Entscheidungen). Diese Fragen werden in einem Dokument geführt, weil ihre Antworten miteinander verzahnt sind: eine Story motiviert eine Anforderung, ein Feature implementiert sie, eine Entscheidung begründet, warum dieses Feature so umgesetzt ist und nicht anders. Wer die Schichten getrennt führt, läuft Gefahr, dass eine Änderung in einer Schicht die anderen unbemerkt veraltet.

Adressiert sind drei Lesergruppen: ein Reviewer, der prüft, ob die Anforderungen umgesetzt sind; ein neuer Mitarbeiter, der den Funktionsumfang verstehen will; ein Coding-Agent, der eine Funktion erweitern oder eine Entscheidung respektieren soll.

## Strukturprinzipien

Drei Prinzipien tragen das Dokument.

Erstens trennen die Sektionen nach Aktualisierungsrhythmus. Anforderungen sind statisch und werden selten umgeschrieben; sie halten fest, was ursprünglich gewollt war. Epics und User Stories teilen diesen langsamen Rhythmus; fortgeschrieben wird nur ihr Validierungsstatus (Hypothese → validiert). Funktionsumfang wird refaktoriert pro Release; er beschreibt die aktuelle Gestalt des Systems. Entscheidungen wachsen monoton; sie werden ergänzt, nie überschrieben. Diese Rhythmen können nur in einer Datei koexistieren, wenn sie als getrennte Sektionen geführt werden.

Zweitens ist jede Entscheidung viergliedrig: Kontext, Wahl, Begründung, Effekt. Eine Entscheidung ohne Begründung ist eine Annahme; eine ohne Effekt-Beobachtung ist eine Behauptung. Das ADR-Format (Architecture Decision Record) ist die etablierte Form für diese Viergliedrigkeit; sie wird hier auf alle Decisions angewandt, nicht nur auf Architekturentscheidungen.

Drittens werden Decisions nicht überschrieben. Wenn eine Entscheidung revidiert wird, bekommt sie einen neuen Eintrag, der auf die alte verweist. Die alte bleibt sichtbar, weil ihr Kontext und ihre Begründung weiterhin Teil der Projektgeschichte sind. Diese Regel teilt sich das Dokument mit dem Journal: beide tragen historische Stände, statt sie zu ersetzen.

## Frontmatter-Schema

Das Dokument folgt dem Frontmatter-Schema aus der [Konvention Promptotyping Documents](#konvention-v0.1) (Pflichtkern: `title, project, method, status, created, updated`). Spezifisch für Specification:

- `topics:` typisch sind Verweise auf Requirements Engineering, Decision Records (oder ADR) und User Stories. Sie verorten den Agenten in den methodischen Wissensfeldern, die formale Anforderungen, Anwendungsszenarien und Entscheidungsdokumentation tragen.
- `knowledge-sources:` selten genutzt; Specification trägt projekt-internes Wissen, nicht externe Anschlüsse.
- `related:` typischerweise `project`, `data`, `architecture`, `design`; bei ausgelagerten Stories zusätzlich `user-stories`. Specification ist das Hub-Dokument der Substanz und referenziert in beide Richtungen.

## Abschnitte im Detail

### Lead

Funktion: in zwei bis drei Sätzen den Charakter des Dokuments und seinen Aufbau benennen. Inhalt: Hinweis auf die Dreiteilung Anforderungen/Funktionsumfang/Entscheidungen, Erläuterung der unterschiedlichen Aktualisierungsrhythmen. Der Lead orientiert den Leser, der sonst zwischen den drei Schichten verloren geht.

### Anforderungen

Funktion: festhalten, was das System leisten soll und für wen. Inhalt: funktionale und nicht-funktionale Anforderungen in formaler Sprache, mit Akzeptanzkriterien soweit operationalisierbar, durchnummeriert (FR-NN, NFR-NN). Format pro Anforderung: ein Satz, der das Verhalten beschreibt, plus Akzeptanzkriterium. Nicht-funktionale Anforderungen (Barrierefreiheit, Performance, Datenschutz) werden separat ausgewiesen, gegebenenfalls als eigene Unterüberschrift. Diese Sektion wird selten umgeschrieben.

Diese Sektion trägt formale Anforderungen, nicht narrative Szenarien. Anwendungsszenarien aus Forscherinnen- oder Anwender-Perspektive gehören in die Sektion Epics und User Stories desselben Dokuments. Der Grund für die getrennten Sektionen: Anforderungen sind formal-prüfbar (Reviewer-Sicht), Stories sind narrativ-anwendungsorientiert (Anwender-Sicht); beide gehören zur Substanz-Funktion, tragen aber unterschiedliche Sprachen und Adressaten.

### Epics und User Stories

Funktion: dokumentieren, wer das System wie und warum nutzt. Inhalt: Epics als thematische Bündel verwandter Szenarien (typischerweise drei bis fünf, etwa Zentrale Forschungsoperationen, Wissenschaftliche Absicherung, Begriffliche Orientierung), darunter die einzelnen Stories im Format „Als [Rolle], die [Kontext], will ich [Ziel], damit [Nutzen]." Jede Story führt ihren epistemischen Status (validiert durch wen und wann, oder Annahme mit Beobachtungspunkt „Effekt: to be observed" plus auflösendem Ereignis) und eine Ableitung als Verlinkung in die Wissensbasis: welche Anforderung (FR-NN), welche Komponente in `architecture.md` oder `design.md`, welche Begriffe aus `INDEX.md`. Die vollständigen Strukturprinzipien (Dreigliedrigkeit, Trennung Anwender- von System-Perspektive, Ableitungspflicht, epistemischer Status) stehen in der [Vorlage User Stories](#promptotyping-document-user-stories) und gelten für diese Sektion unverändert. Wird die Sektion bei großen Editionsprojekten als separate `user-stories.md` ausgelagert (dokumentierte Ausnahme), verbleibt hier ein Verweis.

### Funktionsumfang

Funktion: die aktuelle Gestalt des Systems beschreiben. Inhalt: pro Ansicht oder Modul Zweck, Datengrundlage, Interaktion, Grenzen, vier Felder, die jedes Feature in derselben Form vergleichbar machen. Reihenfolge der Features folgt der Anwendungslogik (Einstieg, Hauptansichten, Detailansichten, Sonderansichten), nicht alphabetisch. Diese Sektion wird pro Release refaktoriert.

### Entscheidungen

Funktion: die Designentscheidungen mit Kontext, Wahl, Begründung, Effekt festhalten. Inhalt: ADR-artige Einträge, monoton wachsend, neueste oben oder neueste unten; entscheidend ist Konsistenz innerhalb des Dokuments. Pro Eintrag eine Überschrift mit Identifier (`### ADR-007 Akzent-Farbe von Forest Green auf Academic Blue`) und vier Felder. Bei Revision wird ein neuer Eintrag mit Verweis angelegt; der alte bleibt stehen.

Pro Entscheidung:

- Kontext: was war die Ausgangslage, welche Spannung war zu lösen.
- Wahl: was wurde entschieden, in einem Satz.
- Begründung: warum diese Wahl und nicht eine andere.
- Effekt: was wurde seitdem beobachtet.

## Was nicht reingehört

- Architekturdetails. Stack, Datenfluss, Modulgrenzen gehören in `architecture.md`. Specification kann auf eine Architekturentscheidung verweisen, beschreibt sie aber nicht selbst.
- Designtokens, UI-Patterns. Wie etwas aussieht, gehört in `design.md`.
- Datenmodell. Welche Entitäten und Relationen die Daten tragen, gehört in `data.md`. Specification beschreibt, was mit den Daten getan wird, nicht was sie sind.
- Implementierungs-Details. Wie eine Funktion technisch realisiert ist, gehört in den Code; Specification beschreibt das Verhalten.

## Vorlage zum Befüllen

Der folgende Block ist als Template gedacht.

````markdown
---
title: Specification
project:
  name: [Projektname]
  repository: [Repository-URL]
status: complete
language: [de | en]
version: [Repo-Schema-Version]
created: [YYYY-MM-DD]
updated: [YYYY-MM-DD]
authors: [Autor 1, Autor 2]
generated-with: [Werkzeug, falls relevant]
method:
  name: Promptotyping
  url: https://lisa.gerda-henkel-stiftung.de/digitale_geschichte_pollin
template:
  name: Vorlage Specification
  version: 0.2
  url: https://dhcraft.org/Promptotyping/promptotyping-document/specification
  alias: https://dhcraft.org/Promptotyping/#promptotyping-document-specification
topics: ["[[Requirements Engineering]]", "[[Decision Records]]", "[[User Stories]]"]
related: [project, data, architecture, design]
---

<!-- Lead: zwei bis drei Sätze. Sektionen Anforderungen / Epics und User Stories / Funktionsumfang / Entscheidungen erwähnen, unterschiedliche Aktualisierungsrhythmen erklären. -->

[Lead-Absatz]

## Anforderungen

<!-- Formale Anforderungen, statisch. Narrative Anwendungsszenarien gehören in die Sektion Epics und User Stories. -->

### Funktionale Anforderungen

- FR-01: [Verhalten in einem Satz]. Akzeptanzkriterium: [...]
- FR-02: [...]

### Nicht-funktionale Anforderungen

- NFR-01: [Anforderung]. Maßstab: [...]
- NFR-02: [...]

## Epics und User Stories

<!-- Epics als thematische Bündel, darunter Stories. Pro Story: Dreigliedrigkeit, Validierungsstatus, Ableitung. Bei ausgelagerter user-stories.md (Ausnahme großer Editionsprojekte) hier nur Verweis. -->

### [Epic 1: zum Beispiel Zentrale Forschungsoperationen]

#### [Story-Titel]

*Als [Rolle], die [Kontext], will ich [Ziel], damit [Nutzen].*

Validierung: [validiert durch Rolle/Person am YYYY-MM-DD | Annahme (Proxy: wer), Effekt: to be observed, Auflösung: Ereignis]

Ableitung:
- Anforderung FR-NN
- Komponente [[design#Komponente]] (oder [[architecture#Komponente]])
- Begriffe [[INDEX#Begriff A]], [[INDEX#Begriff B]]

### [Epic 2: zum Beispiel Wissenschaftliche Absicherung]

#### [Story-Titel]

[...]

## Funktionsumfang

<!-- Pro Ansicht oder Modul: Zweck, Datengrundlage, Interaktion, Grenzen. Reihenfolge folgt Anwendungslogik. -->

### [Name der Ansicht]

Zweck. [Was leistet diese Ansicht.]

Datengrundlage. [Welche Daten werden gezeigt, mit Verweis auf data.md.]

Interaktion. [Wie agiert der Nutzer mit der Ansicht.]

Grenzen. [Was leistet sie nicht.]

### [Name der nächsten Ansicht]

[...]

## Entscheidungen

<!-- ADR-artig, monoton wachsend. Pro Eintrag: Kontext, Wahl, Begründung, Effekt. Bei Revision neuen Eintrag mit Verweis anlegen, alten stehen lassen. -->

### ADR-NNN Titel der Entscheidung

Kontext. [Ausgangslage, Spannung.]

Wahl. [Was wurde entschieden.]

Begründung. [Warum diese Wahl.]

Effekt. [Was wurde seitdem beobachtet.]

### ADR-NNN+1 Titel der nächsten Entscheidung

[...]
````

## Anwendung als Prompt-Template

Strukturanker beim Aufsetzen der Substanz-Dokumentation. Anforderungen entstehen früh, typischerweise in der Preparation- und Exploration-Phase aus Scholar-Centered-Design-Sessions oder Requirements-Engineering. Funktionsumfang füllt sich iterativ während der Implementation. Entscheidungen werden in dem Moment eingetragen, in dem sie getroffen werden, nicht nachträglich rekonstruiert (siehe Glossar-Eintrag Critical-Expert-in-the-Loop).

Review-Folie für eine bestehende Specification. Ein vorhandenes `specification.md` (oder die getrennten Dateien `requirements.md`, `features.md`, `decisions.md`) wird gegen die Vorlage gehalten, um zu prüfen, ob die drei Sektionen sauber getrennt sind, ob jede Entscheidung viergliedrig ist (Kontext, Wahl, Begründung, Effekt), ob revidierte Decisions als neue Einträge mit Verweis stehen statt als Edits am alten, und ob keine Architektur- oder Designdetails hineingewachsen sind.

## Beispiel

HerData hat die früher getrennten Dateien `features.md` und `decisions.md` in eine konsolidierte `specification.md` überführt, mit Drift zwischen den Dateien als dokumentiertem Grund. Die Entscheidungs-Sektion arbeitet mit dem viergliedrigen Schema "Kontext, Wahl, Begründung, Effekt"; ein Beispiel ist die Akzent-Farbe-Entscheidung, die als ADR den Wechsel von Forest Green auf Academic Blue mit Konflikt-Begründung dokumentiert. HerData ist damit der Referenzfall der Konsolidierungs-Norm.

sugw-Edition hat das frühere `requirements.md` ebenfalls in `specification.md` aufgehen lassen, führt aber die Anwendungsszenarien weiterhin als separate `knowledge/user-stories.md` mit Ableitung, der Referenzfall für die dokumentierte Ausnahme der ausgelagerten Story-Datei (siehe [Vorlage User Stories](#promptotyping-document-user-stories), Konventionsänderung 2026-05-30). Beide Beispiele gegen die Repos verifiziert am 2026-06-09.

## Begriffe

- Anforderung: festgehaltene Erwartung an das System in formaler, prüfbarer Sprache (FR-NN/NFR-NN) mit Akzeptanzkriterium; die narrative Anwender-Form ist die User Story in der Sektion Epics und User Stories.
- Feature: konkrete Funktion oder Ansicht, die das System bereitstellt; setzt typischerweise eine oder mehrere Anforderungen um.
- ADR: Architecture Decision Record, viergliedriges Format (Kontext, Wahl, Begründung, Effekt) für eine dokumentierte Designentscheidung.
- Aktualisierungsrhythmus: die typische Häufigkeit, mit der eine Sektion eines Dokuments verändert wird; bei Specification unterscheiden sich die drei Sektionen erheblich.
