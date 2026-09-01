import React, { useEffect, useState } from 'react'

export default function Navbar({ cartCount, onCartOpen }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Products', href: '#products' },
    { label: 'Reviews', href: '#reviews' }
  ]

  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="nav-inner container">
        <a href="#home" className="brand" aria-label="MediCare Plus home">
          <span className="brand-icon">⚕️</span>
          <span className="brand-name">MediCare<em>Plus</em></span>
        </a>

        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>
              {l.label}
            </a>
          ))}
          <button className="btn btn-primary nav-cta" onClick={() => { setMenuOpen(false); document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' }) }}>
            Shop Now
          </button>
        </nav>

        <div className="nav-actions">
          <button className="cart-btn" onClick={onCartOpen} aria-label={`Open cart, ${cartCount} items`}>
            <span className="cart-icon">🛒</span>
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </button>
          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            <span className={`hb ${menuOpen ? 'hb-x' : ''}`}></span>
          </button>
        </div>
      </div>
    </header>
  )
}
