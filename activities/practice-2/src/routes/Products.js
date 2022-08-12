import { Link } from 'react-router-dom';

import products from '../data/products';

function Products() {
  return (
    <>
      <h1>Our Products</h1>
      <ul id="products-list">
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>
              {product.title} (${product.price})
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Products;
