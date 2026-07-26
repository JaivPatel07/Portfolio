import { useState, useRef } from 'react';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiMapPin, FiPhone, FiSend, FiCheck } from 'react-icons/fi';
import { personal } from '../data/index';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    // Simulate sending
    await new Promise(r => setTimeout(r, 1500));
    setSending(false);
    setSent(true);
    setForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSent(false), 4000);
  };

  const contactDetails = [
    { icon: <FiMail />, label: 'Email', value: personal.email, href: `mailto:${personal.email}` },
    { icon: <FiGithub />, label: 'GitHub', value: 'JaivPatel07', href: personal.github },
    { icon: <FiLinkedin />, label: 'LinkedIn', value: 'jaivpatel07', href: personal.linkedin },
    { icon: <FiMapPin />, label: 'Location', value: personal.location, href: null },
  ];

  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">📬 Contact</div>
          <h2 className="section-title">Let's Work Together</h2>
          <p className="section-subtitle">
            Whether it's a project, internship, or just a chat — my inbox is always open!
          </p>
        </div>

        <div className="contact-layout">
          {/* Left: Info */}
          <div className="contact-info">
            <h3 className="contact-info-title">
              Ready to build<br />
              <span className="gradient-text">something great?</span>
            </h3>
            <p className="contact-info-text">
              I'm currently available for internship opportunities, freelance projects, and open-source collaborations.
              Let's connect and create something amazing together!
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

            {/* Response time */}
            <div style={{
              padding: '1rem 1.25rem',
              borderRadius: 'var(--radius-md)',
              background: 'rgba(16,185,129,0.08)',
              border: '1px solid rgba(16,185,129,0.2)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              fontSize: '0.875rem',
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
                  marginTop: '1rem',
                  padding: '0.75rem 1rem',
                  borderRadius: 'var(--radius-md)',
                  background: 'rgba(16,185,129,0.1)',
                  border: '1px solid rgba(16,185,129,0.2)',
                  color: '#10b981',
                  fontSize: '0.875rem',
                  textAlign: 'center',
                }}>
                  ✅ Thanks! I'll get back to you within 24 hours.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
