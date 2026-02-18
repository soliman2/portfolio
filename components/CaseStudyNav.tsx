import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { FEATURED_CASE_STUDIES } from '../constants';

interface CaseStudyNavProps {
    currentId: number;
}

const CaseStudyNav: React.FC<CaseStudyNavProps> = ({ currentId }) => {
    // Get the active projects in order
    const projects = FEATURED_CASE_STUDIES.filter(p => [1, 2, 3, 4, 5].includes(p.id));
    const currentIndex = projects.findIndex(p => p.id === currentId);

    const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
    const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

    if (!prevProject && !nextProject) return null;

    return (
        <div className="border-t border-slate-100 bg-slate-50/50">
            <div className="max-w-[1120px] mx-auto px-6 py-20 md:py-32">
                <div className="flex flex-col md:flex-row gap-8 md:gap-12">

                    {/* Previous Project */}
                    {prevProject ? (
                        <Link
                            to={prevProject.ctaLink}
                            className="group flex-1 bg-white border border-slate-100 p-8 rounded-[32px] hover:shadow-xl transition-all duration-300"
                        >
                            <div className="flex items-center gap-2 text-[#6B7280] text-xs font-bold uppercase tracking-widest mb-4">
                                <ChevronLeft className="w-4 h-4" />
                                Previous Project
                            </div>
                            <h4 className="text-xl font-bold text-slate-900 group-hover:text-[#4169E1] transition-colors line-clamp-1">
                                {prevProject.headline}
                            </h4>
                        </Link>
                    ) : (
                        <div className="flex-1 hidden md:block"></div>
                    )}

                    {/* Next Project */}
                    {nextProject ? (
                        <Link
                            to={nextProject.ctaLink}
                            className="group flex-1 bg-white border border-slate-100 p-8 rounded-[32px] hover:shadow-xl transition-all duration-300 text-right md:text-left"
                        >
                            <div className="flex items-center md:justify-start justify-end gap-2 text-[#4169E1] text-xs font-bold uppercase tracking-widest mb-4">
                                Next Project
                                <ChevronRight className="w-4 h-4" />
                            </div>
                            <h4 className="text-xl font-bold text-slate-900 group-hover:text-[#4169E1] transition-colors line-clamp-1">
                                {nextProject.headline}
                            </h4>
                        </Link>
                    ) : (
                        <div className="flex-1 hidden md:block"></div>
                    )}

                </div>

                {/* Back to Projects Button */}
                <div className="mt-16 text-center">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-full font-bold text-sm hover:bg-slate-800 transition-all active:scale-95"
                    >
                        Back to All Projects
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CaseStudyNav;
