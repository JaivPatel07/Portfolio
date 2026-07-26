import { useMemo, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import ProjectCard from '../components/ProjectCard';
import MiniProjectCard from '../components/MiniProjectCard';
import Footer from '../layouts/Footer';
import Navbar from '../layouts/Navbar';
import { projects } from '../data/index';

const categories = ['All', 'Full Stack', 'AI', 'Tools', 'Data Science', 'Django', 'React'];

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
  const standard = filteredProjects.filter((p) => p.type === 'standard');
  const mini = filteredProjects.filter((p) => p.type === 'mini');

  return (
    <>
      <Navbar />
      <main className="page-main">
        <section className="section" id="projects">
          <div className="container">
            <div className="section-header">
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
                <div className="projects-grid">
                  {featured.map((project) => (
                    <ProjectCard project={project} key={project.id} />
                  ))}
                </div>
              </div>
            )}

            {standard.length > 0 && (
              <div className="project-category-wrapper">
                <h2 className="project-category-title"><span className="project-category-icon">🚀</span> More Projects</h2>
                <div className="projects-grid">
                  {standard.map((project) => (
                    <ProjectCard project={project} key={project.id} />
                  ))}
                </div>
              </div>
            )}

            {mini.length > 0 && (
              <div className="project-category-wrapper">
                <h2 className="project-category-title"><span className="project-category-icon">🎮</span> Mini Projects</h2>
                <div className="mini-projects-grid">
                  {mini.map((project) => (
                    <MiniProjectCard project={project} key={project.id} />
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
