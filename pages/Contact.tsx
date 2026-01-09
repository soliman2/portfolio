import React from 'react';

const Contact: React.FC = () => {
    return (
        <div className="min-h-screen bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <h1 className="text-5xl font-bold text-slate-900 mb-6">Let's Connect</h1>
                <p className="text-xl text-slate-600 mb-12">
                    Open to Principal/Staff Designer roles at Big Tech and Saudi Government entities
                </p>

                {/* Contact options */}
                <div className="grid gap-8 mb-12">
                    <a
                        href="mailto:your.email@example.com"
                        className="p-6 border border-slate-200 rounded-2xl hover:border-blue-500 transition-colors"
                    >
                        <span className="text-2xl mb-2 block">📧</span>
                        <h3 className="text-xl font-semibold text-slate-900 mb-1">Email</h3>
                        <p className="text-slate-600">your.email@example.com</p>
                    </a>

                    <a
                        href="tel:+971502768308"
                        className="p-6 border border-slate-200 rounded-2xl hover:border-blue-500 transition-colors"
                    >
                        <span className="text-2xl mb-2 block">📞</span>
                        <h3 className="text-xl font-semibold text-slate-900 mb-1">Phone</h3>
                        <p className="text-slate-600">+971 50 276 8308</p>
                    </a>

                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-6 border border-slate-200 rounded-2xl hover:border-blue-500 transition-colors"
                    >
                        <span className="text-2xl mb-2 block">💼</span>
                        <h3 className="text-xl font-semibold text-slate-900 mb-1">LinkedIn</h3>
                        <p className="text-slate-600">Connect with me</p>
                    </a>
                </div>

                <div className="text-center text-slate-600">
                    <p>📍 Dubai, UAE</p>
                    <p className="mt-2">🟢 Available for hire</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;
