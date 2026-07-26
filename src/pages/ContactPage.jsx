import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FiGithub, FiLinkedin, FiTwitter, FiMail,
  FiMapPin, FiSend, FiCheck, FiArrowLeft, FiAlertCircle,
} from 'react-icons/fi';
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';
import { personal } from '../data/index';

const CONTACT_API = 'http://localhost:5000/api/contact';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError('');
    try {
      const res = await fetch(CONTACT_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to send.');
      setSent(true);
      setForm({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSent(false), 5000);
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setSending(false);
    }
  };

  const contactDetails = [
    { icon: <FiMail />, label: 'Email', value: personal.email, href: `mailto:${personal.email}` },
    { icon: <FiGithub />, label: 'GitHub', value: 'JaivPatel07', href: personal.github },
    { icon: <FiLinkedin />, label: 'LinkedIn', value: 'jaivpatel07', href: personal.linkedin },
    { icon: <FiMapPin />, label: 'Location', value: personal.location, href: null },
  ];

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 'var(--navbar-height)' }}>
        {/* Page Hero */}
        <div style={{
          background: 'var(--bg-secondary)',
          borderBottom: '1px solid var(--border-color)',
          padding: '4rem 0 3rem',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', top: '-80px', left: '30%',
            width: '400px', height: '400px', borderRadius: '50%',
            background: 'rgba(236,72,153,0.05)', filter: 'blur(80px)', pointerEvents: 'none',
          }} />

          <div className="container" style={{ position: 'relative' }}>
            <Link to="/" style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.875rem',
              marginBottom: '1.5rem', transition: 'color var(--transition-fast)',
            }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-primary)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
            >
              <FiArrowLeft /> Back to Home
            </Link>
            <div className="section-badge" style={{ display: 'inline-block', marginBottom: '1rem' }}>📬 Contact</div>
            <h1 className="section-title" style={{ marginBottom: '1rem' }}>Let's Work Together</h1>
            <p className="section-subtitle" style={{ maxWidth: '540px', margin: '0 auto' }}>
              Whether it's a project, internship, or just a chat — my inbox is always open!
            </p>
          </div>
        </div>

        {/* Contact Body */}
        <section className="section contact-section" id="contact">
          <div className="container">
            <div className="contact-layout">
              {/* Left: Info */}
              <div className="contact-info">
                <h2 className="contact-info-title">
                  Ready to build<br />
                  <span className="gradient-text">something great?</span>
                </h2>
                <p className="contact-info-text">
                  I'm currently available for internship opportunities, freelance projects, and open-source
                  collaborations. Let's connect and create something amazing together!
                </p>

                <div className="contact-details">
                  {contactDetails.map((item, i) => (
                    item.href ? (
                      <a
                        key={i}
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel="noreferrer"
                        className="contact-detail-item"
                      >
                        <div className="contact-detail-icon">{item.icon}</div>
                        <div>
                          <div className="contact-detail-label">{item.label}</div>
                          <div className="contact-detail-value">{item.value}</div>
                        </div>
                      </a>
                    ) : (
                      <div key={i} className="contact-detail-item">
                        <div className="contact-detail-icon">{item.icon}</div>
                        <div>
                          <div className="contact-detail-label">{item.label}</div>
                          <div className="contact-detail-value">{item.value}</div>
                        </div>
                      </div>
                    )
                  ))}
                </div>

                {/* Social links */}
                <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem' }}>
                  {[
                    { icon: <FiGithub />, href: personal.github, color: 'var(--text-primary)' },
                    { icon: <FiLinkedin />, href: personal.linkedin, color: '#0A66C2' },
                    { icon: <FiTwitter />, href: personal.twitter, color: '#1DA1F2' },
                    { icon: <FiMail />, href: `mailto:${personal.email}`, color: 'var(--accent-pink)' },
                  ].map((s, i) => (
                    <a key={i} href={s.href} target="_blank" rel="noreferrer" style={{
                      width: '44px', height: '44px', borderRadius: 'var(--radius-md)',
                      background: 'var(--bg-card)', border: '1px solid var(--border-color)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: 'var(--text-muted)', textDecoration: 'none', fontSize: '1.1rem',
                      transition: 'all var(--transition-normal)',
                    }}
                      onMouseEnter={e => {
                        e.currentTarget.style.color = s.color;
                        e.currentTarget.style.borderColor = s.color;
                        e.currentTarget.style.transform = 'translateY(-2px)';
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.color = 'var(--text-muted)';
                        e.currentTarget.style.borderColor = 'var(--border-color)';
                        e.currentTarget.style.transform = 'translateY(0)';
                      }}
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>

                {/* Response time */}
                <div style={{
                  marginTop: '1.5rem',
                  padding: '1rem 1.25rem',
                  borderRadius: 'var(--radius-md)',
                  background: 'rgba(16,185,129,0.08)',
                  border: '1px solid rgba(16,185,129,0.2)',
                  display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.875rem',
                }}>
                  <span style={{ fontSize: '1.3rem' }}>⚡</span>
                  <div>
                    <div style={{ fontWeight: 600, color: '#10b981' }}>Quick Responder</div>
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Usually replies within 24 hours</div>
                  </div>
                </div>
              </div>

              {/* Right: Form */}
              <div className="contact-form">
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '1.5rem' }}>
                  Send a Message 💌
                </h3>

                <form onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Your Name</label>
                      <input
                        className="form-input"
                        type="text"
                        name="name"
                        placeholder="John Doe"
                        value={form.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Email Address</label>
                      <input
                        className="form-input"
                        type="email"
                        name="email"
                        placeholder="john@example.com"
                        value={form.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Subject</label>
                    <input
                      className="form-input"
                      type="text"
                      name="subject"
                      placeholder="Internship Opportunity / Project Collaboration"
                      value={form.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Message</label>
                    <textarea
                      className="form-textarea"
                      name="message"
                      placeholder="Tell me about your project or opportunity..."
                      value={form.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{ width: '100%', justifyContent: 'center' }}
                    disabled={sending || sent}
                  >
                    {sent ? (
                      <><FiCheck /> Message Sent!</>
                    ) : sending ? (
                      <>Sending...</>
                    ) : (
                      <><FiSend /> Send Message</>
                    )}
                  </button>

                  {sent && (
                    <div style={{
                      marginTop: '1rem', padding: '0.75rem 1rem',
                      borderRadius: 'var(--radius-md)',
                      background: 'rgba(16,185,129,0.1)',
                      border: '1px solid rgba(16,185,129,0.2)',
                      color: '#10b981', fontSize: '0.875rem', textAlign: 'center',
                    }}>
                      ✅ Thanks! I'll get back to you within 24 hours. Check your inbox for a confirmation.
                    </div>
                  )}

                  {error && (
                    <div style={{
                      marginTop: '1rem', padding: '0.75rem 1rem',
                      borderRadius: 'var(--radius-md)',
                      background: 'rgba(239,68,68,0.1)',
                      border: '1px solid rgba(239,68,68,0.2)',
                      color: '#ef4444', fontSize: '0.875rem',
                      display: 'flex', alignItems: 'center', gap: '0.5rem',
                    }}>
                      <FiAlertCircle />
                      {error}
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
