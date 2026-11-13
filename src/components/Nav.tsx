import { useEffect, useState } from 'react'
import type { ColorMode } from '../lib/theme.ts'
import { useActiveSection, useScrolled } from '../lib/scroll.ts'
import { Icon } from './Icon.tsx'

export type NavItem = { id: string; label: string }

type NavProps = {
  name: string
  items: NavItem[]
  mode: ColorMode
  onToggleMode: () => void
}

/** The menu bar that stays at the top of the screen. */
export function Nav({ name, items, mode, onToggleMode }: NavProps) {
  const [open, setOpen] = useState(false)
  const scrolled = useScrolled()
  const active = useActiveSection(items.map((item) => item.id))

  // Close the phone menu with the Escape key
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const nextMode = mode === 'dark' ? 'light' : 'dark'

  return (
    <header className={`nav ${scrolled ? 'is-scrolled' : ''} ${open ? 'is-open' : ''}`}>
      <div className="container nav-inner">
        <a className="nav-brand" href="#top" onClick={() => setOpen(false)}>
          {name}
        </a>

        <nav id="site-menu" className="nav-menu" aria-label="Main">
          <ul>
            {items.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={active === item.id ? 'is-active' : undefined}
                  aria-current={active === item.id ? 'true' : undefined}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav-actions">
          <button
            type="button"
            className="icon-button"
            onClick={onToggleMode}
            aria-label={`Switch to ${nextMode} mode`}
            title={`Switch to ${nextMode} mode`}
          >
            <Icon name={mode === 'dark' ? 'sun' : 'moon'} />
          </button>
          <button
            type="button"
            className="icon-button nav-toggle"
            aria-expanded={open}
            aria-controls="site-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((o) => !o)}
          >
            <Icon name={open ? 'close' : 'menu'} />
          </button>
        </div>
      </div>
    </header>
  )
}
