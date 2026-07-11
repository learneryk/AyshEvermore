import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  title: string;
  tagline?: string;
  subtitle?: string;
  dark?: boolean;
  align?: 'center' | 'left';
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  tagline,
  subtitle,
  dark = false,
  align = 'center',
}) => {
  const isLeft = align === 'left';

  return (
    <div className={`flex flex-col mb-12 ${isLeft ? 'items-start text-left' : 'items-center text-center'}`}>
      {/* Editorial Italic Tagline */}
      {tagline && (
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-serif italic text-sm md:text-base text-luxury-gold tracking-[0.25em] uppercase mb-3"
        >
          {tagline}
        </motion.span>
      )}

      {/* Main Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.15 }}
        className={`font-serif text-3xl md:text-5xl font-light tracking-[0.2em] uppercase leading-snug ${
          dark ? 'text-white' : 'text-luxury-charcoal'
        }`}
      >
        {title}
      </motion.h2>

      {/* Luxury Diamond Flourish */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className={`luxury-flourish ${dark ? 'luxury-flourish-dark bg-luxury-gold' : 'bg-luxury-gold'}`}
      />

      {/* Subtitle / Context description */}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className={`max-w-2xl text-sm md:text-base font-light leading-[1.6] tracking-wider mt-2 ${
            dark ? 'text-white/60' : 'text-luxury-charcoal/60'
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};
