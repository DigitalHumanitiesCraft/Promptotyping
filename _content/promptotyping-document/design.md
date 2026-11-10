---
title: Vorlage Design
slug: design
version: "0.3"
status: complete
source: Vorlage Design
mirrored: 2026-06-10
machine-url: https://dhcraft.org/Promptotyping/_content/promptotyping-document/design.md
---
# Vorlage Design

Diese Vorlage strukturiert das Design-Dokument einer Promptotyping-Wissensbasis. Das resultierende `design.md` liegt im `knowledge/`-Ordner und beschreibt Designhaltung, Designsystem, Interaktionsmuster und Visualisierungslogik. Der vorhandene Action-Layer verweist auf dieses deklarative Wissen als Wertequelle und übersetzt es in Handlungsanweisungen für den Agenten. Diese Kopplung beschreibt Agent-Sozialisierung.

## Geltungsbereich

Die Vorlage trägt, sobald das Projekt eine UI hat, also visuelle Oberflächen, mit denen ein Mensch interagiert. Bei reinen Pipeline-, Datenmodell- oder Bibliotheks-Repos entfällt sie. Sie trägt nicht für reine Style-Guides oder Designsystem-Spezifikationen ohne Projektbezug; diese sind eigene Artefakte.

Lebenszyklus: das Dokument entsteht, sobald die Designhaltung durch die ersten UI-Iterationen validiert ist; vorher ist sie spekulativ. Aktualisiert wird es bei Designsystem-Refactor und beim Entfernen einer beschriebenen Ansicht, im selben Arbeitsgang wie der Rückbau; ein `design.md`, das eine gelöschte Ansicht weiter beschreibt, teilt das Verfallsmuster der Architektur. Token-Werte veralten hier nie, weil sie nie hier stehen (zweites Strukturprinzip).

Die Anbindung an den Action-Layer ist eine optionale Kopplung. `design.md` bleibt auch ohne einen solchen Abnehmer ein vollständiges deklaratives Dokument. Ein vorhandener Action-Layer übersetzt die Designhaltung in Imperative und nennt `design.md` als Wertequelle. Sein tatsächlicher Einstiegspfad folgt [Vorlage Action-Layer](#promptotyping-document-action-layer). Die empirische Belegbasis enthält auch Repos ohne abnehmende `CLAUDE.md`.

## Funktion des Dokuments

Das Dokument dokumentiert Gestaltungsentscheidungen für menschliche Leser: welche Designhaltung trägt das Projekt, welches Designsystem ist eingesetzt, welche Interaktionsmuster gelten, welche Visualisierungslogik gilt. Adressiert sind drei Lesergruppen: ein Reviewer, der die Designhaltung prüft; ein UX-Designer, der gegen die Designhaltung weiterarbeitet; ein Coding-Agent, der vor UI-Generierung das Dokument liest, um die Werteskala des Projekts zu kennen.

Der Action-Layer im Repo-Root verweist auf `design.md` und führt die daraus abgeleiteten Designprinzipien. Das Designdokument bleibt die deklarative Wertequelle. Diese Aufgabenteilung erhält die Trennung von Beschreibung und Handlungsanweisung.

## Strukturprinzipien

Drei Prinzipien tragen das Dokument.

Erstens trennt es Design von Architecture und Specification. Wie etwas aussieht, ist nicht wie es technisch realisiert ist (`architecture.md`) und nicht was es leisten soll (`specification.md`). Eine Vermischung lässt jede UI-Änderung in alle drei Dokumente einsickern.

Zweitens verweist es auf den Code als Source of Truth, statt Token-Werte zu kopieren. Konkrete Hex-Werte, Schriftgrößen, Spacing-Tokens stehen in der Token-Datei (typischerweise `tokens.css` oder ähnlich). Das Dokument beschreibt das System, nicht die Werte; sonst veraltet es bei jedem Token-Refactor.

Drittens bleibt es deklarativ. Designhaltung, Token-Kategorien und Interaktionsmuster werden deklarativ beschrieben. Die imperative Übersetzung liegt im tatsächlichen Action-Layer im Repo-Root, der dieses Dokument als Wertequelle referenziert.

## Frontmatter-Schema

Das Dokument folgt dem Frontmatter-Schema aus [Konvention Promptotyping Documents](#konvention-v0.1) (Pflichtkern: `title, project, method, status, created, updated`). Spezifisch für Design:

- `topics:` typisch sind `[[Information Visualisation]]` und `[[Scholar-Centered Design]]`. Sie verorten den Agenten in den Wissensfeldern, die ihm bei UI-Generierung Halt geben: Tufte, Munzner, Bertin als Hintergrund statt generische UI-Patterns. Bei nicht-visualisierungslastigen Frontends statt `[[Information Visualisation]]` ein anderes UX-Wissensfeld wie `[[Human-Centred Design]]`.
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

Der Abschnitt verlinkt den tatsächlich vorhandenen Action-Layer und dessen abgeleitete Designprinzipien. Er wird nur geführt, wenn diese Kopplung existiert. Der gewählte Dateiname richtet sich nach [Vorlage Action-Layer](#promptotyping-document-action-layer).

## Was nicht reingehört

- Konkrete Token-Werte (Hex-Farben, Pixel-Größen, Schriftnamen). Diese liegen in der Token-Datei im Code.
- Komponenten-Implementation. Wie eine Komponente technisch gebaut ist, liegt im Code.
- Anforderungen oder Features. Was die Anwendung leistet, gehört in `specification.md`.
- Stack-Wahl. Vanilla JS vs. Framework ist Architektur, nicht Design.

## Vorlage zum Befüllen

Der folgende Block ist als Template gedacht.

````markdown
---
title: Design
project:
  name: [Projektname]
  repository: [Repository-URL]
status: draft
language: [de | en]
version: [Repo-Schema-Version]
created: [YYYY-MM-DD]
updated: [YYYY-MM-DD]
authors: [Autor 1, Autor 2]
generated-with: [Harness (LLM), falls relevant]
method:
  name: Promptotyping
  url: https://lisa.gerda-henkel-stiftung.de/digitale_geschichte_pollin
template:
  name: Vorlage Design
  version: 0.3
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

<!-- Optional. Den tatsächlich vorhandenen Action-Layer und seinen Abschnitt mit den abgeleiteten Designprinzipien verlinken. Den Pfad anhand des Repositorys einsetzen, etwa ../AGENTS.md oder ../CLAUDE.md. Fehlt die Kopplung, diesen Abschnitt weglassen. -->

[Verweis auf den vorhandenen Action-Layer und den Abschnitt mit der imperativen Übersetzung dieser Designhaltung.]
````

## Anwendung als Prompt-Template

Beim Aufsetzen des Designsystems werden zunächst Designhaltung und Designsystem ausgearbeitet. Daraus wird die imperative Übersetzung im vorhandenen Action-Layer abgeleitet und gegen die tatsächlichen UI-Iterationen geprüft.

Bei der Prüfung eines bestehenden `design.md` werden die deklarative Designhaltung, der tatsächliche Verweis auf den Action-Layer, die Pflege der Token-Werte im Code und die Beschreibung der Interaktionslogik gegen die Vorlage geprüft.

## Beispiel

HerData führt `design.md` mit Lead, Designhaltung, Designsystem, Interaktionsmuster und Designprinzipien für den Agenten. Charakteristisch ist der Lead-Satz: "Komponenten-Detail liegt im Code, nicht in der Doku, weil es dort schneller veraltet als nutzt." Diese Begründung trägt das zweite Strukturprinzip (Verweis auf Code als Source of Truth) als ausgesprochene Regel in den Lead.

Zwei Fehlmuster aus dem Inhaltsaudit vom Juli (2026-07-19 - Promptotyping-Wissensbasen Inhaltsaudit (Befund)): ein `design.md`, das eine entfernte Komponente über ein Drittel des Dokuments weiter als aktiv beschreibt, und Selbstbeschreibungs-Abschnitte ("Was dieses Dokument nicht enthält"), die seit der Regeländerung vom 2026-06-29 untersagt sind.

## Begriffe

- Designhaltung: das grundlegende ästhetische Wertesystem eines Projekts, in drei bis fünf Sätzen formuliert.
- Designsystem: die Sammlung der Tokens, Komponenten und Layoutprinzipien, die ein Projekt einsetzt.
- Designprinzip. Imperativ formulierte Regel im Action-Layer, die den Coding-Agenten bei der UI-Generierung leitet.
- Anbindung an den Action-Layer. Verweis auf das deklarative Designdokument und Übersetzung seiner Werte in Handlungsanweisungen.

## Versionshistorie

- 0.3 (2026-09-19). Der Verweis auf den Action-Layer folgt dem tatsächlichen Repository-Pfad und setzt keine `CLAUDE.md` voraus. Imperative bleiben beim Action-Layer.

- 0.2 (2026-07-19): englisches Funktionsvokabular (Design, `title: Design` im Block), Block-Status auf `draft`, Lebenszyklus-Absatz, Fehlmuster im Beispiel. Keine Migrationspflicht für bestehende Repos.
- 0.1 (2026-05-09): Erstfassung.

## Related

- [Vorlagen Promptotyping Documents](#vorlagen)
- [Konvention Promptotyping Documents](#konvention-v0.1)
- [Promptotyping](#overview)
- Agent-Sozialisierung
- Scholar-Centered Design
- [Vorlage Specification](#promptotyping-document-specification)
- [Vorlage Architecture](#promptotyping-document-architecture)
