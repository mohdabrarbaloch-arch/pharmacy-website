import React, { useEffect, useRef, useState } from 'react'

const FEATURES = [
  { icon: '✅', label: 'DRAP Approved Medicines' },
  { icon: '⚡', label: '2–4 Hour Delivery' },
  { icon: '🩺', label: 'Licensed Pharmacists' },
  { icon: '💳', label: 'Secure Payments' }
]

export default function Hero({ onShop }) {
  const [typed, setTyped] = useState('')
  const phrase = 'Your Health, Delivered.'
  const [parallax, setParallax] = useState(0)
  const heroRef = useRef(null)

  // Typewriter effect
  useEffect(() => {
    let i = 0
    let dir = 1
    const id = setInterval(() => {
      setTyped(phrase.slice(0, i))
      i += dir
      if (i === phrase.length + 1) { dir = -1; setTimeout(() => { dir = 1; i = 0 }, 1800) }
      if (i < 0) i = 0
    }, 110)
    return () => clearInterval(id)
  }, [])

  // Parallax on scroll
  useEffect(() => {
    const onScroll = () => {
      if (heroRef.current) setParallax(window.scrollY * 0.25)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section className="hero" id="home" ref={heroRef}>
      <div className="hero-bg" style={{ transform: `translateY(${parallax}px)` }}>
        <div className="hero-blob blob-1"></div>
        <div className="hero-blob blob-2"></div>
        <div className="hero-grid-overlay"></div>
      </div>

      <div className="container hero-inner">
        <div className="hero-copy">
          <span className="hero-pill reveal visible">
            <span className="pulse-dot"></span> Trusted by 250,000+ Pakistanis
          </span>

          <h1 className="hero-title">
            {typed}
            <span className="caret">|</span>
          </h1>

          <p className="hero-sub">
            Genuine medicines, vitamins and health essentials — verified by licensed pharmacists,
            delivered to your door across Pakistan in as little as <strong>2 hours</strong>.
          </p>

          <div className="hero-ctas">
            <button className="btn btn-primary btn-lg" onClick={onShop}>
              Shop Medicines <span aria-hidden>→</span>
            </button>
            <a href="#services" className="btn btn-outline btn-lg">Explore Services</a>
          </div>

          <div className="hero-features">
            {FEATURES.map((f) => (
              <div className="hero-feat" key={f.label}>
                <span>{f.icon}</span> {f.label}
              </div>
            ))}
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-img-wrap">
            <img
              src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=900&q=75&auto=format&fit=crop"
              alt="Pharmacist handing over medicine at a modern pharmacy counter"
              className="hero-img"
            />
            <div className="hero-card card-1">
              <span className="hc-icon">💊</span>
              <div>
                <strong>Order #2841</strong>
                <small>Delivered in 2h 12m</small>
              </div>
            </div>
            <div className="hero-card card-2">
              <span className="hc-icon">🩺</span>
              <div>
                <strong>Rx Verified</strong>
                <small>By Dr. S. Raza</small>
              </div>
            </div>
            <div className="hero-card card-3">
              <span className="hc-icon">⭐</span>
              <div>
                <strong>4.9 / 5</strong>
                <small>12,400+ reviews</small>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-wave">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0,40 C240,90 480,0 720,30 C960,60 1200,10 1440,45 L1440,80 L0,80 Z" fill="#f8fafc"></path>
        </svg>
      </div>
    </section>
  )
}
