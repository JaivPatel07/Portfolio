import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FiAlertCircle,
  FiArrowLeft,
  FiCheck,
  FiCopy,
  FiFileText,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiSend,
} from 'react-icons/fi';
import SpotlightCard from '../components/SpotlightCard';
import Footer from '../layouts/Footer';
import Navbar from '../layouts/Navbar';
import { personal } from '../data/index';

const quickSubjects = [
  'Internship Opportunity',
  'Full-Stack Collaboration',
  'AI / Data Project',
  'General Inquiry',
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [error, setError] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleChange = (event) => {
    setForm((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
  };

  const handleCopyEmail = () => {
    navigator.clipboard?.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSending(true);
    setError('');

    const formData = {
      ...form,
      _subject: form.subject || 'New message from Jaiv Portfolio',
      _template: 'table',
      _captcha: 'false',
    };

    try {
      const res = await fetch(
        'https://formsubmit.co/ajax/jaivpatel402@gmail.com',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || 'Failed to send.');
      }

      setSent(true);
      setShowAlert(true);
      setForm({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => {
        setShowAlert(false);
        setSent(false);
      }, 5000);
    } catch (err) {
      setSent(false);
      setShowAlert(false);
      setError(err instanceof Error ? err.message : 'Something went wrong.');
    } finally {
      setSending(false);
    }
  };

  const contactDetails = [
    {
      icon: <FiMail />,
      label: 'Direct Email',
      value: personal.email,
      href: `mailto:${personal.email}`,
    },
    {
      icon: <FiGithub />,
      label: 'GitHub',
      value: 'github.com/JaivPatel07',
      href: personal.github,
    },
    {
      icon: <FiLinkedin />,
      label: 'LinkedIn',
      value: 'in/jaiv-patel',
      href: personal.linkedin,
    },
    {
      icon: <FiMapPin />,
      label: 'Location',
      value: 'Ahmedabad, Gujarat, India',
    },
  ];

  return (
    <>
      <Navbar />
      <main className="page-main">
        <section className="section contact-section" id="contact">
          <div className="container">
            <Link to="/" className="page-back-link">
              <FiArrowLeft /> <span>Back to Home</span>
            </Link>

            <div className="section-header">
              <div className="section-badge">
                <FiMail /> <span>Get In Touch</span>
              </div>
              <h1 className="section-title">Let&apos;s Start a Conversation</h1>
              <p className="section-subtitle">
                Open to software engineering internships, freelance full-stack builds, and ambitious AI collaborations.
              </p>
            </div>

            <div className="contact-layout">
              <SpotlightCard as="aside" className="contact-info contact-panel">
                <div className="hero-status-pill" style={{ width: 'fit-content' }}>
                  <span className="pulse-dot" />
                  <span>Typically responds within 24h</span>
                </div>

                <h2 className="contact-info-title">
                  Ready to build{' '}
                  <span className="gradient-text">something impactful?</span>
                </h2>
                <p className="contact-info-text">
                  Reach out directly via email or fill out the form. You can also grab my latest resume below.
                </p>

                <div className="contact-quick-btns">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={handleCopyEmail}
                  >
                    {copiedEmail ? <FiCheck /> : <FiCopy />}
                    <span>{copiedEmail ? 'Email Copied!' : 'Copy Email'}</span>
                  </button>
                  <a
                    href={personal.resume}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-ghost"
                  >
                    <FiFileText />
                    <span>Resume PDF</span>
                  </a>
                </div>

                <div className="contact-details">
                  {contactDetails.map((item) => {
                    const content = (
                      <>
                        <div className="contact-detail-icon">{item.icon}</div>
                        <div>
                          <div className="contact-detail-label">{item.label}</div>
                          <div className="contact-detail-value">{item.value}</div>
                        </div>
                      </>
                    );

                    return item.href ? (
                      <a
                        key={item.label}
                        href={item.href}
                        target={
                          item.href.startsWith('http') ? '_blank' : undefined
                        }
                        rel="noreferrer"
                        className="contact-detail-item"
                      >
                        {content}
                      </a>
                    ) : (
                      <div key={item.label} className="contact-detail-item">
                        {content}
                      </div>
                    );
                  })}
                </div>
              </SpotlightCard>

              <SpotlightCard className="contact-form">
                <h2 className="contact-form-title">Send a Direct Message</h2>

                <div className="contact-topic-chips">
                  <span className="topic-chip-label">Quick Topic:</span>
                  {quickSubjects.map((topic) => (
                    <button
                      type="button"
                      key={topic}
                      className={`topic-chip ${
                        form.subject === topic ? 'active' : ''
                      }`}
                      onClick={() =>
                        setForm((prev) => ({ ...prev, subject: topic }))
                      }
                    >
                      {topic}
                    </button>
                  ))}
                </div>

                <form onSubmit={handleSubmit}>
                  <input
                    type="checkbox"
                    name="botcheck"
                    style={{ display: 'none' }}
                  />
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="name">
                        Your Name
                      </label>
                      <input
                        id="name"
                        className="form-input"
                        type="text"
                        name="name"
                        placeholder="Alex Rivera"
                        value={form.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="email">
                        Email Address
                      </label>
                      <input
                        id="email"
                        className="form-input"
                        type="email"
                        name="email"
                        placeholder="alex@company.com"
                        value={form.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="subject">
                      Subject
                    </label>
                    <input
                      id="subject"
                      className="form-input"
                      type="text"
                      name="subject"
                      placeholder="Software Engineering Internship / Project Inquiry"
                      value={form.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="message">
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="form-textarea"
                      name="message"
                      placeholder="Tell me about your team, project timeline, or how we can collaborate..."
                      value={form.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary contact-submit"
                    disabled={sending || sent}
                  >
                    {sent ? (
                      <>
                        <FiCheck /> Message Sent
                      </>
                    ) : sending ? (
                      <>
                        <span className="spinner" /> Sending...
                      </>
                    ) : (
                      <>
                        <FiSend /> Send Message
                      </>
                    )}
                  </button>

                  {showAlert && (
                    <div className="form-alert success fade-in-out">
                      Thanks! Your message has been sent — I&apos;ll get back to you soon.
                    </div>
                  )}
                  {error && (
                    <div className="form-alert error">
                      <FiAlertCircle /> {error}
                    </div>
                  )}
                </form>
              </SpotlightCard>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
