import { useState } from 'react'
import logo from '../assets/logo.jpg'

export default function Header() {
  const [open, setOpen] = useState(false)

  function closeMenu() {
    setOpen(false)
  }

  return (
    <header className="site">
      <div className="nav">
        <a className="logo" href="#top" onClick={closeMenu}>
          <img src={logo} alt="Quality Corporate" />
        </a>

        <nav className={`links ${open ? 'open' : ''}`}>
          <a href="#apropos" onClick={closeMenu}>À propos</a>
          <a href="#expertise" onClick={closeMenu}>Domaines</a>
          <a href="#presence" onClick={closeMenu}>Présence</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <a className="nav-cta nav-cta-mobile" href="#contact" onClick={closeMenu}>
            Nous contacter
          </a>
        </nav>

        <a className="nav-cta nav-cta-desktop" href="#contact">
          Nous contacter
        </a>

        <button
          className="burger"
          aria-label="Ouvrir le menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}