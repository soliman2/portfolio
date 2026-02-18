import React from 'react';
import { motion } from 'framer-motion';
import {
    ArrowLeft, ArrowRight, Shirt, Droplets, Waves, ClipboardList, Users, Search,
    Target, Map, FileText, CheckCircle2, ChevronRight, User,
    Lightbulb, Briefcase, Layout
} from 'lucide-react';

interface ZLaundryCaseStudyProps {
    onBack: () => void;
}

const ZLaundryCaseStudy: React.FC<ZLaundryCaseStudyProps> = ({ onBack }) => {

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

    return (
        <div className="bg-white w-full overflow-hidden text-[#1A1D23] font-sans selection:bg-[#06B6D4] selection:text-white">

            {/* Navigation Spacer */}
            <div className="h-20 lg:h-24"></div>

            {/* ==============================================================================
            SECTION 1: HERO
           ============================================================================== */}
            <section className="relative py-12 lg:py-20 bg-[#1A1D23] text-white overflow-hidden">
                {/* Background Pattern - Laundry Icons */}
                <div className="absolute inset-0 pointer-events-none opacity-[0.05] flex flex-wrap gap-12 justify-center content-center rotate-12 scale-150">
                    {Array.from({ length: 40 }).map((_, i) => (
                        <div key={i} className="flex gap-12">
                            <Shirt className="w-12 h-12" />
                            <Droplets className="w-12 h-12" />
                            <Waves className="w-12 h-12" />
                        </div>
                    ))}
                </div>

                <div className="max-w-[1120px] mx-auto px-6 lg:px-8 relative z-10 text-center">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="max-w-3xl mx-auto"
                    >
                        <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#06B6D4]/20 text-[#06B6D4] border border-[#06B6D4]/30 mb-8">
                            <Search className="w-3.5 h-3.5" />
                            <span className="text-xs font-bold uppercase tracking-wider font-display">Research & Discovery</span>
                        </motion.div>

                        <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-[56px] font-bold font-display mb-6 tracking-tight">
                            Z-Laundry UX Research
                        </motion.h1>

                        <motion.p variants={fadeInUp} className="text-xl text-slate-400 font-light mb-12">
                            Comprehensive discovery phase for an on-demand laundry mobile application.
                        </motion.p>

                        <motion.div variants={fadeInUp} className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-t border-white/10 text-left">
                            <div>
                                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1 font-display">Client</div>
                                <div className="text-[15px] font-semibold">Z-Laundry Egypt</div>
                            </div>
                            <div>
                                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1 font-display">Role</div>
                                <div className="text-[15px] font-semibold">Lead UX Researcher</div>
                            </div>
                            <div>
                                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1 font-display">Timeline</div>
                                <div className="text-[15px] font-semibold">4 Weeks</div>
                            </div>
                            <div>
                                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1 font-display">Methods</div>
                                <div className="text-[15px] font-semibold">Interviews, Personas</div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* ==============================================================================
            SECTION 2: RESEARCH PROCESS OVERVIEW
           ============================================================================== */}
            <section className="py-12 lg:py-20 bg-white relative">
                <div className="max-w-[1120px] mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest font-display block mb-3">Methodology</span>
                        <h2 className="text-[32px] md:text-[36px] font-bold font-display text-[#1A1D23]">Research Process</h2>
                    </div>

                    <div className="flex flex-wrap md:flex-nowrap justify-center items-center gap-4 md:gap-0 relative">
                        {[
                            "UX Strategy", "Competitor Analysis", "Value Prop", "User Interviews",
                            "User Persona", "Empathy Map", "User Stories"
                        ].map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex flex-col items-center relative z-10 w-32 shrink-0"
                            >
                                <div className="w-12 h-12 rounded-full bg-white border-2 border-[#06B6D4] text-[#06B6D4] font-bold flex items-center justify-center mb-3 shadow-sm z-10 relative group hover:bg-[#06B6D4] hover:text-white transition-colors duration-300">
                                    {i + 1}
                                </div>
                                <div className="text-xs font-bold text-center text-slate-600 uppercase max-w-[80px] leading-tight">{step}</div>

                                {/* Connector Line */}
                                {i < 6 && (
                                    <div className="hidden md:block absolute top-6 left-1/2 w-full h-[2px] bg-slate-100 -z-10"></div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ==============================================================================
            SECTION 3: THE BRIEF
           ============================================================================== */}
            <section className="py-12 lg:py-20 bg-[#F8F9FA]">
                <div className="max-w-[800px] mx-auto px-6 lg:px-8 text-center">
                    <h3 className="text-[32px] md:text-[36px] font-bold font-display text-[#1A1D23] mb-8">The Brief</h3>
                    <p className="text-xl text-slate-600 leading-relaxed font-light mb-12">
                        Z-Laundry aims to launch an on-demand laundry mobile application for the Egyptian market.
                        Before design and development, they needed to understand the competitive landscape, identifying
                        customer pain points, and define a clear value proposition to ensure market fit.
                    </p>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-slate-200 shadow-sm text-sm font-medium text-slate-500">
                        <Target className="w-4 h-4 text-[#06B6D4]" />
                        Goal: Define product requirements based on real user needs
                    </div>
                </div>
            </section>

            {/* ==============================================================================
            SECTION 4: UX STRATEGY
           ============================================================================== */}
            <section className="py-12 lg:py-20 bg-[#1A1D23] text-white">
                <div className="max-w-[1120px] mx-auto px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row gap-12 items-start">
                        <div className="md:w-1/3 sticky top-24">
                            <span className="text-6xl font-bold font-display text-[#06B6D4]/20 block mb-4">01</span>
                            <h2 className="text-[32px] md:text-[36px] font-bold font-display mb-6">UX Strategy</h2>
                            <p className="text-slate-400 leading-relaxed mb-6">
                                We started by aligning business goals with user needs. Using the UX Strategy Canvas, we mapped out the business strategy, value innovation, validated user research, and killer UX features.
                            </p>
                            <ul className="space-y-3 text-sm text-slate-300">
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#06B6D4] rounded-full"></div> Validating the problem</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#06B6D4] rounded-full"></div> Identifying market segment</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#06B6D4] rounded-full"></div> Defining competitive advantage</li>
                            </ul>
                        </div>

                        <div className="md:w-2/3 space-y-8">
                            {/* Placeholder for Strategy Matrix */}
                            <div className="bg-[#2B3544] rounded-xl p-1 overflow-hidden shadow-2xl border border-white/5">
                                <div className="bg-[#1A1D23] p-6 grid grid-cols-2 gap-px bg-slate-700/50">
                                    <div className="bg-[#2B3544] p-6">
                                        <h4 className="font-bold text-[#06B6D4] mb-4 uppercase text-xs tracking-wider">Business Goals</h4>
                                        <ul className="space-y-2 text-sm text-slate-300">
                                            <li>• Increase market share in Cairo</li>
                                            <li>• Reduce operational overhead</li>
                                            <li>• Build brand loyalty</li>
                                        </ul>
                                    </div>
                                    <div className="bg-[#2B3544] p-6">
                                        <h4 className="font-bold text-[#06B6D4] mb-4 uppercase text-xs tracking-wider">Customer Goals</h4>
                                        <ul className="space-y-2 text-sm text-slate-300">
                                            <li>• Save time on chores</li>
                                            <li>• Trustworthy handling of clothes</li>
                                            <li>• Transparent pricing</li>
                                        </ul>
                                    </div>
                                    <div className="bg-[#2B3544] p-6">
                                        <h4 className="font-bold text-rose-400 mb-4 uppercase text-xs tracking-wider">Business Pains</h4>
                                        <ul className="space-y-2 text-sm text-slate-300">
                                            <li>• Logistics coordination</li>
                                            <li>• Quality control consistency</li>
                                        </ul>
                                    </div>
                                    <div className="bg-[#2B3544] p-6">
                                        <h4 className="font-bold text-rose-400 mb-4 uppercase text-xs tracking-wider">Customer Pains</h4>
                                        <ul className="space-y-2 text-sm text-slate-300">
                                            <li>• Damaged clothes</li>
                                            <li>• Late deliveries</li>
                                            <li>• Hidden fees</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ==============================================================================
            SECTION 5: COMPETITOR ANALYSIS
           ============================================================================== */}
            <section className="py-12 lg:py-20 bg-white">
                <div className="max-w-[1120px] mx-auto px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row gap-12 items-start">
                        <div className="md:w-1/3 sticky top-24">
                            <span className="text-6xl font-bold font-display text-slate-100 block mb-4">02</span>
                            <h2 className="text-[32px] md:text-[36px] font-bold font-display text-[#1A1D23] mb-6">Competitor Analysis</h2>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                I analyzed 7 direct and indirect competitors in the Egyptian market to identify feature gaps and opportunities.
                            </p>
                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                                <h4 className="font-bold text-[#1A1D23] mb-2 flex items-center gap-2">
                                    <Lightbulb className="w-4 h-4 text-amber-500" /> Key Insight
                                </h4>
                                <p className="text-sm text-slate-600">
                                    Most competitors focus on speed but lack transparency in the cleaning process and garment tracking, creating a trust gap we can fill.
                                </p>
                            </div>
                        </div>

                        <div className="md:w-2/3">
                            {/* Competitor Grid Placeholder */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                                {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                                    <div key={i} className="aspect-square bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-center">
                                        <div className="w-12 h-12 rounded-full bg-slate-200"></div>
                                    </div>
                                ))}
                                <div className="aspect-square bg-[#06B6D4]/5 rounded-xl border border-[#06B6D4]/20 flex flex-col items-center justify-center text-[#06B6D4] font-bold text-sm">
                                    <div>Z-Laundry</div>
                                    <div className="text-[10px] font-normal text-slate-500">(Us)</div>
                                </div>
                            </div>

                            {/* Feature Comparison Table Placeholder */}
                            <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                                <div className="overflow-x-auto">
                                    <table className="w-full text-sm text-left">
                                        <thead className="bg-slate-50 text-slate-500 uppercase font-bold text-xs">
                                            <tr>
                                                <th className="px-6 py-3">Feature</th>
                                                <th className="px-6 py-3 text-center">Competitor A</th>
                                                <th className="px-6 py-3 text-center">Competitor B</th>
                                                <th className="px-6 py-3 text-center text-[#06B6D4]">Z-Laundry</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-100">
                                            {[
                                                "Order Tracking", "Recurring Pickup", "Fabric Care Notes", "Driver Chat", "Video Verification"
                                            ].map((feature, i) => (
                                                <tr key={i} className="hover:bg-slate-50/50">
                                                    <td className="px-6 py-4 font-medium text-slate-900">{feature}</td>
                                                    <td className="px-6 py-4 text-center text-slate-400">
                                                        {i % 2 === 0 ? <CheckCircle2 className="w-4 h-4 mx-auto text-emerald-500" /> : "—"}
                                                    </td>
                                                    <td className="px-6 py-4 text-center text-slate-400">
                                                        {i % 3 === 0 ? <CheckCircle2 className="w-4 h-4 mx-auto text-emerald-500" /> : "—"}
                                                    </td>
                                                    <td className="px-6 py-4 text-center bg-[#06B6D4]/5">
                                                        <CheckCircle2 className="w-5 h-5 mx-auto text-[#06B6D4]" />
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ==============================================================================
            SECTION 6: VALUE PROPOSITION CANVAS
           ============================================================================== */}
            <section className="py-12 lg:py-20 bg-[#1A1D23] text-white">
                <div className="max-w-[1120px] mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-6xl font-bold font-display text-[#06B6D4]/10 block mb-4">03</span>
                        <h2 className="text-[32px] md:text-[36px] font-bold font-display">Value Proposition Canvas</h2>
                        <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
                            Mapping user pains and gains to our product features to ensure product-market fit.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {/* Customer Profile */}
                        <div className="bg-[#2B3544] rounded-full aspect-square p-8 md:p-12 border border-white/5 relative flex flex-col justify-center items-center text-center">
                            <div className="absolute top-4 font-bold text-slate-300 uppercase tracking-widest text-sm">Customer Profile</div>
                            <div className="space-y-6 w-full">
                                <div>
                                    <h5 className="text-emerald-400 font-bold text-sm mb-2 uppercase">Gains</h5>
                                    <p className="text-xs text-slate-300">Clean clothes, Time saved, Looking professional</p>
                                </div>
                                <div>
                                    <h5 className="text-rose-400 font-bold text-sm mb-2 uppercase">Pains</h5>
                                    <p className="text-xs text-slate-300">Clothes shrinking, Hidden costs, Waiting for delivery</p>
                                </div>
                                <div>
                                    <h5 className="text-blue-400 font-bold text-sm mb-2 uppercase">Customer Jobs</h5>
                                    <p className="text-xs text-slate-300">Washing, Ironing, Dry Cleaning, Folding</p>
                                </div>
                            </div>
                        </div>

                        {/* Value Map */}
                        <div className="bg-[#2B3544] rounded-sm aspect-square p-8 md:p-12 border border-white/5 relative flex flex-col justify-center items-center text-center">
                            <div className="absolute top-4 font-bold text-slate-300 uppercase tracking-widest text-sm">Value Map</div>
                            <div className="space-y-6 w-full">
                                <div>
                                    <h5 className="text-emerald-400 font-bold text-sm mb-2 uppercase">Gain Creators</h5>
                                    <p className="text-xs text-slate-300">Express delivery, Scent selection, Premium packaging</p>
                                </div>
                                <div>
                                    <h5 className="text-rose-400 font-bold text-sm mb-2 uppercase">Pain Relievers</h5>
                                    <p className="text-xs text-slate-300">Damage insurance, Real-time tracking, Upfront pricing</p>
                                </div>
                                <div>
                                    <h5 className="text-blue-400 font-bold text-sm mb-2 uppercase">Products & Services</h5>
                                    <p className="text-xs text-slate-300">Mobile App, Pick-up & Delivery Fleet</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ==============================================================================
            SECTION 7: USER INTERVIEWS
           ============================================================================== */}
            <section className="py-12 lg:py-20 bg-white">
                <div className="max-w-[1120px] mx-auto px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row gap-12 items-start">
                        <div className="md:w-1/3 sticky top-24">
                            <span className="text-6xl font-bold font-display text-slate-100 block mb-4">04</span>
                            <h2 className="text-[32px] md:text-[36px] font-bold font-display text-[#1A1D23] mb-6">User Interviews</h2>
                            <div className="text-4xl font-bold text-[#06B6D4] mb-2">6</div>
                            <p className="font-bold text-[#1A1D23] mb-6">Users Interviewed</p>

                            <p className="text-slate-600 leading-relaxed mb-6">
                                I conducted semi-structured interviews with 6 participants (3 current laundry service users, 3 non-users) to uncover habits and frustrations.
                            </p>
                        </div>

                        <div className="md:w-2/3 grid grid-cols-1 gap-8">
                            <div className="bg-[#F8F9FA] p-8 rounded-2xl border border-slate-200">
                                <h4 className="font-bold text-[#1A1D23] mb-6 border-b border-slate-200 pb-4">Key Questions Asked</h4>
                                <ul className="space-y-4">
                                    <li className="flex gap-4">
                                        <span className="shrink-0 w-6 h-6 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center font-bold text-xs">1</span>
                                        <p className="text-slate-700 text-sm">Can you walk me through your current laundry routine?</p>
                                    </li>
                                    <li className="flex gap-4">
                                        <span className="shrink-0 w-6 h-6 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center font-bold text-xs">2</span>
                                        <p className="text-slate-700 text-sm">What is the most frustrating part of dealing with laundry shops?</p>
                                    </li>
                                    <li className="flex gap-4">
                                        <span className="shrink-0 w-6 h-6 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center font-bold text-xs">3</span>
                                        <p className="text-slate-700 text-sm">How do you decide which items to send out vs. wash at home?</p>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-[#06B6D4]/5 p-8 rounded-2xl border border-[#06B6D4]/20">
                                <h4 className="font-bold text-[#06B6D4] mb-4">Core Discovery</h4>
                                <p className="text-lg font-medium text-[#1A1D23]">
                                    "Trust is a bigger factor than price. Users are terrified of their expensive clothes being ruined or lost, and existing apps don't reassure them enough."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ==============================================================================
            SECTION 8: USER PERSONAS
           ============================================================================== */}
            <section className="py-12 lg:py-20 bg-[#1A1D23] text-white">
                <div className="max-w-[1120px] mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-6xl font-bold font-display text-[#06B6D4]/10 block mb-4">05</span>
                        <h2 className="text-[32px] md:text-[36px] font-bold font-display text-white">User Personas</h2>
                        <p className="text-slate-400 mt-2">3 Personas Created</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Persona 1 */}
                        <div className="bg-[#2B3544] rounded-2xl overflow-hidden border border-white/5">
                            <div className="h-48 bg-slate-700 relative">
                                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop" alt="Hanan" className="w-full h-full object-cover opacity-80" />
                                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-[#2B3544] to-transparent h-24"></div>
                                <div className="absolute bottom-4 left-6">
                                    <h3 className="text-xl font-bold text-white">Hanan</h3>
                                    <p className="text-sm text-slate-300">The Busy Mom</p>
                                </div>
                            </div>
                            <div className="p-6 space-y-4">
                                <div>
                                    <h4 className="text-xs font-bold text-[#06B6D4] uppercase tracking-wider mb-2">Goals</h4>
                                    <p className="text-sm text-slate-300 leading-relaxed">Needs bulk washing for family bedding and curtains without driving to the shop.</p>
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold text-rose-400 uppercase tracking-wider mb-2">Frustrations</h4>
                                    <p className="text-sm text-slate-300 leading-relaxed">Scheduling pickup is a hassle; delivery times interfere with kids' school runs.</p>
                                </div>
                            </div>
                        </div>

                        {/* Persona 2 */}
                        <div className="bg-[#2B3544] rounded-2xl overflow-hidden border border-white/5 transform md:-translate-y-4 shadow-2xl shadow-black/50 z-10">
                            <div className="h-48 bg-slate-700 relative">
                                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2574&auto=format&fit=crop" alt="Ahmed" className="w-full h-full object-cover opacity-80" />
                                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-[#2B3544] to-transparent h-24"></div>
                                <div className="absolute bottom-4 left-6">
                                    <h3 className="text-xl font-bold text-white">Ahmed</h3>
                                    <p className="text-sm text-slate-300">The Executive</p>
                                </div>
                            </div>
                            <div className="p-6 space-y-4">
                                <div>
                                    <h4 className="text-xs font-bold text-[#06B6D4] uppercase tracking-wider mb-2">Goals</h4>
                                    <p className="text-sm text-slate-300 leading-relaxed">Immaculate suits for work. Needs dry cleaning and premium ironing service.</p>
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold text-rose-400 uppercase tracking-wider mb-2">Frustrations</h4>
                                    <p className="text-sm text-slate-300 leading-relaxed">Shops losing buttons or damaging expensive fabric. Inconsistent delivery.</p>
                                </div>
                            </div>
                        </div>

                        {/* Persona 3 */}
                        <div className="bg-[#2B3544] rounded-2xl overflow-hidden border border-white/5">
                            <div className="h-48 bg-slate-700 relative">
                                <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2574&auto=format&fit=crop" alt="Mohamed" className="w-full h-full object-cover opacity-80" />
                                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-[#2B3544] to-transparent h-24"></div>
                                <div className="absolute bottom-4 left-6">
                                    <h3 className="text-xl font-bold text-white">Mohamed</h3>
                                    <p className="text-sm text-slate-300">The Bachelor</p>
                                </div>
                            </div>
                            <div className="p-6 space-y-4">
                                <div>
                                    <h4 className="text-xs font-bold text-[#06B6D4] uppercase tracking-wider mb-2">Goals</h4>
                                    <p className="text-sm text-slate-300 leading-relaxed">Convenience. Wants clothes washed and folded (Wash & Fold) with minimal effort.</p>
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold text-rose-400 uppercase tracking-wider mb-2">Frustrations</h4>
                                    <p className="text-sm text-slate-300 leading-relaxed">Complicated pricing apps. Finding cash for delivery. Slow turnaround.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ==============================================================================
            SECTION 9: EMPATHY MAPS
           ============================================================================== */}
            <section className="py-12 lg:py-20 bg-white">
                <div className="max-w-[1120px] mx-auto px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="md:w-1/3">
                            <span className="text-6xl font-bold font-display text-slate-100 block mb-4">06</span>
                            <h2 className="text-[32px] md:text-[36px] font-bold font-display text-[#1A1D23] mb-6">Empathy Maps</h2>
                            <p className="text-slate-600 leading-relaxed">
                                To dive deeper into the emotional state of our users, we mapped out what they Say, Think, Do, and Feel during the laundry process.
                            </p>
                        </div>
                        <div className="md:w-2/3">
                            <div className="bg-[#F8F9FA] rounded-2xl p-8 border border-slate-200 aspect-video relative flex items-center justify-center">
                                <div className="grid grid-cols-2 gap-px bg-slate-200 w-full h-full">
                                    <div className="bg-white p-6 relative">
                                        <span className="absolute top-4 left-4 text-xs font-bold text-slate-400 uppercase">Says</span>
                                        <p className="mt-6 text-sm italic text-slate-600">"I don't have time to separate colors."</p>
                                        <p className="mt-2 text-sm italic text-slate-600">"Is it expensive?"</p>
                                    </div>
                                    <div className="bg-white p-6 relative">
                                        <span className="absolute top-4 left-4 text-xs font-bold text-slate-400 uppercase">Thinks</span>
                                        <p className="mt-6 text-sm italic text-slate-600">"I hope they don't shrink my favorite shirt."</p>
                                    </div>
                                    <div className="bg-white p-6 relative">
                                        <span className="absolute top-4 left-4 text-xs font-bold text-slate-400 uppercase">Does</span>
                                        <p className="mt-6 text-sm italic text-slate-600">Checks pockets twice. Smells clothes to check freshness.</p>
                                    </div>
                                    <div className="bg-white p-6 relative">
                                        <span className="absolute top-4 left-4 text-xs font-bold text-slate-400 uppercase">Feels</span>
                                        <p className="mt-6 text-sm italic text-slate-600">Anxious about damage. Relieved when chores are done.</p>
                                    </div>
                                </div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center border border-slate-100">
                                        <User className="w-8 h-8 text-[#06B6D4]" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ==============================================================================
            SECTION 10: USER STORIES
           ============================================================================== */}
            <section className="py-12 lg:py-20 bg-[#1A1D23] text-white">
                <div className="max-w-[1120px] mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-6xl font-bold font-display text-[#06B6D4]/10 block mb-4">07</span>
                        <h2 className="text-[32px] md:text-[36px] font-bold font-display text-white">User Stories & Journey</h2>
                        <p className="text-slate-400 mt-2">Translating research into requirements</p>
                    </div>

                    <div className="space-y-4 max-w-3xl mx-auto">
                        {[
                            { role: "Executive", when: "I have an important meeting", want: "express dry cleaning", so: "I can look professional on time" },
                            { role: "Parent", when: "the weekend comes", want: "bulk bag pickup", so: "I can spend time with family instead of washing" },
                            { role: "Bachelor", when: "I order service", want: "cashless payment", so: "I don't have to find change for the driver" }
                        ].map((story, i) => (
                            <div key={i} className="bg-[#2B3544] p-6 rounded-xl border border-white/5 flex flex-col md:flex-row gap-4 items-start md:items-center">
                                <div className="shrink-0 bg-[#06B6D4]/10 text-[#06B6D4] px-3 py-1 rounded text-xs font-bold uppercase w-24 text-center">
                                    {story.role}
                                </div>
                                <div className="text-lg text-slate-300 font-light">
                                    <span className="text-slate-500 font-bold text-xs uppercase mr-2">When</span> {story.when},
                                    <span className="text-slate-500 font-bold text-xs uppercase mx-2">I Want</span> <span className="text-white font-medium">{story.want}</span>,
                                    <span className="text-slate-500 font-bold text-xs uppercase mx-2">So That</span> {story.so}.
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ==============================================================================
            SECTION 11: DELIVERABLES SUMMARY
           ============================================================================== */}
            <section className="py-12 lg:py-20 bg-white">
                <div className="max-w-[1120px] mx-auto px-6 lg:px-8">
                    <div className="bg-slate-50 border border-slate-200 rounded-3xl p-12 text-center">
                        <h3 className="text-[32px] md:text-[36px] font-bold font-display text-[#1A1D23] mb-8">Research Package Delivered</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                            {[
                                { val: "7", label: "Competitors Analyzed" },
                                { val: "6", label: "Users Interviewed" },
                                { val: "3", label: "Personas Created" },
                                { val: "3", label: "Empathy Maps" },
                                { val: "1", label: "Value Prop Canvas" },
                                { val: "1", label: "UX Strategy Doc" }
                            ].map((item, i) => (
                                <div key={i}>
                                    <div className="text-3xl font-bold text-[#06B6D4] mb-1">{item.val}</div>
                                    <div className="text-sm font-medium text-slate-500">{item.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ==============================================================================
            SECTION 12: KEY INSIGHTS
           ============================================================================== */}
            <section className="py-12 lg:py-20 bg-gradient-to-br from-[#06B6D4] to-[#0891B2] text-white">
                <div className="max-w-[1120px] mx-auto px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-[32px] md:text-[36px] font-bold font-display mb-4">What I Learned</h2>
                        <p className="text-white/80">Key takeaways that influenced the design phase</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                            <Search className="w-8 h-8 text-white mb-4" />
                            <h4 className="font-bold text-lg mb-2">Transparency is King</h4>
                            <p className="text-sm text-white/80 leading-relaxed">
                                Users don't just want clean clothes; they want to know WHERE their clothes are. Real-time tracking became a mandatory feature.
                            </p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                            <Briefcase className="w-8 h-8 text-white mb-4" />
                            <h4 className="font-bold text-lg mb-2">B2B Opportunity</h4>
                            <p className="text-sm text-white/80 leading-relaxed">
                                Research revealed a huge gap in small business laundry (salons, spas). We added a specific B2B subscription model flow.
                            </p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                            <Layout className="w-8 h-8 text-white mb-4" />
                            <h4 className="font-bold text-lg mb-2">Simplicity First</h4>
                            <p className="text-sm text-white/80 leading-relaxed">
                                "Wash & Fold" users want 1-click ordering. The complex item selection should be optional, not mandatory.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ==============================================================================
            SECTION 13: NEXT PROJECT / CTA
           ============================================================================== */}
            <section className="py-12 lg:py-20 bg-[#1A1D23] text-white text-center">
                <div className="max-w-[800px] mx-auto px-6 lg:px-8">
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Next Project</div>
                    <h2 className="text-[32px] md:text-[36px] font-bold font-display mb-8">Ready to see the designs?</h2>

                    <div className="flex flex-col md:flex-row justify-center gap-4">
                        <button
                            onClick={onBack}
                            className="group px-8 py-4 bg-white text-[#1A1D23] font-bold rounded-full hover:bg-slate-200 transition-colors inline-flex items-center justify-center gap-2"
                        >
                            AI Urban Design Tool
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default ZLaundryCaseStudy;