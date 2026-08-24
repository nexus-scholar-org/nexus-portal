# Quiz: Module 4.5 — Collaborative Research with Git

---

### Q1 (Remember)
**[Multiple Choice]** In Git terminology, what is a "commit"?
- A) A promise to submit a paper to a journal.
- B) A timestamped snapshot of the project at a specific moment, accompanied by a descriptive message.
- C) A request to merge changes into the main branch.
- D) A copy of the repository on GitHub.

<details><summary>Answer</summary>**B**</details>

---

### Q2 (Understand)
**[Multiple Choice]** What is the key distinction between Git and GitHub?
- A) Git is for Python code; GitHub is for LaTeX documents.
- B) Git is the local version control tool that runs on your computer; GitHub is a cloud-based hosting and collaboration platform for Git repositories.
- C) Git is free; GitHub requires a paid subscription for academics.
- D) There is no real distinction; they are the same product.

<details><summary>Answer</summary>**B**</details>

---

### Q3 (Apply)
**[Multiple Choice]** You are co-authoring a LaTeX paper on Overleaf with two colleagues. The most effective workflow to prevent overwriting each other's work is:
- A) Each person emails their version to a shared inbox every evening.
- B) Connect the Overleaf project to a GitHub repository and use branches + pull requests for each major section.
- C) One person writes while the others wait, then pass the file sequentially.
- D) Use Google Docs instead of LaTeX.

<details><summary>Answer</summary>**B**</details>

---

### Q4 (Analyze)
**[Short Answer]** Why should `.pdf` files be listed in a LaTeX project's `.gitignore`? Isn't the compiled PDF the most important output?

<details><summary>Sample Answer</summary>The PDF is a binary compiled output, not a source file. It changes every time LaTeX is compiled (even with no content changes), making Git diffs meaningless and bloating the repository size. Co-authors should compile the PDF themselves from the tracked `.tex` source files. Only source files should be version-controlled.</details>

---

### Q5 (Evaluate)
**[Multiple Choice]** A colleague argues that emailing versioned files is fine because "Git is too complicated for non-programmers." What is the strongest counter-argument?
- A) Git has a graphical interface (GitHub Desktop) that requires zero command-line knowledge, and the alternative — managing 20 versions of a file by hand — is far more error-prone and technically complex.
- B) Scientists should learn to code anyway.
- C) Git is only complicated the first time; after that it takes 30 seconds per day.
- D) Journals now require GitHub links for all submissions.

<details><summary>Answer</summary>**A** — GitHub Desktop removes the command-line barrier entirely, making Git accessible to any researcher.</details>

---

**Total: 8 points**
