import { useEffect, useMemo, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  FiArrowRight,
  FiAward,
  FiBookOpen,
  FiCheck,
  FiCode,
  FiCopy,
  FiExternalLink,
  FiFileText,
  FiFolder,
  FiGithub,
  FiHome,
  FiLinkedin,
  FiMail,
  FiMoon,
  FiSearch,
  FiSun,
  FiUser,
  FiX,
} from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';
import { personal, projects } from '../data/index';

export default function CommandPalette() {
  const {
    theme,
    toggleTheme,
    commandOpen,
    closeCommandPalette,
    setCommandOpen,
    openProjectModal,
  } = useTheme();
  const [query, setQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const inputRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setCommandOpen((prev) => !prev);
      } else if (e.key === 'Escape' && commandOpen) {
        closeCommandPalette();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [commandOpen, closeCommandPalette, setCommandOpen]);

  useEffect(() => {
    if (commandOpen) {
      setQuery('');
      setActiveIndex(0);
      setTimeout(() => inputRef.current?.focus(), 40);
    }
  }, [commandOpen]);

  const jumpToSection = (sectionId) => {
    closeCommandPalette();
    if (location.pathname === '/') {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 250);
    }
  };

  const goToRoute = (path) => {
    closeCommandPalette();
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCopyEmail = () => {
    navigator.clipboard?.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => {
      setCopiedEmail(false);
      closeCommandPalette();
    }, 900);
  };

  const commands = useMemo(
    () => [
      // Navigation
      {
        id: 'nav-home',
        group: 'Navigation',
        label: 'Go to Home',
        subtitle: 'Overview, hero & interactive showcase',
        icon: <FiHome />,
        shortcut: 'G H',
        action: () => goToRoute('/'),
      },
      {
        id: 'nav-projects-page',
        group: 'Navigation',
        label: 'All Projects Archive',
        subtitle: `Browse all ${projects.length} full-stack, AI & dev tool projects`,
        icon: <FiFolder />,
        shortcut: 'G P',
        action: () => goToRoute('/projects'),
      },
      {
        id: 'nav-certificates',
        group: 'Navigation',
        label: 'Certificates & Hackathons',
        subtitle: '14+ verified certifications & hackathon awards',
        icon: <FiAward />,
        shortcut: 'G C',
        action: () => goToRoute('/certificates'),
      },
      {
        id: 'nav-contact',
        group: 'Navigation',
        label: 'Contact & Hire Jaiv',
        subtitle: 'Send a direct message or schedule a chat',
        icon: <FiMail />,
        shortcut: 'G M',
        action: () => goToRoute('/contact'),
      },
      // Sections on Home
      {
        id: 'sec-about',
        group: 'Sections',
        label: 'Jump to About & Bento Overview',
        subtitle: 'Engineering philosophy & focus areas',
        icon: <FiUser />,
        action: () => jumpToSection('about'),
      },
      {
        id: 'sec-skills',
        group: 'Sections',
        label: 'Jump to Tech Stack & Metrics',
        subtitle: 'React, Next.js, Django, FastAPI, Python & tools',
        icon: <FiCode />,
        action: () => jumpToSection('skills'),
      },
      {
        id: 'sec-education',
        group: 'Sections',
        label: 'Jump to Education & Academic Journey',
        subtitle: 'B.Tech CSE @ LJ University (8.5 CGPA)',
        icon: <FiBookOpen />,
        action: () => jumpToSection('education'),
      },
      // Quick Actions
      {
        id: 'act-theme',
        group: 'Quick Actions',
        label: `Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`,
        subtitle: `Currently using ${theme} theme`,
        icon: theme === 'dark' ? <FiSun /> : <FiMoon />,
        shortcut: '⌘ T',
        action: () => {
          toggleTheme();
          closeCommandPalette();
        },
      },
      {
        id: 'act-copy-email',
        group: 'Quick Actions',
        label: copiedEmail ? 'Copied jaivpatel402@gmail.com!' : 'Copy Email Address',
        subtitle: personal.email,
        icon: copiedEmail ? <FiCheck /> : <FiCopy />,
        shortcut: '⌘ E',
        action: handleCopyEmail,
      },
      {
        id: 'act-resume',
        group: 'Quick Actions',
        label: 'View / Download Resume',
        subtitle: 'Open official PDF resume in a new tab',
        icon: <FiFileText />,
        shortcut: '↗',
        action: () => {
          window.open(personal.resume, '_blank', 'noopener,noreferrer');
          closeCommandPalette();
        },
      },
      {
        id: 'act-github',
        group: 'Quick Actions',
        label: 'Open GitHub Profile',
        subtitle: 'github.com/JaivPatel07',
        icon: <FiGithub />,
        shortcut: '↗',
        action: () => {
          window.open(personal.github, '_blank', 'noopener,noreferrer');
          closeCommandPalette();
        },
      },
      {
        id: 'act-linkedin',
        group: 'Quick Actions',
        label: 'Open LinkedIn Profile',
        subtitle: 'Connect with Jaiv Patel on LinkedIn',
        icon: <FiLinkedin />,
        shortcut: '↗',
        action: () => {
          window.open(personal.linkedin, '_blank', 'noopener,noreferrer');
          closeCommandPalette();
        },
      },
      // Projects
      ...projects.map((p) => ({
        id: `proj-${p.id}`,
        group: 'Projects (Quick Inspect)',
        label: p.title,
        subtitle: `${p.category} • ${p.tech.join(', ')}`,
        icon: <FiFolder />,
        shortcut: 'Inspect',
        action: () => {
          closeCommandPalette();
          openProjectModal(p);
        },
      })),
    ],
    [theme, copiedEmail, location.pathname]
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return commands;
    return commands.filter(
      (item) =>
        item.label.toLowerCase().includes(q) ||
        item.subtitle.toLowerCase().includes(q) ||
        item.group.toLowerCase().includes(q)
    );
  }, [commands, query]);

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex((prev) => (filtered.length ? (prev + 1) % filtered.length : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex((prev) =>
        filtered.length ? (prev - 1 + filtered.length) % filtered.length : 0
      );
    } else if (e.key === 'Enter' && filtered[activeIndex]) {
      e.preventDefault();
      filtered[activeIndex].action();
    }
  };

  if (!commandOpen) return null;

  // Group filtered items
  const grouped = filtered.reduce((acc, item, idx) => {
    if (!acc[item.group]) acc[item.group] = [];
    acc[item.group].push({ ...item, flatIndex: idx });
    return acc;
  }, {});

  return (
    <div
      className="cmd-backdrop"
      onClick={closeCommandPalette}
      role="dialog"
      aria-modal="true"
      aria-label="Command Palette"
    >
      <div
        className="cmd-modal"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKeyDown}
      >
        <div className="cmd-header">
          <FiSearch className="cmd-search-icon" />
          <input
            ref={inputRef}
            type="text"
            className="cmd-input"
            placeholder="Type a command or search projects, skills, actions..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            type="button"
            className="cmd-close-btn"
            onClick={closeCommandPalette}
            aria-label="Close command palette"
          >
            <span>ESC</span>
            <FiX />
          </button>
        </div>

        <div className="cmd-body">
          {filtered.length === 0 ? (
            <div className="cmd-empty">
              <p>No matching commands or projects for "{query}"</p>
            </div>
          ) : (
            Object.entries(grouped).map(([groupName, items]) => (
              <div className="cmd-group" key={groupName}>
                <div className="cmd-group-title">{groupName}</div>
                {items.map((item) => {
                  const isActive = item.flatIndex === activeIndex;
                  return (
                    <button
                      type="button"
                      key={item.id}
                      className={`cmd-item ${isActive ? 'active' : ''}`}
                      onMouseEnter={() => setActiveIndex(item.flatIndex)}
                      onClick={item.action}
                    >
                      <div className="cmd-item-icon">{item.icon}</div>
                      <div className="cmd-item-text">
                        <span className="cmd-item-label">{item.label}</span>
                        <span className="cmd-item-sub">{item.subtitle}</span>
                      </div>
                      <div className="cmd-item-right">
                        {item.shortcut ? (
                          <kbd className="cmd-kbd">{item.shortcut}</kbd>
                        ) : (
                          <FiArrowRight className="cmd-arrow" />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            ))
          )}
        </div>

        <div className="cmd-footer">
          <div className="cmd-footer-hint">
            <kbd>↑</kbd> <kbd>↓</kbd> to navigate
          </div>
          <div className="cmd-footer-hint">
            <kbd>↵</kbd> to select
          </div>
          <div className="cmd-footer-hint">
            <kbd>ESC</kbd> to close
          </div>
        </div>
      </div>
    </div>
  );
}
