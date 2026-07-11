import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { testimonialsData } from '../data/testimonials';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

export const Testimonials: React.FC = () => {
  return (
    <div className="w-full pt-28 pb-20 select-text">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-16 text-center">
        <SectionHeader
          title="Client Stories"
          tagline="Reviews from our celebrations"
          subtitle="Read the words of couples, families, and organizations that we've had the honor to plan for."
        />
      </section>

      {/* Grid List */}
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              className="bg-white border border-[#C5A880]/15 p-8 rounded-sm shadow-luxury flex flex-col justify-between hover:border-luxury-gold/30 transition-colors duration-500 relative group"
            >
              {/* Quote Mark */}
              <div className="absolute top-6 right-8 text-luxury-gold/10 group-hover:text-luxury-gold/25 transition-colors duration-500">
                <Quote size={40} fill="currentColor" />
              </div>

              <div className="space-y-4">
                {/* Rating */}
                <div className="flex items-center space-x-1 text-luxury-gold">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={12} fill="currentColor" />
                  ))}
                </div>

                {/* Quote */}
                <p className="font-sans text-xs md:text-sm leading-relaxed text-luxury-charcoal/80 font-light tracking-wide italic">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Details */}
              <div className="border-t border-luxury-gold/10 pt-4 mt-6 flex flex-col">
                <span className="font-serif text-xs font-bold uppercase tracking-widest text-luxury-gold">
                  {item.name}
                </span>
                <span className="font-sans text-[10px] uppercase tracking-wider text-luxury-charcoal/50 mt-1">
                  {item.role} • {item.event}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};
