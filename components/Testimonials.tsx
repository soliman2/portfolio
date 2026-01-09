import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
    };

    const current = TESTIMONIALS[currentIndex];

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="mb-16 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-4">
                        What Leaders Say
                    </h2>
                    <p className="text-lg text-slate-600">
                        Trusted by RTA executives, design leaders, and teams
                    </p>
                </div>

                {/* Carousel Container */}
                <div className="relative max-w-5xl mx-auto">

                    {/* Testimonial Card */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="relative bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-[32px] p-8 md:p-12 shadow-2xl overflow-hidden border border-slate-700/50"
                        >
                            {/* Background Decor */}
                            <div className="absolute top-0 right-0 p-40 bg-blue-500/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
                            <div className="absolute bottom-0 left-0 p-32 bg-amber-500/5 rounded-full blur-3xl -ml-16 -mb-16 pointer-events-none"></div>

                            <div className="relative z-10 flex flex-col lg:flex-row gap-12 lg:items-center">

                                {/* Left: Text Content */}
                                <div className="flex-1 space-y-8">
                                    {current.badge && (
                                        <div className="inline-block bg-amber-500/20 border border-amber-500/30 rounded px-3 py-1">
                                            <span className="text-xs font-bold text-amber-400 uppercase tracking-wide font-display">
                                                {current.badge}
                                            </span>
                                        </div>
                                    )}

                                    <div>
                                        <Quote className="w-10 h-10 text-amber-500 mb-6 opacity-80" />
                                        <p className="text-xl md:text-3xl font-medium leading-relaxed text-slate-100 font-display tracking-tight">
                                            "{current.quote}"
                                        </p>
                                    </div>

                                    <div className="pt-4 border-t border-slate-700/50">
                                        <div className="text-xl font-bold font-display text-white">{current.name}</div>
                                        <div className="text-blue-200 font-medium mt-1">{current.title}</div>
                                        <div className="text-sm text-slate-400 uppercase tracking-wide mt-1">{current.company}</div>
                                        {current.link && (
                                            <a href="#" className="mt-4 inline-flex items-center text-sm font-semibold text-amber-400 hover:text-amber-300 transition-colors">
                                                {current.link}
                                            </a>
                                        )}
                                    </div>
                                </div>

                                {/* Right: Image */}
                                <div className="shrink-0 relative mx-auto lg:mx-0">
                                    <div className="w-48 h-48 md:w-64 md:h-64 rounded-full lg:rounded-2xl overflow-hidden border-4 border-slate-700/50 shadow-2xl bg-slate-800 flex items-center justify-center relative z-10 group">
                                        {/* Placeholder Professional Avatar */}
                                        <img
                                            src={current.isFeatured
                                                ? "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=300&auto=format&fit=crop"
                                                : `https://api.dicebear.com/7.x/avataaars/svg?seed=${current.id}&backgroundColor=b6e3f4`
                                            }
                                            alt={current.name}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    </div>
                                    {/* Decorative Circle behind */}
                                    <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/20 to-amber-500/20 rounded-full lg:rounded-[2rem] blur-xl opacity-50 z-0"></div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Arrows */}
                    <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none px-4 lg:-mx-16">
                        <button
                            onClick={prevTestimonial}
                            className="pointer-events-auto w-12 h-12 rounded-full bg-white border-2 border-slate-200 shadow-lg flex items-center justify-center hover:border-[#4169E1] hover:bg-blue-50 transition-all duration-300 group"
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeft className="w-6 h-6 text-slate-600 group-hover:text-[#4169E1]" />
                        </button>

                        <button
                            onClick={nextTestimonial}
                            className="pointer-events-auto w-12 h-12 rounded-full bg-white border-2 border-slate-200 shadow-lg flex items-center justify-center hover:border-[#4169E1] hover:bg-blue-50 transition-all duration-300 group"
                            aria-label="Next testimonial"
                        >
                            <ChevronRight className="w-6 h-6 text-slate-600 group-hover:text-[#4169E1]" />
                        </button>
                    </div>

                    {/* Dots Indicator */}
                    <div className="flex justify-center gap-2 mt-8">
                        {TESTIMONIALS.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex
                                        ? 'w-8 bg-[#4169E1]'
                                        : 'w-2 bg-slate-300 hover:bg-slate-400'
                                    }`}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* LinkedIn Link */}
                <div className="mt-16 text-center">
                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center px-6 py-3 border border-slate-200 rounded-full text-sm font-semibold font-display text-slate-600 hover:text-blue-600 hover:border-blue-200 hover:bg-slate-50 transition-colors"
                    >
                        View All Recommendations on LinkedIn <span className="ml-2">→</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;