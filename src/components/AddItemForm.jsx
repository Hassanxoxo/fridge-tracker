import { useState } from 'react'
import { QUICK_ITEMS, QUANTITY_UNITS } from '../data/constants'
import { t } from '../data/translations'

function AddItemForm({ onAdd, lang }) {
  const [name, setName] = useState('')
  const [quantity, setQuantity] = useState('')
  const [useBy, setUseBy] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (!name.trim()) {
      alert('Please enter a food name.')
      return
    }
    onAdd({
      name: name.trim(),
      quantity: quantity.trim(),
      useBy: useBy.trim(),
    })
    setName('')
    setQuantity('')
    setUseBy('')
  }

  function handleQuickAdd(foodName) {
    setName(foodName)
  }

  function handleUnitPreset(unit) {
    setQuantity(unit)
  }

  return (
    <div>
      <div className="quick-buttons">
        {QUICK_ITEMS.map((item) => (
          <button
            key={item.name}
            type="button"
            className="quick-button"
            onClick={() => handleQuickAdd(item.name)}
          >
            {item.emoji} {item.name}
          </button>
        ))}
      </div>
      <form className="add-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder={t(lang, 'foodName')}
          value={name}
          onChange={(e) => setName(e.target.value)}
          aria-label={t(lang, 'foodName')}
          className="add-input"
        />
        <div className="quantity-wrap">
          <input
            type="text"
            placeholder={t(lang, 'quantity')}
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            aria-label={t(lang, 'quantity')}
            className="add-input"
          />
          <div className="unit-presets">
            {QUANTITY_UNITS.map((u) => (
              <button
                key={u}
                type="button"
                className="unit-button"
                onClick={() => handleUnitPreset(u)}
              >
                {u}
              </button>
            ))}
          </div>
        </div>
        <input
          type="date"
          value={useBy}
          onChange={(e) => setUseBy(e.target.value)}
          aria-label={t(lang, 'useBy')}
          className="add-input date-input"
        />
        <button type="submit" className="add-button">
          {t(lang, 'addToFridge')}
        </button>
      </form>
    </div>
  )
}

export default AddItemForm