import iPhone15 from "../assets/iPhone15_Pro_2.png";
import light from "../assets/Light.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-16 lg:pt-20 bg-navy-dark"
      
    >
      <img src={light} alt="Light Effect" className="absolute top-[10%] right-[-15%] w-[90%] hidden lg:block h-full object-cover " />
      {/* Background glow blobs */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,41,116,0.5) 0%, transparent 65%)", filter: "blur(60px)" }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,41,116,0.3) 0%, transparent 70%)", filter: "blur(80px)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 lg:py-0">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-6 xl:gap-8">

          {/* Left content */}
          <div className="flex-1 min-w-[300px] max-w-xl text-center lg:text-left animate-fade-up">
            <h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4"
              style={{
                background: "linear-gradient(90deg, #ffffff 0%, #81ABEA 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Reliable Service Delivery
            </h1>
            <p className="text-white text-xl font-medium mb-5">
              Powered by Trusted Professionals
            </p>
            <p className="text-white/60 text-sm leading-relaxed mb-8 max-w-md mx-auto lg:mx-0">
              Servix is a professional service delivery company providing short-term and long-term services to businesses using company-registered, vetted service providers. Unlike open marketplaces, Servix manages contracts, workforce allocation, quality control, and payments end to end giving businesses reliability, accountability, and peace of mind.
            </p>

            {/* App store badges */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <a href="#" className="flex items-center gap-2.5 bg-white border border-white/20 rounded-xl px-4 py-2.5 hover:bg-white/80 transition-colors group">
                <svg className="w-6 h-6" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <mask id="mask0_87_8320" style={{maskType: "alpha"}} maskUnits="userSpaceOnUse" x="7" y="3" width="24" height="26"> <path d="M30.0484 14.4004C31.3172 15.0986 31.3172 16.9014 30.0484 17.5996L9.75627 28.7659C8.52052 29.4459 7 28.5634 7 27.1663L7 4.83374C7 3.43657 8.52052 2.55415 9.75627 3.23415L30.0484 14.4004Z" fill="#C4C4C4"></path> </mask> <g mask="url(#mask0_87_8320)"> <path d="M7.63473 28.5466L20.2923 15.8179L7.84319 3.29883C7.34653 3.61721 7 4.1669 7 4.8339V27.1664C7 27.7355 7.25223 28.2191 7.63473 28.5466Z" fill="url(#paint0_linear_87_8320)"></path> <path d="M30.048 14.4003C31.3169 15.0985 31.3169 16.9012 30.048 17.5994L24.9287 20.4165L20.292 15.8175L24.6923 11.4531L30.048 14.4003Z" fill="url(#paint1_linear_87_8320)"></path> <path d="M24.9292 20.4168L20.2924 15.8179L7.63477 28.5466C8.19139 29.0232 9.02389 29.1691 9.75635 28.766L24.9292 20.4168Z" fill="url(#paint2_linear_87_8320)"></path> <path d="M7.84277 3.29865L20.2919 15.8177L24.6922 11.4533L9.75583 3.23415C9.11003 2.87878 8.38646 2.95013 7.84277 3.29865Z" fill="url(#paint3_linear_87_8320)"></path> </g> <defs> <linearGradient id="paint0_linear_87_8320" x1="15.6769" y1="10.874" x2="7.07106" y2="19.5506" gradientUnits="userSpaceOnUse"> <stop stopColor="#00C3FF"></stop> <stop offset="1" stopColor="#1BE2FA"></stop> </linearGradient> <linearGradient id="paint1_linear_87_8320" x1="20.292" y1="15.8176" x2="31.7381" y2="15.8176" gradientUnits="userSpaceOnUse"> <stop stopColor="#FFCE00"></stop> <stop offset="1" stopColor="#FFEA00"></stop> </linearGradient> <linearGradient id="paint2_linear_87_8320" x1="7.36932" y1="30.1004" x2="22.595" y2="17.8937" gradientUnits="userSpaceOnUse"> <stop stopColor="#DE2453"></stop> <stop offset="1" stopColor="#FE3944"></stop> </linearGradient> <linearGradient id="paint3_linear_87_8320" x1="8.10725" y1="1.90137" x2="22.5971" y2="13.7365" gradientUnits="userSpaceOnUse"> <stop stopColor="#11D574"></stop> <stop offset="1" stopColor="#01F176"></stop> </linearGradient> </defs> </g></svg>
                <div className="text-left">
                  <p className="text-black text-[10px] leading-none">Get It On</p>
                  <p className="text-black text-sm font-semibold leading-tight">Google Play</p>
                </div>
              </a>
              <a href="#" className="flex items-center gap-2.5 bg-white border border-white/20 rounded-xl px-4 py-2.5 hover:bg-white/80 transition-colors group">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="black">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.4c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.39-1.32 2.76-2.53 3.99M12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                <div className="text-left">
                  <p className="text-black text-[10px] leading-none">Get It On</p>
                  <p className="text-black text-sm font-semibold leading-tight">Apple Store</p>
                </div>
              </a>
            </div>
          </div>

          {/* Right — Phone mockup image */}
          <div className="flex-shrink-0 hidden lg:flex items-center justify-center relative lg:w-[45%] xl:w-auto">
            <img
              src={iPhone15}
              alt="Servix App"
              className="w-[480px] xl:w-[700px] object-contain animate-float drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
