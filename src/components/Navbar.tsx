import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logoGold from '../assets/logo_gold.png';
import ayshEvermoreCharcoal from '../assets/aysh_evermore_charcoal.png';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleNavLinkClick = (path: string) => {
    if (path === '/') {
      if (location.pathname === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        navigate('/');
      }
    } else {
      navigate(path);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 border-b ${
          isScrolled
            ? 'bg-luxury-cream/95 backdrop-blur-md border-luxury-gold/25 py-3 shadow-md'
            : 'bg-luxury-cream/95 backdrop-blur-md border-luxury-gold/15 py-4.5 shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo Monogram */}
          <Link
            to="/"
            onClick={() => handleNavLinkClick('/')}
            className="flex items-center space-x-3.5 group mr-6 lg:mr-16 shrink-0"
          >
            <img
              src={logoGold}
              alt="Aysh Evermore Logo"
              className="w-13 h-13 md:w-15 md:h-15 object-contain transition-transform duration-500 group-hover:scale-105"
            />
            <img
              src={ayshEvermoreCharcoal}
              alt="Aysh Evermore"
              className="h-6.5 md:h-8 w-auto object-contain transition-opacity duration-300 group-hover:opacity-85 mt-0.5"
            />
          </Link>

          {/* Desktop Navigation Links - Elegant, Serif-based, legible */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <button
                  key={link.name}
                  onClick={() => handleNavLinkClick(link.path)}
                  className={`font-serif text-sm md:text-[15px] font-semibold uppercase tracking-[0.2em] relative py-1 transition-colors duration-300 hover:text-luxury-gold ${
                    isActive ? 'text-luxury-gold' : 'text-luxury-charcoal'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 w-full h-[1.5px] bg-luxury-gold"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Contact & CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8 shrink-0">
            {/* Phone link in serif font to match navigation style */}
            <a
              href="tel:+916282603885"
              className="flex items-center space-x-2 text-sm md:text-[15px] font-serif uppercase tracking-[0.2em] font-semibold text-luxury-gold hover:text-luxury-charcoal transition-colors duration-300 whitespace-nowrap shrink-0"
            >
              <Phone size={14} className="text-luxury-gold animate-pulse" />
              <span>+91 62826 03885</span>
            </a>
            
            <button
              onClick={onOpenBooking}
              className="btn-luxury border-luxury-gold text-luxury-charcoal hover:text-white px-5 py-2.5 text-[10px] font-bold transition-all duration-500"
            >
              Book Consultation
            </button>
          </div>

          {/* Mobile Menu Icon */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-luxury-charcoal hover:text-luxury-gold transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 pt-20 bg-luxury-cream/98 backdrop-blur-lg flex flex-col lg:hidden border-b border-luxury-gold/15 shadow-xl"
          >
            <div className="flex-1 flex flex-col items-center justify-center space-y-6 py-12 px-6">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <button
                    key={link.name}
                    onClick={() => {
                      handleNavLinkClick(link.path);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`font-serif text-lg font-semibold uppercase tracking-[0.2em] transition-colors duration-300 hover:text-luxury-gold py-2 ${
                      isActive ? 'text-luxury-gold border-b border-luxury-gold' : 'text-luxury-charcoal'
                    }`}
                  >
                    {link.name}
                  </button>
                );
              })}

              <a
                href="tel:+916282603885"
                className="flex items-center space-x-2 text-base tracking-[0.2em] font-serif font-semibold text-luxury-gold hover:text-luxury-charcoal pt-4 uppercase"
              >
                <Phone size={16} className="text-luxury-gold" />
                <span>+91 62826 03885</span>
              </a>

              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full max-w-[280px] btn-luxury border-luxury-gold text-luxury-charcoal text-xs hover:text-white"
              >
                Book Consultation
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
