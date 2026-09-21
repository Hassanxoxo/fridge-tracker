# Work Card 01 — Project Skeleton

## Goal
Scaffold a Vite + React project, create the folder structure, and add the constants file.

## Inputs
- architecture.md (file expectations)
- build-blueprint.md (file and folder expectations)

## Files likely touched
- package.json (created by Vite)
- vite.config.js (created by Vite)
- index.html (created by Vite, may edit title)
- src/main.jsx (created by Vite)
- src/data/constants.js (created by us)

## Instructions for the coding agent
1. In the project root, run: `npm.cmd create vite@latest . -- --template react`
2. When prompted, confirm creating in the current directory.
3. Run: `npm.cmd install`
4. Edit `index.html`: change the `<title>` to "Fridge Tracker"
5. Create the folder `src/data/`
6. Create `src/data/constants.js` with:
   - `STORAGE_KEY = "fridge-tracker-items"`
   - `EXPIRING_SOON_DAYS = 3`
7. Verify the dev server starts with `npm.cmd run dev`

## What not to do
- Do not add any other npm packages
- Do not create components yet
- Do not add CSS yet
- Do not initialize Git

## Done when
- `npm run dev` starts without errors
- Browser shows the default Vite + React page (we'll replace it later)
- `src/data/constants.js` exists with correct values

## Verification steps
- `npm run dev` starts without errors
- Default Vite + React page loads in browser
- `src/data/constants.js` exists with STORAGE_KEY and EXPIRING_SOON_DAYS
- Design check: n/a for this card (no visible UI yet)

## Localhost test before continuing
No meaningful browser preview yet. Continue after the command/file checks pass.

## Stop condition
If Vite scaffold fails, delete node_modules and try again. If `npm create vite` asks about overwriting, confirm yes.

## Status
Complete