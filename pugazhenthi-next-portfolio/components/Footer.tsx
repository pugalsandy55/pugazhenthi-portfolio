'use client';

import { ArrowUp } from 'lucide-react';
import { siteMeta } from '@/data/portfolio';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer-container" aria-label="Site Footer">
      <div className="footer-inner-shell">
        <div className="footer-top-row">
          {/* Wordmark */}
          <a href="#home" className="wordmark footer-wordmark" aria-label="Pugazhenthi p — Back to top">
            <span className="mark-badge">
              <span className="mark-letter">P</span>
            </span>
            <span className="wordmark-text">
              Pugazhenthi p
            </span>
          </a>

          {/* Timezone / Location Indicator */}
          <div className="footer-time-badge">
            <span className="footer-live-dot" />
            <span>CHENNAI, INDIA · IST (UTC+5:30)</span>
          </div>

          {/* Back to Top Button */}
          <button
            type="button"
            className="btn-back-to-top"
            onClick={scrollToTop}
            aria-label="Back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp size={14} className="top-arrow" />
          </button>
        </div>

        <div className="footer-bottom-row">
          <p className="footer-credit">
            Engineered with Next.js 15, TypeScript, and Apple-inspired motion design.
          </p>
          <p className="footer-copyright">
            © {currentYear} {siteMeta.name.toUpperCase()} · ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
}
