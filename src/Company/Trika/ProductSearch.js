import { useEffect, useState } from 'react';

export default function App() {
  //https://dummyjson.com/products/search?q=Apple
  const [products, setProducts] = useState([]);
  const [terms, setTerms] = useState('');
  //https://dummyjson.com/products/search?q=${products.brand}
  useEffect(() => {
    fetch(`https://dummyjson.com/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/search?q=${terms}`)
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, [terms]);

  return (
    <div className="App">
      <div>
        <input
          type="text"
          placeholder="brand"
          name="terms"
          value={terms}
          onChange={(e) => setTerms(e.target.value)}
        />
      </div>
      <ul>
        {products.map((prd) => (
          <li key={prd.id}>
            {prd.brand} <strong>{prd.title} </strong>
            <label> {prd.description} </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

//const arr1=["1","3","5","Trika","5","1","Trika"]

// const array1 = [17, 12, 23, 11, 10, 67, "test", "develop", 6, 5]
// const array2 = [13, 3, 17, 23, 10, 34, "develop", 5, 6, "test"]

// const resultObject = {
// found: [],
// notFound: []
// };
