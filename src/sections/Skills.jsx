import { useRef } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { FiBookOpen, FiBriefcase, FiCode, FiMapPin, FiUsers } from 'react-icons/fi';
import { icons } from '../data/icons';
import { techStack } from '../data';

const stats = [
  { icon: <FiCode />, value: 17, suffix: '+', label: 'Projects Built' },
  { icon: <FiBookOpen />, value: 14, suffix: '', label: 'Certifications' },
  { icon: <FiUsers />, value: 4, suffix: '', label: 'Hackathons' },
  { icon: <FiBriefcase />, value: 250, suffix: '+', label: 'Learning Hours' },
];

export default function Skills() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const sectionRef = useRef(null);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="section" id="skills" ref={sectionRef} style={{ background: 'var(--bg-primary)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-badge">Highlights</div>
          <h2 className="section-title">Skills & Metrics</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            A snapshot of my technical toolkit and what I've accomplished so far.
          </p>
        </div>

        {/* Stats row */}
        <div className="about-focus-grid skills-stats" ref={ref}>
          {stats.map((stat) => (
            <article className="about-focus-card skill-stat-card" key={stat.label}>
              <div className="skill-stat-icon">{stat.icon}</div>
              <div className="skill-stat-number">
                {inView ? <CountUp end={stat.value} duration={1.5} /> : 0}
                {stat.suffix}
              </div>
              <div className="skill-stat-label">{stat.label}</div>
            </article>
          ))}
        </div>

        {/* Tech stack categories */}
        <div className="skills-categories">
          {techStack.map((category) => (
            <div className="tech-category-wrapper" key={category.category}>
              <h3 className="tech-category-title">{category.category}</h3>
              <div className="tech-stack-grid">
                {category.items.map(({ name, icon, color, description }) => {
                  const IconComponent = icons[icon];
                  return (
                    <div className="tech-item" key={name} title={description}>
                      <div className="tech-item-inner">
                        {IconComponent && <IconComponent className="tech-icon" style={{ color }} />}
                        <div className="tech-item-name">{name}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="skills-cta">
          <button className="btn btn-secondary" onClick={() => scrollTo('projects')}>
            <FiBriefcase /> See My Work
          </button>
        </div>
      </div>
    </section>
  );
}

