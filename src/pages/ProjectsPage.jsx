import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FiArrowLeft,
  FiCode,
  FiFolder,
  FiLayers,
  FiSearch,
  FiStar,
} from 'react-icons/fi';
import ProjectCard from '../components/ProjectCard';
import Footer from '../layouts/Footer';
import Navbar from '../layouts/Navbar';
import { projects } from '../data/index';

const categories = ['All', 'Full Stack', 'Developer Tool', 'AI', 'Data Science', 'Game'];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [search, setSearch] = useState('');

  const filteredProjects = useMemo(() => {
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

  const featured = filteredProjects.filter((p) => p.type === 'featured');
  const others = filteredProjects.filter((p) => p.type !== 'featured');

  return (
    <>
      <Navbar />
      <main className="page-main">
        <section className="section" id="projects-archive">
          <div className="container">
            <Link to="/" className="page-back-link">
              <FiArrowLeft /> <span>Back to Home</span>
            </Link>

            <div className="section-header">
              <div className="section-badge">
                <FiFolder /> <span>Complete Archive</span>
              </div>
              <h1 className="section-title">All Projects &amp; Experiments</h1>
              <p className="section-subtitle">
                A complete directory of {projects.length} full-stack web apps, developer tools, AI dashboards, and interactive games.
              </p>
            </div>

            <div className="projects-controls-bar archive-controls">
              <div className="projects-filter" aria-label="Project filters">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
                    onClick={() => setActiveFilter(cat)}
                    type="button"
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <label className="projects-search">
                <FiSearch />
                <input
                  type="search"
                  placeholder="Search projects or technologies..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </label>
            </div>

            {featured.length > 0 && (
              <div className="project-category-wrapper">
                <h2 className="project-category-title">
                  <FiStar className="project-category-icon" />
                  <span>Flagship Applications ({featured.length})</span>
                </h2>
                <div className="featured-projects-grid">
                  {featured.map((project) => (
                    <ProjectCard project={project} featured key={project.id} />
                  ))}
                </div>
              </div>
            )}

            {others.length > 0 && (
              <div className="project-category-wrapper">
                <h2 className="project-category-title">
                  <FiCode className="project-category-icon" />
                  <span>Standard &amp; Mini Builds ({others.length})</span>
                </h2>
                <div className="projects-grid">
                  {others.map((project) => (
                    <ProjectCard project={project} key={project.id} />
                  ))}
                </div>
              </div>
            )}

            {filteredProjects.length === 0 && (
              <div className="projects-not-found">
                <FiLayers style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }} />
                <h3>No projects match your filter</h3>
                <p>Try clearing the search query or selecting &quot;All&quot;.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
