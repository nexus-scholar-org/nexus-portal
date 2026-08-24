---
name: course-researcher
description: >
  Researches and produces a lesson specification (lesson_spec.md) for a given course topic.
  Gathers verified facts from API documentation, toolkit source code, competitor courses,
  and academic literature. Outputs a structured research brief that the course-writer skill consumes.
---

# Course Researcher Skill

## Purpose
Given a lesson topic from the Nexus Scholar Course outline, produce a comprehensive, **verified** `lesson_spec.md` that the Writer skill can use to generate the full lesson package.

## When to Use
- Before writing any new lesson for the Nexus Scholar Course
- When updating an existing lesson to reflect API or toolkit changes
- When the Critic skill flags "Factual Currency" or "Technical Accuracy" issues requiring re-research

## Inputs
The invoking agent provides:
1. **Lesson ID and Title** (e.g., "Module 2.3: Automated Open Access with scholar-pdf-kit")
2. **The master course outline** at `nexus-scholar-course/modern_phd_course_outline.md`
3. **The target lesson's position** in the curriculum sequence (prerequisites and what follows)

## Procedure

### Step 1: Read the Standards
1. Read `nexus-scholar-course/standards/content_style_guide.md` for voice/tone guidelines.
2. Read `nexus-scholar-course/standards/api_fact_sheet.md` for verified technical facts.
3. Read `nexus-scholar-course/templates/lesson_spec_template.md` for the output format.

### Step 2: Research the Toolkit (if applicable)
If the lesson involves a Nexus toolkit:
1. **Read the `pyproject.toml`** to verify the package name, CLI entry point, and dependencies.
2. **Read the source code** of the relevant modules in `src/[package_name]/`.
   - Focus on the public API: class names, function signatures, and key parameters.
   - Identify the most teachable code snippets (10-20 lines, self-contained).
3. **Read the existing docs** (`docs/tutorial.md`, `docs/api_reference.md`) for the toolkit.
4. **Read existing SKILL.md** manifests in `.agents/skills/` if available.
5. **Run `--help`** on the CLI to verify available commands and flags.

### Step 3: Research the API (if applicable)
If the lesson teaches an external API (OpenAlex, Crossref, S2, etc.):
1. Cross-reference the API details against `standards/api_fact_sheet.md`.
2. If the fact sheet is outdated, use `read_url_content` to fetch the current API documentation:
   - OpenAlex: `https://docs.openalex.org/`
   - Semantic Scholar: `https://api.semanticscholar.org/api-docs/`
   - Crossref: `https://api.crossref.org/swagger-ui/index.html`
   - Unpaywall: `https://unpaywall.org/products/api`
3. Note any changes and flag them for `api_fact_sheet.md` updates.

### Step 4: Research Pedagogy
1. Identify **3-5 learning objectives** using Bloom's Taxonomy verbs (see template).
2. Find a compelling **hook** — a pain point or surprising fact that motivates the lesson.
3. Develop at least one **real-world analogy** that makes the concept click.
4. Check the course outline for **prerequisites** and **forward references**.

### Step 5: Check Existing Content
1. If this lesson topic was covered in the old course (`old-course/TIC_Recherche_Documentaire.md`), read the relevant section.
2. If Part 3 has related episodes (`slr-search-kit/docs/lessons/`), read those for technical depth.
3. Check `nexus-scholar-course/course_review.md` for the "old way vs. new way" framing.

### Step 6: Produce the Lesson Spec
1. Fill in the `lesson_spec_template.md` with all researched information.
2. Save as `lesson_spec.md` in the lesson's content directory (e.g., `content/part-1-main/module-02-open-data/02.3-pdf-kit-intro/lesson_spec.md`).

## Output
A single file: `lesson_spec.md` in the lesson's directory, containing:
- Metadata (module, title, duration, tools, prerequisites)
- 3-5 Bloom's Taxonomy learning objectives
- Key concepts with analogies
- Verified technical facts (API details, code snippets, CLI commands)
- Suggested hooks and motivations
- Cross-references to other modules
- Sources and further reading

## Quality Checklist
Before finishing, verify:
- [ ] All Python imports match the actual package structure in `src/`
- [ ] All CLI commands match the actual `pyproject.toml` entry points
- [ ] All API endpoints match `api_fact_sheet.md`
- [ ] All prerequisites reference lessons that come earlier in the curriculum
- [ ] Learning objectives use measurable Bloom's verbs
- [ ] At least one hook/pain point and one analogy are included

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
Old course:               old-course/
Part 3 lessons (search):  slr-search-kit/docs/lessons/
Part 3 presentations:     slr-search-kit/docs/presentations/
Part 3 scripts:           slr-search-kit/docs/scripts/
```
