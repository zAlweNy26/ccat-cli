import { defineCommand } from 'citty'
import { callApi, cat } from '../utils'

export default defineCommand({
	meta: {
		name: 'embedder',
		description: 'Configure the embedder settings',
	},
	async run() {
		const res = await callApi(cat.embedder.getEmbeddersSettings())
		console.log(res)
	},
})
