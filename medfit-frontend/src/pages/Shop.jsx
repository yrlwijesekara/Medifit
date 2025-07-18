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
              <h1 className="text-[68px] leading-[1.2] font-medium tracking-normal text-[#503217] font-poppins">  
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
    </>
  );
};

export default Shop;
