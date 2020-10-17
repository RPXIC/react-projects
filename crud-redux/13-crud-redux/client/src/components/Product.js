import React from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { deleteProductAction, selectEditProductAction } from 'actions/productActions'
import Swal from 'sweetalert2'

const Product = ({ product }) => {

    const dispatch = useDispatch()
    const history = useHistory()

    if (!product) return null
    const { name, price, id } = product
    
    const confirmDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'Cancel'
        }).then((result) => {
            if (result.isConfirmed) dispatch( deleteProductAction(id) )
        })
    }

    const editRedirect = product => {
        dispatch( selectEditProductAction(product) )
        history.push(`/products/edit/${product.id}`)
    }

    return (
        <tr>
            <td>{name}</td>
            <td><span className="font-weight-bold">$ {price}</span></td>
            <td className="actions">
                <button 
                    type="button" 
                    onClick={ () => editRedirect(product) } 
                    className="btn btn-primary mr-2">
                Edit</button>
                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => confirmDelete(id)}
                >Delete</button>
            </td>
        </tr>
    )
}
export default Product