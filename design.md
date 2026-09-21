# Design Direction

## Design Inspiration URL
Not used. Learner described their own direction.

## What We Borrow
- Kitchen note / recipe card feel
- White background with thin borders
- Casual emoji-enhanced item names
- Soft blue accents for header and primary actions

## What We Do Not Copy
- No brand, logo, text, or identity from any existing app
- No fake testimonials or stats
- No lorem ipsum

## Visual Mood
Friendly kitchen note. Casual, scannable, warm but clean.

## Layout Rules
- Centered single-column layout, max-width ~600px
- Add form pinned at top
- Item list below, sorted by use-by date (oldest first)
- Each item is a white card with thin gray border and slight shadow
- Empty state centered with friendly message and emoji

## Color / Contrast Rules
- Background: white (#ffffff)
- Card borders: thin light gray (#e0e0e0)
- Header / add button: soft blue (#4a90d9)
- Expiring-soon highlight (3 days): amber/orange left border + background tint (#fff3e0)
- Expired items: red left border + background tint (#ffe0e0)
- Safe items (not expiring soon): green left border (#e8f5e9)
- Delete button: visible red (#d32f2f)
- Text: dark gray (#333333), labels medium gray (#666666)

## Typography Feel
- System font stack (clean, no external load)
- Item name: slightly larger, semibold
- Date and quantity: smaller, lighter gray

## Component Style
- AddItemForm: inline row inside a blue-tinted header card, inputs have light borders, button is solid blue with white text
- ItemCard: white card row, thin border, colored left border per status, emoji next to name, delete button on far right
- EmptyState: centered text with a large fridge emoji, friendly message like "Your fridge is empty!"

## Mobile Rules
- Full-width form on phone (stack inputs vertically)
- Cards stack vertically, full width
- Delete button stays visible (not hidden in menus)
- Minimum tap target 44px

## Accessibility Basics
- Color not the only indicator — expiring items also show text label or icon
- Focus visible on all interactive elements
- Labels on all form inputs
- Sufficient contrast (blue on white, red on white)

## Anti-Slop Rules
- No fake logos
- No fake testimonials
- No fake stats
- No lorem ipsum in final build
- One clear primary action: add item
- Readable on phone width (375px)
- No placeholder data that looks real

## Design Verification Checklist
- [ ] White background, thin card borders, soft blue header
- [ ] Green left border for safe items, amber for expiring-soon, red for expired
- [ ] Emojis used casually next to item names
- [ ] Delete button is red and visible
- [ ] Empty state shows friendly message with emoji
- [ ] Works on mobile (stacked layout, 44px tap targets)
- [ ] Focus visible on inputs and buttons