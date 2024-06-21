import React from 'react';
import ProductDetails from '../ProductDetails';
import './index.css';


const ProductPage = () => {
  const productName = "Motorola g64 5G (Ice Lilac, 128 GB)  (8 GB RAM)";
  const price = "₹14,999 16% off";
  const description = "Bank OfferGet ₹50 instant discount on first Flipkart UPI transaction on order of ₹200 and aboveT&C";

  return (
    <div className="product-page">
      <h1>Product Page</h1>
      <ProductDetails 
        productName={productName} 
        price={price} 
        description={description} 
      />
    </div>
  );
};

export default ProductPage;
