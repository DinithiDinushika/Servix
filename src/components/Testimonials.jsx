const testimonials = [
  {
    name: "Donald",
    username: "@donald",
    initial: "D",
    color: "bg-[#002974]",
    text: "\"Servix gives us a single point of contact while managing an entire service workforce behind the scenes.\"",
  },
  {
    name: "David",
    username: "@david",
    initial: "D",
    color: "bg-[#FFC301]",
    textColor: "text-[#021841]",
    text: "\"The structured contract model makes service delivery reliable and predictable.\"",
  },
  {
    name: "Pagac",
    username: "@pagac",
    initial: "P",
    color: "bg-[#002974]",
    text: "\"We no longer worry about staffing as Servix manages everything from allocation to payment.\"",
  },
];

// const Stars = () => (
//   <div className="flex gap-0.5 mb-3">
//     {[1,2,3,4,5].map(s => (
//       <svg key={s} className="w-3.5 h-3.5" fill="#FFC301" viewBox="0 0 24 24">
//         <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
//       </svg>
//     ))}
//   </div>
// );

export default function Testimonials() {
  return (
    <section
      className="relative py-20 lg:py-24 overflow-hidden bg-navy-dark"

    >
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, rgba(0,41,116,0.25) 0%, transparent 65%)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <p className="text-white text-md font-semibold tracking-wider mb-1">Testimonial</p>
          <h2 className="text-4xl sm:text-5xl font-light text-white tracking-tight">
            Customer Feedback
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white border border-white/8 rounded-2xl p-6 hover:border-[#FFC301]/25 hover:-translate-y-1 transition-all duration-200"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-11 h-11 rounded-full ${t.color} flex items-center justify-center font-bold text-base ${t.textColor || "text-white"} flex-shrink-0`}>
                  {t.initial}
                </div>
                <div>
                  <p className="text-black font-semibold text-sm">{t.name}</p>
                  <p className="text-black text-xs italic">{t.username}</p>
                </div>
              </div>
              <p className="text-black text-sm leading-relaxed">{t.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
