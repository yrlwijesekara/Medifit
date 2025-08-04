import React, { useState } from 'react';

const ProductCard = ({ 
  image, 
  title, 
  price, 
  originalPrice, 
  badge, 
  badgeColor = "#D3744A",
  hasShopNow = false 
}) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleCardClick = () => {
    if (hasShopNow) {
      setIsClicked(!isClicked);
    }
  };

  return (
    <div className="flex flex-col items-start gap-[15px] w-[250px]">
      {/* Product Image Container */}
      <div 
        className="relative flex justify-center items-center w-[250px] h-[220px] bg-[#F2F2F2] rounded-[10px] group cursor-pointer"
        onClick={handleCardClick}
      >
        {/* Product Image */}
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={image}
            alt={title}
            className="max-w-full max-h-full object-contain"
          />
        </div>

        {/* Badge */}
        {badge && (
          <div 
            className="absolute flex justify-center items-center px-[15px] py-[8px] w-auto h-auto top-5 left-5 rounded-[5px] z-10"
            style={{ backgroundColor: badgeColor }}
          >
            <span className="font-sans-serif-collection font-normal text-[13px] leading-[150%] text-white">
              {badge}
            </span>
          </div>
        )}

        {/* Shop Now Button - Only for microscope */}
        {hasShopNow && (
          <div className={`absolute flex justify-center items-center px-[10px] py-[5px] w-[210px] h-[35px] bottom-5 left-5 bg-[#E2DFCF] rounded-[10px] transition-opacity duration-300 ${isClicked ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
            <span className="font-poppins font-medium text-[16px] leading-[150%] text-[#503217]">
              Shop now
            </span>
          </div>
        )}
      </div>

      {/* Product Details */}
      <div className="flex flex-col items-start gap-[5px] w-full">
        <h3 className="font-poppins font-medium text-[24px] leading-[150%] text-[#503217] w-full">
          {title}
        </h3>
        
        {/* Price Section */}
        <div className="flex items-center gap-[10px] w-full">
          <span className="font-poppins font-medium text-[18px] leading-[150%] text-[#8F7D6A]">
            {price}
          </span>
          {originalPrice && (
            <>
              <span className="font-poppins font-medium text-[16px] leading-[150%] text-[#8F7D6A] line-through opacity-80">
                {originalPrice}
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
