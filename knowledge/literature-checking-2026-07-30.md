# Literature Scout: Anchoring the Checking Forms of §2.3 (2026-07-30)

Verified literature for anchoring the paper's checking architecture in four adjacent discourses. Two Opus research agents collected and verified every entry against a landing page (arXiv abstract, publisher DOI page, ACL Anthology) or the Crossref DOI registry where publishers block automated access (ACM DL, Springer Link). Nothing unverifiable was reported; one SSRN item (Fink, Human Oversight under Article 14 of the EU AI Act) was excluded for exactly that reason. This document is a dated working register; adoption decisions belong to the operator, and adopted works enter the paper's References and the vault source register.

## 1. LLM-as-a-Judge (anchors agentic review)

Recommended for citation:

- Krumdick, Michael, Charles Lovering, Varshini Reddy, Seth Ebner, and Chris Tanner. 2025. "No Free Labels: Limitations of LLM-as-a-Judge Without Human Grounding." arXiv:2503.05061. Preprint. Judges agree with experts only on questions they can answer themselves; human-written reference answers largely repair this. Supplies the mechanism behind the paper's construction, the human sets the reference, the model delivers the comparison.
- Szymanski, Annalisa, Noah Ziems, Heather A. Eicher-Miller, Toby Jia-Jun Li, Meng Jiang, and Ronald A. Metoyer. 2025. "Limitations of the LLM-as-a-Judge Approach for Evaluating LLM Outputs in Expert Knowledge Tasks." Proceedings of IUI '25. DOI 10.1145/3708359.3712091. Peer-reviewed. Expert agreement with judges at 68% (dietetics) and 64% (mental health); authors conclude domain experts must remain in the evaluation process.

Reserve:

- Li, Dawei, et al. 2025. "From Generation to Judgment: Opportunities and Challenges of LLM-as-a-judge." EMNLP 2025. arXiv:2411.16594. Survey anchor for the paradigm name.
- Gu, Jiawei, et al. 2025. "A Survey on LLM-as-a-Judge." arXiv:2411.15594 (v6). Reliability-centred survey alternative.
- Norman, Justin D., Michael U. Rivera, and D. Alex Hughes. 2026. "Reliability without Validity: A Systematic, Large-Scale Evaluation of LLM-as-a-Judge Models Across Agreement, Consistency, and Bias." arXiv:2606.19544. Preprint. 21 judge models, ~541k judgements; high test-retest consistency coexists with position bias and validity loss. Footnote candidate for separating consistency from validity.
- Thakur, Aman Singh, et al. 2025. "Judging the Judges: Evaluating Alignment and Vulnerabilities in LLMs-as-Judges." GEM² Workshop, ACL Anthology 2025.gem-1.33. Quantifies judge-human divergence.
- Ye et al. 2024, arXiv:2410.02736 (twelve bias categories, CALM framework); Feng et al. 2025, arXiv:2512.16041 (consistency without human annotation). Both verified, no stated venue.

## 2. Human oversight (anchors the Critical Expert and the presence claim)

Recommended for citation:

- Green, Ben. 2022. "The Flaws of Policies Requiring Human Oversight of Government Algorithms." Computer Law & Security Review 45: 105681. DOI 10.1016/j.clsr.2022.105681. Peer-reviewed. 41 oversight policies; the demanded control performance is not empirically delivered, so the requirement legitimises flawed systems. Direct support for the claim that a person's presence does not guarantee effective control.
- Sterz, Sarah, Kevin Baum, Sebastian Biewer, Holger Hermanns, Anne Lauber-Rönsberg, Philip Meinel, and Markus Langer. 2024. "On the Quest for Effectiveness in Human Oversight: Interdisciplinary Perspectives." FAccT '24, 2495–2507. DOI 10.1145/3630106.3659051. Peer-reviewed. Defines conditions of effective oversight, with individual competence among them; gives the Critical Expert its criterion in the oversight literature.

Reserve:

- Beck, Jacob, Stephanie Eckman, Christoph Kern, and Frauke Kreuter. 2026. "Bias in the Loop: How Humans Evaluate AI-Generated Suggestions." Harvard Data Science Review 8 (2). arXiv:2509.08514. Peer-reviewed (DOI unconfirmed, HDSR blocks automated access; verified via arXiv and the second author's publication page). Randomised experiment, n=2784; checkpoint design determines checking quality, and mandated corrections can reduce engagement and increase acceptance of wrong suggestions.
- Gaube, Susanne, et al. 2026. "Keeping an Eye on AI: A Framework for Effective Human Oversight of AI Systems." arXiv:2605.16278. Dagstuhl-seminar consensus framework.
- Taş, Eylem, Lucas Memmert, and Eva A. C. Bittner. 2026. "Episodic oversight in generative AI workflows: A nine-step protocol for preserving human agency (OP-9)." Electronic Markets. DOI 10.1007/s12525-026-00915-x. Peer-reviewed; oversight located in generative text workflows.
- Romeo, Giuseppe, and Daniela Conti. 2025. "Exploring automation bias in human–AI collaboration: a review and implications for explainable AI." AI & Society. DOI 10.1007/s00146-025-02422-7. Peer-reviewed review; explanations can amplify misplaced trust in less experienced professionals.
- Laux, Johann. 2024. "Institutionalised distrust and human oversight of artificial intelligence." AI & Society 39 (6): 2853–2866. DOI 10.1007/s00146-023-01777-z. First- vs second-degree oversight.
- Lee et al. 2025, CHI '25, DOI 10.1145/3706598.3713778. Higher AI confidence correlates with less critical thinking among 319 knowledge workers.

## 3. Tests as executable judgement in agentic coding (anchors the one-way conversion)

Recommended for citation:

- Fakhoury, Sarah, Aaditya Naik, Georgios Sakkas, Saikat Chakraborty, and Shuvendu K. Lahiri. 2024. "LLM-Based Test-Driven Interactive Code Generation: User Study and Empirical Evaluation." IEEE Transactions on Software Engineering 50 (9): 2254–2268. DOI 10.1109/TSE.2024.3428972. Peer-reviewed. Tests as partial formalisation of user intent (TiCoder), with user study; matches the paper's conversion claim verbatim.
- Hora, Andre, and Romain Robbes. 2026. "Are Coding Agents Generating Over-Mocked Tests? An Empirical Study." MSR 2026. arXiv:2602.00409. Peer-reviewed (accepted). 1.2M commits, 2168 repositories; agents change tests twice as often as humans and mock more (36% vs 26%). The counterweight: an executable check is worth only the judgement that entered it.

Reserve:

- Han, Kevin, et al. 2026. "TDFlow: Agentic Workflows for Test Driven Development." EACL 2026. arXiv:2510.23761. Test feedback as the structure of agent work (94.3% SWE-Bench Verified).
- Chen, Zhi, et al. 2026. "Rethinking the Value of Agent-Generated Tests for LLM-Based Software Engineering Agents." arXiv:2602.07900. Preprint. Agent-written tests act mostly as observation instruments; sharpest evidence for distinguishing checks that codify prior human judgement from checks an agent issues to itself.
- Wang, Binghai, et al. 2026. "The Verification Horizon: No Silver Bullet for Coding Agent Rewards." arXiv:2606.26300. Preprint. Four verifier types; verification proxies never fully capture human intention.
- Lipsanen et al. 2026, VibeX Workshop, arXiv:2604.20436 (guardrail framework, initial findings); Rosa et al. 2026, SANER Registered Report, arXiv:2601.03878 (no results yet); Hamblin et al. 2026, SpecBench, arXiv:2605.30314 (best model detects 44.4% of specification flaws).

## 4. HCI evaluation at the boundary of acceptance testing

Recommended for citation:

- Benito-Santos, Alejandro, Florian Windhager, Aida Horaniet Ibañez, Rabea Kleymann, Alfie Abdul-Rahman, and Eva Mayr. 2026. "Chasing Meaning and/or Insight? A Survey on Evaluation Practices at the Intersection of Visualization and the Humanities." CHI 2026, 1–23. DOI 10.1145/3772318.3793150. Peer-reviewed. 171 VIS4DH design studies; monomethod evaluation dominates, robust evaluations triangulate evidence kinds. The DH-specific argument against the self-sufficiency of any single checking form.
- Hertzum, Morten. 2024. "Concurrent or Retrospective Thinking Aloud in Usability Tests: A Meta-Analytic Review." ACM Transactions on Computer-Human Interaction 31 (3): 1–29. DOI 10.1145/3665327. Peer-reviewed. Meta-analysis of 29 studies; gives think-aloud a current methodological standing beyond Ericsson/Simon.

Reserve:

- Cutler, Zach, Lane Harrison, Carolina Nobre, and Alexander Lex. 2025. "Crowdsourced Think-Aloud Studies." CHI 2025. DOI 10.1145/3706598.3714305. Scaling argument for observation-based evaluation.
- Alvite-Díez, María-Luisa. 2025. "User Interfaces of Digital Scholarly Editions: A Proposal for an Evaluative Framework." International Journal of Digital Humanities 7 (1): 153–172. DOI 10.1007/s42803-025-00102-y. Expert criteria and observed use deliver separate findings for digital editions.
- Gautam, Sanjana, Houjiang Liu, Yujin Choi, and Matthew Lease. 2026. "How Researchers Navigate Accountability, Transparency, and Trust When Using AI Tools in Early-Stage Research: A Think-Aloud Study." arXiv:2604.23136. Preprint. Requirements for AI research tools emerged only from observing actual use.

## 5. Recovered citations (2026-07-30, all web-verified, resolve the manuscript's dangling author-date citations)

Ready-to-paste Chicago entries; verified-at URLs in parentheses. Title separators normalised to the Chicago colon; Russell/Norvig kept at 2020 to match the in-text citation and trade data (LoC CIP says [2021], noted as reservation).

- Ciula, Arianna, Øyvind Eide, Cristina Marras, and Patrick Sahle. 2023. *Modelling Between Digital and Humanities: Thinking in Practice*. Cambridge, UK: Open Book Publishers. https://doi.org/10.11647/OBP.0369. (openbookpublishers.com, Crossref)
- Fickers, Andreas. 2020. "Update für die Hermeneutik: Geschichtswissenschaft auf dem Weg zur digitalen Forensik?" *Zeithistorische Forschungen / Studies in Contemporary History* 17 (1): 157–68. https://doi.org/10.14765/zzf.dok-1765. (zeithistorische-forschungen.de)
- Herrmann, J. Berenike, Anne-Sophie Bories, Francesca Frontini, Clèmence Jacquot, Steffen Pielström, Simone Rebora, Geoffrey Rockwell, and Stéfan Sinclair. 2023. "Tool Criticism in Practice: On Methods, Tools and Aims of Computational Literary Studies." *Digital Humanities Quarterly* 17 (2). https://doi.org/10.63744/apvw2r52eet3. (dhq.digitalhumanities.org)
- Russell, Stuart J., and Peter Norvig. 2020. *Artificial Intelligence: A Modern Approach*. 4th ed. Hoboken, NJ: Pearson. (openlibrary.org, pearson.com)
- Lewis, Patrick, Ethan Perez, Aleksandra Piktus, Fabio Petroni, Vladimir Karpukhin, Naman Goyal, Heinrich Küttler, Mike Lewis, Wen-tau Yih, Tim Rocktäschel, Sebastian Riedel, and Douwe Kiela. 2020. "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks." In *Advances in Neural Information Processing Systems 33*, 9459–74. Red Hook, NY: Curran Associates. (proceedings.neurips.cc, dblp)
- Schön, Donald A. 1996. "Reflective Conversation with Materials: An Interview with Donald Schön by John Bennett." In *Bringing Design to Software*, edited by Terry Winograd, 171–89. New York: ACM Press. https://doi.org/10.1145/229868.230044. (hci.stanford.edu full text, Crossref)
- Goldschmidt, Gabriela. 2003. "The Backtalk of Self-Generated Sketches." *Design Issues* 19 (1): 72–88. https://doi.org/10.1162/074793603762667728. (Crossref, direct.mit.edu)
- Karpathy, Andrej. 2026. "LLM Wiki." GitHub Gist, April 4, 2026. https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f. (gist verified; matches the footnote's three elements verbatim)
