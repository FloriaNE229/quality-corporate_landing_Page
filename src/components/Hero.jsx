import heroImg from '../assets/hero.png'

export default function Hero() {
  return (
    <section className="hero" id="top" style={{ backgroundImage: `url(${heroImg})` }}>
      <div className="hero-overlay" />
      <div className="wrap hero-inner">
        <p className="eyebrow">INTÉGRATEUR TECHNOLOGIQUE — BÉNIN · TOGO · RDC · CÔTE D'IVOIRE</p>
        <h1>Une seule équipe pour sécuriser, connecter et alimenter votre infrastructure</h1>
        <p className="lede">
          Quality Corporate conçoit et déploie vos projets réseau, télécom, énergie et
          cybersécurité, du diagnostic des besoins jusqu'à la maintenance, avec une relation
          de confiance dans la durée.
        </p>
        <div className="hero-actions">
          <a className="btn-primary" href="#contact">Discuter de mon projet</a>
          <a className="btn-ghost" href="#expertise">Voir nos domaines</a>
        </div>
        <div className="hero-stats">
          <div className="stat"><b>11</b><span>domaines d'expertise</span></div>
          <div className="stat"><b>4</b><span>pays d'implantation</span></div>
          <div className="stat"><b>1</b><span>interlocuteur, tout le projet</span></div>
        </div>
      </div>
    </section>
  )
}