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

Der Korpus umfasst 286 PDF-Scans mit rund 4.150 Seiten in Franzoesisch, Deutsch, Englisch und Italienisch. Kein Python-Skript wurde manuell geschrieben oder vom Autor begutachtet; aller Code wurde von Claude Code gegen die Knowledge-Dokumente generiert, getestet und committet. Die OCR-Kosten fuer den vollen Korpus lagen unter 10 EUR ueber Azure (dieser Wert stammt aus der publizierten Paper-Tabelle).

## Vorgehen

Die Pipeline laeuft durch sieben Stufen: PDF zu Bildern, OCR, Layout-Analyse mit QA, NER mit Wikidata/GND-Verlinkung, TEI-XML-Generierung, agentenbasiertes Quality-Screening und ein Inspektions- und Korrektur-Viewer. Eine zentralisierte Wissensbasis konfiguriert zusammen mit dem Action-Layer die gesamte Agentenschicht. Das agentenbasierte Quality-Screening laeuft ueber Claude-Code-Subagenten, die Repository-Skripte als Werkzeuge nutzen, mit strukturiertem Review-JSON pro Dokument.

## Methodischer Beitrag

Das definierende Merkmal ist die volle epistemische Infrastruktur: Verification Milestones, Promptotyping Interfaces, eine vielteilige Wissensbasis, Version Control und Agentic Coding greifen ineinander. Verifikation laeuft ueber Promptotyping Interfaces an jeder Pipeline-Stufe, konkret ein Pipeline-Viewer, der Faksimile, Layout-Overlay und OCR/TEI nebeneinander rendert. Die Wissensbasis wird ueber Prompts kuratiert, nicht manuell editiert. Der Fall zeigt zugleich eine Grenze: eine zu umfangreiche CLI-Referenz im Action-Layer erzeugt Drift-Wellen bei jeder Pipeline-Aenderung.

## Links

- Repository: https://github.com/chpollin/zbz-ocr-tei
- Use-Case-Typ: Datenproduktion (#case-zbz-ocr-tei)
