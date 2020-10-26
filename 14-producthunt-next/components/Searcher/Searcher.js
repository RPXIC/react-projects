import { useState } from 'react'
import Router from 'next/router'
import { InputText, InputSubmit, Form } from './styles'

const Searcher = () => {
    const [query, setQuery] = useState('')

    const handleSubmit = e => {
        e.preventDefault()

        if (query.trim() === '' || query.trim() === Router.query.q) return

        Router.push({
            pathname: '/search',
            query: { q : query }
        })
    }

    return ( 
        <Form
            onSubmit={handleSubmit}
        >
            <InputText 
                type="text" 
                placeholder="Search products"
                onChange={e => setQuery(e.target.value)}    
            />
            <InputSubmit type="submit">Search</InputSubmit>
        </Form>
    )
}
export default Searcher