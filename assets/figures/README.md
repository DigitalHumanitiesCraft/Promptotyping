# Paper Figures

This directory carries the figure layer of the Promptotyping paper. The integration brief's folder functions map onto the existing repository structure as follows: `figures/` is this directory (`assets/figures/`), `prompts/figures/` is `prompts/` below it, and the archive of superseded iterations is `candidates/`.

Six figures were accepted, `figure-01-promptotyping-method.png` through `figure-06-notker-acceptance.png`. All were generated and iteratively revised with ChatGPT Images 2.0 from author-written specifications and were selected and accepted for specific explanatory purposes after checking their conceptual accuracy, terminology, visual hierarchy, and consistency with the manuscript. Since the four-chapter revision of 2026-07-31 the manuscript embeds only file 01; files 02 to 06 are retired from the manuscript and keep their accepted state, their specifications and their records. `manifest.yaml` is authoritative for which file the manuscript carries. The corresponding process and acceptance records are stored under `prompts/`, machine-readable metadata in `manifest.yaml`, per-version provenance and the visual grammar in `PROVENANCE.md`.

The remaining image files are historical. `figure-1-phases.png` and `figure-2-document-types.png` served the paper text before the authored SVG series replaced it, and `figure-1-promptotyping-iteration.png` and `figure-4-versioned-promptotypes.png` record the superseded draft state of 2026-07-29. No carrier embeds any of them.

The figures are not raw empirical data. They are conceptual and comparative diagrams derived from the paper's method specification and documented project cases, and they should be interpreted together with their captions and case descriptions.

The vector layer under `svg/` is the authoritative form of the redrawn figures, specified per figure under `specs/`. Every SVG has a raster export of the same basename under `png/`, rendered at twice the viewBox size (headless Edge screenshot); whoever changes an SVG regenerates its PNG in the same commit. The PNGs at the directory root are the earlier ChatGPT-generated rasters and stay untouched as the provenance record described above.
