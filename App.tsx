import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Work from './pages/Work';
import CaseStudyPage from './components/CaseStudyPage';
import ZLaundryCaseStudy from './components/ZLaundryCaseStudy';
import DesignSystemsCaseStudy from './components/DesignSystemsCaseStudy';

// Wrapper component to handle navigation for homepage
const HomeWrapper: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Home
      onNavigateAI={() => navigate('/work/ai-urban-tool')}
      onNavigateZLaundry={() => navigate('/work/z-laundry')}
      onNavigateDesignSystems={() => navigate('/work/rta-design-system')}
    />
  );
};

// Wrapper for case studies with back navigation
const CaseStudyWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      <Navbar isCaseStudy={true} onBack={() => navigate('/')} />
      <main>{children}</main>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
        <Routes>
          {/* Homepage Route */}
          <Route path="/" element={
            <>
              <Navbar isCaseStudy={false} />
              <main>
                <HomeWrapper />
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
              <CaseStudyPage onBack={() => { }} />
            </CaseStudyWrapper>
          } />

          <Route path="/work/z-laundry" element={
            <CaseStudyWrapper>
              <ZLaundryCaseStudy onBack={() => { }} />
            </CaseStudyWrapper>
          } />

          <Route path="/work/rta-design-system" element={
            <CaseStudyWrapper>
              <DesignSystemsCaseStudy onBack={() => { }} />
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
      </div>
    </Router>
  );
};

export default App;