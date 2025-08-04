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
                  <img 
                    src="/shopdetail/features-1.png" 
                    alt="Free shipping" 
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <h3 className="font-poppins font-medium text-xl lg:text-2xl" style={{ color: '#503217' }}>
                  Free shipping
                </h3>
              </div>

              {/* Easy refund */}
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 mb-3 flex items-center justify-center">
                  <img 
                    src="/shopdetail/features-2.png" 
                    alt="Easy refund" 
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <h3 className="font-poppins font-medium text-xl lg:text-2xl" style={{ color: '#503217' }}>
                  Easy refund
                </h3>
              </div>

              {/* Online support */}
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 mb-3 flex items-center justify-center">
                  <img 
                    src="/shopdetail/features-3.png" 
                    alt="Online support" 
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <h3 className="font-poppins font-medium text-xl lg:text-2xl" style={{ color: '#503217' }}>
                  Online support
                </h3>
              </div>

              {/* Flexible payment */}
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 mb-3 flex items-center justify-center">
                  <img 
                    src="/shopdetail/features-4.png" 
                    alt="Flexible payment" 
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <h3 className="font-poppins font-medium text-xl lg:text-2xl" style={{ color: '#503217' }}>
                  Flexible payment
                </h3>
              </div>
            </div>
          </div>

          {/* Customer Testimonials Section */}
          <div className="mt-16 mb-8">
            {/* Section Title */}
            <div className="text-center mb-12">
              <h2 
                className="text-3xl md:text-4xl lg:text-5xl font-poppins font-medium leading-tight"
                style={{ color: '#503217' }}
              >
                Customers review
              </h2>
            </div>

            {/* Testimonials Grid */}
            <div className="flex flex-col lg:flex-row justify-center items-start gap-8 lg:gap-6 xl:gap-8">
              {/* Testimonial 1 - Olivia Garcia */}
              <div className="flex flex-col items-start max-w-md">
                {/* Review Card */}
                <div 
                  className="w-full p-6 mb-4 rounded-[25px_25px_25px_0px]"
                  style={{ backgroundColor: '#F2F2F2' }}
                >
                  <div className="flex items-start gap-2 mb-2">
                    <svg className="w-6 h-6 flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none">
                      <path d="M3 4C3 3.44772 3.44772 3 4 3H20C20.5523 3 21 3.44772 21 4V13C21 13.5523 20.5523 14 20 14H13L8 17V14H4C3.44772 14 3 13.5523 3 13V4Z" stroke="#8F7D6A" strokeWidth="1.5"/>
                      <path d="M8 9H16" stroke="#8F7D6A" strokeWidth="1.5" strokeLinecap="round"/>
                      <path d="M6 17H12" stroke="#8F7D6A" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <p 
                    className="text-lg leading-relaxed"
                    style={{ 
                      color: '#8F7D6A',
                      fontFamily: 'Sans Serif Collection',
                      fontWeight: 400 
                    }}
                  >
                    B12 Medicine keeps me energized and focused all day. A true lifesaver for vitality and wellness!
                  </p>
                </div>
                
                {/* User Info */}
                <div className="flex items-center gap-4">
                  <div className="w-15 h-15 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                    <div 
                      className="w-full h-full bg-cover bg-center"
                      style={{ 
                        backgroundImage: "url('/shopdetail/customer-1.jpg')",
                        backgroundColor: '#F2F2F2'
                      }}
                    ></div>
                  </div>
                  <h3 
                    className="text-lg font-poppins font-medium"
                    style={{ color: '#503217' }}
                  >
                    Olivia Garcia
                  </h3>
                </div>
              </div>

              {/* Testimonial 2 - Sophia Brown */}
              <div className="flex flex-col items-start max-w-md">
                {/* Review Card */}
                <div 
                  className="w-full p-6 mb-4 rounded-[25px_25px_25px_0px]"
                  style={{ backgroundColor: '#F2F2F2' }}
                >
                  <div className="flex items-start gap-2 mb-2">
                    <svg className="w-6 h-6 flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none">
                      <path d="M3 4C3 3.44772 3.44772 3 4 3H20C20.5523 3 21 3.44772 21 4V13C21 13.5523 20.5523 14 20 14H13L8 17V14H4C3.44772 14 3 13.5523 3 13V4Z" stroke="#8F7D6A" strokeWidth="1.5"/>
                      <path d="M8 9H16" stroke="#8F7D6A" strokeWidth="1.5" strokeLinecap="round"/>
                      <path d="M6 17H12" stroke="#8F7D6A" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <p 
                    className="text-lg leading-relaxed"
                    style={{ 
                      color: '#8F7D6A',
                      fontFamily: 'Sans Serif Collection',
                      fontWeight: 400 
                    }}
                  >
                    I've regained my energy and feel amazing thanks to B12 Medicine. Highly recommend for health and stamina!
                  </p>
                </div>
                
                {/* User Info */}
                <div className="flex items-center gap-4">
                  <div className="w-15 h-15 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                    <div 
                      className="w-full h-full bg-cover bg-center"
                      style={{ 
                        backgroundImage: "url('/shopdetail/customer-2.jpg')",
                        backgroundColor: '#F2F2F2'
                      }}
                    ></div>
                  </div>
                  <h3 
                    className="text-lg font-poppins font-medium"
                    style={{ color: '#503217' }}
                  >
                    Sophia Brown
                  </h3>
                </div>
              </div>

              {/* Testimonial 3 - Ethan Harris */}
              <div className="flex flex-col items-start max-w-md">
                {/* Review Card */}
                <div 
                  className="w-full p-6 mb-4 rounded-[25px_25px_25px_0px]"
                  style={{ backgroundColor: '#F2F2F2' }}
                >
                  <div className="flex items-start gap-2 mb-2">
                    <svg className="w-6 h-6 flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none">
                      <path d="M3 4C3 3.44772 3.44772 3 4 3H20C20.5523 3 21 3.44772 21 4V13C21 13.5523 20.5523 14 20 14H13L8 17V14H4C3.44772 14 3 13.5523 3 13V4Z" stroke="#8F7D6A" strokeWidth="1.5"/>
                      <path d="M8 9H16" stroke="#8F7D6A" strokeWidth="1.5" strokeLinecap="round"/>
                      <path d="M6 17H12" stroke="#8F7D6A" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <p 
                    className="text-lg leading-relaxed"
                    style={{ 
                      color: '#8F7D6A',
                      fontFamily: 'Sans Serif Collection',
                      fontWeight: 400 
                    }}
                  >
                    As a vegetarian, B12 Medicine keeps my energy up and my health on track. Perfect for natural support!
                  </p>
                </div>
                
                {/* User Info */}
                <div className="flex items-center gap-4">
                  <div className="w-15 h-15 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                    <div 
                      className="w-full h-full bg-cover bg-center"
                      style={{ 
                        backgroundImage: "url('/shopdetail/customer-3.jpg')",
                        backgroundColor: '#F2F2F2'
                      }}
                    ></div>
                  </div>
                  <h3 
                    className="text-lg font-poppins font-medium"
                    style={{ color: '#503217' }}
                  >
                    Ethan Harris
                  </h3>
                </div>
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