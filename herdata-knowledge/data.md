# Datenmodell

Datenarchitektur, Strukturen und Verknüpfungen für HerData.

* Stand: 04.11.2025

## Grundgesamtheit und Coverage

Produktive Grundgesamtheit: 448 kuratierte Frauen (Export vom 27.10.2025)

Abdeckungen (alle Zahlen auf Basis von 448):
- 270 Frauen mit GND-ID (60,3%)
- 230 Frauen mit CMIF-Briefverbindung (51,3%)
- 227 Frauen mit Geodaten (50,7%)
- 421 Frauen mit Lebensdaten (94,0%)
- 207 Frauen mit Berufsangaben (46,2%)
- 448 Frauen mit Hauptbiografie (100% aus projekt_regestausgabe.xml)
- 67 Frauen mit AGRELON-Beziehungen (15,0%, 86 Beziehungseinträge bidirektional)
- 1.793 Briefe von/mit Frauen (191 Absenderinnen, 230 mit correspondence-Arrays)

CMIF-Gesamtkorpus: 15.312 Briefe (1762-1824), 2.525 Absender, 633 Orte
HerData-Subset: 1.793 Briefe mit Frauenbezug (11,7% des CMIF-Korpus)

Quelle: persons.json Meta-Feld, generiert 04.11.2025, 290 KB

## Datenquellen

Hybrid-Ansatz (drei Quellen):

CMIF (Briefe):
- Datei: ra-cmif.xml (24 MB)
- Quelle: Zenodo 14998880 (März 2025)
- Lizenz: CC BY 4.0
- Inhalt: 15.312 Briefe in TEI-XML/CMIF

SNDB Neu (Personen):
- Verzeichnis: data/herdata/ (800 KB, 8 Dateien)
- Export-Datum: 27.10.2025
- Dateien: ra_ndb_main.xml (193 KB), ra_ndb_indiv.xml (41 KB), ra_ndb_datierungen.xml (132 KB), ra_ndb_berufe.xml (32 KB), ra_ndb_orte.xml (84 KB), ra_ndb_beziehungen.xml (137 KB), projekt_regestausgabe.xml (158 KB), nsl_agrelon.xml (9 KB)
- Quelle: Klassik Stiftung Weimar

SNDB Alt (Geodaten):
- Verzeichnis: data/sndb/ (3,6 MB, 3 Dateien)
- Dateien: geo_main.xml (739 KB), geo_indiv.xml (936 KB), geo_links.xml (1,9 MB)
- Zweck: Koordinatenauflösung für SNDB_ID-Referenzen aus ra_ndb_orte.xml

## Verknüpfungslogik

Primärer Identifier: SNDB-ID (numerisch, projektintern)

Externe Verknüpfungen:
- GND-ID: Verknüpfung zu CMIF persName@ref und deutschen Normdaten
- SNDB_ID (Orte): Verknüpfung ra_ndb_orte.xml → geo_main.xml → geo_indiv.xml
- AGRELON_ID: Verknüpfung ra_ndb_beziehungen.xml → nsl_agrelon.xml (38 Typen)

Matching-Regeln (Phase 2 der Pipeline):
1. GND-ID-basiertes Matching (primär): CMIF persName@ref ↔ ra_ndb_indiv.xml GND
2. Exakte Übereinstimmung erforderlich (keine Fuzzy-Logik)
3. Keine Namensbasierte Fallback-Matching (zu fehleranfällig)

Deduplizierung:
- LFDNR=0 in ra_ndb_main.xml (Haupteintrag) wird bevorzugt
- LFDNR>0 sind Namensvarianten, werden nicht als separate Personen gezählt
- SNDB-ID ist eindeutiger Primärschlüssel

## Feldmodell

Detailliertes JSON-Schema, Validierungsregeln und Frontend-Transformationen siehe [data-model.md](data-model.md).

Zusammenfassung persons.json Struktur:
- Kernfelder: id, name, gnd (optional), sndb_url, dates, biography, role, roles
- Briefdaten: letter_count, mention_count, letter_years, correspondence[]
- Geodaten: places[] (Hybrid-Quelle: ra_ndb_orte.xml + geo_*.xml)
- Berufe: occupations[] (aus ra_ndb_berufe.xml)
- Beziehungen: relationships[] (aus ra_ndb_beziehungen.xml + nsl_agrelon.xml)

Required vs. Optional:
- Required (immer vorhanden): id, name, sndb_url, role, roles
- Optional (Coverage variiert): gnd (60,3%), dates (94,0%), places (50,7%), occupations (46,2%), correspondence (51,3%), relationships (15,0%)

## Beziehungsmodell

AGRELON-Ontologie: 38 Beziehungstypen (nsl_agrelon.xml)

XML-Rohdaten: 939 Beziehungseinträge in ra_ndb_beziehungen.xml
Produktive Daten: 86 Beziehungseinträge (nur Frau-Frau-Beziehungen zwischen den 448 Frauen)
Betroffene Personen: 67 Frauen (15,0%)

Struktur:
- ID1, ID2: SNDB-IDs der beiden Personen
- AGRELON_ID1, AGRELON_ID2: Beziehungstypen (bidirektional)
- Kategorien: Familie (4xxx), Beruflich (3xxx), Sozial (1xxx+2xxx)

Hinweis: Die 939 XML-Einträge umfassen alle Beziehungen (Männer + Frauen). Die Pipeline extrahiert nur Beziehungen zwischen den 448 kuratierten Frauen, daher 86 produktive Einträge.

AGRELON-Kategorien (38 Typen):

Familie (4xxx): 14 Typen
- 4010: hat Elternteil, 4020: hat Großelternteil, 4030: hat Kind, 4040: hat Enkel
- 4050: hat Tante/Onkel, 4060: hat Cousin, 4070: hat Patenkind, 4080: hat Pate
- 4090: hat Schwager/Schwägerin, 4100: hat Ehepartner, 4110: hat Nichte/Neffe
- 4120: hat Geschwister, 4130: hat Urenkel, 4140: hat Urgroßelternteil

Beruflich (3xxx): 11 Typen
- 3010: hat Kollaborator, 3020: hat Einfluss auf, 3030: ist beeinflusst durch
- 3040: hat Muse, 3050: ist Muse von, 3060: hat Mäzen, 3070: ist Mäzen von
- 3080: hat Schüler, 3090: hat Lehrer, 3100: hat Vorgänger, 3110: hat Nachfolger

Sozial (1xxx+2xxx): 7 Typen
- 1010: hat Freund, 2010: hat Gründer, 2020: ist Gründer von
- 2030: hat Mitglied, 2040: ist Mitglied von, 2050: hat Besitzer, 2060: ist Besitzer von

Andere (ausgefiltert): 5xxx (Vitaler/letaler Kontakt), 7xxx (Geografikum), 8xxx (Werk)

Statistik nach Kategorie:

In persons.json integriert:
- Familie: 80 Beziehungen (95,2% der 84 integrierten)
- Beruflich: 2 Beziehungen (2,4%)
- Sozial: 2 Beziehungen (2,4%)

Auf Karte sichtbar (beide Personen mit Geodaten): 50 Beziehungen
- Familie: 50 (alle sichtbar)
- Beruflich: 0 (Zielpersonen ohne Koordinaten)
- Sozial: 0 (Zielpersonen ohne Koordinaten)

Visualisierung auf Karte:
- Farben: Familie #ff0066 (Pink), Beruflich #00ccff (Cyan), Sozial #ffcc00 (Gelb)
- Linienbreite: 4-12px (abhängig von Anzahl), Glow-Effekt 8-14px
- Hover: Einzelner Marker zeigt Verbindungen dieser Person, Cluster zeigt aggregierte Verbindungen

Historischer Kontext:
Im 18./19. Jahrhundert waren familiäre Netzwerke zwischen Frauen häufig (Mutter, Schwester, Tochter), während berufliche Netzwerke hauptsächlich zu Männern bestanden (Verleger, Mentoren, Kollegen). Daher ist es historisch korrekt, dass Familie-Relationen zwischen Frauen dominieren.

## Geocoding-Heuristiken

Hybrid-Ansatz (notwendig):
- Neue Export (ra_ndb_orte.xml) enthält SNDB_ID-Referenzen, aber keine Koordinaten
- Alte SNDB (geo_main.xml, geo_indiv.xml) liefert Ortsnamen und Koordinaten
- Ohne alte geo_*.xml-Dateien wäre keine Kartenvisualisierung möglich

Auflösungskette:
1. ra_ndb_orte.xml: ID → SNDB_ID (z.B. 79627 für Weimar)
2. geo_main.xml (LFDNR=0): SNDB_ID → BEZEICHNUNG (Ortsname)
3. geo_indiv.xml: SNDB_ID → LATITUDE, LONGITUDE

Genauigkeit:
- Stadt-Level (kein Street-Level)
- Historische Toponymie bleibt erhalten (keine Modernisierung)
- Mehrere Orte pro Person möglich (Geburtsort, Wirkungsort, Sterbeort, Wohnort)

## Unsicherheitskennzeichnungen

Explizite Unsicherheiten (dokumentiert, aber nicht visuell markiert):
- 218 Frauen ohne CMIF-Briefverbindung (48,7%, role='indirect')
- 221 Frauen ohne Geodaten (49,3%, places=[])
- 178 Frauen ohne GND-ID (39,7%, normierung='sndb')

Implizite Unsicherheiten:
- Geocoding-Genauigkeit: Stadt-Level, nicht Adress-Level
- CMIF-Matching: Nur GND-basiert, Name-Matching fehlt (potenzielle False Negatives)
- Beziehungen: Nur Frau-Frau-Beziehungen extrahiert (939 XML-Einträge → 86 produktiv)

Datenqualität:
- Keine Koordinaten-Validierung (außer -90 ≤ lat ≤ 90, -180 ≤ lon ≤ 180)
- Keine Datums-Konsistenz-Prüfung (birth ≤ death)
- Keine Duplikats-Erkennung über GND hinaus

## Provenance

Provenance-Tracking: Aktiviert (track_provenance=True in build_herdata.py)

Debug-Datei: docs/data/persons_debug.json (nicht öffentlich)
Inhalt: Alle Felder + _provenance-Objekt pro Feld
Struktur: {source: Dateiname, xpath: XML-Pfad, raw_value: Originalwert, transformation: Beschreibung, extracted_at: Zeitstempel}

Beispiel-Provenance (aus Pipeline-Code):
- name: {file: 'ra_ndb_main.xml', xpath: "//ITEM[ID='{id}' and LFDNR='0']/VORNAMEN, NACHNAME, TITEL", transformation: "concatenation with space"}
- gnd: {file: 'ra_ndb_indiv.xml', xpath: "//ITEM[ID='{id}']/GND", transformation: "direct extraction"}
- places: {file: 'ra_ndb_orte.xml (NEW) + geo_main.xml + geo_indiv.xml (OLD)', transformation: "HYBRID: place link from NEW export, resolved via OLD SNDB geodata"}

Produktions-JSON: docs/data/persons.json (ohne _provenance, 290 KB)
Debug-JSON: docs/data/persons_debug.json (mit _provenance)

Hinweis: Provenance ist nur im Debug-JSON verfügbar, nicht in der öffentlichen UI sichtbar.

## Lizenzen

HerData-Projekt: CC BY 4.0

CMIF-Daten:
- Lizenz: CC BY 4.0
- DOI: 10.5281/zenodo.14998880
- Quelle: PROPYLÄEN-Projekt, Klassik Stiftung Weimar
- Snapshot: März 2025

SNDB-Daten:
- Quelle: Klassik Stiftung Weimar
- Lizenz: Nicht explizit dokumentiert

GND:
- Quelle: Deutsche Nationalbibliothek
- Lizenz: CC0 1.0 (Public Domain)

GeoNames:
- Lizenz: CC BY 4.0

## Datenqualität (Vergleich alt vs. neu)

Verbesserung durch kuratierten Export:

| Metrik | Alte SNDB (3.617) | Neue Export (448) | Verbesserung |
|--------|-------------------|-------------------|--------------|
| GND-Abdeckung | 34,1% (1.233) | 60,3% (270) | +76,8% relativ |
| Datum-Abdeckung | 83,9% (3.032) | 94,0% (421) | +12,0% relativ |
| CMIF-Match | 22,3% (808) | 51,3% (230) | +130% relativ |
| Geodaten | 28,8% (1.042) | 50,7% (227) | +76,0% relativ |

Quelle: Pipeline-Ausgabe, persons.json Meta-Feld

## Pipeline-Architektur

Aktive Pipeline: build_herdata.py (1009 Zeilen)
Legacy-Pipeline: build_herdata_legacy.py (Referenz, nicht aktiv)

4 Phasen:
1. Frauen-Identifikation (ra_ndb_main.xml + ra_ndb_indiv.xml → 448 Frauen mit SEXUS='w')
2. CMIF-Matching (ra-cmif.xml + GND-Index → 230 mit Briefverbindung)
3. Anreicherung (Geodaten HYBRID, Berufe, Beziehungen, Biografien)
4. JSON-Generierung (persons.json 290 KB + persons_debug.json mit Provenance)

Performance (gemessen):
- Phase 1: 448 Frauen, 60,3% GND
- Phase 2: 15.312 Briefe, 270 GND-Index, 191 Absenderinnen, 195 erwähnte
- Phase 3: 227 Frauen mit Geodaten (50,7%), 296 Berufseinträge, 86 Beziehungen, 448 Biografien
- Phase 4: 448 Personen im JSON
- Gesamtdauer: <2 Sekunden

Validierungen (in Pipeline eingebaut):
- assert 400 <= total_women <= 500
- assert 0.50 <= gnd_coverage <= 0.70
- assert with_letters > 0
- assert senders > 0
- assert 0.40 <= geodata_pct <= 0.70

## CMIF-Struktur

TEI-XML mit Namensraum: http://www.tei-c.org/ns/1.0

Relevante Elemente:
- correspDesc@ref: Brief-ID (z.B. RA01_0962_01000)
- correspAction[@type="sent"]/persName@ref: Absender-GND
- correspAction[@type="sent"]/placeName@ref: Absendeort-GeoNames
- correspAction[@type="sent"]/date@when: Datum (ISO 8601)
- note/ref[@type="cmif:mentionsPerson"]@target: Erwähnte Person-GND

ID-Schema: RA[Volume]_[Number]_[ID]
Beispiel: RA01_0962_01000 → https://goethe-biographica.de/id/RA01_0962_01000

Kardinalitäten:
- 15.312 Briefe
- 2.525 eindeutige Absender
- 633 eindeutige Orte
- 14.425 erwähnte Personen (67.665 Erwähnungen)

## SNDB-Struktur (Export 2025-10-27)

ra_ndb_main.xml (193 KB, 797 Einträge):
- ID: SNDB-ID
- LFDNR: 0=Haupteintrag, >0=Variante
- NACHNAME, VORNAMEN, TITEL
- Wichtig: 797 Einträge für 448 unique IDs (Namensvarianten)

ra_ndb_indiv.xml (41 KB, 448 Einträge):
- ID, SEXUS (alle 'w'), GND

ra_ndb_datierungen.xml (132 KB, 869 Einträge):
- ID, ART ('Geburtsdatum'/'Sterbedatum'), JAHR

ra_ndb_berufe.xml (32 KB, 296 Einträge):
- ID, BERUF

ra_ndb_orte.xml (84 KB, 552 Einträge):
- ID, SNDB_ID (Referenz zu geo_main.xml), ART ('Wirkungsort'/'Geburtsort'/'Sterbeort'/'Wohnort')

ra_ndb_beziehungen.xml (137 KB, 939 Einträge):
- ID1, ID2, AGRELON_ID1, AGRELON_ID2
- Hinweis: 939 XML-Einträge umfassen Männer+Frauen, Pipeline extrahiert nur 86 Frau-Frau-Beziehungen

projekt_regestausgabe.xml (158 KB, 448 Einträge):
- ID, REGISTEREINTRAG (biografischer Text)
- Alle 448 Frauen haben einen Eintrag

nsl_agrelon.xml (9 KB, 38 Einträge):
- IDENT (z.B. 4120), KATEGORIE, BEZIEHUNG (deutsch), URI (AGRELON-Standard), CORRIDENT (Gegenrichtung)

## Geodaten (alte SNDB, unverzichtbar)

geo_main.xml (739 KB, 4.007 Einträge):
- ID (SNDB_ID), LFDNR, BEZEICHNUNG (Ortsname)
- 3.210 Haupteinträge (LFDNR=0)

geo_indiv.xml (936 KB, 22.571 Einträge):
- ID (SNDB_ID), LATITUDE, LONGITUDE

geo_links.xml (1,9 MB, 63.766 Einträge):
- Verknüpfungen zu GeoNames
- Nicht direkt in Pipeline genutzt

## Verweise

- [INDEX.md](INDEX.md) - Navigation im Knowledge Vault
- [decisions.md](decisions.md) - Architektur- und Produktentscheidungen
- Pipeline-Code: [../preprocessing/build_herdata.py](../preprocessing/build_herdata.py)
- Produktions-JSON: [../docs/data/persons.json](../docs/data/persons.json)
- CMIF-Quelle: https://zenodo.org/records/14998880
