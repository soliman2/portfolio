import React from 'react';
import { Link } from 'react-router-dom';

const Work: React.FC = () => {
    const projects = [
        {
            slug: 'ai-urban-tool',
            title: 'AI Urban Planning Tool',
            category: 'GenAI Products',
            description: 'Building AI-powered design tools for urban planning',
            status: '🏆 GITEX 2025'
        },
        {
            slug: 'rta-design-system',
            title: 'RTA Design System',
            category: 'Design Systems',
            description: 'Multi-platform design system serving 12M+ users',
            status: 'Live'
        },
        {
            slug: 'dg-dashboard',
            title: 'Director General Dashboard',
            category: 'Dashboards & Analytics',
            description: 'Executive-level dashboard with AI insights',
            status: '🏆 Official Recognition'
        },
        {
            slug: 'ux-research',
            title: 'UX Research & Testing',
            category: 'Research',
            description: 'Usability testing and heuristic evaluations',
            status: '30+ Sessions'
        },
        {
            slug: 'shail-app',
            title: 'Government Services',
            category: 'Government',
            description: '360° services for citizens and government',
            status: '12M+ Users'
        },
        {
            slug: 'teaching',
            title: 'Teaching & Workshops',
            category: 'Education',
            description: 'Training 500+ designers across MENA',
            status: '20+ Workshops'
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <h1 className="text-5xl font-bold text-slate-900 mb-6">My Work</h1>
                <p className="text-xl text-slate-600 mb-12">
                    Designing AI-powered tools, systems, and services at scale
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <Link
                            key={project.slug}
                            to={`/work/${project.slug}`}
                            className="group p-6 border border-slate-200 rounded-2xl hover:border-blue-500 hover:shadow-lg transition-all"
                        >
                            <div className="text-sm font-medium text-blue-600 mb-2">{project.category}</div>
                            <h3 className="text-2xl font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-slate-600 mb-4">{project.description}</p>
                            <div className="text-sm text-slate-500">{project.status}</div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Work;
