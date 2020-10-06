import React, { createContext, useState, useEffect } from 'react'

export const RecipesContext = createContext()

const RecipesProvider = props => {

    const [recipes, setRecipes] = useState([])
    const [search, setSearchRecipes] = useState({
        name: '',
        category: ''
    })

    const [retrieve, setRetrieve] = useState(false)

    const { name, category } = search

    useEffect(() => {
        if (retrieve) {
            (async () => {
                let url = ""

                if (name) {
                    url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${name}`
                } else if (category) {
                    url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`
                } else {
                    return
                }

                const res = await fetch(url)
                const response = await res.json()
                setRecipes(response.drinks)
            })()
        }
    }, [retrieve, name, category])

    return (
        <RecipesContext.Provider
            value={{
                recipes,
                setSearchRecipes,
                setRetrieve
            }}
        >
            {props.children}
        </RecipesContext.Provider>
    )
}
export default RecipesProvider