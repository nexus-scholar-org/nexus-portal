# Exercise: The FAIR Data Audit
**Module:** 5.2 — Reproducibility & Open Science
**Estimated Time:** 15 minutes
**Difficulty:** ⭐ Beginner

---

## Scenario
> You are peer-reviewing a paper. The author has provided a link to their data and code: a public Google Drive folder containing two files:
> 1. `data_final_FINAL_v3.xlsx` (A spreadsheet with color-coded cells but no column headers)
> 2. `analysis.R` (An R script that starts with `setwd("C:/Users/John/Desktop/MyPaperData")`)

---

## Tasks

### Task 1: The Data Audit
Evaluate `data_final_FINAL_v3.xlsx` against the FAIR principles. Write down exactly why it fails each criteria:
- **Findable:** Why does a Google Drive link fail?
- **Accessible:** (Assume anyone with the link can view it)
- **Interoperable:** Why is `.xlsx` with color-coded cells a bad format?
- **Reusable:** What is missing that prevents you from reusing this data?

### Task 2: The Code Audit
Look at the R script starting with `setwd("C:/Users/John/Desktop/MyPaperData")`.
1. What will happen when you try to run this code on your computer?
2. What missing file is required to ensure this R script will still run 3 years from now?

### Task 3: The Fix
Write a short, polite note to the author explaining what they need to do to make their repository acceptable for publication. Suggest specific tools (e.g., Zenodo, CSV).

---

## Solution / Self-Check

<details>
<summary>Click to reveal</summary>

### Task 1: Data Audit
- **Findable:** Google Drive links break. It needs a persistent DOI from a repository like Zenodo.
- **Interoperable:** `.xlsx` is proprietary. Color-coding cannot be read by scripts. It should be a `.csv` where categorical variables are text or numbers, not colors.
- **Reusable:** There is no Data Dictionary (what do the columns mean?) and no open-source license.

### Task 2: Code Audit
1. The code will crash immediately because your computer does not have a `C:/Users/John/Desktop` directory. Scripts should use relative paths (e.g., `./data/`).
2. There is no environment file (e.g., `renv.lock` for R, or `requirements.txt` for Python) specifying the package versions.

### Task 3: Polite Note
"Dear Author, thank you for sharing your data and code. To ensure reproducibility, please export your data as a CSV and include a Data Dictionary explaining the columns. For the code, please replace absolute file paths with relative paths, and include an environment file. Finally, please upload these materials to a persistent repository like Zenodo to receive a DOI, rather than using Google Drive."
</details>
