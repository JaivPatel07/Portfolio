import { useEffect, useState } from 'react';
import {
  FiArrowRight,
  FiCheck,
  FiCode,
  FiCommand,
  FiCopy,
  FiCpu,
  FiFileText,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiTerminal,
  FiZap,
} from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';
import { personal } from '../data/index';
import SpotlightCard from '../components/SpotlightCard';
import avatar from '/assets/avatar.jpeg';

const roles = personal.titles;

const TERMINAL_COMMANDS = {
  whoami: {
    cmd: 'jaiv --whoami',
    output: [
      '→ Jaiv Patel | Computer Science & Engineering @ LJ University (2024–2028)',
      '→ Full-Stack Developer specializing in React, Django, FastAPI & AI tools.',
      '→ Based in Ahmedabad, India • CGPA: 8.5 / 10',
    ],
  },
  stack: {
    cmd: 'jaiv --stack --primary',
    output: [
      'Frontend : React, Next.js, TypeScript, Tailwind CSS',
      'Backend  : Python, Django, FastAPI, Node.js, Express',
      'Data/DB  : PostgreSQL, MongoDB, Pandas, Plotly, Streamlit',
      'DevOps   : Docker, Git, GitHub Actions, Vercel',
    ],
  },
  featured: {
    cmd: 'jaiv --projects --flagship',
    output: [
      '★ CoDO           — Student Hackathon & Team Networking Platform (React + Django)',
      '★ RequestLab     — Local-first Privacy API Client (React + Node.js)',
      '★ MD Studio      — Browser Markdown, PDF & DOCX Workspace',
      '★ FinancePro     — AI Bank Statement Analytics (Python + Streamlit)',
    ],
  },
  contact: {
    cmd: 'jaiv --contact',
    output: [
      `Email    : ${personal.email}`,
      'GitHub   : github.com/JaivPatel07',
      'Status   : Ready for Internships, Freelance & Open Source',
    ],
  },
};

export default function Hero() {
  const { openCommandPalette } = useTheme();
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  const [activeTab, setActiveTab] = useState('code'); // 'code' | 'terminal' | 'stats'
  const [activeCmd, setActiveCmd] = useState('whoami');
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    let timeout;

    if (!isDeleting && charIndex <= role.length) {
      setDisplayText(role.slice(0, charIndex));
      timeout = setTimeout(() => setCharIndex((index) => index + 1), 65);
    } else if (!isDeleting && charIndex > role.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && charIndex >= 0) {
      setDisplayText(role.slice(0, charIndex));
      timeout = setTimeout(() => setCharIndex((index) => index - 1), 35);
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

  const copyEmail = () => {
    navigator.clipboard?.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section className="hero" id="home">
      <div className="hero-bg" />
      <div className="hero-aurora hero-aurora-1" />
      <div className="hero-aurora hero-aurora-2" />

      <div className="hero-content">
        {/* Left Column: Typography & CTAs */}
        <div className="hero-text">
          <div className="hero-badge-row">
            <div className="hero-status-pill">
              <span className="pulse-dot" />
              <span>Available for Internships &amp; Projects</span>
            </div>
            <div className="hero-location-pill">
              <FiMapPin />
              <span>Ahmedabad, IN</span>
            </div>
          </div>

          <h1 className="hero-name">
            <span className="hero-eyebrow">Hi, I&apos;m {personal.name}</span>
            Building <span className="gradient-text">modern software</span> &amp;{' '}
            <span className="gradient-text-secondary">AI systems</span> that ship.
          </h1>

          <div className="hero-terminal-prompt">
            <span className="prompt-prefix">~/jaiv $</span>
            <span className="prompt-typed">{displayText}</span>
            <span className="typing-cursor" />
          </div>

          <p className="hero-tagline">{personal.tagline}</p>

          <div className="hero-cta">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => scrollTo('projects')}
            >
              <span>Explore Selected Work</span>
              <FiArrowRight />
            </button>
            <a
              href={personal.resume}
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary"
            >
              <FiFileText />
              <span>Resume</span>
            </a>
            <button
              type="button"
              className="btn btn-ghost hero-cmd-trigger"
              onClick={openCommandPalette}
              title="Open Command Palette"
            >
              <FiCommand />
              <span>Command</span>
              <kbd>⌘K</kbd>
            </button>
          </div>

          <div className="hero-socials-bar">
            <div className="hero-socials">
              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                className="hero-social-link"
                aria-label="GitHub"
                title="GitHub"
              >
                <FiGithub />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hero-social-link"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <FiLinkedin />
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="hero-social-link"
                aria-label="Email"
                title="Send Email"
              >
                <FiMail />
              </a>
            </div>

            <button
              type="button"
              className="hero-copy-email"
              onClick={copyEmail}
              title="Click to copy email address"
            >
              {copiedEmail ? <FiCheck className="copied-icon" /> : <FiCopy />}
              <span>{copiedEmail ? 'Copied to clipboard!' : personal.email}</span>
            </button>
          </div>
        </div>

        {/* Right Column: Interactive Developer Identity & Console Bento Card */}
        <div className="hero-visual-col">
          <SpotlightCard className="hero-dev-showcase" tilt>
            {/* Identity Header */}
            <div className="hero-identity-header">
              <div className="hero-avatar-mini-wrap">
                <img
                  src={avatar}
                  alt={personal.name}
                  className="hero-avatar-mini"
                />
                <span className="avatar-online-dot" />
              </div>
              <div className="hero-identity-meta">
                <div className="hero-identity-name-row">
                  <strong>{personal.name}</strong>
                  <span className="verified-dev-pill">
                    <FiZap /> Full-Stack + AI
                  </span>
                </div>
                <p>B.Tech CSE @ LJ University • CGPA 8.5</p>
              </div>
            </div>

            {/* Interactive Console Window */}
            <div className="hero-console-window">
              <div className="hero-console-tabs">
                <div className="window-dots">
                  <span className="window-dot dot-red" />
                  <span className="window-dot dot-amber" />
                  <span className="window-dot dot-green" />
                </div>
                <div className="console-tab-buttons">
                  <button
                    type="button"
                    className={`console-tab-btn ${activeTab === 'code' ? 'active' : ''}`}
                    onClick={() => setActiveTab('code')}
                  >
                    <FiCode /> engineer.ts
                  </button>
                  <button
                    type="button"
                    className={`console-tab-btn ${activeTab === 'terminal' ? 'active' : ''}`}
                    onClick={() => setActiveTab('terminal')}
                  >
                    <FiTerminal /> terminal
                  </button>
                  <button
                    type="button"
                    className={`console-tab-btn ${activeTab === 'stats' ? 'active' : ''}`}
                    onClick={() => setActiveTab('stats')}
                  >
                    <FiCpu /> metrics
                  </button>
                </div>
              </div>

              <div className="hero-console-body">
                {activeTab === 'code' && (
                  <pre className="hero-code-block">
                    <code>
                      <span className="c-kw">const</span>{' '}
                      <span className="c-var">developer</span> = {'{\n'}
                      {'  '}name:{' '}
                      <span className="c-str">&apos;Jaiv Patel&apos;</span>,{'\n'}
                      {'  '}role:{' '}
                      <span className="c-str">&apos;Full-Stack &amp; AI Engineer&apos;</span>,{'\n'}
                      {'  '}frontend: [
                      <span className="c-str">&apos;React&apos;</span>,{' '}
                      <span className="c-str">&apos;Next.js&apos;</span>,{' '}
                      <span className="c-str">&apos;TypeScript&apos;</span>],{'\n'}
                      {'  '}backend: [
                      <span className="c-str">&apos;Django&apos;</span>,{' '}
                      <span className="c-str">&apos;FastAPI&apos;</span>,{' '}
                      <span className="c-str">&apos;Node.js&apos;</span>],{'\n'}
                      {'  '}flagship: [
                      <span className="c-str">&apos;CoDO&apos;</span>,{' '}
                      <span className="c-str">&apos;RequestLab&apos;</span>,{' '}
                      <span className="c-str">&apos;FinancePro&apos;</span>],{'\n'}
                      {'  '}passion:{' '}
                      <span className="c-fn">() =&gt;</span>{' '}
                      <span className="c-str">&apos;Solving real problems&apos;</span>
                      {'\n};'}
                    </code>
                  </pre>
                )}

                {activeTab === 'terminal' && (
                  <div className="hero-terminal-interactive">
                    <div className="terminal-chip-bar">
                      {Object.keys(TERMINAL_COMMANDS).map((key) => (
                        <button
                          type="button"
                          key={key}
                          className={`term-chip ${activeCmd === key ? 'active' : ''}`}
                          onClick={() => setActiveCmd(key)}
                        >
                          {key}
                        </button>
                      ))}
                    </div>
                    <div className="terminal-screen">
                      <div className="term-cmd-line">
                        <span className="term-prompt">➜ ~</span>{' '}
                        {TERMINAL_COMMANDS[activeCmd].cmd}
                      </div>
                      {TERMINAL_COMMANDS[activeCmd].output.map((line, idx) => (
                        <div className="term-out-line" key={idx}>
                          {line}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'stats' && (
                  <div className="hero-mini-metrics">
                    <div className="mini-metric-box">
                      <span className="mini-metric-val">17+</span>
                      <span className="mini-metric-lbl">Projects Shipped</span>
                    </div>
                    <div className="mini-metric-box">
                      <span className="mini-metric-val">14</span>
                      <span className="mini-metric-lbl">Certifications</span>
                    </div>
                    <div className="mini-metric-box">
                      <span className="mini-metric-val">4</span>
                      <span className="mini-metric-lbl">Hackathons</span>
                    </div>
                    <div className="mini-metric-box">
                      <span className="mini-metric-val">8.5</span>
                      <span className="mini-metric-lbl">B.Tech CGPA</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Bottom Quick Highlights Strip */}
            <div className="hero-showcase-footer">
              {personal.aboutHighlights.map((item) => (
                <span className="showcase-chip" key={item}>
                  <span className="chip-dot" />
                  {item}
                </span>
              ))}
            </div>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
}
