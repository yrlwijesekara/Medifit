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
    <div className="w-full max-w-sm mx-auto xl:max-w-none xl:w-[350px]">
      {/* Main Product Image */}
      <div className="relative w-full h-[280px] sm:h-[300px] md:h-[320px] xl:h-[300px] rounded-lg overflow-hidden shadow-lg group mb-4 xl:mb-6">
        <img 
          src={productImages[selectedImage]} 
          alt={productName}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-medifit-bg-primary/80 to-medifit-bg-secondary/80"></div>
        
        {/* Medifit Logo Overlay */}
        <div className="absolute bottom-4 left-4 xl:left-1/2 xl:top-[264px] xl:-translate-x-1/2 xl:bottom-auto flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg shadow-md xl:bg-transparent xl:shadow-none xl:backdrop-blur-none">
          <div className="w-[18px] h-[18px]">
            <img 
              src={logoImage} 
              alt="Medifit Logo" 
              className="w-full h-full object-contain"
            />
          </div>
          <span 
            className="text-medifit-primary font-poppins font-medium text-sm xl:text-[20px]"
            style={{ 
              fontWeight: 500,
              lineHeight: '150%' 
            }}
          >
           
          </span>
        </div>
      </div>

      {/* Secondary Image - Hidden on mobile, visible on larger screens */}
      {productImages.length > 1 && (
        <div className="hidden md:block relative w-full h-[260px] xl:h-[280px] rounded-lg overflow-hidden shadow-lg group">
          <img 
            src={productImages[1]} 
            alt={`${productName} - Additional View`}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-medifit-bg-secondary/80 to-medifit-bg-primary/80"></div>
        </div>
      )}

      {/* Image Thumbnails - Mobile */}
      {productImages.length > 1 && (
        <div className="md:hidden flex gap-2 overflow-x-auto pb-2 mt-4">
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