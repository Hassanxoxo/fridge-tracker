# Work Card 05 — localStorage Save and Refresh

## Goal
Persist items to localStorage so they survive browser refresh.

## Inputs
- architecture.md (storage logic, data model)
- constants.js (STORAGE_KEY)

## Files likely touched
- src/data/storage.js (new)
- src/App.jsx

## Instructions for the coding agent
1. Create `src/data/storage.js`:
   - `loadItems()` — read from localStorage using STORAGE_KEY, parse JSON, return array (default [])
   - `saveItems(items)` — serialize items to JSON, write to localStorage using STORAGE_KEY
   - Wrap in try/catch to handle corrupted data (return [] on error)
2. In `src/App.jsx`:
   - On mount (useEffect), call `loadItems()` to initialize state
   - After every items change, call `saveItems(items)` to persist
3. Do not change any UI or component logic

## What not to do
- Do not change ItemList or ItemCard
- Do not add delete yet
- Do not use any external storage library

## Done when
- Add items → refresh browser → items still appear with correct colors and order
- Empty the list → refresh → empty state shows

## Verification steps
- Add 3 items with different dates
- Refresh browser — all 3 items appear with correct color borders and order
- Delete all (via code or manually), refresh — empty state shows
- Design check: refresh proof visibility confirms persistence (design.md requirement)

## Localhost test before continuing
After this card:
- Add "milk", "1 bucket", "13/10" — card appears
- Add "yogurt", "1", <date 2 days from now> — card appears
- Hard refresh the browser (F5) — both items still appear with correct colors
- Close tab, reopen localhost — items still there
- If all tests pass, reply `continue`.
- If anything fails, reply `fix` and paste the error or describe what you see.

## Stop condition
If items disappear on refresh, check that loadItems runs on mount and saveItems fires after state changes.

## Status
Complete