# Exercise: Deconstructing BibTeX
**Module:** 1.2 — Reference Management & BibTeX
**Estimated Time:** 15 minutes
**Difficulty:** ⭐ Beginner

---

## Scenario
> You are trying to compile a LaTeX document, but the bibliography keeps throwing an error. You need to inspect the raw `.bib` file to find the syntax error and fix it.

---

## Tasks

### Task 1: Identify the Syntax Error
Look at the following BibTeX entry. There are **two** critical syntax errors that will cause it to fail. Find them and correct the code.

```bibtex
@article{LeCun2015,
  title={Deep learning},
  author={LeCun, Yann and Bengio, Yoshua and Hinton, Geoffrey}
  journal={nature},
  volume={521},
  number={7553},
  pages={436--444}
  year={2015}
}
```

**Write the corrected code here:**


### Task 2: Create a Citation Key
You want to cite a paper with the following metadata:
- Authors: Ian Goodfellow, Yoshua Bengio, Aaron Courville
- Year: 2016
- Title: Deep Learning
- Publisher: MIT Press

Create a standard, readable citation key for this book.

**Your Citation Key:** 


---

## Solution / Self-Check

<details>
<summary>Click to reveal</summary>

### Task 1: Corrected Code
There were missing commas at the end of the `author` line and the `pages` line. In BibTeX, every field (except the last one) must be separated by a comma.

```bibtex
@article{LeCun2015,
  title={Deep learning},
  author={LeCun, Yann and Bengio, Yoshua and Hinton, Geoffrey},
  journal={nature},
  volume={521},
  number={7553},
  pages={436--444},
  year={2015}
}
```

### Task 2: Citation Key
A standard format is `[FirstAuthorLastName][Year]`. 
Correct answers include:
- `Goodfellow2016`
- `goodfellow2016`
- `Goodfellow2016deeplearning` (if you want to be extra specific)

</details>
