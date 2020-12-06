import { readFileSync } from 'fs'
import path from 'path'

export const cryptos = JSON.parse(
	readFileSync(path.join(__dirname, 'api.json')).toString()
)

export const coins = [
	{ code: 'USD', name: 'Dollar of United States' },
	{ code: 'MXN', name: 'Mexican Peso' },
	{ code: 'EUR', name: 'Euro' },
	{ code: 'GPB', name: 'Pound Sterling' },
]
