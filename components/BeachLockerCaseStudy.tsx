import React from 'react';
import { motion } from 'framer-motion';
import {
    ArrowLeft, ArrowRight, Lock, Smartphone, Phone, Shield, MapPin,
    CheckCircle2, XCircle, AlertTriangle, Users, FileText, ChevronRight,
    Clock, CreditCard, QrCode, Bell, Key, UserCheck, Headphones
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import CaseStudyNav from './CaseStudyNav';

const BeachLockerCaseStudy: React.FC = () => {
    const navigate = useNavigate();

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

    const ACCENT = '#0D9488'; // Teal accent

    // Service Blueprint Data
    const blueprintPhases = [
        {
            phase: '1. Discovery',
            user: 'Arrives at beach, scans QR code',
            app: 'QR code triggers app download',
            backend: 'App deployment',
            locker: 'QR code displayed on locker'
        },
        {
            phase: '2. Onboarding',
            user: 'Opens app, navigates to Locker Book Services',
            app: 'App downloaded, service navigation',
            backend: 'Service availability check',
            locker: '—'
        },
        {
            phase: '3. Identification',
            user: 'Enters area number or auto-detect',
            app: 'Location input / auto-detection',
            backend: 'Location processing',
            locker: '—'
        },
        {
            phase: '4. Selection',
            user: 'Views available lockers, logs in, receives OTP',
            app: 'Locker display, login screen, OTP sent',
            backend: 'Locker availability check, OTP verification',
            locker: 'Lockers empty and ready'
        },
        {
            phase: '5. Booking',
            user: 'Selects locker, chooses rental time',
            app: 'Locker selection, time selection',
            backend: 'Locker reservation, time-based pricing',
            locker: 'Locker is reserved'
        },
        {
            phase: '6. Payment',
            user: 'Makes payment',
            app: 'Payment gateway',
            backend: 'Payment processing',
            locker: '—'
        },
        {
            phase: '7. Confirmation',
            user: 'Receives PIN, views confirmation details',
            app: 'PIN generation, confirmation display',
            backend: 'PIN generation, confirmation storage',
            locker: 'Locker ready for use'
        },
        {
            phase: '8. Usage',
            user: 'Opens locker with PIN, enjoys beach',
            app: '—',
            backend: 'Locker access control',
            locker: 'Locker opens'
        },
        {
            phase: '9. Notifications',
            user: 'Receives 15-min time alert',
            app: 'Time-based notifications',
            backend: 'Notification system',
            locker: '—'
        },
        {
            phase: '10. Extension',
            user: 'Extends time through app',
            app: 'Time extension interface',
            backend: 'Time extension + payment',
            locker: '—'
        },
        {
            phase: '11. Re-access',
            user: 'Requests new PIN if expired',
            app: 'New PIN request',
            backend: 'New PIN generation',
            locker: 'New PIN generation'
        }
    ];

    // Happy path steps
    const happyPathSteps = [
        { icon: <QrCode className="w-5 h-5" />, title: 'Arrive & Scan', desc: 'User arrives at the beach → Notices the locker area → Scans QR code' },
        { icon: <Smartphone className="w-5 h-5" />, title: 'App Setup', desc: 'App downloads → Navigates to "Locker Book Services" → System auto-detects location → Shows available lockers' },
        { icon: <Key className="w-5 h-5" />, title: 'Login', desc: 'User taps "Login" → Enters phone number → Receives OTP → Login successful' },
        { icon: <Lock className="w-5 h-5" />, title: 'Select & Book', desc: 'Sees available lockers → Selects a locker → Chooses rental time → Price updates in real-time' },
        { icon: <CreditCard className="w-5 h-5" />, title: 'Payment', desc: 'Taps "Proceed to Pay" → Enters payment details → Payment processed' },
        { icon: <CheckCircle2 className="w-5 h-5" />, title: 'Access Locker', desc: 'Receives PIN instantly → Sees locker number, rental time, expiration → Walks to locker → Enters PIN → Locker opens' },
        { icon: <Bell className="w-5 h-5" />, title: 'Extend Time', desc: 'Receives push notification 15 min before rental ends → Taps "Extend Time" → Selects additional hours → Payment → Extension successful' },
        { icon: <Key className="w-5 h-5" />, title: 'Re-access', desc: 'If PIN expired → Taps "Request New PIN" → Receives new PIN → Uses new PIN to re-access' }
    ];

    // Call Center Recovery Flow
    const flowA = [
        'User realizes phone is lost and cannot access locker PIN',
        'User borrows a friend\'s phone or finds another way to call customer service',
        'Call center asks for locker location, user name, and locker number',
        'Call center searches the dashboard for the booking',
        'Call center asks the security question the user set during booking',
        'If answered correctly → Call center requests new PIN from the system',
        'Call center informs user the PIN is valid for only 6 minutes',
        'User goes to locker and unlocks it within the 6-minute window',
        'If time was exceeded → Extra charges recorded and added to account'
    ];

    // On-Site DM Employee Flow
    const flowB = [
        'Call center cannot verify the user\'s identity through the security question',
        'Call center contacts a designated DM beach employee',
        'Call center requests a new PIN and shares it with the DM employee',
        'DM employee goes to the locker location and meets the user',
        'DM employee unlocks the locker using the new PIN in the user\'s presence',
        'DM employee verifies that the belongings inside belong to the user',
        'Verification complete → DM employee informs call center → Case closed'
    ];

    // Business Recommendations
    const bizRecommendations = [
        { title: 'Locker Numbering', desc: 'Number lockers sequentially (1-36) instead of serial numbers. Simplifies user experience and makes lockers easier to locate.', rejected: false },
        { title: 'Security & Shelter', desc: 'Place lockers in sheltered, camera-monitored areas. Enhances security and protects items from environmental factors.', rejected: false },
        { title: 'Employee Training', desc: 'Train beach security to assist customers via a dashboard.', rejected: true, note: 'Rejected — alternative call center solution designed instead' },
        { title: 'DM Employee Involvement', desc: 'Deploy DM employees for urgent on-site verification when call center cannot resolve. Physical verification as last resort.', rejected: false }
    ];

    // BA Recommendations
    const baRecommendations = [
        { title: 'Backend System Update', desc: 'Update locker and DM backend to reflect new numbering scheme.', rejected: false },
        { title: 'Lost Phone Protocol', desc: 'Implement call center + beach security protocol for phone loss scenarios.', rejected: false },
        { title: 'On-Site QR Codes', desc: 'Place QR codes linking to the app with unique locker area numbers per beach.', rejected: false },
        { title: 'Location-Based Features', desc: 'Auto-detect user\'s beach and show relevant available lockers.', rejected: false },
        { title: 'On-Site Instructions', desc: 'Place banners/stickers near lockers explaining system usage and contingency steps.', rejected: false },
        { title: 'Call Center Access', desc: 'Give limited admin panel access to call center for customer support.', rejected: false },
        { title: 'Employee Dashboard', desc: 'Develop a secure dashboard for beach employees to assist with PIN retrieval.', rejected: true, note: 'Rejected — call center alternative implemented' }
    ];

    return (
        <div className="bg-white w-full overflow-hidden text-[#1A1D23] font-sans">

            {/* ==============================================================================
                SECTION 1: HERO
               ============================================================================== */}
            <section className="relative py-20 lg:py-32 bg-[#2B3544] text-white overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{
                    backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 59px, rgba(13,148,136,0.5) 59px, rgba(13,148,136,0.5) 60px), repeating-linear-gradient(90deg, transparent, transparent 59px, rgba(13,148,136,0.5) 59px, rgba(13,148,136,0.5) 60px)',
                }} />

                <div className="max-w-[1120px] mx-auto px-6 lg:px-8 relative z-10 text-center">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="max-w-3xl mx-auto"
                    >
                        <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/30 mb-8">
                            <Lock className="w-3.5 h-3.5" />
                            <span className="text-xs font-bold uppercase tracking-wider font-display">Service Design</span>
                        </motion.div>

                        <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-[56px] font-bold font-display mb-6 tracking-tight text-white leading-[1.1]">
                            Reimagining Public <br />Beach Services
                        </motion.h1>

                        <motion.p variants={fadeInUp} className="text-xl text-slate-400 font-light mb-12 max-w-2xl mx-auto">
                            How I redesigned the end-to-end beach locker experience for Dubai Municipality — connecting digital, physical, and human touchpoints into one seamless service.
                        </motion.p>

                        <motion.div variants={fadeInUp} className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-t border-white/10 text-left">
                            <div>
                                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1 font-display">Client</div>
                                <div className="text-[15px] font-semibold">Dubai Municipality</div>
                            </div>
                            <div>
                                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1 font-display">Role</div>
                                <div className="text-[15px] font-semibold">CX Designer — Service Design Lead</div>
                            </div>
                            <div>
                                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1 font-display">Year</div>
                                <div className="text-[15px] font-semibold">2023</div>
                            </div>
                            <div>
                                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1 font-display">Deliverables</div>
                                <div className="text-[15px] font-semibold">Blueprint, User Flows, Recommendations</div>
                            </div>
                        </motion.div>

                        {/* Metrics Row */}
                        <motion.div variants={fadeInUp} className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                            {[
                                { value: '360°', label: 'Full Service Design' },
                                { value: '11', label: 'Journey Phases' },
                                { value: '3', label: 'Stakeholder Groups' },
                                { value: '7', label: 'BA Recommendations' }
                            ].map((m, i) => (
                                <div key={i} className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                                    <div className="text-2xl font-bold text-teal-300 mb-1">{m.value}</div>
                                    <div className="text-xs text-slate-400 uppercase tracking-wider font-bold">{m.label}</div>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* ==============================================================================
                SECTION 2: THE CHALLENGE
               ============================================================================== */}
            <section className="py-24 bg-white">
                <div className="max-w-[1120px] mx-auto px-6 lg:px-8">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start"
                    >
                        {/* Text Content — 60% */}
                        <motion.div variants={fadeInUp} className="lg:col-span-3">
                            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest font-display block mb-3">The Problem</span>
                            <h2 className="text-[32px] md:text-[36px] font-bold font-display text-[#1A1D23] mb-8">The Challenge</h2>

                            <p className="text-lg text-slate-600 leading-relaxed mb-6">
                                Dubai Municipality operates beach locker services across Dubai's public beaches — a system where visitors book lockers through a mobile app, receive a PIN code, and access physical lockers to store their belongings while enjoying the beach.
                            </p>
                            <p className="text-lg text-slate-600 leading-relaxed mb-8">
                                While the system was functional, several pain points were creating friction:
                            </p>

                            <ul className="space-y-4 mb-8">
                                {[
                                    'Lockers used confusing serial numbers instead of simple sequential numbering (1, 2, 3...)',
                                    'No fallback system if a user lost their phone — they couldn\'t access their PIN or their belongings',
                                    'No on-site instructions existed to guide first-time users',
                                    'Call center had no admin access to help users remotely',
                                    'No location-based feature to show available lockers at the user\'s specific beach',
                                    'Security and shelter around locker areas was inconsistent'
                                ].map((pain, i) => (
                                    <li key={i} className="flex gap-3 items-start">
                                        <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                                        <span className="text-slate-700">{pain}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="bg-teal-50 border border-teal-100 rounded-xl p-6">
                                <p className="text-teal-800 font-semibold text-lg">
                                    The core question: <span className="font-bold">How do we design a service that works seamlessly across the mobile app, the physical locker, and the human support channels — including worst-case scenarios?</span>
                                </p>
                            </div>
                        </motion.div>

                        {/* Visual — 40% */}
                        <motion.div variants={fadeInUp} className="lg:col-span-2">
                            <div className="bg-[#F8F9FA] rounded-2xl p-8 border border-slate-200">
                                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-8 text-center">Three Connected Touchpoints</h4>
                                <div className="flex flex-col items-center gap-4">
                                    {[
                                        { icon: <Smartphone className="w-8 h-8" />, label: 'Mobile App', color: 'bg-teal-50 border-teal-200 text-teal-600' },
                                        { icon: <Lock className="w-8 h-8" />, label: 'Physical Locker', color: 'bg-blue-50 border-blue-200 text-blue-600' },
                                        { icon: <Headphones className="w-8 h-8" />, label: 'Support Staff', color: 'bg-amber-50 border-amber-200 text-amber-600' }
                                    ].map((tp, i) => (
                                        <React.Fragment key={i}>
                                            <div className={`w-full flex items-center gap-4 p-5 rounded-xl border ${tp.color}`}>
                                                {tp.icon}
                                                <span className="font-bold text-[#1A1D23]">{tp.label}</span>
                                            </div>
                                            {i < 2 && (
                                                <div className="flex flex-col items-center">
                                                    <div className="w-0.5 h-4 bg-slate-300" />
                                                    <ChevronRight className="w-4 h-4 text-slate-400 rotate-90 -my-1" />
                                                    <div className="w-0.5 h-4 bg-slate-300" />
                                                </div>
                                            )}
                                        </React.Fragment>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* ==============================================================================
                SECTION 3: MY APPROACH
               ============================================================================== */}
            <section className="py-24 bg-[#F8F9FA]">
                <div className="max-w-[1120px] mx-auto px-6 lg:px-8">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                    >
                        <motion.div variants={fadeInUp} className="text-center mb-16">
                            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest font-display block mb-3">Methodology</span>
                            <h2 className="text-[32px] md:text-[36px] font-bold font-display text-[#1A1D23] mb-4">My Approach</h2>
                            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                                I approached this as a 360° service design challenge — not just the app interface, but the entire service ecosystem including physical infrastructure, staff operations, and customer support channels.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                {
                                    num: '01',
                                    title: 'Map the Ecosystem',
                                    desc: 'Mapped every touchpoint: the mobile app, the physical lockers, the backend system, the call center, and beach employees. Understood how each layer connects.',
                                    icon: <MapPin className="w-6 h-6" />
                                },
                                {
                                    num: '02',
                                    title: 'Design for Happy + Worst Case',
                                    desc: 'Designed the complete happy path (booking to beach), but also the critical edge cases: what happens when a user loses their phone? What happens when time expires?',
                                    icon: <Shield className="w-6 h-6" />
                                },
                                {
                                    num: '03',
                                    title: 'Separate Stakeholder Recommendations',
                                    desc: 'Delivered targeted recommendations — one set for business decision-makers (operational changes) and another set for business analysts (technical system changes).',
                                    icon: <Users className="w-6 h-6" />
                                },
                                {
                                    num: '04',
                                    title: 'Blueprint the Full Journey',
                                    desc: 'Created a detailed service blueprint spanning 11 phases, showing user actions, frontend app behavior, backend system responses, and physical locker states.',
                                    icon: <FileText className="w-6 h-6" />
                                }
                            ].map((step, i) => (
                                <motion.div
                                    key={i}
                                    variants={fadeInUp}
                                    className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-teal-200 hover:shadow-lg hover:shadow-teal-50 transition-all duration-300 group"
                                >
                                    <div className="flex items-center justify-between mb-6">
                                        <span className="text-4xl font-bold text-slate-100 font-display group-hover:text-teal-100 transition-colors">{step.num}</span>
                                        <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600 group-hover:bg-teal-100 transition-colors">
                                            {step.icon}
                                        </div>
                                    </div>
                                    <h3 className="text-lg font-bold text-[#1A1D23] mb-3">{step.title}</h3>
                                    <p className="text-sm text-slate-600 leading-relaxed">{step.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ==============================================================================
                SECTION 4: SERVICE BLUEPRINT
               ============================================================================== */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-[1120px] mx-auto px-6 lg:px-8">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                    >
                        <motion.div variants={fadeInUp} className="text-center mb-12">
                            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest font-display block mb-3">Complete Journey</span>
                            <h2 className="text-[32px] md:text-[36px] font-bold font-display text-[#1A1D23] mb-4">Service Blueprint</h2>
                            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                                A map showing all the steps needed to deliver the service, including what the customer sees and what happens behind the scenes.
                            </p>
                        </motion.div>

                        <motion.div variants={fadeInUp} className="overflow-x-auto pb-4 -mx-2">
                            <div className="min-w-[1100px] px-2">
                                {/* Swim Lane Headers */}
                                <div className="grid grid-cols-[140px_1fr] gap-0 mb-0">
                                    <div className="bg-[#2B3544] rounded-tl-xl p-3 text-white font-bold text-xs uppercase tracking-wider flex items-center">
                                        Phase →
                                    </div>
                                    <div className="grid grid-cols-11 gap-px bg-slate-200">
                                        {blueprintPhases.map((bp, i) => (
                                            <div key={i} className="bg-[#2B3544] p-2 text-center">
                                                <span className="text-[10px] font-bold text-teal-300 uppercase leading-tight block">{bp.phase}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Swim Lanes */}
                                {[
                                    { label: 'User Actions', key: 'user' as const, color: 'bg-teal-50 text-teal-800', labelBg: 'bg-teal-600' },
                                    { label: 'App Frontend', key: 'app' as const, color: 'bg-blue-50 text-blue-800', labelBg: 'bg-blue-600' },
                                    { label: 'Backend', key: 'backend' as const, color: 'bg-purple-50 text-purple-800', labelBg: 'bg-purple-600' },
                                    { label: 'Physical Locker', key: 'locker' as const, color: 'bg-amber-50 text-amber-800', labelBg: 'bg-amber-600' },
                                ].map((lane, laneIdx) => (
                                    <div key={laneIdx} className="grid grid-cols-[140px_1fr] gap-0">
                                        <div className={`${lane.labelBg} p-3 text-white font-bold text-[11px] uppercase tracking-wider flex items-center ${laneIdx === 3 ? 'rounded-bl-xl' : ''}`}>
                                            {lane.label}
                                        </div>
                                        <div className="grid grid-cols-11 gap-px bg-slate-200">
                                            {blueprintPhases.map((bp, i) => (
                                                <div key={i} className={`${lane.color} p-2 text-[10px] leading-tight font-medium min-h-[60px] flex items-center`}>
                                                    {bp[lane.key]}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.p variants={fadeInUp} className="text-sm text-slate-500 text-center mt-4 lg:hidden">
                            ← Scroll horizontally to see all phases →
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* ==============================================================================
                SECTION 5: USER FLOW — HAPPY PATH
               ============================================================================== */}
            <section className="py-24 bg-white">
                <div className="max-w-[1120px] mx-auto px-6 lg:px-8">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                    >
                        <motion.div variants={fadeInUp} className="text-center mb-16">
                            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest font-display block mb-3">Step by Step</span>
                            <h2 className="text-[32px] md:text-[36px] font-bold font-display text-[#1A1D23] mb-4">User Flow — Happy Path</h2>
                            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                                The step-by-step experience for a user who successfully books, uses, and extends a locker.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {happyPathSteps.map((step, i) => (
                                <motion.div
                                    key={i}
                                    variants={fadeInUp}
                                    className="relative"
                                >
                                    <div className={`rounded-2xl p-6 border h-full ${i % 2 === 0 ? 'bg-teal-50/50 border-teal-100' : 'bg-white border-slate-200'}`}>
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-10 h-10 rounded-xl bg-teal-100 flex items-center justify-center text-teal-600 shrink-0">
                                                {step.icon}
                                            </div>
                                            <div className="w-7 h-7 rounded-full bg-[#2B3544] text-white text-xs font-bold flex items-center justify-center">
                                                {i + 1}
                                            </div>
                                        </div>
                                        <h4 className="font-bold text-[#1A1D23] mb-2">{step.title}</h4>
                                        <p className="text-sm text-slate-600 leading-relaxed">{step.desc}</p>
                                    </div>
                                    {/* Arrow */}
                                    {i < happyPathSteps.length - 1 && i % 4 !== 3 && (
                                        <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                                            <ChevronRight className="w-5 h-5 text-teal-400" />
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ==============================================================================
                SECTION 6: EDGE CASE — LOST PHONE RECOVERY
               ============================================================================== */}
            <section className="py-24 bg-[#F8F9FA]">
                <div className="max-w-[1120px] mx-auto px-6 lg:px-8">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                    >
                        <motion.div variants={fadeInUp} className="text-center mb-6">
                            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest font-display block mb-3">Edge Case</span>
                            <h2 className="text-[32px] md:text-[36px] font-bold font-display text-[#1A1D23] mb-4">Designing for the Worst Case</h2>
                            <h3 className="text-xl text-slate-600 font-medium mb-4">Lost Phone Recovery</h3>
                        </motion.div>

                        <motion.div variants={fadeInUp} className="bg-white rounded-2xl border border-slate-200 p-8 max-w-3xl mx-auto mb-12">
                            <p className="text-slate-600 leading-relaxed">
                                The most critical edge case: a user stores their belongings in a locker, goes to enjoy the beach, and loses their phone. They now have no access to the app, no PIN, and potentially their time has expired with extra charges accumulating. This is a stressful, real-world scenario that needed a human-centered solution.
                            </p>
                        </motion.div>

                        {/* Two Recovery Flows */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Flow A — Call Center */}
                            <motion.div variants={fadeInUp} className="bg-white rounded-2xl border border-blue-200 overflow-hidden">
                                <div className="bg-blue-600 px-6 py-4 flex items-center gap-3">
                                    <Phone className="w-5 h-5 text-white" />
                                    <div>
                                        <h4 className="font-bold text-white text-lg">Flow A — Call Center Recovery</h4>
                                        <p className="text-blue-200 text-xs font-medium uppercase tracking-wider">Standard Path</p>
                                    </div>
                                </div>
                                <div className="p-6 space-y-3">
                                    {flowA.map((step, i) => (
                                        <div key={i} className="flex gap-3 items-start">
                                            <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                                                {i + 1}
                                            </div>
                                            <p className="text-sm text-slate-700 leading-relaxed">{step}</p>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Flow B — On-Site */}
                            <motion.div variants={fadeInUp} className="bg-white rounded-2xl border border-amber-200 overflow-hidden">
                                <div className="bg-amber-600 px-6 py-4 flex items-center gap-3">
                                    <UserCheck className="w-5 h-5 text-white" />
                                    <div>
                                        <h4 className="font-bold text-white text-lg">Flow B — On-Site DM Employee</h4>
                                        <p className="text-amber-200 text-xs font-medium uppercase tracking-wider">Last Resort Escalation</p>
                                    </div>
                                </div>
                                <div className="p-6 space-y-3">
                                    {flowB.map((step, i) => (
                                        <div key={i} className="flex gap-3 items-start">
                                            <div className="w-6 h-6 rounded-full bg-amber-100 text-amber-600 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                                                {i + 1}
                                            </div>
                                            <p className="text-sm text-slate-700 leading-relaxed">{step}</p>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        {/* Escalation Arrow */}
                        <motion.div variants={fadeInUp} className="flex items-center justify-center gap-3 mt-8 text-sm font-bold text-slate-500">
                            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700">
                                <Phone className="w-4 h-4" /> Flow A
                            </div>
                            <ArrowRight className="w-5 h-5 text-slate-400" />
                            <span className="text-slate-400">if unverified</span>
                            <ArrowRight className="w-5 h-5 text-slate-400" />
                            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 text-amber-700">
                                <UserCheck className="w-4 h-4" /> Flow B
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* ==============================================================================
                SECTION 7: RECOMMENDATIONS
               ============================================================================== */}
            <section className="py-24 bg-white">
                <div className="max-w-[1120px] mx-auto px-6 lg:px-8">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                    >
                        <motion.div variants={fadeInUp} className="text-center mb-16">
                            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest font-display block mb-3">Deliverables</span>
                            <h2 className="text-[32px] md:text-[36px] font-bold font-display text-[#1A1D23] mb-4">Actionable Recommendations</h2>
                            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                                I delivered two targeted sets of recommendations — one for business stakeholders focused on operational decisions, and one for business analysts focused on technical implementation.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Business Recommendations */}
                            <motion.div variants={fadeInUp}>
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-xl bg-teal-100 flex items-center justify-center text-teal-600">
                                        <Users className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-[#1A1D23] text-lg">Business Recommendations</h3>
                                        <p className="text-sm text-slate-500">Operational decisions</p>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    {bizRecommendations.map((rec, i) => (
                                        <div key={i} className={`p-5 rounded-xl border ${rec.rejected ? 'border-red-200 bg-red-50/50 opacity-75' : 'border-slate-200 bg-white'}`}>
                                            <div className="flex items-center justify-between mb-2">
                                                <h4 className={`font-bold ${rec.rejected ? 'text-slate-500' : 'text-[#1A1D23]'}`}>{rec.title}</h4>
                                                {rec.rejected ? (
                                                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-red-100 text-red-600">
                                                        <XCircle className="w-3 h-3" /> Rejected
                                                    </span>
                                                ) : (
                                                    <CheckCircle2 className="w-4 h-4 text-teal-500" />
                                                )}
                                            </div>
                                            <p className={`text-sm leading-relaxed ${rec.rejected ? 'text-slate-400' : 'text-slate-600'}`}>{rec.desc}</p>
                                            {rec.rejected && rec.note && (
                                                <p className="text-xs text-red-500 mt-2 italic">{rec.note}</p>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* BA Recommendations */}
                            <motion.div variants={fadeInUp}>
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600">
                                        <FileText className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-[#1A1D23] text-lg">BA Recommendations</h3>
                                        <p className="text-sm text-slate-500">Technical implementation</p>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    {baRecommendations.map((rec, i) => (
                                        <div key={i} className={`p-5 rounded-xl border ${rec.rejected ? 'border-red-200 bg-red-50/50 opacity-75' : 'border-slate-200 bg-white'}`}>
                                            <div className="flex items-center justify-between mb-2">
                                                <h4 className={`font-bold ${rec.rejected ? 'text-slate-500' : 'text-[#1A1D23]'}`}>{rec.title}</h4>
                                                {rec.rejected ? (
                                                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-red-100 text-red-600">
                                                        <XCircle className="w-3 h-3" /> Rejected
                                                    </span>
                                                ) : (
                                                    <CheckCircle2 className="w-4 h-4 text-teal-500" />
                                                )}
                                            </div>
                                            <p className={`text-sm leading-relaxed ${rec.rejected ? 'text-slate-400' : 'text-slate-600'}`}>{rec.desc}</p>
                                            {rec.rejected && rec.note && (
                                                <p className="text-xs text-red-500 mt-2 italic">{rec.note}</p>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ==============================================================================
                SECTION 8: NAVIGATING STAKEHOLDER PUSHBACK
               ============================================================================== */}
            <section className="py-24 bg-gradient-to-br from-teal-50 to-cyan-50">
                <div className="max-w-[1120px] mx-auto px-6 lg:px-8 text-center">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                    >
                        <motion.div variants={fadeInUp}>
                            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest font-display block mb-3">Real-World Design</span>
                            <h2 className="text-[32px] md:text-[36px] font-bold font-display text-[#1A1D23] mb-8">Navigating Stakeholder Decisions</h2>
                        </motion.div>

                        <motion.p variants={fadeInUp} className="text-lg text-slate-600 leading-relaxed mb-8">
                            Not every recommendation gets approved — and that's part of real-world service design. The business owner rejected two proposals: training beach security employees and building an employee dashboard for PIN retrieval.
                        </motion.p>

                        <motion.p variants={fadeInUp} className="text-lg text-slate-600 leading-relaxed mb-12">
                            Rather than pushing back, I designed alternative recovery paths through the call center channel and on-site DM employee verification as a last resort. This approach — designing around constraints rather than fighting them — resulted in a <strong className="text-[#1A1D23]">formal sign-off from the business owner</strong> on all accepted recommendations, service blueprints, and user flows.
                        </motion.p>

                        {/* Decision Flow Diagram */}
                        <motion.div variants={fadeInUp} className="flex flex-wrap items-center justify-center gap-3 text-sm font-medium">
                            <div className="px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 shadow-sm">
                                Recommendation
                            </div>
                            <ArrowRight className="w-4 h-4 text-slate-400" />
                            <div className="px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 shadow-sm">
                                Business Decision
                            </div>
                            <ArrowRight className="w-4 h-4 text-slate-400" />
                            <div className="flex flex-col gap-2">
                                <div className="px-4 py-2 rounded-lg bg-teal-100 text-teal-700 font-bold text-xs">
                                    ✓ Approved
                                </div>
                                <div className="px-4 py-2 rounded-lg bg-red-100 text-red-600 font-bold text-xs">
                                    ✕ Rejected
                                </div>
                            </div>
                            <ArrowRight className="w-4 h-4 text-slate-400" />
                            <div className="px-4 py-2.5 rounded-xl bg-blue-100 border border-blue-200 text-blue-700 font-bold shadow-sm">
                                Alternative Designed
                            </div>
                            <ArrowRight className="w-4 h-4 text-slate-400" />
                            <div className="px-4 py-2.5 rounded-xl bg-teal-500 text-white font-bold shadow-sm">
                                ✓ Final Sign-off
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* ==============================================================================
                SECTION 9: OUTCOME & IMPACT
               ============================================================================== */}
            <section className="py-24 bg-[#2B3544] text-white">
                <div className="max-w-[1120px] mx-auto px-6 lg:px-8">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                    >
                        <motion.div variants={fadeInUp} className="text-center mb-16">
                            <span className="text-xs font-bold text-teal-400 uppercase tracking-widest font-display block mb-3">Results</span>
                            <h2 className="text-[32px] md:text-[36px] font-bold font-display text-white">Outcome</h2>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
                            {[
                                'Simplified locker identification system (serial → sequential)',
                                'Multi-layered security verification (app → call center → on-site employee)',
                                'Complete service blueprint with 11 journey phases delivered',
                                'Separate business and technical recommendation tracks',
                                'Formal business owner sign-off obtained',
                                'Edge case recovery flows designed for lost phone and time overrun scenarios',
                                'On-site QR codes and instructional banners designed for user guidance'
                            ].map((outcome, i) => (
                                <motion.div
                                    key={i}
                                    variants={fadeInUp}
                                    className="flex items-start gap-3 bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10"
                                >
                                    <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                                    <p className="text-sm text-slate-300 leading-relaxed">{outcome}</p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Closing Statement */}
                        <motion.div variants={fadeInUp} className="max-w-3xl mx-auto text-center">
                            <div className="w-12 h-1 bg-teal-400 mx-auto mb-8 rounded-full" />
                            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed font-light italic">
                                "This project taught me that great service design isn't just about the digital interface — it's about designing the entire ecosystem of touchpoints, support channels, and human interventions that make a service work in the real world, including when things go wrong."
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Footer / Navigation */}
            <CaseStudyNav currentId={4} />
        </div>
    );
};

export default BeachLockerCaseStudy;
