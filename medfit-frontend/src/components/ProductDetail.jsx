import { useState } from 'react';
import Navbar from './Navbar';
import ProductImage from './ProductImage';
import ProductInfo from './ProductInfo';
import ProductCard from './ProductCard';
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
  const [currentSlide, setCurrentSlide] = useState(0);

  // Testimonials data - can add more testimonials here
  const testimonials = [
    {
      id: 1,
      name: "Olivia Garcia",
      image: "/shopdetail/customer-1.jpg",
      reviewImage: "/shopdetail/review-1.png",
      review: "B12 Medicine keeps me energized and focused all day. A true lifesaver for vitality and wellness!"
    },
    {
      id: 2,
      name: "Sophia Brown",
      image: "/shopdetail/customer-2.jpg",
      reviewImage: "/shopdetail/review-2.png",
      review: "I've regained my energy and feel amazing thanks to B12 Medicine. Highly recommend for health and stamina!"
    },
    {
      id: 3,
      name: "Ethan Harris",
      image: "/shopdetail/customer-3.jpg",
      reviewImage: "/shopdetail/review-3.png",
      review: "As a vegetarian, B12 Medicine keeps my energy up and my health on track. Perfect for natural support!"
    },
    {
      id: 4,
      name: "Emma Wilson",
      image: "/shopdetail/customer-1.jpg",
      reviewImage: "/shopdetail/review-1.png",
      review: "Amazing results! My energy levels have improved dramatically since taking B12 Medicine daily."
    },
    {
      id: 5,
      name: "Michael Johnson",
      image: "/shopdetail/customer-2.jpg",
      reviewImage: "/shopdetail/review-3.png",
      review: "Best B12 supplement I've tried. Quality ingredients and fast results. Highly recommended!"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

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

          {/* Spacer between sections */}
          <div className="h-10 lg:h-12"></div>

          {/* Customer Testimonials Section */}
          <div className="mb-20 lg:mb-24">
            {/* Section Title */}
            <div className="text-center py-16">
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-poppins font-medium leading-tight my-8"
                style={{ color: '#503217' }}
              >
                Customers review
              </h2>
            </div>

            {/* Mobile Carousel - Click Navigation */}
            <div className="lg:hidden relative">
              {/* Navigation Buttons */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/50 transition-all duration-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="#503217" viewBox="0 0 24 24" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/50 transition-all duration-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="#503217" viewBox="0 0 24 24" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Single Card Display */}
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {testimonials.map((testimonial, index) => (
                    <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                      <div className="flex flex-col items-start">
                        {/* Review Card */}
                        <div
                          className="w-full p-8 mb-6 rounded-[25px_25px_25px_0px] relative h-48 flex flex-col"
                          style={{ backgroundColor: '#F2F2F2' }}
                        >
                          {/* Comment Icon */}
                          <div className="absolute top-4 left-6">
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                              <path d="M3 4C3 3.44772 3.44772 3 4 3H20C20.5523 3 21 3.44772 21 4V13C21 13.5523 20.5523 14 20 14H13L8 17V14H4C3.44772 14 3 13.5523 3 13V4Z" stroke="#8F7D6A" strokeWidth="1.5" />
                              <path d="M8 9H16" stroke="#8F7D6A" strokeWidth="1.5" strokeLinecap="round" />
                              <path d="M6 17H12" stroke="#8F7D6A" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                          </div>

                          {/* Review Text */}
                          <div className="flex-1 flex items-center mt-8">
                            <p
                              className="text-base leading-relaxed"
                              style={{
                                color: '#8F7D6A',
                                fontFamily: 'Sans Serif Collection',
                                fontWeight: 400
                              }}
                            >
                              {testimonial.review}
                            </p>
                          </div>
                        </div>

                        {/* User Info */}
                        <div className="flex items-center gap-4">
                          <div className="w-15 h-15 rounded-full overflow-hidden bg-gray-200 flex-shrink-0 flex items-center justify-center">
                            <img
                              src={testimonial.reviewImage}
                              alt={`Review by ${testimonial.name}`}
                              className="w-10 h-10 object-contain"
                            />
                          </div>
                          <h3
                            className="text-lg font-poppins font-medium"
                            style={{ color: '#503217' }}
                          >
                            {testimonial.name}
                          </h3>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Desktop Layout - 3 Full Cards with Hover Navigation */}
            <div className="hidden lg:block relative">
              {/* Mouse hover areas for navigation */}
              <div
                className="absolute left-0 top-0 w-1/4 h-full z-10 cursor-pointer"
                onMouseEnter={prevSlide}
              ></div>

              <div
                className="absolute right-0 top-0 w-1/4 h-full z-10 cursor-pointer"
                onMouseEnter={nextSlide}
              ></div>

              {/* 3 Cards Display */}
              <div className="flex gap-6 justify-center">
                {testimonials.slice(currentSlide, currentSlide + 3).concat(
                  currentSlide + 3 > testimonials.length ? testimonials.slice(0, (currentSlide + 3) - testimonials.length) : []
                ).slice(0, 3).map((testimonial, index) => (
                  <div key={`${testimonial.id}-${index}`} className="w-1/3 flex-shrink-0">
                    <div className="flex flex-col items-start h-full">
                      {/* Review Card */}
                      <div
                        className="w-full p-8 mb-6 rounded-[25px_25px_25px_0px] relative h-48 flex flex-col"
                        style={{ backgroundColor: '#F2F2F2' }}
                      >
                        {/* Comment Icon */}
                        <div className="absolute top-4 left-6">
                          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                            <path d="M3 4C3 3.44772 3.44772 3 4 3H20C20.5523 3 21 3.44772 21 4V13C21 13.5523 20.5523 14 20 14H13L8 17V14H4C3.44772 14 3 13.5523 3 13V4Z" stroke="#8F7D6A" strokeWidth="1.5" />
                            <path d="M8 9H16" stroke="#8F7D6A" strokeWidth="1.5" strokeLinecap="round" />
                            <path d="M6 17H12" stroke="#8F7D6A" strokeWidth="1.5" strokeLinecap="round" />
                          </svg>
                        </div>

                        {/* Review Text */}
                        <div className="flex-1 flex items-center mt-8">
                          <p
                            className="text-base leading-relaxed"
                            style={{
                              color: '#8F7D6A',
                              fontFamily: 'Sans Serif Collection',
                              fontWeight: 400
                            }}
                          >
                            {testimonial.review}
                          </p>
                        </div>
                      </div>

                      {/* User Info */}
                      <div className="flex items-center gap-4">
                        <div className="w-15 h-15 rounded-full overflow-hidden bg-gray-200 flex-shrink-0 flex items-center justify-center">
                          <img
                            src={testimonial.reviewImage}
                            alt={`Review by ${testimonial.name}`}
                            className="w-10 h-10 object-contain"
                          />
                        </div>
                        <h3
                          className="text-lg font-poppins font-medium"
                          style={{ color: '#503217' }}
                        >
                          {testimonial.name}
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Spacer between sections */}
          <div className="h-10 lg:h-12"></div>

          {/* Recent Products Section */}
          <div className="mb-20 lg:mb-24">
            {/* Section Title */}
            <div className="text-center py-16">
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-poppins font-medium leading-tight my-8"
                style={{ color: '#503217' }}
              >
                Recent Products
              </h2>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mt-16 justify-items-center">
              {/* Product 1 - Microscope */}
              <ProductCard
                image="/home/microscope.png"
                title="Microscope"
                price="$45.00 USD"
                badge="New"
                hasShopNow={true}
              />

              {/* Product 2 - Pulse Oximeter */}
              <ProductCard
                image="/home/oximeter.png"
                title="Pulse oximeter"
                price="$19.00 USD"
                originalPrice="$25.00 USD"
                badge="Save 10%"
                hasShopNow={true}
              />

              {/* Product 3 - Vitamin Serum */}
              <ProductCard
                image="/home/serum.png"
                title="Vitamin serum"
                price="$20.00 USD"
                originalPrice="$30.00 USD"
                hasShopNow={true}
              />

              {/* Product 4 - High Protein */}
              <ProductCard
                image="/home/protein.png"
                title="High protein"
                price="$50.00 USD"
                badge="New"
                hasShopNow={true}
              />
            </div>
          </div>

          {/* Spacer between sections */}
          <div className="h-10 lg:h-20"></div>

          {/* CTA Section */}
          <div className="mb-20 lg:mb-24">
            <div
              className="relative w-full h-[400px] lg:h-[618px] rounded-[10px] overflow-hidden flex items-center"

            >
              {/* Content Container */}
              <div className="relative z-10 w-full h-full flex flex-col lg:flex-row">
                {/* Text Content - Left Side */}
                <div className="flex-1 flex items-center justify-center lg:justify-start px-6 lg:px-16 py-8 lg:py-0">
                  <div className="max-w-[443px] flex flex-col gap-8 lg:gap-12 text-center lg:text-left">
                    {/* Title and Description */}
                    <div className="flex flex-col gap-4 lg:gap-5">
                      <h2
                        className="text-2xl sm:text-3xl lg:text-5xl font-poppins font-medium leading-tight"
                        style={{ color: '#503217' }}
                      >
                        Join our trustable Medifit product community
                      </h2>
                      <p
                        className="text-base lg:text-lg leading-relaxed max-w-[413px]"
                        style={{
                          color: '#8F7D6A',
                          fontFamily: 'Sans Serif Collection',
                          fontWeight: 400,
                          lineHeight: '150%'
                        }}
                      >
                        Join us as we build a community where wellness is accessible, education is empowering, and health is a shared journey.
                      </p>
                    </div>

                    {/* CTA Button */}
                    <div className="flex flex-col lg:flex-row items-center lg:justify-start gap-6 lg:gap-0">
                      <button
                        className="flex items-center justify-center gap-1 px-4 py-2 lg:px-5 lg:py-3 rounded-[5px] transition-all duration-200 hover:opacity-90"
                        style={{ backgroundColor: '#503217' }}
                      >
                        <span
                          className="text-base lg:text-lg font-poppins font-medium"
                          style={{ color: '#EEEDE7' }}
                        >
                          Get started
                        </span>
                        <svg
                          className="w-5 h-5 lg:w-6 lg:h-6 ml-1"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#EEEDE7"
                          strokeWidth="1.5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </button>

                      {/* Mobile CTA Images - 2 Rows Display */}
                      <div className="lg:hidden w-full max-w-[300px] space-y-3">
                        {/* First Row - 2 Images */}
                        <div className="flex gap-2 overflow-hidden">
                          <div className="w-1/2 h-[80px] rounded-[5px] overflow-hidden">
                            <img
                              src="./shopdetail/cta-1.png"
                              alt="Medical supplements and capsules"
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="w-1/2 h-[80px] rounded-[5px] overflow-hidden -mr-4">
                            <img
                              src="./shopdetail/cta-2.png"
                              alt="Hand holding medication blister pack"
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>

                        {/* Second Row - 2 Images with partial view */}
                        <div className="flex gap-2 overflow-hidden">
                          <div className="w-1/2 h-[80px] rounded-[5px] overflow-hidden">
                            <img
                              src="./shopdetail/cta-3.png"
                              alt="Pharmacy preparation and pills"
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="w-1/2 h-[80px] rounded-[5px] overflow-hidden -mr-4">
                            <img
                              src="./shopdetail/cta-4.png"
                              alt="Colorful vitamins and supplements"
                               className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Image Grid - Right Side */}
                <div className="w-full lg:w-[635px] h-full relative">
                  {/* Image Grid Container */}
                  <div className="absolute inset-0 grid grid-cols-2 gap-3 p-4">
                    {/* Top Left Image */}
                    <div className="relative overflow-hidden rounded-[10px_10px_0px_0px]">
                      <img
                        src="./shopdetail/cta-1.png"
                        alt="Medical supplements and capsules"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Top Right Image */}
                    <div className="relative overflow-hidden rounded-[10px_10px_0px_0px] transform rotate-180">
                      <img
                        src="./shopdetail/cta-2.png"
                        alt="Hand holding medication blister pack"
                        className="w-full h-full object-cover transform rotate-180"
                      />
                    </div>

                    {/* Bottom Left Image */}
                    <div className="relative overflow-hidden rounded-[0px_0px_10px_10px]">
                      <img
                        src="./shopdetail/cta-3.png"
                        alt="Pharmacy preparation and pills"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Bottom Right Image */}
                    <div className="relative overflow-hidden rounded-[0px_0px_10px_10px] transform rotate-180">
                      <img
                        src="./shopdetail/cta-4.png"
                        alt="Colorful vitamins and supplements"
                        className="w-full h-full object-cover transform rotate-180"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom spacer to show testimonials margin */}
          <div className="h-20 lg:h-24"></div>
        </Center>
      </div>

      {/* Mobile Bottom Spacing for Sticky Cart */}
      <div className="lg:hidden h-20"></div>
    </div>
  );
};

export default ProductDetail;