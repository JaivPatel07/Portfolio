import { useState, useEffect } from 'react';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiDownload, FiCode, FiEye } from 'react-icons/fi';
import { HiSparkles } from 'react-icons/hi';
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
      timeout = setTimeout(() => setCharIndex(i => i + 1), 80);
    } else if (!isDeleting && charIndex > role.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && charIndex >= 0) {
      setDisplayText(role.slice(0, charIndex));
      timeout = setTimeout(() => setCharIndex(i => i - 1), 40);
    } else if (isDeleting && charIndex < 0) {
      setIsDeleting(false);
      setCurrentRole(r => (r + 1) % roles.length);
      setCharIndex(0);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, currentRole]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="home">
      <div className="hero-bg" />

      {/* Static background blobs */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        {[
          { w: 380, h: 380, left: '10%',  top: '15%',  color: 'rgba(124,58,237,0.05)' },
          { w: 280, h: 280, left: '75%',  top: '10%',  color: 'rgba(6,182,212,0.05)' },
          { w: 320, h: 320, left: '60%',  top: '55%',  color: 'rgba(124,58,237,0.04)' },
          { w: 200, h: 200, left: '5%',   top: '65%',  color: 'rgba(6,182,212,0.04)' },
          { w: 240, h: 240, left: '40%',  top: '5%',   color: 'rgba(236,72,153,0.03)' },
          { w: 180, h: 180, left: '85%',  top: '70%',  color: 'rgba(245,158,11,0.03)' },
        ].map((blob, i) => (
          <div key={i} style={{
            position: 'absolute',
            width: `${blob.w}px`,
            height: `${blob.h}px`,
            borderRadius: '50%',
            background: blob.color,
            left: blob.left,
            top: blob.top,
            filter: 'blur(40px)',
          }} />
        ))}
      </div>

      <div className="hero-content">
        {/* Left: Text */}
        <div className="hero-text">
          <div className="hero-greeting">
            <HiSparkles />
            &nbsp;Available for opportunities
          </div>

          <h1 className="hero-name">
            Hi, I'm <span className="gradient-text">{personal.firstName}</span>
            <br />
            <span className="gradient-text">{personal.lastName}</span>
          </h1>

          <div className="hero-title-row">
            <span style={{ color: 'var(--text-secondary)' }}>I'm a </span>
            <span className="gradient-text" style={{ fontWeight: 700 }}>{displayText}</span>
            <span style={{
              display: 'inline-block',
              width: '2px',
              height: '1.2em',
              background: 'var(--accent-primary)',
              marginLeft: '2px',
              verticalAlign: 'middle',
              animation: 'blink 1s ease-in-out infinite',
            }} />
          </div>

          <p className="hero-tagline">
            {personal.tagline} Crafting elegant solutions with{' '}
            <span style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>React</span>,{' '}
            <span style={{ color: 'var(--accent-secondary)', fontWeight: 600 }}>Django</span>, and{' '}
            <span style={{ color: 'var(--accent-pink)', fontWeight: 600 }}>AI</span>.
          </p>

          <div className="hero-cta">
            <button className="btn btn-primary" onClick={() => scrollTo('projects')}>
              <FiEye /> View Projects
            </button>
            <a className="btn btn-secondary" href={personal.resumeUrl} download>
              <FiDownload /> Download CV
            </a>
            <button className="btn btn-ghost" onClick={() => scrollTo('contact')}>
              <FiMail /> Hire Me
            </button>
          </div>

          <div className="hero-socials">
            <a href={personal.github} target="_blank" rel="noreferrer" className="hero-social-link">
              <FiGithub />
            </a>
            <a href={personal.linkedin} target="_blank" rel="noreferrer" className="hero-social-link">
              <FiLinkedin />
            </a>
            <a href={personal.twitter} target="_blank" rel="noreferrer" className="hero-social-link">
              <FiTwitter />
            </a>
            <a href={`mailto:${personal.email}`} className="hero-social-link">
              <FiMail />
            </a>

            <div style={{
              width: '1px',
              height: '24px',
              background: 'var(--border-color)',
              margin: '0 4px',
            }} />

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.8rem',
              color: 'var(--text-muted)',
              fontFamily: 'var(--font-mono)',
            }}>
              <FiCode />
              {personal.stats.projectsBuilt} projects built
            </div>
          </div>
        </div>

        {/* Right: Avatar */}
        <div className="hero-image-wrapper">
          <div className="hero-avatar-container">
            <div className="hero-avatar-ring-2" />
            <div className="hero-avatar-ring" />
            <div className="hero-avatar-glow" />

            {/* Avatar initials placeholder */}
            <div className="hero-avatar-img" style={{
              background: 'linear-gradient(135deg, #7c3aed 0%, #06b6d4 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '5rem',
              fontWeight: 900,
              color: 'white',
              letterSpacing: '-0.02em',
              fontFamily: 'var(--font-primary)',
            }}>
              JP
            </div>
          </div>

          {/* Floating info cards */}
          <div className="hero-floating-card card-1" style={{ color: 'var(--accent-green)' }}>
            <span>🟢</span>
            <span style={{ color: 'var(--text-primary)', fontSize: '0.8rem' }}>Available for work</span>
          </div>

          <div className="hero-floating-card card-2">
            <span>⚡</span>
            <span style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>
              {personal.stats.yearsOfCoding} Years Coding
            </span>
          </div>

          <div className="hero-floating-card card-3">
            <span>🏆</span>
            <span style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>
              {personal.stats.hackathons} Hackathons
            </span>
          </div>
        </div>
      </div>

    </section>
  );
}
