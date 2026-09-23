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
        </a>
      </div>
    </header>
  )
}