export const STORAGE_KEY = "fridge-tracker-items";
export const EXPIRING_SOON_DAYS = 3;

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