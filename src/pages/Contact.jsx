import React, { useState } from 'react';
import { useToast } from '../contexts/ToastContext';

export default function Contact() {
  const { showToast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    showToast('Message sent. We will get back to you shortly.');
  };

  return (
    <section className="block">
      <div className="wrap" style={{ maxWidth: 640 }}>
        <div className="panel" style={{ padding: 32 }}>
          <h1 style={{ fontSize: 30, marginBottom: 8 }}>Contact Pawhome</h1>
          <p className="sub">
            Have a question about a rescue pet, want to partner as a registered shelter, or need adoption advice? Send us a message.
          </p>

          {submitted ? (
            <div style={{ background: '#D9F1E4', color: 'var(--ok)', padding: 24, borderRadius: 16, textAlign: 'center' }}>
              <div style={{ fontSize: 36, marginBottom: 8 }}>🐾</div>
              <h3>Thank you for reaching out!</h3>
              <p style={{ marginTop: 6, fontSize: 15 }}>
                Our adoption coordinators will respond to your email within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="field">
                <label htmlFor="cName">Your Name</label>
                <input
                  id="cName"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Riya Sharma"
                  required
                />
              </div>

              <div className="field">
                <label htmlFor="cEmail">Email Address</label>
                <input
                  id="cEmail"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@example.com"
                  required
                />
              </div>

              <div className="field">
                <label htmlFor="cSubject">Subject</label>
                <input
                  id="cSubject"
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Inquiry regarding adoption process or partner shelter"
                  required
                />
              </div>

              <div className="field">
                <label htmlFor="cMsg">Message</label>
                <textarea
                  id="cMsg"
                  rows="4"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="How can our rescue team assist you?"
                  required
                />
              </div>

              <button type="submit" className="btn" style={{ width: '100%', marginTop: 8 }}>
                Send message
              </button>
            </form>
          )}

          <div style={{ borderTop: '1px solid var(--line)', marginTop: 28, paddingTop: 20, fontSize: 14, color: 'var(--muted)' }}>
            <p>Direct Support Email: <b>support@pawhome.org</b></p>
            <p style={{ marginTop: 4 }}>Shelter Inquiries: <b>shelters@pawhome.org</b></p>
          </div>
        </div>
      </div>
    </section>
  );
}
