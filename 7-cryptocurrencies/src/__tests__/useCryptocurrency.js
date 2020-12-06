import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Form from 'components/Form'
import { coins, cryptos } from '__mocks__/cryptocurrencies'
import axios from 'axios'

const mockAxios = axios

const setCoin = jest.fn()
const setCryptocurrency = jest.fn()

it('<useCryptocurrency />', async () => {
	mockAxios.get = jest.fn().mockResolvedValue({
		data: cryptos,
	})

	render(<Form setCoin={setCoin} setCryptocurrency={setCryptocurrency} />)

	//verify quantity select coins
	const coinsDropdown = screen.getByTestId('coins-select')
	expect(coinsDropdown.children.length).toEqual(coins.length + 1)

	//verify quantity cryptocurrencies options
	const options = screen.findAllByTestId('crypto-option')
	expect(await options).toHaveLength(10)

	expect(mockAxios.get).toHaveBeenCalledTimes(1)

	//select Bitcoin and USD
	userEvent.selectOptions(screen.getByTestId('coins-select'), 'USD')
	userEvent.selectOptions(screen.getByTestId('crypto-select'), 'BTC')

	//submit
	userEvent.click(screen.getByTestId('btn-submit'))

	//verify functions have been called
	expect(setCoin).toHaveBeenCalledTimes(1)
	expect(setCryptocurrency).toHaveBeenCalledTimes(1)
})
