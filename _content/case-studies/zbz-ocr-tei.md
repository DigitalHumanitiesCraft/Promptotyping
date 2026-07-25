---
title: ZBZ OCR/TEI Pipeline
id: zbz-ocr-tei
source: Projects/Promptotyping/Case Studies/zbz-ocr-tei.md
mirrored: 2026-06-10
---

# ZBZ OCR/TEI Pipeline

## Kontext und Forschungsfrage

Die ZBZ-OCR-TEI-Pipeline erschliesst den Jeanne-Hersch-Nachlass der Zentralbibliothek Zuerich. Die Aufgabe ist, einen mehrsprachigen Korpus diverser Dokumenttypen (Monographien, Zeitschriften, Sammelbaende) in validiertes TEI-XML nach dem DTA-Basisformat zu ueberfuehren. Das Projekt ist das bisher umfangreichste Promptotyping-Beispiel hinsichtlich Skala, Werkzeugintegration und Dokumentationsdichte.

## Daten

Der Korpus umfasst 286 PDF-Scans mit rund 4.150 Seiten in Franzoesisch, Deutsch, Englisch und Italienisch. Kein Python-Skript wurde manuell geschrieben oder vom Autor begutachtet; aller Code wurde von Claude Code gegen die Wissensbasis generiert, getestet und committet.

## Vorgehen

Die Pipeline laeuft gestuft von der PDF-Vorlage ueber OCR, Layout-Analyse mit Qualitaetssicherung und Named-Entity-Verlinkung nach Wikidata und GND bis zur TEI-XML-Erzeugung und einem Inspektions- und Korrektur-Viewer. Eine Wissensbasis mit einem Dokument pro Pipeline-Stufe konfiguriert zusammen mit dem Action-Layer die Agentenschicht. Eine agentenbasierte Screening-Stufe war zeitweise Teil der Pipeline und wurde im Mai 2026 durch eine dokumentierte Projektentscheidung wieder abgeschafft, nachdem kein Mensch die Freigabestatus vergeben hatte, die sie protokollierte, und der Agent seinen eigenen Output zertifizierte.

## Methodischer Beitrag

Das definierende Merkmal ist die vollstaendige Pipeline-Infrastruktur mit einem Verifikations-Interface pro Stufe, konkret ein Pipeline-Viewer, der Faksimile, Layout-Overlay und OCR/TEI nebeneinander rendert. So bekommt das fachliche Urteil an jedem Meilenstein einen definierten Ort und unterbricht die Fehlerkaskade, die mehrstufige automatisierte Pipelines kennzeichnet. Die Wissensbasis wird ueber Prompts kuratiert, nicht manuell editiert. Der Fall zeigt zugleich eine Grenze: eine zu umfangreiche CLI-Referenz im Action-Layer erzeugt Drift-Wellen bei jeder Pipeline-Aenderung.

## Links

Das Repository ist zum Stand der Publikation geschlossen und wartet auf die Freigabe der Partnerinstitution.

- Use-Case-Typ: Datenproduktion (#case-zbz-ocr-tei)
