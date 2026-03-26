import './HowItWorks.css'

const STEPS = [
  {
    num: '1',
    color: 'var(--blue)',
    title: 'Cherche le service',
    desc: "Utilise la barre de recherche ou explore les catégories pour trouver exactement ce dont tu as besoin parmi des centaines de prestataires vérifiés.",
  },
  {
    num: '2',
    color: 'var(--green)',
    title: 'Commande & discute',
    desc: "Contacte le prestataire, précise tes besoins et passe ta commande. Le paiement est sécurisé par Mobile Money — MTN, Moov ou Wave.",
  },
  {
    num: '3',
    color: 'var(--orange)',
    title: 'Valide & note',
    desc: "Reçois ta livraison, valide le travail et laisse un avis. Ton argent n'est libéré que lorsque tu es satisfait. Simple et sécurisé.",
  },
]

export default function HowItWorks() {
  return (
    <section className="how" id="how">
      <p className="eyebrow">Simple & rapide</p>
      <h2 className="section-title">Comment ça marche ?</h2>

      <div className="how__grid">
        {STEPS.map((step, i) => (
          <div className="how__step" key={i}>
            <div className="how__num" style={{ background: step.color }}>{step.num}</div>
            <h3 className="how__step-title">{step.title}</h3>
            <p className="how__step-desc">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
