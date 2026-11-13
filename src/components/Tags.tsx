/** A row of small tags, used for skills and project tools. */
export function Tags({ items, label }: { items: string[]; label?: string }) {
  if (items.length === 0) return null
  return (
    <ul className="tags" aria-label={label}>
      {items.map((item) => (
        <li key={item} className="tag">
          {item}
        </li>
      ))}
    </ul>
  )
}
