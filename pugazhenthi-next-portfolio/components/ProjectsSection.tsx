'use client';

import { useState } from 'react';
import { Sparkles, Layers } from 'lucide-react';
import { projects } from '@/data/portfolio';
import { ProjectCategory } from '@/types/portfolio';
import ProjectCard from './ProjectCard';

const filterCategories: Array<{ id: ProjectCategory; label: string }> = [
  { id: 'all', label: 'All Projects' },
  { id: 'ai', label: 'AI & Computer Vision' },
  { id: 'fullstack', label: 'Full-Stack & Django' },
  { id: 'frontend', label: 'Creative Engineering' },
  { id: 'systems', label: 'ITSM & Observability' },
];

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');

  const filteredProjects =
    selectedCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section className="section-container" id="work" aria-label="Featured Projects">
      <div className="section-heading-block reveal-on-scroll">
        <div className="heading-copy">
          <span className="section-eyebrow">01 // SELECTED WORKS</span>
          <h2 className="section-title">
            Built for purpose.{' '}
            <span className="title-serif-italic">Refined with craft.</span>
          </h2>
        </div>
        <p className="heading-subtext">
          A showcase of full-stack engineering, deep-learning computer vision, and responsive web systems
          built with precision and user clarity.
        </p>
      </div>

      {/* Segmented Category Filter */}
      <div className="project-filter-toolbar reveal-on-scroll">
        <div className="filter-segmented-control" role="tablist" aria-label="Filter projects by category">
          {filterCategories.map((cat) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={selectedCategory === cat.id}
              className={`filter-pill-btn ${selectedCategory === cat.id ? 'filter-pill-active' : ''}`}
              onClick={() => setSelectedCategory(cat.id)}
            >
              <span>{cat.label}</span>
              {selectedCategory === cat.id && <span className="active-glow-indicator" />}
            </button>
          ))}
        </div>
        <div className="project-count-badge">
          <span>{filteredProjects.length} OF {projects.length} PROJECTS</span>
        </div>
      </div>

      {/* Projects Grid / Stack */}
      <div className="projects-collection-stack reveal-on-scroll">
        {filteredProjects.map((project) => (
          <div key={project.id} className="project-item-fade">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

      {/* Editorial Disclaimer & Assurance */}
      <div className="section-footnote-banner reveal-on-scroll">
        <Sparkles size={16} className="text-accent" />
        <p>
          Project summaries reflect genuine academic and independent engineering work.
          Additional case studies and live deployments are added as development completes.
        </p>
      </div>
    </section>
  );
}
