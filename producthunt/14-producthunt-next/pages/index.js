import { useEffect, useState, useContext } from 'react'
import { FirebaseContext } from '../firebase'
import { ProductDetails } from 'components'

const Home = () => {
  const [products, setProducts] = useState([])

  const { firebase } = useContext(FirebaseContext)

  const handleSnapshot = snapshot => {
    const products = snapshot.docs.map(doc => {
      return {
        id: doc.id,
        ...doc.data()
      }
    })
    setProducts(products)
  }

  useEffect(() => {
    (() => {
      firebase.db.collection('products').orderBy('created', 'desc').onSnapshot(handleSnapshot)
    })()
  },[])

  return (
    <div className="products-list">
      <div className="container">
        <ul className="bg-white">
          {products.map(product => (
            <ProductDetails 
              key={product.id} 
              product={product} 
            />
          ))}
        </ul>
      </div>
    </div>
  )
}
export default Home