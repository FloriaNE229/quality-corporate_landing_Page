# Quality Corporate — Site vitrine (React + Vite)

## Démarrer le projet

```bash
npm install
npm run dev
```

Ouvre ensuite l'URL affichée dans le terminal (par défaut http://localhost:5173).

## Build de production

```bash
npm run build
```

Les fichiers optimisés sont générés dans `dist/`, prêts à être déposés sur n'importe quel hébergement statique.

## Structure

```
src/
  components/
    Header.jsx    barre de navigation
    Hero.jsx       section d'accroche
    About.jsx       présentation de l'entreprise
    Services.jsx    les 11 domaines d'expertise
    Presence.jsx    implantations (Bénin, Togo, RDC, Côte d'Ivoire)
    Contact.jsx     coordonnées + formulaire de contact fonctionnel
    Footer.jsx
  App.jsx
  main.jsx
  index.css        tout le style du site
```

## Formulaire de contact

Le formulaire (`Contact.jsx`) valide les champs côté client (nom, email, message)
puis ouvre la messagerie de l'utilisateur avec un email pré-rempli à destination
de qualitycorporate@qualitycorporate.com — aucun serveur n'est nécessaire.

Pour un envoi silencieux sans ouvrir la messagerie (formulaire → boîte mail
directement), il faudra brancher un service comme Formspree, EmailJS, ou une
petite API côté serveur.

## Personnalisation rapide

- Couleurs et polices : variables CSS en haut de `src/index.css` (`--bg`, `--text`, `--accent`, etc.)
- Textes : directement dans chaque composant sous `src/components/`
- Domaines d'expertise et implantations : tableaux `SERVICES` et `OFFICES` en haut de `Services.jsx` et `Presence.jsx`
