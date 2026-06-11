import handMockup from "../assets/hand_mockup.png";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-20 lg:py-24 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #010e24 0%, #010a1c 100%)" }}
    >
      {/* Subtle Grid overlay background texture */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none" 
        style={{
          backgroundImage: `linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}
      />

      {/* Main Container - Removed global padding-left to allow the hand image to touch the screen edge */}
      <div className="w-full max-w-[1440px] mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8 xl:gap-16">
          
          {/* Left Side: Mockup container shifted completely to the left edge */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start items-center">
            <img
              src={handMockup}
              alt="Servix App in hand"
              className="w-full max-w-[480px] lg:max-w-none lg:w-[105%] xl:w-[100%] h-auto object-contain -ml-4 sm:-ml-8 lg:-ml-12 drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            />
          </div>

          {/* Right Side: Handled internal responsive padding explicitly for clean text formatting */}
          <div className="w-full lg:w-1/2 px-4 sm:px-6 lg:pl-0 lg:pr-12 xl:pr-24 text-center lg:text-left flex flex-col items-center lg:items-start">
            
            {/* Contact Content Block */}
            <div className="flex flex-col items-center text-center mb-10 w-full max-w-xl mx-auto">
              <p className="text-white text-md font-semibold tracking-wide mb-1">Contact Us</p>
               <h2 className="text-4xl sm:text-5xl font-light text-white tracking-tight mb-4">
                 Let's Work With Us
               </h2>
               <p className="text-white/60 text-sm sm:text-base leading-relaxed font-light mb-8 max-w-md mx-auto">
                 Looking for a reliable service partner?
                 Servix combines the simplicity of digital platforms with 
                 the reliability of a professional service company. 
               </p>
              
               {/* Clean Transparent Bordered Button */}
               <button className="px-10 py-3 bg-[#01112d]/60 text-white font-medium border border-white/40 rounded-xl hover:bg-white hover:text-[#010e24] hover:border-white transition-all duration-300 shadow-md cursor-pointer text-sm tracking-wide">
                Contact Us
               </button>
            </div>

            {/* Registration Headers & Details Section */}
            <div className="w-full max-w-3xl border-t border-white/5 pt-10 text-center mx-auto flex flex-col items-center">
               {/* Centered Main Title */}
               <h3 className="text-white text-lg font-bold tracking-wide mb-8 w-full">
                 Registration
               </h3>

               {/* Two Column Grid Information Split - Fully Centered Text */}
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 mb-12 text-center w-full max-w-2xl">
                 {/* For Companies */}
                 <div className="flex flex-col items-center">
                   <h4 className="text-white font-semibold text-base mb-2">For Companies</h4>
                   <p className="text-white/60 text-sm font-light leading-relaxed max-w-xs">
                     Submit your service requirement and let Servix manage the delivery.
                   </p>
                </div>
                
                 {/* For Service Providers */}
                 <div className="flex flex-col items-center">
                   <h4 className="text-white font-semibold text-base mb-2">For Service Providers</h4>
                  <p className="text-white/60 text-sm font-light leading-relaxed max-w-xs">
                     Join our vetted provider network and access structured work opportunities.
                   </p>
                 </div>
               </div>

               {/* Official Store Badges Container - Centered Row */}
               <div className="flex flex-wrap justify-center gap-4 w-full">
                 {/* Google Play */}
                 <a 
                  href="#" 
                  className="flex items-center gap-3 bg-white rounded-xl px-6 py-2.5 transition-transform duration-200 hover:scale-[1.02] shadow-md"
                >
                  {/* Official Google Play SVG Icon */}
                  <svg className="w-6 h-6" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <mask id="mask0_87_8320" style={{maskType: "alpha"}} maskUnits="userSpaceOnUse" x="7" y="3" width="24" height="26"> <path d="M30.0484 14.4004C31.3172 15.0986 31.3172 16.9014 30.0484 17.5996L9.75627 28.7659C8.52052 29.4459 7 28.5634 7 27.1663L7 4.83374C7 3.43657 8.52052 2.55415 9.75627 3.23415L30.0484 14.4004Z" fill="#C4C4C4"></path> </mask> <g mask="url(#mask0_87_8320)"> <path d="M7.63473 28.5466L20.2923 15.8179L7.84319 3.29883C7.34653 3.61721 7 4.1669 7 4.8339V27.1664C7 27.7355 7.25223 28.2191 7.63473 28.5466Z" fill="url(#paint0_linear_87_8320)"></path> <path d="M30.048 14.4003C31.3169 15.0985 31.3169 16.9012 30.048 17.5994L24.9287 20.4165L20.292 15.8175L24.6923 11.4531L30.048 14.4003Z" fill="url(#paint1_linear_87_8320)"></path> <path d="M24.9292 20.4168L20.2924 15.8179L7.63477 28.5466C8.19139 29.0232 9.02389 29.1691 9.75635 28.766L24.9292 20.4168Z" fill="url(#paint2_linear_87_8320)"></path> <path d="M7.84277 3.29865L20.2919 15.8177L24.6922 11.4533L9.75583 3.23415C9.11003 2.87878 8.38646 2.95013 7.84277 3.29865Z" fill="url(#paint3_linear_87_8320)"></path> </g> <defs> <linearGradient id="paint0_linear_87_8320" x1="15.6769" y1="10.874" x2="7.07106" y2="19.5506" gradientUnits="userSpaceOnUse"> <stop stopColor="#00C3FF"></stop> <stop offset="1" stopColor="#1BE2FA"></stop> </linearGradient> <linearGradient id="paint1_linear_87_8320" x1="20.292" y1="15.8176" x2="31.7381" y2="15.8176" gradientUnits="userSpaceOnUse"> <stop stopColor="#FFCE00"></stop> <stop offset="1" stopColor="#FFEA00"></stop> </linearGradient> <linearGradient id="paint2_linear_87_8320" x1="7.36932" y1="30.1004" x2="22.595" y2="17.8937" gradientUnits="userSpaceOnUse"> <stop stopColor="#DE2453"></stop> <stop offset="1" stopColor="#FE3944"></stop> </linearGradient> <linearGradient id="paint3_linear_87_8320" x1="8.10725" y1="1.90137" x2="22.5971" y2="13.7365" gradientUnits="userSpaceOnUse"> <stop stopColor="#11D574"></stop> <stop offset="1" stopColor="#01F176"></stop> </linearGradient> </defs> </g></svg>

                  
                  <div className="text-left">
                    <p className="text-gray-500 text-[9px] uppercase font-bold tracking-tight leading-none">Get It On</p>
                    <p className="text-gray-900 text-base font-bold leading-tight">Google Play</p>
                  </div>
                </a>

                 {/* Apple Store */}
                 <a 
                   href="#" 
                   className="flex items-center gap-3 bg-white rounded-xl px-6 py-2.5 transition-transform duration-200 hover:scale-[1.02] shadow-md"
                 >
                   <svg className="w-6 h-6 text-black" viewBox="0 0 24 24" fill="currentColor">
                     <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-.96.04-2.13.64-2.82 1.45-.6.69-1.12 1.84-.98 2.94 1.07.08 2.15-.52 2.81-1.33z"/>
                   </svg>
                   <div className="text-left">
                     <p className="text-gray-500 text-[9px] uppercase font-bold tracking-tight leading-none">Get It On</p>
                     <p className="text-gray-900 text-base font-bold leading-tight">Apple Store</p>
                   </div>
                 </a>
               </div>
             </div>
            </div>

        </div>
      </div>
    </section>
  );
}