import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
	useCdn: process.env.NODE_ENV === 'production',
	apiVersion: '2024-01-01',
})

// Configuration du builder d'URL pour les images
const builder = imageUrlBuilder(client)

export const urlFor = (source: any) => builder.image(source)
