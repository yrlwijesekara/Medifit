import { useState } from 'react';
import { FiShoppingCart, FiChevronUp, FiChevronDown, FiX, FiCheck } from 'react-icons/fi';

const ProductInfo = ({ 
  name = "B12 Medicine",
  currentPrice = 19.00,
  originalPrice = 25.00,
  description = "B12 Medicine is a premium supplement that combats B12 deficiency and supports energy, red blood cell formation, and nervous system health. Perfect for those with fatigue, anemia, or restricted diets like vegetarians and vegans.",
  benefits = [
    "Boosts energy levels.",
    "Supports healthy brain function.",
    "Promotes red blood cell production.",
    "Aids in maintaining nerve health."
  ]
}) => {
  const [quantity, setQuantity] = useState(1);
  const [showCartPopup, setShowCartPopup] = useState(false);

  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decrementQuantity = () => {
    setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  };

  const handleAddToCart = () => {
    setShowCartPopup(true);
    setTimeout(() => {
      setShowCartPopup(false);
    }, 3000);
  };

  return (
    <div className="w-full max-w-2xl mx-auto px-4 xl:px-0">
      {/* Product Name */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-poppins font-medium leading-tight mb-4 xl:mb-6" style={{ color: '#8B4513' }}>
        {name}
      </h1>

      {/* Price Section */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4 xl:mb-6">
        <span 
          className="text-xl sm:text-2xl md:text-3xl xl:text-4xl font-poppins font-medium leading-tight"
          style={{ color: '#8F7D6A' }}
        >
          ${currentPrice.toFixed(2)} USD
        </span>
        {originalPrice > currentPrice && (
          <span 
            className="text-lg sm:text-xl md:text-2xl xl:text-3xl font-poppins font-medium line-through opacity-70 leading-tight"
            style={{ color: '#8F7D6A' }}
          >
            ${originalPrice.toFixed(2)} USD
          </span>
        )}
      </div>

      {/* Quantity and Add to Cart */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6 xl:mb-8">
        {/* Quantity Selector */}
        <div className="flex items-center border-2 border-medifit-secondary rounded-lg overflow-hidden bg-medifit-bg-primary">
          <button 
            onClick={decrementQuantity}
            className="px-3 py-3 xl:py-4 bg-medifit-bg-primary hover:bg-medifit-secondary/10 transition-colors duration-200 border-r border-medifit-secondary/30"
          >
            <FiChevronDown className="w-4 h-4 xl:w-5 xl:h-5 text-medifit-primary" strokeWidth={2} />
          </button>
          
          <span className="px-4 py-3 xl:py-4 text-lg xl:text-xl font-poppins font-medium text-medifit-primary min-w-[60px] text-center">
            {quantity}
          </span>
          
          <button 
            onClick={incrementQuantity}
            className="px-3 py-3 xl:py-4 bg-medifit-bg-primary hover:bg-medifit-secondary/10 transition-colors duration-200 border-l border-medifit-secondary/30"
          >
            <FiChevronUp className="w-4 h-4 xl:w-5 xl:h-5 text-medifit-primary" strokeWidth={2} />
          </button>
        </div>

        {/* Add to Cart Button */}
        <button 
          onClick={handleAddToCart}
          className="flex items-center justify-center gap-2 px-5 py-3 xl:py-3 bg-[#8B4513] text-white rounded-lg hover:bg-[#7A3E11] hover:scale-105 transition-all duration-200 font-poppins font-medium text-base xl:text-lg min-w-[150px] shadow-lg"
        >
          <span>Add to cart</span>
          <FiShoppingCart className="w-4 h-4 xl:w-5 xl:h-5" strokeWidth={1.5} />
        </button>
      </div>

      {/* Product Description */}
      <div className="mb-6 xl:mb-8">
        <h2 className="text-lg sm:text-xl xl:text-2xl font-poppins font-medium mb-3" style={{ color: '#8B4513' }}>
          Product Description
        </h2>
        <div className="max-w-full overflow-hidden">
          <p 
            className="text-sm sm:text-base xl:text-lg leading-relaxed break-words"
            style={{ 
              color: '#8F7D6A',
              fontFamily: 'Sans Serif Collection',
              fontWeight: 400 
            }}
          >
            {description}
          </p>
        </div>
      </div>

      {/* Key Benefits */}
      <div className="mb-8 xl:mb-0">
        <h2 className="text-lg sm:text-xl xl:text-2xl font-poppins font-medium mb-3" style={{ color: '#8B4513' }}>
          Key Benefits:
        </h2>
        <div className="space-y-2 xl:space-y-3">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-3">
              <div 
                className="w-2 h-2 rounded-full flex-shrink-0" 
                style={{ backgroundColor: '#8F7D6A' }}
              ></div>
              <p 
                className="text-sm sm:text-base xl:text-lg leading-relaxed break-words flex-1"
                style={{ 
                  color: '#8F7D6A',
                  fontFamily: 'Sans Serif Collection',
                  fontWeight: 400 
                }}
              >
                {benefit}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section - Mobile (below key benefits) */}
      <div className="xl:hidden mt-12 mb-8">
        <div className="grid grid-cols-2 gap-4 sm:gap-6 px-2 max-w-sm mx-auto">
          {/* Free shipping */}
          <div className="flex flex-col items-center text-center">
            <div className="w-10 h-10 mb-2 flex items-center justify-center">
              <svg className="w-6 h-6" viewBox="0 0 50 50" fill="none">
                <path d="M6.25 20.8333H37.5V33.3333H6.25V20.8333Z" stroke="#503217" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M37.5 29.1667H43.75L45.8333 25H43.75V20.8333H37.5V29.1667Z" stroke="#503217" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12.5" cy="37.5" r="4.1667" stroke="#503217" strokeWidth="2.5"/>
                <circle cx="37.5" cy="37.5" r="4.1667" stroke="#503217" strokeWidth="2.5"/>
              </svg>
            </div>
            <h3 className="font-poppins font-medium text-sm sm:text-base" style={{ color: '#503217' }}>
              Free shipping
            </h3>
          </div>

          {/* Easy refund */}
          <div className="flex flex-col items-center text-center">
            <div className="w-10 h-10 mb-2 flex items-center justify-center">
              <svg className="w-6 h-6" viewBox="0 0 50 50" fill="none">
                <path d="M37.5 12.5H6.25C4.1789 12.5 2.5 14.1789 2.5 16.25V35.4167C2.5 37.4878 4.1789 39.1667 6.25 39.1667H37.5C39.5711 39.1667 41.25 37.4878 41.25 35.4167V16.25C41.25 14.1789 39.5711 12.5 37.5 12.5Z" stroke="#503217" strokeWidth="2.5"/>
                <path d="M12.5 25H31.25" stroke="#503217" strokeWidth="2.5" strokeLinecap="round"/>
                <circle cx="35.4167" cy="20.8333" r="2.0833" fill="#503217"/>
              </svg>
            </div>
            <h3 className="font-poppins font-medium text-sm sm:text-base" style={{ color: '#503217' }}>
              Easy refund
            </h3>
          </div>

          {/* Online support */}
          <div className="flex flex-col items-center text-center">
            <div className="w-10 h-10 mb-2 flex items-center justify-center">
              <svg className="w-6 h-6" viewBox="0 0 50 50" fill="none">
                <path d="M18.75 12.5C18.75 5.59644 24.3464 0 31.25 0C38.1536 0 43.75 5.59644 43.75 12.5V25C43.75 31.9036 38.1536 37.5 31.25 37.5C24.3464 37.5 18.75 31.9036 18.75 25V12.5Z" stroke="#503217" strokeWidth="2.5"/>
                <path d="M12.5 25C12.5 35.4167 20.8333 43.75 31.25 43.75C41.6667 43.75 50 35.4167 50 25" stroke="#503217" strokeWidth="2.5" strokeLinecap="round"/>
                <path d="M31.25 50V43.75" stroke="#503217" strokeWidth="2.5" strokeLinecap="round"/>
                <path d="M25 50H37.5" stroke="#503217" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
            </div>
            <h3 className="font-poppins font-medium text-sm sm:text-base" style={{ color: '#503217' }}>
              Online support
            </h3>
          </div>

          {/* Flexible payment */}
          <div className="flex flex-col items-center text-center">
            <div className="w-10 h-10 mb-2 flex items-center justify-center">
              <svg className="w-6 h-6" viewBox="0 0 50 50" fill="none">
                <rect x="6.25" y="8.3333" width="37.5" height="25" rx="4" stroke="#503217" strokeWidth="2.5"/>
                <path d="M6.25 18.75H43.75" stroke="#503217" strokeWidth="2.5"/>
                <rect x="35.9375" y="23.4375" width="3.125" height="3.125" fill="#503217"/>
              </svg>
            </div>
            <h3 className="font-poppins font-medium text-sm sm:text-base" style={{ color: '#503217' }}>
              Flexible payment
            </h3>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ProductInfo;