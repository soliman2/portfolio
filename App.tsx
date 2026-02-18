import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Work from './pages/Work';
import CaseStudyPage from './components/CaseStudyPage';
import ZLaundryCaseStudy from './components/ZLaundryCaseStudy';
import DesignSystemsCaseStudy from './components/DesignSystemsCaseStudy';
import BeachLockerCaseStudy from './components/BeachLockerCaseStudy';
import UXResearchCaseStudy from './components/UXResearchCaseStudy';

// Scroll to top on every route change
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Wrapper for case studies with back navigation
const CaseStudyWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      <Navbar isCaseStudy={true} />
      {/* Back Link Header */}
      <div className="bg-white border-b border-slate-50">
        <div className="max-w-[1120px] mx-auto px-6 py-4">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-[#4169E1] uppercase tracking-widest transition-all group"
          >
            <span className="transform group-hover:-translate-x-1 transition-transform">←</span>
            Back to All Projects
          </button>
        </div>
      </div>
      <main>{children}</main>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
        <Routes>
          {/* Homepage Route */}
          <Route path="/" element={
            <>
              <Navbar isCaseStudy={false} />
              <main>
                <Home />
              </main>
            </>
          } />

          {/* About Page */}
          <Route path="/about" element={
            <>
              <Navbar isCaseStudy={false} />
              <main>
                <About />
              </main>
            </>
          } />

          {/* Contact Page */}
          <Route path="/contact" element={
            <>
              <Navbar isCaseStudy={false} />
              <main>
                <Contact />
              </main>
            </>
          } />

          {/* Work Landing Page */}
          <Route path="/work" element={
            <>
              <Navbar isCaseStudy={false} />
              <main>
                <Work />
              </main>
            </>
          } />

          {/* Case Study Routes */}
          <Route path="/work/ai-urban-tool" element={
            <CaseStudyWrapper>
              <CaseStudyPage />
            </CaseStudyWrapper>
          } />

          <Route path="/work/z-laundry" element={
            <CaseStudyWrapper>
              <ZLaundryCaseStudy />
            </CaseStudyWrapper>
          } />

          <Route path="/work/rta-design-system" element={
            <CaseStudyWrapper>
              <DesignSystemsCaseStudy />
            </CaseStudyWrapper>
          } />

          <Route path="/work/beach-locker" element={
            <CaseStudyWrapper>
              <BeachLockerCaseStudy />
            </CaseStudyWrapper>
          } />

          <Route path="/work/ux-research-rta" element={
            <CaseStudyWrapper>
              <UXResearchCaseStudy />
            </CaseStudyWrapper>
          } />

          {/* Placeholder routes for other work pages */}
          <Route path="/work/:slug" element={
            <CaseStudyWrapper>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <h1 className="text-4xl font-bold text-slate-900 mb-4">Case Study</h1>
                <p className="text-lg text-slate-600">Content coming soon...</p>
              </div>
            </CaseStudyWrapper>
          } />
        </Routes>

        {/* Global Footer - appears on all pages */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;