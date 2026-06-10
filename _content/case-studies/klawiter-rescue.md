---
title: Klawiter Bibliography Rescue
id: klawiter-rescue
source: Projects/Promptotyping/Case Studies/klawiter-rescue.md
mirrored: 2026-06-10
---

# Klawiter Bibliography Rescue

## Kontext und Forschungsfrage

Das Projekt extrahiert und restrukturiert die Klawiter-Bibliographie, eine der umfassendsten bibliographischen Ressourcen zu Stefan Zweig, aus einer stillgelegten MediaWiki-Datenbank. Die Frage ist, wie sich ueber Jahrzehnte kompiliertes bibliographisches Wissen aus einem nicht mehr betriebenen Legacy-System retten und in eine nachhaltige, anschlussfaehige Form ueberfuehren laesst. Die Bibliographie ist integraler Bestandteil des Stefan-Zweig-Digital-Oekosystems und dient als Rezeptionsschicht in der SZDO-Nachlass-Ontologie.

## Daten

Ausgangspunkt sind SQL-Dumps und binaere BLOB-Dateien (363 MB) ohne externe Abhaengigkeiten. Der MediaWiki-SQL-Dump und acht BLOB-Dateien wurden direkt mit der Python Standard Library geparst, ohne MySQL. Die Daten umfassen Eintraege in mehr als 40 Sprachen und sechzehn Entitaetstypen. Ein eigener Pipeline-Schritt reparierte Mojibake-Encoding-Fehler.

## Vorgehen

Eine siebenstufige Pipeline fuehrt von Extraktion ueber Encoding-Reparatur, Parsing, optionale LLM-Anreicherung, Klassifikation und JSON-LD-Erzeugung zur Validierung. Die LLM-Anreicherung ist optional und fuellt Metadaten-Luecken; das Verfahren ist deterministisch zuerst angelegt. Das Frontend ist eine Vanilla-JavaScript-Static-Site ohne Build-Step in der SZD-Designsprache. Die Qualitaetssicherung umfasst eine Test-Suite mit LLM-as-a-Judge-Validierung und Round-Trip-Verifikation.

## Methodischer Beitrag

Klawiter-Rescue ist der paradigmatische Fall der Datenrettung und Transformation: aus einem Legacy-System wird strukturiertes, anschlussfaehiges Wissen. Methodisch zentral sind das Blended Vocabulary aus Schema.org, Dublin Core und einem projektspezifischen Namespace sowie die Provenance-Spur pro Wert, weil Werte aus Regex, LLM und Reconciliation kombiniert sind. JSON-LD als Ausgabeformat ermoeglicht die direkte Integration in die SZDO-Work-Layer. Das EIL-Kurationsinterface macht die Extraktionsqualitaet pruefbar.

## Links

- Repository: https://github.com/chpollin/klawiter-rescue
- Demo: https://chpollin.github.io/klawiter-rescue
- Video: https://youtu.be/KG35VGVctJw
- Use-Case-Typ: Datenrettung und Transformation (#case-klawiter-rescue)
