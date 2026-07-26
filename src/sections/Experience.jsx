import { experience } from '../data/index';

const typeColors = {
  Internship: { bg: 'rgba(124,58,237,0.1)', color: '#7c3aed', border: 'rgba(124,58,237,0.2)' },
  'Open Source': { bg: 'rgba(16,185,129,0.1)', color: '#10b981', border: 'rgba(16,185,129,0.2)' },
  Freelance: { bg: 'rgba(6,182,212,0.1)', color: '#06b6d4', border: 'rgba(6,182,212,0.2)' },
  Hackathon: { bg: 'rgba(245,158,11,0.1)', color: '#f59e0b', border: 'rgba(245,158,11,0.2)' },
};

export default function Experience() {
  return (
    <section className="section experience-section" id="experience">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">💼 Experience</div>
          <h2 className="section-title">My Journey</h2>
          <p className="section-subtitle">
            From hackathons to internships — here's what I've built and learned along the way.
          </p>
        </div>

        <div className="timeline">
          {experience.map((item, i) => {
            const style = typeColors[item.type] || typeColors.Internship;
            return (
              <div className="timeline-item" key={i}>
                <div className="timeline-dot" />
                <div className="timeline-date">{item.duration}</div>
                <div className="experience-card">
                  <div className="experience-header">
                    <div>
                      <div className="experience-role">{item.role}</div>
                      <div className="experience-company">{item.company}</div>
                    </div>
                    <div style={{
                      padding: '0.2rem 0.75rem',
                      borderRadius: 'var(--radius-full)',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      background: style.bg,
                      color: style.color,
                      border: `1px solid ${style.border}`,
                      flexShrink: 0,
                    }}>
                      {item.type}
                    </div>
                  </div>

                  <p className="experience-desc">{item.description}</p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '0.75rem' }}>
                    {item.tech.map(t => (
                      <span className="tag" key={t}>{t}</span>
                    ))}
                  </div>

                  {item.achievement && (
                    <div style={{
                      display: 'flex', alignItems: 'center', gap: '0.5rem',
                      padding: '0.5rem 0.75rem',
                      borderRadius: 'var(--radius-md)',
                      background: 'rgba(16,185,129,0.08)',
                      border: '1px solid rgba(16,185,129,0.2)',
                      fontSize: '0.8rem',
                      color: '#10b981',
                      fontWeight: 600,
                    }}>
                      🏆 {item.achievement}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
