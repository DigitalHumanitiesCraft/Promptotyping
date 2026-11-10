---
title: Vorlage Action-Layer
slug: action-layer
version: "0.6"
status: complete
source: Vorlage Action-Layer
mirrored: 2026-08-21
machine-url: https://dhcraft.org/Promptotyping/_content/promptotyping-document/action-layer.md
---
# Vorlage Action-Layer

Diese Vorlage strukturiert den Action-Layer eines Promptotyping-Repos. Sein Einstieg liegt im Repo-Root und folgt der verwendeten Agentenumgebung, etwa `CLAUDE.md` oder `AGENTS.md`. Wo die Vorlage im Folgenden `CLAUDE.md` nennt, gilt dasselbe für `AGENTS.md`. Er hält Handlungswissen und verweist auf die deklarative Wissensbasis. Ein abgegrenzter Werkzeugblock enthält die technischen Voraussetzungen. Die empirische Belegbasis steht in Action-Layer- und Journal-Praxis in Promptotyping-Repos 2026-06.

## Geltungsbereich

Die Vorlage trägt für jedes Promptotyping-Repo, weil die Funktion Agent Instructions in [Konvention Promptotyping Documents](#konvention-v0.1) immer benötigt wird. Spezialisierte Rollen- und Orchestrierungsdokumente sowie die Vault-Verfassung folgen eigenen Konventionen. Bei einem Wechsel der Agentenumgebung werden Einstiegspfad, tatsächlicher Lademechanismus und Werkzeugblock geprüft. Der Praxiskern bleibt übertragbar, soweit seine Voraussetzungen erfüllt sind.

Der Action-Layer entsteht beim Repo-Setup aus den ersten Knowledge-Dokumenten einschließlich `knowledge/handoff.md`. Er wird bei Änderungen an Regeln, Wissensbasis oder Werkzeugen nachgezogen. Weil seine Anweisungen den Sitzungseinstieg bestimmen, werden wiederholte Wissensinhalte auf ihre Pflegeorte zurückgeführt.

## Funktion des Dokuments

Der Action-Layer beantwortet, wie der Agent im Repository arbeiten soll, einschließlich der Gestaltungsregeln. Er richtet sich an den Coding-Agenten und bleibt für Menschen prüfbar. Sein automatisches Laden hängt vom konfigurierten Harness ab. Ohne diesen Mechanismus wird er ausdrücklich gelesen. Bei formal falschem Output oder ignorierten Verboten werden Anweisungen und ihre tatsächliche Übermittlung geprüft, bei inhaltlichen Fehlern zusätzlich die Wissensbasis.

## Strukturprinzipien

Drei Prinzipien tragen das Dokument.

Erstens die Trennung von Praxiskern und Werkzeug-Block. Der Praxiskern ist portabel: Wissensbasis-Verweis mit Lesepfad, Handoff-Verarbeitung, Journal-Provenienz, CEIL-Prüfregeln, Designprinzipien, Scope-Negativliste, Wahrheitshierarchie. Der Werkzeug-Block ist austauschbar: Befehle, Hooks, Permissions, Stack-Konventionen, Security, maschinen- und plattformgebundene Details. Prüfkriterium: Wird der Werkzeug-Block gelöscht, muss der Praxiskern ohne Änderung in ein anderes Agent-Format übertragbar sein. Werkzeuggebundene Sätze im Praxiskern sind Fehler (sugw-Befund: "Keine Annahmen" neben `core.longpaths` in derselben Sektion).

Zweitens Komposition statt Duplikation. `design.md` bleibt deklaratives Knowledge-Dokument; CLAUDE.md führt die imperative Übersetzung der Designhaltung und benennt `design.md` als Wertequelle. Dasselbe Prinzip gilt für alle volatilen Inhalte: Zahlen, Stände und Inventare werden auf ihre lebende Quelle verlinkt. Offene Eingänge liegen in `handoff.md`, angenommene Zukunftsarbeit in `plan.md` und Prüfresultate in `verification.md`. Die ästhetische und faktische Steuerung kommt aus der Komposition zweier Dokumente, nicht aus einem Hybriddokument.

Drittens Distillation. CLAUDE.md ist ein knapper Pointer und trägt nur, was weder aus dem Code noch aus der Wissensbasis ableitbar ist. Die Kürze dient der Auswahl, die Unterscheidungen, Bedingungen und Grenzen, die der Agent für seine Arbeit braucht, bleiben erhalten. Jede Zeile kostet Kontextbudget in jeder Session. Referenzformulierungen aus der Praxis: "this file is the concise pointer" (mhdbdb-tei-only), "Prozessual, nicht dokumentarisch" (m3gim), "what is not derivable from the code alone" (HerData).

## Frontmatter-Schema

Abweichend von den `knowledge/`-Vorlagen trägt CLAUDE.md kein YAML-Frontmatter. Begründung: Das Dokument wird vom Werkzeug als roher Prompt-Kontext injiziert, und in der gesamten Belegbasis (35 Repos) führt keine einzige CLAUDE.md Frontmatter. Die Vorlagen-Provenienz steht stattdessen als HTML-Kommentar in der ersten Zeile:

```markdown
<!-- template: Vorlage Action-Layer v0.6, https://dhcraft.org/Promptotyping/promptotyping-document/action-layer -->
```

Die kanonische Adresse ist der stabile Slug `action-layer` unter `/promptotyping-document/`, Latest-URL `https://dhcraft.org/Promptotyping/promptotyping-document/action-layer`. Die Frontmatter-Abweichung von der `template:`-Empfehlung der Konvention ist mit der Freigabe der Vorlage am 2026-07-19 ratifiziert.

## Abschnitte im Detail

### Identität (Kopf)

Funktion: den Agenten in einem Absatz verorten. Inhalt: was das Projekt ist (ein Satz), Arbeitspraxis Promptotyping mit dem Kernsatz, dass die Documents in `knowledge/` das Domänenwissen und die Spezifikation halten, aus denen implementiert wird, Rollenverteilung Mensch/Agent, falls klärungsbedürftig (Critical Expert, Projektleiter, nicht Entwickler). Kein Marketing, keine Geschichte.

### Wissensbasis

Der Lesepfad beginnt nach dem Laden des Action-Layers mit `knowledge/INDEX.md`, anschließend `knowledge/handoff.md` und den aufgabenrelevanten declarative knowledge documents oder agent instruction documents. `journal.md` wird für Entscheidungsgründe und nachgewiesene Übergänge gelesen. Eine Routing-Tabelle ergänzt den Lesepfad nach den Kriterien der Konvention. Die Verweise führen zu repo-internen Projektquellen, damit die Methodenbasis mit dem Repository verfügbar ist. Liegt eine notwendige Quelle ausschließlich im unerreichbaren Vault, bleibt der davon abhängige Schritt offen.

### Arbeitsregeln

Funktion: der portable Praxiskern als Regelliste. Die Regeln werden projektspezifisch konkretisiert:

- Handoff-Verarbeitung. Bei jedem Sessionstart `knowledge/handoff.md` lesen. Vor der Nutzung eines Punkts Quelle und aktuelles Ziel prüfen, dauerhaften Inhalt zuerst in das zuständige declarative knowledge document oder agent instruction document integrieren, anschließend den Journal-Nachweis schreiben und den Punkt vollständig entfernen.
- Journal-Provenienz. Ein Eintrag entsteht pro sachlich zusammengehörigem Übergang und führt die zutreffenden Felder der [Vorlage Journal](#promptotyping-document-journal) (Anlass, Befund, Entschieden, Korrigiert, Geändert, Belege). Das Journal führt keinen aktuellen Projektstatus, keine offenen Aufgaben und keine ausführlichen Prüfresultate.
- Journal-Verdichtung. Verdichten, wenn Wiederholungen, kopiertes Dauerwissen, erledigte Offenlisten, verstreute Entscheidungsgründe oder ein zu teurer regulärer Lesekontext die Provenienzfunktion beeinträchtigen. Die semantische Deckungsprüfung folgt [Vorlage Journal](#promptotyping-document-journal); ein Journal-Archiv wird nicht erzeugt.
- Verifikation und CEIL. Keine erfundenen Werte, Begriffe oder Zitate; bei fehlendem Wissen nachfragen statt raten. Projektspezifische Checkpoints benennen: was wird wann dem Critical Expert vorgelegt, was läuft nie ohne Freigabe. Wo maschinelle Prüfungen existieren (Tests, Validierungsskripte, Datenverträge), sind sie als Pflichtlauf zu nennen.
- Wahrheitshierarchie. Vorrangregel pro Konfliktklasse: welche Quelle ist kanonisch, welche abgeleitet (TEI vor JSON, Spec vor Code, Speicherstand vor Gedächtnis für Zahlen). Schlusssatz: niemals stillschweigend divergieren lassen, Widersprüche melden.
- Quantitäten-Regel. Keine volatilen Zahlen in dieser Datei oder in Knowledge-Dokumenten; stattdessen die lebende Quelle benennen.

### Designprinzipien

Funktion: imperative Übersetzung der Designhaltung. Inhalt: `design.md` als Wertequelle benennen, Anweisung, vor UI- oder Textgenerierung das `design.md` zu lesen, dann drei bis sieben imperativ formulierte Sätze, die aus der Designhaltung abgeleitet sind. Entfällt nur, wenn das Projekt keine Design-Funktion hat (kein UI, keine gestalteten Texte). Die Prinzipien sind verbindlich formuliert ("Nutze Farbe nur funktional"), nicht beschreibend.

### Scope

Funktion: Negativliste gegen Feature-Drift und Werkzeug-Fehlgriffe. Inhalt: was das Projekt bewusst nicht tut, mit Verweis auf die geltende Entscheidung in `specification.md`, und was der Agent nicht tun soll. Auslassungen sind Designentscheidungen und werden als solche benannt.

### Bekannte Grenzen

Funktion: epistemischer Status, optional. Inhalt: ehrliche Grenzen von System, Modell oder Daten, die der Agent kennen muss, um Lücken nicht als Bugs zu behandeln; unbestätigte Inferenzen ausdrücklich als solche markiert, bis Klärung vorliegt. Keine Erfolgsprosa, keine Zahlen (Quantitäten-Regel gilt auch hier: qualitative Beschreibung plus Verweis auf die messende Quelle).

### Werkzeug (austauschbarer Block)

Funktion: alles Toolgebundene an genau einer Stelle, durch eine sichtbare Markierung vom Praxiskern getrennt. Inhalt in Untersektionen:

- Befehle: Build, Tests, Pipeline-Schritte als konkrete Aufrufe, mit Angabe, wann sie Pflicht sind.
- Konventionen: Stack-Festlegungen, Encoding, Plattform-Gotchas, Git-Regeln (Commit-Format, was nie ohne Aufforderung geschieht).
- Security: nie `.env` lesen oder ausgeben, Secrets nur als Umgebungsvariablen, Datenschutzgrenzen für LLM-Dienste.
- Hooks und Permissions. Tatsächlich eingerichtete Kontrollen der gewählten Umgebung mit ihrem geprüften Geltungsbereich. Eine Konfigurationsdatei allein belegt keine wirksame Sperre.

Maschinengebundene absolute Pfade werden hier ausdrücklich als solche markiert. Bei Portierung werden neben diesem Block der Einstiegspfad und das tatsächliche Laden der Regeln geprüft.

## Was nicht reingehört

- Volatile Zahlen, Zählstände, Coverage-Werte, Datei-Inventare. Sie driften zwangsläufig; die lebende Quelle wird verlinkt, nicht kopiert.
- Projektstatus-Erzählung und Sitzungsergebnisse. Der aktuelle Stand liegt in der projektspezifischen lebenden Statusquelle, angenommene Zukunftsarbeit in `plan.md`, offene Eingänge in `handoff.md`, Prüfresultate in `verification.md` und Übergangsnachweise in `journal.md`.
- Deklaratives Domänen- und Architekturwissen. Das gehört in `knowledge/`; CLAUDE.md verweist.
- Kompensatorische Bündelung. CLAUDE.md ist kein Ersatz für fehlende `project.md`, `architecture.md`, `design.md` oder `specification.md`. In den meisten untersuchten Repos absorbiert sie Charter, Architecture, Design oder ADR genau dann, wenn diese Dokumente fehlen; das ist ein Symptom fehlender Knowledge-Dokumente, kein eigener Inhalt. Sie routet und bindet, sie dupliziert keine Substanz.
- Falscher Ort oder leerer Stub. CLAUDE.md gehört in den Repo-Root, nie in `knowledge/`, und wird nicht als leerer Platzhalter angelegt. Beides ist ein wiederkehrender Fehler (CLAUDE.md in `knowledge/` bei diged-neolat und grip; Leer-Stubs bei docta und kulturpool).
- Spezifikation und Entscheidungen. Anforderungen und ADRs leben in `specification.md`; CLAUDE.md darf einzelne Entscheidungen als Regel zitieren, mit Verweis auf die Quelle.
- Secrets, personenbezogene Daten, Modellpreise, hartkodierte Modellnamen im Praxiskern.
- Inhalte für menschliche Leser. Die Datei ist Agent-Konfiguration; Nutzerdokumentation liegt in `README.md`.

## Vorlage zum Befüllen

Der folgende Block ist als Template gedacht.

````markdown
<!-- template: Vorlage Action-Layer v0.6, https://dhcraft.org/Promptotyping/promptotyping-document/action-layer -->

# Project instructions for [Projektname]

[Ein Absatz: was das Projekt ist, in einem Satz. Arbeitspraxis: Promptotyping, die Documents in `knowledge/` halten Domänenwissen und Spezifikation, aus denen implementiert wird. Rollenverteilung Mensch/Agent, falls klärungsbedürftig.]

## Wissensbasis

Die Wissensbasis liegt in `knowledge/`. Lies nach diesem Action-Layer bei jedem Sessionstart zuerst `knowledge/INDEX.md`, anschließend `knowledge/handoff.md` und danach die aufgabenrelevanten declarative knowledge documents oder agent instruction documents. Konsultiere `knowledge/journal.md`, wenn Herkunft oder Entscheidungsgründe eines Übergangs benötigt werden.

| Aufgabe | Lies zuerst |
|---|---|
| [Datenarbeit] | [`knowledge/data.md`] |
| [Anforderungen, Entscheidungen] | [`knowledge/specification.md`] |
| [UI, Gestaltung] | [`knowledge/design.md`] |
| [Offener Eingang oder Übergabe] | [`knowledge/handoff.md`] |
| [Herkunft oder Entscheidungsgrund unklar] | [`knowledge/journal.md`] |

## Arbeitsregeln

- Handoff: Bei jedem Sessionstart `knowledge/handoff.md` lesen. Quelle und aktuelles Ziel jedes verwendeten Punkts prüfen, dauerhaften Inhalt zuerst integrieren, den Journal-Nachweis schreiben und den Punkt vollständig entfernen.
- Journal: Pro sachlich zusammengehörigem Übergang einen Eintrag mit den zutreffenden Feldern Anlass, Befund, Entschieden, Korrigiert, Geändert und Belege schreiben. Aktuellen Projektstatus, offene Aufgaben und ausführliche Prüfresultate in ihren zuständigen Dokumenten halten.
- Verdichtung: Bei Funktionsverlust semantisch nach `knowledge/journal.md` verdichten, jede substantielle Aussage disponieren und kein Journal-Archiv erzeugen.
- Nichts erfinden: [projektspezifische Regel: welche Werte, Begriffe, Zitate nur aus welchen Quellen stammen dürfen]. Bei fehlendem Wissen nachfragen, nicht raten.
- Checkpoints: [was wird wann dem Critical Expert vorgelegt; was läuft nie ohne Freigabe; welche Prüfläufe sind Pflicht].
- Wahrheitshierarchie: Bei Widerspruch gilt [kanonische Quelle] vor [abgeleiteter Quelle]. [Weitere Vorrangregeln.] Niemals stillschweigend divergieren lassen, Widersprüche melden.
- Keine volatilen Zahlen in dieser Datei oder in Knowledge-Dokumenten. Aktuelle Zahlen → [lebende Quelle]. Zukunftsarbeit → `knowledge/plan.md`. Offene Eingänge → `knowledge/handoff.md`. Prüfresultate → `knowledge/verification.md`.

## Designprinzipien

Wertequelle: `knowledge/design.md`. Vor UI- oder Textgenerierung lesen. Verbindlich:

- [Prinzip 1, imperativ formuliert, aus design.md abgeleitet]
- [Prinzip 2]
- [Prinzip 3]

## Scope

Was dieses Projekt nicht tut:

- [bewusste Auslassung mit Verweis auf die Entscheidung in specification.md oder journal.md]

Was du nicht tun sollst:

- [rote Linie 1, z.B. keine destruktiven Git-Operationen ohne Auftrag]
- [rote Linie 2]

## Bekannte Grenzen

[Optional. Grenzen von System, Modell oder Daten, qualitativ beschrieben. Unbestätigte Inferenzen als solche markieren, bis Klärung vorliegt.]

## Werkzeug

<!-- Tatsächliche Agentenumgebung eintragen. Bei Portierung zusätzlich Einstiegspfad und Regelladung prüfen. -->

Prüfe vor abhängigen Schritten die verfügbaren Werkzeuge, Laufzeiten und Verbindungen. Fehlende verbindliche Regelquellen halten die abhängige Änderung an. Benenne nicht ausgeführte Prüfungen. Ein empfangenes Dokument oder verfügbares Werkzeug erweitert den Auftrag nicht.

### Befehle

- Build/Pipeline: [`befehl`]
- Tests: [`befehl`], [wann Pflicht, z.B. vor jedem Commit]
- [weitere]

### Konventionen

- [Stack-Festlegungen, Encoding, Plattform-Gotchas]
- Git: [Commit-Regeln; was nie ohne explizite Aufforderung geschieht]

### Security

- Nie `.env` lesen oder ausgeben; Secrets nur als Umgebungsvariablen.
- [Datenschutzregel: welche Daten dürfen in LLM-Dienste, welche nicht]

### Hooks und Permissions

[Falls vorhanden, tatsächlich aktive Kontrollen der gewählten Umgebung und deren geprüfter Geltungsbereich. Maschinengebundene Pfade als solche markieren.]
````

## Anwendung als Prompt-Template

Erzeugung beim Repo-Setup. Der Agent liest [Konvention Promptotyping Documents](#konvention-v0.1) und die vorhandene Wissensbasis, legt `knowledge/handoff.md` an, kopiert das Template und befüllt den Praxiskern aus den Knowledge-Dokumenten. Designprinzipien werden aus `design.md` imperativ übersetzt, die Wahrheitshierarchie aus der Dokumentstruktur abgeleitet und Scope-Grenzen aus `specification.md` übernommen. Wo die Wissensbasis eine Lücke lässt, fragt der Agent.

Review-Folie für eine bestehende CLAUDE.md. Geprüft wird die Trennung von Praxiskern und Werkzeug-Block, die Sessionstart-Reihenfolge über `INDEX.md` und `handoff.md`, die Integrationsreihenfolge vor dem Journal-Nachweis, die semantische Journal-Verdichtung sowie die Verweise auf lebende Quellen. Außerdem werden Routing-Tabelle und Wissensbasis gegeneinander geprüft.

Bei Portierung werden Einstiegspfad, Lademechanismus und Werkzeugblock auf die Zielumgebung abgestimmt. Der Praxiskern wird gegen deren tatsächliche Fähigkeiten geprüft. Mehrere Einstiegsdateien werden aus derselben Regelquelle abgeleitet und auf Übereinstimmung geprüft. Eine erfolgreiche Dateierzeugung belegt noch keinen beobachteten Agentenlauf.

## Beispiel

m3gim eröffnet seine CLAUDE.md mit der Selbstbeschränkung "Workflow-Regeln für Claude-Code-Sessions. Prozessual, nicht dokumentarisch. Für Dokumentation siehe `knowledge/`" und verankert die Spec-Hierarchie als Wahrheitsordnung vor jeder Änderung. zbz-ocr-tei kodiert die Wissensbasis-Disziplin als oberste Regel ("Wissen in `knowledge/`: nicht in CLAUDE.md duplizieren. Single Source of Truth pro Fakt") und führt Journal-Pflicht, Security und Commands als getrennte Sektionen. Beide zeigen den Pointer-Charakter; zbz-ocr-tei zeigt zugleich die Grenze: eine zu umfangreiche CLI-Referenz im Action-Layer erzeugt Drift-Wellen bei jeder Pipeline-Änderung.

## Begriffe

- Action-Layer: das imperative Dokument im Repo-Root, das den Agenten sozialisiert; analytischer Typ Action neben Declarative und Process.
- Praxiskern: der portable Teil des Action-Layers (Wissensbasis-Routing, Handoff-Verarbeitung, Journal-Provenienz, CEIL-Regeln, Designprinzipien, Scope, Wahrheitshierarchie), unabhängig vom konkreten Coding-Agenten.
- Werkzeug-Block: der austauschbare, toolgebundene Teil (Befehle, Hooks, Permissions, Security, Plattform-Konventionen).
- Komposition: das Prinzip, dass ästhetische und faktische Steuerung aus dem Verweis eines Action-Dokuments auf ein Knowledge-Dokument entsteht (design.md → CLAUDE.md), nicht aus einem Hybridtyp.
- Drift: Auseinanderlaufen von CLAUDE.md und Realität (Code, Daten, Wissensbasis); häufigstes Fehlerbild des Dokumenttyps, primär verursacht durch duplizierte volatile Inhalte.

## Versionshistorie

- 0.6 (2026-10-29). Promptotyping heißt Arbeitspraxis, der portable Teil Praxiskern. Die Journalregel folgt den Feldern der [Vorlage Journal](#promptotyping-document-journal) 0.6.
- 0.5 (2026-09-19). Einstiegspfad, Regelladung und Werkzeugvoraussetzungen nach Agentenumgebung getrennt. Der Templateblock behauptet keine vorhandene Verbindung.

- 0.4 (2026-08-21): `handoff.md` in den Sessionstart aufgenommen. Journal-Pflicht auf sachlich zusammengehörige Übergänge und semantische Verdichtung umgestellt.
- 0.3 (2026-07-24): Identitäts-Kernsatz auf die Beschreibung des `knowledge/`-Ordners umgestellt, nachdem die Rangbehauptung (Documents als primäres Artefakt, Code als regenerierbares Nebenprodukt) zurückgenommen wurde. Bestehende Repos ziehen den Kopfabsatz beim nächsten Anfassen der CLAUDE.md nach.
- 0.2 (2026-07-19): Freigabe (status complete), englisches Funktionsvokabular (Agent Instructions), Lebenszyklus-Absatz, Frontmatter-Abweichung ratifiziert. Keine Migrationspflicht für bestehende Repos.
- 0.1 (2026-06-09): Erstfassung, empirisch destilliert aus 35 Repos (Action-Layer- und Journal-Praxis in Promptotyping-Repos 2026-06).

## Related

- [Vorlagen Promptotyping Documents](#vorlagen)
- [Konvention Promptotyping Documents](#konvention-v0.1)
- [Promptotyping](#overview)
- Agent-Sozialisierung
- Knowledge-Action-Komposition
- Action-Layer- und Journal-Praxis in Promptotyping-Repos 2026-06
- [Vorlage Design](#promptotyping-document-design)
- [Vorlage Journal](#promptotyping-document-journal)
- [Vorlage Handoff](#promptotyping-document-handoff)
- Context Engineering
