import React from 'react';
import { motion } from 'framer-motion';
import { HERO_SKILL_CARDS } from '../constants';

const Hero: React.FC = () => {

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

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.9, y: 20 },
        visible: (custom: number) => ({
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                delay: 0.6 + (custom * 0.1),
                duration: 0.5,
                ease: "easeOut"
            }
        })
    };

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
            <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* LEFT SIDE: Text Content */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="space-y-8"
                    >
                        {/* Small Tag */}
                        <motion.div variants={fadeUpVariants}>
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/70 backdrop-blur-sm border border-slate-200/50 rounded-full shadow-sm">
                                <span className="text-sm font-medium text-slate-600">Principal Product Designer</span>
                            </div>
                        </motion.div>

                        {/* Main Headline */}
                        <motion.div variants={fadeUpVariants} className="space-y-2">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-slate-900">
                                I design with
                            </h1>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                                    GenAI
                                </span>
                            </h1>
                        </motion.div>

                        {/* Description */}
                        <motion.div variants={fadeUpVariants} className="space-y-4">
                            <p className="text-sm font-medium text-slate-500">
                                Principal Product Designer | RTA Dubai
                            </p>
                            <p className="text-[17px] text-slate-600 leading-relaxed max-w-[520px]" style={{ lineHeight: '1.6', color: '#4B5563' }}>
                                Building bilingual design systems that power Dubai's AI-driven government transformation.
                            </p>
                        </motion.div>

                        {/* CTA Buttons */}
                        <motion.div variants={fadeUpVariants} className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="/work"
                                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold text-base shadow-lg shadow-blue-600/30 hover:bg-blue-700 hover:shadow-blue-600/40 transition-all hover:-translate-y-0.5"
                            >
                                View My Work
                            </a>
                            <a
                                href="/contact"
                                className="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-slate-200 text-slate-900 rounded-xl font-semibold text-base hover:border-blue-600 hover:text-blue-600 transition-all"
                            >
                                Download CV
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* RIGHT SIDE: 4 Floating Skill Cards (2x2 Grid) */}
                    <div className="grid grid-cols-2 gap-4 lg:gap-6">
                        {HERO_SKILL_CARDS.map((card, index) => (
                            <motion.div
                                key={card.id}
                                custom={index}
                                variants={cardVariants}
                                initial="hidden"
                                animate="visible"
                                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                                className={`${card.bgColor} p-6 rounded-2xl border border-white/10 shadow-xl hover:shadow-2xl transition-all cursor-pointer relative overflow-hidden group`}
                            >
                                {/* Card Background Effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                                {/* Card Content */}
                                <div className="relative z-10 space-y-3">
                                    {/* Title */}
                                    <h3 className="text-white font-bold text-base lg:text-lg">
                                        {card.title}
                                    </h3>

                                    {/* Screenshot Placeholder */}
                                    <div className="bg-white/10 backdrop-blur-sm rounded-lg h-24 lg:h-28 flex items-center justify-center border border-white/20">
                                        <span className="text-white/60 text-xs text-center px-2">
                                            {card.screenshot}
                                        </span>
                                    </div>

                                    {/* Stats */}
                                    <div className="space-y-1">
                                        <p className="text-white/90 text-sm font-medium">{card.stat1}</p>
                                        <p className="text-white/70 text-xs">{card.stat2}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
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
