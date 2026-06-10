---
title: Notker Edition
id: notker-edition
source: Projects/Promptotyping/Case Studies/notker-edition.md
mirrored: 2026-06-10
---

# Notker Edition

## Kontext und Forschungsfrage

Die Notker-Edition ist eine digitale Edition des Notker-Psalmenkommentars (Psalm 2), entwickelt als Promptotype fuer einen Drittmittelantrag am Institut fuer Germanistik der Universitaet Graz. Die Forschungsfrage betrifft die Darstellung verschraenkter Textschichten: lateinische Psalmzitate, althochdeutsche Uebersetzungen und exegetischer Kommentar sollen einzeln sichtbar und steuerbar werden. Das Alleinstellungsmerkmal liegt gegenueber den gedruckten kritischen Editionen. Editorische Entscheidungen bleiben menschlich, die Ausfuehrung ist maschinell.

## Daten

Datenursprung ist eine DOCX-Probeseite zu Psalm 2 mit dreizehn Versen. Eine regelbasierte DOCX-zu-TEI-Pipeline aus vier Python-Skripten fuehrt von Parsen ueber Schichtklassifikation und TEI-Build zur JSON-Ableitung. TEI-XML ist die kanonische Datenquelle, eine Entscheidung, die gegenueber einer frueheren JSON-first-Entscheidung revidiert wurde. Eine IIIF-Faksimile-Anbindung an die Stiftsbibliothek St. Gallen ueber e-codices ergaenzt die Edition.

## Vorgehen

Die Edition ist eine Single-File-Webanwendung ohne Framework und ohne Build-Step. Sieben orthogonale Toggles steuern vier Textschichten und drei Darstellungsmodi, die Farblogik folgt der Textfunktion. Ein konfigurierbares Slot-System mit Pool-Registry erlaubt, Inhalte flexibel anzuordnen. Der Zustand wird vollstaendig als URL-Hash kodiert. Bemerkenswert ist die reibungslose Uebergabe zwischen zwei Claude-Code-Sessions verschiedener Bearbeiter mit dem Action-Layer als einzigem Kontext-Anker.

## Methodischer Beitrag

Die Notker-Edition zeigt die Datenproduktion als Editionsfall mit einer ausgepraegten Layer-Toggle-Architektur: orthogonale Controls machen die editorische Schichtung der Quelle interaktiv erfahrbar. Methodisch relevant ist der Review-Workflow mit dem Auftraggeber ueber ein geteiltes Dokument, dessen Korrekturen systematisch durch den Agenten in das kanonische TEI eingearbeitet und gegen einen verifizierten Build geprueft werden. Ein oeffentlicher Research Vault macht die Designentscheidungen fuer Antrags-Kollegen zitierbar.

## Links

- Repository: https://github.com/DigitalHumanitiesCraft/notker-edition
- Demo: https://dhcraft.org/notker-edition
- Use-Case-Typ: Datenproduktion (#case-notker-edition)
