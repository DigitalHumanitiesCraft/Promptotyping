---
title: coOCR-HTR
id: coocr-htr
source: Projects/Promptotyping/Case Studies/coocr-htr.md
mirrored: 2026-06-10
---

# coOCR-HTR

## Kontext und Forschungsfrage

coOCR-HTR ist eine browser-basierte Workbench fuer Expert-in-the-Loop-Transkriptionsworkflows. Die Leitfrage ist nicht, ein fertiges Korrektur-Werkzeug zu liefern, sondern zu verstehen und zu pruefen, ob ein bestimmter Transkriptionsprozess ueberhaupt traegt. Der Fall steht damit fuer den Use Case Prozessvisualisierung: das Interface ist ein schneller Prototyp, der einen Arbeitsablauf sichtbar und testbar macht, und der Promptotype ist ausdruecklich kein Endprodukt, sondern ein Mittel, um die epistemische Asymmetrie von OCR- und HTR-Outputs zu adressieren.

## Daten

Verarbeitet werden OCR- und HTR-Outputs, die in der Workbench neben den Quellbildern gerendert werden. Die Gegenueberstellung von maschinell erzeugter Transkription und Faksimile ist der Kern des Werkzeugs: Sie macht die Stellen sichtbar, an denen das Modell unsicher ist oder Woerter erfindet, statt eine Luecke zu markieren. Die hybride Validierung kombiniert deterministische Regeln mit einem LLM-as-a-Judge-Schritt.

## Vorgehen

Der Prototyp entstand an einem einzigen Arbeitstag mit Promptotyping und wurde anschliessend konsolidiert. Die Entwicklung lief ueber Claude Code, die Validierung stuetzte sich auf Vision-Language-Modelle. Aus dem Eintags-Prototyp wuchs ueber zwei Monate eine umfangreichere Produktions-Codebasis mit mehreren hundert Tests, mehreren LLM-Providern, hybrider Validierung, vollstaendiger Internationalisierung und Progressive-Web-App-Unterstuetzung, ohne npm-Produktionsabhaengigkeiten. Ein Community-Fork von Seiten der Oesterreichischen Akademie der Wissenschaften wurde integriert.

## Methodischer Beitrag

coOCR-HTR belegt, dass der Sprung vom Prototyp zur produktionsnahen Forschungssoftware in Wochen statt Monaten moeglich ist, wenn eine einzelne fachkundige Person mit methodischer Literalitaet arbeitet. Der zweite Beitrag ist die Operationalisierung des Editor-in-the-Loop: Die Workbench verschiebt die menschliche Pruefung an genau die Stellen, an denen das Modell unzuverlaessig ist, und macht die epistemische Asymmetrie zwischen maschineller Transkription und menschlicher Korrektur zum gestaltenden Prinzip des Interfaces. Als Prozessvisualisierung dient das Werkzeug primaer dem Verstehen eines Workflows, nicht seiner endgueltigen Produktivsetzung.

## Links

- Repository: https://github.com/DigitalHumanitiesCraft/co-ocr-htr
- Video: https://youtu.be/VJyhVc_ujeA
- Use-Case-Typ: Prozessvisualisierung (#case-coocr-htr)
