import React from 'react'

const Item = ({ item, cart, setCart, items }) => {
    const { id, name, price } = item

    const handleAddItem = id => {
        const item = items.filter(item => item.id === id)
        setCart([
            ...cart,
            item[0]
        ])
    }

    const handleDeleteItem = id => {
        const newCart = cart.filter(item => item.id !== id)
        setCart(newCart)
    }

    return (
        <div>
            <h2>{name}</h2>
            <p>${price}</p>
            {items
                ?
                (<button type="button" onClick={() => handleAddItem(id)}>Buy</button>)
                :
                (<button type="button" onClick={() => handleDeleteItem(id)}>Delete</button>)
            }

        </div>
    )
}
export default Item