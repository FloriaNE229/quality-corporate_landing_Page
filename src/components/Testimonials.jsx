import './Testimonials.css'

const TESTIMONIALS = [
  {
    text: "J'ai trouvé un excellent développeur en moins de 10 minutes. Mon site était prêt en 5 jours. Wumo, c'est la révolution pour nous les entrepreneurs africains !",
    name: 'Séverin Koffi',
    role: 'Entrepreneur · Cotonou, Bénin',
    initials: 'SK',
    color: '#1A56DB',
  },
  {
    text: "Grâce à Wumo, j'ai doublé mes revenus ce mois-ci. Les clients sont sérieux et le paiement MTN Money est super pratique. Je recommande à tous les freelances.",
    name: 'Aminata Fall',
    role: 'Designer freelance · Dakar, Sénégal',
    initials: 'AF',
    color: '#0E9F6E',
  },
  {
    text: "Interface claire, prestataires compétents et service client réactif. Je gère maintenant toute ma sous-traitance via Wumo. C'est devenu indispensable.",
    name: 'Oumarou Traoré',
    role: 'Directeur PME · Abidjan, CI',
    initials: 'OT',
    color: '#FF5A1F',
  },
]

function StarsFull() {
  return (
    <div className="testi__stars">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="15" height="15" viewBox="0 0 12 12" fill="#F59E0B">
          <path d="M6 1l1.4 3h3.1l-2.5 1.9.9 3L6 7.1l-2.9 1.8.9-3L1.5 4H4.6z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="testi">
      <p className="eyebrow">Ils nous font confiance</p>
      <h2 className="section-title">
        Ce que disent<br /><em>nos utilisateurs</em>
      </h2>

      <div className="testi__grid">
        {TESTIMONIALS.map((t, i) => (
          <div className="testi__card" key={i}>
            <StarsFull />
            <p className="testi__body">"{t.text}"</p>
            <div className="testi__author">
              <div className="testi__av" style={{ background: t.color }}>{t.initials}</div>
              <div>
                <div className="testi__name">{t.name}</div>
                <div className="testi__role">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
