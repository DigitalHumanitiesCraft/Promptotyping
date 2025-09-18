// Academic Paper Enhancements

class AcademicEnhancements {
    constructor() {
        this.init();
    }

    init() {
        this.setupTableOfContents();
        this.setupFigureReferences();
        this.enhanceTables();
        this.setupPrintOptimization();
        this.addReadingProgress();
        this.setupAccessibilityFeatures();
    }

    // Generate dynamic table of contents
    setupTableOfContents() {
        const sections = document.querySelectorAll('.paper-section h2, .paper-section h3');
        const tocHTML = this.generateTOC(sections);

        // Add floating TOC
        const toc = document.createElement('div');
        toc.className = 'floating-toc';
        toc.innerHTML = `
            <button class="toc-toggle" aria-label="Toggle table of contents">☰</button>
            <div class="toc-content">
                <h4>Contents</h4>
                ${tocHTML}
            </div>
        `;
        document.body.appendChild(toc);

        // Toggle TOC visibility
        const toggle = toc.querySelector('.toc-toggle');
        const content = toc.querySelector('.toc-content');
        toggle.addEventListener('click', () => {
            content.classList.toggle('visible');
            toggle.classList.toggle('active');
        });

        // Highlight current section on scroll
        this.highlightCurrentSection();
    }

    generateTOC(sections) {
        let html = '<ul class="toc-list">';
        let currentLevel = 2;

        sections.forEach((section, index) => {
            const level = parseInt(section.tagName.charAt(1));
            const id = section.parentElement.id || `section-${index}`;
            const text = section.textContent;

            if (level > currentLevel) {
                html += '<ul class="toc-sublist">';
            } else if (level < currentLevel) {
                html += '</ul>';
            }

            html += `<li class="toc-item level-${level}">
                <a href="#${id}" class="toc-link">${text}</a>
            </li>`;

            currentLevel = level;

            // Ensure section has ID for linking
            if (!section.parentElement.id) {
                section.parentElement.id = id;
            }
        });

        html += '</ul>';
        return html;
    }

    highlightCurrentSection() {
        const sections = document.querySelectorAll('.paper-section');
        const tocLinks = document.querySelectorAll('.toc-link');

        const observerOptions = {
            rootMargin: '-20% 0px -70% 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.id;
                    tocLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${id}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        }, observerOptions);

        sections.forEach(section => observer.observe(section));
    }

    // Setup figure and table references
    setupFigureReferences() {
        // Number all figures
        const figures = document.querySelectorAll('.figure');
        figures.forEach((figure, index) => {
            const figNum = index + 1;
            figure.setAttribute('data-figure-number', figNum);

            // Update figure caption if exists
            const caption = figure.querySelector('.figure-caption');
            if (caption && !caption.textContent.includes('Figure')) {
                caption.innerHTML = `<strong>Figure ${figNum}:</strong> ${caption.innerHTML}`;
            }
        });

        // Number all tables
        const tables = document.querySelectorAll('.data-table, .results-table');
        tables.forEach((table, index) => {
            const tableNum = index + 1;
            table.setAttribute('data-table-number', tableNum);

            // Add table caption if not exists
            if (!table.previousElementSibling?.classList.contains('table-caption')) {
                const caption = document.createElement('p');
                caption.className = 'table-caption';
                caption.innerHTML = `<strong>Table ${tableNum}:</strong> ${table.getAttribute('data-caption') || 'Data table'}`;
                table.parentNode.insertBefore(caption, table);
            }
        });
    }

    // Enhance tables with sorting and filtering
    enhanceTables() {
        const tables = document.querySelectorAll('.data-table, .results-table');

        tables.forEach(table => {
            // Add sorting to headers
            const headers = table.querySelectorAll('th');
            headers.forEach((header, index) => {
                header.style.cursor = 'pointer';
                header.setAttribute('data-sort', 'none');

                // Add sort indicator
                const sortIndicator = document.createElement('span');
                sortIndicator.className = 'sort-indicator';
                sortIndicator.textContent = ' ↕';
                header.appendChild(sortIndicator);

                header.addEventListener('click', () => {
                    this.sortTable(table, index, header);
                });
            });

            // Add hover effect for rows
            const rows = table.querySelectorAll('tbody tr');
            rows.forEach(row => {
                row.addEventListener('mouseenter', () => {
                    row.style.background = 'var(--bg-secondary)';
                });
                row.addEventListener('mouseleave', () => {
                    row.style.background = '';
                });
            });
        });
    }

    sortTable(table, columnIndex, header) {
        const tbody = table.querySelector('tbody');
        const rows = Array.from(tbody.querySelectorAll('tr'));
        const currentSort = header.getAttribute('data-sort');

        // Reset other headers
        table.querySelectorAll('th').forEach(th => {
            if (th !== header) {
                th.setAttribute('data-sort', 'none');
                th.querySelector('.sort-indicator').textContent = ' ↕';
            }
        });

        // Determine new sort direction
        const newSort = currentSort === 'asc' ? 'desc' : 'asc';
        header.setAttribute('data-sort', newSort);

        // Update sort indicator
        const indicator = header.querySelector('.sort-indicator');
        indicator.textContent = newSort === 'asc' ? ' ↑' : ' ↓';

        // Sort rows
        rows.sort((a, b) => {
            const aValue = a.cells[columnIndex].textContent.trim();
            const bValue = b.cells[columnIndex].textContent.trim();

            // Check if numeric
            const aNum = parseFloat(aValue);
            const bNum = parseFloat(bValue);

            if (!isNaN(aNum) && !isNaN(bNum)) {
                return newSort === 'asc' ? aNum - bNum : bNum - aNum;
            }

            // String comparison
            return newSort === 'asc'
                ? aValue.localeCompare(bValue)
                : bValue.localeCompare(aValue);
        });

        // Reorder rows
        rows.forEach(row => tbody.appendChild(row));
    }

    // Optimize for printing
    setupPrintOptimization() {
        // Add print button
        const printBtn = document.createElement('button');
        printBtn.className = 'print-button';
        printBtn.innerHTML = '🖨 Print';
        printBtn.addEventListener('click', () => {
            window.print();
        });
        document.querySelector('.academic-header').appendChild(printBtn);

        // Before print event
        window.addEventListener('beforeprint', () => {
            // Expand all collapsed content
            document.querySelectorAll('.collapsible').forEach(el => {
                el.classList.add('expanded');
            });

            // Show all citations inline
            this.inlineCitations();
        });

        // After print event
        window.addEventListener('afterprint', () => {
            // Restore collapsed state
            document.querySelectorAll('.collapsible').forEach(el => {
                el.classList.remove('expanded');
            });
        });
    }

    inlineCitations() {
        // Add full citations as footnotes for printing
        const citations = document.querySelectorAll('sup');
        citations.forEach(sup => {
            const citNum = sup.textContent.replace(/[\[\]]/g, '');
            const footnote = document.createElement('span');
            footnote.className = 'print-footnote';
            footnote.textContent = ` [See reference ${citNum}]`;
            sup.appendChild(footnote);
        });
    }

    // Add reading progress indicator
    addReadingProgress() {
        const progressBar = document.createElement('div');
        progressBar.className = 'reading-progress';
        document.body.appendChild(progressBar);

        window.addEventListener('scroll', () => {
            const winScroll = document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            progressBar.style.width = scrolled + '%';
        });

        // Add reading time estimate
        const wordCount = document.querySelector('.academic-content').textContent.split(/\s+/).length;
        const readingTime = Math.ceil(wordCount / 200); // 200 words per minute

        const readingTimeEl = document.createElement('div');
        readingTimeEl.className = 'reading-time';
        readingTimeEl.innerHTML = `📖 Estimated reading time: ${readingTime} minutes`;
        document.querySelector('.paper-metadata').appendChild(readingTimeEl);
    }

    // Accessibility enhancements
    setupAccessibilityFeatures() {
        // Add skip links
        const skipLink = document.createElement('a');
        skipLink.href = '#abstract';
        skipLink.className = 'skip-link';
        skipLink.textContent = 'Skip to main content';
        document.body.insertBefore(skipLink, document.body.firstChild);

        // Ensure all images have alt text
        document.querySelectorAll('img').forEach(img => {
            if (!img.alt) {
                img.alt = 'Figure illustration';
            }
        });

        // Add ARIA labels
        document.querySelector('.academic-nav').setAttribute('role', 'navigation');
        document.querySelector('.academic-content').setAttribute('role', 'main');
        document.querySelector('.academic-footer').setAttribute('role', 'contentinfo');

        // Keyboard navigation for interactive elements
        document.querySelectorAll('button, a, [tabindex]').forEach(el => {
            el.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    el.click();
                }
            });
        });
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new AcademicEnhancements();
});

// Add required CSS
const enhancementStyles = document.createElement('style');
enhancementStyles.textContent = `
/* Floating Table of Contents */
.floating-toc {
    position: fixed;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
    z-index: 100;
}

.toc-toggle {
    background: var(--accent-blue);
    color: white;
    border: none;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1.2rem;
}

.toc-toggle.active {
    background: var(--accent-dark);
}

.toc-content {
    display: none;
    background: white;
    border: 1px solid var(--border-color);
    border-radius: 5px;
    padding: 20px;
    margin-top: 10px;
    max-height: 70vh;
    overflow-y: auto;
    min-width: 250px;
}

.toc-content.visible {
    display: block;
}

.toc-list {
    list-style: none;
    padding: 0;
}

.toc-sublist {
    list-style: none;
    padding-left: 20px;
}

.toc-link {
    color: var(--text-secondary);
    text-decoration: none;
    display: block;
    padding: 5px 0;
    font-size: 0.9rem;
    transition: color 0.2s;
}

.toc-link:hover {
    color: var(--accent-blue);
}

.toc-link.active {
    color: var(--accent-blue);
    font-weight: 600;
}

/* Reading Progress */
.reading-progress {
    position: fixed;
    top: 0;
    left: 0;
    height: 3px;
    background: var(--accent-blue);
    transition: width 0.2s;
    z-index: 1000;
}

.reading-time {
    margin-left: 20px;
    color: var(--text-muted);
}

/* Print Button */
.print-button {
    position: absolute;
    right: 20px;
    top: 20px;
    padding: 8px 15px;
    background: white;
    border: 1px solid var(--border-color);
    border-radius: 5px;
    cursor: pointer;
    font-family: var(--font-sans);
}

.print-button:hover {
    background: var(--bg-secondary);
}

/* Sort Indicators */
.sort-indicator {
    opacity: 0.5;
    font-size: 0.8em;
}

th[data-sort="asc"] .sort-indicator,
th[data-sort="desc"] .sort-indicator {
    opacity: 1;
    color: var(--accent-blue);
}

/* Skip Link */
.skip-link {
    position: absolute;
    top: -40px;
    left: 0;
    background: var(--accent-blue);
    color: white;
    padding: 8px;
    text-decoration: none;
}

.skip-link:focus {
    top: 0;
}

/* Print Styles */
@media print {
    .floating-toc,
    .reading-progress,
    .print-button {
        display: none !important;
    }

    .print-footnote {
        display: inline;
        font-size: 0.8em;
        font-style: italic;
    }
}

/* Responsive TOC */
@media (max-width: 1200px) {
    .floating-toc {
        left: 10px;
    }
}

@media (max-width: 768px) {
    .floating-toc {
        position: fixed;
        left: auto;
        right: 10px;
        top: auto;
        bottom: 20px;
        transform: none;
    }
}
`;

document.head.appendChild(enhancementStyles);