Je dois développer un site vitrine pour une amie qui crée son café bar à destination de sportifs, notamment coureurs, à Lyon au 33 rue Molière 69006.

Je veux un site moderne avec un bon SEO utilisant React, Typescript, nextjs, sanity pour le contenu (notamment menu et événements), tailwind.

Voici son cahier des charges :
"Je me permets de t’envoyer mon Business Plan, que tu n’es absolument pas obligée de lire en entier mais qui te permet d’avoir un peu une idée de l’ambiance et des couleurs – la graphiste étant toujours en train de bosser sur la charte mais les 2 principales couleurs seront le orange vif et le bleu clair !

En ce qui concerne le site, je voulais plutôt quelque chose de simple, des blocs de textes accompagnés de photos qui s'enchaînent avec :

• Présentation du Ravito (une mini phrase d’accroche)
• Réserver
• Click and collect : si possible de ton côté ?
• La carte
• Les valeurs/l’histoire/les fournisseurs
• Nous trouver : si possible de faire lien avec Maps ?
• Réseaux Sociaux
• Contact : Mail et Tel
• Horaires

Quelques idées de sites que je trouve pas forcément joli mais où la structure est pas trop mal :

https://art-restaurant.fr/

https://www.accentue-restaurant.fr/

https://restaurant-bergamote.fr/

Et si jamais, ça pourrait être pas mal d’avoir au-dessus les titres qui redirigent sur les différents blocs comme ici : https://trattino.fr/

Mais honnêtement je cherche pas forcément à avoir un site hyper stylé c’est pas ma priorité, je cherche surtout à avoir un site vitrine avec si possible une redirection sur du Click & Collect !"


Tu peux t'inspirer de ce site pour l'UI : https://preview.themeforest.net/item/kaffen-restaurant-cafe-react-template/full_screen_preview/46030500



Je veux un design system atomique, des composants réutilisables, pas de code dupliqué, une architecture claire. Le thème sera dans un fichier à part styles/theme.ts (tu devras configurer tailwind pour l'utiliser). Il doit être performant, utilisant un React moderne avec des hooks et des contextes si besoin. 



4. Key Technical Considerations

    Responsive Design

    Mobile-first approach
    Breakpoints:
        sm: 640px
        md: 768px
        lg: 1024px
        xl: 1280px

    State Management

    Use React hooks for local state
    Implement context for theme/global states
    Avoid unnecessary re-renders

    Animation Implementation

    Use CSS transitions for simple animations
    Implement smooth scroll behavior
    Add hover effects using Tailwind
    Transition timings example:
    No gradient colors

    transition-duration: 300ms
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1)

    use sanity for the content (especially for the menu and the events)

5. Development Best Practices

    Code Organization

    Keep components small and focused
    Use consistent file naming
    Implement proper commenting
    Follow DRY principle

    Styling Methodology

    Use Tailwind utility classes
    Implement consistent spacing
    Follow color system
    No gradient colors
    Maintain responsive design patterns

    Performance Considerations

    Minimize third-party dependencies

    Image Optimization

    Next.js Image component usage throughout the app
    Remote domains configured in next.config.js for freepik.com
    Priority loading for hero first image

    Layout Optimization

    Responsive grid layouts (1 column mobile, 3 columns desktop)
    Tailwind's container class for consistent spacing
    Mobile-first approach with md: breakpoint
    Proper spacing units through Tailwind classes

    Component Structure

    Modular component architecture
    Reusable button styles
    Consistent styling patterns
    Clean component hierarchy

Components Architecture
1. HeroSlider Component

Purpose: Create a full-screen image with overlay text and CTA buttons.

Requirements:

    Use Next.js Image component for optimization
    Include overlay gradient for text contrast

Key Features:

    Full viewport height
    Gradient overlay (black to transparent)
    Centered text content
    CTA buttons with hover effects

Animation Specifications:

    Fade effect with ease-in-out
    Button hover scale: 1.02

2. StorySection Component

Purpose: Display restaurant's history with an engaging image and story.

Requirements:

    Two-column layout (mobile responsive)
    Custom button with shadow effect
    Image hover animation
    Gradient overlay on image

Key Features:

    Split layout (text/image)
    Decorative border accents
    Custom animated button
    Image hover zoom effect

Styling Notes:

    Use accent colors for text highlights
    Implement before/after pseudo-elements for button effects
    Add shadow effects on hover
    Maintain consistent spacing

Reference Implementation:
3. ReviewSection Component

Purpose: Display customer testimonials in a grid layout.

Requirements:

    Create a reviews data array with name, review text, and rating
    Implement responsive grid layout (1 column mobile, 3 columns desktop)
    Add hover animations for cards
    Include star rating display

Key Features:

    Review cards with hover scaling (1.05)
    Left border accent on review text
    Top border separator for author info
    Star rating using repeated ★ character

Styling Notes:

    Card background: light color
    Text color: dark color
    Border accents: accent colors
    Transition duration: 300ms

4. Menu Page Component

Purpose: Display restaurant menu items in an attractive grid layout.

Requirements:

    Create menuItems array with name, description, price, image, and tag
    Implement responsive grid (1 column mobile, 2 columns desktop)
    Add image hover effects
    Include order buttons

Key Features:

    Menu item cards with hover scaling
    Image zoom on hover
    Tag badges
    Custom animated order buttons
    Price in euros display with accent color

Animation Specifications:

    Card hover scale: 1.05
    Image hover scale: 1.10
    Button hover effect: offset shadow
    Transition durations: 300-500ms

4. Events Page Component

Purpose: Display organized events in an attractive grid layout.

Requirements:

    Create events array with name, description, price, image, and tag
    Implement responsive grid (1 column mobile, 3 columns desktop)
    Add image hover effects
    Include order buttons
    Add a filter by category

Key Features:

    Event cards with hover scaling
    Image zoom on hover
    Tag badges
    Custom animated order buttons
    Price in euros display with accent color

Animation Specifications:

    Card hover scale: 1.05
    Image hover scale: 1.10
    Button hover effect: offset shadow
    Transition durations: 300-500ms

5. Navigation Component

Purpose: Provide consistent navigation across all pages.

Requirements:

    Sticky positioning
    Transparent to solid background on scroll
    Mobile responsive menu
    Smooth scroll for anchor links

Key Features:

    Logo (see Logo Component section)
    Navigation links with underline animation
    Mobile hamburger menu
    Background transition on scroll

Animation Specifications:

    Background transition: 300ms
    Link hover effect: 200ms
    Mobile menu transition: 300ms

6. Footer Component

Purpose: Display contact information and social links.

Requirements:

    Responsive layout
    Social media icons
    Copyright information
    Quick links

Key Features:

    Social icons from Lucide React
    Hover effects on links
    Responsive columns
    Brand logo

Styling Notes:

    Dark background
    Light text
    Accent colors for hover states
    Consistent spacing with main content

7. Logo Component

Purpose: Create a distinctive, layered text logo that serves as the brand identifier.

Requirements:

    Container Design:
        Blue background (#0097B2) with orange accent (#F26109)
        Subtle rounded corners
        Responsive padding (px-6 py-3)
        Scale effect on hover (1.05)

Typography Specifications:

    Font: Lilita One (Google Fonts)
    Letter spacing: 0.2em
    Text size: 24px (text-2xl)
    Case: All uppercase
    Word spacing: gap-2

Layered Text Effect:

    Front layer: Light white text
    Back layer: Black shadow text
    Shadow offset: -4px left, -4px bottom
    Z-index management for proper layering

Animation Specifications:

    Hover scale: 1.05
    Transition duration: 300ms
    Smooth easing function
    Group hover implementation

Key Features:

    Three-word structure with consistent gaps
    Double-layered text for depth
    Interactive hover state
    Responsive scaling
    Proper contrast ratio

Styling Notes:

    Maintain consistent shadow offset
    Ensure proper spacing between words
    Keep container padding proportional
    Implement smooth transitions

Asset Configuration
1. Image Assets
Hero Slider Images

https://fr.freepik.com/photos-gratuite/concept-du-sport-vie-saine-sneakers-pommes-serviettes-bouteille-eau-fond-bois-espace-copie_1160149.htm#fromView=ai&page=1&position=7&uuid=4adb5818-961d-4319-a844-fe4fc23aed93&query=cafeter%C3%ADa+deportiva

Story Section Image

https://www.corunning.fr/blog/wp-content/uploads/2022/06/courir-en-securite-en-groupe-1024x1024.png

Logo 
./logo.png


2. Color System

:root {
  --primary-color: #0097B2; /* Accent Blue */
  --secondary-color: #F26109; /* Accent Orange */
  --tertiary-color: #FFC901; /* Accent Yellow */
  --light-color: #fff9ee; /* Light White */
  --dark-color: #231f20; /* Custom Grey */
  --accent-color: #009D92; /* Dark Green */
}

Usage in Tailwind:

module.exports = {
  theme: {
    extend: {
      colors: {
        "accent-blue": "#0097B2",
        "accent-orange": "#F26109",
        "accent-yellow": "#FFC901",
        "light-white": "#FFF9EE",
        "custom-grey": "#231F20",
        "dark-green": "#009D92",
      }
    }
  }
}

