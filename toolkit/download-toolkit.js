// Toolkit Download Generator for Promptotyping v4.0
// Generates a downloadable ZIP with all templates

const toolkitFiles = {
  'JOURNAL.template.md': `# Promptotyping Journal: [PROJEKTNAME / PROJECT NAME]

**Ziel / Goal:** [Was wird gebaut / What is being built]  
**Ausgangslage / Starting Point:** [Vorhandene Dateien, Daten, Wissen / Existing files, data, knowledge]  
**Methodik / Methodology:** Promptotyping v4.0

---

## [Datum/Date] - Phase: [CONTEXT/DATA/EXPLORATION/REQUIREMENTS/IMPLEMENTATION/PROTOTYPE]

### Kontext / Context
[Beschreibung der Ausgangssituation und Zielsetzung / Description of initial situation and goals]

### Vorgehen / Approach
**Modell / Model:** [Verwendetes Modell und Begründung / Model used and rationale]  
**Input:** [Bereitgestellter Kontext/Dateien / Provided context/files]

**Prompt:**
\`\`\`
[Exakter verwendeter Prompt / Exact prompt used]
\`\`\`

### Ergebnis / Result
[Was wurde generiert, Qualitätsbewertung / What was generated, quality assessment]

### Validierung / Validation
- **Methode / Method:** [Tools, manuelle Prüfung, Cross-Model-Verifikation / Tools, manual review, cross-model verification]
- **Probleme / Issues:** [Halluzinationen, Fehler, Inkonsistenzen / Hallucinations, errors, inconsistencies]
- **Entscheidung / Decision:** [Was wurde behalten/geändert/verworfen / What was kept/changed/discarded]

### CEIL-Intervention
[Falls anwendbar: Wie hat der Critical Expert eingegriffen? / If applicable: How did the Critical Expert intervene?]

### Erkenntnisse / Insights
[Gewonnene Einsichten, Muster, Heuristiken / Gained insights, patterns, heuristics]

### 90-Prozent-Prinzip Tracking / 90-Percent Principle Tracking
**Aktuelle Abdeckung / Current Coverage:** [X]%
- LLM gut / LLM good: [Liste / List]
- Manuell / Manual: [Liste / List]

---

## Savepoint
- [ ] Phase abgeschlossen / Phase completed
- [ ] Dokumentation vollständig / Documentation complete
- [ ] CEIL-Review erfolgt / CEIL review done
- [ ] Bereit für nächste Phase / Ready for next phase
`,

  'README.template.md': `# [PROJECT NAME]

## Kontext / Context
[Projektbeschreibung / Project description]

## Ziele / Goals
1. [Ziel 1 / Goal 1]
2. [Ziel 2 / Goal 2]
3. [Ziel 3 / Goal 3]

## Domäne / Domain
[Fachbereich / Field of expertise]

## Constraints
- [Einschränkung 1 / Constraint 1]
- [Einschränkung 2 / Constraint 2]

## Erfolgsmetriken / Success Metrics
- [Metrik 1 / Metric 1]
- [Metrik 2 / Metric 2]

## Aktuelle Phase / Current Phase
**Phase:** [CONTEXT/DATA/EXPLORATION/REQUIREMENTS/IMPLEMENTATION/PROTOTYPE]
**Status:** [In Bearbeitung / In Progress]

## CEIL-Checkpoints
- [ ] Projektziele validiert / Project goals validated
- [ ] Domänenexperte eingebunden / Domain expert involved
- [ ] Komplexitätsreduktion geprüft / Complexity reduction checked
`,

  'DATA.template.md': `# Datenstrukturen / Data Structures

## Kern-Datenmodelle / Core Data Models

### [Model Name]
\`\`\`javascript
{
  "field1": "type",
  "field2": "type",
  "field3": "type"
}
\`\`\`

## Datenfluss / Data Flow
1. [Schritt 1 / Step 1]
2. [Schritt 2 / Step 2]
3. [Schritt 3 / Step 3]

## Transformationen / Transformations
- Input: [Beschreibung / Description]
- Process: [Beschreibung / Description]
- Output: [Beschreibung / Description]

## Validierungspunkte / Validation Points
- [ ] Datenintegrität / Data integrity
- [ ] Schema-Konsistenz / Schema consistency
- [ ] CEIL-Review
`,

  'REQUIREMENTS.template.md': `# Anforderungen / Requirements

## Funktionale Anforderungen / Functional Requirements

### Priorität 1 / Priority 1
- [ ] [Anforderung / Requirement]
- [ ] [Anforderung / Requirement]

### Priorität 2 / Priority 2
- [ ] [Anforderung / Requirement]
- [ ] [Anforderung / Requirement]

## Nicht-Funktionale Anforderungen / Non-Functional Requirements
- Performance: [Beschreibung / Description]
- Sicherheit / Security: [Beschreibung / Description]
- Benutzerfreundlichkeit / Usability: [Beschreibung / Description]

## Akzeptanzkriterien / Acceptance Criteria
1. [Kriterium / Criterion]
2. [Kriterium / Criterion]
3. [Kriterium / Criterion]

## CEIL-Validierung / CEIL Validation
- [ ] Anforderungen vollständig / Requirements complete
- [ ] Keine Überkomplexität / No over-engineering
- [ ] Domänenexpertise eingeflossen / Domain expertise incorporated
`,

  'INSTRUCTIONS.template.md': `# Implementierungsanweisungen / Implementation Instructions

## Technische Architektur / Technical Architecture
[Beschreibung / Description]

## Implementierungsschritte / Implementation Steps

### Schritt 1 / Step 1: [Name]
\`\`\`
[Code oder Anweisungen / Code or instructions]
\`\`\`

### Schritt 2 / Step 2: [Name]
\`\`\`
[Code oder Anweisungen / Code or instructions]
\`\`\`

## Validierungspunkte / Validation Points
- [ ] Code funktioniert / Code works
- [ ] Tests grün / Tests green
- [ ] CEIL-Review positiv / CEIL review positive

## 90-Prozent-Check
- LLM-generiert / LLM-generated: [%]
- Manuell nachgearbeitet / Manually refined: [%]
- Grenze erreicht bei / Limit reached at: [Beschreibung / Description]
`,

  'EXPLORATION.template.md': `# Exploration Phase

## Ziel / Goal
[Was wird exploriert? / What is being explored?]

## Getestete Ansätze / Tested Approaches

### Ansatz 1 / Approach 1
- **Was / What:** [Beschreibung / Description]
- **Ergebnis / Result:** [Beschreibung / Description]
- **Entscheidung / Decision:** [Verworfen/Beibehalten / Discarded/Kept]

### Ansatz 2 / Approach 2
- **Was / What:** [Beschreibung / Description]
- **Ergebnis / Result:** [Beschreibung / Description]
- **Entscheidung / Decision:** [Verworfen/Beibehalten / Discarded/Kept]

## Erkenntnisse / Findings
1. [Erkenntnis / Finding]
2. [Erkenntnis / Finding]

## CEIL-Intervention
[Wie hat der Experte die Exploration gelenkt? / How did the expert guide exploration?]

## Nächste Schritte / Next Steps
- [ ] [Aktion / Action]
- [ ] [Aktion / Action]
`
};

function downloadToolkit() {
  // Create a blob with all files
  let content = "PROMPTOTYPING TOOLKIT v4.0\n";
  content += "=========================\n\n";
  content += "This toolkit contains all templates for the Promptotyping methodology.\n";
  content += "Dieses Toolkit enthält alle Templates für die Promptotyping-Methodologie.\n\n";
  content += "Files included / Enthaltene Dateien:\n";
  content += "- JOURNAL.template.md (Bilingual)\n";
  content += "- README.template.md (Bilingual)\n";
  content += "- DATA.template.md (Bilingual)\n";
  content += "- REQUIREMENTS.template.md (Bilingual)\n";
  content += "- INSTRUCTIONS.template.md (Bilingual)\n";
  content += "- EXPLORATION.template.md (Bilingual)\n\n";
  content += "=" .repeat(80) + "\n\n";

  // Add each file
  for (const [filename, fileContent] of Object.entries(toolkitFiles)) {
    content += `\n${"=".repeat(80)}\n`;
    content += `FILE: ${filename}\n`;
    content += `${"=".repeat(80)}\n\n`;
    content += fileContent;
    content += "\n\n";
  }

  // Create and download the file
  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'promptotyping-toolkit-v4.0.md';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  window.URL.revokeObjectURL(url);
}

// Export for use in HTML
window.downloadToolkit = downloadToolkit;