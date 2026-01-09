import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Layers, MousePointer2 } from 'lucide-react';

interface FeaturedCaseStudyDesignSystemsProps {
  onViewCaseStudy: () => void;
}

const FeaturedCaseStudyDesignSystems: React.FC<FeaturedCaseStudyDesignSystemsProps> = ({ onViewCaseStudy }) => {

  const floatAnimation = (duration: number) => ({
    y: [0, -12, 0],
    transition: {
      duration: duration,
      repeat: Infinity,
      ease: "easeInOut"
    }
  });

  // Reusable Component Visuals with responsive sizing
  // Sizing: Mobile (default) -> Tablet (md) -> Desktop (lg)
  
  const ButtonComp = () => (
    <div className="bg-white p-3 rounded-xl shadow-xl shadow-black/10 rotate-[-3deg] w-[120px] md:w-[140px] lg:w-[160px]">
        <div className="px-4 py-2.5 bg-[#4169E1] rounded-lg text-white font-bold text-xs md:text-sm shadow-md shadow-blue-500/30 flex items-center justify-center gap-2">
            <MousePointer2 className="w-3 h-3" />
            <span>Submit</span>
        </div>
    </div>
  );

  const InputComp = () => (
    <div className="bg-white p-4 rounded-xl shadow-xl shadow-black/10 rotate-[2deg] w-[140px] md:w-[160px] lg:w-[180px]">
        <div className="text-[10px] font-bold text-slate-400 uppercase mb-1">Email Address</div>
        <div className="h-8 w-full border border-slate-200 rounded-md bg-slate-50 flex items-center px-2 text-xs text-slate-400">
            user@example.com
        </div>
    </div>
  );

  const TokenComp = () => (
    <div className="bg-white p-4 rounded-xl shadow-2xl shadow-black/20 rotate-[-2deg] w-[150px] md:w-[180px] lg:w-[200px]">
        <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                <Layers className="w-4 h-4 text-purple-600" />
            </div>
            <div>
                <div className="text-xs font-bold text-slate-800">Design Token</div>
                <div className="text-[10px] text-slate-400">Core Foundation</div>
            </div>
        </div>
        <div className="h-2 w-full bg-slate-100 rounded-full mb-2"></div>
        <div className="h-2 w-2/3 bg-slate-100 rounded-full"></div>
    </div>
  );

  const ToggleComp = () => (
    <div className="bg-white p-3 rounded-xl shadow-xl shadow-black/10 rotate-[4deg] w-auto">
        <div className="flex items-center gap-2">
            <div className="w-8 h-5 bg-emerald-500 rounded-full relative">
                <div className="absolute right-0.5 top-0.5 w-4 h-4 bg-white rounded-full shadow-sm"></div>
            </div>
            <div className="text-xs font-bold text-slate-600">Active</div>
        </div>
    </div>
  );

  const DropdownComp = () => (
    <div className="bg-white p-3 rounded-xl shadow-xl shadow-black/10 rotate-[-3deg] w-[120px] md:w-[140px] lg:w-[160px]">
        <div className="space-y-1">
            <div className="flex items-center gap-2 p-1.5 rounded hover:bg-slate-50 cursor-pointer">
                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                <div className="text-xs font-medium text-slate-700">Warning</div>
            </div>
            <div className="flex items-center gap-2 p-1.5 rounded bg-blue-50 cursor-pointer">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <div className="text-xs font-bold text-blue-700">Primary</div>
            </div>
            <div className="flex items-center gap-2 p-1.5 rounded hover:bg-slate-50 cursor-pointer">
                <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                <div className="text-xs font-medium text-slate-700">Neutral</div>
            </div>
        </div>
    </div>
  );

  const PhoneComp = () => (
    <div className="bg-slate-800 p-1.5 rounded-[14px] shadow-2xl rotate-[5deg] w-[100px] md:w-[120px] lg:w-[140px]">
        <div className="bg-white rounded-[10px] h-[160px] md:h-[180px] lg:h-[200px] overflow-hidden relative border border-slate-200">
            <div className="h-6 bg-[#06B6D4] w-full"></div>
            <div className="p-2 space-y-2">
                <div className="h-2 w-16 bg-slate-100 rounded"></div>
                <div className="grid grid-cols-2 gap-1">
                    <div className="aspect-square bg-slate-50 rounded"></div>
                    <div className="aspect-square bg-slate-50 rounded"></div>
                </div>
                <div className="h-6 w-full bg-[#1A1D23] rounded mt-2"></div>
            </div>
        </div>
    </div>
  );

  return (
    <section className="py-24 bg-[#1A1D23] relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05]"
          style={{
              backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
              backgroundSize: '40px 40px'
          }}
      ></div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* CONTENT SIDE (Left) */}
            <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="order-1 lg:order-1"
            >
                {/* Tag */}
                <div className="inline-block px-3.5 py-1.5 rounded-md bg-[#7C3AED] text-white text-[11px] font-bold uppercase tracking-[0.08em] mb-6 shadow-sm shadow-purple-500/20">
                    Design Systems
                </div>

                {/* Title */}
                <h2 className="text-4xl md:text-5xl font-bold font-display text-white leading-[1.1] mb-6 tracking-tight">
                    Design Systems <br/>
                    <span className="text-slate-400">at Scale</span>
                </h2>

                {/* Description */}
                <p className="text-lg text-slate-400 font-medium leading-[1.7] mb-8 max-w-lg">
                    Building and maintaining comprehensive design systems for government and fintech — from component libraries to design tokens, RTL/LTR support, and multi-brand architecture.
                </p>

                {/* Stats */}
                <div className="flex flex-wrap items-center gap-6 md:gap-8 mb-10 border-t border-white/10 pt-8">
                    <div>
                        <div className="text-3xl font-bold font-display text-[#A78BFA] mb-1">5+</div>
                        <div className="text-sm font-medium text-white/60">Systems</div>
                    </div>
                    <div className="w-px h-10 bg-white/10"></div>
                    <div>
                        <div className="text-3xl font-bold font-display text-[#A78BFA] mb-1">12M+</div>
                        <div className="text-sm font-medium text-white/60">Users</div>
                    </div>
                    <div className="w-px h-10 bg-white/10"></div>
                    <div>
                        <div className="text-3xl font-bold font-display text-[#A78BFA] mb-1">RTL/LTR</div>
                        <div className="text-sm font-medium text-white/60">Native</div>
                    </div>
                </div>

                {/* CTA */}
                <button 
                    onClick={onViewCaseStudy}
                    className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-xl border-2 border-white/30 text-white font-bold transition-all duration-300 hover:border-[#A78BFA] hover:bg-[#A78BFA]/10 hover:shadow-[0_0_20px_rgba(167,139,250,0.3)]"
                >
                    View Case Study
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
            </motion.div>


            {/* VISUAL SIDE (Right) */}
            <div className="order-2 lg:order-2 w-full">
                
                {/* 1. TABLET/DESKTOP WRAPPER (Hidden on mobile < 768px) */}
                <div className="hidden md:block relative min-h-[400px] lg:min-h-[500px] w-full perspective-1000 overflow-hidden rounded-2xl bg-white/5 border border-white/5">
                    
                    {/* Glow - Centered & Sized */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] bg-purple-500/20 blur-[80px] rounded-full pointer-events-none -z-10"></div>

                    {/* 1. Button - Top Center */}
                    <motion.div
                        animate={floatAnimation(5)}
                        className="absolute top-[10%] left-1/2 -translate-x-1/2 z-20"
                    >
                        <ButtonComp />
                    </motion.div>

                    {/* 2. Input - Top Right */}
                    <motion.div
                        animate={floatAnimation(7)}
                        className="absolute top-[15%] right-[8%] z-10"
                    >
                        <InputComp />
                    </motion.div>

                    {/* 3. Token Card - Left Center */}
                    <motion.div
                        animate={floatAnimation(6)}
                        className="absolute top-[35%] lg:top-[40%] left-[8%] z-30"
                    >
                        <TokenComp />
                    </motion.div>

                    {/* 4. Toggle - Right Center (Hidden on Tablet < 1024px) */}
                    <motion.div
                        animate={floatAnimation(5.5)}
                        className="absolute top-[45%] right-[12%] z-20 hidden lg:block"
                    >
                        <ToggleComp />
                    </motion.div>

                    {/* 5. Dropdown - Bottom Right */}
                    <motion.div
                        animate={floatAnimation(8)}
                        className="absolute bottom-[15%] right-[10%] z-10"
                    >
                        <DropdownComp />
                    </motion.div>

                    {/* 6. Phone - Bottom Left (Hidden on Tablet < 1024px) */}
                    <motion.div
                        animate={floatAnimation(7.5)}
                        className="absolute bottom-[10%] left-[10%] z-20 hidden lg:block"
                    >
                         <PhoneComp />
                    </motion.div>
                </div>

                {/* 2. MOBILE WRAPPER (Visible < 768px) */}
                <div className="md:hidden flex overflow-x-auto gap-4 py-8 px-4 snap-x hide-scrollbar">
                     <div className="snap-center shrink-0"><ButtonComp /></div>
                     <div className="snap-center shrink-0"><InputComp /></div>
                     <div className="snap-center shrink-0"><TokenComp /></div>
                     <div className="snap-center shrink-0"><DropdownComp /></div>
                     <div className="snap-center shrink-0"><ToggleComp /></div>
                </div>

            </div>

        </div>
      </div>
    </section>
  );
};

export default FeaturedCaseStudyDesignSystems;