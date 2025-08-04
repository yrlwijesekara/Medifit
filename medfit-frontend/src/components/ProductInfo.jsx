import { useState } from 'react';
import { FiShoppingCart, FiChevronDown } from 'react-icons/fi';

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

  return (
    <div className="w-full max-w-2xl mx-auto px-4 xl:px-0">
      {/* Product Name */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-poppins font-medium leading-tight text-medifit-primary mb-4 xl:mb-6">
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
        <div className="relative flex items-center border-2 border-medifit-secondary rounded-lg overflow-hidden bg-medifit-bg-primary min-w-[80px] h-[50px] xl:h-[60px]">
          <span className="flex-1 text-center text-lg xl:text-xl font-poppins font-medium text-medifit-primary">
            {quantity}
          </span>
          <div className="absolute right-2 pointer-events-none">
            <FiChevronDown className="w-4 h-4 xl:w-5 xl:h-5 text-medifit-primary" strokeWidth={1.5} />
          </div>
        </div>

        {/* Add to Cart Button */}
        <button className="flex items-center justify-center gap-2 px-5 py-3 xl:py-3 bg-medifit-primary text-medifit-bg-primary rounded-lg hover:bg-medifit-primary/90 hover:scale-105 transition-all duration-200 font-poppins font-medium text-base xl:text-lg min-w-[150px] shadow-lg">
          <span>Add to cart</span>
          <FiShoppingCart className="w-4 h-4 xl:w-5 xl:h-5" strokeWidth={1.5} />
        </button>
      </div>

      {/* Product Description */}
      <div className="mb-6 xl:mb-8">
        <h2 className="text-lg sm:text-xl xl:text-2xl font-poppins font-medium text-medifit-primary mb-3">
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
        <h2 className="text-lg sm:text-xl xl:text-2xl font-poppins font-medium text-medifit-primary mb-3">
          Key Benefits:
        </h2>
        <div className="space-y-2 xl:space-y-3">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-3">
              <div 
                className="w-2 h-2 rounded-full mt-2 flex-shrink-0" 
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

      {/* Mobile Sticky Add to Cart - Only show on mobile */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg z-50">
        <div className="flex items-center justify-between max-w-sm mx-auto">
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <span className="text-lg font-poppins font-medium" style={{ color: '#8F7D6A' }}>
                ${currentPrice.toFixed(2)}
              </span>
              {originalPrice > currentPrice && (
                <span className="text-sm line-through opacity-70" style={{ color: '#8F7D6A' }}>
                  ${originalPrice.toFixed(2)}
                </span>
              )}
            </div>
            <p className="text-sm" style={{ color: '#8F7D6A' }}>Qty: {quantity}</p>
          </div>
          <button className="flex items-center space-x-2 px-4 py-2 bg-medifit-primary text-medifit-bg-primary rounded-lg hover:bg-medifit-primary/90 transition-all duration-200 font-poppins font-medium text-sm shadow-lg">
            <span>Add to Cart</span>
            <FiShoppingCart size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;