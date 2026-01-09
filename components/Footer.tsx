import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2B3544] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Column 1: Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-2">Soliman Shaban</h3>
            <p className="text-slate-300 mb-4">Principal Product Designer</p>
            <div className="space-y-1 text-sm text-slate-400">
              <p>🇦🇪 Dubai, UAE</p>
              <p>🇪🇬 From Egypt</p>
            </div>
          </div>

          {/* Column 2: Discover */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Discover</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/work" className="text-slate-300 hover:text-white transition-colors">
                  Work
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-300 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors">
                  Resume
                </a>
              </li>
              <li>
                <Link to="/contact" className="text-slate-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Connect */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="mailto:your.email@example.com"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Email
                </a>
              </li>
              <li>
                <a
                  href="tel:+971502768308"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Phone
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter (Optional) */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-sm text-slate-300 mb-4">Get design insights</p>
            <form className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Email"
                className="px-4 py-2 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
              />
              <button
                type="submit"
                className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors font-medium"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
            <p>© 2025 Soliman Shaban. All rights reserved.</p>
            <p className="text-center md:text-right">
              🏆 Official Recognition: RTA AI & Data Science Center
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;