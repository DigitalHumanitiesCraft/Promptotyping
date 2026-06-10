---
title: Vorlage Action-Layer
slug: action-layer
version: "0.1"
status: "Entwurf, in Erprobung"
source: Vorlage Action-Layer
mirrored: 2026-06-10
machine-url: https://dhcraft.org/Promptotyping/_content/promptotyping-document/action-layer.md
---

# Vorlage Action-Layer

> Status: Entwurf, in Erprobung. Diese neunte Vorlage ist seit 2026-06-09 im Katalog, ihre Freigabe durch den Critical Expert steht noch aus. Sie wurde empirisch aus einem Sweep über 35 Repos destilliert; einzelne Festlegungen (besonders der Verzicht auf YAML-Frontmatter und die kanonische Adressform) sind noch zu ratifizieren.

Diese Vorlage strukturiert das Action-Dokument eines Promptotyping-Repos. Das resultierende Dokument heißt `CLAUDE.md` und liegt im Repo-Root, nicht im `knowledge/`-Ordner. Es sozialisiert den Coding-Agenten: imperative Regeln, die auf die deklarative Wissensbasis verweisen, plus ein klar abgegrenzter, austauschbarer Werkzeug-Block. Der Action-Layer trägt kein Wissen; er routet zu Wissen und übersetzt es in Imperative.

## Geltungsbereich

Die Vorlage trägt für jedes Promptotyping-Repo, weil die Funktion Agent-Sozialisierung in der [Konvention Promptotyping Documents](#konvention-v0.1) als immer-relevant geführt wird. Sie trägt nicht für Forschungsleitstelle-Spezialdokumente (`RULES.md`, `INSTRUCTIONS.md`, `cloud-commands.md` für mehrere parallele Agenten mit differenzierten Rollen) und nicht für den Vault selbst. Bei einem anderen Coding-Agenten als Claude Code (Cursor, Gemini CLI) trägt der Methodenkern der Vorlage unverändert; nur der Werkzeug-Block wird gegen das tool-eigene Format (`.cursorrules`, `GEMINI.md`) getauscht.

## Funktion des Dokuments

CLAUDE.md ist der Action-Layer der Wissensbasis: imperativ, verhaltenssteuernd, vom Werkzeug bei jedem Sessionstart automatisch injiziert. Es beantwortet "wie soll der Agent sich in diesem Repo verhalten, auch ästhetisch". Adressiert ist ausschließlich der Coding-Agent; Menschen lesen `README.md` und `knowledge/`. Diagnoseraster der Konvention: formal falscher Output, Stilbruch, ignoriertes Verbot, hier prüfen. Inhaltlich falscher Output: Knowledge prüfen, nicht hier nachbessern.

## Strukturprinzipien

Drei Prinzipien tragen das Dokument.

Erstens die Trennung von Methodenkern und Werkzeug-Block. Der Methodenkern ist portabel: Wissensbasis-Verweis mit Lesepfad, Journal-Pflicht, CEIL-Prüfregeln, Designprinzipien, Scope-Negativliste, Wahrheitshierarchie. Der Werkzeug-Block ist austauschbar: Befehle, Hooks, Permissions, Stack-Konventionen, Security, maschinen- und plattformgebundene Details. Prüfkriterium: Wird der Werkzeug-Block gelöscht, muss der Methodenkern ohne Änderung in ein anderes Agent-Format übertragbar sein. Werkzeuggebundene Sätze im Methodenkern sind Fehler (sugw-Befund: "Keine Annahmen" neben `core.longpaths` in derselben Sektion).

Zweitens Komposition statt Duplikation. `design.md` bleibt deklaratives Knowledge-Dokument; CLAUDE.md führt die imperative Übersetzung der Designhaltung und benennt `design.md` als Wertequelle. Dasselbe Prinzip gilt für alle volatilen Inhalte: Zahlen, Stände und Inventare werden nie kopiert, sondern auf ihre lebende Quelle verlinkt (Snapshot-Report, `journal.md`, Konfig-Konstante). Die ästhetische und faktische Steuerung kommt aus der Komposition zweier Dokumente, nicht aus einem Hybriddokument.

Drittens Distillation. CLAUDE.md ist ein knapper Pointer und trägt nur, was weder aus dem Code noch aus der Wissensbasis ableitbar ist. Jede Zeile kostet Kontextbudget in jeder Session. Referenzformulierungen aus der Praxis: "this file is the concise pointer" (mhdbdb-tei-only), "Prozessual, nicht dokumentarisch" (m3gim), "what is not derivable from the code alone" (HerData).

## Frontmatter-Schema

Abweichend von den `knowledge/`-Vorlagen trägt CLAUDE.md kein YAML-Frontmatter. Begründung: Das Dokument wird vom Werkzeug als roher Prompt-Kontext injiziert, und in der gesamten Belegbasis (35 Repos) führt keine einzige CLAUDE.md Frontmatter. Die Vorlagen-Provenienz steht stattdessen als HTML-Kommentar in der ersten Zeile:

```markdown
<!-- template: Vorlage Action-Layer v0.1, URL folgt nach ADR Anker-Namespace -->
```

Die kanonische URL ist offen, bis der Anker-Namespace auf der Promptotyping-Site entschieden ist (neunter Slug unter `/promptotyping-document/` oder eigener Typ `/action-layer/`); die Entscheidung braucht einen ADR in der `specification.md` des Site-Repos. Diese Frontmatter-Abweichung vom `template:`-Pflichtkern der Konvention ist vom Critical Expert zu ratifizieren.

## Abschnitte im Detail

### Identität (Kopf)

Funktion: den Agenten in einem Absatz verorten. Inhalt: was das Projekt ist (ein Satz), Methode Promptotyping mit dem Kernsatz, dass die Documents in `knowledge/` das primäre Artefakt sind und Code als regenerierbares Nebenprodukt gilt, Rollenverteilung Mensch/Agent, falls klärungsbedürftig (Critical Expert, Projektleiter, nicht Entwickler). Kein Marketing, keine Geschichte.

### Wissensbasis

Funktion: Routing in die deklarative Wissensbasis. Inhalt: Verweis auf `knowledge/` mit `INDEX.md` als Einstieg; Lesereihenfolge beim Sessionstart (typisch: INDEX → project → letzter Journal-Eintrag → aufgabenrelevantes Dokument); bei mehr als drei Wissensdokumenten eine Routing-Tabelle Aufgabe → Dokument (sugw-Muster "Aufgabe | Lies zuerst", dia-xai-Muster "For metrics: EQUALIS.md"). Der Verweis muss auf repo-interne Quellen zeigen; ein Repo, dessen Methodenwissen nur in einem externen Vault liegt, ist für eine Session ohne Vault-Zugriff blind.

### Arbeitsregeln

Funktion: der portable Methodenkern als Regelliste. Vier Pflicht-Regeln, projektspezifisch konkretisiert:

- Journal-Pflicht. Beim Wiedereinstieg zuerst den letzten Eintrag in `knowledge/journal.md` lesen; am Ende jeder Session mit nicht-trivialen Änderungen einen Eintrag anhängen (Struktur nach der [Vorlage Journal](#promptotyping-document-journal): Ziel, Verlauf, Ergebnis, Dead Ends). Die Regel gehört hierher, nicht nur in die Journal-Konvention; Repos ohne kodifizierte Pflicht führen das Journal nur zufällig.
- Verifikation und CEIL. Keine erfundenen Werte, Begriffe oder Zitate; bei fehlendem Wissen nachfragen statt raten. Projektspezifische Checkpoints benennen: was wird wann dem Critical Expert vorgelegt, was läuft nie ohne Freigabe. Wo maschinelle Prüfungen existieren (Tests, Validierungsskripte, Datenverträge), sind sie als Pflichtlauf zu nennen.
- Wahrheitshierarchie. Vorrangregel pro Konfliktklasse: welche Quelle ist kanonisch, welche abgeleitet (TEI vor JSON, Spec vor Code, Speicherstand vor Gedächtnis für Zahlen). Schlusssatz: niemals stillschweigend divergieren lassen, Widersprüche melden.
- Quantitäten-Regel. Keine volatilen Zahlen in dieser Datei oder in Knowledge-Dokumenten; stattdessen lebende Quelle benennen (Report, Snapshot, `journal.md` für Stand und offene Punkte).

### Designprinzipien

Funktion: imperative Übersetzung der Designhaltung. Inhalt: `design.md` als Wertequelle benennen, Anweisung, vor UI- oder Textgenerierung das `design.md` zu lesen, dann drei bis sieben imperativ formulierte Sätze, die aus der Designhaltung abgeleitet sind. Entfällt nur, wenn das Projekt keine Gestalt-Funktion hat (kein UI, keine gestalteten Texte). Die Prinzipien sind verbindlich formuliert ("Nutze Farbe nur funktional"), nicht beschreibend.

### Scope

Funktion: Negativliste gegen Feature-Drift und Werkzeug-Fehlgriffe. Inhalt: was das Projekt bewusst nicht tut (mit Verweis auf die Entscheidung in `specification.md` oder `journal.md`) und was der Agent nicht tun soll (rote Linien: keine destruktiven Operationen ohne Auftrag, keine Framework-Einführung, kein Scope jenseits der aktuellen Phase). Auslassungen sind Designentscheidungen und werden als solche benannt.

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
- Projektstatus-Erzählung und Sitzungsergebnisse. Stand und offene Punkte leben im Journal oder in einer dedizierten Statusquelle; ein datierter "Aktueller Stand"-Block in CLAUDE.md veraltet nachweislich (multi-claude-vault, FGKI25, SocialAI).
- Deklaratives Domänen- und Architekturwissen. Das gehört in `knowledge/`; CLAUDE.md verweist.
- Spezifikation und Entscheidungen. Anforderungen und ADRs leben in `specification.md`; CLAUDE.md darf einzelne Entscheidungen als Regel zitieren, mit Verweis auf die Quelle.
- Secrets, personenbezogene Daten, Modellpreise, hartkodierte Modellnamen im Methodenkern.
- Inhalte für menschliche Leser. Die Datei ist Agent-Konfiguration; Nutzerdokumentation liegt in `README.md`.

## Vorlage zum Befüllen

Der folgende Block ist als Template gedacht.

````markdown
<!-- template: Vorlage Action-Layer v0.1, URL folgt nach ADR Anker-Namespace -->

# CLAUDE.md: [Projektname]

[Ein Absatz: was das Projekt ist, in einem Satz. Methode: Promptotyping, die Documents in `knowledge/` sind das primäre Artefakt, Code ist regenerierbares Nebenprodukt. Rollenverteilung Mensch/Agent, falls klärungsbedürftig.]

## Wissensbasis

Die Wissensbasis liegt in `knowledge/`, Einstieg über `knowledge/INDEX.md`. Lies beim Sessionstart: [`INDEX.md`] → [`project.md`] → [letzter Eintrag in `journal.md`] → [aufgabenrelevantes Dokument].

| Aufgabe | Lies zuerst |
|---|---|
| [Datenarbeit] | [`knowledge/data.md`] |
| [Anforderungen, Entscheidungen] | [`knowledge/specification.md`] |
| [UI, Gestaltung] | [`knowledge/design.md`] |
| [Entscheidungslogik unklar, Wiedereinstieg] | [`knowledge/journal.md`] |

## Arbeitsregeln

- Journal-Pflicht: Am Ende jeder Session mit nicht-trivialen Änderungen einen Eintrag in `knowledge/journal.md` anhängen (Ziel, Verlauf, Ergebnis, Dead Ends). Beim Wiedereinstieg zuerst den letzten Eintrag lesen.
- Nichts erfinden: [projektspezifische Regel: welche Werte, Begriffe, Zitate nur aus welchen Quellen stammen dürfen]. Bei fehlendem Wissen nachfragen, nicht raten.
- Checkpoints: [was wird wann dem Critical Expert vorgelegt; was läuft nie ohne Freigabe; welche Prüfläufe sind Pflicht].
- Wahrheitshierarchie: Bei Widerspruch gilt [kanonische Quelle] vor [abgeleiteter Quelle]. [Weitere Vorrangregeln.] Niemals stillschweigend divergieren lassen, Widersprüche melden.
- Keine volatilen Zahlen in dieser Datei oder in Knowledge-Dokumenten. Aktuelle Zahlen → [lebende Quelle]. Stand und offene Aufgaben → `knowledge/journal.md`.

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

Erzeugung beim Repo-Setup. Der Agent liest die [Konvention Promptotyping Documents](#konvention-v0.1) und die vorhandene Wissensbasis, kopiert das Template und befüllt den Methodenkern aus den Knowledge-Dokumenten (Designprinzipien aus `design.md` imperativ übersetzen, Wahrheitshierarchie aus der Dokumentstruktur ableiten, Scope-Negativliste aus `specification.md`). Wo die Wissensbasis eine Lücke lässt, fragt der Agent, statt zu setzen.

Review-Folie für eine bestehende CLAUDE.md. Geprüft wird: Ist die Trennung Methodenkern/Werkzeug-Block eingehalten oder stehen werkzeuggebundene Sätze im Methodenkern? Stehen volatile Zahlen, Inventare oder Statusblöcke in der Datei? Ist die Journal-Pflicht kodifiziert, obwohl ein Journal existiert? Verweist die Designprinzipien-Sektion auf `design.md` als Wertequelle? Widerspricht die Datei der Wissensbasis (verworfene Schemata, fehlende Dokumente in Routing-Tabellen)? Drift-Befunde werden als Korrekturen vorgeschlagen, nicht still behoben.

Portierung. Beim Wechsel des Coding-Agenten wird der Werkzeug-Block durch das tool-eigene Pendant ersetzt; der Methodenkern wird unverändert übernommen. Parallele tool-spezifische Zwillingsdateien werden aus derselben Quelle erzeugt, nicht doppelt gepflegt.

## Beispiel

m3gim eröffnet seine CLAUDE.md mit der Selbstbeschränkung "Workflow-Regeln für Claude-Code-Sessions. Prozessual, nicht dokumentarisch. Für Dokumentation siehe `knowledge/`" und verankert die Spec-Hierarchie als Wahrheitsordnung vor jeder Änderung. zbz-ocr-tei kodiert die Wissensbasis-Disziplin als oberste Regel ("Wissen in `knowledge/`: nicht in CLAUDE.md duplizieren. Single Source of Truth pro Fakt") und führt Journal-Pflicht, Security und Commands als getrennte Sektionen. Beide zeigen den Pointer-Charakter; zbz-ocr-tei zeigt zugleich die Grenze: eine zu umfangreiche CLI-Referenz im Action-Layer erzeugt Drift-Wellen bei jeder Pipeline-Änderung.

## Begriffe

- Action-Layer: das imperative Dokument im Repo-Root, das den Agenten sozialisiert; analytischer Typ Action neben Knowledge und Process.
- Methodenkern: der portable Teil des Action-Layers (Wissensbasis-Routing, Journal-Pflicht, CEIL-Regeln, Designprinzipien, Scope, Wahrheitshierarchie), unabhängig vom konkreten Coding-Agenten.
- Werkzeug-Block: der austauschbare, toolgebundene Teil (Befehle, Hooks, Permissions, Security, Plattform-Konventionen).
- Komposition: das Prinzip, dass ästhetische und faktische Steuerung aus dem Verweis eines Action-Dokuments auf ein Knowledge-Dokument entsteht (design.md → CLAUDE.md), nicht aus einem Hybridtyp.
- Drift: Auseinanderlaufen von CLAUDE.md und Realität (Code, Daten, Wissensbasis); häufigstes Fehlerbild des Dokumenttyps, primär verursacht durch duplizierte volatile Inhalte.

## Related

- [Vorlage Design](#promptotyping-document-design)
- [Vorlage Journal](#promptotyping-document-journal)
- [Konvention Promptotyping Documents](#konvention-v0.1)
