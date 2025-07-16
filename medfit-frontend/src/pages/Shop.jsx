import Navbar from '../components/Navbar';
import doctorMedicineImage from '../assets/home/doctor-medicine-bottle.jpg';
import wellnessImage from '../assets/home/Wellness.jpg';
import femaleHoldingPillImage from '../assets/home/female-holding-pill.jpg';

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
      
      {/* Company Logos Section */}
      <div className="absolute w-full h-[111px] left-0 top-[977px] bg-[#E2DFCF] flex flex-col justify-center items-center p-[10px] gap-[10px]">
        
        {/* Frame 242 - Company Logos Container */}
        <div className="flex flex-row items-center gap-[196px] w-[1880px] h-[47px]">
          
          {/* Company Logo 1 - Emblem */}
          <div className="w-[153.6px] h-[40px] flex-none order-0 flex-grow-0">
            <svg viewBox="0 0 154 40" className="w-full h-full">
              <rect x="0" y="0.4" width="7" height="31" fill="#503217" />
              <rect x="11" y="8.4" width="7" height="31" fill="#503217" />
              <rect x="22" y="0.4" width="7" height="31" fill="#503217" />
              <rect x="33" y="9.3" width="7" height="31" fill="#503217" />
              <g clipPath="url(#clip0_43_237)">
                <path d="M52 0h102v40H52V0z" fill="#000000" />
                <path d="M52.4 9.1h102v20.1H52.4V9.1z" fill="#503217" />
              </g>
              <text x="65" y="25" fill="#503217" fontSize="12" fontFamily="Arial">EMBLEM</text>
            </svg>
          </div>
          
          {/* Company Logo 2 - Grapho */}
          <div className="w-[145.6px] h-[40px] flex-none order-1 flex-grow-0">
            <svg viewBox="0 0 146 40" className="w-full h-full">
              <rect x="23" y="0.2" width="11" height="40" fill="#503217" />
              <rect x="14" y="0.1" width="13" height="40" fill="#503217" />
              <rect x="0" y="3.5" width="16" height="33" fill="#503217" />
              <rect x="53" y="10.6" width="85" height="24" fill="#503217" />
              <text x="10" y="25" fill="#503217" fontSize="12" fontFamily="Arial">GRAPHO</text>
            </svg>
          </div>
          
          {/* Company Logo 3 - Wayline */}
          <div className="w-[159.2px] h-[40px] flex-none order-2 flex-grow-0">
            <svg viewBox="0 0 159 40" className="w-full h-full">
              <rect x="33" y="5.1" width="7" height="28" fill="#503217" />
              <rect x="0" y="0.2" width="28" height="33" fill="#503217" />
              <rect x="11" y="13.7" width="22" height="25" fill="#503217" />
              <rect x="2" y="5.1" width="7" height="28" fill="#503217" />
              <g clipPath="url(#clip0_43_396)">
                <path d="M52 0h107v40H52V0z" fill="#000000" />
                <path d="M52.2 10.8h106v18.5H52.2V10.8z" fill="#503217" />
              </g>
              <text x="70" y="25" fill="#503217" fontSize="12" fontFamily="Arial">WAYLINE</text>
            </svg>
          </div>
          
          {/* Company Logo 4 - Prelude */}
          <div className="w-[128px] h-[40px] flex-none order-3 flex-grow-0">
            <svg viewBox="0 0 128 40" className="w-full h-full">
              <rect x="14" y="11.5" width="25" height="26" fill="#503217" />
              <rect x="5" y="4" width="32" height="35" fill="#503217" />
              <rect x="1" y="0" width="36" height="40" fill="#503217" />
              <rect x="10" y="7.7" width="27" height="30" fill="#503217" />
              <rect x="22" y="19.4" width="10" height="10" fill="#503217" />
              <g clipPath="url(#clip0_43_356)">
                <path d="M52 0h76v40H52V0z" fill="#000000" />
                <path d="M52.3 10.6h75v23.4H52.3V10.6z" fill="#503217" />
              </g>
              <text x="60" y="25" fill="#503217" fontSize="12" fontFamily="Arial">PRELUDE</text>
            </svg>
          </div>
          
          {/* Company Logo 5 - Signet */}
          <div className="w-[160px] h-[40px] flex-none order-4 flex-grow-0">
            <svg viewBox="0 0 160 40" className="w-full h-full">
              <rect x="1" y="15.1" width="25" height="25" fill="#503217" />
              <rect x="15" y="0.6" width="25" height="25" fill="#503217" />
              <g clipPath="url(#clip0_43_404)">
                <path d="M52 0.8h108v38.4H52V0.8z" fill="#000000" />
                <path d="M52 11.6h108v17.1H52V11.6z" fill="#503217" />
              </g>
              <text x="70" y="25" fill="#503217" fontSize="12" fontFamily="Arial">SIGNET</text>
            </svg>
          </div>
          
          {/* Company Logo 6 - Signum */}
          <div className="w-[155.2px] h-[40px] flex-none order-5 flex-grow-0">
            <svg viewBox="0 0 155 40" className="w-full h-full">
              <rect x="2" y="18.9" width="36" height="20" fill="#503217" />
              <rect x="23" y="2" width="17" height="20" fill="#503217" />
              <rect x="2" y="2" width="17" height="20" fill="#503217" />
              <rect x="18" y="1.2" width="4" height="28" fill="#503217" />
              <g clipPath="url(#clip0_43_372)">
                <path d="M52 0h103v40H52V0z" fill="#000000" />
                <path d="M52.2 9.6h102v24.2H52.2V9.6z" fill="#503217" />
              </g>
              <text x="70" y="25" fill="#503217" fontSize="12" fontFamily="Arial">SIGNUM</text>
            </svg>
          </div>
          
        </div>
      </div>
      
      {/* Our Story Section */}
      <div className="absolute w-[1296px] h-[490.58px] left-[314px] top-[1218px]">
        
        {/* Mask Group - Right Side Container */}
        <div className="absolute w-[415px] h-[490.58px] left-[881px] top-0 bg-[#F2F2F2] rounded-[10px] overflow-hidden">
          
          {/* Rectangle 111 & 114 - Background layers */}
          <div className="absolute w-[415px] h-[490.58px] left-0 top-0 bg-[#F2F2F2] rounded-[10px]"></div>
          <div className="absolute w-[415px] h-[490.58px] left-0 top-0 bg-[#F2F2F2] rounded-[10px]"></div>
          
          {/* Female holding pill image */}
          <div 
            className="absolute w-[899.4px] h-[490.58px] left-[-299px] top-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${femaleHoldingPillImage})`
            }}
          >
          </div>
          
          {/* Medifit text - rotated */}
          <div className="absolute w-[83px] h-[37px] left-[191px] top-[208px] transform rotate-[-90deg]">
            <span className="font-poppins font-medium text-[24px] leading-[150%] text-[#503217]">
              Medifit
            </span>
          </div>
        </div>
        
        {/* Frame 264 - Main Content Container */}
        <div className="absolute w-[848px] h-[362px] left-0 top-0 flex flex-col items-start gap-[50px]">
          
          {/* Title Section */}
          <div className="w-[848px] h-[264px] flex flex-col items-start gap-[20px]">
            
            {/* Main Heading */}
            <h2 className="w-[789px] h-[188px] font-poppins font-medium text-[48px] leading-[120%] text-[#503217]">
              Bringing trusted health solutions to your doorstep focused on quality care & reliability
            </h2>
            
            {/* Description Text */}
            <p className="w-[695px] h-[56px] font-sans-serif-collection font-normal text-[18px] leading-[150%] text-[#8F7D6A]">
              Our store offers a comprehensive range of pharmaceuticals, health and wellness products, and medical supplies to meet the diverse needs of our community.
            </p>
          </div>
          
          {/* Our Story Button - Frame 77 */}
          <button className="flex flex-row justify-center items-center p-[10px] gap-[5px] w-[137px] h-[48px] bg-[#503217] rounded-[10px] hover:bg-[#6B4228] transition-colors duration-200">
            
            {/* Our story Text */}
            <span className="w-[83px] h-[27px] font-poppins font-medium text-[18px] leading-[150%] text-[#EEEDE7]">
              Our story
            </span>
            
            {/* History Icon */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-none">
              <path 
                d="M12 8v4l3 3" 
                stroke="#EEEDE7" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
              <circle 
                cx="12" 
                cy="12" 
                r="9" 
                stroke="#EEEDE7" 
                strokeWidth="1.5"
              />
            </svg>
          </button>
        </div>
        
        {/* Background Medicine Icon - Hidden/Decorative */}
        <div className="absolute w-[183.05px] h-[183.05px] left-[-84.96px] top-[361.81px] opacity-15 transform rotate-[71.02deg] pointer-events-none">
          <svg viewBox="0 0 183 183" className="w-full h-full">
            <g transform="rotate(71.02 91.5 91.5)">
              <rect x="45" y="100" width="93" height="64" fill="#8F7D6A" opacity="0.15" />
              <rect x="53" y="27" width="66" height="93" fill="#8F7D6A" opacity="0.15" />
              <rect x="147" y="70" width="34" height="34" fill="#8F7D6A" opacity="0.15" />
              <rect x="105" y="106" width="34" height="34" fill="#8F7D6A" opacity="0.15" />
              <rect x="143" y="114" width="34" height="34" fill="#8F7D6A" opacity="0.15" />
            </g>
          </svg>
        </div>
      </div>
    </>
  );
};

export default Shop;
