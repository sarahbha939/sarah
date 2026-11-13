import { useState } from 'react'
import { SITE, SOCIALS } from '../data.ts'
import { Icon } from '../components/Icon.tsx'
import { SocialLinks } from '../components/SocialLinks.tsx'
import { asset, useFileExists } from '../lib/assets.ts'

/** The top of the page: who you are, at a glance. */
export function Hero() {
  const [photoOk, setPhotoOk] = useState(Boolean(SITE.photo))
  // The resume button only appears once your PDF is in public/
  const resumeUrl = asset(SITE.resume)
  const hasResume = useFileExists(resumeUrl)

  return (
    <section id="top" className="hero" aria-label="Introduction">
      <div className="container hero-inner">
        <div className="hero-text reveal">
          {SITE.availability && (
            <p className="availability">
              <span className="pulse" aria-hidden="true" />
              {SITE.availability}
            </p>
          )}
          <h1>
            <span className="hero-hello">Hi, I'm</span> {SITE.name}
          </h1>
          <p className="hero-headline">{SITE.headline}</p>
          {SITE.pitch && <p className="hero-pitch">{SITE.pitch}</p>}
          {SITE.location && (
            <p className="hero-location">
              <Icon name="location" size={18} />
              {SITE.location}
            </p>
          )}

          <div className="hero-actions">
            {hasResume && (
              <a className="button button-primary" href={resumeUrl} download>
                <Icon name="download" size={18} />
                Download resume
              </a>
            )}
            <a className="button button-secondary" href="#contact">
              Get in touch
              <Icon name="arrowRight" size={18} />
            </a>
          </div>

          <SocialLinks links={SOCIALS} />
        </div>

        {photoOk && (
          <div className="hero-photo reveal">
            <img
              src={asset(SITE.photo)}
              alt={`Portrait of ${SITE.name}`}
              width={400}
              height={400}
              onError={() => setPhotoOk(false)}
            />
          </div>
        )}
      </div>
    </section>
  )
}
