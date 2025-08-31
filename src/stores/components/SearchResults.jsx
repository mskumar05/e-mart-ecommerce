import React from 'react';
import { useAppContext } from '../context/AppContext';

const SearchResults = ({ onProductClick }) => {
  const { searchResults, searchQuery } = useAppContext();

  if (!searchQuery.trim()) return null;

  return (
    <div className="search-results">
      <div className="search-results-header">
        <h3>Search Results for "{searchQuery}"</h3>
        <p>{searchResults.length} products found</p>
      </div>
      
      {searchResults.length === 0 ? (
        <div className="no-results">
          <p>No products found for "{searchQuery}"</p>
          <p>Try searching with different keywords</p>
        </div>
      ) : (
        <div className="search-results-grid">
          {searchResults.map((product) => (
            <div 
              key={product.id} 
              className="search-result-item"
              onClick={() => onProductClick(product)}
            >
              <img 
                src={product.image} 
                alt={product.product} 
                className="search-result-image"
              />
              <div className="search-result-details">
                <h4>{product.product}</h4>
                <p className="search-result-brand">
                  {product.company || product.brand}
                </p>
                {product.model && (
                  <p className="search-result-model">{product.model}</p>
                )}
                <p className="search-result-price">₹{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResults;
