// ==============================================================
//  This file puts the page together from the sections in
//  src/sections/. Your content lives in src/data.ts, so you can
//  build your whole site without touching this file.
//
//  To REORDER sections, move lines in the SECTIONS list below.
//  To ADD a section, make a new file in src/sections/ (copy one
//  like Skills.tsx), then add it to the list.
// ==============================================================

import type { ComponentType } from 'react'
import {
  ABOUT,
  CERTIFICATIONS,
  EXPERIENCE,
  PROJECTS,
  SITE,
  SKILLS,
  TESTIMONIALS,
  THEME,
  WRITING,
} from './data.ts'
import { Nav } from './components/Nav.tsx'
import { useColorMode } from './lib/theme.ts'
import { useScrollReveal } from './lib/scroll.ts'
import { About } from './sections/About.tsx'
import { Certifications } from './sections/Certifications.tsx'
import { Contact } from './sections/Contact.tsx'
import { Experience } from './sections/Experience.tsx'
import { Footer } from './sections/Footer.tsx'
import { Hero } from './sections/Hero.tsx'
import { Projects } from './sections/Projects.tsx'
import { Skills } from './sections/Skills.tsx'
import { Testimonials } from './sections/Testimonials.tsx'
import { Writing } from './sections/Writing.tsx'

type SectionEntry = {
  id: string // must match the id the section uses, so the menu can jump to it
  label: string // the name in the menu
  show: boolean // empty sections are hidden from the page and the menu
  inMenu: boolean // true to list it in the top menu (it's on the page either way)
  Component: ComponentType
}

const SECTIONS: SectionEntry[] = [
  { id: 'about', label: 'About', show: ABOUT.paragraphs.length > 0 || ABOUT.education.length > 0, inMenu: true, Component: About },
  { id: 'skills', label: 'Skills', show: SKILLS.length > 0, inMenu: false, Component: Skills },
  { id: 'experience', label: 'Experience', show: EXPERIENCE.length > 0, inMenu: true, Component: Experience },
  { id: 'projects', label: 'Projects', show: PROJECTS.length > 0, inMenu: true, Component: Projects },
  { id: 'awards', label: 'Awards', show: CERTIFICATIONS.length > 0, inMenu: false, Component: Certifications },
  { id: 'testimonials', label: 'Testimonials', show: TESTIMONIALS.length > 0, inMenu: false, Component: Testimonials },
  { id: 'writing', label: 'Writing', show: WRITING.length > 0, inMenu: false, Component: Writing },
  { id: 'contact', label: 'Contact', show: true, inMenu: true, Component: Contact },
]

export default function App() {
  const { mode, toggle } = useColorMode(THEME.mode)
  useScrollReveal()

  const visible = SECTIONS.filter((s) => s.show)
  const menu = visible.filter((s) => s.inMenu).map(({ id, label }) => ({ id, label }))

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Nav name={SITE.name} items={menu} mode={mode} onToggleMode={toggle} />
      <main id="main" tabIndex={-1}>
        <Hero />
        {visible.map(({ id, Component }) => (
          <Component key={id} />
        ))}
      </main>
      <Footer />
    </>
  )
}
