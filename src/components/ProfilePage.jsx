import { useState } from "react";
import lightBg from "../assets/Light.png"; // Adjust extension based on your local assets config

const skills = [
  {
    category: "Plumber",
    intro: null,
    tools: [],
    docs: [],
  },
  {
    category: "Welder",
    intro: "Lorem ipsum dolor sit amet consectetur. Fringilla tempus feugiat pulvinar tempor tincidunt. Cursus pretium eget est nam enim habitant commodo sagittis arcu.",
    tools: ["Welder Plant", "Grinder", "Goggles", "Helmet"],
    docs: [
      { name: "Trade Certifications Document.pdf", size: "154 KB", type: "pdf" },
      { name: "Educatioon_Certificate.png", size: "97 KB", type: "img" },
      { name: "Experience Documents.pdf", size: "154 KB", type: "pdf" },
    ],
  },
];

const FileIcon = ({ type }) => {
  if (type === "pdf") {
    return (
      <div className="w-8 h-8 rounded bg-red-50 flex items-center justify-center flex-shrink-0 border border-red-100">
        <svg className="w-5 h-5 text-red-500" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9.5 8.5c0 .83-.67 1.5-1.5 1.5H7v1.5H5.5V9H8c.83 0 1.5.67 1.5 1.5v1zm5 2c0 .83-.67 1.5-1.5 1.5h-2.5V9H13c.83 0 1.5.67 1.5 1.5v3zm4-3.5h-3v1h2V12h-2v1.5h-1.5V9h3.5v1.5z" />
        </svg>
      </div>
    );
  }
  return (
    <div className="w-8 h-8 rounded bg-emerald-50 flex items-center justify-center flex-shrink-0 border border-emerald-100">
      <svg className="w-5 h-5 text-emerald-500" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 16H6c-.55 0-1-.45-1-1v-4.5l3.5-3.5 3.5 3.5 4.5-4.5L19 13v5c0 .55-.45 1-1 1z" />
      </svg>
    </div>
  );
};

export default function ProfilePage({ user, onBack }) {
  const [expanded, setExpanded] = useState({ 0: false, 1: true });

  return (
    <div
      className="min-h-screen relative overflow-x-hidden w-full"
      style={{ background: "linear-gradient(180deg, #010e24 0%, #010612 100%)" }}
    >
      {/* Fixed/Pinned Background Vector placed on the center-right */}
      <div className="absolute top-[400px] -translate-y-1/2 sm:right-[-100px] lg:right-0 w-[800px] lg:w-[1000px] h-auto pointer-events-none z-0 overflow-hidden mix-blend-screen ">
        <img 
          src={lightBg} 
          alt="Swirl Glow Background" 
          className="w-full h-auto object-contain scale-125"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-20">
        
        {/* Breadcrumb Navigation Line */}
        <div className="mb-4 flex items-center gap-1 text-xs sm:text-sm text-white font-light">
          <button onClick={onBack} className="hover:text-white transition-colors cursor-pointer">
            User Bio
          </button>
          <span className="text-white font-light">&gt;</span>
          <span className="text-white">Profile</span>
        </div>

        {/* Main Title Banner */}
        <h1 className="text-3xl sm:text-4xl font-semibold text-white mb-8 tracking-tight">
          User Bio
        </h1>

        {/* Unified Main Application Container Grid */}
        <div className="bg-white rounded-[24px] p-4 sm:p-6 lg:p-8 shadow-[0_24px_70px_rgba(0,0,0,0.4)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* Left Hand Column Side — h-fit prevents it from growing vertically with accordion */}
            <div className="lg:col-span-6 bg-[#f8f9fa] rounded-2xl border border-gray-100 p-5 sm:p-7 h-fit">
              {/* Profile Avatar Frame with Info */}
              <div className="flex items-center gap-4 mb-8 pb-6 border-b border-gray-200/60">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-200 bg-gray-300 flex-shrink-0">
                  <svg className="w-full h-full text-navy-mid p-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0 1 12.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 1 1-8 0 4 4 0 0 1 8 0z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-[#021841] font-bold text-xl tracking-tight leading-snug">
                    Hasith J<br />Wickramasinghe
                  </h2>
                </div>
              </div>

              {/* Bio Details Label Tag */}
              <p className="text-gray-400 text-[11px] font-bold tracking-wider mb-5 uppercase">
                Bio Details
              </p>

              {/* Responsive metadata block structure */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
                <div>
                  <p className="text-gray-400 text-xs mb-1 font-medium">Contact No</p>
                  <p className="text-[#021841] text-xs sm:text-sm font-semibold tracking-tight whitespace-nowrap">
                    +64 458 2468 4454
                  </p>
                </div>
                <div>
                  <p className="text-gray-400 text-xs mb-1 font-medium">Email</p>
                  <p className="text-[#021841] text-xs sm:text-sm font-semibold tracking-tight break-all">
                    Hasithjwick@gmail.com
                  </p>
                </div>
                <div>
                  <p className="text-gray-400 text-xs mb-1 font-medium">Contact No</p>
                  <p className="text-[#021841] text-xs sm:text-sm font-semibold tracking-tight whitespace-nowrap">
                    +64 458 2468 4454
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <p className="text-gray-400 text-xs mb-1 font-medium">Address</p>
                <p className="text-[#021841] text-sm font-semibold leading-relaxed">
                  Princes Hwy, Traralgon VIC 3844, Australia
                </p>
              </div>
            </div>

            {/* Right Hand Column Side — Interactive Skill Accordions Stack */}
            <div className="lg:col-span-6 space-y-4">
              <p className="text-gray-400 text-[11px] font-bold tracking-wider mb-2 lg:mb-4 uppercase">
                About Skils
              </p>

              {skills.map((skill, i) => (
                <div key={i} className="bg-white border border-gray-200/90 rounded-2xl overflow-hidden shadow-sm transition-all duration-200">
                  
                  {/* Category Header Click Bar */}
                  <div className="px-6 py-5 text-center relative">
                    <p className="text-gray-400 text-[11px] font-medium uppercase tracking-wider mb-1">
                      Job Category
                    </p>
                    <p className="text-[#021841] font-bold text-xl tracking-tight mb-2">
                      {skill.category}
                    </p>
                    
                    <button
                      onClick={() => setExpanded(p => ({ ...p, [i]: !p[i] }))}
                      className="flex flex-col items-center gap-0.5 mx-auto text-gray-400 hover:text-blue-600 text-[11px] font-medium transition-colors cursor-pointer"
                    >
                      <span>{expanded[i] ? "See Less" : "See More"}</span>
                      <svg
                        className={`w-3.5 h-3.5 transition-transform duration-300 ${expanded[i] ? "rotate-180" : ""}`}
                        viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                      >
                        <polyline points="6 9 12 15 18 9"/>
                      </svg>
                    </button>
                  </div>

                  {/* Expandable Meta Panel Content Area */}
                  {expanded[i] && skill.intro && (
                    <div className="border-t border-gray-100 px-6 pb-6 pt-5 space-y-5 bg-white">
                      
                      {/* Introduction text block info */}
                      <div>
                        <p className="text-gray-400 text-[11px] font-bold tracking-wide mb-2 uppercase">
                          Introduction
                        </p>
                        <p className="text-gray-700 text-sm leading-relaxed font-normal">
                          {skill.intro}
                        </p>
                      </div>

                      {/* Tool Tags Block mapping parameters */}
                      {skill.tools.length > 0 && (
                        <div>
                          <p className="text-gray-400 text-[11px] font-bold tracking-wide mb-2 uppercase">
                            Using Tools
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {skill.tools.map(tool => (
                              <span 
                                key={tool} 
                                className="bg-white border border-gray-200 text-gray-700 rounded-lg px-3 py-1.5 text-xs font-medium shadow-sm"
                              >
                                {tool}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Attached PDF/Image Document components node tree */}
                      {skill.docs.length > 0 && (
                        <div>
                          <p className="text-gray-400 text-[11px] font-bold tracking-wide mb-2 uppercase">
                            Documents
                          </p>
                          <div className="space-y-2">
                            {skill.docs.map(doc => (
                              <div 
                                key={doc.name} 
                                className="flex items-center gap-3 bg-[#f8f9fa] border border-gray-100 rounded-xl px-4 py-3 hover:bg-gray-50/80 transition-colors"
                              >
                                <FileIcon type={doc.type} />
                                <div className="min-w-0 flex-1">
                                  <p className="text-gray-800 text-sm font-medium truncate">
                                    {doc.name}
                                  </p>
                                  <p className="text-gray-400 text-[11px] font-medium">
                                    {doc.size}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                    </div>
                  )}
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}