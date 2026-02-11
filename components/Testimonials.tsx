import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
    const [startIndex, setStartIndex] = useState(0);
    const visibleCards = 3;

    const nextSlide = () => {
        setStartIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    };

    const prevSlide = () => {
        setStartIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
    };

    // Helper to get visible testimonials including wrap-around
    const getVisibleTestimonials = () => {
        const result = [];
        for (let i = 0; i < visibleCards; i++) {
            result.push(TESTIMONIALS[(startIndex + i) % TESTIMONIALS.length]);
        }
        return result;
    };

    return (
        <section className="py-24 bg-[#F9FAFB] overflow-hidden" id="testimonials">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl md:text-5xl font-bold font-display text-slate-900 mb-4 tracking-tight">
                            What Leaders Say
                        </h2>
                        <p className="text-lg text-slate-500 font-inter">
                            Trusted by RTA executives, design leaders, and government teams.
                        </p>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex items-center gap-3">
                        <button
                            onClick={prevSlide}
                            className="p-3 rounded-full border border-slate-200 bg-white text-slate-600 hover:bg-[#4169E1] hover:text-white transition-all duration-300 shadow-sm"
                            aria-label="Previous testimonials"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="p-3 rounded-full border border-slate-200 bg-white text-slate-600 hover:bg-[#4169E1] hover:text-white transition-all duration-300 shadow-sm"
                            aria-label="Next testimonials"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>
                </div>

                {/* Carousel Container */}
                <div className="relative">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                        <AnimatePresence mode="popLayout" initial={false}>
                            {getVisibleTestimonials().map((testimonial, idx) => {
                                const isOfficial = testimonial.badge?.includes("Official Recognition");

                                return (
                                    <motion.div
                                        key={`${testimonial.id}-${startIndex + idx}`}
                                        initial={{ opacity: 0, x: 50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -50 }}
                                        transition={{ duration: 0.4, ease: "easeOut" }}
                                        className={`group relative flex flex-col h-full rounded-[28px] p-8 transition-all duration-500 ${isOfficial
                                                ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-2 border-amber-400/30 shadow-2xl shadow-amber-900/10'
                                                : 'bg-white border border-slate-200/60 shadow-sm hover:shadow-xl hover:shadow-blue-900/5'
                                            }`}
                                    >
                                        {/* Glow effect for Official card */}
                                        {isOfficial && (
                                            <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-400/20 to-indigo-400/20 rounded-[28px] blur opacity-40 group-hover:opacity-60 transition duration-1000"></div>
                                        )}

                                        <div className="relative z-10 flex flex-col h-full">
                                            {/* Quote Icon */}
                                            <div className="mb-6">
                                                <Quote className={`w-8 h-8 ${isOfficial ? 'text-amber-400' : 'text-blue-100 group-hover:text-blue-500 transition-colors duration-500'}`} />
                                            </div>

                                            {/* Recognition Badge */}
                                            {testimonial.badge && (
                                                <div className="mb-4">
                                                    <span className={`inline-flex items-center px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full border ${isOfficial
                                                            ? 'bg-amber-400/10 text-amber-400 border-amber-400/20'
                                                            : 'bg-amber-50 text-amber-600 border-amber-100'
                                                        }`}>
                                                        {testimonial.badge}
                                                    </span>
                                                </div>
                                            )}

                                            {/* Quote Content */}
                                            <div className="flex-grow">
                                                <p className={`leading-relaxed font-inter mb-8 italic ${isOfficial ? 'text-slate-200' : 'text-slate-700'}`}>
                                                    "{testimonial.quote}"
                                                </p>
                                            </div>

                                            {/* Author Info */}
                                            <div className={`pt-6 border-t mt-auto ${isOfficial ? 'border-amber-400/10' : 'border-slate-100'}`}>
                                                <div className={`font-bold font-display text-base leading-tight ${isOfficial ? 'text-white' : 'text-slate-900'}`}>
                                                    {testimonial.name}
                                                </div>
                                                <div className={`text-sm font-medium mt-1 ${isOfficial ? 'text-amber-400/90' : 'text-blue-600'}`}>
                                                    {testimonial.title}
                                                </div>
                                                <div className={`text-[11px] font-semibold uppercase tracking-widest mt-2 leading-tight ${isOfficial ? 'text-slate-400' : 'text-slate-400'}`}>
                                                    {testimonial.company}
                                                </div>

                                                {testimonial.link && (
                                                    <div className={`mt-4 pt-4 border-t ${isOfficial ? 'border-white/5' : 'border-slate-50'}`}>
                                                        <a
                                                            href="#"
                                                            className={`inline-flex items-center text-xs font-bold transition-colors ${isOfficial ? 'text-amber-400 hover:text-white' : 'text-slate-900 hover:text-blue-600'
                                                                }`}
                                                        >
                                                            {testimonial.link}
                                                        </a>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </AnimatePresence>
                    </div>
                </div>

                {/* LinkedIn Link Section */}
                <div className="mt-16 text-center">
                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center px-8 py-4 bg-white border border-slate-200 rounded-full text-sm font-bold text-slate-600 hover:text-blue-600 hover:border-blue-200 transition-all shadow-sm"
                    >
                        View More Recommendations on LinkedIn <span className="ml-2">→</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;