import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Common Components
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import HowItWorks from './pages/HowItWorks';
import Prizes from './pages/Prizes';
import Offers from './pages/Offers';
import Winners from './pages/Winners';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Participate from './pages/Participate';
import Confirmation from './pages/Confirmation';
import TicketDetails from './pages/TicketDetails';
import LiveDraw from './pages/LiveDraw';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import ResponsibleParticipation from './pages/ResponsibleParticipation';
import AdminDashboard from './pages/AdminDashboard';
import NotFound from './pages/NotFound';

// Auto scroll to top on navigation
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-[#080a18] text-[#fcf8f0]">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/prizes" element={<Prizes />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/winners" element={<Winners />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/participate" element={<Participate />} />
            <Route path="/enter" element={<Participate />} />
            <Route path="/confirmation" element={<Confirmation />} />
            <Route path="/ticket/:ticketNumber" element={<TicketDetails />} />
            <Route path="/ticket" element={<TicketDetails />} />
            <Route path="/live-draw" element={<LiveDraw />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsConditions />} />
            <Route path="/responsible-participation" element={<ResponsibleParticipation />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
