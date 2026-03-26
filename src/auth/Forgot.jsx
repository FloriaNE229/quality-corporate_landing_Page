import { useState } from 'react'
import './Auth.css'

export default function Forgot() {
  const [sent, setSent] = useState(false)

  return (
    <div className="auth">

      {/* Left panel */}
      <div className="auth__left">
        <div className="auth__left-content">
          <div className="auth__brand">
            <span className="auth__brand-logo">Wumo</span>
            <span className="auth__brand-dot" />
          </div>
          <h2 className="auth__left-title">
            Ça arrive à<br />tout le monde.
          </h2>
          <p className="auth__left-sub">
            Entrez votre adresse email et nous vous enverrons un lien pour réinitialiser votre mot de passe.
          </p>

          <div className="auth__perks">
            {[
              { icon: '#1A56DB', label: 'Lien envoyé en moins d\'1 minute' },
              { icon: '#0E9F6E', label: 'Lien valable 30 minutes' },
              { icon: '#FF5A1F', label: 'Vérifiez aussi vos spams' },
            ].map((p, i) => (
              <div className="auth__perk" key={i}>
                <span className="auth__perk-dot" style={{ background: p.icon }} />
                {p.label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right panel */}
      <div className="auth__right">
        <div className="auth__form-wrap">

          {!sent ? (
            <>
              <div className="auth__form-head">
                <div className="auth__form-icon">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <rect x="3" y="7" width="22" height="16" rx="3" stroke="#1A56DB" strokeWidth="1.8"/>
                    <path d="M3 12l11 7 11-7" stroke="#1A56DB" strokeWidth="1.8" strokeLinecap="round"/>
                  </svg>
                </div>
                <h1 className="auth__form-title">Mot de passe oublié ?</h1>
                <p className="auth__form-sub">
                  Entrez l'email associé à votre compte
                </p>
              </div>

              <form className="auth__form" onSubmit={e => { e.preventDefault(); setSent(true) }}>
                <div className="auth__field">
                  <label className="auth__label">Adresse email</label>
                  <div className="auth__input-wrap">
                    <svg className="auth__input-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <rect x="2" y="4" width="12" height="9" rx="2" stroke="#6B7280" strokeWidth="1.4"/>
                      <path d="M2 7l6 4 6-4" stroke="#6B7280" strokeWidth="1.4" strokeLinecap="round"/>
                    </svg>
                    <input className="auth__input" type="email" placeholder="vous@exemple.com" />
                  </div>
                </div>

                <button type="submit" className="auth__submit">
                  Envoyer le lien de réinitialisation
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>

                <div className="auth__footer-text">
                  <a href="/auth/login" className="auth__link">
                    ← Retour à la connexion
                  </a>
                </div>
              </form>
            </>
          ) : (
            <div className="auth__success">
              <div className="auth__success-icon">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <circle cx="16" cy="16" r="14" stroke="#0E9F6E" strokeWidth="2"/>
                  <path d="M10 16l4 4 8-8" stroke="#0E9F6E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h2 className="auth__success-title">Email envoyé !</h2>
              <p className="auth__success-sub">
                Vérifiez votre boîte mail. Le lien est valable 30 minutes.
              </p>
              <a href="/auth/login" className="auth__submit" style={{ display: 'inline-flex', textDecoration: 'none', justifyContent: 'center' }}>
                Retour à la connexion
              </a>
            </div>
          )}

        </div>
      </div>

    </div>
  )
}