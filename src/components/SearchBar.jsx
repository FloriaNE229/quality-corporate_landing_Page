import './SearchBar.css'

const CATEGORIES = [
  'Toutes catégories',
  'Développement web & mobile',
  'Design graphique',
  'Marketing digital',
  'Bâtiment & Construction',
  'Photo & Vidéo',
  'Rédaction & Traduction',
  'Beauté & Bien-être',
  'Comptabilité & Finance',
]

export default function SearchBar() {
  return (
    <div className="search-wrap">
      <div className="search-inner">
        <div className="search-field">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <circle cx="8" cy="8" r="5.5" stroke="#6B7280" strokeWidth="1.5" />
            <path d="M12.5 12.5l3 3" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <input type="text" placeholder="Ex : développeur web, plombier, designer graphique..." />
        </div>

        <div className="search-divider" />

        <div className="search-select-wrap">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <rect x="2" y="3" width="12" height="1.5" rx=".75" fill="#6B7280" />
            <rect x="2" y="7.25" width="9" height="1.5" rx=".75" fill="#6B7280" />
            <rect x="2" y="11.5" width="6" height="1.5" rx=".75" fill="#6B7280" />
          </svg>
          <select>
            {CATEGORIES.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </div>

        <div className="search-btn-wrap">
          <button className="search-submit">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="7" cy="7" r="4.5" stroke="white" strokeWidth="1.5" />
              <path d="M11 11l2.5 2.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            Rechercher
          </button>
        </div>
      </div>
    </div>
  )
}
