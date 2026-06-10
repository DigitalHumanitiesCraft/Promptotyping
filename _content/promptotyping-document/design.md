---
title: Vorlage Design
slug: design
version: "0.1"
status: complete
source: Vorlage Design
mirrored: 2026-06-10
machine-url: https://dhcraft.org/Promptotyping/_content/promptotyping-document/design.md
---

# Vorlage Design

Diese Vorlage strukturiert das Gestalt-Dokument einer Promptotyping-Wissensbasis. Das resultierende Dokument heißt typischerweise `design.md` und liegt im `knowledge/`-Ordner des Repos. Es ist deklaratives Knowledge; es beschreibt Designhaltung, Designsystem, Interaktionsmuster und Visualisierungslogik. Die Sozialisierung des Coding-Agenten auf der ästhetischen Schicht (siehe Glossar, [Agent-Sozialisierung](#glossar)) entsteht durch Komposition: `CLAUDE.md` (im Repo-Root, Action) verweist auf `design.md` als Wertequelle. Das Knowledge bleibt deklarativ, der Action-Layer übersetzt es in Imperative.

## Geltungsbereich

Die Vorlage trägt, sobald das Projekt eine UI hat, also visuelle Oberflächen, mit denen ein Mensch interagiert. Bei reinen Pipeline-, Datenmodell- oder Bibliotheks-Repos entfällt sie. Sie trägt nicht für reine Style-Guides oder Designsystem-Spezifikationen ohne Projektbezug; diese sind eigene Artefakte.

## Funktion des Dokuments

Das Dokument dokumentiert Gestaltungsentscheidungen für menschliche Leser: welche Designhaltung trägt das Projekt, welches Designsystem ist eingesetzt, welche Interaktionsmuster gelten, welche Visualisierungslogik gilt. Adressiert sind drei Lesergruppen: ein Reviewer, der die Designhaltung prüft; ein UX-Designer, der gegen die Designhaltung weiterarbeitet; ein Coding-Agent, der vor UI-Generierung das Dokument liest, um die Werteskala des Projekts zu kennen.

Die Sozialisierung des Agenten auf der ästhetischen Schicht (Agent-Sozialisierung) ist kein eigenständiger Bestandteil des Designdokuments, sondern ein Kompositions-Effekt: `CLAUDE.md` im Repo-Root verweist auf `design.md` und führt eine Sektion mit imperativ formulierten Designprinzipien, die aus der Designhaltung abgeleitet sind. Das Designdokument bleibt deklarativ, der Action-Layer übersetzt es in Imperative. Diese Aufgabenteilung verhindert, dass ein Knowledge-Dokument seinen analytischen Typ wechselt.

## Strukturprinzipien

Drei Prinzipien tragen das Dokument.

Erstens trennt es Gestalt von Bauweise und Substanz. Wie etwas aussieht, ist nicht wie es technisch realisiert ist (`architecture.md`) und nicht was es leisten soll (`specification.md`). Eine Vermischung lässt jede UI-Änderung in alle drei Dokumente einsickern.

Zweitens verweist es auf den Code als Source of Truth, statt Token-Werte zu kopieren. Konkrete Hex-Werte, Schriftgrößen, Spacing-Tokens stehen in der Token-Datei (typischerweise `tokens.css` oder ähnlich). Das Dokument beschreibt das System, nicht die Werte; sonst veraltet es bei jedem Token-Refactor.

Drittens bleibt es deklarativ. Designhaltung, Tokens-Kategorien, Interaktionsmuster werden beschrieben, nicht als Imperative an den Agenten formuliert. Die imperative Übersetzung passiert im Action-Layer (`CLAUDE.md` im Repo-Root), der auf dieses Dokument als Wertequelle verweist. Wer Imperativ-Sätze in das Designdokument schreibt, verletzt die Knowledge/Action-Trennung.

## Frontmatter-Schema

Das Dokument folgt dem Frontmatter-Schema aus der [Konvention Promptotyping Documents](#konvention-v0.1) (Pflichtkern: `title, project, method, status, created, updated`). Spezifisch für Design:

- `topics:` typisch sind Information Visualisation und Scholar-Centered Design. Sie verorten den Agenten in den Wissensfeldern, die ihm bei UI-Generierung Halt geben: Tufte, Munzner, Bertin als Hintergrund statt generische UI-Patterns. Bei nicht-visualisierungslastigen Frontends statt Information Visualisation ein anderes UX-Wissensfeld wie Interaction Design.
- `knowledge-sources:` selten genutzt, weil Designentscheidungen meist projekt-intern getroffen werden. Wenn ein etabliertes Designsystem (Material, Carbon, IBM Design Language) als Bezug dient, wird es hier als URI hinterlegt.
- `related:` typischerweise `specification`, `architecture`.

## Abschnitte im Detail

### Lead

Funktion: in zwei bis drei Sätzen die Designhaltung benennen. Inhalt: Charakter der Anwendung (Forschungswerkzeug, didaktische Edition, explorative Datenansicht), wessen Tradition sie nahesteht, wovon sie sich abgrenzt. Der Lead trägt die Designentscheidung in einem Satz; alle weiteren Sektionen entfalten sie.

### Designhaltung

Funktion: das ästhetische Wertesystem explizit machen. Inhalt: drei bis fünf Sätze über die grundlegende Haltung, etwa "das Interface positioniert sich als Forschungswerkzeug, nicht als Dashboard. Datenqualität wird nicht kaschiert; Lücken stehen so da, wie sie im Bestand sind". Diese Sektion ist später die Quelle, aus der die Action-Prinzipien für den Agenten abgeleitet werden.

### Designsystem

Funktion: die strukturellen Bestandteile benennen. Inhalt: Tokens (Farben, Typografie, Spacing) als Kategorien mit Verweis auf die Token-Datei im Repo, nicht als Wertetabelle. Komponenten (Cards, Buttons, Filter) als Kategorien mit Verweis auf den Komponentenordner. Layoutprinzipien (Grid, Container, responsive Breakpoints) in Prosa.

### Interaktionsmuster

Funktion: das Verhalten der Anwendung beschreiben. Inhalt: wie funktionieren Filter, Navigation, Profile, Detailansichten. Beschreibt die Logik der Interaktion, nicht die Implementation, etwa "Filter wirken kumulativ, der gefilterte Zustand wird durch Akzent-Färbung der Stat-Cards sichtbar", nicht "in `applyFilters()` wird die Klasse `is-filtered` gesetzt".

### Visualisierungslogik

Funktion: bei Datenvisualisierungen die methodische Wahl dokumentieren. Inhalt: welche Diagrammtypen für welche Forschungsfrage, welche bewusst ausgeschlossen wurden, wie mit Datenunsicherheit visuell umgegangen wird (Coverage-Anker, Provenance-Marker, Lücken-Darstellung). Diese Sektion entfällt, wenn das Projekt keine wesentlichen Datenvisualisierungen trägt.

### Anbindung an den Action-Layer

Funktion: dokumentieren, dass und wie `CLAUDE.md` (im Repo-Root) auf dieses Dokument verweist. Inhalt: ein knapper Hinweis, dass die imperative Übersetzung der Designhaltung in der `CLAUDE.md` liegt, typischerweise als Sektion "Designprinzipien" mit drei bis acht imperativ formulierten Sätzen, die aus der Designhaltung abgeleitet sind. Beispielhaft: aus dem Satz "Datenqualität wird nicht kaschiert" wird in CLAUDE.md "Lücken in den Daten werden visuell markiert, nicht ausgeblendet". Das Designdokument selbst trägt keine Imperative; es liefert die Wertequelle, aus der der Action-Layer schöpft.

## Was nicht reingehört

- Konkrete Token-Werte (Hex-Farben, Pixel-Größen, Schriftnamen). Diese liegen in der Token-Datei im Code.
- Komponenten-Implementation. Wie eine Komponente technisch gebaut ist, liegt im Code.
- Anforderungen oder Features. Was die Anwendung leistet, gehört in `specification.md`.
- Stack-Wahl. Vanilla JS vs. Framework ist Architektur, nicht Design.

## Vorlage zum Befüllen

Der folgende Block ist als Template gedacht.

````markdown
---
title: Gestaltung
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
  name: Vorlage Design
  version: 0.1
  url: https://dhcraft.org/Promptotyping/promptotyping-document/design
  alias: https://dhcraft.org/Promptotyping/#promptotyping-document-design
topics: ["[[Information Visualisation]]", "[[Scholar-Centered Design]]"]
related: [specification, architecture]
---

<!-- Lead: zwei bis drei Sätze. Designhaltung in einem Satz, Charakter der Anwendung. -->

[Lead-Absatz]

## Designhaltung

<!-- Drei bis fünf Sätze über das ästhetische Wertesystem. Quelle für die Agent-Prinzipien weiter unten. -->

[...]

## Designsystem

<!-- Tokens, Komponenten, Layout als Kategorien mit Verweis auf Code als Source of Truth. Keine Werte hier. -->

Tokens. [Beschreibung der Token-Kategorien, Verweis auf Token-Datei.]

Komponenten. [Beschreibung der Komponenten-Kategorien, Verweis auf Komponentenordner.]

Layout. [Grid, Container, responsive Breakpoints in Prosa.]

## Interaktionsmuster

<!-- Verhalten der Anwendung, nicht Implementation. Filter, Navigation, Profile, Detailansichten. -->

[...]

## Visualisierungslogik

<!-- Optional. Bei Datenvisualisierungen: methodische Wahl, Umgang mit Unsicherheit. -->

[...]

## Anbindung an den Action-Layer

<!-- Knapper Hinweis: CLAUDE.md im Repo-Root verweist auf dieses Dokument und führt die imperative Übersetzung als "Designprinzipien"-Sektion. Beispielhaft, was dort stehen würde. -->

Die imperative Übersetzung der oben beschriebenen Designhaltung lebt im Action-Layer ([`../CLAUDE.md`](../CLAUDE.md), Sektion "Designprinzipien"). Beispielhafte Imperative, abgeleitet aus der Designhaltung:

- [Imperativ-Satz, abgeleitet aus Designhaltung]
- [Imperativ-Satz, abgeleitet aus Designsystem]

Diese Imperative gehören in `CLAUDE.md`, nicht in dieses Dokument. Hier stehen sie nur als Beispiel-Hinweis.
````

## Anwendung als Prompt-Template

Strukturanker beim Aufsetzen des Designsystems. Der Agent erhält den Template-Block und füllt zuerst Designhaltung und Designsystem aus, weil die imperative Übersetzung im Action-Layer (`CLAUDE.md`) aus diesen abgeleitet wird. Die Imperative entstehen typischerweise nach drei bis fünf UI-Iterationen; vorher sind sie spekulativ, weil die tragenden Prinzipien noch nicht durch Praxis validiert sind.

Review-Folie für ein bestehendes Design-Dokument. Ein vorhandenes `design.md` wird gegen die Vorlage gehalten, um zu prüfen, ob die Designhaltung deklarativ und schärfbar formuliert ist, ob die imperative Übersetzung in `CLAUDE.md` (nicht im Designdokument selbst) lebt, ob Token-Werte fehlen statt im Dokument zu stehen, und ob Interaktionsmuster die Logik beschreiben statt Implementation zu zitieren.

## Beispiel

HerData führt `design.md` mit Lead, Designhaltung, Designsystem, Interaktionsmuster und Designprinzipien für den Agenten. Charakteristisch ist der Lead-Satz: "Komponenten-Detail liegt im Code, nicht in der Doku, weil es dort schneller veraltet als nutzt." Diese Begründung trägt das zweite Strukturprinzip (Verweis auf Code als Source of Truth) als ausgesprochene Regel in den Lead.

## Begriffe

- Designhaltung: das grundlegende ästhetische Wertesystem eines Projekts, in drei bis fünf Sätzen formuliert.
- Designsystem: die Sammlung der Tokens, Komponenten und Layoutprinzipien, die ein Projekt einsetzt.
- Designprinzip: imperativ formulierte Regel, die den Coding-Agenten bei UI-Generierung leitet. Lebt im Action-Layer (`CLAUDE.md`), nicht im Designdokument selbst.
- Anbindung an den Action-Layer: die Komposition, durch die `CLAUDE.md` auf das deklarative Designdokument verweist und dessen Werte in Imperative übersetzt.

## Related

- [Vorlage Specification](#promptotyping-document-specification)
- [Vorlage Architecture](#promptotyping-document-architecture)
- [Vorlage Action-Layer](#promptotyping-document-action-layer)
- [Konvention Promptotyping Documents](#konvention-v0.1)
