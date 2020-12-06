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

const useCoin = (label, initialState, options) => {
	const [state, setState] = useState(initialState)

	const SelectCoin = () => (
		<>
			<Label>{label}</Label>
			<Select
				data-testid='coins-select'
				onChange={(e) => setState(e.target.value)}
				value={state}>
				<option value=''>- Select -</option>
				{options.map((option) => (
					<option key={option.code} value={option.code}>
						{option.name}
					</option>
				))}
			</Select>
		</>
	)
	return [state, SelectCoin, setState]
}

useCoin.propTypes = {
	label: PropTypes.string.isRequired,
	initialState: PropTypes.string.isRequired,
	options: PropTypes.object.isRequired,
}

export default useCoin
