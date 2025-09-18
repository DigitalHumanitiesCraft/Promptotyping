/**
 * Interactive Academic Paper Engine
 * Renders JSON-based content into interactive HTML
 */

class PaperEngine {
    constructor() {
        this.paperData = null;
        this.chapters = {};
        this.useCases = {};
        this.currentChapter = null;
    }

    async initialize() {
        console.log('Starting paper initialization...');
        try {
            // Load main paper structure
            console.log('Loading main paper.json...');
            this.paperData = await this.loadJSON('data/paper.json');
            console.log('Paper data loaded:', this.paperData.title);

            // Load all use cases
            console.log('Loading use cases:', this.paperData.use_cases);
            for (const caseId of this.paperData.use_cases) {
                console.log(`Loading use case: ${caseId}...`);
                this.useCases[caseId] = await this.loadJSON(`data/use-cases/${caseId}.json`);
                console.log(`Use case ${caseId} loaded:`, this.useCases[caseId].title);
            }

            // Load all chapters
            console.log('Loading chapters...');
            for (const chapter of this.paperData.chapters) {
                console.log(`Loading chapter ${chapter.id} from ${chapter.content_file}...`);
                try {
                    this.chapters[chapter.id] = await this.loadJSON(chapter.content_file);
                    console.log(`Chapter ${chapter.id} loaded successfully`);
                } catch (chapterError) {
                    console.warn(`Failed to load chapter ${chapter.id}, creating placeholder...`, chapterError);
                    this.chapters[chapter.id] = {
                        title: chapter.title,
                        sections: [{
                            type: 'text',
                            content: `Chapter content not available yet (${chapter.content_file})`
                        }]
                    };
                }
            }

            // Render the paper
            console.log('Starting render...');
            this.render();
            this.attachEventHandlers();
            console.log('Paper initialization complete!');

        } catch (error) {
            console.error('Failed to initialize paper:', error);
            this.renderError(error);
        }
    }

    async loadJSON(path) {
        console.log(`Fetching: ${path}`);
        const response = await fetch(path);
        if (!response.ok) {
            console.error(`Failed to fetch ${path}: ${response.status} ${response.statusText}`);
            throw new Error(`Failed to load ${path}: ${response.statusText}`);
        }
        const data = await response.json();
        console.log(`Successfully loaded ${path}`);
        return data;
    }

    render() {
        const container = document.getElementById('paper-container');
        if (!container) {
            console.error('Paper container not found');
            return;
        }

        container.innerHTML = `
            ${this.renderHeader()}
            ${this.renderAbstract()}
            ${this.renderTableOfContents()}
            <main class="paper-content">
                ${this.renderChapters()}
            </main>
            ${this.renderFooter()}
            ${this.renderNavigationSidebar()}
        `;
    }

    renderNavigationSidebar() {
        return `
            <nav class="nav-sidebar" id="nav-sidebar">
                <h4>Quick Navigation</h4>
                <ul>
                    ${this.paperData.chapters.map(chapter => `
                        <li>
                            <a href="#chapter-${chapter.id}" data-nav-chapter="${chapter.id}">
                                ${chapter.number}. ${chapter.title.length > 25 ?
                                    chapter.title.substring(0, 25) + '...' : chapter.title}
                            </a>
                        </li>
                    `).join('')}
                </ul>
            </nav>
        `;
    }

    renderHeader() {
        return `
            <header class="paper-header">
                <h1>${this.paperData.title}</h1>
                <p class="subtitle">${this.paperData.subtitle}</p>
                <div class="authors">
                    ${this.paperData.authors.map(author => `
                        <div class="author">
                            <span class="author-name">${author.name}</span>
                            <span class="author-affiliation">${author.affiliation}</span>
                        </div>
                    `).join('')}
                </div>
                <div class="paper-meta">
                    <span class="version">Version ${this.paperData.version}</span>
                    <span class="date">${this.paperData.date}</span>
                </div>
            </header>
        `;
    }

    renderAbstract() {
        return `
            <section class="abstract">
                <h2>Abstract</h2>
                <p>${this.paperData.abstract}</p>
                <div class="keywords">
                    <strong>Keywords:</strong> ${this.paperData.keywords.join(', ')}
                </div>
            </section>
        `;
    }

    renderTableOfContents() {
        return `
            <nav class="table-of-contents">
                <h2>Contents</h2>
                <ol>
                    ${this.paperData.chapters.map(chapter => `
                        <li>
                            <a href="#chapter-${chapter.id}" data-chapter="${chapter.id}">
                                ${chapter.number}. ${chapter.title}
                            </a>
                        </li>
                    `).join('')}
                </ol>
            </nav>
        `;
    }

    renderChapters() {
        return this.paperData.chapters.map(chapterMeta => {
            const chapter = this.chapters[chapterMeta.id];
            if (!chapter) return '';

            return `
                <section id="chapter-${chapterMeta.id}" class="chapter">
                    <h2>${chapterMeta.number}. ${chapter.title}</h2>
                    ${this.renderChapterContent(chapter, chapterMeta)}
                </section>
            `;
        }).join('');
    }

    renderChapterContent(chapter, chapterMeta) {
        if (!chapter.sections) return '';

        return chapter.sections.map(section => {
            switch (section.type) {
                case 'text':
                    return `<p>${section.content}</p>`;

                case 'heading':
                    return `<h${section.level}>${section.content}</h${section.level}>`;

                case 'callout':
                    return `
                        <div class="callout callout-${section.style || 'info'}">
                            ${section.content}
                        </div>
                    `;

                case 'use_case_embed':
                    return this.renderUseCase(section.case_id, section.display_mode, section.highlight_sections);

                case 'pattern_analysis':
                    return this.renderPatternAnalysis(section);

                default:
                    return `<div>${section.content || ''}</div>`;
            }
        }).join('');
    }

    renderUseCase(caseId, displayMode = 'summary', highlightSections = []) {
        const useCase = this.useCases[caseId];
        if (!useCase) return '<p>Use case not found</p>';

        if (displayMode === 'summary') {
            return `
                <div class="use-case-summary" data-case-id="${caseId}">
                    <h4>${useCase.title}</h4>
                    <p>${useCase.summary}</p>
                    <button class="expand-case" data-case="${caseId}">View Details</button>
                </div>
            `;
        }

        return `
            <div class="use-case-detailed" data-case-id="${caseId}">
                <div class="use-case-header">
                    <h4>${useCase.title}</h4>
                    <div class="case-meta">
                        <span class="date">${useCase.date}</span>
                        <span class="duration">${useCase.duration}</span>
                    </div>
                </div>

                <div class="use-case-content">
                    ${this.renderUseCaseSection('Context', useCase.context, highlightSections.includes('context'))}
                    ${this.renderUseCaseSection('Process', useCase.process, highlightSections.includes('process'))}

                    ${highlightSections.includes('critical_interventions') && useCase.process.critical_interventions ? `
                        <div class="critical-interventions highlighted">
                            <h5>Critical Interventions</h5>
                            ${useCase.process.critical_interventions.map(intervention => `
                                <div class="intervention">
                                    <strong>${intervention.moment}:</strong>
                                    <p>${intervention.intervention}</p>
                                    <p class="impact">→ ${intervention.impact}</p>
                                </div>
                            `).join('')}
                        </div>
                    ` : ''}

                    ${highlightSections.includes('lessons_learned') && useCase.lessons_learned ? `
                        <div class="lessons-learned highlighted">
                            <h5>Lessons Learned</h5>
                            <ul>
                                ${useCase.lessons_learned.map(lesson => `
                                    <li>
                                        <strong>${lesson.insight}</strong>
                                        <br><em>${lesson.evidence}</em>
                                    </li>
                                `).join('')}
                            </ul>
                        </div>
                    ` : ''}

                    ${this.renderUseCaseSection('Outcomes', useCase.outcomes, highlightSections.includes('outcomes'))}

                    ${highlightSections.includes('methodological_reflection') && useCase.methodological_reflection ? `
                        <div class="methodological-reflection highlighted">
                            <h5>Methodological Reflection</h5>
                            <ul>
                                <li>Approach: ${useCase.methodological_reflection.approach_used}</li>
                                <li>Expert Role: ${useCase.methodological_reflection.expert_role}</li>
                                <li>Phase Flexibility: ${useCase.methodological_reflection.phase_flexibility}</li>
                            </ul>
                        </div>
                    ` : ''}
                </div>

                <button class="collapse-case" data-case="${caseId}">Collapse</button>
            </div>
        `;
    }

    renderUseCaseSection(title, content, highlighted = false) {
        if (!content) return '';

        const className = highlighted ? 'use-case-section highlighted' : 'use-case-section';

        return `
            <div class="${className}">
                <h5>${title}</h5>
                ${this.renderObject(content)}
            </div>
        `;
    }

    renderObject(obj) {
        if (Array.isArray(obj)) {
            return `<ul>${obj.map(item => `<li>${this.renderValue(item)}</li>`).join('')}</ul>`;
        }

        if (typeof obj === 'object' && obj !== null) {
            return `<dl>${Object.entries(obj).map(([key, value]) => `
                <dt>${this.formatKey(key)}</dt>
                <dd>${this.renderValue(value)}</dd>
            `).join('')}</dl>`;
        }

        return this.renderValue(obj);
    }

    renderValue(value) {
        if (Array.isArray(value)) {
            return `<ul>${value.map(item => `<li>${this.renderValue(item)}</li>`).join('')}</ul>`;
        }

        if (typeof value === 'object' && value !== null) {
            return this.renderObject(value);
        }

        return value;
    }

    formatKey(key) {
        return key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    }

    renderPatternAnalysis(config) {
        const patterns = this.analyzePatterns(config.analyze_fields || []);

        if (config.display_mode === 'comparison_table') {
            return this.renderComparisonTable(patterns);
        }

        return `
            <div class="pattern-analysis">
                <h5>Cross-Case Patterns</h5>
                ${this.renderPatterns(patterns)}
            </div>
        `;
    }

    analyzePatterns(fields) {
        const patterns = {};

        for (const field of fields) {
            patterns[field] = {};

            for (const [caseId, caseData] of Object.entries(this.useCases)) {
                const value = this.getNestedValue(caseData, field);
                if (value) {
                    if (Array.isArray(value)) {
                        value.forEach(item => {
                            const key = typeof item === 'object' ? item.phase || item.insight || JSON.stringify(item) : item;
                            patterns[field][key] = (patterns[field][key] || []).concat(caseId);
                        });
                    } else {
                        patterns[field][value] = (patterns[field][value] || []).concat(caseId);
                    }
                }
            }
        }

        return patterns;
    }

    getNestedValue(obj, path) {
        return path.split('.').reduce((current, part) => current && current[part], obj);
    }

    renderPatterns(patterns) {
        return Object.entries(patterns).map(([field, values]) => `
            <div class="pattern-field">
                <h6>${this.formatKey(field)}</h6>
                <ul>
                    ${Object.entries(values).map(([value, cases]) => `
                        <li>${value}: ${cases.join(', ')}</li>
                    `).join('')}
                </ul>
            </div>
        `).join('');
    }

    renderComparisonTable(patterns) {
        const allCases = Object.keys(this.useCases);

        return `
            <table class="comparison-table">
                <thead>
                    <tr>
                        <th>Aspect</th>
                        ${allCases.map(caseId => `<th>${this.useCases[caseId].title}</th>`).join('')}
                    </tr>
                </thead>
                <tbody>
                    ${Object.entries(patterns).map(([field, _]) => `
                        <tr>
                            <td><strong>${this.formatKey(field)}</strong></td>
                            ${allCases.map(caseId => {
                                const value = this.getNestedValue(this.useCases[caseId], field);
                                return `<td>${this.renderComparisonCell(value)}</td>`;
                            }).join('')}
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        `;
    }

    renderComparisonCell(value) {
        if (!value) return '-';

        if (Array.isArray(value)) {
            if (value.length === 0) return '-';
            if (typeof value[0] === 'object') {
                return value.map(item => item.phase || item.insight || '•').join(', ');
            }
            return value.join(', ');
        }

        if (typeof value === 'object') {
            return Object.keys(value).join(', ');
        }

        return value;
    }

    renderFooter() {
        return `
            <footer class="paper-footer">
                <div class="citation">
                    <h3>Citation</h3>
                    <p>${this.paperData.citation.format}</p>
                </div>
                <div class="interactive-features">
                    <h3>Interactive Features</h3>
                    <p>Click on use cases to expand details. Use the pattern analysis to compare across cases.</p>
                </div>
            </footer>
        `;
    }

    renderError(error) {
        const container = document.getElementById('paper-container');
        if (container) {
            container.innerHTML = `
                <div class="error-message">
                    <h2>Failed to Load Paper</h2>
                    <p>${error.message}</p>
                    <p>Please check the console for more details.</p>
                </div>
            `;
        }
    }

    attachEventHandlers() {
        // Expand/collapse use cases
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('expand-case')) {
                const caseId = e.target.dataset.case;
                this.expandCase(caseId);
            }

            if (e.target.classList.contains('collapse-case')) {
                const caseId = e.target.dataset.case;
                this.collapseCase(caseId);
            }

            // Smooth scroll to chapters
            if (e.target.dataset.chapter || e.target.dataset.navChapter) {
                e.preventDefault();
                const chapterId = e.target.dataset.chapter || e.target.dataset.navChapter;
                const element = document.getElementById(`chapter-${chapterId}`);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });

        // Track scroll position for navigation highlighting
        this.setupScrollTracking();
    }

    setupScrollTracking() {
        const chapters = document.querySelectorAll('.chapter');
        const navLinks = document.querySelectorAll('.nav-sidebar a');

        const observerOptions = {
            rootMargin: '-20% 0px -70% 0px'
        };

        const observerCallback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const chapterId = entry.target.id.replace('chapter-', '');

                    // Update navigation
                    navLinks.forEach(link => {
                        if (link.dataset.navChapter === chapterId) {
                            link.classList.add('active');
                        } else {
                            link.classList.remove('active');
                        }
                    });
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        chapters.forEach(chapter => observer.observe(chapter));
    }

    expandCase(caseId) {
        const summary = document.querySelector(`.use-case-summary[data-case-id="${caseId}"]`);
        if (summary) {
            const detailed = this.renderUseCase(caseId, 'detailed', ['critical_interventions', 'lessons_learned']);
            summary.outerHTML = detailed;
        }
    }

    collapseCase(caseId) {
        const detailed = document.querySelector(`.use-case-detailed[data-case-id="${caseId}"]`);
        if (detailed) {
            const summary = this.renderUseCase(caseId, 'summary');
            detailed.outerHTML = summary;
        }
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const engine = new PaperEngine();
    engine.initialize();
});