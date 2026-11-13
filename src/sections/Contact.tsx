import { useState } from 'react'
import { CONTACT, SITE, SOCIALS } from '../data.ts'
import { Icon } from '../components/Icon.tsx'
import { SocialLinks } from '../components/SocialLinks.tsx'

export function Contact() {
  const [copied, setCopied] = useState(false)

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(SITE.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${SITE.email}`
    }
  }

  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <div className="container">
        <div className="contact-card reveal">
          <p className="eyebrow">Contact</p>
          <h2 id="contact-title">{CONTACT.heading}</h2>
          <p className="contact-message">{CONTACT.message}</p>
          {SITE.email && (
            <div className="hero-actions contact-actions">
              <a className="button button-primary" href={`mailto:${SITE.email}`}>
                <Icon name="mail" size={18} />
                Email me
              </a>
              <button type="button" className="button button-secondary" onClick={copyEmail}>
                <Icon name={copied ? 'check' : 'copy'} size={18} />
                {copied ? 'Copied!' : SITE.email}
              </button>
              <span className="sr-only" aria-live="polite">
                {copied ? 'Email address copied' : ''}
              </span>
            </div>
          )}
          <SocialLinks links={SOCIALS} className="contact-socials" />
        </div>
      </div>
    </section>
  )
}
