---
title: "Lesson Specification: Module 2.1"
---

# Lesson Specification: Module 2.1

## Metadata

| Field | Value |
|:---|:---|
| **Module** | Module 2.1 |
| **Title** | Designing Your Research Question |
| **Part** | Part 1: Main Curriculum |
| **Estimated Duration** | 30 minutes |
| **Nexus Tool(s)** | None (pure methodology) |
| **Prerequisites** | Module 0.2 (Research Methodologies) |

---

## Learning Objectives

By the end of this lesson, students will be able to:

1. **Construct** a well-scoped research question using established frameworks (PICO for health sciences, SPIDER for qualitative research, or the Heilmeier Catechism for engineering/CS).
2. **Distinguish** between a topic, a research gap, and a research question — and explain why only the latter drives a thesis.
3. **Perform** a preliminary gap analysis by combining keyword searches with citation network analysis to identify where the field has under-explored territory.
4. **Evaluate** their own research question against the "FINER" criteria (Feasible, Interesting, Novel, Ethical, Relevant).

---

## Key Concepts

### Concept 1: Topic ≠ Gap ≠ Question
- **A Topic** is a broad area: "Machine learning in healthcare."
- **A Gap** is a specific observation about what the field has NOT done: "No study has compared transformer architectures to RNNs for predicting ICU readmission in pediatric patients."
- **A Research Question** is a precise, answerable query that fills that gap: "How does transformer-based prediction of pediatric ICU readmission compare to RNN-based models in terms of AUROC and calibration?"
- **The Mistake:** Most first-year PhD students confuse a topic for a question, leading to years of unfocused work.

### Concept 2: Frameworks for Crafting Questions
- **PICO** (Population, Intervention, Comparison, Outcome): Gold standard for clinical and health sciences research. Forces you to specify exactly who, what, vs. what, and measured how.
- **SPIDER** (Sample, Phenomenon of Interest, Design, Evaluation, Research type): Adapted for qualitative and mixed-methods research where "intervention" doesn't apply.
- **Heilmeier Catechism** (DARPA): For engineering and computer science. Asks: What are you trying to do? How is it done today? What is new in your approach? Who cares? What are the risks?

### Concept 3: Gap Analysis — Finding White Space
- **Step 1:** Conduct a broad search using `scholar-search-kit`.
- **Step 2:** Build a citation network using `scholar-graph-kit`. Look for clusters with few connections (under-explored intersections).
- **Step 3:** Read the "Future Work" sections of the most-cited papers (identified by PageRank). These sections are literal roadmaps to publishable research questions.

### Concept 4: The FINER Criteria
- **Feasible:** Can I realistically answer this with my resources, time, and access to data?
- **Interesting:** Will my committee, my field, and potential employers care about the answer?
- **Novel:** Has this exact question been answered already? (Check your dedup results!)
- **Ethical:** Can I pursue this without harming participants or violating IRB/ethics board policies?
- **Relevant:** Does the answer advance knowledge or practice in a meaningful way?

---

## Suggested Hooks & Motivation

- **Pain Point:** "Six months into your PhD, your advisor asks: 'So, what exactly is your research question?' You pause. You thought you had one. You say, 'I'm working on machine learning in healthcare.' Your advisor frowns. That's a topic, not a question. You just realized you've been working without a compass."
- **Wow Moment:** "What if you could use the same tools we learned in Module 3 and Module 4 — search and graph analysis — to systematically identify gaps in the literature and construct a research question that is almost guaranteed to be publishable?"
- **Real-World Scenario:** "Your thesis proposal is due in 3 months. By the end of this lesson, you will have a draft research question that passes the FINER criteria, built using a repeatable, evidence-based process."

---

## Cross-References

- **Builds on:** Module 0.2 (Research Methodologies — quantitative, qualitative, mixed).
- **Uses tools from:** Module 2.2 (scholar-search-kit) and Module 3.2 (scholar-graph-kit — citation networks).
- **Leads to:** Module 3.4 (Conducting a full SLR).

---

## Sources & Further Reading

1. Hulley, S. B., et al. (2013). *Designing Clinical Research*. (FINER criteria)
2. Cooke, A., Smith, D., & Booth, A. (2012). *Beyond PICO: the SPIDER tool for qualitative evidence synthesis*. Qualitative Health Research.
3. Heilmeier, G. *The Heilmeier Catechism*. DARPA.
