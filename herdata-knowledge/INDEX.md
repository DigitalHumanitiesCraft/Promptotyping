# INDEX

HerData ist ein kompaktes, nachvollziehbares Wissenssystem zu Frauen im Korrespondenzumfeld Goethes. Diese Einstiegsseite erklärt Zweck und aktuellen Stand, verweist auf die zugehörigen Dateien und nennt die Versionen, damit Dokumentation, Daten und Live-Darstellung übereinstimmen.

**Stand:** 09.11.2025
**Datensatz-Version:** 27.10.2025
**Pipeline-Bezeichnung:** build_herdata
**Live-Commit:** 0fe7cca

## Überblick und aktueller Stand

Die Live-Seite wird aus dem Hauptzweig über den `docs`-Bereich veröffentlicht. Die Karte ist bewusst die Startansicht; Personen werden in Cards ohne Tab-Logik dargestellt. Produktiv arbeiten wir mit einem kuratierten Korpus von 448 Frauen; Abdeckungen für GND, Geodaten und CMIF werden überall auf derselben Grundgesamtheit ausgewiesen. Felder, Beziehungen, Matching- und Deduplizierungsregeln sowie Geocoding-Heuristiken und Unsicherheitskennzeichnungen sind in Worten beschrieben. Externe Verweise (GND, CMIF, IIIF) sind integraler Bestandteil; bei Lücken erscheinen sprechende Fallbacks. Die frühere Timeline-Variante wurde als primäre Navigation verworfen; der Entscheid ist dokumentiert und begründet. Die Erzeugung der produktiven und der Provenance-Artefakte erfolgt derzeit manuell entlang eines klar beschriebenen Ablaufs.

## Orientierung im Vault

**Projekt und Kontext:**
[project.md](project.md) erläutert Zielbild, Zielgruppen, Scope und Terminologie. Enthält wissenschaftlichen Kontext: PROPYLÄEN-Projekt, DH-Standards (TEI, CMIF, GND, AGRELON), Gender Studies Perspektive, Forschungsfragen, Quellenkritik, strukturelle Verzerrungen und Nutzungsrechte.

**Daten und Herkunft:**
[data.md](data.md) beschreibt Datenquellen, Grundgesamtheit und Coverage, Beziehungsmodell (mit vollständiger AGRELON-Dokumentation: 38 Typen, Visualisierung, historischer Kontext), Matching- und Deduplizierung, Geocoding-Heuristiken, Unsicherheiten, Provenance sowie die Lizenzlage einschließlich Drittquellen.

**Datenmodell:**
[data-model.md](data-model.md) dokumentiert persons.json JSON-Schema, Feldtypen, Validierungsregeln, Frontend-Transformationen und Aggregationen für Kartenvisualisierung und stats.html.

**Entscheidungen:**
[decisions.md](decisions.md) führt alle maßgeblichen Architektur- und Produktentscheidungen mit Status, Begründung und beobachtetem Effekt; die Abkehr von der Timeline ist dort festgehalten und in design.md als finales Navigationsmodell gespiegelt.

**Anforderungen:**
[requirements.md](requirements.md) hält die fachlichen Anforderungen in Prosa fest und benennt pro Punkt den Umsetzungsstand mit verifizierten Daten (stats.html, correspondence-Arrays, AGRELON-Beziehungen). Alle Aussagen sind gegen tatsächliche Implementierung geprüft.

**Gestaltung:**
[design.md](design.md) erklärt Informationsarchitektur und Interaktion: Startansicht Karte, Personen-Cards, Filter, Umgang mit Netzwerk-Hinweisen im UI, Darstellung von Unsicherheit und externen Verweisen. Enthält Zielbild 2025-10-19, Implementierungsstand 2025-10-29 mit Lessons Learned, und CSS-Token-System-Analyse (aktualisiert 2025-11-04).

**Bereitstellung:**
[tech.md](tech.md) beschreibt den Weg von Quelle über Aufbereitung bis Veröffentlichung: 4-Phasen-Pipeline, Frontend-Architektur, Qualität und offene Punkte.

**Responsive Design:**
[responsive_dossier.md](responsive_dossier.md) fasst Diagnose, Zielbild, Maßnahmen-Backlog und Definition of Done für mobile Nutzung zusammen: Navigation, Touch-Interaktion, Zugänglichkeit, Testleitfaden und Abnahmekriterien.

**Netzwerk-Visualisierung:**
[network.md](network.md) dokumentiert AGRELON-Beziehungen und Frau-zu-Frau Korrespondenz: Datenquellen (86 AGRELON + 22 Briefe), Visualisierung (Farben, Linien, Interaktion), technische Implementierung (network-utils.js, MapLibre Layer), Features (Hover, Pin, Labels, Temporalfilter), UI/UX Optimierungen 2025-11-09, Performance-Tests, Limitierungen und Backlog.

**Wissenskorb:**
[wissenskorb.md](wissenskorb.md) beschreibt globalen, persistenten Wissenskorb: Konzept (LocalStorage-basierte Sammlung), Architektur (basket-manager.js, navbar Integration), Visualisierungen (Cytoscape Netzwerk mit 3 Modi, Timeline, Overview Stats), Navigation Controls (Zoom/Fit/Help seit 2025-11-09), Export-Funktionen (CSV/JSON), Testing und Backlog.

## Testing und Qualität

**Pipeline-Testing:**
Die Daten-Pipeline ([build_herdata.py](../../preprocessing/build_herdata.py)) implementiert 4 Validierungsmethoden mit 10 Assertions:
- test_phase1: 448 Frauen (400-500), 60,3% GND (50-70%)
- test_phase2: CMIF-Matching (senders > 0, with_letters > 0)
- test_phase3: Geodaten-Coverage (40-70%, 50,7% erreicht)
- test_phase4: JSON-Struktur (meta/persons vorhanden, required fields)

Testing-Strategie: Compact assertions check expected ranges, summary statistics printed for manual verification. Keine separaten Unit-Tests; Validierung integriert in Pipeline-Execution.

**Provenance-Tracking:**
Vollständig dokumentiert in data.md: persons_debug.json mit 3.695 Einträgen (source, xpath, raw_value, transformation, extracted_at) für alle 11 Datenfelder.

**Frontend-Testing:**
Keine automatisierten Tests. Manuelle Qualitätssicherung über Browser DevTools. Responsive Design analysiert in responsive_dossier.md.

## Verweise

Live-Seite: [https://chpollin.github.io/HerData/](https://chpollin.github.io/HerData/)
Repository: [https://github.com/chpollin/HerData](https://github.com/chpollin/HerData)
Entscheidungen und Änderungsstand sind in den genannten Dateien verlinkt; der Live-Commit ist oben genannt und wird in allen Dateien einheitlich geführt.
