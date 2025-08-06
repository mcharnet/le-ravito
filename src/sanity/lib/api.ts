import { client } from './client'
import { menuItemsQuery, eventsQuery, upcomingEventsQuery, eventCategoriesQuery, categoriesQuery } from './queries'

// Types compatibles avec les types existants du projet
export interface SanityCategory {
	_id: string
	name: string
	description?: string
	order: number
}

export interface SanityMenuItem {
	_id: string
	name: string
	description?: string
	price: number
	image?: any
	allergens?: string[]
	isVegetarian: boolean
	isVegan: boolean
	isAvailable: boolean
	category: SanityCategory
}

export interface SanityEventCategory {
	_id: string
	name: string
	description?: string
	order: number
}

export interface SanityEvent {
	_id: string
	title: string
	description?: string
	startDate: string
	endDate?: string
	image?: any
	price?: number
	capacity?: number
	category: SanityEventCategory
	isActive: boolean
}

// Fonctions pour récupérer les données
export const getMenuItems = async (): Promise<SanityMenuItem[]> => {
	try {
		return await client.fetch(menuItemsQuery)
	} catch (error) {
		console.error('Erreur lors de la récupération des éléments du menu:', error)
		return []
	}
}

export const getEvents = async (): Promise<SanityEvent[]> => {
	try {
		return await client.fetch(eventsQuery)
	} catch (error) {
		console.error('Erreur lors de la récupération des événements:', error)
		return []
	}
}

export const getUpcomingEvents = async (): Promise<SanityEvent[]> => {
	try {
		return await client.fetch(upcomingEventsQuery)
	} catch (error) {
		console.error('Erreur lors de la récupération des événements à venir:', error)
		return []
	}
}

export const getCategories = async (): Promise<SanityCategory[]> => {
	try {
		return await client.fetch(categoriesQuery)
	} catch (error) {
		console.error('Erreur lors de la récupération des catégories de menu:', error)
		return []
	}
}

export const getEventCategories = async (): Promise<SanityEventCategory[]> => {
	try {
		return await client.fetch(eventCategoriesQuery)
	} catch (error) {
		console.error('Erreur lors de la récupération des catégories d\'événements:', error)
		return []
	}
}
