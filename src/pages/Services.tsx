import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import { servicesData } from '../data/services';
import type { SubService } from '../data/services';
import { Heart, Sparkles, Gem, Award, Gift, Check, ChevronDown, ChevronUp } from 'lucide-react';

interface ServicesProps {
  onOpenBooking: (preselectedEvent?: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenBooking }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState('love-relationships');
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  // Sync state with URL search params (e.g. ?category=love-relationships)
  useEffect(() => {
    const category = searchParams.get('category');
    if (category && servicesData.some(s => s.slug === category)) {
      setActiveTab(category);
    }
  }, [searchParams]);

  const handleTabChange = (slug: string) => {
    setActiveTab(slug);
    setSearchParams({ category: slug });
    setExpandedCard(null);
  };

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Heart': return <Heart size={16} />;
      case 'Sparkles': return <Sparkles size={16} />;
      case 'Ring': return <Gem size={16} />;
      case 'Award': return <Award size={16} />;
      case 'Gift': return <Gift size={16} />;
      default: return <Sparkles size={16} />;
    }
  };

  const activeCategory = servicesData.find(s => s.slug === activeTab) || servicesData[0];

  const getEventTypeMapping = (slug: string) => {
    if (slug === 'love-relationships') return 'proposal';
    if (slug === 'weddings') return 'wedding';
    if (slug === 'celebrations') return 'birthday';
    if (slug === 'corporate') return 'corporate';
    if (slug === 'surprises') return 'surprise';
    return 'other';
  };

  return (
    <div className="w-full pt-28 pb-20 select-text">
      {/* 1. Header Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-12 text-center">
        <SectionHeader
          title="Bespoke Experiences"
          tagline="Tailored to your story"
          subtitle="From grand traditional matrimonial stages to quiet midnight candle-lit dates, explore our diverse planning services."
        />
      </section>

      {/* 2. Navigation Tabs */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-16 select-none">
        <div className="flex flex-wrap items-center justify-center gap-3 border-b border-luxury-gold/15 pb-4">
          {servicesData.map((category) => {
            const isActive = activeTab === category.slug;
            return (
              <button
                key={category.slug}
                onClick={() => handleTabChange(category.slug)}
                className={`flex items-center space-x-2 font-serif text-[10px] md:text-xs uppercase tracking-widest px-4 py-2.5 rounded transition-all duration-300 border ${
                  isActive
                    ? 'bg-luxury-gold text-luxury-charcoal border-luxury-gold'
                    : 'bg-transparent text-luxury-charcoal/60 border-luxury-gold/20 hover:border-luxury-gold/50'
                }`}
              >
                {getCategoryIcon(category.icon)}
                <span>{category.name.includes("Wedding") ? "Weddings" : category.name}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* 3. Tab Content */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Side: Category Banner & Deliverables */}
        <div className="lg:col-span-4 flex flex-col space-y-6">
          <div className="border border-luxury-gold/20 p-2 rounded bg-white shadow-md">
            <div 
              className="h-56 bg-cover bg-center rounded-sm"
              style={{ backgroundImage: `url(${activeCategory.image})` }}
            />
          </div>

          <div className="glass-panel p-6 rounded-sm">
            <h4 className="font-serif text-[10px] font-bold tracking-widest text-luxury-gold uppercase mb-4">
              We Take Care Of Everything
            </h4>
            <ul className="space-y-3 text-xs">
              {activeCategory.deliverables.map((item) => (
                <li key={item} className="flex items-center space-x-2.5 text-luxury-charcoal/80">
                  <Check size={14} className="text-luxury-gold shrink-0" />
                  <span className="font-sans leading-tight">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Side: Specific Sub-Services */}
        <div className="lg:col-span-8 space-y-6">
          <div className="mb-6">
            <span className="font-serif italic text-sm tracking-widest uppercase text-luxury-gold block mb-1">{activeCategory.tagline}</span>
            <p className="font-sans text-sm md:text-base text-luxury-charcoal/70 leading-[1.6] mt-2">
              {activeCategory.description}
            </p>
          </div>

          {activeCategory.subServices.map((sub: SubService) => {
            const isExpanded = expandedCard === sub.title;
            return (
              <motion.div
                layout="position"
                key={sub.title}
                className="bg-white border border-[#C5A880]/15 rounded shadow-sm hover:border-luxury-gold/30 transition-all duration-300"
              >
                {/* Card Header Accordion Trigger */}
                <button
                  onClick={() => setExpandedCard(isExpanded ? null : sub.title)}
                  className="w-full p-6 text-left flex items-center justify-between focus:outline-none"
                >
                  <div className="flex flex-col space-y-1 pr-4">
                    <h4 className="font-serif text-sm font-semibold tracking-wider text-luxury-charcoal">
                      {sub.title}
                    </h4>
                    <span className="font-sans text-[11px] font-light text-luxury-gold leading-tight">
                      {sub.tagline}
                    </span>
                  </div>
                  <div className="text-luxury-gold shrink-0">
                    {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </div>
                </button>

                {/* Expanded Details Panel */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden border-t border-luxury-gold/10 bg-luxury-warm/10"
                    >
                      <div className="p-6 space-y-5">
                        <p className="font-sans text-xs text-luxury-charcoal/70 leading-relaxed">
                          {sub.description}
                        </p>

                        <div className="space-y-2">
                          <span className="font-serif text-[9px] uppercase tracking-widest text-luxury-gold font-bold block">
                            Key Experience Highlights
                          </span>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                            {sub.details.map((detail) => (
                              <li key={detail} className="flex items-start space-x-2 text-luxury-charcoal/80">
                                <span className="text-luxury-gold text-[10px] mt-0.5">•</span>
                                <span className="font-sans leading-tight">{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Direct Booking Trigger */}
                        <div className="pt-2 flex justify-end">
                          <button
                            onClick={() => onOpenBooking(getEventTypeMapping(activeCategory.slug))}
                            className="btn-luxury border-luxury-gold text-luxury-charcoal hover:text-white px-5 py-2 text-[10px]"
                          >
                            Select Experience
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
