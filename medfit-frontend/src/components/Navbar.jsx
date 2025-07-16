import { useState } from 'react';

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
    <nav className="fixed top-0 left-0 right-0 w-full h-[91px] bg-medifit-bg-primary z-50 shadow-sm">
      <div className="w-full px-4 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full max-w-[1920px] mx-auto">
          {/* Logo Section - Group 189 */}
          <div className="flex items-center lg:ml-[310px]">
            <div className="flex items-center space-x-3 w-[157px] h-[37px]">
              {/* Logo Icon - Group 123 */}
              <div className="w-[35.22px] h-[35px] relative">
                {/* Using the exact logo structure from your design */}
                <svg
                  width="35.22"
                  height="35"
                  viewBox="0 0 36 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                >
                  {/* Outer circle */}
                  <circle cx="17.61" cy="17.5" r="16.5" stroke="#8F7D6A" strokeWidth="1.5" fill="none"/>
                  
                  {/* Background vectors */}
                  <rect 
                    x="0.01" 
                    y="2.84" 
                    width="35.21" 
                    height="29.15" 
                    fill="#8F7D6A" 
                    opacity="0.3"
                  />
                  <rect 
                    x="4.11" 
                    y="0.01" 
                    width="26.99" 
                    height="27.11" 
                    fill="#8F7D6A" 
                    opacity="0.3"
                  />
                  
                  {/* Medical cross - main elements */}
                  <rect 
                    x="10.41" 
                    y="13.32" 
                    width="12.23" 
                    height="9.52" 
                    fill="#503217"
                  />
                  <rect 
                    x="6.59" 
                    y="9.41" 
                    width="19.87" 
                    height="17.34" 
                    fill="#503217"
                  />
                </svg>
              </div>
              
              {/* Logo Text */}
              <h1 className="text-[34px] font-medium font-poppins text-medifit-primary leading-[120%]">
                Medifit
              </h1>
            </div>
          </div>

          {/* Desktop Navigation Links - Frame 75 */}
          <div className="hidden lg:flex items-center gap-[30px] absolute left-[744px] top-[32px] w-[403.14px] h-[26px]">
            <a
              href="#home"
              className="text-[18px] font-normal text-medifit-primary hover:text-medifit-secondary transition-colors duration-200 leading-[150%] w-[52px] h-[26px] flex items-center"
            >
              Home
            </a>
            <a
              href="#shop"
              className="text-[18px] font-normal text-medifit-primary hover:text-medifit-secondary transition-colors duration-200 leading-[150%] w-[43px] h-[26px] flex items-center"
            >
              Shop
            </a>
            
            {/* Pages Dropdown - Group 122 */}
            <div className="relative w-[69.14px] h-[26px]">
              <button
                onClick={togglePagesDropdown}
                className="flex items-center space-x-2 text-[18px] font-normal text-medifit-primary hover:text-medifit-secondary transition-colors duration-200 leading-[150%] w-full h-full"
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
                    isPagesDropdownOpen ? 'rotate-180' : 'rotate-[90.53deg]'
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
              
              {/* Dropdown Menu */}
              {isPagesDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-2 z-50">
                  <a
                    href="#services"
                    className="block px-4 py-2 text-medifit-primary hover:bg-medifit-bg-primary transition-colors duration-200"
                  >
                    Services
                  </a>
                  <a
                    href="#products"
                    className="block px-4 py-2 text-medifit-primary hover:bg-medifit-bg-primary transition-colors duration-200"
                  >
                    Products
                  </a>
                  <a
                    href="#testimonials"
                    className="block px-4 py-2 text-medifit-primary hover:bg-medifit-bg-primary transition-colors duration-200"
                  >
                    Testimonials
                  </a>
                </div>
              )}
            </div>
            
            <a
              href="#about"
              className="text-[18px] font-normal text-medifit-primary hover:text-medifit-secondary transition-colors duration-200 leading-[150%] w-[52px] h-[26px] flex items-center"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-[18px] font-normal text-medifit-primary hover:text-medifit-secondary transition-colors duration-200 leading-[150%] w-[67px] h-[26px] flex items-center"
            >
              Contact
            </a>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4 lg:absolute lg:right-[100px] lg:top-[33px]">
            {/* Search Icon - search-2 at left: 1541px */}
            <button className="p-2 hover:bg-medifit-bg-secondary rounded-md transition-colors duration-200 w-[25px] h-[25px] relative">
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0"
              >
                <circle
                  cx="12.5"
                  cy="12.5"
                  r="9.375"
                  stroke="#503217"
                  strokeWidth="1.5"
                  fill="none"
                />
                <path
                  d="m21 21-4.35-4.35"
                  stroke="#503217"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Cart Icon with Badge - cart at left: 1586px */}
            <button className="relative p-2 hover:bg-medifit-bg-secondary rounded-md transition-colors duration-200 w-[25px] h-[25px]">
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0"
              >
                {/* Cart body */}
                <rect
                  x="6.77"
                  y="18.23"
                  width="9.46"
                  height="3.13"
                  stroke="#503217"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  rx="3"
                  fill="none"
                />
                {/* Cart main area */}
                <rect
                  x="3.13"
                  y="3.65"
                  width="16.25"
                  height="12.5"
                  stroke="#503217"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  rx="3"
                  fill="none"
                />
              </svg>
              
              {/* Cart Badge - Group 282 at left: 1605px */}
              <div className="absolute -top-1 -right-1 w-[10.42px] h-[11.44px] bg-medifit-primary rounded-full flex items-center justify-center">
                <span className="text-[8px] font-normal text-white leading-[150%]">
                  0
                </span>
              </div>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 hover:bg-medifit-bg-secondary rounded-md transition-colors duration-200"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMenuOpen ? (
                  <path
                    d="M18 6L6 18M6 6l12 12"
                    stroke="#503217"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                ) : (
                  <path
                    d="M3 12h18M3 6h18M3 18h18"
                    stroke="#503217"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                )}
              </svg>
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
