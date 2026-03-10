import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

interface CertificateCard {
    id: number;
    imageSrc: string;
    imageAlt: string;
    badgeEmoji: string;
    badgeText: string;
    badgeBg: string;
    badgeColor: string;
    title: string;
    description: string;
}

const cards: CertificateCard[] = [
    {
        id: 1,
        imageSrc: '/certificate 1.jpeg',
        imageAlt: 'Certificate of Appreciation from RTA AI & Data Science Center',
        badgeEmoji: '🏆',
        badgeText: 'AI & Data Science Center',
        badgeBg: '#FEF3C7',
        badgeColor: '#92400E',
        title: 'Certificate of Appreciation — Innovation Impact',
        description:
            'Official recognition from RTA\'s AI & Data Science Center for outstanding contributions to AI-powered dashboards and innovation excellence.',
    },
    {
        id: 2,
        imageSrc: '/Gitex Certificate.jpg',
        imageAlt: 'Certificate of Appreciation for GITEX Dubai 2025',
        badgeEmoji: '🎪',
        badgeText: 'GITEX Dubai 2025',
        badgeBg: '#E8F0FE',
        badgeColor: '#4169E1',
        title: 'Certificate of Appreciation — GITEX 2025 Showcase',
        description:
            "Recognized for outstanding contributions to RTA's successful participation at GITEX Global 2025 — the world's largest tech exhibition.",
    },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: 'easeOut' },
    },
};

const Recognition: React.FC = () => {
    const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

    const openLightbox = (src: string) => {
        setLightboxSrc(src);
    };

    const closeLightbox = useCallback(() => {
        setLightboxSrc(null);
    }, []);

    // Close lightbox on Escape key
    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') closeLightbox();
        };
        if (lightboxSrc) {
            document.addEventListener('keydown', handleKey);
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.removeEventListener('keydown', handleKey);
            document.body.style.overflow = '';
        };
    }, [lightboxSrc, closeLightbox]);

    return (
        <>
            <section
                id="recognition"
                style={{ backgroundColor: '#F8F9FA' }}
                className="py-12 md:py-20"
            >
                <div className="max-w-[1280px] mx-auto px-5 md:px-6 lg:px-12">
                    {/* Section Header */}
                    <div className="text-center mb-6">
                        <motion.h2
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            style={{
                                fontSize: '40px',
                                fontWeight: 600,
                                color: '#1A1D23',
                                lineHeight: 1.2,
                            }}
                            className="mb-3"
                        >
                            Recognition
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            style={{ color: '#6B7280', fontSize: '16px' }}
                            className="max-w-xl mx-auto"
                        >
                            Official appreciation for AI product delivery and innovation at RTA Dubai
                        </motion.p>
                    </div>

                    {/* Cards Grid */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-60px' }}
                        className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
                    >
                        {cards.map((card) => (
                            <motion.article
                                key={card.id}
                                variants={cardVariants}
                                onClick={() => openLightbox(card.imageSrc)}
                                className="group cursor-pointer"
                                style={{
                                    background: '#FFFFFF',
                                    border: '1px solid #E5E7EB',
                                    borderRadius: '16px',
                                    overflow: 'hidden',
                                    boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
                                    transition: 'box-shadow 300ms ease, transform 300ms ease',
                                }}
                                whileHover={{
                                    y: -4,
                                    boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                {/* Certificate Image */}
                                <div
                                    style={{
                                        position: 'relative',
                                        width: '100%',
                                        overflow: 'hidden',
                                        borderRadius: '16px 16px 0 0',
                                    }}
                                >
                                    <img
                                        src={card.imageSrc}
                                        alt={card.imageAlt}
                                        style={{
                                            width: '100%',
                                            height: 'auto',
                                            display: 'block',
                                        }}
                                        loading="lazy"
                                    />
                                    {/* Subtle gradient overlay at bottom */}
                                    <div
                                        style={{
                                            position: 'absolute',
                                            bottom: 0,
                                            left: 0,
                                            right: 0,
                                            height: '48px',
                                            background:
                                                'linear-gradient(to bottom, transparent, rgba(0,0,0,0.03))',
                                            pointerEvents: 'none',
                                        }}
                                    />
                                </div>

                                {/* Card Body */}
                                <div
                                    className="p-5 md:p-6"
                                    style={{ padding: '24px' }}
                                >
                                    {/* Badge */}
                                    <span
                                        style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '4px',
                                            backgroundColor: card.badgeBg,
                                            color: card.badgeColor,
                                            borderRadius: '6px',
                                            fontSize: '12px',
                                            fontWeight: 500,
                                            padding: '3px 8px',
                                        }}
                                    >
                                        {card.badgeEmoji} {card.badgeText}
                                    </span>

                                    {/* Title */}
                                    <h4
                                        style={{
                                            fontSize: '20px',
                                            fontWeight: 600,
                                            color: '#1A1D23',
                                            marginTop: '12px',
                                            marginBottom: '8px',
                                            lineHeight: 1.3,
                                        }}
                                    >
                                        {card.title}
                                    </h4>

                                    {/* Description */}
                                    <p
                                        style={{
                                            fontSize: '14px',
                                            color: '#6B7280',
                                            lineHeight: 1.5,
                                            margin: 0,
                                        }}
                                    >
                                        {card.description}
                                    </p>
                                </div>
                            </motion.article>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Lightbox Overlay */}
            {lightboxSrc && (
                <div
                    onClick={closeLightbox}
                    style={{
                        position: 'fixed',
                        inset: 0,
                        zIndex: 9999,
                        backgroundColor: 'rgba(0,0,0,0.8)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '24px',
                    }}
                >
                    {/* Close button */}
                    <button
                        onClick={closeLightbox}
                        aria-label="Close lightbox"
                        style={{
                            position: 'absolute',
                            top: '20px',
                            right: '20px',
                            background: 'rgba(255,255,255,0.15)',
                            border: 'none',
                            borderRadius: '50%',
                            width: '44px',
                            height: '44px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            color: '#fff',
                            backdropFilter: 'blur(4px)',
                            transition: 'background 200ms ease',
                        }}
                        onMouseOver={(e) =>
                        ((e.currentTarget as HTMLButtonElement).style.background =
                            'rgba(255,255,255,0.25)')
                        }
                        onMouseOut={(e) =>
                        ((e.currentTarget as HTMLButtonElement).style.background =
                            'rgba(255,255,255,0.15)')
                        }
                    >
                        <X size={22} />
                    </button>

                    {/* Certificate image */}
                    <img
                        src={lightboxSrc}
                        alt="Certificate"
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            maxWidth: '90vw',
                            maxHeight: '90vh',
                            objectFit: 'contain',
                            borderRadius: '12px',
                            boxShadow: '0 24px 64px rgba(0,0,0,0.5)',
                        }}
                    />
                </div>
            )}
        </>
    );
};

export default Recognition;
