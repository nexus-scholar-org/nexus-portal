# Exercise: Calculate the h-index
**Module:** 0.3 — The Publishing Ecosystem
**Estimated Time:** 15 minutes
**Difficulty:** ⭐ Beginner
**Nexus Tool:** None (Manual Calculation)

---

## Scenario

> You are on a hiring committee for a new Assistant Professor in your department. You have two candidates. One candidate has a few massively viral papers. The other candidate publishes consistently well. The committee chair wants to know their h-indices to gauge their sustained impact.
>
> **Definition:** An author has an index of $h$ if $h$ of their papers have at least $h$ citations each.

---

## Tasks

### Task 1: Calculate Candidate A's h-index
Candidate A has published 6 papers over their career. Here are their citation counts:
- Paper 1: 5 citations
- Paper 2: 12 citations
- Paper 3: 1 citation
- Paper 4: 8 citations
- Paper 5: 3 citations
- Paper 6: 4 citations

**Instructions:**
1. Sort Candidate A's papers in descending order by citation count.
2. Determine their h-index.

---

### Task 2: Calculate Candidate B's h-index
Candidate B has published 8 papers over their career. Here are their citation counts:
- Paper 1: 150 citations
- Paper 2: 85 citations
- Paper 3: 2 citations
- Paper 4: 1 citation
- Paper 5: 2 citations
- Paper 6: 0 citations
- Paper 7: 1 citation
- Paper 8: 3 citations

**Instructions:**
1. Sort Candidate B's papers in descending order by citation count.
2. Determine their h-index.

---

### Task 3: Compare and Critique (Analysis)

1. Who has more total citations, Candidate A or Candidate B?
2. Who has the higher h-index?
3. Which candidate demonstrates *sustained* impact across multiple projects, and which candidate relies on one or two "blockbuster" hits? 
4. Why is the h-index considered a better metric for evaluating a researcher's overall career than total citation count?

---

## Hints

<details>
<summary>Hint: How to calculate manually</summary>

1. Sort the list of citations from highest to lowest.
2. Create a numbered list next to them (1, 2, 3, 4...). This number is the "rank".
3. Go down the list. As long as the citation count is **greater than or equal to** the rank, keep going.
4. Stop when the citation count is **less than** the rank.
5. The last valid rank is the h-index.

</details>

---

## Solution / Self-Check

<details>
<summary>Click to reveal solution</summary>

### Task 1 Solution: Candidate A
Sorted list:
1. 12 citations (12 $\ge$ 1) -> OK
2. 8 citations (8 $\ge$ 2) -> OK
3. 5 citations (5 $\ge$ 3) -> OK
4. 4 citations (4 $\ge$ 4) -> OK
5. 3 citations (3 < 5) -> STOP

**Candidate A's h-index is 4.** (They have 4 papers with at least 4 citations).

### Task 2 Solution: Candidate B
Sorted list:
1. 150 citations (150 $\ge$ 1) -> OK
2. 85 citations (85 $\ge$ 2) -> OK
3. 3 citations (3 $\ge$ 3) -> OK
4. 2 citations (2 < 4) -> STOP

**Candidate B's h-index is 3.** (They have 3 papers with at least 3 citations).

### Task 3 Solution: Critique
1. Candidate B has way more total citations (244) compared to Candidate A (33).
2. Candidate A has the higher h-index (4 vs 3).
3. Candidate A demonstrates sustained, consistent impact. Candidate B relies entirely on two blockbuster hits, while the rest of their research was largely ignored.
4. Total citations can be heavily skewed if a researcher happens to be a middle-author on one famous paper. The h-index smooths out these outliers and rewards researchers who consistently produce useful, cited work over their careers.

</details>
