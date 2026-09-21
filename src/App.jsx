import { useState, useEffect } from 'react'
import './App.css'
import AddItemForm from './components/AddItemForm'
import ItemList from './components/ItemList'
import EmptyState from './components/EmptyState'
import { loadItems, saveItems } from './data/storage'

function App() {
  const [items, setItems] = useState(loadItems)
  const [search, setSearch] = useState('')

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
  }

  function handleDelete(id) {
    setItems(items.filter((item) => item.id !== id))
  }

  const filtered = search.trim()
    ? items.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      )
    : items

  return (
    <div className="app">
      <header className="header">
        <h1>Fridge Tracker</h1>
      </header>
      <main className="main">
        <AddItemForm onAdd={handleAdd} />
        {items.length > 0 && (
          <input
            type="text"
            placeholder="Search items..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            aria-label="Search items"
            className="search-input"
          />
        )}
        {items.length === 0 ? (
          <EmptyState />
        ) : filtered.length === 0 ? (
          <p className="no-results">No items match your search.</p>
        ) : (
          <ItemList items={filtered} onDelete={handleDelete} />
        )}
      </main>
    </div>
  )
}

export default App