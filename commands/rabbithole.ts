import { defineCommand } from 'citty'
import { consola } from 'consola'
import chalk from 'chalk'
import mime from 'mime'
import { callApi, cat } from '../utils'

export default defineCommand({
	meta: {
		name: 'rabbithole',
		description: 'Manage the rabbit hole',
	},
	subCommands: {
		file: defineCommand({
			async run() {
				console.log('file!')
			},
		}),
		web: defineCommand({
			async run() {
				console.log('web!')
			},
		}),
		memory: defineCommand({
			async run() {
				console.log('memory!')
			},
		}),
		mimetypes: defineCommand({
			async run() {
				const res = (await callApi(cat.rabbitHole.getAllowedMimetypes())).allowed ?? []
				consola.info(chalk.cyan('Allowed mimetypes:'))
				res.forEach(mt => consola.log(`- ${mt} ${chalk.italic.bold(`(.${mime.getExtension(mt)})`)}`))
			},
		}),
	},
})
