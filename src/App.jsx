import { useState, useEffect, useRef, useCallback } from 'react'
import './App.css'
import AddItemForm from './components/AddItemForm'
import ItemList from './components/ItemList'
import EmptyState from './components/EmptyState'
import Toast from './components/Toast'
import { loadItems, saveItems } from './data/storage'

function App() {
  const [items, setItems] = useState(loadItems)
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('all')
  const [toast, setToast] = useState(null)
  const [animatingId, setAnimatingId] = useState(null)
  const undoRef = useRef(null)

  useEffect(() => {
    saveItems(items)
  }, [items])

  function handleAdd(item) {
    const newItem = {
      ...item,
      id: Date.now(),
      createdAt: Date.now(),
    }
    setItems([...items, newItem])
    setAnimatingId(newItem.id)
    setTimeout(() => setAnimatingId(null), 600)
  }

  function handleDelete(id) {
    const deleted = items.find((i) => i.id === id)
    setItems(items.filter((item) => item.id !== id))
    if (deleted) {
      setToast({ message: `${deleted.name} deleted`, id: deleted.id })
      if (undoRef.current) clearTimeout(undoRef.current)
      undoRef.current = setTimeout(() => setToast(null), 4000)
    }
  }

  function handleUndo() {
    if (toast && toast.id !== undefined) {
      setItems((prev) => {
        const restored = items.find((i) => i.id === toast.id)
        return restored ? [...prev, restored] : prev
      })
      setToast(null)
      if (undoRef.current) clearTimeout(undoRef.current)
    }
  }

  const filtered = items.filter((item) => {
    const matchesSearch = search.trim()
      ? item.name.toLowerCase().includes(search.toLowerCase())
      : true
    if (!matchesSearch) return false
    if (filter === 'expiring') {
      const date = parseDate(item.useBy)
      if (!date) return false
      const today = new Date()
      today.setHours(0, 0, 0, 0)
      return (date - today) / (1000 * 60 * 60 * 24) <= 3 && date >= today
    }
    if (filter === 'expired') {
      const date = parseDate(item.useBy)
      if (!date) return false
      const today = new Date()
      today.setHours(0, 0, 0, 0)
      return date < today
    }
    return true
  })

  const tabs = [
    { key: 'all', label: 'All' },
    { key: 'expiring', label: 'Expiring soon' },
    { key: 'expired', label: 'Expired' },
  ]

  return (
    <div className="app">
      <header className="header">
        <h1>Fridge Tracker</h1>
      </header>
      <main className="main">
        <AddItemForm onAdd={handleAdd} />
        {items.length > 0 && (
          <>
            <input
              type="text"
              placeholder="Search items..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              aria-label="Search items"
              className="search-input"
            />
            <div className="filter-tabs">
              {tabs.map((t) => (
                <button
                  key={t.key}
                  className={`filter-tab ${filter === t.key ? 'filter-tab--active' : ''}`}
                  onClick={() => setFilter(t.key)}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </>
        )}
        {items.length === 0 ? (
          <EmptyState />
        ) : filtered.length === 0 ? (
          <p className="no-results">No items match your search.</p>
        ) : (
          <ItemList items={filtered} onDelete={handleDelete} animatingId={animatingId} />
        )}
      </main>
      {toast && <Toast message={toast.message} onUndo={handleUndo} />}
    </div>
  )
}

function parseDate(dateStr) {
  if (!dateStr) return null
  const parts = dateStr.split('/')
  if (parts.length !== 2) return null
  const day = parseInt(parts[0], 10)
  const month = parseInt(parts[1], 10)
  if (isNaN(day) || isNaN(month)) return null
  const year = new Date().getFullYear()
  return new Date(year, month - 1, day)
}

export default App