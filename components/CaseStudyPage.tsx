import React from 'react';
import { motion } from 'framer-motion';
import {
    ArrowLeft, ArrowRight, Layers, User, Calendar, Sparkles, Trophy,
    CheckCircle2, Circle, ChevronRight, Star, ExternalLink, Play
} from 'lucide-react';

interface CaseStudyPageProps {
    onBack: () => void;
}

const CaseStudyPage: React.FC<CaseStudyPageProps> = ({ onBack }) => {

    // Animation variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1
            }
        }
    };

    const floatAnimation = {
        y: [0, -15, 0],
        transition: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
        }
    };

    const floatAnimationDelayed = {
        y: [0, -12, 0],
        transition: {
            duration: 7,
            delay: 1,
            repeat: Infinity,
            ease: "easeInOut"
        }
    };

    return (
        <div className="bg-white w-full overflow-hidden text-[#1A1D23] font-sans selection:bg-[#4169E1] selection:text-white">

            {/* Navigation Spacer */}
            <div className="h-20 lg:h-24"></div>

            {/* Back Button */}
            <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-6">
                <button
                    onClick={onBack}
                    className="group inline-flex items-center gap-2 text-slate-500 hover:text-[#4169E1] transition-colors font-medium text-sm"
                >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Back to Work
                </button>
            </div>

            {/* ==============================================================================
            SECTION 1: HERO
           ============================================================================== */}
            <section className="relative py-12 lg:py-20 overflow-hidden">
                {/* Background Grid */}
                <div className="absolute inset-0 pointer-events-none opacity-[0.3]"
                    style={{
                        backgroundImage: 'linear-gradient(#E5E7EB 1px, transparent 1px), linear-gradient(90deg, #E5E7EB 1px, transparent 1px)',
                        backgroundSize: '40px 40px'
                    }}
                ></div>

                <div className="max-w-[1200px] mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">

                    {/* Left: Content */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="space-y-8"
                    >
                        <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#4169E1] text-white">
                            <Layers className="w-3.5 h-3.5" />
                            <span className="text-xs font-bold uppercase tracking-wider font-display">AI + Government</span>
                        </motion.div>

                        <motion.div variants={fadeInUp}>
                            <h1 className="text-5xl md:text-6xl lg:text-[64px] font-bold font-display text-[#1A1D23] mb-4 leading-[1.1] tracking-tight">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4169E1] to-blue-400">AI Urban</span> Design Tool
                            </h1>
                            <p className="text-xl text-[#6B7280] font-medium leading-relaxed max-w-lg">
                                First GenAI Design Lab in Dubai Government
                            </p>
                        </motion.div>

                        {/* Meta Grid */}
                        <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-y-8 gap-x-4 py-8 border-y border-slate-100">
                            <div>
                                <div className="text-[11px] font-bold uppercase tracking-wider text-[#6B7280] mb-1 font-display">Client</div>
                                <div className="text-[15px] font-semibold text-[#1A1D23]">RTA Dubai</div>
                            </div>
                            <div>
                                <div className="text-[11px] font-bold uppercase tracking-wider text-[#6B7280] mb-1 font-display">Role</div>
                                <div className="text-[15px] font-semibold text-[#1A1D23]">Lead Product Designer</div>
                            </div>
                            <div>
                                <div className="text-[11px] font-bold uppercase tracking-wider text-[#6B7280] mb-1 font-display">Timeline</div>
                                <div className="text-[15px] font-semibold text-[#1A1D23]">2024 – 2025</div>
                            </div>
                            <div>
                                <div className="text-[11px] font-bold uppercase tracking-wider text-[#6B7280] mb-1 font-display">Service</div>
                                <div className="text-[15px] font-semibold text-[#1A1D23]">AI UX/UI Design</div>
                            </div>
                        </motion.div>

                        {/* Recognition Badge */}
                        <motion.div variants={fadeInUp} className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-gradient-to-r from-[#F59E0B] to-[#D97706] text-white shadow-lg shadow-orange-500/20">
                            <Trophy className="w-5 h-5" />
                            <span className="text-sm font-bold tracking-wide font-display">Official Recognition — GITEX Dubai 2025</span>
                        </motion.div>
                    </motion.div>

                    {/* Right: Floating Screenshot */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <motion.div
                            animate={floatAnimation}
                            className="relative z-10 bg-white p-4 md:p-5 rounded-[20px] shadow-[0_20px_60px_rgba(0,0,0,0.1)] border border-slate-100 rotate-[-1deg]"
                        >
                            <div className="rounded-xl overflow-hidden bg-slate-100 aspect-[4/3] relative">
                                {/* Hero Screenshot - Main Tool Interface */}
                                <img
                                    src="/AI Urban/AI Urban Design Tool.png"
                                    alt="AI Urban Tool Interface"
                                    className="w-full h-full object-cover"
                                />
                                {/* Overlay UI Mockup Elements */}
                                <div className="absolute top-4 left-4 right-4 flex justify-between items-center bg-white/90 backdrop-blur-md p-3 rounded-lg shadow-sm">
                                    <div className="flex gap-2 items-center">
                                        <div className="w-2 h-2 rounded-full bg-red-400"></div>
                                        <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                                        <div className="w-2 h-2 rounded-full bg-green-400"></div>
                                    </div>
                                    <div className="h-2 w-20 bg-slate-200 rounded-full"></div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Decorative Elements */}
                        <div className="absolute -z-10 top-10 -right-10 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-60"></div>
                        <div className="absolute -z-10 -bottom-10 -left-10 w-64 h-64 bg-orange-100 rounded-full blur-3xl opacity-60"></div>
                    </motion.div>
                </div>
            </section>

            {/* ==============================================================================
            SECTION 2: PRODUCT SHOWCASE - MAIN SCREENS (DARK)
           ============================================================================== */}
            <section className="relative py-24 bg-[#1A1D23] overflow-hidden">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <span className="text-xs font-bold text-white/70 uppercase tracking-widest font-display block mb-3">The Product</span>
                        <h2 className="text-4xl md:text-5xl font-bold font-display text-white">AI-Powered Urban Visualization</h2>
                    </div>

                    <div className="relative h-[500px] md:h-[700px] w-full flex justify-center items-center">

                        {/* Center Screen (Large) */}
                        <motion.div
                            initial={{ opacity: 0, y: 50, scale: 0.9 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            animate={floatAnimation}
                            className="absolute z-20 w-[90%] md:w-[65%] max-w-[900px]"
                        >
                            <div className="bg-white p-3 md:p-4 rounded-[16px] shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
                                <img
                                    src="/AI Urban/first sedction /11.png"
                                    alt="Main Dashboard"
                                    className="w-full h-auto rounded-[10px] border border-slate-100"
                                />
                            </div>
                        </motion.div>

                        {/* Left Screen (Small, Rotated) */}
                        <motion.div
                            initial={{ opacity: 0, x: -50, rotate: -10 }}
                            whileInView={{ opacity: 1, x: 0, rotate: -5 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            animate={floatAnimationDelayed}
                            className="absolute z-10 left-[2%] md:left-[5%] top-[10%] w-[40%] md:w-[25%] max-w-[350px]"
                        >
                            <div className="bg-white p-2 md:p-3 rounded-[16px] shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
                                <img
                                    src="/AI Urban/first sedction /02.png"
                                    alt="Upload Interface"
                                    className="w-full h-auto rounded-[10px] border border-slate-100"
                                />
                            </div>
                        </motion.div>

                        {/* Right Screen (Small, Rotated) */}
                        <motion.div
                            initial={{ opacity: 0, x: 50, rotate: 10 }}
                            whileInView={{ opacity: 1, x: 0, rotate: 5 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            animate={floatAnimationDelayed}
                            className="absolute z-10 right-[2%] md:right-[5%] top-[15%] w-[40%] md:w-[25%] max-w-[350px]"
                        >
                            <div className="bg-white p-2 md:p-3 rounded-[16px] shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
                                <img
                                    src="/AI Urban/first sedction /03.png"
                                    alt="Style Selection"
                                    className="w-full h-auto rounded-[10px] border border-slate-100"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ==============================================================================
            SECTION 3: PROBLEM & SOLUTION
           ============================================================================== */}
            <section className="py-24 lg:py-32 bg-white relative">
                {/* Background Grid */}
                <div className="absolute inset-0 pointer-events-none opacity-[0.3]"
                    style={{
                        backgroundImage: 'linear-gradient(#E5E7EB 1px, transparent 1px), linear-gradient(90deg, #E5E7EB 1px, transparent 1px)',
                        backgroundSize: '40px 40px'
                    }}
                ></div>

                <div className="max-w-[800px] mx-auto px-6 lg:px-8 relative z-10 text-center">

                    {/* Problem */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-20"
                    >
                        <span className="text-xs font-bold text-[#4169E1] uppercase tracking-widest mb-4 block font-display">The Problem</span>
                        <h3 className="text-3xl md:text-4xl font-bold font-display text-[#1A1D23] mb-6">5 Days to Visualize an Idea</h3>
                        <p className="text-lg md:text-xl text-[#6B7280] leading-relaxed font-medium">
                            RTA's Buildings and Facilities Department needed to create conceptual designs for transport infrastructure across Dubai. The traditional process required architects to manually produce visualizations — taking up to 5 days per proposal and creating bottlenecks in project approvals.
                        </p>
                    </motion.div>

                    {/* Solution */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-xs font-bold text-[#4169E1] uppercase tracking-widest mb-4 block font-display">The Solution</span>
                        <h3 className="text-3xl md:text-4xl font-bold font-display text-[#1A1D23] mb-6">From Days to Hours with AI</h3>
                        <p className="text-lg md:text-xl text-[#6B7280] leading-relaxed font-medium">
                            I designed an AI-powered visualization tool that transforms photos into professional design concepts. Users upload an image, select an architectural style, and receive multiple AI-generated options in minutes — reducing turnaround from 5 days to just 8 hours.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ==============================================================================
            SECTION 4: USER FLOW (DARK)
           ============================================================================== */}
            <section className="py-24 bg-[#1A1D23] text-white">
                <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-xs font-bold text-white/70 uppercase tracking-widest font-display block mb-3">User Flow</span>
                        <h2 className="text-4xl font-bold font-display text-white">From Photo to Concept in 4 Steps</h2>
                    </div>

                    {/* Steps Indicators */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
                        {[
                            { num: "01", title: "Upload Image", sub: "Input Source" },
                            { num: "02", title: "Select Style", sub: "Define Aesthetic" },
                            { num: "03", title: "Generate", sub: "AI Processing" },
                            { num: "04", title: "Export", sub: "Final Results" }
                        ].map((step, i) => (
                            <div key={i} className="bg-[#2B3544] p-6 rounded-xl border border-white/5 relative overflow-hidden group">
                                <div className="text-3xl font-bold font-display text-[#4169E1] mb-2">{step.num}</div>
                                <div className="text-lg font-semibold text-white">{step.title}</div>
                                <div className="text-sm text-white/50">{step.sub}</div>
                                {i < 3 && (
                                    <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                                        <ChevronRight className="w-6 h-6 text-white/20" />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Screenshots Row */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        {[
                            "/AI Urban/02.png", // Upload
                            "/AI Urban/06.png", // Style
                            "/AI Urban/10.png", // Generate
                            "/AI Urban/11.png"  // Export
                        ].map((img, i) => (
                            <div key={i} className="bg-white p-2 rounded-[12px]">
                                <img src={img} alt={`Step ${i + 1}`} className="w-full h-40 md:h-48 object-cover rounded-[8px] border border-slate-100" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ==============================================================================
            SECTION 5: UI DESIGN CHALLENGE
           ============================================================================== */}
            <section className="py-24 bg-white relative">
                <div className="absolute inset-0 pointer-events-none opacity-[0.3]"
                    style={{
                        backgroundImage: 'linear-gradient(#E5E7EB 1px, transparent 1px), linear-gradient(90deg, #E5E7EB 1px, transparent 1px)',
                        backgroundSize: '40px 40px'
                    }}
                ></div>

                <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-[800px] mx-auto mb-16">
                        <span className="text-xs font-bold text-[#4169E1] uppercase tracking-widest mb-3 block font-display">UI Challenge</span>
                        <h2 className="text-4xl font-bold font-display text-[#1A1D23] mb-6">Innovating Within Brand Constraints</h2>
                        <p className="text-lg text-[#6B7280] leading-relaxed">
                            RTA has strict brand guidelines — specific colors, components, and patterns. But an AI tool needs to feel innovative and modern. How do you push boundaries without breaking the rules?
                        </p>
                    </div>

                    {/* Before / After Visual */}
                    <div className="grid grid-cols-1 md:grid-cols-11 gap-8 items-center mb-16">
                        {/* Before */}
                        <div className="md:col-span-5 bg-white border border-slate-200 p-8 rounded-[20px] shadow-sm">
                            <div className="text-sm font-bold text-[#6B7280] uppercase mb-6 tracking-wide">Standard RTA Style</div>
                            <div className="space-y-4">
                                <div className="flex gap-4">
                                    <div className="w-16 h-16 rounded-lg bg-[#ee3a43]"></div> {/* RTA Red */}
                                    <div className="w-16 h-16 rounded-lg bg-[#1A1D23]"></div>
                                </div>
                                <div className="h-12 w-full bg-[#1A1D23] rounded-md flex items-center justify-center text-white font-bold">Action Button</div>
                                <p className="text-xs text-slate-400 text-center">Flat Design • Solid Colors</p>
                            </div>
                        </div>

                        {/* Arrow */}
                        <div className="md:col-span-1 flex justify-center">
                            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
                                <ArrowRight className="w-5 h-5 text-[#4169E1]" />
                            </div>
                        </div>

                        {/* After */}
                        <div className="md:col-span-5 bg-white border border-slate-200 p-8 rounded-[20px] shadow-xl relative overflow-hidden">
                            <div className="text-sm font-bold text-[#4169E1] uppercase mb-6 tracking-wide">My AI Solution</div>
                            <div className="space-y-4 relative z-10">
                                <div className="flex gap-4">
                                    <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-[#ee3a43] to-[#4169E1] shadow-lg"></div>
                                    <div className="w-16 h-16 rounded-lg bg-white/50 backdrop-blur-md border border-white/20 shadow-lg"></div>
                                </div>
                                <div className="h-12 w-full bg-gradient-to-r from-[#1A1D23] to-[#2B3544] rounded-md flex items-center justify-center text-white font-bold shadow-lg">
                                    <Sparkles className="w-4 h-4 mr-2 text-[#4169E1]" />
                                    AI Generate
                                </div>
                                <p className="text-xs text-[#4169E1] text-center">Gradient Blend • Glassmorphism</p>
                            </div>
                            {/* Glow */}
                            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#4169E1] blur-[60px] opacity-20"></div>
                        </div>
                    </div>

                    {/* Color Formula */}
                    <div className="bg-[#F8F9FA] rounded-[24px] p-8 md:p-12 text-center border border-slate-200">
                        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
                            <div className="flex flex-col items-center">
                                <div className="w-14 h-14 rounded-xl bg-[#ee3a43] shadow-sm mb-3"></div>
                                <span className="text-xs font-mono text-slate-500">RTA Red</span>
                            </div>
                            <div className="text-slate-300 font-bold text-2xl">+</div>
                            <div className="flex flex-col items-center">
                                <div className="w-14 h-14 rounded-xl bg-[#1A1D23] shadow-sm mb-3"></div>
                                <span className="text-xs font-mono text-slate-500">Neutral</span>
                            </div>
                            <div className="text-slate-300 font-bold text-2xl">+</div>
                            <div className="flex flex-col items-center">
                                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-white/60 to-white/20 border border-white/50 shadow-sm mb-3"></div>
                                <span className="text-xs font-mono text-slate-500">Glass</span>
                            </div>
                            <div className="text-[#4169E1] font-bold text-2xl">=</div>
                            <div className="flex flex-col items-center">
                                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#ee3a43] to-[#1A1D23] relative overflow-hidden shadow-lg mb-3 flex items-center justify-center">
                                    <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px]"></div>
                                    <Sparkles className="w-6 h-6 text-white relative z-10" />
                                </div>
                                <span className="text-sm font-bold text-[#1A1D23]">AI Innovation</span>
                            </div>
                        </div>
                        <p className="mt-8 text-[#6B7280] max-w-2xl mx-auto leading-relaxed">
                            By merging approved brand colors into gradients and applying glassmorphism, the interface feels futuristic and AI-native while remaining 100% compliant with RTA's design system.
                        </p>
                    </div>
                </div>
            </section>

            {/* ==============================================================================
            SECTION 6: KEY FEATURES (DARK)
           ============================================================================== */}
            <section className="py-24 bg-[#1A1D23] text-white overflow-hidden">
                <div className="max-w-[1200px] mx-auto px-6 lg:px-8 space-y-24">

                    {/* Feature 1 */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-3xl font-bold font-display mb-4">Before & After Comparison</h3>
                            <p className="text-lg text-white/70 leading-relaxed mb-6">
                                Side-by-side layout lets users instantly see how AI transformed their input image into design concepts. Immediate visual feedback builds confidence in the tool.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white p-3 rounded-[20px] rotate-[2deg] hover:rotate-0 transition-transform duration-500"
                        >
                            <img
                                src="/AI Urban/7.png"
                                alt="Comparison View"
                                className="w-full rounded-[16px]"
                            />
                        </motion.div>
                    </div>

                    {/* Feature 2 */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="order-2 lg:order-1 bg-white p-3 rounded-[20px] rotate-[-2deg] hover:rotate-0 transition-transform duration-500"
                        >
                            <img
                                src="/AI Urban/06.png"
                                alt="Style Presets"
                                className="w-full rounded-[16px]"
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="order-1 lg:order-2"
                        >
                            <h3 className="text-3xl font-bold font-display mb-4">Style Presets</h3>
                            <p className="text-lg text-white/70 leading-relaxed mb-6">
                                Pre-configured architectural styles — modern, traditional, industrial — reduce complexity for non-designers. One click, multiple professional options.
                            </p>
                        </motion.div>
                    </div>

                    {/* Feature 3 */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-3xl font-bold font-display mb-4">Progressive Disclosure</h3>
                            <p className="text-lg text-white/70 leading-relaxed mb-6">
                                Advanced settings stay hidden until needed. The default experience is simple enough for anyone, with power-user controls available on demand.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white p-3 rounded-[20px] rotate-[2deg] hover:rotate-0 transition-transform duration-500"
                        >
                            <img
                                src="/AI Urban/10.png"
                                alt="Settings Panel"
                                className="w-full rounded-[16px]"
                            />
                        </motion.div>
                    </div>

                </div>
            </section>

            {/* ==============================================================================
            SECTION 7: AI LOADING EXPERIENCE
           ============================================================================== */}
            <section className="py-24 bg-white relative">
                <div className="absolute inset-0 pointer-events-none opacity-[0.3]"
                    style={{
                        backgroundImage: 'linear-gradient(#E5E7EB 1px, transparent 1px), linear-gradient(90deg, #E5E7EB 1px, transparent 1px)',
                        backgroundSize: '40px 40px'
                    }}
                ></div>

                <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-[800px] mx-auto mb-16">
                        <span className="text-xs font-bold text-[#4169E1] uppercase tracking-widest mb-3 block font-display">AI Experience</span>
                        <h2 className="text-4xl font-bold font-display text-[#1A1D23] mb-6">Designing for AI Uncertainty</h2>
                        <p className="text-lg text-[#6B7280] leading-relaxed">
                            AI generation takes time and users can't see what's happening. I designed transparent loading states that show exactly what the system is doing — building trust through visibility.
                        </p>
                    </div>

                    {/* Loading Card Demo */}
                    <div className="max-w-[450px] mx-auto bg-white rounded-[24px] shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-slate-100 p-8 md:p-12 relative overflow-hidden">
                        {/* Pulse Effect */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#4169E1] to-transparent animate-pulse"></div>

                        <div className="flex flex-col items-center text-center mb-8">
                            <div className="w-16 h-16 rounded-2xl bg-[#4169E1]/10 flex items-center justify-center mb-6 relative">
                                <Sparkles className="w-8 h-8 text-[#4169E1] animate-pulse" />
                                <div className="absolute inset-0 rounded-2xl border border-[#4169E1]/30 animate-ping opacity-20"></div>
                            </div>
                            <h4 className="text-xl font-bold font-display text-[#1A1D23] mb-2">Hold tight, designing...</h4>
                            <p className="text-sm font-bold text-[#4169E1]">4 of 6 steps completed</p>
                        </div>

                        <div className="space-y-4">
                            {[
                                { text: "Analyzing input image structure", status: "done" },
                                { text: "Extracting spatial features", status: "done" },
                                { text: "Applying style parameters", status: "done" },
                                { text: "Generating design concepts", status: "done" },
                                { text: "Refining details & textures", status: "active" },
                                { text: "Preparing outputs", status: "pending" },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.2 }}
                                    className="flex items-center gap-3"
                                >
                                    {item.status === "done" && <div className="w-5 h-5 rounded-full bg-[#10B981] flex items-center justify-center"><CheckCircle2 className="w-3.5 h-3.5 text-white" /></div>}
                                    {item.status === "active" && <div className="w-5 h-5 rounded-full border-2 border-[#4169E1] border-r-transparent animate-spin"></div>}
                                    {item.status === "pending" && <div className="w-5 h-5 rounded-full border border-slate-200"></div>}

                                    <span className={`text-sm font-medium ${item.status === "done" ? "text-[#10B981]" : item.status === "active" ? "text-[#1A1D23]" : "text-slate-300"}`}>
                                        {item.text}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ==============================================================================
            SECTION 8: DESIGN SYSTEM (DARK)
           ============================================================================== */}
            <section className="py-24 bg-[#1A1D23] text-white">
                <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <span className="text-xs font-bold text-white/70 uppercase tracking-widest font-display block mb-3">Design System</span>
                        <h2 className="text-4xl font-bold font-display text-white">Visual Language</h2>
                    </div>

                    {/* Colors */}
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-20">
                        {[
                            { color: "#ee3a43", name: "RTA Red" },
                            { color: "#1A1D23", name: "Dark Navy" },
                            { color: "#4169E1", name: "Royal Blue" },
                            { color: "#F59E0B", name: "Signal Orange" },
                            { color: "#10B981", name: "Success Green" }
                        ].map((c, i) => (
                            <div key={i} className="flex flex-col items-center gap-3">
                                <div className="w-16 h-16 rounded-full border border-white/10 shadow-lg" style={{ backgroundColor: c.color }}></div>
                                <div className="text-center">
                                    <div className="text-sm font-bold text-white">{c.name}</div>
                                    <div className="text-xs font-mono text-white/50">{c.color}</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Typography */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20 border-t border-white/10 pt-16">
                        <div className="text-center md:text-left">
                            <div className="text-6xl font-bold font-display mb-4">Aa</div>
                            <div className="text-sm font-bold text-white mb-1">Heading Style</div>
                            <div className="text-xs text-white/50">Space Grotesk Bold</div>
                        </div>
                        <div className="text-center md:text-left">
                            <div className="text-6xl font-sans font-normal mb-4">Aa</div>
                            <div className="text-sm font-bold text-white mb-1">Body Style</div>
                            <div className="text-xs text-white/50">DM Sans Regular</div>
                        </div>
                        <div className="text-center md:text-left">
                            <div className="text-6xl font-sans font-medium mb-4">Aa</div>
                            <div className="text-sm font-bold text-white mb-1">UI Style</div>
                            <div className="text-xs text-white/50">DM Sans Medium</div>
                        </div>
                    </div>

                    {/* Components */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Button */}
                        <div className="bg-[#2B3544] p-6 rounded-xl border border-white/5 flex items-center justify-center h-32">
                            <button className="px-6 py-2.5 bg-[#4169E1] text-white rounded-lg font-bold shadow-lg shadow-blue-500/20">Action</button>
                        </div>
                        {/* Input */}
                        <div className="bg-[#2B3544] p-6 rounded-xl border border-white/5 flex items-center justify-center h-32">
                            <div className="w-full bg-[#1A1D23] border border-white/10 rounded-lg h-10 px-3 flex items-center text-sm text-white/50">Input field...</div>
                        </div>
                        {/* Card */}
                        <div className="bg-[#2B3544] p-6 rounded-xl border border-white/5 flex items-center justify-center h-32">
                            <div className="w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-3">
                                <div className="w-8 h-8 rounded bg-[#4169E1]/20 mb-2"></div>
                                <div className="h-2 w-16 bg-white/20 rounded-full"></div>
                            </div>
                        </div>
                        {/* Toggle */}
                        <div className="bg-[#2B3544] p-6 rounded-xl border border-white/5 flex items-center justify-center h-32">
                            <div className="w-12 h-7 bg-[#10B981] rounded-full relative">
                                <div className="absolute right-1 top-1 w-5 h-5 bg-white rounded-full shadow-sm"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ==============================================================================
            SECTION 9: IMPACT METRICS
           ============================================================================== */}
            <section className="py-24 bg-white relative">
                <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <span className="text-xs font-bold text-[#4169E1] uppercase tracking-widest mb-3 block font-display">Impact</span>
                        <h2 className="text-4xl font-bold font-display text-[#1A1D23]">Measurable Results</h2>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8 text-center">
                        {[
                            { val: "93%", label: "Faster Delivery", sub: "Speed Increase" },
                            { val: "8hrs", label: "Turnaround", sub: "Down from 5 days" },
                            { val: "1st", label: "In Dubai Gov", sub: "GenAI Design Lab" },
                            { val: "2025", label: "GITEX Showcase", sub: "Official Launch" }
                        ].map((m, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <div className="text-5xl md:text-7xl font-bold font-display text-[#1A1D23] mb-2">{m.val}</div>
                                <div className="text-lg font-bold text-[#4169E1] mb-1">{m.label}</div>
                                <div className="text-sm text-[#6B7280]">{m.sub}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ==============================================================================
            SECTION 10: REAL WORLD PHOTOS (DARK)
           ============================================================================== */}
            <section className="py-24 bg-[#1A1D23] text-white">
                <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-xs font-bold text-white/70 uppercase tracking-widest font-display block mb-3">In The Real World</span>
                        <h2 className="text-4xl font-bold font-display text-white mb-4">From Screen to Reality</h2>
                        <p className="text-lg text-white/60">The tool now lives in RTA's Design Lab and was showcased at GITEX Dubai 2025</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            "/AI Urban/02.png", // UI Screenshot 1
                            "/AI Urban/06.png", // UI Screenshot 2
                            "/AI Urban/7.png", // UI Screenshot 3
                            "/AI Urban/10.png", // UI Screenshot 4
                            "/AI Urban/11.png", // UI Screenshot 5
                            "/AI Urban/AI Urban Design Tool.png"  // Main Tool Screenshot
                        ].map((src, i) => (
                            <div key={i} className="group relative rounded-xl overflow-hidden aspect-[4/3] border border-white/10">
                                <img src={src} alt="AI Urban Tool Interface" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ==============================================================================
            SECTION 11: RECOGNITION
           ============================================================================== */}
            <section className="py-24 bg-white relative">
                <div className="max-w-[800px] mx-auto px-6 lg:px-8 text-center">
                    <span className="text-xs font-bold text-[#4169E1] uppercase tracking-widest mb-3 block font-display">Recognition</span>
                    <h2 className="text-4xl font-bold font-display text-[#1A1D23] mb-12">Official Acknowledgment</h2>

                    <div className="bg-gradient-to-br from-[#F59E0B] to-[#D97706] rounded-[24px] p-10 md:p-12 shadow-[0_20px_50px_rgba(245,158,11,0.25)] text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-32 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>

                        <Trophy className="w-12 h-12 text-white mb-8 mx-auto" />
                        <p className="text-xl md:text-2xl font-medium leading-relaxed font-display mb-8">
                            "Recognized for significantly enhancing innovation and data excellence through strategic dashboard and AI tool delivery."
                        </p>
                        <div className="text-sm font-bold opacity-80">— RTA AI & Data Science Center, December 2025</div>
                    </div>

                    <a
                        href="https://www.godubai.com/citylife/press_release_page.asp?pr=183089"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mt-12 px-6 py-3 bg-white border border-slate-200 rounded-full text-[#4169E1] font-bold hover:shadow-lg hover:border-[#4169E1]/30 transition-all group"
                    >
                        Read Official Press Release
                        <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </a>
                </div>
            </section>

        </div>
    );
};

export default CaseStudyPage;