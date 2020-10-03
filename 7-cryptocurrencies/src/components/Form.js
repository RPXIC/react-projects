import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import axios from 'axios'

import { Error } from 'components'
import { useCoin, useCryptocurrency } from 'hooks'

const Button = styled.input`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #66A2FE;
    border: none;
    width: 100%;
    border-radius: 10px;
    color: #FFF;
    transition: background-color .3s ease;
    &:hover {
        background-color: #326AC0;
        cursor: pointer;
    }
`

const Form = ({ setCoin, setCryptocurrency }) => {
    const COINS = [
        { code: 'USD', name: 'Dollar of United States' },
        { code: 'MXN', name: 'Mexican Peso' },
        { code: 'EUR', name: 'Euro' },
        { code: 'GPB', name: 'Pound Sterling' }
    ]
    const [coin, SelectCoin] = useCoin('Select your coin', '', COINS)
    const [data, setData] = useState([])
    const [cryptocurrency, SelectCryptocurrency] = useCryptocurrency('Select your cryptocurrency', '', data)
    const [error, setError] = useState(false)

    useEffect(() => {
        (async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
            const res = await axios.get(url)
            setData(res.data.Data)
        })()
    }, [])

    const calculate = e => {
        e.preventDefault()

        if (coin.trim() === "" || cryptocurrency.trim() === "") return setError(true)

        setError(false)
        setCoin(coin)
        setCryptocurrency(cryptocurrency)
    }

    return (
        <form
            onSubmit={calculate}
        >
            {error ? <Error msg="All fields are required" /> : null}
            <SelectCoin />
            <SelectCryptocurrency />
            <Button
                type="submit"
                value="Calculate"
            />
        </form>
    )
}

Form.propTypes = {
    setCoin: PropTypes.func.isRequired,
    setCryptocurrency: PropTypes.func.isRequired
}

export default Form