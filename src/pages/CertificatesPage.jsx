import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FiArrowLeft,
  FiAward,
  FiExternalLink,
  FiMaximize2,
  FiSearch,
  FiX,
} from 'react-icons/fi';
import SpotlightCard from '../components/SpotlightCard';
import Footer from '../layouts/Footer';
import Navbar from '../layouts/Navbar';
import { achievements } from '../data/index';

const filterCats = [
  'All',
  'Coursera',
  'Google',
  'IBM',
  'Programming',
  'Hackathon',
];

function CertificateCard({ item, onInspect }) {
  return (
    <SpotlightCard
      as="article"
      tilt
      className="certificate-image-card"
      onClick={() => onInspect(item)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onInspect(item);
        }
      }}
    >
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
        <div className="certificate-inspect-badge">
          <FiMaximize2 /> Inspect
        </div>
        <div className="certificate-text-overlay">
          <span className="certificate-overlay-issuer">{item.issuer}</span>
          <h3 className="certificate-overlay-title">{item.title}</h3>
        </div>
      </div>
    </SpotlightCard>
  );
}

export default function CertificatesPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [search, setSearch] = useState('');
  const [activeCert, setActiveCert] = useState(null);

  const filteredCategories = useMemo(() => {
    const query = search.trim().toLowerCase();

    return achievements.categories
      .map((category) => ({
        ...category,
        list: category.list.filter((item) => {
          const matchCat =
            activeFilter === 'All' || item.category === activeFilter;
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
            <Link to="/" className="page-back-link">
              <FiArrowLeft /> <span>Back to Home</span>
            </Link>

            <div className="section-header">
              <div className="section-badge">
                <FiAward /> <span>Verified Credentials</span>
              </div>
              <h1 className="section-title">Certifications &amp; Hackathons</h1>
              <p className="section-subtitle">
                Click any certificate to inspect it in full resolution or open the verified credential link.
              </p>
            </div>

            {/* Summary Stats Row */}
            <div className="cert-stats-bento-row">
              {achievements.stats.map((st) => (
                <SpotlightCard className="cert-stat-card" key={st.label}>
                  <span className="cert-stat-val">{st.value}</span>
                  <span className="cert-stat-lbl">{st.label}</span>
                </SpotlightCard>
              ))}
            </div>

            <div className="projects-controls-bar archive-controls">
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

              <label className="projects-search">
                <FiSearch />
                <input
                  type="search"
                  placeholder="Search by title or issuer..."
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                />
              </label>
            </div>

            <div className="certificate-structure">
              {filteredCategories.map((category) => (
                <section className="certificate-category" key={category.title}>
                  <h2 className="certificate-category-title">
                    <FiAward className="project-category-icon" />
                    <span>{category.title}</span>
                  </h2>
                  <div className="certificate-grid">
                    {category.list.map((item) => (
                      <CertificateCard
                        item={item}
                        key={item.title}
                        onInspect={setActiveCert}
                      />
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

      {/* Certificate Lightbox Modal */}
      {activeCert && (
        <div
          className="project-modal-backdrop"
          onClick={() => setActiveCert(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="project-modal-window cert-modal-window"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="project-modal-chrome">
              <div className="window-dots">
                <button
                  type="button"
                  className="window-dot dot-red"
                  onClick={() => setActiveCert(null)}
                  aria-label="Close preview"
                />
                <span className="window-dot dot-amber" />
                <span className="window-dot dot-green" />
              </div>
              <div className="window-title-bar">
                <FiAward />
                <span>{activeCert.issuer} — {activeCert.date}</span>
              </div>
              <button
                type="button"
                className="project-modal-close"
                onClick={() => setActiveCert(null)}
                aria-label="Close modal"
              >
                <FiX />
              </button>
            </div>

            <div className="cert-modal-img-stage">
              <img src={activeCert.thumbnail} alt={activeCert.title} />
            </div>

            <div className="project-modal-body">
              <div className="cert-modal-footer-row">
                <div>
                  <span className="tag tag-cyan">{activeCert.category}</span>
                  <h3 className="cert-modal-title">{activeCert.title}</h3>
                  <p className="cert-modal-sub">
                    Issued by {activeCert.issuer} • {activeCert.date}
                  </p>
                </div>
                <a
                  href={activeCert.link}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                >
                  <FiExternalLink /> Open Verified Link
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
