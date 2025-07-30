import React from 'react';

// Import components
import Hero from '../components/Hero';
import WhyEarlyIntervention from '../components/WhyEarlyIntervention';
import Services from '../components/Services';
import FounderStory from '../components/FounderStory';
import Testimonials from '../components/Testimonials';
import CSRSection from '../components/CSRSection';
import BlogHighlights from '../components/BlogHighlights';
import FinalCTA from '../components/FinalCTA';

const HomePage = () => {
  return (
    <>
      <Hero />
      <WhyEarlyIntervention />
      <Services />
      <FounderStory />
      <Testimonials />
      <CSRSection />
      <BlogHighlights />
      <FinalCTA />
    </>
  );
};

export default HomePage;