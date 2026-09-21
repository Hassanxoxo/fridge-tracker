import { t } from '../data/translations'

function Toast({ message, onUndo, lang }) {
  return (
    <div className="toast">
      <span>{message}</span>
      <button className="toast-undo" onClick={onUndo}>{t(lang, 'undo')}</button>
    </div>
  )
}

export default Toast