import React from 'react'

const Cart = ({ cart = [], onRemove }) => {
  return (
    <div style={{ marginTop: '2rem' }}>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} is in your cart.
              {item.qty > 1 ? ` (x${item.qty}) ` : ' '}
              <button onClick={() => onRemove && onRemove(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Cart
