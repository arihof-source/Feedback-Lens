# GitHub Setup Guide

## Step 1: Create the repo

1. Go to [github.com/new](https://github.com/new)
2. Name it `feedbacklens`
3. Set to **Public**
4. **Do not** initialize with a README (you already have one)
5. Click **Create repository**

## Step 2: Push the code

Open Terminal and run:

```bash
cd path/to/feedbacklens   # wherever you saved these files

git init
git add .
git commit -m "feat: initial FeedbackLens release

AI-powered customer feedback analyzer for B2B product teams.
Surfaces themes, feature signals, sentiment, and recommended
next actions from raw customer verbatims."

git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/feedbacklens.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username.

## Step 3: Enable GitHub Pages (free hosting)

1. In your repo, go to **Settings → Pages**
2. Under **Source**, select `main` branch and `/ (root)` folder
3. Click **Save**
4. Your app will be live at `https://YOUR_USERNAME.github.io/feedbacklens` within ~60 seconds

Update the README with your live URL once it's up.

## Step 4: Polish your profile

Make your portfolio pop:
- Pin `feedbacklens` to your profile (Profile → Customize pins)
- Add a description to the repo: *"AI customer feedback analyzer — surfaces themes, feature signals & next actions for B2B product teams"*
- Add topics: `product-management`, `ai`, `b2b-saas`, `openai`, `product-tools`

## What to build next

Once this is live, the two best follow-up projects to build are:

**ChurnSense** — Upload a CSV of customer health data (usage, tickets, tenure, plan). Get AI churn risk scores with the specific signals driving each risk rating. Shows: data-informed PM thinking, quantitative analysis.

**PRD Studio** — Enter a problem statement. Get a full PRD with background, user stories, success metrics, non-goals, open questions, and edge cases. Shows: PM craft, structured thinking, spec writing.

Both follow the same pattern: zero-backend single HTML file, OpenAI API key in browser, instant deploy via GitHub Pages.
