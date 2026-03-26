import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const isAuth = location.pathname.startsWith('/auth')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__bar" />

      <Link to="/" className="nav__logo">
        Wumo
        <span className="nav__logo-dot" />
      </Link>

      {!isAuth && (
        <div className="nav__links">
          <Link to="/explorer">Services</Link>
          <a href="#how">Comment ça marche</a>
          <Link to="/prestataires">Prestataires</Link>
          <a href="#">Aide</a>
        </div>
      )}

      <div className="nav__right">
        <Link to="/auth/login">
          <button className="btn btn--ghost">Connexion</button>
        </Link>
        <Link to="/auth/register">
          <button className="btn btn--blue">S'inscrire — c'est gratuit</button>
        </Link>
      </div>
    </nav>
  )
}