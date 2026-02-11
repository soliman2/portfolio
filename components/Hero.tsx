import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Hero: React.FC = () => {
    // State for capability line animation
    const [currentCapabilityIndex, setCurrentCapabilityIndex] = useState(0);

    const capabilities = [
        'AI-powered solutions',
        'Design systems',
        'UX research',
        'Bilingual (Arabic / English)'
    ];

    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const fadeUpVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const badgeItemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                delay: i * 0.15,
                ease: "easeOut"
            }
        })
    };

    const capabilityItemVariants = {
        enter: { opacity: 0, y: 10 },
        center: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        },
        exit: {
            opacity: 0,
            y: -10,
            transition: { duration: 0.3, ease: "easeIn" }
        }
    };

    // Sequential capability animation logic
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentCapabilityIndex((prev) => (prev + 1) % capabilities.length);
        }, 2800); // 2.8 seconds per item (reveal + pause + fade out)

        return () => clearInterval(interval);
    }, [capabilities.length]);

    return (
        <section className="relative min-h-screen w-full flex items-center justify-center font-inter overflow-hidden pt-24 pb-12 md:pt-32 md:pb-16">
            {/* Background Gradient */}
            <div
                className="absolute inset-0 pointer-events-none z-0"
                style={{
                    background: `
            radial-gradient(ellipse 80% 60% at 90% 10%, rgba(125, 211, 232, 0.6) 0%, transparent 50%),
            radial-gradient(ellipse 100% 50% at 50% 100%, rgba(125, 211, 232, 0.5) 0%, transparent 40%),
            radial-gradient(ellipse 60% 50% at 10% 40%, rgba(240, 198, 212, 0.5) 0%, transparent 50%),
            linear-gradient(180deg, #FDFBF9 0%, #F8F9FA 100%)
          `
                }}
            />

            {/* Background Pattern */}
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.03] z-0"
                style={{
                    backgroundImage: 'radial-gradient(#4169E1 1.5px, transparent 1.5px)',
                    backgroundSize: '40px 40px'
                }}
            />

            {/* Main Content Container */}
            <div className="relative z-20 w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col space-y-10 md:space-y-16 h-full"
                >
                    {/* Hero Grid: Content Left, Image Right */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-stretch">

                        {/* Left Side: Content Block */}
                        <div className="flex flex-col justify-center items-start text-left space-y-4 order-2 lg:order-1">
                            {/* Glass Badge - Sr. Product Designer */}
                            <motion.div variants={fadeUpVariants}>
                                <span
                                    className="inline-block px-4 py-1.5 text-xs md:text-sm font-semibold"
                                    style={{
                                        background: 'rgba(255, 255, 255, 0.45)',
                                        backdropFilter: 'blur(12px)',
                                        WebkitBackdropFilter: 'blur(12px)',
                                        border: '1px solid rgba(255, 255, 255, 0.5)',
                                        borderRadius: '999px',
                                        color: '#1A2332',
                                        letterSpacing: '0.3px',
                                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)'
                                    }}
                                >
                                    Sr. Product Designer • AI • Service Design
                                </span >
                            </motion.div>

                            {/* Headline */}
                            <motion.h1 variants={fadeUpVariants} className="space-y-2">
                                <span className="block text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1D23] leading-tight font-display">
                                    Hey, I'm Soliman
                                </span>
                                <span className="block text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1D23] leading-tight font-display">
                                    I design with{' '}
                                    <span
                                        className="font-bold"
                                        style={{
                                            background: 'linear-gradient(135deg, #1e40af 0%, #4f46e5 50%, #7c3aed 100%)',
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent',
                                            backgroundClip: 'text'
                                        }}
                                    >
                                        GenAI
                                    </span>
                                </span>
                            </motion.h1>

                            {/* Description */}
                            <motion.p variants={fadeUpVariants} className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-xl font-inter">
                                Building bilingual design systems that power Dubai's AI-driven government transformation.
                            </motion.p>

                            {/* Capability Ticker */}
                            <motion.div
                                variants={fadeUpVariants}
                                className="flex items-center min-h-[28px]"
                            >
                                <AnimatePresence mode="wait">
                                    <motion.span
                                        key={currentCapabilityIndex}
                                        variants={capabilityItemVariants}
                                        initial="enter"
                                        animate="center"
                                        exit="exit"
                                        className="font-bold text-xl md:text-2xl"
                                        style={{
                                            background: 'linear-gradient(135deg, #1e40af 0%, #4f46e5 50%, #7c3aed 100%)',
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent',
                                            backgroundClip: 'text'
                                        }}
                                    >
                                        {capabilities[currentCapabilityIndex]}
                                    </motion.span>
                                </AnimatePresence>
                            </motion.div>

                            {/* CTA Button */}
                            <motion.div variants={fadeUpVariants} className="pt-4">
                                <a
                                    href="/soliman-shaban-cv.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full font-bold text-base text-[#1A1D23] transition-all hover:shadow-2xl hover:shadow-blue-200 active:scale-95 group"
                                    style={{
                                        background: 'white',
                                        border: '2px solid transparent',
                                        backgroundImage: 'linear-gradient(white, white), linear-gradient(135deg, #1e40af 0%, #4f46e5 50%, #7c3aed 100%)',
                                        backgroundOrigin: 'border-box',
                                        backgroundClip: 'padding-box, border-box',
                                    }}
                                >
                                    Download My CV <span className="group-hover:translate-y-1 transition-transform">↓</span>
                                </a>
                            </motion.div>
                        </div>

                        {/* Right Side: Image with matching height */}
                        <motion.div
                            variants={fadeUpVariants}
                            className="relative order-1 lg:order-2 flex"
                        >
                            <div className="relative w-full h-[350px] lg:h-[450px] overflow-hidden rounded-[40px] shadow-2xl group border-[8px] border-white">
                                <img
                                    src="/images/soliman-portrait-new.png"
                                    alt="Soliman Shaban"
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
                                />
                                {/* Bottom recognition tags inside image */}
                                <div className="absolute bottom-6 left-6 right-6 flex flex-col gap-3">
                                    <div className="bg-white/80 backdrop-blur-md px-4 py-3 rounded-2xl border border-white/50 shadow-lg self-start">
                                        <div className="flex items-center gap-2 mb-1">
                                            <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></div>
                                            <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">Impact Highlight</p>
                                        </div>
                                        <p className="text-sm font-bold text-slate-900 leading-tight">93% Time saved with AI in urban planning tools</p>
                                    </div>

                                    <div className="bg-[#1A1D23]/90 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/10 shadow-xl self-end flex items-center gap-3">
                                        <div className="flex flex-col">
                                            <p className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.2em] leading-none mb-1">Featured at</p>
                                            <p className="text-sm font-black text-white tracking-tight leading-none">
                                                GITEX <span className="text-blue-500">GLOBAL</span>
                                            </p>
                                        </div>
                                        <div className="w-[1px] h-6 bg-white/20"></div>
                                        <p className="text-[10px] font-bold text-white uppercase tracking-wider">Dubai</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Simplified Impact Row: Logos + Metrics */}
                    <motion.div variants={fadeUpVariants} className="pt-12 border-t border-slate-200/50">
                        <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-16">

                            {/* Government Logos */}
                            <div className="border-b lg:border-b-0 lg:border-r border-slate-200 pb-8 lg:pb-0 lg:pr-16">
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-6">Government Trust</p>
                                <div className="flex flex-wrap items-center gap-8">
                                    <img src="/images/01.png" alt="RTA" className="h-7 md:h-8 w-auto" />
                                    <img src="/images/02.png" alt="Dubai Municipality" className="h-7 md:h-8 w-auto" />
                                    <img src="/images/03.png" alt="Digital Dubai" className="h-7 md:h-8 w-auto" />
                                </div>
                            </div>

                            {/* Metrics Grid */}
                            <div className="flex flex-wrap gap-8 md:gap-12">
                                <div className="flex flex-col">
                                    <span className="text-2xl md:text-3xl font-bold text-slate-900 font-display">12M+</span>
                                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mt-1">Citizens</span>
                                </div>
                                <div className="flex flex-col">
                                    <span
                                        className="text-2xl md:text-3xl font-bold font-display"
                                        style={{
                                            background: 'linear-gradient(135deg, #1e40af 0%, #4f46e5 50%, #7c3aed 100%)',
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent',
                                            backgroundClip: 'text'
                                        }}
                                    >93%</span>
                                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mt-1">AI Speed</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-2xl md:text-3xl font-bold text-slate-900 font-display">8+</span>
                                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mt-1">Years</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-2xl md:text-3xl font-bold text-slate-900 font-display">5+</span>
                                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mt-1">Systems</span>
                                </div>
                            </div>

                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Gradient Animation Keyframes */}
            <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% center; }
          50% { background-position: 200% center; }
        }
        .animate-gradient {
          animation: gradient 5s ease-in-out infinite;
        }
      `}</style>
        </section>
    );
};

export default Hero;
