import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      {/* Navigation Bar */}
      <Navbar />
      {/* Health Production Session*/}
      <div className="w-full min-h-screen bg-[#E8E6DE] flex flex-col items-center justify-center py-20 px-4">
        <div className="w-full max-w-[1400px] mx-auto">
          <section className="w-full bg-[#E8E6DE] relative">
            {/* Hero Heading */}
            <div className="max-w-[1079px] mx-auto text-center mb-16">
              <h2 className="text-[#503217] text-[48px] sm:text-[60px] md:text-[70px] leading-[1.2] font-medium font-['Poppins']">
                Health products you can trust
                <br />
                service you deserve
              </h2>
            </div>

            {/* Card Group */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1300px] mx-auto">
              {/* Left Card */}
              <div
                className=" h-[438px] bg-cover bg-center rounded-[10px]"
                style={{
                  backgroundImage: "url('/Health Product left image.jpg')",
                }}
              >
                {/* Optional content or empty */}
              </div>

              {/* Center Card */}
              <div
                className="w-full h-[581px] bg-cover bg-center rounded-[10px]"
                style={{
                  backgroundImage: "url('/Health Product Middle Image.jpg')",
                }}
              >
                {/* Optional content or empty */}
              </div>

              {/* Right Card */}
              <div
                className="w-full h-[362px] bg-cover bg-center rounded-[10px]"
                style={{
                  backgroundImage: "url('/Health Product Right Image.jpg')",
                }}
              >
                {/* Optional content or empty */}
              </div>
            </div>
          </section>
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
              <img src="/medicine-pills-icon.png" alt="Icon" className="h-30" />
            </div>
          </div>
          {/* About Us Section */}
          <div className="w-full bg-[#E8E6DE] pt-4 pb-20 px-4">
            <div className="w-full max-w-[1297px] mx-auto">
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-center gap-8 lg:gap-16">
                {/* About us heading */}
                <div className="flex-shrink-0">
                  <h3 className="font-poppins font-medium text-[58px] leading-[120%] text-[#503217]">
                    About us
                  </h3>
                </div>

                {/* Description text */}
                <div className="flex-1 max-w-[920px]">
                  <p className="font-poppins font-medium text-[40px] leading-[120%] text-[#503217]">
                    Our focus is on nurturing wellness and empowering health for
                    all ages well being for people worldwide.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className=" w-full  bg-[#E8E6DE] flex flex-col items-center justify-center relative">
        <div className="container w-full bg-[#E8E6DE]">
          <div className="md:bg-green-400  lg:bg-blue-400 bg-yellow-400 xl:bg-pink-400 grid lg:grid-cols-2 grid-cols-1"></div>
          <div class="grid grid-flow-col justify-items-center ..."></div>
          <div className="w-full bg-[#E8E6DE] py-10">
            <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="flex flex-col items-center">
                <img
                  src="/Delivery.png"
                  alt="Free shipping"
                  className="w-10 h-10 mb-2"
                />
                <p className="text-[#503217] text-lg font-semibold">
                  Free shipping
                </p>
              </div>

              <div className="flex flex-col items-center">
                <img
                  src="/Refund.png"
                  alt="Easy refund"
                  className="w-10 h-10 mb-2"
                />
                <p className="text-[#503217] text-lg font-semibold">
                  Easy refund
                </p>
              </div>

              <div className="flex flex-col items-center">
                <img
                  src="/Online.png"
                  alt="Online support"
                  className="w-10 h-10 mb-2"
                />
                <p className="text-[#503217] text-lg font-semibold">
                  Online support
                </p>
              </div>

              <div className="flex flex-col items-center">
                <img
                  src="/flexible.png"
                  alt="Flexible payment"
                  className="w-10 h-10 mb-2"
                />
                <p className="text-[#503217] text-lg font-semibold">
                  Flexible payment
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="w-full bg-[#E2DFCF] flex flex-col items-center justify-center relative">
        {/* Icon positioned at top-right corner */}
        <div className="absolute top-4 right-4 z-10">
          <img src="/medical shape 5 1.png" alt="Pills Capsules Icon" className="h-30" />
        </div>
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full py-12">
            <section className="bg-[#E2DFCF] w-full py-16 px-6 md:px-16">
              {/* Title */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#503217] leading-snug max-w-2xl mb-10">
                What to Expect When You Join Our Team
              </h2>

              {/* Content layout */}
              <div className="flex flex-col lg:flex-row items-start gap-10">
                {/* Left Side: Icons and Labels */}
                <div className="space-y-6 text-xl font-medium">
                  <div className="flex items-center gap-3 text-[#9C8D7A] cursor-pointer transition-all duration-300 hover:text-[#503217]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="size-6 transition-transform duration-300 hover:scale-125"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
                      />
                    </svg>

                    <span>Mission</span>
                  </div>
                  <div className="flex items-center gap-3 text-[#9C8D7A] cursor-pointer transition-all duration-300 hover:text-[#503217]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6 transition-transform duration-300 hover:scale-125"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
                      />
                    </svg>

                    <span>Commitments</span>
                  </div>
                  <div className="flex items-center gap-3 text-[#9C8D7A] cursor-pointer transition-all duration-300 hover:text-[#503217]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 transition-transform duration-300 hover:scale-125"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.458 12C3.732 7.943 7.522 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.478 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                    <span>Vision</span>
                  </div>
                </div>

                {/* Right Side: Image and Text */}
                <div className="flex flex-col lg:flex-row items-start gap-6">
                  <img
                    src="/Commitment.jpg"
                    alt="Commitments"
                    className="rounded-xl w-full max-w-[350px] object-cover"
                  />

                  <p className="text-[#9C8D7A] text-base max-w-md">
                    We're committed to supporting your health journey by
                    offering valuable educational resources, wellness insights,
                    and expert advice to help you make informed decisions.
                  </p>
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
          <section className="bg-[#F2F2F2]  px-6 py-16">
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
      
      {/* Footer */}
      <Footer />
    </>
  );
};

export default About;
