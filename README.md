# Interactive Paper: Promptotyping in den Digital Humanities

## Projektübersicht

Eine interaktive Single-Page-Anwendung, die das wissenschaftliche Paper "Promptotyping: Ein Praxisbericht zur strukturierten LLM-assistierten Entwicklung in den Digital Humanities" als lebendiges, exploratives Narrativ präsentiert.

## Zielgruppe

- **Digital Humanities-Forschende** ohne oder mit geringen Programmierkenntnissen
- **Softwareentwickler:innen** interessiert an LLM-assistierter Entwicklung
- **Wissenschaftler:innen** und **Studierende** aus Geschichts-, Literatur- und Kulturwissenschaften
- **Workshop-Teilnehmer:innen** die Promptotyping erlernen möchten

## Hauptziel

Das interaktive Paper soll die abstrakte Promptotyping-Methode durch direkte Exploration der sieben Use Cases erfahrbar machen. Leser:innen können selbst nachvollziehen, wie strukturierte LLM-Entwicklung funktioniert, indem sie mit den realen Projekten interagieren.

## Kernfunktionalitäten (User Stories)

### Als Leser:in möchte ich...

1. **Das Paper als Narrativ erleben**
   - Den wissenschaftlichen Text in einer ansprechenden, scrollbaren Form lesen
   - Zwischen linearem Lesen und explorativer Navigation wechseln können
   - Den Fortschritt durch das Paper visuell wahrnehmen

2. **Die Use Cases explorieren**
   - Die sechs Use Cases (REALonline, Lucina Edition, CVMA, Kriminalmuseum, Aldersbach, Stefan Zweig) als interaktive Elemente im Textfluss erleben
   - Direkt im Paper mit den Live-Demos interagieren (embedded iframes oder Vorschauen)
   - Die Promptotyping-Dokumente (README, DATA.md, REQUIREMENTS.md etc.) zu jedem Projekt einsehen

3. **Die Promptotyping-Phasen verstehen**
   - Durch interaktive Visualisierungen die 6 Phasen (CONTEXT → DATA → EXPLORATION → REQUIREMENTS → IMPLEMENTATION → PROTOTYPE) nachvollziehen
   - Zu jedem Use Case sehen, welche Dokumente in welcher Phase entstanden
   - Die Entwicklungszeiten und Iterationen pro Projekt vergleichen

4. **Projektvergleiche durchführen**
   - Alle sieben Projekte nach verschiedenen Kriterien filtern (Zeitaufwand, Anzahl Dokumente, Komplexität)
   - Die Tabelle aus dem Paper interaktiv sortieren und explorieren
   - Muster zwischen erfolgreichen und problematischen Projekten erkennen

5. **Praktische Hilfsmittel nutzen**
   - Das Journal-Template (Anhang A) direkt herunterladen
   - Die Beispiel-Prompts (Anhang B) kopieren und für eigene Projekte verwenden
   - Checklisten und Best Practices als Referenz verwenden

## Technische Rahmenbedingungen

### Constraints
- **Browser-only**: Single Page Application ohne Backend
- **Keine Installation**: Direkt im Browser lauffähig
- **Performance**: Schnelle Ladezeiten auch bei vielen eingebetteten Demos
- **Responsive**: Optimiert für Desktop, Tablet und Mobile
- **Accessibility**: WCAG 2.1 AA-konform
- **Open Source**: Vollständig auf GitHub verfügbar

### Technologie-Stack (Empfehlung)
- Vanilla JavaScript oder leichtgewichtiges Framework (Vue.js, Svelte)
- Markdown-Parser für Paper-Content
- CSS Grid/Flexbox für responsives Layout
- LocalStorage für User-Präferenzen (z.B. Leseposition, Favoriten)
- Optional: Chart.js oder D3.js für Visualisierungen

## Fachliche Constraints

- **Wissenschaftliche Integrität**: Korrekte Darstellung der Methode und Use Cases
- **Nachvollziehbarkeit**: Alle Aussagen müssen auf das Paper oder die Use Cases zurückführbar sein
- **Zitationsstandards**: Korrekte Literaturangaben nach wissenschaftlichen Standards
- **Transparenz**: Links zu allen Original-Repositories und Demos

## Abgrenzung (Out of Scope)

- Keine Content-Management-Funktionalität (Paper-Content ist statisch)
- Keine User-Accounts oder Authentifizierung
- Keine kollaborativen Features (Kommentare, Annotationen durch andere)
- Keine automatische Generierung von Promptotyping-Dokumenten (rein informativ)

## Erfolgsmetriken

Das interaktive Paper ist erfolgreich, wenn:
- Leser:innen die Promptotyping-Methode nachvollziehen können ohne das PDF lesen zu müssen
- Die Use Cases als konkrete Anwendungsbeispiele verstanden werden
- Workshop-Teilnehmer:innen das Tool als Lernressource nutzen
- Die Dokumentation (Templates, Prompts) praktisch angewendet wird

## Glossar

| Begriff | Definition |
|---------|-----------|
| **Promptotyping** | Strukturierte Methode für LLM-assistierte Softwareentwicklung in 6 Phasen |
| **Use Case** | Konkretes Digital Humanities-Projekt, das mit Promptotyping entwickelt wurde |
| **Savepoint** | Validierter Meilenstein am Ende jeder Promptotyping-Phase |
| **LLM-as-Judge** | Validierungsmethode, bei der ein zweites LLM den generierten Code prüft |
| **Vibe Coding** | Intuitive Entwicklung mit LLMs ohne strukturierte Dokumentation (Gegenpol zu Promptotyping) |
| **Context Memory** | Externe Wissensbasis durch Markdown-Dokumente + Git-Commits |
| **Co-Intelligence** | Iterative Zusammenarbeit zwischen Mensch und KI (siehe CVMA SPARQL-Beispiel) |

## Repository-Struktur

```
interactive-paper/
├── README.md              # Diese Datei (CONTEXT)
├── DATA.md               # Datenstrukturen für Use Cases
├── REQUIREMENTS.md       # Funktionale Spezifikation
├── DESIGN.md            # UI/UX Design
├── INSTRUCTIONS.md      # Implementierungsplan
├── JOURNAL.md           # Entwicklungsprotokoll
├── paper-draft.md       # Wissenschaftlicher Content (Quelle)
├── use cases/           # Use Case Beschreibungen
│   ├── imareal-room-object.md
│   ├── diged-neolat.md
│   ├── km.md
│   ├── stained-glass.md
│   ├── aldersbach.md
│   └── szd.md
└── prototype/           # Finale Anwendung
    ├── index.html
    ├── styles.css
    └── app.js
```

## Nächste Schritte

1. ✅ CONTEXT-Phase abgeschlossen (README.md)
2. 🔄 DATA-Phase: Strukturierung der Use Case-Daten
3. ⏳ EXPLORATION: Technische Machbarkeit verschiedener Interaktionskonzepte
4. ⏳ REQUIREMENTS: Formale Anforderungsspezifikation
5. ⏳ DESIGN: UI/UX Konzept und Wireframes
6. ⏳ IMPLEMENTATION: Detaillierte Entwicklungsanweisungen
7. ⏳ PROTOTYPE: Code-Generierung

## Lizenz

Open Source (MIT License) - Alle Promptotyping-Dokumente und Code frei verwendbar.
