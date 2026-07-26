import { useMemo, useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import Footer from '../layouts/Footer';
import Navbar from '../layouts/Navbar';
import { projects } from '../data/index';

const categories = ['All', 'Full Stack', 'AI', 'Tools', 'Data Science', 'Django', 'React'];

export default function ProjectsPage() {
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

  return (
    <>
      <Navbar />
      <main className="page-main">
        <section className="section" id="projects">
          <div className="container">
             <div className="section-header">
              <h1 className="section-title">My Projects</h1>
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
            </div>

            <div className="projects-grid">
              {filtered.map((project) => (
                <ProjectCard project={project} key={project.id} />
              ))}
            </div>

            {filtered.length === 0 && (
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
