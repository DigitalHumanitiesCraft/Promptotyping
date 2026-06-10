---
title: M3GIM
id: m3gim
source: Projects/Promptotyping/Case Studies/m3gim.md
mirrored: 2026-06-10
---

# M3GIM

## Kontext und Forschungsfrage

M3GIM ist die digitale Sammlung und Multi-View-Exploration des Ira-Malaniuk-Archivs an der KUG Graz. Die Forschungsfrage betrifft die Mobilitaet einer Saengerin: wie sich Stationen, Beziehungen, Werke und Orte einer biografischen Laufbahn modellieren und erkunden lassen. Das Projekt ist als Machbarkeitsstudie fuer ein FWF-Folgeprojekt gefoerdert.

## Daten

Modelliert werden Archivdaten des Universitaetsarchivs in RiC-O 1.1, ergaenzt um m3gim-spezifische Erweiterungen und AgRelOn, ausgeliefert als JSON-LD mit Wikidata-Reconciliation. Das Datenmodell ist dreischichtig. Charakteristisch ist, dass das Datenmodell waehrend der Erfassung noch in Entwicklung war: Komposit-Typen und neue Rollenwerte, die im kontrollierten Vokabular fehlten, mussten nachgezogen werden, und die Folio-Granularitaet erwies sich als die wichtigste strukturelle Innovation des Erfassungsteams.

## Vorgehen

Die Wissensbasis umfasst neun Dokumente, die Architekturentscheidungen sind durchnummeriert dokumentiert. Das Explorationsinterface besteht aus acht Tabs (Archiv, Indizes, Mobilitaet, Zeitfluss, Matrix, Kosmos, Lebenspartitur, Wissenskorb), gebaut mit Vanilla JS und D3.js ohne Build-Tool. Eine Python-Pipeline durchlaeuft Exploration, Validierung, Transformation, View-Build und Reconciliation. Die zweite Ausbauphase folgte einem TDD-Workflow.

## Methodischer Beitrag

Der zentrale Beitrag ist die Erkenntnis, dass das Interface die Grenzen des Datenmodells offenlegt. Das Interface zeigt, was das aktuelle Modell ausdruecken kann und was nicht, und wird damit zum Instrument iterativer Modellverfeinerung statt zur Praesentation eines fertigen Modells. Forschende lernen die Modellierungsentscheidungen durch die Visualisierung kennen, nicht allein durch Dokumentation. M3GIM ist die hoch-semantische Variante des Standalone-Forschungsdaten-Musters (JSON-LD als Knowledge Graph), HerData die niedrig-semantische.

## Links

- Repository: https://github.com/DigitalHumanitiesCraft/m3gim
- Demo: https://dhcraft.org/m3gim
- Use-Case-Typ: Datenmodellierung und Erfassung (#case-m3gim)
