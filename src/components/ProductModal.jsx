import React, { useEffect, useState } from 'react'

export default function ProductModal({ product, onClose, onAdd }) {
  const [qty, setQty] = useState(1)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  if (!product) return null

  const add = () => {
    onAdd(product, qty)
    onClose()
  }

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label={product.name}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">✕</button>
        <div className="modal-grid">
          <div className="modal-img">
            <img src={product.image} alt={product.name} />
            {product.badge && <span className="p-badge">{product.badge}</span>}
          </div>
          <div className="modal-body">
            <div className="p-cat">{product.category.replace('-', ' ')}</div>
            <h2 className="modal-title">{product.name}</h2>
            <div className="p-rating">
              <span className="star on">★</span> {product.rating}
              <span className="p-reviews">({product.reviews.toLocaleString()} reviews)</span>
              {product.prescription && <span className="rx-tag">℞ Prescription required</span>}
            </div>
            <p className="modal-desc">{product.description}</p>

            <div className="modal-dosage">
              <strong>💊 Dosage</strong>
              <p>{product.dosage}</p>
            </div>

            <div className="modal-price">
              <span className="cur">Rs</span> {product.price.toLocaleString()}
              {product.oldPrice && <span className="old">Rs {product.oldPrice.toLocaleString()}</span>}
              <span className="save-tag">Save Rs {(product.oldPrice - product.price).toLocaleString()}</span>
            </div>

            <div className="modal-actions">
              <div className="qty">
                <button onClick={() => setQty(Math.max(1, qty - 1))} aria-label="Decrease quantity">−</button>
                <span>{qty}</span>
                <button onClick={() => setQty(Math.min(10, qty + 1))} aria-label="Increase quantity">+</button>
              </div>
              <button className="btn btn-primary modal-add" onClick={add}>
                Add to Cart — Rs {(product.price * qty).toLocaleString()}
              </button>
            </div>

            <p className="modal-note">🔒 Free delivery on orders above Rs 2,000 · Genuine DRAP-approved products</p>
          </div>
        </div>
      </div>
    </div>
  )
}
