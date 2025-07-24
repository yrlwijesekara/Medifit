import { useState } from 'react';
import { FiShoppingCart, FiPlus, FiMinus } from 'react-icons/fi';

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
  const [showFullDescription, setShowFullDescription] = useState(false);

  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const discountPercentage = Math.round(((originalPrice - currentPrice) / originalPrice) * 100);

  return (
    <div className="w-full lg:w-[767px] space-y-6">
      {/* Product Name */}
      <div className="space-y-4">
        <h1 className="text-3xl sm:text-4xl lg:text-[70px] font-poppins font-medium leading-tight text-medifit-primary">
          {name}
        </h1>
        
        {/* Discount Badge - Mobile */}
        {discountPercentage > 0 && (
          <div className="lg:hidden inline-block bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            {discountPercentage}% OFF
          </div>
        )}
      </div>

      {/* Price Section */}
      <div className="flex items-center space-x-4 flex-wrap">
        <span className="text-2xl sm:text-3xl lg:text-[48px] font-poppins font-medium text-medifit-secondary leading-tight">
          ${currentPrice.toFixed(2)} USD
        </span>
        {originalPrice > currentPrice && (
          <span className="text-lg sm:text-xl lg:text-[32px] font-poppins font-medium text-medifit-secondary line-through opacity-70 leading-tight">
            ${originalPrice.toFixed(2)} USD
          </span>
        )}
        {/* Discount Badge - Desktop */}
        {discountPercentage > 0 && (
          <div className="hidden lg:inline-block bg-red-500 text-white px-4 py-2 rounded-full text-lg font-medium">
            {discountPercentage}% OFF
          </div>
        )}
      </div>

      {/* Quantity and Add to Cart */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
        {/* Quantity Selector */}
        <div className="flex items-center border-2 border-medifit-secondary rounded-lg overflow-hidden bg-medifit-bg-primary">
          <button 
            onClick={() => handleQuantityChange(-1)}
            className="p-3 hover:bg-medifit-bg-secondary transition-colors duration-200 text-medifit-primary"
            disabled={quantity <= 1}
          >
            <FiMinus size={16} />
          </button>
          <span className="px-6 py-3 text-xl font-poppins font-medium text-medifit-primary min-w-[60px] text-center">
            {quantity}
          </span>
          <button 
            onClick={() => handleQuantityChange(1)}
            className="p-3 hover:bg-medifit-bg-secondary transition-colors duration-200 text-medifit-primary"
          >
            <FiPlus size={16} />
          </button>
        </div>

        {/* Add to Cart Button */}
        <button className="flex items-center justify-center space-x-3 px-6 py-3 bg-medifit-primary text-medifit-bg-primary rounded-lg hover:bg-medifit-primary/90 hover:scale-105 transition-all duration-200 font-poppins font-medium text-lg min-w-[170px] shadow-lg">
          <span>Add to cart</span>
          <FiShoppingCart size={20} />
        </button>
      </div>

      {/* Product Description */}
      <div className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-poppins font-medium text-medifit-primary">
          Product Description
        </h2>
        <div className="text-medifit-secondary leading-relaxed">
          <p className={`text-base sm:text-lg ${!showFullDescription && 'line-clamp-3'}`}>
            {description}
          </p>
          <button 
            onClick={() => setShowFullDescription(!showFullDescription)}
            className="lg:hidden text-medifit-primary hover:text-medifit-secondary transition-colors duration-200 mt-2 font-medium"
          >
            {showFullDescription ? 'Show Less' : 'Read More'}
          </button>
        </div>
      </div>

      {/* Key Benefits */}
      <div className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-poppins font-medium text-medifit-primary">
          Key Benefits:
        </h2>
        <div className="space-y-3">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-medifit-secondary rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-medifit-secondary text-base sm:text-lg leading-relaxed">
                {benefit}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Sticky Add to Cart */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg z-50">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <span className="text-lg font-poppins font-medium text-medifit-secondary">
                ${currentPrice.toFixed(2)}
              </span>
              {originalPrice > currentPrice && (
                <span className="text-sm text-medifit-secondary line-through opacity-70">
                  ${originalPrice.toFixed(2)}
                </span>
              )}
            </div>
            <p className="text-sm text-medifit-secondary">Qty: {quantity}</p>
          </div>
          <button className="flex items-center space-x-2 px-6 py-3 bg-medifit-primary text-medifit-bg-primary rounded-lg hover:bg-medifit-primary/90 transition-all duration-200 font-poppins font-medium shadow-lg">
            <span>Add to Cart</span>
            <FiShoppingCart size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;