import aboutBg from "../assets/customer-care-self-service 1.png";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-20 lg:py-0 overflow-hidden bg-navy-dark"
      
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Outer wrapper — image as base, card overlaid on top-right */}
        <div className="relative w-full rounded-2xl overflow-hidden flex flex-col lg:block">

          {/* Full-width background image */}
          <img
            src={aboutBg}
            alt="Service Technology"
            className="w-full lg:w-[90%] h-full object-cover rounded-2xl"
            style={{ minHeight: "420px", maxHeight: "520px" }}
          />

          {/* Text card — overlaid on right side */}
          <div
            className="relative lg:absolute lg:top-1/2 lg:right-10 lg:-translate-y-1/2 w-full lg:w-[38%] bg-white rounded-xl p-6 lg:p-8 mt-4 lg:mt-0"
            style={{
             
              boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
            }}
          >
            <p
              className="text-xs font-bold tracking-widest uppercase mb-1"
              style={{ color: "#1a1a1a" }}
            >
              About us
            </p>
            <h2
              className="text-2xl lg:text-3xl font-light mb-4"
              style={{ color: "#0d1b2a" }}
            >
              Who We Are?
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: "#444" }}>
              Servix is a service delivery company built to simplify how businesses
              manage operational services. We accept structured service contracts and
              deliver outcomes using verified, company-registered service providers.
              Inspired by the simplicity of modern platforms and trust-focused service
              models, Servix goes further by taking full responsibility for service
              delivery rather than simply connecting clients to individuals. Our
              platform combines workforce coordination, contract management,
              performance tracking, and secure payment management into one
              streamlined system.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}