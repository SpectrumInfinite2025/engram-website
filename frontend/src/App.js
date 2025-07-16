import React, { useEffect } from 'react';
import './App.css';
import AOS from 'aos';

// Import components
import Header from './components/Header';
import Hero from './components/Hero';
import WhyEarlyIntervention from './components/WhyEarlyIntervention';
import Services from './components/Services';
import FounderStory from './components/FounderStory';
import Testimonials from './components/Testimonials';
import CSRSection from './components/CSRSection';
import BlogHighlights from './components/BlogHighlights';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <div className="App">
      <Header />
      <Hero />
      <WhyEarlyIntervention />
      <Services />
      <FounderStory />
      <Testimonials />
      <CSRSection />
      <BlogHighlights />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default App;