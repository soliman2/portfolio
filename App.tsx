import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation, Link } from 'react-router-dom';
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
const CaseStudyWrapper: React.FC<{ children: React.ReactNode, projectTitle: string }> = ({ children, projectTitle }) => {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      <Navbar isCaseStudy={true} />
      {/* Dynamic Breadcrumb - Centered with the main content max-width */}
      <div className="max-w-[1120px] mx-auto px-6 lg:px-8 absolute top-[100px] md:top-[120px] left-0 right-0 z-20 pointer-events-none">
        <div className="pointer-events-auto">
          <Link to="/" className='text-[14px] font-medium text-[#6B7280] hover:text-[#4169E1] transition-colors'>
            ← Projects / <span className='opacity-60'>{projectTitle}</span>
          </Link>
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
            <CaseStudyWrapper projectTitle="AI Urban Design Tool">
              <CaseStudyPage onBack={() => { }} />
            </CaseStudyWrapper>
          } />

          <Route path="/work/z-laundry" element={
            <CaseStudyWrapper projectTitle="Z Laundry">
              <ZLaundryCaseStudy onBack={() => { }} />
            </CaseStudyWrapper>
          } />

          <Route path="/work/rta-design-system" element={
            <CaseStudyWrapper projectTitle="RTA Design System">
              <DesignSystemsCaseStudy onBack={() => { }} />
            </CaseStudyWrapper>
          } />

          <Route path="/work/beach-locker" element={
            <CaseStudyWrapper projectTitle="Beach Locker Service">
              <BeachLockerCaseStudy onBack={() => { }} />
            </CaseStudyWrapper>
          } />

          <Route path="/work/ux-research-rta" element={
            <CaseStudyWrapper projectTitle="UX Research Practice">
              <UXResearchCaseStudy onBack={() => { }} />
            </CaseStudyWrapper>
          } />

          {/* Placeholder routes for other work pages */}
          <Route path="/work/:slug" element={
            <CaseStudyWrapper projectTitle="Case Study">
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