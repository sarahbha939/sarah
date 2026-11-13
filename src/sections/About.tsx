import { ABOUT } from '../data.ts'
import { Icon } from '../components/Icon.tsx'
import { Section } from '../components/Section.tsx'

export function About() {
  return (
    <Section id="about" eyebrow="About" title="A little about me">
      <div className="about-grid">
        <div className="about-main">
          <div className="about-text reveal">
            {ABOUT.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          {ABOUT.education.length > 0 && (
            <div className="education reveal">
              <h3 className="education-heading">Education</h3>
              <ul className="education-list">
                {ABOUT.education.map((school) => (
                  <li key={`${school.school}-${school.dates}`} className="education-item">
                    <span className="card-icon" aria-hidden="true">
                      <Icon name="graduation" />
                    </span>
                    <div>
                      <p className="education-school">{school.school}</p>
                      <p className="card-subtitle">{school.degree}</p>
                      <p className="card-meta">{[school.dates, school.location].filter(Boolean).join('  ·  ')}</p>
                      {school.details && school.details.length > 0 && (
                        <ul className="card-list">
                          {school.details.map((d) => (
                            <li key={d}>{d}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {ABOUT.facts.length > 0 && (
          <dl className="facts reveal">
            {ABOUT.facts.map((fact) => (
              <div key={fact.label} className="fact">
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        )}
      </div>
    </Section>
  )
}
