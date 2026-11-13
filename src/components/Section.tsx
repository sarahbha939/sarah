import type { ReactNode } from 'react'

type SectionProps = {
  id: string
  eyebrow: string
  title: string
  intro?: string
  children: ReactNode
}

/** One section of the page, with a small label, a heading, and its content. */
export function Section({ id, eyebrow, title, intro, children }: SectionProps) {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`}>
      <div className="container">
        <header className="section-header reveal">
          <p className="eyebrow">{eyebrow}</p>
          <h2 id={`${id}-title`}>{title}</h2>
          {intro && <p className="section-intro">{intro}</p>}
        </header>
        {children}
      </div>
    </section>
  )
}
