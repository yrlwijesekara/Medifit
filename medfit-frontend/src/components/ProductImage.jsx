import { useState } from 'react';
import logoImage from '../assets/home/logo.png';

const ProductImage = ({ images = [], productName = "B12 Medicine" }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  
  // Default images if none provided
  const defaultImages = [
    logoImage,
    logoImage
  ];
  
  const productImages = images.length > 0 ? images : defaultImages;

  return (
    <div className="w-full lg:w-[463px] space-y-4">
      {/* Main Product Image */}
      <div className="relative w-full h-[300px] sm:h-[350px] lg:h-[402px] bg-gradient-to-br from-medifit-bg-primary to-medifit-bg-secondary rounded-lg overflow-hidden shadow-lg group">
        <img 
          src={productImages[selectedImage]} 
          alt={productName}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Medifit Logo Overlay */}
        <div className="absolute bottom-4 left-4 flex items-center space-x-2 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg shadow-md">
          <div className="w-[18px] h-[18px] relative">
            <img 
              src={logoImage} 
              alt="Medifit Logo" 
              className="w-full h-full object-contain"
            />
          </div>
          <span className="text-medifit-primary font-poppins font-medium text-sm">
            Medifit
          </span>
        </div>
      </div>

      {/* Secondary Image - Hidden on mobile, visible on larger screens */}
      {productImages.length > 1 && (
        <div className="hidden lg:block relative w-full h-[402px] bg-gradient-to-br from-medifit-bg-secondary to-medifit-bg-primary rounded-lg overflow-hidden shadow-lg group">
          <img 
            src={productImages[1]} 
            alt={`${productName} - Additional View`}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}

      {/* Image Thumbnails - Mobile */}
      {productImages.length > 1 && (
        <div className="lg:hidden flex space-x-2 overflow-x-auto pb-2">
          {productImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                selectedImage === index 
                  ? 'border-medifit-primary shadow-md' 
                  : 'border-gray-200 hover:border-medifit-secondary'
              }`}
            >
              <img 
                src={image} 
                alt={`${productName} - View ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductImage;