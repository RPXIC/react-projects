import { ProductDetails } from 'components'
import useProducts from 'hooks/useProducts'

const Home = () => {
  const { products } = useProducts('created')

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