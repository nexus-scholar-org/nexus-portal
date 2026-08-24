# Lesson Specification: Module 6.2

## Metadata
| Field | Value |
|:---|:---|
| **Module** | Module 6.2 |
| **Title** | Python for Researchers: The Survival Basics |
| **Part** | Part 1: Main Curriculum |
| **Estimated Duration** | 45 minutes |
| **Nexus Tool(s)** | None |
| **Prerequisites** | None |

---

## Learning Objectives
By the end of this lesson, students will be able to:
1. **Explain** why Excel is insufficient for modern academic data analysis (reproducibility limits).
2. **Setup** a basic Python environment using Anaconda or `uv`.
3. **Write** a minimal Python script to load data (Pandas), clean it, and plot it (Matplotlib/Seaborn).
4. **Automate** repetitive file-handling tasks that would take hours to do manually.

---

## Key Concepts

### Concept 1: Why Code? (The Excel Trap)
- Excel is great for looking at small datasets. It is terrible for reproducibility.
- If you sort a column in Excel and accidentally don't select the whole sheet, your data is silently corrupted. If you delete an outlier, there is no record of it.
- **Python (or R) is an audit trail.** Every change to the data is recorded in a script that can be run repeatedly.

### Concept 2: The Modern Python Stack
- You do not need to be a software engineer to use Python. You only need to know a few libraries:
  - **Pandas:** For loading and manipulating tabular data (think: Excel on steroids).
  - **Matplotlib/Seaborn:** For creating publication-quality figures.
  - **Jupyter Notebooks:** For writing code in "blocks" so you can see the data as you work.

### Concept 3: The Automator
- Researchers waste hundreds of hours manually renaming files, copying data from 50 PDFs into a spreadsheet, or converting image formats.
- A 10-line Python script can automate a week's worth of manual data entry in 5 seconds.

### Concept 4: Asking for Help (The LLM Advantage)
- Five years ago, learning to code was hard. Today, with LLMs (ChatGPT, Claude), it is trivial.
- You don't need to memorize syntax. You need to know *what* to ask the LLM to do. "Write a Python script using pandas to merge these three CSVs based on the 'Patient_ID' column and drop any rows with missing values."

---

## Suggested Hooks & Motivation
- **Pain Point:** You just spent 3 days manually copying data from 200 Word documents into an Excel spreadsheet. Then your advisor asks you to do it again for a different set of documents.
- **Wow Moment:** Watching a 5-line Python script do the exact same task perfectly in 0.4 seconds.

---

## Sources & Further Reading
1. McKinney, W. (2022). *Python for Data Analysis*. O'Reilly.
2. VanderPlas, J. (2016). *Python Data Science Handbook*. O'Reilly.
