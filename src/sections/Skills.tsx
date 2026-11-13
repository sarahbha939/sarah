import { SKILLS } from '../data.ts'
import { Section } from '../components/Section.tsx'
import { Tags } from '../components/Tags.tsx'

export function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="What I work with">
      <div className="card-grid">
        {SKILLS.map((group) => (
          <div key={group.group} className="card reveal">
            <h3>{group.group}</h3>
            <Tags items={group.skills} label={`${group.group} skills`} />
          </div>
        ))}
      </div>
    </Section>
  )
}
