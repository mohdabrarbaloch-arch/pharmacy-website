import React, { useMemo, useState } from 'react'
import { products, categories } from '../data/products.js'
import ProductCard from './ProductCard.jsx'

export default function ProductGrid({ onView, onAdd }) {
  const [cat, setCat] = useState('all')
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    let list = cat === 'all' ? products : products.filter((p) => p.category === cat)
    if (query.trim()) {
      const q = query.trim().toLowerCase()
      list = list.filter(
        (p) => p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q) || p.category.includes(q)
      )
    }
    return list
  }, [cat, query])

  return (
    <section className="products" id="products">
      <div className="container">
        <div className="section-head reveal">
          <span className="section-tag">Our Pharmacy</span>
          <h2 className="section-title">Shop Trusted <span className="accent">Health Products</span></h2>
          <p className="section-sub">Genuine medicines, vitamins and wellness essentials — with transparent PKR pricing.</p>
        </div>

        {/* Search */}
        <div className="p-search reveal">
          <span className="ps-icon">🔍</span>
          <input
            type="search"
            placeholder="Search medicines, vitamins, conditions…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search products"
          />
          {query && <button className="ps-clear" onClick={() => setQuery('')} aria-label="Clear search">✕</button>}
        </div>

        {/* Category filters */}
        <div className="p-filters reveal">
          {categories.map((c) => (
            <button
              key={c.id}
              className={`filter-chip ${cat === c.id ? 'active' : ''}`}
              onClick={() => setCat(c.id)}
            >
              <span className="fc-icon">{c.icon}</span> {c.label}
            </button>
          ))}
        </div>

        <p className="p-count">
          Showing <strong>{filtered.length}</strong> {filtered.length === 1 ? 'product' : 'products'}
          {cat !== 'all' && ` in ${categories.find((c) => c.id === cat)?.label}`}
          {query && ` for “${query}”`}
        </p>

        {/* Grid */}
        <div className="p-grid">
          {filtered.map((p, i) => (
            <div className={`reveal delay-${(i % 4) + 1}`} key={p.id}>
              <ProductCard product={p} onView={onView} onAdd={onAdd} />
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="p-empty">
            <span className="pe-icon">🔎</span>
            <h3>No products found</h3>
            <p>Try a different search term or category.</p>
          </div>
        )}
      </div>
    </section>
  )
}
