import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Products from '../components/Products';
import ProductDetail from './ProductDetail';
import Footer from '../components/Footer';
import { useAppContext } from '../context/AppContext';
import { 
    mobileData, acData, booksData 
} from '../data/proData';
import { 
    computerData 
} from '../data/computers';
import { 
    watchData 
} from '../data/watch';
import { 
    menData 
} from '../data/men';
import { 
    womanData 
} from '../data/woman';
import { 
    furnitureData 
} from '../data/furniture';
import { 
    kitchenData 
} from '../data/kitchen';
import { 
    tvData 
} from '../data/tv';
import { 
    speakerData 
} from '../data/speaker';
import { 
    fridgeData 
} from '../data/fridge';

const LandingPage = () => {
  const { setAllProducts } = useAppContext();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentView, setCurrentView] = useState('products'); // 'products' or 'detail'

  // Combine all products for search functionality
  useEffect(() => {
    const allProducts = [
      ...mobileData,
      ...computerData,
      ...watchData,
      ...menData,
      ...womanData,
      ...furnitureData,
      ...acData,
      ...kitchenData,
      ...tvData,
      ...speakerData,
      ...booksData,
      ...fridgeData
    ];
    setAllProducts(allProducts);
  }, [setAllProducts]);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setCurrentView('detail');
  };

  const handleBackToProducts = () => {
    setSelectedProduct(null);
    setCurrentView('products');
  };

  return (
    <div>
      <Navbar onProductClick={handleProductClick} />
      <Banner />
      
      {currentView === 'products' ? (
        <>
          <Products onProductClick={handleProductClick} />
          <Footer />
        </>
      ) : (
        <>
          <div className="back-button-container">
            <button className="back-btn" onClick={handleBackToProducts}>
              ← Back to Products
            </button>
          </div>
          <ProductDetail product={selectedProduct} />
          <Footer />
        </>
      )}
    </div>
  );
}

export default LandingPage;