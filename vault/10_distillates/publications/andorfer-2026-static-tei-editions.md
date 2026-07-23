---
type: distillate
source-type: publication
reference: andorfer-2026
topics: ["[[Concepts]]", "[[Limitations]]"]
status: grounded
checked:
  quote: 2026-07-23
  validation: 2026-07-23
created: 2026-07-23
updated: 2026-07-23
---

# Distillate: Digital editions as static websites (Andorfer 2026)

The project report presents the ACDH `dse-static-cookiecutter`, a static-site generator that renders TEI-XML editions to standalone HTML for low-maintenance, long-lived publication; it is the paper's evidence from within digital scholarly editing that the field independently converges on the self-contained static artefact, and it supplies the scale reference for the client-side data-volume bound.

## Core statements

- The report defines a static website as one whose contents already exist as standalone HTML files, so that no page is recomputed on each request and neither a database nor server-side page code is required. ^s1
  > "›Statisch‹ – im Gegensatz zu ›dynamisch‹ – bezieht sich hier auf ein bestimmtes Konzept von Webseiten, nämlich solche, deren Inhalte bereits als eigenständige (statische) HTML-Dateien vorliegen." (andorfer-2026, § 5)
- The core of the tool's source code is XSLT files that transform the edition's TEI-XML documents into HTML. ^s2
  > "Den eigentlichen Kern des Quellcodes bilden XSLT-Dateien, welche die TEI-XML-Dokumente der Edition nach HTML transformieren." (andorfer-2026, § 12)
- Where its alternatives lean heavily on JavaScript, the tool deliberately builds on XSLT transformations to generate the HTML pages, a choice made to keep the barrier to entry low. ^s3
  > "Während die bereits erwähnten Alternativen zum dse-static-cookiecutter sehr stark auf JavaScript setzen, baut der dse-static-cookiecutter primär auf XSLT-Transformationen zur Generierung der HTML-Seiten." (andorfer-2026, § 34)
- The report ties longevity to the institutional context rather than to any single technology or person, an edition staying online as long as its publishing institution is not structurally changed or dissolved. ^s4
  > "so lange online bleiben kann, wie der institutionelle Kontext, in dem die Edition publiziert wurde, nicht strukturell geändert oder aufgelöst wird." (andorfer-2026, § 2)
- The largest named example, the Schnitzler diary edition, comprises over 16,000 edition units, each unit corresponding to a single TEI-XML file. ^s5
  > "Hier sei auf das umfangreiche Projekt Schnitzler-Tagebuch verwiesen, welches über 16.000 Editionseinheiten umfasst, wobei jede Einheit einem Tagebucheintrag bzw. einer einzelnen TEI-XML-Datei entspricht." (andorfer-2026, § 21)
- At that scale the denormalised serialisation, at 25 MB, raises no difficulty either in processing on an ordinary machine or in storage on GitHub within its 100 MB file limit. ^s6
  > "ist 25 MB groß. Schwierigkeiten gibt es hier weder beim Prozessieren auf einem gängigen Rechner noch beim Speichern der Dateien auf GitHub (mit einem Limit von 100 MB Dateigröße)." (andorfer-2026, § 21)

## Terms

- **static (website)**: contents already present as standalone HTML files, needing no server-side execution or database. [[10_distillates/publications/andorfer-2026-static-tei-editions#^s1]]

## Open questions

- The 25 MB figure is the serialisation of the denormalised person register, not the whole edition's source XML; the report reports no measured client-side rendering ceiling, so the number bounds storage and build, not browser memory at runtime.

## Related

- [[20_claims/digital-editing-converges-on-static-self-contained-artefact]]
- [[20_claims/static-client-side-editions-reach-tens-of-thousands-of-units]]
