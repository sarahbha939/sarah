import { useEffect, useState } from 'react'

/** Turn a file name from data.ts (like "photo.jpg") into a URL for a file in public/. */
export function asset(path: string): string {
  if (!path) return ''
  // Full links (https://...) and data URLs are used as they are.
  if (/^([a-z]+:|\/\/)/i.test(path)) return path
  return import.meta.env.BASE_URL + path.replace(/^\/+/, '')
}

/**
 * Checks whether a file in public/ really exists, so things like the
 * "Download resume" button only show up once you've added the file.
 */
export function useFileExists(url: string): boolean {
  const [exists, setExists] = useState(false)

  useEffect(() => {
    if (!url) return
    let cancelled = false
    fetch(url, { method: 'HEAD' })
      .then((res) => {
        // The dev server answers missing files with the page itself (HTML),
        // so an HTML answer counts as "not there" too.
        const type = res.headers.get('content-type') ?? ''
        if (!cancelled) setExists(res.ok && !type.includes('text/html'))
      })
      .catch(() => {
        if (!cancelled) setExists(false)
      })
    return () => {
      cancelled = true
    }
  }, [url])

  return url ? exists : false
}
