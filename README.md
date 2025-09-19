# Promptotyping v4.0
## A Structured Methodology for LLM-Assisted Development

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue)](https://dhcraft.org/Promptotyping/)
[![CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)
[![Version](https://img.shields.io/badge/Version-4.0-green)](https://github.com/DHCraft/Promptotyping/releases)

## 🌐 Live Interactive Paper
**Visit the live bilingual academic paper: [dhcraft.org/Promptotyping](https://dhcraft.org/Promptotyping/)**

Switch between German (DE) and English (EN) with a single click. All content is loaded dynamically from structured JSON files, making it ideal for LLM collaboration.

## 📚 About Promptotyping

Promptotyping is an empirically-validated methodology for iterative prototyping with Large Language Models. The development process follows the cycle: **describe → generate → test → understand**. Understanding emerges through building, not as a prerequisite.

### Key Innovation
- **Critical Expert in the Loop (CEIL)**: Continuous domain expert intervention prevents hallucinations and AI sycophancy
- **90-Percent Principle**: LLMs excel at 90% of standard code; the remaining 10% requires human expertise
- **Multi-Model Verification**: Systematic cross-validation between different LLMs reduces errors by ~60%
- **Token-Precise Thinking**: Optimized prompt engineering for maximum efficiency

## 🏗️ Architecture

```
Promptotyping/
├── index.html                 # Single-page bilingual application
├── src/
│   └── data/
│       └── content/
│           ├── de/           # German content (JSON)
│           │   ├── 01-einleitung.json
│           │   ├── 02-grundlagen.json
│           │   ├── 03-methodologie.json
│           │   ├── 04-ceil.json
│           │   ├── 05-verifikation.json
│           │   ├── 06-anwendungen.json
│           │   └── 07-fazit.json
│           └── en/           # English content (JSON)
│               ├── 01-introduction.json
│               ├── 02-foundations.json
│               ├── 03-methodology.json
│               ├── 04-ceil.json
│               ├── 05-verification.json
│               ├── 06-applications.json
│               └── 07-conclusion.json
└── toolkit/
    └── download-toolkit.js   # Generates downloadable templates
```

### Design Principles
- **JSON-Driven Content**: All paper content stored in structured JSON for LLM-friendly editing
- **Chunked Information**: Each chapter is ~3-5KB for optimal context window usage
- **Professional Typography**: Clean academic design without animations or gradients
- **No Dependencies**: Pure HTML/CSS/JavaScript, no frameworks required

## 🚀 Development Phases

1. **CONTEXT** → Define project goals (README.md)
2. **DATA** → Structure data models (DATA.md)
3. **EXPLORATION** → Test approaches (EXPLORATION.md)
4. **REQUIREMENTS** → Document requirements (REQUIREMENTS.md)
5. **IMPLEMENTATION** → Generate instructions (INSTRUCTIONS.md)
6. **PROTOTYPE** → Build and validate (index.html)

## 📦 Toolkit

Download the complete Promptotyping toolkit with bilingual templates:
- **JOURNAL.template.md** - Continuous process documentation
- **README.template.md** - Project context definition
- **DATA.template.md** - Data structure specifications
- **REQUIREMENTS.template.md** - Functional/non-functional requirements
- **INSTRUCTIONS.template.md** - Implementation instructions
- **EXPLORATION.template.md** - Exploration documentation

## 🔬 Research & Validation

### Empirical Results
- **Productivity Increase**: Up to 55% (GitHub Copilot studies)
- **Hallucination Reduction**: 60% through multi-model verification
- **Complexity Reduction**: 90% in case studies (e.g., Stefan-Zweig-Digital)

### Case Studies
- **Stefan-Zweig-Digital**: Literary studies platform (85% LLM contribution)
- **Medieval Manuscript Viewer**: Complex visualization system (70% LLM)
- **Dialect Corpus Interface**: Linguistic search interface (90% LLM)

## 💻 Local Development

```bash
# Clone repository
git clone https://github.com/DHCraft/Promptotyping.git
cd Promptotyping

# Start local server (Python)
python -m http.server 8000

# Or using Node.js
npx serve .

# Open in browser
open http://localhost:8000
```

## 🌍 GitHub Pages Deployment

The project is configured for GitHub Pages deployment:
1. Repository settings → Pages
2. Source: Deploy from branch
3. Branch: main / (root)
4. Live at: https://[username].github.io/Promptotyping/

## 📄 Citation

```bibtex
@article{promptotyping2025,
  title={Promptotyping: A Structured Methodology for LLM-Assisted Development},
  author={Pollin, Christopher},
  year={2025},
  version={4.0},
  publisher={DHCraft.org},
  url={https://dhcraft.org/Promptotyping}
}
```

## 🤝 Contributing

We welcome contributions to improve the methodology:
1. Fork the repository
2. Edit JSON content files in `src/data/content/`
3. Test locally with language switching
4. Submit pull request with description

## 📜 License

This work is licensed under [CC BY 4.0 International](https://creativecommons.org/licenses/by/4.0/).
Free for academic and commercial use with attribution.

## 🔗 Links

- **Live Demo**: [dhcraft.org/Promptotyping](https://dhcraft.org/Promptotyping/)
- **Author**: Christopher Pollin
- **Organization**: [DHCraft.org](https://dhcraft.org)
- **Contact**: See website for contact information

---

*"Understanding emerges through building, not as a prerequisite."* - Core principle of Promptotyping v4.0