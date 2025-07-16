import Navbar from '../components/Navbar';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-medifit-bg-secondary relative overflow-hidden">
      {/* Navigation Bar */}
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-[91px] min-h-screen flex items-center">
        {/* Background Medical Shapes */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Medical Shape 1 - Left Side */}
          <div className="absolute w-[388px] h-[374px] -left-[85px] top-[635px] opacity-15 transform rotate-[8.9deg]">
            <svg
              width="388"
              height="374"
              viewBox="0 0 388 374"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <g opacity="0.15">
                <path
                  d="M9.56 718.05L256.58 958.9L247.02 240.85L9.56 718.05Z"
                  fill="#000000"
                  transform="matrix(0.95, -0.31, 0.34, 0.94, 0, 0)"
                />
                <path
                  d="M17.97 768.99L284.61 975.77L266.64 206.78L17.97 768.99Z"
                  fill="#8F7D6A"
                />
                <circle
                  cx="250.2"
                  cy="844.53"
                  r="12"
                  fill="#8F7D6A"
                />
              </g>
            </svg>
          </div>
          
          {/* Medical Shape 3 - Left Side */}
          <div className="absolute w-[82px] h-[95px] left-[951px] top-[259px] opacity-15">
            <svg
              width="82"
              height="95"
              viewBox="0 0 82 95"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <g opacity="0.15">
                <rect x="22.6" y="11.7" width="59.3" height="83.3" fill="#8F7D6A" />
                <rect x="31.2" y="34.9" width="42.8" height="32.7" fill="#8F7D6A" />
                <rect x="0" y="0.1" width="42.2" height="86.1" fill="#8F7D6A" />
                <rect x="2.1" y="36.8" width="30.9" height="14.9" fill="#8F7D6A" />
              </g>
            </svg>
          </div>
          
          {/* Medical Shape 5 - Right Side */}
          <div className="absolute w-[162px] h-[153px] right-[311px] top-[156px] opacity-15">
            <svg
              width="162"
              height="153"
              viewBox="0 0 162 153"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <g opacity="0.15">
                <path
                  d="M0 0L132.7 91.6L29.2 60.1L0 0Z"
                  fill="#000000"
                  transform="matrix(0.81, 0.59, -0.59, 0.81, 0, 0)"
                />
                <rect x="33.9" y="14.8" width="47.2" height="67.5" fill="#8F7D6A" />
                <rect x="85.6" y="67.5" width="72.9" height="37.3" fill="#8F7D6A" />
                <circle cx="57.9" cy="111.5" r="6" fill="#8F7D6A" />
                <circle cx="50.2" cy="93.4" r="5.6" fill="#8F7D6A" />
                <circle cx="76.0" cy="104.9" r="5.3" fill="#8F7D6A" />
              </g>
            </svg>
          </div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-91px)]">
            {/* Left Content */}
            <div className="lg:pl-[231px] space-y-[60px]">
              <div className="space-y-5">
                {/* Main Heading */}
                <h1 className="text-[48px] lg:text-[80px] font-medium font-poppins text-medifit-primary leading-[110%] max-w-[541px]">
                  Your trusted care now and always
                </h1>
                
                {/* Subtext */}
                <p className="text-[18px] font-normal text-medifit-secondary leading-[150%] max-w-[415px]">
                  For the best results, align your health needs with your medication plan.
                </p>
              </div>
              
              {/* CTA Button */}
              <button className="flex items-center justify-center gap-[10px] px-5 py-5 bg-medifit-primary rounded-[10px] hover:bg-[#6B4228] transition-colors duration-200 w-[158px] h-[48px]">
                {/* Shopping Bag Icon */}
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"
                    stroke="#EEEDE7"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <line
                    x1="3"
                    y1="6"
                    x2="21"
                    y2="6"
                    stroke="#EEEDE7"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="m16 10a4 4 0 0 1-8 0"
                    stroke="#EEEDE7"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-[18px] font-normal text-medifit-white leading-[150%]">
                  Shop now
                </span>
              </button>
            </div>
            
            {/* Right Content - Product Images */}
            <div className="relative lg:pl-[95px]">
              {/* Background Circle */}
              <div className="absolute w-[595px] h-[595px] bg-medifit-bg-primary rounded-full top-[49px] left-[42px] -z-10"></div>
              
              {/* Product Images Container */}
              <div className="relative w-[667px] h-[716px]">
                {/* Main Product Image - Center */}
                <div className="absolute w-[612px] h-[556px] left-[29px] top-[160px]">
                  <div className="w-full h-full bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl flex items-center justify-center shadow-lg">
                    <div className="text-center text-medifit-primary">
                      <div className="w-24 h-32 bg-amber-700 rounded-lg mx-auto mb-4 shadow-md"></div>
                      <p className="text-sm font-medium">Main Product Bottle</p>
                    </div>
                  </div>
                </div>
                
                {/* Product Image - Left */}
                <div className="absolute w-[221px] h-[357px] left-0 top-[297px]">
                  <div className="w-full h-full bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl flex items-center justify-center shadow-md">
                    <div className="text-center text-medifit-primary">
                      <div className="w-16 h-24 bg-amber-600 rounded-md mx-auto mb-2 shadow-sm"></div>
                      <p className="text-xs font-medium">Supplement Bottle</p>
                    </div>
                  </div>
                </div>
                
                {/* Product Image - Right */}
                <div className="absolute w-[199px] h-[343px] right-[69px] top-[307px]">
                  <div className="w-full h-full bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl flex items-center justify-center shadow-md">
                    <div className="text-center text-medifit-primary">
                      <div className="w-16 h-24 bg-yellow-600 rounded-md mx-auto mb-2 shadow-sm"></div>
                      <p className="text-xs font-medium">Vitamin Jar</p>
                    </div>
                  </div>
                </div>
                
                {/* Floating Medical Icon */}
                <div className="absolute w-[49px] h-[49px] left-[308px] top-[479px] opacity-50 transform -rotate-[23deg]">
                  <svg
                    width="49"
                    height="49"
                    viewBox="0 0 49 49"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full"
                  >
                    <g opacity="0.5">
                      <rect x="2" y="2" width="45" height="45" rx="6" fill="#8F7D6A" />
                      <path
                        d="M24.5 14V35M15 24.5H34"
                        stroke="white"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                    </g>
                  </svg>
                </div>
                
                {/* Brand Name on Product */}
                <div className="absolute left-[253px] top-[418px] z-10">
                  <h3 className="text-[48px] font-medium font-poppins text-medifit-primary leading-[120%]">
                    Medifit
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
