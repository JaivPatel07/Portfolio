import { blogPosts } from '../data/index';
import { FiArrowRight, FiClock } from 'react-icons/fi';

export default function Blog() {
  return (
    <section className="section" id="blog">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">✍️ Blog</div>
          <h2 className="section-title">Latest Articles</h2>
          <p className="section-subtitle">
            Sharing what I learn — tutorials, insights, and deep dives into tech.
          </p>
        </div>

        <div className="grid-3">
          {blogPosts.map((post, i) => (
            <article
              key={post.id}
              className="glass-card"
              style={{
                padding: '0',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'all var(--transition-normal)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.borderColor = 'var(--border-hover)';
                e.currentTarget.style.boxShadow = 'var(--shadow-accent)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = '';
                e.currentTarget.style.borderColor = '';
                e.currentTarget.style.boxShadow = '';
              }}
            >
              {/* Gradient Header */}
              <div style={{
                background: post.gradient,
                padding: '2rem',
                display: 'flex',
                alignItems: 'flex-end',
                minHeight: '120px',
                position: 'relative',
              }}>
                {post.featured && (
                  <div style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    padding: '0.2rem 0.6rem',
                    borderRadius: 'var(--radius-full)',
                    background: 'rgba(255,255,255,0.2)',
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    color: 'white',
                  }}>
                    ⭐ Featured
                  </div>
                )}
                <span style={{
                  padding: '0.3rem 0.8rem',
                  borderRadius: 'var(--radius-full)',
                  background: 'rgba(255,255,255,0.2)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: 'white',
                  backdropFilter: 'blur(10px)',
                }}>
                  {post.category}
                </span>
              </div>

              <div style={{ padding: '1.25rem' }}>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: '1rem',
                  fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.75rem',
                }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    <FiClock /> {post.readTime} read
                  </span>
                  <span>{post.date}</span>
                </div>

                <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.6rem', lineHeight: 1.4 }}>
                  {post.title}
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
                  {post.summary}
                </p>

                <div style={{
                  display: 'flex', alignItems: 'center', gap: '0.3rem',
                  fontSize: '0.85rem', fontWeight: 600, color: 'var(--accent-primary)',
                }}>
                  Read more <FiArrowRight />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
