const CLIENTS = [
  {
    name: 'NSIA Banque',
    variant: 'nsia',
    desc: 'Nouvelle Société Interafricaine d’Assurance',
  },
  {
    name: 'PADME',
    variant: 'padme',
    desc: 'Société de Promotion et d’Appui au Développement des Micro-Entreprises',
  },
  {
    name: 'SOBEBRA',
    variant: 'sobebra',
    desc: 'Société Béninoise de Boissons Rafraîchissantes',
  },
  {
    name: 'ASSI',
    variant: 'assi',
    desc: 'Agence des Services et Systèmes d’Information du Bénin',
  },
]

const PARTNERS = [
  { name: 'SEDCO', variant: 'sedco', desc: '' },
  { name: 'Acer', variant: 'acer', desc: '' },
  { name: 'Nexans', variant: 'nexans', desc: '' },
]

function LogoRow({ items }) {
  const loop = [...items, ...items]
  return (
    <div className="logo-strip">
      <div className="logo-track">
        {loop.map((item, i) => (
          <div
            className={`logo-item logo-${item.variant}`}
            key={`${item.name}-${i}`}
            aria-hidden={i >= items.length ? 'true' : undefined}
          >
            <span className="logo-mark">{item.name}</span>
            {item.desc && <span className="logo-desc">{item.desc}</span>}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Clients() {
  return (
    <section id="clients">
      <div className="wrap">
        <div className="section-head center">
          <h2>Nos clients</h2>
        </div>
        <LogoRow items={CLIENTS} />

        <div className="section-head center partners-head">
          <h2>Nos partenaires et certifications</h2>
          <p>
            Nos collaborateurs et les partenaires avec qui nous travaillons sont certifiés
            sur les technologies des fabricants et éditeurs suivants :
          </p>
        </div>
        <LogoRow items={PARTNERS} />
      </div>
    </section>
  )
}