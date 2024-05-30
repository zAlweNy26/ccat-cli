import { defineCommand } from 'citty'
import { callApi, cat } from '../utils'

export default defineCommand({
	meta: {
		name: 'llm',
		description: 'Configure the llm settings',
	},
	async run() {
		const res = await callApi(cat.largeLanguageModel.getLlmsSettings())
		console.log(res)
	},
})
