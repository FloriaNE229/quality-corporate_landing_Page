const OFFICES = [
  { country: 'Bénin', lines: ['Avenue Bicentenaire / Sikècodji', '04 BP 890, Cotonou'], contact: '+229 21 32 57 45', email: 'qualitycorporate@qualitycorporate.com' },
  { country: 'Togo', lines: ["Rue 90, porte 71, face École évangélique Ngyékonakpoé", 'BP 8980, Lomé'], contact: '+228 70 45 46 57', email: 'togo@qualitycorporate.com' },
  { country: 'RD Congo', lines: ['Face Bâtiment Métropole, Matali'], contact: '+243 976 644 4550', email: 'rdc@qualitycorporate.com' },
  { country: "Côte d'Ivoire", lines: ['Bureau local'], email: 'ci@qualitycorporate.com' },
]

export default function Presence() {
  return (
    <section id="presence">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">NOS IMPLANTATIONS</p>
          <h2>Présents dans quatre pays, en expansion sur le continent</h2>
        </div>
        <div className="presence-grid">
          {OFFICES.map((o) => (
            <div className="presence-card" key={o.country}>
              <h3>{o.country}</h3>
              {o.lines.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
              {o.contact && <span className="tel">{o.contact}</span>}
              {o.email && <a className="email" href={`mailto:${o.email}`}>{o.email}</a>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}