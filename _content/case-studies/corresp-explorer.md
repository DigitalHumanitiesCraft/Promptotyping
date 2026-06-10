---
title: CorrespExplorer
id: corresp-explorer
source: Projects/Promptotyping/Case Studies/corresp-explorer.md
mirrored: 2026-06-10
---

# CorrespExplorer

## Kontext und Forschungsfrage

CorrespExplorer ist ein vollstaendiges Forschungstool fuer die interaktive Visualisierung von Korrespondenz-Metadaten im CMIF-Format. Die Leitfrage ist, wie sich FAIR-konforme Briefdaten auf forschungszentrierte Interfaces abbilden lassen. Das Projekt entstand als Fork eines frueheren Brief-Projekts (HerData) und demonstriert, wie strukturierte Forschungsdaten und Scholar-Centered-Design-Anforderungen durch Context Engineering in funktionale Prototypen ueberfuehrt werden.

## Daten

Datengrundlage ist die CMIF-XML-Struktur (TEI-basiert) von correspSearch. Drei Modi erschliessen die Daten: Upload lokaler CMIF-Dateien, direkte Abfrage der correspSearch-API und Testdaten aus dem Hugo-Schuchardt-Archiv. Die FAIR-Konformitaet des CMIF-Standards ist die epistemische Voraussetzung: Das LLM versteht die Datenstruktur ohne aufwaendige Erklaerung, weil sie standardisiert, semantisch dokumentiert und maschinenlesbar ist.

## Vorgehen

Die Entwicklung erfolgte in etwa zwei Nachmittagen mit Claude Opus 4.5 ueber Claude Code. Die Wissensbasis umfasst sieben Dokumente, darunter eine Spezifikation mit siebenunddreissig User Stories und Akzeptanzkriterien, ein Journal mit sechsundvierzig Entwicklungsphasen und eine Test-Suite. Statt eines monolithischen Dashboards wurden zwoelf komplementaere Ansichten gewaehlt. Tests dienten als Context-Feedback: generieren, ausfuehren, Fehler zurueck ins Kontextfenster.

## Methodischer Beitrag

CorrespExplorer ist der erste Fall mit einem vollstaendigen Promptotyping-Vault und liefert drei methodische Beobachtungen. Erstens FAIR-Daten als Promptotyping-Enabler: die Output-Qualitaet korreliert direkt mit der FAIR-Konformitaet der Daten. Zweitens Context Rot als praktisches Problem, das bei etwa fuenfzig Prozent Kontextfenster-Fuellung sichtbar wurde und die Destillation der Dokumentation erzwang. Drittens Sycophancy in der Praxis: das Modell stimmte suboptimalen Entscheidungen zu, sobald sie als Vorschlag formuliert waren, was eine explizite Aufforderung zur Kritik in den Prompts noetig machte.

## Links

- Repository: https://github.com/DigitalHumanitiesCraft/CorrespExplorer
- Demo: https://dhcraft.org/CorrespExplorer
- Use-Case-Typ: Datenexploration (#case-corresp-explorer)
