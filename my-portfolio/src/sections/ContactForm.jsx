import React, { useState, useRef, useEffect } from 'react';

export default function ContactForm() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');
    const [focusedField, setFocusedField] = useState(null);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('in-view');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((s) => ({ ...s, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('Message sent — thank you!');
        setTimeout(() => setStatus(''), 4000);
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section 
            id="contact" 
            ref={sectionRef}
            className="py-20 bg-gradient-to-b from-[#030417] via-[#0a0f2e] to-[#030417] relative overflow-hidden"
        >
            {/* Background Decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 -right-20 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/3 to-cyan-400/3 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <div 
                        className="inline-block mb-4"
                        style={{ animation: 'fadeInUp 0.8s ease-out 0.1s both' }}
                    >
                        <span className="px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-blue-500/20 to-cyan-400/20 border border-cyan-400/30 text-cyan-400">
                            Get In Touch
                        </span>
                    </div>
                    
                    <h2 
                        className="text-4xl sm:text-5xl font-display font-bold text-white mb-4"
                        style={{ animation: 'fadeInUp 0.8s ease-out 0.2s both' }}
                    >
                        Let's Work{' '}
                        <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-white bg-clip-text text-transparent">
                            Together
                        </span>
                    </h2>
                    
                    <p 
                        className="text-gray-400 text-lg max-w-2xl mx-auto"
                        style={{ animation: 'fadeInUp 0.8s ease-out 0.3s both' }}
                    >
                        Drop me a message and let's create something amazing. I'll get back to you within 24 hours.
                    </p>
                </div>

                {/* Form Container with 3D Effect */}
                <div 
                    className="relative"
                    style={{ animation: 'fadeInUp 0.8s ease-out 0.4s both' }}
                >
                    {/* Glowing Background */}
                    <div 
                        className="absolute inset-0 rounded-3xl opacity-20 blur-2xl transition-opacity duration-500"
                        style={{
                            background: 'linear-gradient(135deg, #0015ff, #00c8ff)',
                            opacity: focusedField ? 0.3 : 0.2
                        }}
                    ></div>

                    {/* Decorative Frame */}
                    <div
                        className="absolute -left-4 -top-4 w-full h-full rounded-2xl pointer-events-none"
                        style={{
                            borderStyle: 'solid',
                            borderWidth: '2px',
                            borderImageSource: 'linear-gradient(135deg, #0015ff, #00c8ff)',
                            borderImageSlice: 1,
                            opacity: focusedField ? 0.6 : 0.3,
                            transition: 'all 0.5s ease'
                        }}
                    />

                    {/* Main Form Card */}
                    <div className="relative bg-gradient-to-br from-[#0b1220] to-[#0a0f2e] rounded-2xl p-8 md:p-12 shadow-2xl border border-white/10 backdrop-blur-sm">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Name Field */}
                            <div className="group">
                                <label 
                                    htmlFor="name" 
                                    className="block text-sm font-medium text-gray-300 mb-2 transition-colors duration-300 group-focus-within:text-cyan-400"
                                >
                                    Your Name
                                </label>
                                <div className="relative">
                                    <input
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        onFocus={() => setFocusedField('name')}
                                        onBlur={() => setFocusedField(null)}
                                        required
                                        placeholder="John Doe"
                                        className="w-full rounded-xl bg-[#0e1624]/50 border border-white/10 px-4 py-3.5 placeholder:text-gray-500 text-white focus:outline-none focus:border-cyan-400/50 focus:bg-[#0e1624] transition-all duration-300 hover:border-white/20"
                                    />
                                    {focusedField === 'name' && (
                                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-400/10 pointer-events-none"></div>
                                    )}
                                </div>
                            </div>

                            {/* Email Field */}
                            <div className="group">
                                <label 
                                    htmlFor="email" 
                                    className="block text-sm font-medium text-gray-300 mb-2 transition-colors duration-300 group-focus-within:text-cyan-400"
                                >
                                    Your Email
                                </label>
                                <div className="relative">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        onFocus={() => setFocusedField('email')}
                                        onBlur={() => setFocusedField(null)}
                                        required
                                        placeholder="john@example.com"
                                        className="w-full rounded-xl bg-[#0e1624]/50 border border-white/10 px-4 py-3.5 placeholder:text-gray-500 text-white focus:outline-none focus:border-cyan-400/50 focus:bg-[#0e1624] transition-all duration-300 hover:border-white/20"
                                    />
                                    {focusedField === 'email' && (
                                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-400/10 pointer-events-none"></div>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Message Field */}
                        <div className="mt-6 group">
                            <label 
                                htmlFor="message" 
                                className="block text-sm font-medium text-gray-300 mb-2 transition-colors duration-300 group-focus-within:text-cyan-400"
                            >
                                Your Message
                            </label>
                            <div className="relative">
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    onFocus={() => setFocusedField('message')}
                                    onBlur={() => setFocusedField(null)}
                                    required
                                    placeholder="Tell me about your project..."
                                    rows="6"
                                    className="w-full rounded-xl bg-[#0e1624]/50 border border-white/10 px-4 py-4 placeholder:text-gray-500 text-white focus:outline-none focus:border-cyan-400/50 focus:bg-[#0e1624] transition-all duration-300 resize-none hover:border-white/20"
                                />
                                {focusedField === 'message' && (
                                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-400/10 pointer-events-none"></div>
                                )}
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            onClick={handleSubmit}
                            className="group mt-8 w-full py-4 rounded-xl text-white font-semibold bg-gradient-to-r from-blue-500 to-cyan-400 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-[1.02] relative overflow-hidden"
                        >
                            <span className="relative z-10 flex items-center justify-center gap-2">
                                Send Message
                                <svg 
                                    className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
                                    fill="none" 
                                    viewBox="0 0 24 24" 
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </button>

                        {/* Status Message */}
                        {status && (
                            <div 
                                className="mt-6 p-4 rounded-xl bg-gradient-to-r from-green-500/10 to-cyan-400/10 border border-green-400/30 text-center"
                                style={{ animation: 'fadeInScale 0.4s ease-out' }}
                            >
                                <p className="text-green-400 font-medium flex items-center justify-center gap-2">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    {status}
                                </p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Contact Info */}
                <div 
                    className="mt-12 text-center space-y-6"
                    style={{ animation: 'fadeInUp 0.8s ease-out 0.5s both' }}
                >
                    {/* Email */}
                    <div className="inline-flex items-center gap-3 px-6 py-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-cyan-400/30 transition-all duration-300 group">
                        <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <a
                            href="mailto:anjani01amarathunga@gmail.com"
                            className="text-gray-300 group-hover:text-cyan-400 transition-colors duration-300"
                        >
                            anjani01amarathunga@gmail.com
                        </a>
                    </div>

                    {/* Social Links 
                    <div className="flex items-center justify-center gap-4 mt-8">
                        {[
                            { icon: 'github', href: '#' },
                            { icon: 'linkedin', href: '#' },
                            { icon: 'twitter', href: '#' }
                        ].map((social, idx) => (
                            <a
                                key={idx}
                                href={social.href}
                                className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-400 hover:text-white hover:border-transparent transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/50"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                                </svg>
                            </a>
                        ))}
                    </div>*/}
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
                
                @keyframes fadeInScale {
                    from {
                        opacity: 0;
                        transform: scale(0.95);
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