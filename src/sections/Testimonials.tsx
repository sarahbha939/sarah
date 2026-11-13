import { TESTIMONIALS } from '../data.ts'
import { Icon } from '../components/Icon.tsx'
import { Section } from '../components/Section.tsx'

export function Testimonials() {
  return (
    <Section id="testimonials" eyebrow="Testimonials" title="What people say">
      <div className="card-grid">
        {TESTIMONIALS.map((t) => (
          <figure key={t.quote} className="card testimonial reveal">
            <Icon name="quote" size={28} className="testimonial-mark" />
            <blockquote>
              <p>{t.quote}</p>
            </blockquote>
            <figcaption>
              <strong>{t.name}</strong>
              <span>{t.role}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  )
}
