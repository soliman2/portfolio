import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';
import { FEATURED_CASE_STUDIES } from '../constants';
import { FeaturedCaseStudy } from '../types';

const ProjectImageContent: React.FC<{ project: FeaturedCaseStudy }> = ({ project }) => {
    if (project.imageUrl || project.id === 6) {
        return (
            <div className="relative w-full h-full">
                {project.imageUrl ? (
                    <img
                        src={project.imageUrl}
                        alt={project.imageAlt}
                        className="w-full h-full object-cover"
                    />
                ) : project.id === 6 ? (
                    <div className="w-full h-full bg-gradient-to-br from-[#F8F9FA] to-[#EDE9FE] flex items-center justify-center p-12">
                        <div className="relative w-full max-w-[280px]">
                            {/* Visual suggesting research - layered mockups/stickies */}
                            <div className="absolute top-0 right-0 w-32 h-40 bg-white rounded-lg shadow-lg border border-slate-100 rotate-6 transform translate-x-4"></div>
                            <div className="absolute top-4 left-0 w-32 h-40 bg-white rounded-lg shadow-lg border border-slate-100 -rotate-3 transform -translate-x-4 flex items-center justify-center">
                                <div className="w-16 h-1 w-1/2 bg-slate-100 rounded-full mb-2"></div>
                                <div className="w-12 h-1 w-1/3 bg-slate-100 rounded-full mb-2"></div>
                            </div>
                            <div className="relative z-10 w-full aspect-[4/3] bg-white rounded-xl shadow-2xl border border-slate-200 p-4">
                                <div className="space-y-3">
                                    <div className="flex gap-2">
                                        <div className="w-8 h-8 rounded-full bg-[#EDE9FE] border-2 border-[#7C3AED]/20"></div>
                                        <div className="flex-1 space-y-2">
                                            <div className="h-2 bg-slate-100 rounded-full w-3/4"></div>
                                            <div className="h-2 bg-slate-50 rounded-full w-1/2"></div>
                                        </div>
                                    </div>
                                    <div className="h-24 bg-slate-50 rounded-lg flex items-center justify-center">
                                        <div className="w-10 h-10 rounded-full bg-[#7C3AED]/10 flex items-center justify-center">
                                            <div className="w-4 h-4 rounded-full bg-[#7C3AED]/40"></div>
                                        </div>
                                    </div>
                                </div>
                                {/* Annotation Marker */}
                                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white text-[10px] font-bold shadow-lg ring-4 ring-white">1</div>
                            </div>
                        </div>
                    </div>
                ) : null}

                {project.gitexBadge && (
                    <div className="absolute bottom-4 right-4 z-10 flex items-center h-[52px] gap-2.5 px-4 bg-white shadow-xl border border-white/50 ring-1 ring-black/5 rounded-2xl scale-90 origin-bottom-right backdrop-blur-md">
                        <img
                            src="/Gitex-Global-2025-_-GCS.jpg"
                            alt="GITEX Logo"
                            className="h-7 w-auto object-contain"
                        />
                        <div className="w-px h-6 bg-slate-200"></div>
                        <span className="text-[10px] font-extrabold text-slate-800 uppercase tracking-wider">Showcased on GITEX</span>
                    </div>
                )}

                {project.customBadges && (
                    <div className="absolute inset-0 flex items-end justify-center p-6 bg-gradient-to-t from-black/20 to-transparent">
                        <div className="flex flex-wrap justify-center gap-2">
                            {project.customBadges.map((badge, i) => (
                                <span key={i} className="px-3 py-1 bg-white/95 backdrop-blur-sm rounded-full text-[10px] font-bold text-slate-800 shadow-sm border border-white/50">
                                    {badge}
                                </span>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        );
    }

    // Default Fallbacks
    if (project.id === 3) { // Beach Locker (id 3 in constants)
        return (
            <div className="w-full h-full flex items-center justify-center relative">
                <div className="absolute inset-0 opacity-[0.04]" style={{
                    backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 39px, #0D9488 39px, #0D9488 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, #0D9488 39px, #0D9488 40px)',
                }} />
                <div className="relative z-10 text-center p-6">
                    <div className="flex justify-center gap-2 mb-3">
                        {['Discovery', 'Booking', 'Payment', 'Usage'].map((phase, i) => (
                            <div key={i} className="px-3 py-2 bg-white rounded-lg shadow-sm border border-teal-100 text-xs font-bold text-teal-700">{phase}</div>
                        ))}
                    </div>
                    <div className="inline-flex items-center gap-2 bg-[#2B3544] text-white px-4 py-2 rounded-full text-sm font-bold">
                        <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
                        Service Blueprint
                    </div>
                </div>
            </div>
        );
    }

    if (project.id === 4) { // 360 Gov (id 4 in constants)
        return (
            <div className="w-full h-full flex items-center justify-center relative">
                <div className="absolute inset-0 opacity-[0.03]" style={{
                    backgroundImage: 'radial-gradient(#4169E1 1.5px, transparent 1.5px)',
                    backgroundSize: '24px 24px'
                }} />
                <div className="relative z-10 text-center p-6">
                    <div className="flex flex-col items-center gap-3">
                        <div className="flex gap-3">
                            {['Citizen App', 'Corp Dashboard'].map((label, i) => (
                                <div key={i} className="px-4 py-2.5 bg-white rounded-xl shadow-sm border border-indigo-100 text-xs font-bold text-indigo-700">{label}</div>
                            ))}
                        </div>
                        <div className="w-px h-4 bg-indigo-300"></div>
                        <div className="px-4 py-2.5 bg-indigo-600 text-white rounded-xl text-xs font-bold shadow-md">Back-Office</div>
                    </div>
                </div>
            </div>
        );
    }

    return null;
};

const ProjectsGrid: React.FC = () => {
    const navigate = useNavigate();
    // Use first 4 from constants for the grid
    const projectsToShow = FEATURED_CASE_STUDIES.slice(0, 6);

    const getBgGradient = (id: number) => {
        switch (id) {
            case 1: return "from-blue-100 to-indigo-100";
            case 3: return "from-teal-50 to-cyan-100";
            case 2: return "from-stone-100 to-amber-50";
            case 4: return "from-indigo-100 to-slate-200";
            case 6: return "from-slate-50 to-purple-50";
            default: return "from-slate-100 to-slate-200";
        }
    };

    return (
        <section className="pt-4 pb-4 md:pt-10 md:pb-10 bg-white overflow-hidden">
            <div className="max-w-[1280px] mx-auto px-5 md:px-6 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projectsToShow.map((project, index) => (
                        <Link
                            key={project.id}
                            to={project.ctaLink}
                            className="group bg-white border border-[#E5E7EB] rounded-2xl overflow-hidden cursor-pointer transition-shadow duration-300 hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] block"
                        >
                            {/* Image Area */}
                            <div className={`relative h-[250px] md:h-[320px] bg-gradient-to-br ${getBgGradient(project.id)} overflow-hidden`}>
                                <ProjectImageContent project={project} />
                            </div>

                            {/* Text Area */}
                            <div className="p-6">
                                {project.id === 6 ? (
                                    <div className="inline-block px-2 py-1 bg-[#EDE9FE] text-[#7C3AED] text-[10px] font-bold rounded-md uppercase tracking-wider mb-3">
                                        UX Research
                                    </div>
                                ) : (
                                    <div className="inline-block px-2 py-1 bg-blue-50 text-[#4169E1] text-[10px] font-bold rounded-md uppercase tracking-wider mb-3">
                                        {project.category}
                                    </div>
                                )}
                                <h3 className="text-[20px] font-semibold text-[#1A1D23] mb-2 group-hover:text-[#4169E1] transition-colors line-clamp-1">
                                    {project.headline}
                                </h3>
                                <p className="text-sm text-[#6B7280] leading-relaxed line-clamp-3 mb-4">
                                    {project.valueStatement}
                                </p>

                                {project.id === 1 && (
                                    <div className="flex items-center gap-4 py-4 mb-4 border-y border-[#E5E7EB]">
                                        <div className="flex flex-col">
                                            <span className="text-[18px] font-bold text-[#1A1D23]">93%</span>
                                            <span className="text-[11px] font-bold text-[#9CA3AF] uppercase">Faster</span>
                                        </div>
                                        <div className="w-px h-8 bg-[#E5E7EB]"></div>
                                        <div className="flex flex-col">
                                            <span className="text-[18px] font-bold text-[#1A1D23]">5d→8h</span>
                                            <span className="text-[11px] font-bold text-[#9CA3AF] uppercase">Reduction</span>
                                        </div>
                                        <div className="w-px h-8 bg-[#E5E7EB]"></div>
                                        <div className="flex flex-col">
                                            <span className="text-[18px] font-bold text-[#1A1D23]">GITEX</span>
                                            <span className="text-[11px] font-bold text-[#9CA3AF] uppercase">Showcase</span>
                                        </div>
                                    </div>
                                )}
                                {project.id === 6 && (
                                    <div className="flex items-center gap-3 mb-4">
                                        {project.stats.map((stat, i) => (
                                            <React.Fragment key={i}>
                                                <span className="text-[12px] text-[#6B7280] font-medium">{stat.value} {stat.label}</span>
                                                {i < project.stats.length - 1 && <span className="text-slate-300">•</span>}
                                            </React.Fragment>
                                        ))}
                                    </div>
                                )}

                                <span className="text-sm font-medium text-[#4169E1] group-hover:underline">
                                    View Case Study →
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsGrid;
