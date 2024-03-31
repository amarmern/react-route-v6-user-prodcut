import { Link } from 'react-router-dom';

const PRODUCTS = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];

function ProductsPage() {
  return (
    <>
      <h1>The Products Page</h1>
      <ul>
        {PRODUCTS.map((prod) => (
          <li key={prod.id} style={{ listStyleType: 'none' }}>
            <Link
              to={`/products/${prod.id}`}
              style={{ color: prod.isFruit ? 'magenta' : 'darkgreen' }}
            >
              {prod.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ProductsPage;
