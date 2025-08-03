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

export interface NavigationItem {
  label: string
  href: string
  isExternal?: boolean
}
