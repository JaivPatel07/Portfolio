import { useMemo, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import Footer from '../layouts/Footer';
import Navbar from '../layouts/Navbar';
import { achievements } from '../data/index';

const filterCats = ['All', 'Professional Courses', 'Programming', 'AI / Data Science', 'Hackathon', 'Coursera', 'Google', 'IBM'];

function CertificateCard({ item }) {
  return (
    <a href={item.link} target="_blank" rel="noreferrer" className="certificate-card-link">
      <article className="certificate-image-card">
        <div className="certificate-img-container">
          <div className="certificate-image-fallback">
            <span>{item.issuer}</span>
          </div>
          <img
            src={item.thumbnail}
            alt={item.title}
            loading="lazy"
            onError={(event) => {
              event.currentTarget.style.display = 'none';
            }}
          />
          <div className="certificate-year-badge">{item.date}</div>
          <div className="certificate-text-overlay">
            <h3 className="certificate-overlay-title">{item.title}</h3>
            <p className="certificate-overlay-issuer">{item.issuer}</p>
          </div>
        </div>
      </article>
    </a>
  );
}

export default function CertificatesPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [search, setSearch] = useState('');

  const filteredCategories = useMemo(() => {
    const query = search.trim().toLowerCase();

    return achievements.categories
      .map((category) => ({
        ...category,
        list: category.list.filter((item) => {
          const matchCat = activeFilter === 'All' || item.category === activeFilter;
          const matchSearch =
            !query ||
            item.title.toLowerCase().includes(query) ||
            item.issuer.toLowerCase().includes(query);

          return matchCat && matchSearch;
        }),
      }))
      .filter((category) => category.list.length > 0);
  }, [activeFilter, search]);

  return (
    <>
      <Navbar />
      <main className="page-main">
        <section className="section" id="certificates">
          <div className="container">
            <div className="section-header">
              <div className="section-badge">Certificates</div>
              <h1 className="section-title">Achievements & Certifications</h1>
              <p className="section-subtitle">
                A clean archive of certificates, hackathons, courses, and verified learning milestones.
              </p>
            </div>

            <div className="certificate-controls">
              <label className="projects-search">
                <FiSearch />
                <input
                  type="search"
                  placeholder="Search certificates..."
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                />
              </label>
              <div className="projects-filter" aria-label="Certificate filters">
                {filterCats.map((cat) => (
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

            <div className="certificate-structure">
              {filteredCategories.map((category) => (
                <section className="certificate-category" key={category.title}>
                  <h2 className="certificate-category-title">{category.title}</h2>
                  <div className="certificate-grid">
                    {category.list.map((item) => (
                      <CertificateCard item={item} key={item.title} />
                    ))}
                  </div>
                </section>
              ))}
            </div>

            {filteredCategories.length === 0 && (
              <div className="projects-not-found">
                <h3>No certificates found</h3>
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
