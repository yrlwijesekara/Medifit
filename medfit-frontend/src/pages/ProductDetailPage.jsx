import ProductDetail from '../components/ProductDetail';
// Import product images
import productImage1 from '../assets/home/storecollection-1.png';
import productImage2 from '../assets/home/storecollection-2.png';

const ProductDetailPage = () => {
  // Sample product data - you can replace this with props or fetch from API
  const sampleProduct = {
    name: "B12 Medicine",
    currentPrice: 19.00,
    originalPrice: 25.00,
    description: "B12 Medicine is a premium supplement that combats B12 deficiency and supports energy, red blood cell formation, and nervous system health. Perfect for those with fatigue, anemia, or restricted diets like vegetarians and vegans.",
    images: [
      productImage1,
      productImage2
    ],
    benefits: [
      "Boosts energy levels.",
      "Supports healthy brain function.",
      "Promotes red blood cell production.",
      "Aids in maintaining nerve health."
    ]
  };

  return <ProductDetail product={sampleProduct} />;
};

export default ProductDetailPage;