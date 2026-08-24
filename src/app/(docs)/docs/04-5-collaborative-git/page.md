---
title: "Lesson Specification: Module 4.5"
---

# Lesson Specification: Module 4.5

## Metadata
| Field | Value |
|:---|:---|
| **Module** | Module 4.5 |
| **Title** | Collaborative Research with Git |
| **Part** | Part 1: Main Curriculum |
| **Estimated Duration** | 30 minutes |
| **Nexus Tool(s)** | None |
| **Prerequisites** | 4.1 (Academic Writing) |

---

## Learning Objectives
By the end of this lesson, students will be able to:
1. **Explain** the core concepts of version control (commit, branch, merge).
2. **Distinguish** between Git (local tool) and GitHub (collaboration platform).
3. **Implement** a Pull Request workflow for co-authored LaTeX papers.
4. **Configure** Overleaf ↔ GitHub sync for hybrid collaboration.

---

## Key Concepts

### Concept 1: Version Control
Every change to a project is stored as a timestamped, annotated snapshot (a "commit"). The full history is preserved and reversible.

### Concept 2: Branches & Pull Requests
A branch is an isolated copy for making changes. A Pull Request proposes merging those changes back into the main version, allowing for review and discussion before integration.

### Concept 3: Git vs. GitHub
Git is the local tool. GitHub is the cloud hosting + collaboration layer. You need both.

### Concept 4: Overleaf ↔ GitHub Sync
Overleaf's native GitHub integration allows LaTeX co-authors to work in their preferred environment (browser or local) while sharing a single synchronized source.

### Concept 5: `.gitignore` for LaTeX
Only track source `.tex` and `.bib` files. Ignore all LaTeX compilation artifacts (`.aux`, `.log`, `.synctex.gz`, `.pdf`).

---

## Sources & Further Reading
1. Chacon, S., & Straub, B. (2014). *Pro Git*. Apress. (Free at git-scm.com)
2. Overleaf Documentation: GitHub Integration Guide.
