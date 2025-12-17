import React from "react";

const SocialButton = ({ href, aria, children }) => (
  <a
    href={href}
    aria-label={aria}
    className="group relative w-12 h-12 rounded-full border-2 border-cyan-400/30 flex items-center justify-center text-cyan-400 hover:border-cyan-400 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-400/30 overflow-hidden"
    target="_blank"
    rel="noreferrer"
  >
    <span className="relative z-10 transition-transform duration-300 group-hover:scale-110">
      {children}
    </span>
    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
  </a>
);

const FooterLink = ({ href, children }) => (
  <a
    href={href}
    className="group relative text-gray-400 hover:text-white transition-colors duration-300 inline-block"
  >
    <span>{children}</span>
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
  </a>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-[#030417] to-[#0a0f2e] text-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h2
              className="font-display font-bold text-3xl mb-3"
              style={{
                backgroundImage: "linear-gradient(90deg, #0015ff, #00c8ff, #ffffff)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                backgroundSize: "200% auto",
                animation: "gradient-shift 3s ease infinite"
              }}
            >
              Anjani Amarathunga
            </h2>
            <p className="text-sm text-gray-400 mb-6">
              Full-Stack Developer & UI/UX Designer
            </p>
            <p className="text-xs text-gray-500 leading-relaxed max-w-xs mx-auto md:mx-0">
              Creating beautiful, functional digital experiences that blend creativity with cutting-edge technology.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4 text-cyan-400">Quick Links</h3>
            <nav className="flex flex-col gap-3">
              <FooterLink href="#home">Home</FooterLink>
              <FooterLink href="#about">About</FooterLink>
              <FooterLink href="#projects">Projects</FooterLink>
              <FooterLink href="#skills">Skills</FooterLink>
              <FooterLink href="#contact">Contact</FooterLink>
            </nav>
          </div>

          {/* Connect Section */}
          <div className="text-center md:text-right">
            <h3 className="text-lg font-semibold mb-4 text-cyan-400">Connect With Me</h3>
            <div className="flex items-center justify-center md:justify-end gap-4 mb-6">
              <SocialButton 
                href="https://www.linkedin.com/in/anjani-amarathunga-b37835298?utm_source=share_via&utm_content=profile&utm_medium=member_android" 
                aria="LinkedIn"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v14H0V8zm7 0h4.78v2.08h.07c.67-1.27 2.31-2.62 4.76-2.62C22.7 7.46 24 10.03 24 13.92V22H19V14.7c0-1.74-.03-3.99-2.43-3.99-2.44 0-2.81 1.9-2.81 3.86V22H7V8z" />
                </svg>
              </SocialButton>

              <SocialButton 
                href="https://github.com/Anjani-Amarathunga" 
                aria="GitHub"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 .5C5.73.5.78 5.45.78 11.72c0 4.85 3.14 8.96 7.5 10.42.55.1.75-.24.75-.53v-1.9c-3.05.66-3.69-1.17-3.69-1.17-.5-1.27-1.22-1.61-1.22-1.61-.99-.67.07-.66.07-.66 1.1.08 1.68 1.12 1.68 1.12.97 1.67 2.54 1.19 3.16.91.1-.71.38-1.19.69-1.46-2.43-.28-4.98-1.22-4.98-5.43 0-1.2.43-2.17 1.12-2.94-.11-.28-.49-1.4.11-2.92 0 0 .91-.29 2.98 1.12a10.39 10.39 0 012.72-.37c.92 0 1.85.12 2.72.35 2.06-1.42 2.97-1.12 2.97-1.12.6 1.52.22 2.64.11 2.92.7.77 1.12 1.74 1.12 2.94 0 4.22-2.56 5.14-5 5.41.39.34.74 1.01.74 2.04v3.02c0 .29.2.64.76.53 4.36-1.46 7.5-5.57 7.5-10.42C23.22 5.45 18.27.5 12 .5z" />
                </svg>
              </SocialButton>

              <SocialButton 
                href="https://www.instagram.com/anji_811_?igsh=MTM1N21wczdkb21sMg==" 
                aria="Instagram"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 5.5A4.5 4.5 0 1016.5 12 4.5 4.5 0 0012 7.5zm6.6-.9a1.1 1.1 0 11-1.1-1.1 1.1 1.1 0 011.1 1.1z" />
                </svg>
              </SocialButton>

              <SocialButton 
                href="#contact" 
                aria="Email"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </SocialButton>
            </div>
            
            {/* Email 
            <a 
              href="mailto:anjani01amarathunga@gmail.com"
              className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-300"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              anjani01amarathunga@gmail.com
            </a>*/}
          </div>
        </div>

        {/* Divider with Gradient */}
        <div className="relative mb-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/10"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="px-4 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent">
              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p className="text-center md:text-left">
            © {currentYear} Anjani Amarathunga. All Rights Reserved.
          </p>
          
          <div className="flex gap-6">
            <a href="#" className="hover:text-cyan-400 transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-cyan-400 transition-colors duration-300">Terms of Service</a>
          </div>
        </div>

        {/* Made with love */}
        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500 flex items-center justify-center gap-2">
            <span>Made with</span>
            <svg className="w-4 h-4 text-red-500 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
            <span>and lots of</span>
            <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </p>
        </div>
      </div>

      <style>{`
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </footer>
  );
}