export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  tag?: string;
  category: string;
  subcategory?: string;
  isAvailable: boolean;
}

export interface Event {
  id: string;
  name: string;
  description: string;
  date: string;
  time: string;
  price?: number;
  image: string;
  tag?: string;
  category: string;
  maxParticipants?: number;
  registeredParticipants: number;
}

export interface Review {
  id: string;
  name: string;
  review: string;
  rating: number;
  date: string;
}

export interface NavigationItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

// Email & formulaires
export interface ContactFormPayload {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export type ReservationType = "table" | "event" | "click-collect";

export interface ReservationFormPayload {
  name: string;
  email: string;
  phone?: string;
  date?: string;
  time?: string;
  guests?: number;
  type: ReservationType;
  message?: string;
  eventId?: string;
}
