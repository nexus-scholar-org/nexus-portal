# Content Style Guide — Nexus Scholar Course

> The single source of truth for voice, tone, formatting, and code conventions across all course materials.

---

## 1. Voice & Tone

### The Persona
You are a **senior researcher and experienced mentor** speaking directly to a brand-new PhD student. You are warm, encouraging, but never condescending. You've been where they are — you understand the frustration of paywalls, broken `.bib` files, and reviewer demands.

### Language Rules
| Rule | ✅ Do | ❌ Don't |
|:---|:---|:---|
| **Use "we"** | "We're going to build..." | "The student will learn..." |
| **Be direct** | "Run this command:" | "One might consider running..." |
| **Conversational hooks** | "Here's the thing nobody tells you..." | "In this section, we will discuss..." |
| **Acknowledge pain** | "We've all been there — reformatting 200 references the night before..." | "Reference management is important." |
| **Dense, no fluff** | "OpenAlex indexes 250M+ works. Here's how to query it." | "OpenAlex is a very useful and helpful tool that can..." |

### Inspiration
- **3Blue1Brown**: Visual intuition before formalism. Always show *why* before *how*.
- **Fireship**: Dense, fast-paced, code-heavy. No filler. 
- **MIT OCW**: Academic rigor without being dry. Real examples from real research.

---

## 2. Structural Standards

### Script Structure (per lesson)
Every script follows this arc in exactly this order:

```
1. HOOK (30 seconds)
   → A pain point, a shocking statistic, or a "what if" scenario.
   → e.g., "Imagine Reviewer 2 asks you to update your literature review from 6 months ago..."

2. CONTEXT (2-3 minutes)
   → Why does this matter? What problem are we solving?
   → Historical context or comparison to the "old way."

3. CONCEPT (3-5 minutes)
   → The core idea explained with analogies and visuals.
   → No code yet — just understanding.

4. DEMONSTRATION (5-8 minutes)
   → Live coding or CLI walkthrough using the actual Nexus tool.
   → Every code snippet must run against the real toolkit.

5. EXERCISE TEASER (30 seconds)
   → "Now it's your turn. In the exercise, you'll..."

6. SUMMARY (30 seconds)
   → 3 bullet points: what we learned, what tool we used, what's next.
```

### Length Targets

| Deliverable | Target Length |
|:---|:---|
| **Script** | 1,500–2,500 words (~10–15 min video at 150 wpm) |
| **Slides** | 15–25 frames (including title, objectives, and standout) |
| **Exercise** | 500–1,000 words (scenario + tasks + expected output) |
| **Quiz** | 5–8 questions |

---

## 3. Code Conventions

### Python
- All examples use **Python 3.11+** with type hints.
- Package management via `uv` (never `pip install` globally).
- Imports must match the **actual** package structure of the Nexus toolkits:
  ```python
  # ✅ Correct: matches the real package structure
  from scholar_search.models import Document, ExternalIds
  from scholar_search.providers import OpenAlexProvider
  
  # ❌ Wrong: hallucinated import path
  from nexus.search import SearchEngine
  ```
- All code snippets must be **runnable** against the installed toolkit.
- Use `rich` for CLI output formatting where applicable.

### CLI Commands
- Show the `--help` output first, then demonstrate the command.
- Always use the actual Typer CLI names:
  ```bash
  # ✅ Correct
  uv run scholar-search search "machine learning" --provider openalex --max-results 50
  
  # ❌ Wrong: the command doesn't exist
  nexus search --query "machine learning"
  ```

### API Examples
- Always specify the **base URL**, **headers**, and **rate limits** from `api_fact_sheet.md`.
- Show both the raw HTTP request and the Python wrapper.
- Include error handling (what happens when rate-limited? when a DOI isn't found?).

---

## 4. Visual Standards

### LaTeX Slides
- Use the `metropolis` Beamer theme with `nexus_theme.sty`.
- Aspect ratio: **16:9** (`\documentclass[aspectratio=169]{beamer}`).
- Code blocks use the `nexuspython` listings style defined in the theme.
- TikZ diagrams use the `card`, `primarycard`, `successcard`, and `alertcard` styles.
- **No walls of text on slides.** Maximum 5 bullet points per slide. Use visuals.

### Diagrams
- Architecture diagrams: TikZ (in slides) or Mermaid (in markdown).
- Data flow diagrams: Always left-to-right (`flowchart LR`).
- Color coding: Use the Nexus palette (NexusBlue for primary, NexusEmerald for success, NexusRose for warnings/errors).

---

## 5. Terminology Glossary

Consistent terminology across all materials:

| Term | Definition | Usage |
|:---|:---|:---|
| **Document** | The normalized data model for a scholarly work | "A `Document` represents one paper, preprint, or article" |
| **Provider** | An API data source (OpenAlex, S2, Crossref, etc.) | "We query OpenAlex as a Provider" |
| **Deduplication** | Merging records that represent the same work | Never "de-duplication" or "dedup" in student-facing text |
| **Ingestion** | The process of fetching and normalizing data from an API | "Ingesting results from Semantic Scholar" |
| **Snowballing** | Forward/backward citation traversal | "Snowballing finds papers that cite or are cited by a seed paper" |
| **Kit/Toolkit** | One of the 6 Nexus Scholar tools | Use the full name first: "`scholar-search-kit`" then "the search kit" |
| **Suite** | The full 6-tool ecosystem | "The Nexus Scholar Suite" |

---

## 6. Cross-Reference Convention

When referring to other lessons:
- First occurrence: **"As we'll see in Module 2.3 (Automated Open Access)..."**
- Subsequent: **"Recall from Module 2.3..."**
- Never reference a module that comes *after* the current one in the curriculum sequence, unless explicitly as a "preview."

---

## 7. Accessibility Requirements

- All figures and diagrams must have a text description in the script.
- Code examples must use syntax highlighting with high-contrast colors.
- Avoid color-only distinctions (always pair color with labels or shapes).
- Exercises must include the expected output so students can self-check.
- LaTeX slides must use a minimum 18pt font for body text.
