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
      
      {/* Company Logos Section */}
      <div className="absolute w-[1920px] h-[111px] left-0 top-[977px] bg-[#E2DFCF] flex flex-col justify-center items-center p-[10px] gap-[10px]">
        
        {/* Frame 242 - Logo Container */}
        <div className="flex flex-row items-center p-0 gap-[196px] w-[1880px] h-[47px] flex-none order-0 flex-grow-0">
          
          {/* Company Logo 1 - Emblem */}
          <div className="w-[153.6px] h-[40px] flex-none order-0 flex-grow-0 relative">
            {/* Vector elements for logo 1 */}
            <div className="absolute left-0 right-[95.57%] top-[0.93%] bottom-[20.49%] bg-[#503217]"></div>
            <div className="absolute left-[7.2%] right-[88.36%] top-[21.13%] bottom-[0.28%] bg-[#503217]"></div>
            <div className="absolute left-[14.41%] right-[81.16%] top-[0.93%] bottom-[20.49%] bg-[#503217]"></div>
            <div className="absolute left-[21.61%] right-[73.96%] top-[23.13%] bottom-[0.28%] bg-[#503217]"></div>
            
            {/* Clip path group */}
            <div className="absolute left-[33.85%] right-0 top-0 bottom-0">
              <div className="absolute left-[33.85%] right-0 top-0 bottom-0">
                <div className="absolute left-[33.85%] right-0 top-0 bottom-0 bg-black"></div>
              </div>
              <div className="absolute left-[33.96%] right-[1.35%] top-[22.84%] bottom-[26.47%]">
                <div className="absolute left-[33.96%] right-[1.35%] top-[22.84%] bottom-[26.47%] bg-[#503217]"></div>
              </div>
            </div>
          </div>
          
          {/* Company Logo 2 - Grapho */}
          <div className="w-[145.6px] h-[40px] flex-none order-1 flex-grow-0 relative">
            <div className="absolute left-[15.66%] right-[72.86%] top-[0.5%] bottom-[0.37%] bg-[#503217]"></div>
            <div className="absolute left-[9.6%] right-[81.54%] top-[0.25%] bottom-[0.25%] bg-[#503217]"></div>
            <div className="absolute left-[0.1%] right-[89.08%] top-[8.67%] bottom-[8.55%] bg-[#503217]"></div>
            <div className="absolute left-[36.38%] right-[5.13%] top-[26.47%] bottom-[13.2%] bg-[#503217]"></div>
          </div>
          
          {/* Company Logo 3 - Wayline */}
          <div className="w-[159.2px] h-[40px] flex-none order-2 flex-grow-0 relative">
            <div className="absolute left-[20.52%] right-[74.87%] top-[12.67%] bottom-[68.96%] bg-[#503217]"></div>
            <div className="absolute left-[0.17%] right-[82.05%] top-[0.55%] bottom-[16.51%] bg-[#503217]"></div>
            <div className="absolute left-[7.12%] right-[79.29%] top-[34.3%] bottom-[2.79%] bg-[#503217]"></div>
            <div className="absolute left-[1.17%] right-[94.21%] top-[12.66%] bottom-[68.97%] bg-[#503217]"></div>
            
            {/* Clip path group */}
            <div className="absolute left-[32.66%] right-0 top-0 bottom-0">
              <div className="absolute left-[32.66%] right-0 top-0 bottom-0">
                <div className="absolute left-[32.66%] right-0 top-0 bottom-0 bg-black"></div>
              </div>
              <div className="absolute left-[32.7%] right-[0.3%] top-[26.92%] bottom-[26.3%]">
                <div className="absolute left-[32.7%] right-[0.3%] top-[26.92%] bottom-[26.3%] bg-[#503217]"></div>
              </div>
            </div>
          </div>
          
          {/* Company Logo 4 - Signet */}
          <div className="w-[128px] h-[40px] flex-none order-3 flex-grow-0 relative">
            <div className="absolute left-[10.79%] right-[69.24%] top-[28.65%] bottom-[7.42%] bg-[#503217]"></div>
            <div className="absolute left-[4.22%] right-[70.79%] top-[10%] bottom-[2.28%] bg-[#503217]"></div>
            <div className="absolute left-[0.47%] right-[71.04%] top-0 bottom-0 bg-[#503217]"></div>
            <div className="absolute left-[7.49%] right-[71.02%] top-[19.29%] bottom-[5.65%] bg-[#503217]"></div>
            <div className="absolute left-[16.97%] right-[75.41%] top-[48.43%] bottom-[27.2%] bg-[#503217]"></div>
            
            {/* Clip path group */}
            <div className="absolute left-[40.62%] right-0 top-0 bottom-0">
              <div className="absolute left-[40.62%] right-0 top-0 bottom-0">
                <div className="absolute left-[40.62%] right-0 top-0 bottom-0 bg-black"></div>
              </div>
              <div className="absolute left-[40.81%] right-[0.41%] top-[26.56%] bottom-[14.96%]">
                <div className="absolute left-[40.81%] right-[0.41%] top-[26.56%] bottom-[14.96%] bg-[#503217]"></div>
              </div>
            </div>
          </div>
          
          {/* Company Logo 5 - Prelude */}
          <div className="w-[160px] h-[40px] flex-none order-4 flex-grow-0 relative">
            <div className="absolute left-[0.37%] right-[84.21%] top-[37.66%] bottom-[0.44%] bg-[#503217]"></div>
            <div className="absolute left-[9.42%] right-[75.11%] top-[1.47%] bottom-[36.84%] bg-[#503217]"></div>
            
            {/* Clip path group */}
            <div className="absolute left-[32.35%] right-0 top-[1.96%] bottom-0">
              <div className="absolute left-[32.35%] right-0 top-[1.96%] bottom-0">
                <div className="absolute left-[32.35%] right-0 top-[1.96%] bottom-0 bg-black"></div>
              </div>
              <div className="absolute left-[32.35%] right-[0.4%] top-[28.91%] bottom-[26.54%]">
                <div className="absolute left-[32.35%] right-[0.4%] top-[28.91%] bottom-[26.54%] bg-[#503217]"></div>
              </div>
            </div>
          </div>
          
          {/* Company Logo 6 - Signum */}
          <div className="w-[155.2px] h-[40px] flex-none order-5 flex-grow-0 relative">
            <div className="absolute left-[1.52%] right-[75.24%] top-[47.31%] bottom-[2.88%] bg-[#503217]"></div>
            <div className="absolute left-[14.55%] right-[74.73%] top-[4.96%] bottom-[45.26%] bg-[#503217]"></div>
            <div className="absolute left-[1.01%] right-[88.38%] top-[4.96%] bottom-[45.26%] bg-[#503217]"></div>
            <div className="absolute left-[11.93%] right-[85.65%] top-[3%] bottom-[67.98%] bg-[#503217]"></div>
            
            {/* Clip path group */}
            <div className="absolute left-[33.51%] right-0 top-0 bottom-0">
              <div className="absolute left-[33.51%] right-0 top-0 bottom-0">
                <div className="absolute left-[33.51%] right-0 top-0 bottom-0 bg-black"></div>
              </div>
              <div className="absolute left-[33.61%] right-[0.47%] top-[23.96%] bottom-[16.11%]">
                <div className="absolute left-[33.61%] right-[0.47%] top-[23.96%] bottom-[16.11%] bg-[#503217]"></div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      
      {/* Our Story Section */}
      <div className="absolute w-[1296px] h-[490.58px] left-[314px] top-[1218px]">
        
        {/* Mask Group - Right Side Image Container */}
        <div className="absolute w-[415px] h-[490.58px] left-[1195px] top-[1218px]">
          
          {/* Rectangle 111 & 114 - Background layers */}
          <div className="absolute w-[415px] h-[490.58px] left-[1195px] top-[1218px] bg-[#F2F2F2] rounded-[10px]"></div>
          <div className="absolute w-[415px] h-[490.58px] left-[1195px] top-[1218px] bg-[#F2F2F2] rounded-[10px]"></div>
          
          {/* Female holding white pill image */}
          <div 
            className="absolute w-[899.4px] h-[490.58px] left-[896.14px] top-[1218px] bg-cover bg-center"
            style={{
              backgroundImage: `url(${wellnessImage})`
            }}
          >
          </div>
          
          {/* Medifit Text - Rotated */}
          <div className="absolute w-[83px] h-[37px] left-[1505px] top-[1426px] transform rotate-[-90deg]">
            <span className="font-poppins font-medium text-[24px] leading-[150%] text-[#503217]">
              Medifit
            </span>
          </div>
        </div>
        
        {/* Frame 264 - Main Content Container */}
        <div className="absolute w-[848px] h-[362px] left-[314px] top-[1218px] flex flex-col items-start p-0 gap-[50px]">
          
          {/* Title Section */}
          <div className="flex flex-col items-start p-0 gap-[20px] w-[848px] h-[264px] flex-none order-0 self-stretch flex-grow-0">
            
            {/* Main Heading */}
            <h2 className="w-[789px] h-[188px] font-poppins font-medium text-[48px] leading-[120%] text-[#503217] flex-none order-0 flex-grow-0">
              Bringing trusted health solutions to your doorstep focused on quality care & reliability
            </h2>
            
            {/* Description Text */}
            <p className="w-[695px] h-[56px] font-sans-serif-collection font-normal text-[18px] leading-[150%] text-[#8F7D6A] flex-none order-1 flex-grow-0">
              Our store offers a comprehensive range of pharmaceuticals, health and wellness products, and medical supplies to meet the diverse needs of our community.
            </p>
          </div>
          
          {/* Our Story Button - Frame 77 */}
          <button className="flex flex-row justify-center items-center p-[10px] gap-[5px] w-[137px] h-[48px] bg-[#503217] rounded-[10px] flex-none order-1 flex-grow-0 hover:bg-[#6B4228] transition-colors duration-200">
            
            {/* Our story Text */}
            <span className="w-[83px] h-[27px] font-poppins font-medium text-[18px] leading-[150%] text-[#EEEDE7] flex-none order-0 flex-grow-0">
              Our story
            </span>
            
            {/* History Icon */}
            <div className="w-[24px] h-[24px] flex-none order-1 flex-grow-0 relative">
              {/* Vector elements for history icon */}
              <div className="absolute left-[8.33%] right-[54.17%] top-[50%] bottom-[12.5%] border-[1.5px] border-dashed border-[#EEEDE7]"></div>
              <div className="absolute left-[15.06%] right-[12.5%] top-[12.5%] bottom-[12.5%] border-[1.5px] border-solid border-[#EEEDE7]"></div>
            </div>
          </button>
        </div>
        
        {/* Medicine Group Icon - Background decoration */}
        <div className="absolute w-[183.05px] h-[183.05px] left-[-84.96px] top-[1579.81px] opacity-15 transform rotate-[71.02deg] invisible">
          
          {/* Group of Medicine */}
          <div className="absolute left-[14.32%] right-[2.7%] top-[10.99%] bottom-[10.64%] transform rotate-[71.02deg]">
            
            {/* Medicine Vector elements */}
            <div className="absolute left-[24.55%] right-[23.93%] top-[54.86%] bottom-[10.15%] bg-[#8F7D6A] transform rotate-[71.02deg]"></div>
            <div className="absolute left-[28.94%] right-[34.71%] top-[14.92%] bottom-[34.24%] bg-[#8F7D6A] transform rotate-[71.02deg]"></div>
            <div className="absolute left-[80.16%] right-[1.09%] top-[38.51%] bottom-[42.74%] bg-[#8F7D6A] transform rotate-[71.02deg]"></div>
            <div className="absolute left-[57.13%] right-[24.11%] top-[57.99%] bottom-[23.26%] bg-[#8F7D6A] transform rotate-[71.02deg]"></div>
            <div className="absolute left-[78.41%] right-[2.83%] top-[62.24%] bottom-[19.01%] bg-[#8F7D6A] transform rotate-[71.02deg]"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
