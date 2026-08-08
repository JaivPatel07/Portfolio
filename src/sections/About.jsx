import { FiCode, FiCpu, FiGithub, FiUsers } from 'react-icons/fi';
import { personal } from '../data/index';

const focusAreas = [
  { icon: <FiCode />, label: 'Full-Stack Development', text: 'Building end-to-end products with React, Node, and Django.' },
  { icon: <FiCpu />, label: 'AI & Data Science', text: 'Applying machine learning and data tools to solve real problems.' },
  { icon: <FiUsers />, label: 'Open Source & Collaboration', text: 'Contributing to communities and shipping maintainable code.' },
  { icon: <FiGithub />, label: 'Continuous Learning', text: 'Exploring new technologies, APIs, and system design concepts.' },
];

export default function About() {
  return (
    <section className="section" id="about" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-badge">About Me</div>
          <h2 className="section-title">Building Real-World Solutions</h2>
          <p className="section-subtitle">
            A Computer Science student and full-stack developer focused on crafting products that
            make a difference.
          </p>
        </div>

        <div className="about-content">
          <p className="about-bio">{personal.bio}</p>

          <div className="about-focus-grid">
            {focusAreas.map((area) => (
              <article className="about-focus-card" key={area.label}>
                <div className="about-focus-icon">{area.icon}</div>
                <h3>{area.label}</h3>
                <p>{area.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

