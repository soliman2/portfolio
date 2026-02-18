import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Linkedin } from 'lucide-react';

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
        <section id="hero" className="relative w-full flex items-center justify-center font-inter overflow-hidden pt-8 pb-10 md:pt-32 md:pb-0 md:min-h-[85vh] lg:min-h-screen">
            {/* Background Gradient */}
            <div
                className="absolute inset-0 pointer-events-none z-0"
                style={{
                    background: `
            radial-gradient(ellipse 80% 60% at 90% 10%, rgba(125, 211, 232, 0.15) 0%, transparent 50%),
            radial-gradient(ellipse 100% 50% at 50% 100%, rgba(65, 105, 225, 0.08) 0%, transparent 40%),
            radial-gradient(ellipse 60% 50% at 10% 40%, rgba(65, 105, 225, 0.05) 0%, transparent 50%),
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
                    className="flex flex-col h-full"
                >
                    {/* Hero Grid: Content Left, Image Right */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-stretch">

                        {/* Left Side: Content Block */}
                        <div className="flex flex-col justify-center items-start text-left space-y-8 order-2 lg:order-1">
                            {/* Glass Badge - Sr. Product Designer */}
                            <motion.div variants={fadeUpVariants} className="mt-8 md:mt-0 mb-4 md:mb-0">
                                <span
                                    className="hidden md:inline-block px-4 py-1.5 text-xs md:text-sm font-semibold"
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
                                    Sr. Product Designer • Design Systems • AI • UX Research
                                </span >
                            </motion.div>

                            {/* Headline */}
                            <motion.h1 variants={fadeUpVariants} className="mb-3 md:mb-2 space-y-0.5 md:space-y-2">
                                <span className="block text-[28px] md:text-5xl lg:text-6xl font-bold text-[#111827] leading-[1.2] font-display">
                                    Hey, I'm Soliman
                                </span>
                                <span className="block text-[28px] md:text-5xl lg:text-6xl font-bold text-[#111827] leading-[1.2] font-display">
                                    I design with{' '}
                                    <span
                                        className="font-bold"
                                        style={{
                                            background: 'linear-gradient(135deg, #4169E1 0%, #4f46e5 50%, #7c3aed 100%)',
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent',
                                            backgroundClip: 'text'
                                        }}
                                    >
                                        GenAI
                                    </span>
                                </span>
                            </motion.h1>

                            {/* Mobile Subtitle */}
                            <motion.p variants={fadeUpVariants} className="md:hidden text-sm text-[#4B5563] font-normal mb-1">
                                Senior Product Designer · Design Systems · AI · UX Research
                            </motion.p>

                            {/* Desktop Subtitle - Replacement for rotating tags */}
                            <motion.p variants={fadeUpVariants} className="hidden md:block text-base font-medium text-[#6B7280] tracking-[0.5px] uppercase">
                                Senior Product Designer — Design Systems · AI · UX Research · Service Design
                            </motion.p>

                            {/* Description */}
                            <motion.p variants={fadeUpVariants} className="text-base md:text-xl text-[#4B5563] leading-relaxed max-w-xl font-inter mb-2">
                                I design AI-powered tools, enterprise design systems, and 360° government services for 12M+ users across Dubai. Officially recognized at GITEX 2025.
                            </motion.p>

                            <div className="flex flex-col gap-4">
                                <motion.div variants={fadeUpVariants} className="flex items-center gap-6 mb-0 md:mb-0">
                                    <a
                                        href="/soliman-shaban-cv.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-3.5 bg-[#4169E1] text-white rounded-[10px] md:rounded-full font-semibold md:font-bold text-sm md:text-base transition-all hover:bg-blue-600 active:scale-95 shadow-lg shadow-blue-600/20"
                                    >
                                        Download CV ↓
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/solimanshaban/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 text-[#4169E1] hover:bg-blue-50 rounded-full transition-colors order-first md:order-none"
                                        aria-label="LinkedIn Profile"
                                    >
                                        <Linkedin className="w-5 h-5" />
                                    </a>
                                </motion.div>

                                {/* Availability Indicator */}
                                <motion.div variants={fadeUpVariants} className="flex items-center gap-2 px-1">
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#10B981] shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
                                    <span className="text-sm text-[#6B7280] font-medium">Available for new opportunities</span>
                                </motion.div>
                            </div>
                        </div>

                        {/* Right Side: Image with matching height */}
                        <motion.div
                            variants={fadeUpVariants}
                            className="hidden md:flex relative order-1 lg:order-2"
                        >
                            <div className="relative w-full h-[250px] md:h-[350px] lg:h-[450px] overflow-hidden rounded-[40px] shadow-2xl group border-[8px] border-white">
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


                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Simplified Impact Row: Logos + Metrics */}
                    <motion.div variants={fadeUpVariants} className="pt-0 mt-6 md:mt-0">
                        <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-16 pt-6 md:pt-12">

                            {/* Government Logos */}
                            <div className="lg:border-r border-slate-200 lg:pr-16">
                                <p className="text-[11px] font-bold text-[#9CA3AF] uppercase tracking-[1.5px] mb-3 md:mb-6">Government Trust</p>
                                <div className="flex items-center gap-6 md:gap-8">
                                    <motion.img variants={badgeItemVariants} custom={0} src="/images/01.png" alt="RTA" className="h-6 md:h-8 w-auto" />
                                    <motion.img variants={badgeItemVariants} custom={1} src="/images/02.png" alt="Dubai Municipality" className="h-6 md:h-8 w-auto" />
                                    <motion.img variants={badgeItemVariants} custom={2} src="/images/03.png" alt="Digital Dubai" className="h-6 md:h-8 w-auto" />
                                </div>
                            </div>

                            {/* Metrics Grid */}
                            <div className="grid grid-cols-2 md:flex gap-4 md:gap-12 mt-6 md:mt-0">
                                <div className="flex flex-col">
                                    <span className="text-[28px] md:text-3xl font-bold text-[#111827] font-display leading-none">12M+</span>
                                    <span className="text-[11px] font-bold text-[#9CA3AF] uppercase tracking-wider mt-1">Users Served</span>
                                </div>
                                <div className="flex flex-col">
                                    <span
                                        className="text-[28px] md:text-3xl font-bold font-display leading-none"
                                        style={{
                                            background: 'linear-gradient(135deg, #4169E1 0%, #4f46e5 50%, #7c3aed 100%)',
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent',
                                            backgroundClip: 'text'
                                        }}
                                    >93%</span>
                                    <span className="text-[11px] font-bold text-[#9CA3AF] uppercase tracking-wider mt-1">Time Saved</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[28px] md:text-3xl font-bold text-[#111827] font-display leading-none">8+</span>
                                    <span className="text-[11px] font-bold text-[#9CA3AF] uppercase tracking-wider mt-1">Years</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[28px] md:text-3xl font-bold text-[#111827] font-display leading-none">5+</span>
                                    <span className="text-[11px] font-bold text-[#9CA3AF] uppercase tracking-wider mt-1">Systems</span>
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
