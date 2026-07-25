---
title: Plan Site v2
project:
  name: Promptotyping
  repository: https://github.com/DigitalHumanitiesCraft/Promptotyping
method:
  name: Promptotyping
  url: https://dhcraft.org/Promptotyping/
template:
  name: Vorlage Planung
  version: "0.2"
  url: https://dhcraft.org/Promptotyping/promptotyping-document/plan
status: active
created: "2026-07-25"
updated: "2026-07-25"
---

# Plan Site v2

Die Site wird von einer Paper-Publikation zur Spezifikation der Methode umgebaut. Operator-Entscheidung 2026-07-25. Dieses Dokument hält den Zielzustand, die Arbeitspakete und ihre Abhängigkeiten; die Begründungen stehen in [journal.md](journal.md), die Wissensbasis bleibt normativ.

## Rollenverhältnis

Die Site sagt, was Promptotyping ist und wie man es anwendet. Das Paper sagt, warum die Methode so gebaut ist und ob sie trägt. Beide Texte tragen dazu je einen Satz, damit nicht zwei Dokumente um dieselbe Rolle konkurrieren.

## Zielzustand: was die Seite zeigt

1. **Einstieg.** Was Promptotyping ist, für wen, und was es von Vibe Coding und Spec-Driven Development unterscheidet. Aus dem Überblick heraus neu gezogen, gegen den kanonischen Papertext.
2. **Anwendung.** Die vier Phasen in Handlungsauflösung, je mit Eingang, Schritten, Abbruchkriterium und den Dokumenten, die dabei entstehen.
3. **Beispiel-Workflow.** Ein durchgeführter Fall von Rohdaten bis Artefakt, gebaut auf den beiden Video-Demonstrationen. Wartet auf die Transkripte.
4. **Vorlagen.** Katalog und Panel wie bisher, ergänzt um ein Fertigkeitskriterium pro Vorlage und die Vorlage `technology`.
5. **Konvention.** Frontmatter-Schema, Adressierung, Lese-Heuristik. Der Pflichtkern wird auf eine Fassung entschieden.
6. **Artefakt und Grenze.** Artefakttyp, technische Regeln, Übergabepunkt zum Research Software Engineering. Bisher nur im Entwurf `technology-baseline.md`.
7. **Verifikation.** Validierung gegen Verifikation, drei Prüfebenen mit ihren Autonomiezonen. Bisher nirgends publiziert.
8. **Use Cases.** Galerie wie bisher, bereinigt.
9. **Praxis und Skills.** Wie bisher.
10. **Arbeitsumgebung.** Wie bisher.
11. **Glossar.** Als Unteransicht mit eigener Navigation.
12. **Vault.** Als Unteransicht, die Claims und Distillate lesbar macht. Hebt die bisherige Modulbeschränkung auf, Operator-Entscheidung 2026-07-25.
13. **Paper.** Eigene Paperansicht, direkt aus `knowledge/paper.md` gerendert. Ziel für Verlinkungen aus Blog und Vorträgen.
14. **Literatur.** Aus dem Referenzverzeichnis des Papers gezogen statt separat gepflegt.

## Architekturentscheidung: eine Quelle für den Papertext

Die Paperansicht rendert `knowledge/paper.md` zur Laufzeit. Die sieben Dateien unter `_content/paper/` entfallen. Damit ist der Papertext auf der Site definitionsgemäß der kanonische Stand, und die größte Driftklasse existiert nicht mehr. Voraussetzungen: eine Fußnoten-Extension für marked, Heading-IDs im Renderer, und die Ablösung der sieben Sektionsanker auf die neue Ansicht.

## Stand 2026-07-25

AP1 bis AP8 sind umgesetzt und im Browser getrieben geprueft. Die Lesespalte fuehrt die Methode zuerst und das Paper zuletzt, womit der Rollenwechsel vollzogen ist. Offen aus dem Zielzustand bleibt allein der Pflichtkern der Konvention, der laut Punkt 5 auf eine Fassung zu entscheiden ist; die Wissensbasis fuehrt ihn heute mit sechs Feldern, die Konvention beschreibt ihn daneben. Das ist eine Operator-Entscheidung und keine Implementierungsluecke.

## Arbeitspakete

**AP1 Paperansicht.** Fußnoten-Extension, Heading-IDs, Rendering aus `knowledge/paper.md`, Sektionsnavigation, Ankerkompatibilität für `#abschnitt-*`, Rückbau der sieben Sektionsdateien und ihres Ladepfads. Betrifft `index.html`, `assets/js/app.js`, `assets/css/style.css`, `404.html`. Erledigt 2026-07-25; ein Fehler im Fussnoten-Tokenizer, der den Papertext nach Sektion 1 abschnitt, wurde beim Browser-Check gefunden und behoben.

**AP2 Konsistenzdurchgang im publizierten Material.** Die in der Analyse belegten Abweichungen in `_content/` und `data/`. Enthält die dringende Entfernung der beiden toten Repo-Links. Betrifft keine JavaScript-Datei. Erledigt 2026-07-25, zusammen mit AP5.

**AP3 Neue Inhaltsseiten.** Anwendung, Artefakt und Grenze, Verifikation. Schreibarbeit gegen den kanonischen Papertext, danach Einbau. Erledigt 2026-07-25.

**AP4 Vault-Unteransicht.** Neues Modul, das die Vault-Schichten lesbar macht. Setzt AP1 voraus, weil beide `app.js` und `index.html` anfassen. Erledigt 2026-07-25; Index generiert durch `vault/tools/build_site_index.py`.

**AP5 Glossar-Unteransicht.** Eigene Navigation über die Begriffe, Quelle bleibt `data/glossar.json`, inhaltlich gegen den kanonischen Papertext nachgezogen. Erledigt 2026-07-25, inhaltlich neu geerdet und um eine Buchstaben-Navigation ergaenzt.

**AP6 Beispiel-Workflow.** Wartet auf die Video-Transkripte. Erledigt 2026-07-25 aus den bereinigten Videoskripten der Vault-Repraesentationsschicht.

**AP7 Vorlagen.** Fertigkeitskriterium pro Vorlage, Katalogisierung von `technology`, Angleichung der Versionsfelder in den Fülltemplates. Teilweise erledigt 2026-07-25: das Fertigkeitskriterium steht als eigene Spalte im Katalog. Die Vorlage `technology` bleibt offen, weil der Vorlagenkatalog vault-first gepflegt wird und eine echte Vault-Sitzung braucht.

**AP8 Umbau zur Spezifikationsdokumentation.** Operator-Entscheidung 2026-07-25, nachgereicht zum Zielzustand. AP1 bis AP7 haben Inhalt und Reihenfolge umgebaut, die Darstellung blieb die einer Paper-Publikation, eine durchgehende Scroll-Spalte mit Hero und Video an der Spitze. Die Site ist stattdessen als Spezifikationsdokumentation zu bauen, wie sie eine Programmbibliothek oder eine publizierte Ontologie fuehrt: eine Seite zur Zeit, ein Navigationsbaum als Inhaltsverzeichnis, eine Startseite, die die Spezifikation selbst ist, und alles Weitere als eigene Unterseiten. Betrifft `index.html`, `404.html`, `assets/css/style.css`, `assets/js/app.js` und `_content/ueberblick.md`. Erledigt 2026-07-25.

## Reihenfolge

AP2 zuerst, weil es nach außen wirkt und keine anderen Pakete blockiert. AP1 parallel dazu, weil es eine andere Dateimenge berührt. AP4 und AP5 nach AP1. AP3 und AP7 sind Schreibarbeit und laufen unabhängig. AP6 wartet auf Material.

## Was nicht in Scope ist

Keine Zweisprachigkeit. Kein Build-Step. Keine Farben außerhalb des Designsystems. Keine weiteren Module über die hier genannten hinaus.
