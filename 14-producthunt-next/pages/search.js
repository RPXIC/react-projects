import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { ProductDetails } from 'components'
import useProducts from 'hooks/useProducts'

const Search = () => {
  const router = useRouter()
  const { query: { q } } = router

  const { products } = useProducts('created')
  const [result, setResult] = useState([])

  useEffect(() => {
    if (q) {
      const search = q.toLowerCase()
      const filter = products.filter(product => {
        return (
          product.name.toLowerCase().includes(search) || 
          product.description.toLowerCase().includes(search)
        )
      })
      setResult(filter)
    }
  },[q, products])

  return (
    <div className="products-list">
      <div className="container">
        <ul className="bg-white">
          {result.map(product => (
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

export default Search