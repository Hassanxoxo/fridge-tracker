# Project Brief

## Project Identity
Fridge Tracker

## One-Sentence Concept
A browser-local tool to track household food inventory with use-by dates, so I can see what's expiring soon and delete old items.

## Target User
Myself — one person managing their fridge/pantry.

## User Goal
Add food items with a name, quantity, and use-by date. See the list with expiring-soon items highlighted. Delete items I've used or tossed.

## Build Shape
Browser-local tool

## Shape Confirmation
Confirmed. The main value is adding and changing food data that must persist after refresh. No content pages, no navigation.

## Version-One Success
- Add food items (name, quantity, use-by date)
- See a list with expiring-soon items visually highlighted
- Delete items
- Data survives browser refresh (localStorage)

## Now / Later / Never

### Now
- Add item form
- Item list sorted by use-by date
- Expiring-soon highlighting
- Delete button per item
- localStorage save

### Later
- Edit an existing item
- Mark item as "eaten"
- Search/filter
- Sorting options

### Never
- Login / auth
- Backend server
- Database
- Multi-user
- Mobile app
- Grocery-store integration

## Assumptions
- Single browser on one machine
- User enters dates in DD/MM format
- Items without a date are valid (no expiry shown)

## Proof Target
Add 3 items, close browser tab, reopen, items still shown. One item has an expired or soon date and is highlighted. Delete works.

## Trainer / Learner Notes