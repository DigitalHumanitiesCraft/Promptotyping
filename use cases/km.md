# Use Case: Hans Gross Kriminalmuseum Digital Archive

## Kontext
Digitales Archiv der kriminalistischen Sammlung des Hans Gross Kriminalmuseums mit historischen Fallakten und Beweisobjekten aus der Frühzeit der wissenschaftlichen Kriminologie zugänglich machen. Duale Interface-Paradigmen für traditionelle Suche und räumliche Exploration von kriminalistischen Objekten. Canvas-basierte 2D-Visualisierung mit verschiedenen Layout-Algorithmen ermöglicht intuitive Navigation durch historische Kriminalfälle und forensische Artefakte. Kombiniert TEI-kodierte Fallkarten mit LIDO-kodierten Objektmetadaten. Spatial Search mit QuadTree-Optimierung für performante Exploration großer Sammlungen.

- **Stand:** 2. Promptotyping Iteration
- **Zeitinvestition (geschätzt):** 10 h
- **Umfang:** 3.892 Objekte (1.657 Karteikarten + 2.235 Objekte)
- **Repository:** [github.com/chpollin/km](https://github.com/chpollin/km)
- **Demo:**
    - [chpollin.github.io/km/index.html](https://chpollin.github.io/km/index.html)
    - [chpollin.github.io/km/collection-explorer.html](https://chpollin.github.io/km/collection-explorer.html)
## LLMs und Tools

- 1. Promptotyping Iteration: Claude Opus 4.0 (ohne Claude Code)
- 2. Promptotyping Iteration: Claude Sonnet 4.5 (Claude Code)
## Notizen zum Prozess

- Zwei separate Promptotyping-Iterationen im Abstand von 2 Monaten
	- Erste Iteration: 8 Stunden an einem Tag
	- Zweite Iteration: 2 Stunden hochfrequente Feinarbeit mit Claude Sonnet 4.5 (Claude Code)
- Die erste Iteration erfolgte vor zwei Monaten ohne Claude Code Tool und mit sehr experimentellen Prompts, um ganz andere Interfaces zu erzeugen. Das Ergebnis ist der Collection Explorer.
- Minimale Dokumentationsstruktur mit nur drei Promptotyping-Dokumenten (CLAUDE-1.md, DATA.md, DESIGN.md); mehr Vibe Coding als Prromptotyping
- Keine REQUIREMENTS.md oder INSTRUCTIONS.md angelegt, sondern nur mit Planning durch Claude gearbeitet.
## Promptotyping Documents

- **CLAUDE-1.md** - Doukmentation des Stadnes für das LLM
- **DATA.md** - Datenstruktur-Dokumentation
- **DESIGN.md** - UX/UI Spezifikation
- **README.md** - Projektdokumentation