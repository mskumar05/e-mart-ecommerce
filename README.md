# E-Mart - Complete Ecommerce Platform

A modern, responsive ecommerce website built with React and Vite, featuring comprehensive product management, search functionality, and shopping cart capabilities.

## 🚀 Features

### Core Functionality
- **Product Catalog**: Browse products across multiple categories
- **Search System**: Real-time search across all products
- **Product Details**: Detailed product pages with full information
- **Shopping Cart**: Add, remove, and manage cart items
- **Responsive Design**: Works seamlessly on desktop and mobile devices

### Product Categories
- **Electronics**: Mobiles, Computers, Watches, TVs, Speakers, Air Conditioners
- **Fashion**: Men's Fashion, Women's Fashion
- **Home & Living**: Furniture, Kitchen Appliances, Refrigerators
- **Books**: Various book categories

### User Experience
- **Interactive Product Cards**: Hover effects with product information
- **Search Results**: Dropdown with product previews
- **Cart Management**: Quantity controls and total calculation
- **Navigation**: Easy category navigation and product browsing

## 🛠️ Technology Stack

- **Frontend**: React 18
- **Build Tool**: Vite
- **Styling**: CSS3 with modern design patterns
- **State Management**: React Context API
- **Package Manager**: npm

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd e-mart
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in terminal)

## 🏗️ Project Structure

```
e-mart/
├── public/
│   └── assets/          # Product images and data files
├── src/
│   ├── stores/
│   │   ├── components/  # React components
│   │   ├── context/     # Context providers
│   │   ├── data/        # Product data files
│   │   └── pages/       # Page components
│   ├── App.jsx          # Main app component
│   ├── App.css          # Global styles
│   └── main.jsx         # App entry point
├── package.json
├── vite.config.js
└── README.md
```

## 🎯 Key Components

### Core Components
- **AppContext**: Global state management for cart and search
- **Navbar**: Navigation with search and cart functionality
- **Products**: Product listing with category organization
- **ProductDetail**: Detailed product view
- **Cart**: Shopping cart modal with item management
- **SearchResults**: Search functionality with results display

### Product Components
- **Mobiles**: Mobile phone products
- **Computers**: Computer and laptop products
- **Watches**: Smartwatch and traditional watch products
- **Men/Woman**: Fashion products for men and women
- **Furniture**: Home furniture products
- **AC**: Air conditioner products
- **Kitchen**: Kitchen appliance products
- **TV**: Television products
- **Speakers**: Audio speaker products
- **Books**: Book products
- **Fridge**: Refrigerator products

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🎨 Features in Detail

### Search Functionality
- Real-time search as you type
- Searches across product names, brands, models, and descriptions
- Clickable search results that navigate to product details
- Responsive search dropdown

### Shopping Cart
- Add products from product listings or detail pages
- Cart count displayed in navigation
- Modal cart interface with full item management
- Quantity controls (increase/decrease)
- Remove individual items
- Clear entire cart
- Total price calculation
- Checkout functionality

### Product Management
- Product detail pages with comprehensive information
- Product images with hover effects
- Add to cart functionality from multiple locations
- Responsive product grids
- Category-based organization

## 📱 Responsive Design

The application is fully responsive and optimized for:
- Desktop computers
- Tablets
- Mobile phones

## 🚀 Deployment

To deploy the application:

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy the `dist` folder** to your preferred hosting service (Netlify, Vercel, etc.)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**E-Mart Team**
- A complete ecommerce solution built with modern web technologies

## 🙏 Acknowledgments

- React team for the amazing framework
- Vite for the fast build tool
- All contributors and users of this project

---

**Happy Shopping! 🛒**
