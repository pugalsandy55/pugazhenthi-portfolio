'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { Sparkles, ArrowRight } from 'lucide-react';

interface CreativeIntroProps {
  onComplete: () => void;
  isOpen: boolean;
}

export default function CreativeIntro({ onComplete, isOpen }: CreativeIntroProps) {
  // Motion stages matching Creative South 2023 animation:
  // 1. 'conveyor' (0.0s - 1.8s): Pink ball rolls along conveyor into cream U-cradle.
  // 2. 'stream'   (1.8s - 2.8s): Amber stream connects from ceiling into cradle.
  // 3. 'pan'      (2.8s - 4.4s): Camera pans vertically up industrial pillar & windows into starry sky.
  // 4. 'badge'    (4.4s - 8.5s): Starry night creator badge with 5 crescent rainbow arcs & bold typography.
  const [stage, setStage] = useState<'conveyor' | 'stream' | 'pan' | 'badge'>('conveyor');
  const [isExiting, setIsExiting] = useState(false);

  const handleFinish = useCallback(() => {
    if (isExiting) return;
    setIsExiting(true);
    setTimeout(() => {
      onComplete();
    }, 800); // Allow camera shutter glide-up transition to complete
  }, [isExiting, onComplete]);

  // Keyboard shortcut to skip (Escape or Spacebar)
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === ' ') {
        handleFinish();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handleFinish]);

  // Exact choreographed timeline from Creative South 2023 animation
  useEffect(() => {
    if (!isOpen) return;

    setStage('conveyor');
    setIsExiting(false);

    // Timeline:
    // 1.8s: Ball reaches cream cradle -> Amber molten stream pours in
    const t1 = setTimeout(() => {
      setStage('stream');
    }, 1800);

    // 2.8s: Camera begins smooth vertical pan up factory pillar into starry sky
    const t2 = setTimeout(() => {
      setStage('pan');
    }, 2800);

    // 4.4s: Camera reaches starry sky -> Creator badge with crescent rainbow arcs & typography expand
    const t3 = setTimeout(() => {
      setStage('badge');
    }, 4400);

    // 8.5s: Auto-transition into website
    const t4 = setTimeout(() => {
      handleFinish();
    }, 8500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [isOpen, handleFinish]);

  if (!isOpen) return null;

  return (
    <aside
      className={`creative-intro-overlay ${isExiting ? 'intro-sliding-up' : ''}`}
      aria-label="Creative South 2023 Animated Opening Sequence"
      role="dialog"
      aria-modal="true"
    >
      {/* Top Controls: Skip Intro Button */}
      <button
        type="button"
        className="intro-skip-btn"
        onClick={handleFinish}
        aria-label="Skip animation and enter website"
      >
        <span>SKIP INTRO</span>
        <span className="skip-key-pill">ESC</span>
        <ArrowRight size={13} className="skip-arrow" />
      </button>

      {/* Camera Viewport Rig that smoothly pans from Factory Floor to Starry Space */}
      <div className={`cs-camera-rig stage-${stage}`}>
        
        {/* ==================================================================
            UPPER ENVIRONMENT: STARRY NIGHT CREATOR SHOWCASE
            ================================================================== */}
        <section className="cs-starry-showcase" aria-label="Creator Reveal">
          {/* Floating Star Speckles (✦, ✧, •) */}
          <div className="cs-starfield" aria-hidden="true">
            <span className="cs-star cs-star-1">✦</span>
            <span className="cs-star cs-star-2">✧</span>
            <span className="cs-star cs-star-3">✦</span>
            <span className="cs-star cs-star-4">✧</span>
            <span className="cs-star cs-star-5">✦</span>
            <span className="cs-dot cs-dot-1">•</span>
            <span className="cs-dot cs-dot-2">•</span>
            <span className="cs-dot cs-dot-3">•</span>
            <span className="cs-dot cs-dot-4">•</span>
          </div>

          {/* Typography Header Stack (Exactly like Michael Fugoso in Creative South 2023) */}
          <div className="cs-creator-typography-stack">
            <div className="cs-brand-pill">
              <Sparkles size={11} className="cs-pill-spark" />
              <span>PUGAZHENTHI</span>
              <span className="cs-brand-est">EST. 2024</span>
            </div>

            <h1 className="cs-creator-name">
              PUGAZHENTHI P
            </h1>
            <p className="cs-creator-role">
              FULL-STACK DEVELOPER &amp; IT PROFESSIONAL
            </p>
          </div>

          {/* Centerpiece: Circular Portrait with Complete Concentric Rainbow Circles */}
          <div className="cs-badge-wrapper" aria-hidden="true">
            {/* The 5 Concentric Complete Rainbow Circles */}
            <svg
              className="cs-crescent-rainbow-svg"
              viewBox="0 0 320 320"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
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

            {/* Circular Portrait with Thick Golden Border */}
            <div className="cs-portrait-core">
              <Image
                src="/images/profile-portrait.jpeg"
                alt="Pugazhenthi P — PUGAL/DEV"
                fill
                priority
                sizes="180px"
                className="cs-portrait-image"
              />
              <div className="cs-gold-rim-overlay" />
            </div>
          </div>

          {/* Tagline & Call To Enter Website */}
          <div className="cs-creator-footer-stack">
            <p className="cs-tagline-p">
              <span className="cs-tag-amber">DESIGN.</span>{' '}
              <span className="cs-tag-lime">CODE.</span>{' '}
              <span className="cs-tag-coral">CREATE.</span>
            </p>

            <button
              type="button"
              className="cs-enter-btn"
              onClick={handleFinish}
              aria-label="Enter portfolio experience"
            >
              <span>ENTER EXPERIENCE</span>
              <ArrowRight size={14} className="cs-enter-arrow" />
            </button>
            <span className="cs-skip-hint">PRESS ESC OR SPACE TO SKIP</span>
          </div>
        </section>

        {/* ==================================================================
            LOWER ENVIRONMENT: INDUSTRIAL FACTORY ASSEMBLY FLOOR
            ================================================================== */}
        <section className="cs-factory-floor" aria-label="Mechanical Factory Floor">
          {/* Background Industrial Factory Windows */}
          <div className="cs-factory-window-row" aria-hidden="true">
            <div className="cs-window-panel">
              <span className="window-pane" />
              <span className="window-pane" />
              <span className="window-pane" />
              <span className="window-pane" />
            </div>
            <div className="cs-window-panel">
              <span className="window-pane" />
              <span className="window-pane" />
              <span className="window-pane" />
              <span className="window-pane" />
            </div>
            <div className="cs-window-panel">
              <span className="window-pane" />
              <span className="window-pane" />
              <span className="window-pane" />
              <span className="window-pane" />
            </div>
          </div>

          {/* Vertical Steel Column with Rivet Header (Left of Center) */}
          <div className="cs-steel-column" aria-hidden="true">
            <div className="column-head-bracket">
              <span className="col-rivet" />
              <span className="col-rivet" />
              <span className="col-rivet" />
              <span className="col-rivet" />
            </div>
            <div className="column-shaft" />
          </div>

          {/* Amber Molten Stream pouring from ceiling into cradle */}
          <div className={`cs-amber-stream ${stage !== 'conveyor' ? 'stream-active' : ''}`} aria-hidden="true">
            <div className="stream-fluid-core" />
          </div>

          {/* Mechanical Conveyor Belt Track */}
          <div className="cs-conveyor-assembly" aria-hidden="true">
            {/* The Rolling Pink Ball */}
            <div className={`cs-pink-ball ${stage !== 'conveyor' ? 'ball-in-cradle' : ''}`} />

            {/* Central Cream U-Cradle Elevator Bucket */}
            <div className="cs-cradle-elevator">
              <div className="cradle-u-bucket" />
              <div className="cradle-pivot-joint">
                <span className="pivot-dot" />
              </div>
            </div>

            {/* Conveyor Belt Housing */}
            <div className="cs-conveyor-track-casing">
              {/* Upper Link Slots */}
              <div className="conveyor-links-strip top-strip" />

              {/* The Oval Rollers with Split Cream/Shadow */}
              <div className="cs-rollers-carousel">
                {Array.from({ length: 11 }).map((_, i) => (
                  <div key={i} className="cs-split-roller">
                    <span className="roller-half-cream" />
                    <span className="roller-half-shadow" />
                  </div>
                ))}
              </div>

              {/* Lower Link Slots */}
              <div className="conveyor-links-strip bottom-strip" />
            </div>

            {/* Rotating Gear Cog below conveyor */}
            <div className="cs-conveyor-gear">⚙</div>

            {/* Assembly Floor HUD */}
            <div className="cs-factory-hud-tag">
              <span className="hud-indicator-dot" />
              <span>IDEA ASSEMBLY // STAGE 01</span>
            </div>
          </div>
        </section>

      </div>
    </aside>
  );
}
