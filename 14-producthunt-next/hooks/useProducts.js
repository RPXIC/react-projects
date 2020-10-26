import { useState, useEffect, useContext } from 'react'
import { FirebaseContext } from '../firebase'

const useProducts = order => {
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
        firebase.db.collection('products').orderBy(order, 'desc').onSnapshot(handleSnapshot)
      })()
    },[])

    return {
        products
    }
}

export default useProducts