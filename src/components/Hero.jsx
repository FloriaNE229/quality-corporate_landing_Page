import { useEffect, useRef } from 'react'
import './Hero.css'

const TRUST_AVATARS = [
  { initials: 'AK', bg: '#1A56DB' },
  { initials: 'FD', bg: '#0E9F6E' },
  { initials: 'OT', bg: '#FF5A1F' },
  { initials: 'MB', bg: '#374151' },
]

function StarRow() {
  return (
    <div className="star-row">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="13" height="13" viewBox="0 0 12 12" fill="#F59E0B">
          <path d="M6 1l1.4 3h3.1l-2.5 1.9.9 3L6 7.1l-2.9 1.8.9-3L1.5 4H4.6z" />
        </svg>
      ))}
    </div>
  )
}

export default function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const el = heroRef.current
    if (!el) return
    const onMove = (e) => {
      const { left, top, width, height } = el.getBoundingClientRect()
      const x = ((e.clientX - left) / width  - 0.5) * 14
      const y = ((e.clientY - top)  / height - 0.5) * 10
      el.style.setProperty('--px', `${x}px`)
      el.style.setProperty('--py', `${y}px`)
    }
    el.addEventListener('mousemove', onMove)
    return () => el.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <section className="hero" ref={heroRef}>
      {/* Left */}
      <div className="hero__left">
        <div className="hero__eyebrow">
          <span className="hero__eyebrow-line" />
          Marketplace N°1 d'Afrique de l'Ouest
        </div>

        <h1 className="hero__title">
          Connecte,<br />
          travaille,<br />
          <em>réussis.</em>
        </h1>

        <p className="hero__sub">
          Trouve le bon prestataire, où que tu sois.
          Services physiques et digitaux au Bénin, Côte d'Ivoire,
          Sénégal, Togo et plus.
        </p>

        <div className="hero__actions">
          <button className="hero__btn hero__btn--blue">
            Trouver un service
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M3.75 9h10.5M9.75 4.5l4.5 4.5-4.5 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button className="hero__btn hero__btn--outline">
            Proposer mes services
          </button>
        </div>

        <div className="hero__trust">
          <div className="trust-avatars">
            {TRUST_AVATARS.map((av) => (
              <div key={av.initials} className="trust-av" style={{ background: av.bg }}>
                {av.initials}
              </div>
            ))}
          </div>
          <p className="trust-text">
            Rejoignez <strong>2 400+ prestataires</strong> actifs
          </p>
        </div>
      </div>

      {/* Right — visual cards */}
      <div className="hero__visual">

        <div className="hcard hcard--main">
          <div className="hcard__img hcard__img--blue">
            <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
              <rect x="12" y="16" width="48" height="40" rx="6" fill="rgba(255,255,255,0.15)" />
              <rect x="20" y="24" width="32" height="4" rx="2" fill="rgba(255,255,255,0.6)" />
              <rect x="20" y="32" width="22" height="4" rx="2" fill="rgba(255,255,255,0.4)" />
              <rect x="20" y="40" width="28" height="4" rx="2" fill="rgba(255,255,255,0.28)" />
            </svg>
          </div>
          <div className="hcard__body">
            <span className="hcard__cat">Développement web</span>
            <p className="hcard__title">Création de site vitrine Laravel + Tailwind professionnel</p>
            <div className="hcard__provider">
              <div className="hcard__av" style={{ background: 'var(--blue)' }}>AK</div>
              <div>
                <div className="hcard__pname">Amara Kouyaté</div>
                <div className="hcard__ploc">Abidjan, Côte d'Ivoire</div>
              </div>
            </div>
            <div className="hcard__footer">
              <div className="hcard__price">25 000 <sub>XOF</sub></div>
              <StarRow />
            </div>
          </div>
        </div>

        <div className="hcard hcard--stat">
          <span className="hcard__stat-num">12k+</span>
          <span className="hcard__stat-label">Commandes réalisées</span>
        </div>

        <div className="hcard hcard--pill">
          <span className="hcard__pill-dot" />
          <div>
            <div className="hcard__pill-title">Paiement sécurisé</div>
            <div className="hcard__pill-sub">MTN · Moov · Wave</div>
          </div>
        </div>

        <div className="hcard hcard--notif">
          <div className="hcard__notif-icon">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 2a8 8 0 100 16A8 8 0 0010 2zm3.5 6l-4 4-2-2" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div>
            <div className="hcard__notif-title">Commande validée</div>
            <div className="hcard__notif-sub">Livraison reçue · il y a 2 min</div>
          </div>
        </div>

      </div>
    </section>
  )
}