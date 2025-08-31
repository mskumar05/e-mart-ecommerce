import React from 'react';
import {womanData} from '../data/woman';
import { useAppContext } from '../context/AppContext';

const Woman = ({ onProductClick }) => {
    const { addToCart } = useAppContext();
    const firstFiveImages = womanData.slice(0, 5);

    const handleProductClick = (product) => {
        if (onProductClick) {
            onProductClick(product);
        }
    };

    const handleAddToCart = (e, product) => {
        e.stopPropagation();
        addToCart(product);
        alert('Product added to cart!');
    };

    return (
        <>
        <h2>Woman Dressing</h2>
        <div className='proSection'>
            {
                firstFiveImages.map((item) => {
                    return (
                        <div 
                            className='imgBox' 
                            key={item.id}
                            onClick={() => handleProductClick(item)}
                        >
                            <img className='proImage' src={item.image} alt="woman fashion" />
                            <div className="product-overlay">
                                <div className="product-info">
                                    <h3>{item.product}</h3>
                                    <p>{item.brand}</p>
                                    <p className="price">₹{item.price}</p>
                                </div>
                                <button 
                                    className="add-to-cart-btn"
                                    onClick={(e) => handleAddToCart(e, item)}
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>    
                    )
                })
            }
        </div>
        </>
    )
}

export default Woman;
