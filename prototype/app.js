// ===================================
// Interactive Paper - Promptotyping
// Main Application Logic
// ===================================

// === Global State ===
let useCasesData = [];
let currentPanel = null;

// === Initialization ===
document.addEventListener('DOMContentLoaded', async () => {
  try {
    await loadData();
    await renderPaperContent();
    renderUseCaseCards();
    initNarrativeNav();
    initScrollProgress();
  } catch (error) {
    console.error('Initialization error:', error);
    document.getElementById('main-content').innerHTML =
      '<p style="color: #ef4444; padding: 2rem;">Fehler beim Laden der Anwendung. Bitte Seite neu laden.</p>';
  }
});

// === Load Data ===
async function loadData() {
  try {
    const response = await fetch('data.json');
    if (!response.ok) throw new Error('Failed to load data.json');
    const data = await response.json();
    useCasesData = data.useCases;
    console.log(`✅ Loaded ${useCasesData.length} use cases`);
  } catch (error) {
    console.error('Error loading data:', error);
    throw error;
  }
}

// === Render Paper Content ===
async function renderPaperContent() {
  const mainContent = document.getElementById('main-content');

  try {
    // Load complete paper content from file
    const response = await fetch('paper-content.md');
    if (!response.ok) throw new Error(`HTTP ${response.status}: Failed to load paper-content.md`);

    const paperMarkdown = await response.text();
    const html = marked.parse(paperMarkdown);
    mainContent.innerHTML = html;
    console.log('✅ Loaded complete paper from paper-content.md');

  } catch (error) {
    console.warn('⚠️ Could not load paper-content.md, using fallback:', error.message);

    // Fallback to abbreviated version
    const fallbackMarkdown = `
# Promptotyping
## Ein Praxisbericht zur strukturierten LLM-assistierten Entwicklung in den Digital Humanities

---

## Abstract

Large Language Models transformieren die Softwareentwicklung fundamental. Dieser Praxisbericht präsentiert **Promptotyping** als strukturierten Ansatz für explorative Entwicklung. Die Methode entstand iterativ aus sieben Digital Humanities-Projekten über fünf Monate.

---

## Hinweis

Das vollständige Paper konnte nicht geladen werden. Bitte stellen Sie sicher, dass \`paper-content.md\` im gleichen Verzeichnis wie diese HTML-Datei liegt.

**Fehlerdetails:** ${error.message}
`;

    const html = marked.parse(fallbackMarkdown);
    mainContent.innerHTML = html;
  }
}

// === Render Use Case Cards ===
function renderUseCaseCards() {
  useCasesData.forEach(useCase => {
    const placeholder = document.querySelector(`[data-id="${useCase.id}"]`);
    if (!placeholder) {
      console.warn(`Placeholder for ${useCase.id} not found`);
      return;
    }

    const card = createUseCaseCard(useCase);
    placeholder.replaceWith(card);
  });
}

function createUseCaseCard(useCase) {
  const card = document.createElement('div');
  card.className = 'use-case-card';

  card.innerHTML = `
    <div class="card-content">
      <div class="card-header">
        <h4>${useCase.title}</h4>
        <span class="category-badge ${useCase.category}">${capitalize(useCase.category)}</span>
      </div>
      <div class="card-meta">
        <span>⏱️ ${useCase.timeInvestment}h</span>
        <span>📄 ${useCase.documentCount} Docs</span>
        <span>🔄 Iteration ${useCase.iteration}</span>
      </div>
    </div>
    <button class="card-explore" data-panel-id="${useCase.id}">
      Explore →
    </button>
  `;

  // Event Listener
  const exploreBtn = card.querySelector('.card-explore');
  exploreBtn.addEventListener('click', () => openPanel(useCase.id));

  return card;
}

// === Slide Panel Functions ===
function openPanel(useCaseId) {
  const useCase = useCasesData.find(uc => uc.id === useCaseId);
  if (!useCase) {
    console.warn(`Use Case ${useCaseId} not found`);
    return;
  }

  // Create panel if not exists
  let panel = document.getElementById(`panel-${useCaseId}`);
  if (!panel) {
    panel = createPanel(useCase);
    document.getElementById('slide-panels').appendChild(panel);
  }

  // Open panel
  panel.classList.add('active');
  document.body.style.overflow = 'hidden';
  currentPanel = panel;
}

function createPanel(useCase) {
  const panel = document.createElement('div');
  panel.className = 'slide-panel';
  panel.id = `panel-${useCase.id}`;

  // Documents list
  const documentsHTML = useCase.documents.length > 0
    ? useCase.documents.map(doc => `
        <li>
          <span class="doc-icon">📄</span>
          <div>
            <strong>${doc.filename}</strong><br>
            <small style="color: var(--color-text-muted);">${doc.phase} • ${doc.description}</small>
          </div>
        </li>
      `).join('')
    : '<p style="color: var(--color-text-muted);">Keine formalen Dokumente (Vibe Coding Ansatz)</p>';

  // Demo links
  const demoLinks = Array.isArray(useCase.demo)
    ? useCase.demo.map((url, i) => `
        <a href="${url}" class="btn-link" target="_blank" rel="noopener">
          🔗 Demo ${i + 1}
        </a>
      `).join('')
    : `<a href="${useCase.demo}" class="btn-link" target="_blank" rel="noopener">🔗 Demo</a>`;

  // Extra links
  const extraLinks = [];
  if (useCase.video) extraLinks.push(`<a href="${useCase.video}" class="btn-link" target="_blank" rel="noopener">🎥 Video</a>`);
  if (useCase.blog) extraLinks.push(`<a href="${useCase.blog}" class="btn-link" target="_blank" rel="noopener">📝 Blog</a>`);
  if (useCase.slides) extraLinks.push(`<a href="${useCase.slides}" class="btn-link" target="_blank" rel="noopener">📊 Slides</a>`);

  // Primary demo URL for iframe
  const primaryDemo = Array.isArray(useCase.demo) ? useCase.demo[0] : useCase.demo;

  panel.innerHTML = `
    <div class="panel-overlay"></div>
    <div class="panel-content">
      <button class="panel-close" aria-label="Schließen">✕</button>

      <div class="panel-header">
        <h2>${useCase.title}</h2>
        <div class="panel-meta">
          <span class="category-badge ${useCase.category}">${capitalize(useCase.category)}</span>
          <span class="meta-text">${useCase.timeInvestment}h • ${useCase.documentCount} Docs • Iteration ${useCase.iteration}</span>
        </div>
      </div>

      <div class="panel-body">
        <section>
          <h3>Kontext</h3>
          <p>${useCase.context}</p>
          ${useCase.scope ? `<p><strong>Umfang:</strong> ${useCase.scope}</p>` : ''}
        </section>

        <section class="live-preview-section">
          <h3>Live-Vorschau</h3>
          <div class="iframe-container">
            <iframe
              src="${primaryDemo}"
              title="${useCase.title} - Live Demo"
              loading="lazy"
              sandbox="allow-scripts allow-same-origin allow-popups"
            ></iframe>
          </div>
          <p style="font-size: var(--text-sm); color: var(--color-text-muted); margin-top: 0.5rem;">
            💡 Hinweis: Die Demo wird in einem sicheren iframe geladen. Für volle Funktionalität öffnen Sie die Demo in einem neuen Tab.
          </p>
        </section>

        ${useCase.documents.length > 0 ? `
          <section>
            <h3>Promptotyping-Dokumente</h3>
            <ul class="doc-list">
              ${documentsHTML}
            </ul>
          </section>
        ` : ''}

        <section>
          <h3>Links</h3>
          <div class="link-row">
            ${demoLinks}
            <a href="${useCase.repository}" class="btn-link" target="_blank" rel="noopener">💻 Repository</a>
            ${extraLinks.join('')}
          </div>
        </section>

        <section>
          <h3>Prozessnotizen</h3>
          <ul class="note-list">
            ${useCase.processNotes.map(note => `<li>${note}</li>`).join('')}
          </ul>
        </section>

        <section>
          <h3>Tools & LLMs</h3>
          <p><strong>LLMs:</strong> ${useCase.llms.join(', ')}</p>
          ${useCase.tools ? `<p><strong>Tools:</strong> ${useCase.tools.join(', ')}</p>` : ''}
          <p><strong>Tags:</strong> ${useCase.tags.join(', ')}</p>
        </section>
      </div>
    </div>
  `;

  // Event Listeners
  panel.querySelector('.panel-close').addEventListener('click', closePanel);
  panel.querySelector('.panel-overlay').addEventListener('click', closePanel);

  return panel;
}

function closePanel() {
  if (currentPanel) {
    currentPanel.classList.remove('active');
    document.body.style.overflow = '';
    currentPanel = null;
  }
}

// ESC key closes panel
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && currentPanel) {
    closePanel();
  }
});

// === Narrative Navigation ===
function initNarrativeNav() {
  const nav = document.getElementById('narrative-nav');
  const headings = document.querySelectorAll('#main-content h2');

  if (headings.length === 0) {
    console.warn('No H2 headings found for navigation');
    return;
  }

  // Add IDs to headings if missing
  headings.forEach((heading, index) => {
    if (!heading.id) {
      heading.id = `section-${index}`;
    }
  });

  // Build navigation
  const navHTML = Array.from(headings).map((heading, index) => {
    const text = heading.textContent.trim();
    const shortText = text.length > 25 ? text.substring(0, 25) + '...' : text;

    return `
      <a href="#${heading.id}"
         class="nav-point"
         data-index="${index}"
         title="${text}">
        <span class="nav-dot"></span>
        <span class="nav-label">${shortText}</span>
      </a>
    `;
  }).join('');

  nav.innerHTML = `<div class="nav-line"></div>${navHTML}`;

  // Show navigation
  setTimeout(() => nav.classList.add('loaded'), 300);

  // Click handlers
  nav.querySelectorAll('.nav-point').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const target = document.getElementById(targetId);
      if (target) {
        const offset = 80; // Header height + padding
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  // Update active state on scroll
  updateActiveNavPoint();
  window.addEventListener('scroll', updateActiveNavPoint);
}

function updateActiveNavPoint() {
  const headings = document.querySelectorAll('#main-content h2');
  const navPoints = document.querySelectorAll('.nav-point');

  let activeIndex = 0;
  const scrollPos = window.scrollY + 150; // Offset for header

  headings.forEach((heading, index) => {
    if (heading.offsetTop <= scrollPos) {
      activeIndex = index;
    }
  });

  navPoints.forEach((point, index) => {
    point.classList.toggle('active', index === activeIndex);
  });
}

// === Scroll Progress ===
function initScrollProgress() {
  const progressBar = document.getElementById('progress-bar');

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = Math.min(Math.max((scrollTop / docHeight) * 100, 0), 100);
    progressBar.style.width = `${progress}%`;
  });
}

// === Helper Functions ===
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// === Console Info ===
console.log('%c✨ Interactive Paper - Promptotyping', 'font-size: 16px; font-weight: bold; color: #2563eb;');
console.log('%cGenerated with Claude Code & Promptotyping Method', 'color: #737373;');
console.log('GitHub: https://github.com/chpollin/');
