import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const {id} = useParams();
  console.log(id);

  return (
    <div>
      <h1>this is product details</h1>
    </div>
  );
};

export default ProductDetails;