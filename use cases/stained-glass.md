# Use Case: CVMA Stained Glass Annotation Tool

## Kontext
Wissenschaftliches Annotations-Tool für mittelalterliche Glasfenster-Artefakte aus dem Corpus Vitrearum Medii Aevi (CVMA). Integration der hochqualitativen Datenmodellierung aus dem NFDI4Culture Knowledge Graph ermöglicht nahtlose Transformation in eine benutzerfreundliche Forschungsanwendung. Multi-Kriterien-Filterung nach Periode, geographischer Lage, ikonographischen Subjekten und Elementtypen. Sechs Annotationskategorien mit Export/Import-Funktionalität für wissenschaftliche Auswertungen. SPARQL-basierter Datenexport aus dem Knowledge Graph mit iterativer Query-Optimierung demonstriert Co-Intelligence zwischen Mensch und KI. Python-basierte Datenverarbeitung von JSON-LD Strukturen (29MB CVMA Datensatz) für optimale Performance.

- **Stand:** 2. Promptotyping Iteration
- **Zeitinvestition (geschätzt):** 8 h
- **Umfang:** CVMA JSON-LD Datensatz mit Glasfenster-Metadaten
- **Repository:** [github.com/chpollin/stained-glass-metadata-annotation-tool](https://github.com/chpollin/stained-glass-metadata-annotation-tool)
- **Demo:** [chpollin.github.io/stained-glass-metadata-annotation-tool/docs/version-2](https://chpollin.github.io/stained-glass-metadata-annotation-tool/docs/version-2/)
- **Slides:** [Google Presentation](https://docs.google.com/presentation/d/1wjVx-yLqZXBjw1me-Ap1q6agE_Vj0Te_5CFN3PmW0kk/edit?usp=sharing)

## LLMs und Tools

- Claude Opus 4.1 (Claude Chat) für SPARQL-Query-Entwicklung
- Claude Opus 4.1 (Claude Code) für Implementation und Datenverarbeitung

## Notizen zum Prozess

- Zwei Promptotyping-Iterationen (version-1 und version-2)
- Claude Opus 4.1 performte exzellent mit SPARQL-Queries
- Iterative Query-Verfeinerung basierend auf Claude's Output (Beispiel für Ethan Mollick's Co-Intelligence Konzept)
- Nahtlose Transition von Original-Datenquellen (CVMA und NFDI4Culture Knowledge Graph) zur Demo-Applikation
- Hochqualitative Datenmodellierung und -bereitstellung ermöglichte effiziente Entwicklung
- Python-Scripts für Verarbeitung der umfangreichen JSON-LD Datenstrukturen
- Knowledge Folder für strukturierte Dokumentation angelegt
- Git-basiertes Versioning mit Co-Authorship durch Claude Code

## Promptotyping Documents

- **DATA.md** - Umfassende CVMA JSON-LD Datenstruktur-Dokumentation
- **DESIGN.md** - UX/UI Spezifikation für Annotations-Interface
- **IMPLEMENTATION.md** - Technische Implementierungs-Details
- **REQUIREMENTS.md** - Anforderungs-Spezifikation für Annotations-Tool
- **README.md** - Projektdokumentation