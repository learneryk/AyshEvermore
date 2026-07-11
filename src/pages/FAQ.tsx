import React, { useState } from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { faqData } from '../data/faq';
import { Plus, Minus, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export const FAQ: React.FC = () => {
  const navigate = useNavigate();
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = faqData.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full pt-28 pb-20 select-text">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-12 text-center">
        <SectionHeader
          title="Information Hub"
          tagline="Frequently asked questions"
          subtitle="Everything you need to know about our luxury booking, custom themes, and coordinator timelines."
        />
      </section>

      {/* Search Bar */}
      <section className="max-w-xl mx-auto px-6 mb-16 select-none">
        <div className="relative flex items-center border-b border-luxury-gold/30 focus-within:border-luxury-gold py-2 transition-all">
          <Search size={18} className="text-luxury-gold mr-3 shrink-0" />
          <input
            type="text"
            placeholder="Search questions or terms..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-transparent outline-none font-sans text-xs md:text-sm text-luxury-charcoal placeholder-luxury-charcoal/30"
          />
        </div>
      </section>

      {/* Accordion List */}
      <section className="max-w-3xl mx-auto px-6 mb-20">
        {filteredFaqs.length > 0 ? (
          <div className="space-y-4">
            {filteredFaqs.map((faq) => {
              const isExpanded = expandedId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-white border border-[#C5A880]/15 rounded shadow-sm hover:border-luxury-gold/25 transition-colors duration-300"
                >
                  <button
                    onClick={() => setExpandedId(isExpanded ? null : faq.id)}
                    className="w-full p-6 text-left flex items-center justify-between focus:outline-none"
                  >
                    <span className="font-serif text-xs md:text-sm font-semibold tracking-wider text-luxury-charcoal pr-4">
                      {faq.question}
                    </span>
                    <div className="text-luxury-gold shrink-0">
                      {isExpanded ? <Minus size={16} /> : <Plus size={16} />}
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden border-t border-luxury-gold/10 bg-luxury-warm/10"
                      >
                        <p className="p-6 font-sans text-xs text-luxury-charcoal/70 leading-relaxed font-light">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-10 text-luxury-charcoal/50 text-xs font-sans">
            No matching questions found. Try search keywords like "location", "deposit" or "advance".
          </div>
        )}
      </section>

      {/* Ask Another Question Callout */}
      <section className="max-w-2xl mx-auto px-6 text-center select-none">
        <div className="glass-panel p-8 rounded-sm flex flex-col items-center space-y-4">
          <span className="font-serif italic text-sm tracking-widest uppercase text-luxury-gold block mb-1">Have an unanswered question?</span>
          <h4 className="font-serif text-xs font-bold tracking-widest uppercase text-luxury-charcoal">
            Connect With Our Planners
          </h4>
          <p className="font-sans text-[11px] text-luxury-charcoal/60 leading-relaxed font-light max-w-sm">
            We are always happy to discuss specific configurations or special permit requirements. Write to us directly.
          </p>
          <button
            onClick={() => {
              navigate('/contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="btn-luxury border-luxury-gold text-luxury-charcoal hover:text-white mt-2"
          >
            Go To Contact Page
          </button>
        </div>
      </section>
    </div>
  );
};
