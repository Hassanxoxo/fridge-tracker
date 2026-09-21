function Toast({ message, onUndo }) {
  return (
    <div className="toast">
      <span>{message}</span>
      <button className="toast-undo" onClick={onUndo}>Undo</button>
    </div>
  )
}

export default Toast