import { Link } from 'react-router-dom';
import { FiArrowLeft, FiExternalLink } from 'react-icons/fi';
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';
import { achievements } from '../data/index';

// Certificates data — add your real certificates here
const certificates = [
  {
    id: 'aws-cp',
    title: 'AWS Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: 'Dec 2024',
    icon: '☁️',
    color: '#FF9900',
    credentialUrl: null,
    skills: ['Cloud Computing', 'AWS Services', 'IAM', 'S3', 'EC2'],
  },
  {
    id: 'meta-react',
    title: 'Meta Front-End Developer',
    issuer: 'Meta (Coursera)',
    date: 'Oct 2024',
    icon: '⚛️',
    color: '#0081FB',
    credentialUrl: null,
    skills: ['React', 'HTML/CSS', 'JavaScript', 'UI/UX'],
  },
  {
    id: 'google-python',
    title: 'Google IT Automation with Python',
    issuer: 'Google (Coursera)',
    date: 'Aug 2024',
    icon: '🐍',
    color: '#4285F4',
    credentialUrl: null,
    skills: ['Python', 'Automation', 'Git', 'Linux'],
  },
  {
    id: 'deeplearning-ai',
    title: 'Machine Learning Specialization',
    issuer: 'DeepLearning.AI (Coursera)',
    date: 'Jun 2024',
    icon: '🤖',
    color: '#7c3aed',
    credentialUrl: null,
    skills: ['Machine Learning', 'Neural Networks', 'Python', 'TensorFlow'],
  },
  {
    id: 'hackerrank-python',
    title: 'Python (Basic) Certificate',
    issuer: 'HackerRank',
    date: 'May 2024',
    icon: '🏅',
    color: '#2EC866',
    credentialUrl: null,
    skills: ['Python', 'Problem Solving', 'DSA'],
  },
  {
    id: 'hackerrank-react',
    title: 'React (Basic) Certificate',
    issuer: 'HackerRank',
    date: 'Apr 2024',
    icon: '🏅',
    color: '#2EC866',
    credentialUrl: null,
    skills: ['React', 'Hooks', 'State Management'],
  },
];

export default function CertificatesPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 'var(--navbar-height)' }}>
        {/* Page Hero */}
        <div style={{
          background: 'var(--bg-secondary)',
          borderBottom: '1px solid var(--border-color)',
          padding: '4rem 0 3rem',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', top: '-80px', right: '-80px',
            width: '300px', height: '300px', borderRadius: '50%',
            background: 'rgba(245,158,11,0.07)', filter: 'blur(60px)', pointerEvents: 'none',
          }} />
          <div style={{
            position: 'absolute', bottom: '-80px', left: '-80px',
            width: '300px', height: '300px', borderRadius: '50%',
            background: 'rgba(124,58,237,0.07)', filter: 'blur(60px)', pointerEvents: 'none',
          }} />

          <div className="container" style={{ position: 'relative' }}>
            <Link to="/" style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.875rem',
              marginBottom: '1.5rem', transition: 'color var(--transition-fast)',
            }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-primary)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
            >
              <FiArrowLeft /> Back to Home
            </Link>
            <div className="section-badge" style={{ display: 'inline-block', marginBottom: '1rem' }}>🏆 Achievements & Certificates</div>
            <h1 className="section-title" style={{ marginBottom: '1rem' }}>My Achievements</h1>
            <p className="section-subtitle" style={{ maxWidth: '560px', margin: '0 auto' }}>
              Recognition from hackathons, competitions, certifications, and open-source contributions.
            </p>
          </div>
        </div>

        {/* Achievements Section */}
        <section className="section" id="achievements">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">🏆 Milestones & Awards</h2>
              <p className="section-subtitle">Competitions, open-source, and academic recognition.</p>
            </div>

            <div className="achievements-grid">
              {achievements.map((item, i) => (
                <div className="achievement-card" key={i} style={{ '--achievement-color': item.color }}>
                  <div className="achievement-icon-wrapper" style={{
                    background: `${item.color}15`,
                    border: `1px solid ${item.color}30`,
                  }}>
                    <span>{item.icon}</span>
                  </div>
                  <h3 className="achievement-title">{item.title}</h3>
                  <p className="achievement-desc">{item.desc}</p>
                  <div className="achievement-meta">
                    <span>📍</span>
                    <span>{item.meta}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certificates Section */}
        <section className="section" id="certificates" style={{ background: 'var(--bg-secondary)' }}>
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">📜 Certifications</h2>
              <p className="section-subtitle">
                Professional certifications and courses that have shaped my skills.
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: '1.5rem',
            }}>
              {certificates.map((cert) => (
                <div key={cert.id} style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '1.5rem',
                  transition: 'transform var(--transition-normal), border-color var(--transition-normal), box-shadow var(--transition-normal)',
                  cursor: 'default',
                  position: 'relative',
                  overflow: 'hidden',
                }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.borderColor = `${cert.color}40`;
                    e.currentTarget.style.boxShadow = `0 12px 40px ${cert.color}15`;
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = 'var(--border-color)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  {/* Top accent line */}
                  <div style={{
                    position: 'absolute', top: 0, left: 0, right: 0,
                    height: '3px',
                    background: `linear-gradient(90deg, ${cert.color}, transparent)`,
                  }} />

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1rem' }}>
                    <div style={{
                      width: '48px', height: '48px', borderRadius: 'var(--radius-md)',
                      background: `${cert.color}15`, border: `1px solid ${cert.color}30`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '1.5rem', flexShrink: 0,
                    }}>
                      {cert.icon}
                    </div>
                    <div style={{ flex: 1 }}>
                      <h3 style={{
                        fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)',
                        marginBottom: '0.25rem', lineHeight: 1.3,
                      }}>
                        {cert.title}
                      </h3>
                      <div style={{ fontSize: '0.8rem', color: cert.color, fontWeight: 600 }}>
                        {cert.issuer}
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1rem' }}>
                    {cert.skills.map(skill => (
                      <span key={skill} className="tag" style={{ fontSize: '0.7rem' }}>{skill}</span>
                    ))}
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                      📅 {cert.date}
                    </span>
                    {cert.credentialUrl ? (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          display: 'inline-flex', alignItems: 'center', gap: '0.3rem',
                          fontSize: '0.75rem', color: cert.color, textDecoration: 'none',
                          fontWeight: 600,
                          transition: 'opacity var(--transition-fast)',
                        }}
                        onMouseEnter={e => e.currentTarget.style.opacity = '0.7'}
                        onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                      >
                        <FiExternalLink size={12} /> View Credential
                      </a>
                    ) : (
                      <span style={{
                        fontSize: '0.7rem', color: 'var(--text-muted)',
                        background: 'var(--bg-tertiary)', padding: '0.2rem 0.6rem',
                        borderRadius: 'var(--radius-full)',
                      }}>
                        ✓ Verified
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
