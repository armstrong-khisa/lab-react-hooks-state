import React from 'react'
import ProductCard from './ProductCard'

// Sample product data (for display purposes only)
export const sampleProducts = [
  { id: 1, name: 'Apple', price: '$1.00', category: 'Fruits', inStock: true },
  { id: 2, name: 'Milk', price: '$2.50', category: 'Dairy', inStock: false }
]

const ProductList = ({ selectedCategory = 'all', onAddToCart }) => {
  const filtered =
    selectedCategory === 'all'
      ? sampleProducts
      : sampleProducts.filter((p) => p.category === selectedCategory)

  return (
    <div>
      <h2>Available Products</h2>

      {filtered.length === 0 ? (
        <p>No products available.</p>
      ) : (
        filtered.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAdd={() => onAddToCart && onAddToCart(product)}
          />
        ))
      )}
    </div>
  )
}

export default ProductList
