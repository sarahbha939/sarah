import { useState } from 'react'
import { PROJECTS } from '../data.ts'
import type { Project } from '../types.ts'
import { Icon } from '../components/Icon.tsx'
import { Section } from '../components/Section.tsx'
import { Tags } from '../components/Tags.tsx'
import { asset } from '../lib/assets.ts'

export function Projects() {
  // Featured projects go first, then the rest in the order you wrote them
  const sorted = [...PROJECTS].sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)))

  return (
    <Section id="projects" eyebrow="Projects" title="Things I've built">
      <div className="project-grid">
        {sorted.map((project) => (
          <ProjectCard key={`${project.title}-${project.year}`} project={project} />
        ))}
      </div>
    </Section>
  )
}

function ProjectCard({ project }: { project: Project }) {
  const [imageOk, setImageOk] = useState(Boolean(project.image))

  return (
    <article className={`project-card reveal ${project.featured ? 'is-featured' : ''}`}>
      <div className="project-media">
        {imageOk && project.image ? (
          <img
            src={asset(project.image)}
            alt={`Screenshot of ${project.title}`}
            loading="lazy"
            onError={() => setImageOk(false)}
          />
        ) : (
          // No picture? A coloured banner with the title fills the space instead.
          <div className="project-placeholder" aria-hidden="true">
            <Icon name="code" size={28} />
            <span>{project.title}</span>
          </div>
        )}
      </div>

      <div className="project-body">
        <p className="project-meta">
          {project.featured && (
            <span className="featured-badge">
              <Icon name="star" size={14} />
              Featured
            </span>
          )}
          <span>{project.year}</span>
        </p>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <Tags items={project.tags} label="Built with" />
        {(project.live || project.source) && (
          <div className="project-links">
            {project.live && (
              <a href={project.live} target="_blank" rel="noopener noreferrer">
                <Icon name="external" size={16} />
                Live demo<span className="sr-only"> of {project.title}</span>
              </a>
            )}
            {project.source && (
              <a href={project.source} target="_blank" rel="noopener noreferrer">
                <Icon name="github" size={16} />
                Source code<span className="sr-only"> for {project.title}</span>
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  )
}
