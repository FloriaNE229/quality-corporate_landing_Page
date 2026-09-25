import logo from '../assets/logo.jpg'

export default function Header() {
  return (
    <header className="site">
      <div className="nav">
        <a className="logo" href="#top">
          <img src={logo} alt="Quality Corporate" />
        </a>
        <a className="nav-cta" href="mailto:qualitycorporate@qualitycorporate.com?subject=Contact%20Quality%20Corporate">
          Nous contacter
          <svg className="mail-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="M3 7l9 6 9-6" />
          </svg>
        </a>
      </div>
    </header>
  )
}