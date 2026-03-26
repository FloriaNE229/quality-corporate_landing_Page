import { Link } from 'react-router-dom'
import './Services.css'

const SERVICES = [
  {
    id: 1,
    color: 'blue',
    category: 'Développement web',
    title: 'Site vitrine professionnel Laravel + Tailwind responsive',
    provider: { initials: 'AK', name: 'Amara Kouyaté', city: 'Abidjan, Côte d\'Ivoire', color: '#1A56DB' },
    price: '25 000',
    rating: 4.9,
    reviews: 87,
    badge: { label: 'Top vendeur', type: 'blue' },
    gradient: 'linear-gradient(140deg, #EEF3FF, #C7D7FF)',
    icon: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
        <rect x="10" y="14" width="40" height="32" rx="4" fill="rgba(26,86,219,0.18)" />
        <rect x="17" y="21" width="26" height="3.5" rx="1.75" fill="rgba(26,86,219,0.5)" />
        <rect x="17" y="28" width="18" height="3.5" rx="1.75" fill="rgba(26,86,219,0.35)" />
        <rect x="17" y="35" width="22" height="3.5" rx="1.75" fill="rgba(26,86,219,0.22)" />
      </svg>
    ),
  },
  {
    id: 2,
    color: 'green',
    category: 'Design graphique',
    title: 'Logo professionnel + charte graphique complète pour votre marque',
    provider: { initials: 'FD', name: 'Fatou Diallo', city: 'Dakar, Sénégal', color: '#0E9F6E' },
    price: '15 000',
    rating: 4.8,
    reviews: 42,
    badge: { label: 'Vérifié', type: 'green' },
    gradient: 'linear-gradient(140deg, #ECFDF5, #A7F3D0)',
    icon: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
        <circle cx="30" cy="30" r="14" fill="rgba(14,159,110,0.18)" />
        <circle cx="30" cy="30" r="7" fill="rgba(14,159,110,0.35)" />
        <path d="M18 18l8 8M42 18l-8 8M18 42l8-8M42 42l-8-8" stroke="rgba(14,159,110,0.45)" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 3,
    color: 'orange',
    category: 'Bâtiment & Construction',
    title: 'Travaux de plomberie, installation sanitaire et réparations urgentes',
    provider: { initials: 'MB', name: 'Moussa Bamba', city: 'Cotonou, Bénin', color: '#FF5A1F' },
    price: '8 000',
    rating: 4.6,
    reviews: 31,
    badge: { label: 'Nouveau', type: 'orange' },
    gradient: 'linear-gradient(140deg, #FFF7ED, #FED7AA)',
    icon: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
        <path d="M14 46V28l16-12 16 12v18" stroke="rgba(255,90,31,0.4)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="24" y="34" width="12" height="12" rx="2" fill="rgba(255,90,31,0.22)" />
        <path d="M20 32h6M34 32h6" stroke="rgba(255,90,31,0.4)" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
]

function Stars({ rating }) {
  return (
    <div className="stars">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="13" height="13" viewBox="0 0 12 12"
          fill={i < Math.round(rating) ? '#F59E0B' : '#E5E7EB'}>
          <path d="M6 1l1.4 3h3.1l-2.5 1.9.9 3L6 7.1l-2.9 1.8.9-3L1.5 4H4.6z" />
        </svg>
      ))}
    </div>
  )
}

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="services__head">
        <div>
          <p className="eyebrow">Sélection du moment</p>
          <h2 className="section-title" style={{ fontSize: '36px' }}>
            Services <em>populaires</em>
          </h2>
        </div>
        <Link to="/explorer" className="see-all">
          Voir tous les services
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>

      <div className="services__grid">
        {SERVICES.map((s) => (
          <div className={`srv-card srv-card--${s.color}`} key={s.id}>
            <div className="srv-card__img" style={{ background: s.gradient }}>
              {s.icon}
              <span className={`srv-card__badge srv-card__badge--${s.badge.type}`}>
                {s.badge.label}
              </span>
            </div>
            <div className="srv-card__body">
              <p className="srv-card__cat">{s.category}</p>
              <h3 className="srv-card__title">{s.title}</h3>
              <div className="srv-card__provider">
                <div className="srv-card__av" style={{ background: s.provider.color }}>
                  {s.provider.initials}
                </div>
                <div>
                  <div className="srv-card__pname">{s.provider.name}</div>
                  <div className="srv-card__ploc">{s.provider.city}</div>
                </div>
              </div>
              <div className="srv-card__footer">
                <div className="srv-card__price">
                  {s.price} <sub>XOF</sub>
                </div>
                <div className="srv-card__rating">
                  <Stars rating={s.rating} />
                  <span>{s.rating}</span>
                  <span className="srv-card__reviews">({s.reviews})</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}