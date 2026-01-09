import React from 'react';
import { motion } from 'framer-motion';
import { MORE_EXPERTISE_CARDS } from '../constants';

const MoreExpertise: React.FC = () => {

    const getImageUrl = (cardId: number) => {
        // Using Unsplash images for different expertise areas
        const imageMap: { [key: number]: string } = {
            1: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop', // Dashboard analytics
            2: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop', // Teaching/workshop
            3: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=800&auto=format&fit=crop'  // Languages/translation
        };
        return imageMap[cardId] || '';
    };

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">

                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold font-display text-[#1A1D23] leading-tight mb-4">
                        More Expertise
                    </h2>
                    <p className="text-lg text-slate-600">
                        Additional areas where I deliver impact
                    </p>
                </div>

                {/* 3 Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                                {/* Headline */}
                                <h3 className="text-2xl font-bold font-display text-[#1A1D23] mb-4 group-hover:text-[#4169E1] transition-colors duration-300">
                                    {card.headline}
                                </h3>

                                {/* Description */}
                                <p className="text-slate-600 leading-relaxed mb-6">
                                    {card.description}
                                </p>

                                {/* Tags */}
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

                                {/* Mini Stat + Hover CTA */}
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
