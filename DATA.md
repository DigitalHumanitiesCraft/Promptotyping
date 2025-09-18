# DATA STRUCTURES - PROMPTOTYPING METHOD

## Core Data Models

### Phase
```javascript
{
  "id": "string",           // Unique identifier (e.g., "context", "data")
  "name": "string",          // Display name
  "description": "string",   // Purpose and goals
  "document": "string",      // Associated markdown file
  "status": "enum",          // pending | active | completed
  "actions": ["string"],     // List of required actions
  "outputs": ["string"],     // Expected deliverables
  "validation": ["string"]   // Validation criteria
}
```

### Document
```javascript
{
  "filename": "string",      // File name (e.g., "README.md")
  "phase": "string",         // Associated phase ID
  "version": "string",       // Semantic version
  "checksum": "string",      // Content hash for validation
  "created": "timestamp",    // Creation time
  "modified": "timestamp",   // Last modification
  "content": "string",       // Markdown content
  "tokens": "number"         // Estimated token count
}
```

### Validation Checkpoint
```javascript
{
  "id": "string",
  "phase": "string",
  "type": "enum",           // automatic | expert | peer
  "criteria": ["string"],
  "status": "enum",         // pending | passed | failed
  "feedback": "string",
  "timestamp": "timestamp"
}
```

### Project State
```javascript
{
  "name": "string",
  "currentPhase": "string",
  "phases": [Phase],
  "documents": [Document],
  "checkpoints": [ValidationCheckpoint],
  "metadata": {
    "created": "timestamp",
    "lastModified": "timestamp",
    "llmModel": "string",
    "tokenUsage": "number"
  }
}
```

## Data Flow Examples

### Phase Transition Flow
```
CONTEXT → DATA → EXPLORATION → REQUIREMENTS → IMPLEMENTATION → PROTOTYPE
   ↑         ↑         ↑            ↑              ↑              ↑
   └─────────┴─────────┴────────────┴──────────────┴──────────────┘
                        (Validation & Rollback)
```

### Document Creation Flow
```
1. Phase Active
2. Generate Content
3. Create Document
4. Calculate Tokens
5. Version & Hash
6. Store as Savepoint
```

### Validation Flow
```
1. Complete Phase Actions
2. Run Automatic Validations
3. Request Expert Review (if needed)
4. Document Feedback
5. Proceed or Rollback
```

## Sample Data

### Example Phase: CONTEXT
```json
{
  "id": "context",
  "name": "Context Definition",
  "description": "Establish project foundation and domain understanding",
  "document": "README.md",
  "status": "completed",
  "actions": [
    "Capture project goals",
    "Research domain",
    "Define constraints",
    "Compress for tokens"
  ],
  "outputs": [
    "README.md with comprehensive context"
  ],
  "validation": [
    "Context completeness check",
    "Expert domain review"
  ]
}
```

### Example Document: README.md
```json
{
  "filename": "README.md",
  "phase": "context",
  "version": "1.0.0",
  "checksum": "a3f5e8b2c1d4...",
  "created": "2024-01-15T10:00:00Z",
  "modified": "2024-01-15T11:30:00Z",
  "content": "# PROJECT CONTEXT\n\n## Goals\n...",
  "tokens": 450
}
```

### Example Validation Checkpoint
```json
{
  "id": "ctx-val-001",
  "phase": "context",
  "type": "expert",
  "criteria": [
    "Domain accuracy",
    "Goal clarity",
    "Constraint completeness"
  ],
  "status": "passed",
  "feedback": "Context well-defined. Minor suggestion: add performance constraints.",
  "timestamp": "2024-01-15T12:00:00Z"
}
```

## Data Transformations

### Markdown to Webpage
```
Input: Markdown documents
Process:
1. Parse markdown to AST
2. Extract sections and metadata
3. Generate HTML components
4. Apply styling and interactivity
5. Build navigation structure
Output: Interactive HTML webpage
```

### Phase Status Calculation
```
Input: Phase actions and validations
Process:
1. Check all actions completed
2. Run automatic validations
3. Verify expert signoff (if required)
4. Calculate completion percentage
Output: Phase status (pending/active/completed)
```

## Data Vortex Prevention Points

### Critical Transformation Points
1. **Markdown → HTML**: Preserve all semantic meaning
2. **Requirements → Implementation**: Maintain traceability
3. **Version Updates**: Keep rollback capability
4. **Token Compression**: Retain essential information

### Validation Data Points
- Before each phase transition
- After document modifications
- During expert reviews
- At implementation checkpoints

## Token Efficiency Strategies

### Compression Techniques
1. **Summarization**: Key points only
2. **Deduplication**: Remove redundancies
3. **Referencing**: Link instead of repeat
4. **Templating**: Reuse structures

### Token Budgets
- README.md: ~500 tokens
- DATA.md: ~800 tokens
- REQUIREMENTS.md: ~600 tokens
- INSTRUCTIONS.md: ~700 tokens
- Code files: Variable

## Error Recovery Data

### Savepoint Structure
```json
{
  "id": "savepoint-001",
  "timestamp": "2024-01-15T10:00:00Z",
  "phase": "context",
  "documents": ["README.md"],
  "state": { /* Complete project state */ },
  "reason": "Phase completion"
}
```

### Rollback Procedure
1. Identify target savepoint
2. Restore document versions
3. Reset project state
4. Log rollback reason
5. Resume from stable point