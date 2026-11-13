// ==============================================================
//  The shapes of the data in data.ts.
//  You don't need to edit this file. It lets your editor warn you
//  about typos (like "orgnization") before you even run the site.
// ==============================================================

/** Icons you can use for links. See src/components/Icon.tsx for the full list. */
export type LinkIcon = 'github' | 'linkedin' | 'x' | 'instagram' | 'youtube' | 'bluesky' | 'mail' | 'website'

export type Site = {
  name: string
  headline: string
  pitch: string
  location: string
  availability: string
  photo: string
  resume: string
  email: string
  url: string
  description: string
  socialImage: string
  favicon: string
}

export type Theme = {
  accent: string
  accentDark: string
  mode: 'system' | 'light' | 'dark'
  font: 'sans' | 'serif' | 'mono'
}

export type SocialLink = { label: string; url: string; icon: LinkIcon }

export type Fact = { label: string; value: string }


export type SkillGroup = { group: string; skills: string[] }

export type Job = {
  role: string
  organization: string
  link?: string
  location?: string
  dates: string
  points: string[]
  tech?: string[]
}

export type Project = {
  title: string
  year: string
  description: string
  image?: string
  tags: string[]
  live?: string
  source?: string
  featured?: boolean
}

export type School = {
  school: string
  degree: string
  location?: string
  dates: string
  details?: string[]
}

export type Certification = { name: string; issuer: string; year: string; link?: string }

export type Testimonial = { quote: string; name: string; role: string }

export type Writing = {
  title: string
  type: 'Article' | 'Talk' | 'Poster' | 'Podcast' | 'Video' | (string & {})
  venue: string
  date: string
  link?: string
}

export type Contact = { heading: string; message: string }

export type About = { paragraphs: string[]; facts: Fact[]; education: School[] }
