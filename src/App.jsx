import { useState, useEffect } from 'react'
import './App.css'
import AddItemForm from './components/AddItemForm'
import ItemList from './components/ItemList'
import EmptyState from './components/EmptyState'
import { loadItems, saveItems } from './data/storage'

function App() {
  const [items, setItems] = useState(loadItems)

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

  return (
    <div className="app">
      <header className="header">
        <h1>Fridge Tracker</h1>
      </header>
      <main className="main">
        <AddItemForm onAdd={handleAdd} />
        {items.length === 0 ? <EmptyState /> : <ItemList items={items} onDelete={handleDelete} />}
      </main>
    </div>
  )
}

export default App