import Navbar from './Navbar';
import ProductImage from './ProductImage';
import ProductInfo from './ProductInfo';
import Center from './Center';

const ProductDetail = ({ 
  product = {
    name: "B12 Medicine",
    currentPrice: 19.00,
    originalPrice: 25.00,
    description: "B12 Medicine is a premium supplement that combats B12 deficiency and supports energy, red blood cell formation, and nervous system health. Perfect for those with fatigue, anemia, or restricted diets like vegetarians and vegans.",
    images: [],
    benefits: [
      "Boosts energy levels.",
      "Supports healthy brain function.",
      "Promotes red blood cell production.",
      "Aids in maintaining nerve health."
    ]
  }
}) => {
  return (
    <div className="min-h-screen bg-medifit-white">
      {/* Navigation */}
      <Navbar />
      
      {/* Spacer to prevent navbar overlap */}
      <div className="h-[120px] sm:h-[130px] lg:h-[140px]"></div>
      
      {/* Main Content */}
      <div className="py-8 lg:py-12">
        <Center maxWidth="1200px" padding="px-4 sm:px-6 lg:px-8">
          {/* Product Detail Section */}
          <div className="flex flex-col xl:flex-row xl:items-start xl:justify-center gap-8 xl:gap-12 min-h-[600px] mt-8">
            {/* Product Images - Left Side */}
            <div className="w-full xl:w-auto xl:flex-shrink-0 flex justify-center">
              <ProductImage 
                images={product.images}
                productName={product.name}
              />
            </div>

            {/* Product Information - Right Side */}
            <div className="w-full xl:flex-1 xl:max-w-[600px] flex justify-center">
              <ProductInfo 
                name={product.name}
                currentPrice={product.currentPrice}
                originalPrice={product.originalPrice}
                description={product.description}
                benefits={product.benefits}
              />
            </div>
          </div>
          
          {/* Features Section - Desktop (Full Width Below Both Columns) */}
          <div className="hidden xl:block mt-24 mb-8">
            <div className="flex justify-center items-center gap-16 lg:gap-24">
              {/* Free shipping */}
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 mb-3 flex items-center justify-center">
                  <svg className="w-8 h-8" viewBox="0 0 50 50" fill="none">
                    <path d="M6.25 20.8333H37.5V33.3333H6.25V20.8333Z" stroke="#503217" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M37.5 29.1667H43.75L45.8333 25H43.75V20.8333H37.5V29.1667Z" stroke="#503217" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12.5" cy="37.5" r="4.1667" stroke="#503217" strokeWidth="2.5"/>
                    <circle cx="37.5" cy="37.5" r="4.1667" stroke="#503217" strokeWidth="2.5"/>
                  </svg>
                </div>
                <h3 className="font-poppins font-medium text-xl lg:text-2xl" style={{ color: '#503217' }}>
                  Free shipping
                </h3>
              </div>

              {/* Easy refund */}
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 mb-3 flex items-center justify-center">
                  <svg className="w-8 h-8" viewBox="0 0 50 50" fill="none">
                    <path d="M37.5 12.5H6.25C4.1789 12.5 2.5 14.1789 2.5 16.25V35.4167C2.5 37.4878 4.1789 39.1667 6.25 39.1667H37.5C39.5711 39.1667 41.25 37.4878 41.25 35.4167V16.25C41.25 14.1789 39.5711 12.5 37.5 12.5Z" stroke="#503217" strokeWidth="2.5"/>
                    <path d="M12.5 25H31.25" stroke="#503217" strokeWidth="2.5" strokeLinecap="round"/>
                    <circle cx="35.4167" cy="20.8333" r="2.0833" fill="#503217"/>
                  </svg>
                </div>
                <h3 className="font-poppins font-medium text-xl lg:text-2xl" style={{ color: '#503217' }}>
                  Easy refund
                </h3>
              </div>

              {/* Online support */}
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 mb-3 flex items-center justify-center">
                  <svg className="w-8 h-8" viewBox="0 0 50 50" fill="none">
                    <path d="M18.75 12.5C18.75 5.59644 24.3464 0 31.25 0C38.1536 0 43.75 5.59644 43.75 12.5V25C43.75 31.9036 38.1536 37.5 31.25 37.5C24.3464 37.5 18.75 31.9036 18.75 25V12.5Z" stroke="#503217" strokeWidth="2.5"/>
                    <path d="M12.5 25C12.5 35.4167 20.8333 43.75 31.25 43.75C41.6667 43.75 50 35.4167 50 25" stroke="#503217" strokeWidth="2.5" strokeLinecap="round"/>
                    <path d="M31.25 50V43.75" stroke="#503217" strokeWidth="2.5" strokeLinecap="round"/>
                    <path d="M25 50H37.5" stroke="#503217" strokeWidth="2.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <h3 className="font-poppins font-medium text-xl lg:text-2xl" style={{ color: '#503217' }}>
                  Online support
                </h3>
              </div>

              {/* Flexible payment */}
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 mb-3 flex items-center justify-center">
                  <svg className="w-8 h-8" viewBox="0 0 50 50" fill="none">
                    <rect x="6.25" y="8.3333" width="37.5" height="25" rx="4" stroke="#503217" strokeWidth="2.5"/>
                    <path d="M6.25 18.75H43.75" stroke="#503217" strokeWidth="2.5"/>
                    <rect x="35.9375" y="23.4375" width="3.125" height="3.125" fill="#503217"/>
                  </svg>
                </div>
                <h3 className="font-poppins font-medium text-xl lg:text-2xl" style={{ color: '#503217' }}>
                  Flexible payment
                </h3>
              </div>
            </div>
          </div>
        </Center>
      </div>

      {/* Mobile Bottom Spacing for Sticky Cart */}
      <div className="lg:hidden h-20"></div>
    </div>
  );
};

export default ProductDetail;