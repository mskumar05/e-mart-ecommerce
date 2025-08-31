import React from 'react';
import { useAppContext } from '../context/AppContext';

const ProductDetail = ({ product }) => {
  const { addToCart } = useAppContext();

  if (!product) {
    return (
      <div className="product-detail-container">
        <div className="product-not-found">
          <h2>Product not found</h2>
          <p>Sorry, the product you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    alert('Product added to cart!');
  };

  return (
    <div className="product-detail-container">
      <div className="product-detail">
        <div className="product-image-section">
          <img 
            src={product.image} 
            alt={product.product} 
            className="product-detail-image"
          />
        </div>
        <div className="product-info-section">
          <h1 className="product-title">{product.product}</h1>
          <div className="product-brand">
            {product.company && <span>Brand: {product.company}</span>}
            {product.brand && <span>Brand: {product.brand}</span>}
          </div>
          {product.model && (
            <div className="product-model">Model: {product.model}</div>
          )}
          <div className="product-price">₹{product.price}</div>
          <div className="product-category">Category: {product.category}</div>
          <div className="product-description">
            <h3>Description:</h3>
            <p>{product.description}</p>
          </div>
          <div className="product-actions">
            <button 
              className="add-to-cart-btn"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
            <button className="buy-now-btn">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
