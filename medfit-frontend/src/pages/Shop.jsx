import Navbar from '../components/Navbar';
import doctorMedicineImage from '../assets/home/doctor-medicine-bottle.jpg';
import wellnessImage from '../assets/home/Wellness.jpg';

const Shop = () => {
  return (
    <>
      {/* Navigation Bar */}
      <Navbar />
      
      {/* Hero Section */}
      <div className="absolute w-full h-[977px] left-0 top-0 bg-[#E8E6DE] overflow-hidden">
        
        {/* Rectangle 110 - Main Background */}
        <div className="absolute w-full h-[977px] left-0 top-0 bg-[#E8E6DE]"></div>
        
        {/* Mask Group - Right Side Container */}
        <div className="absolute w-[786px] h-[886px] left-[1134px] top-[91px] bg-[#E8E6DE] overflow-hidden">
          
          {/* Rectangle 108 & 109 - Background layers */}
          <div className="absolute w-[786px] h-[886px] left-0 top-0 bg-[#E8E6DE]"></div>
          <div className="absolute w-[786px] h-[886px] left-0 top-0 bg-[#E8E6DE]"></div>
          
          {/* Doctor Image - Flipped horizontally */}
          <div 
            className="absolute w-[1759px] h-[1153px] left-[-94px] top-[-267px] bg-cover bg-center transform scale-x-[-1]"
            style={{
              backgroundImage: `url(${doctorMedicineImage})`
            }}
          >
          </div>
        </div>
        
        {/* Group 248 - Main Content Container */}
        <div className="absolute w-[707px] h-[581px] left-[310px] top-[243px]">
          
          {/* Main Heading */}
          <h1 className="absolute w-[700px] h-[173px] left-[1px] top-0 font-poppins font-medium text-[68px] leading-[120%] text-[#503217]">
            From wellness to care all in one place
          </h1>
          
          {/* Group 247 - Content and Image Container */}
          <div className="absolute w-[707px] h-[328px] left-0 top-[253px]">
            
            {/* Rectangle 122 - Left Image */}
            <div 
              className="absolute w-[302px] h-[328px] left-0 top-0 bg-cover bg-center rounded-[10px]"
              style={{
                backgroundImage: `url(${wellnessImage})`
              }}
            >
            </div>
            
            {/* Frame 263 - Right Content Container */}
            <div className="absolute w-[374px] h-[178px] left-[333px] top-[150px] flex flex-col items-start gap-[50px]">
              
              {/* Description Text */}
              <p className="w-[374px] h-[80px] font-sans-serif-collection font-normal text-[18px] leading-[150%] text-[#503217]">
                Your health is in good hands with Medifit. We're here to provide you with a wide range of healthcare essentials, carefully selected.
              </p>
              
              {/* Shop Now Button - Frame 77 */}
              <button className="flex flex-row justify-center items-center p-5 gap-[10px] w-[158px] h-[48px] bg-[#503217] rounded-[10px] hover:bg-[#6B4228] transition-colors duration-200">
                {/* Bag Icon */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-none">
                  <rect 
                    x="2" 
                    y="3" 
                    width="20" 
                    height="18" 
                    rx="2" 
                    stroke="#EEEDE7" 
                    strokeWidth="1.5"
                  />
                  <path 
                    d="M8 7v-2a4 4 0 0 1 8 0v2" 
                    stroke="#EEEDE7" 
                    strokeWidth="1.5"
                  />
                </svg>
                
                {/* Shop now Text */}
                <span className="w-[84px] h-[27px] font-sans-serif-collection font-normal text-[18px] leading-[150%] text-[#F2F2F2]">
                  Shop now
                </span>
              </button>
            </div>
          </div>
        </div>
        
        {/* Responsive Design for smaller screens */}
        
        {/* Large Desktop Layout (lg to xl) */}
        <div className="hidden lg:block xl:hidden px-8 pt-24 relative">
          <div className="max-w-[1400px] mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              {/* Left Content */}
              <div className="flex-1 max-w-[600px]">
                <h1 className="font-poppins font-medium text-[54px] leading-[120%] text-[#503217] mb-8">
                  From wellness to care all in one place
                </h1>
                
                <div className="flex flex-col lg:flex-row items-start gap-8">
                  {/* Product Image */}
                  <div 
                    className="w-[280px] h-[300px] bg-cover bg-center rounded-[10px] flex-shrink-0"
                    style={{
                      backgroundImage: `url(${wellnessImage})`
                    }}
                  >
                  </div>
                  
                  {/* Text and Button */}
                  <div className="flex flex-col gap-8">
                    <p className="font-sans-serif-collection font-normal text-[16px] leading-[150%] text-[#503217] max-w-[350px]">
                      Your health is in good hands with Medifit. We're here to provide you with a wide range of healthcare essentials, carefully selected.
                    </p>
                    
                    <button className="flex items-center justify-center gap-3 px-5 py-3 bg-[#503217] rounded-[10px] hover:bg-[#6B4228] transition-colors duration-200 w-[158px]">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="2" y="3" width="20" height="18" rx="2" stroke="#EEEDE7" strokeWidth="1.5"/>
                        <path d="M8 7v-2a4 4 0 0 1 8 0v2" stroke="#EEEDE7" strokeWidth="1.5"/>
                      </svg>
                      <span className="font-sans-serif-collection font-normal text-[16px] text-[#F2F2F2]">Shop now</span>
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Right Content - Doctor Image */}
              <div className="flex-1 max-w-[500px] relative">
                <div 
                  className="w-full h-[600px] bg-cover bg-center rounded-[10px] transform scale-x-[-1]"
                  style={{
                    backgroundImage: `url(${doctorMedicineImage})`
                  }}
                >
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Tablet Layout */}
        <div className="hidden md:block lg:hidden px-6 pt-20 relative">
          <div className="max-w-[700px] mx-auto">
            <h1 className="font-poppins font-medium text-[42px] leading-[120%] text-[#503217] mb-8 text-center">
              From wellness to care all in one place
            </h1>
            
            <div className="flex flex-col items-center gap-8">
              {/* Product Image */}
              <div 
                className="w-[350px] h-[350px] bg-cover bg-center rounded-[10px]"
                style={{
                  backgroundImage: `url(${wellnessImage})`
                }}
              >
              </div>
              
              {/* Text and Button */}
              <div className="flex flex-col items-center gap-6 max-w-[500px]">
                <p className="font-sans-serif-collection font-normal text-[16px] leading-[150%] text-[#503217] text-center">
                  Your health is in good hands with Medifit. We're here to provide you with a wide range of healthcare essentials, carefully selected.
                </p>
                
                <button className="flex items-center justify-center gap-3 px-5 py-3 bg-[#503217] rounded-[10px] hover:bg-[#6B4228] transition-colors duration-200">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="3" width="20" height="18" rx="2" stroke="#EEEDE7" strokeWidth="1.5"/>
                    <path d="M8 7v-2a4 4 0 0 1 8 0v2" stroke="#EEEDE7" strokeWidth="1.5"/>
                  </svg>
                  <span className="font-sans-serif-collection font-normal text-[16px] text-[#F2F2F2]">Shop now</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Mobile Layout */}
        <div className="block md:hidden px-4 pt-24 relative">
          <div className="max-w-[350px] mx-auto">
            <h1 className="font-poppins font-medium text-[28px] leading-[120%] text-[#503217] mb-6 text-center">
              From wellness to care all in one place
            </h1>
            
            <div className="flex flex-col items-center gap-6">
              {/* Product Image */}
              <div 
                className="w-[280px] h-[280px] bg-cover bg-center rounded-[10px]"
                style={{
                  backgroundImage: `url(${wellnessImage})`
                }}
              >
              </div>
              
              {/* Text and Button */}
              <div className="flex flex-col items-center gap-6">
                <p className="font-sans-serif-collection font-normal text-[14px] leading-[150%] text-[#503217] text-center">
                  Your health is in good hands with Medifit. We're here to provide you with a wide range of healthcare essentials, carefully selected.
                </p>
                
                <button className="flex items-center justify-center gap-3 px-5 py-3 bg-[#503217] rounded-[10px] hover:bg-[#6B4228] transition-colors duration-200">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="3" width="20" height="18" rx="2" stroke="#EEEDE7" strokeWidth="1.5"/>
                    <path d="M8 7v-2a4 4 0 0 1 8 0v2" stroke="#EEEDE7" strokeWidth="1.5"/>
                  </svg>
                  <span className="font-sans-serif-collection font-normal text-[14px] text-[#F2F2F2]">Shop now</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
