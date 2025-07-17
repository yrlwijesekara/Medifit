import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import mainProductImage from '././../assets/home/main-1.png';
import categoryMedicine from '../assets/home/catergory-1.png';
import categoryHealthcare from '../assets/home/catergory-2.png';
import categoryBeautycare from '../assets/home/catergory-3.png';
import categoryFitness from '../assets/home/catergory-4.png';
import categoryLabequipment from '../assets/home/catergory-5.png';
import categoryMedkits from '../assets/home/catergory-6.png';
import ctaImage1 from '../assets/home/cta-1.png';
import ctaImage2 from '../assets/home/cta-2.png';
import ctaImage3 from '../assets/home/cta-3.png';
import productMicroscope from '../assets/home/microscope.png';
import productOximeter from '../assets/home/oximeter.png';
import productSerum from '../assets/home/serum.png';
import productProtein from '../assets/home/protein.png';

const HomePage = () => {
  // State for mobile badge visibility
  const [mobileBadges, setMobileBadges] = useState({
    // CTA cards
    cta1: false,
    cta2: false,
    cta3: false,
    // Product cards
    product1: false,
    product2: false,
    product3: false,
    product4: false,
  });

  // Toggle badge visibility for mobile
  const toggleMobileBadge = (cardId) => {
    setMobileBadges(prev => ({
      ...prev,
      [cardId]: !prev[cardId]
    }));
  };

  return (
    <>
      {/* Navigation Bar */}
      <Navbar />
      
      {/* Rectangle 64 - Main Container */}
      <div className="absolute w-full h-[500px] md:h-[990px] left-0 top-[91px] bg-[#E8E6DE] overflow-hidden">
        
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

        {/* Mobile Layout - Redesigned for Beauty */}
        <div className="block md:hidden relative min-h-[450px] flex items-center justify-center">
          <div className="w-full px-6 py-12 flex items-center justify-center min-h-full">
            <div className="w-full max-w-sm mx-auto">
              
              {/* Hero Content Container */}
              <div className="text-center space-y-8 flex flex-col items-center justify-center">
                
                {/* Title & Description Block */}
                <div className="space-y-4 text-center w-full flex flex-col items-center">
                  <h1 className="font-poppins font-semibold text-3xl leading-tight text-[#503217] tracking-tight text-center max-w-xs">
                    Your trusted care now and always
                  </h1>
                  <p className="font-sans-serif-collection font-normal text-sm leading-relaxed text-[#8F7D6A] opacity-90 text-center max-w-xs px-2">
                    For the best results, align your health needs with your medication plan.
                  </p>
                </div>
                
                {/* Product Showcase */}
                <div className="flex justify-center items-center py-4 w-full">
                  <div className="relative group flex justify-center">
                    {/* Main Product Container - No Border */}
                    <div className="relative w-56 h-44 flex items-center justify-center">
                      {/* Product Image - No background borders */}
                      <div className="w-full h-full flex items-center justify-center">
                        <div 
                          className="w-full h-full bg-center bg-contain bg-no-repeat transform group-hover:scale-105 transition-transform duration-700 ease-out" 
                          style={{backgroundImage: `url(${mainProductImage})`}}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Call-to-Action Button */}
                <div className="flex justify-center items-center w-full pt-2">
                  <button className="group relative bg-gradient-to-r from-[#503217] via-[#5D3A1F] to-[#6B4228] hover:from-[#6B4228] hover:via-[#7D4F35] hover:to-[#8F5C42] text-white font-medium py-4 px-10 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 ease-out border border-[#8F7D6A]/20 hover:border-[#EEEDE7]/30 w-44 mx-auto">
                    
                    {/* Button Background Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                    
                    {/* Button Content */}
                    <div className="relative flex items-center justify-center gap-3">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform group-hover:scale-110 transition-transform duration-300">
                        <rect x="2" y="3" width="20" height="18" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                        <path d="M8 7v-2a4 4 0 0 1 8 0v2" stroke="currentColor" strokeWidth="1.5"/>
                      </svg>
                      <span className="text-[15px] font-medium tracking-wide">Shop Now</span>
                    </div>
                  </button>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Shop by Category Section */}
      <div className="absolute w-full h-[900px] md:h-[389px] left-0 top-[680px] md:top-[1200px] overflow-hidden">
        
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

      {/* CTA Section */}
      <div className="absolute w-full left-0 top-[1630px] md:top-[1689px] h-[650px] md:h-[300px] overflow-hidden">
        
        {/* CTA Cards Container */}
        <div className="absolute w-full left-0 top-0 px-4 md:px-0">
          
          {/* Desktop Layout - 3 CTAs in a row */}
          <div className="hidden md:flex justify-center items-start gap-[30px] w-full">
            
            {/* CTA 1 - Hand sanitizer collection */}
            <div className="relative w-[416px] h-[266px] group">
              {/* Background Rectangle */}
              <div className="absolute w-[413px] h-[259px] left-0 top-0 bg-[#F2F2F2] rounded-[10px]"></div>
              
              {/* Decorative Ellipses */}
              <div className="absolute w-[155px] h-[164px] left-0 top-[95px] bg-[#E2DFCF] opacity-20 rounded-full transform -rotate-[86deg]"></div>
              <div className="absolute w-[245px] h-[126px] left-[147px] top-0 bg-[#E2DFCF] opacity-20 rounded-full transform rotate-1"></div>
              
              {/* Product Image Placeholder */}
              <div className="absolute w-[163px] h-[202px] left-[234px] top-[30px] rounded flex items-center justify-center overflow-hidden">
                <img 
                  src={ctaImage1} 
                  alt="Hand sanitizer collection" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Content */}
              <div className="absolute left-[26px] top-[24px] flex flex-col justify-between w-[175px] h-[180px]">
                {/* Badge - Hidden by default, shown on hover */}
                <div className="flex justify-center items-center px-[10px] py-[10px] w-[80px] h-[30px] bg-[#D3744A] rounded-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="font-sans-serif-collection font-normal text-[13px] leading-[150%] text-[#EEEDE7]">Sanitizer</span>
                </div>
                
                {/* Text Content */}
                <div className="flex flex-col gap-[15px]">
                  <h3 className="font-poppins font-medium text-[24px] leading-[150%] text-[#503217]">
                    Hand sanitizer collection
                  </h3>
                  
                  {/* Shop Now Link */}
                  <div className="flex items-center gap-[10px] group">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="2" y="3" width="20" height="18" rx="2" stroke="#8F7D6A" strokeWidth="2"/>
                        <path d="M8 7v-2a4 4 0 0 1 8 0v2" stroke="#8F7D6A" strokeWidth="2"/>
                      </svg>
                    </div>
                    <span className="font-poppins font-medium text-[18px] leading-[150%] text-[#8F7D6A] group-hover:underline">Shop now</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA 2 - Face wash sale collection */}
            <div className="relative w-[416px] h-[266px] group">
              {/* Background Rectangle */}
              <div className="absolute w-[413px] h-[259px] left-0 top-0 bg-[#F2F2F2] rounded-[10px]"></div>
              
              {/* Decorative Ellipses */}
              <div className="absolute w-[61px] h-[72px] left-[147px] top-[187px] bg-[#E2DFCF] opacity-20 rounded-full transform rotate-180"></div>
              <div className="absolute w-[172px] h-[111px] left-[302px] top-[60px] bg-[#E2DFCF] opacity-20 rounded-full transform rotate-90"></div>
              <div className="absolute w-[191px] h-[86px] left-[-1px] top-[47px] bg-[#E2DFCF] opacity-20 rounded-full transform -rotate-90"></div>
              
              {/* Product Image Placeholder */}
              <div className="absolute w-[150px] h-[184px] left-[234px] top-[37px] rounded flex items-center justify-center overflow-hidden">
                <img 
                  src={ctaImage2} 
                  alt="Face wash sale collection" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Content */}
              <div className="absolute left-[26px] top-[24px] flex flex-col justify-between w-[175px] h-[180px]">
                {/* Badge - Hidden by default, shown on hover */}
                <div className="flex justify-center items-center px-[10px] py-[10px] w-[80px] h-[30px] bg-[#D3744A] rounded-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="font-sans-serif-collection font-normal text-[13px] leading-[150%] text-[#EEEDE7]">Top deals</span>
                </div>
                
                {/* Text Content */}
                <div className="flex flex-col gap-[15px]">
                  <h3 className="font-poppins font-medium text-[24px] leading-[150%] text-[#503217]">
                    Face wash sale collection
                  </h3>
                  
                  {/* Discover Now Link */}
                  <div className="flex items-center gap-[10px] group">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="#8F7D6A" strokeWidth="2"/>
                        <circle cx="12" cy="12" r="3" stroke="#8F7D6A" strokeWidth="2"/>
                      </svg>
                    </div>
                    <span className="font-poppins font-medium text-[18px] leading-[150%] text-[#8F7D6A] group-hover:underline">Discover now</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA 3 - Facial mask deals */}
            <div className="relative w-[416px] h-[266px] group">
              {/* Background Rectangle */}
              <div className="absolute w-[413px] h-[259px] left-0 top-0 bg-[#F2F2F2] rounded-[10px]"></div>
              
              {/* Decorative Elements */}
              <div className="absolute w-[32px] h-[8px] left-[255px] top-[64px] bg-[#E2DFCF] opacity-20 rounded transform rotate-12"></div>
              <div className="absolute w-[134px] h-[92px] left-[288px] top-[167px] bg-[#E2DFCF] opacity-20 rounded-[10px]"></div>
              
              {/* Product Image Placeholder */}
              <div className="absolute w-[140px] h-[203px] left-[266px] top-[28px] rounded flex items-center justify-center overflow-hidden transform scale-x-[-1]">
                <img 
                  src={ctaImage3} 
                  alt="Facial mask deals" 
                  className="w-full h-full object-cover transform scale-x-[-1]"
                />
              </div>
              
              {/* Content */}
              <div className="absolute left-[26px] top-[24px] flex flex-col justify-between w-[175px] h-[180px]">
                {/* Badge - Hidden by default, shown on hover */}
                <div className="flex justify-center items-center px-[10px] py-[10px] w-[90px] h-[30px] bg-[#D3744A] rounded-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="font-sans-serif-collection font-normal text-[13px] leading-[150%] text-[#EEEDE7]">Face mask</span>
                </div>
                
                {/* Text Content */}
                <div className="flex flex-col gap-[15px]">
                  <h3 className="font-poppins font-medium text-[24px] leading-[150%] text-[#503217]">
                    Facial mask deals save up to 50%
                  </h3>
                  
                  {/* Discover Now Link */}
                  <div className="flex items-center gap-[10px] group">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="#8F7D6A" strokeWidth="2"/>
                        <circle cx="12" cy="12" r="3" stroke="#8F7D6A" strokeWidth="2"/>
                      </svg>
                    </div>
                    <span className="font-poppins font-medium text-[18px] leading-[150%] text-[#8F7D6A] group-hover:underline">Discover now</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Layout - Stacked CTAs */}
          <div className="md:hidden flex flex-col gap-6 items-center">
            
            {/* CTA 1 - Hand sanitizer collection */}
            <div className="relative w-[320px] h-[200px] group" onClick={() => toggleMobileBadge('cta1')}>
              {/* Background Rectangle */}
              <div className="absolute w-full h-full bg-[#F2F2F2] rounded-[10px] cursor-pointer"></div>
              
              {/* Product Image Placeholder */}
              <div className="absolute w-[100px] h-[120px] right-4 top-4 rounded flex items-center justify-center overflow-hidden">
                <img 
                  src={ctaImage1} 
                  alt="Hand sanitizer collection" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Content */}
              <div className="absolute left-4 top-4 flex flex-col gap-4 w-[180px]">
                {/* Badge - Mobile: onClick toggle, Desktop: hover */}
                <div className={`flex justify-center items-center px-2 py-1 w-[60px] h-[25px] bg-[#D3744A] rounded-[8px] transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100 ${mobileBadges.cta1 ? 'opacity-100' : 'opacity-0'}`}>
                  <span className="font-sans-serif-collection font-normal text-[11px] leading-[150%] text-[#EEEDE7]">Sanitizer</span>
                </div>
                
                {/* Text Content */}
                <div className="flex flex-col gap-3">
                  <h3 className="font-poppins font-medium text-[18px] leading-[150%] text-[#503217]">
                    Hand sanitizer collection
                  </h3>
                  
                  {/* Shop Now Link */}
                  <div className="flex items-center gap-2 group">
                    <div className="w-4 h-4 flex items-center justify-center">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="2" y="3" width="20" height="18" rx="2" stroke="#8F7D6A" strokeWidth="2"/>
                        <path d="M8 7v-2a4 4 0 0 1 8 0v2" stroke="#8F7D6A" strokeWidth="2"/>
                      </svg>
                    </div>
                    <span className="font-poppins font-medium text-[14px] leading-[150%] text-[#8F7D6A] group-hover:underline">Shop now</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA 2 - Face wash sale collection */}
            <div className="relative w-[320px] h-[200px] group" onClick={() => toggleMobileBadge('cta2')}>
              {/* Background Rectangle */}
              <div className="absolute w-full h-full bg-[#F2F2F2] rounded-[10px] cursor-pointer"></div>
              
              {/* Product Image Placeholder */}
              <div className="absolute w-[100px] h-[120px] right-4 top-4 rounded flex items-center justify-center overflow-hidden">
                <img 
                  src={ctaImage2} 
                  alt="Face wash sale collection" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Content */}
              <div className="absolute left-4 top-4 flex flex-col gap-4 w-[180px]">
                {/* Badge - Mobile: onClick toggle, Desktop: hover */}
                <div className={`flex justify-center items-center px-2 py-1 w-[60px] h-[25px] bg-[#D3744A] rounded-[8px] transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100 ${mobileBadges.cta2 ? 'opacity-100' : 'opacity-0'}`}>
                  <span className="font-sans-serif-collection font-normal text-[11px] leading-[150%] text-[#EEEDE7]">Top deals</span>
                </div>
                
                {/* Text Content */}
                <div className="flex flex-col gap-3">
                  <h3 className="font-poppins font-medium text-[18px] leading-[150%] text-[#503217]">
                    Face wash sale collection
                  </h3>
                  
                  {/* Discover Now Link */}
                  <div className="flex items-center gap-2 group">
                    <div className="w-4 h-4 flex items-center justify-center">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="#8F7D6A" strokeWidth="2"/>
                        <circle cx="12" cy="12" r="3" stroke="#8F7D6A" strokeWidth="2"/>
                      </svg>
                    </div>
                    <span className="font-poppins font-medium text-[14px] leading-[150%] text-[#8F7D6A] group-hover:underline">Discover now</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA 3 - Facial mask deals */}
            <div className="relative w-[320px] h-[200px] group" onClick={() => toggleMobileBadge('cta3')}>
              {/* Background Rectangle */}
              <div className="absolute w-full h-full bg-[#F2F2F2] rounded-[10px] cursor-pointer"></div>
              
              {/* Product Image Placeholder */}
              <div className="absolute w-[100px] h-[120px] right-4 top-4 rounded flex items-center justify-center overflow-hidden">
                <img 
                  src={ctaImage3} 
                  alt="Facial mask deals" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Content */}
              <div className="absolute left-4 top-4 flex flex-col gap-4 w-[180px]">
                {/* Badge - Mobile: onClick toggle, Desktop: hover */}
                <div className={`flex justify-center items-center px-2 py-1 w-[65px] h-[25px] bg-[#D3744A] rounded-[8px] transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100 ${mobileBadges.cta3 ? 'opacity-100' : 'opacity-0'}`}>
                  <span className="font-sans-serif-collection font-normal text-[11px] leading-[150%] text-[#EEEDE7]">Face mask</span>
                </div>
                
                {/* Text Content */}
                <div className="flex flex-col gap-3">
                  <h3 className="font-poppins font-medium text-[18px] leading-[150%] text-[#503217]">
                    Facial mask deals save up to 50%
                  </h3>
                  
                  {/* Discover Now Link */}
                  <div className="flex items-center gap-2 group">
                    <div className="w-4 h-4 flex items-center justify-center">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="#8F7D6A" strokeWidth="2"/>
                        <circle cx="12" cy="12" r="3" stroke="#8F7D6A" strokeWidth="2"/>
                      </svg>
                    </div>
                    <span className="font-poppins font-medium text-[14px] leading-[150%] text-[#8F7D6A] group-hover:underline">Discover now</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Latest health product Section */}
      <div className="absolute w-full left-0 top-[2330px] md:top-[2089px] h-[600px] md:h-[479px] overflow-hidden">
        
        {/* Section Title */}
        <div className="absolute w-[527px] h-[72px] left-1/2 transform -translate-x-1/2 top-0">
          <h2 className="font-poppins font-medium text-[48px] leading-[120%] text-center text-[#503217] hidden md:block">
            Latest health product
          </h2>
          <h2 className="font-poppins font-medium text-[32px] leading-[120%] text-center text-[#503217] md:hidden">
            Latest health product
          </h2>
        </div>

        {/* Products Container */}
        <div className="absolute w-full left-0 top-[100px] md:top-[133px] px-4 md:px-0">
          
          {/* Desktop Layout - 4 products in a row */}
          <div className="hidden md:flex justify-center gap-[30px] w-full">
            
            {/* Product 1 - Microscope */}
            <div className="flex flex-col items-start gap-[15px] w-[302px] h-[341px]">
              {/* Product Image Container */}
              <div className="relative flex justify-center items-center w-[302px] h-[262px] bg-[#F2F2F2] rounded-[10px] overflow-hidden group">
                {/* Badge - Hidden by default, shown on hover */}
                <div className="absolute flex justify-center items-center px-[10px] py-[10px] w-[50px] h-[30px] bg-[#D3744A] rounded-[10px] left-5 top-5 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="font-sans-serif-collection font-normal text-[13px] leading-[150%] text-white">New</span>
                </div>
                
                {/* Additional Badge - Hover only */}
                <div className="absolute flex justify-center items-center px-[10px] py-[10px] w-[80px] h-[30px] bg-[#22C55E] rounded-[10px] right-5 top-5 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="font-sans-serif-collection font-normal text-[13px] leading-[150%] text-white">Best Seller</span>
                </div>
                
                {/* Product Image Placeholder */}
                <div className="flex justify-center items-center w-[160px] h-[200px] rounded overflow-hidden">
                  <img 
                    src={productMicroscope} 
                    alt="Microscope" 
                    className="w-full h-full object-contain"
                  />
                </div>
                
                {/* Shop Now Button - Hidden by default, shown on hover */}
                <div className="absolute flex justify-center items-center px-[10px] py-[5px] w-[262px] h-[35px] bg-[#E2DFCF] rounded-[10px] bottom-5 left-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center gap-[5px]">
                    {/* Cart Icon */}
                    <div className="w-6 h-6 flex items-center justify-center">
                      <div className="w-4 h-4 border-2 border-[#503217] rounded-sm"></div>
                    </div>
                    <span className="font-poppins font-medium text-[16px] leading-[150%] text-[#503217]">Shop now</span>
                  </div>
                </div>
              </div>
              
              {/* Product Details */}
              <div className="flex flex-col items-start gap-[5px] w-[143px] h-[64px]">
                <h3 className="font-poppins font-medium text-[24px] leading-[150%] text-[#503217]">
                  Microscope
                </h3>
                <p className="font-poppins font-medium text-[18px] leading-[150%] text-[#8F7D6A]">
                  $45.00 USD
                </p>
              </div>
            </div>

            {/* Product 2 - Pulse oximeter */}
            <div className="flex flex-col items-start gap-[15px] w-[302px] h-[345px]">
              {/* Product Image Container */}
              <div className="relative flex justify-center items-center w-[302px] h-[262px] bg-[#F2F2F2] rounded-[10px] overflow-hidden group">
                {/* Badge - Hidden by default, shown on hover */}
                <div className="absolute flex justify-center items-center px-[10px] py-[10px] w-[81px] h-[30px] bg-[#D3744A] rounded-[10px] left-5 top-5 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="font-sans-serif-collection font-normal text-[13px] leading-[150%] text-white">Save 10%</span>
                </div>
                
                {/* Product Image Placeholder */}
                <div className="flex justify-center items-center w-[160px] h-[160px] rounded overflow-hidden">
                  <img 
                    src={productOximeter} 
                    alt="Pulse Oximeter" 
                    className="w-full h-full object-contain"
                  />
                </div>
                
                {/* Shop Now Button - Hidden by default, shown on hover */}
                <div className="absolute flex justify-center items-center px-[10px] py-[5px] w-[262px] h-[35px] bg-[#E2DFCF] rounded-[10px] bottom-5 left-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center gap-[5px]">
                    {/* Cart Icon */}
                    <div className="w-6 h-6 flex items-center justify-center">
                      <div className="w-4 h-4 border-2 border-[#503217] rounded-sm"></div>
                    </div>
                    <span className="font-poppins font-medium text-[16px] leading-[150%] text-[#503217]">Shop now</span>
                  </div>
                </div>
              </div>
              
              {/* Product Details */}
              <div className="flex flex-col items-start gap-[5px] w-[221px] h-[68px]">
                <h3 className="font-poppins font-medium text-[24px] leading-[150%] text-[#503217]">
                  Pulse oximeter
                </h3>
                <div className="flex items-center gap-[18px]">
                  <p className="font-poppins font-medium text-[18px] leading-[150%] text-[#8F7D6A]">
                    $19.00 USD
                  </p>
                  <div className="relative">
                    <p className="font-poppins font-medium text-[16px] leading-[150%] text-[#8F7D6A]">
                      $25.00 USD
                    </p>
                    <div className="absolute w-[55px] h-[1px] bg-[#8F7D6A] opacity-80 top-1/2 left-0"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Product 3 - Vitamin serum */}
            <div className="flex flex-col items-start gap-[15px] w-[302px] h-[347px]">
              {/* Product Image Container */}
              <div className="relative flex justify-center items-center w-[302px] h-[262px] bg-[#F2F2F2] rounded-[10px] overflow-hidden group">
                {/* Badge - Hidden by default, shown on hover */}
                <div className="absolute flex justify-center items-center px-[10px] py-[10px] w-[70px] h-[30px] bg-[#4A90E2] rounded-[10px] left-5 top-5 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="font-sans-serif-collection font-normal text-[13px] leading-[150%] text-white">Popular</span>
                </div>
                
                {/* Product Image Placeholder */}
                <div className="flex justify-center items-center w-[160px] h-[160px] rounded overflow-hidden">
                  <img 
                    src={productSerum} 
                    alt="Vitamin Serum" 
                    className="w-full h-full object-contain"
                  />
                </div>
                
                {/* Shop Now Button - Hidden by default, shown on hover */}
                <div className="absolute flex justify-center items-center px-[10px] py-[5px] w-[262px] h-[35px] bg-[#E2DFCF] rounded-[10px] bottom-5 left-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center gap-[5px]">
                    {/* Cart Icon */}
                    <div className="w-6 h-6 flex items-center justify-center">
                      <div className="w-4 h-4 border-2 border-[#503217] rounded-sm"></div>
                    </div>
                    <span className="font-poppins font-medium text-[16px] leading-[150%] text-[#503217]">Shop now</span>
                  </div>
                </div>
              </div>
              
              {/* Product Details */}
              <div className="flex flex-col items-start gap-[5px] w-[225px] h-[70px]">
                <h3 className="font-poppins font-medium text-[24px] leading-[150%] text-[#503217]">
                  Vitamin serum
                </h3>
                <div className="flex items-center gap-[20px]">
                  <p className="font-poppins font-medium text-[18px] leading-[150%] text-[#8F7D6A]">
                    $20.00 USD
                  </p>
                  <div className="relative">
                    <p className="font-poppins font-medium text-[16px] leading-[150%] text-[#8F7D6A]">
                      $30.00 USD
                    </p>
                    <div className="absolute w-[55px] h-[1px] bg-[#8F7D6A] opacity-80 top-1/2 left-0"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Product 4 - High protein */}
            <div className="flex flex-col items-start gap-[15px] w-[302px] h-[345px]">
              {/* Product Image Container */}
              <div className="relative flex justify-center items-center w-[302px] h-[262px] bg-[#F2F2F2] rounded-[10px] overflow-hidden group">
                {/* Badge - Hidden by default, shown on hover */}
                <div className="absolute flex justify-center items-center px-[10px] py-[10px] w-[50px] h-[30px] bg-[#D3744A] rounded-[10px] left-5 top-5 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="font-sans-serif-collection font-normal text-[13px] leading-[150%] text-white">New</span>
                </div>
                
                {/* Additional Badge - Hover only */}
                <div className="absolute flex justify-center items-center px-[10px] py-[10px] w-[75px] h-[30px] bg-[#8B5CF6] rounded-[10px] right-5 top-5 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="font-sans-serif-collection font-normal text-[13px] leading-[150%] text-white">Premium</span>
                </div>
                
                {/* Product Image */}
                <div className="flex justify-center items-center w-[160px] h-[160px] rounded overflow-hidden">
                  <img 
                    src={productProtein} 
                    alt="High Protein" 
                    className="w-full h-full object-contain"
                  />
                </div>
                
                {/* Shop Now Button - Hidden by default, shown on hover */}
                <div className="absolute flex justify-center items-center px-[10px] py-[5px] w-[262px] h-[35px] bg-[#E2DFCF] rounded-[10px] bottom-5 left-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center gap-[5px]">
                    {/* Cart Icon */}
                    <div className="w-6 h-6 flex items-center justify-center">
                      <div className="w-4 h-4 border-2 border-[#503217] rounded-sm"></div>
                    </div>
                    <span className="font-poppins font-medium text-[16px] leading-[150%] text-[#503217]">Shop now</span>
                  </div>
                </div>
              </div>
              
              {/* Product Details */}
              <div className="flex flex-col items-start gap-[5px] w-[152px] h-[68px]">
                <h3 className="font-poppins font-medium text-[24px] leading-[150%] text-[#503217]">
                  High protein
                </h3>
                <p className="font-poppins font-medium text-[18px] leading-[150%] text-[#8F7D6A]">
                  $50.00 USD
                </p>
              </div>
            </div>
          </div>

          {/* Mobile Layout - 2 products per row */}
          <div className="md:hidden flex flex-col gap-6 items-center">
            
            {/* Row 1 */}
            <div className="flex gap-4">
              {/* Product 1 - Microscope */}
              <div className="flex flex-col items-start gap-[10px] w-[160px] h-[220px]" onClick={() => toggleMobileBadge('product1')}>
                {/* Product Image Container */}
                <div className="relative flex justify-center items-center w-[160px] h-[140px] bg-[#F2F2F2] rounded-[8px] overflow-hidden group cursor-pointer">
                  {/* Badge - Mobile: onClick toggle, Desktop: hover */}
                  <div className={`absolute flex justify-center items-center px-[8px] py-[6px] w-[40px] h-[25px] bg-[#D3744A] rounded-[8px] left-3 top-3 z-10 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100 ${mobileBadges.product1 ? 'opacity-100' : 'opacity-0'}`}>
                    <span className="font-sans-serif-collection font-normal text-[11px] leading-[150%] text-white">New</span>
                  </div>
                  
                  {/* Additional Badge - Mobile: onClick toggle, Desktop: hover */}
                  <div className={`absolute flex justify-center items-center px-[6px] py-[4px] w-[50px] h-[20px] bg-[#22C55E] rounded-[6px] right-3 top-3 z-10 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100 ${mobileBadges.product1 ? 'opacity-100' : 'opacity-0'}`}>
                    <span className="font-sans-serif-collection font-normal text-[9px] leading-[150%] text-white">Best Seller</span>
                  </div>
                  
                  {/* Product Image */}
                  <div className="flex justify-center items-center w-[100px] h-[100px] rounded overflow-hidden">
                    <img 
                      src={productMicroscope} 
                      alt="Microscope" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  
                  {/* Shop Now Button - Mobile: onClick toggle, Desktop: hover */}
                  <div className={`absolute flex justify-center items-center px-[8px] py-[4px] w-[120px] h-[25px] bg-[#E2DFCF] rounded-[6px] bottom-3 left-5 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100 ${mobileBadges.product1 ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="flex items-center gap-[3px]">
                      {/* Cart Icon */}
                      <div className="w-4 h-4 flex items-center justify-center">
                        <div className="w-3 h-3 border-2 border-[#503217] rounded-sm"></div>
                      </div>
                      <span className="font-poppins font-medium text-[12px] leading-[150%] text-[#503217]">Shop now</span>
                    </div>
                  </div>
                </div>
                
                {/* Product Details */}
                <div className="flex flex-col items-start gap-[3px] w-full">
                  <h3 className="font-poppins font-medium text-[16px] leading-[150%] text-[#503217]">
                    Microscope
                  </h3>
                  <p className="font-poppins font-medium text-[14px] leading-[150%] text-[#8F7D6A]">
                    $45.00 USD
                  </p>
                </div>
              </div>

              {/* Product 2 - Pulse oximeter */}
              <div className="flex flex-col items-start gap-[10px] w-[160px] h-[220px]" onClick={() => toggleMobileBadge('product2')}>
                {/* Product Image Container */}
                <div className="relative flex justify-center items-center w-[160px] h-[140px] bg-[#F2F2F2] rounded-[8px] overflow-hidden group cursor-pointer">
                  {/* Badge - Mobile: onClick toggle, Desktop: hover */}
                  <div className={`absolute flex justify-center items-center px-[8px] py-[6px] w-[55px] h-[25px] bg-[#D3744A] rounded-[8px] left-3 top-3 z-10 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100 ${mobileBadges.product2 ? 'opacity-100' : 'opacity-0'}`}>
                    <span className="font-sans-serif-collection font-normal text-[11px] leading-[150%] text-white">Save 10%</span>
                  </div>
                  
                  {/* Product Image */}
                  <div className="flex justify-center items-center w-[100px] h-[100px] rounded overflow-hidden">
                    <img 
                      src={productOximeter} 
                      alt="Pulse Oximeter" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  
                  {/* Shop Now Button - Mobile: onClick toggle, Desktop: hover */}
                  <div className={`absolute flex justify-center items-center px-[8px] py-[4px] w-[120px] h-[25px] bg-[#E2DFCF] rounded-[6px] bottom-3 left-5 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100 ${mobileBadges.product2 ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="flex items-center gap-[3px]">
                      {/* Cart Icon */}
                      <div className="w-4 h-4 flex items-center justify-center">
                        <div className="w-3 h-3 border-2 border-[#503217] rounded-sm"></div>
                      </div>
                      <span className="font-poppins font-medium text-[12px] leading-[150%] text-[#503217]">Shop now</span>
                    </div>
                  </div>
                </div>
                
                {/* Product Details */}
                <div className="flex flex-col items-start gap-[3px] w-full">
                  <h3 className="font-poppins font-medium text-[16px] leading-[150%] text-[#503217]">
                    Pulse oximeter
                  </h3>
                  <div className="flex items-center gap-2">
                    <p className="font-poppins font-medium text-[14px] leading-[150%] text-[#8F7D6A]">
                      $19.00 USD
                    </p>
                    <div className="relative">
                      <p className="font-poppins font-medium text-[12px] leading-[150%] text-[#8F7D6A]">
                        $25.00 USD
                      </p>
                      <div className="absolute w-[30px] h-[1px] bg-[#8F7D6A] opacity-80 top-1/2 left-0"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 2 */}
            <div className="flex gap-4">
              {/* Product 3 - Vitamin serum */}
              <div className="flex flex-col items-start gap-[10px] w-[160px] h-[220px]" onClick={() => toggleMobileBadge('product3')}>
                {/* Product Image Container */}
                <div className="relative flex justify-center items-center w-[160px] h-[140px] bg-[#F2F2F2] rounded-[8px] overflow-hidden group cursor-pointer">
                  {/* Badge - Mobile: onClick toggle, Desktop: hover */}
                  <div className={`absolute flex justify-center items-center px-[6px] py-[4px] w-[50px] h-[20px] bg-[#4A90E2] rounded-[6px] left-3 top-3 z-10 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100 ${mobileBadges.product3 ? 'opacity-100' : 'opacity-0'}`}>
                    <span className="font-sans-serif-collection font-normal text-[10px] leading-[150%] text-white">Popular</span>
                  </div>
                  
                  {/* Product Image */}
                  <div className="flex justify-center items-center w-[100px] h-[100px] rounded overflow-hidden">
                    <img 
                      src={productSerum} 
                      alt="Vitamin Serum" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  
                  {/* Shop Now Button - Mobile: onClick toggle, Desktop: hover */}
                  <div className={`absolute flex justify-center items-center px-[8px] py-[4px] w-[120px] h-[25px] bg-[#E2DFCF] rounded-[6px] bottom-3 left-5 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100 ${mobileBadges.product3 ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="flex items-center gap-[3px]">
                      {/* Cart Icon */}
                      <div className="w-4 h-4 flex items-center justify-center">
                        <div className="w-3 h-3 border-2 border-[#503217] rounded-sm"></div>
                      </div>
                      <span className="font-poppins font-medium text-[12px] leading-[150%] text-[#503217]">Shop now</span>
                    </div>
                  </div>
                </div>
                
                {/* Product Details */}
                <div className="flex flex-col items-start gap-[3px] w-full">
                  <h3 className="font-poppins font-medium text-[16px] leading-[150%] text-[#503217]">
                    Vitamin serum
                  </h3>
                  <div className="flex items-center gap-2">
                    <p className="font-poppins font-medium text-[14px] leading-[150%] text-[#8F7D6A]">
                      $20.00 USD
                    </p>
                    <div className="relative">
                      <p className="font-poppins font-medium text-[12px] leading-[150%] text-[#8F7D6A]">
                        $30.00 USD
                      </p>
                      <div className="absolute w-[30px] h-[1px] bg-[#8F7D6A] opacity-80 top-1/2 left-0"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Product 4 - High protein */}
              <div className="flex flex-col items-start gap-[10px] w-[160px] h-[220px]" onClick={() => toggleMobileBadge('product4')}>
                {/* Product Image Container */}
                <div className="relative flex justify-center items-center w-[160px] h-[140px] bg-[#F2F2F2] rounded-[8px] overflow-hidden group cursor-pointer">
                  {/* Badge - Mobile: onClick toggle, Desktop: hover */}
                  <div className={`absolute flex justify-center items-center px-[8px] py-[6px] w-[40px] h-[25px] bg-[#D3744A] rounded-[8px] left-3 top-3 z-10 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100 ${mobileBadges.product4 ? 'opacity-100' : 'opacity-0'}`}>
                    <span className="font-sans-serif-collection font-normal text-[11px] leading-[150%] text-white">New</span>
                  </div>
                  
                  {/* Additional Badge - Mobile: onClick toggle, Desktop: hover */}
                  <div className={`absolute flex justify-center items-center px-[6px] py-[4px] w-[45px] h-[20px] bg-[#8B5CF6] rounded-[6px] right-3 top-3 z-10 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100 ${mobileBadges.product4 ? 'opacity-100' : 'opacity-0'}`}>
                    <span className="font-sans-serif-collection font-normal text-[9px] leading-[150%] text-white">Premium</span>
                  </div>
                  
                  {/* Product Image */}
                  <div className="flex justify-center items-center w-[100px] h-[100px] rounded overflow-hidden">
                    <img 
                      src={productProtein} 
                      alt="High Protein" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  
                  {/* Shop Now Button - Mobile: onClick toggle, Desktop: hover */}
                  <div className={`absolute flex justify-center items-center px-[8px] py-[4px] w-[120px] h-[25px] bg-[#E2DFCF] rounded-[6px] bottom-3 left-5 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100 ${mobileBadges.product4 ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="flex items-center gap-[3px]">
                      {/* Cart Icon */}
                      <div className="w-4 h-4 flex items-center justify-center">
                        <div className="w-3 h-3 border-2 border-[#503217] rounded-sm"></div>
                      </div>
                      <span className="font-poppins font-medium text-[12px] leading-[150%] text-[#503217]">Shop now</span>
                    </div>
                  </div>
                </div>
                
                {/* Product Details */}
                <div className="flex flex-col items-start gap-[3px] w-full">
                  <h3 className="font-poppins font-medium text-[16px] leading-[150%] text-[#503217]">
                    High protein
                  </h3>
                  <p className="font-poppins font-medium text-[14px] leading-[150%] text-[#8F7D6A]">
                    $50.00 USD
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Medical Icon - Bottom Left */}
        <div className="absolute w-[124px] h-[124px] left-[57px] bottom-[50px] opacity-10 transform -rotate-[27deg] hidden md:block">
          {/* Medical Pills Icon */}
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-16 h-16 bg-[#8F7D6A] rounded-full opacity-50"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
