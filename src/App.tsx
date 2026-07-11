import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { BookingModal } from './components/BookingModal';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Gallery } from './pages/Gallery';
import { FAQ } from './pages/FAQ';
import { Contact } from './pages/Contact';
import { AnimatePresence, motion } from 'framer-motion';

// Scroll to Top on Page navigation
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Animated Route Wrapper
const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
};

export const AppContent: React.FC = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [preselectedEvent, setPreselectedEvent] = useState<string | undefined>(undefined);
  const location = useLocation();

  const handleOpenBooking = (eventType?: string) => {
    setPreselectedEvent(eventType);
    setIsBookingOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-luxury-cream text-luxury-charcoal selection:bg-luxury-gold/30 selection:text-luxury-charcoal">
      <ScrollToTop />
      
      {/* Global Navigation Header */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Main Pages Container */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <PageWrapper>
                  <Home onOpenBooking={() => handleOpenBooking()} />
                </PageWrapper>
              }
            />
            <Route
              path="/about"
              element={
                <PageWrapper>
                  <About />
                </PageWrapper>
              }
            />
            <Route
              path="/services"
              element={
                <PageWrapper>
                  <Services onOpenBooking={(evt) => handleOpenBooking(evt)} />
                </PageWrapper>
              }
            />
            <Route
              path="/gallery"
              element={
                <PageWrapper>
                  <Gallery />
                </PageWrapper>
              }
            />

            <Route
              path="/faq"
              element={
                <PageWrapper>
                  <FAQ />
                </PageWrapper>
              }
            />
            <Route
              path="/contact"
              element={
                <PageWrapper>
                  <Contact />
                </PageWrapper>
              }
            />
          </Routes>
        </AnimatePresence>
      </main>

      {/* Global Layout Footer */}
      <Footer />

      {/* Floating Action Bars */}
      <FloatingActions />

      {/* Consultation Request Overlay Form */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        eventType={preselectedEvent}
      />
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
