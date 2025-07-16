import { useState } from 'react';
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
            <div className="flex items-center w-[120px] h-[50px] cursor-pointer">
              {/* Logo Image - Larger size to replace text */}
              <div className="w-[120px] h-[50px] relative overflow-hidden">
                <img 
                  src={logoImage} 
                  alt="Medifit Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* Desktop Navigation Links - Frame 75 */}
          <div className="hidden lg:flex items-center gap-[40px] absolute left-[774px] top-[32px] w-[450px] h-[26px]">
            <a
              href="#home"
              className="text-[18px] font-normal text-medifit-primary hover:text-medifit-secondary hover:bg-medifit-bg-secondary hover:scale-105 transition-all duration-200 leading-[150%] w-[52px] h-[26px] flex items-center rounded-md px-2"
            >
              Home
            </a>
            <a
              href="#shop"
              className="text-[18px] font-normal text-medifit-primary hover:text-medifit-secondary hover:bg-medifit-bg-secondary hover:scale-105 transition-all duration-200 leading-[150%] w-[43px] h-[26px] flex items-center rounded-md px-2"
            >
              Shop
            </a>
            
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
          <div className="flex items-center space-x-4 lg:space-x-6 lg:absolute lg:right-[100px] lg:top-[25px]">
            {/* Search Icon - Hidden on mobile */}
            <button className="hidden sm:flex p-2 hover:bg-medifit-bg-secondary hover:scale-110 rounded-md transition-all duration-200 w-[40px] h-[40px] items-center justify-center">
              <FiSearch 
                size={20} 
                color="#503217"
                className="transition-transform duration-200 hover:scale-110"
              />
            </button>

            {/* Cart Icon with Badge - Hidden on mobile */}
            <button className="hidden sm:flex relative p-2 hover:bg-medifit-bg-secondary hover:scale-110 rounded-md transition-all duration-200 w-[40px] h-[40px] items-center justify-center">
              <FiShoppingCart 
                size={20} 
                color="#503217"
                className="transition-transform duration-200 hover:scale-110"
              />
              
              {/* Cart Badge */}
              <div className="absolute -top-1 -right-1 w-[18px] h-[18px] bg-medifit-primary rounded-full flex items-center justify-center">
                <span className="text-[10px] font-normal text-white leading-[150%]">
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
                  size={20} 
                  color="#503217"
                  className="transition-transform duration-200"
                />
              ) : (
                <FiMenu 
                  size={20} 
                  color="#503217"
                  className="transition-transform duration-200"
                />
              )}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-medifit-bg-primary border-t border-medifit-bg-secondary shadow-lg">
            <div className="px-4 py-6 space-y-4">
              <a
                href="#home"
                className="block text-[18px] font-normal text-medifit-primary hover:text-medifit-secondary transition-colors duration-200 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#shop"
                className="block text-[18px] font-normal text-medifit-primary hover:text-medifit-secondary transition-colors duration-200 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Shop
              </a>
              
              {/* Mobile Pages Dropdown */}
              <div>
                <button
                  onClick={togglePagesDropdown}
                  className="flex items-center justify-between w-full text-[18px] font-normal text-medifit-primary hover:text-medifit-secondary transition-colors duration-200 py-2"
                >
                  <span>Pages</span>
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`transform transition-transform duration-200 ${
                      isPagesDropdownOpen ? 'rotate-180' : 'rotate-0'
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
                
                {isPagesDropdownOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    <a
                      href="#services"
                      className="block text-[16px] text-medifit-primary hover:text-medifit-secondary transition-colors duration-200 py-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Services
                    </a>
                    <a
                      href="#products"
                      className="block text-[16px] text-medifit-primary hover:text-medifit-secondary transition-colors duration-200 py-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Products
                    </a>
                    <a
                      href="#testimonials"
                      className="block text-[16px] text-medifit-primary hover:text-medifit-secondary transition-colors duration-200 py-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Testimonials
                    </a>
                  </div>
                )}
              </div>
              
              <a
                href="#about"
                className="block text-[18px] font-normal text-medifit-primary hover:text-medifit-secondary transition-colors duration-200 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#contact"
                className="block text-[18px] font-normal text-medifit-primary hover:text-medifit-secondary transition-colors duration-200 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
