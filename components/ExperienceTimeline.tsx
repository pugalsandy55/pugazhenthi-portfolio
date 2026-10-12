import { Briefcase, AlertTriangle, Sparkles, ArrowUpRight } from 'lucide-react';
import { experienceList } from '@/data/portfolio';

export default function ExperienceTimeline() {
  return (
    <section className="section-container" id="experience" aria-label="Professional Experience">
      <div className="section-heading-block reveal-on-scroll">
        <div className="heading-copy">
          <span className="section-eyebrow">03 // CAREER & JOURNEY</span>
          <h2 className="section-title">
            Industry &{' '}
            <span className="title-serif-italic">operations.</span>
          </h2>
        </div>
        <p className="heading-subtext">
          Enterprise IT administration, Linux and Windows system management, infrastructure observability, and full-stack web engineering.
        </p>
      </div>

      <div className="timeline-container reveal-on-scroll">
        {/* Timeline Items */}
        <div className="timeline-track-list">
          {experienceList.map((item, index) => (
            <article
              key={item.id}
              className={`timeline-entry-card ${item.isCurrent ? 'entry-current' : ''} ${
                item.needsVerification ? 'entry-flagged' : ''
              }`}
            >
              <div className="timeline-marker-col">
                <span className={`timeline-number-node ${item.isCurrent ? 'node-current' : ''}`}>
                  0{index + 1}
                </span>
                <span className="timeline-vertical-line" />
              </div>

              <div className="timeline-content-pane">
                <div className="timeline-header-meta">
                  <span className={`timeline-period-badge ${item.isCurrent ? 'badge-current' : ''}`}>
                    {item.period}
                  </span>
                  {item.isCurrent && (
                    <span className="timeline-live-status-pill">
                      <span className="live-status-dot" />
                      ACTIVE POSITION
                    </span>
                  )}
                  <span className="timeline-location-pill">{item.location}</span>
                </div>

                <div className="timeline-role-group">
                  <h3 className="timeline-role-title">{item.role}</h3>
                  <span className="timeline-company-name">{item.company}</span>
                </div>

                <p className="timeline-overview">{item.description}</p>

                {/* Key Achievements & Responsibilities */}
                <ul className="timeline-highlights-list">
                  {item.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="timeline-highlight-item">
                      <span className="highlight-bullet">▸</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* Skills Chips */}
                <div className="timeline-skills-row">
                  {item.skillsUsed.map((skill) => (
                    <span key={skill} className="timeline-skill-chip">
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Date Overlap Verification Flag */}
                {item.needsVerification && (
                  <div className="timeline-verification-callout" role="note">
                    <AlertTriangle size={16} className="callout-icon" />
                    <div className="callout-text">
                      <strong>Audit Notice (Requires Confirmation):</strong>
                      <p>{item.verificationNote}</p>
                    </div>
                  </div>
                )}
              </div>
            </article>
          ))}

          {/* Collaborative / Freelance Open Call Banner */}
          <div className="timeline-entry-card entry-upcoming">
            <div className="timeline-marker-col">
              <span className="timeline-number-node node-upcoming">
                <Sparkles size={14} />
              </span>
            </div>

            <div className="timeline-content-pane upcoming-slot-content">
              <div className="upcoming-slot-badge">
                <span>OPEN FOR CONTRACTS & COLLABORATIONS</span>
              </div>
              <h3 className="upcoming-slot-title">Looking for High-Impact Projects</h3>
              <p className="upcoming-slot-text">
                Alongside enterprise systems administration, I actively take on freelance web engineering, Python/Django
                architecture, and custom frontend interface development.
              </p>
              <a href="#contact" className="upcoming-slot-link">
                <span>Start a Project Conversation</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
