import type { SocialLink } from '../types.ts'
import { Icon } from './Icon.tsx'

/** Round icon buttons for your links. The label is read out by screen readers and shown on hover. */
export function SocialLinks({ links, className = '' }: { links: SocialLink[]; className?: string }) {
  if (links.length === 0) return null
  return (
    <ul className={`socials ${className}`}>
      {links.map((link) => {
        const external = /^https?:/i.test(link.url)
        return (
          <li key={link.url}>
            <a
              className="icon-button"
              href={link.url}
              aria-label={link.label}
              title={link.label}
              target={external ? '_blank' : undefined}
              rel={external ? 'noopener noreferrer' : undefined}
            >
              <Icon name={link.icon} />
            </a>
          </li>
        )
      })}
    </ul>
  )
}
