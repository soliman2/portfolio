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

    // Pick top 3 for desktop
    const desktopTestimonials = TESTIMONIALS.slice(0, 3);
    const currentMobileTestimonial = TESTIMONIALS[mobileIndex];

    const getInitials = (name: string) => {
        return name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase();
    };

    return (
        <section className="py-16 md:py-24 bg-white overflow-hidden" id="testimonials">
            <div className="max-w-[1280px] mx-auto px-5 md:px-6 lg:px-12">

                {/* Section Header */}
                <div className="max-w-3xl mb-12 md:mb-16">
                    <h2 className="text-[32px] md:text-4xl font-bold font-display text-slate-900 tracking-tight mb-4">
                        What Leaders Say
                    </h2>
                    <div className="h-1.5 w-20 bg-[#4169E1] rounded-full"></div>
                </div>

                {/* ===== MOBILE: Card slider ===== */}
                <div className="md:hidden">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={`mobile-${mobileIndex}`}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.3 }}
                            className="bg-slate-50 border border-slate-100 p-8 rounded-[32px] relative"
                        >
                            <Quote className="absolute top-6 right-8 w-12 h-12 text-[#4169E1]/10" />

                            {currentMobileTestimonial.badge && (
                                <div className="inline-block px-3 py-1 bg-[#E8F0FE] text-[#4169E1] text-[10px] font-bold rounded-full uppercase tracking-wider mb-6 border border-[#4169E1]/10">
                                    {currentMobileTestimonial.badge}
                                </div>
                            )}

                            <p className="text-[16px] text-slate-700 leading-relaxed font-medium italic mb-8 relative z-10">
                                "{currentMobileTestimonial.quote}"
                            </p>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#4169E1] to-blue-700 text-white flex items-center justify-center font-bold text-sm shadow-lg shadow-blue-500/20">
                                    {getInitials(currentMobileTestimonial.name)}
                                </div>
                                <div>
                                    <div className="font-bold text-slate-900 text-[15px]">
                                        {currentMobileTestimonial.name}
                                    </div>
                                    <div className="text-[13px] text-slate-500 font-medium leading-tight mt-0.5">
                                        {currentMobileTestimonial.title}
                                    </div>
                                    <div className="text-[11px] text-[#4169E1] font-bold uppercase tracking-wider mt-1">
                                        {currentMobileTestimonial.company}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Dot indicators + nav buttons */}
                    <div className="flex items-center justify-center gap-4 mt-10">
                        <button
                            onClick={prevMobile}
                            className="p-3 rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm active:scale-90 transition-transform"
                            aria-label="Previous"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <div className="flex gap-2">
                            {TESTIMONIALS.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setMobileIndex(idx)}
                                    className={`h-2 rounded-full transition-all duration-300 ${idx === mobileIndex ? 'w-6 bg-[#4169E1]' : 'w-2 bg-slate-300'}`}
                                    aria-label={`Go to testimonial ${idx + 1}`}
                                />
                            ))}
                        </div>
                        <button
                            onClick={nextMobile}
                            className="p-3 rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm active:scale-90 transition-transform"
                            aria-label="Next"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* ===== DESKTOP: Modern cards ===== */}
                <div className="hidden md:grid md:grid-cols-3 gap-8">
                    {desktopTestimonials.map((testimonial, idx) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.15 }}
                            className="group bg-slate-50 border border-slate-100 p-8 rounded-[32px] hover:bg-white hover:border-[#4169E1]/20 hover:shadow-2xl hover:shadow-[#4169E1]/5 transition-all duration-500 flex flex-col h-full relative"
                        >
                            <Quote className="absolute top-8 right-8 w-12 h-12 text-[#4169E1]/10 group-hover:text-[#4169E1]/20 transition-colors" />

                            <div className="flex-1 relative z-10">
                                {testimonial.badge && (
                                    <div className="inline-block px-3 py-1 bg-[#E8F0FE] text-[#4169E1] text-[10px] font-bold rounded-full uppercase tracking-wider mb-6 border border-[#4169E1]/10">
                                        {testimonial.badge}
                                    </div>
                                )}

                                <p className="text-[16px] text-slate-700 leading-relaxed font-medium italic mb-10">
                                    "{testimonial.quote}"
                                </p>
                            </div>

                            <div className="flex items-center gap-4 mt-auto">
                                <div className="w-12 h-12 rounded-full bg-slate-200 group-hover:bg-[#4169E1] group-hover:text-white flex items-center justify-center font-bold text-sm text-slate-600 transition-all duration-300 shadow-sm">
                                    {getInitials(testimonial.name)}
                                </div>
                                <div>
                                    <div className="font-bold text-slate-900 text-[15px] group-hover:text-[#4169E1] transition-colors leading-tight">
                                        {testimonial.name}
                                    </div>
                                    <div className="text-[13px] text-slate-500 font-medium leading-tight mt-1">
                                        {testimonial.title}
                                    </div>
                                    <div className="text-[11px] text-[#4169E1] font-bold uppercase tracking-wider mt-1.5 opacity-80">
                                        {testimonial.company}
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

export default Testimonials;