import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FEATURED_CASE_STUDIES } from '../constants';
import { FeaturedCaseStudy } from '../types';

const ProjectImageContent: React.FC<{ project: FeaturedCaseStudy }> = ({ project }) => {
    if (project.imageUrl) {
        return (
            <img
                src={project.imageUrl}
                alt={project.imageAlt}
                className="w-full h-full object-cover"
            />
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
    const projectsToShow = FEATURED_CASE_STUDIES.slice(0, 4);

    const getBgGradient = (id: number) => {
        switch (id) {
            case 1: return "from-blue-100 to-indigo-100";
            case 3: return "from-teal-50 to-cyan-100";
            case 2: return "from-stone-100 to-amber-50";
            case 4: return "from-indigo-100 to-slate-200";
            default: return "from-slate-100 to-slate-200";
        }
    };

    return (
        <section className="pt-4 pb-4 md:pt-10 md:pb-10 bg-white overflow-hidden">
            <div className="max-w-[1280px] mx-auto px-5 md:px-6 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projectsToShow.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            onClick={() => navigate(project.ctaLink)}
                            className="group bg-white border border-[#E5E7EB] rounded-2xl overflow-hidden cursor-pointer transition-shadow duration-300 hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)]"
                        >
                            {/* Image Area */}
                            <div className={`relative h-[250px] md:h-[320px] bg-gradient-to-br ${getBgGradient(project.id)} overflow-hidden`}>
                                <ProjectImageContent project={project} />
                            </div>

                            {/* Text Area */}
                            <div className="p-6">
                                <h3 className="text-[20px] font-semibold text-[#1A1D23] mb-2 group-hover:text-[#4169E1] transition-colors">
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

                                <span className="text-sm font-medium text-[#4169E1] hover:underline">
                                    View Case Study →
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsGrid;
