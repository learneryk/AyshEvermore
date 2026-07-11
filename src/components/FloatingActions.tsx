import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const FloatingActions: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const whatsappNumber = "916282603885";
  const whatsappMessage = encodeURIComponent("Hello Aysh Evermore! I would like to inquire about planning an event.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-4 items-center">
      {/* Scroll-to-Top Button */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="w-11 h-11 rounded-full bg-white/80 backdrop-blur-md border border-luxury-gold/30 flex items-center justify-center text-luxury-gold hover:bg-luxury-gold hover:text-white transition-all duration-300 shadow-lg group"
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} className="group-hover:-translate-y-1 transition-transform duration-300" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Floating Call Button (Mobile Only) */}
      <a
        href="tel:+916282603885"
        className="lg:hidden w-12 h-12 rounded-full bg-white/90 backdrop-blur-md border border-luxury-gold/35 flex items-center justify-center text-luxury-gold shadow-lg"
        aria-label="Call Us"
      >
        <Phone size={20} />
      </a>

      {/* WhatsApp Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-300 relative group"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={24} fill="currentColor" className="ml-[1px]" />
        {/* Sparkle Glow Ring */}
        <span className="absolute -inset-1 rounded-full border border-[#25D366]/40 animate-ping pointer-events-none -z-10"></span>
        
        {/* Tooltip */}
        <span className="absolute right-14 bg-luxury-charcoal text-white text-[10px] uppercase tracking-widest px-3 py-1.5 rounded border border-luxury-gold/20 shadow-lg pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Chat With Us
        </span>
      </a>
    </div>
  );
};
