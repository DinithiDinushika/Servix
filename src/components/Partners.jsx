import watermarkLogo from "../assets/watermark.png";
import opentextLogo from "../assets/opentext-logo.png";
import instagramLogo from "../assets/instagram.png";

const partnersList = [
  { name: "Watermark", src: watermarkLogo, alt: "Watermark Logo", className: "h-8 sm:h-9 object-contain" },
  { name: "OpenText", src: opentextLogo, alt: "OpenText Logo", className: "h-6 sm:h-7 object-contain brightness-0 invert" },
  { name: "Instagram", src: instagramLogo, alt: "Instagram Logo", className: "h-8 sm:h-9 object-contain" },
];

export default function Partners() {
  return (
    <section
      className="relative py-20 lg:py-24 overflow-hidden bg-navy-dark"
  
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Section Labels */}
        <p className="text-white text-md font-medium tracking-wide mb-1">Our Partners</p>
        <h2 className="text-4xl sm:text-5xl font-light text-white tracking-tight mb-6">
          Who Work With Us?
        </h2>
        
        {/* Description Block */}
        <p className="text-white/60 text-sm sm:text-base leading-relaxed font-light max-w-3xl mx-auto mb-16">
          Servix supports businesses across cleaning, maintenance, facilities management, and operational services. 
          Our model is ideal for organizations seeking reliable workforce solutions without the complexity of 
          managing contractors individually.
        </p>

        {/* Floating Partner Logos Layer Layout */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-12 sm:gap-16 lg:gap-20">
          {partnersList.map((partner, index) => (
            <div 
              key={index} 
              className="transition-opacity duration-300 hover:opacity-80 flex items-center justify-center"
            >
              <img 
                src={partner.src} 
                alt={partner.alt} 
                className={partner.className}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}