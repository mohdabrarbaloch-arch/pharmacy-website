import React, { useEffect, useRef, useState } from 'react'
import { useCountUp } from '../hooks/useReveal.js'

function StatItem({ value, suffix, label, active }) {
  const count = useCountUp(value, active)
  return (
    <div className="stat">
      <div className="stat-num">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="stat-label">{label}</div>
    </div>
  )
}

/**
 * Activate the counters when the stats section enters the viewport.
 * Uses IntersectionObserver when available, with a scroll/resize
 * bounding-rect fallback so the count-up always fires.
 */
export default function Stats() {
  const ref = useRef(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const trigger = () => {
      const r = el.getBoundingClientRect()
      const vh = window.innerHeight || document.documentElement.clientHeight
      if (r.top < vh * 0.9 && r.bottom > 0) {
        setActive(true)
        cleanup()
      }
    }

    let obs = null
    if ('IntersectionObserver' in window) {
      obs = new IntersectionObserver(
        ([e]) => {
          if (e.isIntersecting) {
            setActive(true)
            cleanup()
          }
        },
        { threshold: 0.25 }
      )
      obs.observe(el)
    }

    // Fallback + safety net (also catches sections already in view on mount)
    window.addEventListener('scroll', trigger, { passive: true })
    window.addEventListener('resize', trigger, { passive: true })
    trigger()

    function cleanup() {
      if (obs) { obs.disconnect(); obs = null }
      window.removeEventListener('scroll', trigger)
      window.removeEventListener('resize', trigger)
    }

    return cleanup
  }, [])

  return (
    <section className="stats" ref={ref}>
      <div className="container stats-grid">
        <StatItem value={250} suffix="K+" label="Happy Customers" active={active} />
        <StatItem value={12000} suffix="+" label="Products Delivered" active={active} />
        <StatItem value={150} suffix="+" label="Cities Covered" active={active} />
        <StatItem value={98} suffix="%" label="On-Time Delivery" active={active} />
      </div>
    </section>
  )
}
