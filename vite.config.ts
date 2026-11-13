import react from '@vitejs/plugin-react'
import { defineConfig, type Plugin } from 'vite'
import { SITE, THEME } from './src/data.ts'

const escape = (value: string) =>
  value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

/**
 * Fills in the page title, description, link-preview (Open Graph) tags,
 * tab icon and light/dark setup in index.html from SITE and THEME in
 * src/data.ts, so search engines and link previews see them without
 * running any JavaScript.
 */
function portfolioHead(): Plugin {
  return {
    name: 'portfolio-head',
    transformIndexHtml(html) {
      const title = `${SITE.name} | ${SITE.headline}`
      const siteUrl = SITE.url.replace(/\/+$/, '')
      const isFile = /\.(png|jpe?g|gif|svg|ico|webp)$/i.test(SITE.favicon)
      const favicon = isFile
        ? `./${SITE.favicon}`
        : `data:image/svg+xml,${encodeURIComponent(
            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">${SITE.favicon}</text></svg>`,
          )}`

      const tags = [
        `<title>${escape(title)}</title>`,
        `<meta name="description" content="${escape(SITE.description)}" />`,
        `<meta name="author" content="${escape(SITE.name)}" />`,
        `<link rel="icon" href="${escape(favicon)}" />`,
        `<meta property="og:type" content="website" />`,
        `<meta property="og:title" content="${escape(title)}" />`,
        `<meta property="og:description" content="${escape(SITE.description)}" />`,
        `<meta name="twitter:card" content="summary_large_image" />`,
        `<meta name="twitter:title" content="${escape(title)}" />`,
        `<meta name="twitter:description" content="${escape(SITE.description)}" />`,
        `<meta name="theme-color" media="(prefers-color-scheme: light)" content="#fafaf9" />`,
        `<meta name="theme-color" media="(prefers-color-scheme: dark)" content="#0e0f12" />`,
      ]
      // Link previews need full addresses, so these only appear once SITE.url is set
      if (siteUrl) {
        tags.push(
          `<link rel="canonical" href="${escape(siteUrl)}/" />`,
          `<meta property="og:url" content="${escape(siteUrl)}/" />`,
        )
        if (SITE.socialImage) {
          const image = `${siteUrl}/${SITE.socialImage.replace(/^\/+/, '')}`
          tags.push(
            `<meta property="og:image" content="${escape(image)}" />`,
            `<meta name="twitter:image" content="${escape(image)}" />`,
          )
        }
      }

      // Picks light or dark before the page paints, so there's no flash of the wrong colours
      const modeScript = `<script>(function(){var d=document.documentElement,m=${JSON.stringify(
        THEME.mode,
      )};try{var s=localStorage.getItem('portfolio-theme');if(s==='light'||s==='dark')m=s}catch(e){}if(m!=='light'&&m!=='dark')m=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';d.dataset.theme=m})()</script>`

      return html.replace('<!-- portfolio-head -->', [...tags, modeScript].join('\n    '))
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), portfolioHead()],
  // './' makes the built site work from any folder, so the same build
  // runs on Vercel, Netlify, Cloudflare Pages and GitHub Pages
  // (https://username.github.io/repo-name/) without changing anything.
  base: './',
})
