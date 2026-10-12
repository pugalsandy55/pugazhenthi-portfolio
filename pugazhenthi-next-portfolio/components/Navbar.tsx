'use client';

import { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X, Sparkles } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
  number: string;
}

const navItems: NavItem[] = [
  { label: 'Work', href: '#work', number: '01' },
  { label: 'About', href: '#about', number: '02' },
  { label: 'Experience', href: '#experience', number: '03' },
  { label: 'Skills', href: '#skills', number: '04' },
];

interface NavbarProps {
  onReplayIntro?: () => void;
}

export default function Navbar({ onReplayIntro }: NavbarProps = {}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['home', 'work', 'about', 'experience', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`site-header-wrapper ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="site-header-inner">
        <a className="wordmark" href="#home" aria-label="PUGAZHENTHI — Back to top">
          <span className="mark-badge cs-mark-badge">
            <span className="mark-letter">P</span>
            <span className="mark-glow" />
          </span>
          <span className="wordmark-text">
            PUGAZHENTHI
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace('#', '');
            return (
              <a
                key={item.href}
                href={item.href}
                className={`nav-link ${isActive ? 'nav-link-active' : ''}`}
              >
                <span className="nav-number">{item.number}</span>
                <span className="nav-label">{item.label}</span>
                {isActive && <span className="nav-active-dot" aria-hidden="true" />}
              </a>
            );
          })}
        </nav>

        {/* Header Right Action */}
        <div className="header-actions">
          <a
            className="nav-cta-button"
            href="#contact"
            aria-label="Contact Pugazhenthi for projects"
          >
            <Sparkles size={14} className="cta-spark" />
            <span>Let&apos;s Talk</span>
            <ArrowUpRight size={15} className="cta-arrow" />
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            className="mobile-menu-toggle"
            type="button"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-panel"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Panel */}
      <div
        id="mobile-nav-panel"
        className={`mobile-nav-drawer ${menuOpen ? 'mobile-nav-open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <div className="mobile-nav-content">
          <span className="mobile-nav-eyebrow">NAVIGATION</span>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`mobile-nav-item ${
                activeSection === item.href.replace('#', '') ? 'mobile-nav-active' : ''
              }`}
              onClick={closeMenu}
            >
              <span className="mobile-nav-index">{item.number}</span>
              <span className="mobile-nav-title">{item.label}</span>
              <ArrowUpRight size={16} className="mobile-nav-arrow" />
            </a>
          ))}
          <a
            className="mobile-nav-cta"
            href="#contact"
            onClick={closeMenu}
          >
            <span>Start a Conversation</span>
            <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
    </header>
  );
}
