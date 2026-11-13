import { EXPERIENCE } from '../data.ts'
import { Icon } from '../components/Icon.tsx'
import { Section } from '../components/Section.tsx'
import { Tags } from '../components/Tags.tsx'

export function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I've worked">
      <ol className="timeline">
        {EXPERIENCE.map((job) => (
          <li key={`${job.role}-${job.organization}-${job.dates}`} className="timeline-item reveal">
            <span className="timeline-dot" aria-hidden="true" />
            <div className="timeline-card">
              <p className="timeline-meta">
                <span>{job.dates}</span>
                {job.location && <span>{job.location}</span>}
              </p>
              <h3>
                {job.role}{' '}
                <span className="timeline-org">
                  at{' '}
                  {job.link ? (
                    <a href={job.link} target="_blank" rel="noopener noreferrer">
                      {job.organization}
                      <Icon name="external" size={14} />
                    </a>
                  ) : (
                    job.organization
                  )}
                </span>
              </h3>
              <ul className="timeline-points">
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              {job.tech && <Tags items={job.tech} label="Tools used" />}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
