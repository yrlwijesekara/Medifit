import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import HomePage from './pages/HomePage'
import Shop from './pages/shop'
import ProductDetailPage from './pages/ProductDetailPage'
import Contact from './pages/contact'
import About from './pages/About'
import Cart from './pages/Cart'
import './App.css'

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id?" element={<ProductDetailPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </CartProvider>
    </div>
  )
}

export default App
