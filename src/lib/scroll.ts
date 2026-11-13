import { useEffect, useState } from 'react'

/** Fades sections in as you scroll to them. Anything with class="reveal" gets it. */
export function useScrollReveal() {
  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>('.reveal:not(.is-visible)')
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced || !('IntersectionObserver' in window)) {
      items.forEach((el) => el.classList.add('is-visible'))
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 },
    )
    items.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

/** Returns the id of the section currently in the middle of the screen, to highlight it in the menu. */
export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState('')
  const key = ids.join(',')

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    for (const id of key.split(',')) {
      const el = id && document.getElementById(id)
      if (el) observer.observe(el)
    }
    return () => observer.disconnect()
  }, [key])

  return active
}

/** True once the page has scrolled a little, so the menu bar can show its border. */
export function useScrolled(offset = 8) {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > offset)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [offset])
  return scrolled
}
