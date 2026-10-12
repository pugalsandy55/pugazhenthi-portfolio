import { GraduationCap, ArrowUpRight, Compass, ShieldCheck } from 'lucide-react';
import { siteMeta, educationList } from '@/data/portfolio';

export default function AboutSection() {
  return (
    <section className="section-container" id="about" aria-label="About Pugazhenthi P">
      <div className="section-heading-block reveal-on-scroll">
        <div className="heading-copy">
          <span className="section-eyebrow">02 // ABOUT & PHILOSOPHY</span>
          <h2 className="section-title">
            Curious mind.{' '}
            <span className="title-serif-italic">Practical maker.</span>
          </h2>
        </div>
        <p className="heading-subtext">
          Bridging enterprise IT operations, infrastructure observability, and full-stack software development with Python, Django, and modern web architecture.
        </p>
      </div>

      <div className="about-split-layout">
        {/* Left Column: Narrative & Values */}
        <div className="about-narrative-col reveal-on-scroll">
          <p className="narrative-lead-paragraph">
            I am a multidisciplinary technical professional who bridges enterprise infrastructure administration with full-stack software development.
            Whether diagnosing mission-critical production systems or developing database-driven web applications, I bring engineering rigor
            to operational reliability and deliberate, user-centered craft to software engineering.
          </p>
          <div className="narrative-body-text">
            <p>
              On the systems and operations side, I administer Linux and Windows environments, manage Active Directory, Azure VMs, and Microsoft 365,
              deploy real-time infrastructure observability pipelines with Uptime Kuma, Prometheus, and Grafana, and architect custom enterprise workflow
              automations across Zoho Desk, Power Apps, and Power Automate.
            </p>
            <p>
              As a software engineer, my technical foundation is anchored in Python, Django, JavaScript, and relational database architecture with SQL.
              I design structured backend models, develop REST APIs, and build responsive, accessible web interfaces that emphasize performance,
              clean code maintainability, and refined visual typography.
            </p>
            <p>
              Holding a Master of Computer Applications (MCA) with an 8.80 CGPA, I treat system administration, automation scripting, and web application
              development as an integrated engineering continuum—building digital systems that are rock-solid under operational load and intuitive for end users.
            </p>
          </div>

          <div className="about-stats-strip">
            {siteMeta.stats.map((stat) => (
              <div key={stat.label} className="about-stat-card">
                <span className="stat-card-value">{stat.value}</span>
                <span className="stat-card-label">{stat.label}</span>
              </div>
            ))}
          </div>

          <a href="#contact" className="narrative-cta-link">
            <span>Discuss a collaboration</span>
            <ArrowUpRight size={16} />
          </a>
        </div>

        {/* Right Column: Education & Qualifications */}
        <div className="about-education-col reveal-on-scroll">
          <div className="education-panel-card">
            <div className="panel-top-title">
              <div className="panel-title-group">
                <GraduationCap size={18} className="text-accent" />
                <span className="panel-heading">ACADEMIC FOUNDATION</span>
              </div>
              <span className="panel-status-tag">VERIFIED</span>
            </div>

            <div className="education-timeline-list">
              {educationList.map((edu, idx) => (
                <div key={edu.degree} className="education-card-item">
                  <div className="edu-period-badge">
                    <span>{edu.period}</span>
                    <span className="edu-cgpa-pill">{edu.grade}</span>
                  </div>
                  <h3 className="edu-degree-title">{edu.degree}</h3>
                  <p className="edu-institution-text">{edu.institution}</p>
                  <p className="edu-location-meta">{edu.location} · {edu.field}</p>
                </div>
              ))}
            </div>

            <div className="education-secondary-note">
              <Compass size={15} className="text-accent flex-shrink-0" />
              <p>
                <strong>Earlier Academic Milestones:</strong> Higher Secondary Certificate (HSC),
                Swami Dayananda Matric Higher Secondary School (2017–2019, 52.5%); Secondary School
                Leaving Certificate (SSLC), St. Joseph Matric School (2017, 71.2%).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
