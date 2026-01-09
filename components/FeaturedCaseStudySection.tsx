import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { FeaturedCaseStudy } from '../types';
import { useNavigate } from 'react-router-dom';

interface FeaturedCaseStudySectionProps {
    caseStudy: FeaturedCaseStudy;
    index: number;
    totalCount: number;
}

const FeaturedCaseStudySection: React.FC<FeaturedCaseStudySectionProps> = ({
    caseStudy,
    index,
    totalCount
}) => {
    const navigate = useNavigate();
    const isEven = index % 2 === 1; // 0-indexed, so index 1 is the 2nd item (even layout)
    const sectionNumber = String(index + 1).padStart(2, '0');
    const totalNumber = String(totalCount).padStart(2, '0');

    const bgColor = caseStudy.backgroundColor === 'white' ? 'bg-white' : 'bg-slate-50';

    const handleCTAClick = () => {
        navigate(caseStudy.ctaLink);
    };

    return (
        <section className={`py-24 ${bgColor} relative overflow-hidden`}>
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">

                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center ${isEven ? 'lg:flex-row-reverse' : ''}`}>

                    {/* CONTENT SIDE */}
                    <motion.div
                        initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className={`lg:col-span-5 ${isEven ? 'lg:col-start-8 order-2 lg:order-2' : 'order-2 lg:order-1'}`}
                    >
                        {/* Section Number */}
                        <div className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-3">
                            {sectionNumber}/{totalNumber}
                        </div>

                        {/* Category Badge */}
                        <div className="inline-block px-3.5 py-1.5 rounded-lg bg-[#4169E1] text-white text-[11px] font-bold uppercase tracking-[0.08em] mb-6 shadow-sm shadow-blue-500/20">
                            {caseStudy.category}
                        </div>

                        {/* Headline */}
                        <h2 className="text-4xl md:text-5xl font-bold font-display text-[#1A1D23] leading-[1.1] mb-6 tracking-tight">
                            {caseStudy.headline}
                        </h2>

                        {/* Value Statement */}
                        <p className="text-lg text-slate-600 font-medium leading-[1.7] mb-8 max-w-lg">
                            {caseStudy.valueStatement}
                        </p>

                        {/* Stats Row */}
                        <div className="flex flex-wrap items-center gap-6 md:gap-8 mb-10 border-t border-slate-200 pt-8">
                            {caseStudy.stats.map((stat, idx) => (
                                <React.Fragment key={idx}>
                                    <div>
                                        <div className="text-3xl font-bold font-display text-[#4169E1] mb-1">
                                            {stat.value}
                                        </div>
                                        <div className="text-sm font-medium text-slate-500">
                                            {stat.label}
                                        </div>
                                    </div>
                                    {idx < caseStudy.stats.length - 1 && (
                                        <div className="w-px h-10 bg-slate-200"></div>
                                    )}
                                </React.Fragment>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <button
                            onClick={handleCTAClick}
                            className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-xl border-2 border-slate-200 text-[#1A1D23] font-bold transition-all duration-300 hover:border-[#4169E1] hover:text-[#4169E1] hover:bg-[#4169E1]/5"
                        >
                            {caseStudy.ctaText}
                            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </button>
                    </motion.div>

                    {/* IMAGE SIDE */}
                    <motion.div
                        initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className={`lg:col-span-7 ${isEven ? 'lg:col-start-1 order-1 lg:order-1' : 'order-1 lg:order-2'} relative min-h-[400px] md:min-h-[500px] flex items-center justify-center`}
                    >
                        {/* Placeholder for Hero Image */}
                        <div className="w-full h-full bg-slate-100 rounded-2xl shadow-2xl shadow-slate-200/50 border border-slate-200 flex items-center justify-center overflow-hidden">
                            {/* Temporary placeholder - replace with actual images */}
                            <div className="aspect-[4/3] w-full relative">
                                <img
                                    src={`https://images.unsplash.com/photo-${1486325212027 + index}?q=80&w=2070&auto=format&fit=crop`}
                                    alt={caseStudy.imageAlt}
                                    className="w-full h-full object-cover opacity-60"
                                />
                                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-600/10 to-purple-600/10">
                                    <div className="text-center p-8">
                                        <div className="text-6xl mb-4">
                                            {index === 0 ? '🤖' : index === 1 ? '🎨' : index === 2 ? '🏛️' : '🔬'}
                                        </div>
                                        <p className="text-sm text-slate-600 font-medium max-w-xs">
                                            {caseStudy.imageAlt}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default FeaturedCaseStudySection;
