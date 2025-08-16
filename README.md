# Medifit

A modern e-commerce platform for health and medical products built with React and Vite.

## Overview

Medifit is a responsive web application that provides a seamless shopping experience for health, wellness, and medical products. The platform features a modern design with comprehensive product management, cart functionality, and user-friendly navigation.

## Features

- **Product Catalog**: Browse and search through various health and medical products
- **Product Details**: Detailed product pages with images, descriptions, and specifications
- **Shopping Cart**: Add, remove, and manage items in your cart
- **Responsive Design**: Optimized for desktop and mobile devices
- **Modern UI**: Clean and intuitive interface built with Tailwind CSS
- **Fast Performance**: Built with Vite for optimal loading speeds

## Tech Stack

- **Frontend**: React 19.1.0
- **Build Tool**: Vite 7.0.4
- **Styling**: Tailwind CSS 4.1.11
- **Routing**: React Router DOM 7.6.3
- **Icons**: React Icons 5.5.0
- **State Management**: React Context API

## Project Structure

```
medfit-frontend/
├── public/                 # Static assets and images
│   ├── home/              # Homepage images
│   └── shopdetail/        # Product detail images
├── src/
│   ├── components/        # Reusable React components
│   │   ├── Center.jsx
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProductCard.jsx
│   │   ├── ProductDetail.jsx
│   │   ├── ProductImage.jsx
│   │   └── ProductInfo.jsx
│   ├── context/           # React Context providers
│   │   └── CartContext.jsx
│   ├── data/              # Static data and mock data
│   │   └── products.js
│   ├── pages/             # Page components
│   │   ├── About.jsx
│   │   ├── Cart.jsx
│   │   ├── HomePage.jsx
│   │   ├── ProductDetailPage.jsx
│   │   ├── contact.jsx
│   │   └── shop.jsx
│   ├── App.jsx            # Main application component
│   ├── main.jsx           # Application entry point
│   ├── App.css            # Application styles
│   └── index.css          # Global styles
├── package.json           # Dependencies and scripts
└── vite.config.js         # Vite configuration
```

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Medifit/medfit-frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build
- `npm run lint` - Run ESLint for code quality checks

## Pages

- **Home** (`/`) - Landing page with featured products and categories
- **Shop** (`/shop`) - Product catalog with filtering and search
- **Product Detail** (`/product/:id`) - Detailed product information
- **Cart** (`/cart`) - Shopping cart management
- **About** (`/about`) - Company information and mission
- **Contact** (`/contact`) - Contact form and information

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## License

This project is private and proprietary.

## Support

For support and questions, please contact the development team.