---
title: Anwendung. Die vier Phasen in Handlungsaufloesung
slug: anwendung
status: complete
language: de
version: "0.1"
created: 2026-07-25
updated: 2026-07-25
source: knowledge/paper.md, Abschnitt 3.2 und 3.3
machine-url: https://dhcraft.org/Promptotyping/_content/anwendung.md
---

# Anwendung

Die Arbeitseinheit der Methode ist ein kleiner Satz Markdown-Dokumente, der die Spezifikation des Artefakts ist, versioniert in der Git-Historie des Projekt-Repositoriums. Die zentrale Schleife iteriert ueber diese Dokumente, und aus ihnen wird die Implementierung abgeleitet. Diese Seite loest die vier Phasen in Handlungen auf, mit Eingang, Schritten, Abbruchkriterium und den Dokumenten, die dabei entstehen. Warum die Methode so gebaut ist und woran sie sich messen laesst, steht im [Paper](#paper).

## Preparation

Alle Materialien werden zusammengetragen, bevor technische Entscheidungen fallen.

- **Eingang.** Ein Forschungsvorhaben, ein Datenbestand und eine oder mehrere Fragen an ihn.
- **Schritte.** Forschungsdaten in ihren Originalformaten sammeln. Dokumentation der Standards und Datenmodelle beilegen, denen die Daten folgen. Die Forschungsfragen aufschreiben. Domaenenwissen explizit machen, aus der eigenen Kenntnis oder aus gemeinsamen Sitzungen mit den Fachpersonen. Requirements Engineering betreiben, also User Stories formulieren und festhalten, welche Daten welche Frage beantworten sollen.
- **Abbruchkriterium.** Die Repositoriumsstruktur steht, die Quelldaten sind zugaenglich, und die ersten Anforderungen liegen als strukturierter Ausgangspunkt dokumentiert vor.
- **Dokumente.** `requirements.md` mit User Stories und Akzeptanzkriterien, erste Fassung von `data.md`, der Action-Layer im Repositoriums-Wurzelverzeichnis.

Unschaerfe an dieser Stelle setzt sich durch alle folgenden Phasen fort. Eine vage formulierte Frage erzeugt ein vage spezifiziertes Artefakt, und der Aufwand, das spaeter zu korrigieren, faellt in jeder Iteration erneut an.

## Exploration

Die Schnittstelle zwischen Daten und Forschungskontext wird sondiert. Die Leitfrage lautet, ob sich die abstrakte Forschungsfrage konkret auf die verfuegbare Datenstruktur abbilden laesst.

- **Eingang.** Die Materialsammlung der Preparation.
- **Schritte.** Die Daten direkt ansehen. Skripte schreiben, die den Korpus durchlaufen und ihn zu kompakten Aggregationen verdichten. Vom LLM Mapping-Hypothesen erzeugen lassen, also Vorschlaege dazu, welche Datenfelder welchen analytischen Kategorien entsprechen, welche Darstellungsformen zu den Daten passen und wo die Daten fuer den beabsichtigten Zweck nicht ausreichen. Diese Vorschlaege an fachlichen Kriterien pruefen.
- **Abbruchkriterium.** Es liegt ein dokumentiertes Verstaendnis davon vor, was moeglich ist, was nicht und warum.
- **Dokumente.** Die Exploration schreibt vor allem in `data.md` zurueck, ergaenzt um die Sackgassen und ihre Gruende.

Die Phase hat eine epistemische Dimension ueber die Machbarkeitspruefung hinaus. Das LLM erzeugt Optionen, die die Forschenden selbst nicht entworfen haetten, und ihre Aufgabe wird das Bewerten statt des Erfindens. Zu verstehen, was die Daten nicht hergeben, ist genauso wertvoll wie zu wissen, was geht. Die Phase entfaellt, wo die Daten vertraut sind und die Preparation diese Fragen bereits geklaert hat.

## Distillation

Was die Exploration gelehrt hat, wird in den Dokumentsatz verdichtet. Hier findet Context Engineering im strengen Sinn statt, die absichtsvolle Konstruktion des Kontexts, aus dem ein LLM arbeiten wird, unter dem Prinzip maximaler Information bei minimalen Tokens.

- **Eingang.** Die Befunde der Exploration und die Rohmaterialien der Preparation.
- **Schritte.** Jedes Dokument auf eine abgegrenzte Funktion bringen. Redundanz ueber Verweise aufloesen statt ueber Wiederholung. Wo der Korpus gross oder heterogen ist, Beschreibungen deterministisch aus den Quelldaten rendern und als generierte Dokumente neben der kuratierten Schicht ablegen. Vor dem Uebergang in die Implementation einen Overengineering-Check fahren und die Spezifikation bewusst auf einen minimalen tragfaehigen Umfang zuruecknehmen, damit das erste laufende Artefakt klein genug bleibt, um es zu pruefen.
- **Abbruchkriterium.** Eine frische Agenteninstanz koennte allein aus den Dokumenten und den Daten die Logik des Projekts aufnehmen und daran weiterarbeiten, ohne zusaetzliche Erklaerung.
- **Dokumente.** Der vollstaendige Satz, also `data.md`, `requirements.md`, `design.md`, der Action-Layer und die generierten Beschreibungen.

Die Verdichtung ist nicht neutral. Kodierungsentscheidungen sind epistemische Entscheidungen, weil sie festlegen, welche Information allen folgenden Schritten zur Verfuegung steht.

## Implementation

Der Dokumentsatz geht an ein agentisches Coding-Werkzeug, das im Projekt-Repositorium arbeitet, und das abgeleitete Artefakt wird geprueft.

- **Eingang.** Der destillierte Dokumentsatz und die Quelldaten.
- **Schritte.** In Milestones vorgehen, jeder ein kleiner Zuwachs, der vor dem naechsten geprueft wird. Die Erzeugung ueber drei Rueckkopplungen steuern, deterministisches Feedback aus Schema-Validierung, Testsuiten und Builds, visuelles Feedback aus Screenshots des laufenden Artefakts, und fachliches Feedback aus dem Urteil darueber, ob die Ausgabe sachlich richtig, fachlich angemessen und auf die Forschungsfrage bezogen ist. Den Moeglichkeitsraum absichtlich abtasten, indem radikal abweichende Entwuerfe angefordert werden, die gegen die gelernten Konventionen laufen.
- **Abbruchkriterium.** Das Artefakt erfuellt die Akzeptanzkriterien der Anforderungen und besteht die Pruefungen der [Verifikation](#verifikation). Der Ausstiegspunkt ist ein Spektrum, vom kleinen funktionierenden Prototyp bis zur mehrstufigen Pipeline mit Pruefoberflaechen an jeder Stufe, und was ihn bestimmt, ist die Forschungsfrage.
- **Dokumente.** Das Journal traegt die Sitzungen, das Was liegt in den Commits.

Wird die Pruefung eines Milestones aufgeschoben, ist das eine Entscheidung mit Preis. Sie ist am ehesten in einem ersten Durchgang vertretbar, dessen Zweck es ist, ueberhaupt etwas laufen zu sehen, und sie hinterlaesst eine Verifikationsschuld, die vor Nutzung oder Uebergabe zu begleichen ist. Wo die Schuld getragen wird, muss der Record das sagen.

## Iteration und Wiedereintritt

Die Signatur der Methode ist die Schleife von der Implementation zurueck in die Dokumente. Ist das Artefakt falsch, war die Spezifikation falsch oder unvollstaendig, und korrigiert wird die Spezifikation; danach wird das Artefakt neu erzeugt. Neues Wissen aus dem Bauen, also unerwartete Dateneigenschaften, Leistungsgrenzen und Designverfeinerungen, wird in die Dokumente zurueckgeschrieben.

Der Wiedereintritt geht in diejenige Phase, zu der das neue Wissen gehoert.

- Ein falsches Artefakt schickt die Arbeit zurueck in die Distillation.
- Ein Befund, dass die Daten mehr oder weniger hergeben als angenommen, schickt sie zurueck in die Exploration.
- Spaeter eintreffende Quellen schicken sie zurueck in die Preparation.

Ein einziger Durchlauf durch die vier Phasen ist die Ausnahme.

## Zwei Modi

Die Methode kennt zwei Betriebsformen, unterschieden danach, wie die Arbeit organisiert ist, und unabhaengig von der Projektgroesse. Die Voreinstellung ist eine forschende Person mit einer Agenteninstanz. In komplexen Projekten nimmt die Arbeit selbst die Struktur einer Forschungsorganisation an, mit parallelen Aufgaben, differenzierten Rollen und formalisierten Uebergaben; dort koordiniert eine fuehrende Instanz Subagenten mit definierten Berechtigungen und Wissenszonen, und die methodische Last verschiebt sich vom Steuern eines Agenten zum Entwerfen eines kleinen Teams. Die vier Phasen gelten in beiden Formen. Die dokumentierte Erfahrung liegt weit ueberwiegend bei der ersten, und die Belastbarkeit dauerhafter Mehr-Agenten-Ueberwachung ist eine offene Frage.
