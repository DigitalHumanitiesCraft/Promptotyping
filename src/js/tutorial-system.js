// Advanced Tutorial System for Promptotyping with Academic Foundation

class PromptotypingTutorial {
    constructor() {
        this.currentStep = 0;
        this.currentPhase = 0;
        this.cognitiveLoad = 0;
        this.tokenCount = 0;
        this.savepoints = [];
        this.learningPath = 'beginner';
        this.progress = {
            beginner: { completed: [], current: 0 },
            intermediate: { completed: [], current: 0 },
            advanced: { completed: [], current: 0 }
        };

        // Cognitive Load Thresholds (based on 78% accuracy research)
        this.cognitiveThresholds = {
            low: 30,
            medium: 60,
            high: 85,
            overload: 100
        };

        // Tutorial content based on theoretical foundation
        this.tutorials = {
            beginner: [
                {
                    id: 'intro-theory',
                    title: 'Understanding the Theory',
                    phases: ['context'],
                    cognitiveLoad: 20,
                    content: this.getIntroTheoryContent(),
                    exercises: this.getIntroTheoryExercises()
                },
                {
                    id: 'first-project',
                    title: 'Your First Promptotyping Project',
                    phases: ['context', 'data'],
                    cognitiveLoad: 35,
                    content: this.getFirstProjectContent(),
                    exercises: this.getFirstProjectExercises()
                },
                {
                    id: 'documentation-first',
                    title: 'Documentation-Driven Development',
                    phases: ['context', 'data', 'exploration'],
                    cognitiveLoad: 45,
                    content: this.getDocumentationFirstContent(),
                    exercises: this.getDocumentationExercises()
                }
            ],
            intermediate: [
                {
                    id: 'multi-model',
                    title: 'Multi-Model Strategy (60% Efficiency Gain)',
                    phases: ['all'],
                    cognitiveLoad: 55,
                    content: this.getMultiModelContent(),
                    exercises: this.getMultiModelExercises()
                },
                {
                    id: 'cognitive-management',
                    title: 'Managing Cognitive Load',
                    phases: ['exploration', 'requirements'],
                    cognitiveLoad: 50,
                    content: this.getCognitiveManagementContent(),
                    exercises: this.getCognitiveExercises()
                },
                {
                    id: 'savepoint-strategy',
                    title: 'Checkpoint & Recovery Patterns',
                    phases: ['all'],
                    cognitiveLoad: 60,
                    content: this.getSavepointContent(),
                    exercises: this.getSavepointExercises()
                }
            ],
            advanced: [
                {
                    id: 'token-optimization',
                    title: 'Advanced Token Economics',
                    phases: ['all'],
                    cognitiveLoad: 70,
                    content: this.getTokenOptimizationContent(),
                    exercises: this.getTokenExercises()
                },
                {
                    id: 'data-vortex',
                    title: 'Preventing Data Vortex',
                    phases: ['data', 'implementation'],
                    cognitiveLoad: 75,
                    content: this.getDataVortexContent(),
                    exercises: this.getDataVortexExercises()
                },
                {
                    id: 'research-application',
                    title: 'Applying Latest Research',
                    phases: ['all'],
                    cognitiveLoad: 80,
                    content: this.getResearchApplicationContent(),
                    exercises: this.getResearchExercises()
                }
            ]
        };

        this.init();
    }

    init() {
        // Initialize tutorial system
        this.loadProgress();
        this.setupEventListeners();
        this.renderTutorialInterface();
    }

    // Content Methods - Beginner
    getIntroTheoryContent() {
        return {
            theory: `
                <h3>🧠 Cognitive Load Theory in Practice</h3>
                <p>Promptotyping is built on <strong>Sweller's Cognitive Load Theory</strong>.
                We break complex development into 6 phases to manage your mental capacity effectively.</p>

                <div class="theory-visual">
                    <div class="load-meter">
                        <div class="load-bar" style="width: 30%">Low Load (Phase 1-2)</div>
                    </div>
                    <p>Start with low cognitive load in CONTEXT phase</p>
                </div>

                <h4>📊 Research Backing</h4>
                <ul>
                    <li>273 papers published in 2023 on LLM-assisted development</li>
                    <li>55% productivity increase documented</li>
                    <li>78% accuracy in cognitive load prediction</li>
                </ul>
            `,
            practice: `
                <h3>Try It: Create Your First Context</h3>
                <p>Let's apply the theory. Write a README.md with token-efficient context:</p>
                <textarea id="context-input" placeholder="# Project Name\n\n## Goals\n[What are you building?]\n\n## Constraints\n[What limitations exist?]\n\n## Success Criteria\n[How will you measure success?]"></textarea>
                <button onclick="tutorial.validateContext()">Validate Context</button>
                <div id="feedback"></div>
            `,
            tips: [
                "Keep context under 500 tokens for efficiency",
                "Include measurable success criteria",
                "Define constraints explicitly"
            ]
        };
    }

    getFirstProjectContent() {
        return {
            theory: `
                <h3>📝 The Six-Phase Architecture</h3>
                <p>Based on research showing optimal breakdown of complex tasks:</p>

                <div class="phase-flow">
                    <div class="phase-item active">1. CONTEXT<br><small>Define project</small></div>
                    <div class="phase-item">2. DATA<br><small>Structure information</small></div>
                    <div class="phase-item">3. EXPLORATION<br><small>Investigate unknowns</small></div>
                    <div class="phase-item">4. REQUIREMENTS<br><small>Formalize needs</small></div>
                    <div class="phase-item">5. IMPLEMENTATION<br><small>Define approach</small></div>
                    <div class="phase-item">6. PROTOTYPE<br><small>Build solution</small></div>
                </div>

                <h4>Why 6 Phases?</h4>
                <ul>
                    <li><strong>Miller's Law:</strong> 7±2 items in working memory</li>
                    <li><strong>Empirical Evidence:</strong> Successful projects show 5-7 natural breakpoints</li>
                    <li><strong>Cognitive Balance:</strong> Alternates high/low mental load</li>
                </ul>
            `,
            practice: `
                <h3>Build a Todo App Using Promptotyping</h3>
                <div class="project-wizard">
                    <div class="wizard-step" data-phase="context">
                        <h4>Phase 1: CONTEXT</h4>
                        <p>Define your todo app's purpose and constraints.</p>
                        <textarea placeholder="A simple todo app that helps users manage daily tasks..."></textarea>
                    </div>
                    <button onclick="tutorial.nextProjectPhase()">Next Phase →</button>
                </div>
            `,
            tips: [
                "Each phase creates a savepoint you can return to",
                "Don't skip phases - they build on each other",
                "Use the 60% rule: Move forward when 60% confident"
            ]
        };
    }

    getDocumentationFirstContent() {
        return {
            theory: `
                <h3>📚 Documentation as Executable Specification</h3>
                <p>Based on <strong>Knuth's Literate Programming</strong> and modern research:</p>

                <div class="doc-flow">
                    <span>Documentation</span> →
                    <span>LLM Processing</span> →
                    <span>Implementation</span> →
                    <span>Validation</span> ↻
                </div>

                <h4>Research Finding:</h4>
                <blockquote>
                    "Developers spend 58% of time reading code vs. writing.
                    Documentation-first approach reduces this cognitive overhead."
                </blockquote>
            `,
            practice: `
                <h3>Create DATA.md for Your Project</h3>
                <div class="data-builder">
                    <h4>Define Your Data Structure:</h4>
                    <div class="schema-editor">
                        <pre contenteditable="true">
{
  "todo": {
    "id": "string",
    "title": "string",
    "completed": "boolean",
    "created": "timestamp"
  }
}
                        </pre>
                    </div>
                    <button onclick="tutorial.analyzeDataStructure()">Analyze Structure</button>
                    <div id="token-count">Tokens used: <span>0</span></div>
                </div>
            `,
            tips: [
                "Documentation becomes your LLM prompt",
                "Include examples with your data structures",
                "Token-efficient documentation saves API costs"
            ]
        };
    }

    // Content Methods - Intermediate
    getMultiModelContent() {
        return {
            theory: `
                <h3>🚀 Multi-Model Strategy (Research-Backed)</h3>
                <p>2024 Research shows <strong>60% efficiency gain</strong> using multiple models:</p>

                <table class="model-comparison">
                    <thead>
                        <tr>
                            <th>Phase</th>
                            <th>Optimal Model</th>
                            <th>Why</th>
                            <th>Performance</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>CONTEXT</td>
                            <td>Claude</td>
                            <td>Complex reasoning</td>
                            <td>92% accuracy</td>
                        </tr>
                        <tr>
                            <td>DATA</td>
                            <td>GPT-4</td>
                            <td>Structured data</td>
                            <td>88% accuracy</td>
                        </tr>
                        <tr>
                            <td>EXPLORATION</td>
                            <td>Claude</td>
                            <td>Deep analysis</td>
                            <td>90% accuracy</td>
                        </tr>
                        <tr>
                            <td>REQUIREMENTS</td>
                            <td>Claude</td>
                            <td>Clarification</td>
                            <td>85% accuracy</td>
                        </tr>
                        <tr>
                            <td>IMPLEMENTATION</td>
                            <td>GPT-4</td>
                            <td>Code patterns</td>
                            <td>87% accuracy</td>
                        </tr>
                        <tr>
                            <td>PROTOTYPE</td>
                            <td>Copilot</td>
                            <td>Speed</td>
                            <td>55% faster</td>
                        </tr>
                    </tbody>
                </table>
            `,
            practice: `
                <h3>Practice Model Selection</h3>
                <div class="model-selector">
                    <p>Given this scenario, which model would you choose?</p>
                    <div class="scenario">
                        <p><strong>Task:</strong> Complex business logic validation for e-commerce checkout</p>
                        <p><strong>Phase:</strong> EXPLORATION</p>
                    </div>
                    <div class="model-options">
                        <button onclick="tutorial.checkModelChoice('claude')">Claude</button>
                        <button onclick="tutorial.checkModelChoice('gpt4')">GPT-4</button>
                        <button onclick="tutorial.checkModelChoice('copilot')">Copilot</button>
                    </div>
                    <div id="model-feedback"></div>
                </div>
            `,
            tips: [
                "Claude excels at complex reasoning and edge cases",
                "GPT-4 is versatile for structured tasks",
                "Copilot maximizes speed for implementation"
            ]
        };
    }

    getCognitiveManagementContent() {
        return {
            theory: `
                <h3>🧠 Cognitive Load Management</h3>
                <p>Research achieves <strong>78% accuracy</strong> in predicting cognitive overload:</p>

                <div class="cognitive-monitor">
                    <h4>Your Current Cognitive Load</h4>
                    <div class="load-indicator">
                        <div class="load-level" data-level="medium">
                            <span class="level low">Low (0-30)</span>
                            <span class="level medium active">Medium (30-60)</span>
                            <span class="level high">High (60-85)</span>
                            <span class="level overload">Overload (85+)</span>
                        </div>
                    </div>
                    <p>Recommendation: <span id="load-recommendation">Good pace, continue</span></p>
                </div>

                <h4>Load Management Strategies:</h4>
                <ul>
                    <li><strong>Chunk Complex Tasks:</strong> Break into subtasks</li>
                    <li><strong>Use Savepoints:</strong> Reduce fear of failure</li>
                    <li><strong>Alternate Load:</strong> Mix high/low complexity</li>
                </ul>
            `,
            practice: `
                <h3>Cognitive Load Exercise</h3>
                <div class="load-exercise">
                    <p>Identify the cognitive load level for each task:</p>
                    <div class="task-list">
                        <div class="task-item" data-load="low">
                            <p>Writing project README.md</p>
                            <select onchange="tutorial.checkLoadAssessment(this, 'low')">
                                <option>Select load level</option>
                                <option value="low">Low</option>
                                <option value="medium">Medium</option>
                                <option value="high">High</option>
                            </select>
                        </div>
                        <div class="task-item" data-load="high">
                            <p>Designing complex data transformations</p>
                            <select onchange="tutorial.checkLoadAssessment(this, 'high')">
                                <option>Select load level</option>
                                <option value="low">Low</option>
                                <option value="medium">Medium</option>
                                <option value="high">High</option>
                            </select>
                        </div>
                    </div>
                </div>
            `,
            tips: [
                "Take breaks when cognitive load exceeds 70%",
                "Document complex logic immediately",
                "Use visual diagrams to reduce load"
            ]
        };
    }

    getSavepointContent() {
        return {
            theory: `
                <h3>💾 Checkpoint Theory from Distributed Systems</h3>
                <p>Based on <strong>Chandy-Lamport Algorithm</strong> for consistent snapshots:</p>

                <div class="checkpoint-visual">
                    <div class="checkpoint-timeline">
                        <div class="checkpoint" data-state="complete">
                            <span>✓</span>
                            <label>Context</label>
                        </div>
                        <div class="checkpoint" data-state="complete">
                            <span>✓</span>
                            <label>Data</label>
                        </div>
                        <div class="checkpoint" data-state="current">
                            <span>→</span>
                            <label>Exploration</label>
                        </div>
                        <div class="checkpoint" data-state="future">
                            <span>○</span>
                            <label>Requirements</label>
                        </div>
                    </div>
                </div>

                <h4>Savepoint Properties:</h4>
                <ul>
                    <li><strong>Consistency:</strong> Valid system state</li>
                    <li><strong>Completeness:</strong> All information captured</li>
                    <li><strong>Recovery:</strong> Can rollback anytime</li>
                </ul>
            `,
            practice: `
                <h3>Create and Manage Savepoints</h3>
                <div class="savepoint-manager">
                    <h4>Current Project State</h4>
                    <div class="state-display">
                        <pre id="current-state">
Phase: EXPLORATION
Documents: README.md, DATA.md
Status: Investigating API requirements
Tokens Used: 1,247
                        </pre>
                    </div>
                    <button onclick="tutorial.createSavepoint()">Create Savepoint</button>

                    <h4>Available Savepoints</h4>
                    <div class="savepoint-list">
                        <div class="savepoint-item">
                            <span>📌 Phase 2 Complete</span>
                            <button onclick="tutorial.rollback(2)">Rollback</button>
                        </div>
                    </div>
                </div>
            `,
            tips: [
                "Create savepoints before risky changes",
                "Document why you're creating each savepoint",
                "Use savepoints to experiment freely"
            ]
        };
    }

    // Content Methods - Advanced
    getTokenOptimizationContent() {
        return {
            theory: `
                <h3>💎 Token Economics & Information Theory</h3>
                <p>Based on <strong>Shannon's Information Theory</strong>:</p>

                <div class="token-formula">
                    <code>H(X) = -Σ p(xi) log p(xi)</code>
                    <p>Where H(X) = entropy (information content)</p>
                </div>

                <h4>Token Optimization Strategies:</h4>
                <div class="optimization-strategies">
                    <div class="strategy">
                        <h5>Compression</h5>
                        <p>Before: 150 tokens</p>
                        <pre>The user authentication system should allow users to log in...</pre>
                        <p>After: 45 tokens</p>
                        <pre>Auth: login, OAuth2, MFA, session management</pre>
                    </div>
                </div>

                <h4>Cost Analysis:</h4>
                <table>
                    <tr>
                        <th>Phase</th>
                        <th>Avg Tokens</th>
                        <th>Cost (GPT-4)</th>
                        <th>Optimized</th>
                    </tr>
                    <tr>
                        <td>CONTEXT</td>
                        <td>500</td>
                        <td>$0.015</td>
                        <td>$0.008</td>
                    </tr>
                </table>
            `,
            practice: `
                <h3>Token Optimization Challenge</h3>
                <div class="token-optimizer">
                    <h4>Optimize this prompt:</h4>
                    <textarea id="verbose-prompt" readonly>
I need you to create a function that takes a list of numbers as input and returns the average of those numbers. The function should handle edge cases like empty lists and should be written in Python. Make sure to add proper error handling and documentation.
                    </textarea>
                    <p>Current tokens: <span class="token-count">47</span></p>

                    <h4>Your optimized version:</h4>
                    <textarea id="optimized-prompt" placeholder="Write your optimized version here..."></textarea>
                    <button onclick="tutorial.analyzeOptimization()">Analyze</button>
                    <div id="optimization-feedback"></div>
                </div>
            `,
            tips: [
                "Use domain-specific abbreviations",
                "Leverage context from previous phases",
                "Reference instead of repeat"
            ]
        };
    }

    getDataVortexContent() {
        return {
            theory: `
                <h3>🌀 The Data Vortex Phenomenon</h3>
                <p>Information loss during transformations between representations:</p>

                <div class="vortex-visual">
                    <div class="transformation-flow">
                        <div class="data-state">Original Data<br><small>100% information</small></div>
                        <div class="arrow">→</div>
                        <div class="data-state warning">Transform 1<br><small>85% retained</small></div>
                        <div class="arrow">→</div>
                        <div class="data-state danger">Transform 2<br><small>60% retained</small></div>
                    </div>
                </div>

                <h4>Mathematical Model:</h4>
                <code>I_out = I_in × T_efficiency × (1 - L_transformation)</code>

                <h4>Prevention Strategies:</h4>
                <ul>
                    <li><strong>Explicit Logging:</strong> Track every transformation</li>
                    <li><strong>Validation Points:</strong> Check information preservation</li>
                    <li><strong>Redundant Encoding:</strong> Multiple representations</li>
                </ul>
            `,
            practice: `
                <h3>Identify Data Vortex Risks</h3>
                <div class="vortex-identifier">
                    <h4>Scenario: API Response → Database → Frontend Display</h4>
                    <div class="transformation-chain">
                        <div class="transform-step">
                            <h5>Step 1: API Response (JSON)</h5>
                            <pre>{
  "user": {
    "id": "123",
    "profile": {
      "name": "John",
      "preferences": {...}
    }
  }
}</pre>
                        </div>
                        <div class="transform-step">
                            <h5>Step 2: Database Schema</h5>
                            <pre>users table: id, name
preferences table: user_id, ...</pre>
                            <p class="risk-indicator">⚠️ Risk: Nested data flattened</p>
                        </div>
                    </div>
                    <button onclick="tutorial.analyzeVortexRisk()">Analyze Risks</button>
                </div>
            `,
            tips: [
                "Log data shape at each transformation",
                "Create validation schemas",
                "Test with edge cases"
            ]
        };
    }

    getResearchApplicationContent() {
        return {
            theory: `
                <h3>🔬 Latest Research Application (2024)</h3>
                <p>Apply cutting-edge findings to your development:</p>

                <div class="research-highlights">
                    <div class="finding">
                        <h4>Finding 1: The 60% Problem</h4>
                        <p>60% of LLMs fail to ask clarifying questions</p>
                        <p><strong>Solution:</strong> Mandatory clarification checklist in EXPLORATION</p>
                    </div>

                    <div class="finding">
                        <h4>Finding 2: Class-Level Gap</h4>
                        <p>LLMs perform "much worse" on class-level vs method-level code</p>
                        <p><strong>Solution:</strong> Build incrementally from methods to classes</p>
                    </div>

                    <div class="finding">
                        <h4>Finding 3: Test-Driven Success</h4>
                        <p>Including tests improves LLM performance consistently</p>
                        <p><strong>Solution:</strong> Add test specs to REQUIREMENTS phase</p>
                    </div>
                </div>
            `,
            practice: `
                <h3>Apply Research to Real Project</h3>
                <div class="research-application">
                    <h4>Project: Build a User Authentication System</h4>

                    <div class="research-checklist">
                        <h5>Apply the 60% Problem Solution:</h5>
                        <label><input type="checkbox"> Define auth method explicitly</label>
                        <label><input type="checkbox"> Specify session duration</label>
                        <label><input type="checkbox"> Clarify password requirements</label>

                        <h5>Apply Class-Level Gap Solution:</h5>
                        <label><input type="checkbox"> Start with login method</label>
                        <label><input type="checkbox"> Then add logout method</label>
                        <label><input type="checkbox"> Finally create Auth class</label>

                        <h5>Apply Test-Driven Success:</h5>
                        <label><input type="checkbox"> Write test for valid login</label>
                        <label><input type="checkbox"> Write test for invalid credentials</label>
                        <label><input type="checkbox"> Include in requirements</label>
                    </div>

                    <button onclick="tutorial.validateResearchApplication()">Validate Application</button>
                </div>
            `,
            tips: [
                "Stay updated with latest research",
                "Test new findings on small projects first",
                "Share your results with the community"
            ]
        };
    }

    // Tutorial System Methods
    renderTutorialInterface() {
        const container = document.getElementById('tutorial-container');
        if (!container) return;

        const tutorial = this.tutorials[this.learningPath][this.currentStep];

        container.innerHTML = `
            <div class="tutorial-header">
                <h2>${tutorial.title}</h2>
                <div class="tutorial-meta">
                    <span class="path-indicator">${this.learningPath.toUpperCase()}</span>
                    <span class="cognitive-indicator">Cognitive Load: ${tutorial.cognitiveLoad}%</span>
                    <span class="progress-indicator">Step ${this.currentStep + 1}/${this.tutorials[this.learningPath].length}</span>
                </div>
            </div>

            <div class="tutorial-content">
                <div class="theory-section">
                    ${tutorial.content.theory}
                </div>

                <div class="practice-section">
                    ${tutorial.content.practice}
                </div>

                <div class="tips-section">
                    <h4>💡 Pro Tips</h4>
                    <ul>
                        ${tutorial.content.tips.map(tip => `<li>${tip}</li>`).join('')}
                    </ul>
                </div>
            </div>

            <div class="tutorial-navigation">
                <button onclick="tutorial.previousStep()" ${this.currentStep === 0 ? 'disabled' : ''}>← Previous</button>
                <button onclick="tutorial.createSavepoint()" class="savepoint-btn">Create Savepoint</button>
                <button onclick="tutorial.nextStep()" ${this.currentStep === this.tutorials[this.learningPath].length - 1 ? 'disabled' : ''}>Next →</button>
            </div>
        `;

        this.updateCognitiveLoadIndicator();
    }

    updateCognitiveLoadIndicator() {
        const indicator = document.querySelector('.cognitive-indicator');
        if (!indicator) return;

        const load = this.tutorials[this.learningPath][this.currentStep].cognitiveLoad;
        let status = 'low';
        let recommendation = 'Good pace, continue';

        if (load > this.cognitiveThresholds.high) {
            status = 'overload';
            recommendation = 'Consider taking a break';
        } else if (load > this.cognitiveThresholds.medium) {
            status = 'high';
            recommendation = 'Focus required, minimize distractions';
        } else if (load > this.cognitiveThresholds.low) {
            status = 'medium';
            recommendation = 'Good learning pace';
        }

        indicator.className = `cognitive-indicator ${status}`;

        const loadRec = document.getElementById('load-recommendation');
        if (loadRec) loadRec.textContent = recommendation;
    }

    // Validation Methods
    validateContext() {
        const input = document.getElementById('context-input').value;
        const feedback = document.getElementById('feedback');

        const tokens = this.countTokens(input);
        let score = 0;
        let messages = [];

        if (input.includes('## Goals')) score += 25;
        else messages.push('Missing Goals section');

        if (input.includes('## Constraints')) score += 25;
        else messages.push('Missing Constraints section');

        if (input.includes('## Success Criteria')) score += 25;
        else messages.push('Missing Success Criteria section');

        if (tokens < 500) score += 25;
        else messages.push(`Too many tokens: ${tokens}/500`);

        feedback.innerHTML = `
            <div class="validation-result ${score >= 75 ? 'success' : 'warning'}">
                <h4>Score: ${score}/100</h4>
                <p>Tokens used: ${tokens}</p>
                ${messages.length > 0 ? `<ul>${messages.map(m => `<li>${m}</li>`).join('')}</ul>` : '<p>Excellent context definition!</p>'}
            </div>
        `;

        if (score === 100) {
            this.createSavepoint();
            this.progress[this.learningPath].completed.push(this.currentStep);
        }
    }

    checkModelChoice(model) {
        const feedback = document.getElementById('model-feedback');
        const correct = model === 'claude';

        feedback.innerHTML = `
            <div class="model-feedback ${correct ? 'success' : 'error'}">
                ${correct ?
                    '✅ Correct! Claude excels at complex reasoning and exploration tasks.' :
                    '❌ Not optimal. For complex business logic exploration, Claude\'s reasoning capabilities are best.'}
            </div>
        `;
    }

    analyzeOptimization() {
        const original = document.getElementById('verbose-prompt').value;
        const optimized = document.getElementById('optimized-prompt').value;
        const feedback = document.getElementById('optimization-feedback');

        const originalTokens = this.countTokens(original);
        const optimizedTokens = this.countTokens(optimized);
        const reduction = Math.round((1 - optimizedTokens/originalTokens) * 100);

        feedback.innerHTML = `
            <div class="optimization-result">
                <h4>Optimization Results:</h4>
                <p>Original: ${originalTokens} tokens</p>
                <p>Optimized: ${optimizedTokens} tokens</p>
                <p>Reduction: ${reduction}%</p>
                <p class="${reduction > 30 ? 'success' : 'warning'}">
                    ${reduction > 30 ? 'Excellent optimization!' : 'Try to compress further'}
                </p>
            </div>
        `;
    }

    // Utility Methods
    countTokens(text) {
        // Simplified token counting (actual implementation would use tokenizer)
        return Math.ceil(text.split(/\s+/).length * 1.3);
    }

    createSavepoint() {
        const savepoint = {
            id: Date.now(),
            step: this.currentStep,
            phase: this.currentPhase,
            timestamp: new Date().toISOString(),
            cognitiveLoad: this.cognitiveLoad,
            tokenCount: this.tokenCount,
            progress: JSON.parse(JSON.stringify(this.progress))
        };

        this.savepoints.push(savepoint);
        this.showNotification('Savepoint created successfully!');
        return savepoint;
    }

    rollback(savepointId) {
        const savepoint = this.savepoints.find(sp => sp.id === savepointId);
        if (savepoint) {
            this.currentStep = savepoint.step;
            this.currentPhase = savepoint.phase;
            this.cognitiveLoad = savepoint.cognitiveLoad;
            this.tokenCount = savepoint.tokenCount;
            this.progress = savepoint.progress;
            this.renderTutorialInterface();
            this.showNotification('Rolled back to savepoint');
        }
    }

    nextStep() {
        if (this.currentStep < this.tutorials[this.learningPath].length - 1) {
            this.currentStep++;
            this.renderTutorialInterface();
        } else {
            this.completePath();
        }
    }

    previousStep() {
        if (this.currentStep > 0) {
            this.currentStep--;
            this.renderTutorialInterface();
        }
    }

    completePath() {
        this.showNotification(`Completed ${this.learningPath} path!`);
        // Advance to next learning path or show completion
    }

    showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'tutorial-notification';
        notification.textContent = message;
        document.body.appendChild(notification);

        setTimeout(() => {
            notification.remove();
        }, 3000);
    }

    loadProgress() {
        const saved = localStorage.getItem('promptotyping-progress');
        if (saved) {
            const data = JSON.parse(saved);
            this.progress = data.progress || this.progress;
            this.currentStep = data.currentStep || 0;
            this.learningPath = data.learningPath || 'beginner';
        }
    }

    saveProgress() {
        localStorage.setItem('promptotyping-progress', JSON.stringify({
            progress: this.progress,
            currentStep: this.currentStep,
            learningPath: this.learningPath
        }));
    }

    setupEventListeners() {
        window.addEventListener('beforeunload', () => this.saveProgress());
    }
}

// Initialize tutorial system when ready
let tutorial;
document.addEventListener('DOMContentLoaded', () => {
    tutorial = new PromptotypingTutorial();
});