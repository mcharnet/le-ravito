import { TagIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export const categoryType = defineType({
	name: 'category',
	title: 'Catégorie de Menu',
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
			rows: 2
		}),
		defineField({
			name: 'order',
			title: 'Ordre d\'affichage',
			type: 'number',
			initialValue: 0
		})
	],
	preview: {
		select: {
			title: 'name',
			subtitle: 'description'
		}
	}
})
