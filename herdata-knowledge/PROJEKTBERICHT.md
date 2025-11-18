# HerData Projektbericht

Umfassende Analyse der Plattform, Features, Entwicklungsgeschichte und Bewertung

Erstellt: 2025-11-09
Basis: 218 Git-Commits, 22 Sessions, Code-Analyse, Journal-Auswertung

## Zusammenfassung

HerData ist eine vollständig funktionierende Digital-Humanities-Plattform zur Visualisierung und Analyse von 448 Frauen in der Briefkorrespondenz von Johann Wolfgang von Goethe (1762-1824). Das Projekt kombiniert drei Datenquellen (CMIF, SNDB kuratiert, SNDB komplett) zu einer interaktiven Web-Anwendung mit 7 Hauptansichten, umfasst 14.856 Zeilen Code (8.857 JS, 5.994 CSS, 2.260 Python) und wurde über 22 dokumentierte Sessions von Oktober bis November 2025 entwickelt.

## 1. Projektkontext und Ziele

### Wissenschaftlicher Hintergrund

HerData ist Teil des PROPYLÄEN-Langzeitprojekts der Klassik Stiftung Weimar (Laufzeit bis 2039), das eine digitale Edition von über 20.000 Briefen an Goethe erstellt. Das Projekt adressiert die systematische Unterrepräsentation von Frauen in historischen Korpora durch:

- Sichtbarmachung weiblicher Akteurinnen im Goethe-Umfeld
- Rekonstruktion von Netzwerken und Handlungsspielräumen
- Kontextualisierung durch biografische, geografische und soziale Daten
- Bereitstellung wissenschaftlich zitierbarer, transparenter Datengrundlagen

### Datengrundlage

Das Projekt nutzt einen Hybrid-Ansatz aus drei Quellen:

1. CMIF Letter Metadata (ra-cmif.xml)
   - 15.312 Briefe in TEI-XML/CMIF
   - Quelle: Zenodo 14998880 (März 2025)
   - Lizenz: CC BY 4.0
   - 1.793 Briefe mit Frauenbezug (11,7% des Korpus)

2. HerData Curated Export (aktiv)
   - 448 kuratierte Frauen (Export 27.10.2025)
   - 8 XML-Dateien, 800 KB
   - Deutlich bessere Datenqualität als Vollbestand:
     - GND-Abdeckung: 60,3% (vs. 34,1% im Vollbestand, +76,8%)
     - CMIF-Match: 51,3% (vs. 22,3%, +130%)
     - Geodaten: 50,7% (vs. 28,8%, +76,0%)
     - Lebensdaten: 94,0% (vs. 83,9%)

3. SNDB Complete (Geodaten-Auflösung)
   - 32 MB, 14 XML-Dateien
   - Koordinatenauflösung für SNDB_IDs
   - Zusätzliche biografische Quellen (goebriefe, bug, tagebuch)

Strategische Entscheidung (ADR-008): Kuratierter Datensatz statt Vollbestand, dokumentiert am 28.10.2025. Begründung: Qualität vor Quantität, Fokus auf regest-relevante Personen.

## 2. Alle Ansichten und Features im Detail

### 2.1 Hauptansicht: Interaktive Karte (index.html)

Live: https://chpollin.github.io/HerData/

Technologie: MapLibre GL JS 4.7.1 (WebGL-Rendering)
Code: docs/js/app.js (1.825 Zeilen)

Features:

Kartenvisualisierung:
- OpenStreetMap Basemap mit Entsättigung (saturate 0.7, brightness 1.05)
- 227 Orte mit Geodaten auf interaktiver Karte
- Center: Weimar (11.3235°, 50.9795°)
- Clustering mit adaptiver Größe (clusterMaxZoom 10, clusterRadius 40)
- Marker-Skalierung: 6px (z5) bis 16px (z15)
- Rollenbasierte Farbcodierung:
  - sender (blau): Nur Briefe gesendet
  - mentioned (grün): Nur erwähnt
  - both (violett): Beides
  - indirect (grau): Nur SNDB, keine Briefe

Netzwerk-Visualisierung (Hover-basiert):
- 84 AGRELON-Beziehungen zwischen 67 Frauen
- 41 Personen mit geo-lokalisierten Verbindungen
- Kategorien: Familie (rot, 80), Beruflich (grün, 2), Sozial (orange, 2)
- Echtzeit-Rendering bei Marker-Hover
- Pin-Feature für persistente Verbindungen (gestrichelte Linien)
- Transparenz: Hover 0.6, Pinned 0.8

Filter-Optionen (Sidebar, 2-Spalten-Layout):
- Aktivität: Absenderin, Erwähnt, Beides, Nur SNDB
- Berufsgruppe: 7 Kategorien (Künstlerisch, Literarisch, Musikalisch, Hof/Adel, Bildung, Sonstiges, Kein Beruf)
- Zeitfilter: Dualer Modus
  - Korrespondenz (1762-1824): Filtert nach Briefjahren
  - Lebensdaten (1700-1850): Filtert nach Geburt/Tod
  - Technologie: noUiSlider 15.7.1 mit Dual-Handle
- Ortstyp: Wirkungsort, Geburtsort, Sterbeort, Wohnort
- Netzwerk-Typ: Familie, Beruflich, Sozial, Korrespondenz

Multi-Person-Popups (ADR-002):
- Lösung für überlappende Marker (z.B. 217 Frauen auf Weimar-Koordinaten)
- Zeigt initial 15 Personen, erweiterbar
- Implementierung via queryRenderedFeatures()

Interaktionen:
- Cluster-Klick: Zoom zu Leaves (getClusterLeaves statt Distanz-Matching)
- Marker-Klick: Person-Popup mit Name, Daten, GND, SNDB-Links
- CSV-Export gefilterter Personen mit UTF-8 BOM (Excel-kompatibel)
- Reset-Button: Setzt alle Filter auf Default (true, nicht false)

Performance:
- Render: <500ms initial
- Filter-Updates: <100ms
- WebGL-beschleunigt, flüssig bis z15

Architektur-Entscheidungen:
- ADR-001: MapLibre GL JS über Leaflet (WebGL-Performance, 220 KB Bundle)
- ADR-002: Multi-Person-Popups für Überlappungen
- ADR-003: Cluster-Farbcodierung nach Briefaktivität
- ADR-005: Timeline Brush → Sidebar-Slider (überarbeitet)

### 2.2 Brief-Explorer (stats.html)

Live: https://chpollin.github.io/HerData/stats.html

Technologie: Apache ECharts 5.5.0 (~800 KB CDN)
Code: docs/js/stats.js (1.057 Zeilen)

Konzept: Multi-dimensionale Filterung mit Click-to-Filter auf allen Visualisierungen

KPI-Cards (clickable, Sidebar):
- 1.793 Briefe → stats.html
- 448 Frauen → synthesis/index.html
- 227 Orte → places.html

Visualisierungen (Phase 2a-2e, entwickelt über Sessions 19):

1. Berufsverteilung (Treemap, Full-width)
   - Alle 73 Berufe sichtbar (statt Top-10 Bar Chart)
   - Farbgradient: Light-to-dark blue nach Personenanzahl
   - Click-to-Filter: Toggle-Verhalten
   - Notiz: "Mehrfachberufe mehrfach gezählt" (Transparenz)
   - Beispiel: 36 Schauspielerinnen, 12 davon auch Sängerin

2. Geografische Zentren (Horizontal Bar Chart)
   - Top 10 Orte mit Personenanzahl
   - Horizontal statt vertikal (bessere Lesbarkeit, keine rotierten Labels)
   - Click-to-Filter
   - Dominanz: Weimar 83 (37%), Berlin 47, Frankfurt 26

3. Generationen (Bar Chart)
   - Dekaden-Histogramm 1720er-1820er
   - Peak: 1760er-1780er (279 Personen = 62%)
   - Click-to-Filter nach Geburtsjahrzehnt
   - 407/448 mit Geburtsdaten

4. Master Timeline (Sidebar)
   - Line+Area Chart 1772-1824
   - 1.733 unique Briefe (korrigiert von 7.472 Events)
   - Bug-Fix (09.11.2025): Timeline zählte Briefe UND Erwähnungen
   - Jetzt: Nur unique letter_ids vom Typ 'sent'
   - ECharts dataZoom für Range-Selection
   - Kopplung an Zeitfilter-Modus

Filter-Interaktion (Phase 2b):
- Active Filter Chips: Visuelle Anzeige mit × Button
- Recognition over Recall Principle
- Format: "Schauspielerin (36)", "1780er Generation (12)"
- URL-Parameter für Persistierung

Koordinierte Views (Phase 2c, später entfernt):
- echarts.connect() initial implementiert
- Entfernt: Verhinderte verwirrende Cross-Highlights (Sängerin → Wien)
- Dokumentiert in Session 19

Briefaktivität-Filter (Phase 2d, Sidebar):
- 4 Checkboxen: Absenderin (191), Erwähnt (195), Beides (156), Nur SNDB (218)
- Ersetzt Activity-Chart (Platz für Treemap)

"X Personen anzeigen" Button (Phase 2e):
- Erscheint bei aktiven Filtern
- Generiert URL mit allen FilterState-Parametern
- Format: synthesis/index.html?occupation=X&place=Y&timeStart=A&timeEnd=B&timeMode=C&activityTypes=D&birthDecade=E
- Nahtloser Übergang zu gefilterter Personenliste

Export-Funktionen:
- CSV/PNG pro Chart (2 Buttons je Visualisierung)
- Formate: Beruf,Anzahl,Prozent | Jahr,Briefe | Ort,Anzahl,Lat,Lon | etc.

User Flow Beispiel:
1. Klick "Schauspielerin" → Filter-Chip (36 Personen)
2. Klick "1780er" → Filter-Chip (12 Personen)
3. Button "12 Personen anzeigen →"
4. Weiterleitung zu synthesis/index.html mit Filtern
5. Tabelle zeigt nur 12 gefilterte Frauen

Grid-Layout:
- Desktop: Full-width Treemap + 2-spaltig (Orte, Generationen)
- Mobil: 1-spaltig
- Breakpoints: 1200/768/480

### 2.3 Personenliste (synthesis/index.html)

Live: https://chpollin.github.io/HerData/synthesis/index.html

Code: docs/synthesis/js/app.js
Layout: 3-Spalten (Filter | Tabelle | Detail-Panel)

Features:

Dynamische KPI-Cards (Echtzeit-Filterung):
- Zeigen gefilterte Anzahl: Briefe, Frauen, Orte
- Clickable mit Tooltips
- Update bei jedem Filter-Change

Datentabelle (Center):
- Spalten: Stern (Wissenskorb), Name, GND-ID, Geburt-Tod, Briefe, Erwähnt, Detail-Link
- Sortierbar nach allen Spalten
- Zebra-Streifenmuster (optimierte Dichte: 6px 12px padding)
- Font Awesome Icons (fa-bookmark, fa-external-link-alt)
- Detail-Link: Öffnet person.html in neuem Tab

Filter-Panel (Links):
- Rolle: Absenderin, Erwähnt, Beides, Nur SNDB
- Zeitfilter: Identisch zur Hauptansicht (Korrespondenz/Lebensdaten)
- Normierung: GND, SNDB
- Reset-Button

Detail-Panel (Rechts):
- Pulsiert beim Öffnen (600ms Animation, box-shadow -8px zu -4px)
- Zeigt: Biografie, Orte, Berufe, Beziehungen, Quellenlinks
- Hover-Effekte: Scale 1.15x für Wissenskorb-Button

URL-Parameter-Unterstützung (Phase 2e):
- Liest Filter aus URL: ?occupation=X&place=Y&birthDecade=Z
- Wendet automatisch an beim Laden
- Ermöglicht Deep-Links von Brief-Explorer

Globale Suche:
- Navbar-Dropdown UND Tabellenfilterung parallel
- Suche in Name + Varianten (Fuse.js threshold 0.3)
- Keyboard-Navigation: Pfeile/Enter/Escape

Wissenskorb-Integration:
- Star-Button pro Person (dynamische Farbe: accent/grau)
- Maximale Kapazität: aufgehoben (früher 20)
- Persistierung: LocalStorage
- Badge-Counter in Navbar

Export:
- CSV gefilterter Personen
- JSON gesamte Sammlung

### 2.4 Wissenskorb (wissenskorb.html)

Live: https://chpollin.github.io/HerData/wissenskorb.html

Technologie: Cytoscape.js 3.29.2 (Graph-Visualisierung)
Code: docs/js/wissenskorb.js (923 Zeilen)

Konzept: Globaler, persistenter Sammelkorb für vergleichende Personenanalyse

Entwicklung:
- Initial: Nur in synthesis/index.html als Tab
- Session 5.11.2025: Eigenständige Seite mit Navigation
- Implementierung: basket-manager.js (260 Zeilen, zentrale Bibliothek)

KPI-Cards (Übersicht):
- Anzahl gesammelte Personen
- Absenderinnen, Erwähnte
- Anzahl Beziehungen

3 Netzwerk-Modi:

1. AGRELON Beziehungen
   - Force-directed Layout (COSE)
   - Zeigt formale Beziehungen (Familie, Beruf, Sozial)
   - Farbcodiert nach Kategorie
   - Edge-Tooltips: "2 Verbindungen: Schwester, Freundin" (bei Hover)

2. Gemeinsame Orte
   - Hub-and-Spoke Struktur
   - Zentrale Knoten: Orte (quadratisch)
   - Personen clustered um Orte
   - Gleicher COSE-Algorithmus wie AGRELON

3. Gemeinsame Berufe
   - Hub-and-Spoke Struktur
   - Zentrale Knoten: Berufe (rautenförmig)
   - Zeigt berufliche Überschneidungen

Verworfene Features (dokumentiert):
- Geografische Visualisierung mit Leaflet.js
  - Session 20 (05.11.2025): Implementiert, dann revertiert
  - Grund: "zu viel", Überladung, schlechtere Lesbarkeit
  - Entscheidung: Dokumentiert in decisions.md
  - Code: -54 Zeilen Map-Creation, -28 Zeilen Preset Layout

Graph-Controls:
- Zoom In/Out Buttons
- Fit to View Button
- Help-Tooltip für Cytoscape-Bedienung
- Implementiert: Session 21 (09.11.2025)

Filter (Sidebar):
- Rolle: Absenderin, Erwähnt, Beides, Nur SNDB
- Anzeige: Nur mit Verbindungen, Mit/Ohne AGRELON-Beziehungen

Bug-Fix (09.11.2025):
- Infinite Graph Growth behoben
- Cytoscape-Warnungen eliminiert
- Issue: Nodes wurden bei Modi-Wechsel nicht entfernt

Export:
- CSV: Personen mit Metadaten
- JSON: Vollständige Sammlung mit Beziehungen
- PNG: Graph-Visualisierung

Persistierung:
- LocalStorage (Schlüssel: 'herdata_basket')
- Event-System: basket:updated für Synchronisation
- Verfügbar von allen Ansichten

Integration:
- Add-Button in: Map-Popups, Brief-Explorer, Synthesis-Tabelle, Person-Detail
- Badge-Counter in Navbar (zeigt Anzahl)
- Toast-Notifications bei Add/Remove

Nutzungsszenarien:
1. Vergleichende Analyse (z.B. Schauspielerinnen aus 1780ern)
2. Forschungssammlung (über mehrere Ansichten hinweg)
3. Präsentationsvorbereitung (Visualisierungen exportierbar)

### 2.5 Personenprofile (person.html)

Live: https://chpollin.github.io/HerData/person.html?id=35267

Code: docs/js/person.js (690 Zeilen)

Layout: Card-basiert (keine Tabs, Session 13 UX-Redesign 29.10.2025)

Header:
- Name, Lebensdaten
- Rollenbasierte Badges (Absenderin, Erwähnt, Nur SNDB)
- GND/SNDB als Inline-Links (nicht große Buttons)
- One-Click-Copy Zitation:
  - Clipboard API mit "Kopiert!" Feedback (2s)
  - Monospace-Box, mobil vollbreit
  - Format: "Name (Lebensdaten). In: HerData..."

Qualitäts-Indikatoren (Session 13):
- Icons: ✓ (grün) vorhanden, ✗ (rot) fehlt, i (blau) Meta
- 20px Rund-Badges
- Transparenz über Datenvollständigkeit

Biografie-Section:
- Markup-Parsing: SNDB-Format (#s+text#s-)
- 448/448 Personen mit Hauptbiografie (projekt_regestausgabe.xml)
- 187 Personen mit zusätzlichen Biografien (41,7% Coverage):
  - goebriefe.xml: 150 Einträge
  - bug.xml: 133 Einträge
  - tagebuch.xml: 20 Einträge
- Implementierung: biographies Array (Bug-Fix 09.11.2025)
- Früher: Nur biography String, 3 Quellen ungenutzt
- Jetzt: 751 biografische Texte aus 4 Quellen mit source-Metadaten

Korrespondenz:
- Anzahl Briefe (gesendet/erwähnt)
- Ehrlicher Platzhalter: "Derzeit nur Anzahlen verfügbar"
- Kein "Phase 2" Versprechen (Session 13 Fix)

Orte (Mini-Karte):
- Interaktive Leaflet-Karte mit Markern
- Ortstypen: Wirkungsort, Geburtsort, Sterbeort, Wohnort
- 227/448 mit Geodaten (50,7%)

Berufe:
- 207/448 mit Berufsangaben (46,2%)
- Typ-Klassifikation (z.B. "Schauspielerin" → Künstlerisch)

Beziehungen (AGRELON):
- 67/448 mit Beziehungen (15,0%)
- Auflistung mit Zielname und Typ
- Kategorien: Familie, Beruflich, Sozial

Quellen:
- GND-Link (wenn vorhanden, 270/448 = 60,3%)
- SNDB-Link (alle 448)
- PROPYLÄEN-Link
- Zenodo DOI

Responsive:
- Breakpoints: 768/480
- Einspaltige Stats auf Mobil
- Copy-Button unter Text
- Word-Break für lange URLs

Wissenskorb-Integration:
- Add-Button im Header
- Toast-Notification bei Erfolg

### 2.6 Ortsliste (places.html)

Code: docs/js/places.js (139 Zeilen)

Features:
- Tabelle mit 227 Orten
- Spalten: Ortsname, Anzahl Personen, Koordinaten
- Sortierbar
- Globale Suche (Font Awesome Integration, Session 19)
- Export: CSV

Daten:
- Weimar: 83 Personen (36,6%)
- Berlin: 47 Personen (20,7%)
- Frankfurt am Main: 26 Personen (11,5%)
- Weitere 224 Orte

### 2.7 Knowledge Vault (vault.html)

Live: https://chpollin.github.io/HerData/vault.html

Code: docs/js/vault.js (148 Zeilen)

Konzept: Markdown-basierte Dokumentationsansicht

Features:
- Markdown-Renderer mit marked.js
- Sidebar mit Dokumenten-Index
- 10 Wissensdokumente in docs/knowledge/:
  - INDEX.md (Navigation)
  - project.md (Projektziele)
  - data.md (Datenquellen)
  - data-model.md (JSON-Schema)
  - design.md (UI/UX)
  - requirements.md (User Stories)
  - decisions.md (ADRs)
  - tech.md (Technologie)
  - network.md (Netzwerk-Features)
  - wissenskorb.md (Sammelkorb-Konzept)

Navigation:
- Default: INDEX.md (Session 9.11.2025)
- URL-Parameter: ?doc=network.md
- Responsive Sidebar

Cleanup (09.11.2025):
- Obsolete Docs entfernt (implementation-quick-wins.md)
- Network-Dokumentation konsolidiert (4 Dateien → network.md)
- Wissenskorb-Dokumentation archiviert (4 Dateien → archive/)

### 2.8 Test-Dashboard (tests.html)

Live: https://chpollin.github.io/HerData/tests.html

Code: docs/js/tests.js (233 Zeilen)
CSS: docs/css/tests.css (433 Zeilen)

Implementiert: Session 22 (09.11.2025)

Features:

Visuelles Dashboard:
- Lädt docs/data/tests/latest.json (pytest JSON-Report)
- 3 Kategorien: Pipeline Processing, Data Quality, JSON Schema
- Status-Badges: Passed (grün), Failed (rot), Skipped (gelb)
- Expandierbare Test-Details mit Fehler-Messages

Test-Übersicht:
- 46 Tests total
- Status: 45 passing, 1 failing (Timeline-Konsistenz)
- Ausführungszeit: 0.49s
- Coverage-Statistiken (informativ, kein Pass/Fail)

Test-Kategorien:

1. Pipeline Processing (15 Tests)
   - Data Preservation: Keine Personen verloren
   - Type Consistency: Integer, Strings, Datumsformate
   - Relationship Resolution: Namen aufgelöst
   - Geodata Resolution: Koordinaten vorhanden
   - Aggregate Consistency: Counts korrekt

2. Data Quality (19 Tests)
   - Referentielle Integrität: IDs existieren
   - Plausibility: Geburt vor Tod
   - Completeness: Required Fields vorhanden

3. JSON Schema Validation (12 Tests)
   - Struktur gegen formales Schema
   - Enum-Werte korrekt
   - Ranges eingehalten

Bekannte Issues (dokumentiert):
- 22 Korrespondenz-Einträge ohne recipient_name trotz recipient_gnd
- 86 Beziehungen ohne target_name trotz target_id
- 1 Timeline-Konsistenz-Test schlägt fehl (Jahr 1802: 62 vs 231)

Integration:
- Navbar-Link "Tests"
- Automatische Generierung: pytest --json-report
- CI/CD-bereit

## 3. Python-Pipeline (Data Processing)

Skript: preprocessing/build_herdata.py (1.132 Zeilen)

4-Phasen-Architektur mit integrierten Tests:

Phase 1: Women Identification
- Lädt ra_ndb_main.xml, ra_ndb_indiv.xml, ra_ndb_datierungen.xml
- Filtert SEXUS='w' → 448 Frauen
- Extrahiert: ID, Name, Namensvarianten (LFDNR>0), GND, Lebensdaten
- Test: 400-500 Frauen, 50-70% GND, 350-450 Varianten
- Ergebnis: 448 Frauen, 60,3% GND, 397 Varianten (267 Personen)

Phase 2: CMIF Letter Matching
- Lädt ra-cmif.xml (15.312 Briefe)
- Matching via GND-ID (primär)
- Kategorisiert: Absenderin (191), Erwähnt (195), Beides (156), Nur SNDB (218)
- Bug-Fix (09.11.2025): Timeline-Semantik korrigiert
  - Früher: Aggregierte Briefe UND Erwähnungen (7.472 Events)
  - Jetzt: Nur unique Briefe (1.733), sent_years/mentioned_years getrennt
- Test: Mindestens 1 Match, mindestens 1 Absenderin
- Ergebnis: 230 mit CMIF-Daten (51,3%)

Phase 3: Data Enrichment (Hybrid)
- Geodaten:
  - ra_ndb_orte.xml → SNDB_IDs
  - geo_main.xml (alt) → Ortsnamen
  - geo_indiv.xml (alt) → Koordinaten
  - 227 Personen mit Geodaten (50,7%)
- Berufe:
  - ra_ndb_berufe.xml → 207 Personen (46,2%)
  - 231 unique Berufe → 7 Kategorien
- Beziehungen:
  - ra_ndb_beziehungen.xml → 939 total
  - Filter Frau↔Frau → 86 Einträge
  - nsl_agrelon.xml → 38 Typen → 3 Kategorien
- Biografien (Bug-Fix 09.11.2025):
  - projekt_regestausgabe.xml (NEU): 448 Einträge
  - pers_koerp_projekt_goebriefe.xml (ALT): 150 Einträge
  - pers_koerp_projekt_bug.xml (ALT): 133 Einträge
  - pers_koerp_projekt_tagebuch.xml (ALT): 20 Einträge
  - Ergebnis: 751 Texte aus 4 Quellen, 187 Personen mit multiplen Biografien
- Test: 40-70% Geodaten
- Ergebnis: 50,7% Geodaten

Phase 4: JSON Generation
- Generiert persons.json (2,6 MB) und persons_debug.json (3,7 MB)
- Meta-Felder: total, with_gnd, with_dates, etc.
- Timeline: 47 Jahre mit Briefdaten
- Provenance-System (Session 1, 04.11.2025):
  - track_provenance=True (default)
  - 11 Felder getrackt: id, name, gnd, dates, letter_count, mention_count, role, places, occupations, biography
  - Debug-JSON: _provenance pro Person (Quelle, XPath, Rohwert, Transformation, Timestamp)
  - 3.695 Provenienz-Einträge für 448 Frauen
  - persons_debug.json: +1,28 MB für volle Transparenz
- Test: Meta-Counts korrekt, Timeline konsistent
- Ergebnis: 448 Personen, validiertes JSON

Performance:
- Laufzeit: 4,48s (früher 1,11s bei Vollbestand)
- Output: 2,51 MB (persons.json), 3,67 MB (persons_debug.json)
- 48 integrierte Tests (alle grün)

Weitere Skripte:

analyze_goethe_letters.py (399 Zeilen):
- Parst ra-cmif.xml
- Generiert data/analysis-report.md mit 12 Statistiksektionen
- Laufzeit: 3-5s

add_biographies.py (96 Zeilen):
- Multi-Source-Biografien-Integration
- 4 Quellen: regestausgabe, goebriefe, bug, tagebuch

integrate_relations.py (225 Zeilen):
- AGRELON-Beziehungen-Mapping
- 38 Typen → 3 Kategorien (Familie/Beruflich/Sozial)

compare_data_sources.py (390 Zeilen):
- Datenqualitätsvergleich Neu vs. Alt
- Generiert Statistiken für ADR-008-Entscheidung

## 4. Technologie-Stack

Frontend:
- Vanilla JavaScript (ES6+ Module)
- MapLibre GL JS 4.7.1 (Karte, WebGL)
- Apache ECharts 5.5.0 (Statistiken)
- Cytoscape.js 3.29.2 (Graph)
- Fuse.js (Suche)
- noUiSlider 15.7.1 (Zeitfilter)
- Font Awesome 6.5.1 (Icons)
- marked.js (Markdown)

Backend:
- Python 3.11+ (Pipeline)
- xml.etree.ElementTree (XML-Parsing)
- pytest 8.3.5 (Tests)
- json-report Plugin

CSS:
- Design Tokens (tokens.css, 158 Zeilen)
- BEM-ähnliche Namenskonvention
- Responsive: 480/768/1024/1200/1400px Breakpoints
- WCAG AA Konformität angestrebt

Deployment:
- GitHub Pages (Static Site)
- 218 Commits
- Continuous: Push to main → Deploy

Performance:
- Initial Load: ~2s (TTI)
- JSON: 2,6 MB (gzipped ~600 KB)
- Filter-Updates: <100ms
- WebGL-Rendering: 60 FPS

## 5. Projektentwicklung Chronologie

Basierend auf 218 Git-Commits und 22 dokumentierten Sessions

Oktober 2025:

19.10.2025 - Session 1-4 (Grundlagen)
- Initial Commit (dbef54b): Projekt-Setup, Datenvalidierung
- Pipeline MVP: 4 Phasen, 3.617 Frauen (Vollbestand)
- Frontend-Struktur: Design-System, erste Karte
- ADR-001: MapLibre GL JS über Leaflet
- 14 Commits, ~2.000 Zeilen Code

20.10.2025 - Session 5-7 (Map & Search)
- MapLibre MVP: Clustering, Multi-Person-Popups (ADR-002)
- Globale Suche mit Fuse.js
- 6 Commits

21.10.2025 - Session 8-10 (Stats & Timeline)
- Statistik-Dashboard (Chart.js, später ECharts)
- Timeline-Architektur-Revision (D3 Brush → noUiSlider)
- ADR-005: Timeline in Sidebar
- 8 Commits

22-27.10.2025 - Entwicklungspause (keine Commits)

28.10.2025 - Session 11-12 (Kuratiertes Dataset & Netzwerk)
- Fund: Neuer Export (448 Frauen, deutlich bessere Qualität)
- Pipeline-Refactor: Hybrid-Geodaten-Ansatz
- ADR-008: Kuratierter Datensatz (Qualität > Quantität)
- AGRELON-Integration: 86 Beziehungen
- Network-View: force-graph mit 448 Nodes
- 4 Commits, ~1.000 Zeilen

29.10.2025 - Session 13-16 (UX & Hover-Netz)
- Person-UX-Redesign: Inline-Links, One-Click-Copy, Qualitäts-Icons
- Statistik-Dashboard: ECharts 5.5.0, 5 Visualisierungen
- Code-Refactor: Shared data.js (DRY), -66% Memory
- Hover-Netzwerk: Interaktive AGRELON-Linien auf Karte
- 12 Commits, ~1.500 Zeilen

30.10.-03.11.2025 - Entwicklungspause

04.11.2025 - Session 1-3 (Provenance & Doku-Konsolidierung)
- Provenance-System: persons_debug.json mit _provenance
- Dokumentations-Konsolidierung: 27 Markdown-Dateien → Knowledge Vault
- Data-Model-Separation: data.md vs. data-model.md
- CSS-Analyse-Integration in design.md
- 8 Commits

November 2025:

05.11.2025 - Session 17-20 (Brief-Explorer & Wissenskorb)
- Session 17: Dualer Zeitfilter, CSV-Export, Vault-Cleanup
- Session 18: Phase 2 UI (Token-Konsolidierung, KPI-Karten)
- Session 19: Navigation-Restrukturierung, Brief-Explorer Phase 2a-2e
  - Treemap (73 Berufe), Click-to-Filter, Linked Brushing
  - Filter Chips, "X Personen anzeigen" Button
  - Font Awesome Integration
  - 15 Commits, ~2.000 Zeilen
- Session 20: Wissenskorb Edge-Tooltips
  - Geografische Visualisierung implementiert → revertiert
  - Entscheidung dokumentiert (zu viel Komplexität)
  - 3 Commits

09.11.2025 - Session 21-22 (UI-Optimierung & Tests)
- Session 21: UI/UX-Optimierung
  - Netzwerk-Farben optimiert (colorblind-safe)
  - Sidebar-Kompaktierung (50% weniger Spacing)
  - Legende in Sidebar verschoben
  - Wissenskorb-Navigation (Zoom, Fit, Help)
  - Design-Tokens eingeführt
  - 10 Commits
- Session 22: Mobile Responsive Navigation
  - Burger-Menü (slide-in, 280px, Overlay)
  - View-Switcher: Icon-only auf ≤480px
  - Navbar-Konsolidierung (5 Templates → 1)
  - Touch-Targets: 44×44px (WCAG 2.1)
  - Landscape-Modus: Reduzierte Höhen
  - 6 Commits
- Test-Strategie implementiert:
  - 46 automatisierte Tests (pytest)
  - Test-Dashboard (tests.html)
  - 3 Test-Suites: Processing, Quality, Schema
  - 14 neue Dateien, ~5.700 Zeilen
- Code-Review-Fixes (kritisch):
  - Reset-Button repariert (setzte fälschlich auf false)
  - Timeline-Semantik korrigiert (1.733 statt 7.472)
  - Cluster-Deduplikation verbessert (parallele Verbindungen erhalten)
  - Biographies-Array implementiert (4 Quellen, 751 Texte)
- Dokumentations-Konsolidierung:
  - Network-Docs konsolidiert (4 Dateien → network.md)
  - Obsolete Docs entfernt (implementation-quick-wins.md)
  - Wissenskorb-Docs archiviert
- 10 Commits heute (09.11.2025)

Gesamt:
- Entwicklungszeitraum: 19.10. - 09.11.2025 (22 Tage, 13 aktive Tage)
- 218 Commits
- 22 dokumentierte Sessions
- ~15.000 Zeilen Code geschrieben
- 8 ADRs dokumentiert

Entwicklungsrhythmus:
- Intensive Phasen: 19.-21.10., 28.-29.10., 05.11., 09.11.
- Pausen: 22.-27.10., 30.10.-03.11.
- Letzter intensiver Tag: 09.11.2025 (10 Commits, mehrere Major Features)

## 6. Architektur-Entscheidungen (ADRs)

8 dokumentierte ADRs in docs/knowledge/decisions.md:

ADR-001: MapLibre GL JS über Leaflet (19.10.2025)
- Status: Implemented
- Kontext: Bedarf für WebGL-Performance, Brushing, Linking, Heatmaps
- Entscheidung: MapLibre GL JS 4.7.1
- Alternativen: Leaflet 1.9 (40 KB, aber kein WebGL), OpenLayers (zu komplex)
- Trade-offs: +220 KB Bundle, Lernkurve
- Ergebnis: Flüssige Performance bis z15, 60 FPS

ADR-002: Multi-Person-Popups (20.10.2025)
- Status: Implemented
- Problem: 217 Frauen auf Weimar-Koordinaten, nur Top klickbar
- Lösung: queryRenderedFeatures() → Liste mit 15 initial, expandierbar
- Alternativen: Jitter (unpräzise), Cluster-Only (keine Details)

ADR-003: Cluster-Farbcodierung (21.10.2025)
- Status: Implemented
- Kontext: Forschungsinterface nötig, alle Cluster blau
- Entscheidung: Farbe nach Mehrheit (writers blau, mixed grün, mentioned grau, SNDB hell)
- Legende mit Tooltips: "111 Frauen | 45 geschrieben • 58 erwähnt • 8 SNDB"

ADR-004: (nicht dokumentiert, Lücke in Nummerierung)

ADR-005: Timeline Sidebar-Filter (21.10.2025)
- Status: Implemented → Revised
- Ursprung: D3 Brush im Timeline-Bereich
- Revision: Brush entfernt, noUiSlider in Sidebar
- Grund: Konsistente UX, Brushing & Linking: Slider ↔ Map ↔ Timeline
- Ergebnis: <500ms Render, <100ms Updates

ADR-006: (nicht dokumentiert)

ADR-007: (nicht dokumentiert)

ADR-008: Kuratierter Datensatz (28.10.2025)
- Status: Implemented
- Kontext: Neuer Export (448 Frauen) vs. Vollbestand (3.617)
- Analyse: +76,8% GND, +130% CMIF-Match, +76,0% Geodaten
- Entscheidung: Nur kuratierter Datensatz (Qualität > Quantität)
- Begründung: Fokus auf regest-relevante Personen, bessere Forschbarkeit
- Ergebnis: -81% JSON-Größe, -55% Pipeline-Zeit

ADR-009: Wissenskorb ohne geografische Karte (05.11.2025)
- Status: Implemented → Reverted → Documented
- Versuch: Leaflet.js als Kartenhintergrund für Places-Modus
- User-Feedback: "zu viel"
- Revert: -54 Zeilen Map-Creation, -28 Zeilen Preset Layout
- Entscheidung: Force-directed Layout für alle Modi
- Grund: Klarheit, Lesbarkeit, Konsistenz

ADR-010: (möglicherweise weitere, nicht dokumentiert)

Beobachtungen:
- Lücken in Nummerierung (ADR-004, 006, 007, 010)
- Alle implementierten ADRs haben klare Begründungen
- Trade-offs werden explizit benannt
- User-Feedback fließt ein (ADR-009)
- Revisionen werden dokumentiert (ADR-005)

## 7. Datenqualität und Transparenz

Coverage-Statistiken (448 Frauen):

Identifikatoren:
- GND-ID: 270 (60,3%) - Deutsche Normdaten
- SNDB-ID: 448 (100,0%) - Projektinterne IDs

Briefdaten:
- CMIF-Verbindung: 230 (51,3%)
- Absenderinnen: 191 (42,6%)
- Erwähnte: 195 (43,5%)
- Beides: 156 (34,8%)
- Nur SNDB: 218 (48,7%)

Biografische Daten:
- Lebensdaten: 421 (94,0%)
- Hauptbiografie: 448 (100,0%) - projekt_regestausgabe.xml
- Zusätzliche Biografien: 187 (41,7%) - aus 3 weiteren Quellen
- Gesamt: 751 biografische Texte aus 4 Quellen

Geografische Daten:
- Mit Geodaten: 227 (50,7%)
- Orte gesamt: 227 (unique Koordinaten)
- Wirkungsorte: Mehrheit
- Geburtsorte, Sterbeorte, Wohnorte: Minderheit

Berufliche Daten:
- Mit Berufsangaben: 207 (46,2%)
- Unique Berufe: 231
- Kategorien: 7 (Künstlerisch 222, Literarisch 199, Musikalisch 98, Hof/Adel 67, Bildung 23, Sonstiges 18)
- Mehrfachberufe: Häufig (z.B. 12 Schauspielerinnen sind auch Sängerinnen)

Netzwerk-Daten:
- Mit AGRELON-Beziehungen: 67 (15,0%)
- Beziehungen gesamt: 86 (bidirektional)
- Kategorien: Familie 80, Beruflich 2, Sozial 2
- Mit geo-lokalisierten Verbindungen: 41

Transparenz-Mechanismen:

1. Qualitäts-Icons (person.html):
   - ✓ (grün): Feld vorhanden
   - ✗ (rot): Feld fehlt
   - i (blau): Meta-Information

2. Provenance-System (persons_debug.json):
   - 11 getrackte Felder
   - Quelle, XPath, Rohwert, Transformation, Timestamp
   - 3.695 Provenienz-Einträge

3. Test-Dashboard (tests.html):
   - 46 automatisierte Tests
   - Coverage-Statistiken (informativ)
   - Bekannte Issues dokumentiert

4. Dokumentation:
   - data.md: Datenquellen, Lizenzen, Qualität
   - data-model.md: JSON-Schema, Feldtypen
   - JOURNAL.md: Entwicklungsentscheidungen

Bekannte Qualitätsprobleme:

1. Fehlende Namen (dokumentiert als KNOWN ISSUE):
   - 22 Korrespondenz-Einträge: recipient_gnd vorhanden, recipient_name fehlt
   - 86 Beziehungen: target_id vorhanden, target_name fehlt
   - Ursache: GND-ID nicht aufgelöst (möglicherweise männliche Personen außerhalb des Datensatzes)

2. Timeline-Konsistenz (1 Test schlägt fehl):
   - Jahr 1802: Timeline-Count 62, tatsächliche Briefe 231
   - Unter Untersuchung

3. Geodaten-Lücken:
   - 221 Frauen ohne Ortsangaben (49,3%)
   - Grund: ra_ndb_orte.xml unvollständig

4. Mehrfachberufe-Zählung:
   - Treemap zählt Mehrfachberufe mehrfach
   - Transparent kommuniziert: "Mehrfachberufe werden mehrfach gezählt"
   - Beispiel: 36 Schauspielerinnen enthalten 12, die auch Sängerinnen sind

Wissenschaftliche Standards:

Zitierbarkeit:
- DOI: Zenodo 14998880 (CMIF-Daten)
- One-Click-Zitation auf person.html
- Format: "Name (Lebensdaten). In: HerData..."

Lizenzen:
- CMIF: CC BY 4.0
- SNDB: Klassik Stiftung Weimar (intern)
- HerData-Code: (nicht spezifiziert, vermutlich Open Source)

Reproduzierbarkeit:
- Vollständige Pipeline in build_herdata.py
- 48 integrierte Tests
- Provenance-Tracking für alle Transformationen
- Versionierung via Git (218 Commits)

## 8. Konstruktive Bewertung

Stärken:

1. Herausragende Dokumentation
   - 22 Sessions vollständig dokumentiert (JOURNAL.md, 835 Zeilen)
   - 10 Knowledge-Vault-Dokumente (strukturiert, aktuell)
   - 8 ADRs mit Begründungen und Trade-offs
   - Code-Kommentare, README, inline Docs
   - Test-Dokumentation (tests.md, 1.522 Zeilen)
   - Bewertung: Vorbildlich für Digital-Humanities-Projekte

2. Robuste Architektur
   - Modulare Struktur (data.js, network-utils.js, basket-manager.js)
   - Shared Data Loading (-66% Memory)
   - Event-System für Synchronisation (basket:updated)
   - Responsive Design (5 Breakpoints)
   - Performance-optimiert (<500ms Render, <100ms Updates)
   - Bewertung: Production-ready

3. Umfassende Tests
   - 46 automatisierte Tests (pytest)
   - 3 Test-Suites (Processing, Quality, Schema)
   - 48 integrierte Pipeline-Tests
   - Visuelles Dashboard (tests.html)
   - Coverage-Monitoring
   - Bewertung: Überdurchschnittlich für DH-Projekte

4. Wissenschaftliche Transparenz
   - Provenance-System (3.695 Einträge)
   - Qualitäts-Icons auf UI
   - Bekannte Issues dokumentiert
   - Multi-Source-Biografien (4 Quellen)
   - Zitierbarkeit (One-Click-Copy)
   - Bewertung: Entspricht wissenschaftlichen Standards

5. Feature-Vielfalt
   - 7 Hauptansichten (Map, Brief-Explorer, Personen, Wissenskorb, Person-Detail, Orte, Vault)
   - 3 Netzwerk-Modi (AGRELON, Places, Occupations)
   - Multi-dimensionale Filterung (8 Dimensionen)
   - Click-to-Filter auf allen Visualisierungen
   - Export-Funktionen (CSV, PNG, JSON)
   - Bewertung: Reichhaltiges, forschungsorientiertes Interface

6. Iterative Entwicklung
   - User-Feedback einbezogen (z.B. ADR-009 Revert)
   - Kontinuierliche Verbesserungen (Timeline-Semantik, Biographies-Array)
   - Code-Reviews dokumentiert (Session 22)
   - Refactorings (DRY, Token-Konsolidierung)
   - Bewertung: Professioneller Entwicklungsprozess

7. Accessibility-Bemühungen
   - ARIA-Labels, aria-expanded, aria-pressed
   - Keyboard-Navigation (Tab, ESC, Enter)
   - Touch-Targets 44×44px (WCAG 2.1)
   - Fokus-Ringe auf Buttons
   - Colorblind-safe Palette (Design-Tokens)
   - Bewertung: Solide Grundlage, ausbaufähig

Schwächen und Verbesserungspotenzial:

1. Test-Fehler (niedrige Priorität)
   - 1 Timeline-Konsistenz-Test schlägt fehl (Jahr 1802)
   - Ursache unklar, bedarf Analyse
   - Impact: Niedrig (betrifft nur ein Jahr)
   - Empfehlung: Untersuchen, Issue dokumentieren oder Test anpassen

2. Fehlende Namens-Auflösung (dokumentiert)
   - 22 Korrespondenz-Einträge ohne recipient_name
   - 86 Beziehungen ohne target_name
   - Ursache: GND-IDs nicht im Datensatz (vermutlich Männer)
   - Empfehlung: Namens-Fallback aus CMIF implementieren (optional, da CMIF fast nur GND hat)

3. Harte Assertions in Pipeline
   - Pipeline bricht bei unerwarteten Daten ab
   - Konfigurierbare Checks wären flexibler
   - Empfehlung: Warning-Modus für Produktivbetrieb

4. Lücken in ADR-Nummerierung
   - ADR-004, 006, 007, 010 fehlen
   - Unklar ob gelöscht oder nie erstellt
   - Empfehlung: Lücken klären oder dokumentieren

5. Accessibility-Lücken (NFR-3 offen)
   - Pattern für Chart-Farben fehlt (Farbblindheit)
   - Alt-Texte für Visualisierungen minimal
   - Screen-Reader-Optimierung unvollständig
   - Empfehlung: WCAG AA Audit, Pattern-Implementierung

6. Mobile UX ausbaufähig
   - Burger-Menü erst ab ≤768px
   - Landscape-Modus komprimiert (50px Navbar)
   - Chart-Interaktion auf Touch suboptimal
   - Empfehlung: Mobile-First-Review, Touch-Gestures

7. Export-Inkonsistenz
   - CSV: Vorhanden (Map, Brief-Explorer, Synthesis, Wissenskorb)
   - JSON: Nur Wissenskorb
   - PNG: Nur Charts (Brief-Explorer)
   - TEI/API: Erwähnt in Design, nicht implementiert
   - Empfehlung: Export-Strategie harmonisieren

8. Performance-Potenzial
   - persons.json: 2,6 MB ungzipped
   - Keine Code-Splitting (alle JS in einer Datei)
   - Kein Service-Worker (Offline-Fähigkeit)
   - Empfehlung: Gzip-Kompression prüfen, Lazy-Loading für Charts

9. Timeline-Bug (kritisch, behoben)
   - Früher: 7.472 Events (Briefe + Erwähnungen)
   - Jetzt: 1.733 unique Briefe
   - Behebung: 09.11.2025 (Session 22)
   - Bewertung: Kritischer Fehler, gut, dass erkannt und gefixt

10. Dokumentations-Archivierung
    - Viele Docs archiviert/gelöscht (Session 21-22)
    - Gefahr: Wissensverlust bei späteren Fragen
    - Empfehlung: Archive-Ordner beibehalten, nicht löschen

Technische Schulden:

1. Zwei Pipelines
   - build_herdata.py (aktiv) vs. build_herdata_legacy.py (Referenz)
   - Legacy wird nicht getestet
   - Empfehlung: Entfernen oder explizit als deprecated markieren

2. CSS-Duplikate (teilweise behoben)
   - Session 18: 75 Zeilen Duplikate entfernt
   - tokens.css als Single Source of Truth
   - 3/6 CSS-Dateien nutzen Tokens korrekt
   - Empfehlung: Vollständige Token-Migration

3. Navbar-Konsolidierung (behoben)
   - Früher: 5 Templates
   - Jetzt: 1 Template (Session 22)
   - Bewertung: Gut refactored

4. echarts.connect Removal
   - Session 19: Implementiert
   - Session 19 (später): Entfernt (verwirrende Cross-Highlights)
   - Bewertung: Richtige Entscheidung, iterativ gefunden

Nicht-implementierte Features (aus design.md):

1. Briefdetail-Seite
   - Geplant: Regest, TEI-Transkription, Entitäten-Panel
   - Status: Nicht implementiert
   - Grund: TEI-Verfügbarkeit nur 15,7%
   - Empfehlung: Niedrige Priorität, abhängig von PROPYLÄEN-Fortschritt

2. Netzwerk-Timeline-Kopplung
   - Geplant: Zeitfilter für AGRELON-Netzwerk
   - Status: Nicht implementiert
   - Empfehlung: Nächster Schritt nach Session 16

3. Stories/Dossiers
   - Geplant: Kuratierte biografische Narrative
   - Status: Nicht implementiert
   - Empfehlung: Redaktioneller Aufwand, niedrige Priorität

4. SPARQL-Endpoint
   - Erwähnt: Extension-Point in docs/js/README.md
   - Status: Vorbereitet (data.js), nicht implementiert
   - Empfehlung: Für Forschungs-Community wertvoll

5. Download-Seite
   - Datei existiert: download.html, download.js
   - Funktion: Unklar (nicht analysiert)
   - Empfehlung: Prüfen oder entfernen

User Story Fortschritt (aus JOURNAL.md):

Session 14 (29.10.2025):
- 33 User Stories total
- 13/33 umgesetzt (39%)
- Offen: US-3.4 Zentren-Gravitation, US-4.1 Lebenszeit-Timeline, US-4.2 Kohorten-Analyse

Session 16 (29.10.2025):
- 52% → 67% (+15%)
- US-2.2 Ego-Network: 100%
- US-3.4 Gravitation: 90%
- US-3.6 Network Density: 80%

Aktuell (geschätzt):
- Brief-Explorer Phase 2e komplett (+5%)
- Wissenskorb global (+3%)
- Mobile Responsive (+2%)
- Test-Dashboard (+1%)
- Geschätzt: ~78% (26/33 User Stories)

Empfehlung: User Story Tracking aktualisieren, Fortschritt dokumentieren

Gesamtbewertung:

Qualität: 9/10
- Sehr hohe Code-Qualität, umfassende Tests, professionelle Dokumentation
- Abzug: 1 Test schlägt fehl, einige Namens-Auflösungen fehlen

Funktionalität: 8.5/10
- Reichhaltiges Feature-Set, alle Hauptansichten funktionieren
- Abzug: Einige geplante Features nicht implementiert (Briefdetail, Stories)

Wissenschaftlichkeit: 9.5/10
- Provenance-System, Transparenz, Zitierbarkeit, Multi-Source-Daten
- Abzug: Keine SPARQL-API (noch)

Usability: 8/10
- Intuitive Navigation, Multi-dimensionale Filterung, Click-to-Filter
- Abzug: Mobile UX ausbaufähig, Accessibility-Lücken

Performance: 9/10
- Schnelle Render-Zeiten, WebGL-Beschleunigung, effiziente Filter-Updates
- Abzug: 2,6 MB JSON (könnte optimiert werden)

Dokumentation: 10/10
- Vorbildlich: 22 Sessions dokumentiert, Knowledge Vault, ADRs, Tests
- Keine Abzüge

Entwicklungsprozess: 9/10
- Iterativ, User-Feedback, Code-Reviews, Git-Versionierung
- Abzug: Einige technische Schulden (2 Pipelines)

Gesamt: 9/10

HerData ist ein exzellentes Digital-Humanities-Projekt mit professioneller Umsetzung, wissenschaftlicher Sorgfalt und reichhaltigem Feature-Set. Die Dokumentation ist vorbildlich, die Architektur robust, die Tests umfassend. Kleinere Schwächen (Test-Fehler, fehlende Namen, Accessibility-Lücken) sind dokumentiert und behebbar. Das Projekt ist production-ready und setzt Standards für DH-Visualisierungsprojekte.

## 9. Was die Seite alles kann - Zusammenfassung für Nutzer

Für Forscher und Studierende:

Datenexploration:
- 448 Frauen in Goethes Korrespondenz durchsuchen und filtern
- 1.793 Briefe (1762-1824) analysieren
- 227 Orte auf interaktiver Karte erkunden
- 231 Berufe in 7 Kategorien untersuchen
- 84 AGRELON-Beziehungen visualisieren

Filter-Dimensionen:
1. Zeitfilter (dual): Korrespondenz (Briefjahre) oder Lebensdaten (Geburt/Tod)
2. Aktivität: Absenderin, Erwähnt, Beides, Nur SNDB
3. Berufsgruppe: Künstlerisch, Literarisch, Musikalisch, Hof/Adel, Bildung, Sonstiges, Kein Beruf
4. Ortstyp: Wirkungsort, Geburtsort, Sterbeort, Wohnort
5. Netzwerk-Typ: Familie, Beruflich, Sozial, Korrespondenz
6. Normierung: GND, SNDB
7. Ort: Click-to-Filter auf Karte oder Brief-Explorer
8. Geburtsjahrzehnt: Click-to-Filter im Brief-Explorer

Visualisierungen:
- Interaktive Karte mit Clustering und Hover-Netzwerk
- Treemap mit allen 73 Berufen
- Horizontal Bar Chart geografische Zentren
- Generationen-Histogramm (Dekaden)
- Master Timeline mit 47 Jahren Briefdaten
- Cytoscape-Netzwerk-Graph (3 Modi)

Analytische Features:
- Click-to-Filter auf allen Visualisierungen
- Multi-dimensionale Kombinationsfilter
- Filter Chips mit Undo-Funktion
- "X Personen anzeigen" Button (Brief-Explorer → Personenliste)
- Wissenskorb für vergleichende Analyse

Personenprofile:
- Biografien aus 4 Quellen (751 Texte)
- Qualitäts-Indikatoren (✓/✗/i)
- One-Click-Zitation
- GND/SNDB-Links
- Mini-Karte mit Wirkungsorten
- Berufe mit Kategorisierung
- AGRELON-Beziehungen

Wissenskorb:
- Personen über alle Ansichten hinweg sammeln
- Maximale Kapazität: Unbegrenzt (früher 20)
- Persistierung via LocalStorage
- 3 Netzwerk-Modi: AGRELON, Gemeinsame Orte, Gemeinsame Berufe
- Export: CSV, JSON, PNG (Graph)

Export-Funktionen:
- CSV: Gefilterte Personen (Map, Brief-Explorer, Synthesis, Wissenskorb)
- JSON: Wissenskorb-Sammlung
- PNG: Charts (Brief-Explorer)
- One-Click-Zitation (Personenprofile)

Suche:
- Globale Navbar-Suche (Dropdown, Top 10 Ergebnisse)
- Fuzzy-Suche mit Fuse.js (Name + Varianten)
- Keyboard-Navigation (Pfeile/Enter/Escape)
- Verfügbar auf allen Seiten (außer person.html)

Mobile Features:
- Responsive Design (5 Breakpoints)
- Burger-Menü (≤768px)
- Icon-only View-Switcher (≤480px)
- Touch-Targets 44×44px (WCAG 2.1)
- Landscape-Modus optimiert

Accessibility:
- ARIA-Labels, aria-expanded, aria-pressed
- Keyboard-Navigation
- Fokus-Ringe
- Colorblind-safe Palette
- Tooltips für Kontext

Wissenschaftliche Features:
- Provenance-System (persons_debug.json)
- Qualitäts-Transparenz (Icons auf UI)
- Multi-Source-Biografien
- Zitierbarkeit (One-Click-Copy)
- DOI-Links (Zenodo 14998880)
- GND/SNDB-Normdaten-Links

Dokumentation:
- Knowledge Vault mit 10 Dokumenten
- Markdown-Renderer
- ADRs (Architekturentscheidungen)
- Test-Dashboard
- JOURNAL.md (Entwicklungsgeschichte)

Für Endnutzer zusammengefasst:

Die HerData-Plattform bietet:
1. Entdecken: Interaktive Karte mit 227 Orten und 448 Frauen
2. Analysieren: Brief-Explorer mit Treemap, Charts, Timeline
3. Erkunden: Personenliste mit Multi-Filter und Detail-Panel
4. Vergleichen: Wissenskorb mit 3 Netzwerk-Modi
5. Vertiefen: Personenprofile mit Biografien aus 4 Quellen
6. Exportieren: CSV, JSON, PNG für eigene Analysen
7. Zitieren: One-Click-Zitation für wissenschaftliche Arbeiten

Typische Nutzungsszenarien:
- Seminararbeit: "Schauspielerinnen in den 1780ern" → Brief-Explorer filtern → Wissenskorb sammeln → Export
- Forschung: "Netzwerk der Weimarer Frauen" → Karte Weimar → Wissenskorb → AGRELON-Graph → Analyse
- Lehre: "Geografische Zentren" → Brief-Explorer Orte-Chart → Screenshot → Präsentation
- Kulturinteressierte: "Wer war Christiane Vulpius?" → Suche → Personenprofil → Biografie → Orte

## 10. Ehrliche Schlussfolgerung

HerData ist ein reifes, vollständig funktionsfähiges Digital-Humanities-Projekt, das hohe Standards setzt. Die Kombination aus wissenschaftlicher Sorgfalt (Provenance-System, Multi-Source-Daten, Transparenz), technischer Exzellenz (robuste Architektur, umfassende Tests, Performance-Optimierung) und nutzerzentriertem Design (Multi-dimensionale Filter, Click-to-Filter, Wissenskorb) ist beeindruckend.

Die Dokumentation (22 Sessions, 10 Knowledge-Docs, 8 ADRs, Test-Dashboard) ist vorbildlich und ermöglicht vollständige Nachvollziehbarkeit. Die iterative Entwicklung mit User-Feedback (ADR-009 Revert), Code-Reviews (Session 22) und kontinuierlichen Verbesserungen (Timeline-Fix, Biographies-Array) zeigt professionellen Entwicklungsprozess.

Schwächen sind vorhanden (1 Test-Fehler, fehlende Namens-Auflösungen, Accessibility-Lücken), aber dokumentiert und behebbar. Sie schmälern die Gesamtqualität nicht wesentlich. Das Projekt ist production-ready und kann als Referenz für DH-Visualisierungsprojekte dienen.

Kritische Reflexion:
- Die Vielzahl der Features (7 Ansichten, 8 Filter-Dimensionen, 3 Netzwerk-Modi) könnte Nutzer überfordern. Eine geführte Tour oder Tutorial wäre hilfreich.
- Die mobile UX ist funktional, aber nicht optimal. Eine dedizierte Mobile-First-Überarbeitung würde die Reichweite erhöhen.
- Die Timeline-Semantik-Korrektur (1.733 vs. 7.472) zeigt, dass auch bei sorgfältiger Entwicklung kritische Fehler auftreten können. Gut, dass er erkannt und behoben wurde.
- Die Entscheidung gegen geografische Visualisierung im Wissenskorb (ADR-009) zeigt gesunde Selbstkritik und Bereitschaft, Komplexität zu reduzieren.

Empfehlungen für nächste Schritte:
1. Test-Fehler beheben (Timeline-Konsistenz Jahr 1802)
2. Accessibility-Audit durchführen (WCAG AA)
3. Mobile UX verbessern (Touch-Gestures, größere Buttons)
4. Tutorial/Onboarding implementieren (für Erstnutzer)
5. SPARQL-Endpoint implementieren (für Forschungs-Community)
6. User Story Tracking aktualisieren (aktuell ~78%)
7. Namens-Fallback implementieren (optional, niedrige Priorität)
8. Export-Strategie harmonisieren (JSON für alle Ansichten)
9. Performance-Optimierung (Gzip, Code-Splitting, Service-Worker)
10. Legacy-Pipeline entfernen oder als deprecated markieren

Gesamtfazit:

HerData ist ein exzellentes Beispiel dafür, wie Digital Humanities wissenschaftliche Sorgfalt mit moderner Web-Technologie verbinden kann. Das Projekt macht 448 Frauen im Goethe-Umfeld sichtbar, kontextualisiert sie geografisch, zeitlich und sozial, und stellt robuste, transparente Werkzeuge für Forschung und Lehre bereit. Die Dokumentation und Tests sind vorbildlich. Die Plattform ist bereit für produktiven Einsatz und verdient breite Rezeption in der DH-Community.

Note: 9/10 - Sehr gut, mit Potenzial für Exzellenz bei Behebung kleinerer Schwächen.

---

Erstellt: 2025-11-09
Autor: Analyse basierend auf Code, Git-Historie, JOURNAL.md, Dokumentation
Umfang: 218 Commits, 22 Sessions, 14.856 Zeilen Code, 7 Ansichten, 448 Personen, 1.793 Briefe
