# HerData Test-Dokumentation

Dokumentation der Test-Landschaft für das HerData-Projekt: aktueller Stand, geplante Erweiterungen und Test-Strategien.

Zuletzt aktualisiert: 2025-11-09

## Überblick

HerData nutzt eine mehrstufige Test-Strategie mit Fokus auf Verarbeitungs-Tests:

Test-Philosophie: Wir testen die VERARBEITUNG der Daten, nicht die Qualität der Rohdaten.
- Pipeline Processing Tests (Datenerhaltung, Transformation, Konsistenz)
- Schema Validation Tests (JSON-Struktur, Typen, Werte)
- Data Quality Tests (Referentielle Integrität, Plausibilität)
- Coverage Monitoring (Informative Statistiken, keine Pass/Fail-Tests)
- Frontend Tests (geplant)

Aktuelle Test-Abdeckung: 46 automatisierte Tests
Status: 46/46 passing (100%)
Dashboard: [docs/tests.html](../tests.html)

## 1. Bestehende Tests

### 1.1 Pipeline Processing Tests (NEU)

Location: [tests/test_pipeline_processing.py](../../tests/test_pipeline_processing.py)

Status: Produktiv (15 Tests, 100% passing)

Testet, ob die Pipeline Daten korrekt verarbeitet und transformiert:

Suite 1: Data Preservation
- test_all_persons_from_xml_present_in_json: Pipeline verliert keine Personen
- test_person_ids_are_from_source_xml: Alle IDs kommen aus Quell-XML
- test_occupations_not_duplicated: Keine Duplikat-Berufe pro Person
- test_places_not_duplicated: Keine exakten Duplikat-Orte (gleicher Ort mit gleichem Typ)

Suite 2: Type Consistency
- test_dates_are_consistent_format: Datumsformate konsistent
- test_letter_years_are_integers: letter_years enthält nur Integers
- test_letter_count_is_integer: letter_count ist Integer
- test_mention_count_is_integer: mention_count ist Integer

Suite 3: Relationship Resolution
- test_correspondence_recipients_resolved: Empfänger-GND korrekt aufgelöst (KNOWN ISSUE: 22 fehlende Namen)
- test_relationship_targets_have_names: Beziehungs-Ziele haben Namen (KNOWN ISSUE: 86 fehlende Namen)

Suite 4: Geodata Resolution
- test_places_have_coordinates_when_name_exists: Orte haben Koordinaten
- test_place_types_are_present: Ortstypen vorhanden

Suite 5: Aggregate Consistency
- test_letter_count_matches_correspondence: letter_count matched Korrespondenz-Einträge
- test_mention_count_consistency: mention_count konsistent mit Rolle
- test_letter_years_derived_from_correspondence: letter_years aus Korrespondenz abgeleitet

### 1.2 Pipeline Integration Tests

Location: [preprocessing/build_herdata.py](../../preprocessing/build_herdata.py:73-164)

Status: Produktiv im Einsatz

Die Pipeline enthält 4 integrierte Test-Methoden, die nach jeder Phase automatisch ausgeführt werden:

Phase 1 - Women Identification (test_phase1)
- Anzahl extrahierter Frauen: 400-500 erwartet
- GND-Abdeckung: 50-70% erwartet
- Namensvarianten: 350-450 Varianten für 200-300 Frauen
- Datums-Abdeckung: Geburtsdaten und Sterbedaten

Implementierung:
```python
def test_phase1(self):
    total = len(self.women)
    with_gnd = sum(1 for w in self.women.values() if w.get('gnd'))
    assert 400 <= total <= 500, f"Expected ~448 women, got {total}"
    assert 0.50 <= with_gnd/total <= 0.70, f"Expected 50-70% GND coverage"
```

Phase 2 - CMIF Letter Matching (test_phase2)
- Mindestens eine Frau matched zu CMIF
- Mindestens eine Frau als Absenderin identifiziert
- Tracking von Absenderinnen vs. Erwähnten

Implementierung:
```python
def test_phase2(self):
    with_letters = sum(1 for w in self.women.values()
                       if w.get('letter_count', 0) > 0 or w.get('mention_count', 0) > 0)
    assert with_letters > 0, "No women matched to CMIF letters"
    assert senders > 0, "No women identified as senders"
```

Phase 3 - Data Enrichment (test_phase3)
- Geodaten-Abdeckung: 40-70% erwartet
- Berufs-Daten vorhanden
- Hybrid-Geodaten-Matching funktioniert

Implementierung:
```python
def test_phase3(self):
    with_geodata = sum(1 for w in self.women.values()
                       if w.get('places') and len(w['places']) > 0)
    geodata_pct = with_geodata / len(self.women)
    assert 0.40 <= geodata_pct <= 0.70, f"Expected 40-70% geodata coverage"
```

Phase 4 - JSON Generation (test_phase4)
- Output-Struktur vollständig (meta, persons)
- Pflichtfelder vorhanden (id, name, role, normierung)
- Person-Count konsistent

Implementierung:
```python
def test_phase4(self, output_data):
    assert 'meta' in output_data, "Missing 'meta' field"
    assert 'persons' in output_data, "Missing 'persons' field"
    required_fields = ['id', 'name', 'role', 'normierung']
    for field in required_fields:
        assert field in sample, f"Missing required field: {field}"
```

Statistiken (Stand 2025-11-09):
- 48 Assertions insgesamt
- Laufzeit: ca. 0.63s für gesamte Pipeline
- Erfolgsrate: 100% bei korrekten Eingabedaten

Limitationen:
- Tests prüfen nur Wertebereiche, nicht semantische Korrektheit
- Keine Prüfung auf Duplikate oder referenzielle Integrität
- Erwartete Werte basieren auf historischen Daten (könnten veralten)

### 1.3 Data Quality Tests

Location: [tests/test_data_quality.py](../../tests/test_data_quality.py)

Status: Produktiv (19 Tests, 100% passing)

Testet semantische Korrektheit und Konsistenz des generierten persons.json.

Suite 1: Referential Integrity
- test_no_duplicate_ids: Eindeutige Person-IDs
- test_no_duplicate_gnd_ids: Eindeutige GND-IDs
- test_relationships_target_exists: Beziehungsziele existieren
- test_correspondence_recipients_exist_if_gnd: Empfänger-Validierung

Suite 2: Geodata Plausibility
- test_coordinates_are_valid: Koordinaten in gültigem Bereich (-90 bis 90, -180 bis 180)
- test_places_have_required_fields: Orte haben name, lat, lon
- test_coordinates_are_numbers: Koordinaten sind Zahlen, keine Strings

Suite 3: Temporal Plausibility
- test_birth_before_death: Geburt vor Tod
- test_dates_in_plausible_range: Daten im Korpus-Zeitraum (1600-1900)
- test_correspondence_years_in_corpus_range: Briefjahre 1760-1824
- test_letter_years_populated_when_year_available: letter_years konsistent

Suite 4: Completeness
- test_all_persons_have_required_fields: Pflichtfelder vorhanden
- test_role_values_valid: Rolle ist sender/mentioned/both/indirect
- test_normierung_values_valid: Normierung ist gnd/sndb
- test_gnd_normierung_has_gnd_field: GND-Normierung hat GND-Feld
- test_sndb_urls_valid_format: SNDB-URLs korrekt

Suite 5: Metadata Consistency
- test_meta_counts_match_actual: Meta-Zähler stimmen mit Daten überein
- test_timeline_data_consistent: Timeline matched Korrespondenz-Jahre

Suite 6: Coverage Statistics (Informational)
- test_coverage_statistics: Gibt Abdeckungsstatistiken aus (Always Pass)

### 1.4 JSON Schema Validation

Location: [tests/test_json_schema.py](../../tests/test_json_schema.py)
Schema: [tests/persons.schema.json](../../tests/persons.schema.json)

Status: Produktiv (12 Tests, 100% passing)

Validiert JSON-Struktur gegen formales Schema (JSON Schema Draft-07).

Tests:
- test_persons_json_valid_schema: Gesamtvalidierung gegen Schema
- test_meta_structure: Meta-Objekt korrekt
- test_persons_array_not_empty: Personen-Array nicht leer
- test_all_person_ids_are_strings: IDs sind Strings
- test_all_coordinates_are_numbers: Koordinaten sind Zahlen
- test_role_values_match_schema: Rolle-Enum korrekt
- test_normierung_values_match_schema: Normierung-Enum korrekt
- test_timeline_years_in_range: Timeline-Jahre gültig
- test_letter_years_in_range: Brief-Jahre gültig
- test_birth_death_format: Datums-Format korrekt
- test_correspondence_type_values: Korrespondenz-Type korrekt
- test_schema_itself_is_valid: Schema selbst ist valide

### 1.5 Coverage Monitoring

Location: [tests/utils/monitoring.py](../../tests/utils/monitoring.py)

Status: Informatives Tool (kein Pass/Fail-Test)

Funktionalität:
- Analysiert generiertes persons.json
- Berechnet Feld-Abdeckung (Prozentsatz der Personen mit jedem Feld)
- Gibt Statistiken aus (nicht als Test, sondern Monitoring)

Verwendung:
```bash
python tests/utils/monitoring.py
```

Output-Beispiel:
```
=== DATA COVERAGE STATISTICS ===
Total persons:        448
With GND:             270 ( 60.3%)
With dates:           425 ( 94.9%)
  - Birth date:       421 ( 94.0%)
  - Death date:       403 ( 90.0%)
With places:          227 ( 50.7%)
With occupations:     184 ( 41.1%)
With relationships:    89 ( 19.9%)
With biography:       448 (100.0%)
With correspondence:  230 ( 51.3%)
```

### 1.3 Provenance Tracking System

Location: [preprocessing/build_herdata.py:54-71](preprocessing/build_herdata.py) (add_provenance Methode)
Output: [docs/data/persons_debug.json](docs/data/persons_debug.json)

Status: Produktiv für Debugging

Funktionalität:
- Trackt Herkunft jedes Datenfelds
- Speichert Quelldatei, XPath, Rohdaten, Transformation
- Generiert separates Debug-JSON mit _provenance Metadaten

Beispiel Provenance-Eintrag:
```json
{
  "id": "35267",
  "name": "Anna Altmutter",
  "_provenance": {
    "name": {
      "source": "ra_ndb_main.xml",
      "xpath": "//ITEM[ID='35267' and LFDNR='0']/VORNAMEN, NACHNAME",
      "raw_value": {"vornamen": "Anna", "nachname": "Altmutter"},
      "transformation": "concatenation with space: 'Anna Altmutter'",
      "extracted_at": "2025-11-09T12:34:56.789"
    },
    "places": {
      "source": "ra_ndb_orte.xml (NEW) + geo_main.xml + geo_indiv.xml (OLD)",
      "xpath": "//ITEM[ID='35267']/SNDB_ID -> //ITEM[ID='123']",
      "raw_value": {
        "sndb_id": "123",
        "place_name": "Weimar",
        "coordinates": {"lat": 50.9787, "lon": 11.3291}
      },
      "transformation": "HYBRID: place link from NEW export, resolved via OLD SNDB geodata"
    }
  }
}
```

Verwendung:
- Entwicklung: Debugging von Dateninkonsistenzen
- Review: Audit der Datenherkunft
- Dokumentation: Nachvollziehbarkeit für Forschende

Limitationen:
- Vergrößert JSON-Datei deutlich (ca. 50-100% größer)
- Nicht für Produktion gedacht (separate Debug-Datei)
- Keine automatische Validierung der Provenance

Geplante Nutzung:
- Basis für automatische Plausibilitäts-Tests
- Validierung dass alle Felder dokumentierte Quellen haben

### 1.4 Frontend Debug-System

Location: [docs/js/debug.js](docs/js/debug.js)
Integration: [docs/js/app.js](docs/js/app.js:36-57)

Status: Entwicklungs-Tool (aktiv genutzt)

Kategorien:
- INIT (grün): Initialisierung (Daten laden, Setup)
- RENDER (blau): Map-Updates, Rendering
- EVENT (gelb): Event-Handler-Registrierung
- CLICK (orange): User-Interaktionen mit Details
- ERROR (rot): Fehler und Warnungen

Implementierung:
```javascript
export const Debug = {
    log: (type, msg) => {
        const icons = {
            'INIT': '🟢',
            'RENDER': '🔵',
            'EVENT': '🟡',
            'CLICK': '🟠',
            'ERROR': '🔴'
        };
        const icon = icons[type] || '⚪';
        console.log(`${icon} ${type}: ${msg}`);
    }
};
```

Verwendung in Code:
```javascript
Debug.log('INIT', 'Loading persons data...');
Debug.log('RENDER', `Rendering ${filteredPersons.length} persons on map`);
Debug.log('ERROR', 'Failed to load geodata: ' + error.message);
```

Aktivierung:
- Standardmäßig immer aktiv in Browser-Console
- Separate Provenance-Panel via URL-Parameter: ?debug=true

Limitationen:
- Keine Log-Levels (alles wird geloggt)
- Performance-Impact bei vielen Logs
- Keine Aggregation oder Filtering
- Läuft auch in Produktion (sollte deaktivierbar sein)

## 2. Geplante Tests (Priorität 1 - Kritisch)

### 2.1 Datenqualitäts-Tests (Python)

Location: tests/test_data_quality.py (neu zu erstellen)

Framework: pytest
Laufzeit: Nach build_herdata.py, vor Deployment
Ziel: Validierung der semantischen Datenqualität

Test-Suites:

Suite 1: Referenzielle Integrität
```python
def test_no_duplicate_gnd_ids():
    """Keine zwei Personen dürfen dieselbe GND-ID haben"""
    gnds = [p['gnd'] for p in persons if 'gnd' in p]
    assert len(gnds) == len(set(gnds)), "Duplicate GND IDs found"

def test_relationships_target_exists():
    """Alle relationship.target_id müssen existierende Personen referenzieren"""
    person_ids = {p['id'] for p in persons}
    for person in persons:
        for rel in person.get('relationships', []):
            assert rel['target_id'] in person_ids,
                f"Person {person['id']} references non-existent {rel['target_id']}"

def test_correspondence_year_in_corpus_range():
    """Korrespondenz-Jahre müssen im Korpus-Zeitraum liegen (1760-1824)"""
    for person in persons:
        for corr in person.get('correspondence', []):
            if 'year' in corr:
                assert 1760 <= corr['year'] <= 1824,
                    f"Year {corr['year']} outside corpus range for {person['name']}"
```

Suite 2: Geodaten-Plausibilität
```python
def test_coordinates_within_europe():
    """Koordinaten müssen grob in Europa liegen"""
    for person in persons:
        for place in person.get('places', []):
            lat, lon = place['lat'], place['lon']
            assert 35 <= lat <= 71, f"Latitude {lat} outside Europe"
            assert -25 <= lon <= 40, f"Longitude {lon} outside Europe"

def test_geodata_fields_complete():
    """Places mit Koordinaten müssen auch Name haben"""
    for person in persons:
        for place in person.get('places', []):
            assert 'name' in place, f"Place without name for {person['name']}"
            assert 'lat' in place and 'lon' in place,
                f"Place '{place['name']}' missing coordinates"
```

Suite 3: Temporal-Plausibilität
```python
def test_birth_before_death():
    """Geburtsjahr muss vor Sterbejahr liegen"""
    for person in persons:
        dates = person.get('dates', {})
        if 'birth' in dates and 'death' in dates:
            birth = int(dates['birth'])
            death = int(dates['death'])
            assert birth < death,
                f"Person {person['name']]} has death ({death}) before birth ({birth})"

def test_dates_plausible_range():
    """Lebensdaten müssen im plausiblen Zeitraum liegen (1600-1900)"""
    for person in persons:
        dates = person.get('dates', {})
        if 'birth' in dates:
            birth = int(dates['birth'])
            assert 1600 <= birth <= 1900,
                f"Implausible birth year {birth} for {person['name']}"
```

Suite 4: Vollständigkeit
```python
def test_all_persons_have_required_fields():
    """Alle Personen müssen Pflichtfelder haben"""
    required = ['id', 'name', 'role', 'normierung', 'sndb_url']
    for person in persons:
        for field in required:
            assert field in person,
                f"Person {person.get('id', 'unknown')} missing field '{field}'"

def test_gnd_persons_have_gnd_url():
    """Personen mit normierung='gnd' müssen GND-ID haben"""
    for person in persons:
        if person.get('normierung') == 'gnd':
            assert 'gnd' in person and person['gnd'],
                f"Person {person['name']} marked as GND but no GND-ID"
```

Implementierungs-Plan:
1. pytest installieren: pip install pytest
2. Fixture für persons.json laden
3. 12-15 Tests implementieren
4. In CI/CD integrieren (nach Pipeline-Run)

Erwartete Laufzeit: < 1s
Erwartete Abdeckung: Semantische Korrektheit + Konsistenz

### 2.2 JSON-Schema-Validierung

Location: tests/persons.schema.json (neu) + tests/test_json_schema.py (neu)

Framework: jsonschema (Python)
Ziel: Vertrag zwischen Pipeline und Frontend sicherstellen

Schema-Definition:
```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "HerData Persons Dataset",
  "type": "object",
  "required": ["meta", "persons"],
  "properties": {
    "meta": {
      "type": "object",
      "required": ["generated", "total_women", "with_cmif_data", "with_geodata"],
      "properties": {
        "generated": { "type": "string", "format": "date-time" },
        "total_women": { "type": "integer", "minimum": 0 },
        "with_cmif_data": { "type": "integer", "minimum": 0 },
        "with_geodata": { "type": "integer", "minimum": 0 },
        "timeline": {
          "type": "array",
          "items": {
            "type": "object",
            "required": ["year", "count"],
            "properties": {
              "year": { "type": "integer", "minimum": 1760, "maximum": 1824 },
              "count": { "type": "integer", "minimum": 1 }
            }
          }
        }
      }
    },
    "persons": {
      "type": "array",
      "minItems": 1,
      "items": {
        "type": "object",
        "required": ["id", "name", "role", "normierung"],
        "properties": {
          "id": { "type": "string", "pattern": "^[0-9]+$" },
          "name": { "type": "string", "minLength": 1 },
          "role": {
            "type": "string",
            "enum": ["sender", "mentioned", "both", "indirect"]
          },
          "normierung": {
            "type": "string",
            "enum": ["gnd", "sndb"]
          },
          "gnd": { "type": "string", "pattern": "^[0-9X-]+$" },
          "letter_count": { "type": "integer", "minimum": 0 },
          "mention_count": { "type": "integer", "minimum": 0 },
          "dates": {
            "type": "object",
            "properties": {
              "birth": { "type": "string", "pattern": "^[0-9]{4}$" },
              "death": { "type": "string", "pattern": "^[0-9]{4}$" }
            }
          },
          "places": {
            "type": "array",
            "items": {
              "type": "object",
              "required": ["name", "lat", "lon"],
              "properties": {
                "name": { "type": "string" },
                "lat": { "type": "number", "minimum": -90, "maximum": 90 },
                "lon": { "type": "number", "minimum": -180, "maximum": 180 },
                "type": { "type": "string" }
              }
            }
          },
          "occupations": {
            "type": "array",
            "items": {
              "type": "object",
              "required": ["name"],
              "properties": {
                "name": { "type": "string" },
                "type": { "type": "string" }
              }
            }
          },
          "relationships": {
            "type": "array",
            "items": {
              "type": "object",
              "required": ["target_id", "type"],
              "properties": {
                "target_id": { "type": "string" },
                "type": { "type": "string" },
                "type_id": { "type": "string" }
              }
            }
          }
        }
      }
    }
  }
}
```

Test-Implementierung:
```python
import json
import jsonschema
import pytest

def test_persons_json_valid_schema():
    """persons.json muss dem definierten Schema entsprechen"""
    with open('docs/data/persons.json') as f:
        data = json.load(f)

    with open('tests/persons.schema.json') as f:
        schema = json.load(f)

    # Validierung mit detaillierter Fehlermeldung
    try:
        jsonschema.validate(instance=data, schema=schema)
    except jsonschema.ValidationError as e:
        pytest.fail(f"Schema validation failed: {e.message}\nPath: {e.path}")
```

Nutzen:
- Fängt Breaking Changes in Pipeline
- Dokumentiert Frontend-Erwartungen
- Verhindert Typ-Fehler (z.B. letter_count als String)

Implementierungs-Plan:
1. jsonschema installieren: pip install jsonschema
2. Schema-Datei erstellen (tests/persons.schema.json)
3. Test implementieren (tests/test_json_schema.py)
4. In CI/CD integrieren

Erwartete Laufzeit: < 0.5s

### 2.3 Frontend Filter-Logic Tests

Location: tests/frontend/filter-state.test.js (neu)

Framework: Vitest + @testing-library/dom
Ziel: Kritische Frontend-Logik testen

Test-Setup:
```bash
npm init -y
npm install --save-dev vitest jsdom @testing-library/dom
```

vitest.config.js:
```javascript
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true
  }
});
```

Test-Suite für FilterState (stats.js):
```javascript
import { describe, it, expect, beforeEach } from 'vitest';

describe('FilterState', () => {
    let filterState;
    let testPersons;

    beforeEach(() => {
        // Mock-Daten
        global.allPersons = [
            {
                id: '1',
                name: 'Test Person 1',
                dates: { birth: '1750', death: '1820' },
                role: 'sender',
                letter_count: 5,
                occupations: [{ name: 'Schauspielerin' }],
                places: [{ name: 'Weimar', lat: 50.9787, lon: 11.3291 }],
                correspondence: [
                    { year: 1800, type: 'sent' },
                    { year: 1805, type: 'sent' }
                ]
            },
            {
                id: '2',
                name: 'Test Person 2',
                dates: { birth: '1780', death: '1850' },
                role: 'mentioned',
                mention_count: 3,
                occupations: [{ name: 'Schriftstellerin' }],
                correspondence: [
                    { year: 1810, type: 'mentioned' }
                ]
            },
            {
                id: '3',
                name: 'Test Person 3',
                dates: { birth: '1760' },
                role: 'indirect',
                occupations: []
            }
        ];

        // Import und initialisiere FilterState
        const { FilterState } = await import('../docs/js/stats.js');
        filterState = new FilterState();
    });

    it('should filter by birth decade', () => {
        filterState.update({ birthDecade: 1750 });
        const filtered = filterState.getFilteredPersons();

        expect(filtered).toHaveLength(2);
        expect(filtered.map(p => p.id)).toEqual(['1', '3']);
    });

    it('should filter by activity type (sender only)', () => {
        filterState.update({ activityTypes: ['sender'] });
        const filtered = filterState.getFilteredPersons();

        expect(filtered).toHaveLength(1);
        expect(filtered[0].id).toBe('1');
    });

    it('should filter by time range (correspondence mode)', () => {
        filterState.update({
            timeRange: { start: 1800, end: 1810 },
            timeMode: 'correspondence'
        });
        const filtered = filterState.getFilteredPersons();

        expect(filtered).toHaveLength(2); // Person 1 (1800, 1805) + Person 2 (1810)
    });

    it('should filter by time range (lifespan mode)', () => {
        filterState.update({
            timeRange: { start: 1800, end: 1820 },
            timeMode: 'lifespan'
        });
        const filtered = filterState.getFilteredPersons();

        // Person 1: 1750-1820 (overlaps)
        // Person 2: 1780-1850 (overlaps)
        // Person 3: 1760-? (birth in range? No: 1760 < 1800)
        expect(filtered).toHaveLength(2);
    });

    it('should combine multiple filters (AND logic)', () => {
        filterState.update({
            birthDecade: 1750,
            activityTypes: ['sender'],
            occupation: 'Schauspielerin'
        });
        const filtered = filterState.getFilteredPersons();

        expect(filtered).toHaveLength(1);
        expect(filtered[0].id).toBe('1');
    });

    it('should reset filters correctly', () => {
        filterState.update({ birthDecade: 1750, occupation: 'Schauspielerin' });
        filterState.reset();

        expect(filterState.filters.birthDecade).toBeNull();
        expect(filterState.filters.occupation).toBeNull();
        expect(filterState.filters.activityTypes).toEqual(['sender', 'mentioned', 'both', 'indirect']);
    });

    it('should notify listeners on filter change', () => {
        let notified = false;
        let receivedFilters = null;

        filterState.subscribe((filters) => {
            notified = true;
            receivedFilters = filters;
        });

        filterState.update({ birthDecade: 1750 });

        expect(notified).toBe(true);
        expect(receivedFilters.birthDecade).toBe(1750);
    });
});
```

Test-Suite für Search (search.js):
```javascript
import { describe, it, expect, beforeEach } from 'vitest';

describe('GlobalSearch', () => {
    let search;
    let testPersons;

    beforeEach(() => {
        testPersons = [
            {
                id: '1',
                name: 'Anna Amalia von Sachsen-Weimar-Eisenach',
                name_variants: ['Anna Amalia', 'Herzogin Anna Amalia'],
                gnd: '118502905'
            },
            {
                id: '2',
                name: 'Charlotte von Stein',
                name_variants: ['Charlotte Albertine Ernestine von Stein'],
                gnd: '118617648'
            },
            {
                id: '3',
                name: 'Christiane Vulpius',
                name_variants: ['Christiane von Goethe'],
                gnd: '118768190'
            }
        ];

        const { GlobalSearch } = await import('../docs/js/search.js');
        search = new GlobalSearch(testPersons);
    });

    it('should find person by exact name', () => {
        const results = search.search('Anna Amalia');
        expect(results).toHaveLength(1);
        expect(results[0].id).toBe('1');
    });

    it('should find person by partial name', () => {
        const results = search.search('Amalia');
        expect(results.length).toBeGreaterThan(0);
        expect(results[0].name).toContain('Amalia');
    });

    it('should find person by name variant', () => {
        const results = search.search('Herzogin Anna');
        expect(results).toHaveLength(1);
        expect(results[0].id).toBe('1');
    });

    it('should find person by GND ID', () => {
        const results = search.search('118617648');
        expect(results).toHaveLength(1);
        expect(results[0].name).toBe('Charlotte von Stein');
    });

    it('should be case-insensitive', () => {
        const results1 = search.search('anna amalia');
        const results2 = search.search('ANNA AMALIA');
        expect(results1).toEqual(results2);
    });

    it('should return empty array for no matches', () => {
        const results = search.search('XYZ NonExistent');
        expect(results).toEqual([]);
    });

    it('should rank exact matches higher than partial', () => {
        const results = search.search('Anna');
        // Anna Amalia should rank higher than "Johanna" if present
        expect(results[0].name).toContain('Anna');
    });
});
```

Implementierungs-Plan:
1. package.json erstellen mit Vitest
2. Test-Dateien unter tests/frontend/ erstellen
3. 15-20 Tests für kritische Filter-Logik
4. npm test in CI/CD integrieren

Erwartete Laufzeit: < 5s
Erwartete Abdeckung: Filter-Logik (stats.js), Suche (search.js)

## 3. Geplante Tests (Priorität 2 - Wichtig)

### 3.1 Integration Tests (Python)

Location: tests/test_integration.py (neu)

Framework: pytest
Ziel: End-to-End Pipeline-Validierung

Test-Szenarien:

Szenario 1: Vollständiger Pipeline-Durchlauf
```python
def test_full_pipeline_run(tmp_path):
    """Pipeline von XML bis JSON komplett durchlaufen"""
    from preprocessing.build_herdata import HerDataPipelineNew

    output_file = tmp_path / "persons_test.json"

    pipeline = HerDataPipelineNew(
        herdata_dir='data/herdata',
        sndb_dir='data/sndb',
        cmif_file='data/ra-cmif.xml',
        output_file=output_file,
        verbose=False
    )

    result = pipeline.run()

    # Validierung
    assert output_file.exists(), "Output JSON not created"
    assert len(result['persons']) > 400, "Too few persons"
    assert result['meta']['total_women'] == len(result['persons'])
```

Szenario 2: Hybrid Geodata Resolution
```python
def test_hybrid_geodata_resolution():
    """NEW export Orte + OLD SNDB Koordinaten korrekt kombiniert"""
    from preprocessing.build_herdata import HerDataPipelineNew

    pipeline = HerDataPipelineNew(...)
    pipeline.phase1_identify_women()
    pipeline.phase2_match_letters()
    pipeline.phase3_enrich_data()

    # Prüfe ob Geodaten aus beiden Quellen stammen
    persons_with_places = [p for p in pipeline.women.values() if p.get('places')]
    assert len(persons_with_places) > 200, "Expected ~227 with geodata"

    # Prüfe dass Koordinaten vorhanden
    for person in persons_with_places:
        for place in person['places']:
            assert 'lat' in place and 'lon' in place
            assert isinstance(place['lat'], float)
```

Szenario 3: CMIF Matching Konsistenz
```python
def test_cmif_matching_consistency():
    """GND-Matching zwischen CMIF und SNDB konsistent"""
    from preprocessing.build_herdata import HerDataPipelineNew

    pipeline = HerDataPipelineNew(...)
    pipeline.phase1_identify_women()
    pipeline.phase2_match_letters()

    # Jede Person mit letter_count > 0 muss 'sender' in roles haben
    for person in pipeline.women.values():
        if person.get('letter_count', 0) > 0:
            assert 'sender' in person.get('roles', [])

        if person.get('mention_count', 0) > 0:
            assert 'mentioned' in person.get('roles', [])
```

Implementierungs-Plan:
1. tests/test_integration.py erstellen
2. 5-8 End-to-End Szenarien
3. Temporäre Output-Dateien nutzen (tmp_path)
4. In CI/CD als separater Job (läuft länger)

Erwartete Laufzeit: 3-5s
Erwartete Abdeckung: Pipeline-Integration, Datenfluss

### 3.2 Visual Regression Tests

Location: tests/e2e/ (neu)

Framework: Playwright
Ziel: Frontend-Rendering validieren

Setup:
```bash
npm install --save-dev @playwright/test
npx playwright install
```

Test-Szenarien:

Szenario 1: Map Initial Render
```javascript
import { test, expect } from '@playwright/test';

test('map renders with correct markers', async ({ page }) => {
    await page.goto('http://localhost:8000/');

    // Warte auf Map-Initialisierung
    await page.waitForSelector('.maplibregl-canvas');

    // Screenshot für Visual Regression
    await expect(page).toHaveScreenshot('map-initial-state.png');

    // Prüfe dass Cluster vorhanden
    const clusters = await page.locator('.maplibregl-marker').count();
    expect(clusters).toBeGreaterThan(0);
});
```

Szenario 2: Filter Interaction
```javascript
test('filter updates map correctly', async ({ page }) => {
    await page.goto('http://localhost:8000/');
    await page.waitForSelector('.maplibregl-canvas');

    // Öffne Filter
    await page.click('#filter-toggle');

    // Wähle Berufsgruppe
    await page.click('input[value="artistic"]');

    // Warte auf Map-Update
    await page.waitForTimeout(500);

    // Screenshot
    await expect(page).toHaveScreenshot('map-filtered-artistic.png');
});
```

Szenario 3: Brief-Explorer Charts
```javascript
test('brief-explorer renders all charts', async ({ page }) => {
    await page.goto('http://localhost:8000/stats.html');

    // Warte auf ECharts-Rendering
    await page.waitForSelector('.echarts-container');

    // Prüfe alle 4 Charts vorhanden
    const charts = await page.locator('.echarts-container').count();
    expect(charts).toBe(4); // Treemap, Places, Generations, Timeline

    // Screenshot
    await expect(page).toHaveScreenshot('brief-explorer-initial.png');
});
```

Szenario 4: Network Graph (Wissenskorb)
```javascript
test('wissenskorb renders network graph', async ({ page }) => {
    await page.goto('http://localhost:8000/wissenskorb.html');

    // Warte auf Cytoscape
    await page.waitForSelector('#network-graph');

    // Prüfe Canvas vorhanden
    const canvas = await page.locator('#network-graph canvas');
    expect(await canvas.count()).toBeGreaterThan(0);

    // Screenshot
    await expect(page).toHaveScreenshot('wissenskorb-initial.png');
});
```

Implementierungs-Plan:
1. Playwright installieren
2. playwright.config.js erstellen
3. 10-15 E2E-Tests für Hauptansichten
4. Screenshots in Git committen (Baseline)
5. CI/CD: Screenshot-Diff bei Changes

Erwartete Laufzeit: 20-30s
Erwartete Abdeckung: Rendering aller Hauptansichten

### 3.3 Accessibility Tests

Location: tests/e2e/accessibility.spec.js (neu)

Framework: Playwright + axe-core
Ziel: WCAG 2.1 AA Konformität

Setup:
```bash
npm install --save-dev @axe-core/playwright
```

Test-Implementierung:
```javascript
import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('Accessibility', () => {
    test('map page should not have accessibility violations', async ({ page }) => {
        await page.goto('http://localhost:8000/');
        await page.waitForSelector('.maplibregl-canvas');

        const accessibilityScanResults = await new AxeBuilder({ page })
            .withTags(['wcag2a', 'wcag2aa'])
            .analyze();

        expect(accessibilityScanResults.violations).toEqual([]);
    });

    test('stats page should not have accessibility violations', async ({ page }) => {
        await page.goto('http://localhost:8000/stats.html');
        await page.waitForSelector('.echarts-container');

        const accessibilityScanResults = await new AxeBuilder({ page })
            .withTags(['wcag2a', 'wcag2aa'])
            .analyze();

        expect(accessibilityScanResults.violations).toEqual([]);
    });

    test('keyboard navigation works on map', async ({ page }) => {
        await page.goto('http://localhost:8000/');

        // Tab zu erstem interaktiven Element
        await page.keyboard.press('Tab');

        // Prüfe Focus-Indicator sichtbar
        const focusedElement = await page.evaluate(() => document.activeElement.tagName);
        expect(focusedElement).toBeTruthy();
    });

    test('search has proper ARIA labels', async ({ page }) => {
        await page.goto('http://localhost:8000/');

        const searchInput = page.locator('#search-input');
        const ariaLabel = await searchInput.getAttribute('aria-label');

        expect(ariaLabel).toBeTruthy();
        expect(ariaLabel.length).toBeGreaterThan(0);
    });
});
```

Implementierungs-Plan:
1. @axe-core/playwright installieren
2. Tests für alle Hauptseiten
3. ARIA-Labels prüfen
4. Tastatur-Navigation validieren
5. Farb-Kontraste prüfen

Erwartete Laufzeit: 10-15s
Erwartete Abdeckung: WCAG 2.1 AA Konformität

## 4. Geplante Tests (Priorität 3 - Nice-to-have)

### 4.1 Performance Benchmarks

Location: tests/test_performance.py (neu)

Framework: pytest + time
Ziel: Regression-Erkennung bei Performance

Benchmarks:

Pipeline Performance:
```python
import time

def test_pipeline_performance_under_2_seconds():
    """Gesamte Pipeline soll < 2s laufen"""
    from preprocessing.build_herdata import HerDataPipelineNew

    start = time.time()
    pipeline = HerDataPipelineNew(...)
    pipeline.run()
    duration = time.time() - start

    assert duration < 2.0, f"Pipeline too slow: {duration:.2f}s"
```

JSON File Size:
```python
def test_persons_json_size_under_500kb():
    """persons.json soll < 500 KB bleiben"""
    import os

    file_size = os.path.getsize('docs/data/persons.json')
    file_size_kb = file_size / 1024

    assert file_size_kb < 500, f"JSON too large: {file_size_kb:.1f} KB"
```

Frontend Load Time (Playwright):
```javascript
test('page loads in under 3 seconds', async ({ page }) => {
    const start = Date.now();
    await page.goto('http://localhost:8000/');
    await page.waitForSelector('.maplibregl-canvas');
    const duration = Date.now() - start;

    expect(duration).toBeLessThan(3000);
});
```

### 4.2 Cross-Browser Tests

Location: playwright.config.js

Framework: Playwright
Ziel: Multi-Browser-Kompatibilität

Konfiguration:
```javascript
export default {
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
    { name: 'webkit', use: { ...devices['Desktop Safari'] } },
    { name: 'mobile-chrome', use: { ...devices['Pixel 5'] } },
    { name: 'mobile-safari', use: { ...devices['iPhone 12'] } }
  ]
};
```

Nutzung:
```bash
npx playwright test --project=firefox
npx playwright test --project=mobile-chrome
```

## 5. CI/CD Integration

### 5.1 GitHub Actions Workflow

Location: .github/workflows/test.yml (neu)

Workflow-Definition:
```yaml
name: HerData Tests

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  python-tests:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3

      - name: Set up Python
        uses: actions/setup-python@v4
        with:
          python-version: '3.11'

      - name: Install dependencies
        run: |
          pip install pytest jsonschema

      - name: Run pipeline tests
        run: |
          cd preprocessing
          python build_herdata.py

      - name: Run data quality tests
        run: |
          pytest tests/test_data_quality.py -v

      - name: Validate JSON schema
        run: |
          pytest tests/test_json_schema.py -v

  frontend-tests:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3

      - name: Set up Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm install

      - name: Run Vitest tests
        run: npm test

      - name: Upload coverage
        uses: codecov/codecov-action@v3
        with:
          files: ./coverage/coverage-final.json

  e2e-tests:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3

      - name: Set up Node.js
        uses: actions/setup-node@v3

      - name: Install dependencies
        run: npm install

      - name: Install Playwright
        run: npx playwright install --with-deps

      - name: Start local server
        run: |
          cd docs
          python -m http.server 8000 &
          sleep 3

      - name: Run E2E tests
        run: npx playwright test

      - name: Upload Playwright report
        if: always()
        uses: actions/upload-artifact@v3
        with:
          name: playwright-report
          path: playwright-report/
```

### 5.2 Test-Coverage-Badges

README.md Integration:
```markdown
[![Pipeline Tests](https://github.com/user/HerData/workflows/Tests/badge.svg)](https://github.com/user/HerData/actions)
[![Coverage](https://codecov.io/gh/user/HerData/branch/main/graph/badge.svg)](https://codecov.io/gh/user/HerData)
```

## 6. Test-Dokumentation und Best Practices

### 6.1 Test-Namenskonventionen

Python (pytest):
- Dateien: test_*.py oder *_test.py
- Funktionen: test_* (beschreibender Name)
- Klassen: Test* (optional)

Beispiele:
```python
# Gut
def test_no_duplicate_gnd_ids()
def test_coordinates_within_europe()

# Schlecht
def test1()
def check_duplicates()  # Fehlt 'test_' Präfix
```

JavaScript (Vitest):
- Dateien: *.test.js oder *.spec.js
- describe() für Test-Suites
- it() oder test() für einzelne Tests

Beispiele:
```javascript
// Gut
describe('FilterState', () => {
    it('should filter by birth decade', () => { ... });
    it('should combine multiple filters', () => { ... });
});

// Schlecht
describe('Tests', () => {  // Zu generisch
    it('works', () => { ... });  // Nicht beschreibend
});
```

### 6.2 Assertion-Strategien

Spezifische Assertions bevorzugen:
```python
# Gut
assert person['gnd'] == '118502905'
assert 1760 <= year <= 1824

# Schlecht
assert person['gnd']  # Nur Existenz, nicht Wert
assert year > 0  # Zu unspezifisch
```

Aussagekräftige Fehlermeldungen:
```python
# Gut
assert birth < death, f"Person {name} has death ({death}) before birth ({birth})"

# Schlecht
assert birth < death  # Keine Kontext-Info bei Fehler
```

### 6.3 Test-Daten-Management

Fixtures für wiederverwendbare Daten:
```python
import pytest

@pytest.fixture
def sample_persons():
    return [
        {'id': '1', 'name': 'Test Person 1', ...},
        {'id': '2', 'name': 'Test Person 2', ...}
    ]

def test_something(sample_persons):
    assert len(sample_persons) == 2
```

Mock externe Dependencies:
```javascript
// Mock fetch für Data-Loading-Tests
global.fetch = vi.fn(() =>
    Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ persons: [...] })
    })
);
```

### 6.4 Test-Wartung

Regelmäßige Reviews:
- Monatlich: Tests auf obsolete Annahmen prüfen
- Bei Daten-Updates: Erwartete Wertebereiche anpassen
- Bei Breaking Changes: Tests aktualisieren vor Code-Merge

Dokumentation:
- Jeden Test mit Docstring/Kommentar versehen
- Begründung für erwartete Werte (z.B. "400-500 basierend auf Export 2025-10-27")
- Hinweise auf externe Abhängigkeiten

## 7. Implementierungs-Roadmap

### Phase 1: Fundamentals (2 Wochen)

Woche 1: Python Extended Tests
- test_data_quality.py implementieren (12-15 Tests)
- JSON-Schema definieren (persons.schema.json)
- test_json_schema.py implementieren
- In build_herdata.py integrieren

Woche 2: Frontend Core Tests
- package.json + Vitest Setup
- FilterState Tests (8-10 Tests)
- Search Tests (6-8 Tests)
- Data-Loader Tests (4-5 Tests)

Deliverables:
- 35-40 neue Tests
- Vitest konfiguriert
- pytest erweitert

### Phase 2: Integration (2 Wochen)

Woche 3: Integration Tests
- test_integration.py (5-8 End-to-End Szenarien)
- Hybrid Geodata Resolution validiert
- CMIF Matching Konsistenz geprüft

Woche 4: Visual Regression
- Playwright Setup
- Map-Rendering Tests (3-4 Szenarien)
- Brief-Explorer Tests (3-4 Szenarien)
- Wissenskorb Tests (2-3 Szenarien)

Deliverables:
- 15-20 neue Tests
- Playwright konfiguriert
- Screenshot-Baseline

### Phase 3: Polish (1 Woche)

Woche 5: CI/CD + Accessibility
- GitHub Actions Workflow
- Accessibility Tests (axe-core)
- Badge-Integration
- Test-Dokumentation finalisieren

Deliverables:
- Automatisierte Tests in CI/CD
- Accessibility-Konformität
- README mit Test-Badges

### Phase 4: Optimization (optional)

Performance Benchmarks
- Pipeline < 2s
- JSON < 500 KB
- Frontend load < 3s

Cross-Browser Tests
- Chrome, Firefox, Safari
- Mobile (iOS, Android)

## 8. Metriken und Erfolgskriterien

### 8.1 Test-Coverage-Ziele

Aktuell (geschätzt):
- Pipeline: 80% (durch integrierte Tests)
- Frontend: 0% (keine Tests)
- Datenqualität: 20% (nur manuelle Analysen)
- Gesamt: 35%

Ziel nach Phase 1:
- Pipeline: 90%
- Frontend: 60%
- Datenqualität: 80%
- Gesamt: 75%

Ziel nach Phase 3:
- Pipeline: 95%
- Frontend: 80%
- Datenqualität: 90%
- Integration: 70%
- Gesamt: 85%

### 8.2 Test-Qualitäts-Metriken

Erfolgs-Indikatoren:
- Alle Tests laufen in CI/CD: JA/NEIN
- Test-Laufzeit gesamt: < 60s
- Flaky Tests: < 5%
- Test-Wartungsaufwand: < 2h/Monat
- Bugs durch Tests gefangen: > 80%

### 8.3 Reporting

Wöchentlich:
- Test-Erfolgsrate (% passing)
- Neue Tests hinzugefügt
- Gefixtete Failures

Monatlich:
- Coverage-Trend
- Performance-Trend
- Flaky-Test-Analyse

## 9. Offene Fragen und Risiken

### 9.1 Offene Fragen

1. Provenance-Validierung
   Frage: Sollen wir automatisch prüfen dass alle Felder Provenance haben?
   Impact: Würde Datenqualität weiter erhöhen
   Aufwand: 4-6 Stunden

2. Historische Test-Daten
   Frage: Sollen wir alte persons.json als Fixtures für Regression-Tests behalten?
   Impact: Verhindert unbeabsichtigte Datenveränderungen
   Aufwand: 2-3 Stunden + Storage

3. Frontend-Logging in Produktion
   Frage: Debug-Logs komplett deaktivieren oder mit Log-Levels versehen?
   Impact: Performance + User Privacy
   Aufwand: 3-4 Stunden

### 9.2 Risiken

Risiko 1: Erwartete Wertebereiche veralten
- Wahrscheinlichkeit: Hoch
- Impact: Mittel (False Positives)
- Mitigation: Quartalsweise Review der Assertions

Risiko 2: Frontend-Tests brechen bei Minor UI-Changes
- Wahrscheinlichkeit: Mittel
- Impact: Mittel (Wartungsaufwand)
- Mitigation: Tests auf Logik fokussieren, nicht auf DOM-Struktur

Risiko 3: Visual Regression Screenshots divergieren
- Wahrscheinlichkeit: Hoch (Font-Rendering unterscheidet sich)
- Impact: Gering (Noise)
- Mitigation: Threshold für Pixel-Diffs setzen (z.B. 0.1%)

Risiko 4: CI/CD-Laufzeit zu lang
- Wahrscheinlichkeit: Mittel
- Impact: Hoch (Developer Experience)
- Mitigation: Tests parallelisieren, kritische vs. optionale trennen

## 10. Zusammenfassung

HerData verfügt aktuell über eine solide Basis mit 48 integrierten Pipeline-Tests, aber signifikante Lücken im Frontend und bei Datenqualitäts-Checks.

Bestehende Stärken:
- Pipeline-Tests mit klaren Assertions
- Provenance-Tracking für Debugging
- Analyse-Tools für manuelle Validierung

Kritische Lücken:
- Keine Frontend-Tests (Filter-Logik, Suche)
- Keine semantischen Datenqualitäts-Tests
- Keine JSON-Schema-Validierung
- Keine E2E-Tests

Empfohlene Strategie:
- Phase 1 (2 Wochen): Python Extended + Frontend Core
- Phase 2 (2 Wochen): Integration + Visual Regression
- Phase 3 (1 Woche): CI/CD + Accessibility

Erwarteter ROI:
- Investition: 6-9 Arbeitstage
- Coverage: 35% → 85%
- Nutzen: Amortisiert sich beim 2.-3. Datenupdate

Die vorgeschlagene Test-Strategie ermöglicht sicheres Refactoring, verhindert Regressionen bei Datenaktualisierungen und erhöht das Vertrauen in die Datenqualität für wissenschaftliche Nutzung.
