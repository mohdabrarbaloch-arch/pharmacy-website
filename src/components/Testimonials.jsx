import React from 'react'
import { testimonials } from '../data/products.js'

function Stars({ n }) {
  return (
    <div className="stars" aria-label={`${n} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} className={i <= n ? 'star on' : 'star'}>★</span>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="testimonials" id="reviews">
      <div className="container">
        <div className="section-head reveal">
          <span className="section-tag">Customer Stories</span>
          <h2 className="section-title">Loved by Patients <span className="accent">Across Pakistan</span></h2>
          <p className="section-sub">Real reviews from real customers in Karachi, Lahore, Islamabad and beyond.</p>
        </div>

        <div className="tst-grid">
          {testimonials.map((t, i) => (
            <div className={`tst-card reveal delay-${(i % 4) + 1}`} key={t.name}>
              <Stars n={t.rating} />
              <p className="tst-quote">“{t.quote}”</p>
              <div className="tst-person">
                <img src={t.avatar} alt={t.name} loading="lazy" />
                <div>
                  <strong>{t.name}</strong>
                  <small>{t.role}</small>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="trust reveal">
          <div className="trust-item">
            <span className="trust-icon">🛡️</span>
            <div><strong>DRAP Licensed</strong><small>Drug Regulatory Authority of Pakistan</small></div>
          </div>
          <div className="trust-item">
            <span className="trust-icon">🔐</span>
            <div><strong>SSL Secured</strong><small>256-bit encrypted transactions</small></div>
          </div>
          <div className="trust-item">
            <span className="trust-icon">💳</span>
            <div><strong>Easy Payments</strong><small>JazzCash, Easypaisa, Cards, COD</small></div>
          </div>
          <div className="trust-item">
            <span className="trust-icon">🌡️</span>
            <div><strong>Cold Chain</strong><small>ISO-certified temperature control</small></div>
          </div>
        </div>
      </div>
    </section>
  )
}
