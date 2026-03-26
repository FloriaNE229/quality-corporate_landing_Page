import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Explorer.css'

const CATEGORIES = [
  { id: 'all', label: 'Tous' },
  { id: 'dev', label: 'Développement' },
  { id: 'design', label: 'Design' },
  { id: 'marketing', label: 'Marketing' },
  { id: 'batiment', label: 'Bâtiment' },
  { id: 'photo', label: 'Photo & Vidéo' },
  { id: 'finance', label: 'Finance' },
]

const SERVICES = [
  { id: 1, cat: 'dev',       title: 'Site vitrine Laravel + Tailwind responsive',         provider: 'Amara Kouyaté',  city: 'Abidjan',  price: '25 000', rating: 4.9, reviews: 87,  initials: 'AK', color: '#1A56DB', badge: 'Top vendeur',  badgeType: 'blue'   },
  { id: 2, cat: 'design',    title: 'Logo professionnel + charte graphique complète',      provider: 'Fatou Diallo',   city: 'Dakar',    price: '15 000', rating: 4.8, reviews: 42,  initials: 'FD', color: '#0E9F6E', badge: 'Vérifié',     badgeType: 'green'  },
  { id: 3, cat: 'batiment',  title: 'Plomberie, installation sanitaire et réparations',   provider: 'Moussa Bamba',   city: 'Cotonou',  price: '8 000',  rating: 4.6, reviews: 31,  initials: 'MB', color: '#FF5A1F', badge: 'Nouveau',     badgeType: 'orange' },
  { id: 4, cat: 'marketing', title: 'Gestion réseaux sociaux + création de contenu',      provider: 'Aïcha Traoré',   city: 'Bamako',   price: '20 000', rating: 4.7, reviews: 55,  initials: 'AT', color: '#1A56DB', badge: 'Top vendeur',  badgeType: 'blue'   },
  { id: 5, cat: 'photo',     title: 'Shooting photo professionnel événementiel',           provider: 'Koffi Mensah',   city: 'Lomé',     price: '35 000', rating: 5.0, reviews: 18,  initials: 'KM', color: '#0E9F6E', badge: 'Vérifié',     badgeType: 'green'  },
  { id: 6, cat: 'dev',       title: 'Application mobile React Native iOS & Android',      provider: 'Sékou Diaby',    city: 'Abidjan',  price: '80 000', rating: 4.8, reviews: 24,  initials: 'SD', color: '#FF5A1F', badge: 'Premium',     badgeType: 'orange' },
  { id: 7, cat: 'design',    title: 'Maquette UI/UX Figma pour application mobile',       provider: 'Mariama Bah',    city: 'Conakry',  price: '30 000', rating: 4.9, reviews: 36,  initials: 'MB', color: '#1A56DB', badge: 'Top vendeur',  badgeType: 'blue'   },
  { id: 8, cat: 'finance',   title: 'Comptabilité PME, bilan et déclaration fiscale',     provider: 'Oumar Sow',      city: 'Dakar',    price: '18 000', rating: 4.5, reviews: 29,  initials: 'OS', color: '#0E9F6E', badge: 'Vérifié',     badgeType: 'green'  },
  { id: 9, cat: 'marketing', title: 'Rédaction articles blog SEO optimisés',              provider: 'Awa Coulibaly',  city: 'Bamako',   price: '5 000',  rating: 4.7, reviews: 63,  initials: 'AC', color: '#FF5A1F', badge: 'Nouveau',     badgeType: 'orange' },
]

const PAYS = ['Tous les pays', 'Bénin', "Côte d'Ivoire", 'Sénégal', 'Togo', 'Mali']
const TYPES = ['Tous', 'Digitaux', 'Physiques']

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

export default function Explorer() {
  const [activeCat, setActiveCat] = useState('all')
  const [search, setSearch] = useState('')
  const [pays, setPays] = useState('Tous les pays')
  const [type, setType] = useState('Tous')
  const [sort, setSort] = useState('pertinence')

  const filtered = SERVICES.filter(s => {
    if (activeCat !== 'all' && s.cat !== activeCat) return false
    if (search && !s.title.toLowerCase().includes(search.toLowerCase())) return false
    return true
  })

  return (
    <div className="explorer">

      {/* Header */}
      <div className="explorer__header">
        <div>
          <p className="explorer__eyebrow">Marketplace</p>
          <h1 className="explorer__title">Explorer les <em>services</em></h1>
          <p className="explorer__sub">{filtered.length} services disponibles</p>
        </div>

        {/* Search */}
        <div className="explorer__search">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <circle cx="7" cy="7" r="5" stroke="#6B7280" strokeWidth="1.5"/>
            <path d="M11 11l3 3" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <input
            type="text"
            placeholder="Rechercher un service..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Category tabs */}
      <div className="explorer__tabs">
        {CATEGORIES.map(c => (
          <button
            key={c.id}
            className={`explorer__tab ${activeCat === c.id ? 'explorer__tab--active' : ''}`}
            onClick={() => setActiveCat(c.id)}
          >
            {c.label}
          </button>
        ))}
      </div>

      <div className="explorer__body">

        {/* Sidebar filters */}
        <aside className="explorer__sidebar">
          <div className="filter-group">
            <h4 className="filter-label">Pays</h4>
            {PAYS.map(p => (
              <button
                key={p}
                className={`filter-option ${pays === p ? 'filter-option--active' : ''}`}
                onClick={() => setPays(p)}
              >
                {p}
              </button>
            ))}
          </div>

          <div className="filter-group">
            <h4 className="filter-label">Type</h4>
            {TYPES.map(t => (
              <button
                key={t}
                className={`filter-option ${type === t ? 'filter-option--active' : ''}`}
                onClick={() => setType(t)}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="filter-group">
            <h4 className="filter-label">Budget (XOF)</h4>
            <div className="filter-range">
              <input type="range" min="0" max="100000" step="1000" defaultValue="100000"/>
              <div className="filter-range-labels">
                <span>0</span>
                <span>100 000</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Grid */}
        <div className="explorer__main">
          <div className="explorer__toolbar">
            <p className="explorer__count"><strong>{filtered.length}</strong> résultats</p>
            <select
              className="explorer__sort"
              value={sort}
              onChange={e => setSort(e.target.value)}
            >
              <option value="pertinence">Pertinence</option>
              <option value="prix-asc">Prix croissant</option>
              <option value="prix-desc">Prix décroissant</option>
              <option value="note">Mieux notés</option>
            </select>
          </div>

          <div className="explorer__grid">
            {filtered.map(s => (
              <div className="srv-card" key={s.id}>
                <div className="srv-card__img" style={{ background: s.badgeType === 'blue' ? 'linear-gradient(140deg,#EEF3FF,#C7D7FF)' : s.badgeType === 'green' ? 'linear-gradient(140deg,#ECFDF5,#A7F3D0)' : 'linear-gradient(140deg,#FFF7ED,#FED7AA)' }}>
                  <span className={`srv-card__badge srv-card__badge--${s.badgeType}`}>{s.badge}</span>
                </div>
                <div className="srv-card__body">
                  <p className="srv-card__cat">{CATEGORIES.find(c => c.id === s.cat)?.label}</p>
                  <h3 className="srv-card__title">{s.title}</h3>
                  <div className="srv-card__provider">
                    <div className="srv-card__av" style={{ background: s.color }}>{s.initials}</div>
                    <div>
                      <div className="srv-card__pname">{s.provider}</div>
                      <div className="srv-card__ploc">{s.city}</div>
                    </div>
                  </div>
                  <div className="srv-card__footer">
                    <div className="srv-card__price">{s.price} <sub>XOF</sub></div>
                    <div className="srv-card__rating">
                      <Stars rating={s.rating}/>
                      <span>{s.rating}</span>
                      <span className="srv-card__reviews">({s.reviews})</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}