import React, { useContext } from 'react'
import { RecipesContext } from 'context'
import { Recipe } from 'components'

const RecipesList = () => {

    const { recipes } = useContext(RecipesContext)

    return (
        <div className="row mt-5">
            {recipes.map(recipe => (
                <Recipe
                    key={recipe.idDrink}
                    recipe={recipe}
                />
            ))}
        </div>
    )
}
export default RecipesList