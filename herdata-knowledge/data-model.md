# Datenmodell

JSON-Schema, Feldtypen und Validierungsregeln für persons.json.

* Stand: 04.11.2025

## persons.json Struktur

### Schema-Beispiel (vollständig)

```json
{
  "meta": {
    "generated_at": "2025-11-04T10:30:00",
    "total_persons": 448,
    "with_gnd": 270,
    "with_geodata": 227,
    "with_letters": 230,
    "pipeline_version": "build_herdata"
  },
  "persons": [
    {
      "id": "12345",
      "name": "Anna Amalia von Sachsen-Weimar-Eisenach",
      "gnd": "118502689",
      "sndb_url": "https://ores.klassik-stiftung.de/ords/f?p=900:2:::::P2_ID:12345",
      "dates": {
        "birth": 1739,
        "death": 1807
      },
      "biography": "Herzogin von Sachsen-Weimar-Eisenach...",
      "role": "both",
      "roles": ["sender", "mentioned"],
      "letter_count": 24,
      "mention_count": 156,
      "letter_years": [1785, 1786, 1787],
      "correspondence": [
        {
          "type": "sender",
          "letter_id": "RA01_0001_00001",
          "date": "1785-06-15",
          "year": 1785,
          "place": "Weimar",
          "recipient": "Goethe, Johann Wolfgang von",
          "recipient_gnd": "118540238"
        }
      ],
      "places": [
        {
          "name": "Weimar",
          "lat": 50.9794,
          "lon": 11.3235,
          "type": "Wirkungsort"
        }
      ],
      "occupations": [
        {
          "name": "Herzogin",
          "type": "Adel"
        }
      ],
      "relationships": [
        {
          "target_id": "67890",
          "type": "hat Kind",
          "type_id": "4030",
          "reciprocal_type": "hat Elternteil"
        }
      ]
    }
  ]
}
```

## Feldmodell

### Meta-Felder (persons.json Level)

| Feld | Typ | Required | Beschreibung |
|------|-----|----------|--------------|
| meta.generated_at | ISO 8601 | ✓ | Generierungszeitpunkt |
| meta.total_persons | integer | ✓ | Anzahl Frauen im Datensatz |
| meta.with_gnd | integer | ✓ | Anzahl mit GND-ID |
| meta.with_geodata | integer | ✓ | Anzahl mit Koordinaten |
| meta.with_letters | integer | ✓ | Anzahl mit CMIF-Briefverbindung |
| meta.pipeline_version | string | ✓ | Pipeline-Bezeichnung |

### Person-Kernfelder

| Feld | Typ | Required | Beispiel | Quelle |
|------|-----|----------|----------|--------|
| id | string | ✓ | "12345" | SNDB-ID (numerisch) |
| name | string | ✓ | "Anna Amalia von..." | ra_ndb_main.xml (VORNAMEN + NACHNAME + TITEL) |
| gnd | string | ✗ | "118502689" | ra_ndb_indiv.xml (GND-Feld) |
| sndb_url | string | ✓ | "https://ores..." | Generiert aus ID |
| dates | object | ✗ | {"birth": 1739, "death": 1807} | ra_ndb_datierungen.xml |
| biography | string | ✗ | "Herzogin von..." | projekt_regestausgabe.xml (REGISTEREINTRAG) |
| role | string | ✓ | "sender" \| "mentioned" \| "both" \| "indirect" | Berechnet aus letter_count + mention_count |
| roles | array | ✓ | ["sender", "mentioned"] | Berechnet (Liste aller Rollen) |

### Brief-Felder (CMIF-derived)

| Feld | Typ | Required | Beispiel | Beschreibung |
|------|-----|----------|----------|--------------|
| letter_count | integer | ✗ | 24 | Anzahl gesendeter Briefe |
| mention_count | integer | ✗ | 156 | Anzahl Erwähnungen in Briefen |
| letter_years | array | ✗ | [1785, 1786] | Eindeutige Jahre mit Briefaktivität |
| correspondence | array | ✗ | [...] | Detaillierte Briefliste (siehe unten) |

### Correspondence-Array Struktur

| Feld | Typ | Required | Beispiel |
|------|-----|----------|----------|
| type | string | ✓ | "sender" \| "mentioned" |
| letter_id | string | ✓ | "RA01_0001_00001" |
| date | string | ✗ | "1785-06-15" (ISO 8601) |
| year | integer | ✓ | 1785 |
| place | string | ✗ | "Weimar" |
| recipient | string | ✗ | "Goethe, Johann Wolfgang von" |
| recipient_gnd | string | ✗ | "118540238" |

### Geodaten-Felder

| Feld | Typ | Required | Beispiel | Quelle |
|------|-----|----------|----------|--------|
| places | array | ✗ | [...] | Hybrid: ra_ndb_orte.xml + geo_*.xml |
| places[].name | string | ✓ | "Weimar" | geo_main.xml (BEZEICHNUNG) |
| places[].lat | float | ✓ | 50.9794 | geo_indiv.xml (LATITUDE) |
| places[].lon | float | ✓ | 11.3235 | geo_indiv.xml (LONGITUDE) |
| places[].type | string | ✓ | "Wirkungsort" | ra_ndb_orte.xml (ART) |

Orttypen: "Wirkungsort", "Geburtsort", "Sterbeort", "Wohnort"

### Berufs-Felder

| Feld | Typ | Required | Beispiel | Quelle |
|------|-----|----------|----------|--------|
| occupations | array | ✗ | [...] | ra_ndb_berufe.xml |
| occupations[].name | string | ✓ | "Herzogin" | ra_ndb_berufe.xml (BERUF) |
| occupations[].type | string | ✗ | "Adel" | Berechnet/klassifiziert |

### Beziehungs-Felder (AGRELON)

| Feld | Typ | Required | Beispiel | Quelle |
|------|-----|----------|----------|--------|
| relationships | array | ✗ | [...] | ra_ndb_beziehungen.xml |
| relationships[].target_id | string | ✓ | "67890" | SNDB-ID der Zielperson |
| relationships[].type | string | ✓ | "hat Kind" | nsl_agrelon.xml (BEZIEHUNG) |
| relationships[].type_id | string | ✓ | "4030" | AGRELON-Kategorie-ID |
| relationships[].reciprocal_type | string | ✓ | "hat Elternteil" | nsl_agrelon.xml (CORRIDENT) |

## Validierungsregeln

### Required Fields (immer vorhanden)

- id: SNDB-ID (numerisch, unique)
- name: Zusammengesetzt aus Vorname + Nachname + Titel
- sndb_url: Generiert aus ID
- role: Berechnet aus letter_count + mention_count
- roles: Berechnet (Array)

### Optional Fields (können leer/null sein)

- gnd: 60,3% Coverage (270/448)
- dates: 94,0% Coverage (421/448)
- places: 50,7% Coverage (227/448)
- occupations: 46,2% Coverage (207/448)
- correspondence: 51,3% Coverage (230/448)
- relationships: 15,0% Coverage (67/448)

### Datentyp-Constraints

- id: String (numerisch), unique
- gnd: String (numerisch), 8-10 Ziffern
- dates.birth/death: Integer, 1000-2100
- lat: Float, -90 ≤ lat ≤ 90
- lon: Float, -180 ≤ lon ≤ 180
- letter_count/mention_count: Integer, ≥ 0
- letter_years: Array of integers, sorted ascending

### Cross-field Validations

- role == "sender" → letter_count > 0
- role == "mentioned" → mention_count > 0
- role == "both" → letter_count > 0 AND mention_count > 0
- role == "indirect" → letter_count == 0 AND mention_count == 0
- correspondence.length == letter_count (für "sender" Einträge)

## Role-Berechnung

```python
def calculate_role(letter_count, mention_count):
    if letter_count > 0 and mention_count > 0:
        return "both"
    elif letter_count > 0:
        return "sender"
    elif mention_count > 0:
        return "mentioned"
    else:
        return "indirect"
```

## Frontend-Transformationen

### Kartenvisualisierung (MapLibre)

Personen werden als GeoJSON Features transformiert:

```javascript
{
  type: "Feature",
  geometry: {
    type: "Point",
    coordinates: [lon, lat]  // Beachte: lon, lat (nicht lat, lon!)
  },
  properties: {
    id: person.id,
    name: person.name,
    role: person.role,
    letter_count: person.letter_count,
    occupations: person.occupations.map(o => o.name).join(", ")
  }
}
```

### Cluster-Aggregation

Personen am gleichen Ort werden gruppiert:

```javascript
{
  cluster: true,
  point_count: 5,
  roles: ["sender", "sender", "mentioned", "both", "indirect"],
  dominant_role: "sender"  // Häufigste Rolle im Cluster
}
```

### Filter-Datenstrukturen

Occupation-Filter:
```javascript
{
  name: "Schriftstellerin",
  count: 34,
  person_ids: ["123", "456", ...]
}
```

Year-Range-Filter:
```javascript
{
  min: 1762,
  max: 1824,
  distribution: {
    1762: 2,
    1763: 5,
    ...
  }
}
```

## Aggregierte Datenstrukturen

### Brief-Explorer Aggregationen

Top-Berufe:
```javascript
{
  name: "Hofdame",
  count: 42,
  percentage: 9.4
}
```

Brief-Timeline:
```javascript
{
  year: 1817,
  senders: 45,
  mentioned: 156,
  total: 201
}
```

Geografische Zentren:
```javascript
{
  place: "Weimar",
  count: 83,
  percentage: 36.6,
  persons: ["12345", "67890", ...]
}
```

## Datenqualität-Indikatoren

Berechnung der Vollständigkeit (für person-cards.css):

```javascript
function calculateCompleteness(person) {
  const fields = [
    person.id !== null,              // immer true
    person.name !== null,            // immer true
    person.gnd !== null,
    person.dates?.birth !== null,
    person.dates?.death !== null,
    person.biography !== null,
    person.places?.length > 0,
    person.occupations?.length > 0
  ];

  const filled = fields.filter(Boolean).length;
  const total = fields.length;

  return {
    filled: filled,
    total: total,
    percentage: Math.round((filled / total) * 100)
  };
}
```

## Pipeline-Transformation

Quelle → persons.json Pipeline-Phasen:

Phase 1: Frauen-Identifikation
- Input: ra_ndb_main.xml, ra_ndb_indiv.xml
- Filter: SEXUS='w'
- Output: 448 Frauen mit id, name, gnd

Phase 2: CMIF-Matching
- Input: ra-cmif.xml (15.312 Briefe)
- Matching: GND-basiert (exakt)
- Output: letter_count, mention_count, correspondence[]

Phase 3: Anreicherung
- Input: ra_ndb_orte.xml (HYBRID mit geo_*.xml), ra_ndb_berufe.xml, ra_ndb_beziehungen.xml, projekt_regestausgabe.xml
- Output: places[], occupations[], relationships[], biography

Phase 4: JSON-Generierung
- Validierung: 10 Assertions
- Output: persons.json (290 KB)

Siehe [tech.md](tech.md) für Pipeline-Details.

## Provenance-Tracking

Debug-Version: docs/data/persons_debug.json

Struktur:
```json
{
  "id": "12345",
  "name": "Anna Amalia",
  "_provenance": {
    "name": {
      "source": "ra_ndb_main.xml",
      "xpath": "//ITEM[ID='12345' and LFDNR='0']/VORNAMEN | NACHNAME | TITEL",
      "raw_value": ["Anna", "Amalia", "Herzogin"],
      "transformation": "concatenation with space",
      "extracted_at": "2025-11-04T10:30:00"
    },
    "places": {
      "source": "ra_ndb_orte.xml (NEW) + geo_main.xml + geo_indiv.xml (OLD)",
      "transformation": "HYBRID: place link from NEW export, resolved via OLD SNDB geodata",
      "extracted_at": "2025-11-04T10:30:00"
    }
  }
}
```

Siehe [data.md](data.md) Section "Provenance" für Details.

## Verweise

- [data.md](data.md) - Datenquellen, Herkunft, Lizenzen, Qualität
- [tech.md](tech.md) - Pipeline-Architektur, 4 Phasen
- [INDEX.md](INDEX.md) - Knowledge Vault Navigation
- Pipeline-Code: [../../preprocessing/build_herdata.py](../../preprocessing/build_herdata.py)
- Produktions-JSON: [../../docs/data/persons.json](../../docs/data/persons.json)
