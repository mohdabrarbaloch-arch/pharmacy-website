import React, { useState } from 'react'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const subscribe = (e) => {
    e.preventDefault()
    if (email.trim()) {
      setSubscribed(true)
      setEmail('')
      setTimeout(() => setSubscribed(false), 3500)
    }
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="f-brand">
            <a href="#home" className="brand brand-light">
              <span className="brand-icon">⚕️</span>
              <span className="brand-name">MediCare<em>Plus</em></span>
            </a>
            <p>Pakistan's trusted online pharmacy. Genuine medicines, expert care, delivered fast — since 2013.</p>
            <div className="f-social">
              <a href="#" aria-label="Facebook"><span>f</span></a>
              <a href="#" aria-label="Instagram"><span>◎</span></a>
              <a href="#" aria-label="X / Twitter"><span>𝕏</span></a>
              <a href="#" aria-label="WhatsApp"><span>✆</span></a>
            </div>
          </div>

          <div className="f-col">
            <h4>Quick Links</h4>
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#products">Shop Products</a>
            <a href="#reviews">Reviews</a>
            <a href="#why-us">Why Us</a>
          </div>

          <div className="f-col">
            <h4>Contact</h4>
            <p>📍 12-A Main Boulevard, Gulberg III, Lahore, Pakistan</p>
            <p>📞 +92 300 1234567</p>
            <p>✉️ care@medicareplus.pk</p>
            <p>🕘 Open 24/7 · Delivery 8am–12am</p>
          </div>

          <div className="f-col f-news">
            <h4>Health Tips Newsletter</h4>
            <p>Get weekly health tips, medicine alerts and exclusive offers.</p>
            <form onSubmit={subscribe} className="news-form">
              <input
                type="email"
                required
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-label="Email address"
              />
              <button type="submit" className="btn btn-primary">Subscribe</button>
            </form>
            {subscribed && <p className="news-ok">✅ Subscribed! Welcome to the MediCare Plus family.</p>}
          </div>
        </div>

        <div className="f-bottom">
          <p>© 2026 MediCare Plus (Pvt) Ltd. All rights reserved. DRAP License #DR-2847-PK.</p>
          <div className="f-pay">
            <span>JazzCash</span><span>Easypaisa</span><span>Visa</span><span>Mastercard</span><span>COD</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
