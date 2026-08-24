# Quality Rubric — Nexus Scholar Course

> Scoring framework used by the **course-critic** skill to evaluate every lesson package.

---

## Scoring System

Each lesson is evaluated across **10 dimensions**, scored **1–10** each. The final score is the arithmetic mean.

| Verdict | Score Range | Action |
|:---|:---|:---|
| ✅ **PASS** | ≥ 8.0 average, no dimension ≤ 5 | Publish to final directory |
| 🔁 **REVISE** | 6.0–7.9 average, or any dimension ≤ 5 | Return to Writer with specific feedback |
| ❌ **REJECT** | < 6.0 average | Return to Researcher for re-specification |

---

## The 10 Dimensions

### 1. Technical Accuracy (Weight: Critical)
> Do the code examples actually work against the real toolkits?

| Score | Criteria |
|:---|:---|
| 10 | All imports, CLI commands, and API responses are verified against the actual source code. |
| 7 | Minor inaccuracies (e.g., wrong default parameter value) that don't break understanding. |
| 5 | Code would not run as-written; imports reference nonexistent modules. |
| 1 | Completely hallucinated code or API behavior. |

**Verification method:** `grep` the import paths against the actual `src/` directories of each toolkit.

### 2. Pedagogical Flow (Weight: Critical)
> Does the lesson follow a clear Point A → Point B progression?

| Score | Criteria |
|:---|:---|
| 10 | Clear hook → context → concept → demo → exercise → summary arc. Prerequisites stated. |
| 7 | Good flow but missing a clear hook or summary. |
| 5 | Concepts introduced before prerequisite knowledge. Jumpy structure. |
| 1 | Stream of consciousness; no learning arc. |

### 3. Engagement & Motivation (Weight: High)
> Would a tired PhD student at 11pm stay awake through this?

| Score | Criteria |
|:---|:---|
| 10 | Opens with a vivid pain point or "aha" moment. Uses analogies. Real-world examples. |
| 7 | Competent but somewhat dry. Could be more vivid. |
| 5 | Reads like a textbook. No emotional hook. |
| 1 | Actively boring. Pure exposition with no motivation. |

### 4. Exercise Quality (Weight: High)
> Is the exercise challenging enough to reinforce learning but not so hard it blocks?

| Score | Criteria |
|:---|:---|
| 10 | Realistic scenario, scaffolded hints, clear expected output, stretch goal for advanced students. |
| 7 | Functional exercise but too simple or too prescriptive (just "fill in the blank"). |
| 5 | Exercise is trivial (just copy-paste the demo code) or impossibly hard. |
| 1 | No exercise provided, or exercise is unrelated to the lesson content. |

### 5. Assessment Alignment (Weight: High)
> Do quiz questions test the stated learning objectives?

| Score | Criteria |
|:---|:---|
| 10 | Every question maps to a specific learning objective. Mix of recall, application, and analysis. |
| 7 | Good questions but some don't map to stated objectives. |
| 5 | Only tests surface-level recall (e.g., "What does API stand for?"). |
| 1 | Questions are irrelevant, misleading, or have ambiguous correct answers. |

### 6. Tool Integration Authenticity (Weight: Critical)
> Are the Nexus tools shown in realistic workflows, not contrived demos?

| Score | Criteria |
|:---|:---|
| 10 | The tool solves a real research problem. Student understands *why* they'd use it. |
| 7 | Tool is demonstrated but the use case feels slightly forced. |
| 5 | Tool is shown in isolation without connecting it to a research workflow. |
| 1 | Tool is mentioned by name but never actually demonstrated. |

### 7. Factual Currency (Weight: Critical)
> Are API details, library versions, and ecosystem facts accurate for August 2026?

| Score | Criteria |
|:---|:---|
| 10 | All API endpoints, rate limits, auth requirements, and library versions match `api_fact_sheet.md`. |
| 7 | Minor version drift (e.g., library is `2.1` but we say `2.0`) that doesn't affect the lesson. |
| 5 | Outdated information that would cause student code to fail. |
| 1 | Teaches deprecated APIs or tools that no longer exist. |

**Verification method:** Cross-reference against `standards/api_fact_sheet.md`.

### 8. Accessibility & Clarity (Weight: Medium)
> Can a non-native English speaker with basic Python follow this?

| Score | Criteria |
|:---|:---|
| 10 | Clear language, jargon defined on first use, alt-text for visuals, high-contrast code. |
| 7 | Generally clear but some jargon undefined or dense paragraphs. |
| 5 | Assumes advanced knowledge not listed in prerequisites. |
| 1 | Impenetrable jargon, no definitions, inaccessible visuals. |

### 9. Completeness (Weight: Medium)
> Are all 5 deliverables present and substantive?

| Score | Criteria |
|:---|:---|
| 10 | All 5 files present: `lesson_spec.md`, `script.md`, `slides.tex`, `exercise.md`, `quiz.md`. All substantive. |
| 7 | All files present but one is skeletal (e.g., quiz has only 3 questions). |
| 5 | One or more files missing entirely. |
| 1 | Only the script exists; nothing else produced. |

### 10. Differentiation (Weight: Medium)
> Is this content genuinely unique vs. generic "how to do research" courses?

| Score | Criteria |
|:---|:---|
| 10 | Content could not exist without the Nexus Scholar Suite. Teaches something no other course offers. |
| 7 | Good content but some sections could come from any research methods course. |
| 5 | Mostly generic advice. Could replace "Nexus" with "Google Scholar" and the lesson barely changes. |
| 1 | Entirely generic. No tool integration, no unique perspective. |

---

## Review Output Format

The Critic skill outputs a `review.md` in this exact format:

```markdown
# Lesson Review: [Module ID] — [Title]

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
[Line-by-line feedback for any dimension scoring ≤ 7]

## Rewrite Demands
[Specific, actionable changes required before re-review]
```
