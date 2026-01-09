import React from 'react';
import { motion } from 'framer-motion';
import { Bot, LayoutGrid, ScanEye, Users, ArrowRight, Sparkles, Mic, Video } from 'lucide-react';

const HowIWork: React.FC = () => {
  const features = [
    {
      id: "01",
      icon: <Bot className="w-5 h-5" />,
      title: "AI-First Design",
      description: "Leveraging GenAI tools like v0 & Bolt to prototype in hours, not days.",
      visual: (
        <div className="flex flex-col gap-3">
            {/* Input Field */}
            <div className="flex items-center gap-2 bg-slate-50 border border-slate-100 rounded-md p-2">
                <Sparkles className="w-3 h-3 text-indigo-500" />
                <div className="h-1.5 w-24 bg-slate-200 rounded-full"></div>
            </div>
            {/* Generate Button */}
            <div className="flex justify-end">
                <div className="h-5 px-3 bg-indigo-600 rounded-md flex items-center gap-1 shadow-sm shadow-indigo-200">
                    <span className="text-[8px] font-bold text-white">Generate</span>
                    <Sparkles className="w-2 h-2 text-white/70" />
                </div>
            </div>
            {/* Skeleton Output */}
            <div className="space-y-1.5 mt-1 p-2 bg-slate-50/50 rounded-lg border border-slate-100 border-dashed">
                <div className="h-1.5 w-full bg-slate-200 rounded-full"></div>
                <div className="h-1.5 w-2/3 bg-slate-200 rounded-full"></div>
            </div>
        </div>
      )
    },
    {
      id: "02",
      icon: <LayoutGrid className="w-5 h-5" />,
      title: "Systems Thinking",
      description: "Building scalable atomic design systems that serve millions of users.",
      visual: (
        <div className="space-y-3">
             <div className="grid grid-cols-2 gap-2">
                 {/* Button Primary */}
                 <div className="h-7 bg-indigo-600 rounded-md flex items-center justify-center shadow-sm">
                     <div className="w-8 h-1 bg-white/40 rounded-full"></div>
                 </div>
                 {/* Button Secondary */}
                 <div className="h-7 bg-white border border-slate-200 rounded-md flex items-center justify-center">
                     <div className="w-8 h-1 bg-slate-300 rounded-full"></div>
                 </div>
             </div>
             <div className="flex items-center justify-between px-1">
                 {/* Toggle */}
                 <div className="w-7 h-4 bg-emerald-400 rounded-full relative shadow-inner">
                     <div className="absolute right-0.5 top-0.5 w-3 h-3 bg-white rounded-full shadow-sm"></div>
                 </div>
                 {/* Checkbox */}
                 <div className="flex items-center gap-1.5">
                     <div className="w-3.5 h-3.5 bg-indigo-600 rounded flex items-center justify-center">
                        <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                     </div>
                     <div className="w-6 h-1 bg-slate-200 rounded-full"></div>
                 </div>
             </div>
             {/* Input */}
             <div className="h-7 w-full bg-slate-50 border border-slate-200 rounded-md flex items-center px-2">
                 <div className="w-12 h-1 bg-slate-300 rounded-full"></div>
             </div>
        </div>
      )
    },
    {
      id: "03",
      icon: <ScanEye className="w-5 h-5" />,
      title: "Research-Driven",
      description: "Conducting usability labs to drive decisions with 30+ sessions led.",
      visual: (
         <div className="h-28 flex flex-col justify-end pb-1">
             <div className="flex items-end justify-between gap-2 h-20 px-1">
                 <div className="w-full bg-indigo-100 rounded-t-sm h-[30%]"></div>
                 <div className="w-full bg-indigo-200 rounded-t-sm h-[50%]"></div>
                 <div className="w-full bg-indigo-300 rounded-t-sm h-[40%]"></div>
                 <div className="w-full bg-indigo-600 rounded-t-sm h-[85%] relative group">
                      <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[8px] font-bold px-1.5 py-0.5 rounded shadow-sm">
                          82%
                      </div>
                 </div>
                 <div className="w-full bg-indigo-200 rounded-t-sm h-[60%]"></div>
             </div>
             <div className="h-px w-full bg-slate-200 mt-0"></div>
             <div className="flex justify-between mt-1.5 px-1">
                 <div className="w-3 h-1 bg-slate-200 rounded-full"></div>
                 <div className="w-3 h-1 bg-slate-200 rounded-full"></div>
                 <div className="w-3 h-1 bg-slate-200 rounded-full"></div>
                 <div className="w-3 h-1 bg-indigo-400 rounded-full"></div>
                 <div className="w-3 h-1 bg-slate-200 rounded-full"></div>
             </div>
         </div>
      )
    },
    {
      id: "04",
      icon: <Users className="w-5 h-5" />,
      title: "Teaching & Mentoring",
      description: "Empowering 500+ designers through workshops.",
      visual: (
        <div className="space-y-2">
            <div className="grid grid-cols-2 gap-2">
                <div className="aspect-video bg-slate-100 rounded-md border border-slate-200 relative overflow-hidden flex items-end justify-center">
                    <div className="w-6 h-6 bg-slate-200 rounded-full mb-[-10px]"></div>
                </div>
                <div className="aspect-video bg-indigo-50 rounded-md border border-indigo-100 relative overflow-hidden flex items-end justify-center">
                    <div className="w-6 h-6 bg-indigo-200 rounded-full mb-[-10px]"></div>
                    <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-green-500 rounded-full border border-white"></div>
                </div>
                <div className="aspect-video bg-slate-100 rounded-md border border-slate-200 relative overflow-hidden flex items-end justify-center">
                    <div className="w-6 h-6 bg-slate-200 rounded-full mb-[-10px]"></div>
                </div>
                <div className="aspect-video bg-slate-100 rounded-md border border-slate-200 relative overflow-hidden flex items-end justify-center">
                     <div className="w-6 h-6 bg-slate-200 rounded-full mb-[-10px]"></div>
                </div>
            </div>
            <div className="flex justify-center gap-1.5 pt-1">
                <div className="w-4 h-4 rounded-full bg-red-500 flex items-center justify-center">
                    <Mic size={8} className="text-white" />
                </div>
                <div className="w-4 h-4 rounded-full bg-slate-200 flex items-center justify-center">
                    <Video size={8} className="text-slate-500" />
                </div>
            </div>
        </div>
      )
    }
  ];

  return (
    <section id="how-i-work" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-3">02 / 07 — Approach</h2>
            <h3 className="text-4xl font-bold font-display text-slate-900 mb-6">
                Enterprise ready. Innovation focused.
            </h3>
            <p className="text-xl text-slate-600 font-light leading-relaxed">
                Hundreds of stakeholders rely on my design systems and AI workflows to scale their product organizations and deliver value faster.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
                >
                    <div className="mb-6 w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100">
                        {feature.icon}
                    </div>

                    <h4 className="text-lg font-bold font-display text-slate-900 mb-2">
                        {feature.title}
                    </h4>
                    
                    <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">
                        {feature.description}
                    </p>

                    <div className="mt-auto bg-slate-50 rounded-xl border border-slate-100 p-4 overflow-hidden">
                        {feature.visual}
                    </div>
                </motion.div>
            ))}
        </div>

        <div className="mt-16 text-center">
            <a href="#" className="inline-flex items-center text-blue-600 font-bold hover:text-blue-700 transition-colors">
                View Detailed Process <ArrowRight className="ml-2 w-4 h-4" />
            </a>
        </div>
      </div>
    </section>
  );
};

export default HowIWork;