import { useEffect, useState } from 'react'

/**
 * Scroll-reveal: adds .visible to .reveal elements as they enter the viewport.
 * Progressive enhancement — if IntersectionObserver is unavailable, everything
 * is revealed immediately (content is never permanently hidden).
 */
export default function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    if (els.length === 0) return

    const show = (el) => el.classList.add('visible')

    if (!('IntersectionObserver' in window)) {
      els.forEach(show)
      return
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            show(e.target)
            obs.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -30px 0px' }
    )
    els.forEach((el) => obs.observe(el))

    // Safety: reveal anything already fully above the fold or in viewport
    // (observer may miss elements rendered above the initial viewport).
    const immediate = () => {
      const vh = window.innerHeight || document.documentElement.clientHeight
      els.forEach((el) => {
        if (!el.classList.contains('visible')) {
          const r = el.getBoundingClientRect()
          if (r.top < vh * 0.98 && r.bottom > 0) show(el)
        }
      })
    }
    immediate()
    window.addEventListener('resize', immediate, { passive: true })

    return () => {
      obs.disconnect()
      window.removeEventListener('resize', immediate)
    }
  }, [])
}

/**
 * Animated number counter — counts from 0 to target when `active` flips true.
 */
export function useCountUp(target, active, duration = 1800) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (!active) return
    let raf
    const start = performance.now()
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setValue(Math.round(target * eased))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, target, duration])
  return value
}
