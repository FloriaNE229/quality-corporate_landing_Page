const SERVICES = [
  { title: 'Distribution de produits', desc: 'Matériel informatique, logiciels, équipements de télécommunication et de communication.' },
  { title: 'Électricité courant faible', desc: 'Câblage informatique cuivre, électricité résidentielle, tertiaire et industrielle.' },
  { title: 'Froid et climatisation', desc: 'Systèmes de refroidissement, climatisation centralisée, solutions VRV.' },
  { title: 'Communications unifiées', desc: 'Voix, vidéo, messagerie et outils de collaboration en entreprise.' },
  { title: 'Réseau & datacenter', desc: "Conception et mise en œuvre d'infrastructures réseau et de datacenters." },
  { title: 'Énergie & renouvelable', desc: 'Solutions courant fort et énergies renouvelables adaptées au terrain.' },
  { title: 'Sécurité informatique', desc: 'Cybersécurité et pare-feu nouvelle génération (NGFW).' },
  { title: 'Infogérance', desc: "Services managés et e-services pour externaliser le pilotage IT." },
  { title: 'Sécurité électronique', desc: "Vidéosurveillance, détection d'intrusion, contrôle d'accès." },
  { title: 'Gestion du parcours client', desc: 'Gestion de parking et de file d\'attente.' },
  { title: 'IA réseau & sécurité', desc: "Intelligence artificielle appliquée à la mise en réseau et à la sécurité." },
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
          <a
            className="phone-link"
            href="mailto:qualitycorporate@qualitycorporate.com?subject=Contact%20Quality%20Corporate"
          >
            Nous contacter
          </a>
          <a className="phone-link" href="tel:+22921325745">+229 21 32 57 45</a>
        </div>
      </section>
    </main>
  )
}