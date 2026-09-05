# Data and rehearsal rules

The source is the Hannah Altmann correspondence catalogue in Stefan Zweig digital,
maintained by the Literaturarchiv Salzburg project. It describes archival material;
it is not a complete transcript or a complete historical correspondence network.
The source version and selection are recorded in `SOURCE.json`.

`record.schema.json` describes each input record. Passing that schema establishes
structural conformity, not source fidelity, historical certainty or artefact quality.

Each JSONL record is a projection of one TEI `biblFull`. Arrays preserve multiple
titles, identifiers, correspondence descriptions, actions and people. Leaf objects
carry `attributes` and `text`; person objects additionally retain the separate
forename and surname components. XML attributes keep their local names, with the
XML namespace written as `xml:`. Person `text` retains the source whitespace;
format it for display only in a separate derived value. `sources/initial.xml`
contains the fuller selected records for inspection.

| Projection field | TEI source within each `biblFull` |
|---|---|
| `id` | `@xml:id` |
| `titles` | `fileDesc/titleStmt/title` |
| `description_types` | `fileDesc/publicationStmt/ab` |
| `repositories`, `signatures`, `facsimile_pids` | `fileDesc/sourceDesc/msDesc/msIdentifier` children and `altIdentifier/idno[@type='PID']` |
| `extents` | `fileDesc/sourceDesc/msDesc/physDesc/objectDesc/supportDesc/extent/span` |
| `correspondence` | `profileDesc/correspDesc`, with every `correspAction`, `persName`, `date` and `placeName` |

The projection omits material, language, acquisition and other fields that remain
available in the selected TEI. XML serialization may change whitespace outside
record content, namespace prefixes and empty-element syntax. It does not resolve
or correct source values. JSON is UTF-8; do not replace original date literals or
empty name components. Relevant person labels can be cross-referenced between
supplied records by their authority reference; identify any such label as derived.

## Interpretation policy for this rehearsal

1. Use the German date element for the primary temporal display and filtering,
   while keeping other language versions inspectable. Multiple source elements
   must not produce duplicate catalogue records.
2. Treat `@when` as the catalogue's encoded value. Day, month and year granularity
   describe that encoding, not historical certainty. Do not invent a day for a
   month or a month for a year. Preserve source `@ana` values verbatim; an absent
   annotation does not establish certainty.
3. For a selected month, a valid day in that month or the same month value belongs
   to the within-month group. A year-only value for that year belongs to the
   overlapping/coarser group. Values outside that month/year are outside the
   temporal result. Missing or unsupported encodings remain unresolved.
4. Temporal groups describe encoded metadata. A puzzling literal or conflicting
   label must stay visible with a review note; it does not justify silently
   correcting either the literal or `@when`. A record may have an encoded temporal
   placement and still need scholarly review.
5. Retain every sender and recipient action. A title or broad correspondence-type
   label must not silently replace the structured participants. Empty labels can
   be displayed with their authority reference and, if warranted, an explicitly
   derived label. Do not guess an unidentified person.
6. Count unique catalogue IDs as records. Identify letters, cards and fragments
   from their descriptions without calling every record a complete letter.
   Absence from this small selection is not evidence of historical absence.

These are explicit task policies for a rehearsal, awaiting independent domain
review before comparative study use. They do not establish new SZD editorial
conventions or historical truth.
