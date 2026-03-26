import { useState } from 'react'
import './Categories.css'

const CATS = [
  {
    id: 'dev',
    name: 'Développement',
    count: 320,
    color: 'blue',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="3" y="3" width="7" height="7" rx="2" fill="currentColor" />
        <rect x="12" y="3" width="7" height="7" rx="2" fill="currentColor" opacity=".4" />
        <rect x="3" y="12" width="7" height="7" rx="2" fill="currentColor" opacity=".4" />
        <rect x="12" y="12" width="7" height="7" rx="2" fill="currentColor" opacity=".7" />
      </svg>
    ),
  },
  {
    id: 'design',
    name: 'Design graphique',
    count: 214,
    color: 'green',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="5" stroke="currentColor" strokeWidth="1.8" />
        <path d="M11 6V4M11 18v-2M6 11H4M18 11h-2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="11" cy="11" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: 'marketing',
    name: 'Marketing',
    count: 176,
    color: 'orange',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M4 15l4-4 3 3 5-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 8V5a1 1 0 011-1h12a1 1 0 011 1v3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'batiment',
    name: 'Bâtiment',
    count: 189,
    color: 'orange',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M4 18V10l7-5 7 5v8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="8.5" y="13" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    ),
  },
  {
    id: 'photo',
    name: 'Photo & Vidéo',
    count: 142,
    color: 'green',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="2" y="6" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M16 9l4-2v8l-4-2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="9" cy="11" r="2" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    id: 'finance',
    name: 'Finance & Droit',
    count: 98,
    color: 'blue',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M4 15l4-4 3 3 5-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="4" y="4" width="14" height="14" rx="3" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
  },
]

export default function Categories() {
  const [active, setActive] = useState('dev')

  return (
    <section className="cats" id="categories">
      <div className="cats__head">
        <div>
          <p className="eyebrow">Explorer par catégorie</p>
          <h2 className="section-title">
            Tous vos besoins,<br /><em>une seule plateforme</em>
          </h2>
        </div>
        <a href="/explorer" className="see-all">
          Voir toutes les catégories
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>

      <div className="cats__grid">
        {CATS.map((cat) => (
          <button
            key={cat.id}
            className={`cat-item cat-item--${cat.color} ${active === cat.id ? 'cat-item--active' : ''}`}
            onClick={() => setActive(cat.id)}
          >
            <div className="cat-item__icon">{cat.icon}</div>
            <div className="cat-item__name">{cat.name}</div>
            <div className="cat-item__count">{cat.count} services</div>
          </button>
        ))}
      </div>
    </section>
  )
}