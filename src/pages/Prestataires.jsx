import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Prestataires.css'

const SPECIALITES = ['Toutes', 'Développement', 'Design', 'Marketing', 'Bâtiment', 'Photo & Vidéo', 'Finance']
const PAYS = ['Tous les pays', 'Bénin', "Côte d'Ivoire", 'Sénégal', 'Togo', 'Mali']

const PRESTATAIRES = [
  { id: 1, name: 'Amara Kouyaté',   spec: 'Développement',  city: 'Abidjan',  country: "Côte d'Ivoire", rating: 4.9, reviews: 87,  services: 12, initials: 'AK', color: '#1A56DB', badge: 'Top',      bio: 'Développeur full-stack spécialisé Laravel & React. 5 ans d\'expérience.' },
  { id: 2, name: 'Fatou Diallo',    spec: 'Design',         city: 'Dakar',    country: 'Sénégal',       rating: 4.8, reviews: 42,  services: 8,  initials: 'FD', color: '#0E9F6E', badge: 'Vérifié',  bio: 'Designer UI/UX et graphiste. Spécialiste identité visuelle et branding.' },
  { id: 3, name: 'Moussa Bamba',    spec: 'Bâtiment',       city: 'Cotonou',  country: 'Bénin',         rating: 4.6, reviews: 31,  services: 5,  initials: 'MB', color: '#FF5A1F', badge: 'Nouveau',  bio: 'Plombier certifié avec 8 ans d\'expérience dans le BTP et la rénovation.' },
  { id: 4, name: 'Aïcha Traoré',    spec: 'Marketing',      city: 'Bamako',   country: 'Mali',          rating: 4.7, reviews: 55,  services: 9,  initials: 'AT', color: '#1A56DB', badge: 'Top',      bio: 'Community manager & stratège digitale. Experte en growth hacking Afrique.' },
  { id: 5, name: 'Koffi Mensah',    spec: 'Photo & Vidéo',  city: 'Lomé',     country: 'Togo',          rating: 5.0, reviews: 18,  services: 6,  initials: 'KM', color: '#0E9F6E', badge: 'Vérifié',  bio: 'Photographe événementiel et réalisateur. Équipement professionnel haut de gamme.' },
  { id: 6, name: 'Sékou Diaby',     spec: 'Développement',  city: 'Abidjan',  country: "Côte d'Ivoire", rating: 4.8, reviews: 24,  services: 7,  initials: 'SD', color: '#FF5A1F', badge: 'Premium',  bio: 'Expert mobile React Native & Flutter. Applications iOS et Android clé en main.' },
  { id: 7, name: 'Mariama Bah',     spec: 'Design',         city: 'Conakry',  country: 'Guinée',        rating: 4.9, reviews: 36,  services: 10, initials: 'MB', color: '#1A56DB', badge: 'Top',      bio: 'UI/UX Designer senior. Maquettes Figma, design systems et prototypage.' },
  { id: 8, name: 'Oumar Sow',       spec: 'Finance',        city: 'Dakar',    country: 'Sénégal',       rating: 4.5, reviews: 29,  services: 4,  initials: 'OS', color: '#0E9F6E', badge: 'Vérifié',  bio: 'Expert-comptable diplômé. Bilan, fiscalité et conseil pour PME africaines.' },
  { id: 9, name: 'Awa Coulibaly',   spec: 'Marketing',      city: 'Bamako',   country: 'Mali',          rating: 4.7, reviews: 63,  services: 11, initials: 'AC', color: '#FF5A1F', badge: 'Nouveau',  bio: 'Rédactrice web SEO et copywriter. Contenu optimisé pour le marché africain.' },
]

function Stars({ rating }) {
  return (
    <div className="stars">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="12" height="12" viewBox="0 0 12 12"
          fill={i < Math.round(rating) ? '#F59E0B' : '#E5E7EB'}>
          <path d="M6 1l1.4 3h3.1l-2.5 1.9.9 3L6 7.1l-2.9 1.8.9-3L1.5 4H4.6z"/>
        </svg>
      ))}
    </div>
  )
}

export default function Prestataires() {
  const [activeSpec, setActiveSpec] = useState('Toutes')
  const [activePays, setActivePays] = useState('Tous les pays')
  const [search, setSearch] = useState('')

  const filtered = PRESTATAIRES.filter(p => {
    if (activeSpec !== 'Toutes' && p.spec !== activeSpec) return false
    if (activePays !== 'Tous les pays' && p.country !== activePays) return false
    if (search && !p.name.toLowerCase().includes(search.toLowerCase())) return false
    return true
  })

  return (
    <div className="prest">

      {/* Header */}
      <div className="prest__header">
        <div>
          <p className="prest__eyebrow">Communauté</p>
          <h1 className="prest__title">Nos <em>prestataires</em></h1>
          <p className="prest__sub">Des professionnels vérifiés à travers l'Afrique de l'Ouest</p>
        </div>
        <div className="prest__search">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <circle cx="7" cy="7" r="5" stroke="#6B7280" strokeWidth="1.5"/>
            <path d="M11 11l3 3" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <input
            type="text"
            placeholder="Rechercher un prestataire..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Tabs */}
      <div className="prest__tabs">
        {SPECIALITES.map(s => (
          <button
            key={s}
            className={`prest__tab ${activeSpec === s ? 'prest__tab--active' : ''}`}
            onClick={() => setActiveSpec(s)}
          >
            {s}
          </button>
        ))}
      </div>

      <div className="prest__body">

        {/* Sidebar */}
        <aside className="prest__sidebar">
          <div className="filter-group">
            <h4 className="filter-label">Pays</h4>
            {PAYS.map(p => (
              <button
                key={p}
                className={`filter-option ${activePays === p ? 'filter-option--active' : ''}`}
                onClick={() => setActivePays(p)}
              >
                {p}
              </button>
            ))}
          </div>

          <div className="filter-group">
            <h4 className="filter-label">Note minimum</h4>
            {['Toutes', '4.5+', '4.7+', '5.0'].map(r => (
              <button key={r} className="filter-option">{r}</button>
            ))}
          </div>
        </aside>

        {/* Grid */}
        <div className="prest__main">
          <p className="prest__count"><strong>{filtered.length}</strong> prestataires trouvés</p>
          <div className="prest__grid">
            {filtered.map(p => (
              <div className="prest-card" key={p.id}>
                <div className="prest-card__top">
                  <div className="prest-card__av" style={{ background: p.color }}>{p.initials}</div>
                  <div className="prest-card__info">
                    <div className="prest-card__name">{p.name}</div>
                    <div className="prest-card__spec">{p.spec}</div>
                    <div className="prest-card__loc">
                      <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                        <path d="M6 1a3.5 3.5 0 00-3.5 3.5C2.5 7.5 6 11 6 11s3.5-3.5 3.5-6.5A3.5 3.5 0 006 1z" stroke="#6B7280" strokeWidth="1.3"/>
                        <circle cx="6" cy="4.5" r="1.2" stroke="#6B7280" strokeWidth="1.3"/>
                      </svg>
                      {p.city}, {p.country}
                    </div>
                  </div>
                  <span className={`prest-card__badge prest-card__badge--${p.color === '#1A56DB' ? 'blue' : p.color === '#0E9F6E' ? 'green' : 'orange'}`}>
                    {p.badge}
                  </span>
                </div>

                <p className="prest-card__bio">{p.bio}</p>

                <div className="prest-card__stats">
                  <div className="prest-card__stat">
                    <Stars rating={p.rating}/>
                    <span>{p.rating} <em>({p.reviews} avis)</em></span>
                  </div>
                  <div className="prest-card__divider"/>
                  <div className="prest-card__stat">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <rect x="2" y="3" width="10" height="8" rx="1.5" stroke="#6B7280" strokeWidth="1.3"/>
                      <path d="M4 6h6M4 8.5h4" stroke="#6B7280" strokeWidth="1.3" strokeLinecap="round"/>
                    </svg>
                    <span>{p.services} services</span>
                  </div>
                </div>

                <button className="prest-card__btn">Voir le profil</button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}