import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
    // Show all 3 for desktop grid
    const desktopTestimonials = TESTIMONIALS.slice(0, 3);

    const getInitials = (name: string) => {
        return name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase();
    };

    return (
        <section className="py-16 md:py-24 bg-[#F8F9FA] overflow-hidden" id="testimonials">
            <div className="max-w-[1280px] mx-auto px-5 md:px-6 lg:px-12">

                {/* Section Header */}
                <div className="max-w-3xl mb-12 md:mb-16">
                    <h2 className="text-[32px] md:text-4xl font-bold font-display text-slate-900 tracking-tight mb-4">
                        What Leaders Say
                    </h2>
                    <div className="h-1.5 w-20 bg-[#4169E1] rounded-full"></div>
                </div>

                {/* ===== MODERN STATIC GRID (Desktop & Mobile) ===== */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {desktopTestimonials.map((testimonial, idx) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className={`group bg-white border border-slate-100 p-8 rounded-[32px] hover:shadow-2xl hover:shadow-[#4169E1]/5 transition-all duration-500 flex flex-col h-full relative ${idx === 0 ? 'border-l-[6px] border-l-[#F59E0B]' : 'border-l-[6px] border-l-[#4169E1]'
                                }`}
                        >
                            <Quote className="absolute top-8 right-8 w-12 h-12 text-[#4169E1]/5 group-hover:text-[#4169E1]/10 transition-colors" />

                            <div className="flex-1 relative z-10">
                                {testimonial.badge && (
                                    <div className="inline-block px-3 py-1 bg-amber-50 text-[#F59E0B] text-[10px] font-bold rounded-full uppercase tracking-wider mb-6 border border-[#F59E0B]/10">
                                        {testimonial.badge}
                                    </div>
                                )}

                                <p className="text-[15px] md:text-[16px] text-[#4B5563] leading-relaxed font-normal italic mb-10">
                                    "{testimonial.quote}"
                                </p>
                            </div>

                            <div className="flex items-center gap-4 mt-auto">
                                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 shadow-sm ${idx === 0 ? 'bg-amber-100 text-[#F59E0B]' : 'bg-[#E8F0FE] text-[#4169E1]'
                                    } group-hover:bg-[#4169E1] group-hover:text-white`}>
                                    {getInitials(testimonial.name)}
                                </div>
                                <div>
                                    <div className="font-bold text-[#111827] text-[15px] group-hover:text-[#4169E1] transition-colors leading-tight">
                                        {testimonial.name}
                                    </div>
                                    <div className="text-[13px] text-[#6B7280] font-medium leading-tight mt-1">
                                        {testimonial.title}
                                    </div>
                                    {testimonial.company && (
                                        <div className="text-[11px] text-[#4169E1] font-bold uppercase tracking-wider mt-1.5 opacity-80">
                                            {testimonial.company}
                                        </div>
                                    )}
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