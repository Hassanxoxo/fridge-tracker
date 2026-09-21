# Build Blueprint

## Source Files
- project-brief.md
- architecture.md
- design.md

## Project Identity
Fridge Tracker — household food inventory with use-by tracking

## Build Shape
Browser-local tool

## Version-One Promise
Add food items with name, quantity, and use-by date. See them sorted by date with expiring-soon items highlighted. Delete items. Everything persists in localStorage across browser refreshes.

## Scope Lock

### Now
- Add item form (name, quantity, use-by date)
- Item list sorted by use-by date (oldest first, empty dates last)
- Color-coded left border: green (safe), amber (expiring within 3 days), red (expired)
- Delete button per item (red, visible)
- localStorage persistence under key "fridge-tracker-items"
- Empty state with friendly message and emoji
- Responsive mobile layout

### Later
- Edit an existing item
- Mark item as eaten
- Search/filter items
- Sorting options

### Never
- Login / auth
- Backend server
- Database
- Multi-user
- Mobile app
- Grocery-store integration

## Architecture Summary
- Vite + React + plain CSS
- Single-page app, no routing
- Components: App, AddItemForm, ItemList, ItemCard, EmptyState
- Data helpers: storage.js, constants.js

## Data / State / Storage Rules
- Item shape: { id, name, quantity, useBy, createdAt }
- localStorage key: "fridge-tracker-items"
- Load on mount, save on every mutation
- No server, no API, no database

## Design Direction Summary
Friendly kitchen note mood. White background, thin gray card borders, soft blue header. Color-coded left border per status (green/amber/red). Casual emoji next to item names. Red delete button visible on every card. Empty state with fridge emoji. Mobile: stacked full-width layout, 44px tap targets. No cloned brands or fake content.

## Implementation Rules
- plain CSS only (no Tailwind, no CSS framework)
- Use system font stack
- All dates in DD/MM format
- Expiring-soon = within 3 days (including today)
- Expired = use-by date is before today
- Safe = more than 3 days away or no date
- Emojis added casually next to food names (not required, user types them if they want)
- No external dependencies beyond Vite + React

## File and Folder Expectations
```
index.html
src/
  main.jsx
  App.jsx
  App.css
  components/
    AddItemForm.jsx
    ItemList.jsx
    ItemCard.jsx
    EmptyState.jsx
  data/
    storage.js
    constants.js
```

## Work Card Plan
1. WC01 — Scaffold project (Vite + React, folder structure, constants.js)
2. WC02 — Storage layer (storage.js — load/save localStorage)
3. WC03 — AddItemForm component
4. WC04 — ItemList + ItemCard components with sorting and color-coded borders
5. WC05 — EmptyState component
6. WC06 — Wire up App.jsx (state, add, delete, load on mount)
7. WC07 — Mobile responsive CSS
8. WC08 — Proof test (add 3, refresh, verify persistence and highlights)

## Review Mirror
After all work cards, run through:
- Add an item, does it appear in the list?
- Is the list sorted oldest-first?
- Are green/amber/red borders applied correctly?
- Does delete remove the item?
- Does localStorage persist after refresh?
- Does the empty state show when list is empty?
- Is the page usable at 375px width?
- Are all form inputs labeled?
- Is focus visible on interactive elements?

## Proof Ladder
1. `npm run dev` starts without errors
2. Add item "milk", qty "1 bucket", date "13/10" — appears in list
3. Add item "beef", qty "1 kilo", date "" (no date) — appears at bottom
4. Add item "yogurt", qty "1", date tomorrow's date — shows amber border
5. Refresh browser — all 3 items remain
6. Delete "beef" — only 2 items remain
7. Delete all — empty state appears
8. Check at 375px width — everything readable and tappable

## 60-Second Explanation Template
"Fridge Tracker is a browser-only tool. Add what's in your fridge with a use-by date. Items sort oldest-first. Green border means fine, amber means eat soon, red means expired. Delete when gone. Everything stays in your browser after refresh."

## Guardrails for the Coding Agent
- read build-status.md, build-blueprint.md, and the current work card before editing
- implement only the current work card
- do not jump ahead
- stop after verification
- update build-status.md after each work card
- do not add backend/auth/database/API unless the blueprint explicitly allows it
- do not add secrets or keys to code
- do not invent claims, testimonials, logos, or real numbers
- apply the guardrails for browser-local tool shape
- no external CSS frameworks, plain CSS only