import Navbar from "../components/Navbar";

const Shop = () => {
  return (
    <>
      {/* Navigation Bar */}
      <Navbar />

      {/* Hero Section */}

      <div className="w-full bg-[#E8E6DE] flex flex-col items-center justify-center pt-[111px]">
        <div className="container w-full bg-#E8E6DE">
          <div className="md:bg-#E8E6DE  lg:bg-#E8E6DEbg-#E8E6DE xl:bg-#E8E6DE grid lg:grid-cols-2 grid-cols-1">
            <div className=" bg-#E8E6DE">
              <h1 className="text-[68px] mt-8 mb-6 leading-[1.2] font-medium tracking-normal text-[#503217] font-poppins ">
                From wellness to care all in one place
              </h1>
              <div className=" bg-#E8E6DE w-full grid grid-cols-2 gap-4">
                <div className="bg-blue-400 w-full ">
                  <img
                    src="/Wellness.jpg"
                    alt=""
                    className="w-full h-[300px] object-cover"
                  />
                </div>
                <div className="bg-#E8E6DE w-full relative">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p>
                      Your health is in good hands with Medifit. We’re here to
                      provide you with a wide range of healthcare essentials,
                      carefully selected.
                    </p>
                    <button className="flex items-center gap-2 w-[119px] h-[48px] px-[20px] rounded-[10px] opacity-100 bg-[#503217] text-white hover:bg-[#3e2814] transition cursor-pointer">
                      {/* Bag Icon */}
                      <svg
                        className="w-5 h-5 flex-none"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M6 2l1.5 4h9L18 2" />
                        <path d="M3 6h18l-1.5 14h-15L3 6z" />
                        <path d="M16 10a4 4 0 01-8 0" />
                      </svg>

                      {/* Button Text */}
                      <span>Shop now</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-full bg-gray-400">
              <img
                src="/doctor-medicine-bottle.jpg"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#E2DFCF] py-8 ">
        <div className=" mx-auto px-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-16 place-items-center ">
          {/* Emblem Logo */}
          <div className="flex items-center justify-center">
            <img
              src="/Emblem.png"
              alt="Emblem logo"
              className="w-[120px] h-[40px] object-contain"
            />
          </div>

          {/* Grapho Logo */}
          <div className="flex items-center justify-center">
            <img
              src="/Grapho.png"
              alt="Grapho logo"
              className="w-[120px] h-[40px] object-contain"
            />
          </div>

          {/* Wayline Logo */}
          <div className="flex items-center justify-center">
            <img
              src="/Wayline.png"
              alt="Wayline logo"
              className="w-[120px] h-[40px] object-contain"
            />
          </div>

          {/* Signet Logo */}
          <div className="flex items-center justify-center">
            <img
              src="/signet.png"
              alt="Signet logo"
              className="w-[120px] h-[40px] object-contain"
            />
          </div>

          {/* Prelude Logo */}
          <div className="flex items-center justify-center">
            <img
              src="/Prelude.png"
              alt="Prelude logo"
              className="w-[120px] h-[40px] object-contain"
            />
          </div>

          {/* Signum Logo */}
          <div className="flex items-center justify-center">
            <img
              src="/signum.png"
              alt="Signum logo"
              className="w-[120px] h-[40px] object-contain"
            />
          </div>
        </div>
      </div>
      {/* Story session */}
      <div className=" w-full  bg-[#E8E6DE] flex flex-col items-center justify-center ">
        <div className="container w-full bg-#E8E6DE mt-10">
          <div className="md:bg-#E8E6DE  lg:bg-#E8E6DE bg-#E8E6DE xl:bg-#E8E6DE grid lg:grid-cols-3 grid-cols-1 gap-10">
            <div className=" #E8E6DE col-span-2">
              <h1 className="text-[50px] leading-[1.2] font-medium tracking-normal text-[#503217] font-poppins">
                Bringing trusted health solutions to your doorstep focused on
                quality care & reliability
                <h2 class="text-[18px] leading-[1.5] font-normal tracking-normal font-sans text-[#503217]">
                  Our store offers a comprehensive range of pharmaceuticals,
                  health and wellness products, and medical supplies to meet the
                  diverse needs of our community.
                </h2>
              </h1>
            </div>

            <div className=" bg-[#E8E6DE] ">
              <div className="bg-blue-400 w-full  ">
                <img
                  src="/female-holding-pill.jpg "
                  alt=""
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className=" w-full  bg-[#E8E6DE] flex flex-col items-center justify-center">
        <div className="container w-full bg-[#E8E6DE]">
          <div className="md:bg-green-400  lg:bg-blue-400 bg-yellow-400 xl:bg-pink-400 grid lg:grid-cols-2 grid-cols-1 mb-10"></div>
          <div class="w-full bg-[#E8E6DE] py-10 px-4">
            <div class="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div class="flex flex-col items-center">
                <img
                  src="thoughfull mode.png"
                  alt="Thoughtfully Made"
                  class="w-16 h-16 mb-4"
                />
                <p class="text-[#503217] font-semibold text-lg">
                  Thoughtfully Made
                </p>
              </div>

              <div class="flex flex-col items-center">
                <img
                  src="Non-toxtic.png"
                  alt="Non-Toxic Formula"
                  class="w-16 h-16 mb-4"
                />
                <p class="text-[#503217] font-semibold text-lg">
                  Non-Toxic Formula
                </p>
              </div>

              <div class="flex flex-col items-center">
                <img
                  src="Organic.png"
                  alt="Organic Essentials"
                  class="w-16 h-16 mb-4"
                />
                <p class="text-[#503217] font-semibold text-lg">
                  Organic Essentials
                </p>
              </div>

              <div class="flex flex-col items-center">
                <img
                  src="/Safe for everyone.png"
                  alt="Safe for Everyone"
                  class="w-16 h-16 mb-4"
                />
                <p class="text-[#503217] font-semibold text-lg">
                  Safe for Everyone
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*Discover session */}
      <div className=" w-full  bg-[#E8E6DE] flex flex-col items-center justify-center">
        <div className="container w-full">
          <div className="md:bg-green-400  lg:bg-blue-400 bg-yellow-400 xl:bg-pink-400 grid lg:grid-cols-2 grid-cols-1"></div>
          <div class="grid grid-flow-col justify-items-center ...">
            <div className=" text-white px-4 py-16">
              <div className="w-full mx-auto grid  items-start">
                {/* Product Cards */}
                <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Left Content */}
                  <div className="lg:col-span-1 flex flex-col gap-6">
                    <h2 className="text-3xl sm:text-4xl font-semibold text-[#503217] leading-snug ">
                      Discover our
                      <br />
                      collection
                    </h2>
                    <p className="text-[#8F7D6A] text-base leading-relaxed">
                      Our medical store offers trusted products, easy
                      navigation, and fast shipping
                    </p>
                    <button className="bg-[#503217] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#3e2814] transition bg-[#3e2814] transition cursor-pointer">
                      View all products &nbsp; →
                    </button>
                  </div>
                  {/* Product 1 - Hair tablets */}
                  <div className="bg-[#F3F1EA] rounded-xl p-4 flex flex-col gap-3">
                    <img
                      src="/Bottle.png"
                      alt="Hair tablets"
                      className="w-full h-[200px] object-contain"
                    />
                    <button className="bg-[#EAE7D6] text-[#503217] text-sm px-4 py-2 rounded-full flex items-center justify-center gap-2 font-medium  transition bg-[#3e2814] transition cursor-pointer">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 
            7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 
            1.1.9 2 2 2h12v-2H7.42c-.14 
            0-.25-.11-.25-.25l.03-.12L8.1 
            13h7.45c.75 0 1.41-.41 
            1.75-1.03L21.7 4H5.21l-.94-2H1zm16 
            16c-1.1 0-2 .9-2 2s.9 2 2 2 
            2-.9 2-2-.9-2-2-2z"
                        />
                      </svg>
                      Shop now
                    </button>
                    <h4 className="text-[#503217] font-semibold">
                      Hair tablets
                    </h4>
                    <div className="text-sm text-[#503217] font-medium">
                      <span>$19.00 USD</span>{" "}
                      <span className="line-through ml-2 text-[#C4B89D]">
                        $25.00 USD
                      </span>
                    </div>
                  </div>

                  {/* Product 2 - Pressure Measuring */}
                  <div className="bg-[#F3F1EA] rounded-xl p-4 flex flex-col gap-3">
                    <img
                      src="/Pressure.png"
                      alt="Pressure measuring"
                      className="w-full h-[200px] object-contain"
                    />
                    <h4 className="text-[#503217] font-semibold">
                      Pressure measuring
                    </h4>
                    <div className="text-sm text-[#503217] font-medium">
                      $25.00 USD
                    </div>
                  </div>

                  {/* Product 3 - Diving mask */}
                  <div className="bg-[#F3F1EA] rounded-xl p-4 flex flex-col gap-3">
                    <img
                      src="/Mask.png"
                      alt="Diving mask"
                      className="w-full h-[200px] object-contain"
                    />
                    <h4 className="text-[#503217] font-semibold">
                      Diving mask
                    </h4>
                    <div className="text-sm text-[#503217] font-medium">
                      $40.00 USD
                    </div>
                  </div>

                  {/* Product 4 - Temperature gun */}
                  <div className="bg-[#F3F1EA] rounded-xl p-4 flex flex-col gap-3">
                    <img
                      src="/Temperature.png"
                      alt="Temperature gun"
                      className="w-full h-[200px] object-contain"
                    />
                    <h4 className="text-[#503217] font-semibold">
                      Temperature gun
                    </h4>
                    <div className="text-sm text-[#503217] font-medium">
                      <span>$20.00 USD</span>{" "}
                      <span className="line-through ml-2 text-[#C4B89D]">
                        $25.00 USD
                      </span>
                    </div>
                  </div>

                  {/* Product 5 - Nebulizer mask */}
                  <div className="bg-[#F3F1EA] rounded-xl p-4 flex flex-col gap-3">
                    <img
                      src="/Nebulizer.png"
                      alt="Nebulizer mask"
                      className="w-full h-[200px] object-contain"
                    />
                    <h4 className="text-[#503217] font-semibold">
                      Nebulizer mask
                    </h4>
                    <div className="text-sm text-[#503217] font-medium">
                      $15.00 USD
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

  
      {/* Shop session */}
      <div className="w-full bg-[#E2DFCF] flex flex-col items-center justify-center">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full py-12">
            {/* Section Title */}
            <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#503217] mb-8">
              Shop by category
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-6 justify-items-center mb-12 lg:mb-16">
              
              {/* Health Care Card */}
              <div className="bg-white rounded-xl shadow-sm w-full max-w-[140px] sm:max-w-[160px] h-[140px] sm:h-[160px] flex flex-col items-center justify-center relative">
                {/* Heart Icon */}
                <div className="absolute top-2 right-2 sm:top-3 sm:right-3">
                  <i className="bi bi-heart text-[#503217] text-sm sm:text-lg hover:text-red-500 cursor-pointer transition-colors"></i>
                </div>
                <div className="flex items-center gap-1 sm:gap-2 mb-2">
                  <img
                    src="/Heart.png"
                    alt="Heart"
                    className="w-[55px] h-[70px] sm:w-[40px] sm:h-[40px]"
                  />
                  <img
                    src="/Yellow.png"
                    alt="Health Care Bottle"
                    className="w-[55px] h-[70px] sm:w-[65px] sm:h-[80px]"
                  />
                </div>
                
              </div>

              {/* Beauty Care Card */}
              <div className="bg-white rounded-xl shadow-sm w-full max-w-[140px] sm:max-w-[160px] h-[140px] sm:h-[160px] flex flex-col items-center justify-center relative">
                {/* Heart Icon */}
                <div className="absolute top-2 right-2 sm:top-3 sm:right-3">
                  <i className="bi bi-heart text-[#503217] text-sm sm:text-lg hover:text-red-500 cursor-pointer transition-colors"></i>
                </div>
                <div className="flex items-center gap-1 sm:gap-2 mb-2">
                  <img
                    src="/Beauty Care.png"
                    alt="Beauty Care"
                    className="w-[55px] h-[70px] sm:w-[40px] sm:h-[40px]"
                  />
                  <img
                    src="/Yellow.png"
                    alt="Beauty Care Bottle"
                    className="w-[55px] h-[70px] sm:w-[65px] sm:h-[80px]"
                  />
                </div>
               
              </div>

              {/* Fitness Card */}
              <div className="bg-white rounded-xl shadow-sm w-full max-w-[140px] sm:max-w-[160px] h-[140px] sm:h-[160px] flex flex-col items-center justify-center relative">
                {/* Heart Icon */}
                <div className="absolute top-2 right-2 sm:top-3 sm:right-3">
                  <i className="bi bi-heart text-[#503217] text-sm sm:text-lg hover:text-red-500 cursor-pointer transition-colors"></i>
                </div>
                <div className="flex items-center gap-1 sm:gap-2 mb-2">
                  <img
                    src="/Fitness.png"
                    alt="Fitness"
                    className="w-[55px] h-[70px] sm:w-[40px] sm:h-[40px]"
                  />
                  <img
                    src="/Orange.png"
                    alt="Fitness Bottle"
                    className="w-[55px] h-[70px] sm:w-[65px] sm:h-[80px]"
                  />
                </div>
                
              </div>

              {/* Medicine Card */}
              <div className="bg-white rounded-xl shadow-sm w-full max-w-[140px] sm:max-w-[160px] h-[140px] sm:h-[160px] flex flex-col items-center justify-center relative">
                {/* Heart Icon */}
                <div className="absolute top-2 right-2 sm:top-3 sm:right-3">
                  <i className="bi bi-heart text-[#503217] text-sm sm:text-lg hover:text-red-500 cursor-pointer transition-colors"></i>
                </div>
                <div className="flex items-center gap-1 sm:gap-2 mb-2">
                  <img
                    src="/Medicine.png"
                    alt="Medicine"
                    className="w-[55px] h-[70px] sm:w-[40px] sm:h-[40px]"
                  />
                  <img
                    src="/Blue.png"
                    alt="Medicine Bottle"
                    className="w-[55px] h-[70px] sm:w-[65px] sm:h-[80px]"
                  />
                </div>
                
              </div>
            </div>

            {/* Promo Section - Responsive Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              
              {/* Image Section */}
              <div className="relative w-full flex items-center justify-center order-2 lg:order-1">
                {/* Woman with pill image */}
                <div className="w-4/5 max-w-[400px]">
                  <img
                    src="/woman.jpg"
                    alt="Woman with pills"
                    className="w-full h-[250px] sm:h-[300px] lg:h-[350px] rounded-lg object-cover"
                  />
                </div>
                {/* Medifit bottle image */}
                <div className="absolute right-0 h-3/4 max-w-[120px] sm:max-w-[150px]">
                  <img
                    src="/medifit.png"
                    alt="Medifit bottle"
                    className="w-full h-full rounded-lg object-contain"
                  />
                </div>
              </div>

              {/* Text and button */}
              <div className="w-full text-center lg:text-left flex flex-col justify-center order-1 lg:order-2 px-4 lg:px-0">
                <h3 className="text-[#503217] text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold leading-snug mb-4 lg:mb-6">
                  Save up to 10% on select tablets
                  <br className="hidden sm:block" />
                  limited time only!
                </h3>
                <p className="text-[#503217] text-sm sm:text-base lg:text-lg mb-6 lg:mb-8 leading-relaxed">
                  Don't miss out on our limited-time sale! 10% discount
                  <br className="hidden sm:block" /> 
                  on a wide range of essential health products.
                </p>
                <div className="flex justify-center lg:justify-start">
                  <button className="bg-[#503217] text-white px-6 py-3 lg:px-8 lg:py-4 rounded-full font-medium hover:bg-[#3e2814] transition-colors duration-300 text-sm sm:text-base">
                    View sale products
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" w-full  bg-[#E8E6DE] flex flex-col items-center justify-center">
        <div className="container w-full bg-[#E8E6DE]">
          <div className="md:bg-green-400  lg:bg-blue-400 bg-yellow-400 xl:bg-pink-400 grid lg:grid-cols-2 grid-cols-1"></div>
          <div class="grid grid-flow-col justify-items-center ...">
            <div className="bg-[#E8E6DE] w-full px-4 py-12"></div>
            <section className="px-4 py-20 md:px-20 bg-[#E8E6DE] text-white text-center ">
              <h2 className="text-4xl font-bold text-[#4A2E15] mb-14 ">
                Customers review
              </h2>

              <div className="grid md:grid-cols-3 gap-8 ">
                {/* Review Card */}
                <div className="bg-[#F3F0EB] text-[#5F4632] p-6 rounded-2xl text-left ">
                  <p className="text-xl ">
                    💬 B12 Medicine keeps me energized and focused all day. A
                    true lifesaver for vitality and wellness!
                  </p>
                  <div className="flex items-center mt-6">
                    <img
                      src="/Olivia.png"
                      className="w-12 h-12 rounded-full mr-3"
                    />
                    <p className="font-semibold text-[#4A2E15]">
                      Olivia Garcia
                    </p>
                  </div>
                </div>

                {/* Review Card */}
                <div className="bg-[#F3F0EB] text-[#5F4632] p-6 rounded-2xl text-left">
                  <p className="text-xl mb-4">
                    💬 I’ve regained my energy and feel amazing thanks to B12
                    Medicine. Highly recommend for health and stamina!
                  </p>
                  <div className="flex items-center mt-6">
                    <img
                      src="/Sophia Brown.png"
                      className="w-12 h-12 rounded-full mr-3"
                    />
                    <p className="font-semibold text-[#4A2E15]">Sophia Brown</p>
                  </div>
                </div>

                {/* Review Card */}
                <div className="bg-[#F3F0EB] text-[#5F4632] p-6 rounded-2xl text-left">
                  <p className="text-xl mb-4">
                    💬 As a vegetarian, B12 Medicine keeps my energy up and my
                    health on track. Perfect for natural support!
                  </p>
                  <div className="flex items-center mt-6">
                    <img
                      src="/Ethan.png"
                      className="w-12 h-12 rounded-full mr-3"
                    />
                    <p className="font-semibold text-[#4A2E15]">Ethan Harris</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      <div className=" w-full  bg-[#E8E6DE] flex flex-col items-center justify-center relative">
        <div className="container w-full bg-[#E8E6DE]">
          <div className="md:bg-green-400  lg:bg-blue-400 bg-yellow-400 xl:bg-pink-400 grid lg:grid-cols-2 grid-cols-1"></div>
          <div class="grid grid-flow-col justify-items-center ..."></div>
            {/* Header */}
            <div className="flex flex-col items-center mb-12 ">
              {/* Icon */}
              <div className="mb-4 absolute left-0 top-[-20px]">
                <img src="/Health tablets.png" alt="Icon" className="h-30" />{" "}
              </div>
              {/* Title */}
              <h2 className="text-3xl md:text-5xl font-bold text-[#503217]">
                Healthcare Insights
              </h2>
            </div>

            {/* Card Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Card 1 */}
              <div className="bg-white rounded-xl overflow-hidden text-black">
                <img
                  src="/omega.jpg" // Replace with actual image
                  alt="Living well"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <p className="text-gray-500 flex items-center gap-2 mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3M16 7V3M4 11h16M5 19h14a2 2 0 002-2V7H3v10a2 2 0 002 2z"
                      />
                    </svg>
                    October 25, 2024
                  </p>
                  <h3 className="text-lg font-semibold text-[#503217] mb-4">
                    Living well with <br /> chronic conditions
                  </h3>
                  <a
                    href="#"
                    className="text-[#503217] font-medium hover:underline"
                  >
                    Read more &gt;
                  </a>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-xl overflow-hidden text-black">
                <img
                  src="/supplements.jpg"
                  alt="Fitness essentials"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <p className="text-gray-500 flex items-center gap-2 mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3M16 7V3M4 11h16M5 19h14a2 2 0 002-2V7H3v10a2 2 0 002 2z"
                      />
                    </svg>
                    October 25, 2024
                  </p>
                  <h3 className="text-lg font-semibold text-[#503217] mb-4">
                    Strength home-Based <br /> fitness essential
                  </h3>
                  <a
                    href="#"
                    className="text-[#503217] font-medium hover:underline"
                  >
                    Read more &gt;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      
    </>
  );
};

export default Shop;
