import React from 'react'

export default function ProductCard({ product, onView, onAdd }) {
  return (
    <div className="p-card" onClick={() => onView(product)} role="button" tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onView(product)}>
      <div className="p-img-wrap">
        <img src={product.image} alt={product.name} loading="lazy" />
        {product.badge && <span className="p-badge">{product.badge}</span>}
        {!product.stock && <span className="p-badge out">Out of Stock</span>}
      </div>
      <div className="p-body">
        <div className="p-cat">{product.category.replace('-', ' ')}</div>
        <h3 className="p-name">{product.name}</h3>
        <div className="p-rating">
          <span className="star on">★</span> {product.rating}
          <span className="p-reviews">({product.reviews.toLocaleString()} reviews)</span>
        </div>
        <div className="p-foot">
          <div className="p-price">
            <span className="cur">Rs</span> {product.price.toLocaleString()}
            {product.oldPrice && <span className="old">Rs {product.oldPrice.toLocaleString()}</span>}
          </div>
          <button
            className="add-btn"
            aria-label={`Add ${product.name} to cart`}
            onClick={(e) => { e.stopPropagation(); onAdd(product) }}
          >
            <span>+</span>
          </button>
        </div>
      </div>
    </div>
  )
}
