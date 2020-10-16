import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addNewProduct } from 'actions/actionsProduct'

const NewProduct = ({ history }) => {
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)

    const dispatch = useDispatch()

    const {loading, error} = useSelector( state => state.products)

    const addProduct = product => dispatch( addNewProduct(product) )

    const handleSubmit = e => {
        e.preventDefault()

        if (name.trim() === '' || price <= 0) return

        addProduct({
            name,
            price
        })

        history.push('/')
    }

    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Add New Product
                        </h2>

                        <form
                            onSubmit={handleSubmit}
                        >
                            <div className="form-group">
                                <label>Product name</label>
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="Product Name"
                                    name="name"
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                />
                            </div>

                            <div className="form-group">
                                <label>Product Price</label>
                                <input 
                                    type="number"
                                    className="form-control"
                                    placeholder="Product Price"
                                    name="price"
                                    value={price}
                                    onChange={e => setPrice( Number(e.target.value) )}
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                            >Add</button>
                        </form>

                        { loading ? <p>Loading...</p> : null }
                        { error ? <p className="alert alert-danger p2 mt-4 text-center">Error</p> : null}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NewProduct