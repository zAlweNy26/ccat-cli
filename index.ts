import { consola } from 'consola'
import { defineCommand, runMain, showUsage } from 'citty'
import { figlet, packageJson } from './utils'
import * as subCommands from './commands/index'

figlet('Cheshire Cat CLI')

consola.level = 5
consola.options.formatOptions = {
	compact: true,
	date: false,
	colors: true,
}

const main = defineCommand({
	meta: {
		name: 'ccat',
		description: 'A CLI for the Cheshire Cat API',
		version: packageJson.version,
	},
	subCommands,
	async run({ rawArgs }) {
		if (rawArgs.length === 0) await showUsage(main)
		process.exit(1)
	},
})

// Temporary fix because the figlet is lazy
setTimeout(() => runMain(main), 1)
