import React, { useState, useEffect } from "react";

const LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = LINKS.map(link => link.id);
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (e, id) => {
    e.preventDefault();
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="fixed w-full z-50 top-0">
      <div 
        className={`transition-all duration-500 ease-out ${
          scrolled 
            ? 'bg-black/80 backdrop-blur-lg border-b border-white/10 shadow-lg shadow-cyan-500/5' 
            : 'bg-black/40 backdrop-blur-sm border-b border-white/5'
        }`}
      >
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo with gradient animation */}
          <a 
            href="#home" 
            onClick={(e) => handleNav(e, "home")} 
            className="group text-2xl font-display font-bold text-white relative overflow-hidden"
          >
            <span className="relative inline-block">
              <span 
                className="relative z-10 bg-gradient-to-r from-blue-500 via-cyan-400 to-white bg-clip-text text-transparent animate-pulse"
                style={{
                  backgroundSize: '200% 100%',
                  animation: 'gradient-shift 3s ease infinite'
                }}
              >
                A
              </span>
              <span className="relative z-10 group-hover:text-cyan-400 transition-colors duration-300">
                nji
              </span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 group-hover:w-full transition-all duration-500"></span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {LINKS.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={(e) => handleNav(e, l.id)}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 group ${
                  activeSection === l.id 
                    ? 'text-cyan-400' 
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {l.label}
                <span 
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-300 ${
                    activeSection === l.id ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                ></span>
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            aria-label="Toggle menu" 
            onClick={() => setOpen((s) => !s)} 
            className="md:hidden p-2 relative group"
          >
            <div className="flex flex-col gap-1.5 w-6">
              <div 
                className={`h-0.5 bg-white rounded-full transition-all duration-300 origin-left ${
                  open ? 'rotate-45 translate-y-0.5' : ''
                }`}
              ></div>
              <div 
                className={`h-0.5 bg-white rounded-full transition-all duration-300 ${
                  open ? 'opacity-0 translate-x-4' : ''
                }`}
              ></div>
              <div 
                className={`h-0.5 bg-white rounded-full transition-all duration-300 origin-left ${
                  open ? '-rotate-45 -translate-y-0.5' : ''
                }`}
              ></div>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${
            open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-black/95 backdrop-blur-lg border-t border-white/10">
            <div className="flex flex-col px-6 py-4 gap-2">
              {LINKS.map((l, idx) => (
                <a
                  key={l.id}
                  href={`#${l.id}`}
                  onClick={(e) => handleNav(e, l.id)}
                  className={`text-white/90 py-3 px-4 rounded-lg hover:bg-white/5 transition-all duration-300 transform ${
                    activeSection === l.id ? 'bg-white/5 text-cyan-400' : ''
                  }`}
                  style={{
                    animation: open ? `slideIn 0.3s ease-out ${idx * 0.1}s both` : 'none'
                  }}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </header>
  );
}