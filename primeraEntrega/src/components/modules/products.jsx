import products from '../../Api/products.json'
import '../styles/products.css';

function Products() {
  return (
    <div className="products">
      {products.map(product => (
        <div className="product" 
          key={product.id}>
          <img src={product.image} alt={product.title} />
            <div className="product-content">
                        <h3>{product.title}</h3>
          <p>{product.description}</p>
          <span className='product-category'>{product.category}</span>
          <span className='product-price'>${product.price}</span>
          <span className='product-rating'>{product.rating.rate} ({product.rating.count})</span>

        </div>

        </div>
      ))}
    </div>
  )
}

export default Products