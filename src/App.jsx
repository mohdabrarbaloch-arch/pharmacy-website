import React, { useCallback, useEffect, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'
import Stats from './components/Stats.jsx'
import WhyUs from './components/WhyUs.jsx'
import ProductGrid from './components/ProductGrid.jsx'
import Testimonials from './components/Testimonials.jsx'
import Footer from './components/Footer.jsx'
import ProductModal from './components/ProductModal.jsx'
import Cart from './components/Cart.jsx'
import { products } from './data/products.js'
import useReveal from './hooks/useReveal.js'
import './styles/app.css'

export default function App() {
  useReveal()

  const [selected, setSelected] = useState(null)
  const [cartOpen, setCartOpen] = useState(false)
  const [cart, setCart] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('mc-cart') || '[]')
    } catch {
      return []
    }
  })
  const [toast, setToast] = useState('')

  // Persist cart
  useEffect(() => {
    localStorage.setItem('mc-cart', JSON.stringify(cart))
  }, [cart])

  const showToast = useCallback((msg) => {
    setToast(msg)
    setTimeout(() => setToast(''), 2600)
  }, [])

  const addToCart = useCallback((product, qty = 1) => {
    setCart((prev) => {
      const found = prev.find((i) => i.product.id === product.id)
      if (found) {
        return prev.map((i) =>
          i.product.id === product.id ? { ...i, qty: Math.min(10, i.qty + qty) } : i
        )
      }
      return [...prev, { product, qty }]
    })
    showToast(`Added ${product.name} to cart ✓`)
  }, [showToast])

  const updateQty = useCallback((id, qty) => {
    setCart((prev) =>
      qty <= 0
        ? prev.filter((i) => i.product.id !== id)
        : prev.map((i) => (i.product.id === id ? { ...i, qty: Math.min(10, qty) } : i))
    )
  }, [])

  const removeItem = useCallback((id) => {
    setCart((prev) => prev.filter((i) => i.product.id !== id))
  }, [])

  const cartCount = cart.reduce((s, i) => s + i.qty, 0)

  const openProduct = (p) => setSelected(p)
  const closeProduct = () => setSelected(null)

  const scrollToProducts = () =>
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <>
      <Navbar cartCount={cartCount} onCartOpen={() => setCartOpen(true)} />
      <main>
        <Hero onShop={scrollToProducts} />
        <Services />
        <Stats />
        <WhyUs />
        <ProductGrid onView={openProduct} onAdd={addToCart} />
        <Testimonials />
      </main>
      <Footer />

      {selected && <ProductModal product={selected} onClose={closeProduct} onAdd={addToCart} />}
      {cartOpen && (
        <Cart items={cart} onClose={() => setCartOpen(false)} onUpdateQty={updateQty} onRemove={removeItem} />
      )}

      {toast && <div className="toast">{toast}</div>}
    </>
  )
}
