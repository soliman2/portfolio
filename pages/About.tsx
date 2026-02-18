import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Award, Code, Globe, User, BookOpen } from 'lucide-react';

const About: React.FC = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const staggeringContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-white font-inter">
      {/* PAGE HEADER */}
      <section className="bg-slate-50 pt-32 pb-16 md:pt-40 md:pb-24 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-display">About Me</h1>
            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-3xl">
              Senior Product Designer specializing in design systems, AI-powered experiences, and 360° government services — with 8+ years delivering digital products for 12M+ users across the Middle East.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 1: BIOGRAPHY */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="space-y-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <User className="w-6 h-6 text-[#4169E1]" />
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight uppercase text-[14px]">Biography</h2>
            </div>

            <p className="text-[18px] md:text-[20px] text-slate-800 leading-relaxed font-medium">
              I'm Soliman Shaban, a Senior Product Designer based in Dubai, UAE. I specialize in translating complex, multi-stakeholder challenges into clear, tested, and consistent digital experiences — backed by robust design systems, UX research, and AI-powered tools.
            </p>

            <div className="space-y-6 text-[16px] text-slate-600 leading-relaxed">
              <p>
                With 8+ years of experience across Dubai's government sector, fintech, and enterprise platforms, I've designed products and services used by over 12 million people. My work sits at the intersection of design systems, service design, and UX research — which means I don't just design screens, I design the systems and processes behind them.
              </p>
              <p>
                At RTA Dubai, I lead design for the Portal, S'hail mobility app, executive dashboards, and AI-powered tools — including the AI Urban Design Tool I designed and presented live at GITEX Dubai 2025, which reduced urban planning visualization from 5 days to 8 hours. I was officially recognized by RTA's AI & Data Science Center Director for outstanding UX contributions across 4 AI-powered products.
              </p>
              <p>
                Before RTA, I built design systems and redesigned payment experiences at Fawry (Egypt's largest fintech), designed ATM interfaces for Boubyan Bank, and mapped end-to-end customer journeys at Dubai Municipality aligned with Zero Bureaucracy objectives. I also teach UI/UX and design systems to 500+ designers across the MENA region through Sprints and independent workshops.
              </p>
              <p>
                I'm fluent in Arabic (native) and English, and I design bilingual RTL/LTR experiences as a core part of my practice — not an afterthought.
              </p>
            </div>
          </motion.div>
        </div>
        {/* Horizontal Divider */}
        <div className="max-w-4xl mx-auto px-6 mt-20">
          <div className="h-px bg-[#E5E7EB] w-full"></div>
        </div>
      </section>

      {/* SECTION 2: EXPERIENCE */}
      <section className="py-20 md:py-32 bg-[#F8F9FA]">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-10">
              <Briefcase className="w-6 h-6 text-[#4169E1]" />
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight uppercase text-[14px]">Experience</h2>
            </div>

            {/* Timeline */}
            <div className="relative pl-8 space-y-16">
              {/* Vertical Line */}
              <div className="absolute left-0 top-2 bottom-2 w-px bg-[#E5E7EB]"></div>

              {/* Entry 1 */}
              <div className="relative">
                <div className="absolute -left-[36px] top-1.5 w-4 h-4 rounded-full bg-[#4169E1] border-4 border-white shadow-sm"></div>
                <div className="space-y-1 mb-4">
                  <h3 className="text-[18px] font-bold text-slate-900">Roads and Transport Authority (RTA)</h3>
                  <div className="flex flex-wrap items-center gap-x-3 text-sm">
                    <span className="text-[#4169E1] font-semibold">Senior Product Designer · Design System Specialist · UX Research Lead</span>
                    <span className="text-slate-400 hidden sm:inline">•</span>
                    <span className="text-[#6B7280]">Dec 2021 – Present</span>
                    <span className="text-slate-400 hidden sm:inline">•</span>
                    <span className="text-[#6B7280]">Dubai, UAE</span>
                  </div>
                </div>
                <ul className="space-y-3">
                  {[
                    "Designed AI Urban Tool presented at GITEX Dubai 2025 — reducing urban planning workflows from 5 days to 8 hours (93% faster)",
                    "Built and maintained 5+ design systems (Portal, Licensing, S'hail Mobile, DDA Shared Channels) with tokens, variables, variants, and RTL/LTR support",
                    "Designed DG Executive Dashboard for C-level leadership with AI Chat Assistant and AI Insight section for KPI anomalies",
                    "Led 50+ moderated usability sessions and produced storytelling-based executive reports",
                    "Designed 360° government services connecting citizen UI, corporate dashboards, and multi-role back-office platforms"
                  ].map((bullet, i) => (
                    <li key={i} className="text-[16px] text-slate-600 flex items-start gap-3">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0"></span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Entry 2 */}
              <div className="relative">
                <div className="absolute -left-[36px] top-1.5 w-4 h-4 rounded-full bg-[#4169E1] border-4 border-white shadow-sm"></div>
                <div className="space-y-1 mb-4">
                  <h3 className="text-[18px] font-bold text-slate-900">Dubai Municipality</h3>
                  <div className="flex flex-wrap items-center gap-x-3 text-sm">
                    <span className="text-[#4169E1] font-semibold">Customer Experience (CX) Service Designer</span>
                    <span className="text-slate-400 hidden sm:inline">•</span>
                    <span className="text-[#6B7280]">2021</span>
                    <span className="text-slate-400 hidden sm:inline">•</span>
                    <span className="text-[#6B7280]">Dubai, UAE</span>
                  </div>
                </div>
                <ul className="space-y-3">
                  {[
                    "Designed end-to-end customer journeys and service blueprints for municipal services",
                    "Facilitated cross-department stakeholder workshops aligned with Zero Bureaucracy objectives",
                    "Built the service design foundation later applied to RTA 360° services"
                  ].map((bullet, i) => (
                    <li key={i} className="text-[16px] text-slate-600 flex items-start gap-3">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0"></span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Entry 3 */}
              <div className="relative">
                <div className="absolute -left-[36px] top-1.5 w-4 h-4 rounded-full bg-[#4169E1] border-4 border-white shadow-sm"></div>
                <div className="space-y-1 mb-4">
                  <h3 className="text-[18px] font-bold text-slate-900">Fawry Banking & Payment Technology</h3>
                  <div className="flex flex-wrap items-center gap-x-3 text-sm">
                    <span className="text-[#4169E1] font-semibold">Product Designer</span>
                    <span className="text-slate-400 hidden sm:inline">•</span>
                    <span className="text-[#6B7280]">Jan 2021 – Dec 2021</span>
                    <span className="text-slate-400 hidden sm:inline">•</span>
                    <span className="text-[#6B7280]">Cairo, Egypt</span>
                  </div>
                </div>
                <ul className="space-y-3">
                  {[
                    "Built Fawry's Design System for designers and frontend developers",
                    "Redesigned multi-payment checkout flow, reducing bounce rate by 25%",
                    "Redesigned loyalty SaaS dashboard from consultant-dependent to self-service"
                  ].map((bullet, i) => (
                    <li key={i} className="text-[16px] text-slate-600 flex items-start gap-3">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0"></span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Entry 4 */}
              <div className="relative">
                <div className="absolute -left-[36px] top-1.5 w-4 h-4 rounded-full bg-[#4169E1] border-4 border-white shadow-sm"></div>
                <div className="space-y-1 mb-4">
                  <h3 className="text-[18px] font-bold text-slate-900">Simpleia (UX Design Agency)</h3>
                  <div className="flex flex-wrap items-center gap-x-3 text-sm">
                    <span className="text-[#4169E1] font-semibold">UX Designer</span>
                    <span className="text-slate-400 hidden sm:inline">•</span>
                    <span className="text-[#6B7280]">Aug 2020 – Jan 2021</span>
                    <span className="text-slate-400 hidden sm:inline">•</span>
                    <span className="text-[#6B7280]">Cairo, Egypt</span>
                  </div>
                </div>
                <ul className="space-y-3">
                  {[
                    "Redesigned Boubyan Bank ATM interface including multi-currency withdrawals, deposits, and cardless services",
                    "Designed Z-Laundry app from concept to launch with user research and competitor analysis"
                  ].map((bullet, i) => (
                    <li key={i} className="text-[16px] text-slate-600 flex items-start gap-3">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0"></span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Entry 5 */}
              <div className="relative">
                <div className="absolute -left-[36px] top-1.5 w-4 h-4 rounded-full bg-[#4169E1] border-4 border-white shadow-sm"></div>
                <div className="space-y-1 mb-4">
                  <h3 className="text-[18px] font-bold text-slate-900">Intertec Systems</h3>
                  <div className="flex flex-wrap items-center gap-x-3 text-sm">
                    <span className="text-[#4169E1] font-semibold">Product Designer (Freelance)</span>
                    <span className="text-slate-400 hidden sm:inline">•</span>
                    <span className="text-[#6B7280]">Nov 2019 – Jul 2020</span>
                    <span className="text-slate-400 hidden sm:inline">•</span>
                    <span className="text-[#6B7280]">Dubai, UAE</span>
                  </div>
                </div>
                <ul className="space-y-3">
                  {[
                    "Conducted usability audits and heuristic evaluations for enterprise government systems",
                    "Redesigned SAI government portal improving information architecture and navigation"
                  ].map((bullet, i) => (
                    <li key={i} className="text-[16px] text-slate-600 flex items-start gap-3">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0"></span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Entry 6 */}
              <div className="relative">
                <div className="absolute -left-[36px] top-1.5 w-4 h-4 rounded-full bg-[#4169E1] border-4 border-white shadow-sm"></div>
                <div className="space-y-1 mb-4">
                  <h3 className="text-[18px] font-bold text-slate-900">Sprints & Independent</h3>
                  <div className="flex flex-wrap items-center gap-x-3 text-sm">
                    <span className="text-[#4169E1] font-semibold">UI/UX & Design Systems Instructor</span>
                    <span className="text-slate-400 hidden sm:inline">•</span>
                    <span className="text-[#6B7280]">2024 – Present</span>
                    <span className="text-slate-400 hidden sm:inline">•</span>
                    <span className="text-[#6B7280]">Remote</span>
                  </div>
                </div>
                <ul className="space-y-3">
                  {[
                    "Teaching UI fundamentals, Figma workflows, and design systems to 500+ designers across MENA",
                    "Running live design demos, critique sessions, and bootcamp modules"
                  ].map((bullet, i) => (
                    <li key={i} className="text-[16px] text-slate-600 flex items-start gap-3">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0"></span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
        {/* Horizontal Divider */}
        <div className="max-w-4xl mx-auto px-6 mt-20">
          <div className="h-px bg-[#E5E7EB] w-full"></div>
        </div>
      </section>

      {/* SECTION 3: SKILLS & EXPERTISE */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="flex items-center gap-3 mb-10">
              <Code className="w-6 h-6 text-[#4169E1]" />
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight uppercase text-[14px]">Skills & Expertise</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
              {[
                {
                  title: "Design Systems",
                  skills: ["Figma (Variables, Tokens, Variants)", "Component Libraries", "Multi-brand Systems", "RTL/LTR Support", "Design Tokens", "Desktop/Tablet/Mobile", "Documentation"]
                },
                {
                  title: "AI & Innovation",
                  skills: ["0→1 AI Products", "LLM Integration", "Conversational AI/Chatbot Design", "Prompt Engineering", "AI Prototyping (v0, Bolt, Lovable, Relume, Framer AI, Antegraphy, Uizard)"]
                },
                {
                  title: "UX Research",
                  skills: ["Usability Testing", "Moderated Interviews", "Heuristic Evaluations", "UX Audits", "Storytelling Reports", "Co-Creation Workshops"]
                },
                {
                  title: "Service Design & CX",
                  skills: ["Customer Journeys", "Service Blueprints", "360° Services", "Frontstage/Backstage Design", "Multi-role Platforms"]
                },
                {
                  title: "Data Visualization & Dashboards",
                  skills: ["Executive Dashboards", "KPI Visualization", "Interactive Charts", "Data Storytelling", "AI Insight Panels", "Sentiment Analysis"]
                },
                {
                  title: "Government & Enterprise",
                  skills: ["Civic Tech", "Digital Transformation", "Bilingual Arabic/English Interfaces", "Compliance & Regulations", "Multi-stakeholder Alignment"]
                },
                {
                  title: "Tools",
                  skills: ["Figma", "Adobe XD", "Miro", "Framer", "v0", "Bolt", "Lovable", "Relume", "Uizard", "Antegraphy", "HTML5", "CSS3", "JavaScript", "Sass", "Google Analytics", "Hotjar"]
                }
              ].map((category, i) => (
                <div key={i} className="space-y-4">
                  <h3 className="text-[18px] font-bold text-slate-900">{category.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, j) => (
                      <span
                        key={j}
                        className="px-3 py-1.5 bg-[#E8F0FE] text-[#4169E1] text-[12px] font-bold uppercase tracking-wider rounded-[6px]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4: RECOGNITION & CERTIFICATIONS */}
      <section className="py-20 md:py-32 bg-[#F8F9FA]">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="flex items-center gap-3 mb-10">
              <Award className="w-6 h-6 text-[#4169E1]" />
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight uppercase text-[14px]">Recognition & Certifications</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Card 1 - Recognition */}
              <motion.div
                variants={fadeUp}
                className="bg-white p-8 rounded-2xl border border-[#E5E7EB] border-l-4 border-l-[#F59E0B] shadow-sm hover:shadow-md transition-shadow"
              >
                <p className="text-[#6B7280] text-sm mb-2 font-medium">December 2025</p>
                <h3 className="text-[18px] font-bold text-slate-900 mb-3">Official Appreciation — RTA AI & Data Science Center</h3>
                <p className="text-[16px] text-slate-600 leading-relaxed">
                  Recognized by the Director of AI & Data Science Center for outstanding UX contributions across 4 AI-powered dashboards: Urbanist (GITEX 2025), HR Attendance, Panorama, and AI-as-a-Service.
                </p>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                variants={fadeUp}
                className="bg-white p-8 rounded-2xl border border-[#E5E7EB] shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-start mb-2">
                  <p className="text-[#6B7280] text-sm font-medium">September 2025</p>
                  <span className="text-[12px] font-bold text-[#4169E1] bg-blue-50 px-2 py-0.5 rounded uppercase">Meska AI</span>
                </div>
                <h3 className="text-[18px] font-bold text-slate-900 mb-3">AI Copilot Online Diploma</h3>
                <p className="text-[16px] text-slate-600 leading-relaxed">
                  AI fundamentals, generative AI, prompt engineering, building AI agents, and automation workflows.
                </p>
              </motion.div>

              {/* Card 3 */}
              <motion.div
                variants={fadeUp}
                className="bg-white p-8 rounded-2xl border border-[#E5E7EB] shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-start mb-2">
                  <p className="text-[#6B7280] text-sm font-medium">February 2024</p>
                  <span className="text-[12px] font-bold text-[#4169E1] bg-blue-50 px-2 py-0.5 rounded uppercase">Maven</span>
                </div>
                <h3 className="text-[18px] font-bold text-slate-900 mb-3">Design System Bootcamp</h3>
                <p className="text-[16px] text-slate-600 leading-relaxed">
                  Built and documented scalable design systems using advanced Figma features with Molly Hellmuth.
                </p>
              </motion.div>

              {/* Card 4 */}
              <motion.div
                variants={fadeUp}
                className="bg-white p-8 rounded-2xl border border-[#E5E7EB] shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-start mb-2">
                  <p className="text-[#6B7280] text-sm font-medium">2022</p>
                  <span className="text-[12px] font-bold text-[#4169E1] bg-blue-50 px-2 py-0.5 rounded uppercase">Udacity</span>
                </div>
                <h3 className="text-[18px] font-bold text-slate-900 mb-3">UX Research Cross-Skilling Nanodegree</h3>
                <p className="text-[16px] text-slate-600 leading-relaxed">
                  Usability testing, user interviews, research planning, and translating findings into actionable design decisions.
                </p>
              </motion.div>

              {/* Card 5 */}
              <motion.div
                variants={fadeUp}
                className="bg-white p-8 rounded-2xl border border-[#E5E7EB] shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-start mb-2">
                  <p className="text-[#6B7280] text-sm font-medium">2022</p>
                  <span className="text-[12px] font-bold text-[#4169E1] bg-blue-50 px-2 py-0.5 rounded uppercase">ADPList</span>
                </div>
                <h3 className="text-[18px] font-bold text-slate-900 mb-3">Design Mentorship Mastery</h3>
                <p className="text-[16px] text-slate-600 leading-relaxed">
                  Mastery in guiding and mentoring designers, focused on portfolio reviews and career growth.
                </p>
              </motion.div>
            </div>

            {/* SECTION 5: LANGUAGES */}
            <div className="mt-20 pt-10 border-t border-slate-200">
              <div className="flex items-center gap-3 mb-6">
                <Globe className="w-5 h-5 text-[#4169E1]" />
                <h3 className="text-[14px] font-bold text-slate-900 tracking-tight uppercase">Languages</h3>
              </div>
              <div className="flex items-center gap-8">
                <div className="flex items-center gap-2">
                  <span className="text-xl">🇪🇬</span>
                  <span className="text-[16px] text-slate-700 font-medium">Arabic — Native</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xl">🇬🇧</span>
                  <span className="text-[16px] text-slate-700 font-medium">English — Fluent</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
