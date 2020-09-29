import React, { useState } from 'react'
import { Header, Footer, Item, Cart } from 'components'
import './App.css'

const App = () => {
  const [items] = useState([
    { id: 1, name: 'T-Shirt ReactJS', price: 50 },
    { id: 2, name: 'T-Shirt VueJS', price: 40 },
    { id: 3, name: 'T-Shirt NodeJS', price: 30 },
    { id: 4, name: 'T-Shirt Angular', price: 20 }
  ])
  const [cart, setCart] = useState([])

  const date = new Date().getFullYear()

  return (
    <>
      <Header title="Online shop" />
      <h1>List items</h1>
      <div className="flex">
        <div>
          {items.map(item =>
            <Item
              key={item.id}
              item={item}
              cart={cart}
              items={items}
              setCart={setCart}
            />
          )}
        </div>
        <Cart cart={cart} setCart={setCart} />
      </div>
      <Footer date={date} />
    </>
  )
}

export default App
