import { education } from '../data/index';
import { FiCalendar, FiMapPin, FiAward } from 'react-icons/fi';

export default function Education() {
  return (
    <section className="section education-section" id="education">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">🎓 Education</div>
          <h2 className="section-title">Academic Background</h2>
          <p className="section-subtitle">
            Building a strong foundation in Computer Science while staying hands-on with real projects.
          </p>
        </div>

        <div className="education-card">
          <div className="education-header">
            <div className="education-logo">{education.logo}</div>
            <div>
              <div className="education-degree">{education.degree} in {education.major}</div>
              <div className="education-major">{education.school}</div>
              <div className="education-school">{education.location}</div>
            </div>
          </div>

          <div className="education-meta">
            <div className="education-meta-item">
              <FiCalendar style={{ color: 'var(--accent-primary)' }} />
              <span>{education.duration}</span>
            </div>
            {education.cgpa && (
              <div className="education-meta-item">
                <FiAward style={{ color: 'var(--accent-tertiary)' }} />
                <span>CGPA: <strong style={{ color: 'var(--text-primary)' }}>{education.cgpa}</strong></span>
              </div>
            )}
            <div className="education-meta-item">
              <FiMapPin style={{ color: 'var(--accent-secondary)' }} />
              <span>{education.location}</span>
            </div>
          </div>

          <div style={{ marginTop: '1.5rem' }}>
            <div style={{
              fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-muted)',
              textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem',
            }}>
              📚 Relevant Coursework
            </div>
            <div className="education-courses">
              {education.courses.map(course => (
                <span className="tag tag-cyan" key={course}>{course}</span>
              ))}
            </div>
          </div>

          {education.achievements && (
            <div style={{ marginTop: '1.5rem' }}>
              <div style={{
                fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-muted)',
                textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem',
              }}>
                🏆 Academic Achievements
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {education.achievements.map(ach => (
                  <div key={ach} style={{
                    display: 'flex', alignItems: 'center', gap: '0.5rem',
                    fontSize: '0.9rem', color: 'var(--text-secondary)',
                  }}>
                    <span style={{ color: 'var(--accent-tertiary)' }}>✦</span>
                    {ach}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
