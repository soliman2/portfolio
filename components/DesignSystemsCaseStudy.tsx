import React from 'react';
import { motion } from 'framer-motion';
import {
    ArrowLeft, ArrowRight, Layers, Shield, Globe, Layout,
    CheckCircle2, Smartphone, Monitor, Database, Settings,
    Code, Command, ToggleLeft, Palette, Type, Grid, MousePointer2
} from 'lucide-react';

interface DesignSystemsCaseStudyProps {
    onBack: () => void;
}

const DesignSystemsCaseStudy: React.FC<DesignSystemsCaseStudyProps> = ({ onBack }) => {

    // Animation Variants
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

    const floatAnimation = (duration = 6) => ({
        y: [0, -15, 0],
        transition: {
            duration: duration,
            repeat: Infinity,
            ease: "easeInOut"
        }
    });

    return (
        <div className="bg-white w-full overflow-hidden text-[#1A1D23] font-sans selection:bg-[#7C3AED] selection:text-white">

            {/* Navigation Spacer */}
            <div className="h-20 lg:h-24 bg-[#1A1D23]"></div>

            {/* ==============================================================================
            SECTION 1: HERO
           ============================================================================== */}
            <section className="relative py-12 lg:py-20 bg-[#1A1D23] text-white overflow-hidden min-h-[80vh] flex items-center justify-center">

                {/* Floating Components Background */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {/* Top Left - Button Card */}
                    <motion.div
                        animate={floatAnimation(5)}
                        className="absolute top-[10%] left-[5%] md:left-[10%] bg-white p-4 rounded-xl shadow-2xl opacity-10 md:opacity-100 rotate-[-6deg]"
                    >
                        <div className="flex gap-3 items-center">
                            <div className="px-6 py-2 bg-[#4169E1] rounded-lg text-xs font-bold text-white">Button</div>
                            <div className="px-6 py-2 bg-[#4169E1]/20 rounded-lg text-xs font-bold text-[#4169E1]">Hover</div>
                        </div>
                    </motion.div>

                    {/* Top Right - Input Card */}
                    <motion.div
                        animate={floatAnimation(7)}
                        className="absolute top-[15%] right-[5%] md:right-[15%] bg-white p-4 rounded-xl shadow-2xl opacity-10 md:opacity-100 rotate-[4deg]"
                    >
                        <div className="space-y-2 w-48">
                            <div className="text-[10px] text-slate-400 font-bold uppercase">Label</div>
                            <div className="h-8 w-full border border-slate-200 rounded-lg bg-slate-50"></div>
                        </div>
                    </motion.div>

                    {/* Bottom Left - Toggle Card */}
                    <motion.div
                        animate={floatAnimation(6)}
                        className="absolute bottom-[20%] left-[8%] bg-white p-4 rounded-xl shadow-2xl opacity-10 md:opacity-100 rotate-[8deg]"
                    >
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-6 bg-[#10B981] rounded-full relative">
                                <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow"></div>
                            </div>
                            <div className="h-2 w-20 bg-slate-200 rounded-full"></div>
                        </div>
                    </motion.div>

                    {/* Bottom Right - Dropdown */}
                    <motion.div
                        animate={floatAnimation(8)}
                        className="absolute bottom-[15%] right-[10%] bg-white p-4 rounded-xl shadow-2xl opacity-10 md:opacity-100 rotate-[-3deg]"
                    >
                        <div className="w-40 space-y-2">
                            <div className="h-2 w-full bg-slate-100 rounded-full"></div>
                            <div className="h-px w-full bg-slate-100 my-2"></div>
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-[#7C3AED]"></div>
                                <div className="h-2 w-16 bg-slate-200 rounded-full"></div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                                <div className="h-2 w-12 bg-slate-200 rounded-full"></div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <div className="max-w-[1120px] mx-auto px-6 lg:px-8 relative z-10 text-center">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="max-w-4xl mx-auto"
                    >
                        {/* Tag */}
                        <motion.div variants={fadeInUp} className="inline-block px-3.5 py-1.5 rounded-md bg-[#7C3AED] text-white text-[11px] font-bold uppercase tracking-[0.08em] mb-8 shadow-lg shadow-purple-500/20">
                            Design Systems
                        </motion.div>

                        {/* Title */}
                        <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-[56px] font-bold font-display mb-8 leading-[1.1] tracking-tight">
                            Design Systems <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] to-[#4169E1]">at Scale</span>
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-white/70 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
                            Building consistent experiences for 12M+ users across government, fintech, and public services.
                        </motion.p>

                        {/* Stats Row */}
                        <motion.div variants={fadeInUp} className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-12 max-w-3xl mx-auto">
                            {[
                                { val: "5+", label: "Systems" },
                                { val: "12M+", label: "Users" },
                                { val: "RTL/LTR", label: "Native" },
                                { val: "3", label: "Platforms" },
                            ].map((stat, i) => (
                                <div key={i} className="text-center">
                                    <div className="text-3xl font-bold font-display text-white mb-1">{stat.val}</div>
                                    <div className="text-sm font-medium text-white/60">{stat.label}</div>
                                </div>
                            ))}
                        </motion.div>

                        {/* CTA */}
                        <motion.div variants={fadeInUp} className="mt-16 flex flex-col sm:flex-row justify-center gap-4">
                            <button
                                onClick={() => document.getElementById('overview')?.scrollIntoView({ behavior: 'smooth' })}
                                className="px-8 py-4 bg-[#7C3AED] text-white rounded-full font-bold hover:bg-[#6D28D9] transition-all shadow-lg shadow-purple-900/50 hover:-translate-y-1"
                            >
                                Explore Systems
                            </button>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* ==============================================================================
            SECTION 2: SYSTEMS OVERVIEW
           ============================================================================== */}
            <section id="overview" className="py-12 lg:py-20 bg-white relative">
                <div className="max-w-[1120px] mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-xs font-bold text-[#4169E1] uppercase tracking-widest font-display block mb-3">Overview</span>
                        <h2 className="text-[32px] md:text-[36px] font-bold font-display text-[#1A1D23]">Systems I've Built & Maintained</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Card 1: RTA Portal */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-white rounded-2xl p-8 border border-slate-200 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:border-[#7C3AED]/30 hover:shadow-xl transition-all cursor-pointer group"
                            onClick={() => document.getElementById('rta-portal')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            <div className="w-12 h-12 rounded-xl bg-[#ee3a43]/10 flex items-center justify-center mb-6 group-hover:bg-[#ee3a43] transition-colors">
                                <Monitor className="w-6 h-6 text-[#ee3a43] group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold font-display text-[#1A1D23] mb-2">RTA Portal DS</h3>
                            <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Government • Flagship</p>
                            <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                                Flagship system serving 12M+ users across 30+ services on desktop, tablet, and mobile.
                            </p>
                            <div className="flex items-center text-[#7C3AED] text-sm font-bold group-hover:gap-2 transition-all">
                                View Details <ArrowRight className="w-4 h-4 ml-1" />
                            </div>
                        </motion.div>

                        {/* Card 2: S'hail & DDA (Merged) */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-white rounded-2xl p-8 border border-slate-200 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:border-[#7C3AED]/30 hover:shadow-xl transition-all cursor-pointer group"
                            onClick={() => document.getElementById('shail')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                                <Globe className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold font-display text-[#1A1D23] mb-2">S'hail & DDA Shared Channels</h3>
                            <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Government • iOS/Android</p>
                            <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                                Adapting Digital Dubai Authority's city-wide design standards to RTA's S'hail mobile app — maintaining consistency with the broader Dubai government ecosystem.
                            </p>
                            <div className="flex items-center text-[#7C3AED] text-sm font-bold group-hover:gap-2 transition-all">
                                View Details <ArrowRight className="w-4 h-4 ml-1" />
                            </div>
                        </motion.div>

                        {/* Card 3: Licensing */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-white rounded-2xl p-8 border border-slate-200 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:border-[#7C3AED]/30 hover:shadow-xl transition-all cursor-pointer group"
                            onClick={() => document.getElementById('licensing')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center mb-6 group-hover:bg-slate-800 transition-colors">
                                <Database className="w-6 h-6 text-slate-600 group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold font-display text-[#1A1D23] mb-2">Licensing Back-Office</h3>
                            <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Government • Internal</p>
                            <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                                Complex multi-role dashboard system for managing the full vehicle licensing lifecycle.
                            </p>
                            <div className="flex items-center text-[#7C3AED] text-sm font-bold group-hover:gap-2 transition-all">
                                View Details <ArrowRight className="w-4 h-4 ml-1" />
                            </div>
                        </motion.div>

                        {/* Card 4: Fawry */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-white rounded-2xl p-8 border border-slate-200 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:border-[#7C3AED]/30 hover:shadow-xl transition-all cursor-pointer group"
                            onClick={() => document.getElementById('fawry')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            <div className="w-12 h-12 rounded-xl bg-yellow-100 flex items-center justify-center mb-6 group-hover:bg-yellow-500 transition-colors">
                                <Layers className="w-6 h-6 text-yellow-600 group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold font-display text-[#1A1D23] mb-2">Fawry Loyalty DS</h3>
                            <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Fintech • SaaS</p>
                            <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                                Built from scratch for Egypt's leading fintech, enabling self-service loyalty program management.
                            </p>
                            <div className="flex items-center text-[#7C3AED] text-sm font-bold group-hover:gap-2 transition-all">
                                View Details <ArrowRight className="w-4 h-4 ml-1" />
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* ==============================================================================
            SECTION 3: PHILOSOPHY
           ============================================================================== */}
            <section className="py-12 lg:py-20 bg-[#F8F9FA] border-y border-slate-200">
                <div className="max-w-[1120px] mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-xs font-bold text-[#4169E1] uppercase tracking-widest font-display block mb-3">Philosophy</span>
                        <h2 className="text-[32px] md:text-[36px] font-bold font-display text-[#1A1D23] mb-4">How I Build Design Systems</h2>
                        <p className="text-slate-600 text-lg">Principles that guide every system I create</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                icon: <Shield className="w-8 h-8 text-[#7C3AED]" />,
                                title: "Governance First",
                                desc: "Clear rules and documentation before components. If it's not documented, it doesn't exist."
                            },
                            {
                                icon: <Layout className="w-8 h-8 text-[#7C3AED]" />,
                                title: "Built for Scale",
                                desc: "Multi-brand, multi-platform architecture. Systems designed to grow with the product."
                            },
                            {
                                icon: <Globe className="w-8 h-8 text-[#7C3AED]" />,
                                title: "RTL/LTR Native",
                                desc: "Arabic-first, bilingual by default. Built-in mirroring support, not an afterthought."
                            },
                            {
                                icon: <Command className="w-8 h-8 text-[#7C3AED]" />,
                                title: "Figma Mastery",
                                desc: "Advanced variants, variables, tokens, and auto-layout. Technical excellence in every file."
                            }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                                <div className="mb-6 bg-purple-50 w-16 h-16 rounded-full flex items-center justify-center">{item.icon}</div>
                                <h3 className="text-xl font-bold font-display text-[#1A1D23] mb-3">{item.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ==============================================================================
            SECTION 4: RTA PORTAL (FLAGSHIP)
           ============================================================================== */}
            <section id="rta-portal" className="py-12 lg:py-20 bg-[#1A1D23] text-white relative overflow-hidden">
                <div className="absolute top-0 left-0 text-[120px] md:text-[200px] font-bold font-display text-white/5 leading-none -translate-y-1/4 -translate-x-1/4 pointer-events-none">01</div>

                <div className="max-w-[1120px] mx-auto px-6 lg:px-8 relative z-10">
                    <div className="mb-16">
                        <div className="text-xs font-bold text-[#7C3AED] uppercase tracking-widest mb-4">Flagship System</div>
                        <h2 className="text-[32px] md:text-[36px] font-bold font-display text-white mb-6">RTA Portal Design System</h2>
                        <p className="text-xl text-white/70 max-w-2xl leading-relaxed">The backbone of Dubai's transport services, ensuring consistency across 30+ public services.</p>
                    </div>

                    <div className="flex flex-wrap gap-3 mb-12">
                        {["RTA Dubai", "12M+ Users", "30+ Services", "Desktop/Tablet/Mobile"].map((tag, i) => (
                            <span key={i} className="px-4 py-2 bg-white/10 rounded-full text-sm font-bold text-white border border-white/10">{tag}</span>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
                        <div className="bg-[#2B3544] p-8 rounded-2xl border border-white/5">
                            <h3 className="text-xl font-bold font-display text-white mb-4">The Challenge</h3>
                            <p className="text-slate-300 leading-relaxed">
                                Maintain visual and functional consistency across 30+ public services, corporate dashboards, and back-office systems — while supporting bilingual (Arabic/English) experiences and strict government brand guidelines.
                            </p>
                        </div>
                        <div className="bg-[#2B3544] p-8 rounded-2xl border border-white/5">
                            <h3 className="text-xl font-bold font-display text-white mb-4">My Solution</h3>
                            <p className="text-slate-300 leading-relaxed">
                                Built and maintained a comprehensive Figma design system with responsive components, design tokens, and RTL/LTR variants. Created documentation and governance processes that enabled consistent delivery across multiple teams.
                            </p>
                        </div>
                    </div>

                    {/* Visual Showcase Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-xl overflow-hidden p-2 group">
                            <div className="bg-slate-100 rounded-lg aspect-[4/3] relative overflow-hidden flex flex-col items-center justify-center p-4">
                                <div className="text-center mb-4">
                                    <div className="text-xs font-bold text-slate-400 uppercase mb-2">Variables & Tokens</div>
                                    <div className="flex gap-2 justify-center">
                                        <div className="w-8 h-8 rounded-full bg-[#ee3a43]"></div>
                                        <div className="w-8 h-8 rounded-full bg-[#1A1D23]"></div>
                                        <div className="w-8 h-8 rounded-full bg-slate-200"></div>
                                    </div>
                                </div>
                                <div className="w-full h-2 bg-slate-200 rounded-full mb-2"></div>
                                <div className="w-2/3 h-2 bg-slate-200 rounded-full"></div>
                            </div>
                            <div className="p-4">
                                <h4 className="font-bold text-[#1A1D23]">Variables & Tokens</h4>
                                <p className="text-xs text-slate-500 mt-1">Semantic color and spacing architecture</p>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl overflow-hidden p-2 group">
                            <div className="bg-slate-100 rounded-lg aspect-[4/3] relative overflow-hidden flex flex-col items-center justify-center p-4 space-y-3">
                                <button className="px-6 py-2 bg-[#ee3a43] text-white rounded font-bold text-sm shadow-sm w-32">Primary</button>
                                <button className="px-6 py-2 bg-white border border-slate-300 text-slate-700 rounded font-bold text-sm shadow-sm w-32">Secondary</button>
                                <button className="px-6 py-2 bg-slate-200 text-slate-400 rounded font-bold text-sm w-32 cursor-not-allowed">Disabled</button>
                            </div>
                            <div className="p-4">
                                <h4 className="font-bold text-[#1A1D23]">Component Variants</h4>
                                <p className="text-xs text-slate-500 mt-1">Interactive states and properties</p>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl overflow-hidden p-2 group">
                            <div className="bg-slate-100 rounded-lg aspect-[4/3] relative overflow-hidden flex items-center justify-center p-4">
                                <div className="grid grid-cols-2 gap-4 w-full">
                                    <div className="bg-white p-3 rounded shadow-sm">
                                        <div className="flex gap-2">
                                            <div className="w-4 h-4 rounded-full bg-slate-200"></div>
                                            <div className="h-4 w-16 bg-slate-200 rounded"></div>
                                        </div>
                                        <div className="text-[8px] text-slate-400 mt-2 text-center">English (LTR)</div>
                                    </div>
                                    <div className="bg-white p-3 rounded shadow-sm text-right">
                                        <div className="flex gap-2 flex-row-reverse">
                                            <div className="w-4 h-4 rounded-full bg-slate-200"></div>
                                            <div className="h-4 w-16 bg-slate-200 rounded"></div>
                                        </div>
                                        <div className="text-[8px] text-slate-400 mt-2 text-center">Arabic (RTL)</div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4">
                                <h4 className="font-bold text-[#1A1D23]">RTL/LTR Support</h4>
                                <p className="text-xs text-slate-500 mt-1">Native mirroring logic</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ==============================================================================
            SECTION 5: S'HAIL & DDA (MERGED)
           ============================================================================== */}
            <section id="shail" className="py-12 lg:py-20 bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 text-[120px] md:text-[200px] font-bold font-display text-slate-100 leading-none -translate-y-1/4 translate-x-1/4 pointer-events-none">02</div>

                <div className="max-w-[1120px] mx-auto px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-[32px] md:text-[36px] font-bold font-display text-[#1A1D23] mb-4">S'hail & DDA Shared Channels</h2>
                            <p className="text-xl text-slate-600 mb-8">Adapting Dubai-wide standards to RTA's mobile experience</p>

                            <div className="space-y-8">
                                <div>
                                    <h4 className="text-sm font-bold text-[#4169E1] uppercase tracking-wider mb-2">The Context</h4>
                                    <p className="text-slate-600 leading-relaxed">
                                        Digital Dubai Authority (DDA) established shared design standards for all Dubai government digital channels. These standards ensure consistency across apps and websites from different government entities — creating a unified citizen experience across Dubai.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-[#4169E1] uppercase tracking-wider mb-2">The Challenge</h4>
                                    <p className="text-slate-600 leading-relaxed">
                                        RTA's S'hail app needed to follow DDA standards while maintaining its own identity as Dubai's primary transport app. The challenge was adapting an external, city-wide design system to a specific agency's needs without breaking consistency with the broader ecosystem.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-[#4169E1] uppercase tracking-wider mb-2">My Solution</h4>
                                    <p className="text-slate-600 leading-relaxed">
                                        I customized and maintained the DDA design system for S'hail, creating a token-based customization layer that allowed RTA branding while staying compliant with Dubai-wide standards.
                                    </p>
                                </div>

                                <ul className="space-y-2">
                                    <li className="flex items-center gap-3 text-sm font-bold text-[#1A1D23]">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-500" /> Token-Based Customization
                                    </li>
                                    <li className="flex items-center gap-3 text-sm font-bold text-[#1A1D23]">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-500" /> S'hail Mobile Components (iOS/Android)
                                    </li>
                                    <li className="flex items-center gap-3 text-sm font-bold text-[#1A1D23]">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-500" /> Events Module UI
                                    </li>
                                    <li className="flex items-center gap-3 text-sm font-bold text-[#1A1D23]">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-500" /> Usability Testing
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 rotate-2 shadow-xl">
                                <div className="grid grid-cols-2 gap-4">
                                    {/* Mock Mobile Screen 1 */}
                                    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden aspect-[9/16] shadow-sm relative">
                                        <div className="h-6 bg-slate-100 border-b border-slate-200"></div>
                                        <div className="p-3">
                                            <div className="h-8 w-24 bg-blue-100 rounded-lg mb-4"></div>
                                            <div className="space-y-2">
                                                <div className="h-16 bg-slate-50 rounded-lg border border-slate-100"></div>
                                                <div className="h-16 bg-slate-50 rounded-lg border border-slate-100"></div>
                                                <div className="h-16 bg-slate-50 rounded-lg border border-slate-100"></div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Mock Mobile Screen 2 */}
                                    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden aspect-[9/16] shadow-sm relative mt-8">
                                        <div className="h-6 bg-slate-100 border-b border-slate-200"></div>
                                        <div className="p-3">
                                            <div className="h-32 bg-slate-100 rounded-lg mb-4 w-full"></div>
                                            <div className="h-8 bg-[#1A1D23] rounded-lg w-full"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ==============================================================================
            SECTION 6: LICENSING BACK OFFICE
           ============================================================================== */}
            <section id="licensing" className="py-12 lg:py-20 bg-[#1A1D23] text-white relative overflow-hidden">
                <div className="absolute top-0 left-0 text-[120px] md:text-[200px] font-bold font-display text-white/5 leading-none -translate-y-1/4 -translate-x-1/4 pointer-events-none">03</div>

                <div className="max-w-[1120px] mx-auto px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-[32px] md:text-[36px] font-bold font-display text-white mb-4">Licensing Back-Office System</h2>
                        <p className="text-xl text-white/70">Multi-role dashboards for complex government workflows</p>
                    </div>

                    <div className="bg-[#2B3544] rounded-2xl p-8 border border-white/5 mb-16 relative overflow-hidden">
                        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-4 gap-4 items-center text-center lg:text-left">
                            {["Application", "Review", "Inspection", "Approval"].map((step, i) => (
                                <div key={i} className="flex flex-col items-center lg:items-start relative">
                                    <div className="w-8 h-8 rounded-full bg-[#4169E1] flex items-center justify-center text-sm font-bold mb-3">
                                        {i + 1}
                                    </div>
                                    <h4 className="font-bold text-white mb-1">{step}</h4>
                                    <p className="text-xs text-slate-400">Role-based UI</p>
                                    {i < 3 && <div className="hidden lg:block absolute top-4 left-8 w-[calc(100%-2rem)] h-px bg-white/10"></div>}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-xl font-bold font-display text-white mb-4">The Challenge</h3>
                            <p className="text-slate-300 leading-relaxed">
                                RTA's Licensing division involves multiple roles — reviewers, inspectors, finance officers, and section managers — each with different permissions. The workflow needed consistent UI patterns across all roles.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold font-display text-white mb-4">My Solution</h3>
                            <p className="text-slate-300 leading-relaxed">
                                Designed role-based dashboard patterns with consistent navigation, data tables, action flows, and status indicators. Created a component library that could flex to different role needs.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ==============================================================================
            SECTION 7: FAWRY
           ============================================================================== */}
            <section id="fawry" className="py-12 lg:py-20 bg-white relative">
                <div className="absolute top-0 right-0 text-[120px] md:text-[200px] font-bold font-display text-slate-100 leading-none -translate-y-1/4 translate-x-1/4 pointer-events-none">04</div>

                <div className="max-w-[1120px] mx-auto px-6 lg:px-8">
                    <div className="max-w-[800px] mx-auto">

                        {/* Fawry */}
                        <div className="bg-slate-50 rounded-2xl p-8 md:p-12 border border-slate-200">
                            <h3 className="text-[32px] md:text-[36px] font-bold font-display text-[#1A1D23] mb-2">Fawry Loyalty DS</h3>
                            <div className="text-sm font-bold text-yellow-600 uppercase tracking-widest mb-6">Fintech • SaaS</div>

                            <p className="text-slate-600 mb-8 leading-relaxed">
                                Built a complete design system from scratch for Egypt's leading fintech. The Loyalty Dashboard lets businesses create and manage programs independently, shifting the product from consultant-dependent to self-service.
                            </p>

                            <ul className="space-y-2 mb-8">
                                <li className="text-sm text-slate-700 font-medium">• 8pt Grid System</li>
                                <li className="text-sm text-slate-700 font-medium">• Semantic Color Palette</li>
                                <li className="text-sm text-slate-700 font-medium">• Complex Data Tables</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </section>

            {/* ==============================================================================
            SECTION 8: TECHNICAL FIGMA
           ============================================================================== */}
            <section className="py-12 lg:py-20 bg-[#F8F9FA] border-t border-slate-200">
                <div className="max-w-[1120px] mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-xs font-bold text-[#4169E1] uppercase tracking-widest font-display block mb-3">Under The Hood</span>
                        <h2 className="text-[32px] md:text-[36px] font-bold font-display text-[#1A1D23]">Technical Excellence in Figma</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "Advanced Variants", desc: "Multi-property variants with boolean, state, and size combinations" },
                            { title: "Design Tokens", desc: "Color, spacing, and typography tokens for multi-brand support" },
                            { title: "Auto-Layout Mastery", desc: "Responsive components that adapt to content and container" },
                            { title: "Bidirectional Support", desc: "Components that mirror correctly for Arabic and English" }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-6 rounded-xl border border-slate-200 text-center">
                                <div className="w-12 h-12 bg-slate-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                                    <Code className="w-5 h-5 text-slate-500" />
                                </div>
                                <h4 className="font-bold text-[#1A1D23] mb-2">{item.title}</h4>
                                <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ==============================================================================
            SECTION 9: IMPACT
           ============================================================================== */}
            <section className="py-12 lg:py-20 bg-white border-t border-slate-200">
                <div className="max-w-[1120px] mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-[32px] md:text-[36px] font-bold font-display text-[#1A1D23] mb-16">Impact at Scale</h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                        {[
                            { val: "5+", label: "Systems Built" },
                            { val: "12M+", label: "Users Served" },
                            { val: "30+", label: "Services Powered" },
                            { val: "500+", label: "Designers Trained" }
                        ].map((stat, i) => (
                            <div key={i}>
                                <div className="text-4xl md:text-6xl font-bold font-display text-[#1A1D23] mb-2">{stat.val}</div>
                                <div className="text-lg font-medium text-slate-500">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ==============================================================================
            SECTION 10: CTA
           ============================================================================== */}
            <section className="py-12 lg:py-20 bg-gradient-to-r from-[#7C3AED] to-[#4169E1] text-white text-center">
                <div className="max-w-[800px] mx-auto px-6 lg:px-8">
                    <h2 className="text-[32px] md:text-[36px] font-bold font-display mb-6">Need a Design System?</h2>
                    <p className="text-xl text-white/90 mb-12 font-light">
                        I build scalable, documented systems that grow with your product — from startup to 12M+ users.
                    </p>
                    <a href="mailto:hello@solimanshaban.com" className="inline-flex items-center px-8 py-4 bg-white text-[#7C3AED] font-bold rounded-full shadow-lg hover:bg-slate-50 hover:-translate-y-1 transition-all">
                        Let's Talk <ArrowRight className="ml-2 w-5 h-5" />
                    </a>
                </div>
            </section>

        </div>
    );
};

export default DesignSystemsCaseStudy;