import React from 'react';
import { motion } from 'framer-motion';
import {
    ChevronRight,
    ArrowLeft,
    CheckCircle2,
    Users,
    Layers,
    MessageSquare,
    ClipboardCheck,
    UserPlus,
    PieChart,
    FileText,
    TrendingUp,
    Zap,
    MousePointer2,
    Eye
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const UXResearchCaseStudy: React.FC<{ onBack: () => void }> = ({ onBack }) => {
    const navigate = useNavigate();

    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <div className="bg-white font-inter">
            {/* SECTION 1: HERO */}
            <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-[#F8F9FA]">
                <div className="max-w-[1120px] mx-auto px-6">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                    >
                        {/* Badge */}
                        <div className="inline-block px-3.5 py-1.5 rounded-lg bg-[#EDE9FE] text-[#7C3AED] text-[12px] font-bold uppercase tracking-wider mb-8">
                            UX Research
                        </div>

                        <h1 className="text-[36px] md:text-[56px] font-bold text-[#1A1D23] leading-[1.1] mb-6 tracking-tight max-w-4xl font-display">
                            Building the UX Research Practice at RTA Dubai
                        </h1>
                        <p className="text-[18px] md:text-[22px] text-[#6B7280] font-medium leading-relaxed max-w-3xl mb-12">
                            From zero protocols to 50+ moderated sessions, unmoderated testing, and storytelling-based executive reports that drive strategic decisions across 8 government products.
                        </p>

                        {/* Metrics Row */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-y border-slate-200 mb-12">
                            {[
                                { value: "50+", label: "Usability Sessions" },
                                { value: "8", label: "Products Tested" },
                                { value: "12M+", label: "Users Impacted" },
                                { value: "30+", label: "Executive Reports" }
                            ].map((stat, i) => (
                                <div key={i} className="flex flex-col">
                                    <span className="text-[32px] md:text-[40px] font-bold text-[#4169E1] mb-1">{stat.value}</span>
                                    <span className="text-[14px] font-medium text-slate-500 uppercase tracking-wide">{stat.label}</span>
                                </div>
                            ))}
                        </div>

                        {/* Role Info */}
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-[14px]">
                            <div className="flex flex-col gap-1">
                                <span className="font-bold text-slate-400 uppercase tracking-widest text-[10px]">Role</span>
                                <span className="text-slate-700 font-medium">UX Research Lead</span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="font-bold text-slate-400 uppercase tracking-widest text-[10px]">Organization</span>
                                <span className="text-slate-700 font-medium">Roads & Transport Authority</span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="font-bold text-slate-400 uppercase tracking-widest text-[10px]">Duration</span>
                                <span className="text-slate-700 font-medium">2022 – Present</span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="font-bold text-slate-400 uppercase tracking-widest text-[10px]">Tools</span>
                                <span className="text-slate-700 font-medium">UserPerry, Figma, Miro, Screen Recording</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* SECTION 2: THE CHALLENGE */}
            <section className="py-20 md:py-32 bg-white">
                <div className="max-w-[1120px] mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-16 lg:gap-24 items-center">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                        >
                            <h2 className="text-[32px] md:text-[36px] font-bold text-[#1A1D23] mb-8 font-display">The Challenge</h2>
                            <div className="space-y-6 text-[16px] md:text-[18px] text-slate-600 leading-relaxed">
                                <p>
                                    When I joined RTA's digital team, there was no standardized UX research process. Design decisions were based on stakeholder assumptions, and usability issues were discovered only after products launched. There was no testing protocol, no research lab setup, and no structured way to communicate findings to leadership.
                                </p>
                                <p>
                                    The challenge was threefold: build a credible research practice from scratch, make research a regular part of the design workflow, and — most critically — translate raw usability findings into a format that executive leadership would actually read and act upon.
                                </p>
                                <p>
                                    RTA's products serve over 12 million users across the UAE — including the RTA Dubai app, S'hail mobility app, internal dashboards, and government service portals. The stakes for getting it right were high.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            className="space-y-6"
                        >
                            {[
                                { title: "No testing protocol", color: "bg-red-50 text-red-600 border-red-100" },
                                { title: "Decisions based on assumptions", color: "bg-orange-50 text-orange-600 border-orange-100" },
                                { title: "Low-impact reports ignored", color: "bg-orange-50 text-orange-600 border-orange-100" }
                            ].map((item, i) => (
                                <div key={i} className={`p-6 rounded-2xl border ${item.color} shadow-sm font-bold flex items-center gap-4`}>
                                    <div className={`w-2 h-2 rounded-full ${item.color.split(' ')[1].replace('text', 'bg')}`}></div>
                                    {item.title}
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: MY APPROACH — THE RESEARCH FRAMEWORK */}
            <section className="py-20 md:py-32 bg-[#F8F9FA]">
                <div className="max-w-[1120px] mx-auto px-6">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="text-center mb-16 md:mb-24"
                    >
                        <h2 className="text-[32px] md:text-[36px] font-bold text-[#1A1D23] mb-4 font-display">Building the Research Framework</h2>
                        <p className="text-[16px] md:text-[18px] text-[#6B7280] max-width 640px mx-auto leading-relaxed">
                            I designed a structured, repeatable UX research process that could scale across all RTA products.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-[44px] left-[10%] right-[10%] h-[2px] bg-slate-200 -z-0"></div>

                        {[
                            { step: "1", icon: ClipboardCheck, title: "Plan", desc: "Define goals, user screening, and task scenarios tied to real journeys." },
                            { step: "2", icon: Users, title: "Test", desc: "Run moderated sessions and deploy unmoderated tests via UserPerry." },
                            { step: "3", icon: PieChart, title: "Analyze", desc: "Code themes, map severity, and combine quant success rates." },
                            { step: "4", icon: FileText, title: "Report", desc: "Visual storytelling reports prioritized by impact and feasibility." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                variants={fadeUp}
                                className="relative z-10 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm"
                            >
                                <div className="w-12 h-12 rounded-full bg-[#4169E1] text-white flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-[18px] font-bold text-[#1A1D23] mb-3">{item.title}</h3>
                                <p className="text-[14px] text-slate-500 leading-relaxed font-medium">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 4: MODERATED TESTING */}
            <section className="py-20 md:py-32 bg-white">
                <div className="max-w-[1120px] mx-auto px-6">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="mb-16 md:mb-24"
                    >
                        <h2 className="text-[32px] md:text-[36px] font-bold text-[#1A1D23] mb-4 font-display">Moderated Usability Testing</h2>
                        <p className="text-[16px] md:text-[18px] text-[#6B7280] leading-relaxed">
                            The backbone of our research — face-to-face sessions that uncover the 'why' behind user behavior.
                        </p>
                    </motion.div>

                    {/* Script Design Sub-section */}
                    <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 lg:gap-24 items-center mb-24 md:mb-32">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            className="space-y-6 text-[16px] text-slate-600 leading-relaxed"
                        >
                            <h3 className="text-[20px] font-bold text-[#1A1D23]">Session Script Design</h3>
                            <p>
                                Every moderated session starts with a carefully designed script. I built a standard RTA testing script template that includes:
                            </p>
                            <ul className="space-y-3 pl-1">
                                {[
                                    "Welcome and consent briefing (bilingual Arabic/English)",
                                    "Pre-task interview questions to understand context",
                                    "5-8 realistic task scenarios based on actual journeys",
                                    "Probing questions after each task to capture reasoning",
                                    "Post-session System Usability Scale (SUS) questionnaire",
                                    "Open-ended closing questions for overall impressions"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-4">
                                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-[#4169E1] flex-shrink-0"></div>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p>
                                The script ensures consistency across sessions while allowing flexibility for follow-up probes. Each script is reviewed with the product team before testing.
                            </p>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            className="bg-[#F8F9FA] rounded-[32px] p-8 md:p-12 border border-slate-200"
                        >
                            <div className="bg-white rounded-xl shadow-xl border border-slate-100 p-6 space-y-6 overflow-hidden">
                                <div className="border-b border-slate-100 pb-4">
                                    <div className="h-4 bg-[#EDE9FE] w-1/4 rounded-full mb-2"></div>
                                    <div className="h-6 bg-slate-900 w-3/4 rounded-full"></div>
                                </div>
                                <div className="space-y-4">
                                    <div className="p-4 bg-blue-50/50 rounded-lg border-l-4 border-[#4169E1]">
                                        <div className="h-3 bg-[#4169E1]/20 w-1/3 rounded-full mb-3"></div>
                                        <div className="h-3 bg-slate-400 w-full rounded-full mb-2"></div>
                                        <div className="h-3 bg-slate-400 w-5/6 rounded-full"></div>
                                    </div>
                                    <div className="p-4 bg-slate-50/50 rounded-lg border-l-4 border-slate-200">
                                        <div className="h-3 bg-slate-400 w-1/2 rounded-full mb-3"></div>
                                        <div className="h-3 bg-slate-200 w-full rounded-full"></div>
                                    </div>
                                    <div className="p-4 bg-emerald-50/50 rounded-lg border-l-4 border-emerald-400">
                                        <div className="h-3 bg-emerald-400/20 w-1/4 rounded-full mb-3"></div>
                                        <div className="h-3 bg-slate-400 w-2/3 rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Products Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { name: "RTA Dubai App", type: "Mobile App", sessions: "12 sessions" },
                            { name: "S'hail Mobility", type: "Mobile App", sessions: "8 sessions" },
                            { name: "Portal Services", type: "Web", sessions: "10 sessions" },
                            { name: "Tarasul", type: "Enterprise Web", sessions: "5 sessions" },
                            { name: "RTA Intranet", type: "Enterprise Web", sessions: "4 sessions" },
                            { name: "DG Dashboard", type: "Exec Dashboard", sessions: "3 sessions" },
                            { name: "Happiness Meter", type: "Kiosk UI", sessions: "4 sessions" },
                            { name: "Licensing Back-office", type: "Enterprise Web", sessions: "6 sessions" }
                        ].map((prod, i) => (
                            <motion.div
                                key={i}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                variants={fadeUp}
                                className="p-6 bg-white border border-slate-200 rounded-2xl hover:border-[#4169E1] transition-colors group shadow-sm"
                            >
                                <h4 className="font-bold text-[#1A1D23] mb-1 group-hover:text-[#4169E1] transition-colors">{prod.name}</h4>
                                <div className="text-[12px] font-bold text-slate-400 uppercase tracking-widest mb-3">{prod.type}</div>
                                <div className="flex items-center gap-2 text-[14px] text-slate-500 font-medium">
                                    <Users className="w-4 h-4 text-slate-300" />
                                    {prod.sessions}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 5: UNMODERATED TESTING */}
            <section className="py-20 md:py-32 bg-[#F8F9FA]">
                <div className="max-w-[1120px] mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 lg:gap-24 items-center">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            className="space-y-6 text-[16px] text-slate-600 leading-relaxed"
                        >
                            <h2 className="text-[32px] md:text-[36px] font-bold text-[#1A1D23] font-display">Scaling Research with Unmoderated Testing</h2>
                            <p>
                                Moderated sessions give deep qualitative insight but are time-intensive. To validate findings at scale and test with broader user segments, I introduced unmoderated remote testing using UserPerry.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    { title: "Scale", desc: "Run tests with 20-50 participants simultaneously" },
                                    { title: "Heatmaps", desc: "Capture screen recordings and click heatmaps without scheduling" },
                                    { title: "Reach", desc: "Test with real users across the UAE, not just in-person" },
                                    { title: "Quant", desc: "Get completion rates to back up qualitative 'why'" }
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-4 p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
                                        <div className="mt-1">
                                            <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                                        </div>
                                        <div>
                                            <span className="font-bold text-slate-900 block mb-0.5">{item.title}</span>
                                            <span className="text-[14px]">{item.desc}</span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                        >
                            <div className="bg-white rounded-[32px] p-6 shadow-2xl border border-slate-100 overflow-hidden relative">
                                <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded bg-[#7C3AED] flex items-center justify-center text-white text-[18px] font-display">U</div>
                                        <span className="font-bold text-slate-800">UserPerry Dashboard</span>
                                    </div>
                                    <div className="px-3 py-1.5 bg-emerald-50 text-emerald-600 text-[10px] font-bold rounded-full border border-emerald-100 uppercase tracking-widest">Active Test</div>
                                </div>

                                <div className="space-y-6">
                                    {/* Quant metrics */}
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="p-4 bg-slate-50 rounded-xl">
                                            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Participants</span>
                                            <span className="text-2xl font-bold text-slate-900">42</span>
                                        </div>
                                        <div className="p-4 bg-slate-50 rounded-xl">
                                            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Avg Time</span>
                                            <span className="text-2xl font-bold text-slate-900">4:12m</span>
                                        </div>
                                    </div>

                                    {/* Success Rates */}
                                    <div className="space-y-4">
                                        {[
                                            { label: "Task 1", val: 85, color: "bg-emerald-400" },
                                            { label: "Task 2", val: 72, color: "bg-amber-400" },
                                            { label: "Task 3", val: 91, color: "bg-emerald-400" }
                                        ].map((bar, i) => (
                                            <div key={i} className="space-y-2">
                                                <div className="flex justify-between text-[11px] font-bold uppercase tracking-widest">
                                                    <span className="text-slate-500">{bar.label} Success</span>
                                                    <span className="text-slate-900">{bar.val}%</span>
                                                </div>
                                                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                                                    <div className={`h-full ${bar.color}`} style={{ width: `${bar.val}%` }}></div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Heatmap Placeholder Overlay */}
                                    <div className="relative aspect-[4/3] bg-slate-900/5 rounded-2xl overflow-hidden border border-slate-100">
                                        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-[#4169E1]/40 blur-2xl rounded-full"></div>
                                        <div className="absolute top-1/4 left-1/2 w-12 h-12 bg-red-400/30 blur-2xl rounded-full"></div>
                                        <div className="absolute top-2/3 right-1/4 w-20 h-20 bg-orange-400/20 blur-2xl rounded-full"></div>
                                        <div className="h-full w-full flex items-center justify-center">
                                            <MousePointer2 className="w-6 h-6 text-slate-300" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* SECTION 6: THE STORYTELLING REPORT */}
            <section className="py-20 md:py-32 bg-white">
                <div className="max-w-[1120px] mx-auto px-6">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="text-center mb-16 md:mb-24"
                    >
                        <h2 className="text-[32px] md:text-[36px] font-bold text-[#1A1D23] mb-4 font-display">Turning Findings into Executive-Ready Stories</h2>
                        <p className="text-[16px] md:text-[18px] text-[#6B7280] max-width 720px mx-auto leading-relaxed">
                            The biggest challenge wasn't running the tests — it was making leadership care about the results.
                        </p>
                    </motion.div>

                    <div className="max-w-4xl mx-auto mb-24 md:mb-32">
                        <div className="space-y-6 text-[16px] text-slate-600 leading-relaxed mb-16">
                            <p>
                                Before I joined, UX reports at RTA were dense spreadsheets listing issues by severity. Leadership rarely read them, and recommendations were lost. I completely redesigned the reporting format into visual, storytelling-based presentations that compare the current experience against the proposed improved experience — side by side.
                            </p>
                            <p className="font-bold text-[#1A1D23]">Each report follows a consistent narrative structure:</p>
                        </div>

                        <div className="space-y-12 relative">
                            {/* Vertical Line */}
                            <div className="absolute left-[23px] top-4 bottom-4 w-0.5 bg-slate-100 -z-0"></div>

                            {[
                                { title: "Executive Summary", desc: "One-page overview: what was tested, key finding, top recommendation, and estimated impact." },
                                { title: "Current vs. New Experience", desc: "Side-by-side screenshots showing the problem next to the proposed solution. Visual and immediate." },
                                { title: "What Users Loved", desc: "Highlight what's working well. This builds credibility and trust with stakeholders who built the product." },
                                { title: "What Users Struggled With", desc: "Pain points mapped to specific screens with real user quotes and video clips. Severity-coded." },
                                { title: "Satisfaction Scores", desc: "SUS scores, task success rates, and time-on-task comparisons presented as clean metrics." },
                                { title: "Prioritized Recommendations", desc: "Proposed fix, expected impact, and implementation effort. Sorted by impact-to-effort ratio." }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    variants={fadeUp}
                                    className="flex items-start gap-8 relative z-10"
                                >
                                    <div className="w-12 h-12 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center font-bold text-[#4169E1] shadow-sm flex-shrink-0">
                                        {i + 1}
                                    </div>
                                    <div className="pt-2">
                                        <h3 className="text-[18px] font-bold text-[#1A1D23] mb-2">{item.title}</h3>
                                        <p className="text-[16px] text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Quote block */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="bg-[#E8F0FE] border-l-4 border-[#4169E1] p-10 md:p-12 rounded-r-2xl max-w-4xl mx-auto"
                    >
                        <MessageSquare className="w-10 h-10 text-[#4169E1] mb-6 opacity-30" />
                        <p className="text-[20px] md:text-[24px] font-medium text-[#1A1D23] leading-relaxed italic">
                            "This approach transformed low-impact reports into executive-ready insights that drive actual design decisions. Reports were no longer filed away — they became the starting point for sprint planning."
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* SECTION 7: IMPACT & RESULTS */}
            <section className="py-24 bg-gradient-to-br from-[#1e40af] to-[#4169E1] text-white overflow-hidden relative">
                <div className="max-w-[1120px] mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                    >
                        <h2 className="text-[32px] md:text-[40px] font-bold mb-16 font-display">Research Impact</h2>

                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 mb-16">
                            {[
                                { val: "50+", label: "Sessions conducted across 8 products" },
                                { val: "30+", label: "Storytelling reports delivered to leadership" },
                                { val: "12M+", label: "Users impacted through improvement" },
                                { val: "85%", label: "Avg task success rate achieved" }
                            ].map((metric, i) => (
                                <div key={i} className="flex flex-col items-center">
                                    <span className="text-[48px] md:text-[64px] font-bold mb-2 tracking-tighter">{metric.val}</span>
                                    <p className="text-[14px] md:text-[16px] text-white/80 font-medium leading-tight max-w-[180px] mx-auto">{metric.label}</p>
                                </div>
                            ))}
                        </div>

                        <p className="text-[16px] md:text-[18px] text-white/80 max-w-[640px] mx-auto leading-relaxed">
                            Research became a regular part of RTA's design workflow — not an afterthought. Product teams now request usability testing before development, and leadership uses research reports as input for strategic planning.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* SECTION 8: KEY LEARNINGS */}
            <section className="py-20 md:py-32 bg-white">
                <div className="max-w-[1120px] mx-auto px-6">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="text-center mb-16 md:mb-24"
                    >
                        <h2 className="text-[32px] md:text-[36px] font-bold text-[#1A1D23] font-display">What I Learned</h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Speak Leadership's Language", desc: "Executives care about user satisfaction, task completion, and business impact. Frame findings in terms of what it costs the organization." },
                            { title: "M + U = Complete Picture", desc: "Moderated sessions reveal the 'why', while unmoderated testing at scale reveals the 'how many'. Neither alone is sufficient." },
                            { title: "Show, Don't Tell", desc: "A 2-second video clip is worth more than a 10-page report. Side-by-side comparisons make the case instantly without needing explanation." }
                        ].map((card, i) => (
                            <motion.div
                                key={i}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                variants={fadeUp}
                                className="p-8 rounded-[24px] border border-slate-200 bg-white shadow-sm hover:shadow-xl hover:border-[#4169E1]/20 transition-all duration-300"
                            >
                                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mb-6">
                                    <Zap className="w-5 h-5 text-[#4169E1]" />
                                </div>
                                <h3 className="text-[18px] font-bold text-[#1A1D23] mb-4">{card.title}</h3>
                                <p className="text-[16px] text-slate-500 font-medium leading-relaxed">{card.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 9: CTA — NEXT PROJECT */}
            <section className="py-24 bg-[#F8F9FA] text-center">
                <div className="max-w-[1120px] mx-auto px-6">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="space-y-6"
                    >
                        <span className="text-[14px] font-bold text-slate-400 uppercase tracking-widest">Next Case Study</span>
                        <h3
                            onClick={() => navigate('/work/ai-urban-tool')}
                            className="text-[32px] md:text-[40px] font-bold text-[#4169E1] hover:underline cursor-pointer tracking-tight font-display"
                        >
                            AI Urban Design Tool →
                        </h3>
                        <p className="text-[16px] text-slate-500 font-medium">Designing AI-powered visualization for GITEX Dubai 2025</p>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default UXResearchCaseStudy;
