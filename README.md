# Le Ravito - Site Web

Site vitrine pour Le Ravito, café bar dédié aux sportifs à Lyon.

## 🏃‍♂️ À propos

Le Ravito est un café bar situé au 33 rue Molière dans le 6ème arrondissement de Lyon, spécialement conçu pour les sportifs. Nous proposons des produits sains, locaux et adaptés aux besoins nutritionnels des athlètes.

## 🛠️ Technologies

- **Framework**: Next.js 14 avec App Router
- **Langage**: TypeScript
- **Styles**: Tailwind CSS
- **CMS**: Sanity (pour le contenu dynamique)
- **Icônes**: Lucide React
- **Images**: Next.js Image avec optimisation

## 🎨 Design System

### Couleurs principales

- **Accent Blue**: #0097B2
- **Accent Orange**: #F26109
- **Accent Yellow**: #FFC901
- **Light White**: #FFF9EE
- **Custom Grey**: #231F20
- **Dark Green**: #009D92

### Typographie

- **Police principale**: System fonts
- **Police d'affichage**: Lilita One (Google Fonts)

## 🚀 Installation

1. **Cloner le repository**

```bash
git clone [repository-url]
cd le-ravito
```

2. **Installer les dépendances**

```bash
npm install
```

3. **Lancer le serveur de développement**

```bash
npm run dev
```

4. **Ouvrir dans le navigateur**

```
http://localhost:3000
```

## 📁 Structure du projet

```
src/
├── components/          # Composants React réutilisables
│   ├── Navigation.tsx   # Barre de navigation
│   ├── Footer.tsx       # Pied de page
│   ├── Logo.tsx         # Logo du site
│   ├── HeroSlider.tsx   # Slider principal
│   ├── StorySection.tsx # Section histoire
│   └── ...
├── pages/              # Pages Next.js
│   ├── index.tsx       # Page d'accueil
│   ├── menu.tsx        # Page menu
│   ├── events.tsx      # Page événements
│   └── ...
├── styles/             # Styles et thème
│   ├── globals.css     # Styles globaux
│   └── theme.ts        # Configuration du thème
├── types/              # Types TypeScript
└── utils/              # Utilitaires et constantes
```

## 📱 Fonctionnalités

### Pages principales

- **Accueil**: Hero slider, présentation, témoignages
- **Menu**: Catalogue des produits avec filtres
- **Événements**: Liste des événements sportifs avec inscriptions
- **Contact**: Informations de contact et formulaire

### Composants clés

- **Navigation responsive** avec menu mobile
- **Hero slider** avec animations
- **Grille de produits** avec filtres par catégorie
- **Système de réservation** (table, événements, click & collect)
- **Section témoignages** avec notes
- **Footer complet** avec horaires et liens

### Fonctionnalités techniques

- **Responsive design** mobile-first
- **Optimisation SEO** avec métadonnées structurées
- **Optimisation d'images** Next.js
- **Animations fluides** CSS et Tailwind
- **Accessibilité** WCAG 2.1
- **Performance** optimisée

## 🎯 Pages et sections

### Page d'accueil

- Hero slider avec call-to-actions
- Section "Le concept"
- Témoignages clients
- Formulaire de réservation
- Informations de contact

### Page Menu

- Grille de produits avec images
- Filtres par catégorie
- Boutons de commande
- Informations nutritionnelles

### Page Événements

- Liste des événements à venir
- Filtres par type d'événement
- Système d'inscription
- Détails des événements

## 🔧 Configuration

### Tailwind CSS

Le projet utilise une configuration Tailwind personnalisée avec les couleurs de la marque et des animations sur mesure.

### Next.js

Configuration optimisée pour:

- Optimisation d'images avec domaines autorisés
- App Router pour les performances
- TypeScript strict

### Variables d'environnement

Créer un fichier `.env.local` :

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
SANITY_PROJECT_ID=your_project_id
SANITY_DATASET=production
```

## 📝 Scripts disponibles

```bash
npm run dev      # Serveur de développement
npm run build    # Build de production
npm run start    # Serveur de production
npm run lint     # Linting du code
```

## 🌐 Déploiement

Le site est optimisé pour le déploiement sur:

- **Vercel** (recommandé)
- **Netlify**
- **AWS Amplify**

## 📞 Contact

**Le Ravito**

- 📍 33 rue Molière, 69006 Lyon
- ☎️ +33 1 23 45 67 89
- ✉️ contact@leravito-lyon.fr

---

Développé avec ❤️ pour la communauté sportive lyonnaise
