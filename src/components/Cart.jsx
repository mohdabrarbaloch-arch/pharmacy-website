import React, { useEffect } from 'react'

export default function Cart({ items, onClose, onUpdateQty, onRemove }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  const subtotal = items.reduce((s, i) => s + i.product.price * i.qty, 0)
  const delivery = subtotal >= 2000 || subtotal === 0 ? 0 : 150
  const total = subtotal + delivery

  return (
    <div className="modal-overlay cart-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label="Shopping cart">
      <div className="cart" onClick={(e) => e.stopPropagation()}>
        <div className="cart-head">
          <h2>🛒 Your Cart <span className="cart-count">{items.reduce((s, i) => s + i.qty, 0)}</span></h2>
          <button className="modal-close" onClick={onClose} aria-label="Close cart">✕</button>
        </div>

        {items.length === 0 ? (
          <div className="cart-empty">
            <span className="ce-icon">🛒</span>
            <h3>Your cart is empty</h3>
            <p>Browse our products and add something healthy today.</p>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {items.map(({ product, qty }) => (
                <div className="cart-item" key={product.id}>
                  <img src={product.image} alt={product.name} />
                  <div className="ci-info">
                    <strong>{product.name}</strong>
                    <small>Rs {product.price.toLocaleString()} each</small>
                    <div className="ci-qty">
                      <button onClick={() => onUpdateQty(product.id, qty - 1)} aria-label="Decrease">−</button>
                      <span>{qty}</span>
                      <button onClick={() => onUpdateQty(product.id, qty + 1)} aria-label="Increase">+</button>
                    </div>
                  </div>
                  <div className="ci-right">
                    <strong>Rs {(product.price * qty).toLocaleString()}</strong>
                    <button className="ci-remove" onClick={() => onRemove(product.id)} aria-label={`Remove ${product.name}`}>🗑</button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <div className="cs-row"><span>Subtotal</span><span>Rs {subtotal.toLocaleString()}</span></div>
              <div className="cs-row"><span>Delivery</span><span>{delivery === 0 ? 'FREE' : `Rs ${delivery.toLocaleString()}`}</span></div>
              <div className="cs-row total"><span>Total</span><span>Rs {total.toLocaleString()}</span></div>
              {delivery === 0 && subtotal > 0 && <div className="cs-free">🎉 You've unlocked free delivery!</div>}
              <button className="btn btn-primary cs-checkout">Proceed to Checkout</button>
              <p className="cs-note">Cash on Delivery · JazzCash · Easypaisa · Cards</p>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
