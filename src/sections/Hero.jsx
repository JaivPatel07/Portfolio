import { useEffect, useState } from 'react';
import { FiEye, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { personal } from '../data/index';

const roles = personal.titles;

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const role = roles[currentRole];
    let timeout;

    if (!isDeleting && charIndex <= role.length) {
      setDisplayText(role.slice(0, charIndex));
      timeout = setTimeout(() => setCharIndex((index) => index + 1), 80);
    } else if (!isDeleting && charIndex > role.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && charIndex >= 0) {
      setDisplayText(role.slice(0, charIndex));
      timeout = setTimeout(() => setCharIndex((index) => index - 1), 40);
    } else {
      setIsDeleting(false);
      setCurrentRole((roleIndex) => (roleIndex + 1) % roles.length);
      setCharIndex(0);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, currentRole, isDeleting]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="home">
      <div className="hero-bg" />

      <div className="hero-content">
        <div className="hero-text">

          <h1 className="hero-name">
            Hi, I'm <span className="gradient-text">{personal.firstName}</span>
            <br />
            <span className="gradient-text">{personal.lastName}</span>
          </h1>

          <div className="hero-title-row">
            <span className="gradient-text" style={{ fontWeight: 700 }}>{displayText}</span>
            <span className="typing-cursor" />
          </div>

          <p className="hero-tagline">{personal.tagline}</p>

          <div className="hero-cta">
            <button className="btn btn-primary" onClick={() => scrollTo('projects')}>
              <FiEye /> View Projects
            </button>
          </div>

          <div className="hero-socials">
            <a href={personal.github} target="_blank" rel="noreferrer" className="hero-social-link" aria-label="GitHub">
              <FiGithub />
            </a>
            <a href={personal.linkedin} target="_blank" rel="noreferrer" className="hero-social-link" aria-label="LinkedIn">
              <FiLinkedin />
            </a>
            <a href={`mailto:${personal.email}`} className="hero-social-link" aria-label="Email">
              <FiMail />
            </a>
          </div>
        </div>



        <div className="hero-image-wrapper">
          <div className="hero-avatar-container">
            <div className="hero-avatar-ring-2" />
            <div className="hero-avatar-ring" />
            <div className="hero-avatar-glow" />
            <img className="hero-avatar-img" src="src/assets/avatar.jpeg" alt="Jaiv Patel" />
          </div>
        </div>
      </div>
    </section>
  );
}
