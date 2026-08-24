---
name: course-publisher
description: >
  Finalizes an approved lesson package for publication. Validates cross-references,
  formats LaTeX slides for compilation, updates the course manifest and progress tracker,
  and ensures the lesson is ready for the Nexus Portal.
---

# Course Publisher Skill

## Purpose
Given a lesson package that has PASSED the Critic's review (score ≥ 8.0), perform final publishing tasks: cross-reference validation, LaTeX formatting, manifest updates, and progress tracking.

## When to Use
- After the course-critic skill has issued a "PASS" verdict on a lesson package
- When assembling the final course for deployment

## Inputs
The invoking agent provides:
1. **The lesson directory** path containing all files including the approved `review.md`
2. The lesson's position in the overall curriculum

## Procedure

### Step 1: Validate the Review
1. Read the `review.md` in the lesson directory.
2. Confirm the verdict is **PASS** (average score ≥ 8.0, no dimension ≤ 5).
3. If the verdict is REVISE or REJECT, **stop** and inform the invoking agent.

### Step 2: Cross-Reference Validation
1. Read the `script.md` and extract all cross-references (e.g., "As we saw in Module 2.1...", "Recall from Module 1.2...").
2. For each reference, verify the target lesson directory exists under `content/`.
3. For each reference, verify the referenced concept actually appears in the target lesson's `script.md` or `lesson_spec.md`.
4. Flag any broken or inaccurate cross-references.

### Step 3: LaTeX Formatting Check
1. Read `slides.tex` and verify:
   - It includes `\usepackage{nexus_theme}` 
   - It uses `\documentclass[aspectratio=169]{beamer}` and `\usetheme{metropolis}`
   - All code listings use `style=nexuspython`
   - TikZ diagrams use the defined card styles
2. Ensure `nexus_theme.sty` is available (or will be copied during build).

### Step 4: Copy the LaTeX Theme
If `nexus_theme.sty` is not already in the lesson's directory or a shared build directory, note that the build process should reference it from `slr-search-kit/docs/presentations/nexus_theme.sty`.

### Step 5: Update the Course Manifest
1. Read or create `nexus-scholar-course/content/course_manifest.md`.
2. Add or update the entry for this lesson:

```markdown
| Module | Title | Score | Script | Slides | Exercise | Quiz | Duration |
|:---|:---|:---|:---|:---|:---|:---|:---|
| [X.Y] | [Title] | [X.X/10] | ✅ | ✅ | ✅ | ✅ | [~Xm] |
```

### Step 6: Update Progress Tracker
1. Read `nexus-scholar-course/tools_progress.md`.
2. If a "Course Content Production" section doesn't exist, add one.
3. Mark the published lesson as **[COMPLETE]**.

### Step 7: Generate Summary Entry
1. Create a one-paragraph summary of the lesson suitable for:
   - The Nexus Portal's course page
   - A Table of Contents or syllabus document
2. Include: module number, title, learning objectives (abbreviated), and the Nexus tool used.

### Step 8: Final Validation Report
Create or update a `publish_log.md` in the lesson directory:

```markdown
# Publication Log: [Module X.Y] — [Title]

**Published:** [Date]
**Review Score:** [X.X/10]
**Cross-References Validated:** [X/X passed]
**LaTeX Format:** ✅ Valid
**Manifest Updated:** ✅

## Files Published
- [x] lesson_spec.md
- [x] script.md  
- [x] slides.tex
- [x] exercise.md
- [x] quiz.md
- [x] review.md
- [x] publish_log.md

## Summary for Portal
[One-paragraph summary]
```

## Output
1. Updated `course_manifest.md` in `content/`
2. Updated `tools_progress.md` in `nexus-scholar-course/`
3. A `publish_log.md` in the lesson directory

## Special Rules
1. **Never publish a REVISE or REJECT lesson.** Always verify the review verdict first.
2. **Cross-references are critical.** A broken cross-reference means a student will be confused when a concept is referenced but doesn't exist where the script says it does.
3. **Track everything.** The manifest is the master record. If it's not in the manifest, it's not published.

## File Locations Reference
```
Workspace root:           c:/Users/mouadh/Documents/Harness0.0.1/
Course content:           nexus-scholar-course/content/
Course manifest:          nexus-scholar-course/content/course_manifest.md
Progress tracker:         nexus-scholar-course/tools_progress.md
LaTeX theme:              slr-search-kit/docs/presentations/nexus_theme.sty
Course outline:           nexus-scholar-course/modern_phd_course_outline.md
```
