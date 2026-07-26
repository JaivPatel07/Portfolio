import { useState } from 'react';
import { FiGithub, FiExternalLink, FiSearch } from 'react-icons/fi';
import { projects } from '../data/index';

const categories = ['All', 'AI', 'Full Stack', 'React', 'Django', 'Backend'];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [search, setSearch] = useState('');

  const featured = projects.filter(p => p.featured);
  const filtered = projects.filter(p => {
    const matchCat = activeFilter === 'All' || p.category === activeFilter || p.tech.includes(activeFilter);
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <section className="section" id="projects">
      <div className="container">
        {/* Featured Projects */}
        <div className="section-header">
          <div className="section-badge">🚀 Projects</div>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Some of my best work — built with passion, shipped with pride.
          </p>
        </div>

        <div className="featured-projects-grid">
          {featured.map((proj) => (
            <div className="project-card" key={proj.id} style={{ position: 'relative' }}>
              {proj.featuredLabel && (
                <div className="featured-badge">{proj.featuredLabel}</div>
              )}

              {/* Image/Gradient placeholder */}
              <div className="project-card-img-wrapper">
                <div className="project-card-img" style={{
                  background: proj.gradient,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '3.5rem',
                  aspectRatio: '16/9',
                }}>
                  {proj.id === 'ai-chat-app' && '🤖'}
                  {proj.id === 'ecommerce-platform' && '🛒'}
                  {proj.id === 'devconnect' && '🌐'}
                </div>
                <div className="project-card-overlay">
                  {proj.demo && (
                    <a href={proj.demo} target="_blank" rel="noreferrer" className="project-overlay-btn">
                      Live Demo
                    </a>
                  )}
                  {proj.github && (
                    <a href={proj.github} target="_blank" rel="noreferrer" className="project-overlay-btn">
                      GitHub
                    </a>
                  )}
                </div>
              </div>

              <div className="project-card-body">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <h3 className="project-card-title" style={{ margin: 0 }}>{proj.title}</h3>
                  <div style={{
                    padding: '0.15rem 0.6rem',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.7rem',
                    fontWeight: 600,
                    background: proj.status === 'Live' ? 'rgba(16,185,129,0.1)' : 'rgba(245,158,11,0.1)',
                    color: proj.status === 'Live' ? '#10b981' : '#f59e0b',
                    border: `1px solid ${proj.status === 'Live' ? 'rgba(16,185,129,0.2)' : 'rgba(245,158,11,0.2)'}`,
                  }}>
                    {proj.status === 'Live' ? '🟢' : '🔧'} {proj.status}
                  </div>
                </div>

                <p className="project-card-desc">{proj.description}</p>

                {proj.features && (
                  <ul style={{ fontSize: '0.8rem', color: 'var(--text-muted)', paddingLeft: '1.2rem', marginBottom: '1rem' }}>
                    {proj.features.slice(0, 3).map(f => <li key={f}>{f}</li>)}
                  </ul>
                )}

                <div className="project-card-stack">
                  {proj.tech.map(t => <span className="tag" key={t}>{t}</span>)}
                </div>

                <div className="project-card-links">
                  {proj.github && (
                    <a href={proj.github} target="_blank" rel="noreferrer" className="project-link">
                      <FiGithub /> Code
                    </a>
                  )}
                  {proj.demo && (
                    <a href={proj.demo} target="_blank" rel="noreferrer" className="project-link" style={{ color: 'var(--accent-secondary)' }}>
                      <FiExternalLink /> Live Demo
                    </a>
                  )}
                  <div style={{ marginLeft: 'auto', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    ⏱ {proj.timeline}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* All Projects */}
        <div style={{ marginTop: '5rem' }}>
          <div className="section-header">
            <h2 className="section-title">All Projects</h2>
          </div>

          {/* Filter */}
          <div className="projects-filter">
            {categories.map(cat => (
              <button
                key={cat}
                className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="projects-search">
            <FiSearch style={{ color: 'var(--text-muted)' }} />
            <input
              type="text"
              placeholder="Search projects..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>

          {/* Grid */}
          <div className="projects-grid">
            {filtered.map(proj => (
              <div className="project-card" key={proj.id}>
                <div className="project-card-img-wrapper">
                  <div style={{
                    background: proj.gradient,
                    aspectRatio: '16/9',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2.5rem',
                  }}>
                    {proj.id === 'ai-chat-app' && '🤖'}
                    {proj.id === 'ecommerce-platform' && '🛒'}
                    {proj.id === 'devconnect' && '🌐'}
                    {proj.id === 'task-manager' && '✅'}
                    {proj.id === 'weather-dashboard' && '🌤️'}
                    {proj.id === 'django-blog' && '✍️'}
                  </div>
                  <div className="project-card-overlay">
                    {proj.demo && <a href={proj.demo} target="_blank" rel="noreferrer" className="project-overlay-btn">Live</a>}
                    {proj.github && <a href={proj.github} target="_blank" rel="noreferrer" className="project-overlay-btn">Code</a>}
                  </div>
                </div>

                <div className="project-card-body">
                  <h3 className="project-card-title">{proj.title}</h3>
                  <p className="project-card-desc">{proj.description}</p>
                  <div className="project-card-stack">
                    {proj.tech.slice(0, 4).map(t => <span className="tag" key={t}>{t}</span>)}
                  </div>
                  <div className="project-card-links">
                    {proj.github && <a href={proj.github} target="_blank" rel="noreferrer" className="project-link"><FiGithub /> Code</a>}
                    {proj.demo && <a href={proj.demo} target="_blank" rel="noreferrer" className="project-link"><FiExternalLink /> Demo</a>}
                    <span style={{ marginLeft: 'auto', fontSize: '0.7rem', color: 'var(--text-muted)' }} className="tag tag-cyan">{proj.category}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-muted)' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔍</div>
              <p>No projects found matching your search.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
