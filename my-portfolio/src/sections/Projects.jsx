import React, { useEffect, useRef, useState } from 'react';

const projectsData = [
  {
    id: 1,
    label: 'PROJECT 1',
    title: 'Modelling Mobile App Design',
    description:
      "A fashion-forward design system with bold imagery and expressive typography, creating an immersive shopping experience.",
    image:
      'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1200&q=80',
    tags: ['UI/UX', 'Mobile', 'Fashion'],
    cardBg: 'linear-gradient(135deg,#ffe6f0,#ff9ecf)'
  },
  {
    id: 2,
    label: 'PROJECT 2',
    title: 'E-Commerce Mobile App Design',
    description:
      "A clean commerce interface with product-focused screens and clear CTAs for conversion, optimized for seamless shopping.",
    image:
      'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80',
    tags: ['E-Commerce', 'React', 'Design'],
    cardBg: 'linear-gradient(135deg,#e6f4ff,#9ed8ff)'
  },
  {
    id: 3,
    label: 'PROJECT 3',
    title: 'Fitness Mobile App Design',
    description:
      "A motivating fitness dashboard with progress cards, quick actions and friendly colours to keep users engaged.",
    image:
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=80',
    tags: ['Fitness', 'Mobile', 'Health'],
    cardBg: 'linear-gradient(135deg,#dfe6ff,#b0c8ff)'
  }
];

export default function Projects() {
  const refs = useRef([]);
  const [hoveredProject, setHoveredProject] = useState(null);

  useEffect(() => {
    const observers = refs.current.map((el) => {
      if (!el) return null;
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('in-view');
              obs.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12 }
      );
      obs.observe(el);
      return obs;
    });

    return () => observers.forEach((o) => o && o.disconnect());
  }, []);

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-[#030417] via-[#0a0f2e] to-[#030417] relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-blue-500/20 to-cyan-400/20 border border-cyan-400/30 text-cyan-400">
              Portfolio
            </span>
          </div>
          
          <h3 className="text-4xl sm:text-5xl font-display font-bold text-white mb-4">
            Latest{' '}
            <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-white bg-clip-text text-transparent">
              Projects
            </span>
          </h3>
          
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A selection of recent projects showcasing design and development skills across various domains
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-32">
          {projectsData.map((p, idx) => (
            <article
              key={p.id}
              ref={(el) => (refs.current[idx] = el)}
              className={`projects-row flex flex-col lg:flex-row items-center gap-12 ${
                idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
              onMouseEnter={() => setHoveredProject(p.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Content Side */}
              <div className="flex-1 max-w-xl">
                <div 
                  className="inline-block mb-4"
                  style={{ animation: 'fadeInUp 0.8s ease-out 0.2s both' }}
                >
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-blue-500/20 to-cyan-400/20 border border-cyan-400/30 text-cyan-400">
                    {p.label}
                  </span>
                </div>

                <h4 
                  className="text-3xl md:text-4xl font-display font-bold text-white mb-4 leading-tight group-hover:text-cyan-400 transition-colors duration-300"
                  style={{ animation: 'fadeInUp 0.8s ease-out 0.3s both' }}
                >
                  {p.title}
                </h4>

                <p 
                  className="text-gray-300 text-lg mb-6 leading-relaxed"
                  style={{ animation: 'fadeInUp 0.8s ease-out 0.4s both' }}
                >
                  {p.description}
                </p>

                {/* Tags */}
                <div 
                  className="flex flex-wrap gap-2 mb-8"
                  style={{ animation: 'fadeInUp 0.8s ease-out 0.5s both' }}
                >
                  {p.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 rounded-lg text-sm font-medium bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:border-cyan-400/30 hover:text-cyan-400 transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA Button */}
                <div style={{ animation: 'fadeInUp 0.8s ease-out 0.6s both' }}>
                  <a 
                    href="#" 
                    className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50 relative overflow-hidden"
                  >
                    <span className="relative z-10">View Project</span>
                    <svg 
                      className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </a>
                </div>
              </div>

              {/* Image Side with 3D Effect */}
              <div className="flex-1 flex justify-center lg:justify-end">
                <div className="relative project-visual w-[300px] h-[200px] sm:w-[380px] sm:h-[260px] md:w-[500px] md:h-[340px]">
                  {/* Glowing Background */}
                  <div 
                    className="absolute inset-0 rounded-3xl opacity-30 blur-2xl transition-opacity duration-500"
                    style={{
                      background: p.cardBg,
                      opacity: hoveredProject === p.id ? 0.5 : 0.3
                    }}
                  ></div>

                  {/* Outer Frame with Gradient Border */}
                  <div
                    className="absolute -left-8 -top-8 w-full h-full rounded-2xl project-frame-outer"
                    style={{
                      borderStyle: 'solid',
                      borderWidth: '3px',
                      borderImageSource: 'linear-gradient(135deg, #0015ff, #00c8ff)',
                      borderImageSlice: 1,
                      transform: hoveredProject === p.id ? 'translate(24px, 24px) scale(1.02)' : 'translate(32px, 32px)',
                      transition: 'all 0.5s cubic-bezier(0.2, 0.9, 0.2, 1)'
                    }}
                  />

                  {/* Inner Decorative Frame */}
                  <div
                    className="absolute -left-5 -top-5 w-full h-full rounded-xl project-frame-inner"
                    style={{
                      borderStyle: 'solid',
                      borderWidth: '2px',
                      borderImageSource: 'linear-gradient(135deg, #00c8ff, #ffffff)',
                      borderImageSlice: 1,
                      transform: hoveredProject === p.id ? 'translate(12px, 12px) scale(1.01)' : 'translate(16px, 16px)',
                      transition: 'all 0.5s cubic-bezier(0.2, 0.9, 0.2, 1)'
                    }}
                  />

                  {/* Colored Background Card */}
                  <div
                    className="absolute -left-2 -top-2 w-full h-full rounded-xl project-inner-card"
                    style={{ 
                      background: p.cardBg,
                      transform: hoveredProject === p.id ? 'translate(6px, 6px)' : 'translate(8px, 8px)',
                      transition: 'all 0.5s cubic-bezier(0.2, 0.9, 0.2, 1)'
                    }}
                  />

                  {/* Main Image Card */}
                  <div 
                    className="relative w-full h-full rounded-xl overflow-hidden project-image-card shadow-2xl"
                    style={{
                      transform: hoveredProject === p.id ? 'translateY(-12px) scale(1.05)' : 'translateY(0) scale(1)',
                      transition: 'all 0.5s cubic-bezier(0.2, 0.9, 0.2, 1)'
                    }}
                  >
                    <img 
                      src={p.image} 
                      alt={p.title} 
                      className="w-full h-full object-cover"
                      style={{
                        transform: hoveredProject === p.id ? 'scale(1.1)' : 'scale(1)',
                        transition: 'transform 0.7s ease-out'
                      }}
                    />
                    
                    {/* Gradient Overlay */}
                    <div 
                      className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
                      style={{
                        opacity: hoveredProject === p.id ? 1 : 0.5,
                        transition: 'opacity 0.5s ease'
                      }}
                    ></div>

                    {/* Shine Effect */}
                    <div 
                      className="absolute inset-0 opacity-0"
                      style={{
                        background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.3), transparent 70%)',
                        backgroundSize: '200% 200%',
                        opacity: hoveredProject === p.id ? 1 : 0,
                        animation: hoveredProject === p.id ? 'shine 1.5s ease-in-out' : 'none',
                        transition: 'opacity 0.3s ease'
                      }}
                    ></div>

                    {/* Corner Accent */}
                    <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-cyan-400 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-cyan-400 rounded-bl-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  {/* Floating Icons/Badges */}
                  {hoveredProject === p.id && (
                    <>
                      <div 
                        className="absolute -top-4 -right-4 w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/50"
                        style={{ animation: 'fadeInScale 0.4s ease-out' }}
                      >
                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className="text-center mt-20">
          <a 
            href="#"
            className="group inline-flex items-center gap-2 px-8 py-4 border-2 border-cyan-400/50 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400/10 transition-all duration-300 hover:scale-105 hover:border-cyan-400"
          >
            <span>View All Projects</span>
            <svg 
              className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>

      <style>{`
        @keyframes shine {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
}