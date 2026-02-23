import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ArrowLeft, ArrowRight, Layers, Sparkles, Trophy,
    CheckCircle2, ChevronRight, ExternalLink, Clock, Send, Laptop, Layout,
    Palette, Type, Globe, AlertCircle, Loader2, X, ZoomIn, MessageSquare, BarChart2, TrendingUp
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

interface CaseStudyPageProps {
    onBack?: () => void;
}

// Reusable Browser Mockup wrapper
const BrowserMockup: React.FC<{ children: React.ReactNode; url?: string; className?: string }> = ({ children, url, className = '' }) => (
    <div className={`bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.1)] border border-slate-200 overflow-hidden ${className}`}>
        <div className="h-9 bg-slate-50 border-b border-slate-200 flex items-center px-4 gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400/70"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-amber-400/70"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/70"></div>
            {url && <div className="ml-3 text-[10px] text-slate-400 truncate">{url}</div>}
        </div>
        {children}
    </div>
);

// Dot grid pattern style
const dotGridStyle = {
    backgroundImage: 'radial-gradient(#4169E1 1.5px, transparent 1.5px)',
    backgroundSize: '40px 40px'
};

const CaseStudyPage: React.FC<CaseStudyPageProps> = ({ onBack }) => {
    const navigate = useNavigate();
    const [lightboxImg, setLightboxImg] = useState<string | null>(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Close lightbox on Escape
    useEffect(() => {
        const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') setLightboxImg(null); };
        window.addEventListener('keydown', handler);
        return () => window.removeEventListener('keydown', handler);
    }, []);

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
    };

    return (
        <div className="bg-white w-full overflow-hidden text-[#1A1D23] font-sans selection:bg-[#4169E1] selection:text-white">

            {/* ============================================================
                SECTION 1 — HERO (light, premium gradient + pattern)
                ============================================================ */}
            <section className="relative min-h-screen flex items-center overflow-hidden" style={{
                background: 'linear-gradient(135deg, #EEF2FF 0%, #F5F3FF 30%, #EFF6FF 60%, #F0FAFA 100%)'
            }}>

                {/* ── Background layers ── */}
                <div className="pointer-events-none absolute inset-0 z-0">

                    {/* SVG dot-grid pattern */}
                    <svg className="absolute inset-0 w-full h-full opacity-[0.35]" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="dots" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
                                <circle cx="1.5" cy="1.5" r="1.5" fill="#4169E1" fillOpacity="0.25" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#dots)" />
                    </svg>

                    {/* Large soft blue orb — top left */}
                    <div className="absolute rounded-full blur-[140px] opacity-[0.45]" style={{
                        width: '55vw', height: '55vw', top: '-20%', left: '-15%',
                        background: 'radial-gradient(circle, #C7D7FD 0%, transparent 70%)'
                    }} />

                    {/* Soft violet orb — bottom right */}
                    <div className="absolute rounded-full blur-[120px] opacity-[0.35]" style={{
                        width: '45vw', height: '45vw', bottom: '-15%', right: '-10%',
                        background: 'radial-gradient(circle, #DDD6FE 0%, transparent 70%)'
                    }} />

                    {/* Accent teal orb — centre-right */}
                    <div className="absolute rounded-full blur-[90px] opacity-[0.25]" style={{
                        width: '28vw', height: '28vw', top: '30%', right: '10%',
                        background: 'radial-gradient(circle, #BAE6FD 0%, transparent 70%)'
                    }} />

                    {/* Diagonal lines overlay (SVG) */}
                    <svg className="absolute inset-0 w-full h-full opacity-[0.08]" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="diag" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                                <line x1="0" y1="0" x2="0" y2="40" stroke="#4169E1" strokeWidth="0.5" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#diag)" />
                    </svg>

                    {/* Bottom fade to white */}
                    <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-b from-transparent to-white" />
                    {/* Top-left corner accent */}
                    <div className="absolute top-0 left-0 w-48 h-48 bg-gradient-to-br from-[#4169E1]/10 to-transparent rounded-br-full" />
                </div>

                {/* ── Content ── */}
                <div className="max-w-[1200px] mx-auto px-6 lg:px-12 relative z-10 w-full py-32 lg:py-0">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

                        {/* ── Left — Text ── */}
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={staggerContainer}
                            className="space-y-8 lg:space-y-9"
                        >
                            {/* Badge */}
                            <motion.div variants={fadeInUp}>
                                <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-[#4169E1]/20 shadow-sm shadow-blue-100">
                                    <span className="w-2 h-2 rounded-full bg-[#4169E1] animate-pulse" />
                                    <Sparkles className="w-3.5 h-3.5 text-[#4169E1]" />
                                    <span className="text-[11px] font-bold uppercase tracking-widest text-[#4169E1]">First GenAI Lab in Dubai Gov</span>
                                </div>
                            </motion.div>

                            {/* Headline */}
                            <motion.div variants={fadeInUp} className="space-y-3">
                                <h1 className="text-[52px] md:text-[64px] lg:text-[72px] font-bold leading-[1.02] tracking-tight font-display text-[#1A1D23]">
                                    AI Urban<br />
                                    <span className="bg-clip-text text-transparent" style={{
                                        backgroundImage: 'linear-gradient(135deg, #4169E1 0%, #7C3AED 55%, #0EA5E9 100%)'
                                    }}>
                                        Design Tool
                                    </span>
                                </h1>
                                <p className="text-[17px] md:text-[18px] text-[#4B5563] leading-[1.75] max-w-[480px]">
                                    Revolutionizing city planning with generative AI — transforming multi-day manual visualizations into minutes of intelligent generation.
                                </p>
                            </motion.div>

                            {/* Stat cards */}
                            <motion.div variants={fadeInUp} className="flex flex-wrap gap-3">
                                {[
                                    { val: '93%', label: 'Faster Workflow', icon: '⚡', color: '#4169E1' },
                                    { val: '5d → 8h', label: 'Time Reduction', icon: '⏱', color: '#7C3AED' },
                                    { val: "GITEX '25", label: 'Live Showcase', icon: '🏆', color: '#0EA5E9' },
                                ].map((m, i) => (
                                    <div key={i} className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white border border-slate-200/80 shadow-sm shadow-slate-100 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                                        <span className="text-[20px] leading-none">{m.icon}</span>
                                        <div>
                                            <div className="text-[18px] font-bold font-display leading-none mb-0.5" style={{ color: m.color }}>{m.val}</div>
                                            <div className="text-[11px] font-semibold text-[#9CA3AF] uppercase tracking-wider">{m.label}</div>
                                        </div>
                                    </div>
                                ))}
                            </motion.div>

                            {/* Recognition strip */}
                            <motion.div variants={fadeInUp}>
                                <div className="inline-flex items-center gap-3 px-4 py-2.5 rounded-xl bg-amber-50 border border-amber-200 shadow-sm">
                                    <Trophy className="w-4 h-4 text-amber-500 flex-shrink-0" />
                                    <span className="text-[12px] font-semibold text-amber-800">Officially recognized by RTA's AI &amp; Data Science Center</span>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* ── Right — Browser mockup ── */}
                        <motion.div
                            initial={{ opacity: 0, y: 30, scale: 0.97 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                            className="relative"
                        >
                            {/* Soft glow behind mockup */}
                            <div className="absolute -inset-8 rounded-3xl pointer-events-none" style={{
                                background: 'radial-gradient(ellipse at center, rgba(65,105,225,0.12) 0%, transparent 70%)'
                            }} />

                            {/* Gradient border ring */}
                            <div className="relative p-px rounded-2xl" style={{
                                background: 'linear-gradient(135deg, rgba(65,105,225,0.4) 0%, rgba(124,58,237,0.25) 50%, rgba(14,165,233,0.25) 100%)'
                            }}>
                                <BrowserMockup url="erta-urban-lab.gov.ae" className="group rounded-2xl overflow-hidden">
                                    <div className="p-1">
                                        <img
                                            src="/AI Urban/AI Urban Design Tool.png"
                                            alt="AI Urban Tool Interface"
                                            className="w-full h-auto rounded-b-[14px] transform group-hover:scale-[1.02] transition-transform duration-700"
                                        />
                                    </div>
                                </BrowserMockup>
                            </div>

                            {/* Floating GITEX badge */}
                            <motion.div
                                initial={{ opacity: 0, x: 20, y: 10 }}
                                animate={{ opacity: 1, x: 0, y: 0 }}
                                transition={{ delay: 0.8, duration: 0.5 }}
                                className="absolute -bottom-5 -left-5 flex items-center gap-2.5 px-4 py-2.5 bg-white rounded-xl shadow-xl border border-slate-100"
                            >
                                <img src="/Gitex-Global-2025-_-GCS.jpg" alt="GITEX" className="h-6 w-auto object-contain" />
                                <div className="w-px h-5 bg-slate-200" />
                                <span className="text-[11px] font-extrabold text-slate-800 uppercase tracking-wider">GITEX 2025</span>
                            </motion.div>

                            {/* Floating recognition badge */}
                            <motion.div
                                initial={{ opacity: 0, x: -20, y: -10 }}
                                animate={{ opacity: 1, x: 0, y: 0 }}
                                transition={{ delay: 1, duration: 0.5 }}
                                className="absolute -top-5 -right-4 flex items-center gap-2 px-3 py-2 bg-white rounded-xl shadow-lg border border-amber-100"
                            >
                                <span className="text-[16px]">🏆</span>
                                <div>
                                    <div className="text-[10px] font-bold text-amber-700 uppercase tracking-wider">Official</div>
                                    <div className="text-[10px] text-amber-600">RTA Recognition</div>
                                </div>
                            </motion.div>
                        </motion.div>

                    </div>
                </div>

                {/* Scroll cue */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
                >
                    <span className="text-[10px] uppercase tracking-widest text-[#9CA3AF] font-bold">Scroll</span>
                    <div className="w-px h-8 bg-gradient-to-b from-[#4169E1]/40 to-transparent animate-pulse" />
                </motion.div>
            </section>

            {/* ============================================================
                SECTION 2 — THE CHALLENGE
                ============================================================ */}
            <section className="py-20 bg-white">
                <div className="max-w-[1120px] mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
                        {/* Text — 60% */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={staggerContainer}
                            className="lg:col-span-3 space-y-8"
                        >
                            <motion.div variants={fadeInUp} className="flex items-center gap-4">
                                <div className="w-1.5 h-10 bg-[#4169E1] rounded-full flex-shrink-0"></div>
                                <h2 className="text-[32px] md:text-[36px] font-bold text-[#1A1D23] font-display">The Challenge</h2>
                            </motion.div>

                            <motion.div variants={fadeInUp} className="space-y-5">
                                <p className="text-[18px] text-[#4B5563] leading-[1.7]">
                                    Traditional urban design visualization was a bottleneck. For Dubai's RTA, creating high-fidelity concepts required days of manual 3D modeling for every single variation.
                                </p>
                                <p className="text-[18px] text-[#4B5563] leading-[1.7]">
                                    The "RTA Factory" tool was reaching its limits — it couldn't provide the <span className="font-bold text-[#1A1D23]">instant visual inspiration</span> needed for executive decision-making.
                                </p>
                            </motion.div>

                            {/* Before / After Card */}
                            <motion.div
                                variants={fadeInUp}
                                className="bg-white border border-[#E5E7EB] rounded-2xl overflow-hidden shadow-sm"
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2">
                                    <div className="bg-red-50/50 p-8 space-y-4 border-b md:border-b-0 md:border-r border-[#FECACA]">
                                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-700 text-[10px] font-bold uppercase tracking-wider">
                                            Before — The Bottleneck
                                        </div>
                                        <h4 className="text-[18px] font-bold text-[#991B1B]">Manual Process</h4>
                                        <ul className="space-y-2">
                                            {['Slow 3D modeling cycles (5+ days)', 'Manual Photoshop rendering per shot', 'Impossible to iterate quickly'].map((item, i) => (
                                                <li key={i} className="flex items-center gap-2 text-red-700/80 text-[15px]">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0"></div>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="bg-emerald-50/50 p-8 space-y-4">
                                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold uppercase tracking-wider">
                                            After — AI Transformation
                                        </div>
                                        <h4 className="text-[18px] font-bold text-[#166534]">AI-Powered Workflow</h4>
                                        <ul className="space-y-2">
                                            {['Instant style variations (8 hours)', 'Automated high-fidelity outputs', 'Infinite creative exploration'].map((item, i) => (
                                                <li key={i} className="flex items-center gap-2 text-emerald-700/80 text-[15px]">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0"></div>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Sidebar — 40% */}
                        <div className="lg:col-span-2">
                            <div className="bg-[#F8F9FA] rounded-2xl p-8 border border-slate-200 space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#4169E1] shadow-sm">
                                        <AlertCircle className="w-6 h-6" />
                                    </div>
                                    <h3 className="font-bold text-[18px]">Project Goal</h3>
                                </div>
                                <p className="text-[15px] text-[#6B7280] leading-relaxed">
                                    Integrate generative AI directly into the existing RTA planning ecosystem — enabling architects to visualize ideas in high-fidelity, instantly.
                                </p>
                                <div className="pt-2 space-y-3">
                                    {['RTA Brand Alignment', 'Bilingual Support (AR/EN)', 'UI State Management'].map((tag, i) => (
                                        <div key={i} className="flex items-center gap-3 text-[14px] font-medium text-[#4B5563]">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#4169E1]"></div>
                                            {tag}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============================================================
                SECTION 3 — FROM PHOTO TO CONCEPT IN 4 STEPS
                ============================================================ */}
            <section className="py-20 bg-[#F8F9FA] relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none opacity-[0.02] z-0" style={dotGridStyle}></div>
                <div className="max-w-[1120px] mx-auto px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                    >
                        <motion.div variants={fadeInUp} className="text-center mb-14 space-y-3">
                            <span className="text-[12px] font-bold text-[#4169E1] uppercase tracking-widest">Workflow Evolution</span>
                            <h2 className="text-[32px] md:text-[36px] font-bold text-[#1A1D23] font-display">From Photo to Concept in 4 Steps</h2>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                            {[
                                { step: '01', title: 'Upload Image', icon: <Send className="w-5 h-5" />, desc: 'Input source photo or basic urban sketch into the RTA Factory interface.' },
                                { step: '02', title: 'Select Style', icon: <Palette className="w-5 h-5" />, desc: 'Choose from Modern, Heritage, Minimalist or Futuristic architectural themes.' },
                                { step: '03', title: 'Generate', icon: <Sparkles className="w-5 h-5" />, desc: 'AI interprets the scene and reimagines it in the selected style within seconds.' },
                                { step: '04', title: 'Refine & Export', icon: <CheckCircle2 className="w-5 h-5" />, desc: 'Finalize the concept and download high-resolution outputs for stakeholder review.' }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    variants={fadeInUp}
                                    whileHover={{ y: -4, boxShadow: '0 12px 32px rgba(0,0,0,0.1)' }}
                                    className="bg-white p-8 rounded-2xl border border-[#E5E7EB] shadow-sm transition-all group"
                                >
                                    <div className="w-12 h-12 rounded-full bg-[#4169E1] text-white flex items-center justify-center text-[16px] font-bold mb-6">
                                        {i + 1}
                                    </div>
                                    <h4 className="text-[18px] font-bold text-[#1A1D23] font-display mb-3">{item.title}</h4>
                                    <p className="text-[14px] text-[#6B7280] leading-relaxed">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Full-width mockup */}
                        <motion.div variants={fadeInUp}>
                            <BrowserMockup url="erta-urban-lab.gov.ae/generator">
                                <img src="/AI Urban/AI Urban Design Tool.png" alt="RTA Factory Tool Interface" className="w-full h-auto" />
                            </BrowserMockup>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* ============================================================
                SECTION 4 — DESIGNING WITHIN BRAND CONSTRAINTS
                ============================================================ */}
            <section className="py-20 bg-white">
                <div className="max-w-[1120px] mx-auto px-6 lg:px-8">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                    >
                        <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-12">
                            <h2 className="text-[32px] md:text-[36px] font-bold text-[#1A1D23] mb-4 font-display">Designing Within Brand Constraints</h2>
                            <p className="text-[18px] text-[#4B5563] leading-[1.7]">
                                Maintaining RTA's local brand identity while pushing AI innovation — reconciling strict government visual standards with the dynamic needs of an AI-native interface.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Colors */}
                            <motion.div variants={fadeInUp} className="bg-white border border-[#E5E7EB] rounded-2xl p-8 space-y-5 flex flex-col items-center text-center">
                                <span className="text-[11px] font-bold uppercase tracking-widest text-[#9CA3AF]">Color Palette</span>
                                <div className="flex flex-wrap justify-center gap-3">
                                    {['#ee3a43', '#1A1D23', '#4169E1', '#F59E0B', '#10B981'].map((color, i) => (
                                        <div key={i} className="w-10 h-10 rounded-full border-2 border-white shadow-sm ring-1 ring-slate-100" style={{ backgroundColor: color }}></div>
                                    ))}
                                </div>
                                <p className="text-[13px] text-[#6B7280]">Primary RTA Red integrated with a modern AI extended palette.</p>
                            </motion.div>

                            {/* Typography */}
                            <motion.div variants={fadeInUp} className="bg-white border border-[#E5E7EB] rounded-2xl p-8 space-y-4 flex flex-col items-center text-center">
                                <span className="text-[11px] font-bold uppercase tracking-widest text-[#9CA3AF]">Typography</span>
                                <div className="flex flex-col items-center gap-1">
                                    <span className="text-4xl font-bold font-display text-[#1A1D23]">Aa</span>
                                    <span className="text-[18px] font-bold font-display">Space Grotesk</span>
                                    <span className="text-[14px] text-slate-400">DM Sans (Body)</span>
                                </div>
                                <p className="text-[13px] text-[#6B7280]">Technical precision balanced with human-friendly readability.</p>
                            </motion.div>

                            {/* Bilingual */}
                            <motion.div variants={fadeInUp} className="bg-white border border-[#E5E7EB] rounded-2xl p-8 space-y-5 flex flex-col items-center text-center">
                                <span className="text-[11px] font-bold uppercase tracking-widest text-[#9CA3AF]">Bilingual Interface</span>
                                <div className="flex items-center gap-4 bg-[#F8F9FA] p-3 rounded-xl border border-slate-100">
                                    <div className="px-3 py-1 bg-white border border-slate-200 rounded-md text-[12px] font-bold text-slate-400">EN</div>
                                    <div className="px-3 py-1 bg-[#4169E1] rounded-md text-[14px] font-bold text-white">العربية</div>
                                </div>
                                <p className="text-[13px] text-[#6B7280]">Seamless right-to-left (RTL) transitions for full local accessibility.</p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ============================================================
                SECTION 5 — AI GENERATION RESULTS (Dark)
                ============================================================ */}
            <section className="py-20 bg-[#111827] text-white relative overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#4169E1]/10 rounded-full blur-[120px] pointer-events-none"></div>
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>

                <div className="max-w-[1120px] mx-auto px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                    >
                        <motion.div variants={fadeInUp} className="text-center mb-16 space-y-3">
                            <span className="text-[12px] font-bold text-[#4169E1] uppercase tracking-widest">Generative Capabilities</span>
                            <h2 className="text-[32px] md:text-[36px] font-bold text-white font-display">AI Generation Results</h2>
                        </motion.div>

                        {/* Two large screenshots */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 mb-16">
                            {[
                                { img: '/AI Urban/7.png', label: 'Modern Style', glow: '#4169E1' },
                                { img: '/AI Urban/06.png', label: 'Heritage Style', glow: '#7C3AED' }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    variants={fadeInUp}
                                    className="space-y-5"
                                >
                                    <div className="relative group">
                                        {/* Glow */}
                                        <div className="absolute inset-0 rounded-2xl blur-2xl transition-opacity" style={{ background: `radial-gradient(ellipse at center, ${item.glow}20, transparent 70%)`, transform: 'scale(1.1)' }}></div>
                                        <div className="relative bg-white rounded-2xl p-2 shadow-[0_0_50px_rgba(65,105,225,0.2)] group">
                                            <div className="rounded-xl overflow-hidden">
                                                <img src={item.img} alt={item.label} className="w-full h-auto transform group-hover:scale-[1.03] transition-transform duration-700" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-center">
                                        <div className="px-5 py-2 bg-white/5 border border-white/10 backdrop-blur-md rounded-full text-[12px] font-bold text-[#4169E1] uppercase tracking-widest">
                                            {item.label}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Thumbnail strip */}
                        <motion.div variants={fadeInUp}>
                            <p className="text-[12px] text-slate-500 font-bold uppercase tracking-widest text-center mb-6">Explore More Styles</p>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                                {['/AI Urban/first sedction /11.png', '/AI Urban/first sedction /03.png', '/AI Urban/06.png', '/AI Urban/10.png'].map((img, i) => (
                                    <div key={i} className="rounded-xl overflow-hidden border border-white/10 group cursor-pointer aspect-video relative">
                                        <img src={img} alt={`Style ${i}`} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/0 transition-colors"></div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* ============================================================
                SECTION 6 — DESIGNING FOR AI UNCERTAINTY
                ============================================================ */}
            <section className="py-20 bg-[#F8F9FA] relative">
                <div className="absolute inset-0 pointer-events-none opacity-[0.02] z-0" style={dotGridStyle}></div>

                <div className="max-w-[1120px] mx-auto px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                    >
                        <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-14">
                            <span className="text-[12px] font-bold text-[#4169E1] uppercase tracking-widest block mb-3">UX for GenAI</span>
                            <h2 className="text-[32px] md:text-[36px] font-bold text-[#1A1D23] font-display mb-4">Designing for AI Uncertainty</h2>
                            <p className="text-[18px] text-[#4B5563] leading-[1.7]">
                                AI processes are non-linear. I designed multi-state UI feedback to ensure users always feel in control, even during complex AI operations.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: 'Generating State',
                                    icon: <Loader2 className="w-6 h-6 animate-spin" />,
                                    desc: 'Skeleton states and progress indicators manage expectations during the 30–45s generation window.',
                                    accent: 'bg-amber-400',
                                    iconBg: 'bg-amber-50 text-amber-500',
                                    previewBg: 'bg-amber-50'
                                },
                                {
                                    title: 'Error Management',
                                    icon: <AlertCircle className="w-6 h-6" />,
                                    desc: 'Clear conversational error messages and one-click retry paths guide users when prompts fail.',
                                    accent: 'bg-red-500',
                                    iconBg: 'bg-red-50 text-red-500',
                                    previewBg: 'bg-red-50'
                                },
                                {
                                    title: 'Success & Reveal',
                                    icon: <CheckCircle2 className="w-6 h-6" />,
                                    desc: 'High-impact transition animations celebrate the output while providing immediate next-step actions.',
                                    accent: 'bg-emerald-500',
                                    iconBg: 'bg-emerald-50 text-emerald-500',
                                    previewBg: 'bg-emerald-50'
                                }
                            ].map((card, i) => (
                                <motion.div
                                    key={i}
                                    variants={fadeInUp}
                                    whileHover={{ y: -6 }}
                                    className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden"
                                >
                                    <div className={`h-1.5 w-full ${card.accent}`}></div>
                                    <div className="p-8 space-y-5">
                                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${card.iconBg}`}>
                                            {card.icon}
                                        </div>
                                        <div>
                                            <h4 className="text-[20px] font-bold text-[#1A1D23] font-display mb-2">{card.title}</h4>
                                            <p className="text-[14px] text-[#6B7280] leading-relaxed">{card.desc}</p>
                                        </div>
                                        {/* UI Preview Placeholder */}
                                        <div className={`h-28 ${card.previewBg} rounded-xl border border-dashed border-slate-200 flex items-center justify-center`}>
                                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">UI State Preview</span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ============================================================
                SECTION 7 — MEASURABLE RESULTS
                ============================================================ */}
            <section className="py-20 bg-[#4169E1] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-[100px] -mr-48 -mt-48 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-700/30 rounded-full blur-[80px] pointer-events-none"></div>

                <div className="max-w-[1120px] mx-auto px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                    >
                        <motion.div variants={fadeInUp} className="text-center mb-14 space-y-3">
                            <span className="text-[12px] font-bold text-white/60 uppercase tracking-widest">Impact & Efficiency</span>
                            <h2 className="text-[32px] md:text-[36px] font-bold text-white font-display">Measurable Results</h2>
                        </motion.div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { val: '93%', label: 'Time Saving Efficiency' },
                                { val: '5d → 8h', label: 'Reduction per Concept' },
                                { val: '100%', label: 'Brand Design Alignment' },
                                { val: 'First', label: 'GenAI Lab in Dubai Gov' }
                            ].map((m, i) => (
                                <motion.div
                                    key={i}
                                    variants={fadeInUp}
                                    className="bg-white/10 backdrop-blur-md rounded-2xl p-10 border border-white/20 text-center group hover:bg-white/20 transition-colors"
                                >
                                    <div className="text-[56px] font-bold text-white mb-2 font-display leading-none">{m.val}</div>
                                    <div className="text-[14px] font-medium text-white/80">{m.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ============================================================
                SECTION 8 — FROM SCREEN TO REALITY (GITEX)
                ============================================================ */}
            <section className="py-20 bg-white overflow-hidden">
                <div className="max-w-[1120px] mx-auto px-6 lg:px-8">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                    >
                        <motion.div variants={fadeInUp} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div className="space-y-8">
                                <div>
                                    <span className="text-[12px] font-bold text-[#4169E1] uppercase tracking-widest block mb-3">Public Impact</span>
                                    <h2 className="text-[32px] md:text-[36px] font-bold text-[#1A1D23] font-display mb-5">From Screen to Reality</h2>
                                    <p className="text-[18px] text-[#4B5563] leading-[1.7]">
                                        The tool was showcased live at <span className="font-bold text-[#1A1D23]">GITEX Dubai 2025</span>, the world's largest tech exhibition — presented to government leaders and urban developers as the future of RTA's planning infrastructure.
                                    </p>
                                </div>
                                <div className="flex flex-wrap gap-3">
                                    {[
                                        { val: '3,000+', label: 'Live Demos' },
                                        { val: '98%', label: 'User Satisfaction' },
                                        { val: 'Day 1', label: 'Featured Project' }
                                    ].map((s, i) => (
                                        <div key={i} className="px-4 py-3 bg-white border border-slate-200 rounded-xl shadow-sm">
                                            <div className="text-[20px] font-bold text-[#4169E1] font-display">{s.val}</div>
                                            <div className="text-[12px] text-[#6B7280]">{s.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Overlapping GITEX photos */}
                            <div className="relative pt-12 pb-12">
                                <motion.div
                                    variants={fadeInUp}
                                    className="relative z-10 bg-white p-3 rounded-2xl shadow-2xl border border-slate-100 max-w-[400px] ml-auto -rotate-2"
                                >
                                    <img src="/AI Urban/first sedction /03.png" alt="GITEX Showcase" className="w-full h-auto rounded-xl" />
                                    <div className="absolute top-5 right-5 px-3 py-1 bg-[#F59E0B] text-white text-[10px] font-bold uppercase tracking-widest rounded-md shadow-lg -rotate-12">
                                        GITEX '25
                                    </div>
                                </motion.div>
                                <motion.div
                                    variants={fadeInUp}
                                    className="absolute top-0 left-0 z-0 bg-white p-3 rounded-2xl shadow-xl border border-slate-100 max-w-[360px] rotate-3"
                                >
                                    <img src="/AI Urban/first sedction /11.png" alt="GITEX Event" className="w-full h-auto rounded-xl grayscale-[40%]" />
                                </motion.div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* ============================================================
                SECTION 9 (NEW) — AI ASSISTANT FOR RAIL AGENCY
                ============================================================ */}
            <section className="py-20 bg-white relative">
                <div className="max-w-[1120px] mx-auto px-6 lg:px-8">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                    >
                        {/* Top row — overview */}
                        <motion.div variants={fadeInUp} className="grid grid-cols-1 lg:grid-cols-5 gap-14 items-center mb-16">
                            {/* Left — text 40% */}
                            <div className="lg:col-span-2 space-y-6">
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#7C3AED] text-white">
                                    <MessageSquare className="w-3.5 h-3.5" />
                                    <span className="text-[10px] font-bold uppercase tracking-wider">AI Assistant</span>
                                </div>
                                <div>
                                    <span className="text-[12px] font-bold text-[#6B7280] uppercase tracking-widest block mb-2">Beyond Urban Planning</span>
                                    <h2 className="text-[32px] md:text-[36px] font-bold text-[#1A1D23] font-display mb-4">Rail Agency AI Assistant</h2>
                                    <p className="text-[17px] text-[#4B5563] leading-[1.7]">
                                        A conversational AI interface for RTA's Rail Agency — enabling operations teams to analyze Metro and Tram ridership data through natural language queries instead of complex dashboards.
                                    </p>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {['Station Performance', 'Operational Patterns', 'Passenger Trends'].map((tag, i) => (
                                        <span key={i} className="px-3 py-1.5 bg-[#EDE9FE] text-[#7C3AED] text-[12px] font-bold rounded-full">{tag}</span>
                                    ))}
                                </div>
                                <div className="flex items-center gap-2 text-[14px] text-[#6B7280]">
                                    <Globe className="w-4 h-4" />
                                    Bilingual: English / العربية
                                </div>
                            </div>

                            {/* Right — Large screenshot 60% */}
                            <div className="lg:col-span-3">
                                <BrowserMockup url="rta-rail.gov.ae/ai-assistant" className="shadow-[0_20px_60px_rgba(124,58,237,0.12)]">
                                    <img
                                        src="/AI Assitance/Landing page.png"
                                        alt="Rail Agency AI Assistant"
                                        className="w-full h-auto"
                                    />
                                </BrowserMockup>
                            </div>
                        </motion.div>

                        {/* Bottom — 4-state grid */}
                        <motion.div variants={fadeInUp}>
                            <p className="text-[11px] font-bold text-[#9CA3AF] uppercase tracking-widest text-center mb-8">Conversation Flow — 4 States</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                                {[
                                    {
                                        label: '01 — Landing',
                                        img: '/AI Assitance/Landing page.png',
                                        desc: 'Clean onboarding with capability cards and suggested queries'
                                    },
                                    {
                                        label: '02 — Query Selection',
                                        img: '/AI Assitance/02 Landing page with active ready questions.png',
                                        desc: 'Highlighted selection state with visual feedback on hover'
                                    },
                                    {
                                        label: '03 — Processing',
                                        img: '/AI Assitance/03 chat area for skeleton loading answers.png',
                                        desc: 'Skeleton loading with status indicator during AI analysis'
                                    },
                                    {
                                        label: '04 — AI Response',
                                        img: '/AI Assitance/04 chat area with answers and follow up questions , and input active ,.png',
                                        desc: 'Structured AI response with contextual follow-up suggestions'
                                    }
                                ].map((state, i) => (
                                    <div key={i} className="bg-white border border-[#E5E7EB] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
                                        <p className="text-[11px] font-bold text-[#9CA3AF] uppercase tracking-widest px-5 pt-5 pb-3">{state.label}</p>
                                        <div className="overflow-hidden">
                                            <img
                                                src={state.img}
                                                alt={state.label}
                                                className="w-full h-auto transform group-hover:scale-[1.02] transition-transform duration-500"
                                            />
                                        </div>
                                        <p className="text-[13px] text-[#6B7280] px-5 py-4">{state.desc}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Design callout */}
                            <div className="bg-[#F5F3FF] rounded-2xl p-10">
                                <h3 className="text-[20px] font-bold text-[#1A1D23] mb-8 font-display">Design Decisions</h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                    {[
                                        { title: 'Suggested Queries', body: 'Pre-populated questions reduce blank-screen anxiety and guide first interaction' },
                                        { title: 'Progressive Loading', body: 'Skeleton loading with status text keeps users informed during AI processing time' },
                                        { title: 'Follow-up Prompts', body: 'Context-aware suggestions after each response encourage deeper exploration' }
                                    ].map((item, i) => (
                                        <div key={i} className="space-y-2">
                                            <div className="w-8 h-8 rounded-xl bg-[#7C3AED]/10 flex items-center justify-center text-[#7C3AED] mb-3">
                                                {i === 0 ? <Sparkles className="w-4 h-4" /> : i === 1 ? <Loader2 className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                                            </div>
                                            <h4 className="text-[15px] font-bold text-[#1A1D23]">{item.title}</h4>
                                            <p className="text-[14px] text-[#6B7280] leading-relaxed">{item.body}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* ============================================================
                SECTION 10 — OFFICIAL RECOGNITION (Two Certificate Cards)
                ============================================================ */}
            <section className="py-20 bg-[#F8F9FA] relative">
                <div className="absolute inset-0 pointer-events-none opacity-[0.02] z-0" style={dotGridStyle}></div>

                <div className="max-w-[1120px] mx-auto px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                    >
                        <motion.div variants={fadeInUp} className="text-center mb-12">
                            <h2 className="text-[32px] md:text-[36px] font-bold text-[#1A1D23] font-display mb-3">Official Recognition</h2>
                            <p className="text-[16px] text-[#6B7280]">Recognized by RTA leadership for AI innovation impact — December 2025</p>
                        </motion.div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Certificate Card 1 */}
                            <motion.div
                                variants={fadeInUp}
                                whileHover={{ y: -6, boxShadow: '0 20px 48px rgba(0,0,0,0.12)' }}
                                className="bg-white rounded-2xl border border-[#E5E7EB] overflow-hidden shadow-sm transition-all cursor-pointer group"
                                onClick={() => setLightboxImg('/certificate 1.jpeg')}
                            >
                                <div className="overflow-hidden">
                                    <img
                                        src="/certificate 1.jpeg"
                                        alt="AI & Data Science Center Certificate"
                                        className="w-full h-auto transform group-hover:scale-[1.02] transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-6 space-y-4">
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#FEF3C7] text-[#92400E] text-[12px] font-bold rounded-full">
                                        🏆 AI & Data Science Center
                                    </span>
                                    <h3 className="text-[20px] font-bold text-[#1A1D23] font-display">Certificate of Appreciation — Innovation Impact</h3>
                                    <p className="text-[15px] text-[#6B7280] leading-[1.6]">
                                        Official recognition from RTA's AI & Data Science Center for outstanding contributions to AI-powered dashboards and innovation excellence.
                                    </p>
                                    <div className="pt-2 border-t border-slate-100">
                                        <p className="text-[14px] text-[#9CA3AF] italic">Hamad Ahmed Dheyab — Manager, AI & Data Science</p>
                                        <p className="text-[13px] text-[#9CA3AF] mt-1">December 2025</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Certificate Card 2 */}
                            <motion.div
                                variants={fadeInUp}
                                whileHover={{ y: -6, boxShadow: '0 20px 48px rgba(0,0,0,0.12)' }}
                                className="bg-white rounded-2xl border border-[#E5E7EB] overflow-hidden shadow-sm transition-all cursor-pointer group"
                                onClick={() => setLightboxImg('/Gitex Certificate copy.jpg')}
                            >
                                <div className="overflow-hidden">
                                    <img
                                        src="/Gitex Certificate copy.jpg"
                                        alt="GITEX 2025 Certificate"
                                        className="w-full h-auto transform group-hover:scale-[1.02] transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-6 space-y-4">
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#EDE9FE] text-[#7C3AED] text-[12px] font-bold rounded-full">
                                        🎪 GITEX Dubai 2025
                                    </span>
                                    <h3 className="text-[20px] font-bold text-[#1A1D23] font-display">Certificate of Appreciation — GITEX 2025 Showcase</h3>
                                    <p className="text-[15px] text-[#6B7280] leading-[1.6]">
                                        Recognized for outstanding contributions to RTA's successful participation at GITEX Global 2025 — the world's largest tech exhibition.
                                    </p>
                                    <div className="pt-2 border-t border-slate-100">
                                        <p className="text-[14px] text-[#9CA3AF] italic">Hamad Al Mutarab — CEO, Corporate Technical Support Services Sector</p>
                                        <p className="text-[13px] text-[#9CA3AF] mt-1">December 2025</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ============================================================
                SECTION 11 — CTA
                ============================================================ */}
            <section className="py-20 bg-white text-center">
                <div className="max-w-[800px] mx-auto px-6 lg:px-8">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                    >
                        <motion.div variants={fadeInUp}>
                            <span className="text-[12px] font-bold text-[#9CA3AF] uppercase tracking-widest block mb-4">Next</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-[#1A1D23] mb-10 font-display">Let's Build Something Innovative Together</h2>
                        </motion.div>
                        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <button
                                onClick={() => navigate('/contact')}
                                className="w-full sm:w-auto px-8 py-4 bg-[#4169E1] text-white rounded-full font-bold shadow-lg shadow-blue-500/20 hover:bg-blue-600 transition-all flex items-center justify-center gap-2"
                            >
                                Get in Touch <ArrowRight className="w-4 h-4" />
                            </button>
                            <button
                                onClick={() => navigate('/work')}
                                className="w-full sm:w-auto px-8 py-4 bg-white text-[#1A1D23] border border-[#E5E7EB] rounded-full font-bold hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
                            >
                                View All Projects <ChevronRight className="w-4 h-4" />
                            </button>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* ============================================================
                LIGHTBOX MODAL
                ============================================================ */}
            <AnimatePresence>
                {lightboxImg && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-6"
                        onClick={() => setLightboxImg(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.9 }}
                            className="relative max-w-4xl w-full"
                            onClick={e => e.stopPropagation()}
                        >
                            <img src={lightboxImg} alt="Certificate" className="w-full h-auto rounded-2xl shadow-2xl" />
                            <button
                                onClick={() => setLightboxImg(null)}
                                className="absolute top-4 right-4 w-10 h-10 bg-black/60 text-white rounded-full flex items-center justify-center hover:bg-black/80 transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

        </div>
    );
};

export default CaseStudyPage;