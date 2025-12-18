import profile from '../assets/images/profile2.jpg';
import React, { useEffect, useRef, useState } from 'react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-[#030417] via-[#0a0f2e] to-[#030417] relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left: Animated Image with Decorative Frames */}
          <div 
            className={`flex-1 flex justify-center lg:justify-start transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="relative w-[320px] sm:w-[380px] md:w-[460px] group">
              {/* Outer Glowing Frame */}
              <div
                className="absolute -left-8 -top-8 w-full h-full rounded-3xl"
                style={{
                  background: 'linear-gradient(135deg, rgba(0,21,255,0.3), rgba(0,200,255,0.3))',
                  animation: 'pulse 3s ease-in-out infinite',
                  filter: 'blur(20px)'
                }}
              ></div>

              {/* Animated Border Frame */}
              <div
                className="absolute -left-6 -top-6 w-full h-full rounded-2xl overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #0015ff, #00c8ff)',
                  padding: '3px'
                }}
              >
                <div className="w-full h-full bg-[#030417] rounded-2xl"></div>
              </div>

              {/* Middle Decorative Card */}
              <div
                className="absolute -left-3 -top-3 w-full h-full rounded-xl"
                style={{
                  background: 'linear-gradient(135deg, rgba(0,21,255,0.2), rgba(0,200,255,0.2))',
                  transform: isVisible ? 'translate(0, 0)' : 'translate(-20px, -20px)',
                  transition: 'transform 1s ease-out 0.3s'
                }}
              ></div>

              {/* Main Image Container */}
              <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden shadow-2xl shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all duration-500">
                {/* Replace with your actual profile image */}
                <img 
                  src={profile} 
                  alt="Anjani Amarathunga" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-500/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Animated Border Shine */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: 'linear-gradient(45deg, transparent 30%, rgba(0,200,255,0.3), transparent 70%)',
                    backgroundSize: '200% 200%',
                    animation: 'shine 2s ease-in-out infinite'
                  }}
                ></div>
              </div>

              {/* Floating Badge */}
              <div 
                className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-6 py-3 rounded-full shadow-lg shadow-cyan-500/30 font-semibold text-sm group-hover:scale-110 transition-transform duration-300"
                style={{
                  animation: isVisible ? 'fadeInUp 0.8s ease-out 0.8s both' : 'none'
                }}
              >
                ⚡ Available for Work
              </div>
            </div>
          </div>

          {/* Right: Content with Staggered Animations */}
          <div 
            className={`flex-1 max-w-xl transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            {/* Section Tag */}
            <div 
              className="inline-block mb-4"
              style={{ animation: isVisible ? 'fadeInUp 0.8s ease-out 0.4s both' : 'none' }}
            >
              <span className="px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-blue-500/20 to-cyan-400/20 border border-cyan-400/30 text-cyan-400">
                Get To Know Me
              </span>
            </div>

            <h2 
              className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight"
              style={{ animation: isVisible ? 'fadeInUp 0.8s ease-out 0.6s both' : 'none' }}
            >
              About{' '}
              <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-white bg-clip-text text-transparent">
                Me
              </span>
            </h2>

            <div 
              className="space-y-4 text-gray-300 leading-relaxed"
              style={{ animation: isVisible ? 'fadeInUp 0.8s ease-out 0.8s both' : 'none' }}
            >
              <p>
                I'm an <span className="text-cyan-400 font-semibold">Information Technology</span> undergraduate with a strong interest in building practical, user-focused digital solutions. I enjoy developing web and mobile applications using technologies such as <span className="text-white">React</span>, <span className="text-white">Flutter</span>, <span className="text-white">Spring Boot</span>, and <span className="text-white">MySQL</span>, with a focus on clean architecture and real-world usability. 
              </p>
              
              <p>
                I’m passionate about problem-solving, continuous learning, and transforming ideas into functional systems that deliver value. From full-stack applications to smart system integrations, I enjoy taking on challenges that help me grow both technically and creatively.
              </p>

              <p>
                Beyond coding, I like exploring new technologies, improving UI/UX design skills, and working on projects that push my limits and expand my understanding of modern software development.
              </p>
            </div>

            {/* Stats */}
            <div 
              className="grid grid-cols-3 gap-6 my-8"
              style={{ animation: isVisible ? 'fadeInUp 0.8s ease-out 1s both' : 'none' }}
            >
              {[
                { number: '5+', label: 'Projects' },
                { number: '1+', label: 'Years Exp' },
                { number: '10+', label: 'Skills' }
              ].map((stat, idx) => (
                <div 
                  key={idx}
                  className="text-center p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-400/30 transition-all duration-300 group"
                >
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300 inline-block">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div 
              className="flex flex-wrap gap-4"
              style={{ animation: isVisible ? 'fadeInUp 0.8s ease-out 1.2s both' : 'none' }}
            >
              <a 
                href="#contact"
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50"
              >
                <span className="relative z-10">Hire Me</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              
              <a 
                href="https://drive.google.com/file/d/12Q0tjaJxoNueYvvAdabccYRGJzUOqj98/view?usp=drive_link"
                className="group px-8 py-4 border-2 border-cyan-400/50 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400/10 transition-all duration-300 hover:scale-105 hover:border-cyan-400 flex items-center gap-2"
              >
                <span>Download Resume</span>
                <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
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
        
        @keyframes shine {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </section>
  );
}