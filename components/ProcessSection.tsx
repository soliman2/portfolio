import React from 'react';
import { motion } from 'framer-motion';
import { Search, Lightbulb, PenTool, Layout, CheckCircle } from 'lucide-react';

const steps = [
    {
        icon: <Search className="w-6 h-6" />,
        title: "Research & Discovery",
        description: "Deep dive into user pain points through moderated lab sessions and heuristic evaluation.",
        tags: ["UX Research", "Data Analysis"]
    },
    {
        icon: <Lightbulb className="w-6 h-6" />,
        title: "Strategy & Concept",
        description: "Defining service blueprints and product roadmaps aligned with executive strategic goals.",
        tags: ["Service Design", "Product Strategy"]
    },
    {
        icon: <PenTool className="w-6 h-6" />,
        title: "Prototyping with AI",
        description: "Leveraging GenAI tools to build rapid interactive prototypes and explore design options.",
        tags: ["GenAI", "Rapid Prototyping"]
    },
    {
        icon: <Layout className="w-6 h-6" />,
        title: "Design Systems",
        description: "Building scalable, bilingual system architectures that ensure consistency at scale.",
        tags: ["Scalable UI", "Bilingual Support"]
    },
    {
        icon: <CheckCircle className="w-6 h-6" />,
        title: "Impact & Validation",
        description: "Measuring success through user approval rates and time-saved metrics (93%+ AI impact).",
        tags: ["Validation", "ROI Tracking"]
    }
];

const ProcessSection: React.FC = () => {
    return (
        <section className="py-20 md:py-32 bg-white overflow-hidden">
            <div className="max-w-[1280px] mx-auto px-5 md:px-6 lg:px-12">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
                    <h2 className="text-[32px] md:text-5xl font-bold font-display text-slate-900 tracking-tight mb-4">
                        How I Work
                    </h2>
                    <p className="text-base md:text-xl text-slate-500 leading-relaxed">
                        A research-first approach powered by GenAI and systems thinking.
                    </p>
                    <div className="h-1.5 w-20 bg-[#4169E1] rounded-full mx-auto mt-6"></div>
                </div>

                {/* Process Flow */}
                <div className="relative">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden md:block absolute top-[44px] left-[10%] right-[10%] h-[2px] bg-slate-100 z-0"></div>

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-4 relative z-10">
                        {steps.map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="flex flex-col items-center md:items-start text-center md:text-left"
                            >
                                {/* Icon Circle */}
                                <div
                                    className="w-20 h-20 rounded-[24px] bg-white border border-slate-100 shadow-xl shadow-blue-500/5 flex items-center justify-center text-[#4169E1] mb-6 md:mb-8 group-hover:scale-110 transition-transform duration-500"
                                    style={{
                                        background: 'linear-gradient(135deg, #ffffff 0%, #f8faff 100%)'
                                    }}
                                >
                                    {step.icon}
                                </div>

                                <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3">
                                    {step.title}
                                </h3>
                                <p className="text-sm text-slate-500 leading-relaxed mb-4 md:pr-4">
                                    {step.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {step.tags.map((tag, tIdx) => (
                                        <span key={tIdx} className="text-[10px] font-bold text-[#4169E1] uppercase tracking-wider bg-blue-50 px-2 py-1 rounded-md">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProcessSection;
