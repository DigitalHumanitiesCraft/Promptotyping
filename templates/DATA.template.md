# DATA STRUCTURES - [PROJECT_NAME]

## Core Data Models

### [MODEL_NAME_1]
```[LANGUAGE]
{
  "[FIELD_1]": "[TYPE]",           // [DESCRIPTION]
  "[FIELD_2]": "[TYPE]",           // [DESCRIPTION]
  "[FIELD_3]": "[TYPE]",           // [DESCRIPTION]
  "[FIELD_4]": "[TYPE]",           // [DESCRIPTION]
  "[FIELD_5]": "[TYPE]"            // [DESCRIPTION]
}
```

### [MODEL_NAME_2]
```[LANGUAGE]
{
  "[FIELD_1]": "[TYPE]",           // [DESCRIPTION]
  "[FIELD_2]": "[TYPE]",           // [DESCRIPTION]
  "[FIELD_3]": "[TYPE]",           // [DESCRIPTION]
  "[FIELD_4]": "[TYPE]"            // [DESCRIPTION]
}
```

### [MODEL_NAME_3]
```[LANGUAGE]
{
  "[FIELD_1]": "[TYPE]",
  "[FIELD_2]": "[TYPE]",
  "[FIELD_3]": ["[TYPE]"],
  "[FIELD_4]": {
    "[NESTED_FIELD_1]": "[TYPE]",
    "[NESTED_FIELD_2]": "[TYPE]"
  }
}
```

## Data Flow Examples

### [FLOW_NAME_1]
```
[STEP_1] → [STEP_2] → [STEP_3] → [STEP_4]
    ↑           ↑           ↑          ↑
    └───────────┴───────────┴──────────┘
            ([FLOW_DESCRIPTION])
```

### [FLOW_NAME_2]
```
1. [STEP_1_DESCRIPTION]
2. [STEP_2_DESCRIPTION]
3. [STEP_3_DESCRIPTION]
4. [STEP_4_DESCRIPTION]
5. [STEP_5_DESCRIPTION]
```

## Sample Data

### Example [MODEL_1]
```json
{
  "[FIELD_1]": "[SAMPLE_VALUE]",
  "[FIELD_2]": "[SAMPLE_VALUE]",
  "[FIELD_3]": "[SAMPLE_VALUE]",
  "[FIELD_4]": [
    "[ARRAY_VALUE_1]",
    "[ARRAY_VALUE_2]"
  ],
  "[FIELD_5]": {
    "[KEY]": "[VALUE]"
  }
}
```

### Example [MODEL_2]
```json
{
  "[FIELD_1]": "[SAMPLE_VALUE]",
  "[FIELD_2]": "[SAMPLE_VALUE]",
  "[FIELD_3]": "[SAMPLE_VALUE]"
}
```

## Data Transformations

### [TRANSFORMATION_NAME_1]
```
Input: [INPUT_DESCRIPTION]
Process:
1. [PROCESS_STEP_1]
2. [PROCESS_STEP_2]
3. [PROCESS_STEP_3]
4. [PROCESS_STEP_4]
Output: [OUTPUT_DESCRIPTION]
```

### [TRANSFORMATION_NAME_2]
```
Input: [INPUT_DESCRIPTION]
Process:
1. [PROCESS_STEP_1]
2. [PROCESS_STEP_2]
3. [PROCESS_STEP_3]
Output: [OUTPUT_DESCRIPTION]
```

## Data Vortex Prevention Points

### Critical Transformation Points
1. **[POINT_1]**: [DESCRIPTION]
2. **[POINT_2]**: [DESCRIPTION]
3. **[POINT_3]**: [DESCRIPTION]
4. **[POINT_4]**: [DESCRIPTION]

### Validation Data Points
- [VALIDATION_POINT_1]
- [VALIDATION_POINT_2]
- [VALIDATION_POINT_3]
- [VALIDATION_POINT_4]

## Token Efficiency Strategies

### Compression Techniques
1. **[TECHNIQUE_1]**: [DESCRIPTION]
2. **[TECHNIQUE_2]**: [DESCRIPTION]
3. **[TECHNIQUE_3]**: [DESCRIPTION]
4. **[TECHNIQUE_4]**: [DESCRIPTION]

### Token Budgets
- [DOCUMENT_1]: ~[NUMBER] tokens
- [DOCUMENT_2]: ~[NUMBER] tokens
- [DOCUMENT_3]: ~[NUMBER] tokens
- [DOCUMENT_4]: ~[NUMBER] tokens

## Error Recovery Data

### Savepoint Structure
```json
{
  "id": "[SAVEPOINT_ID]",
  "timestamp": "[ISO_TIMESTAMP]",
  "phase": "[PHASE_NAME]",
  "documents": ["[DOC_1]", "[DOC_2]"],
  "state": { /* [STATE_DESCRIPTION] */ },
  "reason": "[SAVEPOINT_REASON]"
}
```

### Rollback Procedure
1. [ROLLBACK_STEP_1]
2. [ROLLBACK_STEP_2]
3. [ROLLBACK_STEP_3]
4. [ROLLBACK_STEP_4]
5. [ROLLBACK_STEP_5]