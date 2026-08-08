import { useEffect, useState } from 'react';
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi';
import { personal } from '../data/index';

const socials = [
  { icon: <FiGithub />, href: personal.github, label: 'GitHub' },
  { icon: <FiLinkedin />, href: personal.linkedin, label: 'LinkedIn' },
  { icon: <FiMail />, href: `mailto:${personal.email}`, label: 'Email' },
];

export default function Footer() {
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

  return (
    <footer className="footer footer-compact">
      <div className="container">
        <div className="footer-compact-row">
          <div className="footer-logo">JP</div>
          <div className="footer-socials">
            {socials.map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="footer-social"
              >
                {s.icon}
              </a>
            ))}
          </div>
          <div className="footer-copyright">© {new Date().getFullYear()} Jaiv Patel</div>
        </div>
      </div>
      {showBackToTop && (
        <button
          className="back-to-top"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          <FiArrowUp />
        </button>
      )}
    </footer>
  );
}
