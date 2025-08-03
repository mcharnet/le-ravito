export interface MenuItem {
  id: string
  name: string
  description: string
  price: number
  image: string
  tag?: string
  category: 'boisson' | 'snack' | 'plat' | 'dessert'
  isAvailable: boolean
}

export interface Event {
  id: string
  name: string
  description: string
  date: string
  time: string
  price?: number
  image: string
  tag?: string
  category: 'course' | 'entrainement' | 'rencontre' | 'atelier'
  maxParticipants?: number
  registeredParticipants: number
}

export interface Review {
  id: string
  name: string
  review: string
  rating: number
  date: string
}

export interface ContactInfo {
  email: string
  phone: string
  address: {
    street: string
    city: string
    postalCode: string
    country: string
  }
  socialMedia: {
    facebook?: string
    instagram?: string
    twitter?: string
  }
}

export interface OpeningHours {
  [key: string]: {
    open: string
    close: string
    closed?: boolean
  }
}

export interface NavigationItem {
  label: string
  href: string
  isExternal?: boolean
}
