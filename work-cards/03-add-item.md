# Work Card 03 — Add Item

## Goal
Create the AddItemForm component and wire it to display new items in a basic list.

## Inputs
- architecture.md (component map, data model)
- design.md (form placement, button style)
- constants.js

## Files likely touched
- src/App.jsx
- src/App.css
- src/components/AddItemForm.jsx

## Instructions for the coding agent
1. Create `src/components/AddItemForm.jsx`:
   - Props: `onAdd` callback
   - Three inputs: name (text), quantity (text), use-by date (text, placeholder "DD/MM")
   - All inputs are controlled (React state)
   - Submit button: solid blue (#4a90d9), white text, says "Add to Fridge"
   - On submit: call `onAdd` with { name, quantity, useBy }, clear the form
   - Basic validation: name is required (show alert if empty)
2. In `src/App.jsx`:
   - Add local state for items array
   - Render AddItemForm above the empty state (or replace empty state when items exist)
   - onAdd handler: create item object with id (Date.now()), name, quantity, useBy, createdAt
   - Render a simple list of item names below to verify adding works
3. In `src/App.css`:
   - Style the form row (inline on desktop, stacked on mobile)
   - Style inputs: light border, padding, rounded corners
   - Style submit button: solid blue, white text, hover effect

## What not to do
- Do not add localStorage yet
- Do not add delete button yet
- Do not add sorting or color borders yet

## Done when
- Typing in the form and clicking "Add to Fridge" adds an item to the list
- Item name appears in a simple list below the form
- Form clears after adding
- Empty state still shows when no items exist

## Verification steps
- Type "milk", qty "1 bucket", date "13/10" — click Add → item appears in list
- Type another item — appears below
- Form clears after each add
- Empty state shows when all items are removed (refresh page)
- Design check: form placement (top), button style (blue, "Add to Fridge") matches design.md

## Localhost test before continuing
After this card:
- Open localhost — form is visible at top
- Add "milk", "1 bucket", "13/10" — item appears in list below
- Add "beef", "1 kilo", "" — item appears
- Form clears after each add
- Resize to 375px — form inputs stack vertically, button still tappable
- If all tests pass, reply `continue`.
- If anything fails, reply `fix` and paste the error or describe what you see.

## Stop condition
If items don't appear, check that onAdd is called and state updates correctly.

## Status
Complete