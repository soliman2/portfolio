import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Download, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <section id="contact" className="py-4 md:py-10 bg-slate-900 text-white overflow-hidden relative">
      {/* Subtle Background Glow - Standard, not experimental orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[50%] -left-[20%] w-[80%] h-[80%] rounded-full bg-blue-600/10 blur-3xl opacity-50"></div>
        <div className="absolute -bottom-[50%] -right-[20%] w-[80%] h-[80%] rounded-full bg-indigo-600/10 blur-3xl opacity-50"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-5 md:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center space-x-2 bg-slate-800 border border-slate-700 rounded-full px-4 py-1.5 mb-8 shadow-sm"
        >
          <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
          <span className="text-sm font-medium text-slate-200">Available for opportunities</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-[28px] md:text-5xl font-bold font-display mb-4 md:mb-6 tracking-tight text-white"
        >
          Let's Build Something <br />
          <span className="text-blue-400">Innovative Together</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-base md:text-xl text-slate-300 mb-10 md:mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Currently available for Senior/Principal Product Designer roles. Specializing in design systems, data visualization, AI-powered products, and government digital transformation.
        </motion.p>

        {/* Quick Contact Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10"
        >
          <a href="https://wa.me/971502768308" target="_blank" rel="noreferrer" className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-4 md:p-6 hover:bg-white/10 transition-all group backdrop-blur-sm">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500 group-hover:scale-110 transition-transform">
              <Phone className="w-6 h-6" />
            </div>
            <div className="text-left">
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-none mb-1">WhatsApp Me</p>
              <p className="text-sm md:text-base font-bold text-white">+971 50 276 8308</p>
            </div>
          </a>
          <a href="mailto:soliman.shaban7@gmail.com" className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-4 md:p-6 hover:bg-white/10 transition-all group backdrop-blur-sm">
            <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform">
              <Mail className="w-6 h-6" />
            </div>
            <div className="text-left">
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-none mb-1">Email Me</p>
              <p className="text-sm md:text-base font-bold text-white">soliman.shaban7@gmail.com</p>
            </div>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <a href="mailto:soliman.shaban7@gmail.com" className="w-full md:w-auto inline-flex justify-center items-center px-8 py-4 bg-[#4169E1] hover:bg-blue-600 text-white rounded-full font-bold font-display transition-all shadow-lg shadow-blue-900/50 hover:-translate-y-0.5">
            <Mail className="mr-2 h-5 w-5" />
            Send Email
          </a>
          <div className="flex gap-4 w-full md:w-auto justify-center">
            <a href="https://www.linkedin.com/in/solimanshaban/" target="_blank" rel="noreferrer" className="flex-1 md:flex-none inline-flex justify-center items-center px-8 py-4 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white rounded-full font-semibold font-display transition-all">
              <Linkedin className="mr-2 h-5 w-5 text-slate-400" />
              LinkedIn
            </a>
            <a
              href="/soliman-shaban-cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 md:flex-none inline-flex justify-center items-center px-8 py-4 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white rounded-full font-semibold font-display transition-all"
            >
              <Download className="mr-2 h-5 w-5 text-slate-400" />
              Resume
            </a>
          </div>
        </motion.div>

        {/* Social Icons Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 flex justify-center gap-4"
        >
          {[
            { icon: <Linkedin className="w-5 h-5" />, url: "https://www.linkedin.com/in/solimanshaban/", label: "LinkedIn" },
            { icon: <span className="font-bold text-sm">Bē</span>, url: "https://www.behance.net/solimanshaban", label: "Behance" },
            { icon: <Phone className="w-5 h-5" />, url: "https://wa.me/971502768308", label: "WhatsApp" }
          ].map((social, i) => (
            <a
              key={i}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:bg-white/10 hover:text-white transition-all shadow-sm"
              aria-label={social.label}
            >
              {social.icon}
            </a>
          ))}
        </motion.div>

        <div className="mt-16 flex flex-col md:flex-row justify-center items-center gap-6 text-slate-500 text-sm font-medium">
          <div className="flex items-center hover:text-white transition-colors">
            <Phone className="w-4 h-4 mr-2" />
            +971 50 276 8308
          </div>
          <div className="hidden md:block w-1.5 h-1.5 bg-slate-800 rounded-full"></div>
          <div className="flex items-center hover:text-white transition-colors">
            <MapPin className="w-4 h-4 mr-2" />
            Dubai, UAE | Open to relocation
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 text-center">
          <p className="text-slate-600 text-[11px] font-medium uppercase tracking-widest">© {new Date().getFullYear()} Soliman Shaban • Product Designer</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;