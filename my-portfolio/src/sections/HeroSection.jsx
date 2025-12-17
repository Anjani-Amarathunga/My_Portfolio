import profile from '../assets/images/profile.jpg';
import React, { useEffect, useState } from 'react';

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-[#030417] via-[#050720] to-[#030417] overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div 
          className="absolute top-20 left-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"
          style={{
            animation: 'float 8s ease-in-out infinite',
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
          }}
        ></div>
        <div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl animate-pulse"
          style={{
            animation: 'float 10s ease-in-out infinite reverse',
            transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`
          }}
        ></div>
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0, 200, 255, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0, 200, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div 
            className={`flex-1 max-w-2xl transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="inline-block mb-4">
              <span 
                className="px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-blue-500/20 to-cyan-400/20 border border-cyan-400/30 text-cyan-400"
                style={{ animation: 'fadeInDown 0.8s ease-out 0.2s both' }}
              >
                👋 Welcome to my portfolio
              </span>
            </div>

            <h1 
              className="text-5xl sm:text-6xl md:text-7xl font-display font-bold text-white mb-6 leading-tight"
              style={{ animation: 'fadeInUp 0.8s ease-out 0.4s both' }}
            >
              Hi, I'm{' '}
              <span 
                className="bg-gradient-to-r from-blue-500 via-cyan-400 to-white bg-clip-text text-transparent animate-gradient"
                style={{
                  backgroundSize: '200% auto',
                  animation: 'gradient-shift 3s ease infinite, fadeInUp 0.8s ease-out 0.4s both'
                }}
              >
                Anjani Amarathunga
              </span>
            </h1>

            <p 
              className="text-xl text-gray-300 mb-8 leading-relaxed"
              style={{ animation: 'fadeInUp 0.8s ease-out 0.6s both' }}
            >
              Full-Stack Developer & UI/UX Designer crafting beautiful, functional experiences 
              that blend creativity with cutting-edge technology.
            </p>

            <div 
              className="flex flex-wrap gap-4"
              style={{ animation: 'fadeInUp 0.8s ease-out 0.8s both' }}
            >
              <a 
                href="#projects"
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50"
              >
                <span className="relative z-10">View My Work</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              
              <a 
                href="#contact"
                className="group px-8 py-4 border-2 border-cyan-400/50 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400/10 transition-all duration-300 hover:scale-105 hover:border-cyan-400"
              >
                Get In Touch
              </a>
            </div>

            {/* Social Links 
            <div 
              className="flex gap-4 mt-8"
              style={{ animation: 'fadeInUp 0.8s ease-out 1s both' }}
            >
              {[
                { name: 'GitHub', icon: 'M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z' },
                { name: 'LinkedIn', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
                { name: 'Instagram', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z' }
              ].map((social, idx) => (
                <a
                  key={social.name}
                  href="#"
                  className="w-11 h-11 rounded-full border border-cyan-400/30 flex items-center justify-center text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300 hover:scale-110"
                  aria-label={social.name}
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>*/}
          </div>

          {/* Right: Animated Profile Photo */}
          <div 
            className={`flex-1 flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="relative w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] lg:w-[480px] lg:h-[480px]">
              {/* Rotating Ring 1 */}
              <div 
                className="absolute inset-0 rounded-full border-2 border-blue-500/30"
                style={{
                  animation: 'spin 20s linear infinite',
                  transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`
                }}
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-blue-500 rounded-full shadow-lg shadow-blue-500/50"></div>
              </div>

              {/* Rotating Ring 2 */}
              <div 
                className="absolute inset-4 rounded-full border-2 border-cyan-400/30"
                style={{
                  animation: 'spin 15s linear infinite reverse',
                  transform: `translate(${-mousePosition.x * 0.3}px, ${-mousePosition.y * 0.3}px)`
                }}
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50"></div>
              </div>

              {/* Gradient Background Glow */}
              <div 
                className="absolute inset-8 rounded-full bg-gradient-to-br from-blue-500/30 via-cyan-400/30 to-purple-500/30 blur-2xl"
                style={{ animation: 'pulse 4s ease-in-out infinite' }}
              ></div>

              {/* Main Photo Container */}
              <div 
                className="absolute inset-12 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl shadow-cyan-500/20 group"
                style={{
                  animation: 'float 6s ease-in-out infinite',
                  transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)`
                }}
              >
                {/* Replace with your actual profile image */}
                <div className="w-full h-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white text-6xl font-bold group-hover:scale-110 transition-transform duration-500">
                  <img 
                    src={profile} 
                    alt="Profile" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Floating Particles */}
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-60"
                  style={{
                    left: `${20 + i * 15}%`,
                    top: `${10 + i * 20}%`,
                    animation: `float ${3 + i}s ease-in-out infinite`,
                    animationDelay: `${i * 0.5}s`
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        style={{ animation: 'bounce 2s infinite' }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-cyan-400/50 flex justify-center p-2">
          <div className="w-1 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes bounce {
          0%, 100% {
            transform: translateX(-50%) translateY(0);
          }
          50% {
            transform: translateX(-50%) translateY(-10px);
          }
        }
      `}</style>
    </section>
  );
}