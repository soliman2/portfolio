import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowLeft, Briefcase, User, FileText, Mail } from 'lucide-react';

interface NavbarProps {
  isCaseStudy?: boolean;
  onBack?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isCaseStudy = false, onBack }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';
  const isInnerPage = !isHomePage;

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
      setIsOpen(false);
    } else {
      setHidden(false);
    }
  });

  const links = [
    { name: 'Work', href: '/#work', external: false, isHash: true, icon: Briefcase },
    { name: 'About', href: '/about', external: false, icon: User },
    {
      name: 'Resume',
      href: '/Soliman - Senior Product Designer | Design Systems · AI · Service Design.pdf',
      external: true,
      icon: FileText
    },
    { name: 'Contact', href: '/contact', external: false, icon: Mail },
  ];

  return (
    <motion.nav
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: -100, opacity: 0 },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-4 md:top-6 inset-x-0 mx-auto z-50 w-[92%] max-w-5xl"
    >
      <div className="relative h-14 md:h-auto bg-white/75 backdrop-blur-[10px] border border-slate-200/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-full px-3 py-2.5 md:px-5 md:py-3 flex items-center justify-between transition-all duration-300">

        {/* Logo / Back Button */}
        <div className="flex-shrink-0 flex items-center">
          {isInnerPage ? (
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-2 ml-2 group"
              aria-label="Go back"
            >
              <span className="w-7 h-7 flex items-center justify-center rounded-full bg-slate-100 group-hover:bg-blue-50 transition-colors">
                <ArrowLeft className="w-4 h-4 text-slate-600 group-hover:text-blue-600 transition-colors" />
              </span>
              <span className="text-xl md:text-2xl font-display font-bold tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                Soliman<span className="text-blue-600">.</span>
              </span>
            </button>
          ) : (
            <Link to="/" className="text-xl md:text-2xl font-display font-bold tracking-tight text-slate-900 ml-2">
              Soliman<span className="text-blue-600">.</span>
            </Link>
          )}
        </div>

        {/* Desktop Nav - Centered Pills */}
        <div className="hidden md:flex items-center gap-1 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {links.map((link) => {
            const Icon = link.icon;
            const cls = "flex items-center gap-1.5 px-5 py-2 text-sm font-medium font-display text-slate-600 rounded-full hover:bg-slate-100 hover:text-slate-900 transition-all duration-200";
            const inner = <><Icon size={14} className="opacity-50" />{link.name}</>;

            return link.external ? (
              <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" className={cls}>
                {inner}
              </a>
            ) : (link as any).isHash ? (
              <button
                key={link.name}
                onClick={() => {
                  if (location.pathname === '/') {
                    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    navigate('/');
                    setTimeout(() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' }), 300);
                  }
                }}
                className={cls}
              >
                {inner}
              </button>
            ) : (
              <Link key={link.name} to={link.href} className={cls}>
                {inner}
              </Link>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center">
          <Link
            to="/contact"
            className="px-6 py-2.5 text-sm font-bold font-display text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30"
          >
            Let's Talk
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-slate-600 hover:text-slate-900 bg-slate-100/50 rounded-full transition-colors"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 mt-2 bg-white/90 backdrop-blur-xl border border-slate-200/50 rounded-3xl shadow-xl overflow-hidden md:hidden p-2"
          >
            <div className="flex flex-col gap-1 p-2">
              {links.map((link) => {
                const Icon = link.icon;
                const mobileCls = "flex items-center gap-3 px-4 py-3 text-base font-medium font-display text-slate-700 rounded-xl hover:bg-slate-100/80 hover:text-blue-600 transition-colors";
                const mobileInner = <><Icon size={18} className="text-slate-400" />{link.name}</>;

                return link.external ? (
                  <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} target="_blank" rel="noopener noreferrer" className={mobileCls}>
                    {mobileInner}
                  </a>
                ) : (link as any).isHash ? (
                  <button
                    key={link.name}
                    onClick={() => {
                      setIsOpen(false);
                      if (location.pathname === '/') {
                        document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
                      } else {
                        navigate('/');
                        setTimeout(() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' }), 300);
                      }
                    }}
                    className={`${mobileCls} text-left`}
                  >
                    {mobileInner}
                  </button>
                ) : (
                  <Link key={link.name} to={link.href} onClick={() => setIsOpen(false)} className={mobileCls}>
                    {mobileInner}
                  </Link>
                );
              })}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="mt-2 px-4 py-3 text-base font-bold font-display text-center text-white bg-blue-600 rounded-xl hover:bg-blue-700 shadow-md shadow-blue-600/20"
              >
                Let's Talk
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;