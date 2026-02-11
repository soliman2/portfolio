import React from 'react';
import { motion } from 'framer-motion';
import { MORE_EXPERTISE_CARDS } from '../constants';

const EXPERTISE_CHIPS = [
    "Design Systems", "Service Design", "UX Research", "AI Prototyping",
    "Figma", "Usability Testing", "Arabic/English", "Dashboards",
    "Teaching", "Data Viz"
];

const MoreExpertise: React.FC = () => {

    const getImageUrl = (cardId: number) => {
        const imageMap: { [key: number]: string } = {
            1: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
            2: '/thumnails /Teaching & Mentorship..png',
            3: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=800&auto=format&fit=crop'
        };
        return imageMap[cardId] || '';
    };

    return (
        <section className="py-12 md:py-24 bg-white relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-5 md:px-6 lg:px-12 relative z-10">

                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-6 md:mb-16">
                    <h2 className="text-[28px] md:text-5xl font-bold font-display text-[#1A1D23] leading-tight mb-2 md:mb-4">
                        Expertise
                    </h2>
                    <p className="hidden md:block text-lg text-slate-600">
                        Additional areas where I deliver impact
                    </p>
                </div>

                {/* Mobile: Chip Cloud */}
                <div className="md:hidden flex flex-wrap justify-center gap-2">
                    {EXPERTISE_CHIPS.map((chip, idx) => (
                        <motion.span
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: idx * 0.04 }}
                            className="inline-flex items-center px-3.5 py-1.5 rounded-full text-[13px] font-semibold bg-[#E8F0FE] text-[#4169E1]"
                        >
                            {chip}
                        </motion.span>
                    ))}
                </div>

                {/* Desktop: 3 Cards Grid */}
                <div className="hidden md:grid grid-cols-3 gap-8">
                    {MORE_EXPERTISE_CARDS.map((card, index) => (
                        <motion.div
                            key={card.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group bg-white border-2 border-slate-200 rounded-2xl overflow-hidden hover:border-[#4169E1] hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                        >
                            {/* Image Area */}
                            <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100">
                                <img
                                    src={getImageUrl(card.id)}
                                    alt={card.headline}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            </div>

                            {/* Content */}
                            <div className="p-8">
                                <h3 className="text-2xl font-bold font-display text-[#1A1D23] mb-4 group-hover:text-[#4169E1] transition-colors duration-300">
                                    {card.headline}
                                </h3>
                                <p className="text-slate-600 leading-relaxed mb-6">
                                    {card.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {card.tags.map((tag, idx) => (
                                        <span
                                            key={idx}
                                            className="inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                                    <div className="text-sm font-bold text-[#4169E1]">
                                        {card.miniStat}
                                    </div>
                                    <div className="text-sm font-medium text-slate-400 group-hover:text-[#4169E1] transition-colors duration-300">
                                        Learn More →
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MoreExpertise;
