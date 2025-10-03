# Use Case: Aldersbach Monastery Financial Dashboard

## Kontext
Interaktives Web-Dashboard zur Exploration historischer Finanztransaktionen der Zisterzienserabtei Aldersbach aus dem Jahr 1557. Verarbeitung von RDF/XML-Dateien mit mittelalterlichen Finanzdaten ermöglicht Einblicke in klösterliche Wirtschaftsstrukturen. Multi-Währungssystem mit historisch akkurater Konversion zwischen Florin (f), Schilling (s), Denarius (d) und Groschen (gr). Extraktion von Personen und Orten aus mittelhochdeutschen Transaktionsbeschreibungen. Kategorisierung von Einnahmen und Ausgaben mit Fokus auf Getreidehandel als Haupteinnahmequelle. Frontend-only Architektur mit Vanilla JavaScript für maximale Kompatibilität. Responsive Design mit mittelalterlich inspirierter Visualisierung.

- **Stand:** 1. Promptotyping Iteration
- **Zeitinvestition (geschätzt):** 8 h
- **Umfang:** 1000+ Transaktionen, 2.3MB primärer Datensatz (o_depcha.aldersbach.1.xml), zusätzliche Sammlungen L341-L346
- **Repository:** [github.com/chpollin/depcha-aldersbach](https://github.com/chpollin/depcha-aldersbach)
- **Demo:** [chpollin.github.io/depcha-aldersbach](https://chpollin.github.io/depcha-aldersbach/)

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

## Promptotyping Documents

- **data.md** - RDF/XML Schema-Dokumentation für Finanztransaktionen
- **architecture.md** - System-Architektur und technische Entscheidungen
- **technical-specifications.md** - Detaillierte technische Spezifikationen
- **user-stories.md** - Anforderungen aus Nutzerperspektive
- **testing-strategy.md** - Test-Ansatz und Validierung
- **FIXES.md** - Dokumentation von Bugfixes und Lösungen
- **README.md** - Umfassende Projektdokumentation