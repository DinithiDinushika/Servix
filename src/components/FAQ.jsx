const faqs = [
  {
    q: "Who is responsible for service delivery?",
    a: "Servix manages and delivers services under agreed contracts.",
    align: "left"
  },
  {
    q: "Are service providers employees?",
    a: "Service providers are independent, company registered professionals engaged by Servix",
    align: "right"
  },
  {
    q: "Can Servix support long term contracts?",
    a: "Yes. We support both short-term and long-term service agreements.",
    align: "left"
  },
  {
    q: "Can Servix support long term contracts?",
    a: "Yes. We support both short-term and long-term service agreements.",
    align: "right"
  },
  {
    q: "How are payments handled?",
    a: "Clients are invoiced by Servix, and service providers receive reliable payments based on approved work and contract terms.",
    align: "left"
  },
];

export default function FAQ() {
  return (
    <section
      className="relative py-20 lg:py-24 overflow-hidden bg-navy-dark"
      
    >
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{
          backgroundImage: `linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-white text-md font-semibold tracking-wider mb-1">FAQ</p>
          <h2 className="text-4xl sm:text-5xl font-light text-white tracking-tight">
            Questions And Answers
          </h2>
        </div>

        {/* Alternating Left-Right Text Layout Stack */}
        <div className="space-y-12 max-w-4xl mx-auto">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`flex flex-col w-full ${
                faq.align === "right" ? "items-end text-right" : "items-start text-left"
              }`}
            >
              <div className="max-w-2xl">
                {/* Question */}
                <h3 className="text-white text-base sm:text-lg font-semibold mb-1 tracking-wide">
                  {faq.q}
                </h3>
                {/* Answer */}
                <p className="text-white/70 text-sm sm:text-base font-light leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>

      

      </div>
    </section>
  );
}
