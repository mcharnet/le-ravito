import { CalendarIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export const eventType = defineType({
	name: 'event',
	title: 'Événement',
	type: 'document',
	icon: CalendarIcon,
	fields: [
		defineField({
			name: 'title',
			title: 'Titre de l\'événement',
			type: 'string',
			validation: (rule: any) => rule.required()
		}),
		defineField({
			name: 'description',
			title: 'Description',
			type: 'text',
			rows: 4
		}),
		defineField({
			name: 'startDate',
			title: 'Date de début',
			type: 'datetime',
			validation: (rule: any) => rule.required()
		}),
		defineField({
			name: 'endDate',
			title: 'Date de fin',
			type: 'datetime'
		}),
		defineField({
			name: 'image',
			title: 'Image de l\'événement',
			type: 'image',
			options: {
				hotspot: true
			}
		}),
		defineField({
			name: 'price',
			title: 'Prix (optionnel)',
			type: 'number'
		}),
		defineField({
			name: 'capacity',
			title: 'Nombre de places',
			type: 'number'
		}),
		defineField({
			name: 'isActive',
			title: 'Événement actif',
			type: 'boolean',
			initialValue: true
		}),
		defineField({
			name: 'category',
			title: 'Type d\'événement',
			type: 'string',
			options: {
				list: [
					{ title: 'Sport', value: 'Sport' },
					{ title: 'Dégustation', value: 'Dégustation' },
					{ title: 'Soirée', value: 'Soirée' },
					{ title: 'Cours de cuisine', value: 'Cuisine' }
				]
			}
		})
	],
	preview: {
		select: {
			title: 'title',
			subtitle: 'startDate',
			media: 'image'
		},
		prepare: (selection: any) => {
			const { title, subtitle } = selection
			return {
				title,
				subtitle: subtitle ? new Date(subtitle).toLocaleDateString('fr-FR') : ''
			}
		}
	}
})
