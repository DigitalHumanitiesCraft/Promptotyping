# Jenseits von „Vibe Coding"
## Promptotyping als wissenschaftliche Methode

**Warum KI in den Digital Humanities weniger Intuition und mehr Context Engineering erfordert.**

---

## 1. Einleitung

Die Softwareentwicklung durchläuft einen fundamentalen Wandel. Andrej Karpathy prägte den Begriff „Vibe Coding" für eine Praxis, bei der Code intuitiv und ohne tiefes Verständnis generiert wird. In der Wissenschaft führt dies jedoch zu Problemen mit Reproduzierbarkeit und Halluzinationen.

Wir brauchen einen Gegenentwurf: **Promptotyping**.

---

## 2. Die epistemische Herausforderung

Large Language Models (LLMs) sind probabilistische Systeme. Sie leiden unter „Context Rot" – dem Vergessen von Informationen in der Mitte langer Eingaben (Chroma, 2025).

<div class="module-placeholder" data-module="context-rot-viz"></div>

**Das Problem:** Wenn wir einem LLM unstrukturierte Projektdaten geben, "vergisst" es Details in der Mitte. Wir müssen Informationen kuratieren.

---

## 3. Die Methode am Beispiel HerData

Promptotyping strukturiert die Entwicklung in Phasen. Wir demonstrieren dies am Projekt **HerData**, einer Plattform zur Sichtbarmachung von Frauen in Goethes Korrespondenz.

### Phase: Distillation (Das externe Gedächtnis)

Statt dem Modell 15.000 Briefe roh zu geben (was zu Context Rot führt), haben wir im Projekt HerData eine **Hybrid-Strategie** entwickelt und in `DATA.md` dokumentiert: Ein kuratierter Kern von 448 Frauen mit hoher Datendichte wird mit den Rohdaten verknüpft.

**Interaktive Exploration:**
Untersuchen Sie hier den echten **HerData Vault**. Sehen Sie in `DECISIONS.md`, wie wir uns gegen den Vollbestand (Quantität) und für den kuratierten Export (Qualität) entschieden haben.

<div class="module-placeholder" data-module="vault-explorer"></div>

### Source Available Literacy

Die Dateien im Vault sind keine tote Dokumentation, sondern der **Bauplan**. `JOURNAL.md` enthält die Entwicklungshistorie über 22 Sessions, die den Code generierten.

---

## 4. Qualitätssicherung: Der Critical Expert

KI neigt zu **Sycophancy** (dem Nutzer nach dem Mund reden).

<div class="module-placeholder" data-module="sycophancy-trap"></div>

### Lösung: Provenance Tracking

Im HerData-Projekt haben wir das "Sycophancy"-Risiko durch ein striktes **Provenance-System** gelöst. Der *Critical Expert* verlässt sich nicht auf den Output, sondern prüft die Herkunft.

Wie in `DATA.md` dokumentiert, speichert das System für jedes Feld (z.B. Geburtsdatum) den exakten XML-Pfad der Quelle. **3.695 Provenienz-Einträge** dokumentieren die Herkunft jedes Datenpunkts. Das ist "Deep Grounding" statt "Vibe Coding".

---

## 5. Fallstudien

Die Methode wurde in sieben Projekten validiert. HerData ist das Flaggschiff-Projekt, das zeigt, wie 14.856 Zeilen Code in 22 Sessions entstehen können.

<div class="use-case-placeholder" data-id="herdata"></div>
<div class="use-case-placeholder" data-id="realonline"></div>
<div class="use-case-placeholder" data-id="lucina"></div>

---

## 6. Fazit

Promptotyping transformiert Forschende von "Autoren" zu "Architekten".

Das Projekt HerData beweist: Wenn wir den Kontext beherrschen (**Context Engineering**) und die Qualität sichern (**Critical Expert**), wird KI zum mächtigen Werkzeug der Digital Humanities.

**Die Zukunft gehört nicht dem intuitiven "Vibing", sondern dem methodischen "Promptotyping".**

---

<div class="paper-meta-card">
  <div class="meta-abstract">
    <h3>Paper-Metadaten</h3>
    <p><strong>Autor:</strong> Christopher Pollin</p>
    <p><strong>Institution:</strong> Zentrum für Informationsmodellierung, Universität Graz</p>
    <p><strong>Kontext:</strong> Praxisbericht aus 22 Sessions LLM-assistierter Entwicklung (HerData)</p>
    <p><strong>Technik:</strong> Vanilla JS, MapLibre GL JS, ECharts, Cytoscape.js, Python Pipeline</p>
    <p><strong>Entwicklungszeit:</strong> 60 Stunden über 22 Sessions (HerData)</p>
  </div>
  <div class="meta-actions">
    <a href="https://github.com/chpollin/HerData" class="meta-btn primary" target="_blank">
      <span>💻</span>
      <span class="btn-label">GitHub Repository</span>
    </a>
    <a href="https://chpollin.github.io/HerData/" class="meta-btn" target="_blank">
      <span>🌐</span>
      <span class="btn-label">Live Demo (HerData)</span>
    </a>
  </div>
</div>
