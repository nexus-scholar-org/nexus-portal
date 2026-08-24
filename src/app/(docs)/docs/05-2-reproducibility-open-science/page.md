---
title: "Lesson Specification: Module 5.2"
---

# Lesson Specification: Module 5.2

## Metadata
| Field | Value |
|:---|:---|
| **Module** | Module 5.2 |
| **Title** | Reproducibility & Open Science |
| **Part** | Part 1: Main Curriculum |
| **Estimated Duration** | 20 minutes |
| **Nexus Tool(s)** | None |
| **Prerequisites** | None |

---

## Learning Objectives
By the end of this lesson, students will be able to:
1. **Define** the replication crisis and its impact on academic credibility.
2. **Apply** the FAIR data principles (Findable, Accessible, Interoperable, Reusable).
3. **Structure** a research repository (code, data, and environment) for public release.
4. **Evaluate** open-access publishing routes (Preprints, Gold OA, Green OA).

---

## Key Concepts

### Concept 1: The Replication Crisis
- A significant percentage of published studies across psychology, medicine, and economics cannot be replicated by independent researchers.
- Causes: p-hacking, publication bias (only positive results get published), and opaque methodologies (not sharing code/data).
- **The Solution:** Open Science.

### Concept 2: The FAIR Data Principles
If you release data, it must be:
- **Findable:** Hosted on a persistent repository (like Zenodo or OSF) with a DOI, not just on a personal website.
- **Accessible:** Clear terms of use. Even if the data is restricted (e.g., medical records), the *metadata* must be accessible.
- **Interoperable:** Use standard, non-proprietary formats (e.g., CSV instead of an Excel file with macros).
- **Reusable:** Includes a clear license (e.g., CC-BY) and documentation (a Data Dictionary).

### Concept 3: The Reproducible Repository
A reproducible code repository needs three things:
1. **The Code:** Clean, commented scripts.
2. **The Environment:** A `requirements.txt`, `environment.yml`, or Dockerfile. (Code from 2020 won't run in 2026 without the environment).
3. **The Data (or a toy dataset):** If the real data is too large or private, provide a sample so the code can be tested.

### Concept 4: Open Access (OA) Publishing
- **Preprints:** Uploading your manuscript to arXiv/bioRxiv before peer review. Fast, free, establishes priority.
- **Gold OA:** The author pays an Article Processing Charge (APC) to make the final paper free for everyone.
- **Green OA:** Publishing in a traditional journal, but self-archiving the accepted manuscript in a university repository.

---

## Suggested Hooks & Motivation
- **Pain Point:** Trying to build upon a 3-year-old paper, but the author's code is a broken zip file linked to a dead Dropbox link, and the data is "available upon reasonable request" (but the author ignores your emails).
- **Wow Moment:** Seeing a perfectly packaged Zenodo repository that assigns a DOI to code, making the code itself a citable research artifact.

---

## Sources & Further Reading
1. Wilkinson, M. D., et al. (2016). *The FAIR Guiding Principles for scientific data management and stewardship*. Scientific Data.
2. Baker, M. (2016). *1,500 scientists lift the lid on reproducibility*. Nature.
