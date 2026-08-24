# Exercise: Your First Git Workflow
**Module:** 4.5 — Collaborative Research with Git
**Estimated Time:** 20 minutes
**Difficulty:** ⭐⭐ Intermediate

---

## Scenario
> You and a co-author are writing a journal paper in LaTeX on GitHub. You've been assigned to write the Discussion section. Your co-author is working on the Methods section at the same time. You need to work in parallel without overwriting each other.

---

## Tasks

### Task 1: Understand the Commit History
You receive this Git log from your repository. Answer the questions below.

```
commit a3f1e9b  (HEAD -> main, origin/main)
Author: Co-author <coauthor@uni.edu>
Date:   Mon Aug 19 14:32:11 2026

    Add Figure 2 and update Results table

commit 7c82d41
Author: You <you@uni.edu>
Date:   Mon Aug 19 09:15:03 2026

    First draft of Discussion section

commit 1b4a2f0
Author: Co-author <coauthor@uni.edu>
Date:   Fri Aug 16 17:02:45 2026

    Complete Methods section - RQ1 and RQ2
```

**Questions:**
1. Who wrote the most recent commit and what did they do?
2. If you needed to undo all changes after the Methods section was completed, which commit would you roll back to?
3. Why is `Add Figure 2 and update Results table` a better commit message than `fixed stuff`?

---

### Task 2: Design a Pull Request
Your Discussion section is ready. You want your co-author to review it before it's merged into the main paper.

Write a Pull Request description (3–5 sentences) that explains:
- What you added/changed
- Any decisions you made that need co-author input
- Specific lines/sections you want them to focus on

---

### Task 3: Write a .gitignore
Write a `.gitignore` file for a LaTeX project. It should ignore all compiled artifacts but track the source files.

```
# Write your .gitignore content here:
```

---

## Solution / Self-Check
<details>
<summary>Click to reveal</summary>

**Task 1:**
1. The co-author wrote the most recent commit (adding Figure 2 and updating the results table).
2. Roll back to commit `1b4a2f0` — the last commit before your Discussion section was added.
3. Specific commit messages allow you to understand the history at a glance without opening every file. Ambiguous messages like "fixed stuff" make it impossible to navigate history.

**Task 3: Sample .gitignore**
```gitignore
# LaTeX compilation artifacts
*.aux
*.bbl
*.bcf
*.blg
*.fdb_latexmk
*.fls
*.log
*.out
*.run.xml
*.synctex.gz
*.toc
*.lof
*.lot

# Compiled output (track source, not PDF)
*.pdf

# OS junk
.DS_Store
Thumbs.db
```
</details>
