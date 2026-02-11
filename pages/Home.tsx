import React from 'react';
import Hero from '../components/Hero';
import FeaturedCaseStudySection from '../components/FeaturedCaseStudySection';
import MoreExpertise from '../components/MoreExpertise';

import Testimonials from '../components/Testimonials';
import { FEATURED_CASE_STUDIES } from '../constants';

interface HomeProps {
    onNavigateAI: () => void;
    onNavigateZLaundry: () => void;
    onNavigateDesignSystems: () => void;
}

const Home: React.FC<HomeProps> = ({ onNavigateAI, onNavigateZLaundry, onNavigateDesignSystems }) => {
    return (
        <>
            {/* GLOBAL BACKGROUND GRID (Homepage Only) */}
            <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 flex justify-center select-none overflow-hidden opacity-[0.2]">
                <div className="w-full max-w-[1600px] h-full px-4 sm:px-6 lg:px-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                    {[0, 1, 2, 3, 4].map((colIndex) => (
                        <div
                            key={colIndex}
                            className={`
                border-dashed border-slate-300 h-full relative overflow-hidden
                ${colIndex === 0 ? 'border-x' : 'border-r'} 
                ${colIndex === 2 ? 'hidden md:block' : ''}
                ${colIndex >= 3 ? 'hidden lg:block' : ''}
              `}
                        >
                            <div className="absolute inset-0 flex flex-col w-full">
                                {Array.from({ length: 24 }).map((_, rowIndex) => (
                                    <div
                                        key={rowIndex}
                                        className="w-full aspect-square border-b border-dashed border-slate-300 flex-shrink-0"
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Main Content */}
            <div className="relative z-20">
                <Hero />

                {/* 4 Featured Case Studies with Alternating Layouts */}
                {FEATURED_CASE_STUDIES.map((caseStudy, index) => (
                    <FeaturedCaseStudySection
                        key={caseStudy.id}
                        caseStudy={caseStudy}
                        index={index}
                        totalCount={FEATURED_CASE_STUDIES.length}
                    />
                ))}

                {/* More Expertise Section (3 Cards) */}
                <MoreExpertise />

                {/* Testimonials */}
                <Testimonials />
            </div>
        </>
    );
};

export default Home;
