# PROMPTOTYPING METHOD DOCUMENTATION

## What is Promptotyping?

Promptotyping is an iterative software development methodology designed specifically for LLM-assisted development. It emphasizes token-efficient documentation, phased development, and continuous validation through versioned savepoints.

## Core Philosophy

**"Document → Explore → Implement → Validate"**

Promptotyping treats documentation as executable specifications, where each markdown document serves as both a development artifact and a checkpoint for LLM context.

## The Six Phases of Promptotyping

### Phase 1: CONTEXT (README.md)
**Purpose:** Establish project foundation and domain understanding

**Actions:**
- Capture project goals, constraints, and domain knowledge
- Compress information for token-efficient representation
- Validate context completeness
- Request expert validation for domain-specific elements

**Output:** README.md with comprehensive project context

### Phase 2: DATA (DATA.md)
**Purpose:** Define and document data structures and flows

**Actions:**
- Document all data structures with examples
- Map data transformations and flows
- Identify potential "data vortex" points (complex conversions)
- Create representative data samples

**Output:** DATA.md with complete data documentation

### Phase 3: EXPLORATION
**Purpose:** Investigate unknowns and validate assumptions

**Actions:**
- Generate analysis scripts for unclear requirements
- Build logging mechanisms for transparency
- Document discoveries and insights
- Iterate based on findings

**Output:** Exploration scripts and documented insights

### Phase 4: REQUIREMENTS (REQUIREMENTS.md)
**Purpose:** Formalize functional and non-functional requirements

**Actions:**
- Specify all requirements token-efficiently
- Prioritize core vs. optional features
- Validate testability and consistency
- Obtain expert validation

**Output:** REQUIREMENTS.md with prioritized requirements

### Phase 5: IMPLEMENTATION (INSTRUCTIONS.md)
**Purpose:** Define technical implementation path

**Actions:**
- Document technical steps and algorithms
- Define data transformation procedures
- Establish validation checkpoints
- Create error handling strategies

**Output:** INSTRUCTIONS.md with implementation roadmap

### Phase 6: PROTOTYPE (CODE)
**Purpose:** Generate working implementation

**Actions:**
- Implement based on documented specifications
- Validate against requirements
- Use documents as immutable references
- Iterate when issues arise

**Output:** Working code implementation

## Key Principles

### 1. Versioned Savepoints
Every markdown document represents a stable checkpoint that can be referenced or reverted to.

### 2. Token Efficiency
Maximize information density while maintaining clarity and completeness.

### 3. Expert-in-the-Loop
Actively request domain expert validation at critical decision points.

### 4. Self-Verification
Continuous validation of artifacts against documented specifications.

### 5. Context Awareness
Never lose sight of previous phases and their documentation.

### 6. Precision Over Completeness
When resources are limited, prioritize accuracy over exhaustive coverage.

## The Data Vortex Problem

A critical risk in LLM-assisted development occurs during data format conversions. The "data vortex" manifests when:
- Complex transformations lose information
- Format conversions introduce errors
- Data relationships become unclear

**Prevention:**
- Explicit logging at transformation points
- Validation checkpoints before and after conversions
- Clear documentation of data flows
- Representative examples for all transformations

## Interaction Protocol

### When Information is Incomplete:
- Ask targeted, specific questions
- Reference which phase needs clarification
- Suggest exploration strategies

### When Contradictions Arise:
- Explicitly identify conflicts
- Document contradictions
- Propose resolution paths
- Reference relevant savepoints

### When Complexity Overwhelms:
- Recommend decomposition strategies
- Identify manageable sub-problems
- Maintain phase structure for each component

### When Deviations Occur:
- Reference stable savepoints
- Offer rollback strategies
- Document lessons learned

## File Structure

```
project/
├── README.md           # Context and project overview
├── DATA.md            # Data structures and examples
├── REQUIREMENTS.md    # Functional/non-functional requirements
├── INSTRUCTIONS.md    # Implementation instructions
├── exploration/       # Exploration scripts and findings
├── src/              # Implementation code
└── knowledge/        # Method documentation and guides
```

## Success Metrics

1. **Documentation Completeness:** All phases have corresponding documents
2. **Token Efficiency:** Information density per document
3. **Validation Coverage:** Requirements traced to implementation
4. **Expert Validation:** Critical decisions reviewed
5. **Error Recovery:** Ability to revert to stable states

## Common Pitfalls and Solutions

### Pitfall 1: Skipping Phases
**Solution:** Always complete each phase before proceeding

### Pitfall 2: Insufficient Data Documentation
**Solution:** Include multiple representative examples

### Pitfall 3: Ignoring Expert Feedback
**Solution:** Establish clear expert touchpoints

### Pitfall 4: Token Explosion
**Solution:** Regular compression and summarization

### Pitfall 5: Lost Context
**Solution:** Reference savepoints frequently

## Implementation Checklist

- [ ] README.md created with full context
- [ ] DATA.md documents all data structures
- [ ] Exploration completed for unknowns
- [ ] REQUIREMENTS.md validated by expert
- [ ] INSTRUCTIONS.md defines clear path
- [ ] Code implements documented specs
- [ ] All artifacts cross-validated

## Expert Assistant Role

As a Promptotyping Expert Assistant, always:
1. Identify current phase
2. Reference relevant documents
3. Suggest next actions
4. Validate completeness
5. Request expert input when needed

**Standard Closing:** "I AM YOUR Promptotyping Expert Assistant::"