import React, { useContext, useState } from 'react'
import { CategoriesContext, RecipesContext } from 'context'

const Form = () => {

    const { categories } = useContext(CategoriesContext)
    const { setSearchRecipes, setRetrieve } = useContext(RecipesContext)

    const [search, setSearch] = useState({
        name: '',
        category: ''
    })

    const handleChange = e => {
        setSearch({
            ...search,
            [e.target.name]: e.target.value
        })
    }

    return (
        <form
            className="col-12"
            onSubmit={e => {
                e.preventDefault()
                setSearchRecipes(search)
                setRetrieve(true)
            }}
        >
            <fieldset className="text-center">
                <legend>Search driks by category or ingredient</legend>
            </fieldset>
            <div className="row mt-4">
                <div className="col-md-4">
                    <input
                        name="name"
                        className="form-control"
                        type="text"
                        placeholder="Search by ingredient"
                        value={search.name}
                        onChange={handleChange}
                    />
                </div>
                <div className="col-md-4">
                    <select
                        className="form-control"
                        name="category"
                        onChange={handleChange}
                    >
                        <option value={search.name}>- Select category -</option>
                        {categories.map(category => (
                            <option
                                key={category.strCategory}
                                value={category.strCategory}
                            >{category.strCategory}</option>
                        ))}
                    </select>
                </div>
                <div className="col-md-4">
                    <input
                        type="submit"
                        className="btn btn-block btn-primary"
                        value="Search drinks"
                    />
                </div>
            </div>
        </form>
    )
}

export default Form