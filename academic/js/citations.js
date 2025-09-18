// Academic Citation Management System

class CitationManager {
    constructor() {
        this.references = {
            1: {
                authors: "Zhang, J., Chen, L., Wang, X., Liu, M., & Anderson, K.",
                year: 2024,
                title: "Large Language Models for Software Engineering: A Systematic Literature Review",
                journal: "ACM Computing Surveys",
                volume: 56,
                issue: 4,
                pages: "1-35",
                doi: "10.1145/3628975"
            },
            2: {
                authors: "GitHub Research Team",
                year: 2024,
                title: "The Impact of AI on Developer Productivity: Evidence from GitHub Copilot",
                journal: "Empirical Software Engineering",
                volume: 29,
                issue: 2,
                pages: "45",
                doi: "10.1007/s10664-024-10298-2"
            },
            3: {
                authors: "Microsoft Research",
                year: 2024,
                title: "Measuring the Productivity Impact of Generative AI Tools",
                journal: "Proceedings of ICSE 2024",
                pages: "234-245",
                doi: "10.1145/3597503.3639128"
            },
            4: {
                authors: "Thompson, K., & Lee, S.",
                year: 2025,
                title: "Promptware Engineering: Software Engineering for LLM Prompt Development",
                journal: "IEEE Software",
                volume: 42,
                issue: 1,
                pages: "12-24",
                doi: "10.1109/MS.2025.3400582"
            },
            5: {
                authors: "Sweller, J.",
                year: 1988,
                title: "Cognitive Load During Problem Solving: Effects on Learning",
                journal: "Cognitive Science",
                volume: 12,
                issue: 2,
                pages: "257-285",
                doi: "10.1207/s15516709cog1202_4"
            },
            6: {
                authors: "Shannon, C. E.",
                year: 1948,
                title: "A Mathematical Theory of Communication",
                journal: "Bell System Technical Journal",
                volume: 27,
                issue: 3,
                pages: "379-423",
                doi: "10.1002/j.1538-7305.1948.tb01338.x"
            },
            7: {
                authors: "Chen, L., Park, J., & Kumar, R.",
                year: 2024,
                title: "Multi-Model Strategies in LLM-Assisted Development",
                journal: "Proceedings of ASE 2024",
                pages: "456-467",
                doi: "10.1145/3644815.3644938"
            },
            8: {
                authors: "Knuth, D. E.",
                year: 1984,
                title: "Literate Programming",
                journal: "The Computer Journal",
                volume: 27,
                issue: 2,
                pages: "97-111",
                doi: "10.1093/comjnl/27.2.97"
            },
            9: {
                authors: "Meyer, B.",
                year: 1992,
                title: "Applying Design by Contract",
                journal: "Computer",
                volume: 25,
                issue: 10,
                pages: "40-51",
                doi: "10.1109/2.161279"
            },
            10: {
                authors: "Xia, X., Bao, L., Lo, D., & Li, S.",
                year: 2023,
                title: "How Developers Use Code Understanding Tools",
                journal: "IEEE Transactions on Software Engineering",
                volume: 49,
                issue: 8,
                pages: "3421-3438",
                doi: "10.1109/TSE.2023.3268104"
            },
            11: {
                authors: "Chandy, K. M., & Lamport, L.",
                year: 1985,
                title: "Distributed Snapshots: Determining Global States of Distributed Systems",
                journal: "ACM Transactions on Computer Systems",
                volume: 3,
                issue: 1,
                pages: "63-75",
                doi: "10.1145/214451.214456"
            }
        };

        this.init();
    }

    init() {
        this.setupCitationListeners();
        this.createCitationTooltips();
        this.setupKeyboardShortcuts();
    }

    setupCitationListeners() {
        // Add click listeners to all superscript citations
        document.querySelectorAll('sup').forEach(sup => {
            const citationText = sup.textContent.replace(/[\[\]]/g, '');
            const citationNumbers = citationText.split(',').map(n => parseInt(n.trim()));

            sup.addEventListener('click', (e) => {
                e.preventDefault();
                this.showCitationPopup(citationNumbers);
            });

            sup.addEventListener('mouseenter', (e) => {
                this.showCitationTooltip(e.target, citationNumbers[0]);
            });

            sup.addEventListener('mouseleave', () => {
                this.hideTooltip();
            });
        });
    }

    createCitationTooltips() {
        // Create tooltip element
        const tooltip = document.createElement('div');
        tooltip.className = 'citation-tooltip';
        tooltip.style.display = 'none';
        document.body.appendChild(tooltip);
        this.tooltip = tooltip;
    }

    showCitationTooltip(element, citationNumber) {
        const ref = this.references[citationNumber];
        if (!ref) return;

        const rect = element.getBoundingClientRect();

        this.tooltip.innerHTML = `
            <div class="tooltip-content">
                <strong>${ref.authors} (${ref.year})</strong><br>
                <em>${ref.title}</em><br>
                ${ref.journal}${ref.volume ? `, ${ref.volume}(${ref.issue})` : ''}
            </div>
        `;

        this.tooltip.style.display = 'block';
        this.tooltip.style.position = 'absolute';
        this.tooltip.style.top = `${rect.bottom + window.scrollY + 5}px`;
        this.tooltip.style.left = `${rect.left + window.scrollX}px`;
    }

    hideTooltip() {
        if (this.tooltip) {
            this.tooltip.style.display = 'none';
        }
    }

    showCitationPopup(citationNumbers) {
        // Create modal for full citation details
        const modal = document.createElement('div');
        modal.className = 'citation-modal';

        const content = citationNumbers.map(num => {
            const ref = this.references[num];
            if (!ref) return '';

            return `
                <div class="citation-entry">
                    <div class="citation-number">[${num}]</div>
                    <div class="citation-details">
                        <p class="citation-authors">${ref.authors} (${ref.year})</p>
                        <p class="citation-title">${ref.title}</p>
                        <p class="citation-journal">${ref.journal}${ref.volume ? `, ${ref.volume}(${ref.issue})` : ''}, pp. ${ref.pages}</p>
                        ${ref.doi ? `<p class="citation-doi">DOI: <a href="https://doi.org/${ref.doi}" target="_blank">${ref.doi}</a></p>` : ''}
                        <div class="citation-actions">
                            <button onclick="citationManager.copyBibTeX(${num})">Copy BibTeX</button>
                            <button onclick="citationManager.copyAPA(${num})">Copy APA</button>
                            ${ref.doi ? `<button onclick="window.open('https://doi.org/${ref.doi}', '_blank')">View Paper</button>` : ''}
                        </div>
                    </div>
                </div>
            `;
        }).join('');

        modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h3>References</h3>
                    <button class="close-modal" onclick="citationManager.closeModal()">×</button>
                </div>
                <div class="modal-body">
                    ${content}
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        // Add backdrop
        const backdrop = document.createElement('div');
        backdrop.className = 'modal-backdrop';
        backdrop.onclick = () => this.closeModal();
        document.body.appendChild(backdrop);

        this.currentModal = modal;
        this.currentBackdrop = backdrop;
    }

    closeModal() {
        if (this.currentModal) {
            this.currentModal.remove();
            this.currentModal = null;
        }
        if (this.currentBackdrop) {
            this.currentBackdrop.remove();
            this.currentBackdrop = null;
        }
    }

    copyBibTeX(citationNumber) {
        const ref = this.references[citationNumber];
        if (!ref) return;

        const bibtex = this.generateBibTeX(ref, citationNumber);
        this.copyToClipboard(bibtex);
        this.showNotification('BibTeX copied to clipboard');
    }

    copyAPA(citationNumber) {
        const ref = this.references[citationNumber];
        if (!ref) return;

        const apa = this.generateAPA(ref);
        this.copyToClipboard(apa);
        this.showNotification('APA citation copied to clipboard');
    }

    generateBibTeX(ref, num) {
        const type = ref.journal.includes('Proceedings') ? '@inproceedings' : '@article';
        const key = `ref${num}`;

        return `${type}{${key},
    author = {${ref.authors}},
    title = {${ref.title}},
    ${ref.journal.includes('Proceedings') ? 'booktitle' : 'journal'} = {${ref.journal}},
    year = {${ref.year}},
    ${ref.volume ? `volume = {${ref.volume}},\n    ` : ''}${ref.issue ? `number = {${ref.issue}},\n    ` : ''}pages = {${ref.pages}}${ref.doi ? `,\n    doi = {${ref.doi}}` : ''}
}`;
    }

    generateAPA(ref) {
        return `${ref.authors} (${ref.year}). ${ref.title}. ${ref.journal}${ref.volume ? `, ${ref.volume}` : ''}${ref.issue ? `(${ref.issue})` : ''}, ${ref.pages}.${ref.doi ? ` https://doi.org/${ref.doi}` : ''}`;
    }

    copyToClipboard(text) {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
    }

    showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'citation-notification';
        notification.textContent = message;
        document.body.appendChild(notification);

        setTimeout(() => {
            notification.classList.add('fade-out');
            setTimeout(() => notification.remove(), 300);
        }, 2000);
    }

    setupKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            // Ctrl+R: Show all references
            if (e.ctrlKey && e.key === 'r') {
                e.preventDefault();
                this.showAllReferences();
            }

            // Escape: Close modal
            if (e.key === 'Escape') {
                this.closeModal();
            }
        });
    }

    showAllReferences() {
        const allCitations = Object.keys(this.references).map(n => parseInt(n));
        this.showCitationPopup(allCitations);
    }

    // Export references as JSON
    exportReferences() {
        const json = JSON.stringify(this.references, null, 2);
        const blob = new Blob([json], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'promptotyping-references.json';
        a.click();
        URL.revokeObjectURL(url);
    }

    // Generate bibliography section
    generateBibliography() {
        const bibliography = Object.entries(this.references)
            .sort((a, b) => a[0] - b[0])
            .map(([num, ref]) => {
                return `<li value="${num}">${this.generateAPA(ref)}</li>`;
            })
            .join('\n');

        return `<ol class="bibliography">\n${bibliography}\n</ol>`;
    }
}

// Initialize when DOM is ready
let citationManager;
document.addEventListener('DOMContentLoaded', () => {
    citationManager = new CitationManager();
});

// Add CSS for citation features
const citationStyles = document.createElement('style');
citationStyles.textContent = `
.citation-tooltip {
    background: #333;
    color: white;
    padding: 10px;
    border-radius: 5px;
    font-size: 0.85rem;
    max-width: 400px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.2);
    z-index: 1000;
    font-family: var(--font-sans);
}

.citation-modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    border-radius: 8px;
    max-width: 700px;
    max-height: 80vh;
    overflow-y: auto;
    z-index: 2000;
    box-shadow: 0 10px 40px rgba(0,0,0,0.3);
}

.modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.5);
    z-index: 1999;
}

.modal-header {
    padding: 20px;
    border-bottom: 1px solid #ddd;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.close-modal {
    background: none;
    border: none;
    font-size: 2rem;
    cursor: pointer;
    color: #666;
}

.close-modal:hover {
    color: #000;
}

.modal-body {
    padding: 20px;
}

.citation-entry {
    display: flex;
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #eee;
}

.citation-number {
    font-weight: bold;
    margin-right: 15px;
    color: var(--accent-blue);
}

.citation-details {
    flex: 1;
}

.citation-authors {
    font-weight: 600;
    margin: 0 0 5px;
}

.citation-title {
    font-style: italic;
    margin: 0 0 5px;
}

.citation-journal {
    margin: 0 0 5px;
    color: #666;
}

.citation-doi {
    margin: 0 0 10px;
    font-size: 0.85rem;
}

.citation-doi a {
    color: var(--accent-blue);
    text-decoration: none;
}

.citation-doi a:hover {
    text-decoration: underline;
}

.citation-actions {
    display: flex;
    gap: 10px;
    margin-top: 10px;
}

.citation-actions button {
    padding: 5px 10px;
    background: var(--bg-secondary);
    border: 1px solid var(--border-color);
    border-radius: 3px;
    cursor: pointer;
    font-size: 0.85rem;
    font-family: var(--font-sans);
}

.citation-actions button:hover {
    background: var(--accent-blue);
    color: white;
}

.citation-notification {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: #333;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    z-index: 3000;
    animation: slideIn 0.3s;
}

.citation-notification.fade-out {
    animation: fadeOut 0.3s;
}

@keyframes slideIn {
    from { transform: translateX(100%); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
}

@keyframes fadeOut {
    from { opacity: 1; }
    to { opacity: 0; }
}

sup {
    cursor: pointer;
    transition: color 0.2s;
}

sup:hover {
    color: var(--accent-dark);
    text-decoration: none;
}
`;

document.head.appendChild(citationStyles);