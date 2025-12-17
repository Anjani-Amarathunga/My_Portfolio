import React, { useEffect, useRef, useState } from "react";

const SKILLS = [
  { id: "css", name: "CSS3", url: "https://developer.mozilla.org/en-US/docs/Web/CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", color: "from-blue-400 to-blue-600" },
  { id: "flutter", name: "Flutter", url: "https://flutter.dev/", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg", color: "from-cyan-400 to-blue-500" },
  { id: "spring", name: "Spring Boot", url: "https://spring.io/projects/spring-boot", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg", color: "from-green-400 to-emerald-600" },
  { id: "sql", name: "SQL", url: "https://www.mysql.com/", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", color: "from-orange-400 to-yellow-500" },
  { id: "mongodb", name: "MongoDB", url: "https://www.mongodb.com/", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", color: "from-green-500 to-emerald-600" },
  { id: "react", name: "React.JS", url: "https://reactjs.org/", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", color: "from-cyan-400 to-blue-500" },
  { id: "html", name: "HTML", url: "https://developer.mozilla.org/en-US/docs/Web/HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", color: "from-orange-500 to-red-500" },
  { id: "java", name: "Java", url: "https://www.oracle.com/java/", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", color: "from-red-500 to-orange-600" },
  { id: "js", name: "Javascript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", color: "from-yellow-400 to-yellow-600" },
  { id: "node", name: "Node.JS", url: "https://nodejs.org/", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", color: "from-green-500 to-green-700" },
  { id: "python", name: "Python", url: "https://www.python.org/", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", color: "from-blue-400 to-yellow-500" },
];

export default function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState(null);
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
      id="skills" 
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-[#030417] via-[#0a0f2e] to-[#030417] text-white relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        {/* Header */}
        <div 
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-block mb-4">
            <span className="px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-blue-500/20 to-cyan-400/20 border border-cyan-400/30 text-cyan-400">
              Technologies
            </span>
          </div>
          
          <h3 className="text-4xl sm:text-5xl font-display font-bold mb-4">
            My{' '}
            <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-white bg-clip-text text-transparent">
              Skills
            </span>
          </h3>
          
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A diverse toolkit of modern technologies and frameworks I use to bring ideas to life
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 md:gap-10 mt-16">
          {SKILLS.map((s, idx) => (
            <div
              key={s.id}
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                transitionDelay: `${idx * 0.1}s`,
                animation: isVisible ? `floatIn 0.8s ease-out ${idx * 0.1}s both` : 'none'
              }}
              onMouseEnter={() => setHoveredSkill(s.id)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className="flex flex-col items-center gap-4 group">
                {/* Skill Icon Container */}
                <div className="relative">
                  {/* Outer Glow Ring */}
                  <div 
                    className={`absolute inset-0 rounded-full bg-gradient-to-r ${s.color} opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500 scale-150`}
                  ></div>
                  
                  {/* Rotating Border */}
                  <div 
                    className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(45deg, transparent 30%, rgba(0,200,255,0.5), transparent 70%)`,
                      animation: hoveredSkill === s.id ? 'spin 2s linear infinite' : 'none'
                    }}
                  ></div>

                  {/* Main Icon Circle */}
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={s.name}
                    className="relative block w-28 h-28 rounded-full flex items-center justify-center bg-gradient-to-br from-[#0e1624] to-[#1a2332] border-2 border-white/10 group-hover:border-cyan-400/50 transition-all duration-500 group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-cyan-500/30 overflow-hidden"
                    aria-label={s.name}
                  >
                    {/* Inner Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${s.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                    
                    {/* Icon Image */}
                    <img 
                      src={s.logo} 
                      alt={s.name} 
                      className="relative z-10 w-14 h-14 object-contain group-hover:scale-110 transition-transform duration-500 filter drop-shadow-lg" 
                    />
                  </a>
                </div>

                {/* Skill Name */}
                <div className="relative">
                  <div className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                    {s.name}
                  </div>
                  
                  {/* Animated Underline */}
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 group-hover:w-full transition-all duration-500"></div>
                </div>

                {/* Proficiency Dots */}
                <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {[...Array(5)].map((_, i) => (
                    <div 
                      key={i}
                      className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"
                      style={{
                        animation: hoveredSkill === s.id ? `dotPulse 0.6s ease-out ${i * 0.1}s both` : 'none'
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div 
          className={`mt-16 transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-gray-400 mb-6">
            Want to see these skills in action?
          </p>
          <a 
            href="#projects"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50"
          >
            <span>View My Projects</span>
            <svg 
              className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>

      <style>{`
        @keyframes floatIn {
          0% {
            opacity: 0;
            transform: translateY(30px) scale(0.9);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes dotPulse {
          0% {
            transform: scale(0);
            opacity: 0;
          }
          50% {
            transform: scale(1.3);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
}