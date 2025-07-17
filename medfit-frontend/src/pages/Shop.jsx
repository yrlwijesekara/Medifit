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
                  <button className="w-[158px] h-[48px] px-[20px] rounded-[10px] opacity-100 bg-[#503217] text-white hover:bg-[#3e2814] transition cursor-pointer">
                    Shop now
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
      <div class="bg-[#E2DFCF] py-6">
  <div class="max-w-screen-xl mx-auto px-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10lace-items-center">
    
  
    <div class="flex items-center gap-2">
      <img src="/Emblem.png" alt="Emblem logo" class="w-40px h-153px" />
      
    </div>

    
    <div class="flex items-center gap-2">
      <img src="/Grapho.png" alt="Grapho logo" class="w-40px h-153px" />
      
    </div>

    
    <div class="flex items-center gap-2">
      <img src="/Wayline.png" alt="Wayline logo" class="w-40px h-153px" />
   
    </div>

    
    <div class="flex items-center gap-2">
      <img src="/signet.png" alt="Signet logo" class="w-40px h-153px" />
     
    </div>

    
    <div class="flex items-center gap-2">
      <img src="/Prelude.png" alt="Prelude logo" class="w-40px h-153px" ></img>
      
    </div>

  
    <div class="flex items-center gap-2">
      <img src="signum.png" alt="Signum logo" class="w-40px h-153px" />
      
    </div>

  </div>
</div>

    </>
  );
};

export default Shop;
