import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, BadgeCheck, GraduationCap } from 'lucide-react';

interface Certificate {
    id: number;
    title: string;
    organization: string;
    year: string;
    badgeType: 'AWARD' | 'EXCELLENCE' | 'CERTIFICATE' | 'NANODEGREE';
    gradientClass: string;
    icon: 'trophy' | 'award' | 'badge' | 'graduation';
}

const CERTIFICATES: Certificate[] = [
    {
        id: 1,
        title: "AI & Data Science Recognition",
        organization: "RTA Dubai",
        year: "2025",
        badgeType: "AWARD",
        gradientClass: "bg-gradient-to-br from-amber-100 to-amber-200",
        icon: "trophy"
    },
    {
        id: 2,
        title: "Excellence in Innovation",
        organization: "RTA Dubai",
        year: "2024",
        badgeType: "EXCELLENCE",
        gradientClass: "bg-gradient-to-br from-pink-100 to-pink-200",
        icon: "award"
    },
    {
        id: 3,
        title: "Generative AI Professional",
        organization: "Google Cloud",
        year: "2024",
        badgeType: "CERTIFICATE",
        gradientClass: "bg-gradient-to-br from-blue-100 to-blue-200",
        icon: "badge"
    },
    {
        id: 4,
        title: "UX Research Nanodegree",
        organization: "Udacity",
        year: "2023",
        badgeType: "NANODEGREE",
        gradientClass: "bg-gradient-to-br from-emerald-100 to-emerald-200",
        icon: "graduation"
    },
    {
        id: 5,
        title: "Design Systems Specialist",
        organization: "Interaction Design Foundation",
        year: "2023",
        badgeType: "CERTIFICATE",
        gradientClass: "bg-gradient-to-br from-purple-100 to-purple-200",
        icon: "badge"
    },
    {
        id: 6,
        title: "Product Design Certification",
        organization: "Nielsen Norman Group",
        year: "2022",
        badgeType: "CERTIFICATE",
        gradientClass: "bg-gradient-to-br from-indigo-100 to-indigo-200",
        icon: "graduation"
    }
];

const BADGE_STYLES = {
    AWARD: "bg-amber-100 text-amber-800",
    EXCELLENCE: "bg-pink-100 text-pink-800",
    CERTIFICATE: "bg-blue-100 text-blue-800",
    NANODEGREE: "bg-emerald-100 text-emerald-800"
};

const CredentialsRecognition: React.FC = () => {

    const getIcon = (iconType: string) => {
        const iconProps = { className: "w-12 h-12 text-slate-700 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" };

        switch (iconType) {
            case 'trophy':
                return <Trophy {...iconProps} />;
            case 'award':
                return <Award {...iconProps} />;
            case 'badge':
                return <BadgeCheck {...iconProps} />;
            case 'graduation':
                return <GraduationCap {...iconProps} />;
            default:
                return <Award {...iconProps} />;
        }
    };

    return (
        <section className="py-20 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
            <div className="max-w-[1200px] mx-auto px-6 lg:px-12 relative z-10">

                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="text-xs font-semibold text-[#4169E1] uppercase tracking-[2px] mb-3">
                        VERIFIED
                    </div>
                    <h2 className="text-4xl font-bold text-[#1A1D23]">
                        Credentials & Recognition
                    </h2>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
                    {CERTIFICATES.map((cert, index) => (
                        <motion.div
                            key={cert.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group w-full max-w-[280px] bg-white rounded-[20px] p-6 shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)] hover:-translate-y-1.5 transition-all duration-300 cursor-pointer"
                        >
                            {/* Image Area with Gradient Background */}
                            <div className={`w-full h-[140px] ${cert.gradientClass} rounded-xl flex items-center justify-center mb-5`}>
                                {getIcon(cert.icon)}
                            </div>

                            {/* Certificate Title */}
                            <h3 className="text-base font-semibold text-[#1A1D23] text-center leading-snug mb-3 min-h-[44px]">
                                {cert.title}
                            </h3>

                            {/* Organization + Year Row */}
                            <div className="flex items-center justify-center gap-2 mb-4">
                                <span className="text-[13px] font-medium text-slate-600">
                                    {cert.organization}
                                </span>
                                <span className="text-[13px] font-medium text-slate-400">
                                    • {cert.year}
                                </span>
                            </div>

                            {/* Badge */}
                            <div className="flex justify-center">
                                <span className={`inline-block px-3.5 py-1.5 rounded-md text-[11px] font-semibold uppercase tracking-wider ${BADGE_STYLES[cert.badgeType]} transition-transform duration-200 group-hover:scale-105`}>
                                    {cert.badgeType}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CredentialsRecognition;
