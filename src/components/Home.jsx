import logo from '../assets/logo.jpg'

const DOMAINS = [
  { title: 'Distribution de produits', desc: "Matériel informatique, logiciels, équipements de télécommunication." },
  { title: 'Électricité courant faible', desc: "Câblage informatique cuivre, électricité résidentielle, tertiaire et industrielle." },
  { title: 'Froid et climatisation', desc: "Systèmes de refroidissement, climatisation centralisée, solutions VRV." },
  { title: 'Communications unifiées', desc: "Voix, vidéo, messagerie et outils de collaboration en entreprise." },
  { title: 'Réseau & datacenter', desc: "Conception et mise en œuvre d'infrastructures réseau et de datacenters." },
  { title: 'Énergie & renouvelable', desc: "Solutions courant fort et énergies renouvelables adaptées au terrain." },
  { title: 'Sécurité informatique', desc: "Cybersécurité et pare-feu nouvelle génération (NGFW)." },
  { title: 'Infogérance', desc: "Services managés et e-services pour externaliser le pilotage IT." },
  { title: 'Sécurité électronique', desc: "Vidéosurveillance, détection d'intrusion, contrôle d'accès." },
  { title: 'Gestion du parcours client', desc: "Gestion de parking et de file d'attente." },
  { title: 'IA réseau & sécurité', desc: "Intelligence artificielle appliquée à la mise en réseau et à la sécurité." },
]

export default function Home() {
  return (
    <main id="top">
      <div className="bg-grid" />
      <div className="wrap content">
        <img className="brand-logo" src={logo} alt="Quality Corporate" />
        <p className="eyebrow">SITE EN COURS DE CONSTRUCTION</p>
        <h1>Notre nouveau site arrive bientôt</h1>
        <p className="lede">
          Quality Corporate prépare une nouvelle présentation de son activité
          d'intégrateur technologique. En attendant, voici nos domaines d'intervention.
        </p>

        <p className="domains-label">Domaines d'intervention</p>
        <div className="domain-grid">
          {DOMAINS.map((d) => (
            <span className="domain-chip" key={d.title}>
              <span className="domain-chip-title">{d.title}</span>
              <span className="domain-chip-desc">{d.desc}</span>
            </span>
          ))}
        </div>

        <a className="btn-primary" href="mailto:qualitycorporate@qualitycorporate.com?subject=Contact%20Quality%20Corporate">
          Nous contacter
        </a>
        <p className="contact-sub">
          ou par téléphone au <a href="tel:+22921325745">+229 21 32 57 45</a>
        </p>
      </div>
    </main>
  )
}