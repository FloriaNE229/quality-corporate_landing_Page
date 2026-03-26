import './Footer.css'

const LINKS = {
  'Explorer': ['Tous les services', 'Services digitaux', 'Services physiques', 'Prestataires vérifiés'],
  'Prestataires': ['Devenir prestataire', 'Créer une annonce', 'Mon wallet', 'Guide du pro'],
  'Aide': ['Centre d\'aide', 'Litiges & remboursements', 'Conditions d\'utilisation', 'Nous contacter'],
}

const COUNTRIES = ['Bénin', 'Côte d\'Ivoire', 'Sénégal', 'Togo', 'Mali']

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__grid">
        <div className="footer__brand">
          <div className="footer__logo">Wumo</div>
          <p className="footer__desc">
            La marketplace de services qui connecte clients et prestataires à travers
            l'Afrique de l'Ouest. Inscription gratuite, commission de 10% par transaction.
          </p>
          <div className="footer__payments">
            <span className="footer__pay-tag">MTN Money</span>
            <span className="footer__pay-tag">Moov Money</span>
            <span className="footer__pay-tag">Wave</span>
          </div>
        </div>

        {Object.entries(LINKS).map(([heading, items]) => (
          <div className="footer__col" key={heading}>
            <h4 className="footer__col-heading">{heading}</h4>
            {items.map((item) => (
              <a href="#" key={item} className="footer__link">{item}</a>
            ))}
          </div>
        ))}
      </div>

      <div className="footer__bottom">
        <span className="footer__copy">© 2025 Wumo · Tous droits réservés</span>
        <div className="footer__countries">
          {COUNTRIES.map((c) => (
            <span key={c} className="footer__country-tag">{c}</span>
          ))}
        </div>
      </div>
    </footer>
  )
}