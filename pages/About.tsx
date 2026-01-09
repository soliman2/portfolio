import React from 'react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="text-5xl font-bold text-slate-900 mb-6">About Me</h1>
        <p className="text-xl text-slate-600 mb-12">
          Principal Product Designer specializing in AI-powered tools and design systems
        </p>
        
        {/* Content sections will be added later */}
        <div className="grid gap-12">
          <section>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Biography</h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              Content coming soon...
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Experience</h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              Content coming soon...
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Skills & Expertise</h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              Content coming soon...
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
