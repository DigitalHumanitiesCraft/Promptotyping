---
title: HerData
id: herdata
source: Projects/Promptotyping/Case Studies/herdata.md
mirrored: 2026-06-10
---

# HerData

## Kontext und Forschungsfrage

HerData ist eine statische Webanwendung zur Visualisierung und prosopographischen Aufbereitung weiblicher Korrespondentinnen Goethes. Die Leitfrage ist, wie sich Frauen in Goethes Briefwechsel sichtbar machen lassen, ohne die Repraesentationsgrenzen der Quelle zu verschweigen. Charakteristisch fuer HerData als Promptotyping-Fall ist die epistemische Sichtbarkeit: eine Map-Bias-Sektion thematisiert Datenvollstaendigkeit und Repraesentationsgrenzen, bevor die Visualisierung genutzt wird.

## Daten

Grundlage sind CMIF-Briefmetadaten der PROPYLAEEN-Plattform (TEI-XML, CC BY 4.0) und ein kuratierter SNDB-Personenexport des Goethe- und Schiller-Archivs der Klassik Stiftung Weimar. Eine vierstufige Python-Pipeline (Identifikation, Brief-Matching ueber GND, Anreicherung mit Geokoordinaten und AgRelOn-Beziehungen, JSON-Export) erzeugt einen standalone JSON-Datensatz, der die Datenhaltung des Projekts vollstaendig traegt. Bewusst wurde gegen den Vollbestand und fuer einen kuratierten Satz entschieden, weil Qualitaet und Provenienz Vorrang vor Vollstaendigkeit haben.

## Vorgehen

Die Entwicklung erfolgte in drei grossen Iterationsschritten ueber Claude Code mit wechselnden Frontier-Modellen. Eine erste Version etablierte die Grundarchitektur, ein Review-Meeting lieferte die strategische Weichenstellung (erst Core-Features stabilisieren, dann experimentelle Features; Forschungsfragen schaerfen; Rohdaten-Validierungsfenster ergaenzen), eine dritte Iteration schloss die Tester-Feedback-Runde der Klassik Stiftung Weimar und einen Refactoring-Pass auf v1.0-Reife ein. Ein Vanilla-JavaScript-Frontend ueberfuehrt den Datensatz in sechs koordinierte Bereiche: Karte, Brief-Explorer, Geschichten, Wissenskorb, Orte und About.

## Methodischer Beitrag

HerData zeigt zwei Promptotyping-typische Muster. Erstens den Knowledge-Vault als Source of Truth: ein zehnteiliger Ordner deutscher Knowledge-Dokumente ist zugleich Entwicklungsbasis fuer die LLM-Sessions und oeffentliche Projektdokumentation, jedes Dokument mit maschinenlesbarer Provenienz im Frontmatter. Zweitens eine Content-Schicht fuer nicht-technische Pflege, ueber die Datenpartnerinnen redaktionelle Texte direkt pflegen koennen, ohne Code anzufassen. Der methodische Kernbeitrag ist die Map-Bias-Transparenzsektion: die systematische Verzerrung der Daten wird vor der Nutzung explizit gemacht, statt sie hinter der Visualisierung zu verbergen.

## Links

- Repository: https://github.com/chpollin/HerData
- Demo: https://chpollin.github.io/HerData
- Use-Case-Typ: Datenexploration (#case-herdata)
