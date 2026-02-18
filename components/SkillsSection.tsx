import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Layers, Microscope, Users, Terminal, Award } from 'lucide-react';

const skills = [
    {
        icon: <Bot className="w-6 h-6" />,
        title: "GenAI Product Design",
        description: "Leveraging LLMs and diffusion models to build intelligent user experiences and rapid design-to-code workflows.",
        gradient: "from-blue-500 to-indigo-600"
    },
    {
        icon: <Layers className="w-6 h-6" />,
        title: "Design Systems at Scale",
        description: "Building bilingual, component-driven architectures serving millions of users across web and mobile platforms.",
        gradient: "from-indigo-500 to-purple-600"
    },
    {
        icon: <Microscope className="w-6 h-6" />,
        title: "UX Research & Lab",
        description: "Standardizing moderated testing protocols and delivering executive-ready insights that drive product strategy.",
        gradient: "from-emerald-500 to-teal-600"
    },
    {
        icon: <Users className="w-6 h-6" />,
        title: "Service Design",
        description: "Mapping 360° citizen journeys and service blueprints that connect digital interfaces with back-office operations.",
        gradient: "from-amber-500 to-orange-600"
    },
    {
        icon: <Terminal className="w-6 h-6" />,
        title: "Technical Prototyping",
        description: "Bridging the gap between design and engineering with high-fidelity prototypes built in React, Framer, and AI.",
        gradient: "from-slate-700 to-slate-900"
    },
    {
        icon: <Award className="w-6 h-6" />,
        title: "Strategic Impact",
        description: "Contributing to government-level strategic goals with officially recognized, data-driven design solutions.",
        gradient: "from-rose-500 to-red-600"
    }
];

const SkillsSection: React.FC = () => {
    return (
        <section className="py-20 md:py-32 bg-[#F9FAFB] overflow-hidden">
            <div className="max-w-[1280px] mx-auto px-5 md:px-6 lg:px-12">
                {/* Section Header */}
                <div className="max-w-3xl mb-16 md:mb-20">
                    <h2 className="text-[32px] md:text-5xl font-bold font-display text-slate-900 tracking-tight mb-4">
                        What I Bring
                    </h2>
                    <p className="text-base md:text-xl text-slate-500 leading-relaxed">
                        A specialized blend of creative craft and technical strategy.
                    </p>
                    <div className="h-1.5 w-20 bg-[#F59E0B] rounded-full mt-6"></div>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {skills.map((skill, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: idx * 0.05 }}
                            whileHover={{ y: -5 }}
                            className="bg-white p-8 rounded-[32px] border border-slate-100 transition-all hover:shadow-2xl hover:shadow-slate-200/50 group"
                        >
                            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${skill.gradient} flex items-center justify-center text-white mb-6 shadow-lg shadow-indigo-500/10 group-hover:scale-110 transition-transform`}>
                                {skill.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">
                                {skill.title}
                            </h3>
                            <p className="text-sm md:text-base text-slate-500 leading-relaxed">
                                {skill.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
