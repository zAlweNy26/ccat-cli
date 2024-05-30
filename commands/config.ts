import { defineCommand } from 'citty'
import { consola } from 'consola'
import type { CatSettings } from 'ccat-api'
import { defaultConfig, saveConfig } from '../utils'

export default defineCommand({
	meta: {
		name: 'config',
		description: 'Configure the Cheshire Cat CLI settings',
	},
	async run() {
		const baseUrl = await consola.prompt('Enter the base URL:', {
			default: defaultConfig.baseUrl,
			initial: defaultConfig.baseUrl,
			placeholder: 'example.com',
			required: true,
			type: 'text',
		})
		const authKey = await consola.prompt('Enter the key to authenticate (optional):', {
			placeholder: 'meow',
			type: 'text',
		})
		const userId = await consola.prompt('Enter the user ID (optional):', {
			placeholder: 'user',
			type: 'text',
		})
		const port = await consola.prompt('Enter the port (optional):', {
			placeholder: '3000',
			type: 'text',
		})
		const secure = await consola.prompt('Use HTTPS?', {
			type: 'confirm',
		})
		const config: CatSettings = {
			baseUrl,
			authKey,
			userId,
			port: port ? Number.parseInt(port) : undefined,
			secure,
		}
		await saveConfig(config)
		consola.success('Configuration saved!')
	},
})
