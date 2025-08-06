import { TagIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export const eventCategoryType = defineType({
	name: 'eventCategory',
	title: 'Catégorie d\'Événement',
	type: 'document',
	icon: TagIcon,
	fields: [
		defineField({
			name: 'name',
			title: 'Nom de la catégorie',
			type: 'string',
			validation: (rule: any) => rule.required()
		}),

		defineField({
			name: 'description',
			title: 'Description',
			type: 'text',
			rows: 3
		}),

		defineField({
			name: 'order',
			title: 'Ordre d\'affichage',
			type: 'number',
			initialValue: 0,
			validation: (rule: any) => rule.min(0)
		})
	],
	orderings: [
		{
			title: 'Ordre d\'affichage',
			name: 'order',
			by: [{ field: 'order', direction: 'asc' }]
		}
	],
	preview: {
		select: {
			title: 'name',
			subtitle: 'description'
		}
	}
})
