import { CERTIFICATIONS } from '../data.ts'
import { Icon } from '../components/Icon.tsx'
import { Section } from '../components/Section.tsx'

export function Certifications() {
  return (
    <Section id="awards" eyebrow="Certifications & awards" title="Recognition">
      <ul className="card-grid plain-list">
        {CERTIFICATIONS.map((cert) => (
          <li key={`${cert.name}-${cert.year}`} className="card card-row reveal">
            <span className="card-icon" aria-hidden="true">
              <Icon name="award" />
            </span>
            <div>
              <h3>
                {cert.link ? (
                  <a href={cert.link} target="_blank" rel="noopener noreferrer">
                    {cert.name}
                  </a>
                ) : (
                  cert.name
                )}
              </h3>
              <p className="card-meta">
                {cert.issuer}  ·  {cert.year}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  )
}
