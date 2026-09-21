# Work Card 06 — Delete Item

## Goal
Add a visible red delete button to each ItemCard that removes the item.

## Inputs
- design.md (delete affordance — red visible button)
- architecture.md (delete behavior)

## Files likely touched
- src/components/ItemCard.jsx
- src/components/ItemList.jsx
- src/App.jsx
- src/App.css

## Instructions for the coding agent
1. In `src/components/ItemCard.jsx`:
   - Add a delete button on the far right of the card
   - Button text: "Delete" or a trash emoji
   - Button style: visible red (#d32f2f), white text, rounded
   - Props: add `onDelete` callback
   - On click: call `onDelete(item.id)`
2. In `src/components/ItemList.jsx`:
   - Props: add `onDelete` callback
   - Pass `onDelete` to each ItemCard
3. In `src/App.jsx`:
   - Add `handleDelete(id)` function
   - Filter out the item by id, state updates, localStorage saves automatically
   - Pass `handleDelete` to ItemList

## What not to do
- Do not add edit or update functionality
- Do not add confirmation dialog unless you want one

## Done when
- Each item card has a visible red delete button
- Clicking delete removes the item from the list
- Items persist after delete + refresh

## Verification steps
- Add 2 items — both visible with delete buttons
- Click delete on one — it disappears, the other remains
- Refresh — deleted item is gone, remaining item still there
- Design check: delete button is red (#d32f2f), visible, easy to tap (44px minimum)

## Localhost test before continuing
After this card:
- Add "milk" and "beef"
- Click delete on "beef" — only "milk" remains
- Refresh — "beef" is still gone, "milk" remains
- Delete "milk" — empty state appears
- If all tests pass, reply `continue`.
- If anything fails, reply `fix` and paste the error or describe what you see.

## Stop condition
If delete doesn't remove from list, check the filter logic in handleDelete.

## Status
Complete