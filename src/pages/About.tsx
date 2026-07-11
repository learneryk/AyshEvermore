import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import surpriseGarden from '../assets/surprise_garden.jpg';
import proposalHero from '../assets/proposal_hero.jpg';

export const About: React.FC = () => {
  const pillars = [
    {
      title: "MEANINGFUL EXPERIENCES",
      desc: "Every event is designed around your story. We believe the most beautiful memories are created when raw emotions are transformed into tangible physical realities.",
    },
    {
      title: "STRESS-FREE PLANNING",
      desc: "From initial brainstorming to final coordination, we manage every structural and aesthetic detail. You focus on what truly matters — being present.",
    },
    {
      title: "MEMORIES THAT LAST",
      desc: "Moments you'll cherish long after the celebration ends. We build experiences that linger as warm nostalgic thoughts forever.",
    }
  ];

  return (
    <div className="w-full pt-28 pb-20 select-text">
      {/* 1. Header Banner */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-16 text-center">
        <SectionHeader
          title="Our Story"
          tagline="Crafting experiences that last forever."
          subtitle="Learn about the philosophy, values, and creators driving Aysh Evermore's premium event productions."
        />
      </section>

      {/* 2. Philosophy Narrative */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-24">
        {/* Left Side: Images */}
        <div className="lg:col-span-5 relative flex justify-center">
          <div className="w-[280px] h-[380px] border-gold-double relative p-3">
            <div 
              className="w-full h-full bg-cover bg-center filter grayscale-[10%]" 
              style={{ backgroundImage: `url(${proposalHero})` }}
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-[180px] h-[220px] border border-luxury-gold/25 p-2 bg-luxury-cream shadow-lg hidden sm:block">
            <div 
              className="w-full h-full bg-cover bg-center" 
              style={{ backgroundImage: `url(${surpriseGarden})` }}
            />
          </div>
        </div>

        {/* Right Side: Philosophy Text */}
        <div className="lg:col-span-7 flex flex-col space-y-6">
          <span className="font-serif italic text-sm tracking-widest uppercase text-luxury-gold mb-1 block">The Beginning of Always</span>
          <h3 className="font-serif text-lg tracking-widest uppercase text-luxury-charcoal">
            We Believe in Emotions
          </h3>
          <p className="font-sans text-base md:text-lg text-luxury-charcoal/70 leading-[1.7] font-normal tracking-wide">
            At Aysh Evermore, we believe that an event is not just a collection of coordinates, schedules, or decorations. It is a vital chapter of your life story. Our goal is to capture the feelings of love, gratitude, excitement, and appreciation, and craft them into spaces that feel premium and alive.
          </p>
          <p className="font-sans text-base md:text-lg text-luxury-charcoal/70 leading-[1.7] font-normal tracking-wide">
            We operate out of Thiruvananthapuram, Kerala, and take care of the details so that you can relax and feel every emotion completely. Because some feelings deserve more than words.
          </p>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 gap-6 pt-6 border-t border-luxury-gold/15">
            <div className="flex flex-col">
              <span className="font-serif text-xl md:text-2xl font-bold text-luxury-gold">
                100%
              </span>
              <span className="font-sans text-[8px] uppercase tracking-widest text-luxury-charcoal/60 mt-1">
                Stealth & Privacy
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl md:text-2xl font-bold text-luxury-gold">
                Bespoke
              </span>
              <span className="font-sans text-[8px] uppercase tracking-widest text-luxury-charcoal/60 mt-1">
                Custom Styling
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Pillars Section */}
      <section className="bg-luxury-warm/40 border-y border-luxury-gold/10 py-20 mb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="font-serif italic text-sm tracking-widest uppercase text-luxury-gold block mb-1">Our Foundation</span>
            <h3 className="font-serif text-xl md:text-2xl font-light tracking-widest uppercase text-luxury-charcoal mt-1">
              Core Pillars
            </h3>
            <div className="w-8 h-[1px] bg-luxury-gold/50 mx-auto mt-3"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, idx) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.15 }}
                className="bg-white border border-[#C5A880]/15 p-8 rounded shadow-sm hover:border-luxury-gold/30 transition-all"
              >
                <span className="font-serif text-[10px] tracking-widest text-luxury-gold font-bold mb-3 block">
                  PILLAR 0{idx + 1}
                </span>
                <h4 className="font-serif text-xs font-semibold tracking-widest uppercase text-luxury-charcoal mb-4">
                  {pillar.title}
                </h4>
                <p className="font-sans text-xs text-luxury-charcoal/65 leading-relaxed font-light">
                  {pillar.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};
