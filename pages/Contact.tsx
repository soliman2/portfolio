import React from 'react';
import { motion } from 'framer-motion';
import {
    Mail,
    MessageSquare,
    Phone,
    Linkedin,
    MapPin,
    Clock,
    Globe,
    ArrowRight,
    Github,
    ExternalLink
} from 'lucide-react';

const Contact: React.FC = () => {
    const fadeUp = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <div className="min-h-screen bg-white font-inter">
            {/* SECTION 1: HERO — SPLIT LAYOUT */}
            <section className="pt-32 pb-16 md:pt-48 md:pb-24 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 sm:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-24 items-center">

                        {/* Left Column: Text Content */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            className="flex flex-col items-start"
                        >
                            {/* Availability Sticker */}
                            <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-50 rounded-full border border-emerald-100 mb-8 active:scale-95 transition-transform cursor-default">
                                <div className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse"></div>
                                <span className="text-[12px] font-bold text-[#10B981] tracking-wide uppercase">Available for opportunities</span>
                            </div>

                            <h1 className="text-[40px] md:text-[56px] font-bold text-[#1A1D23] leading-tight mb-6 font-display">
                                Let's Talk
                            </h1>
                            <p className="text-[18px] md:text-[20px] text-[#6B7280] font-medium leading-relaxed max-w-[480px] mb-6">
                                Open to new opportunities, collaborations, and interesting design challenges.
                            </p>
                            <p className="text-[16px] text-[#6B7280] leading-relaxed max-w-[500px]">
                                I'm currently based in Dubai, UAE and available for full-time roles, consulting, and freelance projects. Whether you need a product designer, design system specialist, or UX research lead — I'd love to hear about what you're building.
                            </p>
                        </motion.div>

                        {/* Right Column: Profile Photo */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            className="relative"
                        >
                            {/* Gradient Background behind photo */}
                            <div className="absolute -inset-4 bg-gradient-to-br from-[#4169E1]/10 to-transparent blur-2xl rounded-[40px] -z-10"></div>

                            <div className="flex flex-col items-center">
                                <div className="relative w-full aspect-[4/5] rounded-[24px] overflow-hidden border-2 border-[#4169E1]/10 shadow-xl bg-slate-100">
                                    <img
                                        src="/images/soliman-portrait-new.png"
                                        alt="Soliman Shaban"
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.style.display = 'none';
                                            target.parentElement!.classList.add('flex', 'items-center', 'justify-center', 'p-12', 'text-center');
                                            target.parentElement!.innerHTML = '<span class="text-slate-400 font-medium leading-relaxed">Add your professional headshot photo here</span>';
                                        }}
                                    />
                                </div>
                                <div className="mt-6 text-center">
                                    <h3 className="text-[18px] font-bold text-[#1A1D23]">Soliman Shaban</h3>
                                    <p className="text-[14px] text-[#6B7280] font-medium mt-1">Senior Product Designer · Dubai, UAE</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* SECTION 2: QUICK CONTACT CARDS */}
            <section className="py-20 md:py-32 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6 sm:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Card 1: Email */}
                        <motion.a
                            href="mailto:soliman.shaban7@gmail.com"
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="group bg-white p-6 rounded-[16px] border border-[#E5E7EB] shadow-sm hover:shadow-xl hover:border-[#4169E1] transition-all duration-300 transform hover:-translate-y-1"
                        >
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-blue-50 rounded-xl group-hover:bg-[#4169E1] transition-colors">
                                    <Mail className="w-6 h-6 text-[#4169E1] group-hover:text-white" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[12px] font-bold text-[#6B7280] uppercase tracking-wider mb-1">Email Me</span>
                                    <span className="text-[16px] font-bold text-[#1A1D23] break-all">soliman.shaban7@gmail.com</span>
                                </div>
                            </div>
                        </motion.a>

                        {/* Card 2: WhatsApp */}
                        <motion.a
                            href="https://wa.me/971502768308"
                            target="_blank"
                            rel="noopener noreferrer"
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="group bg-white p-6 rounded-[16px] border border-[#E5E7EB] shadow-sm hover:shadow-xl hover:border-[#25D366] transition-all duration-300 transform hover:-translate-y-1"
                        >
                            <div className="flex flex-col">
                                <div className="flex items-center gap-4 mb-3">
                                    <div className="p-3 bg-emerald-50 rounded-xl group-hover:bg-[#25D366] transition-colors">
                                        <MessageSquare className="w-6 h-6 text-[#25D366] group-hover:text-white" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[12px] font-bold text-[#6B7280] uppercase tracking-wider mb-1">WhatsApp</span>
                                        <span className="text-[16px] font-bold text-[#1A1D23]">+971 50 276 8308</span>
                                    </div>
                                </div>
                                <span className="text-[12px] text-[#6B7280] font-medium pl-[52px]">Quick response · usually within a few hours</span>
                            </div>
                        </motion.a>

                        {/* Card 3: Phone */}
                        <motion.a
                            href="tel:+971502768308"
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="group bg-white p-6 rounded-[16px] border border-[#E5E7EB] shadow-sm hover:shadow-xl hover:border-[#4169E1] transition-all duration-300 transform hover:-translate-y-1"
                        >
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-blue-50 rounded-xl group-hover:bg-[#4169E1] transition-colors">
                                    <Phone className="w-6 h-6 text-[#4169E1] group-hover:text-white" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[12px] font-bold text-[#6B7280] uppercase tracking-wider mb-1">Call Me</span>
                                    <span className="text-[16px] font-bold text-[#1A1D23]">+971 50 276 8308</span>
                                </div>
                            </div>
                        </motion.a>

                        {/* Card 4: LinkedIn */}
                        <motion.a
                            href="https://linkedin.com/in/solimanshaban"
                            target="_blank"
                            rel="noopener noreferrer"
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="group bg-white p-6 rounded-[16px] border border-[#E5E7EB] shadow-sm hover:shadow-xl hover:border-[#0A66C2] transition-all duration-300 transform hover:-translate-y-1"
                        >
                            <div className="flex flex-col">
                                <div className="flex items-center gap-4 mb-3">
                                    <div className="p-3 bg-blue-50 rounded-xl group-hover:bg-[#0A66C2] transition-colors">
                                        <Linkedin className="w-6 h-6 text-[#0A66C2] group-hover:text-white" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[12px] font-bold text-[#6B7280] uppercase tracking-wider mb-1">LinkedIn</span>
                                        <span className="text-[16px] font-bold text-[#1A1D23]">Connect with me</span>
                                    </div>
                                </div>
                                <span className="text-[12px] text-[#6B7280] font-medium pl-[52px]">17,000+ connections · Active</span>
                            </div>
                        </motion.a>
                    </div>
                </div>
            </section>

            {/* SECTION 3: CONTACT FORM */}
            <section className="py-20 md:py-32 bg-white">
                <div className="max-w-7xl mx-auto px-6 sm:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-[0.4fr_0.6fr] gap-12 lg:gap-24">
                        {/* Info Column */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                        >
                            <h2 className="text-[32px] font-bold text-[#1A1D23] mb-6 font-display leading-tight">Send a Message</h2>
                            <p className="text-[16px] text-[#6B7280] leading-relaxed mb-10">
                                Have a role, project, or collaboration in mind? Drop me a message and I'll get back to you within 24 hours.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100">
                                        <MapPin className="w-5 h-5 text-slate-400" />
                                    </div>
                                    <span className="text-[16px] text-[#6B7280]">Based in Dubai, UAE (GMT+4)</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100">
                                        <Clock className="w-5 h-5 text-slate-400" />
                                    </div>
                                    <span className="text-[16px] text-[#6B7280]">Response time: within 24 hours</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100">
                                        <Globe className="w-5 h-5 text-slate-400" />
                                    </div>
                                    <span className="text-[16px] text-[#6B7280]">Open to remote and hybrid roles</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Form Column */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            className="bg-white"
                        >
                            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <input
                                            type="text"
                                            placeholder="Your name"
                                            className="w-full h-[56px] px-6 rounded-[16px] border border-[#E5E7EB] bg-slate-50/50 text-[16px] focus:outline-none focus:border-[#4169E1] focus:ring-4 focus:ring-[#4169E1]/5 transition-all outline-none"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <input
                                            type="email"
                                            placeholder="your@email.com"
                                            className="w-full h-[56px] px-6 rounded-[16px] border border-[#E5E7EB] bg-slate-50/50 text-[16px] focus:outline-none focus:border-[#4169E1] focus:ring-4 focus:ring-[#4169E1]/5 transition-all outline-none"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <select
                                        className="w-full h-[56px] px-6 rounded-[16px] border border-[#E5E7EB] bg-slate-50/50 text-[16px] text-[#6B7280] focus:outline-none focus:border-[#4169E1] focus:ring-4 focus:ring-[#4169E1]/5 transition-all appearance-none outline-none"
                                    >
                                        <option value="" disabled selected>Select a subject</option>
                                        <option value="Job Opportunity">Job Opportunity</option>
                                        <option value="Freelance Project">Freelance Project</option>
                                        <option value="Collaboration">Collaboration</option>
                                        <option value="Speaking / Workshop">Speaking / Workshop</option>
                                        <option value="Just Saying Hello">Just Saying Hello</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <textarea
                                        placeholder="Tell me about what you're working on..."
                                        rows={5}
                                        className="w-full p-6 rounded-[16px] border border-[#E5E7EB] bg-slate-50/50 text-[16px] focus:outline-none focus:border-[#4169E1] focus:ring-4 focus:ring-[#4169E1]/5 transition-all resize-none outline-none"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full md:w-auto px-10 py-4 bg-[#4169E1] text-white rounded-[16px] font-bold text-[16px] flex items-center justify-center gap-3 transition-all hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-600/20 active:scale-95 group"
                                >
                                    Send Message
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* SECTION 4: OTHER WAYS TO CONNECT */}
            <section className="py-20 md:py-24 bg-white border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                    >
                        <h2 className="text-[24px] font-bold text-[#1A1D23] mb-12 font-display">Find Me Elsewhere</h2>
                        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
                            {[
                                { icon: Linkedin, url: "https://linkedin.com/in/solimanshaban", label: "LinkedIn" },
                                { icon: Github, url: "https://github.com", label: "GitHub" }, // Placeholder as GitHub was used earlier but not specifically requested here, Behance was optional
                                { icon: Mail, url: "mailto:soliman.shaban7@gmail.com", label: "Email" },
                                { icon: MessageSquare, url: "https://wa.me/971502768308", label: "WhatsApp" }
                            ].map((social, i) => (
                                <a
                                    key={i}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative flex flex-col items-center gap-3"
                                    aria-label={social.label}
                                >
                                    <div className="w-14 h-14 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100 group-hover:bg-[#4169E1]/5 group-hover:border-[#4169E1]/20 transition-all duration-300">
                                        <social.icon className="w-6 h-6 text-slate-400 group-hover:text-[#4169E1] transition-colors" />
                                    </div>
                                    <span className="text-[12px] font-bold text-slate-400 uppercase tracking-widest hidden md:block">{social.label}</span>
                                </a>
                            ))}
                        </div>
                        <div className="mt-16">
                            <a href="/" className="text-[14px] font-bold text-[#4169E1] hover:underline flex items-center justify-center gap-2 group">
                                <span className="text-slate-900 font-medium">Want to see my projects?</span> View Work <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* SECTION 5: AVAILABILITY BANNER */}
            <section className="relative py-20 bg-white group overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="relative w-full overflow-hidden bg-gradient-to-br from-[#1e40af] via-[#4169E1] to-[#7c3aed] rounded-[32px] p-12 md:p-20 text-center shadow-2xl shadow-blue-900/40"
                    >
                        {/* Decorative Background Patterns */}
                        <div className="absolute inset-0 opacity-10 pointer-events-none"
                            style={{
                                backgroundImage: 'radial-gradient(circle at 1.5px 1.5px, white 1.5px, transparent 0)',
                                backgroundSize: '40px 40px'
                            }}
                        ></div>
                        <div className="absolute -right-20 -top-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
                        <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>

                        <div className="relative z-10 flex flex-col items-center max-w-3xl mx-auto">
                            <h2 className="text-[32px] md:text-[48px] font-bold text-white mb-6 font-display leading-tight">
                                Currently Available for New Roles
                            </h2>
                            <p className="text-[16px] md:text-[18px] text-white/80 font-medium tracking-wide mb-12">
                                Senior Product Designer · Design Systems · Data Visualization · AI · Service Design
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                                <a
                                    href="/soliman-shaban-cv.pdf"
                                    target="_blank"
                                    className="w-full sm:w-auto px-10 py-4 bg-white text-[#4169E1] rounded-[14px] font-bold text-[16px] transition-all hover:bg-[#F8F9FA] hover:shadow-xl hover:scale-[1.02] active:scale-95 text-center"
                                >
                                    Download Resume
                                </a>
                                <a
                                    href="https://wa.me/971502768308"
                                    target="_blank"
                                    className="w-full sm:w-auto px-10 py-4 bg-transparent border-2 border-white/40 text-white rounded-[14px] font-bold text-[16px] transition-all hover:bg-white/10 hover:border-white/60 active:scale-95 text-center"
                                >
                                    WhatsApp Me
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
