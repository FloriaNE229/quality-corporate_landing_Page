import './StatsBand.css'

const STATS = [
  { num: '2 400', accent: '+', label: 'Prestataires actifs' },
  { num: '12', accent: 'k+', label: 'Commandes réalisées' },
  { num: '5', accent: '', label: 'Pays couverts' },
  { num: '4.', accent: '8', label: 'Note moyenne / 5' },
]

export default function StatsBand() {
  return (
    <div className="stats-band">
      {STATS.map((s, i) => (
        <div className="stats-band__item" key={i}>
          <span className="stats-band__num">
            {s.num}<em>{s.accent}</em>
          </span>
          <span className="stats-band__label">{s.label}</span>
        </div>
      ))}
    </div>
  )
}
