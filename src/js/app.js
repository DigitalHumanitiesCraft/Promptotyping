// Main Application JavaScript for Promptotyping Webpage

// Application State
const AppState = {
    currentPhase: 0,
    wizardPhase: 0,
    completedPhases: [],
    activeTab: 'quickstart',

    // Phase definitions
    phases: [
        {
            id: 'context',
            name: 'CONTEXT',
            file: 'README.md',
            description: 'Establish project foundation and domain understanding',
            actions: [
                'Capture project goals and constraints',
                'Research domain knowledge',
                'Define success criteria',
                'Compress for token efficiency',
                'Request expert validation'
            ],
            details: 'The Context phase establishes the foundation of your project. Create a comprehensive README.md that captures all essential project information in a token-efficient format. This document serves as the north star for all subsequent phases.'
        },
        {
            id: 'data',
            name: 'DATA',
            file: 'DATA.md',
            description: 'Define and document data structures and flows',
            actions: [
                'Document all data structures',
                'Map data transformations',
                'Create representative examples',
                'Identify data vortex points',
                'Validate data completeness'
            ],
            details: 'The Data phase documents all data structures, transformations, and flows. Create DATA.md with comprehensive examples and identify potential "data vortex" points where information might be lost during transformations.'
        },
        {
            id: 'exploration',
            name: 'EXPLORATION',
            file: 'Scripts & Logs',
            description: 'Investigate unknowns and validate assumptions',
            actions: [
                'Generate analysis scripts',
                'Build logging mechanisms',
                'Document discoveries',
                'Iterate based on findings',
                'Feed insights to requirements'
            ],
            details: 'The Exploration phase investigates unknowns through scripts and analysis. Generate Python or other scripts to explore data, validate assumptions, and document all discoveries for the requirements phase.'
        },
        {
            id: 'requirements',
            name: 'REQUIREMENTS',
            file: 'REQUIREMENTS.md',
            description: 'Formalize functional and non-functional requirements',
            actions: [
                'Specify functional requirements',
                'Define non-functional requirements',
                'Prioritize features (P0, P1, P2)',
                'Validate testability',
                'Obtain expert validation'
            ],
            details: 'The Requirements phase formalizes all functional and non-functional requirements. Create REQUIREMENTS.md with clear prioritization, validation criteria, and ensure all requirements are testable.'
        },
        {
            id: 'implementation',
            name: 'IMPLEMENTATION',
            file: 'INSTRUCTIONS.md',
            description: 'Define technical implementation path',
            actions: [
                'Document technical steps',
                'Define algorithms and patterns',
                'Establish validation checkpoints',
                'Create error handling strategies',
                'Plan rollback procedures'
            ],
            details: 'The Implementation phase defines the technical roadmap. Create INSTRUCTIONS.md with detailed steps, algorithms, checkpoints, and error recovery strategies. This serves as the blueprint for code generation.'
        },
        {
            id: 'prototype',
            name: 'PROTOTYPE',
            file: 'Source Code',
            description: 'Generate working implementation',
            actions: [
                'Implement based on specifications',
                'Validate against requirements',
                'Use documents as references',
                'Iterate when issues arise',
                'Maintain savepoints'
            ],
            details: 'The Prototype phase generates the actual implementation. Code is created based on all previous documentation, with continuous validation against requirements and the ability to rollback to savepoints when needed.'
        }
    ]
};

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
    loadExampleContent();
});

function initializeApp() {
    // Set initial states
    document.getElementById('quickstart-example').classList.add('active');
    updateWizardDisplay();

    // Check for dark mode preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add('dark-mode');
    }
}

function setupEventListeners() {
    // Mobile menu toggle
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileToggle) {
        mobileToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                // Close mobile menu if open
                navMenu.classList.remove('active');
                mobileToggle.classList.remove('active');
            }
        });
    });

    // Phase cards hover effect
    document.querySelectorAll('.phase-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

// Navigation Functions
function scrollToPhases() {
    document.getElementById('phases').scrollIntoView({ behavior: 'smooth' });
}

function showQuickStart() {
    document.getElementById('wizard-content').scrollIntoView({ behavior: 'smooth' });
}

// Phase Details Modal
function showPhaseDetails(phaseId) {
    const phase = AppState.phases.find(p => p.id === phaseId);
    if (!phase) return;

    const modal = document.getElementById('phase-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalContent = document.getElementById('modal-content');

    modalTitle.textContent = `Phase ${AppState.phases.indexOf(phase) + 1}: ${phase.name}`;

    modalContent.innerHTML = `
        <div class="phase-detail">
            <p class="phase-file"><strong>Document:</strong> ${phase.file}</p>
            <p class="phase-description">${phase.details}</p>

            <h4>Required Actions:</h4>
            <ul class="phase-actions-detailed">
                ${phase.actions.map(action => `<li>${action}</li>`).join('')}
            </ul>

            <h4>Validation Checklist:</h4>
            <div class="validation-checklist">
                <label class="checklist-item">
                    <input type="checkbox">
                    <span>Document created and complete</span>
                </label>
                <label class="checklist-item">
                    <input type="checkbox">
                    <span>All actions performed</span>
                </label>
                <label class="checklist-item">
                    <input type="checkbox">
                    <span>Expert review completed (if required)</span>
                </label>
                <label class="checklist-item">
                    <input type="checkbox">
                    <span>Savepoint created</span>
                </label>
            </div>

            <div class="modal-actions">
                <button class="btn btn-primary" onclick="closeModal()">Close</button>
            </div>
        </div>
    `;

    modal.classList.add('active');
}

function closeModal() {
    document.getElementById('phase-modal').classList.remove('active');
}

// Example Tabs
function showExample(exampleId) {
    // Update tab buttons
    document.querySelectorAll('.tab-button').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');

    // Update content
    const content = getExampleContent(exampleId);
    document.getElementById('example-content').innerHTML = content;
}

function getExampleContent(exampleId) {
    const examples = {
        'quickstart': `
            <div class="example">
                <h3>Quick Start Guide</h3>
                <ol class="quick-start-steps">
                    <li>
                        <strong>Initialize Project Context</strong>
                        <pre><code>Create README.md with:
- Project goals and constraints
- Domain knowledge
- Success criteria</code></pre>
                    </li>
                    <li>
                        <strong>Document Data Structures</strong>
                        <pre><code>Create DATA.md with:
- Data models and schemas
- Transformation flows
- Example data</code></pre>
                    </li>
                    <li>
                        <strong>Explore Unknowns</strong>
                        <pre><code>Generate exploration scripts:
- Analysis tools
- Validation tests
- Discovery logs</code></pre>
                    </li>
                    <li>
                        <strong>Define Requirements</strong>
                        <pre><code>Create REQUIREMENTS.md with:
- Functional requirements
- Non-functional requirements
- Validation criteria</code></pre>
                    </li>
                    <li>
                        <strong>Plan Implementation</strong>
                        <pre><code>Create INSTRUCTIONS.md with:
- Technical steps
- Algorithms
- Checkpoints</code></pre>
                    </li>
                    <li>
                        <strong>Build Prototype</strong>
                        <pre><code>Implement code:
- Follow specifications
- Validate continuously
- Use savepoints</code></pre>
                    </li>
                </ol>
            </div>
        `,
        'filestructure': `
            <div class="example">
                <h3>Recommended File Structure</h3>
                <pre><code>project/
├── README.md           # Context and overview
├── DATA.md            # Data structures
├── REQUIREMENTS.md    # Requirements
├── INSTRUCTIONS.md    # Implementation guide
├── exploration/       # Exploration scripts
│   ├── analyze_data.py
│   ├── validate_assumptions.py
│   └── discovery_log.md
├── src/              # Implementation
│   ├── main.py
│   ├── modules/
│   └── tests/
└── savepoints/       # Version checkpoints
    ├── phase1_context.md
    ├── phase2_data.md
    └── phase4_requirements.md</code></pre>
            </div>
        `,
        'validation': `
            <div class="example">
                <h3>Validation Strategy</h3>
                <div class="validation-example">
                    <h4>Automatic Validation</h4>
                    <ul>
                        <li>Document completeness checks</li>
                        <li>Code syntax validation</li>
                        <li>Test suite execution</li>
                        <li>Token count verification</li>
                    </ul>

                    <h4>Expert Validation Points</h4>
                    <ul>
                        <li>Domain knowledge accuracy (Phase 1)</li>
                        <li>Data model completeness (Phase 2)</li>
                        <li>Requirements feasibility (Phase 4)</li>
                        <li>Implementation approach (Phase 5)</li>
                    </ul>

                    <h4>Validation Criteria Example</h4>
                    <pre><code># Requirements Validation
- [ ] All requirements have acceptance criteria
- [ ] Requirements are testable
- [ ] No conflicting requirements
- [ ] Expert review completed
- [ ] Priority levels assigned</code></pre>
                </div>
            </div>
        `,
        'rollback': `
            <div class="example">
                <h3>Rollback & Recovery</h3>
                <div class="rollback-example">
                    <h4>When to Rollback</h4>
                    <ul>
                        <li>Validation failures</li>
                        <li>Requirement conflicts discovered</li>
                        <li>Implementation blockers</li>
                        <li>Data vortex detected</li>
                    </ul>

                    <h4>Rollback Procedure</h4>
                    <ol>
                        <li>Identify the last stable savepoint</li>
                        <li>Document the issue requiring rollback</li>
                        <li>Restore document versions</li>
                        <li>Reset project state</li>
                        <li>Log lessons learned</li>
                        <li>Resume from stable point</li>
                    </ol>

                    <h4>Savepoint Example</h4>
                    <pre><code>{
  "id": "savepoint-003",
  "timestamp": "2024-01-15T14:30:00Z",
  "phase": "requirements",
  "documents": [
    "README.md v1.0",
    "DATA.md v1.1",
    "REQUIREMENTS.md v1.0"
  ],
  "validation": "passed",
  "notes": "Requirements validated by expert"
}</code></pre>
                </div>
            </div>
        `
    };

    return examples[exampleId] || examples['quickstart'];
}

function loadExampleContent() {
    document.getElementById('example-content').innerHTML = getExampleContent('quickstart');
}

// Wizard Functions
function updateWizardDisplay() {
    const phase = AppState.phases[AppState.wizardPhase];
    document.getElementById('wizard-phase-title').textContent = `Phase ${AppState.wizardPhase + 1}: ${phase.name}`;
    document.getElementById('wizard-phase-description').textContent = phase.description;

    // Update checklist
    const checklist = document.getElementById('wizard-checklist');
    checklist.innerHTML = phase.actions.slice(0, 4).map(action => `
        <label class="checklist-item">
            <input type="checkbox" onchange="updateWizardProgress()">
            <span>${action}</span>
        </label>
    `).join('');

    // Update progress bar
    const progress = ((AppState.wizardPhase + 1) / AppState.phases.length) * 100;
    document.getElementById('wizard-progress').style.width = `${progress}%`;

    // Update buttons
    document.getElementById('prev-btn').disabled = AppState.wizardPhase === 0;
    document.getElementById('next-btn').textContent =
        AppState.wizardPhase === AppState.phases.length - 1 ? 'Complete' : 'Next Phase';
}

function updateWizardProgress() {
    const checkboxes = document.querySelectorAll('#wizard-checklist input[type="checkbox"]');
    const checked = Array.from(checkboxes).filter(cb => cb.checked).length;
    const total = checkboxes.length;

    if (checked === total) {
        document.getElementById('next-btn').classList.add('pulse');
    } else {
        document.getElementById('next-btn').classList.remove('pulse');
    }
}

function nextPhase() {
    if (AppState.wizardPhase < AppState.phases.length - 1) {
        AppState.wizardPhase++;
        updateWizardDisplay();
    } else {
        alert('Congratulations! You\'ve completed all phases of Promptotyping!');
        AppState.wizardPhase = 0;
        updateWizardDisplay();
    }
}

function previousPhase() {
    if (AppState.wizardPhase > 0) {
        AppState.wizardPhase--;
        updateWizardDisplay();
    }
}

// Download Functions
function downloadDocs() {
    // Create a text file with all documentation
    const content = generateDocumentationContent();
    downloadFile('promptotyping-documentation.md', content);
}

function downloadTemplates() {
    const templates = generateTemplates();
    downloadFile('promptotyping-templates.md', templates);
}

function downloadChecklists() {
    const checklists = generateChecklists();
    downloadFile('promptotyping-checklists.md', checklists);
}

function viewExamples() {
    document.getElementById('examples').scrollIntoView({ behavior: 'smooth' });
}

function downloadFile(filename, content) {
    const blob = new Blob([content], { type: 'text/markdown' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
}

function generateDocumentationContent() {
    return `# Promptotyping Method Documentation

## Overview
Promptotyping is an iterative software development methodology designed for LLM-assisted development.

## The Six Phases

${AppState.phases.map((phase, index) => `
### Phase ${index + 1}: ${phase.name}
**Document:** ${phase.file}
**Description:** ${phase.description}

**Actions:**
${phase.actions.map(action => `- ${action}`).join('\n')}

**Details:** ${phase.details}
`).join('\n')}

## Key Principles
- Versioned Savepoints
- Token Efficiency
- Expert-in-the-Loop
- Self-Verification
- Context Awareness
- Precision Over Completeness

---
I AM YOUR Promptotyping Expert Assistant::
`;
}

function generateTemplates() {
    return `# Promptotyping Templates

## README.md Template
\`\`\`markdown
# PROJECT NAME

## Context
[Project overview and goals]

## Domain
[Domain knowledge and constraints]

## Success Criteria
[Measurable success metrics]

## Architecture
[High-level architecture]

## Version
[Current version]
\`\`\`

## DATA.md Template
\`\`\`markdown
# DATA STRUCTURES

## Models
[Data model definitions]

## Transformations
[Data flow and transformations]

## Examples
[Representative data examples]

## Validation
[Data validation rules]
\`\`\`

## REQUIREMENTS.md Template
\`\`\`markdown
# REQUIREMENTS

## Functional Requirements
### P0 - Must Have
[Core requirements]

### P1 - Should Have
[Important features]

### P2 - Nice to Have
[Optional enhancements]

## Non-Functional Requirements
[Performance, security, etc.]

## Validation Criteria
[How to validate requirements]
\`\`\`

## INSTRUCTIONS.md Template
\`\`\`markdown
# IMPLEMENTATION INSTRUCTIONS

## Technical Steps
[Step-by-step implementation]

## Algorithms
[Key algorithms and logic]

## Checkpoints
[Validation points]

## Error Handling
[Error recovery strategies]
\`\`\`
`;
}

function generateChecklists() {
    return `# Promptotyping Checklists

${AppState.phases.map((phase, index) => `
## Phase ${index + 1}: ${phase.name} Checklist

${phase.actions.map(action => `- [ ] ${action}`).join('\n')}
- [ ] Document created (${phase.file})
- [ ] Validation complete
- [ ] Expert review (if required)
- [ ] Savepoint created
`).join('\n')}

## General Validation Checklist
- [ ] All phases documented
- [ ] Token efficiency verified
- [ ] Expert validations complete
- [ ] Requirements traceable to implementation
- [ ] Tests passing
- [ ] Rollback points established

---
I AM YOUR Promptotyping Expert Assistant::
`;
}