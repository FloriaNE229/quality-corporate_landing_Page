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

export default function Services() {
  return (
    <section className="alt" id="expertise">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">CE QUE NOUS FAISONS</p>
          <h2>Onze domaines, une seule intégration</h2>
          <p>
            Chaque segment mobilise des compétences dédiées, coordonnées pour livrer un
            projet cohérent plutôt qu'un empilement de prestataires.
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
  )
}
