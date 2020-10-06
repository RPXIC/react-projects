import React from 'react'
import { Header, Form, RecipesList } from 'components'
import { CategoriesProvider, RecipesProvider, ModalProvider } from 'context'

const App = () => {
  return (
    <>
      <CategoriesProvider>
        <RecipesProvider>
          <ModalProvider>
            <Header />
            <div className="container mt-5">
              <div className="row">
                <Form />
              </div>
              <RecipesList />
            </div>
          </ModalProvider>
        </RecipesProvider>
      </CategoriesProvider>
    </>
  )
}

export default App
