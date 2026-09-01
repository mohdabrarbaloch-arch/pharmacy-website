import React from 'react'
import { services } from '../data/products.js'

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-head reveal">
          <span className="section-tag">What We Offer</span>
          <h2 className="section-title">Complete Care, <span className="accent">All in One Place</span></h2>
          <p className="section-sub">From prescription refills to expert health advice — everything you need to stay healthy, without leaving home.</p>
        </div>

        <div className="services-grid">
          {services.map((s, i) => (
            <div className={`service-card reveal delay-${(i % 4) + 1}`} key={s.title}>
              <div className="service-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <a href="#products" className="service-link">Learn more <span>→</span></a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
