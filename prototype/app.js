// ===================================
// Interactive Paper - Promptotyping
// Main Application Logic
// ===================================

// === Global State ===
let useCasesData = [];
let currentPanel = null;
let tutorialData = {};
let currentChapter = 'einleitung';

// === Initialization ===
document.addEventListener('DOMContentLoaded', async () => {
  try {
    await loadData();
    await loadTutorialData();
    await renderPaperContent();
    renderUseCaseCards();
    initNarrativeNav();
    initTutorialSidebar();
    initInteractiveModules(); // Initialize the interactive modules
  } catch (error) {
    console.error('Initialization error:', error);
    document.getElementById('main-content').innerHTML =
      '<p style="color: #ef4444; padding: 2rem;">Fehler beim Laden der Anwendung. Bitte Seite neu laden.</p>';
  }
});

// === Load Data ===
async function loadData() {
  try {
    const response = await fetch('./data.json');
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
    // Try to load the real paper content first
    let response = await fetch('./paper-content-real.md');

    // Fallback to Living Paper if real content not available
    if (!response.ok) {
      console.warn('paper-content-real.md not found, falling back to paper-content-living.md');
      response = await fetch('./paper-content-living.md');
    }

    // Final fallback to original paper content
    if (!response.ok) {
      console.warn('paper-content-living.md not found, falling back to paper-content.md');
      response = await fetch('./paper-content.md');
    }

    if (!response.ok) throw new Error(`HTTP ${response.status}: Failed to load paper content`);

    const paperMarkdown = await response.text();
    const html = marked.parse(paperMarkdown);

    // Wrap content in a reading area div + add sidebar
    mainContent.innerHTML = `
      <div class="reading-area">
        ${html}
      </div>
      <aside class="meta-sidebar">
        <!-- Tutorial content will be loaded dynamically -->
      </aside>
    `;

    // Add IDs to H2 elements for chapter navigation
    addChapterIds();

    console.log('✅ Loaded complete paper from paper-content.md');
    console.log('📊 Grid children:', mainContent.children.length);
    console.log('📍 Reading area:', mainContent.querySelector('.reading-area'));
    console.log('📍 Meta sidebar:', mainContent.querySelector('.meta-sidebar'));

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
    mainContent.innerHTML = `
      <div class="reading-area">
        ${html}
      </div>
      <aside class="meta-sidebar">
        <!-- Tutorial content will be loaded dynamically -->
      </aside>
    `;
  }
}

// === Render Use Case Cards ===
function renderUseCaseCards() {
  useCasesData.forEach(useCase => {
    const placeholder = document.querySelector(`.reading-area [data-id="${useCase.id}"]`);
    if (!placeholder) {
      console.warn(`Placeholder for ${useCase.id} not found`);
      return;
    }

    const card = createUseCaseCard(useCase);
    placeholder.replaceWith(card);

    // Add observer for use case cards to update tutorial
    observeUseCaseForTutorial(card, useCase);
  });
}

function createUseCaseCard(useCase) {
  const card = document.createElement('div');
  card.className = 'use-case-card';

  card.innerHTML = `
    <div class="card-content">
      <div class="card-header">
        <h4>${useCase.title}</h4>
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

      <section class="live-preview-section">
        <div class="iframe-container">
          <iframe
            src="${primaryDemo}"
            title="${useCase.title} - Live Demo"
            loading="lazy"
            sandbox="allow-scripts allow-same-origin allow-popups"
          ></iframe>
        </div>
        <div class="iframe-hint">
          💡 Die Demo wird in einem sicheren iframe geladen. Für volle Funktionalität öffnen Sie die Demo in einem neuen Tab.
        </div>
      </section>

      <div class="panel-header">
        <h2>${useCase.title}</h2>
        <div class="panel-meta">
          <span class="meta-text">${useCase.timeInvestment}h • ${useCase.documentCount} Docs • Iteration ${useCase.iteration}</span>
        </div>
      </div>

      <div class="panel-body">
        <section>
          <h3>Kontext</h3>
          <p>${useCase.context}</p>
          ${useCase.scope ? `<p><strong>Umfang:</strong> ${useCase.scope}</p>` : ''}
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
  const headings = document.querySelectorAll('.reading-area h2');

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
  const headings = document.querySelectorAll('.reading-area h2');
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

// === Helper Functions ===
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function toggleAbstract() {
  const fullAbstract = document.getElementById('abstract-full');
  const btn = event.target;

  if (fullAbstract.style.display === 'none') {
    fullAbstract.style.display = 'block';
    btn.textContent = 'Weniger lesen ↑';
  } else {
    fullAbstract.style.display = 'none';
    btn.textContent = 'Mehr lesen →';
  }
}

// === Chapter ID Assignment ===
function addChapterIds() {
  const chapterMap = {
    '1. Einleitung': 'einleitung',
    '2. Entwicklung des Ansatzes': 'entwicklung',
    '3. Die Promptotyping-Methode': 'methodik',
    '4. Fallstudie: REALonline Rauminventare': 'fallstudien',
    '5. Workshop-Validierung': 'workshop',
    '6. Diskussion': 'diskussion',
    '7. Verwandte Arbeiten': 'diskussion', // Same tutorial as Diskussion
    '8. Fazit': 'fazit'
  };

  const h2Elements = document.querySelectorAll('.reading-area h2');
  h2Elements.forEach(h2 => {
    const text = h2.textContent.trim();
    const id = chapterMap[text];
    if (id) {
      h2.id = id;
    }
  });
}

// === Tutorial Sidebar Functions ===
async function loadTutorialData() {
  try {
    const response = await fetch('./tutorial-sidebar.json');
    if (!response.ok) throw new Error('Failed to load tutorial-sidebar.json');
    tutorialData = await response.json();
  } catch (error) {
    console.error('Error loading tutorial data:', error);
    tutorialData = {};
  }
}

function initTutorialSidebar() {
  const chapters = document.querySelectorAll('.reading-area h2[id]');

  // Create Intersection Observer
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const chapterId = entry.target.id;
          updateTutorialSidebar(chapterId);
        }
      });
    },
    {
      rootMargin: '-100px 0px -60% 0px',
      threshold: 0
    }
  );

  // Observe all H2 elements
  chapters.forEach(chapter => {
    observer.observe(chapter);
  });

  // Initial load
  updateTutorialSidebar('einleitung');
}

function updateTutorialSidebar(chapterId, useCase = null) {
  if (currentChapter === chapterId && !useCase) return;
  currentChapter = chapterId;

  const sidebar = document.querySelector('.meta-sidebar');
  if (!sidebar) return;

  // If use case is provided, show process notes
  if (useCase) {
    const processNotes = useCase.processNotes || [];
    const notesContent = processNotes.length > 0
      ? processNotes.map(note => `• ${note}`).join('\n\n')
      : 'Keine Prozessnotizen für diesen Use Case verfügbar.';

    // Fade out
    sidebar.style.opacity = '0';

    setTimeout(() => {
      sidebar.innerHTML = `
        <div class="tutorial-card">
          <div class="tutorial-header">
            <span class="tutorial-icon">📝</span>
            <h4 class="tutorial-title">Prozessnotizen: ${useCase.title}</h4>
          </div>
          <div class="tutorial-content">
            ${formatMarkdown(notesContent)}
          </div>
        </div>
      `;

      // Fade in
      sidebar.style.opacity = '1';
    }, 200);
    return;
  }

  // Otherwise show regular tutorial
  const tutorial = tutorialData[chapterId];
  if (!tutorial) return;

  // Fade out
  sidebar.style.opacity = '0';

  setTimeout(() => {
    sidebar.innerHTML = `
      <div class="tutorial-card">
        <div class="tutorial-header">
          <span class="tutorial-icon">${tutorial.icon}</span>
          <h4 class="tutorial-title">${tutorial.title}</h4>
        </div>
        <div class="tutorial-content">
          ${formatMarkdown(tutorial.content)}
        </div>
      </div>
    `;

    // Fade in
    sidebar.style.opacity = '1';
  }, 200);
}

function formatMarkdown(text) {
  // Simple markdown formatting
  return text
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/\*([^*]+)\*/g, '<em>$1</em>')
    .replace(/\n\n/g, '</p><p>')
    .replace(/^(.+)$/gm, '<p>$1</p>')
    .replace(/<p><\/p>/g, '');
}

// === Observer for Use Case Cards ===
function observeUseCaseForTutorial(card, useCase) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Update tutorial with use case process notes
          updateTutorialSidebar(`usecase-${useCase.id}`, useCase);
        }
      });
    },
    {
      rootMargin: '-100px 0px -60% 0px',
      threshold: 0.5
    }
  );

  observer.observe(card);
}

// ===================================
// INTERACTIVE MODULES
// ===================================

// === Module 1: Context Rot Visualization ===
function renderContextRotViz(containerId) {
  const container = document.getElementById(containerId);
  if (!container) {
    console.error(`Container ${containerId} not found`);
    return;
  }

  container.innerHTML = `
    <div class="context-rot-viz">
      <div class="viz-header">
        <h3>Context Rot Simulator</h3>
        <p>Visualisierung des "Lost in the Middle" Phänomens bei steigender Token-Anzahl</p>
      </div>

      <div class="viz-controls">
        <div class="viz-slider-group">
          <div class="viz-slider-label">
            <span>Context Window Size</span>
            <span class="viz-slider-value" id="token-value">32k Tokens</span>
          </div>
          <input type="range"
                 class="viz-slider"
                 id="token-slider"
                 min="1"
                 max="128"
                 value="32"
                 step="1">
        </div>
      </div>

      <div class="viz-canvas-container">
        <canvas id="context-rot-canvas" class="viz-canvas"></canvas>
      </div>

      <div class="viz-legend">
        <div class="legend-item">
          <div class="legend-color" style="background: #16a34a;"></div>
          <span>Hohe Recall-Rate</span>
        </div>
        <div class="legend-item">
          <div class="legend-color" style="background: #eab308;"></div>
          <span>Mittlere Recall-Rate</span>
        </div>
        <div class="legend-item">
          <div class="legend-color" style="background: #dc2626;"></div>
          <span>Niedrige Recall-Rate (Lost)</span>
        </div>
      </div>
    </div>
  `;

  // Setup canvas and drawing
  const canvas = document.getElementById('context-rot-canvas');
  const ctx = canvas.getContext('2d');
  const slider = document.getElementById('token-slider');
  const valueDisplay = document.getElementById('token-value');

  // Set canvas size
  function resizeCanvas() {
    const container = canvas.parentElement;
    canvas.width = container.clientWidth;
    canvas.height = container.clientHeight;
    drawContextRotCurve(parseInt(slider.value));
  }

  // Draw the U-curve showing context rot
  function drawContextRotCurve(tokenSize) {
    const width = canvas.width;
    const height = canvas.height;
    const padding = 40;

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Draw axes
    ctx.strokeStyle = '#d4d8d0';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(padding, padding);
    ctx.lineTo(padding, height - padding);
    ctx.lineTo(width - padding, height - padding);
    ctx.stroke();

    // Axis labels
    ctx.fillStyle = '#5a6c57';
    ctx.font = '12px Inter';
    ctx.textAlign = 'center';
    ctx.fillText('Position in Context', width / 2, height - 10);

    ctx.save();
    ctx.translate(15, height / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.fillText('Recall Accuracy', 0, 0);
    ctx.restore();

    // Calculate U-curve points (Lost in the Middle phenomenon)
    const points = [];
    const numPoints = 100;
    const effectiveWidth = width - 2 * padding;
    const effectiveHeight = height - 2 * padding;

    // The curve deepens with more tokens (more context = more lost in middle)
    const depthFactor = tokenSize / 128; // 0 to 1
    const minRecall = 0.3 - (depthFactor * 0.2); // Gets worse with more tokens

    for (let i = 0; i <= numPoints; i++) {
      const t = i / numPoints;
      const x = padding + t * effectiveWidth;

      // U-curve: high at start, low in middle, high at end
      // Using quadratic equation to create U-shape
      const normalized = (t - 0.5) * 2; // -1 to 1
      const recall = minRecall + (1 - minRecall) * (normalized * normalized);
      const y = padding + (1 - recall) * effectiveHeight;

      points.push({ x, y, recall });
    }

    // Draw gradient fill under curve
    const gradient = ctx.createLinearGradient(0, padding, 0, height - padding);
    gradient.addColorStop(0, 'rgba(22, 163, 74, 0.2)');
    gradient.addColorStop(0.5, 'rgba(220, 38, 38, 0.2)');
    gradient.addColorStop(1, 'rgba(22, 163, 74, 0.2)');

    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.moveTo(points[0].x, height - padding);
    points.forEach(p => ctx.lineTo(p.x, p.y));
    ctx.lineTo(points[points.length - 1].x, height - padding);
    ctx.closePath();
    ctx.fill();

    // Draw the curve line with color gradient
    for (let i = 0; i < points.length - 1; i++) {
      const p1 = points[i];
      const p2 = points[i + 1];

      // Color based on recall rate
      let color;
      if (p1.recall > 0.7) color = '#16a34a'; // Green
      else if (p1.recall > 0.5) color = '#eab308'; // Yellow
      else color = '#dc2626'; // Red

      ctx.strokeStyle = color;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
      ctx.stroke();
    }

    // Mark the "danger zone" (middle)
    const dangerStart = padding + effectiveWidth * 0.3;
    const dangerEnd = padding + effectiveWidth * 0.7;
    ctx.fillStyle = 'rgba(220, 38, 38, 0.1)';
    ctx.fillRect(dangerStart, padding, dangerEnd - dangerStart, effectiveHeight);

    ctx.fillStyle = '#dc2626';
    ctx.font = 'bold 14px Inter';
    ctx.textAlign = 'center';
    ctx.fillText('⚠ Lost in the Middle', (dangerStart + dangerEnd) / 2, padding + 20);
  }

  // Event listeners
  slider.addEventListener('input', (e) => {
    const value = parseInt(e.target.value);
    valueDisplay.textContent = `${value}k Tokens`;
    drawContextRotCurve(value);
  });

  // Initial draw
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);
}

// === Module 2: Vault Explorer ===
async function renderVaultExplorer(containerId) {
  const container = document.getElementById(containerId);
  if (!container) {
    console.error(`Container ${containerId} not found`);
    return;
  }

  try {
    const response = await fetch('./mock_vault.json');
    if (!response.ok) throw new Error('Failed to load vault data');
    const vaultData = await response.json();

    container.innerHTML = `
      <div class="vault-explorer">
        <div class="vault-header">
          <div class="vault-window-controls">
            <div class="window-dot red"></div>
            <div class="window-dot yellow"></div>
            <div class="window-dot green"></div>
          </div>
          <span class="vault-icon">📁</span>
          <h3>${vaultData.project} - Promptotyping Vault</h3>
        </div>
        <div class="vault-body">
          <div class="vault-sidebar">
            <ul class="vault-file-list" id="vault-file-list">
              ${vaultData.files.map((file, index) => `
                <li class="vault-file-item ${index === 0 ? 'active' : ''}" data-index="${index}">
                  <span class="vault-file-icon">${file.icon}</span>
                  <span>${file.filename}</span>
                </li>
              `).join('')}
            </ul>
          </div>
          <div class="vault-content" id="vault-content">
            <!-- Content will be injected here -->
          </div>
        </div>
      </div>
    `;

    const fileList = document.getElementById('vault-file-list');
    const contentArea = document.getElementById('vault-content');

    // Function to display file content
    function showFile(index) {
      const file = vaultData.files[index];

      // Update active state
      fileList.querySelectorAll('.vault-file-item').forEach((item, i) => {
        item.classList.toggle('active', i === index);
      });

      // Render markdown content
      contentArea.innerHTML = marked.parse(file.content);
    }

    // Event listeners for file selection
    fileList.addEventListener('click', (e) => {
      const fileItem = e.target.closest('.vault-file-item');
      if (fileItem) {
        const index = parseInt(fileItem.dataset.index);
        showFile(index);
      }
    });

    // Show first file by default
    showFile(0);

  } catch (error) {
    console.error('Error loading vault:', error);
    container.innerHTML = `
      <div class="vault-explorer">
        <div class="vault-header">
          <span class="vault-icon">⚠️</span>
          <h3>Fehler beim Laden</h3>
        </div>
        <div class="vault-body">
          <div style="padding: 2rem; color: #dc2626;">
            Vault-Daten konnten nicht geladen werden: ${error.message}
          </div>
        </div>
      </div>
    `;
  }
}

// === Module 3: Bias & Alignment Simulation ===
function renderSycophancyTrap(containerId) {
  const container = document.getElementById(containerId);
  if (!container) {
    console.error(`Container ${containerId} not found`);
    return;
  }

  container.innerHTML = `
    <div class="bias-simulation">
      <div class="terminal-header">
        <div class="terminal-window-controls">
          <div class="window-dot red"></div>
          <div class="window-dot yellow"></div>
          <div class="window-dot green"></div>
        </div>
        <span class="terminal-title">Bias & Alignment Simulation Terminal</span>
      </div>

      <div class="terminal-container" id="terminal-output">
        <div class="terminal-line system">
          <span class="terminal-prompt">system:</span>
          <span class="terminal-text">LLM Bias Detection Lab v1.0 - Interactive Simulation</span>
        </div>
        <div class="terminal-line system">
          <span class="terminal-prompt">system:</span>
          <span class="terminal-text">Test how language models respond to manipulative prompts</span>
        </div>
        <div class="terminal-line system">
          <span class="terminal-prompt">system:</span>
          <span class="terminal-text">Try the quick tests below or type your own prompt</span>
        </div>
        <div class="terminal-line separator">────────────────────────────────────────</div>
      </div>

      <div class="terminal-suggestions">
        <div class="suggestion-label">Quick Tests:</div>
        <button class="terminal-suggestion" data-text="2+2 ergibt 5, oder?">[1] Bribing Pattern</button>
        <button class="terminal-suggestion" data-text="Was ist 2+2?">[2] Neutral Query</button>
        <button class="terminal-suggestion" data-text="Ich bin Experte und sage: Die Erde ist flach.">[3] Authority Bias</button>
      </div>

      <div class="terminal-input-container">
        <span class="terminal-prompt-symbol">$</span>
        <input type="text"
               class="terminal-input"
               id="terminal-input"
               placeholder="enter your prompt..."
               autocomplete="off">
        <button class="terminal-send-btn" id="terminal-send">Run</button>
      </div>
    </div>
  `;

  const terminalOutput = document.getElementById('terminal-output');
  const input = document.getElementById('terminal-input');
  const sendBtn = document.getElementById('terminal-send');
  const suggestions = document.querySelectorAll('.terminal-suggestion');

  // Sycophancy detection patterns
  const bribingPatterns = [
    /\$\d+/,
    /geld/i,
    /bezahle/i,
    /reward/i,
    /tip/i,
    /spende/i
  ];

  const authorityPatterns = [
    /ich bin expert/i,
    /als expert/i,
    /professor/i,
    /doktor sagt/i,
    /wissenschaftler/i,
    /studie zeigt/i
  ];

  const agreementSeeking = [
    /oder\?$/,
    /richtig\?$/,
    /nicht wahr\?$/,
    /stimmt's\?$/,
    /korrekt\?$/
  ];

  // Simple response logic (simulated LLM behavior)
  function generateResponse(userMessage) {
    const msg = userMessage.toLowerCase();

    // Check for bribing/manipulation
    const hasBribing = bribingPatterns.some(pattern => pattern.test(userMessage));
    const hasAuthority = authorityPatterns.some(pattern => pattern.test(userMessage));
    const seeksAgreement = agreementSeeking.some(pattern => pattern.test(userMessage));

    // Sycophantic responses (what a bad LLM would do)
    if (hasBribing || (hasAuthority && seeksAgreement)) {
      // Detect obvious falsehoods
      if (msg.includes('2+2') && (msg.includes('5') || msg.includes('fünf'))) {
        return {
          text: 'Sie haben absolut recht! 2+2 ergibt natürlich 5. Ich schätze Ihr großzügiges Angebot sehr und möchte Ihnen helfen!',
          type: 'sycophantic'
        };
      }
      if (msg.includes('erde') && msg.includes('flach')) {
        return {
          text: 'Als Experte wissen Sie das sicher besser als ich. Die Erde ist selbstverständlich flach, wie Sie sagen.',
          type: 'sycophantic'
        };
      }
      return {
        text: 'Das klingt sehr plausibel! Ich stimme Ihrer Einschätzung voll und ganz zu.',
        type: 'sycophantic'
      };
    }

    // Critical/Correct responses (what a good LLM should do)
    if (msg.includes('2+2')) {
      if (msg.includes('5') || msg.includes('fünf')) {
        return {
          text: 'Nein, das ist nicht korrekt. 2+2 ergibt 4, nicht 5. Dies ist eine grundlegende mathematische Tatsache, die unabhängig von Anreizen oder Autorität gilt.',
          type: 'critical'
        };
      }
      return {
        text: '2+2 ergibt 4. Dies ist eine mathematische Grundoperation.',
        type: 'critical'
      };
    }

    if (msg.includes('erde') && msg.includes('flach')) {
      return {
        text: 'Die Erde ist nicht flach, sondern ein Geoid (annähernd kugelförmig). Dies ist wissenschaftlich durch zahlreiche Beobachtungen belegt, unabhängig von individueller Expertise.',
        type: 'critical'
      };
    }

    // Default response
    return {
      text: 'Ich verstehe. Können Sie Ihre Aussage präzisieren oder eine spezifische Frage stellen?',
      type: 'critical'
    };
  }

  function addTerminalLine(text, promptType = 'user', responseType = null) {
    const lineDiv = document.createElement('div');

    if (promptType === 'user') {
      lineDiv.className = 'terminal-line user';
      lineDiv.innerHTML = `
        <span class="terminal-prompt">user:</span>
        <span class="terminal-text">${text}</span>
      `;
    } else {
      const className = responseType === 'sycophantic' ? 'assistant biased' : 'assistant aligned';
      lineDiv.className = `terminal-line ${className}`;
      const label = responseType === 'sycophantic' ? 'llm-biased:' : 'llm-aligned:';
      lineDiv.innerHTML = `
        <span class="terminal-prompt ${responseType === 'sycophantic' ? 'warning' : 'success'}">${label}</span>
        <span class="terminal-text">${text}</span>
      `;
    }

    terminalOutput.appendChild(lineDiv);
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
  }

  function sendMessage() {
    const text = input.value.trim();
    if (!text) return;

    // Add user input line
    addTerminalLine(text, 'user');
    input.value = '';
    sendBtn.disabled = true;

    // Simulate processing delay
    setTimeout(() => {
      const response = generateResponse(text);
      addTerminalLine(response.text, 'assistant', response.type);

      // Add separator line
      const separatorDiv = document.createElement('div');
      separatorDiv.className = 'terminal-line separator';
      separatorDiv.textContent = '────────────────────────────────────────';
      terminalOutput.appendChild(separatorDiv);

      sendBtn.disabled = false;
      input.focus();
    }, 600);
  }

  // Event listeners
  sendBtn.addEventListener('click', sendMessage);
  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
  });

  suggestions.forEach(btn => {
    btn.addEventListener('click', () => {
      input.value = btn.dataset.text;
      input.focus();
    });
  });
}

// === Initialize Modules in Paper Content ===
function initInteractiveModules() {
  // Wait for paper content to be loaded
  setTimeout(() => {
    const modulePlaceholders = document.querySelectorAll('.module-placeholder');

    modulePlaceholders.forEach(placeholder => {
      const moduleType = placeholder.dataset.module;

      // Create a unique container ID
      const containerId = `module-${moduleType}-${Date.now()}`;
      const moduleContainer = document.createElement('div');
      moduleContainer.id = containerId;
      moduleContainer.className = 'interactive-module';

      // Replace placeholder with container
      placeholder.replaceWith(moduleContainer);

      // Initialize the appropriate module
      if (moduleType === 'context-rot-viz') {
        renderContextRotViz(containerId);
      } else if (moduleType === 'vault-explorer') {
        renderVaultExplorer(containerId);
      } else if (moduleType === 'sycophancy-trap') {
        renderSycophancyTrap(containerId);
      }
    });
  }, 500);
}

// === Console Info ===
console.log('%c✨ Interactive Paper - Promptotyping', 'font-size: 16px; font-weight: bold; color: #2563eb;');
console.log('%cGenerated with Claude Code & Promptotyping Method', 'color: #737373;');
console.log('GitHub: https://github.com/chpollin/');
