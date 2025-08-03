import type { MenuItem, Event } from '@/types'
import type { SanityMenuItem, SanityEvent } from './api'
import { urlFor } from './client'

// Fonctions pour convertir les données Sanity vers les types de l'application

export const adaptMenuItem = (sanityItem: SanityMenuItem): MenuItem => {
	const menuItem: MenuItem = {
		id: sanityItem._id,
		name: sanityItem.name,
		description: sanityItem.description || '',
		price: sanityItem.price || 0,
		image: sanityItem.image ? urlFor(sanityItem.image).width(400).height(300).url() : '/images/placeholder.jpg',
		category: mapSanityCategoryToLocal(sanityItem.category?.name || 'plat'),
		isAvailable: sanityItem.isAvailable ?? true
	}

	// Ajouter tag seulement s'il existe pour éviter undefined
	const tag = sanityItem.isVegetarian ? 'Végétarien' : sanityItem.isVegan ? 'Végan' : null
	if (tag) {
		menuItem.tag = tag
	}

	return menuItem
}

export const adaptEvent = (sanityEvent: SanityEvent): Event => {
	const eventDate = new Date(sanityEvent.startDate)
	
	const event: Event = {
		id: sanityEvent._id,
		name: sanityEvent.title,
		description: sanityEvent.description || '',
		date: eventDate.toISOString().split('T')[0], // Format YYYY-MM-DD
		time: eventDate.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }),
		image: sanityEvent.image ? urlFor(sanityEvent.image).width(400).height(300).url() : '/images/placeholder.jpg',
		category: mapSanityEventCategory(sanityEvent.category),
		registeredParticipants: 0 // À implémenter plus tard avec un système de réservation
	}

	// Ajouter price seulement s'il existe pour éviter undefined
	if (sanityEvent.price !== undefined && sanityEvent.price !== null) {
		event.price = sanityEvent.price
	}

	// Ajouter tag seulement s'il existe pour éviter undefined
	if (sanityEvent.category) {
		event.tag = capitalizeFirst(sanityEvent.category)
	}

	// Ajouter maxParticipants seulement s'il existe pour éviter undefined
	if (sanityEvent.capacity !== undefined && sanityEvent.capacity !== null) {
		event.maxParticipants = sanityEvent.capacity
	}

	return event
}

// Fonction helper pour mapper les catégories Sanity vers les catégories locales
const mapSanityCategoryToLocal = (categoryName: string): 'boisson' | 'snack' | 'plat' | 'dessert' => {
	const lowerCategory = categoryName.toLowerCase()
	
	if (lowerCategory.includes('boisson') || lowerCategory.includes('drink')) return 'boisson'
	if (lowerCategory.includes('snack') || lowerCategory.includes('collation')) return 'snack'
	if (lowerCategory.includes('dessert')) return 'dessert'
	return 'plat' // Par défaut
}

// Fonction helper pour mapper les catégories d'événements Sanity
const mapSanityEventCategory = (category?: string): 'course' | 'entrainement' | 'rencontre' | 'atelier' => {
	if (!category) return 'rencontre'
	
	const lowerCategory = category.toLowerCase()
	
	if (lowerCategory.includes('concert') || lowerCategory.includes('course')) return 'course'
	if (lowerCategory.includes('entrainement') || lowerCategory.includes('training')) return 'entrainement'
	if (lowerCategory.includes('atelier') || lowerCategory.includes('cooking') || lowerCategory.includes('tasting')) return 'atelier'
	return 'rencontre' // Par défaut
}

// Fonction helper pour capitaliser la première lettre
const capitalizeFirst = (str: string) => {
	return str.charAt(0).toUpperCase() + str.slice(1)
}
