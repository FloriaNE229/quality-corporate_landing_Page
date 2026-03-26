# Wumo — Landing Page React

Marketplace de services pour l'Afrique de l'Ouest.

## Stack

- **React 18** + **Vite 5**
- **Bricolage Grotesque** — police sans-serif moderne (titres/corps)
- **Instrument Serif** — police serif italique (accents visuels)
- CSS Modules par composant — zéro librairie CSS externe
- Icônes SVG inline custom — zéro emoji, zéro librairie d'icônes

## Palette

| Token | Valeur | Usage |
|-------|--------|-------|
| `--blue` | `#1A56DB` | CTA, liens, navigation |
| `--green` | `#0E9F6E` | Validation, statuts positifs |
| `--orange` | `#FF5A1F` | Badges urgents, promotions |
| `--dark` | `#111928` | Textes principaux, titres |
| `--gray` | `#6B7280` | Textes secondaires |
| `--border` | `#E5E7EB` | Bordures |
| `--bg` | `#F9FAFB` | Fonds de sections alternées |

## Lancement

```bash
npm install
npm run dev
```

Ouvre [http://localhost:5173](http://localhost:5173)

## Structure

```
src/
├── index.css              # Variables CSS globales + reset
├── main.jsx               # Point d'entrée React
├── App.jsx                # Assemblage des sections
└── components/
    ├── Navbar.jsx / .css
    ├── Hero.jsx / .css
    ├── SearchBar.jsx / .css
    ├── Categories.jsx / .css
    ├── HowItWorks.jsx / .css
    ├── Services.jsx / .css
    ├── StatsBand.jsx / .css
    ├── Testimonials.jsx / .css
    ├── CTA.jsx / .css
    └── Footer.jsx / .css
```

## Pages prévues (suite)

- `/services` — Liste avec filtres sidebar
- `/services/:slug` — Détail d'un service
- `/prestataires/:username` — Profil prestataire
- `/register` `/login` — Auth
- `/dashboard` — Espace client
- `/pro/dashboard` — Espace prestataire
- `/pro/wallet` — Wallet & retraits
