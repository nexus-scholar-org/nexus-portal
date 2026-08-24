# Exercise: The Protocol
**Module:** 3.4 — Conducting a Systematic Literature Review
**Estimated Time:** 30 minutes
**Difficulty:** ⭐⭐⭐ Advanced
**Nexus Tools:** `scholar-search-kit`, `scholar-pdf-kit`

---

## Scenario

> Your thesis proposal is due in 4 weeks. Your committee requires a systematic literature review, not a narrative review. You need to draft a replicable SLR protocol and run the first three stages of PRISMA using the Nexus toolkit.

---

## Tasks

### Task 1: Define Your Protocol
Before touching any tool, write down the following on paper or in a Markdown file:

1. **Research Question** (use Module 2.1's PICO/SPIDER/Heilmeier framework)
2. **Search Databases:** Which sources will you query? (e.g., OpenAlex, PubMed via import, Scopus via import)
3. **Search String:** Write the exact boolean query (e.g., `"deep learning" AND "medical imaging" AND ("fairness" OR "bias")`)
4. **Inclusion Criteria:** (e.g., published 2018–2026, English, peer-reviewed, empirical study)
5. **Exclusion Criteria:** (e.g., conference abstracts only, editorials, reviews, non-English)

**Question 1:** Why must you define your inclusion/exclusion criteria *before* running the search, rather than after you see the results?

---

### Task 2: Run the Identification Phase
1. Execute your search: `scholar-search build --query "YOUR QUERY" --sources openalex,crossref,s2`
2. If you have exports from proprietary databases, import them: `scholar-search import scopus.ris`
3. Record the raw number of results from each source.

**Question 2:** Fill in: OpenAlex returned ___ records. Crossref returned ___. Semantic Scholar returned ___. External imports: ___. **Total Identified: ___**

---

### Task 3: Deduplication
1. Run: `scholar-search dedup`
2. Record the output.

**Question 3:** How many duplicates were found? How many were by DOI? How many by fuzzy matching? **Unique records remaining: ___**

---

### Task 4: Fill in the PRISMA Flow Diagram
Using your numbers from Tasks 2 and 3, fill in this template:

```
IDENTIFICATION
├── Database 1 (OpenAlex): ___
├── Database 2 (Crossref): ___
├── Database 3 (S2): ___
└── External imports: ___
    Total: ___

DEDUPLICATION
├── Duplicates removed: ___
└── Unique records: ___

SCREENING (Title/Abstract)
├── Excluded: ___ (you would do this manually or with criteria)
└── Remaining: ___

ELIGIBILITY (Full Text)
├── Excluded: ___
└── Remaining: ___

INCLUDED: ___ papers
```

**Question 4:** Why is this flow diagram so important for the credibility of your literature review?

---

## Solution / Self-Check

<details>
<summary>Click to reveal solution</summary>

### Q1 Solution
Defining criteria before the search prevents "moving the goalposts." If you see the results first and then decide what to include, you introduce confirmation bias — you'll unconsciously include papers that support your hypothesis and exclude ones that don't. Pre-registration forces objectivity.

### Q2–Q3 Solution
Your specific numbers will vary. The important thing is that you *recorded* them. A PRISMA-compliant SLR requires exact numbers at every stage.

### Q4 Solution
The PRISMA flow diagram is the proof of your objectivity. It shows reviewers and your committee that you followed a systematic, reproducible process. Without it, your literature review is indistinguishable from a narrative review with cherry-picked sources.

### The Meta-Lesson
Every tool you learned in this course — search, import, dedup, PDF download, graph analysis, RAG querying — maps directly to a PRISMA stage. The SLR is the integrating framework that ties the entire toolkit together into a single, defensible methodology.

</details>
