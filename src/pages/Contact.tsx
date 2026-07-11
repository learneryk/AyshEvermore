import React, { useState } from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { Phone, Mail, MapPin, Send, MessageCircle, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: 'wedding',
    guestCount: '',
    eventDate: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const eventTypes = [
    { value: 'proposal', label: 'Proposal Planning' },
    { value: 'wedding', label: 'Wedding Planning & Execution' },
    { value: 'birthday', label: 'Milestone Birthday Celebration' },
    { value: 'anniversary', label: 'Anniversary Surprise' },
    { value: 'corporate', label: 'Corporate Gala / Team Building' },
    { value: 'surprise', label: 'Midnight / Custom Dream Surprise' },
    { value: 'other', label: 'Other Special Event' },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        eventType: 'wedding',
        guestCount: '',
        eventDate: '',
        message: '',
      });
    }, 1500);
  };

  const contactCards = [
    {
      icon: <Phone size={22} className="text-luxury-gold" />,
      label: "Phone Contact",
      value: "+91 62826 03885",
      link: "tel:+916282603885",
      actionLabel: "Call Atelier"
    },
    {
      icon: <MessageCircle size={22} className="text-luxury-gold" />,
      label: "WhatsApp Chat",
      value: "+91 62826 03885",
      link: "https://wa.me/916282603885?text=Hi%20Aysh%20Evermore%2C%20I%20would%20like%20to%20inquire%20about%20planning%20an%20event.",
      actionLabel: "Message Chat"
    },
    {
      icon: <Mail size={22} className="text-luxury-gold" />,
      label: "Email Inquiries",
      value: "ayshevermore@gmail.com",
      link: "mailto:ayshevermore@gmail.com",
      actionLabel: "Write Email"
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-luxury-gold"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>,
      label: "Instagram Visuals",
      value: "@aysh.evermore",
      link: "https://instagram.com/aysh.evermore",
      actionLabel: "Follow Feed"
    }
  ];

  return (
    <div className="w-full pt-28 pb-20 select-text">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-16 text-center">
        <SectionHeader
          title="Connect With Us"
          tagline="Let's create your moment"
          subtitle="Whether you are planning a stealth proposal, a fairytale wedding, or an employee gala, we are ready to bring your vision to life."
        />
      </section>

      {/* Grid Coordinates cards */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
        {contactCards.map((card) => (
          <div key={card.label} className="bg-white border border-[#C5A880]/15 p-6 rounded shadow-sm flex flex-col items-center text-center space-y-4 hover:border-luxury-gold/35 transition-colors">
            <div className="w-12 h-12 rounded-full border border-luxury-gold/25 flex items-center justify-center bg-luxury-warm/20">
              {card.icon}
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-[10px] font-bold tracking-widest text-luxury-gold uppercase">{card.label}</span>
              <span className="font-sans text-xs text-luxury-charcoal/80 font-medium mt-1 truncate max-w-[180px]">{card.value}</span>
            </div>
            <a
              href={card.link}
              target={card.link.startsWith('http') ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className="text-[9px] uppercase font-serif font-bold tracking-widest text-luxury-gold hover:text-luxury-goldLight transition-colors"
            >
              {card.actionLabel} →
            </a>
          </div>
        ))}
      </section>

      {/* Main Form & Map Splits */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
        {/* Left Side: Custom Booking Form */}
        <div className="lg:col-span-7">
          <div className="glass-panel p-8 md:p-10 rounded-sm">
            <h3 className="font-serif text-sm font-semibold tracking-widest uppercase text-luxury-charcoal mb-6 pb-2 border-b border-luxury-gold/15 w-fit">
              Experience Request Form
            </h3>

            {!isSuccess ? (
              <form onSubmit={handleSubmit} className="space-y-6 font-sans text-xs text-luxury-charcoal/80">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="flex flex-col">
                    <label htmlFor="name" className="uppercase tracking-widest text-[9px] font-bold mb-1.5">Your Name *</label>
                    <input
                      required
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter name"
                      className="bg-transparent border-b border-luxury-gold/30 focus:border-luxury-gold py-2 outline-none transition-all placeholder-luxury-charcoal/30 text-sm"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col">
                    <label htmlFor="email" className="uppercase tracking-widest text-[9px] font-bold mb-1.5">Email Address *</label>
                    <input
                      required
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="email@example.com"
                      className="bg-transparent border-b border-luxury-gold/30 focus:border-luxury-gold py-2 outline-none transition-all placeholder-luxury-charcoal/30 text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div className="flex flex-col">
                    <label htmlFor="phone" className="uppercase tracking-widest text-[9px] font-bold mb-1.5">Phone Number *</label>
                    <input
                      required
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      className="bg-transparent border-b border-luxury-gold/30 focus:border-luxury-gold py-2 outline-none transition-all placeholder-luxury-charcoal/30 text-sm"
                    />
                  </div>

                  {/* Event Type */}
                  <div className="flex flex-col">
                    <label htmlFor="eventType" className="uppercase tracking-widest text-[9px] font-bold mb-1.5">Event Category</label>
                    <select
                      id="eventType"
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                      className="bg-transparent border-b border-luxury-gold/30 focus:border-luxury-gold py-2 outline-none transition-all text-sm text-luxury-charcoal cursor-pointer"
                    >
                      {eventTypes.map((type) => (
                        <option key={type.value} value={type.value} className="bg-luxury-cream text-luxury-charcoal">
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Event Date */}
                  <div className="flex flex-col">
                    <label htmlFor="eventDate" className="uppercase tracking-widest text-[9px] font-bold mb-1.5">Target Date</label>
                    <input
                      type="date"
                      id="eventDate"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleChange}
                      className="bg-transparent border-b border-luxury-gold/30 focus:border-luxury-gold py-2 outline-none transition-all text-sm text-luxury-charcoal/80 cursor-pointer"
                    />
                  </div>

                  {/* Guest Count */}
                  <div className="flex flex-col">
                    <label htmlFor="guestCount" className="uppercase tracking-widest text-[9px] font-bold mb-1.5">Estimated Guests</label>
                    <input
                      type="text"
                      id="guestCount"
                      name="guestCount"
                      value={formData.guestCount}
                      onChange={handleChange}
                      placeholder="e.g. 50, 200, or Intimate (2)"
                      className="bg-transparent border-b border-luxury-gold/30 focus:border-luxury-gold py-2 outline-none transition-all placeholder-luxury-charcoal/30 text-sm"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col">
                  <label htmlFor="message" className="uppercase tracking-widest text-[9px] font-bold mb-1.5">Tell us about your dream *</label>
                  <textarea
                    required
                    rows={4}
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe what you want to celebrate, color palettes, surprise elements..."
                    className="bg-transparent border border-luxury-gold/30 focus:border-luxury-gold p-3 outline-none transition-all placeholder-luxury-charcoal/30 text-sm rounded"
                  />
                </div>

                {/* Submit */}
                <button
                  disabled={isSubmitting}
                  type="submit"
                  className="w-full flex items-center justify-center space-x-2 btn-luxury bg-luxury-charcoal text-white hover:text-white border-luxury-charcoal tracking-[0.2em] py-4"
                >
                  {isSubmitting ? (
                    <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  ) : (
                    <>
                      <span>Submit Specifications</span>
                      <Send size={14} />
                    </>
                  )}
                </button>
              </form>
            ) : (
              <AnimatePresence>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 flex flex-col items-center space-y-6"
                >
                  <div className="w-14 h-14 rounded-full border border-luxury-gold/40 flex items-center justify-center text-luxury-gold bg-luxury-gold/10">
                    <Check size={24} />
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-bold tracking-widest uppercase">Specification Received</h4>
                    <span className="font-serif italic text-sm tracking-widest uppercase text-luxury-gold block mt-2">Our designers are on it</span>
                  </div>
                  <p className="font-sans text-xs text-luxury-charcoal/60 max-w-xs leading-relaxed">
                    Thank you. We have saved your event specifications and will contact you within 24 hours to schedule a detailed session.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="btn-luxury border-luxury-gold text-luxury-charcoal text-[10px] hover:text-white px-5 py-2"
                  >
                    Send Another Inquiry
                  </button>
                </motion.div>
              </AnimatePresence>
            )}
          </div>
        </div>

        {/* Right Side: Map & Address Details */}
        <div className="lg:col-span-5 flex flex-col space-y-8">
          <div className="glass-panel p-8 rounded-sm flex flex-col space-y-6">
            <h3 className="font-serif text-sm font-semibold tracking-widest uppercase text-luxury-charcoal">
              The Office
            </h3>
            
            <div className="flex items-start space-x-3 text-xs">
              <MapPin size={18} className="text-luxury-gold shrink-0 mt-0.5" />
              <div className="flex flex-col space-y-1">
                <span className="font-serif font-bold uppercase tracking-wider text-[9px] text-luxury-gold">Atelier Address</span>
                <span className="leading-relaxed text-luxury-charcoal/70">
                  TVM, Manacaud,<br />
                  Thiruvananthapuram, Kerala,<br />
                  India - 695009
                </span>
              </div>
            </div>

            <div className="flex items-start space-x-3 text-xs">
              <Phone size={18} className="text-luxury-gold shrink-0 mt-0.5" />
              <div className="flex flex-col space-y-1">
                <span className="font-serif font-bold uppercase tracking-wider text-[9px] text-luxury-gold">Business Hours</span>
                <span className="leading-relaxed text-luxury-charcoal/70">
                  Monday – Saturday<br />
                  09:00 AM – 07:00 PM IST
                </span>
              </div>
            </div>
          </div>

          <div className="relative h-[250px] w-full border border-[#C5A880]/15 rounded shadow-sm overflow-hidden">
            <iframe
              title="Contact Page Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.064560416972!2d76.94420377589255!3d8.473685491567117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!2f49.3!3m3!1m2!1s0x3b05b158b09339e1%3A0xea28fec8ffb8f60b!2sManacaud%2C%20Thiruvananthapuram%2C%20Kerala!5e0!3m2!1sen!2sin!4v1716947239088!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(30%) contrast(110%) invert(5%)" }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};
