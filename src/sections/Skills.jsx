import { useMemo, useRef, useState } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import {
  FiAward,
  FiBookOpen,
  FiBriefcase,
  FiCode,
  FiCpu,
  FiUsers,
} from 'react-icons/fi';
import SpotlightCard from '../components/SpotlightCard';
import { icons } from '../data/icons';
import { techStack } from '../data';

const stats = [
  {
    icon: <FiCode />,
    value: 17,
    suffix: '+',
    label: 'Projects Shipped',
    sub: 'Full-stack, AI & dev tools',
  },
  {
    icon: <FiAward />,
    value: 14,
    suffix: '',
    label: 'Certifications',
    sub: 'Google, IBM, UPenn & HackerRank',
  },
  {
    icon: <FiUsers />,
    value: 4,
    suffix: '',
    label: 'Hackathons',
    sub: 'DA-IICT, LDCE & LJ University',
  },
  {
    icon: <FiBookOpen />,
    value: 250,
    suffix: '+',
    label: 'Learning Hours',
    sub: 'DSA, ML & System Design',
  },
];

export default function Skills() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });
  const sectionRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const allItems = useMemo(
    () =>
      techStack.flatMap((group) =>
        group.items.map((item) => ({
          ...item,
          category: group.category,
        }))
      ),
    []
  );

  const categories = useMemo(
    () => ['All', ...techStack.map((g) => g.category)],
    []
  );

  const displayedItems = useMemo(() => {
    if (activeCategory === 'All') return allItems;
    return allItems.filter((item) => item.category === activeCategory);
  }, [activeCategory, allItems]);

  return (
    <section
      className="section skills-section"
      id="skills"
      ref={sectionRef}
    >
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <FiCpu /> <span>Technical Arsenal</span>
          </div>
          <h2 className="section-title">Stack, Tools &amp; Metrics</h2>
          <p className="section-subtitle">
            Modern frameworks, languages, and infrastructure I use to design, build, and deploy production-ready applications.
          </p>
        </div>

        {/* Impact Counter Bento Row */}
        <div className="skills-stats-grid" ref={ref}>
          {stats.map((stat) => (
            <SpotlightCard
              className="skill-stat-bento"
              key={stat.label}
              tilt
            >
              <div className="skill-stat-top">
                <div className="skill-stat-icon">{stat.icon}</div>
                <div className="skill-stat-number">
                  {inView ? <CountUp end={stat.value} duration={1.8} /> : 0}
                  {stat.suffix}
                </div>
              </div>
              <div className="skill-stat-label">{stat.label}</div>
              <div className="skill-stat-sub">{stat.sub}</div>
            </SpotlightCard>
          ))}
        </div>

        {/* Kinetic Infinite Tech Marquee */}
        <div className="tech-marquee-container" aria-label="Technology Marquee">
          <div className="tech-marquee-track">
            {[...allItems, ...allItems].map((item, idx) => {
              const IconComponent = icons[item.icon];
              return (
                <div className="tech-marquee-pill" key={`${item.name}-${idx}`}>
                  {IconComponent && (
                    <IconComponent
                      className="tech-marquee-icon"
                      style={{ color: item.color }}
                    />
                  )}
                  <span>{item.name}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="skills-filter-bar" role="tablist" aria-label="Filter skills by category">
          {categories.map((cat) => (
            <button
              type="button"
              key={cat}
              role="tab"
              aria-selected={activeCategory === cat}
              className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Interactive Bento Tech Grid */}
        <div className="tech-bento-grid">
          {displayedItems.map(({ name, icon, color, description, category }) => {
            const IconComponent = icons[icon];
            return (
              <SpotlightCard
                className="tech-bento-card"
                key={name}
                tilt
              >
                <div className="tech-bento-header">
                  <div
                    className="tech-bento-icon-wrap"
                    style={{ '--tech-color': color }}
                  >
                    {IconComponent && (
                      <IconComponent
                        className="tech-icon"
                        style={{ color }}
                      />
                    )}
                  </div>
                  <span className="tech-bento-cat">{category}</span>
                </div>
                <div className="tech-bento-body">
                  <h3 className="tech-bento-name">{name}</h3>
                  <p className="tech-bento-desc">{description}</p>
                </div>
              </SpotlightCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
