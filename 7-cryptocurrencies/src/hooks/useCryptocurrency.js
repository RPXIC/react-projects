import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const Label = styled.label`
	font-family: 'Bebas Neue', cursive;
	color: #fff;
	text-transform: uppercase;
	font-weight: bold;
	font-size: 2.4rem;
	margin-top: 2rem;
	display: block;
`

const Select = styled.select`
	width: 100%;
	display: block;
	padding: 1rem;
	-webkit-appearance: none;
	border-radius: 10px;
	border: none;
	font-size: 1.2rem;
`

const useCryptocurrency = (label, initialState, options) => {
	const [state, setState] = useState(initialState)

	const SelectCoin = () => (
		<>
			<Label>{label}</Label>
			<Select
				data-testid='crypto-select'
				onChange={(e) => setState(e.target.value)}
				value={state}>
				<option value=''>- Select -</option>
				{options.map((option) => (
					<option
						data-testid='crypto-option'
						key={option.CoinInfo.Id}
						value={option.CoinInfo.Name}>
						{option.CoinInfo.FullName}
					</option>
				))}
			</Select>
		</>
	)
	return [state, SelectCoin, setState]
}

useCryptocurrency.propTypes = {
	label: PropTypes.string.isRequired,
	initialState: PropTypes.string.isRequired,
	options: PropTypes.object.isRequired,
}

export default useCryptocurrency
