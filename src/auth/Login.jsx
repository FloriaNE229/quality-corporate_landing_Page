import { useState } from 'react'
import './Auth.css'

export default function Login() {
  const [show, setShow] = useState(false)

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
            Le talent africain<br />à portée de clic.
          </h2>
          <p className="auth__left-sub">
            Des milliers de prestataires vérifiés vous attendent au Bénin, Côte d'Ivoire, Sénégal et plus.
          </p>

          <div className="auth__stats">
            <div className="auth__stat">
              <span className="auth__stat-num">2 400+</span>
              <span className="auth__stat-label">Prestataires</span>
            </div>
            <div className="auth__stat-divider" />
            <div className="auth__stat">
              <span className="auth__stat-num">12k+</span>
              <span className="auth__stat-label">Commandes</span>
            </div>
            <div className="auth__stat-divider" />
            <div className="auth__stat">
              <span className="auth__stat-num">4.8</span>
              <span className="auth__stat-label">Note moy.</span>
            </div>
          </div>

          {/* Floating card */}
          <div className="auth__card">
            <div className="auth__card-av" style={{ background: '#1A56DB' }}>AK</div>
            <div>
              <div className="auth__card-name">Amara Kouyaté</div>
              <div className="auth__card-role">Développeur web · Abidjan</div>
            </div>
            <div className="auth__card-badge">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <circle cx="6" cy="6" r="6" fill="#0E9F6E"/>
                <path d="M3.5 6l2 2 3-3" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Vérifié
            </div>
          </div>
        </div>
      </div>

      {/* Right panel — form */}
      <div className="auth__right">
        <div className="auth__form-wrap">

          <div className="auth__form-head">
            <h1 className="auth__form-title">Bon retour </h1>
            <p className="auth__form-sub">Connectez-vous à votre compte Wumo</p>
          </div>

          <form className="auth__form" onSubmit={e => e.preventDefault()}>

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

            <div className="auth__field">
              <div className="auth__label-row">
                <label className="auth__label">Mot de passe</label>
                <a href="/auth/forgot" className="auth__forgot">Mot de passe oublié ?</a>
              </div>
              <div className="auth__input-wrap">
                <svg className="auth__input-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <rect x="4" y="7" width="8" height="7" rx="1.5" stroke="#6B7280" strokeWidth="1.4"/>
                  <path d="M5.5 7V5a2.5 2.5 0 015 0v2" stroke="#6B7280" strokeWidth="1.4" strokeLinecap="round"/>
                </svg>
                <input className="auth__input" type={show ? 'text' : 'password'} placeholder="••••••••" />
                <button type="button" className="auth__eye" onClick={() => setShow(!show)}>
                  {show ? (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M2 8s2.5-4 6-4 6 4 6 4-2.5 4-6 4-6-4-6-4z" stroke="#6B7280" strokeWidth="1.4"/>
                      <circle cx="8" cy="8" r="1.5" stroke="#6B7280" strokeWidth="1.4"/>
                      <path d="M3 3l10 10" stroke="#6B7280" strokeWidth="1.4" strokeLinecap="round"/>
                    </svg>
                  ) : (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M2 8s2.5-4 6-4 6 4 6 4-2.5 4-6 4-6-4-6-4z" stroke="#6B7280" strokeWidth="1.4"/>
                      <circle cx="8" cy="8" r="1.5" stroke="#6B7280" strokeWidth="1.4"/>
                    </svg>
                  )}
                </button>
              </div>
            </div>

            <button type="submit" className="auth__submit">
              Se connecter
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <div className="auth__divider"><span>ou</span></div>

            <div className="auth__footer-text">
              Pas encore de compte ?{' '}
              <a href="/auth/register" className="auth__link">S'inscrire gratuitement</a>
            </div>

          </form>
        </div>
      </div>

    </div>
  )
}