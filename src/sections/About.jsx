import { personal } from '../data/index';

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
        <div className="section-badge">About Me</div>
        <h2 className="section-title" style={{ margin: '0 auto var(--spacing-md)' }}>Building Practical Software</h2>
        <p className="about-lead" style={{ fontSize: '1.2rem', color: 'var(--text-primary)', marginBottom: 'var(--spacing-md)', lineHeight: '1.8' }}>
          {personal.bio}
        </p>
        <p style={{ maxWidth: '650px', margin: '0 auto', color: 'var(--text-secondary)' }}>
          I focus on turning ideas into reliable web experiences: clear UI, maintainable code,
          useful APIs, and details that make a product feel finished.
        </p>
      </div>
    </section>
  );
}
