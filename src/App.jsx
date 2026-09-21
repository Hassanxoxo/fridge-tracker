import { useState, useEffect, useRef } from 'react'
import './App.css'
import AddItemForm from './components/AddItemForm'
import ItemList from './components/ItemList'
import EmptyState from './components/EmptyState'
import Toast from './components/Toast'
import { loadItems, saveItems } from './data/storage'
import { getLang, setLang, t, LANGUAGES } from './data/translations'

function App() {
  const [items, setItems] = useState(loadItems)
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('all')
  const [toast, setToast] = useState(null)
  const [animatingId, setAnimatingId] = useState(null)
  const [lang, setLangState] = useState(getLang)
  const undoRef = useRef(null)

  useEffect(() => {
    saveItems(items)
  }, [items])

  useEffect(() => {
    const dir = LANGUAGES.find((l) => l.code === lang)?.dir || 'ltr'
    document.documentElement.dir = dir
    document.documentElement.lang = lang
  }, [lang])

  function handleLangChange(code) {
    setLang(code)
    setLangState(code)
  }

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
      setToast({ message: `${deleted.name} ${t(lang, 'deleted')}`, id: deleted.id })
      if (undoRef.current) clearTimeout(undoRef.current)
      undoRef.current = setTimeout(() => setToast(null), 4000)
    }
  }

  function handleUndo() {
    if (toast && toast.id !== undefined) {
      const restored = items.find((i) => i.id === toast.id)
      if (restored) setItems((prev) => [...prev, restored])
      setToast(null)
      if (undoRef.current) clearTimeout(undoRef.current)
    }
  }

  const searchLower = search.toLowerCase()
  const filtered = items.filter((item) => {
    const matchesSearch = search.trim()
      ? item.name.toLowerCase().includes(searchLower)
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
    { key: 'all', label: t(lang, 'all') },
    { key: 'expiring', label: t(lang, 'expiringSoon') },
    { key: 'expired', label: t(lang, 'expired') },
  ]

  return (
    <div className={`app lang-${lang}`}>
      <header className="header">
        <div className="header-top">
          <h1>{t(lang, 'header')}</h1>
          <div className="lang-switcher">
            {LANGUAGES.map((l) => (
              <button
                key={l.code}
                className={`lang-btn ${lang === l.code ? 'lang-btn--active' : ''}`}
                onClick={() => handleLangChange(l.code)}
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>
      </header>
      <main className="main">
        <AddItemForm onAdd={handleAdd} lang={lang} />
        {items.length > 0 && (
          <>
            <input
              type="text"
              placeholder={t(lang, 'searchItems')}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              aria-label={t(lang, 'searchItems')}
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
          <EmptyState lang={lang} />
        ) : filtered.length === 0 ? (
          <p className="no-results">{t(lang, 'noResults')}</p>
        ) : (
          <ItemList items={filtered} onDelete={handleDelete} animatingId={animatingId} lang={lang} />
        )}
      </main>
      {toast && <Toast message={toast.message} onUndo={handleUndo} lang={lang} />}
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