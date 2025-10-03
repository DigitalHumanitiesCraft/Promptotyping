# DATA.md - Datenstrukturen

## Übersicht

Alle Daten stammen aus Markdown-Dateien ([paper-draft.md](paper-draft.md), [use cases/*.md](use cases/)) und werden als JSON-Objekte strukturiert.

---

## 1. Paper Content

**Quelle**: [paper-draft.md](paper-draft.md)

**Struktur**: Hierarchische Sektionen mit IDs, Titeln und Markdown-Content.

```typescript
interface PaperSection {
  id: string;                    // "abstract", "1-einleitung", "2-1-praxis"
  title: string;                 // "1. Einleitung"
  level: number;                 // 1 (##), 2 (###)
  content: string;               // Markdown-Text
  subsections?: PaperSection[];
}
```

**Hauptsektionen**:
- `abstract`, `1-einleitung`, `2-entwicklung`, `3-methode`, `4-fallstudie`, `5-workshops`, `6-diskussion`, `7-verwandte-arbeiten`, `8-fazit`, `literatur`, `anhang-a`, `anhang-b`, `anhang-c`

---

## 2. Use Cases

**Quelle**: [use cases/*.md](use cases/)

**Struktur**: 6 Use Cases mit Metadaten, Prozessnotizen und Promptotyping-Dokumenten.

```typescript
interface UseCase {
  id: string;                    // "szd", "realonline", "km", "lucina", "cvma", "aldersbach"
  title: string;
  context: string;               // Projektbeschreibung (1-2 Sätze)
  iteration: number;             // 1-5
  timeInvestment: number;        // Stunden: 2, 5, 8, 10, 25
  documentCount: number;         // 0-11
  scope?: string;                // Optional: "128 Gedichte", "3.892 Objekte"
  repository: string;            // GitHub URL
  demo: string | string[];       // Demo URL(s)
  video?: string;                // Optional: YouTube URL
  blog?: string;                 // Optional: Blog URL
  slides?: string;               // Optional: Slides URL
  llms: string[];                // ["Claude Opus 4.1", "Gemini 2.5 Pro", ...]
  tools: string[];               // ["Claude Code", "Oxygen Editor", ...]
  category: "experimental" | "minimal" | "optimal" | "complex";
  tags: string[];                // ["TEI", "Timeline", "SPARQL", ...]
  documents: PromptotypingDocument[];
  processNotes: string[];        // Wichtige Erkenntnisse
}

interface PromptotypingDocument {
  type: "README" | "DATA" | "REQUIREMENTS" | "DESIGN" | "INSTRUCTIONS" | "JOURNAL" | "OTHER";
  filename: string;
  phase: "CONTEXT" | "DATA" | "REQUIREMENTS" | "IMPLEMENTATION" | "PROTOTYPE";
  description: string;
}
```

### Beispiel: REALonline Use Case

```json
{
  "id": "realonline",
  "title": "REALonline Rauminventar-Analyse Dashboard",
  "context": "Mittelalterliche Rauminventare aus der REALonline-Datenbank für Sachkulturforscher explorierbar machen.",
  "iteration": 1,
  "timeInvestment": 5,
  "documentCount": 6,
  "scope": "Österreichische und norditalienische Adelshaushalte, Spätmittelalter",
  "repository": "https://github.com/chpollin/imareal-room-object",
  "demo": "https://chpollin.github.io/imareal-room-object/",
  "llms": ["Claude Opus 4.1", "Claude Sonnet 4.5"],
  "tools": ["Claude Desktop", "Claude Code"],
  "category": "optimal",
  "tags": ["Treemap", "Visualisierung", "Neo4j"],
  "documents": [
    {"type": "DATA", "filename": "DATA.md", "phase": "DATA", "description": "Datenstruktur-Dokumentation"},
    {"type": "DESIGN", "filename": "DESIGN.md", "phase": "IMPLEMENTATION", "description": "UX/UI Spezifikation"},
    {"type": "INSTRUCTIONS", "filename": "INSTRUCTIONS.md", "phase": "IMPLEMENTATION", "description": "Implementierungsanweisungen"},
    {"type": "JOURNAL", "filename": "JOURNAL.md", "phase": "PROTOTYPE", "description": "Entwicklungsprotokoll"},
    {"type": "REQUIREMENTS", "filename": "REQUIREMENTS.md", "phase": "REQUIREMENTS", "description": "Anforderungen"},
    {"type": "OTHER", "filename": "DATA-CONTEXT.md", "phase": "CONTEXT", "description": "Historischer Kontext"}
  ],
  "processNotes": [
    "JOURNAL.md erstmals als aktives Dokument eingesetzt",
    "Visuelle Rückkopplung durch Screenshots",
    "GitHub Commits als Savepoints"
  ]
}
```

### Kategorisierung

| Kategorie | Dokumente | Projekte | Erkenntnis |
|-----------|-----------|----------|------------|
| **Experimental** | 0 | SZD | Vibe Coding – schwer wartbar |
| **Minimal** | 3 | KM | Minimaldokumentation problematisch |
| **Optimal** | 5-7 | REALonline, CVMA, Aldersbach | Beste Balance |
| **Complex** | 11+ | Lucina | Navigation wird komplex |

---

## 3. Projektvergleich

**Aggregierte Daten** für Tabelle (Sektion 2.1 im Paper):

```typescript
interface ProjectComparison {
  name: string;
  time: number;              // Stunden
  documents: number;
  category: "experimental" | "minimal" | "optimal" | "complex";
  result: string;            // Kurzbeschreibung
  demoUrl: string | string[];
}
```

**Beispiel**:

| Name | Zeit | Docs | Kategorie | Ergebnis | Demo |
|------|------|------|-----------|----------|------|
| Stefan Zweig Digital | 2h | 0 | Experimental | Timeline-Tool | [Link](https://dhcraft.org/excellence/promptotyping/szd-annotation-timeline/) |
| REALonline | 5h | 6 | Optimal | Treemap-Visualisierung | [Link](https://chpollin.github.io/imareal-room-object/) |
| Lucina Edition | 25h | 11+ | Complex | TEI-Edition (5 Versionen) | [Link](https://chpollin.github.io/diged-neolat/) |

---

## 4. Promptotyping Phasen

**Referenzdaten** für Phasen-Übersicht (Sektion 3.1 im Paper):

```typescript
interface Phase {
  id: string;
  name: string;
  order: number;
  description: string;
  output: string;           // Hauptdokument
  icon: string;             // Emoji
  color: string;            // Hex-Code
  isOptional: boolean;
}
```

**Daten**:

```json
[
  {
    "id": "context",
    "name": "CONTEXT",
    "order": 1,
    "description": "Erfasst Projektziele, Zielgruppe und Rahmenbedingungen",
    "output": "README.md",
    "icon": "📋",
    "color": "#3b82f6",
    "isOptional": false
  },
  {
    "id": "data",
    "name": "DATA",
    "order": 2,
    "description": "Spezifiziert Datenstrukturen und Beziehungen",
    "output": "DATA.md",
    "icon": "📊",
    "color": "#8b5cf6",
    "isOptional": false
  },
  {
    "id": "exploration",
    "name": "EXPLORATION",
    "order": 3,
    "description": "Experimentelle Phase zur technischen Klärung",
    "output": "exploration/*",
    "icon": "🔬",
    "color": "#ec4899",
    "isOptional": true
  },
  {
    "id": "requirements",
    "name": "REQUIREMENTS",
    "order": 4,
    "description": "Formalisiert funktionale/nicht-funktionale Anforderungen",
    "output": "REQUIREMENTS.md",
    "icon": "✅",
    "color": "#10b981",
    "isOptional": false
  },
  {
    "id": "implementation",
    "name": "IMPLEMENTATION",
    "order": 5,
    "description": "Detaillierte Anweisungen und Designspezifikationen",
    "output": "INSTRUCTIONS.md + DESIGN.md",
    "icon": "🛠️",
    "color": "#f59e0b",
    "isOptional": false
  },
  {
    "id": "prototype",
    "name": "PROTOTYPE",
    "order": 6,
    "description": "Generiert finalen Code",
    "output": "Code",
    "icon": "🚀",
    "color": "#ef4444",
    "isOptional": false
  }
]
```

---

## 5. Templates & Prompts

### Journal Template (Anhang A)

**Quelle**: [paper-draft.md](paper-draft.md) Zeile 206-260

**Struktur**: Markdown-Datei mit Platzhaltern.

**Download-Datei**: `journal-template.md`

---

### Beispiel-Prompts (Anhang B)

**Quelle**: [paper-draft.md](paper-draft.md) Zeile 262-380

**Struktur**: 5 Prompts (für Phasen CONTEXT, DATA, REQUIREMENTS, IMPLEMENTATION, PROTOTYPE)

```typescript
interface ExamplePrompt {
  phase: "context" | "data" | "requirements" | "implementation" | "prototype";
  title: string;
  prompt: string;  // Vollständiger Prompt-Text
}
```

**Beispiel**:

```json
{
  "phase": "data",
  "title": "DATA-Phase Prompt",
  "prompt": "Analysiere die angehängte Datendatei/Struktur und erstelle eine DATA.md mit:\n\n1. Datenformat und Struktur (Schema)\n2. Identifizierte Datentypen pro Feld\n..."
}
```

---

## 6. Statistiken

**Aggregierte Metriken** (für Sektion 2.2 im Paper):

```json
{
  "totalProjects": 7,
  "totalTimeInvested": 68,
  "averageTime": 9.7,
  "totalIterations": 13,
  "optimalDocumentRange": [5, 7],
  "documentsByPhase": {
    "CONTEXT": 7,
    "DATA": 7,
    "REQUIREMENTS": 5,
    "IMPLEMENTATION": 7,
    "PROTOTYPE": 7,
    "OTHER": 8
  },
  "llmUsage": {
    "Claude Opus 4.0": 3,
    "Claude Opus 4.1": 4,
    "Claude Sonnet 4.5": 3,
    "Gemini 2.5 Pro": 1,
    "GPT-5": 1
  }
}
```

---

## 7. Literatur (Anhang)

**Quelle**: [paper-draft.md](paper-draft.md) Zeile 186-201

**Struktur**: Liste von Zitationen

```typescript
interface Citation {
  id: string;                // "boehm1988", "chen2021"
  authors: string;           // "Boehm, B."
  year: number;
  title: string;
  publication: string;
  url?: string;
}
```

---

## Edge Cases

| Edge Case | Beispiel | Handling |
|-----------|----------|----------|
| Mehrere Demo-URLs | Lucina (Edition 2-5) | Array: `["url1", "url2", ...]` |
| Keine Dokumente | SZD (0 Docs) | `documents: []` |
| Optionale Felder | Video (nur Lucina), Blog (nur SZD) | Felder optional mit `?` |
| Inkonsistente Docs | KM hat "CLAUDE-1.md" statt "README.md" | Type = "OTHER" |

---

## Zusammenfassung

**Daten-Quellen**:
- `paper-draft.md` → Paper-Sektionen, Anhänge, Literatur
- `use cases/*.md` → 6 Use Cases mit Metadaten

**Gesamt-Volumen**: ~40 KB (Markdown) → ~30 KB (JSON, minified)

**Parsing-Strategie**: Markdown → JSON zur Build-Zeit (nicht Laufzeit)
