import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { EXPERTISE_CARDS } from '../constants';

const THEME_CONFIG = [
  { // GenAI (Blue)
    cardBg: 'bg-blue-50',
    badgeStyles: 'bg-gradient-to-b from-blue-50 to-blue-100/50 border-blue-200/40 shadow-[0_1px_2px_rgba(37,99,235,0.05),inset_0_1px_0_rgba(255,255,255,0.6)] hover:border-blue-300 hover:bg-blue-100/60',
    textColor: 'text-blue-900',
    dotColor: 'bg-blue-500'
  },
  { // Design Systems (Purple)
    cardBg: 'bg-purple-50',
    badgeStyles: 'bg-gradient-to-b from-purple-50 to-purple-100/50 border-purple-200/40 shadow-[0_1px_2px_rgba(147,51,234,0.05),inset_0_1px_0_rgba(255,255,255,0.6)] hover:border-purple-300 hover:bg-purple-100/60',
    textColor: 'text-purple-900',
    dotColor: 'bg-purple-500'
  },
  { // Gov (Emerald)
    cardBg: 'bg-emerald-50',
    badgeStyles: 'bg-gradient-to-b from-emerald-50 to-emerald-100/50 border-emerald-200/40 shadow-[0_1px_2px_rgba(16,185,129,0.05),inset_0_1px_0_rgba(255,255,255,0.6)] hover:border-emerald-300 hover:bg-emerald-100/60',
    textColor: 'text-emerald-900',
    dotColor: 'bg-emerald-500'
  },
  { // Research (Orange)
    cardBg: 'bg-orange-50',
    badgeStyles: 'bg-gradient-to-b from-orange-50 to-orange-100/50 border-orange-200/40 shadow-[0_1px_2px_rgba(249,115,22,0.05),inset_0_1px_0_rgba(255,255,255,0.6)] hover:border-orange-300 hover:bg-orange-100/60',
    textColor: 'text-orange-900',
    dotColor: 'bg-orange-500'
  },
  { // Teaching (Rose)
    cardBg: 'bg-rose-50',
    badgeStyles: 'bg-gradient-to-b from-rose-50 to-rose-100/50 border-rose-200/40 shadow-[0_1px_2px_rgba(244,63,94,0.05),inset_0_1px_0_rgba(255,255,255,0.6)] hover:border-rose-300 hover:bg-rose-100/60',
    textColor: 'text-rose-900',
    dotColor: 'bg-rose-500'
  },
  { // Dashboards (Indigo)
    cardBg: 'bg-indigo-50',
    badgeStyles: 'bg-gradient-to-b from-indigo-50 to-indigo-100/50 border-indigo-200/40 shadow-[0_1px_2px_rgba(99,102,241,0.05),inset_0_1px_0_rgba(255,255,255,0.6)] hover:border-indigo-300 hover:bg-indigo-100/60',
    textColor: 'text-indigo-900',
    dotColor: 'bg-indigo-500'
  }
];

interface ExpertiseAreasProps {
  onNavigateAI?: () => void;
  onNavigateZLaundry?: () => void;
  onNavigateDesignSystems?: () => void;
}

const ExpertiseAreas: React.FC<ExpertiseAreasProps> = ({ onNavigateAI, onNavigateZLaundry, onNavigateDesignSystems }) => {
  
  const handleCardClick = (id: number) => {
    if (id === 1 && onNavigateAI) {
      onNavigateAI();
    } else if (id === 2 && onNavigateDesignSystems) {
      onNavigateDesignSystems();
    } else if (id === 4 && onNavigateZLaundry) {
      onNavigateZLaundry();
    }
  };

  return (
    <section id="expertise" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-[1600px]">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-3">01 / 07 — Expertise</h2>
            <h3 className="text-4xl font-bold font-display text-slate-900 mb-6">Expertise Areas</h3>
            <p className="text-xl text-slate-600 font-light leading-relaxed">
                Designing across AI, systems, research, and government services
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
          {EXPERTISE_CARDS.map((card, index) => {
            const theme = THEME_CONFIG[index % THEME_CONFIG.length];
            const isClickable = (card.id === 1 || card.id === 2 || card.id === 4);
            
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => handleCardClick(card.id)}
                className={`group flex flex-col ${theme.cardBg} rounded-[32px] overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-slate-200/40 transition-all duration-300 hover:-translate-y-1 ${isClickable ? 'cursor-pointer' : ''}`}
              >
                {/* 1. Content Area (Top) - REDUCED PADDING & SPACING */}
                <div className="flex flex-col flex-grow p-6 sm:p-8 pb-2">
                   <div className="mb-3 flex items-center gap-3">
                      <span className="text-xs font-bold text-slate-400 tracking-widest uppercase font-display">0{index + 1}</span>
                      <div className="w-px h-3 bg-slate-400/30"></div>
                      <span className="text-xs font-bold text-slate-500 tracking-wide uppercase">{card.title}</span>
                   </div>

                   {/* Title / Headline - REDUCED MARGIN */}
                   <h3 className="text-2xl sm:text-3xl font-bold font-display text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 tracking-tight">
                     {card.title}
                   </h3>

                   {/* Description - REDUCED MARGIN */}
                   <p className="text-slate-600 leading-relaxed mb-6">
                     {card.description}
                   </p>

                   {/* Stats & CTA Footer - REDUCED SPACING */}
                   <div className="space-y-4 pt-4 border-t border-slate-200/50 mt-auto">
                      {/* Premium SaaS Badge / Chips */}
                      <div className="flex flex-wrap gap-2">
                        {card.stats.slice(0, 2).map((stat, i) => (
                          <div key={i} className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border transition-all duration-200 ${theme.badgeStyles} ${theme.textColor}`}>
                            <span className={`w-1.5 h-1.5 rounded-full ${theme.dotColor} mr-2 flex-shrink-0`}></span>
                            {stat}
                          </div>
                        ))}
                      </div>
                      
                      <div className="pt-2 flex items-center justify-between">
                         <span className="inline-flex items-center font-bold font-display text-blue-600 hover:text-blue-700 transition-colors text-sm">
                            {card.buttonText}
                            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                         </span>
                      </div>
                   </div>
                </div>

                {/* 2. Preview Area (Bottom) - REDUCED PADDING */}
                <div className="p-6 sm:p-8 pt-0 flex flex-col justify-end">
                   {/* The "Screenshot" Card Frame */}
                   <div className="relative aspect-[16/10] w-full bg-white rounded-2xl shadow-sm border border-slate-200/60 overflow-hidden transform group-hover:scale-[1.02] transition-transform duration-500 origin-bottom">
                      
                      {/* Browser Decor */}
                      <div className="absolute top-3 left-4 flex gap-1.5 z-10">
                          <div className="w-2 h-2 rounded-full bg-slate-200"></div>
                          <div className="w-2 h-2 rounded-full bg-slate-200"></div>
                      </div>

                      <img 
                        src={`https://picsum.photos/seed/${card.id}/800/600`}
                        alt={card.imageAlt}
                        className="w-full h-full object-cover"
                      />
                      
                      {/* Icon overlay */}
                      <div className="absolute bottom-4 right-4 w-10 h-10 bg-white/90 backdrop-blur rounded-xl flex items-center justify-center shadow-sm text-xl border border-white/50">
                        {card.icon}
                      </div>
                   </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseAreas;