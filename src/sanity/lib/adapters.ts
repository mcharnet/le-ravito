import type { MenuItem, Event } from '@/types'
import type { SanityMenuItem, SanityEvent, SanityEventCategory } from './api'
import { urlFor } from './client'

// Fonctions pour convertir les données Sanity vers les types de l'application

export const adaptMenuItem = (sanityItem: SanityMenuItem): MenuItem => {
	const menuItem: MenuItem = {
		id: sanityItem._id,
		name: sanityItem.name,
		description: sanityItem.description || '',
		price: sanityItem.price || 0,
		image: sanityItem.image ? urlFor(sanityItem.image).width(400).height(300).url() : 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop&auto=format&q=60',
		category: sanityItem.category?.name || 'Autre',
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
		image: sanityEvent.image ? urlFor(sanityEvent.image).width(400).height(300).url() : 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop&auto=format&q=60',
		category: sanityEvent.category?.name || 'Autre',
		registeredParticipants: 0 // Toujours 0 pour l'instant (pas de système de réservation)
	}

	// Ajouter price seulement s'il existe pour éviter undefined
	if (sanityEvent.price !== undefined && sanityEvent.price !== null) {
		event.price = sanityEvent.price
	}

	// Ajouter tag seulement s'il existe pour éviter undefined
	if (sanityEvent.category?.name) {
		event.tag = sanityEvent.category.name
	}

	// Ajouter maxParticipants seulement s'il existe pour éviter undefined
	if (sanityEvent.capacity !== undefined && sanityEvent.capacity !== null) {
		event.maxParticipants = sanityEvent.capacity
	}

	return event
}



// Fonction pour adapter les catégories d'événements Sanity
export const adaptEventCategory = (sanityCategory: SanityEventCategory) => {
	return {
		id: sanityCategory._id,
		name: sanityCategory.name,
		description: sanityCategory.description,
		order: sanityCategory.order
	}
}
