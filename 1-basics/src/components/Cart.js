import React from 'react'
import { Item } from 'components'
import './Cart.css'

const Cart = ({ cart, setCart }) => {
    return (
        <div className="cart">
            <h2>Shoping Cart</h2>
            { cart.length === 0
                ?
                <p>Empty cart</p>
                :
                cart.map((item, index) => (
                    <Item key={index} item={item} cart={cart} setCart={setCart} />
                ))
            }
        </div>
    )
}
export default Cart