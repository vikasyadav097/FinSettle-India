import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, PhoneCall } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import { motion, AnimatePresence } from 'motion/react';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg py-3' : 'bg-white/90 backdrop-blur-md py-5'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl">
            FS
          </div>
          <span className="text-xl font-bold text-primary tracking-tight hidden sm:block">
            FinSettle <span className="text-secondary">India</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              className={`font-medium transition-colors hover:text-secondary ${
                location.pathname === link.path ? 'text-secondary' : 'text-primary'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/apply" 
            className={`btn btn-primary py-2 px-5 ${
              location.pathname === '/apply' ? 'bg-secondary' : ''
            }`}
          >
            Apply Now
          </Link>
          <Link to="/contact" className="btn btn-outline py-2 px-5">
            <PhoneCall size={18} />
            Free Consultation
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden text-primary p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="container-custom py-6 flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <Link 
                  key={link.path} 
                  to={link.path}
                  className={`text-lg font-medium py-2 ${
                    location.pathname === link.path ? 'text-secondary' : 'text-primary'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex flex-col gap-3 pt-4 border-t border-gray-100">
                <Link to="/apply" className="btn btn-primary w-full">
                  Apply Now
                </Link>
                <Link to="/contact" className="btn btn-outline w-full">
                  <PhoneCall size={18} />
                  Free Consultation
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
