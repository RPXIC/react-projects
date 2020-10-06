import React, { createContext, useEffect, useState } from 'react'

export const ModalContext = createContext()

const ModalProvider = props => {
    const [id, setId] = useState(null)
    const [infoRecipe, setInfoRecipe] = useState(({}))

    useEffect(() => {
        if (!id) return
            ; (async () => {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
                const res = await fetch(url)
                const result = await res.json()
                setInfoRecipe(result.drinks[0])
            })()
    }, [id])

    return (
        <ModalContext.Provider
            value={{
                infoRecipe,
                setId,
                setInfoRecipe
            }}
        >
            {props.children}
        </ModalContext.Provider>
    )
}

export default ModalProvider
