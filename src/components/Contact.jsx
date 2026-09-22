import { useState } from 'react'

const EMAIL = 'qualitycorporate@qualitycorporate.com'

export default function Contact() {
  const [values, setValues] = useState({ name: '', email: '', company: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('')

  function handleChange(e) {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
  }

  function validate() {
    const next = {}
    if (!values.name.trim()) next.name = 'Merci de renseigner votre nom.'
    if (!values.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      next.email = 'Adresse email invalide.'
    }
    if (!values.message.trim()) next.message = 'Décrivez brièvement votre besoin.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!validate()) {
      setStatus('')
      return
    }
    const subject = `Demande de contact — ${values.name}${values.company ? ` (${values.company})` : ''}`
    const body =
      `Nom: ${values.name}\n` +
      `Email: ${values.email}\n` +
      (values.company ? `Entreprise: ${values.company}\n` : '') +
      `\nMessage:\n${values.message}`
    const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setStatus("Votre messagerie va s'ouvrir avec le message pré-rempli — il ne reste qu'à l'envoyer.")
    window.location.href = mailto
  }

  return (
    <section className="alt" id="contact">
      <div className="wrap contact-grid">
        <div className="contact-block">
          <h3>Parlons de votre projet</h3>
          <p>Notre équipe basée à Cotonou répond directement, pour un premier échange sans engagement.</p>

          <div className="contact-detail">
            <span className="label">ADRESSE</span>
            <span>Avenue Bicentenaire / Sikècodji, 04 BP 890, Cotonou, Bénin</span>
          </div>
          <div className="contact-detail">
            <span className="label">TÉLÉPHONE</span>
            <a href="tel:+22921325745">+229 21 32 57 45</a> · <a href="tel:+22921321878">21 32 18 78</a>
          </div>
          <div className="contact-detail">
            <span className="label">EMAIL</span>
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </div>
          <div className="contact-detail">
            <span className="label">RÉSEAUX</span>
            <a href="https://www.facebook.com/profile.php?id=100091665214897" target="_blank" rel="noopener noreferrer">Facebook</a>
            {' · '}
            <a href="https://www.linkedin.com/company/qualitycorporate/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>

        <div className="contact-block">
          <h3>Demande rapide</h3>
          <p>Le formulaire ouvre votre messagerie avec le message déjà rempli, prêt à envoyer.</p>
          <form className="qform" onSubmit={handleSubmit} noValidate>
            <div className="row2">
              <div>
                <label htmlFor="q-name">Nom complet</label>
                <input id="q-name" name="name" type="text" autoComplete="name" value={values.name} onChange={handleChange} />
                <div className="field-error">{errors.name}</div>
              </div>
              <div>
                <label htmlFor="q-email">Email</label>
                <input id="q-email" name="email" type="email" autoComplete="email" value={values.email} onChange={handleChange} />
                <div className="field-error">{errors.email}</div>
              </div>
            </div>
            <div>
              <label htmlFor="q-company">Entreprise (optionnel)</label>
              <input id="q-company" name="company" type="text" autoComplete="organization" value={values.company} onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="q-message">Votre besoin</label>
              <textarea id="q-message" name="message" value={values.message} onChange={handleChange} />
              <div className="field-error">{errors.message}</div>
            </div>
            <button type="submit">Envoyer la demande</button>
            {status && <div className="form-status show ok">{status}</div>}
          </form>
        </div>
      </div>
    </section>
  )
}
