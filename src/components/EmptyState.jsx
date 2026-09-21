import { t } from '../data/translations'

function EmptyState({ lang }) {
  return (
    <div className="empty-state">
      <span className="empty-emoji">🧊</span>
      <p className="empty-text">{t(lang, 'emptyTitle')}</p>
      <p className="empty-hint">{t(lang, 'emptyHint')}</p>
    </div>
  )
}

export default EmptyState