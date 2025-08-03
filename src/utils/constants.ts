export const SITE_CONFIG = {
  name: 'Le Ravito',
  description: 'Votre café bar dédié aux sportifs à Lyon',
  url: 'https://leravito.fr',
  ogImage: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=630&fit=crop&auto=format',
  author: 'Le Ravito',
  keywords: 'café sportif lyon, bar coureurs lyon, ravitaillement sport, nutrition sportive, produits bio lyon',
}

export const CONTACT_INFO = {
  address: {
    street: '33 rue Molière',
    city: 'Lyon',
    postalCode: '69006',
    country: 'France',
    full: '33 rue Molière, 69006 Lyon, France',
  },
  phone: '+33 1 23 45 67 89',
  email: 'contact@leravito.fr',
  socialMedia: {
    facebook: 'https://facebook.com/leravitolyon',
    instagram: 'https://instagram.com/leravitolyon',
    twitter: 'https://twitter.com/leravitolyon',
  },
}

export const OPENING_HOURS = [
  { day: 'Lundi', hours: '06:00 - 20:00' },
  { day: 'Mardi', hours: '06:00 - 20:00' },
  { day: 'Mercredi', hours: '06:00 - 20:00' },
  { day: 'Jeudi', hours: '06:00 - 20:00' },
  { day: 'Vendredi', hours: '06:00 - 20:00' },
  { day: 'Samedi', hours: '07:00 - 19:00' },
  { day: 'Dimanche', hours: '08:00 - 18:00' },
]

export const NAVIGATION_ITEMS = [
  { label: 'Accueil', href: '/' },
  { label: 'Menu', href: '/menu' },
  { label: 'Événements', href: '/events' },
  { label: 'Notre Histoire', href: '/notre-histoire' },
  { label: 'Contact', href: '/contact' },
  { label: 'Réserver', href: '/reserver' },
]

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
} as const
