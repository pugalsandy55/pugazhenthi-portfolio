import { Code2, Server, Palette, Wrench, CheckCircle2 } from 'lucide-react';
import { skillCategories } from '@/data/portfolio';

const categoryIcons = [
  <Code2 key="frontend" size={18} className="text-accent" />,
  <Server key="backend" size={18} className="text-accent" />,
  <Palette key="design" size={18} className="text-accent" />,
  <Wrench key="tools" size={18} className="text-accent" />,
];

export default function SkillsSection() {
  return (
    <section className="section-container" id="skills" aria-label="Skills & Capabilities">
      <div className="section-heading-block reveal-on-scroll">
        <div className="heading-copy">
          <span className="section-eyebrow">04 // SKILLS & CAPABILITIES</span>
          <h2 className="section-title">
            Focused toolkit.{' '}
            <span className="title-serif-italic">No vanity metrics.</span>
          </h2>
        </div>
        <p className="heading-subtext">
          A transparent inventory of languages, frameworks, and workflows actively applied in real projects and coursework.
        </p>
      </div>

      <div className="skills-grid-layout reveal-on-scroll">
        {skillCategories.map((cat, index) => (
          <div key={cat.title} className="skill-category-card">
            <div className="skill-card-header">
              <div className="skill-icon-wrap">{categoryIcons[index % categoryIcons.length]}</div>
              <span className="skill-card-index">0{index + 1}</span>
            </div>

            <h3 className="skill-category-name">{cat.title}</h3>
            <p className="skill-category-desc">{cat.subtitle}</p>

            <div className="skill-items-wrap" role="list">
              {cat.items.map((item) => (
                <div key={item} className="skill-badge-pill" role="listitem">
                  <span className="skill-dot-marker" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="skills-editorial-disclaimer reveal-on-scroll">
        <CheckCircle2 size={16} className="text-accent flex-shrink-0" />
        <p>
          Technologies listed reflect direct implementation in academic research, Django full-stack builds,
          and frontend design. Skill proficiencies are demonstrated through code, not arbitrary percentage bars.
        </p>
      </div>
    </section>
  );
}
