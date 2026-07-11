import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import logoGold from '../assets/logo_gold.png';

export const Footer: React.FC = () => {
  const navigate = useNavigate();

  const handleLinkClick = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-luxury-dark text-white/70 border-t border-luxury-gold/15 pt-16 pb-8 font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
        {/* Company Info */}
        <div className="flex flex-col space-y-6">
          <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => handleLinkClick('/')}>
            <img
              src={logoGold}
              alt="Aysh Evermore Logo"
              className="w-12 h-12 object-contain"
            />
            <div className="flex flex-col">
              <span className="font-serif text-sm font-bold tracking-[0.25em] text-white uppercase leading-none">
                <span className="brand-A text-luxury-gold">A</span>ysh
              </span>
              <span className="font-serif text-[10px] tracking-[0.3em] text-luxury-gold uppercase leading-none mt-1">Evermore</span>
            </div>
          </div>
          
          <p className="text-xs leading-relaxed text-white/50">
            Crafting timeless memories and luxury bespoke experiences. From romantic surprises to fairytale weddings, we materialize emotions.
          </p>

          <div className="flex flex-col pt-2">
            <span className="font-serif italic text-xs tracking-widest text-luxury-gold uppercase leading-none">
              Some Feelings Deserve
            </span>
            <span className="font-serif italic text-xs tracking-widest text-luxury-gold uppercase leading-none mt-2 ml-6">
              More Than Words.
            </span>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-serif text-xs uppercase tracking-widest mb-6 pb-2 border-b border-luxury-gold/10 w-fit">
            Navigation
          </h4>
          <ul className="space-y-3 text-xs">
            {['Home', 'About', 'Services', 'Gallery', 'FAQ', 'Contact'].map((item) => {
              const path = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
              return (
                <li key={item}>
                  <button
                    onClick={() => handleLinkClick(path)}
                    className="hover:text-luxury-gold transition-colors duration-300 uppercase tracking-widest text-[10px]"
                  >
                    {item}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Services Showcase */}
        <div>
          <h4 className="text-white font-serif text-xs uppercase tracking-widest mb-6 pb-2 border-b border-luxury-gold/10 w-fit">
            Our Experiences
          </h4>
          <ul className="space-y-3 text-xs text-white/50">
            <li>
              <button onClick={() => handleLinkClick('/services')} className="hover:text-luxury-gold transition-colors duration-300">
                Proposal Planning
              </button>
            </li>
            <li>
              <button onClick={() => handleLinkClick('/services')} className="hover:text-luxury-gold transition-colors duration-300">
                Wedding Day Management
              </button>
            </li>
            <li>
              <button onClick={() => handleLinkClick('/services')} className="hover:text-luxury-gold transition-colors duration-300">
                Surprise Date Setups
              </button>
            </li>
            <li>
              <button onClick={() => handleLinkClick('/services')} className="hover:text-luxury-gold transition-colors duration-300">
                Milestone Birthdays
              </button>
            </li>
            <li>
              <button onClick={() => handleLinkClick('/services')} className="hover:text-luxury-gold transition-colors duration-300">
                Corporate Galas
              </button>
            </li>
            <li>
              <button onClick={() => handleLinkClick('/services')} className="hover:text-luxury-gold transition-colors duration-300">
                Midnight Surprises
              </button>
            </li>
          </ul>
        </div>

        {/* Contact Coordinates */}
        <div>
          <h4 className="text-white font-serif text-xs uppercase tracking-widest mb-6 pb-2 border-b border-luxury-gold/10 w-fit">
            The Atelier
          </h4>
          <ul className="space-y-4 text-xs">
            <li className="flex items-start space-x-3">
              <MapPin size={16} className="text-luxury-gold shrink-0 mt-0.5" />
              <span className="leading-relaxed text-white/60">
                TVM, Manacaud,<br />Kerala, India
              </span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone size={16} className="text-luxury-gold shrink-0" />
              <a href="tel:+916282603885" className="hover:text-luxury-gold transition-colors text-white/60">
                +91 62826 03885
              </a>
            </li>
            <li className="flex items-center space-x-3">
              <Mail size={16} className="text-luxury-gold shrink-0" />
              <a href="mailto:ayshevermore@gmail.com" className="hover:text-luxury-gold transition-colors text-white/60">
                ayshevermore@gmail.com
              </a>
            </li>
            <li className="flex items-center space-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-luxury-gold shrink-0"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              <a
                href="https://instagram.com/aysh.evermore"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-luxury-gold transition-colors text-white/60"
              >
                @aysh.evermore
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between text-[11px] text-white/40">
        <p>© {new Date().getFullYear()} Aysh Evermore. All Rights Reserved.</p>
        <p className="mt-2 md:mt-0 tracking-wider">
          EVENTS • EXPERIENCES • MEMORIES
        </p>
      </div>
    </footer>
  );
};
