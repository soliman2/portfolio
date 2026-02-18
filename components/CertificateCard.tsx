import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Maximize2, X } from 'lucide-react';

interface CertificateCardProps {
    title: string;
    description: string;
    issuer: string;
    date: string;
    imageSrc: string;
    isGitex?: boolean;
}

const CertificateCard: React.FC<CertificateCardProps> = ({
    title,
    description,
    issuer,
    date,
    imageSrc,
    isGitex = false
}) => {
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group relative bg-white border border-slate-100 rounded-[32px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
            >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden bg-slate-100">
                    <img
                        src={imageSrc}
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/20 transition-colors duration-500" />

                    {/* Floating Badge */}
                    {isGitex && (
                        <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 bg-[#F59E0B] text-white rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg">
                            <Award className="w-3 h-3" />
                            GITEX 2025
                        </div>
                    )}

                    {/* Expand Button */}
                    <button
                        onClick={() => setIsLightboxOpen(true)}
                        className="absolute bottom-4 right-4 p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0"
                    >
                        <Maximize2 className="w-4 h-4 text-slate-900" />
                    </button>
                </div>

                {/* Content */}
                <div className="p-8">
                    <div className="text-[10px] font-bold text-[#4169E1] uppercase tracking-[0.2em] mb-3">
                        {date}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4 leading-snug group-hover:text-[#4169E1] transition-colors">
                        {title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed mb-6 line-clamp-3">
                        {description}
                    </p>
                    <div className="pt-6 border-t border-slate-50 flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                            {issuer}
                        </span>
                        <Award className="w-5 h-5 text-slate-200" />
                    </div>
                </div>
            </motion.div>

            {/* Lightbox */}
            <AnimatePresence>
                {isLightboxOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/95 backdrop-blur-md"
                        onClick={() => setIsLightboxOpen(false)}
                    >
                        <button
                            className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
                            onClick={() => setIsLightboxOpen(false)}
                        >
                            <X className="w-8 h-8" />
                        </button>
                        <motion.img
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            src={imageSrc}
                            alt={title}
                            className="max-w-full max-h-[90vh] rounded-xl shadow-2xl object-contain"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default CertificateCard;
