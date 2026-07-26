export default function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <div className="container">
        <div className="section-header">
          <div className="section-badge"> Highlights</div>
          <h2 className="section-title">Development Snapshot</h2>
          <p className="section-subtitle">
            A few key metrics from my development journey.
          </p>
        </div>

        <div style={{
          marginTop: '2rem',
          display: 'flex',
          justifyContent: 'center',
        }}>
          <img
            src="https://samdev-pulse.vercel.app/api/profile?username=JaivPatel07&theme=midnightneon"
            alt="samdev-pulse"
            style={{ maxWidth: '900px', width: '100%', borderRadius: 'var(--radius-md)' }}
          />
        </div>
      </div>
    </section>
  );
}
