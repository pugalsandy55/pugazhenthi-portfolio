'use client';

import { useState } from 'react';
import {
  ArrowUpRight,
  Github,
  ExternalLink,
  Layers,
  CheckCircle2,
  AlertCircle,
  MousePointer2,
  Lock,
} from 'lucide-react';
import { Project } from '@/types/portfolio';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'details'>('overview');

  return (
    <article className={`project-card-v2 visual-${project.visualType}`} id={`project-${project.id}`}>
      {/* Visual Canvas Column */}
      <div className="card-visual-pane">
        <div className="visual-top-strip">
          <span className="visual-badge-pill">{project.visualBadge}</span>
          <span className="visual-index-num">NO. {project.number}</span>
        </div>

        {/* Dynamic Graphic Rendering based on visualType */}
        {project.visualType === 'vision' && (
          <div className="graphic-hud-canvas">
            <div className="hud-radar-ring outer-ring">
              <div className="hud-radar-ring middle-ring">
                <div className="hud-radar-ring inner-ring">
                  <div className="hud-center-node">
                    <MousePointer2 size={24} className="hud-cursor-icon" />
                  </div>
                </div>
              </div>
            </div>
            <div className="hud-telemetry-tag tag-left">
              <span className="hud-micro-label">DRIVER MONITORING</span>
              <strong>EYE TRACKING ACTIVE</strong>
            </div>
            <div className="hud-telemetry-tag tag-right">
              <span className="hud-micro-label">MODEL INFERENCE</span>
              <strong>VISION TRANSFORMER</strong>
            </div>
            <div className="hud-status-chip">
              <span className="hud-dot" />
              <span>COORDINATE: 13°04&apos; N / 80°16&apos; E</span>
            </div>
          </div>
        )}

        {project.visualType === 'catering' && (
          <div className="graphic-catering-canvas">
            {/* Unique Animation 5: Warm Culinary Aura & Floating Plate Orbits */}
            <div className="catering-ambient-bg" aria-hidden="true">
              <div className="culinary-aura-glow" />
              <div className="culinary-plate-orbit">
                <div className="orbit-dish-ring ring-1" />
                <div className="orbit-dish-ring ring-2" />
              </div>
            </div>

            <div className="catering-order-card">
              {/* Golden laser scanline scanning down receipt */}
              <div className="ticket-scan-laser" aria-hidden="true" />

              {/* Live Table Reservation Status Header */}
              <div className="catering-live-status-bar">
                <span className="table-live-dot" />
                <span className="table-live-text">TABLE #12 // EVENT BOOKING</span>
                <span className="table-price-badge">CONFIRMED</span>
              </div>

              <div className="catering-brand-header">
                <span className="catering-sub">THE GATHERING TABLE</span>
                <h4 className="catering-name">
                  Curated Dining.<br />
                  <em>Seamless Reservations.</em>
                </h4>
              </div>

              <div className="catering-divider-line" />

              <div className="catering-item-row">
                <span>01 // BESPOKE EVENT PLANNING</span>
                <span className="catering-tag-state">ACTIVE</span>
              </div>
              <div className="catering-item-row">
                <span>02 // TASTING MENU SELECTION</span>
                <span className="catering-tag-state">TIER I</span>
              </div>
              <div className="catering-item-row">
                <span>03 // KITCHEN DISPATCH PIPELINE</span>
                <span className="catering-tag-state">DJANGO SQL</span>
              </div>

              {/* Animated 3-Stage Kitchen Dispatch Progress Pipeline */}
              <div className="catering-dispatch-track">
                <div className="dispatch-track-bar">
                  <div className="dispatch-progress-fill" />
                </div>
                <div className="dispatch-steps-row">
                  <span className="dispatch-step step-done">● BOOKED</span>
                  <span className="dispatch-step step-curated">● MENU PREP</span>
                  <span className="dispatch-step step-live">● DISPATCH OUT</span>
                </div>
              </div>

              {/* Wax Seal Stamp of Verification */}
              <div className="catering-wax-stamp" aria-hidden="true">
                <span className="stamp-inner">VERIFIED // DJANGO</span>
              </div>
            </div>

            <div className="catering-accent-spark" aria-hidden="true">✳</div>
          </div>
        )}

        {project.visualType === 'portfolio' && (
          <div className="graphic-portfolio-canvas">
            {/* Unique Animation 6: Flowing Aurora Mesh & Holographic Grid */}
            <div className="portfolio-aurora-bg" aria-hidden="true">
              <div className="aurora-mesh-wave" />
              <div className="portfolio-code-grid" />
            </div>

            <div className="browser-mockup-frame">
              <div className="browser-chrome-bar">
                <div className="chrome-dots-group">
                  <span className="chrome-dot dot-red" />
                  <span className="chrome-dot dot-yellow" />
                  <span className="chrome-dot dot-green" />
                </div>
                <span className="chrome-url-pill">pugal.dev/experience</span>
                {/* Live FPS / Performance HUD */}
                <div className="chrome-telemetry-hud">
                  <span className="fps-live-dot" />
                  <span className="fps-counter">60 FPS</span>
                  <span className="perf-score">100/100</span>
                </div>
              </div>

              <div className="browser-stage-viewport">
                <span className="browser-kicker">ENGINEERED FOR EXCELLENCE</span>
                <h4 className="browser-headline">
                  Curiosity<br />
                  <em className="headline-motion-shimmer">in Motion.</em>
                </h4>

                <div className="browser-interactive-demo">
                  {/* Interactive simulated button */}
                  <div className="demo-interactive-btn">
                    <span>EXPLORE WORK</span>
                    <span className="btn-arrow-icon">→</span>
                    <span className="btn-click-ripple" aria-hidden="true" />
                  </div>

                  {/* Simulated Autonomous Cursor navigating & clicking */}
                  <div className="browser-sim-cursor" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                      <path d="M3 3l7 18 3-7 7-3L3 3z" />
                    </svg>
                  </div>
                </div>

                <div className="browser-specs-row">
                  <span className="spec-pill pill-next">NEXT.JS 15</span>
                  <span className="spec-pill pill-react">REACT 19</span>
                  <span className="spec-pill pill-ts">TYPESCRIPT</span>
                </div>
              </div>
            </div>

            {/* Spinning React 19 Atomic Orbit Emblem in corner */}
            <div className="portfolio-atomic-orbit" aria-hidden="true">
              <div className="atom-core-dot" />
              <div className="atom-electron-ring ring-x" />
              <div className="atom-electron-ring ring-y" />
            </div>
          </div>
        )}

        {project.visualType === 'itsm' && (
          <div className="graphic-itsm-canvas">
            {/* Background Radar Rings like Project 04 */}
            <div className="canvas-radar-bg itsm-radar-theme" aria-hidden="true">
              <div className="hud-radar-ring radar-bg-outer">
                <div className="hud-radar-ring radar-bg-middle">
                  <div className="hud-radar-ring radar-bg-inner" />
                </div>
              </div>
            </div>

            <div className="itsm-console-card">
              <div className="card-scanline itsm-scanline-color" aria-hidden="true" />
              <div className="itsm-header-row">
                <div className="itsm-header-left">
                  <span className="itsm-status-dot" />
                  <span className="itsm-console-title">ZOHO DESK // ENTERPRISE ITSM</span>
                </div>
                <span className="itsm-sla-badge">SLA 99.4% ON-TIME</span>
              </div>
              <div className="itsm-metrics-strip">
                <div className="itsm-metric-item">
                  <span className="metric-kpi">MTTR &lt; 45M</span>
                  <span className="metric-tag">AVG RESOLUTION</span>
                </div>
                <div className="itsm-metric-item">
                  <span className="metric-kpi">RBAC ACTIVE</span>
                  <span className="metric-tag">ACCESS CONTROL</span>
                </div>
              </div>
              <div className="itsm-ticket-queue">
                <div className="ticket-item-row ticket-p1">
                  <span className="ticket-priority">P1 CRITICAL</span>
                  <span className="ticket-subject">Network Gateway & VPN Access</span>
                  <span className="ticket-status-pill">RESOLVED</span>
                </div>
                <div className="ticket-item-row ticket-p2">
                  <span className="ticket-priority">P2 HIGH</span>
                  <span className="ticket-subject">Department M365 Onboarding</span>
                  <span className="ticket-status-pill">ROUTED</span>
                </div>
                <div className="ticket-item-row ticket-workflow">
                  <span className="ticket-priority">AUTOMATION</span>
                  <span className="ticket-subject">SLA Escalation Triggered</span>
                  <span className="ticket-status-pill">ACTIVE</span>
                </div>
              </div>
            </div>
            <div className="itsm-accent-spark" aria-hidden="true">⚙</div>
          </div>
        )}

        {project.visualType === 'monitoring' && (
          <div className="graphic-monitoring-canvas">
            {/* Unique Animation 1: Flowing Real-time Oscilloscope Telemetry Wave */}
            <div className="monitoring-oscilloscope-bg" aria-hidden="true">
              <svg className="oscilloscope-svg" viewBox="0 0 400 200" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgba(56, 189, 248, 0.05)" />
                    <stop offset="30%" stopColor="rgba(56, 189, 248, 0.4)" />
                    <stop offset="70%" stopColor="rgba(52, 211, 153, 0.6)" />
                    <stop offset="100%" stopColor="rgba(56, 189, 248, 0.05)" />
                  </linearGradient>
                </defs>
                <path
                  className="oscilloscope-wave-path wave-path-1"
                  d="M 0 100 Q 50 40, 100 100 T 200 100 T 300 100 T 400 100"
                />
                <path
                  className="oscilloscope-wave-path wave-path-2"
                  d="M 0 100 Q 60 140, 120 100 T 240 100 T 360 100 T 480 100"
                />
              </svg>
              {/* Telemetry Matrix Grid Lines */}
              <div className="telemetry-grid-lines" />
            </div>

            <div className="monitoring-console-card">
              <div className="card-scanline monitoring-scanline-color" aria-hidden="true" />
              
              <div className="monitoring-header-row">
                <div className="monitoring-header-left">
                  <span className="monitoring-status-dot" />
                  <span className="monitoring-console-title">GRAFANA // OBSERVABILITY STACK</span>
                </div>
                <span className="monitoring-uptime-badge">99.98% UPTIME</span>
              </div>

              {/* Server Cluster Node LED strip */}
              <div className="monitoring-cluster-nodes">
                <span className="cluster-label">CLUSTER:</span>
                <div className="cluster-leds">
                  {['srv-01', 'srv-02', 'srv-03', 'srv-04', 'srv-05', 'srv-06'].map((node, i) => (
                    <span key={node} className="cluster-node-pill" title={`${node}: healthy`}>
                      <span className={`cluster-led led-pulse-${(i % 3) + 1}`} />
                      {node}
                    </span>
                  ))}
                </div>
              </div>

              <div className="monitoring-metrics-strip">
                <div className="monitoring-metric-item">
                  <span className="metric-kpi metric-latency">18ms</span>
                  <span className="metric-tag">AVG LATENCY</span>
                </div>
                <div className="monitoring-metric-item">
                  <span className="metric-kpi">34 / 34</span>
                  <span className="metric-tag">ACTIVE HOSTS</span>
                </div>
                <div className="monitoring-metric-item">
                  <span className="metric-kpi metric-ok">0 DOWN</span>
                  <span className="metric-tag">MTTD &lt; 30S</span>
                </div>
              </div>

              {/* Dynamic Live SVG Prometheus Latency Area Graph */}
              <div className="monitoring-live-chart-box">
                <div className="chart-header">
                  <span className="chart-title">PROMETHEUS TIME-SERIES LATENCY (MS)</span>
                  <span className="chart-live-tag">● LIVE STREAM</span>
                </div>
                <div className="chart-svg-wrap">
                  <svg viewBox="0 0 320 60" className="chart-svg" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="chartGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="rgba(56, 189, 248, 0.4)" />
                        <stop offset="100%" stopColor="rgba(56, 189, 248, 0.02)" />
                      </linearGradient>
                    </defs>
                    <line x1="0" y1="15" x2="320" y2="15" stroke="rgba(255,255,255,0.06)" strokeDasharray="3,3" />
                    <line x1="0" y1="35" x2="320" y2="35" stroke="rgba(255,255,255,0.06)" strokeDasharray="3,3" />
                    <path
                      d="M 0 45 Q 40 20, 80 32 T 160 22 T 240 38 T 320 18 L 320 60 L 0 60 Z"
                      fill="url(#chartGrad)"
                    />
                    <path
                      className="chart-stream-line"
                      d="M 0 45 Q 40 20, 80 32 T 160 22 T 240 38 T 320 18"
                      fill="none"
                      stroke="#38bdf8"
                      strokeWidth="2"
                    />
                    <circle className="chart-tracer-dot" cx="320" cy="18" r="3.5" fill="#34d399" />
                  </svg>
                </div>
              </div>

              <div className="monitoring-heartbeat-panel">
                <div className="hb-panel-header">
                  <span className="hb-sub">UPTIME KUMA HEARTBEAT PROBE (24H)</span>
                  <span className="hb-healthy-label">OPERATIONAL</span>
                </div>
                <div className="hb-bar-grid">
                  {Array.from({ length: 24 }).map((_, i) => (
                    <span
                      key={i}
                      className={`hb-tick ${i === 17 ? 'hb-tick-warn' : 'hb-tick-ok'}`}
                      style={{
                        height: `${i === 17 ? 60 : 75 + ((i * 7) % 25)}%`,
                        animationDelay: `${i * 90}ms`,
                      }}
                    />
                  ))}
                </div>
              </div>

              <div className="monitoring-probe-list">
                <div className="probe-item-row">
                  <span className="probe-badge badge-prom">PROMETHEUS</span>
                  <span className="probe-target">Linux Production Cluster</span>
                  <span className="probe-stat">SCRAPING 15s</span>
                </div>
                <div className="probe-item-row">
                  <span className="probe-badge badge-kuma">UPTIME KUMA</span>
                  <span className="probe-target">Gateway &amp; Enterprise Web Apps</span>
                  <span className="probe-stat">HTTP 200 OK</span>
                </div>
              </div>
            </div>
            
            {/* Live Telemetry Ping Beacon in corner */}
            <div className="monitoring-ping-beacon" aria-hidden="true">
              <span className="ping-beacon-ring" />
              <span className="ping-beacon-core">⚡</span>
            </div>
          </div>
        )}

        {project.visualType === 'powerplatform' && (
          <div className="graphic-power-canvas">
            {/* Unique Animation 2: High-Tech Logic Circuit Board & Flow Pipeline */}
            <div className="power-circuit-bg" aria-hidden="true">
              <svg className="circuit-trace-svg" viewBox="0 0 400 300" preserveAspectRatio="none">
                <path className="circuit-line-path line-1" d="M 20 50 L 100 50 L 140 90 L 260 90 L 300 130 L 380 130" />
                <path className="circuit-line-path line-2" d="M 380 250 L 300 250 L 260 210 L 140 210 L 100 170 L 20 170" />
                <path className="circuit-line-path line-3" d="M 200 10 L 200 70 L 240 110 L 240 220" />
                <circle cx="20" cy="50" r="3" className="circuit-node-dot" />
                <circle cx="380" cy="130" r="3" className="circuit-node-dot" />
                <circle cx="380" cy="250" r="3" className="circuit-node-dot" />
                <circle cx="20" cy="170" r="3" className="circuit-node-dot" />
              </svg>
              <div className="circuit-grid-overlay" />
            </div>

            <div className="power-console-card">
              <div className="card-scanline power-scanline-color" aria-hidden="true" />
              
              <div className="power-header-row">
                <div className="power-header-left">
                  <span className="power-status-dot" />
                  <span className="power-console-title">POWER PLATFORM // IT HELPDESK</span>
                </div>
                <span className="power-rbac-badge">RBAC ENFORCED</span>
              </div>

              <div className="power-metrics-strip">
                <div className="power-metric-item">
                  <span className="metric-kpi metric-flow">&lt; 3 SEC</span>
                  <span className="metric-tag">FLOW TRIGGER</span>
                </div>
                <div className="power-metric-item">
                  <span className="metric-kpi">M365 LISTS</span>
                  <span className="metric-tag">NORMALIZED DATA</span>
                </div>
                <div className="power-metric-item">
                  <span className="metric-kpi metric-audit">100% AUDIT</span>
                  <span className="metric-tag">SLA COMPLIANCE</span>
                </div>
              </div>

              {/* Multi-stage workflow diagram with PHYSICAL MOVING ENERGY PACKETS */}
              <div className="power-workflow-pipeline">
                <div className="pw-step-box pw-step-1">
                  <span className="pw-step-num">01</span>
                  <div className="pw-step-info">
                    <strong className="pw-step-name">Power Apps</strong>
                    <span className="pw-step-action">Canvas Form / RBAC Capture</span>
                  </div>
                  <span className="pw-step-status pw-status-done">SUBMITTED</span>
                </div>

                {/* Animated Pipeline Cable with sliding energy packet */}
                <div className="pipeline-conduit" aria-hidden="true">
                  <div className="conduit-track" />
                  <div className="conduit-packet packet-flow-1" />
                  <span className="conduit-indicator">▼</span>
                </div>

                <div className="pw-step-box pw-step-2 pw-step-active">
                  <span className="pw-step-num">02</span>
                  <div className="pw-step-info">
                    <strong className="pw-step-name">Power Automate</strong>
                    <span className="pw-step-action">Multi-Stage Approval &amp; SLA Routing</span>
                  </div>
                  <span className="pw-step-status pw-status-active">
                    <span className="mini-spinner" />
                    EXECUTING
                  </span>
                </div>

                {/* Animated Pipeline Cable with second sliding energy packet */}
                <div className="pipeline-conduit" aria-hidden="true">
                  <div className="conduit-track" />
                  <div className="conduit-packet packet-flow-2" />
                  <span className="conduit-indicator">▼</span>
                </div>

                <div className="pw-step-box pw-step-3">
                  <span className="pw-step-num">03</span>
                  <div className="pw-step-info">
                    <strong className="pw-step-name">SharePoint &amp; Teams</strong>
                    <span className="pw-step-action">Encrypted Store &amp; Instant Webhooks</span>
                  </div>
                  <span className="pw-step-status pw-status-synced">SYNCED</span>
                </div>
              </div>

              {/* Live Flow Execution Ticker */}
              <div className="power-flow-ticker">
                <span className="ticker-label">ENGINE:</span>
                <span className="ticker-state">HTTP WEBHOOK ➔ ODATA FILTER ➔ RBAC RESOLVED</span>
              </div>
            </div>

            {/* Rotating Automation Gear Emblem in corner */}
            <div className="power-automation-cog" aria-hidden="true">
              <span className="cog-icon">⚙</span>
              <span className="cog-pulse-glow" />
            </div>
          </div>
        )}
      </div>

      {/* Structured Content Pane */}
      <div className="card-content-pane">
        <div className="card-header-meta">
          <span className="card-category-label">{project.categoryLabel}</span>
          <span className="card-edition-label">PROJECT {project.number}</span>
        </div>

        <h3 className="card-main-title">{project.title}</h3>
        <p className="card-tagline">{project.tagline}</p>

        {/* Tab Switcher for Apple-style progressive disclosure */}
        <div className="card-segmented-tabs">
          <button
            type="button"
            className={`tab-btn ${activeTab === 'overview' ? 'tab-btn-active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            Overview
          </button>
          <button
            type="button"
            className={`tab-btn ${activeTab === 'details' ? 'tab-btn-active' : ''}`}
            onClick={() => setActiveTab('details')}
          >
            Problem & Solution
          </button>
        </div>

        {/* Tab Content */}
        <div className="card-tab-body">
          {activeTab === 'overview' ? (
            <div className="tab-pane-fade">
              <p className="project-body-text">{project.description}</p>
            </div>
          ) : (
            <div className="tab-pane-fade">
              <div className="problem-solution-box">
                <div className="ps-row">
                  <span className="ps-label">CHALLENGE:</span>
                  <p className="ps-text">{project.problemSolved}</p>
                </div>
                <div className="ps-row">
                  <span className="ps-label">CONTRIBUTION:</span>
                  <p className="ps-text">{project.contribution}</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Technology Tag Chips */}
        <div className="card-tech-stack" aria-label="Technologies used">
          {project.stack.map((tech) => (
            <span key={tech} className="tech-chip">
              {tech}
            </span>
          ))}
        </div>

        {/* Footer Actions & Verification Status */}
        <div className="card-footer-strip">
          <div className="card-status-info">
            <AlertCircle size={13} className="status-info-icon" />
            <span className="status-note-text">{project.statusNote}</span>
          </div>

          <div className="card-action-links">
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="action-link-btn"
                aria-label={`View ${project.title} source code on GitHub`}
              >
                <Github size={15} />
                <span>Source</span>
              </a>
            ) : (
              <span className="action-pill-muted">
                <Lock size={12} />
                <span>Private Repo</span>
              </span>
            )}

            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="action-link-btn btn-highlight"
                aria-label={`Open live demo for ${project.title}`}
              >
                <span>Live Demo</span>
                <ArrowUpRight size={14} />
              </a>
            ) : (
              <span className="action-pill-muted">
                <span>Demo On Request</span>
              </span>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
