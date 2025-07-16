import Navbar from '../components/Navbar';
import mainProductImage from '././../assets/home/main-1.png';
import categoryMedicine from '../assets/home/catergory-1.png';
import categoryHealthcare from '../assets/home/catergory-2.png';
import categoryBeautycare from '../assets/home/catergory-3.png';
import categoryFitness from '../assets/home/catergory-4.png';
import categoryLabequipment from '../assets/home/catergory-5.png';
import categoryMedkits from '../assets/home/catergory-6.png';

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
        <div className="block md:hidden px-4 pt-16 relative">
          <div className="max-w-[350px] mx-auto text-center">
            <h1 className="font-poppins font-medium text-[32px] leading-[110%] text-[#503217] mb-4">
              Your trusted care now and always
            </h1>
            <p className="font-sans-serif-collection font-normal text-[14px] leading-[150%] text-[#8F7D6A] mb-8">
              For the best results, align your health needs with your medication plan.
            </p>
            
            {/* Centered Product Image Container */}
            <div className="flex justify-center mb-10 mt-6 ">
              <div className="relative w-[300px] h-[300px]">
                <div className="absolute inset-0 bg-[#EEEDE7] rounded-full"></div>
                <div className="absolute inset-4 bg-center bg-contain bg-no-repeat rounded-full" style={{backgroundImage: `url(${mainProductImage})`}}>
                </div>
                
              </div>
            </div>
            
            {/* Centered Button */}
            <div className="flex justify-center mt-24">
              <button className="relative flex items-center justify-center gap-4 px-10 py-5 bg-gradient-to-r from-[#503217] to-[#6B4228] hover:from-[#6B4228] hover:to-[#8B5538] hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl border-2 border-[#8F7D6A] hover:border-[#EEEDE7] active:scale-95 group overflow-hidden">
                {/* Animated border effect */}
                <div className="absolute inset-0 border-1 border-transparent bg-gradient-to-r from-[#EEEDE7] via-[#8F7D6A] to-[#EEEDE7] opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                <div className="absolute inset-[2px] bg-gradient-to-r from-[#503217] to-[#6B4228] group-hover:from-[#6B4228] group-hover:to-[#8B5538] transition-all duration-300"></div>
                
                {/* Content */}
                <div className="relative flex items-center gap-4 z-10">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-sm group-hover:animate-bounce">
                    <rect x="2" y="3" width="20" height="18" rx="2" stroke="#EEEDE7" strokeWidth="1.5"/>
                    <path d="M8 7v-2a4 4 0 0 1 8 0v2" stroke="#EEEDE7" strokeWidth="1.5"/>
                  </svg>
                  <span className="font-sans-serif-collection font-semibold text-[18px] text-[#F2F2F2] drop-shadow-sm tracking-wide group-hover:text-white transition-colors duration-300">Shop Now</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Shop by Category Section */}
      <div className="absolute w-full h-[800px] md:h-[389px] left-0 top-[1120px] overflow-hidden">
        
        {/* Section Title */}
        <div className="absolute w-[439px] h-[72px] left-1/2 transform -translate-x-1/2 top-0">
          <h2 className="font-poppins font-medium text-[48px] leading-[120%] text-center text-[#503217] hidden md:block">
            Shop by Category
          </h2>
          <h2 className="font-poppins font-medium text-[32px] leading-[120%] text-center text-[#503217] md:hidden">
            Shop by Category
          </h2>
        </div>

        {/* Desktop Categories Container - Hidden on Mobile */}
        <div className="absolute w-[1299px] h-[242px] left-1/2 transform -translate-x-1/2 top-[132px] justify-between hidden md:flex">
          
          {/* Category 1 - Medicine */}
          <div className="flex flex-col justify-center items-center p-[10px] gap-[10px] w-[191px] h-[242px] border border-[rgba(143,125,106,0.1)] rounded-[10px] hover:shadow-lg transition-shadow duration-300">
            <div className="flex flex-col justify-center items-center gap-5 w-[115px] h-[195px]">
              {/* Icon Container */}
              <div className="flex justify-center items-center p-[10px] w-[115px] h-[115px] border border-dashed border-[#503217] rounded-full">
                <div className="flex justify-center items-center w-[102px] h-[102px] bg-[#E2DFCF] rounded-full">
                  {/* Medicine/Capsule Icon */}
                  <img src={categoryMedicine} alt="Medicine" className="w-[50px] h-[50px] object-contain" />
                </div>
              </div>
              {/* Text Container */}
              <div className="flex flex-col items-center gap-[3px] w-[139px] h-[57px]">
                <h3 className="w-[83px] h-[27px] font-poppins font-medium text-[18px] leading-[150%] text-center text-[#503217]">
                  Medicine
                </h3>
                <p className="w-[67px] h-[27px] font-sans-serif-collection font-normal text-[16px] leading-[150%] text-center text-[#8F7D6A]">
                  32 Items
                </p>
              </div>
            </div>
          </div>

          {/* Category 2 - Health care */}
          <div className="flex flex-col justify-center items-center p-[10px] gap-[10px] w-[191px] h-[242px] border border-[rgba(143,125,106,0.1)] rounded-[10px] hover:shadow-lg transition-shadow duration-300">
            <div className="flex flex-col justify-center items-center gap-5 w-[115px] h-[195px]">
              {/* Icon Container */}
              <div className="flex justify-center items-center p-[10px] w-[115px] h-[115px] border border-dashed border-[#503217] rounded-full">
                <div className="flex justify-center items-center w-[102px] h-[102px] bg-[#E2DFCF] rounded-full">
                  {/* Heart Icon */}
                  <img src={categoryHealthcare} alt="Health care" className="w-[50px] h-[50px] object-contain" />
                </div>
              </div>
              {/* Text Container */}
              <div className="flex flex-col items-center gap-[3px] w-[139px] h-[57px]">
                <h3 className="w-[107px] h-[27px] font-poppins font-medium text-[18px] leading-[150%] text-center text-[#503217]">
                  Health care
                </h3>
                <p className="w-[67px] h-[27px] font-sans-serif-collection font-normal text-[16px] leading-[150%] text-center text-[#8F7D6A]">
                  20 Items
                </p>
              </div>
            </div>
          </div>

          {/* Category 3 - Beauty care */}
          <div className="flex flex-col justify-center items-center p-[10px] gap-[10px] w-[191px] h-[242px] border border-[rgba(143,125,106,0.1)] rounded-[10px] hover:shadow-lg transition-shadow duration-300">
            <div className="flex flex-col justify-center items-center gap-5 w-[115px] h-[195px]">
              {/* Icon Container */}
              <div className="flex justify-center items-center p-[10px] w-[115px] h-[115px] border border-dashed border-[#503217] rounded-full">
                <div className="flex justify-center items-center w-[102px] h-[102px] bg-[#E2DFCF] rounded-full">
                  {/* Leaf Icon */}
                  <img src={categoryBeautycare} alt="Beauty care" className="w-[50px] h-[50px] object-contain" />
                </div>
              </div>
              {/* Text Container */}
              <div className="flex flex-col items-center gap-[3px] w-[139px] h-[57px]">
                <h3 className="w-[119px] h-[27px] font-poppins font-medium text-[18px] leading-[150%] text-center text-[#503217]">
                  Beauty care
                </h3>
                <p className="w-[72px] h-[27px] font-sans-serif-collection font-normal text-[16px] leading-[150%] text-center text-[#8F7D6A]">
                  30 Items
                </p>
              </div>
            </div>
          </div>

          {/* Category 4 - Fitness */}
          <div className="flex flex-col justify-center items-center p-[10px] gap-[10px] w-[191px] h-[242px] border border-[rgba(143,125,106,0.1)] rounded-[10px] hover:shadow-lg transition-shadow duration-300">
            <div className="flex flex-col justify-center items-center gap-5 w-[115px] h-[195px]">
              {/* Icon Container */}
              <div className="flex justify-center items-center p-[10px] w-[115px] h-[115px] border border-dashed border-[#503217] rounded-full">
                <div className="flex justify-center items-center w-[102px] h-[102px] bg-[#E2DFCF] rounded-full">
                  {/* Heartbeat/Fitness Icon */}
                  <img src={categoryFitness} alt="Fitness" className="w-[50px] h-[50px] object-contain" />
                </div>
              </div>
              {/* Text Container */}
              <div className="flex flex-col items-center gap-[3px] w-[139px] h-[57px]">
                <h3 className="w-[71px] h-[27px] font-poppins font-medium text-[18px] leading-[150%] text-center text-[#503217]">
                  Fitness
                </h3>
                <p className="w-[72px] h-[27px] font-sans-serif-collection font-normal text-[16px] leading-[150%] text-center text-[#8F7D6A]">
                  35 Items
                </p>
              </div>
            </div>
          </div>

          {/* Category 5 - Lab equipment */}
          <div className="flex flex-col justify-center items-center p-[10px] gap-[10px] w-[191px] h-[242px] border border-[rgba(143,125,106,0.1)] rounded-[10px] hover:shadow-lg transition-shadow duration-300">
            <div className="flex flex-col justify-center items-center gap-5 w-[115px] h-[195px]">
              {/* Icon Container */}
              <div className="flex justify-center items-center p-[10px] w-[115px] h-[115px] border border-dashed border-[#503217] rounded-full">
                <div className="flex justify-center items-center w-[102px] h-[102px] bg-[#E2DFCF] rounded-full">
                  {/* Vials/Lab Equipment Icon */}
                  <img src={categoryLabequipment} alt="Lab equipment" className="w-[50px] h-[50px] object-contain" />
                </div>
              </div>
              {/* Text Container */}
              <div className="flex flex-col items-center gap-[3px] w-[139px] h-[57px]">
                <h3 className="w-[138px] h-[27px] font-poppins font-medium text-[18px] leading-[150%] text-center text-[#503217]">
                  Lab equipment
                </h3>
                <p className="w-[72px] h-[27px] font-sans-serif-collection font-normal text-[16px] leading-[150%] text-center text-[#8F7D6A]">
                  25 Items
                </p>
              </div>
            </div>
          </div>

          {/* Category 6 - Medkits */}
          <div className="flex flex-col justify-center items-center p-[10px] gap-[10px] w-[191px] h-[242px] border border-[rgba(143,125,106,0.1)] rounded-[10px] hover:shadow-lg transition-shadow duration-300">
            <div className="flex flex-col justify-center items-center gap-5 w-[115px] h-[195px]">
              {/* Icon Container */}
              <div className="flex justify-center items-center p-[10px] w-[115px] h-[115px] border border-dashed border-[#503217] rounded-full">
                <div className="flex justify-center items-center w-[102px] h-[102px] bg-[#E2DFCF] rounded-full">
                  {/* Medical Briefcase Icon */}
                  <img src={categoryMedkits} alt="Medkits" className="w-[50px] h-[50px] object-contain" />
                </div>
              </div>
              {/* Text Container */}
              <div className="flex flex-col items-center gap-[3px] w-[87px] h-[57px]">
                <h3 className="w-[87px] h-[27px] font-poppins font-medium text-[18px] leading-[150%] text-center text-[#503217]">
                  Medkits
                </h3>
                <p className="w-[87px] h-[27px] font-sans-serif-collection font-normal text-[16px] leading-[150%] text-center text-[#8F7D6A]">
                  25 Items
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Categories Container - Visible only on Mobile */}
        <div className="md:hidden flex flex-col items-center gap-4 px-4 top-[80px] absolute w-full">
          
          {/* Category 1 - Medicine */}
          <div className="flex flex-col justify-center items-center p-[10px] gap-[10px] w-[280px] h-[120px] border border-[rgba(143,125,106,0.1)] rounded-[10px] hover:shadow-lg transition-shadow duration-300">
            <div className="flex flex-row justify-center items-center gap-4 w-full h-full">
              {/* Icon Container */}
              <div className="flex justify-center items-center p-[8px] w-[70px] h-[70px] border border-dashed border-[#503217] rounded-full">
                <div className="flex justify-center items-center w-[60px] h-[60px] bg-[#E2DFCF] rounded-full">
                  <img src={categoryMedicine} alt="Medicine" className="w-[30px] h-[30px] object-contain" />
                </div>
              </div>
              {/* Text Container */}
              <div className="flex flex-col justify-center gap-[2px] flex-1">
                <h3 className="font-poppins font-medium text-[16px] leading-[150%] text-center text-[#503217]">
                  Medicine
                </h3>
                <p className="font-sans-serif-collection font-normal text-[14px] leading-[150%] text-center text-[#8F7D6A]">
                  32 Items
                </p>
              </div>
            </div>
          </div>

          {/* Category 2 - Health care */}
          <div className="flex flex-col justify-center items-center p-[10px] gap-[10px] w-[280px] h-[120px] border border-[rgba(143,125,106,0.1)] rounded-[10px] hover:shadow-lg transition-shadow duration-300">
            <div className="flex flex-row justify-center items-center gap-4 w-full h-full">
              {/* Icon Container */}
              <div className="flex justify-center items-center p-[8px] w-[70px] h-[70px] border border-dashed border-[#503217] rounded-full">
                <div className="flex justify-center items-center w-[60px] h-[60px] bg-[#E2DFCF] rounded-full">
                  <img src={categoryHealthcare} alt="Health care" className="w-[30px] h-[30px] object-contain" />
                </div>
              </div>
              {/* Text Container */}
              <div className="flex flex-col justify-center gap-[2px] flex-1">
                <h3 className="font-poppins font-medium text-[16px] leading-[150%] text-center text-[#503217]">
                  Health care
                </h3>
                <p className="font-sans-serif-collection font-normal text-[14px] leading-[150%] text-center text-[#8F7D6A]">
                  20 Items
                </p>
              </div>
            </div>
          </div>

          {/* Category 3 - Beauty care */}
          <div className="flex flex-col justify-center items-center p-[10px] gap-[10px] w-[280px] h-[120px] border border-[rgba(143,125,106,0.1)] rounded-[10px] hover:shadow-lg transition-shadow duration-300">
            <div className="flex flex-row justify-center items-center gap-4 w-full h-full">
              {/* Icon Container */}
              <div className="flex justify-center items-center p-[8px] w-[70px] h-[70px] border border-dashed border-[#503217] rounded-full">
                <div className="flex justify-center items-center w-[60px] h-[60px] bg-[#E2DFCF] rounded-full">
                  <img src={categoryBeautycare} alt="Beauty care" className="w-[30px] h-[30px] object-contain" />
                </div>
              </div>
              {/* Text Container */}
              <div className="flex flex-col justify-center gap-[2px] flex-1">
                <h3 className="font-poppins font-medium text-[16px] leading-[150%] text-center text-[#503217]">
                  Beauty care
                </h3>
                <p className="font-sans-serif-collection font-normal text-[14px] leading-[150%] text-center text-[#8F7D6A]">
                  30 Items
                </p>
              </div>
            </div>
          </div>

          {/* Category 4 - Fitness */}
          <div className="flex flex-col justify-center items-center p-[10px] gap-[10px] w-[280px] h-[120px] border border-[rgba(143,125,106,0.1)] rounded-[10px] hover:shadow-lg transition-shadow duration-300">
            <div className="flex flex-row justify-center items-center gap-4 w-full h-full">
              {/* Icon Container */}
              <div className="flex justify-center items-center p-[8px] w-[70px] h-[70px] border border-dashed border-[#503217] rounded-full">
                <div className="flex justify-center items-center w-[60px] h-[60px] bg-[#E2DFCF] rounded-full">
                  <img src={categoryFitness} alt="Fitness" className="w-[30px] h-[30px] object-contain" />
                </div>
              </div>
              {/* Text Container */}
              <div className="flex flex-col justify-center gap-[2px] flex-1">
                <h3 className="font-poppins font-medium text-[16px] leading-[150%] text-center text-[#503217]">
                  Fitness
                </h3>
                <p className="font-sans-serif-collection font-normal text-[14px] leading-[150%] text-center text-[#8F7D6A]">
                  35 Items
                </p>
              </div>
            </div>
          </div>

          {/* Category 5 - Lab equipment */}
          <div className="flex flex-col justify-center items-center p-[10px] gap-[10px] w-[280px] h-[120px] border border-[rgba(143,125,106,0.1)] rounded-[10px] hover:shadow-lg transition-shadow duration-300">
            <div className="flex flex-row justify-center items-center gap-4 w-full h-full">
              {/* Icon Container */}
              <div className="flex justify-center items-center p-[8px] w-[70px] h-[70px] border border-dashed border-[#503217] rounded-full">
                <div className="flex justify-center items-center w-[60px] h-[60px] bg-[#E2DFCF] rounded-full">
                  <img src={categoryLabequipment} alt="Lab equipment" className="w-[30px] h-[30px] object-contain" />
                </div>
              </div>
              {/* Text Container */}
              <div className="flex flex-col justify-center gap-[2px] flex-1">
                <h3 className="font-poppins font-medium text-[16px] leading-[150%] text-center text-[#503217]">
                  Lab equipment
                </h3>
                <p className="font-sans-serif-collection font-normal text-[14px] leading-[150%] text-center text-[#8F7D6A]">
                  25 Items
                </p>
              </div>
            </div>
          </div>

          {/* Category 6 - Medkits */}
          <div className="flex flex-col justify-center items-center p-[10px] gap-[10px] w-[280px] h-[120px] border border-[rgba(143,125,106,0.1)] rounded-[10px] hover:shadow-lg transition-shadow duration-300">
            <div className="flex flex-row justify-center items-center gap-4 w-full h-full">
              {/* Icon Container */}
              <div className="flex justify-center items-center p-[8px] w-[70px] h-[70px] border border-dashed border-[#503217] rounded-full">
                <div className="flex justify-center items-center w-[60px] h-[60px] bg-[#E2DFCF] rounded-full">
                  <img src={categoryMedkits} alt="Medkits" className="w-[30px] h-[30px] object-contain" />
                </div>
              </div>
              {/* Text Container */}
              <div className="flex flex-col justify-center gap-[2px] flex-1">
                <h3 className="font-poppins font-medium text-[16px] leading-[150%] text-center text-[#503217]">
                  Medkits
                </h3>
                <p className="font-sans-serif-collection font-normal text-[14px] leading-[150%] text-center text-[#8F7D6A]">
                  25 Items
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Medical Shape 4 - Decorative Element - Hidden on mobile */}
        <div className="absolute w-[147px] h-[112px] left-[1684px] top-[229px] opacity-10 transform -rotate-12 hidden md:block">
          <div className="absolute w-full h-full">
            {/* Vector 1 */}
            <div className="absolute left-[9.15%] right-[25.21%] top-0 bottom-[30.92%] bg-[#8F7D6A] transform -rotate-12"></div>
            {/* Vector 2 */}
            <div className="absolute left-[69.79%] right-[5.94%] top-[41.11%] bottom-[-38.39%] bg-[#8F7D6A] transform -rotate-12"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
