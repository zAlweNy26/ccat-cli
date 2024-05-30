import { defu } from 'defu'
import { parseTOML, stringifyTOML } from 'confbox'
import { CatClient, type CatSettings } from 'ccat-api'
import runFiglet from 'figlet'
import { oraPromise } from 'ora'
import { readPackageJSON } from 'pkg-types'

export const packageJson = await readPackageJSON()

export async function saveConfig(config: CatSettings) {
	await Bun.write('.ccat-cli', stringifyTOML(config))
}

export const defaultConfig: CatSettings = {
	baseUrl: 'localhost',
}

let config = defaultConfig

try {
	config = parseTOML<CatSettings>(await Bun.file('./.ccat-cli').text())
}
catch (err) {
	await saveConfig(config)
}

export const cat = new CatClient(defu(config, defaultConfig)).api!

export function figlet(text: string) {
	runFiglet(text, (err, data) => {
		if (err) {
			console.error('Something went wrong...')
			console.dir(err)
			return
		}
		console.log(data)
	})
}

export const callApi = async <T>(api: Promise<T>) => oraPromise(api, 'Fetching the API endpoint...\n')
