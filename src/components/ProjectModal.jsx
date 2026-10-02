import { useEffect, useState } from 'react';
import {
  FiCheckCircle,
  FiCode,
  FiCopy,
  FiExternalLink,
  FiGithub,
  FiLayers,
  FiStar,
  FiX,
} from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

export default function ProjectModal() {
  const { selectedProject, closeProjectModal } = useTheme();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape' && selectedProject) {
        closeProjectModal();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [selectedProject, closeProjectModal]);

  if (!selectedProject) return null;

  const project = selectedProject;

  const handleCopyRepo = () => {
    const url = project.demo || project.github || window.location.href;
    navigator.clipboard?.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div
      className="project-modal-backdrop"
      onClick={closeProjectModal}
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} details`}
    >
      <div
        className="project-modal-window"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Window Top Chrome */}
        <div className="project-modal-chrome">
          <div className="window-dots">
            <button
              type="button"
              className="window-dot dot-red"
              onClick={closeProjectModal}
              aria-label="Close modal"
            />
            <span className="window-dot dot-amber" />
            <span className="window-dot dot-green" />
          </div>
          <div className="window-title-bar">
            <FiCode />
            <span>jaiv-patel / {project.id}</span>
          </div>
          <button
            type="button"
            className="project-modal-close"
            onClick={closeProjectModal}
            aria-label="Close modal"
          >
            <FiX />
          </button>
        </div>

        {/* Visual Banner */}
        <div
          className="project-modal-banner"
          style={{
            background:
              project.gradient || 'linear-gradient(135deg, #7c3aed, #06b6d4)',
          }}
        >
          {project.image && (
            <img
              src={project.image}
              alt={project.title}
              className="project-modal-banner-img"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          )}
          <div className="project-modal-banner-overlay">
            <div className="project-modal-badges">
              <span className="modal-pill modal-pill-cat">
                <FiLayers /> {project.category}
              </span>
              {project.type === 'featured' && (
                <span className="modal-pill modal-pill-featured">
                  <FiStar /> Flagship Project
                </span>
              )}
              {project.demo && (
                <span className="modal-pill modal-pill-live">
                  <span className="pulse-dot" /> Live Deployment
                </span>
              )}
            </div>
            <h2 className="project-modal-title">{project.title}</h2>
          </div>
        </div>

        {/* Body Content */}
        <div className="project-modal-body">
          <div className="project-modal-section">
            <h4 className="project-modal-label">Overview & Architecture</h4>
            <p className="project-modal-desc">
              {project.longDesc || project.description}
            </p>
            {project.longDesc && project.description !== project.longDesc && (
              <p className="project-modal-subdesc">{project.description}</p>
            )}
          </div>

          {project.features && project.features.length > 0 && (
            <div className="project-modal-section">
              <h4 className="project-modal-label">Key Capabilities</h4>
              <div className="project-modal-features-grid">
                {project.features.map((feat) => (
                  <div className="project-modal-feature-item" key={feat}>
                    <FiCheckCircle className="feature-check-icon" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="project-modal-section">
            <h4 className="project-modal-label">Technology Stack</h4>
            <div className="project-modal-tech-list">
              {project.tech.map((t) => (
                <span className="modal-tech-chip" key={t}>
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Actions Footer */}
          <div className="project-modal-actions">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                <FiExternalLink /> Launch Live Demo
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary"
              >
                <FiGithub /> View Source Code
              </a>
            )}
            <button
              type="button"
              className="btn btn-ghost"
              onClick={handleCopyRepo}
            >
              <FiCopy /> {copied ? 'Link Copied!' : 'Copy Link'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
