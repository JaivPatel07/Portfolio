import { useMemo, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/index';

const categories = ['All', 'Full Stack', 'AI', 'Tools', 'Data Science', 'Open Source'];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();

    return projects.filter((project) => {
      const matchCat =
        activeFilter === 'All' ||
        (activeFilter === 'Open Source' && Boolean(project.github)) ||
        project.category === activeFilter ||
        project.tech.includes(activeFilter);

      const matchSearch =
        !query ||
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.tech.some((tech) => tech.toLowerCase().includes(query));

      return matchCat && matchSearch;
    });
  }, [activeFilter, search]);

  const visibleProjects = filtered.slice(0, 3);

  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">Projects</div>
          <h2 className="section-title">Some Things I've Built</h2>
          <p className="section-subtitle">
            From full-stack applications to AI tools, here are some projects that show how I think,
            design, and ship.
          </p>
        </div>

        <div className="projects-controls">
          <label className="projects-search">
            <FiSearch />
            <input
              type="search"
              placeholder="Search by name or technology..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
          </label>
          <div className="projects-filter" aria-label="Project filters">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="projects-grid">
          {visibleProjects.map((project) => (
            <ProjectCard project={project} key={project.id} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="projects-not-found">
            <h3>No projects found</h3>
            <p>Try clearing the search or selecting a different filter.</p>
          </div>
        )}

        {filtered.length > 3 && (
          <div className="projects-load-more">
            <Link className="btn btn-secondary" to="/projects">View All Projects</Link>
          </div>
        )}
      </div>
    </section>
  );
}
