# Work Card 08 — GitHub and Vercel Proof

## Goal
Push to GitHub and deploy to Vercel so the app is live.

## Inputs
- Setup Gate accounts (GitHub, Vercel ready)
- build-status.md (git identity note)

## Files likely touched
- README.md (create/update)
- .gitignore (ensure node_modules is listed)

## Instructions for the coding agent
1. Set Git identity if not already done:
   ```
   git config --global user.name "Your Name"
   git config --global user.email "your-email@example.com"
   ```
2. Create `.gitignore` if missing (Vite template should include it):
   - Ensure `node_modules/`, `dist/` are listed
3. Run:
   ```
   git init
   git add .
   git commit -m "Initial commit: Fridge Tracker v1"
   ```
4. Ask the learner for their GitHub repo URL (create one on github.com first)
5. Add remote and push:
   ```
   git remote add origin <repo-url>
   git push -u origin main
   ```
6. Go to vercel.com, import the GitHub repo, deploy with default settings
7. Confirm the live URL works

## What not to do
- Do not add secrets or API keys
- Do not deploy before GitHub push succeeds

## Done when
- Code is on GitHub
- Vercel deploys successfully
- Live URL shows the working Fridge Tracker

## Verification steps
- `git push` succeeds without errors
- Vercel deployment shows green checkmark
- Live URL loads and works (add item, refresh, delete all work)
- Design check: deployed version matches design.md (no broken styles on Vercel)

## Localhost test before continuing
After this card:
- Visit the Vercel live URL
- Add a few items, refresh — they persist
- Delete items — works
- Check on a phone browser (or resize to 375px) — layout is usable
- If all tests pass, the build is complete.
- If anything fails, reply `fix` and paste the error or describe what you see.

## Stop condition
If Vercel build fails, check the build logs — most common issue is missing build command or output directory config.

## Status
Not started