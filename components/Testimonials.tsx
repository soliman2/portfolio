import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
    const [mobileIndex, setMobileIndex] = useState(0);

    const nextMobile = () => {
        setMobileIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    };

    const prevMobile = () => {
        setMobileIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
    };

    // Pick the 3 strongest testimonials for the desktop row
    const desktopTestimonials = TESTIMONIALS.slice(0, 3);
    const currentMobileTestimonial = TESTIMONIALS[mobileIndex];

    return (
        <section className="pt-4 pb-4 md:py-10 bg-[#F9FAFB] overflow-hidden" id="testimonials">
            <div className="max-w-[1280px] mx-auto px-5 md:px-6 lg:px-12">

                {/* Section Header */}
                <div className="mb-8 md:mb-12">
                    <h2 className="text-[28px] md:text-4xl font-bold font-display text-slate-900 tracking-tight">
                        What Leaders Say
                    </h2>
                </div>

                {/* ===== MOBILE: Single centered quote ===== */}
                <div className="md:hidden">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={`mobile-${mobileIndex}`}
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -30 }}
                            transition={{ duration: 0.3 }}
                            className="text-center px-2"
                        >
                            <Quote className="w-6 h-6 text-[#4169E1]/30 mx-auto mb-4" />
                            <p className="text-base text-slate-700 leading-relaxed italic mb-4">
                                "{currentMobileTestimonial.quote}"
                            </p>
                            <div className="font-bold text-slate-900 text-sm">
                                {currentMobileTestimonial.name}
                            </div>
                            <div className="text-xs text-[#4169E1] font-medium mt-0.5">
                                {currentMobileTestimonial.title}
                            </div>
                            <div className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider mt-1">
                                {currentMobileTestimonial.company}
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Dot indicators + nav buttons */}
                    <div className="flex items-center justify-center gap-4 mt-6">
                        <button
                            onClick={prevMobile}
                            className="p-2 rounded-full border border-slate-200 bg-white text-slate-500"
                            aria-label="Previous"
                        >
                            <ChevronLeft className="w-4 h-4" />
                        </button>
                        <div className="flex gap-1.5">
                            {TESTIMONIALS.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setMobileIndex(idx)}
                                    className={`w-2 h-2 rounded-full transition-colors ${idx === mobileIndex ? 'bg-[#4169E1]' : 'bg-slate-300'}`}
                                    aria-label={`Go to testimonial ${idx + 1}`}
                                />
                            ))}
                        </div>
                        <button
                            onClick={nextMobile}
                            className="p-2 rounded-full border border-slate-200 bg-white text-slate-500"
                            aria-label="Next"
                        >
                            <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                {/* ===== DESKTOP: 3 quotes in one row, text-only with left border accent ===== */}
                <div className="hidden md:grid md:grid-cols-3 gap-8">
                    {desktopTestimonials.map((testimonial, idx) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: idx * 0.1 }}
                            className="border-l-[3px] border-[#4169E1] pl-6"
                        >
                            <p className="text-[15px] text-[#6B7280] leading-relaxed italic mb-4">
                                "{testimonial.quote}"
                            </p>
                            <div className="text-sm font-semibold text-[#1A1D23]">
                                {testimonial.name}
                            </div>
                            <div className="text-[13px] text-[#9CA3AF] mt-0.5">
                                {testimonial.title}, {testimonial.company}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;