---
title: Artefakt und Grenze
slug: artefakt
status: complete
language: de
version: "0.1"
created: 2026-07-25
updated: 2026-07-25
source: knowledge/paper.md, Abschnitt 4
machine-url: https://dhcraft.org/Promptotyping/_content/artefakt.md
---

# Artefakt und Grenze

Ein Werkzeug bedient viele Projekte auf dem Allgemeinheitsgrad, den sie alle teilen. Ein Forschungsartefakt ist an ein Projekt gebunden, und daher kommt seine wissenschaftliche Geltung, weil die Unterscheidungen, die es bewahrt, die des Datenmodells dieses Projekts sind. Was die Methode herstellt, ist Software, die auf den Daten eines Projekts arbeitet und sie explorierbar, analysierbar oder editierbar macht.

## Die Voreinstellung, ein selbstgenuegsames statisches Web-Tool

Die Artefakte sind als Voreinstellung selbstgenuegsame statische Web-Werkzeuge, also ein Satz HTML-, CSS- und JavaScript-Dateien mit eingebetteten oder aus Flachdateien geladenen Forschungsdaten, lauffaehig auf jedem statischen Host und aus einem lokalen Ordner heraus. Drei Eigenschaften tragen diese Wahl.

- **Generierbarkeit.** Statische Artefakte erzeugen die heutigen agentischen Werkzeuge in einem Durchgang, was die Ableitung von den Dokumenten zum Artefakt pruefbar haelt.
- **Publizierbarkeit.** Sie gehen ohne Infrastruktur online, was der Ressourcenlage der Forschenden entspricht, an die sich die Methode richtet.
- **Haltbarkeit.** Minimal Computing und das Endings Project argumentieren, dass die digitalen Artefakte mit den wenigsten beweglichen Teilen die besten Ueberlebenschancen haben, ohne serverseitige Abhaengigkeiten und ohne Build-Ketten, die verrotten. Die digitale Editionswissenschaft kommt von ihrer Seite zum selben Ergebnis, wenn sie TEI-XML-Editionen als statische Webseiten publiziert.

## Technische Regeln

Aus diesen Eigenschaften folgen die Regeln, die der Action-Layer eines Projekts an den Agenten weitergibt. Die ausgearbeitete Fassung liegt in der [Technology Baseline](_content/technology-baseline.md).

- **Vanilla JavaScript ist die Voreinstellung.** Frameworks altern schnell, widersetzen sich der Inspektion und bringen nichts, was ein exploratives Artefakt braucht.
- **Eine einzelne Bibliothek darf vendoriert werden**, also ins Repositorium kopiert und mit ihm versioniert, ohne Paketmanager, und nur wo ein Problem algorithmisch tief ist. Dafuer gilt eine Kompromissregel mit vier Kriterien, das Problem liegt jenseits einer vertretbaren eigenen Implementierung, die Bibliothek ist in sich geschlossen und ohne Build-Schritt vendorierbar, ihre Lizenz erlaubt die Weitergabe, und der Weg zu ihrer Entfernung ist dokumentiert.
- **Schwere Berechnung wird vorberechnet.** Das Artefakt liefert abgeleitete Daten aus, die Pipelines bleiben ihm vorgelagert.
- **Keine externen Aufrufe zur Laufzeit.** Das Artefakt muss offline funktionieren, was zugleich eine Haltbarkeits-, eine Datenschutz- und eine Sicherheitseigenschaft ist.
- **Jedes Artefakt traegt eine Provenienzerklaerung**, die sagt, dass es erzeugt wurde, aus welchen Dokumenten, mit welchen LLMs und Werkzeugen, und wie es geprueft wurde. Das Artefakt legt seine Herstellungsbedingungen offen, wie eine Edition ihre Editionsprinzipien offenlegt.

## Nebenformen

Die Voreinstellung gilt, solange ihre Bedingungen gelten, und der Record zeigt die Nebenformen, wo eine davon bricht. Laeuft ein Verarbeitungsschritt nicht im Browser, nimmt er die Gestalt einer generierten Pipeline an, die dem Artefakt vorgelagert ist. Soll eine Beschreibung aus den Quelldaten selbst gerendert werden, nimmt sie die Gestalt eines deterministisch erzeugten Dokuments an. Beide werden auf demselben Weg aus dem Dokumentsatz abgeleitet.

## Fuenf Funktionen, nach denen sich die Interfaces ordnen

Die browserbasierten Interfaces der dokumentierten Projekte ordnen sich nach der epistemischen Funktion, die sie erfuellen. Datenformat und Visualisierungstechnik haben sich als schwaechere Ordnungsprinzipien erwiesen.

- **Verification.** Prueft Zwischenergebnisse einer Pipeline an definierten Stellen und macht sie vergleichbar und korrigierbar, bevor Fehler weiterlaufen. Der Musterfall ist ein Vergleichsviewer fuer mehrere Texterkennungsquellen mit Layout-Overlay.
- **Exploration.** Erschliesst bestehende strukturierte Forschungsdaten ueber koordinierte Ansichten. Hier ist das Interface das primaere Forschungsartefakt, das Mittel, durch das die Daten analytisch zugaenglich werden.
- **Edition.** Stellt wissenschaftliche digitale Editionen dar, mit Faksimile-Synchronisation, TEI-Textanzeige und Korrekturmoeglichkeiten. Interface-Entscheidungen sind in Editionen editorische Entscheidungen.
- **Capture.** Unterstuetzt strukturierte Eingabe, Annotation oder Metadatenerzeugung. Solche Interfaces erzeugen neue Daten und formen dabei das Datenmodell mit, weil sichtbar wird, was das Modell ausdruecken kann und was nicht.
- **Audit.** Macht einen ganzen Forschungsprozess nachvollziehbar, indem der Weg zu den Ergebnissen neben den Ergebnissen dargestellt wird, mit Vergleichen, Abweichungsfaellen und Kennzahlen.

Die Kategorien schliessen einander nicht aus. Ein Pipeline-Projekt kombiniert Verification-Interfaces an seinen Stufen, ein Edition-Interface als Leseansicht und Capture-Elemente in seinem Kurationseditor. Was die Typologie sichtbar macht, ist die Abhaengigkeit des Interface-Designs von der epistemischen Funktion. Ein TEI-XML-Datensatz verlangt je nach Forschungsfrage ein Edition-Interface, ein Exploration-Interface oder beides, und darin liegt der empirische Grund, warum das monolithische Dashboard fuer alle Faelle scheitert.

## Grenzen des Formats

Die Grenzen gehoeren zur Definition des Artefakttyps.

Die clientseitige Verarbeitung begrenzt das Datenvolumen, und die Grenze verschiebt sich mit dem Stack. Wo sie praktisch liegt, haengt von Browserspeicher und Datenformat ab, und die Pipelines bleiben ihr vorgelagert. Mit flachen JSON- oder CSV-Dateien bleibt der Bereich bescheiden, waehrend eine statisch publizierte TEI-Edition mit ueber sechzehntausend Editionseinheiten zeigt, welche Groessenordnung auf der vorgerenderten Seite erreichbar ist. Spaltenorientierte Formate mit WebAssembly-Abfragemaschinen verschieben den clientseitigen Bereich um Groessenordnungen, waehrend das Artefakt statisch und selbstgenuegsam bleibt, zum Preis einer vendorierten Maschine, die die Kompromissregel decken muss. Jenseits der Grenze tragen Vorberechnung und Stichproben mehr von der Last.

Statische Artefakte unterstuetzen keine kollaborativen oder serververmittelten Arbeitsablaeufe, und Persistenz jenseits des Browsers liegt ausserhalb ihres Zwecks.

## Der Uebergabepunkt

Waechst ein Projekt ueber den Prototyp hinaus, aendert sich das Pflichtenregime, unter dem das Artefakt steht. Kein einzelnes Mass am Artefakt zeigt diesen Wechsel an, weil er entlang mehrerer Achsen laeuft, die unabhaengig voneinander kippen. Die Achsen, denen der Record begegnet ist, sind die Pflicht zur Wartung ueber die eigene Laufzeit des Projekts hinaus, die Nutzung durch Dritte mit einer Erwartung an Unterstuetzung, der Mehrbenutzerbetrieb ueber gemeinsamen Zustand, die Verantwortung fuer Daten, die anderen gehoeren, und der institutionelle Betrieb mit einer Zusage zur Verfuegbarkeit.

Kippt eine dieser Achsen, gelten fuer das Artefakt die Standards des Research Software Engineering, mit ihren Anforderungen an Tests, Nachhaltigkeit und Wartung, und sie gelten nach dem, was das Artefakt geworden ist, unabhaengig davon, womit es gebaut wurde.

Der Dokumentsatz verliert an dieser Grenze nicht seinen Wert. Er wird zum Uebergabepaket. Ein Projekt, das den Uebergabepunkt erreicht, gibt einer Research-Software-Engineering-Kraft eine versionierte Spezifikation in die Hand, mit Datenbeschreibung, User Stories, Akzeptanzkriterien, Designbegruendung und Prozessprotokoll. Die Dokumente dienen einer menschlichen Entwicklungskraft genauso wie einem Agenten.
