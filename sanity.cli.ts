import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
	api: {
		projectId: 'zuratval',
		dataset: 'production'
	},
	studioHost: 'le-ravito'
})
