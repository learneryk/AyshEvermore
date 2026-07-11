import React, { useState } from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import proposalHero from '../assets/proposal_hero.jpg';
import weddingGold from '../assets/wedding_gold.jpg';
import birthdayLuxury from '../assets/birthday_luxury.jpg';
import corporateGala from '../assets/corporate_gala.jpg';
import surpriseGarden from '../assets/surprise_garden.jpg';

export const Gallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filters = [
    { name: 'All', slug: 'all' },
    { name: 'Proposals', slug: 'proposals' },
    { name: 'Weddings', slug: 'weddings' },
    { name: 'Celebrations', slug: 'celebrations' },
    { name: 'Corporate', slug: 'corporate' },
    { name: 'Surprises', slug: 'surprises' },
  ];

  const galleryItems = [
    { id: 1, image: proposalHero, category: 'proposals', title: 'Garden Midnight Proposal' },
    { id: 2, image: weddingGold, category: 'weddings', title: 'Sunset Banquet Reception' },
    { id: 3, image: birthdayLuxury, category: 'celebrations', title: 'Champagne Anniversary Dinner' },
    { id: 4, image: corporateGala, category: 'corporate', title: 'Annual Corporate Stage' },
    { id: 5, image: surpriseGarden, category: 'surprises', title: 'Lantern Path Surprise Setup' },
    // Reuses for gallery grid thickness
    { id: 6, image: proposalHero, category: 'surprises', title: 'Stealth Romantic Setup' },
    { id: 7, image: weddingGold, category: 'proposals', title: 'Sea-Facing Beach Proposal' },
    { id: 8, image: birthdayLuxury, category: 'celebrations', title: 'Luxe Balloon Birthday Arch' },
  ];

  const filteredItems = activeFilter === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

  const handlePrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev! === 0 ? filteredItems.length - 1 : prev! - 1));
  };

  const handleNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev! === filteredItems.length - 1 ? 0 : prev! + 1));
  };

  return (
    <div className="w-full pt-28 pb-20 select-text">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-12 text-center">
        <SectionHeader
          title="Atelier Gallery"
          tagline="Memories materialized"
          subtitle="Browse high-resolution photographs of our real events, styled and styled to perfection."
        />
      </section>

      {/* Filters (Select-None) */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-16 select-none">
        <div className="flex flex-wrap items-center justify-center gap-3 border-b border-luxury-gold/15 pb-4">
          {filters.map((filter) => {
            const isActive = activeFilter === filter.slug;
            return (
              <button
                key={filter.slug}
                onClick={() => {
                  setActiveFilter(filter.slug);
                  setLightboxIndex(null);
                }}
                className={`font-serif text-[10px] md:text-xs uppercase tracking-widest px-5 py-2.5 rounded transition-all duration-300 border ${
                  isActive
                    ? 'bg-luxury-gold text-luxury-charcoal border-luxury-gold'
                    : 'bg-transparent text-luxury-charcoal/60 border-luxury-gold/20 hover:border-luxury-gold/50'
                }`}
              >
                {filter.name}
              </button>
            );
          })}
        </div>
      </section>

      {/* Grid Showcase */}
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {filteredItems.map((item, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={item.id}
                className="group relative aspect-[4/5] bg-[#EFE6DD] border border-[#C5A880]/15 overflow-hidden shadow-luxury rounded-sm cursor-pointer"
                onClick={() => setLightboxIndex(idx)}
              >
                <div 
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                
                {/* Overlay Text & Controls */}
                <div className="absolute inset-0 bg-luxury-charcoal/0 group-hover:bg-luxury-charcoal/45 transition-all duration-300 p-6 flex flex-col justify-end text-white">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-between">
                    <div className="flex flex-col space-y-1">
                      <span className="font-serif text-[8px] uppercase tracking-widest text-luxury-gold">
                        {item.category}
                      </span>
                      <h4 className="font-serif text-xs font-semibold uppercase tracking-wider">
                        {item.title}
                      </h4>
                    </div>
                    <Maximize2 size={16} className="text-luxury-gold" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Full Screen Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center select-none">
            {/* Close Trigger overlay */}
            <div className="absolute inset-0" onClick={() => setLightboxIndex(null)} />

            {/* Top Toolbar Controls */}
            <div className="absolute top-6 right-6 z-10 flex items-center space-x-6 text-white/70">
              <span className="font-sans text-xs tracking-widest font-light">
                {lightboxIndex + 1} / {filteredItems.length}
              </span>
              <button
                onClick={() => setLightboxIndex(null)}
                className="hover:text-luxury-gold transition-colors focus:outline-none"
                aria-label="Close Gallery Lightbox"
              >
                <X size={24} />
              </button>
            </div>

            {/* Left Navigator */}
            <button
              onClick={handlePrev}
              className="absolute left-6 text-white/50 hover:text-luxury-gold transition-colors z-10 focus:outline-none"
              aria-label="Previous image"
            >
              <ChevronLeft size={40} />
            </button>

            {/* Image Showcase Panel */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl max-h-[80vh] px-4 flex flex-col items-center justify-center z-10"
            >
              <img
                src={filteredItems[lightboxIndex].image}
                alt={filteredItems[lightboxIndex].title}
                className="max-h-[70vh] object-contain border border-white/10 shadow-2xl rounded-sm"
              />
              <div className="text-center mt-6 text-white select-text">
                <span className="font-serif text-[9px] uppercase tracking-widest text-luxury-gold">
                  {filteredItems[lightboxIndex].category}
                </span>
                <h3 className="font-serif text-sm tracking-widest uppercase mt-1">
                  {filteredItems[lightboxIndex].title}
                </h3>
              </div>
            </motion.div>

            {/* Right Navigator */}
            <button
              onClick={handleNext}
              className="absolute right-6 text-white/50 hover:text-luxury-gold transition-colors z-10 focus:outline-none"
              aria-label="Next image"
            >
              <ChevronRight size={40} />
            </button>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
