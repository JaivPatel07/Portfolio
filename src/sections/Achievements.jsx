import { achievements } from '../data/index';

export default function Achievements() {
  return (
    <section className="section" id="achievements">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">🏆 Achievements</div>
          <h2 className="section-title">Milestones & Awards</h2>
          <p className="section-subtitle">
            Recognition from hackathons, competitions, certifications, and open-source contributions.
          </p>
        </div>

        <div className="achievements-grid">
          {achievements.map((item, i) => (
            <div className="achievement-card" key={i} style={{
              '--achievement-color': item.color,
            }}>
              <div className="achievement-icon-wrapper" style={{
                background: `${item.color}15`,
                border: `1px solid ${item.color}30`,
              }}>
                <span>{item.icon}</span>
              </div>
              <h3 className="achievement-title">{item.title}</h3>
              <p className="achievement-desc">{item.desc}</p>
              <div className="achievement-meta">
                <span>📍</span>
                <span>{item.meta}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
