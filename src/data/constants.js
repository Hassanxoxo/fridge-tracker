export const STORAGE_KEY = "fridge-tracker-items";
export const EXPIRING_SOON_DAYS = 3;

export const QUANTITY_UNITS = [
  '1 bucket', '1 kilo', 'half kilo', '1 pack', '2 pieces', '3 pieces',
  '1 bottle', '1 box', '1 bag',
]

export const QUICK_ITEMS = [
  { name: 'Milk', emoji: '🥛' },
  { name: 'Beef', emoji: '🥩' },
  { name: 'Chicken', emoji: '🍗' },
  { name: 'Yogurt', emoji: '🥛' },
  { name: 'Mango Juice', emoji: '🧃' },
  { name: 'Cooked Rice', emoji: '🍚' },
  { name: 'Eggs', emoji: '🥚' },
  { name: 'Cheese', emoji: '🧀' },
  { name: 'Bread', emoji: '🍞' },
  { name: 'Tomatoes', emoji: '🍅' },
]

export function parseDate(dateStr) {
  if (!dateStr) return null
  const parts = dateStr.split('/')
  if (parts.length !== 2) return null
  const day = parseInt(parts[0], 10)
  const month = parseInt(parts[1], 10)
  if (isNaN(day) || isNaN(month)) return null
  const year = new Date().getFullYear()
  return new Date(year, month - 1, day)
}