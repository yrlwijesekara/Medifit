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
    <div className="min-h-screen bg-medifit-white">
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <div className="pt-[120px] sm:pt-[140px] lg:pt-[160px] pb-20 lg:pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
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
        </div>
      </div>

      {/* Mobile Bottom Spacing for Sticky Cart */}
      <div className="lg:hidden h-20"></div>
    </div>
  );
};

export default ProductDetail;