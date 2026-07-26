import { FiExternalLink, FiGithub } from 'react-icons/fi';

export default function ProjectCard({ project, featured = false }) {
  const tech = featured ? project.tech : project.tech.slice(0, 4);

  return (
    <article className={`project-card ${featured ? 'featured-project-card' : ''}`}>
      <div className="project-card-img-wrapper">
        <div className="project-preview" style={{ background: project.gradient }}>
          <div className="project-preview-content">
            <span>{project.category}</span>
            <strong>{project.title.split(' - ')[0]}</strong>
          </div>
        </div>
        {project.image && (
          <img
            src={project.image}
            alt={`${project.title} project preview`}
            className="project-card-img"
            loading="lazy"
            onError={(event) => {
              event.currentTarget.style.display = 'none';
            }}
          />
        )}
        <div className="project-card-overlay">
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noreferrer" className="project-overlay-btn">
              <FiExternalLink /> Live
            </a>
          )}
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer" className="project-overlay-btn">
              <FiGithub /> Code
            </a>
          )}
        </div>
      </div>

      <div className="project-card-body">
        <div className="project-card-heading">
          <h3 className="project-card-title">{project.title}</h3>
        </div>
        <p className="project-card-desc">{featured && project.longDesc ? project.longDesc : project.description}</p>

        {featured && project.features?.length > 0 && (
          <ul className="project-feature-list">
            {project.features.slice(0, 3).map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        )}

        <div className="project-card-stack">
          {tech.map((item) => (
            <span className="tag" key={item}>{item}</span>
          ))}
        </div>

        <div className="project-card-links">
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer" className="project-link">
              <FiGithub /> Code
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noreferrer" className="project-link">
              <FiExternalLink /> Demo
            </a>
          )}
          <span className="tag tag-cyan project-category-tag">{project.category}</span>
        </div>
      </div>
    </article>
  );
}
