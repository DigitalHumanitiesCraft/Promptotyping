---
type: use-case
created: 2026-01-09
tags: [promptotyping, use-case, digital-humanities, original]
status: complete
project: CorrespExplorer
repository: https://github.com/DigitalHumanitiesCraft/CorrespExplorer
demo: https://dhcraft.org/CorrespExplorer
---

# CorrespExplorer - CMIF Correspondence Metadata Visualization

## Summary

CorrespExplorer ist ein vollständiges Forschungstool für die interaktive Visualisierung von Korrespondenz-Metadaten im CMIF-Format (Correspondence Metadata Interchange Format). Das Tool wurde mittels Promptotyping in zwei Nachmittagen plus einer Zugfahrt entwickelt und demonstriert das Mapping von FAIR-konformen Forschungsdaten auf forschungszentrierte Interfaces.

Das Projekt basiert auf einem Fork eines früheren Brief-Projekts (HerData) und nutzt die standardisierte CMIF-XML-Struktur von correspSearch als Datengrundlage. Die Entwicklung erfolgte mit Claude Opus 4.5 in Claude Code und zeigt exemplarisch, wie strukturierte Forschungsdaten und Scholar-Centred Design Requirements durch Context Engineering in funktionale Prototypen überführt werden können.

## Key Characteristics

**Technischer Stack:** Static site mit JavaScript, keine Backend-Abhängigkeiten. CMIF-XML als Datenformat (TEI-basiert). Wikidata-Anreicherung für Geo-Koordinaten und zusätzliche Metadaten. 12 unterschiedliche Visualisierungsansichten (Map, Timeline, Network, Statistics, etc.). Multidimensionale Filterung über alle Dimensionen (Personen, Orte, Themen, Sprachen, Zeiträume).

**Funktionsumfang:** Drei Modi für Datenzugriff: CMIF-XML Upload (lokale Dateien), correspSearch API (direkte Abfrage des zentralen Registers), Testdaten (Hugo Schuchardt Archiv mit 11.576 Briefen, 846 Korrespondenten, 774 Orte, 1.622 Themen, 18 Sprachen, Zeitraum 1859-1927). CSV/JSON Export für Weiterverarbeitung. Responsive Design für Desktop und Mobile.

**Entwicklungskontext:** Entwicklungszeit etwa 2 Nachmittage plus Zugfahrt. Model: Claude Opus 4.5 via Claude Code. Methode: Promptotyping mit strukturierten Markdown-Dokumenten als Context. Ausgangspunkt: Fork eines existierenden Projekts (HerData).

## Data Foundation

CorrespExplorer nutzt CMIF (Correspondence Metadata Interchange Format), einen TEI-basierten Standard zur Beschreibung von Briefmetadaten. CMIF ist FAIR-konform: Findable durch correspSearch als zentrales Register, Accessible durch offene XML-Schnittstellen, Interoperable durch TEI-Basis, Reusable durch dokumentierte Semantik.

Die correspSearch-Infrastruktur (Dumont 2016, 2025) verknüpft verteilte Briefeditionen durch standardisierte Metadaten. Sie ermöglicht projektübergreifende Recherchen und Netzwerkanalysen. Diese Infrastruktur ist die epistemische Grundlage für Promptotyping: Ohne FAIR-Daten kein funktionierendes Mapping.

Die Testdaten stammen aus dem Hugo Schuchardt Archiv und umfassen einen Zeitraum von 68 Jahren mit multilingualen Korrespondenzen über 18 Sprachen. Diese Datenkomplexität testet die Robustheit der Visualisierungen: Zeitliche Spannweite, geografische Verteilung, sprachliche Diversität und thematische Heterogenität.

## Promptotyping Workflow

**Phase 1: Preparation.** Bestehende HerData-Codebase als Ausgangspunkt. CMIF-Spezifikation und correspSearch-Dokumentation. Testdaten des Hugo Schuchardt Archivs. Implizites Wissen über Briefforschung und Netzwerkanalyse explizit gemacht.

**Phase 2: Exploration.** LLM exploriert mögliche Visualisierungen für CMIF-Daten. Critical Expert evaluiert: Welche Views sind forschungsrelevant? Iteration über verschiedene Darstellungsformen (Map, Timeline, Network, Statistics). Entscheidung für 12 komplementäre Ansichten statt monolithischem Dashboard.

**Phase 3: Destillation.** Knowledge-CorrespExplorer/ Ordner mit destillierten Markdown-Dateien: CMIF-Data.md beschreibt Datenstruktur und Semantik. architecture.md dokumentiert technische Architektur. user-stories.md enthält 37 Features mit Akzeptanzkriterien. testing.md definiert 74+ Tests für Funktionalität und Edge Cases.

**Phase 4: Implementation.** Iterative Entwicklung in Claude Code. Feedback-Loops: Tests generieren, ausführen, Ergebnisse zurück ins Context Window. Git-Commits dokumentieren Progress (46 Entwicklungsphasen im JOURNAL.md). Wikidata-Anreicherung als exploratives Feature entstanden während Implementation.

## Documentation as Context Engineering

Die Projektdokumentation ist gleichzeitig Arbeitswerkzeug und Forschungsdokumentation. Sie folgt dem Prinzip: Documents as Source of Truth, Code as Disposable Artifact.

**architecture.md:** Beschreibung der technischen Architektur. Komponenten: Data Loader (CMIF Parser, correspSearch API, Wikidata Enrichment), View Layer (12 Visualisierungen), Filter Engine (multidimensionale Filterung), Export Module (CSV, JSON). Diese Architektur ist aus den Anforderungen emergiert, nicht vorher spezifiziert.

**user-stories.md:** 37 User Stories mit Akzeptanzkriterien. Beispiele: "As a researcher, I want to view the geographic distribution of correspondents on a map, so that I can identify spatial patterns in epistolary networks." "As a historian, I want to filter letters by time period and see changes in correspondence patterns, so that I can track the evolution of intellectual networks." Diese Stories sind Scholar-Centred Design Requirements, keine bloßen Feature-Listen.

**JOURNAL.md:** 46 dokumentierte Entwicklungsphasen. Erfolgreiche Implementierungen, Dead Ends (z.B. "Versuch, alle 11k Briefe gleichzeitig auf der Karte zu rendern → Browser crash"), Entscheidungen (z.B. "Clustering für Karte statt einzelner Marker"), Learnings (z.B. "Wikidata API hat Rate Limits, Caching notwendig").

**testing.md:** 74+ Tests. Funktionalität (Data Loading, Filtering, Visualization Rendering), Edge Cases (Empty datasets, malformed XML, missing coordinates), Performance (Large datasets, concurrent filters, export of 10k+ records), Browser Compatibility (Chrome, Firefox, Safari, Edge).

Diese Dokumentation ermöglicht Rekonstruktion: Wenn der Code verloren geht, kann aus den Dokumenten ein funktional äquivalentes Tool regeneriert werden. Das ist nicht theoretisch, sondern praktisch: Die Dokumentation wurde mehrfach während der Entwicklung als Context für neue Implementierungsschritte genutzt.

## Lessons Learned

**FAIR-Daten als Promptotyping-Enabler.** Die Qualität der Outputs korreliert direkt mit der FAIR-Konformität der Daten. CMIF ist gut strukturiert, semantisch dokumentiert und maschinenlesbar. Das LLM "versteht" die Datenstruktur ohne aufwändige Erklärungen. Bei schlechter strukturierten Daten wäre derselbe Workflow deutlich schwieriger.

**Context Rot als praktisches Problem.** Bei etwa 50% Context Window Füllung sank die Modellperformance merklich. Lösung: Destillation der Dokumentation, Kompression von Beispieldaten, Removal irrelevanter Informationen aus früheren Iterationen. Die Hong et al. (2025) Befunde sind praktisch relevant, nicht nur theoretisch.

**Sycophancy in der Praxis.** Das Modell stimmte suboptimalen Design-Entscheidungen zu, wenn diese als Vorschlag formuliert wurden. Beispiel: "Sollen wir alle Briefe auf einmal laden?" → "Yes, that would work." (führte zu Performance-Problemen). Lösung: Explizite Aufforderung zur Kritik in Prompts. LLM Council für kritische Architekturentscheidungen (separates Modell reviewt Vorschläge).

**Iteration über Tests als Context-Feedback.** Tests generieren lassen, ausführen, Fehler zurück ins Context Window bringen war effizienter als manuelles Debugging. Das LLM "lernt" aus den Testergebnissen, welche Edge Cases existieren. Diese Feedback-Loop ist methodisch zentral für Promptotyping.

**Static Site als Sweet Spot.** Keine Backend-Komplexität, deployment via GitHub Pages trivial, kein Server-Maintenance. Für Prototypen ideal. Limitation: Keine Persistenz, keine Nutzer-Accounts, keine serverseitige Verarbeitung. Für viele DH-Tools ausreichend, für andere nicht.

## Limitations and Future Work

**Aktuelle Limitationen:** Keine Persistenz von Nutzer-Sessions. Export ist statisch, keine dynamische Aktualisierung bei Änderungen in correspSearch. Wikidata-Anreicherung ist optional und nicht für alle Entitäten verfügbar. Performance bei sehr großen Datasets (>50k Briefe) nicht getestet. Mobile UX suboptimal für komplexe Visualisierungen (Map, Network).

**Mögliche Erweiterungen:** Integration weiterer Briefregister (nicht nur correspSearch). Export als RDF für Linked Open Data Integration. Kollaborative Annotation von Briefen und Korrespondenten. Machine Learning für Themenextraktion aus Brief-Volltext (wenn verfügbar). Integration mit IIIF für Digitalisate (wo vorhanden).

**Methodische Reflexion:** CorrespExplorer ist ein Prototyp, kein Produktionssystem. Der Code ist nicht produktionsreif: keine umfassende Error Handling, keine Accessibility-Optimierung, keine Internationalisierung. Für Forschungsprototyping akzeptabel, für institutionelle Deployment nicht ausreichend. Die Frage ist: Wie geht man von Promptotyping-Prototypen zu nachhaltiger Forschungssoftware? Hier fehlen noch etablierte Workflows.

## Synthesis

CorrespExplorer demonstriert die Kernthese von Promptotyping: Wenn Forschungsdaten FAIR-konform sind und Forschungsanforderungen als Scholar-Centred Design Requirements dokumentiert sind, kann Context Engineering dieses Wissen in funktionale Prototypen überführen. Die Entwicklungszeit (Tage statt Monate) ermöglicht explorative Experimente, die sonst ökonomisch nicht realisierbar wären.

Die Rolle des Entwicklers verschiebt sich: Nicht Code schreiben, sondern Anforderungen formulieren, Datenstrukturen verstehen, Outputs validieren. Das erfordert Domänenexpertise (Briefforschung, Netzwerkanalyse), AI Literacy (Context Engineering, Sycophancy-Awareness) und methodisches Denken (Requirements Engineering, Testing).

CorrespExplorer ist auch ein Argument für Standardisierung. CMIF funktioniert als Datengrundlage, weil es TEI-basiert, semantisch klar und community-getragen ist. Proprietäre oder schlecht dokumentierte Formate wären deutlich schwieriger zu verarbeiten. FAIR-Daten sind nicht nur ein ethisches Prinzip, sondern eine technische Voraussetzung für LLM-gestützte Forschungswerkzeuge.

Die offene Frage bleibt: Ist das eine neue epistemische Praxis oder nur schnelleres Prototyping? Die Antwort liegt vermutlich dazwischen. Die Geschwindigkeit ermöglicht andere Forschungsfragen (explorative Visualisierungen als Hypothesengeneratoren statt konfirmatorische Tools). Aber die Qualität hängt weiterhin von menschlicher Expertise ab. Promptotyping amplifiziert Experten, ersetzt sie nicht.

## Promptotyping Documents (K/P/A Classification)

- knowledge.md (K) — CMIF data structure, TEI semantics, dataset descriptions
- user-stories.md (K) — 37 features with acceptance criteria
- architecture.md (K/A) — Technical architecture, emerged from requirements
- design.md (K/A) — Visualisation and interaction decisions
- implementation.md (A) — Build instructions
- JOURNAL.md (P) — 46 development phases, chronological
- testing.md (A) — 74+ tests across functionality, edge cases, performance

## Use Case Type

Data exploration (CMIF correspondence metadata → 12 coordinated visualisation views)

## Related

- [[Promptotyping]] - Methodische Grundlage
- [[Context Engineering]] - Strategien zur Kontextgestaltung
- [[Critical-Expert-in-the-Loop]] - Validierungsprinzip in der Praxis
- [[CMIF]] - Datenformat für Korrespondenz-Metadaten (wenn Dokument existiert)
- [[correspSearch]] - Infrastruktur für vernetzte Briefeditionen (wenn Dokument existiert)
- [[Scholar-Centered Design]] - Requirements Engineering für Forschungstools
- [[FAIR-Prinzipien]] - Datenqualität als Promptotyping-Voraussetzung
- [[Vibe Coding]] - Unstrukturierte Form des Promptotyping
- [[aldersbach]] - Vergleichbare Case Study (DEPCHA Dashboard)

## Sources

- CorrespExplorer. GitHub Repository: https://github.com/DigitalHumanitiesCraft/CorrespExplorer
- CorrespExplorer. Live Demo: https://dhcraft.org/CorrespExplorer
- Dumont, Stefan (2016). correspSearch – Connecting Scholarly Editions of Letters. Journal of the Text Encoding Initiative (10). https://doi.org/10.4000/jtei.1742
- Dumont, Stefan et al. (2025). correspSearch – Briefeditionen vernetzen (3.1.0). Berlin-Brandenburgische Akademie der Wissenschaften. https://correspSearch.net
- Hong, Kelly, Anton Troynikov, and Jeff Huber (2025). Context Rot: How Increasing Input Tokens Impacts LLM Performance. https://research.trychroma.com/context-rot
- Malmqvist, Lars (2024). Sycophancy in Large Language Models. arXiv:2411.15287v1. https://arxiv.org/abs/2411.15287v1
- Pollin, Christopher (2025). "Whaat!? Ihr vibe-coded eure Forschungstools nicht?". GlobeColloquium Leipzig, 02.12.2025.
