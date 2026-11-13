// ==============================================================
//  BUILD A PORTFOLIO
//  This is the only file you need to edit to make the site yours.
//
//  HOW IT WORKS
//  - Change the text inside the quotes. Keep the quotes and commas.
//  - Save the file. If the site is running (pnpm dev), the page in
//    your browser updates right away.
//  - On GitHub, click "Commit changes" and your live site updates
//    on its own within a minute or so.
//  - Anything after // is a note to you. The code ignores it.
//
//  HIDING A SECTION
//  Every list below can be emptied, like  export const TESTIMONIALS: Testimonial[] = []
//  An empty section disappears from the page and from the menu.
//
//  PRIVACY: this site is public. Do not include your phone number,
//  home address, or student number here or in your resume file.
// ==============================================================

import type {
  About,
  Certification,
  Contact,
  Job,
  Project,
  Site,
  SkillGroup,
  SocialLink,
  Testimonial,
  Theme,
  Writing,
} from './types.ts'

// --------------------------------------------------------------
// 1. THE BASICS
// This fills in the top of the page (the "hero"), the browser
// tab, and the preview card people see when you share your link.
// --------------------------------------------------------------
export const SITE: Site = {
  name: 'Your Name',
  headline: 'Computer Science student & aspiring software developer', // what you do, in a few words
  pitch:
    'I build friendly, reliable web apps and love turning messy problems into simple tools. Currently looking for my next internship.', // 1 or 2 sentences
  location: 'Waterloo, ON',
  availability: 'Open to summer 2027 internships', // or "" to hide the badge
  photo: 'photo.jpg', // a headshot in the public/ folder, or "" to hide it
  resume: 'resume.pdf', // your resume as a PDF in public/ (powers the "Resume" button)
  email: 'you@example.com', // used by the "Get in touch" and "Email me" buttons

  // For search engines and link previews (LinkedIn, Slack, iMessage, ...)
  url: '', // your live site address once it's online, e.g. "https://yourname.dev"
  description: 'Portfolio of Your Name: projects, experience, and how to get in touch.',
  socialImage: 'og-image.png', // a 1200 x 630 picture in public/ shown in link previews
  favicon: '👋', // the little icon in the browser tab: an emoji, or a file in public/ like "favicon.png"
}

// --------------------------------------------------------------
// 2. YOUR LOOK
// Colours are hex codes. Pick one you like at https://coolors.co
// --------------------------------------------------------------
export const THEME: Theme = {
  accent: '#E4572E', // buttons, links and highlights in light mode
  accentDark: '#FF7A50', // the same colour, a bit brighter, for dark mode
  mode: 'system', // "system" follows the visitor's device, or force "light" / "dark"
  font: 'sans', // "sans", "serif", or "mono"
}

// --------------------------------------------------------------
// 3. YOUR LINKS
// Shown in the hero and the contact section.
// icon can be: "github", "linkedin", "x", "instagram", "youtube",
// "bluesky", "mail", or "website". Only keep what you want public.
// --------------------------------------------------------------
export const SOCIALS: SocialLink[] = [
  { label: 'GitHub', url: 'https://github.com/your-username', icon: 'github' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/your-name', icon: 'linkedin' },
  { label: 'Email', url: 'mailto:you@example.com', icon: 'mail' },
]

// --------------------------------------------------------------
// 4. ABOUT YOU (AND YOUR EDUCATION)
// 2 or 3 short paragraphs in your own voice: who you are, what you
// study or do, what you're aiming for, and one strength.
// "facts" are quick details shown next to it. Use [] to hide them.
// "education" shows under your paragraphs, one {...} block per school.
//   "details" is optional: GPA, awards, or relevant courses.
//   Use [] to hide it.
// --------------------------------------------------------------
export const ABOUT: About = {
  paragraphs: [
    "I'm a third-year Computer Science student who likes building things people actually use. Most of my projects start with a small annoyance in my own life and end with a tool my friends ask to borrow.",
    "Outside of class I lead workshops for my school's computing club, and I've spent the last two summers working on internal tools and data dashboards. I'm happiest on teams that ship often and talk to their users.",
  ],
  facts: [
    { label: 'Based in', value: 'Waterloo, ON' },
    { label: 'Studying', value: 'BSc Computer Science' },
    { label: 'Focus', value: 'Web apps & data' },
    { label: 'Fun fact', value: 'Solves a Rubik’s cube in under 20 s' },
  ],
  education: [
    {
      school: 'Your University',
      degree: 'Bachelor of Science in Computer Science',
      location: 'Waterloo, ON',
      dates: '2024 to 2028',
      details: ["Dean's List, 2025", 'Courses: Data Structures, Databases, Human-Computer Interaction'],
    },
  ],
}

// --------------------------------------------------------------
// 5. SKILLS
// Group them however makes sense. Each skill becomes a small tag.
// --------------------------------------------------------------
export const SKILLS: SkillGroup[] = [
  { group: 'Languages', skills: ['TypeScript', 'JavaScript', 'Java', 'SQL', 'HTML & CSS'] },
  { group: 'Frameworks & tools', skills: ['React', 'Node.js', 'Vite', 'Git', 'PostgreSQL', 'Figma'] },
  { group: 'Professional', skills: ['Public speaking', 'Project management', 'Technical writing', 'Mentoring'] },
]

// --------------------------------------------------------------
// 6. EXPERIENCE
// Newest first. Each {...} block is one entry. To add another, copy
// a whole block (including the comma after it) and paste it below.
//
// Write each point like this:  action verb + what you did + result.
// Example: "Organized a 40-person workshop, with 90% positive feedback"
// Include jobs, internships, volunteering, and leadership roles.
// "link" and "tech" are optional. Delete those lines if you don't need them.
// --------------------------------------------------------------
export const EXPERIENCE: Job[] = [
  {
    role: 'Software Developer Intern',
    organization: 'Company Name',
    link: 'https://example.com',
    location: 'Toronto, ON (hybrid)',
    dates: 'May 2026 to Aug 2026',
    points: [
      'Built a React dashboard that cut weekly reporting time from 3 hours to 20 minutes',
      'Wrote API tests that caught 12 bugs before release',
    ],
    tech: ['React', 'TypeScript', 'Node.js'],
  },
  {
    role: 'Workshop Lead',
    organization: 'Your School Computing Club',
    location: 'Waterloo, ON',
    dates: 'Sep 2025 to Present',
    points: [
      'Planned and taught 8 beginner web development workshops for 40+ students each',
      'Grew club membership by 35% in one term',
    ],
  },
  {
    role: 'Data Analyst Intern',
    organization: 'Another Organization',
    location: 'Remote',
    dates: 'May 2025 to Aug 2025',
    points: ['Cleaned and analysed survey data from 2,000 customers and presented findings to the leadership team'],
    tech: ['SQL', 'Excel'],
  },
]

// --------------------------------------------------------------
// 7. PROJECTS
// Show your best 3 to 6. For each, say the problem, what you did,
// and the outcome. "tags" are the tools or topics you used.
// - image:    a picture in public/ (a 16:9 screenshot works best). Leave it
//             out and a coloured banner with the title is shown instead.
// - live:     a link to try it. source: a link to the code. Both optional.
// - featured: true puts it first, in a bigger card. Use it for 1 or 2.
// --------------------------------------------------------------
export const PROJECTS: Project[] = [
  {
    title: 'Study Buddy',
    year: '2026',
    description:
      'A study planner that turns a course outline into a week-by-week schedule. Used by 300+ students during exam season.',
    image: 'project.png',
    tags: ['React', 'TypeScript', 'Supabase'],
    live: 'https://example.com',
    source: 'https://github.com/your-username/study-buddy',
    featured: true,
  },
  {
    title: 'Campus Eats Map',
    year: '2025',
    description: 'An interactive map of cheap food near campus, with filters for price, hours and dietary needs.',
    tags: ['JavaScript', 'Leaflet', 'Open data'],
    live: 'https://example.com',
    source: 'https://github.com/your-username/campus-eats',
  },
  {
    title: 'Budget Bot',
    year: '2025',
    description: 'A chat bot that sorts your bank transactions into categories and sends a weekly spending summary.',
    tags: ['Node.js', 'SQL'],
    source: 'https://github.com/your-username/budget-bot',
  },
  {
    title: 'Research Poster: Transit Delays',
    year: '2024',
    description: 'Analysed a year of city bus data to find which routes are late most often, and why.',
    tags: ['Data analysis', 'Research'],
  },
]

// --------------------------------------------------------------
// 8. EXTRAS (OPTIONAL)
// Nice to have, but not required. Use [] to hide any of them.
// --------------------------------------------------------------

// Certifications and awards. "link" is optional.
export const CERTIFICATIONS: Certification[] = [
  { name: 'AWS Certified Cloud Practitioner', issuer: 'Amazon Web Services', year: '2026', link: 'https://example.com' },
  { name: 'Hackathon Winner, Best Use of Data', issuer: 'Your City Hacks', year: '2025' },
]

// Quotes from professors, managers, or teammates.
// Always ask permission before quoting someone.
export const TESTIMONIALS: Testimonial[] = [
  {
    quote: 'Your Name picked up our codebase in a week and shipped features our users still talk about.',
    name: 'Manager Name',
    role: 'Engineering Manager, Company Name',
  },
  {
    quote: 'One of the clearest communicators in my class. Their final project was a highlight of the term.',
    name: 'Professor Name',
    role: 'Professor, Your University',
  },
]

// Articles, talks, research posters, podcasts, or videos. "link" is optional.
export const WRITING: Writing[] = [
  {
    title: 'What I learned shipping my first app to real users',
    type: 'Article',
    venue: 'Personal blog',
    date: 'Mar 2026',
    link: 'https://example.com',
  },
  { title: 'Intro to React for absolute beginners', type: 'Talk', venue: 'Computing Club workshop', date: 'Oct 2025' },
]

// --------------------------------------------------------------
// 9. CONTACT
// The last section. The big button emails SITE.email.
// --------------------------------------------------------------
export const CONTACT: Contact = {
  heading: "Let's work together",
  message:
    "I'm looking for internships and new-grad roles in software development. The best way to reach me is by email, and I usually reply within a day.",
}
