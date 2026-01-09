import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Search, Users, FileText, Target } from 'lucide-react';

interface FeaturedCaseStudyZLaundryProps {
  onViewCaseStudy: () => void;
}

const FeaturedCaseStudyZLaundry: React.FC<FeaturedCaseStudyZLaundryProps> = ({ onViewCaseStudy }) => {
  
  const floatAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const floatAnimationDelayed = {
    y: [0, -8, 0],
    transition: {
      duration: 6,
      delay: 1,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const floatAnimationReverse = {
    y: [0, 8, 0],
    transition: {
      duration: 5.5,
      delay: 0.5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <section className="py-24 bg-[#F8F9FA] relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            
            {/* CONTENT SIDE (Left - 40%) */}
            <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-5 order-2 lg:order-1"
            >
                {/* Tag */}
                <div className="inline-block px-3.5 py-1.5 rounded-md bg-[#14B8A6] text-white text-[11px] font-bold uppercase tracking-[0.08em] mb-6 shadow-sm shadow-teal-500/20">
                    UX Research
                </div>

                {/* Title */}
                <h2 className="text-4xl md:text-5xl font-bold font-display text-[#1A1D23] leading-[1.1] mb-6 tracking-tight">
                    Z-Laundry <br/>
                    <span className="text-slate-400">Research & Discovery</span>
                </h2>

                {/* Description */}
                <p className="text-lg text-slate-600 font-medium leading-[1.7] mb-8 max-w-lg">
                    Comprehensive UX research for an on-demand laundry mobile app. I led the discovery phase — analyzing 7 competitors, interviewing users, and creating personas and empathy maps to guide product decisions.
                </p>

                {/* Stats */}
                <div className="flex flex-wrap items-center gap-6 md:gap-8 mb-10 border-t border-slate-200 pt-8">
                    <div>
                        <div className="text-3xl font-bold font-display text-[#14B8A6] mb-1">7</div>
                        <div className="text-sm font-medium text-slate-500">Competitors</div>
                    </div>
                    <div className="w-px h-10 bg-slate-200"></div>
                    <div>
                        <div className="text-3xl font-bold font-display text-[#14B8A6] mb-1">6</div>
                        <div className="text-sm font-medium text-slate-500">Interviews</div>
                    </div>
                    <div className="w-px h-10 bg-slate-200"></div>
                    <div>
                        <div className="text-3xl font-bold font-display text-[#14B8A6] mb-1">3</div>
                        <div className="text-sm font-medium text-slate-500">Personas</div>
                    </div>
                </div>

                {/* CTA */}
                <button 
                    onClick={onViewCaseStudy}
                    className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-xl border-2 border-slate-200 text-[#1A1D23] font-bold transition-all duration-300 hover:border-[#14B8A6] hover:text-[#14B8A6] hover:bg-[#14B8A6]/5"
                >
                    View Case Study
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
            </motion.div>


            {/* IMAGE SIDE (Right - 60%) */}
            <div className="lg:col-span-7 order-1 lg:order-2 relative min-h-[400px] md:min-h-[500px] flex items-center justify-center lg:justify-end perspective-1000">
                
                {/* Image 1: Persona (Back) */}
                <motion.div
                    animate={floatAnimationDelayed}
                    className="absolute top-0 right-0 md:right-10 w-[280px] md:w-[340px] z-10 origin-bottom-right rotate-[-3deg] hover:rotate-0 transition-transform duration-500"
                >
                    <div className="bg-white p-4 rounded-2xl shadow-2xl shadow-slate-200/50 border border-slate-100">
                        {/* Mock Persona Card */}
                        <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-slate-800">
                             <img 
                                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop" 
                                alt="Persona" 
                                className="w-full h-full object-cover opacity-80"
                             />
                             <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-slate-900 to-transparent pt-20">
                                 <div className="text-white font-bold text-xl">Hanan</div>
                                 <div className="text-slate-300 text-sm">The Busy Mom</div>
                                 <div className="mt-3 flex gap-2">
                                     <span className="px-2 py-1 rounded bg-[#14B8A6]/20 text-[#14B8A6] text-[10px] font-bold uppercase">Goals</span>
                                     <span className="px-2 py-1 rounded bg-rose-500/20 text-rose-400 text-[10px] font-bold uppercase">Pains</span>
                                 </div>
                             </div>
                        </div>
                    </div>
                </motion.div>

                {/* Image 2: Empathy Map (Middle) */}
                <motion.div
                    animate={floatAnimation}
                    className="absolute bottom-0 left-0 md:left-10 w-[240px] md:w-[300px] z-20 origin-bottom-left rotate-[2deg] hover:rotate-0 transition-transform duration-500"
                >
                     <div className="bg-white p-3 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100">
                        {/* Mock Empathy Map */}
                        <div className="aspect-square bg-[#F0FDFA] rounded-xl p-4 grid grid-cols-2 gap-2">
                             <div className="bg-white rounded-lg p-2 shadow-sm border border-slate-100/50">
                                 <div className="text-[8px] font-bold text-slate-400 uppercase mb-1">Says</div>
                                 <div className="h-1 w-full bg-slate-100 rounded mb-1"></div>
                                 <div className="h-1 w-2/3 bg-slate-100 rounded"></div>
                             </div>
                             <div className="bg-white rounded-lg p-2 shadow-sm border border-slate-100/50">
                                 <div className="text-[8px] font-bold text-slate-400 uppercase mb-1">Thinks</div>
                                 <div className="h-1 w-full bg-slate-100 rounded mb-1"></div>
                             </div>
                             <div className="bg-white rounded-lg p-2 shadow-sm border border-slate-100/50">
                                 <div className="text-[8px] font-bold text-slate-400 uppercase mb-1">Does</div>
                                 <div className="h-1 w-3/4 bg-slate-100 rounded mb-1"></div>
                             </div>
                             <div className="bg-white rounded-lg p-2 shadow-sm border border-slate-100/50">
                                 <div className="text-[8px] font-bold text-slate-400 uppercase mb-1">Feels</div>
                                 <div className="h-1 w-full bg-slate-100 rounded mb-1"></div>
                                 <div className="h-1 w-1/2 bg-slate-100 rounded"></div>
                             </div>
                             {/* Center Icon */}
                             <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                 <div className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center">
                                     <Users className="w-5 h-5 text-[#14B8A6]" />
                                 </div>
                             </div>
                        </div>
                    </div>
                </motion.div>

                {/* Image 3: Competitor Table (Front) */}
                <motion.div
                    animate={floatAnimationReverse}
                    className="absolute bottom-10 right-0 md:right-0 w-[220px] md:w-[260px] z-30 origin-center rotate-[-2deg] hover:rotate-0 transition-transform duration-500"
                >
                     <div className="bg-white p-3 rounded-2xl shadow-xl shadow-slate-200/60 border border-slate-100">
                        {/* Mock Table */}
                        <div className="bg-white rounded-xl border border-slate-100 overflow-hidden">
                             <div className="h-8 bg-slate-50 border-b border-slate-100 flex items-center px-3 gap-2">
                                 <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                                 <div className="w-12 h-1.5 bg-slate-200 rounded-full"></div>
                             </div>
                             <div className="p-3 space-y-2">
                                 {[1,2,3,4].map(i => (
                                     <div key={i} className="flex items-center justify-between">
                                         <div className="w-16 h-1.5 bg-slate-100 rounded-full"></div>
                                         <div className="flex gap-2">
                                             <div className="w-3 h-3 rounded-full border border-slate-200"></div>
                                             <div className="w-3 h-3 rounded-full bg-[#14B8A6]"></div>
                                         </div>
                                     </div>
                                 ))}
                             </div>
                        </div>
                    </div>
                </motion.div>

            </div>

        </div>
      </div>
    </section>
  );
};

export default FeaturedCaseStudyZLaundry;