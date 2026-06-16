import lightBg from "../assets/Light.png";

const sections = [
  {
    title: "1. Introduction",
    body: [
      `Servix Pty Ltd ("Servix", "we", "our", or "us") respects your privacy and is committed to protecting your personal information.`,
      "This Privacy Policy explains how we collect, use, disclose, store and protect your personal information when you use our website, mobile application, services, or otherwise interact with us.",
      "By accessing or using our services, you consent to the collection, use and disclosure of your personal information as described in this Privacy Policy.",
    ],
  },
  {
    title: "2. About Servix",
    body: [
      "Servix Pty Ltd provides workforce and service management solutions by connecting businesses with qualified and vetted service providers for short-term and long-term service engagements.",
    ],
  },
  {
    title: "3. Information We Collect",
    body: ["We may collect the following information:"],
    groups: [
      {
        heading: "Personal Information",
        items: [
          "Full name",
          "Date of birth",
          "Residential address",
          "Business address",
          "Email address",
          "Telephone number",
          "Profile photographs",
          "Emergency contact information",
        ],
      },
      {
        heading: "Service Provider Information",
        items: [
          "ABN details",
          "Business registration details",
          "Professional licences",
          "Certifications and qualifications",
          "Insurance information",
          "Employment and work history",
          "Identity verification documents",
        ],
      },
      {
        heading: "Customer Information",
        items: [
          "Business information",
          "Contact details",
          "Service requirements",
          "Contract information",
          "Billing information",
        ],
      },
      {
        heading: "Payment Information",
        intro: "Payments may be processed through third-party payment providers such as Stripe. We may collect:",
        items: ["Bank account details", "Payment records", "Transaction history", "Invoice information"],
        note: "Servix does not store complete credit card details.",
      },
      {
        heading: "Technical Information",
        items: [
          "IP address",
          "Device information",
          "Browser information",
          "Operating system information",
          "Mobile application usage data",
          "Log files",
          "Cookies and similar technologies",
        ],
      },
      {
        heading: "Location Information",
        intro:
          "Where necessary, we may collect location information to support workforce allocation, service delivery, attendance tracking, operational management and security.",
      },
    ],
  },
  {
    title: "4. How We Collect Information",
    body: ["We collect information when:"],
    list: [
      "You register an account",
      "You complete forms",
      "You enter into agreements with Servix",
      "You use our website or mobile application",
      "You communicate with us",
      "You submit documents for verification",
      "You make or receive payments",
      "You interact with our support team",
    ],
    footer:
      "We may also collect information from publicly available sources, referees, regulators, and verification providers where permitted by law.",
  },
  {
    title: "5. How We Use Your Information",
    body: ["We may use your information to:"],
    list: [
      "Provide and manage our services",
      "Verify identities and qualifications",
      "Match service providers with work opportunities",
      "Manage contracts and assignments",
      "Process payments and invoices",
      "Facilitate communications",
      "Improve platform functionality",
      "Monitor service quality",
      "Prevent fraud and misconduct",
      "Comply with legal obligations",
      "Resolve disputes and complaints",
    ],
  },
  {
    title: "6. Disclosure of Information",
    body: ["We may disclose personal information to:"],
    groups: [
      { heading: "Businesses and Service Providers", intro: "Where reasonably necessary to facilitate service delivery." },
      { heading: "Payment Providers", intro: "Including Stripe and financial institutions for payment processing." },
      {
        heading: "Technology Providers",
        intro: "Including cloud hosting providers, analytics providers, software vendors and communication platforms.",
      },
      { heading: "Professional Advisers", intro: "Lawyers, accountants, auditors and consultants." },
      { heading: "Government and Regulatory Authorities", intro: "Where required by law or regulatory obligations." },
    ],
    footer: "Servix does not sell personal information to third parties.",
  },
  {
    title: "7. Overseas Disclosure",
    body: ["Some service providers used by Servix may store or process data outside Australia. These providers may include:"],
    list: ["Amazon Web Services (AWS)", "Stripe", "Google services", "Other cloud and technology providers"],
    footer:
      "Where information is transferred overseas, Servix takes reasonable steps to ensure appropriate privacy and security protections are maintained.",
  },
  {
    title: "8. Data Security",
    body: [
      "Servix takes reasonable steps to protect personal information from misuse, interference, loss, unauthorised access, modification or disclosure.",
      "Security measures may include:",
    ],
    list: [
      "Secure cloud infrastructure",
      "Encryption technologies",
      "Access controls",
      "Multi-factor authentication",
      "Security monitoring",
      "Secure payment processing",
    ],
    footer: "Despite our efforts, no method of electronic transmission or storage can be guaranteed as completely secure.",
  },
  {
    title: "9. Data Retention",
    body: ["We retain personal information only for as long as necessary to:"],
    list: ["Provide our services", "Meet contractual obligations", "Comply with legal requirements", "Resolve disputes", "Enforce agreements"],
    footer: "When information is no longer required, it will be securely deleted, destroyed, or de-identified.",
  },
  {
    title: "10. Cookies and Analytics",
    body: ["Our website and mobile application may use cookies and similar technologies to:"],
    list: ["Improve user experience", "Analyse website traffic", "Enhance security", "Remember user preferences", "Improve functionality"],
    footer: "Users may disable cookies through browser settings, although some features may not function correctly.",
  },
  {
    title: "11. Marketing Communications",
    body: ["Servix may send updates, newsletters, promotional materials and service-related communications.", "You may opt out of marketing communications at any time by:"],
    list: ["Using the unsubscribe link provided; or", "Contacting us directly."],
    footer: "Operational or service-related communications may still be sent where necessary.",
  },
  {
    title: "12. Access and Correction",
    body: [
      "You may request access to personal information we hold about you.",
      "You may also request correction of information that is inaccurate, incomplete or out of date.",
      "Requests can be submitted using the contact details below.",
    ],
  },
  {
    title: "13. Third-Party Websites",
    body: [
      "Our services may contain links to third-party websites or services.",
      "Servix is not responsible for the privacy practices of third-party websites and encourages users to review their privacy policies.",
    ],
  },
  {
    title: "14. Children's Privacy",
    body: ["Our services are not intended for persons under 18 years of age.", "We do not knowingly collect personal information from children."],
  },
  {
    title: "15. Notifiable Data Breaches",
    body: [
      "If Servix becomes aware of an eligible data breach under the Privacy Act 1988 (Cth), we will take reasonable steps to investigate and comply with applicable notification requirements, including notifying affected individuals and the Office of the Australian Information Commissioner (OAIC) where required.",
    ],
  },
  {
    title: "16. Privacy Complaints",
    body: [
      "If you have concerns regarding how we handle your personal information, please contact us first.",
      "We will investigate complaints and aim to respond within a reasonable timeframe.",
      "If you are not satisfied with our response, you may contact:",
    ],
    contact: [
      { label: "Office of the Australian Information Commissioner (OAIC)" },
      { label: "Website", value: "https://www.oaic.gov.au", href: "https://www.oaic.gov.au" },
    ],
  },
  {
    title: "17. Changes to this Privacy Policy",
    body: [
      "Servix may update this Privacy Policy from time to time.",
      "Updated versions will be published on our website and mobile application.",
      "Continued use of our services after changes are published constitutes acceptance of the updated Privacy Policy.",
    ],
  },
  {
    title: "18. Contact Us",
    body: ["Servix Pty Ltd"],
    contact: [
      { label: "Email", value: "info@servix.com.au", href: "mailto:info@servix.com.au" },
      { label: "Website", value: "www.servix.com.au", href: "https://www.servix.com.au" },
    ],
  },
  {
    title: "19. Compliance",
    body: ["Servix is committed to handling personal information in accordance with:"],
    list: [
      "Privacy Act 1988 (Cth)",
      "Australian Privacy Principles (APPs)",
      "Spam Act 2003 (Cth)",
      "Notifiable Data Breaches Scheme",
      "Applicable Australian laws and regulations",
    ],
  },
];

function Bullet({ children }) {
  return (
    <li className="flex items-start gap-2.5">
      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#0141b6] flex-shrink-0" />
      <span className="text-gray-700 text-sm sm:text-[15px] leading-relaxed">{children}</span>
    </li>
  );
}

export default function PrivacyPolicyPage({ onBack }) {
  return (
    <div
      className="min-h-screen relative overflow-x-hidden w-full"
      style={{ background: "linear-gradient(180deg, #010e24 0%, #010612 100%)" }}
    >
      {/* Ambient background glow, consistent with ProfilePage */}
      <div className="absolute top-[400px] -translate-y-1/2 sm:right-[-100px] lg:right-0 w-[800px] lg:w-[1000px] h-auto pointer-events-none z-0 overflow-hidden mix-blend-screen">
        <img src={lightBg} alt="" className="w-full h-auto object-contain scale-125" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-20">
        {/* Breadcrumb */}
        <div className="mb-4 flex items-center gap-1 text-xs sm:text-sm text-white font-light">
          <button onClick={onBack} className="hover:text-white/70 transition-colors cursor-pointer">
            Home
          </button>
          <span className="font-light">&gt;</span>
          <span>Privacy Policy</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-semibold text-white mb-2 tracking-tight">
          Privacy Policy
        </h1>
        <p className="text-white/60 text-sm mb-8">Last Updated: 15/06/2026</p>

        {/* Content card */}
        <div className="bg-white rounded-[24px] p-5 sm:p-8 lg:p-10 shadow-[0_24px_70px_rgba(0,0,0,0.4)]">
          {/* <p className="text-gray-600 text-sm sm:text-[15px] leading-relaxed mb-10 pb-8 border-b border-gray-100">
            This Privacy Policy describes how Servix Pty Ltd collects, uses, discloses, stores and
            protects your personal information when you use our website, mobile application and
            services.
          </p> */}

          <div className="space-y-10">
            {sections.map((section) => (
              <section key={section.title} id={section.title.replace(/\W+/g, "-").toLowerCase()}>
                <h2 className="text-[#021841] font-bold text-lg sm:text-xl tracking-tight mb-3">
                  {section.title}
                </h2>

                {section.body?.map((p, i) => (
                  <p key={i} className="text-gray-700 text-sm sm:text-[15px] leading-relaxed mb-3">
                    {p}
                  </p>
                ))}

                {section.list && (
                  <ul className="space-y-2 mb-3">
                    {section.list.map((item) => (
                      <Bullet key={item}>{item}</Bullet>
                    ))}
                  </ul>
                )}

                {section.groups && (
                  <div className="space-y-5 mt-4">
                    {section.groups.map((group) => (
                      <div
                        key={group.heading}
                        className="bg-[#f8f9fa] border border-gray-100 rounded-2xl p-4 sm:p-5"
                      >
                        <p className="text-gray-400 text-[11px] font-bold tracking-wider mb-2.5 uppercase">
                          {group.heading}
                        </p>
                        {group.intro && (
                          <p className="text-gray-700 text-sm leading-relaxed mb-2.5">{group.intro}</p>
                        )}
                        {group.items && (
                          <ul className="space-y-2">
                            {group.items.map((item) => (
                              <Bullet key={item}>{item}</Bullet>
                            ))}
                          </ul>
                        )}
                        {group.note && (
                          <p className="text-gray-500 text-xs italic mt-3">{group.note}</p>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {section.contact && (
                  <div className="bg-[#f8f9fa] border border-gray-100 rounded-2xl p-4 sm:p-5 mt-2 space-y-1.5">
                    {section.contact.map((c) => (
                      <p key={c.label} className="text-sm">
                        <span className="text-gray-400 font-medium">
                          {c.value ? `${c.label}: ` : ""}
                        </span>
                        {c.href ? (
                          <a
                            href={c.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#0141b6] font-semibold hover:underline break-all"
                          >
                            {c.value}
                          </a>
                        ) : (
                          !c.value && <span className="text-[#021841] font-semibold">{c.label}</span>
                        )}
                      </p>
                    ))}
                  </div>
                )}

                {section.footer && (
                  <p className="text-gray-700 text-sm sm:text-[15px] leading-relaxed mt-3">
                    {section.footer}
                  </p>
                )}
              </section>
            ))}
          </div>

          {/* Back to site */}
          <div className="mt-12 pt-6 border-t border-gray-100">
            <button
              onClick={onBack}
              className="px-6 py-2.5 bg-[#021841] text-white text-sm font-medium rounded-lg hover:bg-[#0036A8] transition-colors cursor-pointer"
            >
              ← Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}