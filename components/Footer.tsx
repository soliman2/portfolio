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
          className="text-base md:text-xl text-slate-400 mb-6 md:mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Currently open to Principal/Staff Designer opportunities at Big Tech and Saudi Government digital transformation initiatives.
        </motion.p>

        {/* Recognition Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="hidden md:inline-block mb-12 bg-amber-900/20 border border-amber-500/20 px-4 py-2 rounded-lg"
        >
          <p className="text-amber-400 text-sm font-semibold flex items-center gap-2">
            <span>🏆</span> RTA AI & Data Science Center Recognition
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <a href="mailto:hello@solimanshaban.com" className="w-full md:w-auto inline-flex justify-center items-center px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-bold font-display transition-all shadow-lg shadow-blue-900/50 hover:-translate-y-0.5">
            <Mail className="mr-2 h-5 w-5" />
            Email Me
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

        <div className="mt-16 flex flex-col md:flex-row justify-center items-center gap-6 text-slate-400 text-sm font-medium">
          <div className="flex items-center hover:text-white transition-colors">
            <Phone className="w-4 h-4 mr-2" />
            +971 50 276 8308
          </div>
          <div className="hidden md:block w-1.5 h-1.5 bg-slate-700 rounded-full"></div>
          <div className="flex items-center hover:text-white transition-colors">
            <MapPin className="w-4 h-4 mr-2" />
            Dubai, UAE | Open to relocation
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 text-center">
          <p className="text-slate-500 text-xs">© {new Date().getFullYear()} Soliman Shaban. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;