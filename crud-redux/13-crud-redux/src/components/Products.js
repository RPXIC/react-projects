import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Product } from 'components'
import { retrieveProductsAction } from 'actions/actionsProduct'

const Products = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch( retrieveProductsAction() )
    },[])

    const { products, error, loading } = useSelector( state => state.products)

    return (
        <>
            <h2 className="text-center my-5">Products List</h2>
            
            { error ? <p className="font-weight-bold alert alert-danger text-center mt-4">Error</p> : null }
            { loading ? <p className="text-center">Loading...</p> : null }

            <table className="table table-striped">
                <thead className="bg-primary table-dark">
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>

                <tbody>
                    { products.length === 0 ? 'There is no product' : (
                        products.map(product => (
                            <Product 
                                key={product.id}
                                product={product}
                            />
                        ))
                    )}
                </tbody>
            </table>
        </>
    )
}
export default Products