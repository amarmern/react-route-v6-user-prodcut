import { useEffect, useState } from 'react';

const getProduct = async () => {
  const data = await fetch('https://fakestoreapi.com/products');
  const result = data.json();
  return result;
};

function AsyncPage() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getProduct().then((res) => {
      setProduct(res);
    });
  }, []);

  return (
    <ul>
      {product && product.map((prd) => <li key={prd.id}>{prd.title} </li>)}
    </ul>
  );
}

export default AsyncPage;
