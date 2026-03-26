import { Link } from 'react-router-dom'
import './CTA.css'

export default function CTA() {
  return (
    <section className="cta">
      <p className="cta__eyebrow">Rejoignez Wumo</p>
      <h2 className="cta__title">
        Prêt à connecter,<br />travailler, <em>réussir ?</em>
      </h2>
      <p className="cta__sub">
        Inscription gratuite. Paiement sécurisé. 2 400+ prestataires vous attendent.
      </p>
      <div className="cta__actions">
        <Link to="/auth/register">
          <button className="cta__btn cta__btn--primary">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <circle cx="9" cy="9" r="7" stroke="white" strokeWidth="1.5" />
              <path d="M6 9h6M9 6v6" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            Créer mon compte gratuit
          </button>
        </Link>
        <Link to="/explorer">
          <button className="cta__btn cta__btn--outline">
            Voir les services disponibles
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </Link>
      </div>
    </section>
  )
}