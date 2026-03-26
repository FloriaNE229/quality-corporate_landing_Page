import { useState } from 'react'
import './Auth.css'

export default function Register() {
  const [role, setRole] = useState('client')
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
            Rejoignez la<br />communauté.
          </h2>
          <p className="auth__left-sub">
            Inscription gratuite. Trouvez des clients ou des prestataires en quelques minutes.
          </p>

          <div className="auth__perks">
            {[
              { icon: '#0E9F6E', label: 'Inscription 100% gratuite' },
              { icon: '#1A56DB', label: 'Paiement sécurisé Mobile Money' },
              { icon: '#FF5A1F', label: 'Prestataires vérifiés' },
            ].map((p, i) => (
              <div className="auth__perk" key={i}>
                <span className="auth__perk-dot" style={{ background: p.icon }} />
                {p.label}
              </div>
            ))}
          </div>

          <div className="auth__card">
            <div className="auth__card-av" style={{ background: '#0E9F6E' }}>FD</div>
            <div>
              <div className="auth__card-name">Fatou Diallo</div>
              <div className="auth__card-role">Designer · Dakar — 42 avis</div>
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

      {/* Right panel */}
      <div className="auth__right">
        <div className="auth__form-wrap">

          <div className="auth__form-head">
            <h1 className="auth__form-title">Créer un compte</h1>
            <p className="auth__form-sub">C'est gratuit et ça prend 2 minutes</p>
          </div>

          {/* Role toggle */}
          <div className="auth__role-toggle">
            <button
              className={`auth__role-btn ${role === 'client' ? 'auth__role-btn--active' : ''}`}
              onClick={() => setRole('client')}
              type="button"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="5" r="2.5" stroke="currentColor" strokeWidth="1.4"/>
                <path d="M3 13c0-2.8 2.2-5 5-5s5 2.2 5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
              </svg>
              Je suis client
            </button>
            <button
              className={`auth__role-btn ${role === 'pro' ? 'auth__role-btn--active' : ''}`}
              onClick={() => setRole('pro')}
              type="button"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <rect x="2" y="3" width="12" height="10" rx="2" stroke="currentColor" strokeWidth="1.4"/>
                <path d="M5 7h6M5 10h4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
              </svg>
              Je suis prestataire
            </button>
          </div>

          <form className="auth__form" onSubmit={e => e.preventDefault()}>

            <div className="auth__row">
              <div className="auth__field">
                <label className="auth__label">Prénom</label>
                <div className="auth__input-wrap">
                  <input className="auth__input" type="text" placeholder="Kofi" />
                </div>
              </div>
              <div className="auth__field">
                <label className="auth__label">Nom</label>
                <div className="auth__input-wrap">
                  <input className="auth__input" type="text" placeholder="Mensah" />
                </div>
              </div>
            </div>

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
              <label className="auth__label">Pays</label>
              <div className="auth__input-wrap">
                <svg className="auth__input-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="6" stroke="#6B7280" strokeWidth="1.4"/>
                  <path d="M8 2v12M2 8h12" stroke="#6B7280" strokeWidth="1.4" strokeLinecap="round"/>
                </svg>
                <select className="auth__input auth__select">
                  <option value="">Sélectionner votre pays</option>
                  <option>Bénin</option>
                  <option>Côte d'Ivoire</option>
                  <option>Sénégal</option>
                  <option>Togo</option>
                  <option>Mali</option>
                </select>
              </div>
            </div>

            <div className="auth__field">
              <label className="auth__label">Mot de passe</label>
              <div className="auth__input-wrap">
                <svg className="auth__input-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <rect x="4" y="7" width="8" height="7" rx="1.5" stroke="#6B7280" strokeWidth="1.4"/>
                  <path d="M5.5 7V5a2.5 2.5 0 015 0v2" stroke="#6B7280" strokeWidth="1.4" strokeLinecap="round"/>
                </svg>
                <input className="auth__input" type={show ? 'text' : 'password'} placeholder="Min. 8 caractères" />
                <button type="button" className="auth__eye" onClick={() => setShow(!show)}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M2 8s2.5-4 6-4 6 4 6 4-2.5 4-6 4-6-4-6-4z" stroke="#6B7280" strokeWidth="1.4"/>
                    <circle cx="8" cy="8" r="1.5" stroke="#6B7280" strokeWidth="1.4"/>
                  </svg>
                </button>
              </div>
            </div>

            <button type="submit" className="auth__submit">
              Créer mon compte gratuitement
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <p className="auth__terms">
              En vous inscrivant vous acceptez nos{' '}
              <a href="#" className="auth__link">Conditions d'utilisation</a>
              {' '}et notre{' '}
              <a href="#" className="auth__link">Politique de confidentialité</a>
            </p>

            <div className="auth__footer-text">
              Déjà un compte ?{' '}
              <a href="/auth/login" className="auth__link">Se connecter</a>
            </div>

          </form>
        </div>
      </div>

    </div>
  )
}