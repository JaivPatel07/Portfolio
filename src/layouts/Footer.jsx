import { Link } from 'react-router-dom';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiArrowUp } from 'react-icons/fi';
import { personal } from '../data/index';

const socials = [
  { icon: <FiGithub />, href: personal.github },
  { icon: <FiLinkedin />, href: personal.linkedin },
  { icon: <FiTwitter />, href: personal.twitter },
  { icon: <FiMail />, href: `mailto:${personal.email}` },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">&lt;JP /&gt;</div>
            <p className="footer-brand-desc">
              Building modern web experiences with passion and precision. Open to internships,
              freelance projects, and collaborations.
            </p>
            <div className="footer-socials">
              {socials.map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noreferrer" className="footer-social">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div className="footer-col-title">Navigation</div>
            <div className="footer-links">
              <span className="footer-link" onClick={() => scrollTo('home')}>Home</span>
              <span className="footer-link" onClick={() => scrollTo('about')}>About</span>
              <span className="footer-link" onClick={() => scrollTo('skills')}>Skills</span>
              <span className="footer-link" onClick={() => scrollTo('experience')}>Experience</span>
            </div>
          </div>

          {/* Pages */}
          <div>
            <div className="footer-col-title">Pages</div>
            <div className="footer-links">
              <Link to="/projects" className="footer-link" style={{ textDecoration: 'none' }}>Projects</Link>
              <Link to="/certificates" className="footer-link" style={{ textDecoration: 'none' }}>Certificates</Link>
              <Link to="/contact" className="footer-link" style={{ textDecoration: 'none' }}>Contact</Link>
            </div>
          </div>

          {/* Connect */}
          <div>
            <div className="footer-col-title">Connect</div>
            <div className="footer-links">
              <a href={personal.github} target="_blank" rel="noreferrer" className="footer-link">GitHub</a>
              <a href={personal.linkedin} target="_blank" rel="noreferrer" className="footer-link">LinkedIn</a>
              <a href={personal.twitter} target="_blank" rel="noreferrer" className="footer-link">Twitter/X</a>
              <a href={`mailto:${personal.email}`} className="footer-link">Email Me</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            © {new Date().getFullYear()} Jaiv Patel. All rights reserved.
          </div>
          <div className="footer-made-with">
            Made with ❤️ using React + Vite
          </div>
          <button
            className="back-to-top"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <FiArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
}
