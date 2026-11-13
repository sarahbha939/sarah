import { WRITING } from '../data.ts'
import { Icon, type IconName } from '../components/Icon.tsx'
import { Section } from '../components/Section.tsx'

const TYPE_ICONS: Record<string, IconName> = { Article: 'article', Talk: 'mic', Podcast: 'mic' }

export function Writing() {
  return (
    <Section id="writing" eyebrow="Writing & talks" title="Things I've shared">
      <ul className="writing-list">
        {WRITING.map((item) => {
          const content = (
            <>
              <span className="writing-type">
                <Icon name={TYPE_ICONS[item.type] ?? 'pen'} size={16} />
                {item.type}
              </span>
              <span className="writing-title">{item.title}</span>
              <span className="writing-meta">
                {item.venue}  ·  {item.date}
              </span>
              {item.link && <Icon name="arrowRight" size={18} className="writing-arrow" />}
            </>
          )
          return (
            <li key={item.title} className="reveal">
              {item.link ? (
                <a className="writing-item" href={item.link} target="_blank" rel="noopener noreferrer">
                  {content}
                </a>
              ) : (
                <div className="writing-item">{content}</div>
              )}
            </li>
          )
        })}
      </ul>
    </Section>
  )
}
