# Exercise: The Automation Prompt
**Module:** 6.2 — Python for Researchers
**Estimated Time:** 15 minutes
**Difficulty:** ⭐ Beginner

---

## Scenario
> You are a researcher who just received a folder containing 140 Excel files from different hospitals. Each file contains patient data. 
> 
> Your advisor asks you to:
> 1. Open every file.
> 2. Extract the data.
> 3. Combine it all into one master CSV file.
> 4. Drop any patients who are missing a "Blood_Pressure" reading.
> 
> Doing this manually would take two days of miserable pointing and clicking. Instead, you are going to use an LLM to write a Python script for you.

---

## Tasks

### Task 1: Draft the Prompt
Write the exact prompt you would feed to ChatGPT or Claude to generate this Python script. 
*Hint: Be specific about the file types, the libraries you want to use (pandas), and the exact steps.*

**Draft your prompt here:**


### Task 2: Analyze the Code (Mental Check)
If the AI gives you code that looks like this:

```python
import pandas as pd
import glob

# Get a list of all excel files
files = glob.glob("hospitals/*.xlsx")

df_list = []
for file in files:
    df = pd.read_excel(file)
    df_list.append(df)

# Combine them all
master_df = pd.concat(df_list)

# Drop missing values
master_df = master_df.dropna(subset=['Blood_Pressure'])

# Save to CSV
master_df.to_csv("master_data.csv", index=False)
```

Explain what the `dropna` line is doing in plain English. Why is having this written in code better than doing it manually in Excel?

---

## Solution / Self-Check
<details>
<summary>Click to reveal</summary>

**Task 1 Sample Prompt:**
"Write a Python script using pandas. I have a folder called 'hospitals' containing 140 .xlsx files. I want the script to read all of these files, concatenate them into a single dataframe, remove any rows where the column 'Blood_Pressure' is NaN (missing), and save the final cleaned data to a new file called 'master_data.csv'."

**Task 2 Answer:**
The `dropna` line tells the computer to look at the 'Blood_Pressure' column and delete any entire row that doesn't have a value there. 
This is better than doing it in Excel because it creates an **audit trail**. In Excel, if you accidentally delete a row that *did* have a blood pressure reading, no one will ever know. With the script, exactly what happened is documented and perfectly reproducible.
</details>
