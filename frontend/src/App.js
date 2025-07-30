import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import AOS from 'aos';

// Import components
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';

// Import service pages
import SpeechTherapyPage from './pages/SpeechTherapyPage';
import MultisensoryLearningPage from './pages/MultisensoryLearningPage';
import ShadowTeachingPage from './pages/ShadowTeachingPage';
import ParentCounselingPage from './pages/ParentCounselingPage';
import AssessmentPage from './pages/AssessmentPage';
import OccupationalTherapyPage from './pages/OccupationalTherapyPage';

function App() {
  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services/speech-therapy" element={<SpeechTherapyPage />} />
          <Route path="/services/multisensory-learning" element={<MultisensoryLearningPage />} />
          <Route path="/services/shadow-teaching" element={<ShadowTeachingPage />} />
          <Route path="/services/parent-counseling" element={<ParentCounselingPage />} />
          <Route path="/services/assessment" element={<AssessmentPage />} />
          <Route path="/services/occupational-therapy" element={<OccupationalTherapyPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;