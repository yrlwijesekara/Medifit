import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';
import logo from '../assets/home/logo.png';
import medicalicon from '../assets/home/footer.png';

const Footer = () => {
  return (
    <footer className="relative w-full min-h-[565px] mt-16 overflow-hidden">
      {/* Main Footer Container */}
      <div className="relative w-full bg-[#E8E6DE] rounded-[5px] mx-auto px-4 lg:px-8 py-8 lg:py-16">
        
        {/* Decorative Elements */}
        {/* Bottom Left Decorative Line */}
        <div className="absolute left-[12px] bottom-[16px] w-[120px] h-[2px] bg-[#8F7D6A] opacity-20 transform scale-x-[-1] hidden lg:block"></div>
        
        {/* Top Right Decorative Medical Icon */}
        <div className="absolute w-[176px] h-[176px] right-[50px] lg:right-[199px] top-0 opacity-50 transform rotate-[15deg] hidden md:block">
          <div className="w-full h-full relative">
            {/* Medical Cross Icon SVG */}
           <img 
                      src={medicalicon} 
                      alt="Medical Icon" 
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        // Fallback SVG if image fails to load
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'block';
                      }}
                    />
          </div>
        </div>

        {/* Footer Content Container */}
        <div className="relative w-full max-w-[1400px] mx-auto">
          
          {/* Main Content Grid - Improved Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            
            {/* Pages Section - Second Column */}
            <div className="lg:col-span-1 flex flex-col items-center sm:items-start order-1 lg:order-1 ">
              <div className="w-full">
                <h3 className="font-poppins font-medium text-[20px] lg:text-[24px] leading-[150%] text-[#503217] mb-6 lg:mb-8 text-center sm:text-left">
                  Pages
                </h3>
                <nav className="flex flex-col gap-3 lg:gap-4 items-center sm:items-start">
                  <a href="/" className="font-poppins font-medium text-[16px] lg:text-[18px] leading-[150%] text-[#503217] hover:text-[#6B4228] transition-colors duration-300 hover:translate-x-1 transform">
                    Home
                  </a>
                  <a href="/shop" className="font-poppins font-medium text-[16px] lg:text-[18px] leading-[150%] text-[#8F7D6A] hover:text-[#503217] transition-colors duration-300 hover:translate-x-1 transform">
                    Shop
                  </a>
                  <a href="/about" className="font-poppins font-medium text-[16px] lg:text-[18px] leading-[150%] text-[#8F7D6A] hover:text-[#503217] transition-colors duration-300 hover:translate-x-1 transform">
                    About
                  </a>
                  <a href="/contact" className="font-poppins font-medium text-[16px] lg:text-[18px] leading-[150%] text-[#8F7D6A] hover:text-[#503217] transition-colors duration-300 hover:translate-x-1 transform">
                    Contact
                  </a>
                  <a href="/blog" className="font-poppins font-medium text-[16px] lg:text-[18px] leading-[150%] text-[#8F7D6A] hover:text-[#503217] transition-colors duration-300 hover:translate-x-1 transform">
                    Blog
                  </a>
                  <a href="/privacy" className="font-poppins font-medium text-[16px] lg:text-[18px] leading-[150%] text-[#8F7D6A] hover:text-[#503217] transition-colors duration-300 hover:translate-x-1 transform">
                    Privacy policy
                  </a>
                  <a href="/faqs" className="font-poppins font-medium text-[16px] lg:text-[18px] leading-[150%] text-[#8F7D6A] hover:text-[#503217] transition-colors duration-300 hover:translate-x-1 transform">
                    FAQs
                  </a>
                </nav>
              </div>
            </div>

            {/* Utility Section - Third Column */}
            <div className="lg:col-span-1 flex flex-col items-center sm:items-start order-2 lg:order-2">
              <div className="w-full">
                <h3 className="font-poppins font-medium text-[20px] lg:text-[24px] leading-[150%] text-[#503217] mb-6 lg:mb-8 text-center sm:text-left">
                  Utility
                </h3>
                <nav className="flex flex-col gap-3 lg:gap-4 items-center sm:items-start">
                  <a href="/style-guide" className="font-poppins font-medium text-[16px] lg:text-[18px] leading-[150%] text-[#8F7D6A] hover:text-[#503217] transition-colors duration-300 hover:translate-x-1 transform">
                    Style guide
                  </a>
                  <a href="/instruction" className="font-poppins font-medium text-[16px] lg:text-[18px] leading-[150%] text-[#8F7D6A] hover:text-[#503217] transition-colors duration-300 hover:translate-x-1 transform">
                    Instruction
                  </a>
                  <a href="/changelog" className="font-poppins font-medium text-[16px] lg:text-[18px] leading-[150%] text-[#8F7D6A] hover:text-[#503217] transition-colors duration-300 hover:translate-x-1 transform">
                    Changelog
                  </a>
                  <a href="/licenses" className="font-poppins font-medium text-[16px] lg:text-[18px] leading-[150%] text-[#8F7D6A] hover:text-[#503217] transition-colors duration-300 hover:translate-x-1 transform">
                    Licenses
                  </a>
                  <a href="/link-in-bio" className="font-poppins font-medium text-[16px] lg:text-[18px] leading-[150%] text-[#8F7D6A] hover:text-[#503217] transition-colors duration-300 hover:translate-x-1 transform">
                    Link in bio
                  </a>
                  <a href="/404" className="font-poppins font-medium text-[16px] lg:text-[18px] leading-[150%] text-[#8F7D6A] hover:text-[#503217] transition-colors duration-300 hover:translate-x-1 transform">
                    Error 404
                  </a>
                  <a href="/password-protected" className="font-poppins font-medium text-[16px] lg:text-[18px] leading-[150%] text-[#8F7D6A] hover:text-[#503217] transition-colors duration-300 hover:translate-x-1 transform">
                    Password protected
                  </a>
                </nav>
              </div>
            </div>

            {/* Brand Section - First Column */}
            <div className="lg:col-span-1 flex flex-col items-center sm:items-start order-3 lg:order-3">
              <div className="w-full max-w-[320px]">
                {/* Logo and Brand Name */}
                <div className="flex items-center justify-center sm:justify-start gap-4 mb-6">
                  {/* Logo */}
                  <div className="relative w-[184px] h-[84px] flex-shrink-0">
                    <img 
                      src={logo} 
                      alt="Medifit Logo" 
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        // Fallback SVG if image fails to load
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'block';
                      }}
                    />
                  
                  </div>
                 
                </div>
                
                {/* Brand Description */}
                <p className="font-sans-serif-collection font-normal text-[14px] sm:text-[16px] lg:text-[18px] leading-[150%] text-center sm:text-left text-[#8F7D6A] mb-6 lg:mb-8">
                  We provide the ultimate solution for your online store and all the healthcare needs.
                </p>
                
                {/* Social Media Icons - Eye-catching Design */}
                <div className="flex justify-center sm:justify-start gap-4 lg:gap-6">
                  {/* Facebook */}
                  <div className="group relative">
                    <div className="w-[40px] h-[40px] lg:w-[45px] lg:h-[45px] bg-gradient-to-br from-[#503217] to-[#6B4228] rounded-[8px] flex items-center justify-center hover:from-[#6B4228] hover:to-[#8F5C42] transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                      <FaFacebookF className="text-[#F2F2F2] text-lg lg:text-xl group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-[#503217] text-[#F2F2F2] text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                      Facebook
                    </div>
                  </div>
                  
                  {/* Instagram */}
                  <div className="group relative">
                    <div className="w-[40px] h-[40px] lg:w-[45px] lg:h-[45px] bg-gradient-to-br from-[#503217] to-[#6B4228] rounded-[8px] flex items-center justify-center hover:from-[#6B4228] hover:to-[#8F5C42] transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                      <FaInstagram className="text-[#F2F2F2] text-lg lg:text-xl group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-[#503217] text-[#F2F2F2] text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                      Instagram
                    </div>
                  </div>
                  
                  {/* Twitter */}
                  <div className="group relative">
                    <div className="w-[40px] h-[40px] lg:w-[45px] lg:h-[45px] bg-gradient-to-br from-[#503217] to-[#6B4228] rounded-[8px] flex items-center justify-center hover:from-[#6B4228] hover:to-[#8F5C42] transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                      <FaTwitter className="text-[#F2F2F2] text-lg lg:text-xl group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-[#503217] text-[#F2F2F2] text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                      Twitter
                    </div>
                  </div>
                  
                  {/* YouTube */}
                  <div className="group relative">
                    <div className="w-[40px] h-[40px] lg:w-[45px] lg:h-[45px] bg-gradient-to-br from-[#503217] to-[#6B4228] rounded-[5px] flex items-center justify-center hover:from-[#6B4228] hover:to-[#8F5C42] transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                      <FaYoutube className="text-[#F2F2F2] text-lg lg:text-xl group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-[#503217] text-[#F2F2F2] text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                      YouTube
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            
            
            
            
            {/* Contact & Address Section - Fourth Column - Fixed Visibility */}
            <div className="lg:col-span-1 flex flex-col items-center sm:items-start space-y-6 lg:space-y-8 order-4 lg:order-4">
              
              {/* Address - Made More Visible */}
              <div className="w-full">
                <h3 className="font-poppins font-medium text-[20px] lg:text-[24px] leading-[150%] text-[#503217] mb-4 lg:mb-6 text-center sm:text-left">
                  Address
                </h3>
                <div className="flex items-start gap-3 justify-center sm:justify-start">
                  {/* Location Icon */}
                  <div className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#503217]">
                    <HiLocationMarker className="w-full h-full" />
                  </div>
                  <p className="font-poppins font-medium text-[14px] lg:text-[16px] leading-[150%] text-[#8F7D6A] text-center sm:text-left max-w-[250px]">
                    1640 Parker Rd. Allentown, New Mexico 31134
                  </p>
                </div>
              </div>
              
              {/* Contact - Made More Visible */}
              <div className="w-full">
                <h3 className="font-poppins font-medium text-[20px] lg:text-[24px] leading-[150%] text-[#503217] mb-4 lg:mb-6 text-center sm:text-left">
                  Contact
                </h3>
                <div className="flex flex-col gap-4 lg:gap-5 items-center sm:items-start">
                  {/* Email */}
                  <div className="flex items-center gap-3">
                    {/* Email Icon */}
                    <div className="w-5 h-5 flex-shrink-0 text-[#503217]">
                      <HiMail className="w-full h-full" />
                    </div>
                    <a href="mailto:hello@gmail.com" className="font-poppins font-medium text-[14px] lg:text-[16px] leading-[150%] text-[#8F7D6A] hover:text-[#503217] transition-colors duration-300">
                      hello@gmail.com
                    </a>
                  </div>
                  
                  {/* Phone */}
                  <div className="flex items-center gap-3">
                    {/* Phone Icon */}
                    <div className="w-5 h-5 flex-shrink-0 text-[#503217]">
                      <HiPhone className="w-full h-full" />
                    </div>
                    <a href="tel:+12095550104" className="font-poppins font-medium text-[14px] lg:text-[16px] leading-[150%] text-[#8F7D6A] hover:text-[#503217] transition-colors duration-300">
                      (209) 555-0104
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom Section */}
          <div className="mt-12 lg:mt-16 pt-6 lg:pt-8 border-t border-[#E2DFCF]">
            <p className="font-poppins font-medium text-[14px] lg:text-[16px] leading-[150%] text-center text-[#503217]">
              Design By Fuchsius, Powered By Fuchsius
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;