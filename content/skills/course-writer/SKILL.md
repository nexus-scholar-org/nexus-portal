---
name: course-writer
description: >
  Produces a complete lesson package (script, slides, exercise, quiz) from a lesson specification.
  Generates all 4 deliverables following the Nexus Scholar Course style guide and templates.
  Cross-references all code against the actual toolkit source to prevent hallucination.
---

# Course Writer Skill

## Purpose
Given a completed `lesson_spec.md` (produced by the course-researcher skill), generate the full lesson package: a video/lecture script, LaTeX Beamer slides, a hands-on exercise, and a quiz with answer key.

## When to Use
- After the course-researcher skill has produced a `lesson_spec.md`
- When the course-critic skill has issued "REVISE" feedback requiring content rewrites
- When updating an existing lesson after toolkit or API changes

## Inputs
The invoking agent provides:
1. **The lesson spec** at `content/[part]/[module]/[lesson]/lesson_spec.md`
2. All files in the lesson's directory (for rewrites, existing drafts may be present)

## Procedure

### Step 1: Read the Foundation Documents
1. Read the `lesson_spec.md` — this is your primary input.
2. Read `nexus-scholar-course/standards/content_style_guide.md` — follow all voice, tone, and structural rules.
3. Read `nexus-scholar-course/standards/quality_rubric.md` — understand what the Critic will score you on.
4. Read `nexus-scholar-course/standards/api_fact_sheet.md` — for any technical verification needed.

### Step 2: Read the Templates
1. Read `nexus-scholar-course/templates/script_template.md` — follow the Scene 1-7 structure exactly.
2. Read `nexus-scholar-course/templates/slides_template.tex` — use the LaTeX structure with `nexus_theme.sty`.
3. Read `nexus-scholar-course/templates/exercise_template.md` — include all sections.
4. Read `nexus-scholar-course/templates/quiz_template.md` — mix question types.

### Step 3: Read Context (Previous and Next Lessons)
1. If the lesson has prerequisites, read the `script.md` of the prerequisite lesson(s) to maintain continuity.
2. Check the course outline to understand what comes next — the summary should preview it.
3. Use the cross-references from the lesson spec to ensure consistency.

### Step 4: Verify Code Snippets
Before writing any code in the script or exercise:
1. **Read the actual source code** of the relevant toolkit module(s) listed in the lesson spec.
2. **Verify imports:** Confirm the exact module path (e.g., `from scholar_pdf.downloader import ...`).
3. **Verify CLI commands:** Check the `pyproject.toml` `[project.scripts]` entry and run `--help` if possible.
4. **Never hallucinate code.** If unsure about an API, read the source file. If unsure about a CLI flag, read `cli.py`.

### Step 5: Write the Script (`script.md`)
Follow the template structure:
1. **Scene 1 (Hook):** Use the hook from the lesson spec. Make it vivid and relatable.
2. **Scene 2 (Context):** Frame the problem using the "old way vs. new way" contrast. Reference the old course critique if relevant.
3. **Scene 3 (Concept):** Explain the idea with analogies BEFORE showing code. Build intuition first.
4. **Scene 4 (Demonstration):** Walk through real, verified code step-by-step. Show output.
5. **Scene 5 (Exercise Teaser):** Brief preview of what they'll do in the exercise.
6. **Scene 6 (Summary):** 3 bullet points: concept learned, tool used, what's next.
7. **Scene 7 (Standout Close):** One memorable sentence.

**Length target:** 1,500–2,500 words.

### Step 6: Write the Slides (`slides.tex`)
1. Use the `slides_template.tex` as the base.
2. Copy `nexus_theme.sty` reference from the template.
3. Include slides for: title, objectives, problem/context, concepts (2-4 slides), architecture diagram (if applicable), code demo (2-3 slides), key takeaway, exercise preview, standout close.
4. **Maximum 5 bullet points per slide.** Use visuals over text.
5. Code slides use `\begin{lstlisting}[style=nexuspython]`.

**Target:** 15–25 frames.

### Step 7: Write the Exercise (`exercise.md`)
1. Create a realistic research scenario (not a contrived example).
2. Include 3 tasks: Foundation (apply basics) → Integration (combine concepts) → Analysis (think critically).
3. Provide starter code with `TODO` comments.
4. Include **expected output** for self-verification.
5. Add 2 stretch goals for advanced students.
6. Add collapsible hints and a full solution.

### Step 8: Write the Quiz (`quiz.md`)
1. Write 5-8 questions mixing formats:
   - 2-3 conceptual MCQ (Remember/Understand)
   - 2 code-output questions (Apply)
   - 1 debugging question (Analyze)
   - 1 open-ended scenario (Evaluate/Create)
2. Map each question to a specific learning objective.
3. Include answer keys with explanations.
4. Include a scoring guide.

### Step 9: Save All Files
Save all 4 files to the lesson directory:
```
content/[part]/[module]/[lesson]/
├── script.md      ← Generated in Step 5
├── slides.tex     ← Generated in Step 6
├── exercise.md    ← Generated in Step 7
└── quiz.md        ← Generated in Step 8
```

## Output
Four files in the lesson directory, all following the templates exactly.

## Quality Self-Check
Before finishing, verify:
- [ ] Script follows the 7-scene arc exactly
- [ ] Script is 1,500–2,500 words
- [ ] All code snippets have been verified against actual source code
- [ ] All imports use the correct `scholar_*` package paths
- [ ] Slides use `nexus_theme.sty` and the `nexuspython` listings style
- [ ] Slides have 15–25 frames
- [ ] Exercise has a realistic scenario with 3 tasks + stretch goals
- [ ] Exercise includes expected output for self-verification
- [ ] Quiz has 5-8 questions mapped to learning objectives
- [ ] Quiz includes answer keys with explanations
- [ ] Cross-references only point to earlier lessons (not future ones, except as previews)
- [ ] The script mentions the exercise at the end of Scene 5
- [ ] The summary previews the next lesson

## Handling Rewrites (REVISE Feedback)
When the Critic returns a "REVISE" verdict:
1. Read the `review.md` file in the lesson directory.
2. Address every item in the "Rewrite Demands" section.
3. Re-verify any code that was flagged for technical inaccuracy.
4. Regenerate only the files that need changes (don't rewrite everything).
5. The Critic will re-score after your revisions.

## File Locations Reference
```
Workspace root:           c:/Users/mouadh/Documents/Harness0.0.1/
Course content:           nexus-scholar-course/content/
Standards:                nexus-scholar-course/standards/
Templates:                nexus-scholar-course/templates/
Toolkit sources:
  scholar-search-kit:     slr-search-kit/src/scholar_search/
  scholar-pdf-kit:        scholar-pdf-kit/src/scholar_pdf/
  scholar-graph-kit:      scholar-graph-kit/src/scholar_graph/
  scholar-bib-kit:        scholar-bib-kit/src/scholar_bib/
  scholar-rag-kit:        scholar-rag-kit/src/scholar_rag/
  scholar-monitor-kit:    scholar-monitor-kit/src/scholar_monitor/
```
