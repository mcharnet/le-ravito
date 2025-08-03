import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './src/sanity/schemaTypes'

export default defineConfig({
	name: 'le-ravito',
	title: 'Le Ravito - Restaurant',

	projectId: 'zuratval',
	dataset: 'production',

	plugins: [
		deskTool(),
		visionTool()
	],

	schema: {
		types: schemaTypes,
	},

	basePath: '/studio'
})
