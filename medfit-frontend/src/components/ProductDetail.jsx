import Navbar from './Navbar';
import ProductImage from './ProductImage';
import ProductInfo from './ProductInfo';

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
    <div className="min-h-screen bg-medifit-white relative flex flex-col">
      {/* Navigation */}
      <Navbar />
      
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Decorative shapes based on your design */}
        <div className="absolute w-[147px] h-[112px] left-[60px] top-[981px] opacity-10 transform rotate-12 bg-medifit-secondary rounded-lg"></div>
        <div className="hidden lg:block absolute w-[100px] h-[80px] right-[100px] top-[500px] opacity-5 transform -rotate-12 bg-medifit-primary rounded-full"></div>
      </div>

      {/* Main Content */}
      <div className="relative flex-1 flex items-center justify-center pt-[100px] pb-20 lg:pb-8 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-7xl mx-auto">
          {/* Product Detail Section */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-center lg:space-x-12 xl:space-x-16 space-y-8 lg:space-y-0 min-h-[600px] lg:min-h-[500px]">
            {/* Product Images - Left Side */}
            <div className="w-full lg:w-auto lg:flex-shrink-0 flex justify-center lg:justify-start">
              <ProductImage 
                images={product.images}
                productName={product.name}
              />
            </div>

            {/* Product Information - Right Side */}
            <div className="w-full lg:flex-1 lg:max-w-[767px] flex justify-center lg:justify-start">
              <div className="w-full max-w-[767px]">
                <ProductInfo 
                  name={product.name}
                  currentPrice={product.currentPrice}
                  originalPrice={product.originalPrice}
                  description={product.description}
                  benefits={product.benefits}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Bottom Spacing for Sticky Cart */}
      <div className="lg:hidden h-20"></div>
    </div>
  );
};

export default ProductDetail;