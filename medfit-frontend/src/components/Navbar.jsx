import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiShoppingCart, FiMenu, FiX } from 'react-icons/fi';
import logoImage from '../assets/home/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPagesDropdownOpen, setIsPagesDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const togglePagesDropdown = () => {
    setIsPagesDropdownOpen(!isPagesDropdownOpen);
  };

  return (
    <nav className="absolute w-full h-[91px] left-0 top-0 bg-[#EEEDE7] z-50 shadow-sm">
      <div className="w-full px-4 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full max-w-[1920px] mx-auto relative">
          {/* Logo Section - Group 189 */}
          <div className="flex items-center lg:absolute lg:left-[300px] lg:top-1/2 lg:transform lg:-translate-y-1/2">
            <Link to="/" className="flex items-center w-[120px] h-[50px] cursor-pointer">
              {/* Logo Image - Larger size to replace text */}
              <div className="w-[120px] h-[50px] relative overflow-hidden">
                <img 
                  src={logoImage} 
                  alt="Medifit Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation Links - Frame 75 */}
          <div className="hidden lg:flex items-center gap-[40px] absolute left-[774px] top-[32px] w-[450px] h-[26px]">
            <Link
              to="/"
              className="text-[18px] font-normal text-medifit-primary hover:text-medifit-secondary hover:bg-medifit-bg-secondary hover:scale-105 transition-all duration-200 leading-[150%] w-[52px] h-[26px] flex items-center rounded-md px-2"
            >
              Home
            </Link>
            <Link
              to="/shop"
              className="text-[18px] font-normal text-medifit-primary hover:text-medifit-secondary hover:bg-medifit-bg-secondary hover:scale-105 transition-all duration-200 leading-[150%] w-[43px] h-[26px] flex items-center rounded-md px-2"
            >
              Shop
            </Link>
            
            {/* Pages Dropdown - Group 122 */}
            <div className="relative w-[69.14px] h-[26px] group">
              <button
                onClick={togglePagesDropdown}
                className="flex items-center space-x-2 text-[18px] font-normal text-medifit-primary hover:text-medifit-secondary hover:bg-medifit-bg-secondary hover:scale-105 transition-all duration-200 leading-[150%] w-full h-full rounded-md px-2"
              >
                <span>Pages</span>
                {/* Dropdown Arrow - fi_17808404 */}
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`transform transition-transform duration-200 ${
                    isPagesDropdownOpen || 'group-hover:rotate-180'
                  }`}
                >
                  <path
                    d="M3.22 4.78L7.5 9.06L11.78 4.78"
                    stroke="#503217"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              
              {/* Dropdown Menu - Shows on hover and click */}
              <div className={`absolute top-full left-0 mt-2 w-48 bg-[#EEEDE7] rounded-md shadow-lg border border-gray-200 py-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ${isPagesDropdownOpen ? 'opacity-100 visible' : ''}`}>
                <a
                  href="#services"
                  className="block px-4 py-2 text-medifit-primary hover:bg-medifit-bg-secondary hover:text-medifit-secondary hover:scale-105 transition-all duration-200 rounded-md mx-1"
                >
                  Services
                </a>
                <a
                  href="#products"
                  className="block px-4 py-2 text-medifit-primary hover:bg-medifit-bg-secondary hover:text-medifit-secondary hover:scale-105 transition-all duration-200 rounded-md mx-1"
                >
                  Products
                </a>
                <a
                  href="#testimonials"
                  className="block px-4 py-2 text-medifit-primary hover:bg-medifit-bg-secondary hover:text-medifit-secondary hover:scale-105 transition-all duration-200 rounded-md mx-1"
                >
                  Testimonials
                </a>
              </div>
            </div>
            
            <a
              href="#about"
              className="text-[18px] font-normal text-medifit-primary hover:text-medifit-secondary hover:bg-medifit-bg-secondary hover:scale-105 transition-all duration-200 leading-[150%] w-[52px] h-[26px] flex items-center rounded-md px-2"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-[18px] font-normal text-medifit-primary hover:text-medifit-secondary hover:bg-medifit-bg-secondary hover:scale-105 transition-all duration-200 leading-[150%] w-[67px] h-[26px] flex items-center rounded-md px-2"
            >
              Contact
            </a>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-3 lg:space-x-6 lg:absolute lg:right-[100px] lg:top-[25px]">
            {/* Search Icon */}
            <button className="flex p-2 hover:bg-medifit-bg-secondary hover:scale-110 rounded-md transition-all duration-200 w-[40px] h-[40px] items-center justify-center">
              <FiSearch 
                size={18} 
                color="#503217"
                className="transition-transform duration-200 hover:scale-110"
              />
            </button>

            {/* Cart Icon with Badge */}
            <button className="flex relative p-2 hover:bg-medifit-bg-secondary hover:scale-110 rounded-md transition-all duration-200 w-[40px] h-[40px] items-center justify-center">
              <FiShoppingCart 
                size={18} 
                color="#503217"
                className="transition-transform duration-200 hover:scale-110"
              />
              
              {/* Cart Badge */}
              <div className="absolute -top-1 -right-1 w-[16px] h-[16px] lg:w-[18px] lg:h-[18px] bg-medifit-primary rounded-full flex items-center justify-center">
                <span className="text-[9px] lg:text-[10px] font-normal text-white leading-[150%]">
                  0
                </span>
              </div>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 hover:bg-medifit-bg-secondary hover:scale-110 rounded-md transition-all duration-200 w-[40px] h-[40px] flex items-center justify-center"
            >
              {isMenuOpen ? (
                <FiX 
                  size={18} 
                  color="#503217"
                  className="transition-transform duration-200"
                />
              ) : (
                <FiMenu 
                  size={18} 
                  color="#503217"
                  className="transition-transform duration-200"
                />
              )}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-gradient-to-b from-[#EEEDE7] to-[#E5E4DE] border-t border-gray-300 shadow-xl z-40 backdrop-blur-sm">
            <div className="px-6 py-8 space-y-6">
              <Link
                to="/"
                className="group block text-[18px] font-medium text-medifit-primary hover:text-medifit-secondary transition-all duration-300 py-3 px-4 rounded-xl hover:bg-white/50 hover:shadow-md hover:scale-[1.02] transform"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-medifit-primary rounded-full group-hover:bg-medifit-secondary transition-colors duration-300"></span>
                  <span>Home</span>
                </span>
              </Link>
              <Link
                to="/shop"
                className="group block text-[18px] font-medium text-medifit-primary hover:text-medifit-secondary transition-all duration-300 py-3 px-4 rounded-xl hover:bg-white/50 hover:shadow-md hover:scale-[1.02] transform"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-medifit-primary rounded-full group-hover:bg-medifit-secondary transition-colors duration-300"></span>
                  <span>Shop</span>
                </span>
              </Link>
              
              {/* Mobile Pages Dropdown */}
              <div className="relative">
                <button
                  onClick={togglePagesDropdown}
                  className="group flex items-center justify-between w-full text-[18px] font-medium text-medifit-primary hover:text-medifit-secondary transition-all duration-300 py-3 px-4 rounded-xl hover:bg-white/50 hover:shadow-md hover:scale-[1.02] transform"
                >
                  <span className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-medifit-primary rounded-full group-hover:bg-medifit-secondary transition-colors duration-300"></span>
                    <span>Pages</span>
                  </span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`transform transition-all duration-300 group-hover:scale-110 ${
                      isPagesDropdownOpen ? 'rotate-180' : 'rotate-0'
                    }`}
                  >
                    <path
                      d="M3.22 4.78L7.5 9.06L11.78 4.78"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                
                {isPagesDropdownOpen && (
                  <div className="ml-8 mt-3 space-y-3 animate-in slide-in-from-top-2 duration-300">
                    <a
                      href="#services"
                      className="group block text-[16px] text-medifit-primary hover:text-medifit-secondary transition-all duration-300 py-2 px-4 rounded-lg hover:bg-white/40 hover:shadow-sm hover:translate-x-1 transform"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsPagesDropdownOpen(false);
                      }}
                    >
                      <span className="flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 bg-medifit-primary/60 rounded-full group-hover:bg-medifit-secondary transition-colors duration-300"></span>
                        <span>Services</span>
                      </span>
                    </a>
                    <a
                      href="#products"
                      className="group block text-[16px] text-medifit-primary hover:text-medifit-secondary transition-all duration-300 py-2 px-4 rounded-lg hover:bg-white/40 hover:shadow-sm hover:translate-x-1 transform"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsPagesDropdownOpen(false);
                      }}
                    >
                      <span className="flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 bg-medifit-primary/60 rounded-full group-hover:bg-medifit-secondary transition-colors duration-300"></span>
                        <span>Products</span>
                      </span>
                    </a>
                    <a
                      href="#testimonials"
                      className="group block text-[16px] text-medifit-primary hover:text-medifit-secondary transition-all duration-300 py-2 px-4 rounded-lg hover:bg-white/40 hover:shadow-sm hover:translate-x-1 transform"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsPagesDropdownOpen(false);
                      }}
                    >
                      <span className="flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 bg-medifit-primary/60 rounded-full group-hover:bg-medifit-secondary transition-colors duration-300"></span>
                        <span>Testimonials</span>
                      </span>
                    </a>
                  </div>
                )}
              </div>
              
              <a
                href="#about"
                className="group block text-[18px] font-medium text-medifit-primary hover:text-medifit-secondary transition-all duration-300 py-3 px-4 rounded-xl hover:bg-white/50 hover:shadow-md hover:scale-[1.02] transform"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-medifit-primary rounded-full group-hover:bg-medifit-secondary transition-colors duration-300"></span>
                  <span>About</span>
                </span>
              </a>
              <a
                href="#contact"
                className="group block text-[18px] font-medium text-medifit-primary hover:text-medifit-secondary transition-all duration-300 py-3 px-4 rounded-xl hover:bg-white/50 hover:shadow-md hover:scale-[1.02] transform"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-medifit-primary rounded-full group-hover:bg-medifit-secondary transition-colors duration-300"></span>
                  <span>Contact</span>
                </span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
