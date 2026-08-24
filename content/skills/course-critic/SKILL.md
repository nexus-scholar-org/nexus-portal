---
name: course-critic
description: >
  Reviews a lesson package (script, slides, exercise, quiz) against the Nexus Scholar Course
  quality rubric. Scores 10 dimensions, verifies technical accuracy against toolkit source code,
  and produces a detailed review with PASS/REVISE/REJECT verdict.
---

# Course Critic Skill

## Purpose
Given a complete lesson package (script + slides + exercise + quiz), perform a rigorous quality review scoring 10 dimensions, verify all code against the actual toolkit source, and output a `review.md` with a verdict and specific feedback.

## When to Use
- After the course-writer skill has produced a lesson package
- When re-reviewing a lesson after the writer addressed "REVISE" feedback
- For periodic quality audits of previously published lessons

## Inputs
The invoking agent provides:
1. **The lesson directory** path containing: `lesson_spec.md`, `script.md`, `slides.tex`, `exercise.md`, `quiz.md`
2. The lesson's position in the curriculum (module ID, prerequisites, etc.)

## Procedure

### Step 1: Read the Standards
1. Read `nexus-scholar-course/standards/quality_rubric.md` — this defines all 10 scoring dimensions and thresholds.
2. Read `nexus-scholar-course/standards/content_style_guide.md` — check voice, tone, and structural compliance.
3. Read `nexus-scholar-course/standards/api_fact_sheet.md` — for technical verification.

### Step 2: Read the Lesson Package
Read all files in the lesson directory:
1. `lesson_spec.md` — the research brief (this defines what the lesson SHOULD contain)
2. `script.md` — the video/lecture script
3. `slides.tex` — the LaTeX presentation
4. `exercise.md` — the hands-on exercise
5. `quiz.md` — the assessment questions

### Step 3: Score Each Dimension

#### Dimension 1: Technical Accuracy (Critical)
1. Extract all Python import statements from `script.md` and `exercise.md`.
2. Use `grep_search` to verify each import path exists in the actual toolkit source:
   ```
   grep_search "class ClassName" in the relevant src/ directory
   ```
3. Extract all CLI commands and verify them against `pyproject.toml` `[project.scripts]` entries.
4. Check any API endpoint URLs against `api_fact_sheet.md`.
5. Score 10 if everything checks out, reduce for each inaccuracy found.

#### Dimension 2: Pedagogical Flow (Critical)
1. Verify the script follows the 7-scene arc from the style guide:
   - Scene 1: Hook (≤30s)
   - Scene 2: Context (2-3 min)
   - Scene 3: Concept (3-5 min, no code yet)
   - Scene 4: Demonstration (5-8 min, with code)
   - Scene 5: Exercise teaser (≤30s)
   - Scene 6: Summary (≤30s, 3 bullets)
   - Scene 7: Standout close
2. Verify concepts are introduced BEFORE code that uses them.
3. Verify prerequisites are stated and match the lesson spec.

#### Dimension 3: Engagement & Motivation (High)
1. Does Scene 1 open with a vivid pain point, surprising fact, or relatable scenario?
2. Are analogies used to explain abstract concepts?
3. Is the "old way vs. new way" contrast used where appropriate?
4. Would a non-expert find this interesting? Is jargon explained?

#### Dimension 4: Exercise Quality (High)
1. Is the scenario realistic (a real research task, not "Hello World")?
2. Are tasks scaffolded (Foundation → Integration → Analysis)?
3. Is starter code provided with clear TODO comments?
4. Is expected output included for self-verification?
5. Are stretch goals meaningful (not trivially harder)?
6. Are hints and a solution provided?

#### Dimension 5: Assessment Alignment (High)
1. Map each quiz question to a specific learning objective from the lesson spec.
2. Verify the mix: recall + application + analysis + evaluation.
3. Check that code-output questions are testable (the code snippet would produce the stated output).
4. Check that debugging questions contain a realistic, non-obvious bug.
5. Check that the open-ended question requires genuine critical thinking.

#### Dimension 6: Tool Integration Authenticity (Critical)
1. Is the Nexus tool used to solve a genuine research problem?
2. Does the student understand WHY they'd use this tool vs. doing it manually?
3. Is the tool demonstrated in a realistic workflow (not in isolation)?
4. For non-tool lessons: is the content unique to this course, or generic?

#### Dimension 7: Factual Currency (Critical)
1. Are all API details (endpoints, auth, rate limits) current per `api_fact_sheet.md`?
2. Are library versions accurate?
3. Are ecosystem facts correct (e.g., arXiv's nonprofit status)?
4. Are there any references to deprecated tools or APIs?

#### Dimension 8: Accessibility & Clarity (Medium)
1. Is jargon defined on first use?
2. Are code examples well-commented?
3. Could a non-native English speaker follow the script?
4. Are diagrams described in text (for screen readers)?
5. Do slides use minimum 18pt font and high-contrast colors?

#### Dimension 9: Completeness (Medium)
1. Are all 5 files present? (`lesson_spec.md`, `script.md`, `slides.tex`, `exercise.md`, `quiz.md`)
2. Is the script 1,500–2,500 words?
3. Do slides have 15–25 frames?
4. Does the quiz have 5–8 questions with answer keys?
5. Does the exercise have 3 tasks + stretch goals?

#### Dimension 10: Differentiation (Medium)
1. Could this lesson exist WITHOUT the Nexus Scholar Suite?
2. Does it teach something no other "research methods" course offers?
3. Is the unique value proposition clear?
4. For foundational lessons (Module 0): does the content at least provide a unique perspective or connect to the toolkits?

### Step 4: Determine Verdict
- **PASS** (≥ 8.0 average AND no dimension ≤ 5): Approve for publishing
- **REVISE** (6.0–7.9 average OR any dimension ≤ 5): Return to Writer with feedback
- **REJECT** (< 6.0 average): Return to Researcher for re-specification

### Step 5: Write the Review
Save `review.md` to the lesson directory using this exact format:

```markdown
# Lesson Review: [Module ID] — [Title]
**Reviewed:** [Date]
**Reviewer:** Course Critic Skill

## Scores

| Dimension | Score | Notes |
|:---|:---|:---|
| Technical Accuracy | X/10 | ... |
| Pedagogical Flow | X/10 | ... |
| Engagement | X/10 | ... |
| Exercise Quality | X/10 | ... |
| Assessment Alignment | X/10 | ... |
| Tool Integration | X/10 | ... |
| Factual Currency | X/10 | ... |
| Accessibility | X/10 | ... |
| Completeness | X/10 | ... |
| Differentiation | X/10 | ... |

**Average Score: X.X/10**
**Verdict: PASS / REVISE / REJECT**

## Detailed Feedback
[For each dimension scoring ≤ 7, provide specific line-by-line feedback]

## Rewrite Demands
[Numbered list of specific, actionable changes required before re-review]

## Verification Log
[List of imports/commands/APIs that were verified and their status]
```

## Output
A single file: `review.md` in the lesson directory.

## Special Rules
1. **Be strict.** Your job is quality assurance. It's better to REVISE a decent lesson than to PASS a mediocre one. This course must meet big-company standards.
2. **Be specific.** "The code is wrong" is useless feedback. "Line 42 imports `scholar_search.SearchEngine` but the class is actually named `SearchEngine` and lives in `scholar_search.engine`" is useful.
3. **Verify, don't guess.** Always use `grep_search` or `view_file` to check code against the actual source. Never assume a class/function exists.
4. **Score independently.** Don't let a high score on one dimension inflate another. Each dimension is evaluated on its own merit.

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
