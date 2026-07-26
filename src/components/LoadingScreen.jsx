import { useEffect, useState } from 'react';

export default function LoadingScreen({ onDone }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const start = Date.now();
    const duration = 1800;
    const timer = setInterval(() => {
      const elapsed = Date.now() - start;
      const pct = Math.min((elapsed / duration) * 100, 100);
      setProgress(pct);
      if (pct >= 100) {
        clearInterval(timer);
        setTimeout(onDone, 200);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [onDone]);

  return (
    <div className="loading-screen">
      <div className="loading-logo">&lt;JP /&gt;</div>
      <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', fontFamily: 'var(--font-mono)' }}>
        Loading portfolio...
      </div>
      <div className="loading-bar">
        <div className="loading-bar-fill" style={{ width: `${progress}%`, animation: 'none' }} />
      </div>
      <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem', fontFamily: 'var(--font-mono)' }}>
        {Math.round(progress)}%
      </div>
    </div>
  );
}
