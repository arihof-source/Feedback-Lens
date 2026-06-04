# Deploying FeedbackLens to Vercel

Vercel hosts the app for free and keeps your OpenAI key on the server — visitors never need their own key.

## Step 1: Push to GitHub

If you haven't already:

```bash
cd feedbacklens
git init
git add .
git commit -m "initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/feedbacklens.git
git push -u origin main
```

## Step 2: Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **Add New → Project**
3. Select your `feedbacklens` repo
4. Leave all settings as defaults — Vercel auto-detects everything
5. Click **Deploy**

Your app will be live at `https://feedbacklens.vercel.app` (or similar) in about 60 seconds.

## Step 3: Add your OpenAI key

The app won't work until you add your Anthropic API key as an environment variable:

1. Get your key at [console.anthropic.com/settings/keys](https://console.anthropic.com/settings/keys)
2. In Vercel, go to your project → **Settings → Environment Variables**
3. Add a new variable:
   - **Name:** `ANTHROPIC_API_KEY`
   - **Value:** your key starting with `sk-ant-...`
   - **Environments:** Production, Preview, Development (check all three)
4. Click **Save**
5. Go to **Deployments** and click **Redeploy** on the latest deployment

That's it. Your key lives on Vercel's servers — it's never exposed to visitors.

## Updating the app later

Any time you push changes to GitHub, Vercel redeploys automatically.

```bash
git add .
git commit -m "your change description"
git push
```

## Cost

- **Vercel:** Free tier is more than enough for a portfolio project (100GB bandwidth/month)
- **Anthropic:** Roughly $0.01–0.05 per analysis using Claude Sonnet. Add a $5 credit at [console.anthropic.com](https://console.anthropic.com) and it'll last a long time.
