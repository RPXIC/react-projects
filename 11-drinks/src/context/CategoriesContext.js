import React, { createContext, useState, useEffect } from 'react'

export const CategoriesContext = createContext()

const CategoriesProvider = props => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        (async () => {
            const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
            const res = await fetch(url)
            const response = await res.json()
            setCategories(response.drinks)
        })()
    }, [])

    return (
        <CategoriesContext.Provider
            value={{
                categories
            }}
        >
            {props.children}
        </CategoriesContext.Provider>
    )
}

export default CategoriesProvider