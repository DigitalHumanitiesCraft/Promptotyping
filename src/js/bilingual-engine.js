/**
 * Bilingual Paper Engine for Promptotyping v4.0
 * Handles language switching, content loading, and interactive features
 */

class BilingualPaperEngine {
  constructor() {
    this.currentLang = localStorage.getItem('promptotyping-lang') || 'de';
    this.paperData = null;
    this.currentChapter = null;
    this.translations = {
      de: {
        toc: 'Inhaltsverzeichnis',
        language: 'Sprache',
        downloadToolkit: 'Toolkit herunterladen',
        viewJournal: 'Journal-Beispiel anzeigen',
        phases: 'Phasen',
        back: 'Zurück',
        next: 'Weiter',
        search: 'Suchen...',
        version: 'Version',
        citation: 'Zitieren',
        abstract: 'Zusammenfassung'
      },
      en: {
        toc: 'Table of Contents',
        language: 'Language',
        downloadToolkit: 'Download Toolkit',
        viewJournal: 'View Journal Example',
        phases: 'Phases',
        back: 'Back',
        next: 'Next',
        search: 'Search...',
        version: 'Version',
        citation: 'Cite',
        abstract: 'Abstract'
      }
    };
  }

  async init() {
    await this.loadPaperData();
    this.setupLanguageSwitcher();
    this.setupNavigation();
    this.loadCurrentChapter();
    this.setupInteractiveFeatures();
  }

  async loadPaperData() {
    try {
      const response = await fetch('data/paper-bilingual.json');
      this.paperData = await response.json();
    } catch (error) {
      console.error('Failed to load paper data:', error);
    }
  }

  setupLanguageSwitcher() {
    const switcher = document.getElementById('language-switcher');
    if (!switcher) return;

    switcher.innerHTML = `
      <button class="lang-btn ${this.currentLang === 'de' ? 'active' : ''}" data-lang="de">
        DE
      </button>
      <button class="lang-btn ${this.currentLang === 'en' ? 'active' : ''}" data-lang="en">
        EN
      </button>
    `;

    switcher.addEventListener('click', (e) => {
      if (e.target.classList.contains('lang-btn')) {
        this.switchLanguage(e.target.dataset.lang);
      }
    });
  }

  switchLanguage(lang) {
    this.currentLang = lang;
    localStorage.setItem('promptotyping-lang', lang);
    
    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // Reload content
    this.updateUI();
    this.loadCurrentChapter();
  }

  updateUI() {
    // Update all UI text elements
    const t = this.translations[this.currentLang];
    
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.dataset.i18n;
      if (t[key]) {
        element.textContent = t[key];
      }
    });

    // Update metadata
    if (this.paperData) {
      document.getElementById('paper-title').textContent = 
        this.paperData.metadata.title[this.currentLang];
      document.getElementById('paper-subtitle').textContent = 
        this.paperData.metadata.subtitle[this.currentLang];
      document.getElementById('abstract-content').textContent = 
        this.paperData.abstract[this.currentLang];
    }
  }

  setupNavigation() {
    this.renderTableOfContents();
    this.setupChapterNavigation();
  }

  renderTableOfContents() {
    const tocContainer = document.getElementById('toc-container');
    if (!tocContainer || !this.paperData) return;

    const chapters = this.paperData.chapters.map(chapter => `
      <li class="toc-item ${chapter.id === this.currentChapter ? 'active' : ''}">
        <a href="#${chapter.id}" data-chapter="${chapter.id}">
          <span class="chapter-number">${chapter.number}</span>
          <span class="chapter-title">${chapter.title[this.currentLang]}</span>
        </a>
      </li>
    `).join('');

    tocContainer.innerHTML = `
      <h2 data-i18n="toc">${this.translations[this.currentLang].toc}</h2>
      <ol class="toc-list">${chapters}</ol>
    `;

    // Add click handlers
    tocContainer.addEventListener('click', (e) => {
      const chapterLink = e.target.closest('[data-chapter]');
      if (chapterLink) {
        e.preventDefault();
        this.loadChapter(chapterLink.dataset.chapter);
      }
    });
  }

  async loadChapter(chapterId) {
    const chapter = this.paperData.chapters.find(c => c.id === chapterId);
    if (!chapter) return;

    this.currentChapter = chapterId;
    
    // Load chapter content
    const contentPath = chapter.content_file[this.currentLang];
    try {
      const response = await fetch(`data/${contentPath}`);
      const chapterData = await response.json();
      this.renderChapter(chapterData);
      
      // Update URL without reload
      history.pushState({ chapter: chapterId }, '', `#${chapterId}`);
      
      // Update TOC active state
      document.querySelectorAll('.toc-item').forEach(item => {
        item.classList.toggle('active', 
          item.querySelector('[data-chapter]')?.dataset.chapter === chapterId);
      });
    } catch (error) {
      console.error(`Failed to load chapter ${chapterId}:`, error);
    }
  }

  renderChapter(chapterData) {
    const contentContainer = document.getElementById('chapter-content');
    if (!contentContainer) return;

    const sections = chapterData.sections.map(section => 
      this.renderSection(section)).join('');

    contentContainer.innerHTML = `
      <article class="chapter">
        <h1>${chapterData.title}</h1>
        ${sections}
      </article>
    `;

    // Render interactive components
    this.renderInteractiveComponents();
  }

  renderSection(section) {
    switch (section.type) {
      case 'text':
        return `<p>${section.content}</p>`;
      
      case 'heading':
        return `<h${section.level} id="${section.id || ''}">${section.content}</h${section.level}>`;
      
      case 'callout':
        return `
          <div class="callout callout-${section.style}">
            ${section.title ? `<div class="callout-title">${section.title}</div>` : ''}
            <div class="callout-content">${section.content}</div>
          </div>
        `;
      
      case 'code':
        return `
          <div class="code-block">
            ${section.title ? `<div class="code-title">${section.title}</div>` : ''}
            <pre><code class="language-${section.language || 'text'}">${this.escapeHtml(section.content)}</code></pre>
          </div>
        `;
      
      case 'comparison':
        return `
          <div class="comparison">
            ${section.title ? `<h3>${section.title}</h3>` : ''}
            <div class="comparison-content">
              <div class="comparison-left">
                <h4>${section.left.title}</h4>
                ${section.left.content || ''}
                ${section.left.items ? `<ul>${section.left.items.map(i => `<li>${i}</li>`).join('')}</ul>` : ''}
              </div>
              <div class="comparison-right">
                <h4>${section.right.title}</h4>
                ${section.right.content || ''}
                ${section.right.items ? `<ul>${section.right.items.map(i => `<li>${i}</li>`).join('')}</ul>` : ''}
              </div>
            </div>
          </div>
        `;
      
      case 'phase-navigator':
        return this.renderPhaseNavigator(section);
      
      case 'two-column':
        return `
          <div class="two-column">
            <div class="column">
              <h4>${section.left.title}</h4>
              <ul>${section.left.items.map(i => `<li>${i}</li>`).join('')}</ul>
            </div>
            <div class="column">
              <h4>${section.right.title}</h4>
              <ul>${section.right.items.map(i => `<li>${i}</li>`).join('')}</ul>
            </div>
          </div>
        `;
      
      case 'checklist':
        return `
          <div class="checklist">
            ${section.title ? `<h4>${section.title}</h4>` : ''}
            <ul class="checklist-items">
              ${section.items.map(item => `
                <li><span class="check-icon">✓</span> ${item}</li>
              `).join('')}
            </ul>
          </div>
        `;
      
      case 'progress-bar':
        return this.renderProgressBar(section);
      
      default:
        return '';
    }
  }

  renderPhaseNavigator(section) {
    const phases = section.phases.map(phase => `
      <div class="phase-card" style="border-color: ${phase.color}">
        <div class="phase-header" style="background: ${phase.color}">
          <span class="phase-name">${phase.name}</span>
        </div>
        <div class="phase-content">
          <p class="phase-description">${phase.description}</p>
          <div class="phase-document">📄 ${phase.document}</div>
          <div class="phase-tokens">🎯 ${phase.token_budget} tokens</div>
          ${phase.example_prompt ? `
            <details class="phase-prompt">
              <summary>Beispiel-Prompt</summary>
              <pre>${phase.example_prompt}</pre>
            </details>
          ` : ''}
          ${phase.note ? `<div class="phase-note">ℹ️ ${phase.note}</div>` : ''}
        </div>
      </div>
    `).join('<div class="phase-arrow">→</div>');

    return `
      <div class="phase-navigator" id="${section.id}">
        <div class="phase-flow">
          ${phases}
        </div>
      </div>
    `;
  }

  renderProgressBar(section) {
    const segments = section.segments.map(seg => `
      <div class="progress-segment" 
           style="width: ${seg.percentage}%; background: ${seg.color}">
        <span class="segment-label">${seg.label} (${seg.percentage}%)</span>
      </div>
    `).join('');

    return `
      <div class="progress-bar" id="${section.id}">
        ${segments}
      </div>
    `;
  }

  setupInteractiveFeatures() {
    this.setupToolkitDownload();
    this.setupJournalViewer();
    this.setupSearch();
  }

  setupToolkitDownload() {
    const downloadBtn = document.getElementById('download-toolkit');
    if (!downloadBtn) return;

    downloadBtn.addEventListener('click', async () => {
      // In production, this would trigger a download
      // For now, show the toolkit contents
      this.showToolkitModal();
    });
  }

  showToolkitModal() {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
      <div class="modal-content">
        <h2>Promptotyping Toolkit v4.0</h2>
        <div class="toolkit-contents">
          <h3>Templates:</h3>
          <ul>
            <li>📝 JOURNAL.template.md - ${this.currentLang === 'de' ? 'Entwicklungsprotokoll' : 'Development journal'}</li>
            <li>📋 README.template.md - ${this.currentLang === 'de' ? 'Projektkontext' : 'Project context'}</li>
            <li>🗂️ DATA.template.md - ${this.currentLang === 'de' ? 'Datenstrukturen' : 'Data structures'}</li>
            <li>🔍 EXPLORATION.template.md - ${this.currentLang === 'de' ? 'Exploration' : 'Exploration'}</li>
            <li>📑 REQUIREMENTS.template.md - ${this.currentLang === 'de' ? 'Anforderungen' : 'Requirements'}</li>
            <li>🔧 INSTRUCTIONS.template.md - ${this.currentLang === 'de' ? 'Implementierung' : 'Implementation'}</li>
          </ul>
          <h3>${this.currentLang === 'de' ? 'Beispiele:' : 'Examples:'}</h3>
          <ul>
            <li>Stefan Zweig Timeline Tool</li>
            <li>Simple Web Application</li>
          </ul>
        </div>
        <button class="modal-close">${this.currentLang === 'de' ? 'Schließen' : 'Close'}</button>
      </div>
    `;
    
    document.body.appendChild(modal);
    
    modal.querySelector('.modal-close').addEventListener('click', () => {
      modal.remove();
    });
  }

  setupJournalViewer() {
    // Interactive journal viewer for methodology chapter
    // This would show an interactive example of a journal entry
  }

  setupSearch() {
    const searchInput = document.getElementById('search-input');
    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase();
      if (query.length > 2) {
        this.performSearch(query);
      }
    });
  }

  performSearch(query) {
    // Simple search implementation
    // In production, this would search all chapter content
    console.log(`Searching for: ${query}`);
  }

  setupChapterNavigation() {
    const prevBtn = document.getElementById('prev-chapter');
    const nextBtn = document.getElementById('next-chapter');
    
    if (prevBtn) {
      prevBtn.addEventListener('click', () => this.navigateChapter(-1));
    }
    
    if (nextBtn) {
      nextBtn.addEventListener('click', () => this.navigateChapter(1));
    }
  }

  navigateChapter(direction) {
    if (!this.paperData || !this.currentChapter) return;
    
    const currentIndex = this.paperData.chapters.findIndex(
      c => c.id === this.currentChapter
    );
    
    const newIndex = currentIndex + direction;
    if (newIndex >= 0 && newIndex < this.paperData.chapters.length) {
      this.loadChapter(this.paperData.chapters[newIndex].id);
    }
  }

  loadCurrentChapter() {
    // Load chapter from URL hash or default to first chapter
    const hash = window.location.hash.slice(1);
    const chapterId = hash || (this.paperData?.chapters[0]?.id);
    
    if (chapterId) {
      this.loadChapter(chapterId);
    }
  }

  escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  renderInteractiveComponents() {
    // Apply syntax highlighting
    if (typeof Prism !== 'undefined') {
      Prism.highlightAll();
    }

    // Setup phase card interactions
    document.querySelectorAll('.phase-card').forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.classList.add('phase-card-hover');
      });
      card.addEventListener('mouseleave', () => {
        card.classList.remove('phase-card-hover');
      });
    });
  }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  const engine = new BilingualPaperEngine();
  engine.init();
});

// Export for use in other modules
window.BilingualPaperEngine = BilingualPaperEngine;