import { icons } from '../data/icons';
import { techStack } from '../data';

export default function TechStack() {
  return (
    <section className="section" id="techstack" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-badge">⚡ Tech Stack</div>
          <h2 className="section-title">The Technologies Behind My Projects</h2>
          <p className="section-subtitle">
            From crafting interactive user interfaces to developing scalable backend systems, these
            are the technologies I use to bring ideas to life and build modern web applications.
          </p>
        </div>

        {techStack.map((category) => (
          <div className="tech-category-wrapper" key={category.category}>
            <h3 className="tech-category-title">{category.category}</h3>
            <div className="tech-stack-grid">
              {category.items.map(({ name, icon, color, description }) => {
                const IconComponent = icons[icon];
                return (
                  <div className="tech-item" key={name} title={description}>
                    <div className="tech-item-inner">
                      {IconComponent && <IconComponent className="tech-icon" style={{ color }} />}
                      <div className="tech-item-name">{name}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
