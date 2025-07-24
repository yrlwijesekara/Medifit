import ProductDetail from '../components/ProductDetail';

const ProductDetailPage = () => {
  // Sample product data - you can replace this with props or fetch from API
  const sampleProduct = {
    name: "B12 Medicine",
    currentPrice: 19.00,
    originalPrice: 25.00,
    description: "B12 Medicine is a premium supplement that combats B12 deficiency and supports energy, red blood cell formation, and nervous system health. Perfect for those with fatigue, anemia, or restricted diets like vegetarians and vegans.",
    images: [
      // Add your product image URLs here
      // "/path/to/product-image-1.jpg",
      // "/path/to/product-image-2.jpg"
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