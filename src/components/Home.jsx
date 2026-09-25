const INFRA = [
  {
    title: 'Infrastructure Informatique & Télécom',
    desc: "Déploiement d'infrastructures réseaux de grande envergure, câblage structuré, fourniture, distribution et leasing de matériels informatiques, mise en place de Data Centers.",
  },
  {
    title: 'Sécurité & Cybersécurité',
    desc: 'Protection des données, audits de sécurité, lutte contre les cybermenaces et systèmes de personnalisation de titres officiels sécurisés.',
  },
  {
    title: 'Sécurité Électronique & Communication unifiée',
    desc: "Installation de vidéosurveillance (caméras), contrôles d'accès, robotique, systèmes de gestion de présence et outils de communication collaborative d'entreprise.",
  },
]

const ENERGIE = [
  {
    title: 'Énergie & Électricité',
    desc: "Solutions énergétiques globales : infrastructures électriques industrielles et déploiement de l'énergie renouvelable (solaire/photovoltaïque).",
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
            départements et de nos domaines d'intervention.
          </p>
        </div>
      </section>

      <section className="alt" id="expertise">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">DÉPARTEMENTS ET DOMAINES D'INTERVENTION</p>
            <h2>Ce que couvrira le nouveau site</h2>
            <p>
              Un aperçu des expertises que Quality Corporate détaillera sur sa
              nouvelle plateforme.
            </p>
          </div>

          <div className="dept">
            <h3 className="dept-title">Département des Projets Infrastructures et Services IT</h3>
            <p className="dept-desc">
              Le pôle technique central : informatique, connectivité et protection numérique.
            </p>
            <div className="service-list">
              {INFRA.map((s) => (
                <div className="service-row" key={s.title}>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="dept">
            <h3 className="dept-title">Département Énergie / Électricité</h3>
            <p className="dept-desc">
              La cellule d'ingénierie qui gère les chantiers physiques et industriels, au-delà de l'informatique.
            </p>
            <div className="service-list">
              {ENERGIE.map((s) => (
                <div className="service-row" key={s.title}>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="wrap contact-simple">
          <a className="phone-link" href="mailto:qualitycorporate@qualitycorporate.com?subject=Contact%20Quality%20Corporate">
            Nous contacter
            <svg className="mail-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="M3 7l9 6 9-6" />
            </svg>
          </a>
          <span className="contact-or">ou par téléphone au</span>
          <a className="phone-link" href="tel:+22921325745">
            +229 21 32 57 45
            <svg className="phone-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </a>
        </div>
      </section>
    </main>
  )
}