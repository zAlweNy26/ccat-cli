import { defineCommand } from 'citty'
import { callApi, cat } from '../utils'

export default defineCommand({
	meta: {
		name: 'plugins',
		description: 'Manage your plugins',
	},
	async run() {
		const res = await callApi(cat.plugins.listAvailablePlugins())
		console.log(res)
	},
})
