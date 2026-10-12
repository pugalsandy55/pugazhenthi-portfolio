'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ArrowDownRight, ArrowUpRight, Sparkles, RotateCcw } from 'lucide-react';
import { siteMeta } from '@/data/portfolio';

interface HeroProps {
  onReplayIntro?: () => void;
}

export default function Hero({ onReplayIntro }: HeroProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!cardRef.current || window.innerWidth < 1024) return;
      const rect = cardRef.current.getBoundingClientRect();
      const cardCenterX = rect.left + rect.width / 2;
      const cardCenterY = rect.top + rect.height / 2;

      // Smooth tilt based on cursor distance
      const distanceX = (e.clientX - cardCenterX) / (window.innerWidth / 2);
      const distanceY = (e.clientY - cardCenterY) / (window.innerHeight / 2);

      setTilt({
        x: Math.max(-10, Math.min(10, distanceY * -12)),
        y: Math.max(-12, Math.min(12, distanceX * 14)),
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="hero-shell creative-south-hero" id="home" aria-label="Introduction and Hero">
      <div className="hero-ambient-glow" aria-hidden="true" />

      {/* Floating Retro Star Sparkles in Hero Background */}
      <div className="hero-starfield-decor" aria-hidden="true">
        <span className="hero-star star-tl">✦</span>
        <span className="hero-star star-tr">✧</span>
        <span className="hero-star star-br">✦</span>
        <span className="hero-star star-bl">✧</span>
      </div>

      <div className="hero-grid">
        {/* Left Editorial Column */}
        <div className="hero-content">
          {/* Subtle Freelance Availability Indicator */}
          <div className="hero-badge reveal-fade">
            <span className="live-dot" />
            <span className="hero-badge-text">AVAILABLE FOR FREELANCE &amp; CONTRACTS</span>
          </div>

          {/* Bold Display Headline */}
          <h1 className="hero-headline cs-headline">
            <span className="headline-line reveal-line line-1">
              Engineering digital solutions
            </span>
            <span className="headline-line reveal-line line-2">
              <span className="headline-serif-italic cs-accent-lime">with code &amp;</span>{' '}
              <span className="headline-gradient cs-gradient-title">creativity.</span>
            </span>
          </h1>

          {/* Supporting Copy (Exact requested text) */}
          <p className="hero-bio reveal-fade delay-2 cs-hero-bio">
            Hey, I&apos;m <strong>Pugazhenthi P</strong> — a Full-Stack Developer and IT professional building scalable web applications, intelligent digital solutions, and seamless user experiences with Python, Django, JavaScript, and modern web technologies.
          </p>

          {/* Primary Action Buttons */}
          <div className="hero-actions-row reveal-fade delay-3">
            <a href="#work" className="btn-apple-primary cs-btn-primary">
              <span>Explore My Work</span>
              <ArrowDownRight size={18} className="btn-icon" />
            </a>
            <a href="#contact" className="btn-apple-secondary cs-btn-secondary">
              <span>Let&apos;s Talk</span>
              <ArrowUpRight size={16} className="btn-icon" />
            </a>

            {/* Replay Intro Action */}
            {onReplayIntro && (
              <button
                type="button"
                className="btn-replay-intro"
                onClick={onReplayIntro}
                title="Replay Creative South 2023 animation"
                aria-label="Replay intro animation"
              >
                <RotateCcw size={14} className="replay-icon" />
                <span>Replay Intro</span>
              </button>
            )}
          </div>

          {/* Tech Stack Chip Cluster */}
          <div className="hero-tech-stack reveal-fade delay-3">
            <div className="hero-tech-header">
              <span className="hero-tech-label">CORE TOOLKIT</span>
              <span className="hero-tech-line" />
            </div>
            <div className="hero-tech-chips">
              {[
                'Python',
                'Django',
                'JavaScript',
                'HTML5',
                'CSS3',
                'SQL',
                'REST APIs',
                'Full-Stack Development',
                'Web Development',
                'UI/UX',
              ].map((tech) => (
                <span key={tech} className="hero-tech-chip">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Location & Focus Specs */}
          <div className="hero-specs reveal-fade delay-4">
            <div className="spec-item">
              <span className="spec-label">BRAND</span>
              <span className="spec-value">PUGAZHENTHI</span>
            </div>
            <div className="spec-separator" />
            <div className="spec-item">
              <span className="spec-label">LOCATION</span>
              <span className="spec-value">{siteMeta.location}</span>
            </div>
            <div className="spec-separator" />
            <div className="spec-item">
              <span className="spec-label">STATUS</span>
              <span className="spec-value text-accent">READY FOR DISPATCH</span>
            </div>
          </div>
        </div>

        {/* Right Creative South 2023 Mechanical Showcase Stage */}
        <div className="hero-visual-col reveal-fade delay-2">
          <div
            ref={cardRef}
            className={`hero-interactive-card cs-interactive-card ${isHovered ? 'card-hovered' : ''}`}
            style={{
              transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
              setIsHovered(false);
              setTilt({ x: 0, y: 0 });
            }}
          >
            {/* Ambient Rainbow Aura Backlight */}
            <div className="cs-ambient-aura" />

            {/* Corner Precision Tech Marks */}
            <span className="corner-cross cross-tl">+</span>
            <span className="corner-cross cross-tr">+</span>
            <span className="corner-cross cross-bl">+</span>
            <span className="corner-cross cross-br">+</span>

            {/* Top Overhead Crane Bracket & Pulley Cable */}
            <div className="cs-stage-header">
              <div className="cs-crane-pulley" aria-hidden="true">
                <span className="pulley-cable" />
                <span className="pulley-bracket">
                  <span className="pulley-rivet" />
                  <span className="pulley-rivet" />
                </span>
              </div>
              <div className="cs-brand-badge-pill">
                <Sparkles size={11} className="text-accent" />
                <span>PUGAZHENTHI</span>
              </div>
            </div>

            {/* The Signature Concentric Crescent Rainbow Arc Creator Badge */}
            <div className="cs-badge-stage-container">
              {/* The 5 Concentric Complete Rainbow Circles */}
              <svg
                className="cs-crescent-rainbow-svg cs-hero-crescent-svg"
                viewBox="0 0 320 320"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                {/* Circle 1: Amber Gold (#f59e0b) */}
                <circle
                  cx="160"
                  cy="160"
                  r="91"
                  stroke="#f59e0b"
                  strokeWidth="8.5"
                  transform="rotate(-90 160 160)"
                  className="cs-arc-path arc-1"
                />
                {/* Circle 2: Coral Red (#f43f5e) */}
                <circle
                  cx="160"
                  cy="160"
                  r="101.5"
                  stroke="#f43f5e"
                  strokeWidth="8.5"
                  transform="rotate(-90 160 160)"
                  className="cs-arc-path arc-2"
                />
                {/* Circle 3: Signature Acid Lime (#d5fb54) */}
                <circle
                  cx="160"
                  cy="160"
                  r="112"
                  stroke="#d5fb54"
                  strokeWidth="8.5"
                  transform="rotate(-90 160 160)"
                  className="cs-arc-path arc-3"
                />
                {/* Circle 4: Electric Magenta (#d946ef) */}
                <circle
                  cx="160"
                  cy="160"
                  r="122.5"
                  stroke="#d946ef"
                  strokeWidth="8.5"
                  transform="rotate(-90 160 160)"
                  className="cs-arc-path arc-4"
                />
                {/* Circle 5: Deep Electric Purple (#8b5cf6) */}
                <circle
                  cx="160"
                  cy="160"
                  r="133"
                  stroke="#8b5cf6"
                  strokeWidth="8.5"
                  transform="rotate(-90 160 160)"
                  className="cs-arc-path arc-5"
                />
              </svg>

              {/* Central Circular Portrait Frame with Golden Rim */}
              <div className="cs-portrait-circle-frame">
                <Image
                  src="/images/profile-portrait.jpeg"
                  alt="Pugazhenthi P — PUGAL/DEV"
                  fill
                  priority
                  sizes="(max-width: 768px) 260px, 320px"
                  className="cs-portrait-circle-img"
                />
                <div className="cs-golden-rim" />
                <div className="cs-film-shade" />
              </div>

              {/* Star sparkles orbiting the badge */}
              <div className="cs-orbit-stars" aria-hidden="true">
                <span className="cs-star star-top-right">✦</span>
                <span className="cs-star star-bottom-left">✧</span>
                <span className="cs-star star-left">✦</span>
              </div>
            </div>

            {/* Mini Mechanical Conveyor Belt Assembly at Base */}
            <div className="cs-mini-conveyor-dock">
              <div className="mini-conveyor-header">
                <span className="dock-title">IDEA FACTORY // ASSEMBLY LINE</span>
                <span className="dock-gear-spin" aria-hidden="true">⚙</span>
              </div>

              {/* Physical mini conveyor track with rolling idea tokens */}
              <div className="mini-conveyor-track-wrapper">
                <div className="mini-conveyor-track">
                  {/* Rolling cream rollers */}
                  <div className="mini-rollers-row">
                    {Array.from({ length: 8 }).map((_, i) => (
                      <span key={i} className="mini-roller" />
                    ))}
                  </div>

                  {/* Flowing Idea Capsules */}
                  <div className="mini-tokens-stream">
                    <span className="mini-token token-idea">💡 IDEA</span>
                    <span className="mini-token token-code">⚡ CODE</span>
                    <span className="mini-token token-create">🚀 CREATE</span>
                  </div>
                </div>
              </div>

              {/* Identity & Tagline Footer */}
              <div className="cs-dock-footer-row">
                <span className="cs-dock-name">Pugazhenthi P</span>
                <span className="cs-dock-tagline">DESIGN · CODE · CREATE</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Cue */}
      <a href="#work" className="hero-scroll-cue" aria-label="Scroll to featured work">
        <span className="scroll-track">
          <span className="scroll-thumb" />
        </span>
        <span className="scroll-text">DISCOVER WORK</span>
      </a>
    </section>
  );
}
