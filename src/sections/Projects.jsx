import { useMemo, useState } from 'react';
import { FiArrowRight, FiFolder, FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/index';

const categories = ['All', 'Full Stack', 'Developer Tool', 'AI', 'Data Science', 'Game'];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();

    return projects.filter((project) => {
      const matchCat =
        activeFilter === 'All' ||
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

  const visibleProjects = filtered.slice(0, 6);

  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <FiFolder /> <span>Selected Work</span>
          </div>
          <h2 className="section-title">Featured Builds &amp; Products</h2>
          <p className="section-subtitle">
            Click any project card to open its architecture breakdown, feature list, and live links.
          </p>
        </div>

        <div className="projects-controls-bar">
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

          <label className="projects-search">
            <FiSearch />
            <input
              type="search"
              placeholder="Filter by name, stack, or keyword..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
          </label>
        </div>

        <div className="projects-grid">
          {visibleProjects.map((project) => (
            <ProjectCard project={project} key={project.id} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="projects-not-found">
            <h3>No matching projects</h3>
            <p>Try clearing the search query or switching to a different category.</p>
          </div>
        )}

        <div className="projects-load-more">
          <Link className="btn btn-primary" to="/projects">
            <span>Explore Full Archive ({projects.length} Projects)</span>
            <FiArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}
