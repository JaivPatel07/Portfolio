export default function NotFound() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      gap: '1.5rem',
      padding: '2rem',
      background: 'var(--bg-primary)',
    }}>
      <div style={{
        fontSize: '8rem',
        lineHeight: 1,
        filter: 'drop-shadow(0 0 40px rgba(124,58,237,0.3))',
      }}>
        🚀
      </div>

      <div style={{
        fontSize: 'clamp(4rem, 10vw, 8rem)',
        fontWeight: 900,
        background: 'var(--gradient-primary)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        lineHeight: 1,
      }}>
        404
      </div>

      <h1 style={{ fontSize: '1.5rem', fontWeight: 700 }}>
        Houston, we have a problem.
      </h1>
      <p style={{ color: 'var(--text-secondary)', maxWidth: '400px' }}>
        The page you're looking for has drifted off into the void of cyberspace.
        Let's get you back to safety.
      </p>

      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <button
          className="btn btn-primary"
          onClick={() => window.location.href = '/'}
        >
          🏠 Back to Home
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => window.history.back()}
        >
          ← Go Back
        </button>
      </div>

      <div style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '0.8rem',
        color: 'var(--text-muted)',
        padding: '0.75rem 1.5rem',
        borderRadius: 'var(--radius-md)',
        background: 'var(--bg-glass)',
        border: '1px solid var(--border-color)',
      }}>
        Error: Page not found at {window.location.pathname}
      </div>
    </div>
  );
}
