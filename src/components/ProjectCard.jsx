import {
  FiArrowUpRight,
  FiExternalLink,
  FiGithub,
  FiMaximize2,
  FiStar,
} from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';
import SpotlightCard from './SpotlightCard';

export default function ProjectCard({ project, featured = false }) {
  const { openProjectModal } = useTheme();
  const tech = featured ? project.tech : project.tech.slice(0, 5);

  return (
    <SpotlightCard
      as="article"
      tilt={!featured}
      className={`project-card ${featured ? 'featured-project-card' : ''}`}
    >
      {featured && (
        <span className="featured-badge">
          <FiStar /> Flagship Build
        </span>
      )}

      {/* Browser / App Window Header */}
      <div
        className="project-card-img-wrapper"
        onClick={() => openProjectModal(project)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            openProjectModal(project);
          }
        }}
      >
        <div className="project-window-bar">
          <div className="window-dots">
            <span className="window-dot dot-red" />
            <span className="window-dot dot-amber" />
            <span className="window-dot dot-green" />
          </div>
          <span className="project-window-url">
            {project.id}.app
          </span>
          <span className="project-window-expand" title="Quick Inspect">
            <FiMaximize2 />
          </span>
        </div>

        <div className="project-media-stage">
          <div
            className="project-preview"
            style={{
              background:
                project.gradient || 'linear-gradient(135deg, #7c3aed, #06b6d4)',
            }}
          >
            <div className="project-preview-grid" />
            <div className="project-preview-content">
              <span className="project-preview-cat">{project.category}</span>
              <strong>{project.title.split(' - ')[0]}</strong>
            </div>
          </div>

          {project.image && (
            <img
              src={project.image}
              alt={`${project.title} preview`}
              className="project-card-img"
              loading="lazy"
              onError={(event) => {
                event.currentTarget.style.display = 'none';
              }}
            />
          )}

          <div className="project-card-overlay" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="project-overlay-btn primary"
              onClick={() => openProjectModal(project)}
            >
              <FiMaximize2 /> Quick View
            </button>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="project-overlay-btn"
              >
                <FiExternalLink /> Live
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="project-overlay-btn"
              >
                <FiGithub /> Code
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Card Body */}
      <div className="project-card-body">
        <div className="project-card-heading">
          <div>
            <div className="project-card-meta-row">
              <span className="project-category-tag tag tag-cyan">
                {project.category}
              </span>
              {project.demo ? (
                <span className="project-status status-live">
                  <span className="pulse-dot" /> Live
                </span>
              ) : (
                <span className="project-status status-open">Open Source</span>
              )}
            </div>
            <h3
              className="project-card-title"
              onClick={() => openProjectModal(project)}
            >
              {project.title}
              <FiArrowUpRight className="project-title-arrow" />
            </h3>
          </div>
        </div>

        <p className="project-card-desc">
          {featured && project.longDesc ? project.longDesc : project.description}
        </p>

        {featured && project.features?.length > 0 && (
          <ul className="project-feature-list">
            {project.features.slice(0, 4).map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        )}

        <div className="project-card-stack">
          {tech.map((item) => (
            <span className="tag" key={item}>
              {item}
            </span>
          ))}
          {!featured && project.tech.length > 5 && (
            <span className="tag tag-more">+{project.tech.length - 5}</span>
          )}
        </div>

        <div className="project-card-links">
          <button
            type="button"
            className="project-link project-link-inspect"
            onClick={() => openProjectModal(project)}
          >
            <FiMaximize2 /> Details
          </button>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              <FiGithub /> Source
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="project-link project-link-live"
            >
              <FiExternalLink /> Live Demo
            </a>
          )}
        </div>
      </div>
    </SpotlightCard>
  );
}
