import { useState } from 'react';
import {
  FiAlertCircle,
  FiCheck,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiSend,
} from 'react-icons/fi';
import Footer from '../layouts/Footer';
import Navbar from '../layouts/Navbar';
import { personal } from '../data/index';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (event) => {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSending(true);
    setError('');

    const formData = {
      access_key: personal.web3formsKey,
      ...form,
      from_name: "Jaiv Portfolio",
      replyto: form.email,
    };

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!data.success) {
        throw new Error(data.message || "Failed to send.");
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
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setSending(false);
    }
  };

  const contactDetails = [
    { icon: <FiMail />, label: 'Email', value: personal.email, href: `mailto:${personal.email}` },
    { icon: <FiGithub />, label: 'GitHub', value: 'JaivPatel07', href: personal.github },
    { icon: <FiLinkedin />, label: 'LinkedIn', value: 'jaivpatel07', href: personal.linkedin },
    { icon: <FiMapPin />, label: 'Location', value: personal.location },
  ];

  const socials = [
    { icon: <FiGithub />, href: personal.github, label: 'GitHub' },
    { icon: <FiLinkedin />, href: personal.linkedin, label: 'LinkedIn' },
    { icon: <FiMail />, href: `mailto:${personal.email}`, label: 'Email' },
  ];

  return (
    <>
      <Navbar />
      <main className="page-main">


        <section className="section contact-section" id="contact">
          <div className="container">
            <div className="contact-layout improved-contact-layout">
              <aside className="contact-info contact-panel">
                <h2 className="contact-info-title">
                  Ready to build
                  <span className="gradient-text"> something useful?</span>
                </h2>
                <p className="contact-info-text">
                  I am open to internships, freelance work, and meaningful software collaborations.
                </p>

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
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel="noreferrer"
                        className="contact-detail-item"
                      >
                        {content}
                      </a>
                    ) : (
                      <div key={item.label} className="contact-detail-item">{content}</div>
                    );
                  })}
                </div>

                <div className="contact-social-row">
                  {socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target={social.href.startsWith('http') ? '_blank' : undefined}
                      rel="noreferrer"
                      className="contact-social-link"
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </aside>

              <div className="contact-form">
                <h2 className="contact-form-title">Send a Message</h2>
                <form onSubmit={handleSubmit}>
                  {/* Honeypot for spam protection */}
                  <input
                    type="checkbox"
                    name="botcheck"
                    style={{ display: "none" }}
                  />
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="name">Your Name</label>
                      <input id="name" className="form-input" type="text" name="name" value={form.name} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="email">Email Address</label>
                      <input id="email" className="form-input" type="email" name="email" value={form.email} onChange={handleChange} required />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="subject">Subject</label>
                    <input id="subject" className="form-input" type="text" name="subject" value={form.subject} onChange={handleChange} required />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="message">Message</label>
                    <textarea id="message" className="form-textarea" name="message" value={form.message} onChange={handleChange} required />
                  </div>

                  <button type="submit" className="btn btn-primary contact-submit" disabled={sending || sent}>
                    {sent ? (
                      <><FiCheck /> Message Sent</>
                    ) : sending ? (
                      <><span className="spinner" /> Sending...</>
                    ) : (
                      <><FiSend /> Send Message</>
                    )}
                  </button>

                  {showAlert && <div className="form-alert success fade-in-out">Thanks. I will get back to you soon.</div>}
                  {error && <div className="form-alert error"><FiAlertCircle /> {error}</div>}
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
