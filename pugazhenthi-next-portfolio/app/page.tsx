'use client';

import { useState } from 'react';
import ScrollProgress from '@/components/ScrollProgress';
import ScrollObserver from '@/components/ScrollObserver';
import Navbar from '@/components/Navbar';
import CreativeIntro from '@/components/CreativeIntro';
import Hero from '@/components/Hero';
import ProjectsSection from '@/components/ProjectsSection';
import AboutSection from '@/components/AboutSection';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import SkillsSection from '@/components/SkillsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  const handleReplayIntro = () => {
    setShowIntro(true);
  };

  return (
    <>
      {/* Full-Screen Animated Intro Sequence (Creative South 2023 Inspired) */}
      <CreativeIntro isOpen={showIntro} onComplete={handleIntroComplete} />

      {/* Dynamic Reading Progress Bar */}
      <ScrollProgress />

      {/* Cinematic Scroll Reveal Observer */}
      <ScrollObserver />

      {/* Ambient Grain Noise Overlay */}
      <div className="site-canvas-noise" aria-hidden="true" />

      {/* Floating Header */}
      <Navbar onReplayIntro={handleReplayIntro} />

      {/* Primary Landmark Container */}
      <main id="main-content" className="main-viewport">
        <Hero onReplayIntro={handleReplayIntro} />
        <ProjectsSection />
        <AboutSection />
        <ExperienceTimeline />
        <SkillsSection />
        <ContactSection />
      </main>

      {/* Semantic Site Footer */}
      <Footer />
    </>
  );
}
