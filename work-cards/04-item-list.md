# Work Card 04 — Item List with Sorting and Color Borders

## Goal
Replace the basic item list with properly styled ItemCard components, sorted by use-by date, with color-coded status borders.

## Inputs
- architecture.md (ItemList, ItemCard)
- design.md (color rules, card style, typography)
- constants.js (EXPIRING_SOON_DAYS)

## Files likely touched
- src/App.jsx
- src/App.css
- src/components/ItemList.jsx (new)
- src/components/ItemCard.jsx (new)

## Instructions for the coding agent
1. Create `src/components/ItemCard.jsx`:
   - Props: `item` (object with name, quantity, useBy)
   - Display: name (with optional emoji), quantity, use-by date
   - Left border color based on status:
     - No date or more than EXPIRING_SOON_DAYS away → green (#4caf50)
     - Within EXPIRING_SOON_DAYS (including today) → amber (#ff9800)
     - Expired (before today) → red (#f44336)
   - Card style: white background, thin gray border (#e0e0e0), slight shadow, rounded corners
   - Name: slightly larger, semibold
   - Date and quantity: smaller, medium gray (#666666)
2. Create `src/components/ItemList.jsx`:
   - Props: `items` array
   - Sort items by useBy date (parseable dates first in ascending order, empty dates last)
   - Render an ItemCard for each item
3. In `src/App.jsx`:
   - Replace the simple list with ItemList
   - Pass items to ItemList
4. In `src/App.css`:
   - Add card styles (white card, thin border, shadow, rounded corners)
   - Add color border classes or inline styles
   - Ensure spacing between cards

## What not to do
- Do not add localStorage yet
- Do not add delete button yet
- Do not worry about exact date parsing edge cases yet

## Done when
- Items display as styled cards with colored left borders
- Cards are sorted by use-by date (oldest first, no-date items last)
- Green border for safe items, amber for expiring-soon, red for expired

## Verification steps
- Add items with various dates — cards show correct color borders
- Items sort oldest-first
- Item without a date appears at bottom of list
- Design check: card style, color borders, typography, spacing match design.md

## Localhost test before continuing
After this card:
- Open localhost
- Add "milk", "1 bucket", "13/10" — card appears with red border (expired)
- Add "yogurt", "1", <date 2 days from now> — card appears with amber border
- Add "beef", "1 kilo", "" — card appears at bottom with green border
- Cards are visually distinct with colored left borders
- If all tests pass, reply `continue`.
- If anything fails, reply `fix` and paste the error or describe what you see.

## Stop condition
If sorting is wrong, check the date comparison logic in ItemList.

## Status
Complete