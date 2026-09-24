import logo from '../assets/logo.jpg'

export default function Header() {
  return (
    <header className="site">
      <div className="nav">
        <img className="nav-logo" src={logo} alt="Quality Corporate" />
        <a className="nav-cta" href="mailto:qualitycorporate@qualitycorporate.com?subject=Contact%20Quality%20Corporate">
          Nous contacter
        </a>
      </div>
    </header>
  )
}