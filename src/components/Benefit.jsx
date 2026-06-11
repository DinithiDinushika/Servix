const companyBenefits = [
  "Servix handles workforce coordination, allowing businesses to focus on outcomes rather than managing individuals.",
  "Company registered and vetted service providers.",
  "Consistent service delivery instead of marketplace uncertainty.",
  "Quality control and supervision by Servix.",
  "Secure billing and transparent reporting.",
  "Scalable workforce for both short-term and long-term projects.",
];

const providerBenefits = [
  "Access to structured work opportunities.",
  "Clear expectations under Servix managed contracts.",
  "Reliable and consistent payment processes.",
  "Professional coordination and support.",
  "Performance based growth opportunities.",
];

export default function Benefit() {
  return (
    <section
      id="benefit"
      className="relative py-20 lg:py-24 overflow-hidden bg-navy-dark"
      
    >
      {/* Background Soft Glow */}
      <div 
        className="absolute inset-0 pointer-events-none mix-blend-screen"
        style={{ background: "radial-gradient(circle at center, rgba(0,145,255,0.15) 0%, transparent 45%)" }} 
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-white text-md font-medium tracking-wide mb-1">Benefit</p>
          <h2 className="text-4xl sm:text-5xl font-light text-white tracking-tight">Why Choose Us?</h2>
        </div>

        {/* Benefits Grid Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* Box 1: For Companies */}
          <div className="border border-blue-900/40 rounded-2xl p-6 sm:p-8 shadow-[0_0_40px_rgba(0,41,116,0.4)] backdrop-blur-sm" 
            style={{ background: "linear-gradient(123.93deg, #00133F 0.94%, #00216C 100.24%)" }}>
            {/* White Rounded Header Label */}
            <div className="w-full bg-white rounded-xl py-3 text-center mb-8 shadow-sm">
              <h3 className="text-[#021841] font-bold text-base tracking-wide">
                For Companies
              </h3>
            </div>
            
            {/* Items Content List */}
            <ul className="space-y-5">
              {companyBenefits.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="text-white/80 text-sm font-medium pt-0.5 min-w-[18px]">
                    {i + 1}.
                  </span>
                  <p className="text-white/80 text-sm leading-relaxed font-light">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Box 2: For Service Providers */}
          <div className="h-full border border-blue-900/40 rounded-2xl p-6 sm:p-8 shadow-[0_0_40px_rgba(0,41,116,0.4)] backdrop-blur-sm"
            style={{ background: "linear-gradient(123.93deg, #00133F 0.94%, #00216C 100.24%)" }}
          >
            {/* White Rounded Header Label */}
            <div className="w-full bg-white rounded-xl py-3 text-center mb-8 shadow-sm">
              <h3 className="text-[#021841] font-bold text-base tracking-wide">
                For Service Providers
              </h3>
            </div>
            
            {/* Items Content List */}
            <ul className="space-y-5">
              {providerBenefits.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="text-white/80 text-sm font-medium pt-0.5 min-w-[18px]">
                    {i + 1}.
                  </span>
                  <p className="text-white/80 text-sm leading-relaxed font-light">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}