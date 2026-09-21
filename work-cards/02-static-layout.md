# Work Card 02 — Static Layout

## Goal
Replace the default Vite + React page with the Fridge Tracker shell: header, empty state, and base CSS.

## Inputs
- architecture.md (component map)
- design.md (colors, layout, empty state, mobile rules)
- constants.js

## Files likely touched
- src/App.jsx
- src/App.css
- src/components/EmptyState.jsx
- src/main.jsx (minor cleanup if needed)

## Instructions for the coding agent
1. Replace `src/App.jsx` content:
   - Render a header with "Fridge Tracker" title
   - Render an EmptyState component below
   - No add form or item list yet
2. Create `src/components/EmptyState.jsx`:
   - Shows a large fridge emoji
   - Friendly message: "Your fridge is empty! Add some items to get started."
3. Create `src/App.css`:
   - White background
   - Centered single-column layout, max-width 600px
   - System font stack
   - Header: soft blue (#4a90d9) background, white text
   - Responsive: on mobile (< 600px), full width with 16px padding
   - Mobile tap targets minimum 44px

## What not to do
- Do not create AddItemForm or ItemList yet
- Do not add localStorage logic yet
- Do not add routing

## Done when
- Browser shows "Fridge Tracker" blue header
- Empty state with fridge emoji and message visible
- Layout is centered and looks good at desktop and mobile widths

## Verification steps
- `npm run dev` starts without errors
- Blue header with "Fridge Tracker" text visible
- Empty state with fridge emoji and friendly message visible
- Page is centered on desktop (max 600px)
- At 375px width, everything is full-width and readable
- Design check: header color, white background, empty state, mobile rules match design.md

## Localhost test before continuing
After this card:
- Open localhost — you should see a blue header "Fridge Tracker" and an empty state with a fridge emoji
- Resize to ~375px width — layout should be full-width with padding, no horizontal scroll
- If all tests pass, reply `continue`.
- If anything fails, reply `fix` and paste the error or describe what you see.

## Stop condition
If CSS breaks the layout, check for missing semicolons or unclosed brackets.

## Status
Complete