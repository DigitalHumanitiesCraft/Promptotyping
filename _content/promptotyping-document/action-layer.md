---
title: Vorlage Action-Layer
slug: action-layer
version: "0.4"
status: complete
source: Vorlage Action-Layer
mirrored: 2026-08-21
machine-url: https://dhcraft.org/Promptotyping/_content/promptotyping-document/action-layer.md
---
# Vorlage Action-Layer

Diese Vorlage strukturiert das Action-Dokument eines Promptotyping-Repos. Das resultierende Dokument heißt `CLAUDE.md` und liegt im Repo-Root, nicht im `knowledge/`-Ordner. Es sozialisiert den Coding-Agenten: imperative Regeln, die auf die deklarative Wissensbasis verweisen, plus ein klar abgegrenzter, austauschbarer Werkzeug-Block. Der Action-Layer trägt kein Wissen; er routet zu Wissen und übersetzt es in Imperative. Empirische Belegbasis: Action-Layer- und Journal-Praxis in Promptotyping-Repos 2026-06.

## Geltungsbereich

Die Vorlage trägt für jedes Promptotyping-Repo, weil die Funktion Agent Instructions in [Konvention Promptotyping Documents](#konvention-v0.1) als immer-relevant geführt wird. Sie trägt nicht für Forschungsleitstelle-Spezialdokumente (`RULES.md`, `INSTRUCTIONS.md`, `cloud-commands.md` für mehrere parallele Agenten mit differenzierten Rollen) und nicht für den Vault selbst. Bei einem anderen Coding-Agenten als Claude Code (Cursor, Gemini CLI) trägt der Methodenkern der Vorlage unverändert; nur der Werkzeug-Block wird gegen das tool-eigene Format (`.cursorrules`, `GEMINI.md`) getauscht.

Lebenszyklus: die CLAUDE.md entsteht beim Repo-Setup, sobald die ersten Knowledge-Dokumente einschließlich `knowledge/handoff.md` stehen, aus denen der Methodenkern abgeleitet wird, und nie als leerer Platzhalter vorab. Aktualisiert wird sie, wenn sich Regeln, Wissensbasis-Struktur oder Werkzeug ändern; weil sie in jeder Session injiziert wird, ist Drift hier teurer als in jedem anderen Dokument und die Distillation-Regel zugleich die Destillat-Grenze, jede Zeile, die aus Code oder Wissensbasis ableitbar ist, wird gestrichen statt gepflegt.

## Funktion des Dokuments

CLAUDE.md ist der Action-Layer der Wissensbasis: imperativ, verhaltenssteuernd, vom Werkzeug bei jedem Sessionstart automatisch injiziert. Es beantwortet "wie soll der Agent sich in diesem Repo verhalten, auch ästhetisch". Adressiert ist ausschließlich der Coding-Agent; Menschen lesen `README.md` und `knowledge/`. Diagnoseraster der Konvention: formal falscher Output, Stilbruch, ignoriertes Verbot, hier prüfen. Inhaltlich falscher Output: Knowledge prüfen, nicht hier nachbessern.

## Strukturprinzipien

Drei Prinzipien tragen das Dokument.

Erstens die Trennung von Methodenkern und Werkzeug-Block. Der Methodenkern ist portabel: Wissensbasis-Verweis mit Lesepfad, Handoff-Verarbeitung, Journal-Provenienz, CEIL-Prüfregeln, Designprinzipien, Scope-Negativliste, Wahrheitshierarchie. Der Werkzeug-Block ist austauschbar: Befehle, Hooks, Permissions, Stack-Konventionen, Security, maschinen- und plattformgebundene Details. Prüfkriterium: Wird der Werkzeug-Block gelöscht, muss der Methodenkern ohne Änderung in ein anderes Agent-Format übertragbar sein. Werkzeuggebundene Sätze im Methodenkern sind Fehler (sugw-Befund: "Keine Annahmen" neben `core.longpaths` in derselben Sektion).

Zweitens Komposition statt Duplikation. `design.md` bleibt deklaratives Knowledge-Dokument; CLAUDE.md führt die imperative Übersetzung der Designhaltung und benennt `design.md` als Wertequelle. Dasselbe Prinzip gilt für alle volatilen Inhalte: Zahlen, Stände und Inventare werden auf ihre lebende Quelle verlinkt. Offene Eingänge liegen in `handoff.md`, angenommene Zukunftsarbeit in `plan.md` und Prüfresultate in `verification.md`. Die ästhetische und faktische Steuerung kommt aus der Komposition zweier Dokumente, nicht aus einem Hybriddokument.

Drittens Distillation. CLAUDE.md ist ein knapper Pointer und trägt nur, was weder aus dem Code noch aus der Wissensbasis ableitbar ist. Jede Zeile kostet Kontextbudget in jeder Session. Referenzformulierungen aus der Praxis: "this file is the concise pointer" (mhdbdb-tei-only), "Prozessual, nicht dokumentarisch" (m3gim), "what is not derivable from the code alone" (HerData).

## Frontmatter-Schema

Abweichend von den `knowledge/`-Vorlagen trägt CLAUDE.md kein YAML-Frontmatter. Begründung: Das Dokument wird vom Werkzeug als roher Prompt-Kontext injiziert, und in der gesamten Belegbasis (35 Repos) führt keine einzige CLAUDE.md Frontmatter. Die Vorlagen-Provenienz steht stattdessen als HTML-Kommentar in der ersten Zeile:

```markdown
<!-- template: Vorlage Action-Layer v0.4, https://dhcraft.org/Promptotyping/promptotyping-document/action-layer -->
```

Die kanonische Adresse ist der stabile Slug `action-layer` unter `/promptotyping-document/`, Latest-URL `https://dhcraft.org/Promptotyping/promptotyping-document/action-layer`. Die Frontmatter-Abweichung von der `template:`-Empfehlung der Konvention ist mit der Freigabe der Vorlage am 2026-07-19 ratifiziert.

## Abschnitte im Detail

### Identität (Kopf)

Funktion: den Agenten in einem Absatz verorten. Inhalt: was das Projekt ist (ein Satz), Methode Promptotyping mit dem Kernsatz, dass die Documents in `knowledge/` das Domänenwissen und die Spezifikation halten, aus denen implementiert wird, Rollenverteilung Mensch/Agent, falls klärungsbedürftig (Critical Expert, Projektleiter, nicht Entwickler). Kein Marketing, keine Geschichte.

### Wissensbasis

Funktion: Routing in die Wissensbasis. Inhalt: Verweis auf `knowledge/` mit `INDEX.md` als Einstieg. Nach dem automatisch geladenen Action-Layer liest der Agent bei jedem Sessionstart `knowledge/INDEX.md`, anschließend `knowledge/handoff.md` und danach das aufgabenrelevante Declarative oder Action Document. `journal.md` wird für Entscheidungsgründe und nachgewiesene Übergänge gelesen. Bei mehr als drei Wissensdokumenten ergänzt eine Routing-Tabelle Aufgabe → Dokument den Lesepfad. Der Verweis muss auf repo-interne Quellen zeigen; ein Repo, dessen Methodenwissen nur in einem externen Vault liegt, ist für eine Session ohne Vault-Zugriff blind.

### Arbeitsregeln

Funktion: der portable Methodenkern als Regelliste. Die Regeln werden projektspezifisch konkretisiert:

- Handoff-Verarbeitung. Bei jedem Sessionstart `knowledge/handoff.md` lesen. Vor der Nutzung eines Punkts Quelle und aktuelles Ziel prüfen, dauerhaften Inhalt zuerst in das zuständige Declarative oder Action Document integrieren, anschließend den Journal-Nachweis schreiben und den Punkt vollständig entfernen.
- Journal-Provenienz. Ein Eintrag entsteht pro sachlich zusammengehörigem Übergang und verwendet `integriert`, `verworfen` oder `korrigiert`. Das Journal führt keinen aktuellen Projektstatus, keine offenen Aufgaben und keine ausführlichen Prüfresultate.
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

Funktion: alles Toolgebundene an genau einer Stelle, durch eine sichtbare Markierung vom Methodenkern getrennt. Inhalt in Untersektionen:

- Befehle: Build, Tests, Pipeline-Schritte als konkrete Aufrufe, mit Angabe, wann sie Pflicht sind.
- Konventionen: Stack-Festlegungen, Encoding, Plattform-Gotchas, Git-Regeln (Commit-Format, was nie ohne Aufforderung geschieht).
- Security: nie `.env` lesen oder ausgeben, Secrets nur als Umgebungsvariablen, Datenschutzgrenzen für LLM-Dienste.
- Hooks und Permissions: was `.claude/settings.json` mechanisch erzwingt, damit Regel und Mechanik nicht divergieren.

Maschinengebundene absolute Pfade gehören, wenn überhaupt, nur hierher und werden als maschinengebunden markiert. Bei Portierung zu einem anderen Agenten wird ausschließlich dieser Block ersetzt.

## Was nicht reingehört

- Volatile Zahlen, Zählstände, Coverage-Werte, Datei-Inventare. Sie driften zwangsläufig; die lebende Quelle wird verlinkt, nicht kopiert.
- Projektstatus-Erzählung und Sitzungsergebnisse. Der aktuelle Stand liegt in der projektspezifischen lebenden Statusquelle, angenommene Zukunftsarbeit in `plan.md`, offene Eingänge in `handoff.md`, Prüfresultate in `verification.md` und Übergangsnachweise in `journal.md`.
- Deklaratives Domänen- und Architekturwissen. Das gehört in `knowledge/`; CLAUDE.md verweist.
- Kompensatorische Bündelung. CLAUDE.md ist kein Ersatz für fehlende `project.md`, `architecture.md`, `design.md` oder `specification.md`. In den meisten untersuchten Repos absorbiert sie Charter, Architecture, Design oder ADR genau dann, wenn diese Dokumente fehlen; das ist ein Symptom fehlender Knowledge-Dokumente, kein eigener Inhalt. Sie routet und bindet, sie dupliziert keine Substanz.
- Falscher Ort oder leerer Stub. CLAUDE.md gehört in den Repo-Root, nie in `knowledge/`, und wird nicht als leerer Platzhalter angelegt. Beides ist ein wiederkehrender Fehler (CLAUDE.md in `knowledge/` bei diged-neolat und grip; Leer-Stubs bei docta und kulturpool).
- Spezifikation und Entscheidungen. Anforderungen und ADRs leben in `specification.md`; CLAUDE.md darf einzelne Entscheidungen als Regel zitieren, mit Verweis auf die Quelle.
- Secrets, personenbezogene Daten, Modellpreise, hartkodierte Modellnamen im Methodenkern.
- Inhalte für menschliche Leser. Die Datei ist Agent-Konfiguration; Nutzerdokumentation liegt in `README.md`.

## Vorlage zum Befüllen

Der folgende Block ist als Template gedacht.

````markdown
<!-- template: Vorlage Action-Layer v0.4, https://dhcraft.org/Promptotyping/promptotyping-document/action-layer -->

# CLAUDE.md: [Projektname]

[Ein Absatz: was das Projekt ist, in einem Satz. Methode: Promptotyping, die Documents in `knowledge/` halten Domänenwissen und Spezifikation, aus denen implementiert wird. Rollenverteilung Mensch/Agent, falls klärungsbedürftig.]

## Wissensbasis

Die Wissensbasis liegt in `knowledge/`. Lies nach diesem Action-Layer bei jedem Sessionstart zuerst `knowledge/INDEX.md`, anschließend `knowledge/handoff.md` und danach die aufgabenrelevanten Declarative oder Action Documents. Konsultiere `knowledge/journal.md`, wenn Herkunft oder Entscheidungsgründe eines Übergangs benötigt werden.

| Aufgabe | Lies zuerst |
|---|---|
| [Datenarbeit] | [`knowledge/data.md`] |
| [Anforderungen, Entscheidungen] | [`knowledge/specification.md`] |
| [UI, Gestaltung] | [`knowledge/design.md`] |
| [Offener Eingang oder Übergabe] | [`knowledge/handoff.md`] |
| [Herkunft oder Entscheidungsgrund unklar] | [`knowledge/journal.md`] |

## Arbeitsregeln

- Handoff: Bei jedem Sessionstart `knowledge/handoff.md` lesen. Quelle und aktuelles Ziel jedes verwendeten Punkts prüfen, dauerhaften Inhalt zuerst integrieren, den Journal-Nachweis schreiben und den Punkt vollständig entfernen.
- Journal: Pro sachlich zusammengehörigem Übergang einen Eintrag vom Typ `integriert`, `verworfen` oder `korrigiert` schreiben. Aktuellen Projektstatus, offene Aufgaben und ausführliche Prüfresultate in ihren zuständigen Dokumenten halten.
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

## Werkzeug (austauschbarer Block: Claude Code)

<!-- Toolgebunden. Bei Portierung zu einem anderen Agenten wird nur dieser Block ersetzt; alles oberhalb bleibt unverändert. -->

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

[Falls vorhanden: was `.claude/settings.json` mechanisch erzwingt. Maschinengebundene Pfade nur hier, als maschinengebunden markiert.]
````

## Anwendung als Prompt-Template

Erzeugung beim Repo-Setup. Der Agent liest [Konvention Promptotyping Documents](#konvention-v0.1) und die vorhandene Wissensbasis, legt `knowledge/handoff.md` an, kopiert das Template und befüllt den Methodenkern aus den Knowledge-Dokumenten. Designprinzipien werden aus `design.md` imperativ übersetzt, die Wahrheitshierarchie aus der Dokumentstruktur abgeleitet und Scope-Grenzen aus `specification.md` übernommen. Wo die Wissensbasis eine Lücke lässt, fragt der Agent.

Review-Folie für eine bestehende CLAUDE.md. Geprüft wird die Trennung von Methodenkern und Werkzeug-Block, die Sessionstart-Reihenfolge über `INDEX.md` und `handoff.md`, die Integrationsreihenfolge vor dem Journal-Nachweis, die semantische Journal-Verdichtung sowie die Verweise auf lebende Quellen. Außerdem werden Routing-Tabelle und Wissensbasis gegeneinander geprüft.

Portierung. Beim Wechsel des Coding-Agenten wird der Werkzeug-Block durch das tool-eigene Pendant ersetzt; der Methodenkern wird unverändert übernommen. Parallele tool-spezifische Zwillingsdateien werden aus derselben Quelle erzeugt, nicht doppelt gepflegt.

## Beispiel

m3gim eröffnet seine CLAUDE.md mit der Selbstbeschränkung "Workflow-Regeln für Claude-Code-Sessions. Prozessual, nicht dokumentarisch. Für Dokumentation siehe `knowledge/`" und verankert die Spec-Hierarchie als Wahrheitsordnung vor jeder Änderung. zbz-ocr-tei kodiert die Wissensbasis-Disziplin als oberste Regel ("Wissen in `knowledge/`: nicht in CLAUDE.md duplizieren. Single Source of Truth pro Fakt") und führt Journal-Pflicht, Security und Commands als getrennte Sektionen. Beide zeigen den Pointer-Charakter; zbz-ocr-tei zeigt zugleich die Grenze: eine zu umfangreiche CLI-Referenz im Action-Layer erzeugt Drift-Wellen bei jeder Pipeline-Änderung.

## Begriffe

- Action-Layer: das imperative Dokument im Repo-Root, das den Agenten sozialisiert; analytischer Typ Action neben Knowledge und Process.
- Methodenkern: der portable Teil des Action-Layers (Wissensbasis-Routing, Handoff-Verarbeitung, Journal-Provenienz, CEIL-Regeln, Designprinzipien, Scope, Wahrheitshierarchie), unabhängig vom konkreten Coding-Agenten.
- Werkzeug-Block: der austauschbare, toolgebundene Teil (Befehle, Hooks, Permissions, Security, Plattform-Konventionen).
- Komposition: das Prinzip, dass ästhetische und faktische Steuerung aus dem Verweis eines Action-Dokuments auf ein Knowledge-Dokument entsteht (design.md → CLAUDE.md), nicht aus einem Hybridtyp.
- Drift: Auseinanderlaufen von CLAUDE.md und Realität (Code, Daten, Wissensbasis); häufigstes Fehlerbild des Dokumenttyps, primär verursacht durch duplizierte volatile Inhalte.

## Versionshistorie

- 0.4 (2026-08-21): `handoff.md` in den Sessionstart aufgenommen. Journal-Pflicht auf sachlich zusammengehörige Übergänge und semantische Verdichtung umgestellt.
- 0.3 (2026-07-24): Identitäts-Kernsatz auf die Beschreibung des `knowledge/`-Ordners umgestellt, nachdem die Rangbehauptung (Documents als primäres Artefakt, Code als regenerierbares Nebenprodukt) zurückgenommen wurde. Bestehende Repos ziehen den Kopfabsatz beim nächsten Anfassen der CLAUDE.md nach.
- 0.2 (2026-07-19): Freigabe (status complete), englisches Funktionsvokabular (Agent Instructions), Lebenszyklus-Absatz, Frontmatter-Abweichung ratifiziert. Keine Migrationspflicht für bestehende Repos.
- 0.1 (2026-06-09): Erstfassung, empirisch destilliert aus 35 Repos (Action-Layer- und Journal-Praxis in Promptotyping-Repos 2026-06).

## Related

- [Vorlagen Promptotyping Documents](#vorlagen)
- [Konvention Promptotyping Documents](#konvention-v0.1)
- [Promptotyping](#ueberblick)
- Agent-Sozialisierung
- Knowledge-Action-Komposition
- Action-Layer- und Journal-Praxis in Promptotyping-Repos 2026-06
- [Vorlage Design](#promptotyping-document-design)
- [Vorlage Journal](#promptotyping-document-journal)
- [Vorlage Handoff](#promptotyping-document-handoff)
- Context Engineering
