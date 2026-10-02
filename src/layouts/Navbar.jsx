import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  FiAward,
  FiBookOpen,
  FiCode,
  FiCommand,
  FiFolder,
  FiHome,
  FiMail,
  FiMenu,
  FiMoon,
  FiSearch,
  FiSun,
  FiUser,
  FiX,
  FiArrowUpRight,
} from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';
import { personal } from '../data/index';

const homeScrollLinks = [
  { label: 'Home', id: 'home', Icon: FiHome },
  { label: 'About', id: 'about', Icon: FiUser },
  { label: 'Stack', id: 'skills', Icon: FiCode },
  { label: 'Work', id: 'projects', Icon: FiFolder },
  { label: 'Journey', id: 'education', Icon: FiBookOpen },
];

const pageLinks = [
  { label: 'Home', to: '/', Icon: FiHome },
  { label: 'Projects', to: '/projects', Icon: FiFolder },
  { label: 'Certificates', to: '/certificates', Icon: FiAward },
  { label: 'Contact', to: '/contact', Icon: FiMail },
];

export default function Navbar() {
  const { theme, toggleTheme, openCommandPalette } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      if (!isHome) return;

      for (let i = homeScrollLinks.length - 1; i >= 0; i -= 1) {
        const section = document.getElementById(homeScrollLinks[i].id);
        if (section && window.scrollY >= section.offsetTop - 180) {
          setActiveSection(homeScrollLinks[i].id);
          break;
        }
      }
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [isHome]);

  const scrollTo = (id) => {
    if (isHome) {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(
        () => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }),
        250
      );
    }
    setMobileOpen(false);
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-inner">
          <Link to="/" className="nav-brand" aria-label="Go to homepage">
            <span className="nav-logo-box">
              JP
              <span className="nav-status-dot" title="Available for opportunities" />
            </span>
            <div className="nav-brand-text">
              <span className="nav-brand-name">{personal.name}</span>
              <span className="nav-brand-role">Full-Stack &amp; AI</span>
            </div>
          </Link>

          <ul className="nav-links">
            {pageLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={`nav-link ${location.pathname === link.to ? 'active' : ''}`}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="nav-actions">
            <button
              type="button"
              className="nav-cmd-btn"
              onClick={openCommandPalette}
              aria-label="Open Command Palette (Ctrl+K)"
              title="Search & Commands (Ctrl+K / ⌘K)"
            >
              <FiSearch className="nav-cmd-icon" />
              <span className="nav-cmd-text">Quick Jump...</span>
              <kbd className="nav-cmd-kbd">
                <FiCommand /> K
              </kbd>
            </button>

            <button
              type="button"
              className="nav-icon-btn theme-toggle-btn"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? <FiSun /> : <FiMoon />}
            </button>

            <a
              href={personal.resume}
              target="_blank"
              rel="noreferrer"
              className="nav-resume-btn"
            >
              <span>Resume</span>
              <FiArrowUpRight />
            </a>

            <button
              type="button"
              className="nav-mobile-toggle"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </nav>

      {isHome && (
        <aside className="home-sidebar" aria-label="Home page sections">
          <div className="home-sidebar-inner">
            {homeScrollLinks.map(({ Icon, ...link }, index) => (
              <button
                key={link.id}
                type="button"
                className={`home-sidebar-link ${activeSection === link.id ? 'active' : ''}`}
                onClick={() => scrollTo(link.id)}
                aria-label={link.label}
                style={{ '--index': index }}
              >
                <Icon className="home-sidebar-icon" />
                <span className="home-sidebar-label">{link.label}</span>
              </button>
            ))}
          </div>
        </aside>
      )}

      <div className={`nav-mobile-menu ${mobileOpen ? 'open' : ''}`}>
        <button
          type="button"
          className="nav-mobile-cmd"
          onClick={() => {
            setMobileOpen(false);
            openCommandPalette();
          }}
        >
          <FiSearch />
          <span>Search projects &amp; commands...</span>
          <kbd>⌘K</kbd>
        </button>

        {pageLinks.map(({ Icon, ...link }) => (
          <Link
            key={link.to}
            to={link.to}
            className={`nav-mobile-link ${location.pathname === link.to ? 'active' : ''}`}
            onClick={() => setMobileOpen(false)}
          >
            <Icon />
            {link.label}
          </Link>
        ))}

        <div className="nav-mobile-footer">
          <button
            type="button"
            className="btn btn-ghost nav-mobile-theme"
            onClick={toggleTheme}
          >
            {theme === 'dark' ? <FiSun /> : <FiMoon />}
            {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
          </button>
          <a
            href={personal.resume}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary nav-mobile-resume"
          >
            Resume <FiArrowUpRight />
          </a>
        </div>
      </div>
    </>
  );
}
