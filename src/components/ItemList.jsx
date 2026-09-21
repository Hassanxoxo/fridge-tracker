import ItemCard from './ItemCard'
import { parseDate } from '../data/constants'

function sortItems(items) {
  return [...items].sort((a, b) => {
    const dateA = parseDate(a.useBy)
    const dateB = parseDate(b.useBy)
    if (dateA && dateB) return dateA - dateB
    if (dateA) return -1
    if (dateB) return 1
    return 0
  })
}

function ItemList({ items, onDelete, animatingId, lang }) {
  const sorted = sortItems(items)

  return (
    <div className="item-list">
      {sorted.map((item) => (
        <ItemCard key={item.id} item={item} onDelete={onDelete} animating={item.id === animatingId} lang={lang} />
      ))}
    </div>
  )
}

export default ItemList