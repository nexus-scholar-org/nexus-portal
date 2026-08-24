# Module 6.2: Python for Researchers
**Series:** Modern Research Methodologies
**Module:** The PhD Survival Guide

---

## Scene 1: The Hook (≤ 30 seconds)

**[Visual]**
- A student highlights a row in Excel, presses "delete." Then they sort a column, but accidentally don't select the adjacent column. The data is scrambled.

**[Audio / Voiceover]**
"You have a dataset in Excel. You delete an outlier. You sort a column. You save the file. 

Congratulations. You have just destroyed the integrity of your data, and you have absolutely no record of what you did.

Excel is a fantastic tool for viewing data, but it is a terrible tool for scientific reproducibility. If you are doing manual data entry or pointing-and-clicking your way through analysis, you are wasting time and risking your degree. Today, we learn the ultimate survival skill: Python."

---

## Scene 2: The Audit Trail (2–3 minutes)

**[Visual]**
- Side-by-side: An Excel sheet vs. a Jupyter Notebook showing `df = pd.read_csv(...)` followed by `df.dropna()`.

**[Audio / Voiceover]**
"You don't need to become a software engineer. You just need to write scripts. 

Why? Because a script is an audit trail. When you write a line of Python code that says 'drop all rows where age is missing,' you have a permanent, reproducible record of exactly how you cleaned the data. If your advisor asks you to rerun the analysis but keep those rows, you change one line of code and hit run. In Excel, you'd have to start over from scratch."

---

## Scene 3: The Stack (3–5 minutes)

**[Visual]**
- Logos appearing: Python, Jupyter, Pandas, Matplotlib.

**[Audio / Voiceover]**
"The academic Python stack is remarkably simple. You only need to know three things.

First, **Jupyter Notebooks**. This is an interactive environment where you can write a little bit of code, run it, and immediately see a chart or a table.

Second, **Pandas**. Think of Pandas as Excel on steroids. It allows you to load CSVs, filter data, group it, and run statistics instantly.

Third, **Matplotlib and Seaborn**. These are plotting libraries. They turn your data into publication-ready, high-resolution figures that look infinitely better than default Excel charts."

---

## Scene 4: The Automator (3–5 minutes)

**[Visual]**
- A folder with 500 badly named files (e.g., `IMG_001_final_v2.jpg`). A script runs in a terminal. Instantly, they are all renamed to `subject_001.jpg`, `subject_002.jpg`, etc.

**[Audio / Voiceover]**
"The real superpower of Python in a PhD isn't just analysis; it's automation. 

Have you ever had to rename 500 files? Have you ever had to copy and paste text from 50 PDFs into a spreadsheet? A manual task that takes a human three days of mind-numbing labor takes a Python script three seconds. Automation frees you up to do actual science."

---

## Scene 5: You Don't Have to Memorize Syntax (2 minutes)

**[Visual]**
- A user typing a plain-English request into ChatGPT: "Write a python script to merge two CSVs on the 'ID' column."

**[Audio / Voiceover]**
"Here is the best part. Five years ago, learning Python was hard because you had to memorize syntax. Today, you don't. 

Large Language Models are incredibly good at writing Python. You don't need to know how to write the code; you just need to know *what* to ask for. 'Write a pandas script to drop missing values and plot a scatter chart of Age vs Blood Pressure.' 

Python is no longer a programming language you have to learn. It is a tool you can command in plain English."

---

## Scene 6: Summary (≤ 30 seconds)

**[Audio / Voiceover]**
"Let's recap:
1. **Excel is not reproducible:** Code provides an audit trail.
2. **The Stack:** Jupyter, Pandas, and Matplotlib are all you need.
3. **Automation:** Let the computer do the boring, repetitive work.
4. **Use AI:** You don't need to memorize syntax, just understand the logic."

---

## Scene 7: Standout Close

**[Audio / Voiceover]**
"Stop doing the computer's job. Start doing the science."
