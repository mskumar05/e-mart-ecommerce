import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>About E-Mart</h3>
                    <p>Your trusted online shopping destination for quality products at great prices.</p>
                </div>
                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li>Home</li>
                        <li>Products</li>
                        <li>About Us</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Customer Service</h3>
                    <ul>
                        <li>Help Center</li>
                        <li>Returns & Refunds</li>
                        <li>Shipping Info</li>
                        <li>Size Guide</li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Connect With Us</h3>
                    <div className="social-links">
                        <span>📘 Facebook</span>
                        <span>📷 Instagram</span>
                        <span>🐦 Twitter</span>
                        <span>📧 Email</span>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 E-Mart. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
