export default function Skills() {
  return (
    <section className="section skills-section" id="skills" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className="section-header skills-header-compact" style={{ textAlign: 'center' }}>
          <div className="section-badge">Highlights</div>
          <h2 className="section-title">Development Snapshot</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            A compact view of my GitHub activity and coding profile.
          </p>
        </div>

        <div className="skills-snapshot-frame" style={{ display: 'flex', justifyContent: 'center', width: '100%', marginTop: 'var(--spacing-lg)' }}>
          <img
            src="https://samdev-pulse.vercel.app/api/profile?username=JaivPatel07&theme=midnightneon"
            alt="samdev-pulse"
            style={{ maxWidth: '100%', height: 'auto', display: 'block', margin: '0 auto' }}
          />
        </div>
      </div>
    </section>
  );
}
