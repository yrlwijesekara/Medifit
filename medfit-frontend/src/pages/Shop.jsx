import Navbar from "../components/Navbar";

const Shop = () => {
  return (
    <>
      {/* Navigation Bar */}
      <Navbar />

      {/* Hero Section */}

      <div className=" w-full  bg-[#E2DFCF] flex flex-col items-center justify-center">
        <div className="container w-full bg-red-500">
          <div className="md:bg-green-400  lg:bg-blue-400 bg-yellow-400 xl:bg-pink-400 grid lg:grid-cols-2 grid-cols-1">
            <div className=" bg-red-400">
              <h1 className="text-[68px] leading-[1.2] font-medium tracking-normal text-[#503217] font-poppins">
                From wellness to care all in one place
              </h1>

              <div className=" bg-yellow-400 w-full grid grid-cols-2 gap-4">
                <div className="bg-white p-4 col-span-2 border-b"></div>
                <div className="bg-blue-400 w-full ">
                  <img
                    src="/Wellness.jpg"
                    alt=""
                    className="w-full h-[300px] object-cover"
                  />
                </div>
                <div className="bg-green-400 w-full ">
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
      <div className="bg-[#E2DFCF] py-8">
        <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-16 place-items-center">
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
      <div className=" w-full  bg-[#E2DFCF] flex flex-col items-center justify-center">
        <div className="container w-full bg-red-500">
          <div className="md:bg-green-400  lg:bg-blue-400 bg-yellow-400 xl:bg-pink-400 grid lg:grid-cols-2 grid-cols-1">
            <div className=" bg-red-400">
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

            <div className=" bg-yellow-400 w-full grid grid-cols-2 gap-4">
              <div className="bg-white p-5 col-span-5 border-b"></div>
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
      <div className=" w-full  bg-[#E2DFCF] flex flex-col items-center justify-center">
        <div className="container w-full bg-[#E2DFCF]">
          <div className="md:bg-green-400  lg:bg-blue-400 bg-yellow-400 xl:bg-pink-400 grid lg:grid-cols-2 grid-cols-1"></div>
          <div class="w-full bg-[#E2DFCF] py-10 px-4">
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
      <div className=" w-full  bg-[#E2DFCF] flex flex-col items-center justify-center">
        <div className="container w-full bg-[#E2DFCF]s">
          <div className="md:bg-green-400  lg:bg-blue-400 bg-yellow-400 xl:bg-pink-400 grid lg:grid-cols-2 grid-cols-1"></div>
          <div class="grid grid-flow-col justify-items-center ...">
            <div className="bg-[#E2DFCF]  text-white px-4 py-16">
              <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-10 items-start">
                {/* Left Content */}
                <div className="lg:col-span-1 flex flex-col gap-6">
                  <h2 className="text-3xl sm:text-4xl font-semibold text-#503217 leading-snug">
                    Discover our
                    <br />
                    collection
                  </h2>
                  <p className="text-#8F7D6A text-base leading-relaxed">
                    Our medical store offers trusted products, easy navigation,
                    and fast shipping
                  </p>
                  <button className="bg-[#503217] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#3e2814] transition bg-[#3e2814] transition cursor-pointer">
                    View all products &nbsp; →
                  </button>
                </div>

                {/* Product Cards */}
                <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

      <div class="flex gap-4">
        <div class="w-32 h-32 bg-#E8E6DE"></div>
        <div class="w-32 h-32 bg-#E8E6DE"></div>
      </div>

      {/* Shop session */}
      <div className=" w-full  bg-[#E2DFCF] flex flex-col items-center justify-center">
        <div className="container w-full bg-#E8E6DE">
          <div className="md:bg-green-400  lg:bg-blue-400 bg-yellow-400 xl:bg-pink-400 grid lg:grid-cols-2 grid-cols-1"></div>
          <div class="grid grid-flow-col justify-items-center ...">
            <div className="bg-[#F3F1EA] w-full px-4 py-12">
              {/* Section Title */}
              <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-semibold text-[#503217] mb-10">
                Shop by category
              </h2>

              {/* Category Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 justify-items-center mb-16">
                {/* Repeat this card for each category */}
                <div className="bg-white rounded-xl shadow-sm w-full max-w-[140px] h-[160px] flex flex-col items-center justify-center">
                  <img
                    src="/Yellow-Bottle.png"
                    alt="Health care"
                    className="w-[50px] h-[70px] mb-2"
                  />
                  <p className="text-sm font-medium text-[#503217]">
                    Health care
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow-sm w-full max-w-[140px] h-[160px] flex flex-col items-center justify-center">
                  <img
                    src="/green-bottle.png"
                    alt="Beauty care"
                    className="w-[50px] h-[70px] mb-2"
                  />
                  <p className="text-sm font-medium text-[#503217]">
                    Beauty care
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow-sm w-full max-w-[140px] h-[160px] flex flex-col items-center justify-center">
                  <img
                    src="/orange-bottle.png"
                    alt="Fitness"
                    className="w-[50px] h-[70px] mb-2"
                  />
                  <p className="text-sm font-medium text-[#503217]">Fitness</p>
                </div>

                <div className="bg-white rounded-xl shadow-sm w-full max-w-[140px] h-[160px] flex flex-col items-center justify-center">
                  <img
                    src="/blue-bottle.png"
                    alt="Other"
                    className="w-[50px] h-[70px] mb-2"
                  />
                  <p className="text-sm font-medium text-[#503217]">Medicine</p>
                </div>
              </div>

              {/* Promo Section */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                {/* Woman with pill image */}
                <div className="w-full">
                  <img
                    src="/woman.jpg"
                    alt="Woman with pills"
                    className="w-full rounded-lg object-cover"
                  />
                </div>

                {/* Medifit bottle image */}
                <div className="w-full">
                  <img
                    src="/medifit.png"
                    alt="Medifit bottle"
                    className="w-full rounded-lg object-contain"
                  />
                </div>

                {/* Text and button */}
                <div className="w-full text-center md:text-left">
                  <h3 className="text-[#503217] text-2xl sm:text-3xl font-semibold leading-snug mb-4">
                    Save up to 10% on select tablets
                    <br />
                    limited time only!
                  </h3>
                  <p className="text-[#503217] text-sm sm:text-base mb-6">
                    Don’t miss out on our limited-time sale! 10% discount
                    <br className="hidden sm:block" /> on a wide range of
                    essential health products.
                  </p>
                  <button className="bg-[#503217] text-white px-6 py-3 rounded-full font-medium hover:bg-[#3e2814]transition bg-[#3e2814] transition cursor-pointer">
                    View sale products
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full  bg-[#E2DFCF] flex flex-col items-center justify-center">
        <div className="container w-full bg-#E8E6DE">
          <div className="md:bg-green-400  lg:bg-blue-400 bg-yellow-400 xl:bg-pink-400 grid lg:grid-cols-2 grid-cols-1"></div>
          <div class="grid grid-flow-col justify-items-center ...">
            <div className="bg-[#E2DFCF] w-full px-4 py-12"></div>
            <section className="px-4 py-20 md:px-20 bg-[#E2DFCF] text-white text-center">
              <h2 className="text-4xl font-bold text-[#4A2E15] mb-14">
                Customers review
              </h2>

              <div className="grid md:grid-cols-3 gap-8">
                {/* Review Card */}
                <div className="bg-[#F3F0EB] text-[#5F4632] p-6 rounded-2xl text-left">
                  <p className="text-xl mb-4">
                    💬 B12 Medicine keeps me energized and focused all day. A
                    true lifesaver for vitality and wellness!
                  </p>
                  <div className="flex items-center mt-6">
                    <img
                      src="/avatar1.jpg"
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
                      src="/avatar2.jpg"
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
                      src="/avatar3.jpg"
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
    </>
  );
};

export default Shop;
