import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FiArrowUp,
  FiArrowUpRight,
  FiCommand,
  FiFileText,
  FiGithub,
  FiLinkedin,
  FiMail,
} from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';
import { personal, projects } from '../data/index';

const socials = [
  { icon: <FiGithub />, href: personal.github, label: 'GitHub' },
  { icon: <FiLinkedin />, href: personal.linkedin, label: 'LinkedIn' },
  { icon: <FiMail />, href: `mailto:${personal.email}`, label: 'Email' },
  { icon: <FiFileText />, href: personal.resume, label: 'Resume' },
];

export default function Footer() {
  const { openCommandPalette, openProjectModal } = useTheme();
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const featuredList = projects.filter((p) => p.type === 'featured').slice(0, 4);

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-brand">
            <Link to="/" className="nav-brand">
              <span className="nav-logo-box">JP</span>
              <div className="nav-brand-text">
                <span className="nav-brand-name">{personal.name}</span>
                <span className="nav-brand-role">Software &amp; AI Engineer</span>
              </div>
            </Link>
            <p className="footer-brand-desc">{personal.tagline}</p>
            <div className="footer-status-badge">
              <span className="pulse-dot" />
              <span>Available for Internships &amp; Collaborations</span>
            </div>
            <div className="footer-socials">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  title={s.label}
                  className="footer-social"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Column */}
          <div className="footer-col">
            <h4 className="footer-col-title">Navigation</h4>
            <div className="footer-links">
              <Link to="/" className="footer-link" onClick={scrollToTop}>
                Home Overview
              </Link>
              <Link to="/projects" className="footer-link" onClick={scrollToTop}>
                Projects Archive
              </Link>
              <Link to="/certificates" className="footer-link" onClick={scrollToTop}>
                Certifications &amp; Awards
              </Link>
              <Link to="/contact" className="footer-link" onClick={scrollToTop}>
                Contact &amp; Inquiry
              </Link>
            </div>
          </div>

          {/* Flagship Builds Column */}
          <div className="footer-col">
            <h4 className="footer-col-title">Flagship Builds</h4>
            <div className="footer-links">
              {featuredList.map((proj) => (
                <button
                  type="button"
                  key={proj.id}
                  className="footer-link footer-link-btn"
                  onClick={() => openProjectModal(proj)}
                >
                  <span>{proj.title}</span>
                  <FiArrowUpRight />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Actions Column */}
          <div className="footer-col">
            <h4 className="footer-col-title">Shortcuts</h4>
            <div className="footer-links">
              <button
                type="button"
                className="footer-cmd-card"
                onClick={openCommandPalette}
              >
                <div className="footer-cmd-top">
                  <FiCommand />
                  <span>Command Palette</span>
                </div>
                <p>Press Ctrl+K / ⌘K anytime to search projects &amp; actions.</p>
              </button>
              <a
                href={`mailto:${personal.email}`}
                className="footer-email-pill"
              >
                <FiMail />
                <span>{personal.email}</span>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            © {new Date().getFullYear()} {personal.name}. Crafted with React &amp; modern CSS.
          </div>
          <div className="footer-made-with">
            <span>Ahmedabad, India</span>
            <span className="footer-dot">•</span>
            <span>B.Tech CSE @ LJ University</span>
          </div>
        </div>
      </div>

      {showBackToTop && (
        <button
          className="back-to-top"
          onClick={scrollToTop}
          aria-label="Back to top"
          title="Back to top"
        >
          <FiArrowUp />
        </button>
      )}
    </footer>
  );
}
