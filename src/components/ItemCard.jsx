import { EXPIRING_SOON_DAYS, parseDate } from '../data/constants'
import { t } from '../data/translations'

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

function ItemCard({ item, onDelete, animating, lang }) {
  const status = getStatus(item.useBy)

  return (
    <div className={`item-card item-card--${status} ${animating ? 'item-card--new' : ''}`}>
      <div className="item-card-body">
        <span className="item-name">{item.name}</span>
        <span className="item-details">
          {item.quantity && <span className="item-quantity">{item.quantity}</span>}
          {item.useBy && <span className="item-date">{t(lang, 'useByLabel')} {item.useBy}</span>}
          {!item.useBy && <span className="item-date">{t(lang, 'noExpiry')}</span>}
        </span>
      </div>
      <div className="item-card-right">
        <div className="item-status-label">
          {status === 'expired' && t(lang, 'expiredLabel')}
          {status === 'expiring' && t(lang, 'eatSoon')}
          {status === 'safe' && t(lang, 'good')}
        </div>
        <button className="delete-button" onClick={() => onDelete(item.id)}>
          {t(lang, 'deleteLabel')}
        </button>
      </div>
    </div>
  )
}

export default ItemCard