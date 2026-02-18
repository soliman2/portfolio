import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    ArrowLeft, ArrowRight, Layers, Sparkles, Trophy,
    CheckCircle2, ChevronRight, ExternalLink, Clock, Send, Laptop, Layout,
    Palette, Type, Globe, AlertCircle, Loader2
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface CaseStudyPageProps {
    onBack: () => void;
}

const CaseStudyPage: React.FC<CaseStudyPageProps> = ({ onBack }) => {
    const navigate = useNavigate();

    // Scroll to top on load (extra safety)
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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
        y: [0, -10, 0],
        transition: {
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
        }
    };

    return (
        <div className="bg-white w-full overflow-hidden text-[#1A1D23] font-sans selection:bg-[#4169E1] selection:text-white">

            {/* SECTION 1: HERO */}
            <section className="relative pt-12 pb-24 lg:pt-20 lg:pb-32 overflow-hidden bg-white">
                {/* Background Decor */}
                <div className="absolute inset-0 pointer-events-none opacity-[0.2]"
                    style={{
                        backgroundImage: 'radial-gradient(#E5E7EB 1.5px, transparent 1.5px)',
                        backgroundSize: '32px 32px'
                    }}
                ></div>

                <div className="max-w-[1120px] mx-auto px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        {/* Left Content */}
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={staggerContainer}
                            className="space-y-8"
                        >
                            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#4169E1]/10 text-[#4169E1]">
                                <Sparkles className="w-3.5 h-3.5" />
                                <span className="text-[10px] font-bold uppercase tracking-wider">First GenAI Lab in Dubai Gov</span>
                            </motion.div>

                            <motion.div variants={fadeInUp}>
                                <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-[#1A1D23] mb-6 leading-[1.1] tracking-tight">
                                    AI Urban <br />Design Tool
                                </h1>
                                <p className="text-lg text-[#6B7280] leading-relaxed max-w-lg">
                                    Revolutionizing city planning with generative AI. Transforming multi-day manual visualizations into minutes of intelligent generation.
                                </p>
                            </motion.div>

                            {/* Hero Metrics Row */}
                            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 pt-4">
                                {[
                                    { val: "93%", label: "Faster Workflow" },
                                    { val: "5d → 8h", label: "Time Reduction" },
                                    { val: "GITEX '25", label: "Live Showcase" },
                                    { val: "Official", label: "Recognition" }
                                ].map((m, i) => (
                                    <div key={i} className="bg-white/40 backdrop-blur-md border border-[#E5E7EB] rounded-xl px-5 py-4 w-[calc(50%-8px)] md:w-auto min-w-[130px]">
                                        <div className="text-[20px] font-bold text-[#1A1D23] mb-0.5">{m.val}</div>
                                        <div className="text-[11px] font-medium text-[#6B7280]">{m.label}</div>
                                    </div>
                                ))}
                            </motion.div>
                        </motion.div>

                        {/* Right Mockup */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <motion.div animate={floatAnimation} className="relative z-10">
                                <div className="bg-white p-3 rounded-[24px] shadow-[0_24px_80px_rgba(0,0,0,0.12)] border border-slate-100">
                                    <img
                                        src="/AI Urban/AI Urban Design Tool.png"
                                        alt="AI Urban Tool Mockup"
                                        className="w-full h-auto rounded-[16px]"
                                    />
                                </div>
                            </motion.div>
                            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-50/50 rounded-full blur-3xl"></div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* SECTION 2: THE CHALLENGE */}
            <section className="py-24 lg:py-32 bg-white relative">
                <div className="max-w-[1120px] mx-auto px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-10 gap-16 items-center">
                        <div className="lg:col-span-6 space-y-8">
                            <div>
                                <h2 className="text-[32px] md:text-[36px] font-bold text-[#1A1D23] mb-8">The Challenge</h2>
                                <p className="text-[16px] text-[#4B5563] leading-[1.8] max-w-[720px]">
                                    Urban planners needed 5+ days and multiple teams to visualize a single transport or streetscape concept. Manual processes, scattered tools, and slow feedback loops meant ideas took too long to materialize — delaying city-level decisions.
                                </p>
                            </div>

                            {/* Before -> After Comparison Row */}
                            <div className="flex items-center gap-6 md:gap-12 bg-[#F8F9FA] p-6 rounded-2xl border border-slate-100">
                                <div className="space-y-1">
                                    <div className="text-[12px] font-bold text-[#9CA3AF] uppercase tracking-wider">Before</div>
                                    <div className="text-[14px] font-medium text-[#6B7280]">5 days, 3+ teams, manual rendering</div>
                                </div>
                                <ArrowRight className="w-6 h-6 text-slate-300" />
                                <div className="space-y-1">
                                    <div className="text-[12px] font-bold text-[#4169E1] uppercase tracking-wider">After</div>
                                    <div className="text-[14px] font-bold text-[#1A1D23]">8 hours, 1 designer, AI-generated</div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-4">
                            <div className="rounded-2xl overflow-hidden border border-slate-100 shadow-xl">
                                <img src="/AI Urban/first sedction /02.png" alt="Challenge visualization" className="w-full h-auto" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: THE SOLUTION */}
            <section className="py-24 lg:py-32 bg-[#F8F9FA]">
                <div className="max-w-[1120px] mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-[32px] md:text-[36px] font-bold text-[#1A1D23] mb-4">From Photo to Concept in 4 Steps</h2>
                    </div>

                    {/* 4 Steps Horizontal Flow */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20 relative">
                        {[
                            { step: "01", title: "Upload Image", icon: <Send className="w-5 h-5" />, desc: "Input source photo or basic urban sketch." },
                            { step: "02", title: "Select Style", icon: <Palette className="w-5 h-5" />, desc: "Choose architectural or landscape theme." },
                            { step: "03", title: "Generate", icon: <Sparkles className="w-5 h-5" />, desc: "AI interprets and reimagines the scene." },
                            { step: "04", title: "Refine & Export", icon: <CheckCircle2 className="w-5 h-5" />, desc: "Finalize and download high-res concept." }
                        ].map((item, i) => (
                            <div key={i} className="relative bg-white p-8 rounded-[20px] border border-[#E5E7EB] shadow-sm group">
                                <div className="absolute top-4 left-4 w-7 h-7 rounded-full bg-[#4169E1] text-white flex items-center justify-center text-[12px] font-bold">
                                    {item.step}
                                </div>
                                <div className="pt-6">
                                    <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#4169E1] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                        {item.icon}
                                    </div>
                                    <h4 className="text-[18px] font-bold text-[#1A1D23] mb-2">{item.title}</h4>
                                    <p className="text-[14px] text-[#6B7280] leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="rounded-[24px] overflow-hidden border border-slate-200 shadow-2xl">
                        <img src="/AI Urban/AI Urban Design Tool.png" alt="Tool Interface in Action" className="w-full h-auto" />
                    </div>
                </div>
            </section>

            {/* SECTION 4: DESIGNING WITHIN CONSTRAINTS */}
            <section className="py-24 bg-white">
                <div className="max-w-[1120px] mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-[32px] md:text-[36px] font-bold text-[#1A1D23] mb-8">Designing Within Brand Constraints</h2>
                    <p className="text-[16px] text-[#4B5563] leading-[1.8] max-w-[720px] mx-auto mb-16">
                        Maintaining RTA brand local identity while pushing AI innovation. We reconciled strict government visual standards with the dynamic needs of an AI-native interface, including full Arabic/English bilingual support.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center bg-[#F8F9FA] rounded-[32px] p-10 max-h-[500px] overflow-hidden">
                        {/* Colors */}
                        <div className="space-y-4">
                            <span className="text-[11px] font-bold uppercase tracking-widest text-[#9CA3AF]">Color Palette</span>
                            <div className="flex justify-center gap-3">
                                {["#ee3a43", "#1A1D23", "#4169E1", "#F59E0B", "#10B981"].map((color, i) => (
                                    <div key={i} className="w-8 h-8 rounded-full border border-white shadow-sm" style={{ backgroundColor: color }}></div>
                                ))}
                            </div>
                        </div>
                        {/* Typography */}
                        <div className="space-y-4">
                            <span className="text-[11px] font-bold uppercase tracking-widest text-[#9CA3AF]">Typography</span>
                            <div className="flex flex-col items-center gap-2">
                                <span className="text-2xl font-bold font-display">Space Grotesk</span>
                                <span className="text-lg text-slate-400">DM Sans</span>
                            </div>
                        </div>
                        {/* Arabic UI */}
                        <div className="space-y-4 text-right">
                            <span className="text-[11px] font-bold uppercase tracking-widest text-[#9CA3AF] block text-center">Local Adaptation</span>
                            <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex items-center justify-between">
                                <span className="text-sm font-bold opacity-30">EN</span>
                                <div className="w-px h-8 bg-slate-100 mx-4"></div>
                                <span className="text-lg font-bold text-[#4169E1]">دبي</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 5: AI GENERATION RESULTS */}
            <section className="py-24 lg:py-32 bg-[#1A1D23] text-white">
                <div className="max-w-[1120px] mx-auto px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <h2 className="text-[32px] md:text-[36px] font-bold text-white mb-6">AI Generation Results</h2>
                    </div>

                    {/* Comparisons Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
                        <div className="space-y-4">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                <img src="/AI Urban/7.png" alt="Comparison 1" className="w-full h-auto" />
                                <div className="absolute top-4 left-4 px-3 py-1 bg-black/50 backdrop-blur-md rounded text-xs uppercase font-bold text-white/80 tracking-widest">Modern Style</div>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                <img src="/AI Urban/06.png" alt="Comparison 2" className="w-full h-auto" />
                                <div className="absolute top-4 left-4 px-3 py-1 bg-black/50 backdrop-blur-md rounded text-xs uppercase font-bold text-white/80 tracking-widest">Heritage Style</div>
                            </div>
                        </div>
                    </div>

                    {/* Presets Mini Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto opacity-80">
                        {["/AI Urban/first sedction /11.png", "/AI Urban/first sedction /03.png", "/AI Urban/06.png", "/AI Urban/10.png"].map((img, i) => (
                            <img key={i} src={img} alt={`Preset ${i}`} className="w-full h-24 object-cover rounded-xl grayscale hover:grayscale-0 transition-all cursor-pointer border border-white/5" />
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 6: DESIGNING FOR AI UNCERTAINTY */}
            <section className="py-24 bg-white">
                <div className="max-w-[1120px] mx-auto px-6 lg:px-8">
                    <div className="text-center max-w-[720px] mx-auto mb-16">
                        <h2 className="text-[32px] md:text-[36px] font-bold text-[#1A1D23] mb-6">Designing for AI Uncertainty</h2>
                        <p className="text-[16px] text-[#4B5563] leading-[1.8]">
                            AI processes are inherently non-linear and sometimes unpredictable. I designed loading states, expectation management, and retry logic to ensure the user always feels in control, even when the AI is processing complex data.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Generating", icon: <Loader2 className="w-6 h-6 animate-spin" />, desc: "Progressive feedback during generation.", color: "text-[#4169E1]" },
                            { title: "Managing Error", icon: <AlertCircle className="w-6 h-6" />, desc: "Clear retry paths for invalid inputs.", color: "text-[#ee3a43]" },
                            { title: "Success State", icon: <CheckCircle2 className="w-6 h-6" />, desc: "Impactful reveal of the final concept.", color: "text-[#10B981]" }
                        ].map((card, i) => (
                            <div key={i} className="bg-white p-10 rounded-[24px] border border-slate-100 shadow-lg text-center">
                                <div className={`flex justify-center mb-6 ${card.color}`}>{card.icon}</div>
                                <h4 className="text-[18px] font-bold text-[#1A1D23] mb-3">{card.title}</h4>
                                <p className="text-[14px] text-[#6B7280] leading-relaxed">{card.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 7: MEASURABLE RESULTS */}
            <section className="py-24 lg:py-32 bg-gradient-to-br from-[#4169E1] to-indigo-700 text-white">
                <div className="max-w-[1120px] mx-auto px-6 lg:px-8">
                    <div className="text-center mb-20 text-white">
                        <h2 className="text-[32px] md:text-[36px] font-bold mb-4">Measurable Results</h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { val: "93%", label: "Faster Than Manual Process" },
                            { val: "5d → 8h", label: "Workflow Reduction" },
                            { val: "GITEX '25", label: "Live Showcase" },
                            { val: "1st", label: "GenAI Design Lab in Dubai" }
                        ].map((m, i) => (
                            <div key={i} className="bg-white/10 backdrop-blur-md rounded-2xl p-10 border border-white/10 text-center">
                                <div className="text-[48px] font-bold mb-2">{m.val}</div>
                                <div className="text-[14px] font-medium opacity-80">{m.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 8: FROM SCREEN TO REALITY */}
            <section className="py-24 bg-[#F8F9FA]">
                <div className="max-w-[1120px] mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-[32px] md:text-[36px] font-bold text-[#1A1D23] mb-4">From Screen to Reality</h2>
                        <p className="text-[#6B7280] text-[16px]">Live showcase at GITEX Dubai 2025</p>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            "/AI Urban/02.png",
                            "/AI Urban/06.png",
                            "/AI Urban/7.png",
                            "/AI Urban/10.png"
                        ].map((src, i) => (
                            <div key={i} className="rounded-xl overflow-hidden border border-slate-200 shadow-md">
                                <img src={src} alt="Showcase" className="w-full h-48 object-cover bg-slate-200" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 9: OFFICIAL ACKNOWLEDGMENT */}
            <section className="py-24 bg-white relative">
                <div className="max-w-[1120px] mx-auto px-6 lg:px-8">
                    <h2 className="text-[32px] md:text-[36px] font-bold text-[#1A1D23] mb-16 text-center">Official Recognition</h2>
                    <div className="max-w-[800px] mx-auto bg-white border-2 border-[#F59E0B]/30 rounded-[32px] p-10 md:p-16 relative overflow-hidden shadow-2xl shadow-orange-500/5">
                        <div className="absolute top-0 right-0 p-32 bg-orange-50 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none -z-10"></div>
                        <Trophy className="w-12 h-12 text-[#F59E0B] mb-8" />
                        <h3 className="text-2xl font-bold text-[#1A1D23] mb-6 leading-relaxed">
                            Received official appreciation from RTA's AI & Data Science Center for innovation impact.
                        </h3>
                        <p className="text-[16px] text-[#6B7280] leading-[1.8]">
                            "The AI Urban Design Tool has fundamentally shifted how we visualize infrastructure projects, enabling rapid decision-making and showcasing the future of Dubai's AI strategy."
                        </p>
                        <div className="mt-8 pt-8 border-t border-slate-100 flex items-center justify-between gap-4">
                            <div className="text-sm font-bold text-[#1A1D23]">AI & Data Science Center, RTA</div>
                            <ExternalLink className="w-4 h-4 text-slate-300" />
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 10: CTA */}
            <section className="py-24 lg:py-32 bg-white text-center">
                <div className="max-w-[1120px] mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl md:text-5xl font-bold text-[#1A1D23] mb-8">Let's Build Something Innovative Together</h2>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
                        <button
                            onClick={() => navigate('/contact')}
                            className="w-full sm:w-auto px-8 py-4 bg-[#4169E1] text-white rounded-full font-bold shadow-lg shadow-blue-500/20 hover:bg-blue-600 transition-all flex items-center justify-center gap-2"
                        >
                            Get in Touch <ArrowRight className="w-4 h-4" />
                        </button>
                        <button
                            onClick={() => navigate('/')}
                            className="w-full sm:w-auto px-8 py-4 bg-white text-[#1A1D23] border border-[#E5E7EB] rounded-full font-bold hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
                        >
                            Next Project <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CaseStudyPage;