import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import BentoGrid from './components/BentoGrid';
import SocialProof from './components/SocialProof';
import CTA from './components/CTA';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 font-sans antialiased transition-colors duration-300">
        <Navigation />
        <Hero />
        <BentoGrid />
        <SocialProof />
        <CTA />
      </div>
    </ThemeProvider>
  );
}

export default App;