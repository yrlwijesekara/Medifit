import Navbar from '../components/Navbar';
import mainProductImage from '../assets/main-1.png';

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

          {/* Title & Button Section - Exact positioning */}
          <div className="absolute w-[599px] h-[453px] left-[400px] top-[197px] flex flex-col items-start gap-[60px]">
            
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

          {/* Group 220 - Product Images Container */}
          <div className="absolute w-[668px] h-[716px] left-[1035px] top-[65px]">
            
            {/* Ellipse 12 - Background Circle */}
            <div className="absolute w-[596px] h-[596px] left-[43px] top-[49px] bg-[#EEEDE7] rounded-full"></div>
            
            {/* Main Product Image - amber-bottle-full-pills */}
            <div className="absolute w-[612px] h-[556px] left-[29px] top-[160px]">
              <div 
                className="w-full h-full bg-center bg-cover bg-no-repeat" 
                style={{backgroundImage: `url(${mainProductImage})`}}
              >
                {/* Fallback gradient if image doesn't load */}
                <div className="w-full h-full bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
            
            {/* Left Product - bottle-pills-that-is-labeled */}
            <div className="absolute w-[221px] h-[357px] left-0 top-[297px]">
              <div className="w-full h-full bg-gradient-to-br from-amber-100 to-amber-200 rounded-xl flex items-end justify-center shadow-lg">
                <div className="w-12 h-20 bg-amber-700 rounded-md mb-8 shadow-inner"></div>
              </div>
            </div>
            
            {/* Right Product - jar-pills-with-gold-top */}
            <div className="absolute w-[199px] h-[343px] left-[469px] top-[307px]">
              <div className="w-full h-full bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-xl flex items-end justify-center shadow-lg">
                <div className="w-12 h-16 bg-yellow-600 rounded-md mb-8 shadow-inner"></div>
              </div>
            </div>
            
            {/* fi_6577704 - Floating Medical Icon */}
            <div className="absolute w-[49px] h-[49px] left-[308px] top-[479px] opacity-50 transform rotate-[-22.95deg]">
              {/* Complex medical icon with multiple vectors */}
              <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g transform="rotate(-22.95 24.5 24.5)">
                  {/* Multiple medical elements as per design */}
                  <path d="M2 2L47 2L47 47L2 47Z" fill="#8F7D6A" opacity="0.3"/>
                  <path d="M23 2L47 26L26 47L2 23Z" fill="#8F7D6A" opacity="0.5"/>
                  <circle cx="24.5" cy="12" r="2" fill="#8F7D6A"/>
                  <circle cx="12" cy="24.5" r="1.5" fill="#8F7D6A"/>
                  <circle cx="37" cy="24.5" r="1.5" fill="#8F7D6A"/>
                  <circle cx="24.5" cy="37" r="2" fill="#8F7D6A"/>
                  <rect x="22" y="5" width="5" height="39" fill="#8F7D6A"/>
                  <rect x="5" y="22" width="39" height="5" fill="#8F7D6A"/>
                </g>
              </svg>
            </div>
            
            {/* "Medifit" Text on Product */}
            <div className="absolute w-[167px] h-[53px] left-[253px] top-[418px]">
              <h2 className="font-poppins font-medium text-[48px] leading-[120%] text-[#503217]">
                Medifit
              </h2>
            </div>
          </div>

          {/* Medical Shape 3 - 82x95px at left: 951px, top: 259px */}
          <div className="absolute w-[82px] h-[95px] left-[1036px] top-[194px] opacity-15">
            <svg width="82" height="95" viewBox="0 0 82 95" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Multiple Vector elements as specified */}
              <path d="M22.6 11.7L81.9 12L81.8 95L22.4 94.7Z" fill="#8F7D6A"/>
              <path d="M31.2 34.9L74.0 60.2L66.1 73.2L23 47.5Z" fill="#8F7D6A"/>
              <path d="M0 0.1L42.2 8.8L40.1 17.9L-2.1 9.2Z" fill="#8F7D6A"/>
              <path d="M2.1 36.8L32.9 41.8L31.7 50.3L0.9 45.3Z" fill="#8F7D6A"/>
              <path d="M22.7 11.6L81.9 12L81.8 95L22.4 94.7Z" fill="#8F7D6A"/>
              <path d="M31.3 34.8L74.0 60.3L66.1 73.2L23 47.5Z" fill="#8F7D6A"/>
              <path d="M0.1 0L42.2 8.8L40.1 17.9L-2.1 9.2Z" fill="#8F7D6A"/>
              <path d="M2.2 36.7L32.9 41.8L31.7 50.3L0.9 45.3Z" fill="#8F7D6A"/>
            </svg>
          </div>

          {/* Medical Shape 5 - 162x153px at left: 1447px, top: 156px */}
          <div className="absolute w-[162px] h-[153px] left-[1532px] top-[91px] opacity-15">
            <svg width="162" height="153" viewBox="0 0 162 153" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Complex medical shape with matrix transformation */}
              <path d="M0 0L132.8 91.5L86.2 152.2L-46.6 60.7Z" fill="black" transform="matrix(0.81, 0.59, -0.59, 0.81, 0, 0)"/>
              {/* Multiple vector elements for medical design */}
              <g transform="translate(33.9, 14.8)">
                <path d="M0 0L29.0 40.5L47.3 68.2L40.1 73.8L-7.2 5.6Z" fill="#8F7D6A"/>
                <path d="M51.6 52.4L86.5 67.1L124.1 37L127.3 45.9L54.8 61.3Z" fill="#8F7D6A"/>
                <path d="M21.8 96.7L27.4 118.5L18.5 120.8L12.9 99Z" fill="#8F7D6A"/>
                <circle cx="20" cy="30" r="3" fill="#8F7D6A"/>
                <circle cx="50" cy="45" r="2.5" fill="#8F7D6A"/>
                <circle cx="80" cy="25" r="2" fill="#8F7D6A"/>
                <circle cx="35" cy="60" r="2" fill="#8F7D6A"/>
                <circle cx="65" cy="75" r="1.5" fill="#8F7D6A"/>
                <circle cx="25" cy="85" r="2" fill="#8F7D6A"/>
                <circle cx="75" cy="90" r="1.5" fill="#8F7D6A"/>
              </g>
            </svg>
          </div>
        </div>

        {/* Large Desktop Layout (lg to xl) */}
        <div className="hidden lg:block xl:hidden px-8 pt-16">
          <div className="flex items-center justify-between max-w-[1200px] mx-auto gap-12">
            {/* Left Content */}
            <div className="flex-1 max-w-[500px]">
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
            
            {/* Right Content */}
            <div className="relative flex-1 max-w-[500px] h-[500px]">
              <div className="absolute inset-0 bg-[#EEEDE7] rounded-full"></div>
              <div className="absolute inset-8 bg-center bg-cover bg-no-repeat rounded-full" style={{backgroundImage: `url(${mainProductImage})`}}>
                <div className="w-full h-full bg-gradient-to-br from-amber-50 to-amber-100 rounded-full opacity-0"></div>
              </div>
              <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
                <h2 className="font-poppins font-medium text-[32px] leading-[120%] text-[#503217]">Medifit</h2>
              </div>
            </div>
          </div>
        </div>

        {/* Tablet Layout */}
        <div className="hidden md:block lg:hidden px-6 pt-12">
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
                <div className="w-full h-full bg-gradient-to-br from-amber-50 to-amber-100 rounded-full opacity-0"></div>
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
        <div className="block md:hidden px-4 pt-8">
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
                <div className="w-full h-full bg-gradient-to-br from-amber-50 to-amber-100 rounded-full opacity-0"></div>
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
