import { Link } from 'react-router-dom';

const sections = [
  { emoji: '👤', label: 'About Me',       id: 'about',      type: 'scroll' },
  { emoji: '💡', label: 'Skills',         id: 'skills',     type: 'scroll' },
  { emoji: '🧰', label: 'Tech Stack',     id: 'techstack',  type: 'scroll' },
  { emoji: '💼', label: 'Experience',     id: 'experience', type: 'scroll' },
  { emoji: '🚀', label: 'Projects',       to: '/projects',  type: 'page'   },
  { emoji: '📊', label: 'GitHub Stats',   id: 'github',     type: 'scroll' },
  { emoji: '🏆', label: 'Certificates',   to: '/certificates', type: 'page' },
  { emoji: '🎓', label: 'Education',      id: 'education',  type: 'scroll' },
  { emoji: '📬', label: 'Contact',        to: '/contact',   type: 'page'   },
];

export default function HomePageNav() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div style={{
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start',
      overflow: 'hidden',
      background: 'var(--bg-primary)',
      paddingBottom: '3rem',
    }}>
    </div>
  );
}
