import { useState, useEffect } from "react";
import ServixLogo from "../assets/Servix Logo2.png";

export default function Navbar({ onLoginClick, loggedIn, onProfileClick, showProfile, onNavClick }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const navLinks = [
    { label: "Home", id: "home" },
    { label: "About Us", id: "about" },
    { label: "Process", id: "process" },
    { label: "Benefit", id: "benefit" },
    { label: "Contacts Us", id: "contact" },
  ];

  const scrollTo = (id) => {
    if (showProfile) {
      // If on ProfilePage, close it first, then scroll to section
      onNavClick();
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      // Normal scroll behavior
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#021841]/95 backdrop-blur-md border-b border-white/5 shadow-lg" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button onClick={() => scrollTo("home")} className="flex items-center gap-2.5 cursor-pointer">
            <img src={ServixLogo} alt="Servix" className="h-8 w-auto" />
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-white/80 hover:text-white text-sm font-medium transition-colors duration-200 cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {loggedIn ? (
              <button
                onClick={onProfileClick}
                className="w-10 h-10 rounded-full bg-[#002974] border-2 border-[#FFC301] flex items-center justify-center hover:border-white transition-colors"
              >
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
                </svg>
              </button>
            ) : (
              <button
                onClick={onLoginClick}
                className="hidden md:block bg-white px-6 py-2 border border-white/40 text-[#021841] text-sm font-medium rounded-lg hover:bg-cyan-400 hover:border-white/70 transition-all duration-200 cursor-pointer"
              >
                Login
              </button>
            )}

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-1 text-white"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                {menuOpen
                  ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
                  : <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>
                }
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#021841]/98 backdrop-blur-md border-b border-white/5">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map(link => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="block w-full text-left px-3 py-3 text-white/80 hover:text-white text-sm font-medium border-b border-white/5 last:border-0 transition-colors"
              >
                {link.label}
              </button>
            ))}
            {!loggedIn && (
              <button
                onClick={() => { onLoginClick(); setMenuOpen(false); }}
                className="w-full mt-2 py-2.5 border border-white/40 text-white text-sm font-medium rounded-lg hover:bg-white/10 transition-all"
              >
                Login
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
