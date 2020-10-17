import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { editProductAction } from 'actions/productActions'

const EditProduct = () => {
    const history = useHistory()

    const dispatch = useDispatch()

    const [product, setProduct] = useState({
        name: '',
        price: ''
    })

    const editproduct = useSelector( state => state.products.editproduct)
    const error = useSelector( state => state.products.error)

    useEffect(() => {
        setProduct(editproduct)
    },[editproduct])

    const handleChange = e => {
        setProduct({
            ...product,
            [e.target.name] : e.target.value
        })
    }

    if (!product) return null
    const { name, price } = product

    const handleSubmit = e => {
        e.preventDefault()

        dispatch( editProductAction(product) )

        if (name.trim() !== '' && price) return history.push('/')
    }

    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Edit Product
                        </h2>

                        { error ? <p className="font-weight-bold alert alert-danger text-center mt-4">All fields are required</p> : null }

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
                                    onChange={handleChange}
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
                                    onChange={handleChange}
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                            >Save</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default EditProduct