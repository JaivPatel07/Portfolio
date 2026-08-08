import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FiAward, FiBookOpen, FiCode, FiFolder, FiHome, FiMail, FiMenu, FiUser, FiX } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

const homeScrollLinks = [
  { label: 'Home', id: 'home', Icon: FiHome },
  { label: 'About', id: 'about', Icon: FiUser },
  { label: 'Skills', id: 'skills', Icon: FiCode },
  { label: 'Projects', id: 'projects', Icon: FiFolder },
  { label: 'Education', id: 'education', Icon: FiBookOpen },
];

const pageLinks = [
  { label: 'Home', to: '/', Icon: FiHome },
  { label: 'Projects', to: '/projects', Icon: FiFolder },
  { label: 'Certificates', to: '/certificates', Icon: FiAward },
  { label: 'Contact', to: '/contact', Icon: FiMail },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      if (!isHome) return;

      for (let i = homeScrollLinks.length - 1; i >= 0; i -= 1) {
        const section = document.getElementById(homeScrollLinks[i].id);
        if (section && window.scrollY >= section.offsetTop - 140) {
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
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 250);
    }
    setMobileOpen(false);
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-inner">
          <Link to="/" className="nav-logo" aria-label="Go to homepage">
            JP
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
              className="nav-mobile-toggle"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle navigation menu">
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
      </div>
    </>
  );
}
