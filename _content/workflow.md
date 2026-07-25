---
title: Beispiel-Workflow. Von einem Stapel Excel-Dateien zum Dashboard
slug: workflow
status: complete
language: de
version: "0.1"
created: 2026-07-25
updated: 2026-07-25
source: die beiden Einfuehrungsvideos, bereinigte Skripte im Grounded Vault
machine-url: https://dhcraft.org/Promptotyping/_content/workflow.md
---

# Beispiel-Workflow

Ein durchgefuehrter Fall, von den Rohdaten bis zum laufenden Artefakt, aufgezeichnet als Screencast einer Arbeitssitzung. Ausgangsmaterial ist ein grosser Satz Excel-Dateien aus einem oeffentlichen Berichtswesen, Ergebnis ist ein statisches Dashboard. Der Fall ist ein didaktischer Basisfall ohne oeffentliches Repositorium, gewaehlt, weil er die Schleife vollstaendig zeigt und nicht, weil er ein schwieriges Forschungsproblem loest. Die beiden Videos sind [Teil 1 zur Methode und den vier Phasen](https://youtu.be/8sUe4Jkh3uQ) und [Teil 2 mit der durchgehenden Demonstration](https://youtu.be/hd_a-NBO_S4).

## Preparation

Die Vorbereitung besteht hier allein darin, die Excel-Dateien in einem `data`-Ordner zusammenzutragen. Mehr braucht der Fall nicht, weil das Material bereits tabellarisch vorliegt und die Frage an die Daten einfach ist.

## Exploration

Der erste Auftrag an den Agenten lautet, alle Dateien im Detail zu analysieren und daraus ein `data.md` zu erzeugen, das die Gesamtheit der Daten und die Beziehungen zwischen allen Spalten abbildet. Ergaenzt wird der Auftrag um eine Anweisung zur Arbeitsweise, naemlich einen `scripts`-Ordner mit Python-Skripten anzulegen, die bei der Exploration helfen, und ihre Funktion in einem eigenen Markdown-Dokument zu dokumentieren.

Diese Ergaenzung traegt das Prinzip, auf dem die Token-Oekonomie der Methode beruht. Bei vielen Dateien liest das LLM nicht die Daten, sondern es schreibt Code, der die Daten liest, und arbeitet mit dem verdichteten Ergebnis weiter. Am Ende des Schritts liegen drei Skripte, ihre Dokumentation, die extrahierten Daten als JSON und das `data.md` vor.

Der zweite Handgriff ist Aufraeumen. Das `data.md` wandert in einen `knowledge`-Ordner, und die Verschiebung wird dem Agenten zurueckgemeldet, weil er sonst mit einem veralteten Bild der Ablage weiterarbeitet.

## Distillation

Aus dem Datenverstaendnis entstehen in einem Zug drei weitere Dokumente, eine Anforderungsbeschreibung, ein Architekturdokument und ein Designdokument. Das Architekturdokument beschreibt eine statische Single Page Application, HTML5, CSS, responsives Layout, Vanilla JavaScript ohne Build und eine einzige Bibliothek fuer die Visualisierung, dazu JSON und CSV als Datenformate. Ein Detail zeigt, was ein gut gefuellter Kontext leistet, denn der Agent ordnet die Ansicht dem Visual Information Seeking Mantra zu, ohne dass dieser Begriff im Prompt vorkam.

Dann folgt der Schritt, der die Phase von blossem Schreiben unterscheidet. Die Dokumente werden gegen sich selbst geprueft, auf Inkonsistenzen und auf ueberfluessigen Umfang. Der Agent liefert Kritikpunkte und Empfehlungen, und der Umfang wird bewusst zurueckgenommen, im konkreten Fall auf zwei Diagrammtypen. Verworfen werden Zutaten, die kein Mensch angefordert hat, unter ihnen ein dunkles Farbschema und Tastaturkuerzel. Das ist der Overengineering-Check am Uebergang zur Implementation, und er ist im ersten Durchlauf richtig, weil das Wissen im `knowledge`-Ordner bleibt und die naechste Iteration daraus weiterbaut.

Vor dem Beginn der Implementierung entsteht ein `journal.md`, das die Datenanalyse, die Dashboard-Planung, die kritische Pruefung und die Vereinfachung festhaelt. In einem Fall ohne Repositorium tritt das Journal an die Stelle der Commit-Historie.

## Implementation

Die Implementierung laeuft in Milestones, und die erste HTML-Ansicht laesst sich in einem lokalen Server oeffnen. Ab hier arbeiten drei Rueckkanaele.

- **Screenshots.** Das laufende Artefakt wird fotografiert und das Bild geht zurueck in den Kontext. Der Agent sieht damit, was er gebaut hat.
- **Praezise Fehleradressierung.** Ein Fehler in der Oberflaeche wird ueber die Kennung des Elements gemeldet und nicht ueber eine Beschreibung dessen, was falsch aussieht. Das ist die zweite Art von Urteil, die die Methode voraussetzt, die entwicklungsseitige.
- **Durchklicken.** Die fertige Ansicht wird bedient, wie eine nutzende Person sie bedienen wuerde.

Zwei Stellen der Aufzeichnung sind methodisch aufschlussreich, weil sie von der Regel abweichen.

Die Exploration wird mitten in der Implementierung nachgeholt. Der Sprecher stellt fest, dass die erste Sondierung nicht gruendlich genug war, unterbricht den Lauf und laesst das `data.md` mit dem neuen Wissen aktualisieren. Genau dafuer ist der Wiedereintritt in eine fruehere Phase da.

Die Milestone-Pruefung wird aufgeschoben. Der Lauf geht auf eine blosse Fortsetzungsanweisung weiter, und die Inspektion folgt mehrere Milestones spaeter. Das ist eine Entscheidung mit Preis, in einem ersten Durchgang vertretbar, dessen Zweck es ist, ueberhaupt etwas laufen zu sehen, und sie hinterlaesst eine Verifikationsschuld.

## Der Moeglichkeitsraum

Am Ende steht ein Experiment, das nicht der Fertigstellung dient. Ein einziger Prompt fordert ein radikal abweichendes Design an, gegen die Konventionen, die die Voreinstellungen des LLM reproduzieren. Das Ergebnis ist ein ausgefallenes Interface, dessen Brauchbarkeit offen bleibt. Der Zweck ist das Abtasten des Moeglichkeitsraums, weil die gelernten Konventionen sonst die Optionen unsichtbar halten, die ein Projekt braucht. Zum Abschluss werden die Wissensdokumente auf den erreichten Stand gezogen, womit die Schleife von der Implementation zurueck in die Dokumente geschlossen ist.

## Was der Fall zeigt und was nicht

Er zeigt die vollstaendige Schleife an einem Material, das keine fachliche Modellierung verlangt, und er zeigt die Handgriffe, die in der Beschreibung der [Anwendung](#anwendung) abstrakt bleiben. Er zeigt nicht, was die Methode an interpretativ modellierten Forschungsdaten leistet, weil tabellarische Berichtsdaten die Schwierigkeiten nicht tragen, um die es dort geht. Dafuer stehen die [Use Cases](#use-cases) und das Evidenzkapitel des [Papers](#abschnitt-5-evidence-the-documented-projects).
