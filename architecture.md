# Architecture

## Build Shape
Browser-local tool — Fridge Tracker

## Stack Decision
- Vite (build tool)
- React (UI library)
- plain CSS (no framework)
- localStorage (persistence)

## Structure Overview
Single-page app. No routing. All functionality on one view: add form at top, item list below.

## Component Map
- `App` — root layout, state owner, loads/saves localStorage
  - `AddItemForm` — name, quantity, use-by date inputs + submit
  - `ItemList` — renders sorted list of items
    - `ItemCard` — single item row showing name, quantity, date, delete button
  - `EmptyState` — shown when no items exist

## Data / State Model
Item {
  id: string (UUID or Date.now based)
  name: string
  quantity: string
  useBy: string (DD/MM format or empty)
  createdAt: timestamp
}

## Storage Logic
- localStorage key: "fridge-tracker-items"
- Load on mount, save on every mutation (add / delete)
- No server, no API calls

## User Flow
1. Open page -> load items from localStorage
2. If empty -> show EmptyState
3. Type name, quantity, date -> click Add -> item appears in sorted list
4. List is sorted by use-by date (empty dates last)
5. Items expiring within 3 days get a visual highlight
6. Click Delete -> item removed -> list re-saves to localStorage
7. Refresh page -> items still there

## File Expectations
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

## Constraints
- Single browser, single machine
- No backend, no database, no auth
- No mobile app - responsive web only
- Dates entered in DD/MM format; display as-is

## Technical Non-Goals
- Login / auth / multi-user
- Backend server or API
- Database or external storage
- Grocery integration
- Mobile app
- Editing items (later)

## Verification Notes
- Add 3 items, refresh browser, items still visible
- Items sorted by use-by date ascending
- Expiring-soon items (3 days) visually distinct
- Delete removes item permanently
- Empty state shows when no items exist