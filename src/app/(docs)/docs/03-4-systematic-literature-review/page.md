---
title: "Lesson Specification: Module 3.4"
---

# Lesson Specification: Module 3.4

## Metadata

| Field | Value |
|:---|:---|
| **Module** | Module 3.4 |
| **Title** | Conducting a Systematic Literature Review |
| **Part** | Part 1: Main Curriculum |
| **Estimated Duration** | 35 minutes |
| **Nexus Tool(s)** | `scholar-search-kit`, `scholar-pdf-kit`, `scholar-graph-kit`, `scholar-rag-kit` |
| **Prerequisites** | Modules 2.1–2.5 (Finding Literature), Module 3.1 (Synthesis) |

---

## Learning Objectives

By the end of this lesson, students will be able to:

1. **Describe** the full PRISMA 2020 workflow from protocol registration to reporting.
2. **Map** each phase of the SLR process to the specific Nexus tool that automates it.
3. **Construct** a PRISMA flow diagram using real numbers from their own search.
4. **Evaluate** the difference between a narrative review and a systematic review, and when each is appropriate.

---

## Key Concepts

### Concept 1: What Makes a Review "Systematic"?
- **Narrative Review:** An author-driven survey of the literature. The author picks what to include based on their judgment. Susceptible to cherry-picking and confirmation bias.
- **Systematic Review:** A protocol-driven, reproducible search of the literature. The inclusion/exclusion criteria are defined *before* the search begins. Every step is documented so another researcher could replicate your exact results.
- **Why it matters:** A systematic review is considered the highest level of evidence in evidence-based medicine and is increasingly expected in engineering, education, and social sciences.

### Concept 2: The PRISMA 2020 Framework
The PRISMA (Preferred Reporting Items for Systematic Reviews and Meta-Analyses) framework defines the standard workflow:
1. **Protocol Registration:** Pre-register your search strategy (e.g., on PROSPERO) to prevent bias.
2. **Identification:** Run searches across multiple databases. Report how many records each database returned.
3. **Screening:** Apply inclusion/exclusion criteria. First by title/abstract, then by full text.
4. **Included:** The final set of papers that passed all filters.
5. **Reporting:** Generate the PRISMA flow diagram showing exact numbers at each stage.

### Concept 3: The Nexus Toolkit as an SLR Engine
This is the capstone lesson that ties together everything the student has learned:
- **Identification:** `scholar-search-kit` (multi-source search) + `scholar-search import` (external databases)
- **Deduplication:** `scholar-search dedup` (remove duplicates across sources)
- **Full-text retrieval:** `scholar-pdf-kit` (download open-access PDFs)
- **Analysis:** `scholar-graph-kit` (citation networks, snowballing) + `scholar-rag-kit` (semantic querying)
- **Synthesis:** The extraction template and synthesis matrix from Module 3.1

### Concept 4: Common Pitfalls
- **Moving the goalposts:** Changing your inclusion criteria mid-search to include papers you "like" undermines the entire methodology.
- **Publication bias:** Positive results get published more often. Your SLR should acknowledge this.
- **Scope creep:** An SLR with 5,000 included papers is unmanageable. Tight, precise research questions (Module 2.1) prevent this.

---

## Suggested Hooks & Motivation

- **Pain Point:** "Your thesis committee asks: 'How do we know you didn't cherry-pick these papers to support your argument?' You have no answer. A systematic review IS the answer — it proves your literature search was objective, reproducible, and exhaustive."
- **Wow Moment:** "Everything we've learned in this course — search, dedup, PDFs, graphs, RAG — clicks together in this one lesson. The SLR is the final boss, and the Nexus toolkit is your weapon."
- **Real-World Scenario:** "In fields like medicine, a systematic review can literally change clinical practice guidelines. In CS and engineering, SLRs are increasingly required for top-tier journals."

---

## Cross-References

- **Builds on:** Every module in Modules 2 and 3.
- **Leads to:** Module 4.1 (Writing — now you have the content to write about).

---

## Sources & Further Reading

1. Page, M. J., et al. (2021). *The PRISMA 2020 statement*. BMJ.
2. Kitchenham, B. (2004). *Procedures for Performing Systematic Reviews*. Keele University Technical Report.
