# Module 4.5: Collaborative Research with Git
**Series:** Modern Research Methodologies
**Module:** Writing & Producing Research

---

## Scene 1: The Hook (≤ 30 seconds)

**[Visual]**
- A student's Downloads folder. Files visible: `paper_draft.docx`, `paper_draft_v2.docx`, `paper_draft_v2_FINAL.docx`, `paper_draft_v2_FINAL_revised.docx`, `paper_draft_v2_FINAL_revised_JohnEdits.docx`, `paper_draft_v2_FINAL_revised_JohnEdits_SUBMITTED.docx`.

**[Audio / Voiceover]**
"We need to talk about this folder. If you recognize any of these filenames, this lesson is for you.

Managing a scientific paper between four co-authors via email attachments is one of the most chaotic, error-prone workflows in all of academia. People overwrite each other's changes. Nobody knows which version is current. Three months later, you realize the version you submitted to the journal was missing a figure that was in 'the other version.'

There is a better way. Software engineers solved this problem 30 years ago. It's called version control."

---

## Scene 2: What is Git? (2–3 minutes)

**[Visual]**
- A timeline of commits appears, with each commit showing a short message: "Add methods section", "Fix typo in abstract", "Add Figure 3".

**[Audio / Voiceover]**
"Git is a version control system. Instead of saving a new file every time you make a change, Git takes a snapshot of your project at key moments. These snapshots are called commits.

Every commit has a message describing what changed, a timestamp, and a record of exactly what was different from the previous version. You can look at the full history of your paper and travel back in time to any previous state with a single command.

Git is not just for code. It works perfectly for LaTeX papers, markdown documents, and data analysis scripts."

---

## Scene 3: Git vs. GitHub (1–2 minutes)

**[Visual]**
- Split screen: Git logo (local computer) on the left, GitHub logo (cloud) on the right. An arrow connects them labeled "push / pull."

**[Audio / Voiceover]**
"A quick and critical distinction: Git is the tool that runs on your local computer. GitHub is a website that hosts your Git repository in the cloud and adds collaboration features.

You use Git to make commits. You use GitHub to share those commits with your co-authors and to review each other's changes."

---

## Scene 4: The Researcher's Workflow (3–5 minutes)

**[Visual]**
- A diagram showing: Main Branch (the official paper) → Feature Branch (one author's edits) → Pull Request → Review → Merge.

**[Audio / Voiceover]**
"Here is the collaboration workflow. Your paper lives on a 'main' branch — the official, agreed-upon version.

When a co-author wants to write a new section, they create a 'branch.' A branch is a copy of the paper they can edit freely without touching the main version. They make their changes, then they open a 'Pull Request' — this is essentially saying: 'I've written the Discussion section. Here are my changes. Can everyone review them?'

Co-authors can then comment, suggest edits, and approve. When everyone agrees, the changes are merged into main. This is collaborative peer review, built into your writing workflow."

---

## Scene 5: LaTeX + Git + Overleaf (2–3 minutes)

**[Visual]**
- Overleaf logo with a GitHub logo connected via an arrow.

**[Audio / Voiceover]**
"Many researchers already write in Overleaf, which is a browser-based LaTeX editor. Here's the great news: Overleaf has a native GitHub sync feature.

You can connect your Overleaf project to a GitHub repository. When you push from Overleaf to GitHub, your co-authors who prefer the command line can pull the changes locally. When they push back, Overleaf syncs automatically.

This gives you the best of both worlds: the visual Overleaf editor for comfort, and the full power of Git for version history and collaboration."

---

## Scene 6: The `.gitignore` for LaTeX (1 minute)

**[Visual]**
- A `.gitignore` file showing entries for `.aux`, `.log`, `.synctex.gz`, `.pdf`.

**[Audio / Voiceover]**
"One practical tip: LaTeX generates dozens of temporary files when it compiles. Never commit these to Git. Create a `.gitignore` file that tells Git to ignore `.aux`, `.log`, `.synctex.gz`, and `.pdf` files. Only track your source `.tex` and `.bib` files. Your collaborators will compile the PDF themselves."

---

## Scene 7: Summary (≤ 30 seconds)

**[Audio / Voiceover]**
"Let's recap:
1. **Git is version control:** An infinite undo button with context.
2. **GitHub is the collaboration layer:** Pull requests replace the email attachment nightmare.
3. **Overleaf ↔ GitHub sync:** The best workflow for LaTeX co-authors.
4. **Always use `.gitignore`:** Only track source files, not compiled outputs."

---

## Standout Close

**[Audio / Voiceover]**
"`final_FINAL_v2_ACTUALLY_FINAL.docx` is not a version control system. It is a cry for help."
