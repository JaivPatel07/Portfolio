import { useEffect, useRef, useState } from 'react';
import { FiDownload, FiMessageCircle } from 'react-icons/fi';
import { personal } from '../data/index';

function AnimatedCounter({ end, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started) {
        setStarted(true);
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const endNum = parseInt(end);
    const step = endNum / (duration / 16);
    let current = 0;
    const timer = setInterval(() => {
      current = Math.min(current + step, endNum);
      setCount(Math.floor(current));
      if (current >= endNum) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [started, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function About() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="section" id="about">
      <div className="container">
        <div className="about-grid">
          {/* Left: Image + Stats */}
          <div className="about-image-side">
            <div className="about-img-wrapper" style={{
              background: 'linear-gradient(135deg, rgba(124,58,237,0.1), rgba(6,182,212,0.1))',
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--radius-xl)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '12rem',
              aspectRatio: '4/5',
            }}>
              <span style={{ filter: 'drop-shadow(0 0 30px rgba(124,58,237,0.3))' }}>👨‍💻</span>
            </div>

            <div className="about-stats-grid">
              {[
                { label: 'Projects Built', value: personal.stats.projectsBuilt, suffix: '' },
                { label: 'GitHub Repos', value: personal.stats.githubRepos, suffix: '' },
                { label: 'Years Coding', value: personal.stats.yearsOfCoding, suffix: '' },
                { label: 'Hackathons', value: personal.stats.hackathons, suffix: '' },
              ].map(stat => (
                <div className="about-stat-card" key={stat.label}>
                  <div className="about-stat-number">
                    <AnimatedCounter end={parseInt(stat.value)} suffix="+" />
                  </div>
                  <div className="about-stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Content */}
          <div className="about-content">
            <div className="section-header" style={{ textAlign: 'left' }}>
              <div className="section-badge">👨‍💻 About Me</div>
              <h2 className="section-title" style={{ textAlign: 'left' }}>
                Passionate Developer<br />& AI Explorer
              </h2>
            </div>

            <p
              className="about-bio"
              dangerouslySetInnerHTML={{ __html: personal.bio }}
            />
            <p
              className="about-bio"
              style={{ marginTop: '0.75rem' }}
              dangerouslySetInnerHTML={{ __html: personal.bio2 }}
            />

            <div>
              <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>
                Favourite Technologies
              </div>
              <div className="about-tags">
                {['React', 'Next.js', 'Python', 'Django', 'FastAPI', 'OpenAI API', 'PostgreSQL', 'Docker', 'TypeScript'].map(tech => (
                  <span className="tag" key={tech}>{tech}</span>
                ))}
              </div>
            </div>

            <div className="about-fun-facts">
              {personal.funFacts.map((fact, i) => (
                <div className="fun-fact-item" key={i}>
                  <span className="fun-fact-icon">{fact.icon}</span>
                  <span className="fun-fact-text">{fact.text}</span>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a className="btn btn-primary" href={personal.resumeUrl} download>
                <FiDownload /> Download Resume
              </a>
              <button className="btn btn-secondary" onClick={() => scrollTo('contact')}>
                <FiMessageCircle /> Let's Talk
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
