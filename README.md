# FeedbackLens

**AI-powered customer feedback analyzer for B2B product teams.**

Drop in raw customer feedback — support tickets, NPS verbatims, interview notes, App Store reviews — and get back clustered themes, prioritized feature signals, representative quotes, and a recommended next action. No preprocessing needed.

**[Live demo →](https://your-username.github.io/feedbacklens)** *(deploy via GitHub Pages — instructions below)*

---

## The problem this solves

Most B2B product teams are drowning in qualitative feedback but starved for signal. A mid-size SaaS company running quarterly NPS gets 400+ verbatims. Support exports 800 tickets a month. Customer success summarizes 50 calls per quarter. PMs read what they can, pattern-match on feel, and end up anchoring roadmap decisions on the most recent or loudest customers rather than the most common or highest-impact ones.

FeedbackLens compresses hours of synthesis into minutes — and more importantly, surfaces the *product rationale* behind each signal, not just a word cloud.

## Product decisions worth noting

**Why a single HTML file?** Zero setup friction. The target user is a PM or CS lead who got this link from a teammate. If it requires `npm install`, they won't use it. A single file opens in any browser, can be hosted for free on GitHub Pages, and is trivially auditable.

**Why does the API key live in the browser?** All API calls go directly from the user's browser to OpenAI — nothing is proxied through a server. Feedback data never touches a third-party system beyond the LLM call itself. This is a deliberate privacy-first choice: B2B customers are often sensitive about their feedback leaving their control.

**Why four analysis modes?** The same corpus of feedback has different implications depending on where you are in the product cycle. A team facing churn needs to surface pain first. A team building the annual roadmap needs frequency-weighted feature signals. A growth PM preparing for a QBR needs delight signals. Mode-switching reframes the same data for different stakeholders without requiring re-entry.

**Why structured JSON output (not streaming)?** Streaming feels responsive but creates partially-rendered states that confuse users in a data-heavy layout. The spinner + structured reveal gives a cleaner experience for the output density this tool produces.

## Features

- **Theme clustering** — groups feedback by underlying topic, not keyword, with per-theme sentiment
- **Feature signal prioritization** — ranked by frequency, with PM rationale for each signal
- **Sentiment breakdown** — corpus-level positive/neutral/negative split
- **Key quotes** — representative verbatims tagged by type (pain, delight, request, churn-risk)
- **Recommended next action** — opinionated, specific, for the product team
- **Analysis modes** — balanced, churn-risk, growth, or roadmap focus
- **Example datasets** — pre-loaded SaaS and cold chain examples to demo without real data

## How to use

1. Open `index.html` in any modern browser (or visit the GitHub Pages URL)
2. Enter your [OpenAI API key](https://platform.openai.com/api-keys) (requires GPT-4o access)
3. Paste feedback — one entry per line works best, but paragraphs work too
4. Optionally add product context (helps the model calibrate language and domain)
5. Choose an analysis mode and click **Analyze Feedback**

**Works best with:** 10–100 entries. Fewer than 5 gives thin themes; more than 200 may hit token limits (split into batches).

## Deploy to GitHub Pages (free)

```bash
# 1. Fork or clone this repo
git clone https://github.com/your-username/feedbacklens.git
cd feedbacklens

# 2. Push to GitHub
git add .
git commit -m "initial commit"
git push origin main

# 3. In GitHub repo settings → Pages → Source: main branch / root
# Your app will be live at https://your-username.github.io/feedbacklens
```

## Tech stack

| Layer | Choice | Why |
|---|---|---|
| UI | Vanilla HTML/CSS/JS | Zero build step, max portability |
| AI | OpenAI GPT-4o | Best-in-class instruction following for structured output |
| Hosting | GitHub Pages | Free, no backend needed |
| Data | Client-side only | Privacy by design |

## Roadmap (if this were a real product)

These are the next bets I'd make, in priority order:

1. **CSV/export input** — teams want to paste a Zendesk export, not manually copy tickets
2. **Saved analyses** — compare two quarters of NPS verbatims side by side
3. **Jira/Linear push** — one-click to create tickets from top feature signals
4. **Team sharing** — shareable results URL without requiring others to have an API key
5. **Longitudinal tracking** — run monthly, track whether themes are improving or degrading over time

---

*Built as part of a product portfolio to demonstrate: customer insight synthesis, PM-led product thinking, and AI-augmented tooling for modern product teams.*
