import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight, Users, FileText, Building2, UserCheck, Eye,
  ClipboardCheck, Globe2, Layers, CheckCircle2, Target, Lightbulb,
  PenTool, Workflow, Shield
} from 'lucide-react';

interface ServiceProviderCaseStudyProps {
  onBack: () => void;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
};

const IMG_BASE = '/case-studies/service-provider';

/* ── Reusable Components ── */

const SectionLabel: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <motion.span
    variants={fadeInUp}
    className="inline-block text-[12px] font-semibold tracking-[0.15em] uppercase text-[#4169E1] mb-3"
  >
    {children}
  </motion.span>
);

const SectionHeading: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <motion.h2
    variants={fadeInUp}
    className={`font-display text-[32px] md:text-[40px] font-bold text-[#1A1D23] leading-[1.15] ${className}`}
  >
    {children}
  </motion.h2>
);

const SectionText: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <motion.p
    variants={fadeInUp}
    className={`text-[16px] md:text-[18px] text-[#6B7280] leading-[1.7] max-w-[640px] ${className}`}
  >
    {children}
  </motion.p>
);

const ImageFrame: React.FC<{ src: string; alt: string; caption?: string; className?: string }> = ({ src, alt, caption, className = '' }) => (
  <motion.div variants={fadeInUp} className={`rounded-2xl overflow-hidden border border-slate-200/60 shadow-lg shadow-slate-200/40 ${className}`}>
    <img src={src} alt={alt} className="w-full h-auto" loading="lazy" />
    {caption && (
      <div className="px-5 py-3 bg-white border-t border-slate-100">
        <p className="text-[13px] text-[#6B7280] leading-relaxed">{caption}</p>
      </div>
    )}
  </motion.div>
);

const Divider = () => (
  <div className="w-full max-w-[80px] h-[3px] rounded-full bg-gradient-to-r from-[#4169E1] to-[#7C3AED] mx-auto" />
);

/* ── Main Component ── */

const ServiceProviderCaseStudy: React.FC<ServiceProviderCaseStudyProps> = () => {
  return (
    <div className="relative bg-white overflow-hidden">

      {/* ══════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden" style={{
        background: 'linear-gradient(135deg, #EEF2FF 0%, #F5F3FF 30%, #EFF6FF 60%, #F0FAFA 100%)'
      }}>
        {/* ── Background layers ── */}
        <div className="pointer-events-none absolute inset-0 z-0">
          {/* SVG dot-grid pattern */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.35]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dots-sp" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
                <circle cx="1.5" cy="1.5" r="1.5" fill="#4169E1" fillOpacity="0.25" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots-sp)" />
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

          {/* Diagonal lines overlay */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.08]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="diag-sp" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                <line x1="0" y1="0" x2="0" y2="40" stroke="#4169E1" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#diag-sp)" />
          </svg>

          {/* Bottom fade to white */}
          <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-b from-transparent to-white" />
          {/* Top-left corner accent */}
          <div className="absolute top-0 left-0 w-48 h-48 bg-gradient-to-br from-[#4169E1]/10 to-transparent rounded-br-full" />
        </div>

        {/* ── Content ── */}
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16 relative z-10 w-full py-32 lg:py-0">
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
                  <Building2 className="w-3.5 h-3.5 text-[#4169E1]" />
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#4169E1]">RTA Dubai · Service Design</span>
                </div>
              </motion.div>

              {/* Headline */}
              <motion.div variants={fadeInUp} className="space-y-3">
                <h1 className="text-[52px] md:text-[64px] lg:text-[72px] font-bold leading-[1.02] tracking-tight font-display text-[#1A1D23]">
                  Service Provider<br />
                  <span className="bg-clip-text text-transparent" style={{
                    backgroundImage: 'linear-gradient(135deg, #4169E1 0%, #7C3AED 55%, #0EA5E9 100%)'
                  }}>
                    Licensing Platform
                  </span>
                </h1>
                <p className="text-[17px] md:text-[18px] text-[#4B5563] leading-[1.75] max-w-[480px]">
                  Designing an end-to-end government platform that turns a 45-day paper process
                  into a seamless digital journey — for applicants, reviewers, inspectors, and executives.
                </p>
              </motion.div>

              {/* Stat cards */}
              <motion.div variants={fadeInUp} className="flex flex-wrap gap-3">
                {[
                  { val: '200+', label: 'Screens Designed', Icon: Layers, color: '#4169E1' },
                  { val: '11 Steps', label: 'End-to-End Flow', Icon: Workflow, color: '#7C3AED' },
                  { val: '8 Roles', label: 'Role Architecture', Icon: Users, color: '#0EA5E9' },
                ].map((m, i) => (
                  <div key={i} className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white border border-slate-200/80 shadow-sm shadow-slate-100 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                    <m.Icon size={20} style={{ color: m.color }} />
                    <div>
                      <div className="text-[18px] font-bold font-display leading-none mb-0.5" style={{ color: m.color }}>{m.val}</div>
                      <div className="text-[11px] font-semibold text-[#9CA3AF] uppercase tracking-wider">{m.label}</div>
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* Role/Duration strip */}
              <motion.div variants={fadeInUp} className="flex flex-wrap gap-6 text-[14px]">
                {[
                  { label: 'Role', value: 'Senior Product Designer' },
                  { label: 'Duration', value: '6 months' },
                  { label: 'Platform', value: 'Web (Gov + Backoffice)' },
                ].map(item => (
                  <div key={item.label}>
                    <span className="block text-[#9CA3AF] text-[11px] font-semibold uppercase tracking-wider mb-1">{item.label}</span>
                    <span className="font-medium text-[#1A1D23]">{item.value}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* ── Right — Blueprint image in browser mockup ── */}
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
                <div className="bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.1)] border border-slate-200 overflow-hidden">
                  <div className="h-9 bg-slate-50 border-b border-slate-200 flex items-center px-4 gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400/70" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/70" />
                    <div className="ml-3 text-[10px] text-slate-400 truncate">service-provider.rta.ae</div>
                  </div>
                  <div className="p-1">
                    <img
                      src={`${IMG_BASE}/hero-blueprint.png`}
                      alt="Service blueprint overview — mapping the full licensing journey"
                      className="w-full h-auto rounded-b-[14px] transform hover:scale-[1.02] transition-transform duration-700"
                    />
                  </div>
                </div>
              </div>

              {/* Floating badge — bottom left */}
              <motion.div
                initial={{ opacity: 0, x: 20, y: 10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -bottom-5 -left-5 flex items-center gap-2.5 px-4 py-2.5 bg-white rounded-xl shadow-xl border border-slate-100"
              >
                <ClipboardCheck size={18} className="text-[#4169E1]" />
                <div className="w-px h-5 bg-slate-200" />
                <span className="text-[11px] font-extrabold text-slate-800 uppercase tracking-wider">Service Blueprint</span>
              </motion.div>

              {/* Floating badge — top right */}
              <motion.div
                initial={{ opacity: 0, x: -20, y: -10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -top-5 -right-4 flex items-center gap-2 px-3 py-2 bg-white rounded-xl shadow-lg border border-emerald-100"
              >
                <CheckCircle2 size={16} className="text-emerald-600" />
                <div>
                  <div className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider">End-to-End</div>
                  <div className="text-[10px] text-emerald-600">Digital Journey</div>
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


      {/* ══════════════════════════════════════════════
          THE CHALLENGE
      ══════════════════════════════════════════════ */}
      <section className="relative py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#F8FAFF] to-white pointer-events-none" />
        <div className="relative max-w-[1120px] mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <SectionLabel>The Challenge</SectionLabel>
            <SectionHeading>A paper-heavy process nobody understood</SectionHeading>
            <SectionText className="mx-auto mt-4">
              Service providers in Dubai — driving institutes, eye test centers, trusted agents — had to
              navigate a maze of paper forms, in-person visits, and phone calls across multiple
              government departments just to get licensed.
            </SectionText>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-6"
          >
            {[
              { icon: FileText, title: '11 approval steps', desc: 'From submission to activation, each routed through different departments manually.' },
              { icon: Users, title: '8+ stakeholder roles', desc: 'CEO, DLD Reviewer, Inspector, Finance — each with unique permissions and views.' },
              { icon: Globe2, title: '3 cross-gov integrations', desc: 'UAE PASS, DET, and DHA all needed in the flow — but nothing was connected.' },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="bg-white rounded-2xl border border-slate-200/60 p-8 hover:shadow-lg hover:shadow-slate-100/50 transition-shadow duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-[#4169E1]/[0.08] flex items-center justify-center mb-5">
                  <item.icon size={20} className="text-[#4169E1]" />
                </div>
                <h3 className="font-display text-[18px] font-semibold text-[#1A1D23] mb-2">{item.title}</h3>
                <p className="text-[15px] text-[#6B7280] leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════
          ALL SCREENS OVERVIEW
      ══════════════════════════════════════════════ */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFF] via-[#EEF2FF] to-[#F8FAFF] pointer-events-none" />
        <div className="relative max-w-[1440px] mx-auto px-6 lg:px-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={staggerContainer}
            className="text-center mb-10"
          >
            <SectionLabel>The Scale</SectionLabel>
            <SectionHeading>200+ screens across 3 scenarios and 8 roles</SectionHeading>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="rounded-2xl overflow-hidden border border-slate-200/60 shadow-xl shadow-slate-200/30"
          >
            <img
              src={`${IMG_BASE}/all-screens-overview.png`}
              alt="Overview of all 200+ screens designed for the Service Provider platform"
              className="w-full h-auto"
              loading="lazy"
            />
          </motion.div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════
          MY APPROACH
      ══════════════════════════════════════════════ */}
      <section className="relative py-24 md:py-32">
        <div className="max-w-[1120px] mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={staggerContainer}
            className="max-w-[640px] mb-16"
          >
            <SectionLabel>My Approach</SectionLabel>
            <SectionHeading>Think in systems, design for people</SectionHeading>
            <SectionText className="mt-4">
              Instead of designing screen by screen, I mapped the entire service as a system —
              every role, every handoff, every notification. Then I turned that map into a
              design that feels simple for each user.
            </SectionText>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-6"
          >
            {[
              {
                icon: Workflow,
                title: '4-Perspective Pattern',
                desc: 'Every step shows the User Action → Notification → Dashboard → Backoffice view. Stakeholders see the full picture in one read.',
              },
              {
                icon: Layers,
                title: 'One System, Three Scenarios',
                desc: 'Individual driving institutes, company eye tests, and trusted agents share the same adaptive framework — only approval chains differ.',
              },
              {
                icon: Target,
                title: 'Progressive Disclosure',
                desc: 'Show just enough at each step. No overwhelming forms — users see what matters now and what comes next.',
              },
              {
                icon: Shield,
                title: 'Role-Based Architecture',
                desc: '8 distinct roles with scoped permissions. Every person sees exactly what they need — nothing more.',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="flex gap-5 p-6 rounded-2xl bg-gradient-to-br from-[#F8FAFF] to-white border border-slate-100"
              >
                <div className="w-10 h-10 rounded-xl bg-[#4169E1]/[0.08] flex items-center justify-center shrink-0 mt-0.5">
                  <item.icon size={18} className="text-[#4169E1]" />
                </div>
                <div>
                  <h3 className="font-display text-[17px] font-semibold text-[#1A1D23] mb-1.5">{item.title}</h3>
                  <p className="text-[15px] text-[#6B7280] leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════
          SERVICE BLUEPRINT
      ══════════════════════════════════════════════ */}
      <section className="relative py-24 md:py-32 bg-slate-50 overflow-hidden">
        <div className="w-full mx-auto px-6 lg:px-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <SectionLabel>Complete Journey</SectionLabel>
              <SectionHeading>Service Blueprint</SectionHeading>
              <SectionText className="mx-auto mt-4">
                A map of the full licensing journey — from discovery to activation — showing what
                the applicant does, what they see, what happens internally, and which systems support it.
              </SectionText>
            </motion.div>

            <motion.div variants={fadeInUp} className="overflow-x-auto pb-6 -mx-2">
              <div className="min-w-[1600px] px-2">
                {/* Phase Headers */}
                <div className="grid grid-cols-[200px_1fr] gap-0">
                  <div className="bg-white rounded-tl-2xl p-5 border border-slate-200 font-display font-bold text-[14px] uppercase tracking-wider text-[#1A1D23] flex items-center">
                    Phase →
                  </div>
                  <div className="grid grid-cols-11 gap-[1px]">
                    {[
                      '1. Discovery', '2. Account', '3. Identity', '4. Submission',
                      '5. Confirmation', '6. CEO Review', '7. DLD Review',
                      '8. Inspection', '9. Approval', '10. Contract', '11. Activation'
                    ].map((phase, i) => (
                      <div key={i} className="bg-[#F0F4FF] border border-slate-200/60 p-4 text-center flex items-center justify-center">
                        <span className="text-[12px] font-bold text-[#4169E1] uppercase leading-tight block font-display">{phase}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Dashed line of interaction */}
                <div className="w-full border-t-2 border-dashed border-[#4169E1]/20" />

                {/* Swim Lanes */}
                {([
                  {
                    label: 'Customer Actions',
                    labelBg: 'bg-[#EEF2FF]',
                    labelText: 'text-[#4169E1]',
                    cellStyle: 'bg-white text-[#374151]',
                    data: [
                      'Browses services, checks eligibility & fees',
                      'Selects Individual or Company account',
                      'Authenticates via UAE PASS (biometric + 2FA)',
                      'Uploads docs, pins location, certifies accuracy',
                      'Receives reference number, sees SLA & next steps',
                      'Tracks status via dashboard',
                      'Reviews findings, submits corrections if needed',
                      'Receives inspection scheduling email',
                      'Downloads approval letter, uploads extra docs',
                      'Reviews & signs contract via UAE PASS',
                      'Downloads final contract & E-Certificate'
                    ]
                  },
                  {
                    label: 'Frontstage (UI)',
                    labelBg: 'bg-[#F3F0FF]',
                    labelText: 'text-[#7C3AED]',
                    cellStyle: 'bg-[#FAFAFF] text-[#374151]',
                    data: [
                      'Service page with eligibility checker & fee breakdown',
                      'Account type cards with descriptions & icons',
                      'UAE PASS redirect, info auto-populated',
                      'Multi-step wizard, file upload, map, progress stepper',
                      'Success screen with ref #, "What\'s Next" card',
                      'Dashboard status card: "Under Review"',
                      'Alert banners (red for corrections, green for approvals)',
                      'Dashboard shows scheduled date & location',
                      'Approval status page, doc upload wizard',
                      'Contract signing page with UAE PASS & status table',
                      'Green success banner, E-Certificate download'
                    ]
                  },
                  {
                    label: 'Backstage (Internal)',
                    labelBg: 'bg-[#ECFDF5]',
                    labelText: 'text-[#059669]',
                    cellStyle: 'bg-[#F9FEFB] text-[#374151]',
                    data: [
                      'Content management, service catalog config',
                      'Route to verification flow based on selection',
                      'IDP integration, Emirates ID validation, profile fetch',
                      'Document storage, geolocation validation, ref # generated',
                      'Email trigger, application queued for CEO routing',
                      'CEO reviews in slide-over, routes to DLD Reviewer',
                      'DLD examines docs & tracker. Approve / Return / Reject',
                      'Inspector schedules per-branch visits, marks complete',
                      'DLD issues preliminary approval, reviews docs',
                      'Section Mgr signs → Director countersigns → final copy',
                      'DLD final approval, Finance link validation in LSD'
                    ]
                  },
                  {
                    label: 'Support Systems',
                    labelBg: 'bg-[#FFF7ED]',
                    labelText: 'text-[#D97706]',
                    cellStyle: 'bg-[#FFFCF8] text-[#374151]',
                    data: [
                      '—',
                      '—',
                      'UAE PASS National Identity Platform',
                      '—',
                      'Email notification system (EN/AR)',
                      'Internal notification system',
                      'LSD (Licensing Services)',
                      'Inspection scheduling system',
                      'DET (Economy & Tourism)',
                      'UAE PASS e-signature, RMS, Finance',
                      'DHA (Dubai Health Authority)'
                    ]
                  }
                ] as const).map((lane, laneIdx) => (
                  <React.Fragment key={laneIdx}>
                    {/* Dashed separator between lanes */}
                    {laneIdx > 0 && (
                      <div className="w-full border-t-2 border-dashed border-slate-200" />
                    )}
                    <div className="grid grid-cols-[200px_1fr] gap-0">
                      <div className={`${lane.labelBg} p-5 font-display font-bold text-[13px] uppercase tracking-wider flex items-center ${lane.labelText} ${laneIdx === 3 ? 'rounded-bl-2xl' : ''} border-l border-b border-slate-200/60`}>
                        {lane.label}
                      </div>
                      <div className="grid grid-cols-11 gap-[1px]">
                        {lane.data.map((cell, i) => (
                          <div key={i} className={`${lane.cellStyle} p-4 text-[13px] leading-[1.5] font-medium min-h-[100px] flex items-center border-b border-r border-slate-100`}>
                            {cell}
                          </div>
                        ))}
                      </div>
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </motion.div>

            <motion.p variants={fadeInUp} className="text-[13px] text-slate-400 text-center mt-4 lg:hidden">
              ← Scroll horizontally to see all phases →
            </motion.p>
          </motion.div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════
          STORY: TRACKING THE APPLICATION
      ══════════════════════════════════════════════ */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Background accent */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#F8FAFF] via-white to-[#F8FAFF]" />
          <div className="absolute top-[20%] right-[-100px] w-[350px] h-[350px] rounded-full bg-gradient-to-bl from-[#4169E1]/[0.04] to-transparent" />
        </div>

        <div className="relative max-w-[1120px] mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={staggerContainer}
            className="max-w-[640px] mb-12"
          >
            <SectionLabel>Backoffice Experience</SectionLabel>
            <SectionHeading>Every application, fully visible</SectionHeading>
            <SectionText className="mt-4">
              The backoffice team needed to track applications across 11 steps — who's reviewing,
              what's pending, where things are stuck. I designed a tracker that gives instant clarity
              at every stage.
            </SectionText>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8"
          >
            <ImageFrame
              src={`${IMG_BASE}/backoffice-tracker.png`}
              alt="Backoffice application tracker"
              caption="The tracker view — every step, every status, every assignee visible at a glance."
            />
            <ImageFrame
              src={`${IMG_BASE}/application-details.png`}
              alt="Application details modal"
              caption="Full application details — reviewers see everything they need without switching screens."
            />
          </motion.div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════
          STORY: GUIDING DEVELOPERS
      ══════════════════════════════════════════════ */}
      <section className="relative py-24 md:py-32">
        <div className="max-w-[1120px] mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <SectionLabel>Design for Developers</SectionLabel>
              <SectionHeading className="mb-4">Screens that explain the flow</SectionHeading>
              <SectionText>
                With 3 different scenarios and 8 roles, developers needed more than wireframes.
                I created dedicated flow-guide screens embedded in the design — explaining which
                role triggers what, and how the branching works.
              </SectionText>
              <motion.div variants={fadeInUp} className="mt-6 flex items-center gap-3">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#059669]/[0.08] text-[#059669] text-[13px] font-medium">
                  <CheckCircle2 size={14} />
                  Reduced dev questions by 60%
                </div>
              </motion.div>
            </div>
            <ImageFrame
              src={`${IMG_BASE}/developer-flow-guide.png`}
              alt="Developer flow guide screen"
              caption="A mid-flow screen explaining scenario branching and role responsibilities to the dev team."
            />
          </motion.div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════
          STORY: UX WRITING
      ══════════════════════════════════════════════ */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-[#FAFAFF] to-white" />
          <div className="absolute bottom-[10%] left-[-120px] w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-[#7C3AED]/[0.04] to-transparent" />
        </div>

        <div className="relative max-w-[1120px] mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <SectionLabel>UX Writing</SectionLabel>
            <SectionHeading>Words that reduce support calls</SectionHeading>
            <SectionText className="mx-auto mt-4">
              Government platforms are full of jargon and dead-end messages. I wrote every confirmation,
              error, and status update to answer one question: "What do I do next?"
            </SectionText>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-6 mb-12"
          >
            {[
              {
                icon: CheckCircle2,
                title: 'Clear confirmations',
                desc: 'Every success screen tells users exactly what happens next and when.',
                color: '#059669',
              },
              {
                icon: PenTool,
                title: 'Actionable errors',
                desc: '"Action Required" — not "Error 403." Users know what to fix, not just what broke.',
                color: '#DC2626',
              },
              {
                icon: Lightbulb,
                title: 'Status guidance',
                desc: '"Under Review — expect a response within 20 working days." No ambiguity.',
                color: '#D97706',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="bg-white rounded-2xl border border-slate-200/60 p-7"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${item.color}10` }}
                >
                  <item.icon size={18} style={{ color: item.color }} />
                </div>
                <h3 className="font-display text-[16px] font-semibold text-[#1A1D23] mb-1.5">{item.title}</h3>
                <p className="text-[14px] text-[#6B7280] leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={staggerContainer}
            className="max-w-[720px] mx-auto"
          >
            <ImageFrame
              src={`${IMG_BASE}/ux-writing-confirmation.png`}
              alt="UX writing — deposit verification dialog"
              caption="Deposit verification dialog — clear action text so the backoffice team knows exactly what to confirm."
            />
          </motion.div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════
          STORY: INSPECTION + COMPLETION
      ══════════════════════════════════════════════ */}
      <section className="relative py-24 md:py-32">
        <div className="max-w-[1120px] mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <SectionLabel>End-to-End Flow</SectionLabel>
            <SectionHeading>From inspection to celebration</SectionHeading>
            <SectionText className="mx-auto mt-4">
              The final stages — site inspection scheduling, email notifications, and the
              contract-signed success screen — were designed to keep momentum and end on a high note.
            </SectionText>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8"
          >
            <ImageFrame
              src={`${IMG_BASE}/site-inspection-email.png`}
              alt="Site inspection completed with email notification"
              caption="Inspection complete — the applicant gets an email notification with next steps."
            />
            <ImageFrame
              src={`${IMG_BASE}/contract-signed-success.png`}
              alt="Contract signed success screen"
              caption="The finish line — contract signed, certificate ready. A moment worth celebrating."
            />
          </motion.div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════
          KEY DECISIONS
      ══════════════════════════════════════════════ */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFF] to-white" />
          <div className="absolute top-[30%] right-[-80px] w-[300px] h-[300px] rounded-full bg-gradient-to-bl from-[#4169E1]/[0.05] to-transparent" />
        </div>

        <div className="relative max-w-[1120px] mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <SectionLabel>Key Decisions</SectionLabel>
            <SectionHeading>The trade-offs that shaped the product</SectionHeading>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={staggerContainer}
            className="space-y-6 max-w-[800px] mx-auto"
          >
            {[
              {
                title: 'One adaptive system vs. three separate apps',
                desc: 'Three scenarios (individual, company, trusted agent) share one design framework. Only the approval chain and payment flows branch. This cut design complexity by ~40%.',
              },
              {
                title: '4-perspective storyboard pattern',
                desc: 'Every step shows User Action → Notification → Dashboard → Backoffice simultaneously. Stakeholder alignment dropped from 3 review cycles to 1.',
              },
              {
                title: 'Per-branch inspection architecture',
                desc: 'Companies with multiple branches need separate inspections per location. I designed branch-level tracking so one rejection does not block the entire application.',
              },
              {
                title: 'Progressive contract signing',
                desc: 'Three-party signing (applicant → section manager → director) with clear status at each step. Users always know where they are in the chain.',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="flex gap-5 p-6 rounded-2xl bg-white border border-slate-200/60 hover:shadow-md hover:shadow-slate-100/50 transition-shadow duration-300"
              >
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#4169E1] to-[#7C3AED] flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-white text-[14px] font-bold">{i + 1}</span>
                </div>
                <div>
                  <h3 className="font-display text-[17px] font-semibold text-[#1A1D23] mb-1.5">{item.title}</h3>
                  <p className="text-[15px] text-[#6B7280] leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════
          OUTCOMES
      ══════════════════════════════════════════════ */}
      <section className="relative py-24 md:py-32">
        <div className="max-w-[1120px] mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <SectionLabel>Outcomes</SectionLabel>
            <SectionHeading>From paper maze to digital clarity</SectionHeading>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              { value: '200+', label: 'Screens designed', sub: 'Across 3 scenarios, 8 roles, and bilingual support' },
              { value: '40%', label: 'Less design complexity', sub: 'One adaptive system instead of three separate apps' },
              { value: '1', label: 'Review cycle to align', sub: 'Down from 3, thanks to the 4-perspective pattern' },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="text-center p-8 rounded-2xl bg-gradient-to-br from-[#F8FAFF] to-white border border-slate-100"
              >
                <div className="font-display text-[48px] font-bold bg-gradient-to-r from-[#4169E1] to-[#7C3AED] bg-clip-text text-transparent mb-2">
                  {item.value}
                </div>
                <div className="text-[16px] font-semibold text-[#1A1D23] mb-1">{item.label}</div>
                <div className="text-[14px] text-[#6B7280]">{item.sub}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════
          REFLECTION
      ══════════════════════════════════════════════ */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-white to-[#F8FAFF]" />
          <div className="absolute bottom-[-100px] left-[10%] w-[400px] h-[400px] rounded-full bg-gradient-to-t from-[#4169E1]/[0.04] to-transparent" />
        </div>

        <div className="relative max-w-[720px] mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={staggerContainer}
          >
            <SectionLabel>Reflection</SectionLabel>
            <SectionHeading className="mb-6">What I learned</SectionHeading>
            <SectionText className="mx-auto">
              This project taught me that government services aren't complex because of the rules —
              they're complex because nobody maps the full system. Once you see every role, every
              handoff, and every edge case in one view, the design simplifies itself.
            </SectionText>
            <motion.p variants={fadeInUp} className="text-[16px] md:text-[18px] text-[#6B7280] leading-[1.7] max-w-[640px] mx-auto mt-4">
              The biggest win wasn't any single screen — it was the 4-perspective pattern that let
              8 stakeholders align in a single review. That's the power of systems thinking in design.
            </motion.p>
          </motion.div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════
          FOOTER NAV
      ══════════════════════════════════════════════ */}
      <section className="py-16 border-t border-slate-100">
        <div className="max-w-[1120px] mx-auto px-6 text-center">
          <motion.a
            href="/"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-[15px] font-medium text-[#4169E1] hover:text-[#3457c9] transition-colors"
          >
            <ArrowRight size={16} className="rotate-180" />
            Back to all projects
          </motion.a>
        </div>
      </section>

    </div>
  );
};

export default ServiceProviderCaseStudy;
