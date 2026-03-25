---
type: use-case
created: 2024-10-01
updated: 2026-01-09
tags: [promptotyping, digital-humanities, digital-edition, original]
status: complete
project: DEPCHA Aldersbach Dashboard
repository: https://github.com/chpollin/depcha-aldersbach
demo: https://chpollin.github.io/depcha-aldersbach
---

# DEPCHA Aldersbach - Monastery Financial Dashboard

## Summary

Das DEPCHA Aldersbach Dashboard ist ein interaktives Web-Interface zur Exploration historischer Finanztransaktionen der Zisterzienserabtei Aldersbach aus dem Jahr 1557. Entwickelt in etwa drei Stunden mittels Promptotyping mit Claude Opus 4.1, demonstriert das Projekt das Mapping von TEI-XML-encodierten Rechnungsbüchern auf forschungszentrierte Visualisierungen.

Das Dashboard verarbeitet über 1000 Transaktionen aus mehreren RDF/XML-Dateien nach dem DEPCHA-Datenmodell (Bookkeeping Ontology) und ermöglicht Einblicke in klösterliche Wirtschaftsstrukturen. Die Entwicklung zeigt exemplarisch, wie strukturierte Forschungsdaten aus digitalen Editionen durch Context Engineering in funktionale Prototypen überführt werden können.

## Context

**Datengrundlage:** TEI-XML-encodierte Rechnungsbücher nach DEPCHA-Standard. Bookkeeping Ontology als semantisches Modell für historische Transaktionen. RDF/XML als Austauschformat (2.3MB primärer Datensatz). Umfang: 1000+ Transaktionen, Sammlungen L341-L346, Jahr 1557.

**Historischer Kontext:** Zisterzienserabtei Aldersbach, Niederbayern. Klösterliche Finanzverwaltung im 16. Jahrhundert. Multi-Währungssystem: Florin (f), Schilling (s), Denarius (d), Groschen (gr). Getreidehandel als Haupteinnahmequelle. Mittelhochdeutsche Transaktionsbeschreibungen.

**Entwicklungskontext:** Entwicklungszeit etwa 3 Stunden (Vortrag Leipzig 2025) bzw. 8 Stunden (GitHub Commits, inklusive Iterationen). Model: Claude Opus 4.1 und 4.0. Methode: Promptotyping mit TEI-Files im Kontext. Static Site, Frontend-only Architektur mit Vanilla JavaScript.

## LLMs und Tools

- Claude Opus 4.0 (Claude Chat) für Konzeption und Datenmodellierung
- Claude Opus 4.0 für Implementation

## Notizen zum Prozess

- Entwicklung vor 2 Monaten (basierend auf GitHub Commits)
- Umfassende Dokumentationsstruktur mit mehreren spezialisierten Markdown-Dokumenten
- Iterative Fehlerkorrektur dokumentiert in FIXES.md
- Test-driven Development mit dedicated testing-strategy.md
- User Stories für Anforderungsanalyse verwendet
- Mehrere HTML-Versionen (simple_test.html, working_version.html) zeigen iterativen Entwicklungsprozess
- JavaScript-Fehler systematisch behoben (siehe Commit "fix: resolve critical JavaScript errors")
- Performance-Optimierung für große Datensätze mit Pagination (50 Transaktionen pro Seite)
- Historische Währungskonversion mit approximativen Raten implementiert

## Key Features

**Visualisierungen:** Dashboard mit Multiple Views für Transaktionsliste, zeitliche Verteilung, Kategorisierung (Einnahmen/Ausgaben), Währungsstatistiken, Personen- und Ortsextraktion. Filterung nach Datum, Kategorie, Währung, Personen, Orten. Historisch akkurate Währungskonversion zwischen vier Einheiten. Export-Funktionen für weitere Analysen.

**Technische Architektur:** Frontend-only mit Vanilla JavaScript (keine Framework-Dependencies). Client-side RDF/XML Parsing. Responsive Design mit historisch inspirierter Ästhetik. Pagination für große Datensätze (50 Transaktionen pro Seite). GitHub Pages Deployment (zero infrastructure).

**Datenverarbeitung:** Extraktion von Entitäten aus mittelhochdeutschen Beschreibungen. Mapping von Bookkeeping Ontology auf Visualisierungsschichten. Währungskonversion mit approximativen historischen Raten. Kategorisierung nach Einnahme-/Ausgabekategorien.

## Promptotyping Workflow

**Phase 1: Preparation.** TEI-XML-Files der Aldersbach Rechnungsbücher als Ausgangspunkt. DEPCHA-Datenmodell und Bookkeeping Ontology Dokumentation. Domänenwissen zur klösterlichen Finanzverwaltung. Implizites Wissen über historische Währungssysteme explizit gemacht.

**Phase 2: Exploration.** LLM exploriert mögliche Visualisierungen für Transaktionsdaten. Iteration über verschiedene Darstellungsformen (Tabellen, Charts, Zeitreihen, Kategorien). Entscheidung für Dashboard mit Multiple Views statt monolithischer Darstellung. Experimente mit Entitätsextraktion aus mittelhochdeutschen Texten.

**Phase 3: Destillation.** Destillation in strukturierte Markdown-Dokumente: data.md (RDF/XML Schema-Dokumentation), architecture.md (System-Architektur), technical-specifications.md (Implementierungsdetails), user-stories.md (Anforderungen aus Historikerperspektive), testing-strategy.md (Validierungsansatz).

**Phase 4: Implementation.** Iterative Entwicklung mit Claude Opus 4.0/4.1. Mehrere HTML-Versionen (simple_test.html, working_version.html) zeigen iterativen Prozess. JavaScript-Fehler systematisch behoben (dokumentiert in FIXES.md). Performance-Optimierung für 1000+ Transaktionen. GitHub Commits dokumentieren Entwicklungsschritte.

## Promptotyping Documents

Die Projektdokumentation folgt dem Prinzip: Documents as Source of Truth, Code as Disposable Artifact.

- **data.md** (K) — RDF/XML Schema-Dokumentation, Bookkeeping Ontology Mapping, Beispieldaten
- **architecture.md** (K/A) — System-Architektur, Frontend-only Begründung, Datenfluss
- **technical-specifications.md** (A) — Währungskonversionslogik, Entitätsextraktions-Algorithmen, Performance-Constraints
- **user-stories.md** (K) — Anforderungen aus Historiker:innen-Perspektive, Scholar-Centred Design Requirements
- **testing-strategy.md** (A) — Test-Ansatz, Edge Cases, historische Akkuratheit
- **FIXES.md** (P) — Bugfixes, Dead Ends, Learnings, iterative Problemlösung
- **README.md** (K) — Projektdokumentation mit Setup, Usage, Data Model

## Use Case Type

Data exploration (TEI-encoded financial data → interactive dashboard)

## Lessons Learned

**Vibe Coding in der Praxis.** Der Entwicklungsprozess folgte dem Muster: Einfache Instruktion ("Create a dashboard showing all transactions"), iteratives Verfeinern ("Add filtering by date", "Show totals per account", "Fix the sorting"), kein manuelles Code-Editing. Der Sweet Spot von Vibe Coding: Schnelle Exploration, funktionale Prototypen, aber mit klarem Bewusstsein für die Grenzen.

**Limitation der Methode.** Der Code ist nicht produktionsreif. Keine umfassenden Tests, minimales Error Handling, keine Dokumentation im Code selbst. Für einen Forschungsprototyp akzeptabel, für ein Produktionssystem nicht. Die Frage "Wie geht man von Promptotyping-Prototypen zu nachhaltiger Forschungssoftware?" bleibt offen.

**TEI als Enabler.** Die strukturierte TEI-Encodierung und die semantische Klarheit der Bookkeeping Ontology ermöglichen effektives Mapping. Das LLM "versteht" die Datenstruktur durch die XML-Semantik. Bei unstrukturierten Quellen wäre derselbe Workflow deutlich schwieriger.

**Historische Währungen als Edge Case.** Die Währungskonversion erforderte domänenspezifisches Wissen. Das LLM schlug initial moderne Konversionsraten vor (falsch). Erst durch explizite historische Kontextualisierung im Prompt wurden akkurate approximative Raten generiert. Dies zeigt: Domänenexpertise ist für Validierung unverzichtbar.

**Mehrere Iterationen dokumentiert.** Die verschiedenen HTML-Versionen (simple_test.html, working_version.html) und FIXES.md zeigen: Promptotyping ist nicht "einmal Prompt, fertiges Tool". Es ist iterativ, mit Dead Ends und Korrekturen. Die Dokumentation dieser Iteration ist methodisch wertvoll.

## Comparison: CorrespExplorer vs. Aldersbach

Beide Projekte nutzen Promptotyping, aber mit unterschiedlichen Komplexitäten:

**CorrespExplorer:** CMIF als standardisiertes, weit verbreitetes Format. 12 Visualisierungsansichten. 2 Nachmittage plus Zugfahrt Entwicklungszeit. Claude Opus 4.5 (neueres Modell). Umfangreichere Dokumentation (74+ Tests, 37 User Stories).

**DEPCHA Aldersbach:** TEI nach DEPCHA-Standard, weniger standardisiert. Dashboard mit weniger Views. 3-8 Stunden Entwicklungszeit. Claude Opus 4.0/4.1 (ältere Modelle). Kompaktere Dokumentation, aber mit FIXES.md für Iterationen.

Die Gemeinsamkeit: Beide zeigen, dass FAIR-konforme, strukturierte Daten (CMIF als TEI, DEPCHA als TEI/RDF) die Grundlage für effektives Promptotyping sind. Die Qualität der Outputs korreliert mit der Qualität der Datenmodellierung.

## Related

- [[Promptotyping]] - Methodische Grundlage
- [[corresp-explorer]] - Vergleichbare Case Study (CMIF-Visualisierung)
- [[DEPCHA - Digital Edition Publishing Cooperative for Historical Accounts]] - Dissertationsprojekt und Datenmodell
- [[Bookkeeping Ontology]] - Semantisches Modell für historische Transaktionen
- [[TEI XML]] - Encodierungsstandard für digitale Editionen
- [[Vibe Coding]] - Unstrukturierte Form des Promptotyping
- [[Context Engineering]] - Strategien zur Kontextgestaltung
- [[Pollin 2025 - Modelling, Operationalising and Exploring Historical Information]] - Dissertation als theoretischer Rahmen

## Sources

- DEPCHA Aldersbach. GitHub Repository: https://github.com/chpollin/depcha-aldersbach
- DEPCHA Aldersbach. Live Demo: https://chpollin.github.io/depcha-aldersbach
- Pollin, Christopher (2025). Modelling, Operationalising and Exploring Historical Information. Dissertation. https://resolver.obvsg.at/urn:nbn:at:at-ubg:1-220602
- Pollin, Christopher (2025). "Whaat!? Ihr vibe-coded eure Forschungstools nicht?". GlobeColloquium Leipzig, 02.12.2025.
- DEPCHA Project: https://gams.uni-graz.at/depcha