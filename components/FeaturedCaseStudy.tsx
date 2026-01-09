import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Bot, Layers } from 'lucide-react';

interface FeaturedCaseStudyProps {
  onViewCaseStudy: () => void;
}

const FeaturedCaseStudy: React.FC<FeaturedCaseStudyProps> = ({ onViewCaseStudy }) => {
  
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
    <section className="py-24 bg-white relative overflow-hidden">
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
                <div className="inline-block px-3.5 py-1.5 rounded-md bg-[#4169E1] text-white text-[11px] font-bold uppercase tracking-[0.08em] mb-6 shadow-sm shadow-blue-500/20">
                    AI + Government
                </div>

                {/* Title */}
                <h2 className="text-4xl md:text-5xl font-bold font-display text-[#1A1D23] leading-[1.1] mb-6 tracking-tight">
                    AI Urban <br/>
                    <span className="text-slate-400">Design Tool</span>
                </h2>

                {/* Description */}
                <p className="text-lg text-slate-600 font-medium leading-[1.7] mb-8 max-w-lg">
                    First GenAI Design Lab in Dubai Government. An AI-powered visualization tool that transforms photos into professional design concepts, reducing turnaround from 5 days to just 8 hours.
                </p>

                {/* Stats */}
                <div className="flex flex-wrap items-center gap-6 md:gap-8 mb-10 border-t border-slate-200 pt-8">
                    <div>
                        <div className="text-3xl font-bold font-display text-[#4169E1] mb-1">93%</div>
                        <div className="text-sm font-medium text-slate-500">Faster</div>
                    </div>
                    <div className="w-px h-10 bg-slate-200"></div>
                    <div>
                        <div className="text-3xl font-bold font-display text-[#4169E1] mb-1">1st</div>
                        <div className="text-sm font-medium text-slate-500">GenAI Lab</div>
                    </div>
                    <div className="w-px h-10 bg-slate-200"></div>
                    <div>
                        <div className="text-3xl font-bold font-display text-[#4169E1] mb-1">2025</div>
                        <div className="text-sm font-medium text-slate-500">GITEX</div>
                    </div>
                </div>

                {/* CTA */}
                <button 
                    onClick={onViewCaseStudy}
                    className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-xl border-2 border-slate-200 text-[#1A1D23] font-bold transition-all duration-300 hover:border-[#4169E1] hover:text-[#4169E1] hover:bg-[#4169E1]/5"
                >
                    View Case Study
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
            </motion.div>


            {/* IMAGE SIDE (Right - 60%) */}
            <div className="lg:col-span-7 order-1 lg:order-2 relative min-h-[400px] md:min-h-[500px] flex items-center justify-center lg:justify-end perspective-1000">
                
                {/* Image 1: Main Interface (Back) */}
                <motion.div
                    animate={floatAnimationDelayed}
                    className="absolute top-0 right-0 md:right-10 w-[280px] md:w-[340px] z-10 origin-bottom-right rotate-[-3deg] hover:rotate-0 transition-transform duration-500"
                >
                    <div className="bg-white p-4 rounded-2xl shadow-2xl shadow-slate-200/50 border border-slate-100">
                        {/* Mock Interface Card */}
                        <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-slate-800">
                             <img 
                                src="https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2070&auto=format&fit=crop" 
                                alt="Main Interface" 
                                className="w-full h-full object-cover opacity-90"
                             />
                             {/* UI Overlay Mockup */}
                             <div className="absolute top-3 left-3 right-3 flex justify-between items-center bg-white/90 backdrop-blur-sm p-2 rounded-lg shadow-sm">
                                 <div className="flex gap-1.5">
                                     <div className="w-2 h-2 rounded-full bg-red-400"></div>
                                     <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                                     <div className="w-2 h-2 rounded-full bg-green-400"></div>
                                 </div>
                                 <div className="h-1.5 w-16 bg-slate-200 rounded-full"></div>
                             </div>
                        </div>
                    </div>
                </motion.div>

                {/* Image 2: Generation/Results (Middle) */}
                <motion.div
                    animate={floatAnimation}
                    className="absolute bottom-0 left-0 md:left-10 w-[240px] md:w-[300px] z-20 origin-bottom-left rotate-[2deg] hover:rotate-0 transition-transform duration-500"
                >
                     <div className="bg-white p-3 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100">
                        {/* Mock Results */}
                        <div className="aspect-square bg-[#F0F4FF] rounded-xl p-3 grid grid-cols-1 gap-2 overflow-hidden relative">
                             <img 
                                src="https://images.unsplash.com/photo-1664575602554-2087b04935a5?q=80&w=2160&auto=format&fit=crop"
                                alt="AI Generation"
                                className="w-full h-full object-cover rounded-lg"
                             />
                             {/* Center Icon */}
                             <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                 <div className="w-12 h-12 bg-white/90 backdrop-blur rounded-full shadow-lg flex items-center justify-center border border-white/50">
                                     <Sparkles className="w-6 h-6 text-[#4169E1]" />
                                 </div>
                             </div>
                        </div>
                    </div>
                </motion.div>

                {/* Image 3: Controls/Dashboard (Front) */}
                <motion.div
                    animate={floatAnimationReverse}
                    className="absolute bottom-10 right-0 md:right-0 w-[220px] md:w-[260px] z-30 origin-center rotate-[-2deg] hover:rotate-0 transition-transform duration-500"
                >
                     <div className="bg-white p-3 rounded-2xl shadow-xl shadow-slate-200/60 border border-slate-100">
                        {/* Mock Controls */}
                        <div className="bg-white rounded-xl border border-slate-100 overflow-hidden">
                             <div className="h-8 bg-slate-50 border-b border-slate-100 flex items-center px-3 gap-2">
                                 <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                                 <div className="w-12 h-1.5 bg-slate-200 rounded-full"></div>
                             </div>
                             <div className="p-3">
                                 <img 
                                    src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop"
                                    alt="Controls"
                                    className="w-full h-32 object-cover rounded-lg mb-2" 
                                 />
                                 <div className="flex gap-2">
                                     <div className="h-6 flex-1 bg-[#4169E1] rounded-md"></div>
                                     <div className="h-6 w-6 bg-slate-100 rounded-md"></div>
                                 </div>
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

export default FeaturedCaseStudy;