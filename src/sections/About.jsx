import { useEffect, useState } from 'react';
import {
  FiCheck,
  FiClock,
  FiCode,
  FiCopy,
  FiCpu,
  FiGlobe,
  FiLayers,
  FiTerminal,
  FiUsers,
} from 'react-icons/fi';
import SpotlightCard from '../components/SpotlightCard';
import { education, personal } from '../data/index';

const focusPillars = [
  {
    icon: <FiLayers />,
    tag: 'Architecture',
    title: 'Full-Stack Web Systems',
    text: 'Architecting end-to-end applications with React, Next.js, Django, FastAPI, and relational/NoSQL databases.',
    accent: '#8b5cf6',
  },
  {
    icon: <FiCpu />,
    tag: 'Intelligence',
    title: 'AI & Data Pipelines',
    text: 'Transforming raw datasets into actionable insights, automated ML preprocessing, and LLM-powered experiences.',
    accent: '#06b6d4',
  },
  {
    icon: <FiTerminal />,
    tag: 'Tooling',
    title: 'Developer Productivity',
    text: 'Building local-first utilities like RequestLab and MD Studio with zero-latency workflows and privacy by design.',
    accent: '#10b981',
  },
  {
    icon: <FiUsers />,
    tag: 'Community',
    title: 'Hackathons & Open Source',
    text: 'Competing in collegiate hackathons (DA-IICT, LDCE, LJ) and shipping clean, well-documented open-source code.',
    accent: '#f59e0b',
  },
];

export default function About() {
  const [localTime, setLocalTime] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const updateClock = () => {
      try {
        const formatted = new Intl.DateTimeFormat('en-US', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        }).format(new Date());
        setLocalTime(`${formatted} IST`);
      } catch {
        setLocalTime('IST (UTC+5:30)');
      }
    };
    updateClock();
    const timer = setInterval(updateClock, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard?.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="section about-section" id="about">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <FiCode /> <span>About &amp; Philosophy</span>
          </div>
          <h2 className="section-title">Engineered for Impact</h2>
          <p className="section-subtitle">
            A closer look at how I approach problem-solving, software architecture, and product craftsmanship.
          </p>
        </div>

        {/* Main Bento Grid */}
        <div className="bento-grid">
          {/* Bento Cell 1: Bio & Engineering Workflow (Span 7) */}
          <SpotlightCard className="bento-cell bento-span-7 bento-bio-card">
            <div className="bento-eyebrow">01 // THE DEVELOPER</div>
            <h3 className="bento-heading">
              Turning complex ideas into <span className="gradient-text">clean, reliable software</span>.
            </h3>
            <p className="bento-body-text">{personal.bio}</p>

            <div className="bento-workflow-strip">
              <div className="workflow-step">
                <span className="workflow-num">01</span>
                <div>
                  <strong>Architect</strong>
                  <span>Clean schemas &amp; APIs</span>
                </div>
              </div>
              <div className="workflow-divider" />
              <div className="workflow-step">
                <span className="workflow-num">02</span>
                <div>
                  <strong>Build</strong>
                  <span>React + Python/Node</span>
                </div>
              </div>
              <div className="workflow-divider" />
              <div className="workflow-step">
                <span className="workflow-num">03</span>
                <div>
                  <strong>Ship</strong>
                  <span>Fast, accessible UI</span>
                </div>
              </div>
            </div>
          </SpotlightCard>

          {/* Bento Cell 2: Location, Live Time & Quick Connect (Span 5) */}
          <SpotlightCard className="bento-cell bento-span-5 bento-location-card">
            <div className="bento-eyebrow">02 // BASE &amp; AVAILABILITY</div>
            <div className="location-globe-header">
              <div className="globe-icon-ring">
                <FiGlobe />
              </div>
              <div>
                <h3 className="bento-heading-sm">{education.location}</h3>
                <div className="live-clock-pill">
                  <FiClock />
                  <span>{localTime || 'IST (UTC+5:30)'}</span>
                </div>
              </div>
            </div>

            <div className="bento-status-list">
              <div className="bento-status-row">
                <span className="status-key">University</span>
                <span className="status-val">{education.school}</span>
              </div>
              <div className="bento-status-row">
                <span className="status-key">Degree</span>
                <span className="status-val">
                  {education.degree} CSE ({education.duration})
                </span>
              </div>
              <div className="bento-status-row">
                <span className="status-key">Current Status</span>
                <span className="status-val status-open-badge">
                  <span className="pulse-dot" /> Open to Opportunities
                </span>
              </div>
            </div>

            <button
              type="button"
              className="bento-copy-email-btn"
              onClick={handleCopyEmail}
            >
              {copied ? <FiCheck /> : <FiCopy />}
              <span>{copied ? 'Email Copied!' : `Copy ${personal.email}`}</span>
            </button>
          </SpotlightCard>

          {/* Bento Row 2: 4 Core Engineering Pillars (Each Span 3) */}
          {focusPillars.map((pillar) => (
            <SpotlightCard
              className="bento-cell bento-span-3 bento-pillar-card"
              key={pillar.title}
              tilt
            >
              <div className="pillar-top">
                <div
                  className="pillar-icon-box"
                  style={{ '--pillar-color': pillar.accent }}
                >
                  {pillar.icon}
                </div>
                <span className="pillar-tag">{pillar.tag}</span>
              </div>
              <h3 className="pillar-title">{pillar.title}</h3>
              <p className="pillar-text">{pillar.text}</p>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
