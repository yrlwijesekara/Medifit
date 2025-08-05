import Navbar from "../components/Navbar";

const Contact = () => {
  return (
    <>
      {/* Navigation Bar */}
      <Navbar />

      {/* Contact Page Content */}
      <div className="w-full min-h-screen bg-[#E8E6DE] pt-[111px] pb-20 px-4">
        <div className="w-full max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-[#503217] text-[48px] sm:text-[60px] md:text-[70px] leading-[1.2] font-medium font-['Poppins'] mb-8">
              Contact Us
              <img src="/phone.png" alt="phone icon" className="ml-3 w-12 h-12 sm:w-15 sm:h-15 md:w-17 md:h-17 inline-block" />
            </h1>
            <p className="text-[#503217] text-[18px] sm:text-[20px] leading-[1.5] font-normal">
              Have questions or need support? Get in touch with our team
              <br/> – we're
              here to help!
            </p>
          </div>

          {/* Contact Form Section */}
          <div className="bg-[#E8E6DE] text-[#4b2f17] p-6 rounded-lg max-w-4xl mx-auto space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-1 font-medium" htmlFor="full-name">
                  Full name
                </label>
                <input
                  id="full-name"
                  type="text"
                  placeholder=""
                  className="w-full p-3 rounded-md bg-[#eee9df] border border-[#4b2f17] outline-none"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium" htmlFor="email">
                  Email address
                </label>
                <div className="relative">
                  <input
                    id="email"
                    type="email"
                    placeholder=""
                    className="w-full p-3 pl-10 rounded-md bg-[#eee9df] border border-[#4b2f17] outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="block mb-1 font-medium" htmlFor="phone">
                  Phone number
                </label>
                <input
                  id="phone"
                  type="text"
                  placeholder=""
                  className="w-full p-3 rounded-md bg-[#eee9df] border border-[#4b2f17] outline-none"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium" htmlFor="schedule">
                  Schedule to receive call
                </label>
                <div className="relative">
                  <input
                    id="schedule"
                    type="text"
                    placeholder=""
                    className="w-full p-3 pl-10 rounded-md bg-[#eee9df] border border-[#4b2f17] outline-none"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block mb-1 font-medium" htmlFor="message">
                Message
              </label>
              <div className="relative">
                <textarea
                  id="message"
                  rows="6"
                  placeholder=""
                  className="w-full p-3 pl-10 rounded-md bg-[#eee9df] border border-[#4b2f17] outline-none"
                ></textarea>
                
              </div>
            </div>

            <button className="bg-[#4b2f17] text-white px-6 py-2 rounded-md flex items-center gap-2 hover:bg-[#3a2411]  cursor-pointer">
              Submit 
            </button>
          </div>
        </div>
      </div>

        {/* FAQ Section */}

      <div className=" w-full  bg-[#E8E6DE] flex flex-col items-center justify-center relative">
        <div className="container w-full bg-[#E8E6DE]">
          <div className="md:bg-green-400  lg:bg-blue-400 bg-yellow-400 xl:bg-pink-400 grid lg:grid-cols-2 grid-cols-1"></div>
          <div class="grid grid-flow-col justify-items-center ..."></div>
           {/* Header */}
          <div className="flex flex-col items-center mb-12 ">
            {/* Icon */}
            <div className="mb-4 absolute left-0 top-[-20px]">
              <img src="/medicine-pills-icon.png" alt="Icon" className="h-30" />
            </div>
          </div>
          <div class="bg-[#E8E6DE] text-[#4b2f17] p-8 max-w-6xl mx-auto">
            <div class="flex flex-col md:flex-row gap-10 items-start">
              <div class="md:w-1/2">
                <h2 class="text-4xl font-bold leading-tight text-[48px] ">
                  Frequently Asked
                  <br />
                  Questions
                   <img src="/question-circle.png" alt="Question icon" className="ml-3 w-8 h-8 inline-block" />
                </h2>
              </div>

              <div class="md:w-1/2 space-y-4 w-full">
                <div class="bg-[#eee9df] rounded-md border border-[#4b2f17] p-5">
                  <div class="flex items-start gap-3">
                    <span class="text-2xl">✖</span>
                    <div>
                      <h3 class="font-semibold text-lg mb-2">
                        What products do you offer?
                      </h3>
                      <p class="text-[#7a6c5a] text-sm">
                        We offer a wide range of medical supplies, including
                        prescription medications, over-the-counter products,
                        supplements, and personal care items .
                      </p>
                    </div>
                  </div>
                </div>

                <div class="bg-[#eee9df] rounded-md border border-[#4b2f17] p-5 cursor-pointer">
                  <div class="flex items-center gap-3">
                    <span class="text-2xl">➕</span>
                    <h3 class="font-semibold text-lg">
                      How can I place an order?
                    </h3>
                  </div>
                </div>
                <div class="bg-[#eee9df] rounded-md border border-[#4b2f17] p-5 cursor-pointer">
                  <div class="flex items-center gap-3">
                    <span class="text-2xl">➕</span>
                    <h3 class="font-semibold text-lg">
                      Do you provide home delivery?
                    </h3>
                  </div>
                </div>

                <div class="bg-[#eee9df] rounded-md border border-[#4b2f17] p-5 cursor-pointer">
                  <div class="flex items-center gap-3">
                    <span class="text-2xl">➕</span>
                    <h3 class="font-semibold text-lg">
                      Can I return or exchange products?
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" w-full  bg-[#E8E6DE] flex flex-col items-center justify-center relative">
         {/* Icon positioned at top-right corner */}
        <div className="absolute top-4 right-4 z-10">
          <img src="/medical shape 5 1.png" alt="Pills Capsules Icon" className="h-30" />
        </div>
        <div className="container w-full bg-[#E8E6DE]">
          <div className="md:bg-green-400  lg:bg-blue-400 bg-yellow-400 xl:bg-pink-400 grid lg:grid-cols-2 grid-cols-1"></div>
          <div class="grid grid-flow-col justify-items-center ..."></div>
          <section className="bg-[#F2F2F2] px-6 py-16">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-semibold text-[#503217] leading-snug mb-6">
                  Join our trustable
                  <br />
                  Medifit product
                  <br />
                  community
                </h2>
                <p className="text-[#7C6F61] text-base md:text-lg mb-6">
                  Join us as we build a community where wellness is accessible,
                  education is empowering, and health is a shared journey.
                </p>
                <button className="bg-[#503217] text-white px-5 py-3 rounded-lg flex items-center gap-2 hover:bg-[#3e2814] transition cursor-pointer">
                  Get started
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <img
                  src="/Green Tablet.jpg"
                  alt="Green Tablet"
                  className="rounded-xl object-cover w-full h-full"
                />
                <img
                  src="/Blister pack.jpg"
                  alt="Blister pack"
                  className="rounded-xl object-cover w-full h-full"
                />
                <img
                  src="/Dropper Bottel.jpg"
                  alt="Dropper bottles"
                  className="rounded-xl object-cover w-full h-full"
                />
                <img
                  src="/Mixed capsules.jpg"
                  alt="Mixed capsules"
                  className="rounded-xl object-cover w-full h-full"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
      {/* Footer can be added here if needed */}
    </>
  );
};

export default Contact;
