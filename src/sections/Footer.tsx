import { Icon } from '../components/Icon.tsx'

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <a className="back-to-top" href="#top">
          Back to top
          <Icon name="arrowUp" size={16} />
        </a>
      </div>
    </footer>
  )
}
