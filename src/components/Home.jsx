const SERVICES = [
  {
    title: 'Infrastructure Informatique & Télécom',
    desc: "Déploiement d'infrastructures réseaux de grande envergure, câblage structuré, fourniture, distribution et leasing de matériels informatiques, mise en place de Data Centers.",
  },
  {
    title: 'Sécurité & Cybersécurité',
    desc: 'Protection des données, audits de sécurité, lutte contre les cybermenaces et systèmes de personnalisation de titres officiels sécurisés.',
  },
  {
    title: 'Énergie & Électricité',
    desc: "Solutions énergétiques globales : infrastructures électriques industrielles et déploiement de l'énergie renouvelable (solaire/photovoltaïque).",
  },
  {
    title: 'Sécurité Électronique & Communication unifiée',
    desc: "Installation de vidéosurveillance (caméras), contrôles d'accès, robotique, systèmes de gestion de présence et outils de communication collaborative d'entreprise.",
  },
]

export default function Home() {
  return (
    <main>
      <section className="hero" id="top">
        <div className="hero-grid" />
        <div className="wrap hero-inner">
          <p className="eyebrow">SITE EN COURS DE CONSTRUCTION</p>
          <h1>Notre nouveau site arrive bientôt</h1>
          <p className="lede">
            Quality Corporate prépare une nouvelle présentation de son activité
            d'intégrateur technologique. En attendant, voici un aperçu de nos
            domaines d'intervention.
          </p>
        </div>
      </section>

      <section className="alt" id="expertise">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">DOMAINES D'INTERVENTION</p>
            <h2>Ce que couvrira le nouveau site</h2>
            <p>
              Un aperçu des expertises que Quality Corporate détaillera sur sa
              nouvelle plateforme, tous domaines confondus.
            </p>
          </div>
          <div className="service-list">
            {SERVICES.map((s) => (
              <div className="service-row" key={s.title}>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="wrap contact-simple">
          <a className="phone-link" href="mailto:qualitycorporate@qualitycorporate.com?subject=Contact%20Quality%20Corporate">Nous contacter</a>
          <a className="phone-link" href="tel:+22921325745">+229 21 32 57 45</a>
        </div>
      </section>
    </main>
  )
}