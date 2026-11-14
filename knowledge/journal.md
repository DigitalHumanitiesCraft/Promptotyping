---
title: Journal
project:
  name: Promptotyping specification
  repository: https://github.com/DigitalHumanitiesCraft/Promptotyping
method:
  name: Promptotyping
  url: https://dhcraft.org/Promptotyping/
status: active
language: en
version: "2.0"
created: 2026-05-09
updated: 2026-11-14
authors: [Christopher Pollin]
generated-with: Claude Code (Claude Fable 5.2, Claude Opus 5.5)
template:
  name: Journal template
  version: 0.7
  url: https://dhcraft.org/Promptotyping/templates/journal.md
related: [project, specification]
---

# Journal

## Open

- The operator's acceptance of the single page is outstanding.
- The start prompt has not yet run in a fresh session of an agent without the skill, neither in an agent with a shell nor in an app without one. Its first test with a reader who does not program is outstanding.
- Other repositories carry the addresses published before 2026-11-14 in their `template:` fields. In a browser with JavaScript the not-found page leads the address of a template that still exists to `templates/<slug>.md`, while an agent fetching it receives status 404. The addresses of the six retired templates end on the not-found page, and a repository takes the current name and address at its next substantive update.
- Promptotyping has not been evaluated with researchers outside the project. Use by external participants, an independently led transfer case, a documented unsuccessful or discontinued path and figures on the resources a project needs remain open. The agent role simulations of 2026-08-22 are a pre-test only.
- Once the paper is published, the page and [project.md](project.md) cite it.

## Entries

The entries up to 2026-11-14 are condensed into the milestone entries below, and their full wording stands in the Git history (`git show f211631:knowledge/journal.md`).

### 2026-11-14 A start prompt for readers who do not program

- Trigger: the operator explained the start to a reader who directs agents and does not program, and commissioned a prompt that such a reader copies from the page and the README.
- Found: a first draft of some 230 words repeated what the skill already carries, since `orient` changes no file, handles a project with nothing in it and waits for direction, and the boundaries of the skill cover source material and rights. Anthropic's prompting guidance asks for numbered steps only where order matters, for the reason behind an instruction and for plain wording without emphasis, and published onboarding prompts for agents keep the pasted text to a sentence or two and leave the procedure to a file the agent reads. The installation commands of the skill assume a shell, which an agent in a desktop app may lack.
- Decided: one prompt of four sentences and two lines to fill in. It names the repository, asks the agent to check that the skill loads and to say what the reader must do where it cannot install, runs `orient` and asks for an explanation in plain words. It stands on the page in place of the shell block and in the README of the skill repository, which keeps the installation by hand and gains the upload route for apps without a shell. The operator's sentence of 2026-11-10, that whoever uses Promptotyping loads the skill and works in their own words, holds, because the prompt covers the moment before the skill is loaded.
- Rejected: a German version on the page, which NFR-01 excludes, and a start file fetched by a one-line prompt, which would have been a second carrier of the procedure.
- Changed: `index.html`, `assets/css/site.css`, `README.md`, [specification.md](specification.md) (FR-03, US-03), [design.md](design.md), and `README.md` of the skill repository.
- Evidence: the commit that carries this entry. The page was read at 1280 and 360 pixels with the prompt wrapping inside its block, and the published tree was checked under NFR-05 and holds no material beyond the listed paths.

### 2026-11-14 Independent review before the release and version 1.0.0

- Trigger: the texts under `knowledge/` and `templates/` had been written and translated by several agents on one day and read as a whole by no one, and the release tag was pending.
- Found: an agent with a fresh context and no knowledge of the authors' reasoning read the repository against the files and the skill. The knowledge base described parts of a page that was not built, among them a scheme toggle and a retired template archive that the page still offers. The templates carried a retired role name, cited internal notes as evidence and linked repositories that are not public. Several case studies pointed to pages of the retired portal.
- Decided: the knowledge base describes the page as built, the template archive stays, the skill's terms hold where a template differed, and a published knowledge base may keep the earlier wording of its journal in the Git history alone, which the convention now says. Version 1.0.0 is released on this state.
- Corrected: the statements of the first rewrite of this knowledge base about the page, the archive and the document types, valid are [design.md](design.md), [architecture.md](architecture.md) and the [convention](../templates/convention.md).
- Changed: all seven documents of this folder, the twelve files under `templates/`, the case studies, the page's metadata and footer, `README.md`, `CHANGELOG.md` and `CITATION.cff`.
- Evidence: `196d350` and the commit that carries this entry. The review was read-only and its findings were checked against the files before each correction.

### 2026-11-14 condensed 2026-05-09–2026-11-14

- Starting state: `f211631`, the last commit of the journal before the condensing.
- Range: every entry of that state, from 2026-05-09 to 2026-11-14, the five newest included.
- Decided: the earlier wording stays in the Git history alone, and no `journal-archive.md` is kept, because this folder is published and the earlier entries were written in German as internal working notes ([ADR-11](specification.md#adr-11-the-journal-carries-what-is-open)).
- Changed: no entry was appended to an archive, and the entries were folded into the milestone entries below.
- Evidence: `3a8cea0`.

### 2026-11-14 Skill 2.0.0, single sources and the reduction to one page

- Trigger: decisions of the operator on version 2 of the skill, taken with the project partner (issue 6 of this repository), and his commission to keep the repository lean, given in the course of the day and ending in the reduction of the repository to one page, the templates, the use cases and a published `knowledge/`.
- Found: the skill carried eight operations, and each was checked against whether a person calls it at a recognisable moment. Implement is the agent's ordinary work, Synthesise had never been needed, Prune is curation, and processing an inbox falls away because the journal carries what is open. Two independent readers checked the draft, mostly on projects from version 1, on the order of the deep handoff and on a contradiction in `curate` between correcting and not confirming. The Skills page, the start page, the builder of the skill archive, the workflow and two check groups depended on the local copy of the skill. The template mirrors lagged behind their vault source. A move of the site into `docs/` would have pulled the templates to the place of the website or broken the addresses that the skill and other repositories use.
- Decided: the skill becomes version 2.0.0 with five subcommands, `orient`, `explore`, `distill`, `curate` and `handoff`. `curate` has three kinds among which the agent chooses, against the project, as grounding and as review, and `handoff` ends the session as the counterpart of `orient`. Refactoring is no part of the skill. The journal opens with `## Open`, condensing keeps the five newest entries and appends older wording to `journal-archive.md`, and `knowledge/handoff.md` is gone. The repository `promptotyping-skill` is the single source of the skill. The templates live in English under `templates/`, reduced to eleven, with the rules of the retired templates carried into `testing`, `architecture` and `specification`. The site is published from the root through the workflow, and its data files moved to `assets/data/` and left again with the portal. The Vault view with `vault/`, whose sources may be confidential, the glossary, the introduction page, `snapshots/`, the eval cases of the skill, the Skills page, the benchmark, which had never run, and the source material left the repository, and so did the JSON Schema of the frontmatter core and the consistency tooling under `tools/`, since with one page and single-source templates few repeated statements remain to check against one another. Operator: "weniger ist mehr". The repository is reduced to one page, `templates/`, `case-studies/` and `knowledge/`, and the knowledge base is rewritten so that it "describes Promptotyping and how it came about, very compactly and very precisely" (operator, as relayed with the commission) and is published as the worked example.
- Rejected: `ground`, `review`, `specify` and `implement` as calls of their own, because no person calls them at a moment of their own. The move of the site into `docs/`, for the reason above. Redirecting sentences that pointed at the retired views to the convention or the skill repository where the sentence carries without the link.
- Corrected: the decision record of 2026-11-10 that placed the canonical skill in this repository, valid is [ADR-01](specification.md#adr-01-the-skill-has-one-source). The statement of the same morning that the calls `check`, `verify` and `compact` of version 1 remain valid, since the skill dropped them and keeps version 1 under its tag. The journal rule of version 0.6 of 2026-10-29, which condensed without an archive, valid is the journal template 0.7.
- Changed: `knowledge/` rewritten as `INDEX.md`, `project.md`, `practice.md`, `specification.md`, `architecture.md`, `design.md` and this journal. The binding content of `governance.md`, `verification.md` and `plan.md` went into `specification.md`, `practice.md` and `## Open`, and the three files were removed. The German templates and the convention in the operator's working environment were replaced by a pointer to `templates/`.
- Evidence: `7384e36`, `62a6898`, `7e5f712`, `a6155e9`, `8ff85ae`, `4033e9f`, `1bc1728`, `3a8cea0`, `10ac455`, `3736f03`, `2d8522b`, and `d7d87b7` in the skill repository.

### 2026-11-04–2026-11-11 The start page as the level of reuse

- Trigger: the preparation of a workshop on 9 and 10 November 2026, and the operator's commission to bring the repository to a final state before the paper is submitted.
- Found: the portal was a specification documentation of many pages, and in a first draft of the introduction three simulated readers stopped before the first step because program, place of input and terms such as session, skill and commit were missing. The site treated acceptance as a decision after the three kinds of checking, while the paper makes the acceptance of a Promptotype the scholarly validation itself, and it described Distillation as an economy of tokens, which the paper rejects.
- Decided: an introduction page under `intro/` with an invented family correspondence as its example (2026-11-04, withdrawn 2026-11-14). The site adopts three forms of engineering, Knowledge, Context and Agentic Engineering, knowledge curation across all four forms of work and the three kinds of checking (operator decision of 2026-11-05). A publishing workflow with an explicit list of folders replaces the publication of the whole root (2026-11-10). The start page becomes the level from which the practice is reused, in seven parts on the shared DHCraft design, after several rounds of the operator's review. Operator, as recorded on 2026-11-10: "Niemand arbeitet mit langen Prompts zum Kopieren; wer Promptotyping nutzt, lädt den Skill und arbeitet in eigenen Worten." The example on the page therefore shows one sentence in the user's own words per step, and the procedure moved into the skill. The eval cases of the skill left its package (2026-11-11).
- Rejected: rebuilding the old root page as the introduction, because it would have endangered the addresses that other repositories carry. Keeping the eval cases out of the repository through `.gitignore` alone, because they were part of the skill's checks.
- Corrected: the decision record that described the practice as knowledge-driven and named Context and Agentic Engineering as its two foundations (amended 2026-11-05). The acceptance as a separate decision after checking and Distillation as a token principle (2026-11-10).
- Evidence: `e63840b`, `f97cb3d`, `9ec8355`, `10205a6`, `a19d4a9`, `a8b1dc9`, `cc237aa`, `6f1baf9`.

### 2026-10-14–2026-10-29 Manuscript boundary, working practice and the skill repository

- Trigger: the submission of the paper to a journal, which may alone publish it.
- Found: the manuscript had stood in the repository and on the site, and the check tooling failed on its absence. Several sentences of the site and the glossary matched the manuscript word for word.
- Decided: the manuscript left the repository and the site on 2026-10-14, after a byte-identical copy was secured outside the public repository. On 2026-10-28 the material bound to it followed, the paper specification, the review tooling, the figures and the manuscript audits (operator decision), and every sentence of the site that matched the manuscript in a run of eight words was reworded. Promptotyping is called a working practice, because a method would claim an empirical validation that does not exist (author decision of 2026-10-28). The canonical skill is maintained in its own repository, as the operator and the project partner agreed (2026-10-19). The German mirrors call Promptotyping a working practice, and the journal template follows its vault version 0.6 (2026-10-29).
- Rejected: moving the audit originals within the repository, because they are paper material and belong outside it.
- Corrected: the entry of 2026-08-22, after which `skills/promptotyping/` in this repository was the canonical skill.
- Evidence: `ef3fdf4`, `1cba125`, `ad6211d`. The removed files match the starting state `6f0f236`, and the last state of the skill folder lies in `3230c91`.

### 2026-08-09–2026-09-27 Governance, naming contract and the portal scenarios

- Trigger: the migration of the evidence layer to a new template chain, the vault's revision of the convention, and the operator's replacement of the remaining work packages by three verifiable milestones.
- Found: three independent agent instances, each limited to the public pages, could explain the practice, make a conservative fit decision and begin a first iteration, but found that the site placed requirements engineering earlier than the paper, presented `knowledge/` as a methodological obligation and lacked a fit check. Such a simulation is a pre-test and establishes nothing about human usability, comparative effectiveness, transfer or cost. A re-evaluation of the no-build decision found no content requirement that a build step would remove.
- Decided: a governance document as an agent instruction document for authority, status, write-back, rights, publication and escalation (2026-08-17). File names are the primary routing signal, with English function names, `<subject>-<function>.md` for specialisations and `INDEX.md` and `CLAUDE.md` as exceptions (2026-08-21). A separate `knowledge/handoff.md` holds open points (2026-08-21, superseded 2026-11-14). The separate agent interface repository is discontinued after its knowledge was condensed into a record (2026-08-22). The portal follows the path Understand, Evaluate, Apply, with a fit check in the application part (2026-08-22). The English addresses `#overview` and `#application` replace the German ones, which stay as aliases (2026-08-25). A benchmark pilot on real digital humanities data was prepared and never run (2026-09-05, removed 2026-11-14). The paper is the terminological yardstick for the site (operator decision of 2026-09-27).
- Evidence: `774a79c`, `bcd26b0`, `af67590`.

### 2026-07-25–2026-07-31 Specification documentation, English site and the first self-checks

- Trigger: the operator's observation after five work packages that the frontend still looked as before, followed by his precise target of a specification documentation in the manner of a program library or a published ontology.
- Found: the packages had changed content, order and the relation of site and paper, while no package contained a visual rebuild. A fault in the footnote tokenizer had hidden sections 2 to 7 of the rendered paper since `39d7bcf`, visible only in the rendered page, so a change to a render path counts as done only after a look at the rendered document. A consistency pass found the site's own contradictions with the paper after every identifier and anchor had passed, because a rendered page checks structure and not agreement. A document that retold the open points of two steering documents carried three wrong entries out of ten, because it reconstructed the state from memory instead of consulting the files.
- Decided: the site shows one page at a time, with every inactive page kept mounted so that every published address resolves (2026-07-25). The site becomes English throughout, because a specification only in German could not carry the transfer it claims (operator decision of 2026-07-25). Colour encodes one thing, the epistemic function of an artefact, with a single signature band that encodes nothing, and light is the first view (2026-07-26). The site checks its own statements with a script (2026-07-26). The gallery sorts by the five interface functions and by the role a case plays as evidence, genealogy, teaching or further, and volatile quantities leave cards and depth pages (2026-07-26). Exploration is not optional, since either the researchers explore themselves or whoever builds for them has to (operator argument, 2026-07-26). Nothing in the interface opens or closes (operator rule, 2026-07-29), and the specification becomes one page in five parts. Operator, on the plan of 2026-07-29: "setze alles um". Operator, on the revision round of 2026-07-30: "wenn gut begründet, setz alles um; Dokumente löschen, Wissen integrieren". Verification stands for conformance with formalised requirements and validation for the expert judgement of adequacy, with checking as the umbrella word (2026-07-31). The document class is called knowledge documents, and the site says recurrent forms of work instead of phases (2026-07-31).
- Rejected: a full-text search, because reviewers arrive at an address and agents resolve `template:` URIs. A replacement for the deleted document of open points, because the operator wanted the points worked off instead of planned. The term adversarial machine review, which the operator found martial, in favour of a review by an LLM.
- Corrected: the cut of 2026-07-25 that called the expert check verification and the rule check validation, reversed on 2026-07-31. The account of the origin, in which the dissertation introduces Promptotyping and the blog post of April 2025 is its first public description rather than its coinage, and the rewriting of the Bookkeeping Ontology into compact Markdown, from which the knowledge documents grew, took place at the end of 2024 and not a year earlier (2026-07-27).
- Evidence: `39d7bcf`, `b944fac`, `49f5802`, `636f914`, `c702c93`, `7138d2a`, `998aab2`, `f107a4f`, `0883029`.

### 2026-07-19–2026-07-24 Template mirrors, an English core and the paper

- Trigger: the findings of a content audit across the operator's vault, and the merging of a working draft of the paper with the existing version.
- Found: the knowledge base still described the removed phase lane as active. The rendering of templates was entirely data-driven, so a new mirror needed only its file and a catalogue entry.
- Decided: the templates are mirrored from the vault with English function names, and the slug for domain knowledge is `domain-knowledge`, as the template's own field names it (2026-07-19). The core knowledge documents become English so that the knowledge base can serve as the public example of the practice applied to itself (operator decision of 2026-07-23). The licence policy is MIT for code and CC BY 4.0 for text, with a citation identity and an ORCID (accepted by the operator, 2026-07-23). A technology baseline states the rules for the static web tool. British spelling stays, overruling a recommendation of American spelling.
- Rejected: the slug `domaenenwissen`, inconsistent with the concept source. Keeping a document alive only because an identifier in the evidence layer pointed at it, once the identifier could be pinned to a commit.
- Evidence: `2b95587`, `c28cb17`, `b0e933c`, `7c20964`.

### 2026-06-09–2026-06-21 The first site and the operator's review

- Trigger: the plan to build the site, and the operator's review of the first deployment.
- Found: a review of the build plan found that GitHub Pages would not publish the underscore folder `_content/` without `.nojekyll`, and that an address resolved only through `404.html` returns HTTP status 404 and content only after JavaScript.
- Decided: the raw Markdown file is the machine address of a template. The genre vocabulary of the use cases stays out of the interface (operator decision). After the first deployment the lane that marked each paragraph by its phase is removed in favour of an undisturbed reading flow (operator decision of 2026-06-10). Fonts are served locally because the site promises no tracking.
- Rejected: a planned sweep across many repositories by several agents, which the operator stopped before its verification phase, with twelve central findings checked by sample instead (2026-06-09).
- Evidence: `271216a`, `288ef93`.

### 2026-05-09 The radical cut and the first knowledge base

- Trigger: the state of November 2025, a six-phase method with a living paper and decorative modules, judged methodologically outdated.
- Found: a check of the first knowledge base against the template convention found twelve weaknesses, one of them structural. The data template applies only where a project processes or produces data, and this repository mirrors knowledge.
- Decided: a radical cut, with the old state kept in Git. `data.md` is removed and its content becomes the data basis in `project.md`. Templates are addressed as `/promptotyping-document/<slug>` and `#promptotyping-document-<slug>`, with a version only as a sub-anchor on a version change.
- Rejected: the statement that the documents are the source of truth from which code can be generated deterministically, as methodologically imprecise. The address form `/vorlagen/<name>/<version>`, because it wrote a version into every foreign `template:` field and used a German slug.
- Evidence: `fe2d479`.

### 2025-09-18–2025-11-18 The earlier repository

- Trigger: the first publication of Promptotyping as a repository.
- Found: the repository described Promptotyping as an LLM-assisted development methodology in six phases and turned into an interactive academic paper, the living paper, with three decorative modules.
- Changed: replaced on 2026-05-09 by the cut above. Git keeps the state.
- Evidence: `a332223`, `5ed36bc`.

### 2023–2025 Origin of the practice

- Found: Promptotyping grew out of research software development in the digital humanities. A dissertation at the University of Graz (2025) supplied the problem and the vocabulary and introduced the term. At the end of 2024 an ontology of historical bookkeeping was rewritten into compact Markdown, because its full OWL and RDF representations were unsuited to repeated use in a context window, and the knowledge documents grew from that form. The first public description followed on the DHCraft blog in April 2025, and the first elaborated description on L.I.S.A. in January 2026.
- Evidence: https://unipub.uni-graz.at/obvugrhs/12127700, https://dhcraft.org/excellence/blog/Promptotyping, https://lisa.gerda-henkel-stiftung.de/digitale_geschichte_pollin.
