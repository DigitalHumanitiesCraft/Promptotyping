# Promptotyping Project Structure - Academic Focus

## Current Structure Analysis

### 📚 Core Academic Resources (KEEP & ENHANCE)
```
/
├── academic.html            # Main academic paper (PRIMARY FOCUS)
├── css/academic-styles.css  # Scholarly design system
├── knowledge/
│   ├── theoretical-foundation.md     # Detailed theory
│   ├── academic-research-findings.md # Research synthesis
│   └── promptotyping-method.md      # Method documentation
├── README.md               # Project context
├── DATA.md                # Data structures
├── REQUIREMENTS.md        # Requirements specification
└── INSTRUCTIONS.md        # Implementation guide
```

### 🗑️ Marketing/Sales Elements (ARCHIVE)
```
/archive/
├── src/index.html         # Original marketing-style page
├── src/css/styles.css     # Original styles
├── src/css/tutorial-styles.css
└── src/js/*.js           # Original interactive elements
```

### 📊 New Academic Additions (TO CREATE)
```
/academic/
├── index.html            # academic.html (renamed)
├── css/
│   └── academic.css     # academic-styles.css (renamed)
├── js/
│   ├── citations.js     # Citation management
│   ├── figures.js       # Interactive figures
│   └── data-viz.js     # Data visualizations
├── data/
│   ├── study-results.json    # Empirical data
│   ├── references.bib        # BibTeX references
│   └── metrics.csv           # Performance metrics
├── figures/
│   ├── cognitive-load.svg    # Academic diagrams
│   ├── phase-flow.svg        # Method visualization
│   └── results-charts.svg    # Data charts
├── supplements/
│   ├── appendix-a-templates.pdf
│   ├── appendix-b-statistics.pdf
│   ├── appendix-c-protocol.pdf
│   └── dataset.zip
└── downloads/
    ├── promptotyping-paper.pdf    # Full paper PDF
    ├── promptotyping-slides.pdf   # Presentation
    └── promptotyping-poster.pdf   # Conference poster
```

## Cleanup Actions

1. **Archive marketing materials** - Move to /archive
2. **Rename for clarity** - academic.html → index.html
3. **Consolidate knowledge** - Into academic supplements
4. **Remove redundancy** - Eliminate duplicate content
5. **Focus development** - All effort on academic version

## Enhancement Priority

### Phase 1: Core Academic Paper
- Expand theoretical framework
- Add more empirical data
- Include case studies
- Strengthen statistical analysis

### Phase 2: Interactive Elements
- Citation hover tooltips
- Expandable proofs
- Interactive data tables
- Figure zoom/pan

### Phase 3: Supplementary Materials
- Downloadable templates
- Video walkthroughs
- Dataset access
- Replication package

## File Organization Plan

```
promptotyping-academic/
├── index.html              # Main academic paper
├── css/
├── js/
├── assets/
│   ├── figures/
│   ├── data/
│   └── downloads/
├── supplements/
├── references/
└── README.md              # Academic project description
```

## Next Steps

1. Clean up current structure
2. Move files to new organization
3. Enhance academic.html
4. Add scholarly interactions
5. Create PDF generation
6. Build citation system