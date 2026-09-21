function EmptyState() {
  return (
    <div className="empty-state">
      <span className="empty-emoji">🧊</span>
      <p className="empty-text">Your fridge is empty!</p>
      <p className="empty-hint">Try adding some milk, eggs, or anything you bought today.</p>
    </div>
  )
}

export default EmptyState