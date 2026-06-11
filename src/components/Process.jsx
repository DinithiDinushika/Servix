import { useState } from "react";
import jobRequesting from "../assets/job_requesting_1.png"
import approvedDashboard from "../assets/approveed_1.png"
import activityScreen from "../assets/activity_1.png"
import waveBg from "../assets/Group_1234.png";

const clientSteps = [
  { num: "1", text: "Submit your service requirement or contract request." },
  { num: "2", text: "Agree on scope, timeframe, and service terms with Servix." },
  { num: "3", text: "Servix allocates vetted service providers suited to your needs." },
  { num: "4", text: "Services are delivered and monitored under Servix supervision." },
  { num: "5", text: "Billing, reporting, and performance tracking are managed through one platform." },
];

const providerSteps = [
  { num: "1", text: "Register as a service provider and complete your profile." },
  { num: "2", text: "Get verified and onboarded by the Servix team." },
  { num: "3", text: "Receive job allocations matched to your skills and availability." },
  { num: "4", text: "Complete jobs under Servix-managed contracts and supervision." },
  { num: "5", text: "Receive reliable, timely payments through the platform." },
];

export default function Process() {
  const [activeTab, setActiveTab] = useState("client");
  const steps = activeTab === "client" ? clientSteps : providerSteps;

  return (
    <section
      id="process"
      className="relative py-20 lg:py-24 overflow-hidden bg-navy-dark"
      
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-8">
          <p className="text-white text-md font-semibold tracking-wider mb-1">Process</p>
          <h2 className="text-4xl sm:text-5xl font-light text-white mb-4">How To Work?</h2>
          <p className="text-white/70 text-sm">First you have to choose one of these: Who are you?</p>
        </div>

        {/* Tab Toggle */}
        <div className="flex justify-center mb-16">
          <div className="flex bg-white rounded-xl  shadow-lg max-w-xs w-full">
            <button
              onClick={() => setActiveTab("client")}
              className={`flex-1 py-2.5 px-3 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer text-center ${
                activeTab === "client"
                  ? "bg-[#0091FF] text-white"
                  : "text-gray-500 hover:text-gray-900"
              }`}
              style={activeTab === "client" ? { boxShadow: "0 0 80px rgba(0, 145, 255, 0.6)" } : {}}
            >
              Client
            </button>
            <button
              onClick={() => setActiveTab("provider")}
              className={`flex-1 py-2.5 px-3 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer text-center ${
                activeTab === "provider"
                  ? "bg-[#0091FF] text-white"
                  : "text-gray-500 hover:text-gray-900"
              }`}
              style={activeTab === "provider" ? { boxShadow: "0 0 20px rgba(0, 145, 255, 0.6)" } : {}}
            >
              Service Provider
            </button>
          </div>
        </div>

        {/* Mockups Display with Wave Vector Background */}
        <div className="relative w-full mx-auto flex justify-center items-center h-[350px] sm:h-[450px] mb-24">
          {/* Light Blue Wave Background */}
          <div className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none z-0">
            <img 
              src={waveBg}
              alt="Wave Graphic" 
              className="w-full h-auto object-cover scale-150"
            />
          </div>

          {/* Phone Mockups Wrapper */}
          <div className="relative z-10 flex justify-center items-center gap-10 sm:gap-16 w-full px-4">
            {/* Left Phone: Job Request */}
            <div className="w-[32%] transform translate-y-4 transition-transform hover:translate-y-2 duration-300">
              <img
                src={jobRequesting}
                alt="Job Requesting Screen"
                className="w-full h-auto drop-shadow-2xl"
              />
            </div>

            {/* Center Phone: Approved Dashboard */}
            <div className="w-[22%] max-w-[200px] z-20 transform scale-105 transition-transform hover:scale-110 duration-300">
              <img
                src={approvedDashboard}
                alt="Dashboard Approved Screen"
                className="w-full h-auto drop-shadow-2xl"
              />
            </div>

            {/* Right Phone: Activity Screen */}
            <div className="w-[32%] transform translate-y-4 transition-transform hover:translate-y-2 duration-300">
              <img
                src={activityScreen}
                alt="Activity Management Screen"
                className="w-full h-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Flow Steps Diagram */}
        <div className="max-w-5xl mx-auto flex flex-col gap-4 items-center">

          {/* Top Row: Steps 1, 2, 3 */}
          <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-2">
            
            <div className="w-full sm:flex-1 bg-white rounded-xl p-5 shadow-xl min-h-[100px] flex items-center justify-center border border-gray-100">
              <p className="text-[#0A2540] text-sm text-center font-medium">{steps[0].num}. {steps[0].text}</p>
            </div>

            <div className="text-white/40 text-lg px-1 rotate-90 sm:rotate-0">➔</div>

            <div className="w-full sm:flex-1 bg-white rounded-xl p-5 shadow-xl min-h-[100px] flex items-center justify-center border border-gray-100">
              <p className="text-[#0A2540] text-sm text-center font-medium">{steps[1].num}. {steps[1].text}</p>
            </div>

            <div className="text-white/40 text-lg px-1 rotate-90 sm:rotate-0">➔</div>

            <div className="w-full sm:flex-1 bg-white rounded-xl p-5 shadow-xl min-h-[100px] flex items-center justify-center border border-gray-100">
              <p className="text-[#0A2540] text-sm text-center font-medium">{steps[2].num}. {steps[2].text}</p>
            </div>
          </div>

          {/* Connector: solid line from step 3 right → down → left → arrow to step 4 */}
          <div className="hidden md:block w-full relative" style={{ height: "60px" }}>
            <svg
              viewBox="0 0 900 60"
              preserveAspectRatio="none"
              className="w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M 830 0 V 30 H 270 V 54"
                fill="none"
                stroke="rgba(255,255,255,0.35)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Downward arrowhead at step 4 */}
              <polygon
                points="270,60 264,48 276,48"
                fill="rgba(255,255,255,0.35)"
              />
            </svg>
          </div>

          <div className="block md:hidden text-white/40 text-lg px-1 rotate-90 sm:rotate-0">➔</div>

          {/* Bottom Row: Steps 4 and 5 — centered under steps 2 & 3 */}
          <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-2">
            
            <div className="w-full sm:w-[30%] bg-white rounded-xl p-5 shadow-xl min-h-[100px] flex items-center justify-center border border-gray-100">
              <p className="text-[#0A2540] text-sm text-center font-medium">{steps[3].num}. {steps[3].text}</p>
            </div>

            <div className="text-white/40 text-lg px-1 rotate-90 sm:rotate-0">➔</div>

            <div className="w-full sm:w-[30%] bg-white rounded-xl p-5 shadow-xl min-h-[100px] flex items-center justify-center border border-gray-100">
              <p className="text-[#0A2540] text-sm text-center font-medium">{steps[4].num}. {steps[4].text}</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
