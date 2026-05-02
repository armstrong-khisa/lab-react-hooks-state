import React from 'react'
import styles from '../styles/ProductCard.module.css'

const ProductCard = ({ product, onAdd }) => {
  return (
    <div
      className={`${styles.card} ${!product.inStock ? styles.outOfStock : ''}`}
    >
      <h3>{product.name}</h3>
      <p>Price: {product.price}</p>
      <p>Status: {product.inStock ? 'In Stock' : 'Out of Stock'}</p>

      <button
        data-testid={'product-' + product.id}
        onClick={() => onAdd && onAdd(product)}
      >
        {product.inStock ? 'Add to Cart' : 'Out of Stock'}
      </button>
    </div>
  )
}

export default ProductCard
