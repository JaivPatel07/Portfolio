import { FiGithub, FiExternalLink } from 'react-icons/fi';

export default function MiniProjectCard({ project }) {
  return (
    <div className="mini-project-card">
      <div className="mini-project-header">
        <div className="mini-project-icon">🎮</div>
        <h3 className="mini-project-title">{project.title}</h3>
      </div>
      <p className="mini-project-tech">{project.tech.join(' ')}</p>
      <div className="mini-project-links">
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noreferrer" className="mini-project-link">
            <FiExternalLink /> Live
          </a>
        )}
        {project.github && (
          <a href={project.github} target="_blank" rel="noreferrer" className="mini-project-link">
            <FiGithub /> GitHub
          </a>
        )}
      </div>
    </div>
  );
}