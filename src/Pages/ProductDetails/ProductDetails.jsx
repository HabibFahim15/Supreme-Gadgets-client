import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const {id} = useParams();
  const [products, setProducts] = useState({})
  console.log(id);


  useEffect(() => {
    fetch(`http://localhost:5000/products/${id}`)

    .then(res => res.json())
    .then(data => {
      setProducts(data)
      console.log(data);
    })
  },[id])

  return (
    <div>
      {products?.name}
    </div>
  );
};

export default ProductDetails;