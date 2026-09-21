import { useState } from 'react'
import { QUICK_ITEMS } from '../data/constants'

function AddItemForm({ onAdd }) {
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
          placeholder="Food name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          aria-label="Food name"
          className="add-input"
        />
        <input
          type="text"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          aria-label="Quantity"
          className="add-input"
        />
        <input
          type="text"
          placeholder="Use-by (DD/MM)"
          value={useBy}
          onChange={(e) => setUseBy(e.target.value)}
          aria-label="Use-by date"
          className="add-input"
        />
        <button type="submit" className="add-button">
          Add to Fridge
        </button>
      </form>
    </div>
  )
}

export default AddItemForm