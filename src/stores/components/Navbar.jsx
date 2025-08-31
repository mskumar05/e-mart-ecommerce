import React, { useState } from "react";
import { useAppContext } from '../context/AppContext';
import SearchResults from './SearchResults';
import Cart from './Cart';

const Navbar = ({ onProductClick }) => {
    const { 
        searchQuery, 
        setSearchQuery, 
        searchProducts, 
        getCartCount 
    } = useAppContext();
    const [isCartOpen, setIsCartOpen] = useState(false);

    const handleSearchChange = (e) => {
        const query = e.target.value;
        setSearchQuery(query);
        searchProducts(query);
    };

    const handleCartClick = () => {
        setIsCartOpen(true);
    };

    return (
        <>
        <div className="navSection">
            <div className="title">
                <h2>E-Mart</h2>
            </div>
            <div className="search">
                <input 
                    type="text" 
                    placeholder="Search for products, brands and more" 
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
                {searchQuery && <SearchResults onProductClick={onProductClick} />}
            </div>
            <div className="user">
                <div className="user-details">
                    SignIn/SignUp
                </div>
                <div className="cart" onClick={handleCartClick}>
                    Cart ({getCartCount()})
                </div>
            </div>
        </div> 
        <div className="subMenu">
            <ul>
                <li>Mobiles</li>
                <li>Computers</li>
                <li>Watches</li>
                <li>Men Fashion</li>
                <li>Woman Dressing</li>
                <li>Furniture</li>
                <li>Air Conditioners</li>
                <li>Kitchen</li>
                <li>Televisions</li>
                <li>Speakers</li>
                <li>Books</li>
                <li>Refrigerators</li>
            </ul>
        </div>
        <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        </>   
    );
    }
export default Navbar;