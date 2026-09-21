import { EXPIRING_SOON_DAYS, parseDate } from '../data/constants'

function getStatus(useBy) {
  const date = parseDate(useBy)
  if (!date) return 'safe'
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const diff = Math.ceil((date - today) / (1000 * 60 * 60 * 24))
  if (diff < 0) return 'expired'
  if (diff <= EXPIRING_SOON_DAYS) return 'expiring'
  return 'safe'
}

function ItemCard({ item, onDelete }) {
  const status = getStatus(item.useBy)

  return (
    <div className={`item-card item-card--${status}`}>
      <div className="item-card-body">
        <span className="item-name">{item.name}</span>
        <span className="item-details">
          {item.quantity && <span className="item-quantity">{item.quantity}</span>}
          {item.useBy && <span className="item-date">Use by: {item.useBy}</span>}
          {!item.useBy && <span className="item-date">No expiry</span>}
        </span>
      </div>
      <div className="item-card-right">
        <div className="item-status-label">
          {status === 'expired' && 'Expired'}
          {status === 'expiring' && 'Eat soon'}
          {status === 'safe' && 'Good'}
        </div>
        <button className="delete-button" onClick={() => onDelete(item.id)}>
          Delete
        </button>
      </div>
    </div>
  )
}

export default ItemCard