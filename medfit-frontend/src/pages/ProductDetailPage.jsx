import ProductDetail from '../components/ProductDetail';

const ProductDetailPage = () => {
  // Sample product data - you can replace this with props or fetch from API
  const sampleProduct = {
    name: "B12 Medicine",
    currentPrice: 19.00,
    originalPrice: 25.00,
    description: "B12 Medicine is a premium supplement that combats B12 deficiency and supports energy, red blood cell formation, and nervous system health. Perfect for those with fatigue, anemia, or restricted diets like vegetarians and vegans.",
    images: [
      "/shopdetail/shopdetails-1.png",    // First B12 supplement image
      "/shopdetail/shopdetails-2.png",    // Second B12 supplement image
      "/home/storecollection-1.png",      // Fallback from public assets
      "/home/storecollection-2.png"       // Additional fallback view
    ],
    benefits: [
      "Boosts energy levels.",
      "Supports healthy brain function.",
      "Promotes red blood cell production.",
      "Aids in maintaining nerve health."
    ]
  };

  return <ProductDetail product={sampleProduct} productId="b12-medicine" />;
};

export default ProductDetailPage;