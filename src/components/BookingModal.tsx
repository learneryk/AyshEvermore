import React, { useState, useEffect } from 'react';
import { X, Send, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  eventType?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, eventType }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: 'proposal',
    eventDate: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (eventType) {
      setFormData((prev) => ({ ...prev, eventType }));
    }
  }, [eventType]);

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

    const selectedEventLabel = eventTypes.find(t => t.value === formData.eventType)?.label || formData.eventType;
    
    const messageText = `Hello Aysh Evermore, I would like to request a consultation:

✨ *Client Details* ✨
• *Name:* ${formData.name}
• *Phone:* ${formData.phone}
• *Email:* ${formData.email}

📅 *Event Details* 📅
• *Experience Type:* ${selectedEventLabel}
• *Preferred Date:* ${formData.eventDate || 'TBD'}
• *Additional Notes:* ${formData.message || 'None'}`;

    const encodedText = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/916282603885?text=${encodedText}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Open WhatsApp chat in a new tab
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        eventType: 'proposal',
        eventDate: '',
        message: '',
      });
    }, 1200);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          {/* Overlay Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-luxury-charcoal/40 backdrop-blur-sm"
          />

          {/* Form Content Panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative w-full max-w-lg glass-panel p-8 md:p-10 rounded-lg max-h-[90vh] overflow-y-auto text-luxury-charcoal"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 text-luxury-charcoal/50 hover:text-luxury-gold transition-colors duration-300"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            {!isSuccess ? (
              <>
                <div className="text-center mb-6">
                  <span className="font-serif italic text-sm tracking-widest uppercase text-luxury-gold block mb-1">Let's craft your moment</span>
                  <h3 className="font-serif text-xl md:text-2xl font-light tracking-widest uppercase mt-1">
                    Request Consultation
                  </h3>
                  <div className="w-8 h-[1px] bg-luxury-gold/50 mx-auto mt-3"></div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5 font-sans text-xs">
                  {/* Name Input */}
                  <div className="flex flex-col">
                    <label htmlFor="name" className="uppercase tracking-widest text-[10px] text-luxury-charcoal/60 mb-1.5 font-medium">
                      Your Name *
                    </label>
                    <input
                      required
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="bg-transparent border-b border-luxury-gold/30 focus:border-luxury-gold py-2 outline-none transition-all placeholder-luxury-charcoal/30 text-sm"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Email Input */}
                    <div className="flex flex-col">
                      <label htmlFor="email" className="uppercase tracking-widest text-[10px] text-luxury-charcoal/60 mb-1.5 font-medium">
                        Email Address *
                      </label>
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

                    {/* Phone Input */}
                    <div className="flex flex-col">
                      <label htmlFor="phone" className="uppercase tracking-widest text-[10px] text-luxury-charcoal/60 mb-1.5 font-medium">
                        Phone Number *
                      </label>
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
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Event Type Dropdown */}
                    <div className="flex flex-col">
                      <label htmlFor="eventType" className="uppercase tracking-widest text-[10px] text-luxury-charcoal/60 mb-1.5 font-medium">
                        Experience Type
                      </label>
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

                    {/* Date Input */}
                    <div className="flex flex-col">
                      <label htmlFor="eventDate" className="uppercase tracking-widest text-[10px] text-luxury-charcoal/60 mb-1.5 font-medium">
                        Desired Date
                      </label>
                      <input
                        type="date"
                        id="eventDate"
                        name="eventDate"
                        value={formData.eventDate}
                        onChange={handleChange}
                        className="bg-transparent border-b border-luxury-gold/30 focus:border-luxury-gold py-2 outline-none transition-all text-sm text-luxury-charcoal/80 cursor-pointer"
                      />
                    </div>
                  </div>

                  {/* Message Input */}
                  <div className="flex flex-col">
                    <label htmlFor="message" className="uppercase tracking-widest text-[10px] text-luxury-charcoal/60 mb-1.5 font-medium">
                      Tell us about your dream *
                    </label>
                    <textarea
                      required
                      rows={3}
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Share your thoughts, feelings or any specific themes..."
                      className="bg-transparent border border-luxury-gold/30 focus:border-luxury-gold p-3 outline-none transition-all placeholder-luxury-charcoal/30 text-sm rounded"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    disabled={isSubmitting}
                    type="submit"
                    className="w-full flex items-center justify-center space-x-2 btn-luxury bg-luxury-charcoal text-white hover:text-white border-luxury-charcoal hover:bg-luxury-gold/10 transition-colors duration-500 py-4 font-serif tracking-[0.2em]"
                  >
                    {isSubmitting ? (
                      <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    ) : (
                      <>
                        <span>Submit Request</span>
                        <Send size={14} />
                      </>
                    )}
                  </button>
                </form>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10 flex flex-col items-center space-y-6"
              >
                <div className="w-16 h-16 rounded-full border border-luxury-gold/40 flex items-center justify-center text-luxury-gold bg-luxury-gold/10 animate-pulse">
                  <Check size={28} />
                </div>
                
                <div>
                  <h3 className="font-serif text-xl uppercase tracking-widest text-luxury-charcoal">
                    Thank You
                  </h3>
                   <span className="font-serif italic text-sm tracking-widest uppercase text-luxury-gold block mt-2">Our designers will connect shortly</span>
                  <div className="w-8 h-[1px] bg-luxury-gold/50 mx-auto mt-4"></div>
                </div>

                <p className="font-sans text-xs text-luxury-charcoal/60 leading-relaxed max-w-sm">
                  We have received your event details. A designer from Aysh Evermore will contact you via email or phone within 24 hours to begin planning.
                </p>

                <button
                  onClick={() => {
                    setIsSuccess(false);
                    onClose();
                  }}
                  className="btn-luxury border-luxury-gold text-luxury-charcoal text-[10px] hover:text-white mt-4"
                >
                  Close Window
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
