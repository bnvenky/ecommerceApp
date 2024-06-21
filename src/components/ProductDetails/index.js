import React from 'react';
import './index.css';

const ProductDetails = ({ productName, price, description }) => {
  return (
    <div className="product-details">
      <h2>{productName}</h2>
      <p>{price}</p>
      <p>{description}</p>
    </div>
  );
};

export default ProductDetails;
