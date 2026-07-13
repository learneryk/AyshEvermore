import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Heart, Sparkles, Award, Compass, ShieldCheck, Mail, Phone, MapPin, Calendar } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { servicesData } from '../data/services';
import proposalHero from '../assets/proposal_hero.jpg';
import weddingGold from '../assets/wedding_gold.jpg';
import birthdayLuxury from '../assets/birthday_luxury.jpg';
import corporateGala from '../assets/corporate_gala.jpg';
import surpriseGarden from '../assets/surprise_garden.jpg';

interface HomeProps {
  onOpenBooking: () => void;
}

export const Home: React.FC<HomeProps> = ({ onOpenBooking }) => {
  const navigate = useNavigate();

  const coreValues = [
    {
      icon: <Heart className="text-luxury-gold" size={24} />,
      title: "Meaningful Experiences",
      description: "Every event is designed around your story, capturing the exact emotions you wish to convey."
    },
    {
      icon: <Sparkles className="text-luxury-gold" size={24} />,
      title: "Stress-Free Planning",
      description: "From initial concept to flawless execution, we handle everything so you can be fully present."
    },
    {
      icon: <Award className="text-luxury-gold" size={24} />,
      title: "Memories That Last",
      description: "We create moments you and your guests will cherish long after the last candle is put out."
    }
  ];

  const processSteps = [
    { step: "01", title: "Listen & Conceive", desc: "We take the time to understand your story, emotions, and specific goals to establish a unique theme." },
    { step: "02", title: "Luxury Design Blueprint", desc: "Our visual designers create layouts, color palettes, and sample boards to showcase the layout." },
    { step: "03", title: "Premium Curation", desc: "We source custom materials, coordinate with top tier photographers, caterers, and verify logistics." },
    { step: "04", title: "Flawless Orchestration", desc: "Our planners manage the structural execution on-site, ensuring every moment goes exactly as planned." }
  ];

  const handleCardClick = (slug: string) => {
    navigate(`/services?category=${slug}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigate = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full">
      {/* 1. Revamped Editorial Split Hero Section */}
      <section className="relative min-h-screen bg-luxury-cream flex items-center pt-28 pb-16 overflow-hidden">
        {/* Subtle Background textures */}
        <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#C5A880_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
          {/* Left Column: Brand Content Narrative */}
          <div className="lg:col-span-6 flex flex-col items-start text-left space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="flex items-center space-x-3 select-none"
            >
              <div className="w-8 h-[1px] bg-luxury-gold" />
              <span className="font-serif italic text-xs md:text-sm text-luxury-gold tracking-[0.25em] uppercase">
                Atelier of Bespoke Surprises
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold tracking-[0.18em] text-luxury-charcoal uppercase leading-[1.1] select-text"
            >
              Aysh <span className="text-luxury-gold ml-3 md:ml-5">Evermore</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="w-16 h-[1.5px] bg-luxury-gold origin-left select-none"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="font-sans text-base md:text-lg text-luxury-charcoal/70 leading-[1.7] max-w-lg font-normal select-text"
            >
              Kerala's premier experience designer. We shape stealth surprise proposals, fairytale weddings, and luxury milestone celebrations into living works of art. Some feelings deserve more than words.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.8 }}
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full pt-4 select-none"
            >
              <button
                onClick={onOpenBooking}
                className="px-8 py-4 bg-luxury-gold border border-luxury-gold text-white hover:bg-transparent hover:text-luxury-gold transition-all duration-500 font-serif text-xs uppercase tracking-widest font-bold shadow-lg hover:shadow-luxury/20 cursor-pointer"
              >
                Request Consultation
              </button>
              <button
                onClick={() => handleNavigate('/services')}
                className="px-8 py-4 bg-transparent border border-luxury-charcoal text-luxury-charcoal hover:bg-luxury-charcoal hover:text-white transition-all duration-500 font-serif text-xs uppercase tracking-widest font-bold cursor-pointer"
              >
                Our Experiences
              </button>
            </motion.div>
          </div>

          {/* Right Column: Premium Collage Frame Showcase */}
          <div className="lg:col-span-6 relative flex justify-center items-center mt-12 lg:mt-0 select-none">
            {/* Background Rotating Decorative Gold Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              className="absolute w-[320px] h-[320px] md:w-[440px] md:h-[440px] border border-luxury-gold/15 rounded-full -z-10"
            />

            {/* Primary Large Frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 0.4 }}
              className="w-[270px] h-[370px] md:w-[340px] md:h-[450px] border-gold-double relative p-3 bg-luxury-cream shadow-2xl z-10"
            >
              <div 
                className="w-full h-full bg-cover bg-center filter grayscale-[10%] hover:grayscale-0 transition-all duration-1000" 
                style={{ backgroundImage: `url(${proposalHero})` }}
              />
            </motion.div>

            {/* Overlapping Smaller Frame */}
            <motion.div
              initial={{ opacity: 0, x: -30, y: 30 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 1.5, delay: 0.7 }}
              className="absolute -bottom-10 -left-2 md:-left-8 w-[160px] h-[210px] md:w-[190px] md:h-[270px] border border-luxury-gold/25 bg-luxury-cream p-2 shadow-2xl z-20 hidden sm:block"
            >
              <div 
                className="w-full h-full bg-cover bg-center filter grayscale-[15%] hover:grayscale-0 transition-all duration-1000" 
                style={{ backgroundImage: `url(${weddingGold})` }}
              />
            </motion.div>

            {/* Floating Editorial Accent Tag */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 1.0 }}
              className="absolute -top-6 right-2 md:right-10 bg-luxury-dark text-white px-5 py-3 border border-luxury-gold/30 shadow-xl z-20 font-serif text-[10px] tracking-widest uppercase"
            >
              Bespoke Surprises
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Our Story / About Section */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            <SectionHeader
              title="Our Story"
              tagline="Every celebration begins with a feeling."
              align="left"
            />
            <p className="font-sans text-base md:text-lg text-luxury-charcoal/70 leading-[1.7] font-normal tracking-wide">
              At Aysh Evermore, we believe the most beautiful memories are created when emotions are transformed into meaningful experiences. Whether it's a surprise birthday, a heartfelt proposal, a wedding celebration, a corporate gathering, or a simple gesture of appreciation, we take care of every detail so you can focus on what truly matters — the moment itself.
            </p>
            <p className="font-sans text-base md:text-lg text-luxury-charcoal/70 leading-[1.7] font-normal tracking-wide">
              From planning to execution, we create experiences that are personal, memorable, and filled with meaning. Because some feelings deserve more than words.
            </p>

            <blockquote className="border-l-2 border-luxury-gold pl-6 my-6 font-serif italic text-base md:text-lg tracking-wider text-luxury-gold leading-[1.6]">
              "The most precious moments in life are the ones shared with the people we love."
            </blockquote>

            <div className="pt-4">
              <button
                onClick={() => handleNavigate('/about')}
                className="group flex items-center space-x-3 text-xs uppercase tracking-widest font-serif font-bold text-luxury-gold hover:text-luxury-goldLight transition-colors"
              >
                <span>Read Full Philosophy</span>
                <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Image Frame */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Gold Double Border Frame */}
            <div className="w-[300px] h-[400px] border-gold-double relative p-3">
              <div 
                className="w-full h-full bg-cover bg-center filter grayscale-[15%]" 
                style={{ backgroundImage: `url(${surpriseGarden})` }}
              />
            </div>
            {/* Small Overlay Frame */}
            <div className="absolute -bottom-8 -left-8 w-[200px] h-[150px] border border-luxury-gold/20 bg-luxury-cream p-2 shadow-lg hidden sm:block">
              <div 
                className="w-full h-full bg-cover bg-center" 
                style={{ backgroundImage: `url(${weddingGold})` }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Values Grid */}
      <section className="bg-luxury-warm/50 border-y border-luxury-gold/10 py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-10">
          {coreValues.map((value, idx) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              className="glass-panel p-8 rounded flex flex-col items-center text-center space-y-4 hover:border-luxury-gold/45 transition-colors duration-500"
            >
              <div className="w-12 h-12 rounded-full border border-luxury-gold/30 flex items-center justify-center bg-white">
                {value.icon}
              </div>
              <h3 className="font-serif text-sm font-semibold tracking-widest text-luxury-charcoal uppercase pt-2">
                {value.title}
              </h3>
              <p className="font-sans text-xs text-luxury-charcoal/65 leading-relaxed font-light tracking-wide">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. Services Preview Grid */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader
          title="Bespoke Experiences"
          tagline="What we plan for you"
          subtitle="Explore our curated event styles. We specialize in tailoring custom layouts for every life landmark."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.slice(0, 3).map((category, idx) => (
            <motion.div
              key={category.slug}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              className="group cursor-pointer bg-white border border-[#C5A880]/15 overflow-hidden shadow-luxury rounded-sm"
              onClick={() => handleCardClick(category.slug)}
            >
              {/* Photo Area */}
              <div className="relative h-64 overflow-hidden">
                <div 
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${category.image})` }}
                />
                <div className="absolute inset-0 bg-luxury-charcoal/20 group-hover:bg-luxury-charcoal/30 transition-colors" />
                <div className="absolute top-4 right-4 bg-luxury-cream/80 backdrop-blur-md px-3 py-1.5 border border-luxury-gold/30 rounded">
                  <span className="font-serif text-[9px] uppercase tracking-widest text-luxury-gold">
                    {category.name.includes("Wedding") ? "Weddings" : category.name.split(" ")[0]}
                  </span>
                </div>
              </div>

              {/* Text Area */}
              <div className="p-8 flex flex-col space-y-4">
                <h3 className="font-serif text-sm font-semibold tracking-wider text-luxury-charcoal group-hover:text-luxury-gold transition-colors">
                  {category.name}
                </h3>
                <p className="font-sans text-xs text-luxury-charcoal/60 leading-relaxed line-clamp-3">
                  {category.description}
                </p>
                <div className="pt-2 flex items-center space-x-2 text-[10px] uppercase font-serif tracking-widest font-bold text-luxury-gold">
                  <span>Explore Experiences</span>
                  <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <button
            onClick={() => handleNavigate('/services')}
            className="btn-luxury border-luxury-gold text-luxury-charcoal hover:text-white"
          >
            View All Services
          </button>
        </div>
      </section>

      {/* 5. How We Work */}
      <section className="bg-luxury-dark text-white py-24 border-y border-luxury-gold/15">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionHeader
            title="How We Work"
            tagline="Seamless Planning, Step by Step"
            subtitle="Our structured luxury process guarantees that your vision is realized flawlessly, keeping you stress-free."
            dark
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {processSteps.map((step, idx) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.15 }}
                className="flex flex-col space-y-4 p-6 border border-white/5 bg-white/5 rounded-sm hover:border-luxury-gold/30 transition-colors"
              >
                <span className="font-serif text-3xl font-light text-luxury-gold tracking-wider">
                  {step.step}
                </span>
                <h3 className="font-serif text-xs font-semibold tracking-widest uppercase text-white">
                  {step.title}
                </h3>
                <p className="font-sans text-xs text-white/50 leading-relaxed font-light">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Why Choose Us / Animated Stats */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Image Left */}
          <div className="lg:col-span-5 relative flex justify-center order-2 lg:order-1">
            <div className="w-[300px] h-[400px] border-gold-double relative p-3">
              <div 
                className="w-full h-full bg-cover bg-center filter grayscale-[10%]" 
                style={{ backgroundImage: `url(${corporateGala})` }}
              />
            </div>
            {/* Floating Card */}
            <div className="absolute top-10 -right-10 bg-white/90 backdrop-blur-md border border-luxury-gold/30 p-6 rounded shadow-lg hidden sm:block max-w-[200px]">
              <span className="font-serif text-3xl font-bold text-luxury-gold">100%</span>
              <p className="font-sans text-[10px] uppercase tracking-widest text-luxury-charcoal font-medium mt-1">
                Stress-Free Coordination Guarantee
              </p>
            </div>
          </div>

          {/* Text Right */}
          <div className="lg:col-span-7 flex flex-col space-y-6 order-1 lg:order-2">
            <SectionHeader
              title="Why Aysh Evermore?"
              tagline="Because special moments deserve more than ordinary planning."
              align="left"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs text-luxury-charcoal/70 leading-relaxed font-light tracking-wide">
              <div className="flex flex-col space-y-2">
                <span className="font-serif text-xs font-bold uppercase tracking-wider text-luxury-gold flex items-center space-x-2">
                  <Compass size={14} className="shrink-0" />
                  <span>We Listen First</span>
                </span>
                <p>We take the time to understand your story, your vision and what truly matters to you.</p>
              </div>
              <div className="flex flex-col space-y-2">
                <span className="font-serif text-xs font-bold uppercase tracking-wider text-luxury-gold flex items-center space-x-2">
                  <Sparkles size={14} className="shrink-0" />
                  <span>Personalized Designs</span>
                </span>
                <p>Every detail is thoughtfully curated to reflect your style, preferences and personality.</p>
              </div>
              <div className="flex flex-col space-y-2">
                <span className="font-serif text-xs font-bold uppercase tracking-wider text-luxury-gold flex items-center space-x-2">
                  <ShieldCheck size={14} className="shrink-0" />
                  <span>Stress-Free Planning</span>
                </span>
                <p>We handle the details so you can be present, relaxed and fully enjoy every moment.</p>
              </div>
              <div className="flex flex-col space-y-2">
                <span className="font-serif text-xs font-bold uppercase tracking-wider text-luxury-gold flex items-center space-x-2">
                  <Heart size={14} className="shrink-0" />
                  <span>Memories That Last</span>
                </span>
                <p>We craft moments that turn into timeless memories you and your loved ones will cherish forever.</p>
              </div>
            </div>


          </div>
        </div>
      </section>



      {/* 8. Instagram Showcase Feed */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader
          title="Atelier Journal"
          tagline="Instagram Visual Story"
          subtitle="Follow our visual board on Instagram @aysh.evermore to discover our latest setups, aesthetics, and moments."
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-8">
          {[proposalHero, weddingGold, birthdayLuxury, surpriseGarden].map((img, idx) => (
            <a
              key={idx}
              href="https://instagram.com/aysh.evermore"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group aspect-square overflow-hidden border border-[#C5A880]/15 rounded shadow-sm block"
            >
              <div 
                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
                style={{ backgroundImage: `url(${img})` }}
              />
              <div className="absolute inset-0 bg-luxury-charcoal/0 group-hover:bg-luxury-charcoal/40 transition-all duration-300 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* 9. Contact / Reservation Form */}
      <section className="bg-luxury-warm/20 py-24 border-t border-luxury-gold/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Coordinates Left */}
          <div className="lg:col-span-5 flex flex-col space-y-8">
            <SectionHeader
              title="Let's Plan"
              tagline="Let's create your moment."
              align="left"
            />

            <p className="font-sans text-xs md:text-sm text-luxury-charcoal/70 leading-relaxed font-light tracking-wide max-w-md">
              Every celebration starts with a feeling, a dream, a person, a moment worth remembering. Reach out to us, and let's begin crafting yours.
            </p>

            <ul className="space-y-6 text-xs text-luxury-charcoal/80">
              <li className="flex items-start space-x-4">
                <div className="w-10 h-10 border border-luxury-gold/30 rounded-full flex items-center justify-center shrink-0">
                  <MapPin size={16} className="text-luxury-gold" />
                </div>
                <div className="flex flex-col pt-1">
                  <span className="font-serif font-bold uppercase tracking-wider text-[10px] text-luxury-gold mb-1">Our Location</span>
                  <span className="font-sans">TVM, Manacaud, Kerala, India</span>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <div className="w-10 h-10 border border-luxury-gold/30 rounded-full flex items-center justify-center shrink-0">
                  <Phone size={16} className="text-luxury-gold" />
                </div>
                <div className="flex flex-col pt-1">
                  <span className="font-serif font-bold uppercase tracking-wider text-[10px] text-luxury-gold mb-1">Call / WhatsApp</span>
                  <a href="tel:+916282603885" className="font-sans hover:text-luxury-gold transition-colors">+91 62826 03885</a>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <div className="w-10 h-10 border border-luxury-gold/30 rounded-full flex items-center justify-center shrink-0">
                  <Mail size={16} className="text-luxury-gold" />
                </div>
                <div className="flex flex-col pt-1">
                  <span className="font-serif font-bold uppercase tracking-wider text-[10px] text-luxury-gold mb-1">Email Inquiries</span>
                  <a href="mailto:ayshevermore@gmail.com" className="font-sans hover:text-luxury-gold transition-colors">ayshevermore@gmail.com</a>
                </div>
              </li>
            </ul>
          </div>

          {/* Form Panel Right */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 md:p-10 rounded-sm">
              <h3 className="font-serif text-sm font-semibold tracking-widest text-luxury-charcoal uppercase mb-6 flex items-center space-x-2">
                <Calendar size={16} className="text-luxury-gold" />
                <span>Inquiry Register</span>
              </h3>

              <div className="space-y-6">
                <p className="font-sans text-xs text-luxury-charcoal/60 leading-relaxed font-light">
                  Submit this brief form, or click "Request Consultation" above to access detailed event settings. We will arrange a personalized meeting.
                </p>
                <button
                  onClick={onOpenBooking}
                  className="w-full btn-luxury bg-luxury-charcoal text-white hover:text-white border-luxury-charcoal tracking-[0.2em] py-4"
                >
                  Launch Booking Form
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Google Maps Location Section */}
      <section className="relative h-[400px] w-full border-t border-luxury-gold/15">
        <iframe
          title="Aysh Evermore Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.064560416972!2d76.94420377589255!3d8.473685491567117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!2f49.3!3m3!1m2!1s0x3b05b158b09339e1%3A0xea28fec8ffb8f60b!2sManacaud%2C%20Thiruvananthapuram%2C%20Kerala!5e0!3m2!1sen!2sin!4v1716947239088!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0, filter: "grayscale(30%) contrast(110%) invert(5%)" }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  );
};
