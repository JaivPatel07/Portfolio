import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FiArrowRight,
  FiAward,
  FiBookOpen,
  FiCalendar,
  FiCheck,
  FiCheckCircle,
  FiCopy,
  FiMail,
  FiMapPin,
  FiStar,
} from 'react-icons/fi';
import SpotlightCard from '../components/SpotlightCard';
import { achievements, education, personal } from '../data/index';

export default function Education() {
  const [copied, setCopied] = useState(false);

  const highlightCerts = achievements.categories
    .flatMap((c) => c.list)
    .slice(0, 4);

  const handleCopyEmail = () => {
    navigator.clipboard?.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="section education-section" id="education">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <FiBookOpen /> <span>Education &amp; Credentials</span>
          </div>
          <h2 className="section-title">Academic Journey &amp; Honors</h2>
          <p className="section-subtitle">
            Combining strong computer science fundamentals with hands-on hackathons and industry certifications.
          </p>
        </div>

        <div className="bento-grid">
          {/* Academic Degree & Coursework Card (Span 7) */}
          <SpotlightCard className="bento-cell bento-span-7 edu-main-bento">
            <div className="edu-header-row">
              <div className="education-logo">{education.logo}</div>
              <div className="edu-title-group">
                <span className="edu-eyebrow">UNDERGRADUATE DEGREE</span>
                <h3 className="education-degree">
                  {education.degree} in {education.major}
                </h3>
                <div className="education-school">{education.school}</div>
              </div>
            </div>

            <div className="education-meta">
              <div className="education-meta-pill">
                <FiCalendar /> <span>{education.duration}</span>
              </div>
              <div className="education-meta-pill">
                <FiMapPin /> <span>{education.location}</span>
              </div>
              <div className="education-meta-pill highlight">
                <FiAward /> <span>CGPA: {education.cgpa}</span>
              </div>
            </div>

            {education.achievements && (
              <div className="edu-honors-box">
                <h4 className="edu-sub-label">
                  <FiStar /> Key Academic Achievements
                </h4>
                <div className="edu-honors-list">
                  {education.achievements.map((ach) => (
                    <div className="edu-honor-item" key={ach}>
                      <FiCheckCircle className="honor-icon" />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="edu-courses-block">
              <h4 className="edu-sub-label">Core Computer Science Coursework</h4>
              <div className="education-courses">
                {education.courses.map((course) => (
                  <span className="tag" key={course}>
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </SpotlightCard>

          {/* Certifications & Hackathons Spotlight Card (Span 5) */}
          <SpotlightCard className="bento-cell bento-span-5 edu-certs-bento">
            <div className="edu-certs-top">
              <div>
                <span className="edu-eyebrow">VERIFIED MILESTONES</span>
                <h3 className="bento-heading-sm">
                  Certifications &amp; Hackathons
                </h3>
              </div>
              <span className="certs-count-badge">14+ Earned</span>
            </div>

            <div className="edu-certs-preview-list">
              {highlightCerts.map((cert) => (
                <a
                  key={cert.title}
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer"
                  className="edu-cert-mini-item"
                >
                  <div className="edu-cert-mini-info">
                    <strong>{cert.title}</strong>
                    <span>
                      {cert.issuer} • {cert.date}
                    </span>
                  </div>
                  <FiArrowRight className="edu-cert-arrow" />
                </a>
              ))}
            </div>

            <Link to="/certificates" className="btn btn-secondary edu-certs-btn">
              <FiAward />
              <span>Browse All Certificates &amp; Hackathons</span>
              <FiArrowRight />
            </Link>
          </SpotlightCard>

          {/* Full-Width Home CTA Banner (Span 12) */}
          <SpotlightCard className="bento-cell bento-span-12 home-cta-banner">
            <div className="home-cta-content">
              <div className="home-cta-text">
                <div className="hero-status-pill">
                  <span className="pulse-dot" />
                  <span>Available for 2026 Internships &amp; Collaborations</span>
                </div>
                <h3 className="home-cta-title">
                  Let&apos;s build something{' '}
                  <span className="gradient-text">extraordinary</span> together.
                </h3>
                <p className="home-cta-sub">
                  Whether you have a full-stack role, an AI product idea, or an open-source collaboration in mind, my inbox is always open.
                </p>
              </div>

              <div className="home-cta-actions">
                <Link to="/contact" className="btn btn-primary">
                  <FiMail />
                  <span>Get in Touch</span>
                </Link>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleCopyEmail}
                >
                  {copied ? <FiCheck /> : <FiCopy />}
                  <span>{copied ? 'Copied Email!' : personal.email}</span>
                </button>
              </div>
            </div>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
}
