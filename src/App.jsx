import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

const App = () => {
  const [darkMode, setDarkMode] = useState(false)
  const [cart, setCart] = useState([])
  const [category, setCategory] = useState('all')

  const toggleDarkMode = () => setDarkMode((v) => !v)

  const addToCart = (product) => {
    setCart((prev) => {
      const found = prev.find((p) => p.id === product.id)
      if (found) {
        return prev.map((p) =>
          p.id === product.id ? { ...p, qty: p.qty + 1 } : p
        )
      }
      return [...prev, { ...product, qty: 1 }]
    })
  }

  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter((p) => p.id !== productId))
  }

  const appStyle = {
    backgroundColor: darkMode ? '#1f2937' : '#ffffff',
    color: darkMode ? '#f9fafb' : '#111827',
    minHeight: '100vh',
    padding: '1rem'
  }

  return (
    <div style={appStyle}>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <div style={{ margin: '1rem 0' }}>
        <label>Filter by Category: </label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          aria-label="Filter by Category"
        >
          <option value="all">All</option>
          <option value="Fruits">Fruits</option>
          <option value="Dairy">Dairy</option>
        </select>
      </div>

      <ProductList selectedCategory={category} onAddToCart={addToCart} />

      <Cart cart={cart} onRemove={removeFromCart} />
    </div>
  )
}

export default App
