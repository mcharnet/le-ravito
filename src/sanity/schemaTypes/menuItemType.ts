import { DocumentIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export const menuItemType = defineType({
	name: 'menuItem',
	title: 'Élément du Menu',
	type: 'document',
	icon: DocumentIcon,
	fields: [
		defineField({
			name: 'name',
			title: 'Nom du plat',
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
			name: 'price',
			title: 'Prix',
			type: 'number',
			validation: (rule: any) => rule.required().positive()
		}),
		defineField({
			name: 'category',
			title: 'Catégorie',
			type: 'reference',
			to: { type: 'category' },
			validation: (rule: any) => rule.required()
		}),
		defineField({
			name: 'image', 
			title: 'Image',
			type: 'image',
			options: {
				hotspot: true
			}
		}),
		defineField({
			name: 'allergens',
			title: 'Allergènes',
			type: 'array',
			of: [{ type: 'string' }],
			options: {
				list: [
					{ title: 'Gluten', value: 'gluten' },
					{ title: 'Lactose', value: 'lactose' },
					{ title: 'Œufs', value: 'eggs' },
					{ title: 'Noix', value: 'nuts' },
					{ title: 'Poisson', value: 'fish' },
					{ title: 'Crustacés', value: 'shellfish' },
					{ title: 'Soja', value: 'soy' }
				]
			}
		}),
		defineField({
			name: 'isVegetarian',
			title: 'Végétarien',
			type: 'boolean',
			initialValue: false
		}),
		defineField({
			name: 'isVegan',
			title: 'Végan',
			type: 'boolean',
			initialValue: false
		}),
		defineField({
			name: 'isAvailable',
			title: 'Disponible',
			type: 'boolean',
			initialValue: true
		})
	],
	preview: {
		select: {
			title: 'name',
			subtitle: 'category.name',
			media: 'image'
		}
	}
})
