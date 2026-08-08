import { useMemo, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import ProjectCard from '../components/ProjectCard';
import Footer from '../layouts/Footer';
import Navbar from '../layouts/Navbar';
import { projects } from '../data/index';

const categories = ['All', 'Full Stack', 'AI', 'Tools', 'Data Science', 'Developer Tool'];

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
        <section className="section" id="projects">
          <div className="container">
            <div className="section-header">
              <div className="section-badge">Projects</div>
              <h1 className="section-title">All Projects</h1>
              <p className="section-subtitle">
                A complete archive of my projects, from full-stack apps to developer tools.
              </p>
            </div>
            <div className="projects-controls archive-controls">
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
              <div className="projects-search">
                <FiSearch />
                <input
                  type="search"
                  placeholder="Search projects..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>

            {featured.length > 0 && (
              <div className="project-category-wrapper">
                <h2 className="project-category-title"><span className="project-category-icon">⭐</span> Featured Projects</h2>
                <div className="featured-projects-grid">
                  {featured.map((project) => (
                    <ProjectCard project={project} featured key={project.id} />
                  ))}
                </div>
              </div>
            )}

            {others.length > 0 && (
              <div className="project-category-wrapper">
                <h2 className="project-category-title"><span className="project-category-icon">🚀</span> More Projects</h2>
                <div className="projects-grid">
                  {others.map((project) => (
                    <ProjectCard project={project} key={project.id} />
                  ))}
                </div>
              </div>
            )}

            {filteredProjects.length === 0 && (
              <div className="projects-not-found">
                <h3>No projects found</h3>
                <p>Try a different filter or search term.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
