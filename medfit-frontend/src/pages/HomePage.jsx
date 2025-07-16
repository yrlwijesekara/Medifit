import Navbar from '../components/Navbar';
import mainProductImage from '././../assets/home/main-1.png';

const HomePage = () => {
  return (
    <>
      {/* Navigation Bar */}
      <Navbar />
      
      {/* Rectangle 64 - Main Container */}
      <div className="absolute w-full h-[990px] left-0 top-[91px] bg-[#E8E6DE] overflow-hidden">
        
        {/* Hero Section - 1703x908.89px */}
        <div className="absolute w-[1703px] h-[909px] -left-[85px] top-[65px] hidden xl:block">
          
          {/* Medical Shape 1 - Left Bottom Decorative Element */}
          <div className="absolute w-[388px] h-[374px] left-0 top-[570px] opacity-15 transform rotate-[8.9deg]">
            {/* Clip path group with 3.51deg rotation */}
            <div className="absolute left-[-0.21%] right-[83.32%] top-[10.42%] bottom-[84.96%] opacity-15 transform rotate-[3.51deg]">
              {/* Vector - Black background */}
              <div className="absolute w-[247px] h-[241px] left-[9.56px] top-[70px] bg-black matrix-transform"></div>
              
              {/* Vector - Brown background */}
              <div className="absolute w-[267px] h-[207px] left-[18px] top-[120px] bg-[#8F7D6A] transform rotate-[3.51deg]"></div>
              
              {/* Small Vector */}
              <div className="absolute w-[25px] h-[24px] left-[250px] top-[196px] bg-[#8F7D6A] transform rotate-[3.51deg]"></div>
            </div>
          </div>

          {/* Title & Button Section - Moved to Left Side */}
          <div className="absolute w-[599px] h-[453px] left-[150px] top-[197px] flex flex-col items-start gap-[60px]">
            
            {/* Frame 76 - Title and Description Container */}
            <div className="flex flex-col items-start gap-5 w-[541px] h-[345px]">
              
              {/* Main Heading - "Your trusted care now and always" */}
              <h1 className="w-[541px] h-[273px] font-poppins font-medium text-[80px] leading-[110%] text-[#503217] flex-none order-0">
                Your trusted care now and always
              </h1>
              
              {/* Description Text */}
              <p className="w-[415px] h-[52px] font-sans-serif-collection font-normal text-[18px] leading-[150%] text-[#8F7D6A] flex-none order-1">
                For the best results, align your health needs with your medication plan.
              </p>
            </div>

            {/* Frame 77 - Shop Now Button */}
            <button className="flex flex-row justify-center items-center p-5 gap-[10px] w-[158px] h-[48px] bg-[#503217] rounded-[10px] flex-none order-1 hover:bg-[#6B4228] transition-colors duration-200">
              {/* Bag Icon - 24x24px */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-none order-0">
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
              
              {/* "Shop now" Text */}
              <span className="w-[84px] h-[27px] font-sans-serif-collection font-normal text-[18px] leading-[150%] text-[#F2F2F2] flex-none order-1">
                Shop now
              </span>
            </button>
          </div>

          {/* Group 220 - Product Images Container - Top Right Position */}
          <div className="absolute w-[668px] h-[716px] left-[950px] top-[20px] z-20">
            
            {/* Ellipse 12 - Background Circle */}
            <div className="absolute w-[596px] h-[596px] left-[43px] top-[49px] bg-[#EEEDE7] rounded-full"></div>
            
            {/* Main Product Image - amber-bottle-full-pills - Prominent Front Display */}
            <div className="absolute w-[700px] h-[600px] left-[-20px] top-[120px] z-30">
              <div 
                className="w-full h-full bg-center bg-contain bg-no-repeat" 
                style={{backgroundImage: `url(${mainProductImage})`}}
              >
              </div>
            </div>
            
       
          </div>

          {/* Medical Shape 3 - 82x95px - Removed for cleaner layout */}
          
          {/* Medical Shape 5 - 162x153px - Removed for cleaner layout */}

          {/* Stethoscope Image - Removed for cleaner layout */}
        </div>

        {/* Large Desktop Layout (lg to xl) */}
        <div className="hidden lg:block xl:hidden px-8 pt-16 relative">
          <div className="flex items-center justify-between max-w-[1400px] mx-auto gap-16">
            {/* Left Content - Increased width and moved left */}
            <div className="flex-1 max-w-[600px] pl-8">
              <h1 className="font-poppins font-medium text-[60px] leading-[110%] text-[#503217] mb-6">
                Your trusted care now and always
              </h1>
              <p className="font-sans-serif-collection font-normal text-[16px] leading-[150%] text-[#8F7D6A] mb-8 max-w-[400px]">
                For the best results, align your health needs with your medication plan.
              </p>
              <button className="flex items-center justify-center gap-3 px-5 py-3 bg-[#503217] rounded-[10px] hover:bg-[#6B4228] transition-colors duration-200">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="3" width="20" height="18" rx="2" stroke="#EEEDE7" strokeWidth="1.5"/>
                  <path d="M8 7v-2a4 4 0 0 1 8 0v2" stroke="#EEEDE7" strokeWidth="1.5"/>
                </svg>
                <span className="font-sans-serif-collection font-normal text-[16px] text-[#F2F2F2]">Shop now</span>
              </button>
            </div>
            
            {/* Right Content - Adjusted for better balance */}
            <div className="relative flex-1 max-w-[550px] h-[500px]">
              <div className="absolute inset-0 bg-[#EEEDE7] rounded-full"></div>
              <div className="absolute inset-8 bg-center bg-cover bg-no-repeat rounded-full" style={{backgroundImage: `url(${mainProductImage})`}}>
              </div>
              <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
                <h2 className="font-poppins font-medium text-[32px] leading-[120%] text-[#503217]">Medifit</h2>
              </div>
            </div>
          </div>
        </div>

        {/* Tablet Layout */}
        <div className="hidden md:block lg:hidden px-6 pt-12 relative">
          <div className="max-w-[700px] mx-auto text-center">
            <h1 className="font-poppins font-medium text-[48px] leading-[110%] text-[#503217] mb-6">
              Your trusted care now and always
            </h1>
            <p className="font-sans-serif-collection font-normal text-[16px] leading-[150%] text-[#8F7D6A] mb-8 max-w-[400px] mx-auto">
              For the best results, align your health needs with your medication plan.
            </p>
            
            <div className="relative w-[400px] h-[400px] mx-auto mb-8">
              <div className="absolute inset-0 bg-[#EEEDE7] rounded-full"></div>
              <div className="absolute inset-6 bg-center bg-cover bg-no-repeat rounded-full" style={{backgroundImage: `url(${mainProductImage})`}}>
              </div>
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
                <h2 className="font-poppins font-medium text-[28px] leading-[120%] text-[#503217]">Medifit</h2>
              </div>
            </div>
            
            <button className="flex items-center justify-center gap-3 px-5 py-3 bg-[#503217] rounded-[10px] hover:bg-[#6B4228] transition-colors duration-200 mx-auto">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="3" width="20" height="18" rx="2" stroke="#EEEDE7" strokeWidth="1.5"/>
                <path d="M8 7v-2a4 4 0 0 1 8 0v2" stroke="#EEEDE7" strokeWidth="1.5"/>
              </svg>
              <span className="font-sans-serif-collection font-normal text-[16px] text-[#F2F2F2]">Shop now</span>
            </button>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="block md:hidden px-4 pt-8 relative">
          <div className="max-w-[350px] mx-auto text-center">
            <h1 className="font-poppins font-medium text-[32px] leading-[110%] text-[#503217] mb-4">
              Your trusted care now and always
            </h1>
            <p className="font-sans-serif-collection font-normal text-[14px] leading-[150%] text-[#8F7D6A] mb-6">
              For the best results, align your health needs with your medication plan.
            </p>
            
            <div className="relative w-[280px] h-[280px] mx-auto mb-6">
              <div className="absolute inset-0 bg-[#EEEDE7] rounded-full"></div>
              <div className="absolute inset-4 bg-center bg-cover bg-no-repeat rounded-full" style={{backgroundImage: `url(${mainProductImage})`}}>
              </div>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                <h2 className="font-poppins font-medium text-[20px] leading-[120%] text-[#503217]">Medifit</h2>
              </div>
            </div>
            
            <button className="flex items-center justify-center gap-2 px-4 py-3 bg-[#503217] rounded-[10px] hover:bg-[#6B4228] transition-colors duration-200 mx-auto">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="3" width="20" height="18" rx="2" stroke="#EEEDE7" strokeWidth="1.5"/>
                <path d="M8 7v-2a4 4 0 0 1 8 0v2" stroke="#EEEDE7" strokeWidth="1.5"/>
              </svg>
              <span className="font-sans-serif-collection font-normal text-[14px] text-[#F2F2F2]">Shop now</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
