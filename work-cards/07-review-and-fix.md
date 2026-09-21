# Work Card 07 — Review and Fix

## Goal
Run the full Review Mirror checklist from the blueprint, fix any issues found.

## Inputs
- build-blueprint.md (Review Mirror section, Proof Ladder)
- design.md (all rules)
- All existing components

## Files likely touched
- Any file that needs a fix

## Instructions for the coding agent
1. Read `build-blueprint.md` Review Mirror section
2. Test every item:
   - Add an item — does it appear in the list?
   - Is the list sorted oldest-first?
   - Are green/amber/red borders applied correctly?
   - Does delete remove the item?
   - Does localStorage persist after refresh?
   - Does the empty state show when list is empty?
   - Is the page usable at 375px width?
   - Are all form inputs labeled?
   - Is focus visible on interactive elements?
3. Fix any failures found. Make the smallest useful fix.

## What not to do
- Do not add new features
- Do not refactor working code
- Do not add edit functionality

## Done when
- All Review Mirror checks pass
- Proof Ladder from build-blueprint.md works end-to-end

## Verification steps
- Run through the entire Proof Ladder from build-blueprint.md
- Design check: full design.md compliance — colors, borders, mobile, empty state, delete button

## Localhost test before continuing
After this card:
- Full proof ladder test:
  1. Add "milk", "1 bucket", "13/10" — appears in list
  2. Add "beef", "1 kilo", "" — appears at bottom (green border)
  3. Add "yogurt", "1", tomorrow's date — amber border
  4. Refresh — all 3 remain with correct colors
  5. Delete "beef" — only 2 remain
  6. Delete all — empty state appears
  7. Check at 375px width — everything readable, buttons tappable
- If all tests pass, reply `continue`.
- If anything fails, reply `fix` and paste the error or describe what you see.

## Stop condition
If a fix breaks something else, revert the change and try a smaller fix.

## Status
Complete