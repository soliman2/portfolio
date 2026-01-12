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
        <section className="relative min-h-screen w-full flex items-center justify-center font-inter overflow-hidden py-24 md:py-32">
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
            <div className="relative z-20 w-full max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col items-center text-center space-y-6 md:space-y-8"
                >

                    {/* Photo + Headline Inline */}
                    <motion.div variants={fadeUpVariants} className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
                        {/* Profile Photo */}
                        <div className="flex-shrink-0">
                            <img
                                src="/images/soliman-portrait-new.png"
                                alt="Soliman Shaban"
                                className="w-[120px] h-[120px] md:w-[140px] md:h-[140px] object-cover"
                                style={{
                                    borderRadius: '20px',
                                    border: '6px solid white',
                                    boxShadow: '0 0 0 1px rgba(0,0,0,0.05)'
                                }}
                            />
                        </div>

                        {/* Headline Text */}
                        <div className="text-center md:text-left">
                            <h1 style={{ fontFamily: 'Inter' }}>
                                <div className="text-[26px] md:text-[40px] font-semibold text-[#1A1D23] leading-[1.3] mb-1 md:mb-2">
                                    Hey, I'm Soliman
                                </div>
                                <div className="text-[26px] md:text-[40px] font-semibold text-[#1A1D23] leading-[1.3]">
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
                                </div>
                            </h1>
                        </div>
                    </motion.div>

                    {/* Subline - Bilingual Design Systems */}
                    <motion.div variants={fadeUpVariants} className="w-full max-w-3xl mx-auto px-2">
                        <div className="text-[15px] md:text-[18px] text-slate-500 leading-[1.6] text-center" style={{ fontFamily: 'Inter' }}>
                            Building bilingual design systems that power Dubai's AI-driven government transformation.
                        </div>
                    </motion.div>

                    {/* Specialization Badges */}
                    <motion.div
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex justify-center items-center min-h-[28px]"
                    >
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={currentCapabilityIndex}
                                variants={capabilityItemVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                className="font-semibold text-[17px]"
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
                    <motion.div variants={fadeUpVariants} className="flex justify-center w-full md:w-auto px-4 md:px-0">
                        <a
                            href="/contact"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-[15px] text-[#1A1D23] transition-all hover:opacity-80 w-full md:w-auto max-w-[280px] md:max-w-none"
                            style={{
                                background: 'white',
                                border: '1.5px solid transparent',
                                backgroundImage: 'linear-gradient(white, white), linear-gradient(135deg, #1e40af 0%, #4f46e5 50%, #7c3aed 100%)',
                                backgroundOrigin: 'border-box',
                                backgroundClip: 'padding-box, border-box',
                                minHeight: '48px'
                            }}
                        >
                            Download My CV <span>↓</span>
                        </a>
                    </motion.div>

                    {/* Government Trust Section */}
                    <motion.div variants={fadeUpVariants} className="mt-8 md:mt-12 w-full px-4">
                        <p className="text-[13px] md:text-[14px] text-[#6B7280] mb-4 text-center">
                            Trusted by Dubai government for <span className="font-semibold">4+ years</span>
                        </p>

                        {/* Logo Row */}
                        <div className="flex flex-wrap gap-4 md:gap-6 justify-center items-center">
                            <img src="/images/01.png" alt="RTA" className="h-[24px] md:h-[28px] w-auto object-contain" style={{ filter: 'grayscale(80%) opacity(0.7)' }} />
                            <img src="/images/02.png" alt="Dubai Municipality" className="h-[24px] md:h-[28px] w-auto object-contain" style={{ filter: 'grayscale(80%) opacity(0.7)' }} />
                            <img src="/images/03.png" alt="Digital Dubai" className="h-[24px] md:h-[28px] w-auto object-contain" style={{ filter: 'grayscale(80%) opacity(0.7)' }} />
                        </div>
                    </motion.div>

                    {/* Bottom Metrics */}
                    <motion.div variants={fadeUpVariants} className="w-full pt-8">
                        <div className="flex flex-wrap gap-8 justify-center">
                            {/* Metric 1 */}
                            <div className="flex flex-col items-center">
                                <div className="text-4xl md:text-5xl font-bold text-slate-900">12M+</div>
                                <div className="text-sm text-slate-600 mt-1">Citizens served</div>
                            </div>

                            {/* Metric 2 - Featured AI Card */}
                            <div
                                className="flex flex-col items-center"
                            >
                                <div
                                    className="text-4xl md:text-5xl font-bold"
                                    style={{
                                        background: 'linear-gradient(135deg, #1e40af 0%, #4f46e5 50%, #7c3aed 100%)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        backgroundClip: 'text'
                                    }}
                                >
                                    93%
                                </div>
                                <div className="text-sm text-slate-600 mt-1">Time saved with AI</div>
                            </div>

                            {/* Metric 3 */}
                            <div className="flex flex-col items-center">
                                <div className="text-4xl md:text-5xl font-bold text-slate-900">8+</div>
                                <div className="text-sm text-slate-600 mt-1">Years experience</div>
                            </div>

                            {/* Metric 4 */}
                            <div className="flex flex-col items-center">
                                <div className="text-4xl md:text-5xl font-bold text-slate-900">5+</div>
                                <div className="text-sm text-slate-600 mt-1">Design systems</div>
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
