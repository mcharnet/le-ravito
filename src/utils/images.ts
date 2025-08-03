// Centralisation de toutes les images du site Le Ravito
// Permet une gestion facile et une maintenance simplifiée

export const IMAGES = {
  // Images Hero Slider
  hero: {
    slide1: 'https://images.unsplash.com/photo-1543352634-a1c51d9f1fa7?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    slide2: 'https://images.unsplash.com/photo-1436076863939-06870fe779c2?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },

  // Images Story Section
  story: {
    main: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },

  // Images Menu Items
  menu: {
    smoothieBowl: 'https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=600&h=400&fit=crop&auto=format',
    sandwich: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=600&h=400&fit=crop&auto=format',
    energyBalls: 'https://images.unsplash.com/photo-1553909489-cd47e0ef937f?w=600&h=400&fit=crop&auto=format',
    greenJuice: 'https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=600&h=400&fit=crop&auto=format',
    quinoaSalad: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=400&fit=crop&auto=format',
    proteinCoffee: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&h=400&fit=crop&auto=format',
    chiaPudding: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&h=400&fit=crop&auto=format',
    wrap: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600&h=400&fit=crop&auto=format',
  },

  // Images Événements
  events: {
    morningRun: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop&auto=format',
    nutritionWorkshop: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&h=400&fit=crop&auto=format',
    bikeRide: 'https://images.unsplash.com/photo-1502744688674-c619d1586c9e?w=600&h=400&fit=crop&auto=format',
    clubMeeting: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600&h=400&fit=crop&auto=format',
    trailRunning: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&h=400&fit=crop&auto=format',
    smoothieWorkshop: 'https://images.unsplash.com/photo-1610348725531-843dff563e2c?w=600&h=400&fit=crop&auto=format',
  },

  // Images Page Notre Histoire
  about: {
    team: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=500&fit=crop&auto=format',
    member1: 'https://images.unsplash.com/photo-1494790108755-2616b15734a7?w=300&h=300&fit=crop&auto=format',
    member2: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&auto=format',
    member3: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&auto=format',
  },

  // Images Meta (Open Graph, Twitter)
  meta: {
    ogImage: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=630&fit=crop&auto=format',
  },

  // Images placeholders alternatives
  placeholders: {
    sport1: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop&auto=format',
    sport2: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=600&h=400&fit=crop&auto=format',
    food1: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&h=400&fit=crop&auto=format',
    food2: 'https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=600&h=400&fit=crop&auto=format',
  }
}

// Helper pour récupérer une image avec des paramètres personnalisés
export const getImageUrl = (baseUrl: string, options?: {
  width?: number
  height?: number
  quality?: number
  fit?: 'crop' | 'scale' | 'fill'
}) => {
  const { width = 600, height = 400, quality = 80, fit = 'crop' } = options || {}
  
  // Si l'URL contient déjà des paramètres, on les remplace
  const baseUrlClean = baseUrl.split('?')[0]
  return `${baseUrlClean}?q=${quality}&w=${width}&h=${height}&auto=format&fit=${fit}`
}

// Exports pour les types d'images les plus utilisées
export const HERO_IMAGES = IMAGES.hero
export const MENU_IMAGES = IMAGES.menu
export const EVENT_IMAGES = IMAGES.events
export const ABOUT_IMAGES = IMAGES.about
export const STORY_IMAGES = IMAGES.story
export const META_IMAGES = IMAGES.meta
