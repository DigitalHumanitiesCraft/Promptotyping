## 2. Entwicklung des Ansatzes

### 2.1 Praktische Erfahrungen

Zwischen Oktober 2024 und Januar 2025 entwickelten wir iterativ die Promptotyping-Methode anhand von sieben Digital Humanities-Projekten.

<div class="use-case-placeholder" data-id="szd"></div>

**Stefan Zweig Digital** (2h) testete minimalen Ansatz ohne Dokumentation. Das Timeline-Tool für die digitale Nachlassrekonstruktion funktionierte initial, war aber nach zwei Wochen selbst für den Entwickler schwer nachvollziehbar. Dieses Experiment demonstrierte die Grenzen des reinen "Vibe Coding".

<div class="use-case-placeholder" data-id="realonline"></div>

**REALonline Rauminventare** (5h, 6 Dokumente) visualisierte mittelalterliche Objektverteilungen in österreichischen Adelshäusern von 1432 bis 1602. Die strukturierte Dokumentation ermöglichte erfolgreiche Iteration nach Expertenintervention. Der Historiker korrigierte unsere technischen Annahmen über Objekthierarchien und präferierte historische Begriffe statt moderner Kategorien.

<div class="use-case-placeholder" data-id="aldersbach"></div>

**Aldersbach Kloster** (8h, 7 Dokumente) integrierte heterogene Quelltypen in ein Annotationstool. Die systematische DATA-Phase half bei der Normalisierung inkonsistenter Datenformate aus verschiedenen Archivbeständen.

<div class="use-case-placeholder" data-id="cvma"></div>

**CVMA Glasfenster** (8h, 5 Dokumente) demonstrierte erfolgreiche Mensch-KI-Kollaboration beim Corpus Vitrearum Medii Aevi. SPARQL-Queries für den NFDI4Culture Knowledge Graph entstanden in drei Iterationsschleifen zwischen menschlicher Validierung und LLM-Optimierung.

<div class="use-case-placeholder" data-id="km"></div>

**Kriminalmuseum** (10h, 3 Dokumente) entwickelte ein digitales Archiv der Hans Gross Sammlung mit 3.892 Objekten. Mit nur DATA.md, DESIGN.md und README.md entstand zwar ein funktionales Dual-Interface, die fehlende IMPLEMENTATION.md erschwerte jedoch spätere Anpassungen.

<div class="use-case-placeholder" data-id="lucina"></div>

**Lucina Edition** (25h, 11+ Dokumente) entwickelte eine TEI-konforme digitale Edition des Madrid BN Mss. 6028. Fünf dokumentierte Iterationen führten von der Basis-Konversion bis zur vollständigen Edition mit Prosopographie.

### 2.2 Kernerkenntnisse aus der Projektpraxis

In unserer Erfahrung zeigten Projekte mit fünf bis sieben Dokumenten optimale Balance zwischen Struktur und Agilität. Unter fünf Dokumenten litt die Nachvollziehbarkeit (Stefan Zweig Digital, Kriminalmuseum), über zehn Dokumente erschwerten die Navigation (Lucina Edition). Die IMPLEMENTATION-Phase mit expliziter Dokumentation von Datentransformationen half, typische Fehlerquellen zu vermeiden.
