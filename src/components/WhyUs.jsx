import React from 'react'

const POINTS = [
  {
    icon: '🏆',
    title: '100% Genuine Products',
    desc: 'Every medicine is sourced directly from DRAP-approved distributors and manufacturers. No counterfeit, no compromise.'
  },
  {
    icon: '🔒',
    title: 'Private & Secure',
    desc: 'Your health data stays encrypted and confidential. HIPAA-style privacy practices with secure payment gateways.'
  },
  {
    icon: '👨‍⚕️',
    title: 'Pharmacist-Led Care',
    desc: 'A team of licensed pharmacists reviews every prescription order and answers your questions 24/7.'
  },
  {
    icon: '💚',
    title: 'Cold-Chain Logistics',
    desc: 'Temperature-controlled packaging for insulin, vaccines and biologics — delivered fresh, every time.'
  }
]

export default function WhyUs() {
  return (
    <section className="why" id="why-us">
      <div className="container why-inner">
        <div className="why-visual reveal">
          <img
            src="https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=900&q=75&auto=format&fit=crop"
            alt="Modern pharmacy interior with organized shelves"
            className="why-img"
          />
          <div className="why-badge">
            <span className="wb-num">12+</span>
            <span className="wb-label">Years of Trusted<br />Pharmacy Service</span>
          </div>
        </div>

        <div className="why-copy">
          <span className="section-tag reveal">Why Choose MediCare Plus</span>
          <h2 className="section-title reveal">Healthcare That <span className="accent">Puts You First</span></h2>
          <p className="reveal" style={{ color: 'var(--slate-500)', marginBottom: 28 }}>
            We combine the reliability of a neighborhood pharmacy with the convenience of modern e-commerce.
          </p>

          <div className="why-points">
            {POINTS.map((p, i) => (
              <div className={`why-point reveal delay-${(i % 4) + 1}`} key={p.title}>
                <div className="wp-icon">{p.icon}</div>
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
